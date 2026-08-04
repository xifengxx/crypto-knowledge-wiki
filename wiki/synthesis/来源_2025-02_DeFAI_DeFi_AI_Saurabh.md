---
type: source
source_type: article
url: https://www.decentralised.co/p/when-defi-met-ai
date: 2025-02-16
ingested: 2026-07-02
---

# 当 DeFi 遇到 AI：从量化交易历史到 DeFAI 的落地现实与挑战

## 阅读证据
- 总行数: 239
- Q1 (前25%): DeFi 仅占中心化交易所（CEX）现货交易量的 10-20%，因为 CEX 更易用且监管更清晰（line 22）
- Q3 (中后25%): 如果完全跟随 AIXBT 在 $10M-$100M 市值区间的所有调用，平均回报率仅为 2%，胜率 39%（line 155）
- Q4 (最后25%): Robinhood 在 2020 年前四个月新增 300 万+ 资金账户，其中 150 万是首次投资者（line 225）
- 图片: 0 analyzed / 0 decorative skipped / 15 external URLs unavailable（全部来自 Substack CDN，无可用的本地文件）

## 核心要点
- 算法交易已有三十多年历史（Jim Simons 的 Renaissance Technologies 以 39% CAGR 运营 Medallion Fund 三十年），而 DeFi 的自动化仍处于极早期阶段，两者之间存在巨大鸿沟。
- DeFi 的复杂性和用户体验是其主要瓶颈——钱包管理、跨链操作、合约地址理解构成极高的进入门槛，导致 DeFi 渗透率远低于 CEX。
- Yearn Finance 是 DeFi 首次自动化的尝试，但仍依赖人类策略制定者，在收益正常化和核心人员离开后 TVL 从 $7B 暴跌至约 $250M。
- 当前 DeFAI 产品（Hey Anon、Orbit、AIXBT、Gud、Wayfinder）均处于极早期阶段，实际测试中暴露出大量功能缺陷：Orbit 推举代币后无法查询自身建议的详情，Hey Anon 比手动执行慢且缺少基础转账功能。
- AIXBT 的调用统计（2% 平均回报，39% 胜率）表明：当前 AI 代理的分析能力尚未超越经验丰富的交易者，距离可靠的投资决策支持还有距离。
- DeFAI 成功的三个关键支柱：可靠的情报（数据筛选与归因）、流畅的执行（从决策到交易的最短路径）、用户友好的界面。未来方向是多智能体协作（Listen 已在尝试），即不同 Agent 分别专攻执行、分析、风控，通过协作形成系统。

## 关键数据
- DeFi 仅占 CEX 现货交易量的 10-20%（line 22）
- Medallion Fund 在 1988-2018 年间实现 39% 年化复合增长率，$100 变成 $210 万（同期标普 500 为 $1,014）（line 30-34）
- 全球外汇现货日均交易 $7.5T 中超过 75%（$5.6T）通过算法执行（line 38）
- Yearn Finance TVL 巅峰为 250 万 ETH（约 $7B），后跌至约 $250M（line 55-61）
- 全球受监管开放式基金 AUM 超 $80T（Q3 2024），而 BTC+ETH ETF 合计仅 $150B（2025.1.21）（line 83）
- CEX 交易量约为 DEX 的 5 倍（line 89）
- Jupiter 零费率，Raydium 0.25%，Moonshot 2.5%，Binance/Coinbase 0.1%-0.6%（line 99）
- Coinbase 拥有 1.1 亿+ 用户（line 103）
- AIXBT 在 $10M-$100M 区间的调用平均回报 2%，胜率 39%（line 155）
- Orbit 在 1 月 22 日市值 $180M 时无法流畅执行为首次用户设计的简单任务（line 175）
- 链上现存 3400 万+ 代币，但上下文极缺（line 136）

## 与已有知识的关系
- 补充 [[defai]] — 提供了 DeFAI 产品的一手实测体验（Hey Anon、Orbit、AIXBT），补充了现有 DeFAI 概念页缺少的"实际产品表现"维度，尤其是产品仍远未成熟的有力证据。
- 补充 [[aixbt]] — 首次给出 AIXBT 交易调用胜率的量化数据（39% 胜率，2% 平均回报），将叙事中的"聪明 Agent"拉回现实——当前 AI 交易建议的质量甚至不如专业人类投资者。
- 补充 [[heyanon]] — 首次记录 Hey Anon 在实际使用中的具体表现：需要桥接和交换功能时效率尚可但速度慢于手动操作，且缺少基本的手动转账功能。
- 补充 [[defi]] — 以 Yearn Finance 的兴衰为案例展示 DeFi 自动化的发展瓶颈，补充了 DeFi"可组合性"之外的"可用性"维度。
- 补充 [[yearn-finance]] — 详述 Yearn TVL 从 $7B 跌至 $250M 的背景（收益正常化、Andre Cronje 离开、市场条件恶化）。
- 补充 [[wayfinder]] — 更新 Wayfinder 的开发背景（Parallel 团队）和功能定位（跨链资产聚合与转账）。

## 值得记住的引用
> "Imagine a magical box that does nothing, yet people throw millions into it because... why not? And as more money piles in, the box becomes valuable—because everyone agrees it is. At some point, sophisticated traders come in and say, 'Wow, look at all the money in this box! Must be a great box!' And the cycle continues—until, of course, it doesn't."
> — Sam Bankman-Fried 在访谈中对 DeFi 收益农场模式的讽刺

> "The key will be managing expectations while continuing to innovate and improve these systems based on real-world performance and user feedback."
> — Saurabh Deshpande 对 DeFAI 发展方向的总结，强调预期管理与渐进改进

## 我的笔记
- 这篇文章最大的价值在于一手实测：作者不仅分析了技术理论，还实际注册并使用了 Hey Anon、Orbit 等产品，记录了交互失败的具体场景（如 Orbit 推荐代币后无法检索其自身建议的信息）。在 DeFAI 概念普遍被叙事炒作的背景下，这种诚实的产品评估极具稀缺价值。
- AIXBT 的 39% 胜率和 2% 平均回报是一个极有说服力的冷水数据。它暴露了当前 AI Agent 的核心矛盾：信息处理量巨大（"hundreds to thousands of tweets per day"），但提炼为可执行的决策信号时质量不足。作者提出的"need additional layer that sits on top"——即筛选过滤层——可能是 DeFAI 分析层 Agent 真正的产品机会。
