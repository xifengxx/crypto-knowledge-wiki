---
type: source
source_type: article
url: https://jojonas.substack.com/p/tokenomics-design-some-questions
author: "@jojonas_xyz"
date: 2022-11-22
ingested: 2026-07-01
---

# 代币经济设计：需要提前问的问题清单

## 阅读证据
- 总行数: 72
- Q1 (前25%): 文章明确区分了"分析代币经济"和"设计代币经济"两个视角，批评当时大多数指南只关注分析而非设计（第13-14行）。General 集群第一个问题："How many tokens will the project use? Why? Can it be increased or decreased?"（第19行）——从代币数量决策入手。
- Q3 (中后25%): Token Supply 集群中提出"Simulation of key node unlocking (private sale, etc.)?"（第42行），要求对私募等关键解锁节点进行模拟推演；Token Demand 集群第一个问题："Why are users willing to hold your token? Practical scenes, passive benefit, or emotional value?"（第48行）——将持币动机分解为实用场景、被动收益、情感价值三类。
- Q4 (最后25%): 结尾论断："There is only two kinds of tokenomics, common or great. We are all common now, but it's always great we headed."（第70行）——将代币经济设计分为普通和卓越两类，坦承当前行业水平普遍一般。
- 图片: 2张，均为 Substack CDN 外部装饰图（同一张封面图被重复引用），无可分析信息内容，跳过。

## 核心要点
- 作者提出了一个从"设计者"而非"分析者"视角出发的代币经济设计框架，覆盖四大集群：General（通用问题）、Token Supply（代币供应）、Token Demand（代币需求）、Governance（治理）。
- General 集群关注项目层面全局决策：代币数量与功能边界、价值流动方向、筹款比例与估值合理性、收入来源与黑天鹅应对、链选择、流动性时机、空投策略、竞争壁垒、早期增长模式（含 Ponzi 模型的利弊权衡）、LP 管理和数据监控系统。
- Token Supply 集群覆盖从 TGE 到流通的全周期：总供应量与释放曲线、初始流通市值与 FDV、IDO/IEO 策略、不同阶段的持币人结构与行为假设、通胀率与用户增长/使用频率的匹配度、关键解锁节点模拟、供应量与实际流通的差异排查。
- Token Demand 集群聚焦持币动机：实用价值/被动收益/情感价值三类驱动力、被动收入来源（增发 vs 协议捕获）、与竞品的相对持币优势、持币人行为假设与经济影响、Staking 需求与成本收益分析、销毁计划（官方 vs 用户驱动）、设计变量的因果函数关系。
- Governance 集群回归社区运营维度：社区责任分配与发布时间、社区影响代币价格的双路径（短期信息 vs 长期愿景）、社区共识与运营活动、信息发布策略最大化、社区基金来源与规则、治理投票的生成因子与权重设计、治理提案的有效性与范围、贿赂风险与极端情况下的治理权争夺预案。
- 文章的根本立场：代币经济设计不是简单的代币数学，而是与项目的所有方面关联。在项目周期中可以持续迭代和完善，目标是脱离平庸。

## 关键数据
- 四大问题集群：General（12个问题）、Token Supply（10个问题）、Token Demand（7个问题）、Governance（10个问题），合计约39个具体设计问题
- 持币动机三分类：Practical scenes（实用场景）、passive benefit（被动收益）、emotional value（情感价值）——提供了一个简洁的需求端分析框架
- 被动收入来源二分：additional issuance（额外增发）vs protocol value capture（协议价值捕获），两者需要协调
- 治理投票影响因子示例：token quantity（代币数量）、staking time（质押时间）、usage indicators（使用指标）

## 与已有知识的关系
- 补充 [[tokenomics]] — 提供了一个纯"设计者视角"的代币经济检查清单框架，与已有来源的分析视角（veDAO 的分类框架、三盘模型的崩盘分析、幽灵代币经济学的揭露等）形成互补。该文的独特价值在于"设计前应该问什么"，而非"已有模型如何判断"。
- 补充 [[blockchain-governance]] — Governance 集群中的 10 个问题覆盖了已有概念页中较少涉及的治理实操层面：社区责任分配、治理投票生成因子（代币量/质押时间/使用指标）、投票属性设计（一次性/永久性）、治理权争夺战预案等，是对 Ostrom 框架在 crypto 语境下"如何落地"的实操补充。
- 补充 [[crypto-ponzi-models]] — 文章在 General 集群第 10 个问题中明确提到 Ponzi 模型："If we use Ponzi model, how we mitigate the harmful things companied with?"——作者将 Ponzi 视为一种可选的早期增长工具，而非行业本质。这与三盘模型的"万物皆盘"立场形成张力：前者视 Ponzi 为可管理风险，后者视 Ponzi 为底层归约。这是一个值得标注的矛盾视角。
- 补充 [[fundraising]] — 文章讨论了 IDO vs IEO 的发行方式选择、早期持有比例、做市商计划等问题，与 fundraising 概念页中的 ICO→IEO→IDO→Fair Launch 演化史形成对接。

## 值得记住的引用
> "There are many questions you need to ask before you design tokenomics for you projects. You can find plenty of guides about this topic but most of them are focusing on 'analyzing', not 'designing'."（第13-14行）——开篇即点明分析 vs 设计的关键区分，这也是为什么该文即使发表于 2022 年仍具有独特价值：大多数代币经济材料只教你如何判断好坏，不教你怎么动手设计。

> "Tokenomics design is not just simple math of tokens, it's associated with all aspects of your project. You can improve and perfect it during the project cycle if you want more than mediocre."（第70行）——强调代币经济不是孤立的数学练习，而是与项目管理、运营、社区、产品的一体化设计。迭代而非一蹴而就。

> "There is only two kinds of tokenomics, common or great. We are all common now, but it's always great we headed."（第70行）——坦承行业现状普遍平庸，目标指向卓越。这是一种设计哲学而非技术分析。

## 我的笔记
这篇文章的价值不在于任何具体的答案，而在于它提供了目前 wiki 中其他代币经济材料所缺乏的东西：一个系统性的"设计前检查清单"。大多数 tokenomics 相关来源（veDAO 的分类框架、三盘模型的归约分析、幽灵代币经济学的揭露、各大项目的具体参数）都是从分析/批判的视角出发，而 jojonas 的 39 个问题提供了从零开始设计一个代币经济时应该覆盖的全部维度。这使得该文更适合作为"项目评审 checklist"而非理论框架使用。

一个有趣的矛盾：jojonas 将 Ponzi 模型视为一种可选的早期增长工具（"if we use Ponzi model, how we mitigate..."），而三盘模型认为 Ponzi 不是"可选的"——它是一切 tokenomics 设计的底层结构。这两种视角的张力暗示了 Web3 设计者的核心困境：承认 Ponzi 是现实，但不愿接受它是本质。在实践中，大多数项目的真实态度是"用 Ponzi 的动力学，但不叫 Ponzi 的名字"——这解释了为什么行业充斥着庞氏包装而非庞氏承认。
