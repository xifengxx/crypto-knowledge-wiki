---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, perps, prediction-market, solana, rwa]
aliases: [Drift Protocol]
---

# Drift

## 基本信息
- 类型: protocol
- 定位: Solana perp DEX + 预测市场 + 借贷
- 成立时间: 2021
- 融资: 种子轮 $3.8M（Multicoin Capital、Jump Capital 领投）
- 链: Solana

## 核心业务/产品

### 永续合约 DEX
Drift Protocol 是 Solana 上领先的去中心化永续合约交易所，采用 **vAMM（虚拟自动做市商）** 定价模式。该模式无需实际资金池，通过虚拟做市商机制实现价格发现和交易匹配，属于永续合约 DEX 四种主流定价模式之一（与预言机模式 GMX、链下订单簿 dYdX v3、全链订单簿 Hyperliquid 并列）。

### BET（Bullish on Everything）预测市场
2024 年 8 月推出，Solana 上首个资本效率型预测市场产品，建立在 Drift 协议之上。特点：
- 支持 30+ 种加密货币（含稳定币和 Solana LST），比 Polymarket 主要用 USDC 更为包容
- 多重收益：用户可通过 Drift 的借贷引擎在所有 BET 交易中赚取收益
- 结构化投注：允许用户在做多某一事件的同时做空 BTC 实现头寸对冲
- 利用 Solana 高吞吐低成本的链特性

### Drift Institutional
面向机构的流动性池产品，支持 RWA 资产（如 ACRED）作为抵押品借入稳定币并实施杠杆策略。

### Solana Blinks 集成
Drift 是 Solana Blinks 生态的早期集成者，用户可直接在 X（Twitter）信息流中通过 Blinks 实现做多或做空操作，无需跳转独立网站。

### 借贷引擎
内置借贷市场，支持用户存入资产赚取收益，同时也为 BET 预测市场和永续合约提供底层流动性基础设施。

## 关键数据
- **种子轮融资**：$3.8M（Multicoin Capital、Jump Capital 领投）
- **BET 预测市场日交易额**：约 $2000 万（2024年8月上线首周），一度超越 Polymarket 同日 $1240 万
- **TVL**：峰值超 $5 亿（Solana 生态领先的衍生品协议之一）
- **永续 DEX 费用收入**：Drift 与 dYdX、GMX、Jupiter 并列为永续 DEX 赛道中手续费收入最高的协议之一（据 HashKey Capital 2024 年 1 月报告引用 Messari 数据）
- **Blinks 集成生态**：作为 Solana Blinks 首批 22+ 用例之一，支持 X 信息流内直接交易
- **Solana 网络计算占比**：通过 Jupiter 分发嵌入，Drift 相关交易占 Solana 网络计算使用的重要部分

## 竞争优势 / 护城河
- **多功能集成**：Drift 是 Solana 上极少数同时提供永续合约、预测市场、借贷三大核心 DeFi 产品的协议，形成"一站式链上金融"产品矩阵
- **vAMM 创新**：无需实际资金池即可做市，降低资本要求，同时避免了传统 AMM 的无常损失问题
- **资本效率型预测市场**：BET 通过 Drift 借贷引擎实现多重收益，相比 Polymarket 的纯 USDC 模式更具资本效率
- **Blinks 先发优势**：作为 Solana Blinks 早期集成者，占据了社交交易（Social Trading）的流量入口
- **Jupiter 分发网络**：通过 Jupiter 聚合器嵌入 Solana 主流交易入口（一度占 Solana 近半计算使用），获得稳定的用户流量
- **RWA 可组合性**：支持 ACRED 等 RWA 资产作为抵押品，打通了传统资产与 DeFi 衍生品之间的桥梁

## 风险 / 争议
- **Hyperliquid 竞争压力**：Hyperliquid 以约 75% 的永续 DEX 市场份额主导市场，Drift 在 Solana 生态内还面临 Zeta、Flash 等竞争对手
- **vAMM 局限性**：相比全链订单簿（Hyperliquid）的透明度和性能，vAMM 模式在定价精度和抗操纵性方面存在固有劣势
- **预测市场监管风险**：BET 提供政治选举等事件预测，可能在多数法域面临博彩/衍生品监管审查，这与 Polymarket 此前遭遇的监管挑战类似
- **Solana 生态依赖**：单一公链布局使 Drift 完全暴露于 Solana 的网络风险（如历史宕机事件）和生态兴衰周期
- **永续 DEX 渗透率瓶颈**：整个永续合约 DEX 赛道仅占全市场合约交易量的 5%，CEX 在深度流动性、延迟、用户体验方面的优势短期内难以撼动

## 相关实体
- [[hyperliquid]] — 全链订单簿永续 DEX 市场领导者，Drift 在 Solana 外的最大竞争对手
- [[jupiter]] — Solana DEX 聚合器，Drift 通过其分发网络获得用户流量
- [[polymarket]] — 预测市场竞品，BET 的直接对标对手
- [[zeta]] — Solana 生态另一永续合约 DEX 竞品
- [[vertex-protocol]] — 跨链永续合约 DEX，与 Drift 构成竞争
- [[solana]] — 底层公链，Drift 完全依赖 Solana 的链性能
- [[gmx]] — 预言机模式永续 DEX（Arbitrum/Avalanche），与 Drift 属于不同定价模式路径
- [[dydx]] — 链下订单簿永续 DEX（StarkEx→dYdX Chain），与 Drift 构成模式对比
- [[drift-protocol]] — 同一协议的不同实体页，需合并
- [[apollo-acred]] — RWA 机构流动性池合作方（Drift Institutional）
- [[pyth]] — Solana 生态系统关键预言机，为 Drift 提供价格数据

## 来源
- [[来源_2024-08_永续合约DEX知识科普]] — vAMM 定价模式分类，Drift 作为典型案例
- [[来源_2024-08_各链预测市场现状_Polymarket_Azuro_PredX_MarsBit]] — BET 预测市场产品特性与交易数据
- [[来源_2024_MT_Capital_Solana生态爆发前夜]] — Drift 种子轮 $3.8M 融资信息
- [[来源_2024-01_HashKey_Capital_Web3投资赛道全解析_PANews]] — 永续 DEX 费用收入排名（Drift 位列其中）
- [[来源_2024-07_Solana_Blinks_22个用例_BlockBeats]] — Drift Blinks 集成用例
- [[来源_2025-06_Solana_RWA_全面概述_Helius]] — Drift Institutional 面向大型资本配置者的 RWA 服务详情，首个产品为 ACRED 机构借贷池与 Gauntlet 管理的杠杆金库
- [[来源_2025-07_Messari_Solana_RWA_赛道]] — Drift Institutional 与 ACRED 合作
- [[来源_2025-08_Jupiter_Hyperliquid_聚合器战争_深潮TechFlow]] — Jupiter 分发网络中 Drift 的角色
- [[来源_2024-12_Delphi_DeFi_2025_Consumer_DeFi与加密银行卡]] — Fuse Pay 集成 Drift + Jupiter

