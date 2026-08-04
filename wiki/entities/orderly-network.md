---
type: entity
entity_type: protocol
created: 2026-06-29
updated: 2026-06-30
tags: [defi, perp, dex, cross-chain, near, infrastructure]
---

# Orderly Network

## 基本信息
- 定位：全链流动性基础设施 / DEX 后端服务商（明确"不是 DEX，而是为 DEX 服务的流动性基础设施"）
- 成立时间：2022 年
- 创始人：Ran Yi（前 Kronos Research 合伙人、WOO Network 联合创建者、十多年传统金融从业经验）
- 代币：$ORDER（2024 年 8 月 26 日 TGE）
- 核心比喻："流动性中央厨房"——Orderly 提供后端（流动性聚合、撮合、结算），任何开发者可基于 SDK 快速搭建 DEX

## 融资历史
| 轮次 | 时间 | 金额 | 投资方 |
|------|------|------|--------|
| 种子轮 | 2022 年 | $2000 万 | Pantera、红杉中国、Laser Digital、Dragonfly、Jump |
| 战略轮（未披露金额） | 2024 年 3 月 | 未披露 | CoinDCX Ventures（估值 $2 亿） |
| 战略轮 | 2024 年 8 月 | $500 万 | OKX Ventures、Manifold Trading、Nomad Capital |

累计融资：$2500 万+

## 核心业务/产品

### 三层架构
1. **资产金库（Vault）**：管理用户资产
2. **订单匹配引擎（Matching Engine）**：汇集所有代理商提交的交易信息，统一撮合
3. **结算层（Settlement Layer / Orderly Chain）**：基于 OP Stack + Celestia DA + LayerZero 跨链技术，负责跨链数据传递、交易结算和账本记录

### 产品形态
- DEX 开发 SDK：任何开发者可在几小时内搭建 DEX，共享 Orderly 聚合的全链流动性
- 流动性 API：供钱包、游戏、交易机器人、做市商等集成交易功能
- 订单簿交易模式：支持限价订单，体验等同 CEX

### B2B2C 模式
Orderly 不直接面向 C 端用户，而是服务 B 端 DEX 开发者 → 开发者服务 C 端用户。Orderly 解决后端所有问题（流动性、撮合、结算），开发者只需做好前端 UI 和用户运营。

## 关键数据（2024 年 8-9 月）

### 交易与收入
- 累计交易量：超 $800 亿
- 平台总收入：超 $1740 万
- Orderly 净收入：超 $740 万（发币前已实现自主盈利）
- 2024 年 8 月 6 日（BTC 暴跌）：日均交易量 $18 亿（历史新高），单日捕获收益超 $13 万，冲进 DEX 赛道前三
- 2024 年 8 月 29 日：24h 交易量 $13 亿，接近 Uniswap（$17.6 亿），当日 DEX 总交易量 $57 亿

### 代币经济
- ORDER 总供应：10 亿枚
- 分配：55% 社区奖励（含 13.3% 空投）、20% 团队和顾问、15% 战略投资者和早期支持者、10% 基金会
- 空投：9200 万枚 ORDER，约 23 万地址符合资格，TGE 当天全部解锁
- ORDER 开盘价 $0.02，最高 $0.27（涨幅超 1000%），稳定在 $0.2 左右
- 价值捕获：网络 60% 新增收入以 **USDC** 形式分配给 ORDER 质押者
- 质押数据（截至 9 月 2 日）：约 3500 万枚 ORDER 质押，质押收益率约 50%

### 生态规模
- 支持 DEX 数：20+（WooFi、LogX、EMDX、Elixir、Vooi 等）
- 部署公链：7 条（ETH 主链、Near、Polygon、Arbitrum、Optimism、Base、Mantle）
- 合作做市商：20+（Wintermute、Selini、Riverside 等）
- CEX 集成：AscendEX 通过 Orderly 为用户提供链上 DEX 服务

## 竞争优势 / 护城河
- **B 端基础设施模式**：不直接竞争 C 端获客，通过服务 DEX 开发者形成网络效应，每个集成的 DEX 都为 Orderly 带来交易量和流动性
- **共享订单簿**：生态内所有 DEX 共享同一流动性池和订单簿，任何新集成的 DEX 立即获得深度流动性
- **收入赋能代币**：60% 收入以 USDC 分配——这在 DeFi 中罕见，将治理代币变成现金流分配工具
- **先盈利后发币**：发币前已实现 $740 万净收入，非纯"预期经济"驱动
- **做市商网络**：20+ 顶级做市商提供流动性，Wintermute 评价其"在 DeFi 永续合约中拥有最佳流动性"

## 风险 / 争议
- 发币后 TVL 和收入增速可能下降（空投预期落地后的常见问题）
- Perp DEX 赛道竞争激烈：Hyperliquid（社区做市 + 荷兰拍上币）、dYdX（全链订单簿）、GMX（预言机模式）
- "中央厨房"模式的风险：生态内 DEX 可能沦为同一流动性的不同 UI 皮肤，缺乏真正的差异化
- 60% 收入以 USDC 分配给代币持有人的设计可能面临监管风险（类似证券/股利的特征）
- 估值争议：DeFiSquared 认为 FDV $1.55 亿被低估，但市场表现可能受大盘拖累

## 相关事件时间线
- 2022 年：Orderly Network 创建，最初定位 Near 链上 Perp DEX（类似 dYdX）
- 2022 年：完成 $2000 万种子轮融资
- 2024 年 3 月：以 $2 亿估值完成战略轮融资（CoinDCX Ventures 等）；发起 "The Road to The Order" Merits 积分活动
- 2024 年 6 月：Merits 积分活动结束，约 23 万地址符合空投资格
- 2024 年 8 月 6 日：BTC 暴跌期间日均交易量 $18 亿创历史新高
- 2024 年 8 月 16 日：宣布 $500 万战略轮融资
- 2024 年 8 月 26 日：ORDER TGE，上线 Bybit/Hashkey/Kucoin/Gate/Bitget 等
- 2024 年 9 月 2 日：质押 ORDER 约 3500 万枚，收益率约 50%

## 我的判断
Orderly 的 B2B2C 路径是 Perp DEX 赛道中一个独特的差异化策略——不是在前端与 Hyperliquid/dYdX 直接竞争，而是在后端做基础设施。这个模式验证了"可以在 DeFi 中做一个盈利的 B 端生意"。但关键问题是：如果生态内的 DEX 只是同一流动性的不同皮肤，那么 Orderly 的护城河可能比它看起来更薄——毕竟流动性本身是可以迁移的，真正的护城河需要来自无法复制的网络效应或技术壁垒。60% 收入以 USDC 分配给质押者是 DeFi 中最接近"股权分红"的设计，如果这个模式不引发监管问题，它可能成为 DeFi 代币经济的新范式。

## 相关实体
- [[hyperliquid]] — Perp DEX 龙头，走 C 端 + 社区做市路线，与 Orderly 的 B 端基础设施路线形成战略差异
- [[dydx]] — 全链订单簿 Perp DEX，v4 升级后与 Orderly 在"全链订单簿"概念上有重叠
- [[gmx]] — 预言机模式 Perp DEX，流动性获取方式不同（GLP 池 vs 统一订单簿）
- [[near-protocol]] — Orderly 最初在 Near 上孵化，创始人 Ran Yi 也通过 WOO Network 与 Near 生态有交集

## 来源
- [[来源_2024-08_DeFi_PE市盈率_估值分析_BlockBeats]]
- [[来源_2024-09_Orderly_Network_流动性中央厨房_ChainCatcher]]
- [[来源_2024-08_永续合约DEX_应用模式_生态概览]] — 作为跨链流动性调配范式的提出者之一，与 LogX Network 并列；允许在任意链上创建永续合约交易前端并实现市场间流动性杠杆化
