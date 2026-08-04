---
type: source
source_type: article
url: https://followin.io/zh-Hans/feed/12406851/ZnJvbT13ZWJzaGFyZSZpYz1kYXl1JnN1PTQwNzU2NjY5MDgmdGltZXpvbmU9OCZ0cz0xNzIzNTE0NTIxODU3
date: 2024-08-13
ingested: 2026-07-02
---

# Vessel Finance：红杉参投 1000 万美元，ZK 驱动的订单簿+AMM 融合型 DEX

## 阅读证据
- 总行数: 146
- Q1 (前25%): 8 月 8 日 Vessel Finance 宣布获 1000 万美元融资，参投方包括红杉资本、Scroll 联合创始人 Sandy Peng 和 Ye Zhang、Avalanche 基金会、Algorand 基金会、IMO Ventures、Folius Ventures、Incuba Alpha 及一批天使投资人。DefiLlama 数据显示当前已有 1000+ 个 DEX，其中 TVL 破 1 亿美元的也有 20 余家。
- Q3 (中后25%): Vessel 的 ZK 系统支持跨链操作，使得不同区块链网络之间的资产转移和交易更加安全和高效。VAELOB（可验证的 AMM 嵌入式订单簿）是 Vessel 的核心技术，结合了传统订单簿和 AMM 的优点，并确保整个过程可验证。
- Q4 (最后25%): Vessel 目前处于封闭的 alpha 测试网阶段，主网计划于 Q3 上线。路线图还包括永续 DEX、流动性聚合、排序器去中心化等功能的开发。用户需要邀请码才能参与测试网交互。
- 图片: 0 analyzed / 1 decorative skipped（文章头图，非关键信息图表）/ 0 external URLs unavailable

## 核心要点
- Vessel Finance 是一个由 ZK 技术驱动的 DEX，获得红杉资本等知名机构的 1000 万美元融资，在 DEX 赛道极度拥挤（1000+ 个 DEX）的背景下，试图通过技术创新差异化突围。
- Vessel 的核心架构是构建一个统一的 Layer 3 平台，利用 ZK 技术实现链下高效计算 + 链上简洁验证的模式，将交易成本降至比现有 L2 更低的水平，同时聚合多来源流动性。
- 技术栈包含三个核心组件：Sequencer（排序器，即时处理交易并生成执行轨迹）、Prover（证明者，基于执行轨迹生成 SNARK 证明）、Smart Contract（智能合约，包含验证器和资产保管库，仅在收到有效证明后才允许资产移动）。
- VAELOB（Verifiable AMM-Embedded Limit Order Book）是 Vessel 的核心创新，将订单簿的直观效率与 AMM 的持续流动性相融合，通过 ZK 证明保证整个过程的可验证性。LP 可选择特定价格区间提供流动性，类似 Uniswap V3 但更灵活。
- 项目的路线图规划了从现货 DEX 到永续合约 DEX、流动性聚合、排序器去中心化的完整演进路径，但目前仍处于封闭 alpha 测试网阶段，产品落地和市场竞争能力有待验证。

## 关键数据
- 融资额：1000 万美元，参投方包括红杉资本、Scroll 联创、Avalanche 基金会、Algorand 基金会等
- DEX 赛道现状：1000+ 个 DEX，其中 TVL 超过 1 亿美元的约 20 余家
- Vessel 示例吞吐量：5 分钟内处理 10,000 笔交易，仅生成一个 ZK 证明进行链上验证
- 主网计划上线时间：Q3 2024（文章发布时）
- VAELOB 流动性机制：LP 可在特定价格区间提供流动性，类似 Uniswap V3 但结合了订单簿匹配
- 融资宣布日期：2024 年 8 月 8 日

## 与已有知识的关系
- 补充 [[sequencer]] — Vessel 将排序器作为核心组件之一，与 Rollup 中的 Sequencer 角色类似但服务于 L3 DEX 场景。文章提及其路线图中包含排序器去中心化，呼应了 Sequencer 概念页中讨论的去中心化趋势，但 Vessel 的排序器去中心化具体方案尚未披露。
- 补充 [[defi]] — 在 DEX 赛道已有 1000+ 竞争者的背景下，Vessel 代表了 DEX 创新的一个方向：通过 ZK 技术做链下计算 + 链上验证，结合订单簿和 AMM 两种模式，试图在资本效率和用户体验上超越纯 AMM DEX。这与 DeFi 概念页中涵盖的 Hyperliquid（订单簿 Perp DEX）、Jupiter（聚合器）、Uniswap（AMM）等形成补充。
- 关联 [[layer2]] — Vessel 选择构建 L3 而非 L2，试图整合不同 L2 的优势解决流动性分散问题，这一思路与 L2 碎片化问题的讨论直接相关。
- Vessel 的 LP 价格区间做市机制与 [[uniswap]] V3 的集中流动性概念一脉相承，但通过 ZK 验证和订单簿融合做了差异化。
- VAELOB 的订单簿 + AMM 混合模式与 [[hyperliquid]] 的全链订单簿和 [[dydx]] 的链下订单簿+链上结算形成不同路线的对比。

## 值得记住的引用
> "Vessel 的工作流程涉及三个主要组件：排序器（Sequencer）、证明者（Prover）和智能合约。"
> "VAELOB 就像是把这个自动售货机（AMM）搬进了交易大厅（订单簿），并且给每个人都发了一副特殊眼镜，可以随时查看和验证机器的运作。"
> "交易是整个加密世界的脉搏，支撑交易需求的 DEX 赛道永远都有新玩家。"
> "DEX 赛道日益内卷，足够的激励、低交易成本、丰富的交易对和安全性等，将是项目脱颖而出的胜负手。"

## 我的笔记
- 文章本质是一篇项目 PR 稿，通过 Followin 渠道发布。核心信息来自项目方自述，缺乏独立验证和竞品数据对比。1000 万美元融资在 2024 年的 DEX 赛道算中等规模，不足以证明市场对产品方向的认可。
- VAELOB 宣称同时结合订单簿效率和 AMM 流动性是一个听起来不错的叙事，但这类"既要又要"的方案历史上落地极其困难——订单簿需要活跃做市商，AMM 依赖被动 LP，两者的激励结构和风险收益完全不同。能否在实际产品中协调这两种机制，远比白皮书描述复杂。
- "L3 + ZK"的组合本质上是用更复杂的架构解决 L2 流动性碎片化问题，但这引出了一个根本矛盾：如果 L3 是为了整合 L2 流动性，那 L3 本身会不会又成为新的碎片化来源？这需要看到实际的跨链流动性聚合机制才能判断。
- 项目在 2024 年 8 月宣布融资时仍处于封闭 alpha 阶段，到 2026 年 7 月（本文 ingest 时间）已过去近两年，需要核实其主网是否已上线、产品实际运行情况如何，这对于判断项目真实进展至关重要。
