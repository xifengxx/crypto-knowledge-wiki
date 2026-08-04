import { relHref, staticSitePath, pageSitePath } from './fs-utils.js';
import { transformWikilinks } from './render.js';
import { CATEGORY_COLORS, CATEGORY_LABELS } from './model.js';
import { SITE } from './config.js';

const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const NAV = [
  { name: '', label: '首页' },
  { name: 'graph', label: '图谱' },
  { name: 'search', label: '搜索' },
  { name: 'concepts', label: '概念' },
  { name: 'entities', label: '实体' },
  { name: 'theses', label: '论点' },
  { name: 'synthesis', label: '来源' },
  { name: 'index', label: '总索引' },
];

/** 站点级页面壳 */
export function layout(ctx, { sitePath, title, body, active = '', description = '', extraHead = '', bodyClass = '' }) {
  const nav = NAV.map((n) => {
    const href = relHref(sitePath, staticSitePath(n.name));
    const cls = n.name === active ? 'active' : '';
    return `<a class="${cls}" href="${href}">${n.label}</a>`;
  }).join('');
  const homeHref = relHref(sitePath, staticSitePath(''));
  const indexHref = relHref(sitePath, 'search-index.json');
  const stats = ctx.linkStats
    ? `<span class="muted">${ctx.pages.length} 页 · ${ctx.linkStats.resolved} 链接</span>`
    : '';
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} — ${SITE.title}</title>
<meta name="description" content="${esc(description)}">
<link rel="stylesheet" href="${relHref(sitePath, 'assets/style.css')}">
${extraHead}
<script>window.SEARCH_INDEX_URL = ${JSON.stringify(indexHref)};</script>
</head>
<body class="${esc(bodyClass)}">
<header class="topbar">
  <a class="brand" href="${homeHref}">📚 ${SITE.title}</a>
  <nav class="nav">${nav}</nav>
  <button class="search-trigger" data-search-trigger>⌘K 搜索</button>
</header>
<main class="content">${body}</main>
<footer class="footer">
  <div>${SITE.footer} · ${stats}</div>
  <div class="muted">本地构建时间 ${new Date().toISOString().slice(0, 10)}</div>
</footer>
<script src="${relHref(sitePath, 'assets/app.js')}"></script>
</body>
</html>`;
}

/** 元信息侧栏（按分类） */
function metaSidebar(ctx, page) {
  const fm = page.fm;
  const cat = CATEGORY_COLORS[page.category];
  const rows = [];

  if (page.category === 'entities') {
    rows.push(`<span class="badge" style="background:${cat}1a;color:${cat}">${esc(fm.entity_type)}</span>`);
  }
  if (page.category === 'theses') {
    const statusColor = { active: '#059669', forming: '#B45309', invalidated: '#DC2626', confirmed: '#2563EB' }[fm.status] || '#6B7280';
    const conf = fm.confidence ?? 0;
    rows.push(`<span class="badge" style="background:${statusColor}1a;color:${statusColor}">${esc(fm.status)}</span>`);
    rows.push(`<div class="conf"><div class="conf-label">置信度 ${conf}/10</div><div class="conf-bar"><div style="width:${conf * 10}%"></div></div></div>`);
  }
  if (page.category === 'synthesis') {
    const stMap = { article: '文章', report: '研报', tweet: '推文', podcast: '播客', video: '视频', note: '笔记', unknown: '其他' };
    rows.push(`<span class="badge" style="background:#6B72801a;color:#6B7280">${stMap[fm.source_type] || fm.source_type}</span>`);
  }

  if (fm.aliases?.length) rows.push(`<div class="meta-item"><span class="meta-key">别名</span>${fm.aliases.map(esc).join(' · ')}</div>`);
  if (fm.tags?.length) rows.push(`<div class="meta-item"><span class="meta-key">标签</span>${fm.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join(' ')}</div>`);

  if (page.category === 'source') {
    if (fm.author) rows.push(`<div class="meta-item"><span class="meta-key">作者</span>${esc(fm.author)}</div>`);
    if (fm.date) rows.push(`<div class="meta-item"><span class="meta-key">日期</span>${esc(fm.date.slice(0, 7))}</div>`);
    if (fm.url) rows.push(`<div class="meta-item"><a class="external" href="${esc(fm.url)}" target="_blank" rel="noopener">原文链接 ↗</a></div>`);
  }

  const dates = [];
  if (fm.created) dates.push(`创建 ${esc(fm.created)}`);
  if (fm.updated) dates.push(`更新 ${esc(fm.updated)}`);
  if (dates.length) rows.push(`<div class="meta-item muted">${dates.join(' · ')}</div>`);

  rows.push(`<div class="meta-item"><span class="meta-key">反向链接</span>${page.backlinkCount}</div>`);

  return `<div class="meta-card">${rows.join('')}</div>`;
}

/** TOC 块（h2/h3） */
function tocBlock(toc) {
  if (!toc.length) return '';
  const items = toc.map((t) => `<a href="#${t.id}" class="toc-l${t.level}">${esc(t.text)}</a>`).join('');
  return `<nav class="toc"><div class="toc-title">目录</div>${items}</nav>`;
}

/** 反链块 */
function backlinksBlock(ctx, page) {
  if (!page.backlinks.length) return '';
  const items = [...new Set(page.backlinks.map((b) => b.from))].map((ref) => {
    const [cat, slug] = ref.split(':');
    const target = ctx.byRef.get(ref);
    const label = target ? target.title : slug;
    const href = relHref(pageSitePath(page.category, page.slug), pageSitePath(cat, slug));
    return `<li><a href="${href}">${esc(label)}</a><span class="muted"> · ${CATEGORY_LABELS[cat] || cat}</span></li>`;
  }).join('');
  return `<section class="backlinks"><h2>反向链接 (${page.backlinks.length})</h2><ul>${items}</ul></section>`;
}

/** 渲染内容页 */
export function renderContentPage(ctx, page, renderer) {
  const sitePath = pageSitePath(page.category, page.slug);
  // 若正文首个 H1 与页面标题重复，则移除（标题已在页头渲染）
  let rawBody = page.body;
  const h1 = rawBody.match(/^#\s+(.+)$/m);
  if (h1 && h1[1].trim() === page.title) {
    rawBody = rawBody.replace(/^#\s+.+$/m, '');
  }
  // 注意：rawBody 可能已剥离 H1，需基于它重新提取解析 wikilink（fromIndex 才正确）
  const bodyMd = transformWikilinks(rawBody, { bySlug: ctx.bySlug, byAlias: ctx.byAlias, warnings: ctx.warnings }, sitePath);
  const { html, toc } = renderer.render(bodyMd);
  const catColor = CATEGORY_COLORS[page.category];
  const body = `
<article class="wiki-page">
  <header class="page-head">
    <div class="crumb"><span class="crumb-cat" style="color:${catColor}">${CATEGORY_LABELS[page.category]}</span> · ${esc(page.category)}/${esc(page.slug)}</div>
    <h1>${esc(page.title)}</h1>
  </header>
  <div class="page-body">
    <div class="article">${html}</div>
    <aside class="meta-sidebar">
      ${metaSidebar(ctx, page)}
      ${tocBlock(toc)}
    </aside>
  </div>
  ${backlinksBlock(ctx, page)}
</article>`;
  return layout(ctx, {
    sitePath,
    title: page.title,
    body,
    active: page.category,
    description: page.title,
    extraHead: `<style>:root{--cat-color:${catColor}}</style>`,
  });
}
