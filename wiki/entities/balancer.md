---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, amm, ethereum]
---

# Balancer

## 基本信息
- 类型: protocol
- 定位: DeFi AMM with customizable weighted pools
- 成立时间: 2018年（V1上线2020年）
- 创始人: Fernando Martinelli
- 关键人物: Martin Koppelmann（[[gnosis]] 创始人，也是 Balancer 关键人物）
- 融资: 2021年3月完成 $2425 万融资，Pantera Capital、Alameda Research 等参投

## 核心业务/产品
- **Weighted Pools**: Balancer 的核心创新是支持多代币权重池（最多 8 个代币，自定义权重），区别于 Uniswap 的 50/50 固定比例，允许更灵活的资产配置和做市策略
- **Smart Vault (V2)**: V2 引入 vault 架构，所有流动性池共用一个 vault 管理资产，比 V1 更 Gas 高效，且支持自定义池逻辑
- **Boosted Pools**: 将生息资产（如 LRT、LST）包装成 Balancer LP，用户通过 Balancer 池即可获取底层质押收益 + 交易手续费
- **Managed Pools**: 允许管理员动态调整池参数（权重、费用、暂停），适用于机构级资产管理和策略池
- **CoW AMM**: 与 [[cow-protocol]] 联合开发的 AMS（自动化做市商）系统，将 Balancer 流动性纳入 CoW 的批量拍卖框架，支持统一清算价结算，天然防止 MEV 攻击
- **Balancer Gauges**: 通过 veBAL 治理模型，BAL 持有者可质押获得投票权，决定 BAL 排放流向特定池

## 关键数据
- 巅峰 TVL: 曾突破 **$20 亿**（Balancer V1 + V2 合计）
- AAVE/Balancer 流动性池: **88 万枚** AAVE，价值 **$1.7 亿**（2024年9月数据）
- 融资: $2425 万（Pantera Capital、Alameda Research 领投，2021年3月）
- CoW Protocol 支持外部 DEX 之一: 包含 Balancer V2
- [[mode]] 生态 AI 代理 Modius 主打 Balancer LP 自动化挖矿
- [[ocean-protocol]] 与 Balancer 合作，用于数据市场的流动性池建设
- 多个 LRT 协议（如 [[ether-fi]] 的 weETH、[[kelp-dao]] 的 rsETH）使用 Balancer 池进行套娃收益 loop

## 竞争优势 / 护城河
- **Weighted Pools 的先发优势**: Balancer 是第一个实现多代币权重池的 AMM，在灵活池场景（如指数基金 LP、80/20 单侧敞口池）中有独特定位
- **Boosted Pools 生态位**: 在 LRT/LST 热潮中，Balancer 通过 Boosted Pools 成为 LSD 资产的流动性层，Curve/Balancer/Maverick 是 LRT 三大 DEX 去向
- **与 CoW 协议的深度集成**: CoW AMM 与 Balancer 联合开发，使 Balancer 获得 MEV 保护能力和批量拍卖的效率优势，是意图导向 DEX 时代的重要布局
- **veBAL 治理机制**: 通过 veBAL 锁仓模型治理 BAL 排放方向，引导流动性到最有价值的池子
- **可组合性**: Balancer 的 Smart Vault 和自定义池逻辑允许第三方协议（如 LRT/合成资产/结构化产品）直接搭建在其基础设施上，形成协议间协作网络

## 风险 / 争议
- **Uniswap 的竞争压力**: Uniswap V3 的集中流动性在标准代币对场景中占据绝对优势，Balancer 的加权池在通用场景中难以竞争
- **Curve 在稳定币/锚定资产池的统治**: Curve 的稳定币做市算法对锚定资产池有天然优势，Balancer Boosted Pools 部分与 Curve 重叠
- **TVL 下滑**: 2022-2023 年熊市中 Balancer TVL 从峰值大幅下滑，部分池子流动性不足
- **复杂性与用户门槛**: Weighted Pools 的业务逻辑比 Uniswap 简单 50/50 池更难理解，限制了用户采用
- **DAO 治理风险**: 2023年曾因 BAL 治理攻击事件（利用投票权差池化）引发对提案安全性的担忧
- **BAL 代币价值捕获有限**: 与多數 DEX 代币类似，veBAL 的排放激励能否持续创造价值存在争议

## 相关事件时间线
- 2018: Balancer 项目启动，由 Fernando Martinelli 创立
- 2020-03: Balancer V1 上线以太坊主网
- 2021-03: 完成 $2425 万融资，Pantera Capital 领投
- 2021-12: Balancer V2 上线，引入 Smart Vault 架构
- 2023-02: 与 [[cow-protocol]] 联合推出 CoW AMM
- 2024: Boosted Pools 在 LRT 热潮中成为重要流动性层

## 我的判断
Balancer 在 DeFi AMM 赛道中占据了"灵活性"这个差异化生态位。它不会像 Uniswap 那样占领通用 DEX 的大部分市场，但 Weighted Pools 和 Boosted Pools 在策略做市、LSD 流动性聚合、指数池等细分场景有不可替代性。CoW AMM 的合作是重要转折点——Balancer 从"独立 AMM"转型为"意图执行网络的核心流动性来源"，这可能比单纯争夺 TVL 更有长期意义。但 veBAL 的治理复杂性和 BAL 代币经济的价值捕获效率仍是需关注的薄弱环节。

## 相关实体
- [[uniswap]] — 主要 AMM 竞争对手，集中流动性模式
- [[curve-finance]] — 稳定币 AMM 竞争对手
- [[cow-protocol]] — CoW AMM 联合开发者，意图驱动 DEX
- [[gnosis]] — Gnosis 创始人 Martin Koppelmann 也是 Balancer 关键人物
- [[mode]] — Mode 生态 Modius 代理使用 Balancer LP 挖矿
- [[aave]] — Balancer 承载 AAVE 主要流动性池
- [[ocean-protocol]] — Ocean 使用 Balancer 构建数据市场流动性池
- [[ether-fi]] — weETH 在 Balancer 进行收益循环
- [[kelp-dao]] — rsETH 使用 Balancer 池
- [[lido]] — stETH/wstETH 在 Balancer Boosted Pools 中作为基础资产

## 来源
- [[来源_2024_CoW_协议_现代DEX]] — CoW AMM 与 Balancer 联合开发，Balancer V2 为外部流动性源
- [[来源_2024-09_AAVE链上数据深度报告_日月小楚]] — Balancer 承载 88 万枚 AAVE 流动性（$1.7 亿）
- [[来源_2025-01_DeFAI三大方向_0xJeff_BlockBeats]] — Modius（Balancer LP 自动化挖矿）为 Mode 生态 AI 代理
- [[来源_2023-05_ChatGPT引爆AI热点_区块链AI融合]] — Ocean Protocol 与 Balancer 合作
- [[来源_2024-02_LRT套娃资金利用率对比]] — weETH 经 Curve/Balancer/Maverick 进行收益循环
- [[来源_2023-10_DeFi发展史_Uniswap之前_BlockBeats]] — Gnosis 创始人 Martin Koppelmann 也是 Balancer 关键人物
