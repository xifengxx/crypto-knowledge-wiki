#!/usr/bin/env node
/**
 * Notion → raw/ 导出工具
 *
 * 用法：
 *   1. 设置环境变量：export NOTION_TOKEN="ntn_xxx"
 *   2. 导出整个数据库：node notion-export.js --db <database_id>
 *   3. 导出单个页面：node notion-export.js --page <page_id>
 *   4. 搜索并导出：  node notion-export.js --search "关键词"
 *
 * 如何获取 Notion Token：
 *   - 去 https://www.notion.so/my-integrations 创建 Integration
 *   - 在 Notion 页面里把 Integration 加为 Connection
 *   - 或者从 NotionSnap 扩展的设置里复制已有的 Token
 *
 * 输出：raw/articles/ 下按日期命名的 .md 文件
 */

import { Client } from "@notionhq/client";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RAW_DIR = resolve(__dirname, "..", "raw", "articles");

const NOTION_TOKEN = process.env.NOTION_TOKEN;
if (!NOTION_TOKEN) {
  console.error("❌ 请设置 NOTION_TOKEN 环境变量");
  console.error("   export NOTION_TOKEN='ntn_...'");
  process.exit(1);
}

const notion = new Client({ auth: NOTION_TOKEN });

// --- 将 Notion blocks 转换为 Markdown ---
function blocksToMarkdown(blocks) {
  let md = "";

  for (const block of blocks) {
    const { type, id } = block;
    const content = block[type];
    if (!content) continue;

    const richText = content.rich_text || [];
    const text = richText.map((t) => t.plain_text).join("");

    switch (type) {
      case "heading_1":
        md += `# ${text}\n\n`;
        break;
      case "heading_2":
        md += `## ${text}\n\n`;
        break;
      case "heading_3":
        md += `### ${text}\n\n`;
        break;
      case "paragraph":
        // Handle inline formatting
        const paraText = richText
          .map((t) => {
            let s = t.plain_text;
            if (t.annotations.bold) s = `**${s}**`;
            if (t.annotations.italic) s = `*${s}*`;
            if (t.annotations.code) s = `\`${s}\``;
            if (t.annotations.strikethrough) s = `~~${s}~~`;
            if (t.href) s = `[${s}](${t.href})`;
            return s;
          })
          .join("");
        md += `${paraText}\n\n`;
        break;
      case "bulleted_list_item":
        md += `- ${text}\n`;
        break;
      case "numbered_list_item":
        md += `1. ${text}\n`;
        break;
      case "quote":
        md += `> ${text}\n\n`;
        break;
      case "code":
        const lang = content.language || "";
        md += `\`\`\`${lang}\n${text}\n\`\`\`\n\n`;
        break;
      case "divider":
        md += `---\n\n`;
        break;
      case "image":
        const url = content.type === "external" ? content.external?.url : content.file?.url;
        md += `![${content.caption?.[0]?.plain_text || "image"}](${url})\n\n`;
        break;
      case "table":
        md += `<!-- table block ${id} — 需要手动转换 -->\n\n`;
        break;
      case "child_page":
        md += `→ 子页面: ${content.title}\n\n`;
        break;
      default:
        if (text) md += `${text}\n\n`;
    }
  }

  return md;
}

// --- 递归获取所有 blocks ---
async function getAllBlocks(blockId) {
  let blocks = [];
  let cursor = undefined;

  while (true) {
    const res = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 100,
    });
    blocks.push(...res.results);
    if (!res.has_more) break;
    cursor = res.next_cursor;
  }

  // 递归获取嵌套 blocks（如 toggle、column 等）
  for (const block of blocks) {
    if (block.has_children) {
      const children = await getAllBlocks(block.id);
      blocks.push(...children);
    }
  }

  return blocks;
}

// --- 导出单个页面 ---
async function exportPage(pageId) {
  const page = await notion.pages.retrieve({ page_id: pageId });

  // 提取标题
  let title = "未命名";
  const titleProp = Object.values(page.properties || {}).find(
    (p) => p.type === "title"
  );
  if (titleProp) {
    title = titleProp.title?.map((t) => t.plain_text).join("") || "未命名";
  }

  // 提取日期
  const createdDate = page.created_time?.slice(0, 10) || "unknown-date";
  const safeTitle = title.replace(/[/\\?%*:|"<>]/g, "-").slice(0, 60);

  console.log(`📄 导出: ${title}`);

  // 获取 blocks
  const blocks = await getAllBlocks(pageId);
  const markdown = blocksToMarkdown(blocks);

  // 生成 frontmatter
  const frontmatter = [
    "---",
    `title: "${title}"`,
    `source: notion`,
    `notion_id: "${pageId}"`,
    `notion_url: "https://notion.so/${pageId.replace(/-/g, "")}"`,
    `created: "${createdDate}"`,
    `exported: "${new Date().toISOString().slice(0, 10)}"`,
    "---",
  ].join("\n");

  const content = `${frontmatter}\n\n# ${title}\n\n${markdown}`;

  // 写入文件
  if (!existsSync(RAW_DIR)) mkdirSync(RAW_DIR, { recursive: true });
  const filename = `${createdDate}_${safeTitle}.md`;
  const filepath = resolve(RAW_DIR, filename);
  writeFileSync(filepath, content, "utf-8");

  console.log(`  ✅ 已保存: raw/articles/${filename}`);
  return filepath;
}

// --- 搜索页面 ---
async function searchPages(query) {
  const res = await notion.search({
    query,
    filter: { property: "object", value: "page" },
    sort: { direction: "descending", timestamp: "last_edited_time" },
    page_size: 20,
  });

  return res.results;
}

// --- 列出数据库中的页面 ---
async function listDatabasePages(dbId) {
  let pages = [];
  let cursor = undefined;

  while (true) {
    const res = await notion.databases.query({
      database_id: dbId,
      start_cursor: cursor,
      page_size: 100,
    });
    pages.push(...res.results);
    if (!res.has_more) break;
    cursor = res.next_cursor;
  }

  return pages;
}

// --- 主入口 ---
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
用法:
  node notion-export.js --db <database_id>    导出整个数据库
  node notion-export.js --page <page_id>      导出单个页面
  node notion-export.js --search "关键词"      搜索并交互式导出

环境变量:
  NOTION_TOKEN  你的 Notion Integration Token
`);
    process.exit(0);
  }

  // 测试连接
  try {
    const me = await notion.users.me({});
    console.log(`🔗 已连接 Notion (bot: ${me.name})\n`);
  } catch {
    console.error("❌ Notion 连接失败，请检查 NOTION_TOKEN");
    process.exit(1);
  }

  const mode = args[0];
  const target = args[1];

  if (mode === "--page" && target) {
    await exportPage(target);
  } else if (mode === "--db" && target) {
    console.log("📚 读取数据库...");
    const pages = await listDatabasePages(target);
    console.log(`找到 ${pages.length} 个页面\n`);
    for (const page of pages) {
      await exportPage(page.id);
      // 小延迟避免 rate limit
      await new Promise((r) => setTimeout(r, 500));
    }
  } else if (mode === "--search" && target) {
    console.log(`🔍 搜索: "${target}"\n`);
    const pages = await searchPages(target);
    console.log(`找到 ${pages.length} 个页面:\n`);
    pages.forEach((p, i) => {
      const title =
        Object.values(p.properties || {})
          .find((prop) => prop.type === "title")
          ?.title?.map((t) => t.plain_text)
          .join("") || "无标题";
      console.log(`  [${i + 1}] ${title} (${p.id})`);
    });
    console.log(
      `\n用 --page <id> 导出指定页面，或 --all 导出全部 ${pages.length} 个页面`
    );
  } else {
    console.error("❌ 未知参数。试试 --help 查看用法");
  }

  console.log("\n✅ 导出完成。运行: cd ~/knowledge && claude 开始 ingest");
}

main().catch((err) => {
  console.error("❌ 错误:", err.message);
  process.exit(1);
});
