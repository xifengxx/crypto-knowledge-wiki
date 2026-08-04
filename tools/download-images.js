#!/usr/bin/env node
/**
 * 下载 raw/articles/*.md 中引用的外部图片到 raw/images/
 *
 * 用法：
 *   node download-images.js              处理所有文章
 *   node download-images.js --dry-run    仅列出，不下载
 */

import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, basename, dirname, extname, join } from "path";
import { fileURLToPath } from "url";
import https from "https";
import http from "http";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ARTICLES_DIR = resolve(__dirname, "..", "raw", "articles");
const IMAGES_DIR = resolve(__dirname, "..", "raw", "images");
const DRY_RUN = process.argv.includes("--dry-run");

// --- 下载单张图片 ---
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client
      .get(url, { timeout: 15000 }, (res) => {
        // 处理重定向
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          downloadImage(res.headers.location).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode}`));
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      })
      .on("error", reject)
      .on("timeout", () => {
        client.destroy();
        reject(new Error("timeout"));
      });
  });
}

// --- 从 URL 中提取合理的文件名 ---
function filenameFromUrl(url) {
  try {
    const pathname = new URL(url).pathname;
    const name = basename(pathname);
    // 如果无扩展名或扩展名太奇怪，补 .jpg
    const ext = extname(name).toLowerCase();
    if ([".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp"].includes(ext)) {
      return name;
    }
    return name + ".jpg";
  } catch {
    return "image_" + Date.now() + ".jpg";
  }
}

// --- 处理单篇文章 ---
async function processArticle(filepath) {
  const basename_noext = basename(filepath, ".md").slice(0, 50).replace(/[/\\?%*:|"<>]/g, "-");
  const content = readFileSync(filepath, "utf-8");

  // 匹配 Markdown 图片语法: ![alt](url)
  const imgRegex = /!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/g;
  const images = [];
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    images.push({ alt: match[1], url: match[2], fullMatch: match[0] });
  }

  if (images.length === 0) {
    console.log(`  📝 无图片`);
    return;
  }

  const articleImgDir = join(IMAGES_DIR, basename_noext);
  if (!DRY_RUN && !existsSync(articleImgDir)) {
    mkdirSync(articleImgDir, { recursive: true });
  }

  let newContent = content;
  let downloaded = 0;
  let failed = 0;

  for (let i = 0; i < images.length; i++) {
    const { url, fullMatch, alt } = images[i];
    const filename = `${String(i + 1).padStart(2, "0")}_${filenameFromUrl(url)}`;
    const localPath = join(articleImgDir, filename);
    const relativeRef = `../raw/images/${basename_noext}/${filename}`;

    if (DRY_RUN) {
      console.log(`  📷 ${url.slice(0, 80)}... → raw/images/${basename_noext}/${filename}`);
      continue;
    }

    // 如果已下载则跳过
    if (existsSync(localPath)) {
      console.log(`  ⏭️  已有: ${filename}`);
      newContent = newContent.replace(fullMatch, `![${alt}](${relativeRef})`);
      downloaded++;
      continue;
    }

    try {
      process.stdout.write(`  ⬇ ${filename.slice(0, 50)}... `);
      const data = await downloadImage(url);
      writeFileSync(localPath, data);
      newContent = newContent.replace(fullMatch, `![${alt}](${relativeRef})`);
      console.log(`✅ ${(data.length / 1024).toFixed(0)}KB`);
      downloaded++;
    } catch (err) {
      console.log(`❌ ${err.message}`);
      failed++;
    }

    // 小延迟避免被限流
    if (!DRY_RUN && i < images.length - 1) {
      await new Promise((r) => setTimeout(r, 200));
    }
  }

  // 写回文章（替换所有 URL 为本地路径）
  if (!DRY_RUN && downloaded > 0) {
    writeFileSync(filepath, newContent, "utf-8");
  }

  console.log(`  📊 ${downloaded} 下载 / ${failed} 失败 / ${images.length} 总数`);
  return { downloaded, failed };
}

// --- 主入口 ---
async function main() {
  const files = readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".md"));

  if (files.length === 0) {
    console.log("raw/articles/ 中没有 .md 文件");
    return;
  }

  console.log(`${DRY_RUN ? "🔍 DRY RUN" : "📥 下载图片"} — ${files.length} 篇文章\n`);

  let totalDown = 0;
  let totalFailed = 0;
  let totalImages = 0;

  for (const file of files) {
    const filepath = join(ARTICLES_DIR, file);
    console.log(`📄 ${file}`);
    try {
      const result = await processArticle(filepath);
      if (result) {
        totalDown += result.downloaded;
        totalFailed += result.failed;
      }
    } catch (err) {
      console.log(`  ❌ 处理失败: ${err.message}`);
    }
    console.log();
  }

  if (!DRY_RUN) {
    console.log(`✅ 完成。${totalDown} 张图片已下载到 raw/images/`);
    if (totalFailed > 0) console.log(`⚠️  ${totalFailed} 张下载失败`);
  }
}

main().catch((err) => {
  console.error("❌", err.message);
  process.exit(1);
});
