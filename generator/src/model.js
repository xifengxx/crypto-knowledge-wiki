import { parseFrontmatter } from './frontmatter.js';

/** 从正文提取第一个 H1 标题 */
function firstH1(body) {
  const m = body.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : null;
}

/**
 * Page 模型：包装一个知识页的元数据与正文。
 * @param {object} p { category, filePath, slug, raw }
 */
export function createPage(p) {
  const { fm, body, ok } = parseFrontmatter(p.raw);
  const title = firstH1(body) || fm.title || p.slug;
  return {
    category: p.category,
    slug: p.slug,
    filePath: p.filePath,
    fm,
    body,
    title,
    hasFrontmatter: ok,
    // 后面由 indexer/wikilink 阶段填充
    wikilinks: [],      // [{ target, text, resolved, resolvedPage, fromIndex }]
    backlinks: [],      // [{ fromPage, text }]（渲染用，指向本页的链接）
    outbound: new Set(), // 解析成功的目标短名
  };
}

/** 分类颜色速查（从 CATEGORIES 读，避免循环依赖在此处内联） */
export const CATEGORY_COLORS = {
  concepts: '#2563EB',
  entities: '#059669',
  theses: '#B45309',
  synthesis: '#6B7280',
};
export const CATEGORY_LABELS = {
  concepts: '概念',
  entities: '实体',
  theses: '论点',
  synthesis: '来源',
};
