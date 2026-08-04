import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { scanPages, readText } from './fs-utils.js';
import { WIKI_DIR, SITE_DIR, ASSETS_SRC, GENERATOR_DIR } from './config.js';
import { createPage } from './model.js';
import { buildIndex } from './indexer.js';
import { processWikilinks } from './wikilinks.js';
import { createRenderer } from './render.js';
import { renderContentPage } from './page.js';
import { renderHome } from './home.js';
import { renderListing, renderFullIndex } from './listings.js';
import { buildSearchIndex, renderSearchPage } from './search.js';
import { buildGraph, renderGraphPage } from './graph.js';

/**
 * 10 步构建流水线入口。各阶段逐步实现：
 * scan → frontmatter → indexer → wikilink → render → page → home/listings → graph/search → write → report
 */

const steps = [];

function step(name, fn) {
  steps.push({ name, fn });
}

// ─── Phase 0: 扫描 ──────────────────────────────────────────────
step('scan', () => {
  const pages = scanPages(WIKI_DIR);
  return { pages };
});

// ─── Phase 1: 容错 frontmatter 解析 + 建索引 ────────────────────
step('parse', (ctx) => {
  const pages = ctx.pages.map((p) => createPage({ ...p, raw: readText(p.filePath) || '' }));
  ctx.pages = pages;
  return { pages };
});

step('index', (ctx) => {
  const idx = buildIndex(ctx.pages);
  ctx.warnings.push(...idx.conflicts);
  ctx.warnings.push(...idx.aliasWarnings);
  return { bySlug: idx.bySlug, byAlias: idx.byAlias };
});

// ─── Phase 2: wikilink 两遍法解析 + 反链收集 ─────────────────────
step('wikilink', (ctx) => {
  const r = processWikilinks(ctx.pages, ctx.bySlug, ctx.byAlias, ctx.warnings);
  // 把反链挂到对应页面
  for (const page of ctx.pages) {
    const key = `${page.category}:${page.slug}`;
    page.backlinks = r.backlinks.get(key) || [];
    page.backlinkCount = page.backlinks.length;
  }
  ctx.backlinks = r.backlinks;
  ctx.edges = r.edges;
  ctx.linkStats = {
    total: r.totalLinks,
    resolved: r.resolvedCount,
    dangling: r.danglingCount,
  };
  return { backlinks: r.backlinks, edges: r.edges };
});

// ─── Phase 3: 渲染内容页 ─────────────────────────────────────────
step('render', (ctx) => {
  const renderer = createRenderer();
  ctx.renderer = renderer;
  // byRef: `cat:slug` → page，供反链解析
  ctx.byRef = new Map(ctx.pages.map((p) => [`${p.category}:${p.slug}`, p]));
  const contentPages = ctx.pages.filter((p) => p.slug !== '_index');
  ctx.contentPages = contentPages;
  for (const page of contentPages) {
    page.html = renderContentPage(ctx, page, renderer);
  }
  return { renderer, contentPages };
});

// ─── Phase 4: 首页 + 列表页 ──────────────────────────────────────
step('pages-static', (ctx) => {
  ctx.html = ctx.html || {};
  ctx.html.home = renderHome(ctx);
  for (const name of ['concepts', 'entities', 'theses', 'synthesis']) {
    ctx.html[`list-${name}`] = renderListing(ctx, name);
  }
  ctx.html['index'] = renderFullIndex(ctx, ctx.renderer);
  return { html: ctx.html };
});

// ─── Phase 5: 搜索索引 + 搜索页 ──────────────────────────────────
step('search', (ctx) => {
  ctx.searchIndex = buildSearchIndex(ctx);
  ctx.html['search'] = renderSearchPage(ctx);
  return { searchIndex: ctx.searchIndex, html: ctx.html };
});

// ─── Phase 6: 知识图谱 ───────────────────────────────────────────
step('graph', (ctx) => {
  ctx.graph = buildGraph(ctx);
  ctx.html['graph'] = renderGraphPage(ctx, ctx.graph);
  return { graph: ctx.graph, html: ctx.html };
});

// ─── 写出 site/ ──────────────────────────────────────────────────
step('write', (ctx) => {
  fs.rmSync(SITE_DIR, { recursive: true, force: true });
  fs.mkdirSync(SITE_DIR, { recursive: true });
  for (const page of ctx.contentPages) {
    const out = path.join(SITE_DIR, page.category, page.slug, 'index.html');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, page.html, 'utf8');
  }
  const staticOut = {
    '': ctx.html.home,
    'concepts': ctx.html['list-concepts'],
    'entities': ctx.html['list-entities'],
    'theses': ctx.html['list-theses'],
    'synthesis': ctx.html['list-synthesis'],
    'index': ctx.html['index'],
    'search': ctx.html['search'],
    'graph': ctx.html['graph'],
  };
  // 搜索索引 + 图谱 JSON
  fs.writeFileSync(path.join(SITE_DIR, 'search-index.json'), JSON.stringify(ctx.searchIndex), 'utf8');
  fs.writeFileSync(path.join(SITE_DIR, 'graph.json'), JSON.stringify(ctx.graph), 'utf8');
  for (const [name, html] of Object.entries(staticOut)) {
    const out = name === '' ? path.join(SITE_DIR, 'index.html') : path.join(SITE_DIR, name, 'index.html');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html, 'utf8');
  }
  // 拷贝静态资产 + vendor d3-force（供图谱前端交互）
  if (fs.existsSync(ASSETS_SRC)) {
    fs.cpSync(ASSETS_SRC, path.join(SITE_DIR, 'assets'), { recursive: true });
  }
  // vendor d3-force 及其依赖（浏览器端需按依赖顺序加载到 d3 全局）
  const d3Vendor = ['d3-dispatch', 'd3-quadtree', 'd3-timer', 'd3-force'];
  const vendorDir = path.join(SITE_DIR, 'assets', 'vendor');
  fs.mkdirSync(vendorDir, { recursive: true });
  for (const name of d3Vendor) {
    const src = path.resolve(GENERATOR_DIR, 'node_modules', name, 'dist', `${name}.min.js`);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(vendorDir, `${name}.min.js`));
  }
  // GitHub Pages 需要 .nojekyll 与 404
  fs.writeFileSync(path.join(SITE_DIR, '.nojekyll'), '');
  return {};
});

// ─── 骨架：串联已实现步骤 ───────────────────────────────────────
export function build() {
  const ctx = { warnings: [], report: {} };
  for (const s of steps) {
    const t0 = Date.now();
    try {
      const out = s.fn(ctx);
      if (out && typeof out === 'object') Object.assign(ctx, out);
      ctx.report[s.name] = `${Date.now() - t0}ms`;
    } catch (e) {
      console.error(`[step ${s.name}] FAILED:`, e.message);
      throw e;
    }
  }
  return ctx;
}

// ─── CLI ────────────────────────────────────────────────────────
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const ctx = build();
  const pages = ctx.pages.filter((p) => p.slug !== '_index');
  const countBy = {};
  for (const p of pages) countBy[p.category] = (countBy[p.category] || 0) + 1;
  console.log('=== 构建报告 ===');
  console.log('知识页总数:', pages.length);
  for (const [c, n] of Object.entries(countBy)) {
    console.log(`  ${c}: ${n}`);
  }
  if (ctx.linkStats) {
    console.log('---');
    console.log(`wikilink: 总计 ${ctx.linkStats.total} · 解析成功 ${ctx.linkStats.resolved} · 悬空 ${ctx.linkStats.dangling}`);
    console.log(`反链: ${ctx.backlinks ? ctx.backlinks.size : 0} 个页面有入链`);
    console.log(`有向边: ${ctx.edges ? ctx.edges.size : 0} 条`);
  }
  console.log('---');
  if (ctx.warnings.length) {
    console.log(`警告 (${ctx.warnings.length}):`);
    for (const w of ctx.warnings.slice(0, 25)) console.log('  ⚠', w);
    if (ctx.warnings.length > 25) console.log(`  ... 其余 ${ctx.warnings.length - 25} 条`);
  } else {
    console.log('无警告');
  }
}
