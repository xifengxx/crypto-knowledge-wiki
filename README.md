# 知识图谱 · 个人知识库

基于 Karpathy llm-wiki 模式的双链个人知识库，聚焦 Crypto · AI · 宏观 · 投资。

## 目录结构

```
knowledge/
├── wiki/            # 结构化知识（LLM 生成与维护）
│   ├── concepts/    # 概念页（93）
│   ├── entities/    # 实体页（1199）
│   ├── theses/      # 论点页（17）
│   ├── synthesis/   # 来源综述（1144）
│   ├── index.md     # 总索引
│   └── log.md       # 操作日志
├── raw/             # 原始素材（LLM 只读，不入库）
├── generator/       # 静态网站生成器（Node + markdown-it）
│   ├── src/         # 构建流水线模块
│   └── site/        # 构建产物 → GitHub Pages 部署
└── .github/workflows/deploy.yml
```

## 网站

wiki/ 通过 `generator` 构建为静态站并部署到 GitHub Pages，包含：

- 首页（统计 + 分类卡 + TOP 榜）
- 概念 / 实体 / 论点 / 来源四类索引
- 2450+ 页双链知识页（带反向链接、TOC）
- 交互式知识图谱（Canvas + d3-force）
- ⌘K 全文搜索（中文包含匹配）

### 本地构建

```bash
cd generator
npm install          # 依赖
npm run build        # 生成 site/
python3 -m http.server -d site   # 本地预览
```

### 部署

推送到 GitHub `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。

## 文档

| 文档 | 内容 |
|------|------|
| `WEBSITE.md` | **网站运维手册**：架构、构建/部署流程、图谱/搜索设计、日常操作、排错 |
| `MAINTENANCE.md` | 知识库维护手册：采集 vs 提炼两种工作模式 |
| `CLAUDE.md` | LLM 行为契约：Ingest/Query/Lint 工作流 |

## 维护

- **发布网站**：`git add -A && git commit -m "update" && git push origin main`（自动部署，3-5 分钟）
- **采集/提炼知识**：见 `MAINTENANCE.md`
- **网站流程/操作/方法**：见 `WEBSITE.md`
