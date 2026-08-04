import { forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide } from 'd3-force';
import { layout } from './page.js';
import { relHref, staticSitePath } from './fs-utils.js';
import { CATEGORIES } from './config.js';

/** 构建 graph.json：节点 + 去重无向边 + d3-force 预烘焙坐标（归一化到 [0,1]） */
export function buildGraph(ctx) {
  const nodes = ctx.contentPages.map((p) => ({
    id: `${p.category}:${p.slug}`,
    cat: p.category,
    label: p.title,
    refs: p.backlinkCount || 0,
  }));

  // 去重无向边
  const edgeSet = new Set();
  for (const e of ctx.edges) {
    const [a, b] = e.split('|');
    if (!a || !b) continue;
    edgeSet.add([a, b].sort().join('|'));
  }
  const links = [...edgeSet].map((e) => {
    const [source, target] = e.split('|');
    return { source, target };
  });

  // d3-force 预烘焙布局
  const sim = forceSimulation(nodes)
    .force('link', forceLink(links).id((d) => d.id).distance(25).strength(0.4))
    .force('charge', forceManyBody().strength(-35))
    .force('collide', forceCollide(7))
    .force('center', forceCenter(0, 0));
  sim.stop();
  for (let i = 0; i < 350; i++) sim.tick();

  // 链接还原为 id 字符串（避免把节点对象序列化进 JSON）
  const compactLinks = links.map((l) => ({
    source: typeof l.source === 'object' ? l.source.id : l.source,
    target: typeof l.target === 'object' ? l.target.id : l.target,
  }));

  // 归一化坐标到 [0,1]
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const n of nodes) {
    if (n.x < minX) minX = n.x; if (n.x > maxX) maxX = n.x;
    if (n.y < minY) minY = n.y; if (n.y > maxY) maxY = n.y;
  }
  const spanX = Math.max(1, maxX - minX);
  const spanY = Math.max(1, maxY - minY);
  const scale = Math.max(spanX, spanY);
  for (const n of nodes) {
    n.x = ((n.x - minX) / spanX - 0.5) * 0.9 + 0.5;
    n.y = ((n.y - minY) / spanY - 0.5) * 0.9 + 0.5;
  }
  void scale;

  return { nodes, links: compactLinks };
}

/** /graph/ 页面 */
export function renderGraphPage(ctx, graph) {
  const sitePath = staticSitePath('graph');
  const graphJsonHref = relHref(sitePath, 'graph.json');
  const graphJsHref = relHref(sitePath, 'assets/graph.js');
  const vendor = ['d3-dispatch', 'd3-quadtree', 'd3-timer', 'd3-force']
    .map((n) => `<script src="${relHref(sitePath, `assets/vendor/${n}.min.js`)}"></script>`)
    .join('\n');
  const toggles = Object.entries(CATEGORIES)
    .map(([key, meta]) => `<label class="g-toggle"><input type="checkbox" data-cat="${key}" checked><span style="background:${meta.color}"></span>${meta.label}</label>`)
    .join('');
  const body = `
<div class="page-head"><h1>知识图谱</h1><p class="muted">${graph.nodes.length} 节点 · ${graph.links.length} 关系 · 拖拽 / 滚轮缩放 / 点击跳转</p></div>
<div class="graph-toolbar">
  ${toggles}
  <label class="g-min">最小链接数 <input type="range" id="min-degree" min="0" max="20" value="0"></label>
  <button id="graph-reset" class="g-reset">重置视图</button>
  <span id="g-stats" class="muted"></span>
</div>
<div id="graph-canvas-wrap" class="graph-wrap">
  <canvas id="graph-canvas"></canvas>
  <div id="graph-tooltip" class="graph-tooltip"></div>
</div>
<script>window.GRAPH_JSON_URL = ${JSON.stringify(graphJsonHref)};</script>
${vendor}
<script src="${graphJsHref}"></script>`;
  return layout(ctx, { sitePath, title: '知识图谱', body, active: 'graph', description: '知识图谱可视化' });
}
