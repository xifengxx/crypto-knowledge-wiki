import { layout } from './page.js';
import { relHref, staticSitePath, pageSitePath } from './fs-utils.js';
import { CATEGORIES } from './config.js';
import { CATEGORY_COLORS, CATEGORY_LABELS } from './model.js';
import { SITE } from './config.js';

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/** 按反链数排序的 TOP 列表 */
function topByRefs(pages, n) {
  return [...pages].sort((a, b) => (b.backlinkCount || 0) - (a.backlinkCount || 0)).slice(0, n);
}

function rankList(ctx, items, sitePath) {
  const lis = items.map((p, i) => {
    const href = relHref(sitePath, pageSitePath(p.category, p.slug));
    return `<li><span class="rank-no">${i + 1}.</span> <a href="${href}">${esc(p.title)}</a> <span class="refs">(${p.backlinkCount} 链)</span></li>`;
  }).join('');
  return `<ol>${lis}</ol>`;
}

export function renderHome(ctx) {
  const sitePath = staticSitePath('');
  const pages = ctx.contentPages;
  const countBy = {};
  for (const p of pages) countBy[p.category] = (countBy[p.category] || 0) + 1;

  const concepts = pages.filter((p) => p.category === 'concepts');
  const entities = pages.filter((p) => p.category === 'entities');
  const theses = pages.filter((p) => p.category === 'theses');
  const synthesis = pages.filter((p) => p.category === 'synthesis');

  // 最后更新时间：取所有页 updated/created 的最大值
  const lastUpdated = pages.reduce((mx, p) => {
    const d = p.fm.updated || p.fm.created;
    return d && d > mx ? d : mx;
  }, '');

  const stats = [
    ['知识页', pages.length],
    ['双链链接', ctx.linkStats?.resolved || 0],
    ['概念', countBy.concepts || 0],
    ['实体', countBy.entities || 0],
    ['论点', countBy.theses || 0],
    ['来源综述', countBy.synthesis || 0],
  ]
    .map(([l, n]) => `<div class="stat"><div class="num">${n.toLocaleString()}</div><div class="lbl">${l}</div></div>`)
    .join('');

  const catCards = Object.entries(CATEGORIES)
    .map(([key, meta]) => {
      const n = countBy[key] || 0;
      const href = relHref(sitePath, staticSitePath(key));
      return `<a class="card" href="${href}">
        <h3 style="color:${meta.color}">${meta.label} <span class="count">${n}</span></h3>
        <p class="desc">${esc(meta.description)}</p>
        <span class="count">${meta.labelEn}</span>
      </a>`;
    })
    .join('');

  const topConcepts = rankList(ctx, topByRefs(concepts, 15), sitePath);
  const topEntities = rankList(ctx, topByRefs(entities, 15), sitePath);
  const thesesSorted = [...theses].sort((a, b) => (b.fm.confidence || 0) - (a.fm.confidence || 0));
  const thesisList = thesesSorted
    .map((p) => {
      const href = relHref(sitePath, pageSitePath(p.category, p.slug));
      return `<li><a href="${href}">${esc(p.title)}</a> <span class="refs">置信度 ${p.fm.confidence ?? '—'}/10</span></li>`;
    })
    .join('');
  const recentSyn = [...synthesis].sort((a, b) => (b.fm.date || '').localeCompare(a.fm.date || '')).slice(0, 10);
  const recentList = recentSyn
    .map((p) => {
      const href = relHref(sitePath, pageSitePath(p.category, p.slug));
      return `<li><a href="${href}">${esc(p.title)}</a> <span class="refs">${(p.fm.date || '').slice(0, 7)}</span></li>`;
    })
    .join('');

  const graphHref = relHref(sitePath, staticSitePath('graph'));
  const searchHref = relHref(sitePath, staticSitePath('search'));
  const indexHref = relHref(sitePath, staticSitePath('index'));

  const body = `
<section class="hero">
  <h1>${SITE.title}</h1>
  <p>${SITE.tagline}</p>
</section>
<div class="stats">${stats}</div>
<div class="cards">${catCards}</div>
<section class="grid2" style="margin-top:20px">
  <div class="rank"><h2>🏆 被引最多 · 概念 TOP 15</h2>${topConcepts}</div>
  <div class="rank"><h2>🏆 被引最多 · 实体 TOP 15</h2>${topEntities}</div>
  <div class="rank"><h2>📌 投资论点（按置信度）</h2><ol>${thesisList}</ol></div>
  <div class="rank"><h2>🕘 最近综述</h2><ol>${recentList}</ol></div>
</section>
<section class="grid2" style="margin-top:20px">
  <a class="card" href="${graphHref}">
    <h3>🕸️ 知识图谱</h3>
    <p class="desc">${pages.length} 个节点 · ${ctx.edges ? ctx.edges.size : 0} 条关系 · 交互式探索</p>
  </a>
  <a class="card" href="${searchHref}">
    <h3>🔍 全文搜索</h3>
    <p class="desc">按 ⌘K 或点击上方搜索，跨概念/实体/论点/来源检索</p>
  </a>
  <a class="card" href="${indexHref}">
    <h3>📑 总索引</h3>
    <p class="desc">完整的分组索引（论点/概念/实体/按年份综述）</p>
  </a>
  <div class="card">
    <h3>最后更新</h3>
    <p class="desc">${esc(lastUpdated || '—')}</p>
  </div>
</section>`;

  return layout(ctx, { sitePath, title: '首页', body, active: '', description: SITE.tagline });
}
