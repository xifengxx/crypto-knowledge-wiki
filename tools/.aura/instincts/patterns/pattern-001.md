---
id: pattern-001
category: auth
language: javascript
score: 50
tags: [auth, javascript]
---

## 컨텍스트
파일: extract-pdf.js (Write 완료)

## 핵심 코드
```javascript
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
```

## 태그
- auth
- javascript