// 知识图谱前端：Canvas 渲染预烘焙布局（居中/缩放/拖拽/筛选）
(function () {
  'use strict';
  const CAT_COLORS = { concepts: '#2563EB', entities: '#059669', theses: '#B45309', synthesis: '#6B7280' };
  const CAT_LABELS = { concepts: '概念', entities: '实体', theses: '论点', synthesis: '来源' };

  const canvas = document.getElementById('graph-canvas');
  const wrap = document.getElementById('graph-canvas-wrap');
  const tooltip = document.getElementById('graph-tooltip');
  const statsEl = document.getElementById('g-stats');
  if (!canvas || !wrap) return;
  const g2d = canvas.getContext('2d');

  let graph = null;
  let byId = new Map();
  let degrees = {};
  let transform = { x: 0, y: 0, scale: 1 };
  let fitScale = 1;
  let activeCats = new Set(Object.keys(CAT_COLORS));
  let minRefs = 15; // 默认只显示重要节点骨架
  let hover = null;
  let drag = null;
  let dragMoved = false;

  const statusEl = document.getElementById('graph-status');

  // ── 数据 ──
  function loadGraph() {
    if (statusEl) statusEl.textContent = '正在加载图谱数据…';
    fetch(window.GRAPH_JSON_URL || 'graph.json')
      .then((r) => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then((g) => {
        graph = g;
        byId = new Map(g.nodes.map((n) => [n.id, n]));
        // links 为索引对 [src, tgt]，转换为 id 引用
        graph.links = g.links.map(([s, t]) => ({ source: g.nodes[s].id, target: g.nodes[t].id }));
        degrees = {};
        for (const l of graph.links) {
          degrees[l.source] = (degrees[l.source] || 0) + 1;
          degrees[l.target] = (degrees[l.target] || 0) + 1;
        }
        if (statusEl) statusEl.style.display = 'none';
        relayout();
      })
      .catch((err) => {
        if (statusEl) {
          statusEl.innerHTML = '图谱数据加载失败（' + err.message + '）<button id="graph-retry" class="g-reset" style="margin-left:8px">重试</button>';
          statusEl.style.display = 'block';
          const retry = document.getElementById('graph-retry');
          if (retry) retry.addEventListener('click', loadGraph);
        }
      });
  }

  function visibleNodes() {
    return graph.nodes.filter((n) => activeCats.has(n.cat) && (n.refs || 0) >= minRefs);
  }

  // ── 黄金角螺旋分簇布局（按当前可见节点重算，间距适配数量）──
  function layoutNodes(nodes) {
    const CENTER = {
      entities: [-0.55, -0.55],   // 左上（大）
      synthesis: [0.55, 0.55],    // 右下（大）
      concepts: [-0.55, 0.55],    // 左下
      theses: [0.55, -0.55],      // 右上（小）
    };
    const QUAD = 0.42;
    const byCat = {};
    for (const n of nodes) (byCat[n.cat] ??= []).push(n);
    for (const [cat, ns] of Object.entries(byCat)) {
      if (!ns.length) continue;
      const sorted = [...ns].sort((a, b) => (b.refs || 0) - (a.refs || 0));
      const c = QUAD / Math.sqrt(sorted.length + 0.5);
      const q = CENTER[cat] || [0, 0];
      for (let i = 0; i < sorted.length; i++) {
        const r = c * Math.sqrt(i + 0.5);
        const a = i * 2.39996323;
        sorted[i].x = q[0] + r * Math.cos(a);
        sorted[i].y = q[1] + r * Math.sin(a);
      }
    }
  }
  function relayout() {
    layoutNodes(visibleNodes());
    fitView();
    draw();
  }

  // ── 视图居中适配（预烘焙坐标在 [0,1]，全量 bounds 居中）──
  function computeBounds(nodes) {
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (const n of nodes) {
      if (n.x < minX) minX = n.x; if (n.x > maxX) maxX = n.x;
      if (n.y < minY) minY = n.y; if (n.y > maxY) maxY = n.y;
    }
    if (minX === Infinity) return { x: 0, y: 0, w: 1, h: 1 };
    return { x: minX, y: minY, w: Math.max(1e-6, maxX - minX), h: Math.max(1e-6, maxY - minY) };
  }
  function fitView() {
    if (!graph) return;
    const b = computeBounds(visibleNodes());
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

  function draw() {
    g2d.clearRect(0, 0, wrap.clientWidth, wrap.clientHeight);
    if (!graph) return;
    const vis = new Set(visibleNodes().map((n) => n.id));
    // 边：总览时几乎隐形（避免蜘蛛网），放大后随相对倍率提升清晰度
    const rel = transform.scale / fitScale; // 1=总览
    const edgeAlpha = Math.min(0.3, 0.03 + rel * 0.05);
    g2d.strokeStyle = `rgba(120,120,120,${edgeAlpha.toFixed(3)})`;
    g2d.lineWidth = 1;
    g2d.beginPath();
    for (const l of graph.links) {
      if (!vis.has(l.source) || !vis.has(l.target)) continue;
      const a = byId.get(l.source), b = byId.get(l.target);
      if (!a || !b) continue;
      const sa = toScreen(a), sb = toScreen(b);
      g2d.moveTo(sa.x, sa.y);
      g2d.lineTo(sb.x, sb.y);
    }
    g2d.stroke();

    // 节点（小圆点避免密集处成黑块；hover 高亮；总览不显示标签避免文字重叠）
    const showLabels = transform.scale > fitScale * 2;
    for (const n of visibleNodes()) {
      const p = toScreen(n);
      const refs = n.refs || 0;
      const r = refs >= 50 ? 9 : refs >= 10 ? 5.5 : refs >= 3 ? 3.5 : 2;
      const isHover = hover && hover.id === n.id;
      g2d.beginPath();
      g2d.arc(p.x, p.y, r, 0, Math.PI * 2);
      g2d.fillStyle = CAT_COLORS[n.cat] || '#999';
      g2d.globalAlpha = isHover ? 1 : refs >= 10 ? 0.85 : 0.55;
      g2d.fill();
      g2d.globalAlpha = 1;
      if (isHover) {
        g2d.strokeStyle = '#000';
        g2d.lineWidth = 2;
        g2d.stroke();
      }
      if (showLabels && refs >= 3) {
        g2d.fillStyle = 'rgba(28,28,28,0.75)';
        g2d.font = '10px sans-serif';
        const label = n.label.length > 14 ? n.label.slice(0, 13) + '…' : n.label;
        g2d.fillText(label, p.x + r + 3, p.y + 3);
      }
    }
    updateStats();
  }

  function updateStats() {
    const vis = visibleNodes();
    statsEl.textContent = `${vis.length}/${graph.nodes.length} 节点 · 重要度≥${minRefs}`;
  }

  // ── 交互 ──
  function onWheel(e) {
    e.preventDefault();
    const rect = wrap.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const factor = e.deltaY < 0 ? 1.15 : 0.87;
    // 缩放范围相对 fit 比例：可缩小到 2%、放大到 8 倍
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
      ? { node: n, startX: e.clientX, startY: e.clientY, origX: n.x, origY: n.y }
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
        const w = toWorld({ x: pt.x, y: pt.y });
        drag.node.x = Math.max(0.001, Math.min(0.999, w.x));
        drag.node.y = Math.max(0.001, Math.min(0.999, w.y));
        draw();
      } else {
        transform.x = drag.panX + dx;
        transform.y = drag.panY + dy;
        draw();
      }
    } else {
      const n = nodeAt(pt);
      hover = n;
      if (n) {
        const p = toScreen(n);
        tooltip.style.display = 'block';
        tooltip.style.left = p.x + 12 + 'px';
        tooltip.style.top = p.y + 12 + 'px';
        tooltip.innerHTML = `<b>${n.label}</b><br>${CAT_LABELS[n.cat] || n.cat} · 被引 ${n.refs || 0} 次`;
      } else {
        tooltip.style.display = 'none';
      }
      draw();
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
        relayout();
      });
    });
    const slider = document.getElementById('min-degree');
    slider.addEventListener('input', () => { minRefs = Number(slider.value); relayout(); });
    const reset = document.getElementById('graph-reset');
    reset.addEventListener('click', () => { relayout(); });
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
  wrap.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; hover = null; });
  resize();
  initControls();
  loadGraph();
})();
