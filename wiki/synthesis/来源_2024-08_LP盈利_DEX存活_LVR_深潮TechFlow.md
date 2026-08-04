---
type: source
source_type: article
url: https://www.techflowpost.com/article/detail_19762.html
date: 2024-08-16
ingested: 2026-07-02
---

# LP 不亏钱才是 DEX 存活发展的关键——LVR 消解与协议价值内部化

## 阅读证据
- 总行数: 116
- Q1 (前25%): DEX 现货交易量占 CEX 约 14%，24h 链上交易额约 $70 亿（2024 年 8 月 DeFiLlama 数据）。文章核心论点：DEX 必须确保 LP 具有足够盈利能力，充足流动性通过最小化滑点提供顺畅交易环境。
- Q3 (中后25%): Bunni V2 利用 Uniswap V4 的"超出范围钩子"（out-of-range hooks），将通过将闲置流动性存入 Aave、Yearn、Gearbox、Morpho 等借贷协议产生额外利息收入，提高 LP 资本效率。
- Q4 (最后25%): Aave 提出新 AAVEnomics 通过协议收入回购 $AAVE 分配给持有者，Uniswap 费用开关重新受到关注，Aevo 宣布回购 $AEVO——DeFi 协议纷纷引入价值再分配机制，内部积累的价值和可持续收入模型变得更加重要。
- 图片: 7 informative / 1 decorative skipped / 0 external URLs unavailable

## 核心要点
- DEX 使用量正从 FTX 事件驱动的短期波动转为持续上升趋势，但 14% 的 CEX 市场份额仍然不大。DEX 必须创造 CEX 无法提供的独特价值——流动性提供（LPing）和利润再分配机制。
- LP 损失的核心来源不是无常损失（机会成本），而是 LVR（损失与再平衡）——LP 在整个 LP 期间充当套利者对手方的持续成本。外部套利者系统性地从 AMM 池中提取价值。
- CoW AMM 通过批量拍卖 + Solver 竞价机制将 MEV 捕获在协议内部：Solvers 竞争出价以获得重新平衡池的权利，出价最高的 Solver 为 LP 留下最多盈余，LP 获得盈余作为提供流动性的激励。MEV 从"被外部提取"变为"协议收入来源"。
- Bunni V2 利用 Uniswap V4 钩子架构的"超出范围钩子"，将不在当前价格区间的闲置流动性部署到借贷协议（Aave、Yearn、Gearbox、Morpho）赚取利息，而不仅仅是重新调整 LP 范围。这会带来合约风险和流动性耗竭的新权衡。
- 价值内部化趋势正在加速：CoW AMM 内化 MEV、Bunni V2 互操作闲置流动性、Osmosis Protorev 防止回跑、Smilee Finance 提出"无常收益"对冲无常损失——这些都是在 LP 盈利能力和协议可持续性上的差异化尝试。

## 关键数据
- DEX 现货交易量占 CEX 14%（2024 年 8 月 The Block 数据）
- 24 小时内 DEX 链上交易额约 $70 亿（DeFiLlama）
- CoW AMM 将 MEV 从外部提取转为 LP 收入来源，LP 获得盈余作为额外激励
- Bunni V2 闲置流动性可存入 Aave / Yearn / Gearbox / Morpho 等至少 4 个借贷协议
- Aave 推出新 AAVEnomics 回购 $AAVE、Aevo 宣布回购 $AEVO、Uniswap 费用开关重新被讨论——多个头部协议同步探索价值再分配

## 与已有知识的关系
- 补充 [[defi]] — DEX 与 CEX 竞争的核心不是交易体验而是 LP 盈利能力。AMM 的 LVR 问题从 a16z 的理论论文落地为 CoW AMM/Bunni V2 的工程实现。价值内部化是 DeFi 下一个五年的核心叙事。
- 补充 [[mev]] — CoW AMM 代表了一条与 PBS 不同的 MEV 治理路径：不是阻止 MEV 发生，而是让协议自身成为 MEV 的受益者（MEV 捕获 AMM）。这与 [[来源_2024-10_Unichain_胖应用_DeFi演进_BlockUnicorn]] 中 ASS（应用特定排序）的理论框架一致。
- 补充 [[uniswap]] — Uniswap V4 的钩子架构（hooks）是 Bunni V2 的技术基础，说明 V4 的模块化设计正在催生 LP 盈利能力优化的创新。同时 Uniswap 费用开关的讨论表明头部 DEX 也面临"代币持有者 vs LP"的价值分配矛盾。
- 补充 [[aave]] — 文章记录了 Aave 在 2024 年 8 月提出的 AAVEnomics 改革（协议收入回购 $AAVE），这是 DeFi 蓝筹从"纯治理代币"向"价值捕获代币"转型的标志性事件。

## 值得记住的引用
> "流动性提供者受到外部套利者的不利交易条件的影响。"——文章对 LVR 问题的核心概括：LP 持续充当套利者对手方，这与无常损失（机会成本）是不同维度的风险。

> "内部化之前从外部实体（如套利者或各种 MEV）提取的价值变得尤为重要……如果 Uniswap 通过提案将交易费用分配给 $UNI 持有者，则它需要与 $UNI 持有者分享之前完全由 LPs 获取的部分交易费用。在这种情况下，协议内部需要积累更多的价值。"

> "DEX 必须确保 LP 具有足够的盈利能力。"——全文核心论点，LP 盈利 = DEX 流动性深度 = 低滑点交易体验 = DEX 竞争力。

## 我的笔记
这篇文章抓住了 DeFi 2024 年最重要的暗线：价值内部化。CoW AMM 和 Bunni V2 的案例说明，DeFi 正从"开放协议被外部套利者榨取"转向"协议设计让价值留在生态内"。但一个被文章忽略的关键问题是：如果所有 DEX 都内部化了 MEV，套利者就不再存在，那么 CoW AMM 的 Solver 竞价机制还能产生多少盈余？LVR 消除的均衡状态下，LP 盈利只能回到纯手续费模式——这又回到了 DEX 交易量 vs CEX 的根本竞争。LP 盈利能力的终极瓶颈可能不是 LVR，而是 DEX 能否吸引足够的有机交易量（而非 MEV 驱动的套利流量）。
