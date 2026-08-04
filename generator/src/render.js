import MarkdownIt from 'markdown-it';
import { relHref, pageSitePath } from './fs-utils.js';
import { extractWikilinks } from './wikilinks.js';
import { resolveTarget } from './indexer.js';

/** 标题 slug：保留中英文与数字，其余转连字符；用于 TOC 锚点 */
function slugifyHeading(text) {
  return String(text)
    .toLowerCase()
    .replace(/[\s　]+/g, '-')
    .replace(/[^\p{L}\p{N}-]/gu, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * 创建渲染器。返回 { render(body) → { html, toc } }。
 * toc 为 [{ level, text, id }]。
 */
export function createRenderer() {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: false,
  });
  const seen = {};
  const toc = [];
  const getHeadingId = (text) => {
    let id = slugifyHeading(text) || 'h';
    let base = id;
    let n = 2;
    while (seen[id]) id = `${base}-${n++}`;
    seen[id] = true;
    return id;
  };
  md.renderer.rules.heading_open = (tokens, idx) => {
    const tok = tokens[idx];
    const inline = tokens[idx + 1];
    const text = inline ? inline.content : '';
    const id = getHeadingId(text);
    toc.push({ level: Number(tok.tag[1]), text, id });
    return `<h${tok.tag[1]} id="${id}">`;
  };

  return {
    render(body) {
      toc.length = 0;
      const html = md.render(body);
      return { html, toc: toc.slice() };
    },
  };
}

/**
 * 将正文中的 [[wikilink]] 替换为 markdown 链接或占位（从后往前替换）。
 */
export function transformBody(body, wikilinks, fromSitePath) {
  if (!wikilinks.length) return body;
  for (const link of wikilinks) {
    buildLinkReplacement(link, fromSitePath);
  }
  const parts = [];
  let last = body.length;
  const sorted = [...wikilinks].sort((a, b) => b.fromIndex - a.fromIndex);
  for (const link of sorted) {
    const end = link.fromIndex + link.raw.length;
    parts.push(body.slice(end, last));
    parts.push(link.replacement);
    last = link.fromIndex;
  }
  parts.push(body.slice(0, last));
  return parts.reverse().join('');
}

/**
 * 通用：把任意正文里的 wikilink 解析并转换为可渲染 markdown。
 * @param {string} body
 * @param {{bySlug: Map, byAlias: Map, warnings: Array}} resolveCtx
 * @param {string} sitePath
 */
export function transformWikilinks(body, resolveCtx, sitePath) {
  const links = extractWikilinks(body);
  for (const link of links) {
    link.resolved = resolveTarget(link.target, resolveCtx.bySlug, resolveCtx.byAlias, resolveCtx.warnings);
    buildLinkReplacement(link, sitePath);
  }
  return transformBody(body, links, sitePath);
}

function buildLinkReplacement(link, fromSitePath) {
  const resolved = link.resolved;
  const text = link.display || (resolved ? resolved.title : link.target);
  if (resolved) {
    const href = relHref(fromSitePath, pageSitePath(resolved.category, resolved.slug));
    link.replacement = `[${text}](${href})`;
  } else {
    link.replacement = `<span class="wikilink missing" data-target="${escapeHtml(link.target)}" title="尚未收录">${escapeHtml(text)}</span>`;
  }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}
