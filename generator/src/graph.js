import { layout } from './page.js';
import { relHref, staticSitePath } from './fs-utils.js';
import { CATEGORIES } from './config.js';

/**
 * 确定性黄金角螺旋分簇布局：每分类一个象限，重要节点在簇心、按 r=c·√(i+0.5) 螺旋向外。
 * 中心偏移避免塌陷，间距有保证；对角平衡：实体↔来源主对角，概念↔论点反对角。
 */
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
      const a = i * 2.39996323; // 黄金角
      sorted[i].x = q[0] + r * Math.cos(a);
      sorted[i].y = q[1] + r * Math.sin(a);
    }
  }
}

/** 构建 graph.json：节点 + 去重无向边 + 确定性分簇坐标（归一化到 [0,1]） */
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

  layoutNodes(nodes);

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
  const toggles = Object.entries(CATEGORIES)
    .map(([key, meta]) => `<label class="g-toggle"><input type="checkbox" data-cat="${key}" checked><span style="background:${meta.color}"></span>${meta.label}</label>`)
    .join('');
  const body = `
<div class="page-head"><h1>知识图谱</h1><p class="muted">${graph.nodes.length} 节点 · ${graph.links.length} 关系 · 拖拽 / 滚轮缩放 / 点击跳转</p></div>
<div class="graph-toolbar">
  ${toggles}
  <label class="g-min">重要度阈值 <input type="range" id="min-degree" min="0" max="40" value="8" title="引用数（被引次数）越高越重要"></label>
  <button id="graph-reset" class="g-reset">重置视图</button>
  <span id="g-stats" class="muted"></span>
</div>
<div id="graph-canvas-wrap" class="graph-wrap">
  <canvas id="graph-canvas"></canvas>
  <div id="graph-tooltip" class="graph-tooltip"></div>
  <div class="graph-hint">滚轮缩放 · 拖拽平移 · 拖动节点 · 点击跳转</div>
</div>
<script>window.GRAPH_JSON_URL = ${JSON.stringify(graphJsonHref)};</script>
<script src="${graphJsHref}"></script>`;
  return layout(ctx, { sitePath, title: '知识图谱', body, active: 'graph', description: '知识图谱可视化' });
}
