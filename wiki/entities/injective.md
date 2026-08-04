---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [rwa, tokenized-equities, derivatives, l1, cosmos]
aliases: [INJ]
---

# Injective

## 基本信息
- 类型：Layer 1 区块链，专注去中心化金融（DeFi）衍生品交易
- 成立时间：2020年
- 核心团队：Injective Labs（创始人 Eric Chen 和 Albert Chon）
- 融资：由 Binance Labs、Pantera Capital、Mark Cuban 等投资
- 主网上线时间：2021年11月

## 核心业务/产品

### Helix DEX
- Injective 生态内的去中心化交易所（DEX）
- 支持永续合约、现货交易，以及代币化股票衍生品交易
- 代币化股票永续合约（iAssets）：不持有标的股票，通过预言机数据合成跟踪价格，无需实物结算
- 支持高达 25 倍杠杆（如 iAAPL 交易）

### iAssets（代币化股票衍生品）
- 在 Injective 上的合成代币化股票产品体系
- 关键区别：iAssets 不持有底层股票，是合成衍生品
- 相比 Backed Finance 的 1:1 支持模式，iAssets 更侧重杠杆交易和无需结算
- 代表产品：iAAPL（苹果股票衍生品）

## 关键数据
- 代币化股票永续合约累计交易量：超过 10 亿美元（截至 2025 年上半年）
- Helix DEX 最高杠杆倍数：25 倍
- 与 Chainlink 合作，从纳斯达克获取实时价格数据并上传链上

## 竞争优势
1. **高性能基础设施**：基于 Cosmos SDK 构建，支持订单簿式高性能交易
2. **合成资产模式**：无需持有底层股票即可交易，适合杠杆和衍生品场景
3. **多元化产品线**：涵盖永续合约、现货、结构化产品、代币化股票

## 风险
- 合成资产模式不受传统证券监管框架保护
- iAssets 依赖预言机数据（如 Chainlink），存在预言机攻击和数据延迟风险
- 相比真实持股的代币化股票（如 Backed 的 1:1 模式），缺少法律追索权

## 相关实体
- [[backed]] — 1:1 资产支持模式的代币化股票发行方，与 Injective 合成模式形成对比
- [[chainlink]] — 提供实时股票价格预言机和储备证明验证
- [[kraken]] — 提供代币化股票现货交易的 CEX

## 来源
- [[来源_2025-07_代币化股票_市场规模_深潮TechFlow]]
