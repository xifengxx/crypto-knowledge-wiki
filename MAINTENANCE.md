# LLM-Wiki 维护手册

## 两种工作模式

知识库维护分两种模式，需要交替执行：

```
  采集模式（Collection）       提炼模式（Refinement）
  ┌─────────────────┐          ┌─────────────────┐
  │  ingest 文章     │          │  概念审计        │
  │  批处理          │          │  thesis 更新     │
  │  实体创建        │          │  矛盾检查        │
  │  synthesis 写入  │          │  断链修复        │
  └────────┬────────┘          └────────┬────────┘
           │                            │
           └──────── 交替执行 ──────────┘
```

---

## 一、采集模式（Collection）

### 触发方式

| 方式 | 命令 | 说明 |
|------|------|------|
| 单篇 | `ingest raw/articles/xxx.md` | 调用 llm-wiki-ingest Skill，逐步骤执行 |
| 单篇（快捷） | `继续` | 同上 |
| 批量 | `/tmp/batch7-wf.js` + args | Workflow pipeline，20 篇并行 |

### 处理管线

Skill v4.0 定义的单篇 ingest 流程：

```
Read → Dedup → Entity Gate → Concept Gate → Write Synthesis → Update Index
```

每次 ingest 会自动执行：
- ✅ 三段去重（URL/关键词/语义）
- ✅ 6 段 synthesis 模板（含阅读证据）
- ✅ Entity Gate（创建/更新实体页）
- ✅ **Concept Gate**（检测是否需要新概念页）
- ✅ Thesis 反链（标记支持/挑战哪个 thesis）
- ✅ Index + Log 更新

### Workflow 批处理（batch7-wf.js）

```
pipeline(
  ARTICLES,
  ingestAgent,   // 20 篇并行，每篇独立执行 Skill 的 Step 0-6
  verifyAgent    // 波次结束：更新 index + log
)
```

- 每批 20 篇，按文件大小降序
- 每篇 agent 返回结构化结果（status/synthesis_file/entities/concepts）
- 跳过率 > 80% 时切换到 tail pool（缩小每批 5-10 篇或转单篇）

---

## 二、提炼模式（Refinement）

采集模式只负责"存"，提炼模式负责"想"。三个关键任务：

### 方案 B：概念审计脚本

**位置：** `~/knowledge/tools/audit-concepts.py`（已创建）

**功能：** 扫描 entities/ 目录，按标签（entity_type/tags）聚类实体，识别已有概念覆盖的簇和缺口。

**输出示例：**
```
发现概念缺口：
  🔴 l2-landscape: Arbitrum/Optimism/zkSync/Scroll/Linea/Base… 共 20+ 实体
  🔴 defi-derivatives: GMX/dYdX/Synfutures/Vertex… 共 10+ 实体
  🔴 ai-agent-frameworks: Eliza/Rig/ZerePy/Arc… 共 10+ 实体
```

**运行时机：**
- 每处理 50 篇新文章后运行一次
- 或者在 ingest 过程中感觉"实体太多概念太少"时主动运行

**使用方法：**
```bash
python3 ~/knowledge/tools/audit-concepts.py
```

### 方案 C：Thesis 创建规范（硬性模板 + Gate）

> ⚠️ **教训**：多次出现 Thesis 创建时偷懒——只写一段话就提交，缺少反对证据和假设。
> **修正**：以下模板和 Gate 在创建或修改 Thesis 时强制执行。

#### Thesis 模板（6 段，缺一不可）

```
---
type: thesis
status: active | invalidated | confirmed
confidence: [1-10，必须基于引用数而非感觉]
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# 标题（必须包含对该论点的核心判断，而非模糊描述）

## 核心主张
一段话明确说明这个论点判断什么。必须包含"我认为 X，因为 Y，所以 Z"结构。
字数：100-200 字。禁止少于 80 字。

## 支撑证据
必须 ≥3 个独立证据，每个证据以 ### 证据 N：标题 分段。
每个证据必须包含：
- 具体数字或数据（如 "$X 亿"、"Y 个"、"Z%"）
- 至少 2-3 句话的展开说明，而非一句带过
- 引用来源（直接或间接）

格式：
### 证据 1：[证据标题]
[具体数据/事实] + [展开说明 + 分析]

### 证据 2：[证据标题]
...

### 证据 3：[证据标题]
...

## 反对证据
必须 ≥3 个不同的反对角度。
每个反对证据必须独立成段，且有具体论据（不能只是"可能不对"）。

## 待验证假设
必须 ≥3 个假设，每个以 **假设 N**：开头。
假设必须是可检验的（"当 X 发生，则 Y 成立"结构），而非模糊展望。

## 更新日志
- YYYY-MM-DD: 首次建立论点。置信度 N/10

## 来源
至少 ≥5 条指向 wiki 内部页面（concepts/ 或 synthesis/ 或 entities/）
```

#### Thesis Gate（写完后逐条检查，全部通过才能算完成）

```
□ 「核心主张」≥80 字且有 X→Y→Z 判断结构
□ 「支撑证据」≥3 条且每条有具体数字/数据
□ 「反对证据」≥3 条且每条有独立论据
□ 「待验证假设」≥3 条且每条是可检验的
□ 「来源」≥5 条 wiki 内部链接
□ 总行数 ≥45 行（快速 proxy，行数少说明内容不足）

Gate 不通过 → 视为未完成，补全后再提交。
```

#### 基准示例
合格 thesis（对标）：
- `~/knowledge/wiki/theses/stablecoins-reshaping-finance.md`（77 行，4 机制分解）
- `~/knowledge/wiki/theses/memecoin-supercycle.md`（60+ 行，3 驱动力框架）

不合格 thesis（禁止）：
- ❌ 只有主张和来源，无反对证据
- ❌ 只有 1-2 条证据且无具体数据
- ❌ 假设不可检验（"可能会更好"类模糊表述）

### 方案 D：维护节奏

这里两种模式不是随机切换的，而是按固定节奏交替：

```
周一 ~ 周三：采集模式
   正常 ingest / 批处理，积累 synthesis 和实体

周四：提炼模式（1-2 小时）
   运行审计脚本 → 发现概念缺口 → 创建新概念页
   更新 thesis 置信度（strengthen/weaken/invalidate）
   检查矛盾标注（如果有明显冲突的来源）
   修复断链

周五：收尾
   lint wiki/ 检查完整性
   git commit（如有 git）
```

这个节奏不是强制的——如果某周没有新素材，整周做提炼也没问题。关键是不让积累的实体永远"抽象不出概念"。

### thesis 的"养"法

thesis 页不是创建完就完事了。每次 ingest 后，如果新 synthesis 支持或挑战了某个 thesis：
- Skill 的 `## 与已有知识的关系` 会自动标记 `支持/挑战 [[theses/xxx]]`
- 如果某个 thesis 连续获得支持证据 → 手动提高置信度
- 如果出现矛盾证据 → 要么标注矛盾，要么降低置信度

thesis 的置信度是**活的**，应当随证据积累而变化。

---

## 三、何时用 Skill，何时用 Workflow

| 场景 | 用哪个 | 原因 |
|------|--------|------|
| 1 篇文章 | `ingest raw/xxx.md` → 触发 Skill | 逐个步骤 QA |
| 5-10 篇未处理 | `继续下一批` → 触发 Skill | 自动走 BATCH 模式 |
| 20 篇未处理 | `继续下一批` → 触发 Skill | BATCH 模式最佳 |
| 概念审计 | `python3 ~/knowledge/tools/audit-concepts.py` | 独立脚本，不干扰 ingest |
| 批量断链修复 | 按需运行 lint | 不必每次 ingest 都做 |
| thesis 更新 | 提炼模式下手动 | 需要"人"的判断 |

---

## 四、Skill 和 Workflow 的改法（未来优化）

### 改 Skill
```
~/.claude/skills/llm-wiki-ingest/SKILL.md
```
- 加/改步骤定义
- 加/改模板格式
- 下次 ingest 时自动生效

### 改 Workflow
```
/tmp/batch7-wf.js
```
- 改 INGEST_SCHEMA（加字段）
- 改 agent prompt（加/减指令）
- 改 verify logic（索引更新方式）
- **改完后需要重新调用 Workflow tool**

---

## 五、核心原则

1. **不要在一轮 session 里又采集又提炼**——两项任务需要的思维模式不同
2. **概念不是一次创建的**——先建轻量版，后续 synthesis 多了自然要扩容
3. **thesis 是用来验证的，不是用来收藏的**——一个长期不被引用、不被挑战的 thesis 不如删掉
4. **量化的健康指标：**
   - Synthesis : Entity : Concept ≈ 10 : 10 : 2（12.6:1 当前，目标 5:1）
   - 孤立 synthesis 率 < 3%
   - 每个 Thesis 至少有 3 篇 synthesis 作为支撑证据
