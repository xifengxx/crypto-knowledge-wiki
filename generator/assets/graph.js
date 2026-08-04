// 知识图谱前端：中心辐射式力导布局 + 悬停显示节点连接
(function () {
  'use strict';
  const CAT_COLORS = { concepts: '#2563EB', entities: '#059669', theses: '#B45309', synthesis: '#6B7280' };
  const CAT_LABELS = { concepts: '概念', entities: '实体', theses: '论点', synthesis: '来源' };

  const canvas = document.getElementById('graph-canvas');
  const wrap = document.getElementById('graph-canvas-wrap');
  const tooltip = document.getElementById('graph-tooltip');
  const statusEl = document.getElementById('graph-status');
  const statsEl = document.getElementById('g-stats');
  if (!canvas || !wrap) return;
  const g2d = canvas.getContext('2d');

  let graph = null;
  let byId = new Map();
  let neighbors = new Map(); // id → Set(邻居 id)
  let transform = { x: 0, y: 0, scale: 1 };
  let fitScale = 1;
  let activeCats = new Set(Object.keys(CAT_COLORS));
  let minRefs = 15;
  let hover = null;       // 悬停节点
  let drag = null;
  let dragMoved = false;
  let layingOut = false;

  // ── 数据 ──
  function loadGraph() {
    setStatus('正在加载图谱数据…');
    fetch(window.GRAPH_JSON_URL || 'graph.json')
      .then((r) => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then((g) => {
        graph = g;
        byId = new Map(g.nodes.map((n) => [n.id, n]));
        graph.links = g.links.map(([s, t]) => ({ source: g.nodes[s].id, target: g.nodes[t].id }));
        neighbors = new Map();
        for (const l of graph.links) {
          if (!neighbors.has(l.source)) neighbors.set(l.source, new Set());
          if (!neighbors.has(l.target)) neighbors.set(l.target, new Set());
          neighbors.get(l.source).add(l.target);
          neighbors.get(l.target).add(l.source);
        }
        relayout();
      })
      .catch((err) => {
        setStatus(`图谱数据加载失败（${err.message}）`, true);
      });
  }

  function setStatus(text, withRetry) {
    if (!statusEl) return;
    statusEl.style.display = 'block';
    statusEl.innerHTML = withRetry
      ? text + '<button id="graph-retry" class="g-reset" style="margin-left:8px">重试</button>'
      : text;
    if (withRetry) {
      const b = document.getElementById('graph-retry');
      if (b) b.addEventListener('click', loadGraph);
    }
  }

  function visibleNodes() {
    return graph.nodes.filter((n) => activeCats.has(n.cat) && (n.refs || 0) >= minRefs);
  }

  // ── 中心辐射式力导布局 ──
  function layoutNodes(nodes) {
    const ids = new Set(nodes.map((n) => n.id));
    const links = graph.links
      .filter((l) => ids.has(l.source) && ids.has(l.target))
      .map((l) => ({ source: l.source, target: l.target }));
    const sim = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id((d) => d.id).distance(16).strength(0.12))
      .force('charge', d3.forceManyBody().strength(-10))
      .force('collide', d3.forceCollide(2.5))
      .force('x', d3.forceX(0).strength(0.12))
      .force('y', d3.forceY(0).strength(0.12))
      .force('center', d3.forceCenter(0, 0))
      .stop();
    const ticks = Math.min(400, 80 + Math.round(Math.sqrt(nodes.length) * 22));
    for (let i = 0; i < ticks; i++) sim.tick();
  }

  function relayout() {
    if (!graph) return;
    const nodes = visibleNodes();
    const big = nodes.length > 400;
    if (big) setStatus(`正在计算布局（${nodes.length} 节点）…`);
    // 让出主线程，显示加载状态
    setTimeout(() => {
      layoutNodes(nodes);
      fitView(nodes);
      if (big) statusEl.style.display = 'none';
      draw();
    }, big ? 30 : 0);
  }

  // ── 视图适配：百分位边界聚焦主体质量，忽略离群点 ──
  function computeBounds(nodes) {
    if (!nodes.length) return { x: 0, y: 0, w: 1, h: 1 };
    const xs = [], ys = [];
    for (const n of nodes) { xs.push(n.x); ys.push(n.y); }
    xs.sort((a, b) => a - b); ys.sort((a, b) => a - b);
    const lo = Math.floor(xs.length * 0.06);
    const hi = Math.ceil(xs.length * 0.94) - 1;
    const minX = xs[lo], maxX = xs[Math.min(hi, xs.length - 1)];
    const minY = ys[lo], maxY = ys[Math.min(hi, ys.length - 1)];
    return { x: minX, y: minY, w: Math.max(1e-6, maxX - minX), h: Math.max(1e-6, maxY - minY) };
  }
  function fitView(nodes) {
    const b = computeBounds(nodes);
    const w = wrap.clientWidth || 800, h = wrap.clientHeight || 500;
    const pad = 60;
    const scale = Math.min((w - pad * 2) / b.w, (h - pad * 2) / b.h);
    transform.scale = Math.max(0.02, Math.min(scale, 5000));
    fitScale = transform.scale;
    transform.x = w / 2 - (b.x + b.w / 2) * transform.scale;
    transform.y = h / 2 - (b.y + b.h / 2) * transform.scale;
  }

  // ── 画布 ──
  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const w = wrap.clientWidth, h = wrap.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    g2d.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function toScreen(p) {
    return { x: p.x * transform.scale + transform.x, y: p.y * transform.scale + transform.y };
  }
  function toWorld(pt) {
    return { x: (pt.x - transform.x) / transform.scale, y: (pt.y - transform.y) / transform.scale };
  }
  function nodeAt(pt) {
    const w = toWorld(pt);
    let best = null, bestD = 16 / transform.scale;
    for (const n of visibleNodes()) {
      const dx = n.x - w.x, dy = n.y - w.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < bestD) { bestD = d; best = n; }
    }
    return best;
  }

  function nodeRadius(n, refs) {
    return refs >= 50 ? 8 : refs >= 10 ? 5 : refs >= 3 ? 3.5 : 2.2;
  }

  function draw() {
    g2d.clearRect(0, 0, wrap.clientWidth, wrap.clientHeight);
    if (!graph) return;
    const vis = new Set(visibleNodes().map((n) => n.id));
    const hov = hover && byId.get(hover.id) ? byId.get(hover.id) : null;
    const hovN = hov ? (neighbors.get(hov.id) || new Set()) : new Set();

    const rel = transform.scale / fitScale;
    const edgeAlpha = Math.min(0.3, 0.04 + rel * 0.05);

    // ── 边 ──
    if (hov) {
      // 悬停：突出该节点到邻居的连线，其余极淡
      g2d.lineWidth = 1;
      g2d.beginPath();
      g2d.strokeStyle = `rgba(150,150,150,${(edgeAlpha * 0.35).toFixed(3)})`;
      for (const l of graph.links) {
        if (!vis.has(l.source) || !vis.has(l.target)) continue;
        if (hovN.has(l.source) && hovN.has(l.target)) continue;
        if (l.source === hov.id || l.target === hov.id) continue;
        const a = byId.get(l.source), b = byId.get(l.target);
        const sa = toScreen(a), sb = toScreen(b);
        g2d.moveTo(sa.x, sa.y); g2d.lineTo(sb.x, sb.y);
      }
      g2d.stroke();
      // 悬停节点的连线：亮色向外延伸
      g2d.beginPath();
      g2d.strokeStyle = `rgba(224,162,94,0.9)`;
      g2d.lineWidth = 1.5;
      const hs = toScreen(hov);
      for (const nid of hovN) {
        if (!vis.has(nid)) continue;
        const nb = byId.get(nid);
        const s = toScreen(nb);
        g2d.moveTo(hs.x, hs.y); g2d.lineTo(s.x, s.y);
      }
      g2d.stroke();
    } else {
      g2d.lineWidth = 1;
      g2d.strokeStyle = `rgba(120,120,120,${edgeAlpha.toFixed(3)})`;
      g2d.beginPath();
      for (const l of graph.links) {
        if (!vis.has(l.source) || !vis.has(l.target)) continue;
        const a = byId.get(l.source), b = byId.get(l.target);
        const sa = toScreen(a), sb = toScreen(b);
        g2d.moveTo(sa.x, sa.y); g2d.lineTo(sb.x, sb.y);
      }
      g2d.stroke();
    }

    // ── 节点 ──
    const showLabels = transform.scale > fitScale * 1.8;
    for (const n of visibleNodes()) {
      const refs = n.refs || 0;
      const isHov = hov && hov.id === n.id;
      const isNeighbor = hov && hovN.has(n.id);
      const p = toScreen(n);
      const r = isHov ? nodeRadius(n, refs) + 3 : nodeRadius(n, refs);

      if (hov && !isHov && !isNeighbor) {
        g2d.globalAlpha = 0.12; // 非相关节点极暗
      } else if (hov && isNeighbor) {
        g2d.globalAlpha = 0.9;
      } else {
        g2d.globalAlpha = refs >= 10 ? 0.85 : 0.6;
      }
      g2d.beginPath();
      g2d.arc(p.x, p.y, r, 0, Math.PI * 2);
      g2d.fillStyle = CAT_COLORS[n.cat] || '#999';
      g2d.fill();
      g2d.globalAlpha = 1;

      if (isHov) {
        g2d.strokeStyle = '#fff';
        g2d.lineWidth = 2.5;
        g2d.stroke();
        g2d.strokeStyle = 'rgba(224,162,94,0.9)';
        g2d.lineWidth = 5;
        g2d.globalAlpha = 0.5;
        g2d.stroke();
        g2d.globalAlpha = 1;
      }
      // 悬停时：悬停节点 + 关联节点都显示名称；平时缩放足够才显示
      if (hov) {
        if (isHov || isNeighbor) {
          g2d.fillStyle = isHov ? '#000' : 'rgba(28,28,28,0.85)';
          g2d.font = isHov ? 'bold 12px sans-serif' : '11px sans-serif';
          const maxLen = isHov ? 22 : 16;
          const label = n.label.length > maxLen ? n.label.slice(0, maxLen - 1) + '…' : n.label;
          g2d.fillText(label, p.x + r + 4, p.y + 4);
        }
      } else if (showLabels && refs >= 3) {
        g2d.fillStyle = 'rgba(28,28,28,0.72)';
        g2d.font = '10px sans-serif';
        const label = n.label.length > 14 ? n.label.slice(0, 13) + '…' : n.label;
        g2d.fillText(label, p.x + r + 3, p.y + 3);
      }
    }
    updateStats();
  }

  function updateStats() {
    const vis = visibleNodes();
    if (hover) {
      const h = byId.get(hover.id);
      const n = neighbors.get(hover.id) || new Set();
      let visN = 0;
      for (const id of n) if (activeCats.has(byId.get(id).cat)) visN++;
      statsEl.textContent = `${vis.length} 节点 · 悬停「${(h && h.label || '').slice(0, 20)}」· ${visN} 个直接关联`;
    } else {
      statsEl.textContent = `${vis.length}/${graph.nodes.length} 节点 · 重要度≥${minRefs}`;
    }
  }

  // ── 交互 ──
  function onWheel(e) {
    e.preventDefault();
    const rect = wrap.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const factor = e.deltaY < 0 ? 1.15 : 0.87;
    const ns = Math.max(fitScale * 0.02, Math.min(fitScale * 8, transform.scale * factor));
    const wx = (mx - transform.x) / transform.scale;
    const wy = (my - transform.y) / transform.scale;
    transform.scale = ns;
    transform.x = mx - wx * ns;
    transform.y = my - wy * ns;
    draw();
  }
  function onDown(e) {
    const rect = wrap.getBoundingClientRect();
    const pt = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    const n = nodeAt(pt);
    drag = n
      ? { node: n, startX: e.clientX, startY: e.clientY }
      : { node: null, startX: e.clientX, startY: e.clientY, panX: transform.x, panY: transform.y };
    dragMoved = false;
  }
  function onMove(e) {
    const rect = wrap.getBoundingClientRect();
    const pt = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    if (drag) {
      const dx = e.clientX - drag.startX, dy = e.clientY - drag.startY;
      if (Math.abs(dx) + Math.abs(dy) > 3) dragMoved = true;
      if (drag.node) {
        const w = toWorld(pt);
        drag.node.x = w.x; drag.node.y = w.y;
        draw();
      } else {
        transform.x = drag.panX + dx;
        transform.y = drag.panY + dy;
        draw();
      }
    } else {
      const n = nodeAt(pt);
      if (n !== hover) { hover = n; draw(); }
      if (n) {
        const p = toScreen(n);
        tooltip.style.display = 'block';
        tooltip.style.left = p.x + 14 + 'px';
        tooltip.style.top = p.y + 14 + 'px';
        const nbr = (neighbors.get(n.id) || new Set()).size;
        tooltip.innerHTML = `<b>${n.label}</b><br>${CAT_LABELS[n.cat] || n.cat} · 被引 ${n.refs || 0} · 关联 ${nbr} 节点`;
      } else {
        tooltip.style.display = 'none';
      }
    }
  }
  function onUp(e) {
    if (drag && drag.node && !dragMoved) {
      const [cat, ...rest] = drag.node.id.split(':');
      window.location.href = (window.SITE_PREFIX || './') + `${cat}/${encodeURIComponent(rest.join(':'))}/`;
    }
    drag = null;
  }

  // ── 控件 ──
  function initControls() {
    document.querySelectorAll('[data-cat]').forEach((cb) => {
      cb.addEventListener('change', () => {
        if (cb.checked) activeCats.add(cb.dataset.cat);
        else activeCats.delete(cb.dataset.cat);
        hover = null;
        relayout();
      });
    });
    const slider = document.getElementById('min-degree');
    slider.addEventListener('input', () => { minRefs = Number(slider.value); hover = null; relayout(); });
    const reset = document.getElementById('graph-reset');
    reset.addEventListener('click', () => { hover = null; relayout(); });
  }

  // ── 初始化 ──
  window.addEventListener('resize', () => {
    const cx = (wrap.clientWidth / 2 - transform.x) / transform.scale;
    const cy = (wrap.clientHeight / 2 - transform.y) / transform.scale;
    resize();
    transform.x = wrap.clientWidth / 2 - cx * transform.scale;
    transform.y = wrap.clientHeight / 2 - cy * transform.scale;
    draw();
  });
  wrap.addEventListener('wheel', onWheel, { passive: false });
  wrap.addEventListener('mousedown', onDown);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onUp);
  wrap.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; hover = null; draw(); });
  resize();
  initControls();
  loadGraph();
})();
