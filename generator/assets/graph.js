// 知识图谱前端：Canvas 力导向图渲染与交互
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
  let activeCats = new Set(Object.keys(CAT_COLORS));
  let minDegree = 0;
  let hover = null;
  let drag = null;       // 正在拖拽的节点
  let dragMoved = false;
  let sim = null;

  // ── 数据 ──
  function loadGraph() {
    fetch(window.GRAPH_JSON_URL || 'graph.json')
      .then((r) => r.json())
      .then((g) => {
        graph = g;
        byId = new Map(g.nodes.map((n) => [n.id, n]));
        degrees = {};
        for (const l of g.links) {
          degrees[l.source] = (degrees[l.source] || 0) + 1;
          degrees[l.target] = (degrees[l.target] || 0) + 1;
        }
        relayout();
      })
      .catch((err) => { wrap.innerHTML = '<p class="muted">图谱数据加载失败: ' + err.message + '</p>'; });
  }

  function visibleNodes() {
    return graph.nodes.filter((n) => activeCats.has(n.cat) && (degrees[n.id] || 0) >= minDegree);
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
    let best = null, bestD = 14 / transform.scale;
    for (const n of visibleNodes()) {
      const dx = n.x - w.x, dy = n.y - w.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < bestD) { bestD = d; best = n; }
    }
    return best;
  }

  function draw() {
    g2d.clearRect(0, 0, wrap.clientWidth, wrap.clientHeight);
    const vis = new Set(visibleNodes().map((n) => n.id));
    // 边
    g2d.strokeStyle = 'rgba(120,120,120,0.18)';
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

    // 节点
    const showLabels = transform.scale > 1.4;
    for (const n of visibleNodes()) {
      const p = toScreen(n);
      const r = Math.min(14, 3 + Math.sqrt(n.refs || 0) * 1.6);
      g2d.beginPath();
      g2d.arc(p.x, p.y, r, 0, Math.PI * 2);
      g2d.fillStyle = CAT_COLORS[n.cat] || '#999';
      g2d.globalAlpha = 0.85;
      g2d.fill();
      g2d.globalAlpha = 1;
      if (hover && hover.id === n.id) {
        g2d.strokeStyle = '#000';
        g2d.lineWidth = 2;
        g2d.stroke();
      }
      if (showLabels && (n.refs || 0) >= 3) {
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
    statsEl.textContent = `${vis.length}/${graph.nodes.length} 节点 · ${minDegree}+ 链`;
  }

  // ── 力导向（d3-force 交互）──
  function relayout() {
    const nodes = visibleNodes();
    const ids = new Set(nodes.map((n) => n.id));
    const links = graph.links.filter((l) => ids.has(l.source) && ids.has(l.target)).map((l) => ({ source: l.source, target: l.target }));
    if (sim) sim.stop();
    sim = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id((d) => d.id).distance(28).strength(0.35))
      .force('charge', d3.forceManyBody().strength(-30))
      .force('collide', d3.forceCollide(7))
      .force('center', d3.forceCenter(0.5, 0.5))
      .on('tick', draw)
      .stop();
    // 预热若干次
    for (let i = 0; i < 60; i++) sim.tick();
    draw();
    sim.restart();
  }

  // ── 交互 ──
  function onWheel(e) {
    e.preventDefault();
    const rect = wrap.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const factor = e.deltaY < 0 ? 1.15 : 0.87;
    const ns = Math.max(0.1, Math.min(8, transform.scale * factor));
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
    drag = n ? { node: n, id: n.id, startX: e.clientX, startY: e.clientY, origX: n.x, origY: n.y } : { node: null, startX: e.clientX, startY: e.clientY, panX: transform.x, panY: transform.y };
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
        drag.node.x = Math.max(0.01, Math.min(0.99, w.x));
        drag.node.y = Math.max(0.01, Math.min(0.99, w.y));
        if (sim) sim.alphaTarget(0.1).restart();
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
      window.location.href = drag.node.id.replace(':', '/') + '/';
    }
    drag = null;
    if (sim) sim.alphaTarget(0);
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
    slider.addEventListener('input', () => { minDegree = Number(slider.value); relayout(); });
    const reset = document.getElementById('graph-reset') || { addEventListener() {} };
    reset.addEventListener('click', () => { transform = { x: 0, y: 0, scale: 1 }; relayout(); });
  }

  // ── 初始化 ──
  window.addEventListener('resize', () => { resize(); draw(); });
  wrap.addEventListener('wheel', onWheel, { passive: false });
  wrap.addEventListener('mousedown', onDown);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onUp);
  wrap.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; hover = null; });
  resize();
  initControls();
  loadGraph();
})();
