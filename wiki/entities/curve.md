---
type: entity
entity_type: protocol
created: 2026-06-29
updated: 2026-06-29
tags: [defi, dex, amm, stablecoins, ethereum]
---

# Curve

## 基本信息
- 定位：以太坊上专注于稳定币互换的去中心化交易所（DEX）
- 核心创新：AMM 低滑点稳定币交易（StableSwap），后来扩展至非稳定币交易
- 代币：$CRV（治理+费用分成）
- 创始人：Michael Egorov（2024年Q2再次遭遇清算，影响市场信心）

## 核心业务/产品
- **StableSwap**：稳定币低滑点交易（曾为核心业务）
- **TriCrypto池**：USDT/WBTC/WETH交易（现为最大收益贡献者）
- **crvUSD**：Curve原生稳定币（2024年6月起费用分配迁移至crvUSD）
- **Yield Basis（2025.02）**：创始人Michael Egorov推出的新BTC收益层AMM，以5000万美元估值融资500万美元，底层使用crvUSD，旨在最小化无常损失并提供BTC LP真实收益

## 关键数据（2024年8月）
- 交易量排名从顶级跌至第8，被Base生态的Aerodrome赶超
- PE值：60→25→19（全流通PE与流通PE差距大）
- 池收益主要贡献者已从3CRV（DAI/USDC/USDT）转为TriCrypto池（USDT/WBTC/WETH），占比过半
- 稳定币池收益占比仅剩不到22%
- crvUSD自8月5日链上清算后借贷利率大幅下调，ETH/WBTC池利率低至零点几，资金出逃明显

## 竞争优势 / 护城河
- **veTokenomics**：veCRV投票机制曾在"Curve War"中形成强大生态博弈
- **crvUSD稳定币**：Curve命运几乎完全仰仗于稳定币决战的输赢

## 风险 / 争议
- 核心业务（稳定币互换）在稳定币市场"赢家通吃"中逐渐消亡
- 创始人2024年Q2清算事件持续打击市场信心
- 增长严重依赖crvUSD能否在稳定币决战中胜出

## 相关实体
- [[yield-basis]] — 创始人Michael Egorov新项目（2025.02），BTC收益层AMM
- [[uniswap]] — 曾经的正面竞争者，Uniswap现交易量远超Curve
- [[makerdao]] — crvUSD对标DAI/USDS
- [[aave]] — crvUSD借贷场景

## 来源
- [[来源_2023-08_RWA实现路径_OffChain-OnChain_美债代币化]] — MatrixDock STBT在Curve池中交易，是RWA资产进入DEX流动性的早期案例
- [[来源_2024-08_DeFi_PE市盈率_估值分析_BlockBeats]]
- [[来源_2024-11_加密网络经济_三类进化_深潮TechFlow]] — Curve veLocking 被诊断为第一类网络的"经济捕获"问题典型案例：固定发行计划限制市场对代币真实价值的判断，被 Convex 等外部参与者利用
- [[来源_2024-12_AMM自动化做市商指南_ThreeSigma]] — 补充Curve V2动态锚定模型参数详解（价格偏移系数+放大系数A）、稳定币depeg对流动性池的影响分析
- [[来源_2025-03_YieldBasis_BTC收益层_BlockBeats]] — 创始人Michael Egorov推出Yield Basis新项目
- [[来源_2025-09_DeFi稳定币_支点_USDH_HyperLiquid]] — crvUSD 铸造量突破 2.3 亿枚，wstETH 单一资产占铸造总量约一半，点明 crvUSD 在 LSDfi 领域的深度绑定
- [[来源_2022-10_代币模型_治理代币_veToken_Bankless]] — 2022年熊市数据：CRV下跌-71%；年化通胀率超100%（每日向LP分发超过100万CRV）；作为veToken模型先驱的详细机制分析（锁定时间与veCRV的线性关系：1年锁定1,000 CRV=250 veCRV，4年=1,000 veCRV）；高通胀排放是veToken模型的结构性缺陷
