---
type: source
source_type: article
url: https://research.2077.xyz/a-complete-guide-to-uniswap-v4-1
date: 2025-02-25
ingested: 2026-07-02
---

# Uniswap V4 完整指南：从 Singleton 架构到 Hooks 生态的深度技术拆解

## 阅读证据
- 总行数: 921
- Q1 (前25%): Uniswap V1 (2017) 仅有约 500 行 Vyper 代码，仅支持 ETH-ERC20 交换；V2 (2020年5月) 引入 ERC20-ERC20 直兑、预言机和闪电贷，但面临"惰性流动性"（lazy liquidity）问题——流动性均匀分布在全部价格区间，大部分闲置
- Q3 (中后25%): LVR（Loss-Versus-Rebalancing）的核心原因是 DEX LP 无法实时响应价格变化，被迫将波动带来的利润让给套利者——Arrakis Diamond Protocol 要求套利者在执行前存入抵押品，强制将池价调整至外部市场价（committed price），否则不允许交易
- Q4 (最后25%): Uniswap V4 的池部署成本降低了 99% 以上（通过 Singleton 架构省去单独合约部署），Swap Gas 费用也显著低于 V3；Uniswap 正从 DEX 演变为流动性平台——与 Curve 依赖 CRV 代币激励的模式不同，V4 的 Builder-Driven 生态通过 Hooks 的灵活性和可编程性吸引开发者，形成"LP 盈利提升→TVL 增长→交易量增加"的正反馈循环
- 图片: 0 analyzed / 1 decorative cover image / 14 external URLs（全部来自 Google 图片 CDN，无法直接获取）

## 核心要点
- Uniswap V4 的核心架构创新包括三个：Singleton 架构（单一 PoolManager 合约管理所有池，降低路由 Gas 和部署成本 99%+）、Flash Accounting（基于 EIP-1153 瞬态存储的债务结算模型，将零值写入 Gas 从 20,000 降至 100）、Hooks（可编程钩子，允许池创建者通过独立智能合约自定义 AMM 逻辑）
- Hooks 是 V4 最重要的创新，允许在池操作的 10 个关键节点（before/after Initialize、AddLiquidity、RemoveLiquidity、Swap、Donate）插入自定义逻辑；Hook 实现的函数通过合约地址最后 4 个十六进制位（16 bits）编码，使 PoolManager 提前知晓无需尝试调用所有函数，降低 Gas
- Hooks 带来三大能力：访问控制（限制特定用户交易）、干预交易执行（覆盖 CPMM 算法，如实现 Curve 风格 StableSwap）、动态费用调整（根据波动率调整 LP 费用或对特定交易收取不同费率）
- V4 路由在 V3 的 Smart Order Router + UniswapX（意图驱动的荷兰拍卖执行网络）基础上进一步复杂化，因为必须理解和信任每个 Hook 的逻辑；Fillers 将优先选择经过审计、高 TVL 的 Hook；HookRank 等透明度仪表盘因此变得关键
- LVR（Loss-Versus-Rebalancing）是 V3 LP 的主要损失来源，V4 通过 Hooks 催生了多种解决方案：Arrakis Diamond Protocol（抵押品约束套利者）、Sorella Angstrom（AVS 链下共识 + MEV 拍卖分配给 LP）、波动率响应动态费用
- Hooks 催生了新的代币发行范式：Flaunch 在 V4 池内实现 Fair Launch（固定价格阶段→自由交易），Doppler 实现荷兰拍卖 + 动态绑定曲线，分阶段向池内流式注入流动性以防止狙击
- V4 正在将 Uniswap 从单一 DEX 进化为流动性平台——对比 Curve 的 veToken 激励模型，V4 的 Builder-Driven 生态更可持续，不依赖代币补贴

## 关键数据
- 池部署成本降低 99%+：V3 需要部署独立合约，V4 只需在 PoolManager 中调用函数即可创建池
- V3 单次 Swap 需 200,000+ Gas，V4 通过 Flash Accounting（瞬态存储）将零值写入 Gas 成本从 20,000 降至 100 Gas
- Arrakis LVR 最小化方案使 LP 盈利提升约 5%-20%
- 2025年2月文章发布时，Uniswap V4 仅上线数周，处于极早期阶段

## 与已有知识的关系
- 补充 [[uniswap]] — 现有 uniswap.md 实体页仅覆盖到 V3 生态快照（2021年）和 2024 年关键数据，本篇文章补充了 V4 的完整技术架构（Singleton、Flash Accounting、Hooks）以及 LVR 解决方案、代币发行等生态应用场景
- 补充 [[mev]] — 现有 mev.md 概念页未涵盖 LVR（Loss-Versus-Rebalancing）概念及其与 AMM 流动性提供者的关系，本篇文章详细解释了 LVR 的生成机制以及 V4 Hook 如何通过 Arrakis、Sorella Angstrom 等项目实现 MEV 利润重分配到 LP
- 补充 [[curve]] — 文章对比了 Curve 生态（依赖 CRV 代币投票激励，2022 年初达峰值后难以持续）和 Uniswap V4（Builder-Driven，不依赖代币补贴），提供了评估协议可持续性的新视角
- 补充 [[intents]] — UniswapX 作为意图驱动（intent-based）的交换执行网络，与 V4 的路由复杂度互相影响；Fillers 必须理解 Hook 逻辑才能参与竞拍

## 值得记住的引用
> "Uniswap V3 was a well-designed token exchange, it failed to evolve into a broader liquidity platform that encouraged developer innovation." — 文章对 V3 的核心批评，也是 V4 Hooks 设计哲学的出发点

> "The Uniswap V4 ecosystem that emerges from this structure possesses a key characteristic: sustainability. For example, the Curve ecosystem, which peaked in early 2022, relied heavily on vote incentives driven by $CRV token rewards. In contrast, Uniswap's ecosystem is designed as a builder-driven environment where different projects integrate unique logic to establish their competitive advantages." — 文章对 V4 生态可持续性的核心论点

> "DEX LPs have no choice but to give away all profit opportunities from market volatility to arbitrageurs." — 对 LVR 问题的精炼概括

## 我的笔记
- 这篇文章来自 2077 Research，是一家专注于以太坊 R&D 深度研究的内容机构，技术深度高但可能存在对以太坊生态的天然偏向。文章对 V4 的正面评价较多，对 Hooks 安全风险的讨论相对克制——虽然提到了恶意 Hook 的可能性和 LPs 需要谨慎，但没有深入展开 Hook 经济的安全博弈（如"Hook 版本的 Curve War"）。
- 文章对 "Builder-Driven vs Token-Driven" 的对比很有洞察力，但省略了一个关键事实：Uniswap V4 的开放 Hook 生态可能催生新的 MEV 层次（如 Hook 之间的竞争排序、Hook 专属的优先 Gas 拍卖），这些都是尚未明确的风险。此外，Uniswap 协议本身仍然没有为 UNI 持有者捕获价值，Hooks 带来的增量价值更多流向 LP 和 Hook 开发者而非协议代币。
