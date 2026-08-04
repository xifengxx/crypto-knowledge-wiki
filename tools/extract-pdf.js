#!/usr/bin/env node
/**
 * PDF 提取工具 — 将 PDF 研报/文档转为 raw/reports/ 下的 Markdown
 *
 * 用法：
 *   node extract-pdf.js ~/Downloads/某研报.pdf                提取单个 PDF
 *   node extract-pdf.js ~/Downloads/*.pdf                      批量提取
 *   node extract-pdf.js --dir ~/Downloads/reports/             提取目录下所有 PDF
 *
 * 输出：raw/reports/YYYY-MM-DD_文件名.md
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "fs";
import { resolve, basename, extname, join, dirname } from "path";
import { fileURLToPath } from "url";
import pdfParse from "pdf-parse";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPORTS_DIR = resolve(__dirname, "..", "raw", "reports");

// --- 处理单个 PDF ---
async function processPDF(filepath) {
  const filename = basename(filepath, extname(filepath));
  const safeName = filename.replace(/[/\\?%*:|"<>]/g, "-").slice(0, 80);

  console.log(`📄 ${filename}`);

  const dataBuffer = readFileSync(filepath);
  const data = await pdfParse(dataBuffer);

  const today = new Date().toISOString().slice(0, 10);

  // 构建 frontmatter
  const frontmatter = [
    "---",
    `title: "${filename}"`,
    `source_type: pdf`,
    `pages: ${data.numpages}`,
    `extracted: "${today}"`,
    `info:`,
    `  author: "${data.info?.Author || "未知"}"`,
    `  creator: "${data.info?.Creator || "未知"}"`,
    `  producer: "${data.info?.Producer || "未知"}"`,
    "---",
  ].join("\n");

  const content = `${frontmatter}\n\n# ${filename}\n\n> ${data.numpages} 页 · 自动提取自 PDF\n\n${data.text}`;

  // 写入
  if (!existsSync(REPORTS_DIR)) mkdirSync(REPORTS_DIR, { recursive: true });
  const outPath = join(REPORTS_DIR, `${today}_${safeName}.md`);
  writeFileSync(outPath, content, "utf-8");

  const kb = (Buffer.byteLength(content, "utf-8") / 1024).toFixed(0);
  console.log(`  ✅ raw/reports/${basename(outPath)} (${data.numpages} 页, ${kb}KB)`);

  return outPath;
}

// --- 主入口 ---
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("--help")) {
    console.log(`
用法:
  node extract-pdf.js <pdf文件>            提取单个 PDF
  node extract-pdf.js <pdf1> <pdf2> ...    提取多个 PDF
  node extract-pdf.js --dir <目录>          提取目录下所有 PDF
`);
    process.exit(0);
  }

  let files = [];

  if (args[0] === "--dir" && args[1]) {
    const dir = resolve(args[1]);
    files = readdirSync(dir)
      .filter((f) => f.toLowerCase().endsWith(".pdf"))
      .map((f) => join(dir, f));
  } else {
    files = args
      .filter((a) => a.toLowerCase().endsWith(".pdf"))
      .map((a) => resolve(a));
  }

  if (files.length === 0) {
    console.log("未找到 PDF 文件");
    process.exit(0);
  }

  console.log(`📚 提取 ${files.length} 个 PDF\n`);

  for (const file of files) {
    try {
      await processPDF(file);
    } catch (err) {
      console.log(`  ❌ ${err.message}`);
    }
    console.log();
  }

  console.log(`✅ 完成。提取的文件在 raw/reports/ 目录下`);
}

main().catch((err) => {
  console.error("❌", err.message);
  process.exit(1);
});
