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

/** 清理正文片段：去 wikilink/标记符，压缩空白，截断 */
function cleanSnippet(s) {
  return s
    .replace(/\[\[([^\]|]*)(?:\|[^\]]*)?\]\]/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/[#*_`>|~]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * 提取页面摘要（供首页卡片展示）：
 * 概念页优先取「一句话定义」小节；其他取首个有意义段落；截断 ~90 字。
 */
export function pageSnippet(page) {
  const body = page.body || '';
  let snippet = '';
  const def = body.match(/##\s*一句话定义\s*\n+([^\n#]{10,})/);
  if (def) snippet = def[1].trim();
  if (snippet.length < 10) {
    const para = body.match(/\n\n\s*([^\n#\[][^\n]{20,})/);
    if (para) snippet = para[1].trim();
  }
  const cleaned = cleanSnippet(snippet);
  return cleaned.length > 90 ? cleaned.slice(0, 90).replace(/[，。、；：,.;:\s]+$/, '') + '…' : cleaned;
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
