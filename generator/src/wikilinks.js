import { resolveTarget } from './indexer.js';

const WIKILINK_RE = /\[\[([^\[\]]+)\]\]/g;

/**
 * 从正文提取 wikilink 列表。
 * 处理 `[[target|display]]`、`[[target]]`、`[[前缀/target]]`。
 */
export function extractWikilinks(body) {
  const links = [];
  let m;
  while ((m = WIKILINK_RE.exec(body))) {
    const raw = m[1];
    const pipeIdx = raw.indexOf('|');
    const target = (pipeIdx >= 0 ? raw.slice(0, pipeIdx) : raw).trim();
    const display = pipeIdx >= 0 ? raw.slice(pipeIdx + 1).trim() : null;
    links.push({ target, display, fromIndex: m.index, raw: m[0] });
  }
  return links;
}

/**
 * 两遍法第二步：解析所有 wikilink、收集有向边、累计反链。
 *
 * @returns {{ backlinks: Map<string, Array>, totalLinks: number, resolvedCount: number, danglingCount: number, edges: Set<string> }}
 */
export function processWikilinks(pages, bySlug, byAlias, warnings) {
  const backlinks = new Map(); // key `${cat}:${slug}` → [{ from, display }]
  const edges = new Set();     // `${a}|${b}` 去重无向边（有向存储，去重时排序）
  let totalLinks = 0;
  let resolvedCount = 0;
  let danglingCount = 0;

  for (const page of pages) {
    const links = extractWikilinks(page.body);
    const outbound = new Set();
    for (const link of links) {
      totalLinks++;
      const resolved = resolveTarget(link.target, bySlug, byAlias, warnings);
      link.resolved = resolved;
      if (resolved) {
        resolvedCount++;
        const key = `${resolved.category}:${resolved.slug}`;
        outbound.add(key);
        // 反链：target 页记录"谁链接了我"
        if (!backlinks.has(key)) backlinks.set(key, []);
        backlinks.get(key).push({ from: page.category + ':' + page.slug, display: link.display });
        // 有向边（source → target），去重
        edges.add(`${page.category}:${page.slug}|${key}`);
      } else {
        danglingCount++;
      }
    }
    page.wikilinks = links;
    page.outbound = outbound;
  }

  return { backlinks, totalLinks, resolvedCount, danglingCount, edges };
}
