---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, tokenomics, indices]
---

# Index Coop

## 基本信息
- **类型**：去中心化指数协议
- **赛道**：DeFi / 代币化指数
- **产品**：DPI (DeFi Pulse Index)、杠杆比率代币（ETH2xBTC、BTC2xETH）等

## 核心业务/产品
Index Coop 专注于创建代币化的加密指数产品，将多种资产组合包装为单一ERC-20代币。其核心创新方向是"杠杆比率代币"（Leveraged Ratio Tokens）：

- **ETH2xBTC**：2倍做多ETH做空BTC的杠杆比率代币。底层机制：利用Aave借入2倍名义ETH并卖出1倍名义BTC，主动管理借贷仓位以维持2倍杠杆
- **BTC2xETH**：对称产品，2倍做多BTC做空ETH

这些产品将特定金融意图（交易对之间的杠杆比率敞口）代币化，用户无需自行管理永续合约仓位，避免了资金费率冲击、学习门槛和税务麻烦。

## 关键数据
- 2021 年 IIP-32 金库多元化出售：由 1kx 领投的 DAO treasury sale，采用 6 个月线性归属 + 折扣市场价的条款结构
- 社区参与方案：过去 3 个月获得过 contributor rewards 的成员有资格购买，每人上限 $100k，与战略投资者同条款
- 来源：[[来源_2025-03_代币经济学_代币化结构化产品_tokenomicsexplained]]

## 竞争优势 / 护城河
- 通过代币化解决杠杆交易中的税务效率问题（避免频繁交易产生的短期资本利得税）
- 相比永续合约，资金费率更低且更可预测（利用货币市场借款而非永续合约对冲）
- 无清算风险（被动管理杠杆率），对比永续合约的频繁清算

## 风险 / 争议
- 杠杆仓位的主动管理费用（管理方需要持续调整借贷仓位）
- 产品复杂度限制了目标用户范围

## 相关实体
- [[yearn-finance]] — 同为代币化策略的早期实践者，但Index Coop专注于杠杆指数而非自动复投
- [[ethena]] — 同为Delta中性策略的代币化，但Ethena以稳定币形式呈现

## 来源
- [[来源_2025-03_代币经济学_代币化结构化产品_tokenomicsexplained]] — Index Coop创建ETH2xBTC/BTC2xETH杠杆比率代币
- [[来源_2022-08_DAO补偿_Coordinape_Hedgey]] — 补充 Index Coop DAO 薪酬结构：14 工作组/100+ 贡献者通过 Coordinape 分配，全职成员三种薪酬选择（100% USDC/50% INDEX:50% USDC/100% INDEX）
