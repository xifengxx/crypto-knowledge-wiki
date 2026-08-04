---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, options, yield, structured-products]
---

# Ribbon Finance

## 基本信息
- 类型: DeFi 链上基金 / 结构化产品协议
- 赛道: DeFi 期权策略 / 算法策略基金
- 核心产品: Theta Vault（Covered Call + Put Selling 自动化策略）
- 链: Ethereum, Avalanche, Solana
- AUM: 70M+（2022年8月，Ethereum，同类型最大）
- 后续发展: 转型为 Aevo（链上期权 DEX + Pre-Launch 期货）

## 核心业务/产品
Ribbon Finance 是基于 Opyn 的期权产品实现的 DeFi 结构化产品，期权的铸造、售卖和行权全部在链上完成。

**Theta Vault**：核心产品，包含 Covered Call（持股立保）和 Put Selling（无保看空）两类策略，共12支产品。

- **Covered Call**：持有对应加密货币，每周五出售该币种的看涨期权获取权利金收益
- **Put Selling**：投入 USDC，每周五卖出一定数量的看跌期权组合获得收益
- 算法通过设定固定 Delta 值（V1 在 delta=0.1 人工计算，V2 从 Chainlink 读取现货价格自动计算波动率和行权价格）
- 最新版本结合 Yearn Finance，将闲置资金投入额外获取无风险收益
- 所有期权有效期一周，Theta Vault 所有操作通过智能合约实现

未来产品方向涵盖期权、期货、固收等。

## 关键数据
- 自2021年1月以来只有少于5%时间被行权亏损
- 理论年化（未被行权时）：ETH 34%, BTC 27%, USDC 50%
- 实际一年收益（考虑市场波动）：BTC 币本位 6.05%, ETH 3.38%, USDC -28%
- Covered Call 更适合熊市，Put Selling 更适合牛市

## 竞争优势 / 护城河
- 完全链上自动化策略，用户无需手动操作
- 基于 Opyn 的基础设施，期权铸造/售卖/行权全流程链上透明
- 在同类产品中资金体量最大（70M+ AUM）

## 风险 / 争议
- 极端行情下易被行权导致亏损（山寨币市场波动大）
- USDC 策略实际收益为负（-28%），说明理论年化与实际收益差距大
- 依赖 Opyn 期权基础设施，存在底层合约风险

## 相关事件时间线
- 2022-08: Ribbon Finance 在 Ethereum 上 AUM 70M+
- 2023-07: 并入 Aevo（Ribbon Finance 转型为 Aevo 链上期权 DEX），Paradigm 875万美元 B 轮背书

## 相关实体
- [[opyn]] — 底层期权铸造平台
- [[yearn-finance]] — 闲置资金投向 Yearn 获取额外收益
- [[aevo]] — 转型后的方向
- [[chainlink]] — V2 中通过 Chainlink 读取现货价格

## 来源
- [[来源_2022-08_链上基金_DeFi资管_iZUMi]]
