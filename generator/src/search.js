import { layout } from './page.js';
import { relHref, staticSitePath } from './fs-utils.js';
import { SITE } from './config.js';

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/** 从正文提取纯文本摘要 */
function bodyText(body) {
  return body
    .replace(/[#*_`>|\[\]!]/g, ' ')
    .replace(/\[\[|\]\]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** 构建客户端搜索索引 */
export function buildSearchIndex(ctx) {
  return ctx.contentPages.map((p) => ({
    slug: p.slug,
    cat: p.category,
    title: p.title,
    aliases: p.fm.aliases || [],
    tags: p.fm.tags || [],
    desc: bodyText(p.body).slice(0, 180),
  }));
}

/** /search/ 全页搜索页 */
export function renderSearchPage(ctx) {
  const sitePath = staticSitePath('search');
  const indexHref = relHref(sitePath, 'search-index.json');
  const body = `
<div class="page-head">
  <h1>搜索</h1>
  <p class="muted">跨概念 / 实体 / 论点 / 来源检索 · 支持中文与英文前缀</p>
</div>
<div class="search-page">
  <input id="search-input" class="search-input" type="search" placeholder="输入关键词，如：稳定币、uni、defi…" autofocus>
  <div id="search-results" class="search-results"></div>
</div>
<script>window.SEARCH_INDEX_URL = ${JSON.stringify(indexHref)};</script>`;
  return layout(ctx, {
    sitePath,
    title: '搜索',
    body,
    active: 'search',
    description: '搜索',
    bodyClass: 'search-page',
    extraHead: '<style>body.search-page .search-trigger{display:none}</style>',
  });
}
