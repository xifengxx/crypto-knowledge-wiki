import { layout } from './page.js';
import { relHref, staticSitePath, pageSitePath } from './fs-utils.js';
import { CATEGORIES, SITE } from './config.js';
import { CATEGORY_COLORS, pageSnippet } from './model.js';

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/** 按反链数排序取前 N */
function topByRefs(pages, n) {
  return [...pages].sort((a, b) => (b.backlinkCount || 0) - (a.backlinkCount || 0)).slice(0, n);
}

/** 知识卡片（标题 + 摘要 + 元信息），按分类着色左侧色条与元信息 */
function kCard(ctx, sitePath, p, meta) {
  const href = relHref(sitePath, pageSitePath(p.category, p.slug));
  const color = CATEGORY_COLORS[p.category] || '#B45309';
  return `<a class="k-card" style="--card-accent:${color}" href="${href}">
    <div class="k-card-head">
      <span class="k-card-title">${esc(p.title)}</span>
      <span class="k-card-refs" title="被引次数">${p.backlinkCount || 0} 引</span>
    </div>
    ${meta ? `<div class="k-card-meta">${meta}</div>` : ''}
    <p class="k-card-desc">${esc(pageSnippet(p))}</p>
  </a>`;
}

/** 模块骨架：标题 + 解释 + 卡片网格 */
function moduleSection(ctx, sitePath, { id, color, title, en, desc, moreHref, moreLabel, cards }) {
  return `<section class="module" id="${id}">
    <header class="module-head">
      <div class="module-head-text">
        <h2 class="module-title"><span class="module-dot" style="background:${color}"></span>${title} <span class="module-en">${en}</span></h2>
        <p class="module-desc">${desc}</p>
      </div>
      <a class="module-more" href="${relHref(sitePath, staticSitePath(moreHref))}">${moreLabel} →</a>
    </header>
    <div class="k-grid">${cards.join('')}</div>
  </section>`;
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

  const lastUpdated = pages.reduce((mx, p) => {
    const d = p.fm.updated || p.fm.created;
    return d && d > mx ? d : mx;
  }, '');

  // 统计条
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

  // 概念模块（9 卡 3x3）
  const topConcepts = topByRefs(concepts, 9);
  const conceptCards = topConcepts.map((p) => kCard(ctx, sitePath, p));
  const conceptModule = moduleSection(ctx, sitePath, {
    id: 'concepts',
    color: CATEGORY_COLORS.concepts,
    title: '概念',
    en: 'Concepts',
    desc: '什么是概念？概念是知识库的核心主题单元，把分散的素材提炼成可复用的认知框架。热门概念覆盖稳定币、DeFi、L2、AI Agent 等——点击卡片进入完整解读。',
    moreHref: 'concepts',
    moreLabel: '全部 93 个概念',
    cards: conceptCards,
  });

  // 实体模块（6 卡）
  const topEntities = topByRefs(entities, 6);
  const entityCards = topEntities.map((p) => kCard(ctx, sitePath, p, esc({ company: '公司', protocol: '协议', project: '项目', person: '人物' }[p.fm.entity_type] || p.fm.entity_type || '')));
  const entityModule = moduleSection(ctx, sitePath, {
    id: 'entities',
    color: CATEGORY_COLORS.entities,
    title: '实体',
    en: 'Entities',
    desc: '什么是实体？实体是项目、人物、公司与协议的具体档案，记录每个参与者的业务、数据与风险。以下是最受关注的核心实体。',
    moreHref: 'entities',
    moreLabel: `全部 ${countBy.entities || 0} 个实体`,
    cards: entityCards,
  });

  // 投资论点模块（3 卡）
  const thesesSorted = [...theses].sort((a, b) => (b.fm.confidence || 0) - (a.fm.confidence || 0)).slice(0, 3);
  const thesisCards = thesesSorted.map((p) => {
    const conf = p.fm.confidence ?? 0;
    const stMap = { active: '活跃', forming: '形成中', invalidated: '已证伪', confirmed: '已确认' };
    const badge = `<span class="t-badge t-${esc(p.fm.status || 'active')}">${stMap[p.fm.status] || p.fm.status}</span>`;
    return `<a class="k-card t-card" href="${relHref(sitePath, pageSitePath(p.category, p.slug))}">
      <div class="k-card-head">
        <span class="k-card-title">${esc(p.title)}</span>
        ${badge}
      </div>
      <div class="t-conf"><div class="conf-bar"><div style="width:${conf * 10}%"></div></div><b>${conf}/10</b></div>
      <p class="k-card-desc">${esc(pageSnippet(p))}</p>
    </a>`;
  });
  const thesisModule = moduleSection(ctx, sitePath, {
    id: 'theses',
    color: CATEGORY_COLORS.theses,
    title: '投资论点',
    en: 'Theses',
    desc: '什么是投资论点？论点是一条可验证的判断，用证据支撑、用反证检验，并随新信息持续更新置信度。以下为置信度最高的三条。',
    moreHref: 'theses',
    moreLabel: `全部 ${countBy.theses || 0} 条论点`,
    cards: thesisCards,
  });

  // 最近综述模块（6 卡）
  const recentSyn = [...synthesis]
    .sort((a, b) => (b.fm.date || '').localeCompare(a.fm.date || ''))
    .slice(0, 6);
  const synCards = recentSyn.map((p) => kCard(ctx, sitePath, p, `${(p.fm.date || '').slice(0, 7)} · ${esc(p.fm.source_type || '')}`));
  const synModule = moduleSection(ctx, sitePath, {
    id: 'synthesis',
    color: CATEGORY_COLORS.synthesis,
    title: '最近综述',
    en: 'Recent Sources',
    desc: '什么是综述？综述是每篇素材的精炼摘要，保留核心数据、观点与出处，构成知识库可溯源的事实基准。按时间倒序。',
    moreHref: 'synthesis',
    moreLabel: `全部 ${countBy.synthesis || 0} 篇综述`,
    cards: synCards,
  });

  const graphHref = relHref(sitePath, staticSitePath('graph'));
  const searchHref = relHref(sitePath, staticSitePath('search'));
  const indexHref = relHref(sitePath, staticSitePath('index'));

  const body = `
<section class="hero">
  <h1>${SITE.title}</h1>
  <p>${SITE.tagline}</p>
</section>
<div class="stats">${stats}</div>
${conceptModule}
${entityModule}
${thesisModule}
${synModule}
<section class="grid2 cta-row">
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
