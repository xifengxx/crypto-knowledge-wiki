# LLM-Wiki · 个人知识库

## 架构

三层结构，基于 Karpathy llm-wiki 模式：

```
knowledge/
├── raw/           ← 原始素材（LLM 只读）
│   ├── articles/  · 网页文章、公众号、博客
│   ├── notes/     · 个人笔记、便签
│   ├── images/    · 截图、照片、独立图片
│   ├── reports/   · 研报、PDF（自动提取文字后存为 .md）
│   ├── audio/     · 🔜 音频 + 文字稿（后续）
│   ├── video/     · 🔜 视频 + 文字稿 + 关键帧（后续）
│   └── social/    · 🔜 推文/Thread 存档（后续）
├── wiki/          ← LLM 生成和维护的结构化知识
│   ├── index.md   · 总索引（LLM 查询时先读这个）
│   ├── log.md     · 操作日志（append-only）
│   ├── concepts/  · 概念页（DeFi、RWA、ZK、L2…）
│   ├── entities/  · 实体页（项目、人物、公司、协议）
│   ├── theses/    · 投资论点和判断
│   └── synthesis/ · 综述、对比、元分析
└── CLAUDE.md      ← 本文件（行为契约）
```

## 核心规则

### 素材层的铁律
- `raw/` 下所有文件 **LLM 只读不写**。素材是事实基准，不可被修改。
- 素材命名：`YYYY-MM-DD_简短描述.md`（如 `2026-06-28_以太坊L2竞争格局.md`）
- 图片命名：`YYYY-MM-DD_描述.png`
- 同一素材的多个格式（如网页 + 截图）放在同一日期前缀下

### Wiki 层的铁律
- LLM 可以创建、修改、删除 wiki/ 下的任何文件
- 每个 .md 文件对应一个概念/实体/论点/综述
- 所有页面必须用 YAML frontmatter
- 所有页面必须包含双向链接 `[[]]`
- 修改涉及多个页面时，**一次性全部更新**，不遗漏交叉引用

### 行为铁律
- **每次 Ingest 只处理一个素材**，禁止批量处理（会导致 LLM 偷懒跳过关键信息）
- **每次修改必须更新 index.md**，保持索引与实际内容同步
- **发现矛盾必须标注**，用 `⚠️ Contradiction` 区块记录冲突
- **所有陈述必须可溯源**，关键结论标注来自哪个 raw/ 素材

## Ingest 工作流

当我（Claude Code）收到 `ingest raw/xxx` 指令时，严格按以下步骤：

### Step 0: 判断素材类型，选择处理策略

| 素材位置 | 类型 | 处理策略 |
|---------|------|---------|
| `raw/articles/*.md` | 文字文章 | 正常 ingest，文字 + 内嵌图片 |
| `raw/images/*` | 独立图片 | 视觉分析 → 提取信息 → 创建/更新 wiki 页面 |
| `raw/reports/*.md` | PDF 研报 | 正常 ingest（内容已由 extract-pdf.js 提取为文字） |
| `raw/notes/*.md` | 个人笔记 | 提取观点 → 写入对应概念/实体/论点页 |
| `raw/audio/*` | 🔜 音频 | 先读文字稿，再 ingest |
| `raw/video/*` | 🔜 视频 | 先读文字稿 + 关键帧截图，再 ingest |
| `raw/social/*` | 🔜 推文 | 结构化短文，快速 ingest |

**PDF 特别说明**：PDF 素材放入 raw/ 前，须先运行 `node tools/extract-pdf.js <文件>`，将文字提取为 raw/reports/ 下的 .md 文件。PDF 原始文件不进行 ingest，ingest 的目标是提取后的 .md。

### Step 1: 通读素材
- 完整阅读 raw/ 下的目标文件
- 如果素材中包含图片，用视觉能力分析图片内容
- 识别：主题、关键实体、核心观点、数据、结论

### Step 1.5: 识别关键图表
- 检查素材中包含的图片/图表/截图
- 判断哪些是关键信息载体：趋势图、架构图、数据对比表、流程图、储备构成图
- **关键图表必须在 wiki 页面中引用**，用 `![描述](../raw/images/文章名/图片文件名)` 格式
- 图片已下载到 raw/images/ 对应目录，直接引用本地路径

### Step 2: 识别影响范围
- 这个素材涉及哪些已有概念？→ 列出需要更新的 wiki/concepts/ 页面
- 涉及哪些实体？→ 列出需要更新的 wiki/entities/ 页面
- 是否支持/挑战/补充已有论点？→ 列出相关的 wiki/theses/ 页面
- 是否和已有知识矛盾？→ 准备 ⚠️ Contradiction 标注

### Step 3: 创建/更新来源摘要页
- 在 wiki/synthesis/ 下创建 `来源_YYYY-MM-DD_标题.md`
- 包含：原始出处、核心论点、关键数据、我的评价

### Step 4: 级联更新
- 更新受影响的概念页（补充新信息、修正过时内容）
- 更新受影响的实体页（新项目、新人物、新进展）
- 更新受影响的论点页（新证据支持或削弱已有判断）
- 存在矛盾时：在相关页面添加 ⚠️ Contradiction 区块，记录矛盾点和两个来源
- 更新 index.md（新增/修改页面的一行摘要）

### Step 5: 记录日志
- 在 wiki/log.md 末尾追加一条记录：
  ```
  | 时间 | Ingest | raw/xxx | 更新了 N 个页面 | 关键变化 |
  ```

## 页面模板

### 概念页 (wiki/concepts/)
```markdown
---
type: concept
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: [tag1, tag2]
aliases: [别称1, 别称2]
---

# 概念名

## 一句话定义
一句话说清楚这是什么。

## 核心原理
解释这个概念的工作原理。

## 为什么重要
这个概念为什么值得关注，对投资/研究的意义。

## 关键项目/案例
- [[项目A]] — 一句话关系
- [[项目B]] — 一句话关系

## 相关概念
- [[概念X]] — 前置知识
- [[概念Y]] — 对比/互补

## 我的立场
对这个概念的个人判断或投资观点。

## ⚠️ Contradiction（如有）
- 来源A 认为 X，来源B 认为 Y。待解决的问题：...

## 来源
- [[来源页1]]
- [[来源页2]]
```

### 实体页 (wiki/entities/)
```markdown
---
type: entity
entity_type: [project / person / company / protocol]
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: []
---

# 实体名

## 基本信息
- 类型 / 赛道 / 成立时间 / 团队 / 融资

## 核心业务/产品
做什么的。

## 关键数据
重要的链上数据、财务数据、用户数据。

## 竞争优势 / 护城河

## 风险 / 争议

## 相关事件时间线
- YYYY-MM-DD: 事件描述

## 我的判断
投资观点或研究结论。

## 相关实体
- [[实体X]] — 竞争/合作/上下游

## 来源
- [[来源页]]
```

### 论点页 (wiki/theses/)
```markdown
---
type: thesis
status: [forming / active / invalidated / confirmed]
confidence: [1-10]
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# 论点标题

## 核心主张
一句话表述论点。

## 支撑证据
1. 证据1 — 来自 [[来源A]]
2. 证据2 — 来自 [[来源B]]

## 反对证据
1. 反证1 — 来自 [[来源C]]

## 待验证假设
- 假设1：如果 X 发生，则论点成立
- 假设2：如果 Y 发生，则论点不成立

## 更新日志
- YYYY-MM-DD: 新证据 X 出现，置信度从 6 → 7
- YYYY-MM-DD: 反证 Y 出现，状态从 active → 待观察

## 来源
- [[来源页1]]
```

### 来源摘要页 (wiki/synthesis/)
```markdown
---
type: source
source_type: [article / report / tweet / podcast / video / note]
url: 
author: 
date: YYYY-MM-DD
ingested: YYYY-MM-DD
---

# 来源标题

## 核心要点
3-5 句话总结这篇文章说了什么。

## 关键数据
文章中引用的重要数据。

## 与已有知识的关系
- 支持 [[论点A]] 因为...
- 补充 [[概念B]] 的...
- ⚠️ 与 [[页面C]] 中的 X 观点矛盾

## 值得记住的引用
> 原文中的关键段落

## 我的笔记
个人评价和思考。
```

## 命名和链接规范

### 文件命名
- 概念/实体/论点页：英文小写 + 连字符，如 `defi-lending.md`、`ethena.md`
- 来源摘要页：`来源_YYYY-MM-DD_简短标题.md`
- 页面标题（H1）可以是中文

### 双向链接
- 使用 `[[filename]]` 格式（不含 .md 扩展名）
- 链接到不存在的页面是允许的 — 意味着需要创建
- 每个页面至少被另一个页面链接（杜绝孤儿页面）

### Tags
- 使用英文小写：`defi`, `l2`, `rwa`, `ai`, `zk`, `gaming`
- 一个页面通常 1-3 个 tag

## Query 工作流

当我收到问题时：
1. **先读 wiki/index.md**，定位相关页面
2. **精读定位到的页面**（通常 3-5 页），不扫描 raw/
3. **综合回答**，带 `[[页面引用]]`
4. 如果回答质量高、有长期价值 → 主动建议回写到 wiki/
5. 如果现有 wiki 无法回答 → 告诉用户缺什么知识，建议找什么素材

## Lint 工作流

收到 `lint wiki/` 指令时，按以下清单检查：

### 一致性检查
- [ ] 有互相矛盾的陈述但没有标注 ⚠️ Contradiction 吗？
- [ ] 有同一实体在不同页面用了不同名称吗？
- [ ] 有数据已经过时了吗（超过 3 个月的链上/市场数据）？

### 完整性检查
- [ ] index.md 是否列出了所有 wiki 页面？
- [ ] 有孤儿页面吗（没有任何 incoming link）？
- [ ] 有 [[wikilink]] 指向还不存在的页面吗？— 列出待创建页面

### 质量问题
- [ ] 有内容过短的页面吗（< 3 段）？
- [ ] 有缺少 frontmatter 的页面吗？
- [ ] 有论点页超过 1 个月未更新吗？

### 输出格式
生成 Lint 报告，按严重程度排列：
- 🔴 必须修：矛盾未标注、数据过时
- 🟡 建议修：孤儿页面、待创建链接
- 🟢 可选：内容扩充、标签优化

## 知识域焦点

当前 Wiki 重点关注以下领域（影响分类和关联判断）：

1. **Crypto & Web3** — L1/L2、DeFi、RWA、稳定币、MEV、跨链、ZK
2. **AI** — 模型进展、Agent、AI+Crypto 交叉、算力
3. **宏观与金融市场** — 利率、政策、资金流向、市场结构
4. **投资方法论** — 仓位管理、研究框架、决策心理

如果一个素材同时涉及多个领域，优先从交叉角度组织知识（如"AI+Crypto"）。

## 版本控制

- wiki/ 下的所有变更应定期通过 git 提交
- 建议提交频率：每 3-5 次 ingest 提交一次
- 提交信息格式：`wiki: ingest N sources, update X pages`
- git 提供了回滚能力 — 如果 LLM 某次 ingest 质量差，可以 revert
