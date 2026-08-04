import { RESOLVE_ORDER } from './config.js';

/**
 * 构建全局名称索引：短名 → 页面、别名 → 短名、冲突审计。
 *
 * @param {Array<object>} pages 已 createPage 的知识页（含 _index.md，会被排除）
 * @returns {{ bySlug: Map, byAlias: Map, conflicts: Array, aliasWarnings: Array }}
 */
export function buildIndex(pages) {
  const bySlug = new Map();
  const byAlias = new Map();
  const conflicts = [];
  const aliasWarnings = [];
  const priority = Object.fromEntries(RESOLVE_ORDER.map((c, i) => [c, i]));

  for (const page of pages) {
    if (page.slug === '_index') continue; // 元索引页不参与内容解析
    const key = page.slug.toLowerCase();
    const existing = bySlug.get(key);
    if (existing) {
      // 冲突：取优先级高者（靠前的分类），记录审计
      const curPri = priority[existing.category] ?? 99;
      const newPri = priority[page.category] ?? 99;
      if (newPri < curPri) {
        bySlug.set(key, page);
        conflicts.push(`短名冲突 "${page.slug}": ${existing.category}/${existing.slug} → ${page.category}/${page.slug} (优先 ${page.category})`);
      } else {
        conflicts.push(`短名冲突 "${page.slug}": ${page.category}/${page.slug} 被 ${existing.category}/${existing.slug} 遮蔽`);
      }
    } else {
      bySlug.set(key, page);
    }

    // 别名索引（大小写不敏感）
    for (const alias of page.fm.aliases || []) {
      const ak = alias.toLowerCase();
      if (!byAlias.has(ak)) byAlias.set(ak, key);
    }
  }

  return { bySlug, byAlias, conflicts, aliasWarnings };
}

/** 解析 wikilink 目标：短名（或带前缀）→ 页面。返回页面或 null。 */
export function resolveTarget(target, bySlug, byAlias, warnings) {
  // 剥离分类前缀：theses/xxx、synthesis/xxx 等
  let catPrefix = null;
  let name = target;
  const m = target.match(/^(concepts|entities|theses|synthesis)\/(.+)$/);
  if (m) {
    catPrefix = m[1];
    name = m[2];
  }

  const key = name.toLowerCase();
  let page = bySlug.get(key);
  if (page && catPrefix && page.category !== catPrefix) page = null; // 前缀不匹配则视为未命中
  if (!page && !catPrefix) {
    // 别名回退（记录 warning）
    const aliasKey = byAlias.get(key);
    if (aliasKey) {
      page = bySlug.get(aliasKey);
      if (page) warnings.push(`别名解析: "${target}" → ${page.category}/${page.slug}`);
    }
  }
  return page;
}
