import fs from 'node:fs';
import path from 'node:path';
import { CATEGORIES } from './config.js';

/** 扫描 wiki 下所有知识页 .md，返回 [{category, filePath, slug}] */
export function scanPages(wikiDir) {
  const pages = [];
  for (const [category, meta] of Object.entries(CATEGORIES)) {
    const dir = path.join(wikiDir, category);
    if (!fs.existsSync(dir)) continue;
    for (const fname of fs.readdirSync(dir)) {
      if (!fname.endsWith('.md')) continue;
      pages.push({
        category,
        filePath: path.join(dir, fname),
        slug: fname.slice(0, -3),
      });
    }
  }
  return pages;
}

/** wiki 根目录下需要排除的文件（index/log 单独处理，不进图谱/反链） */
export const EXCLUDE_ROOT = new Set(['index.md', 'log.md', 'log.md.bak', 'README.md']);

/** 读取文件，UTF-8，失败返回 null */
export function readText(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }
}

/** 相对 URL：从 fromPath 到 toPath（均以 SITE_DIR 为根，无前导斜杠）。深度感知 */
export function relUrl(fromPath, toPath) {
  const from = fromPath.split('/').filter(Boolean);
  const to = toPath.split('/').filter(Boolean);
  // 去掉共同前缀
  let i = 0;
  while (i < from.length && i < to.length && from[i] === to[i]) i++;
  const up = from.length - i - 1; // 上一级（from 若是文件则 -1，若是目录则保持不变）
  const down = to.slice(i).map(encodeURIComponent);
  const ups = Array(Math.max(0, up)).fill('..');
  const segs = [...ups, ...down];
  if (segs.length === 0) return './';
  return segs.join('/');
}

/**
 * 页面输出的站点路径：`<cat>/<slug>/index.html`。
 * 注意：slug 保持原始值（不预编码），由 relUrl 统一做一次 URL 编码，避免双重编码。
 * @param {string} category
 * @param {string} slug
 */
export function pageSitePath(category, slug) {
  return `${category}/${slug}/index.html`;
}

/** 相对链接 href：从页面 A（site path）指向页面 B 或静态页。返回目录形式 URL（去 index.html）。 */
export function relHref(fromSitePath, toSitePath) {
  return relUrl(fromSitePath, toSitePath).replace(/index\.html$/, '');
}

/** 静态页（首页/图谱/搜索/分类索引）输出路径 */
export function staticSitePath(name) {
  if (name === '') return 'index.html';
  return `${name}/index.html`;
}
