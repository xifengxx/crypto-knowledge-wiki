import { layout } from './page.js';
import { relHref, staticSitePath, pageSitePath, readText } from './fs-utils.js';
import { CATEGORIES, WIKI_DIR } from './config.js';
import { CATEGORY_COLORS, CATEGORY_LABELS } from './model.js';
import { transformWikilinks } from './render.js';

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function pageHref(sitePath, p) {
  return relHref(sitePath, pageSitePath(p.category, p.slug));
}

function itemLi(sitePath, p, extra = '') {
  return `<li><a href="${pageHref(sitePath, p)}">${esc(p.title)}</a> <span class="refs">${extra}</span></li>`;
}

/** 从 synthesis 页提取年份：frontmatter date → 文件名 → 其他 */
function yearOf(p) {
  const d = p.fm.date;
  if (d) {
    const y = d.slice(0, 4);
    if (/^\d{4}$/.test(y)) return y;
  }
  const m = p.slug.match(/^来源_(\d{4})/);
  return m ? m[1] : '其他';
}

const TYPE_LABELS = { company: '公司', protocol: '协议', project: '项目', person: '人物' };
const SOURCE_TYPE_LABELS = { article: '文章', report: '研报', tweet: '推文', podcast: '播客', video: '视频', note: '笔记', unknown: '其他' };

/** 分类列表页 */
export function renderListing(ctx, name) {
  const sitePath = staticSitePath(name);
  const pages = ctx.contentPages.filter((p) => p.category === name);
  const catColor = CATEGORY_COLORS[name];
  let html = '';

  if (name === 'concepts') {
    const sorted = [...pages].sort((a, b) => (b.backlinkCount || 0) - (a.backlinkCount || 0));
    html = `<ul class="listing">${sorted.map((p) => itemLi(sitePath, p, `${p.backlinkCount} 链`)).join('')}</ul>`;
  } else if (name === 'entities') {
    const groups = {};
    for (const p of pages) {
      const t = TYPE_LABELS[p.fm.entity_type] || '其他';
      (groups[t] ||= []).push(p);
    }
    html = Object.entries(groups)
      .map(([t, ps]) => {
        const sorted = [...ps].sort((a, b) => (b.backlinkCount || 0) - (a.backlinkCount || 0));
        return `<section class="listing-group"><h2>${t} <span class="refs">${ps.length}</span></h2><ul class="listing">${sorted.map((p) => itemLi(sitePath, p, `${p.backlinkCount} 链`)).join('')}</ul></section>`;
      })
      .join('');
  } else if (name === 'theses') {
    const sorted = [...pages].sort((a, b) => (b.fm.confidence || 0) - (a.fm.confidence || 0));
    html = `<ul class="listing">${sorted
      .map((p) => itemLi(sitePath, p, `置信度 ${p.fm.confidence ?? '—'}/10 · ${esc(p.fm.status || '')}`))
      .join('')}</ul>`;
  } else if (name === 'synthesis') {
    const years = {};
    for (const p of pages) {
      const y = yearOf(p);
      (years[y] ||= []).push(p);
    }
    const order = Object.keys(years).sort((a, b) => (a === '其他' ? -1 : b === '其他' ? 1 : b.localeCompare(a)));
    html = order
      .map((y) => {
        const sorted = [...years[y]].sort((a, b) => (b.fm.date || '').localeCompare(a.fm.date || ''));
        return `<section class="listing-group"><h2>${y} <span class="refs">${sorted.length}</span></h2><ul class="listing">${sorted
          .map((p) => itemLi(sitePath, p, SOURCE_TYPE_LABELS[p.fm.source_type] || ''))
          .join('')}</ul></section>`;
      })
      .join('');
  }

  const desc = CATEGORIES[name].description;
  const body = `
<div class="page-head">
  <div class="crumb"><span class="crumb-cat" style="color:${catColor}">${CATEGORY_LABELS[name]}</span> · ${pages.length} 页</div>
  <h1>${CATEGORIES[name].label} 索引</h1>
  <p class="muted">${esc(desc)}</p>
</div>
${html}`;

  return layout(ctx, { sitePath, title: `${CATEGORIES[name].label} 索引`, body, active: name, description: desc });
}

/** 全量索引页：渲染 wiki/index.md */
export function renderFullIndex(ctx, renderer) {
  const sitePath = staticSitePath('index');
  const raw = readText(`${WIKI_DIR}/index.md`) || '# 总索引';
  const bodyMd = transformWikilinks(raw, { bySlug: ctx.bySlug, byAlias: ctx.byAlias, warnings: ctx.warnings }, sitePath);
  const { html } = renderer.render(bodyMd);
  const body = `<div class="page-head"><h1>总索引</h1><p class="muted">来自 wiki/index.md · ${ctx.contentPages.length} 页</p></div><div class="article">${html}</div>`;
  return layout(ctx, { sitePath, title: '总索引', body, active: 'index', description: '全量索引' });
}
