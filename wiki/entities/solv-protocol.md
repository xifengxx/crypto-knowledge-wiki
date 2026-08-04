---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-07-01
tags: [defi, btc, liquid-staking, btc-ecosystem]
---

# Solv Protocol

## 基本信息
- 类型: BTC 生态 DeFi 协议（BTC 流动性质押+收益聚合）
- 定位: 「链上微策略」(On-chain MicroStrategy)——将 BTC 的 Buy and Hold 升级为 Buy and Earn
- 团队: 核心团队来自金融分析、区块链技术整合、IT 系统设计领域；参与创建 ERC-3525 代币标准（半同质化代币）
- 融资: 超 $2,500 万（Binance Labs、Blockchain Capital、OKX、Laser Digital、MPCI、IOSG、Gumi）
- 发展历程: 2020-2023 年构建链上基金平台（USDC/ETH/BTC 收益产品）→ 2024 年初转型 BTC 生态

## 核心产品
- **SolvBTC**: 1:1 由 BTC/包装 BTC 支持的收益代币，分层储备体系（核心储备+创新储备），透明实时储备证明。通过 Chainlink CCIP + Free.tech 实现多链跨链（以太坊/BNB Chain/Mantle/Merlin 等）
- **SAL (Staking Abstraction Layer)**: BTC 质押抽象层，四个角色协作——质押协议/LST 发行者/质押守护者/收益分配者。终极目标是成为 BTC 生态质押的底层标准
- **四款 BTC LST 产品**: Babylon LST、CoreDAO LST、Ethena LST、Jupiter LST

## 关键数据
- 链上 BTC 规模: 25,000+ 枚（截至 2024/12），与 BTC ETF 相比排名第 7、与企业相比排名第 6、与国家储备相比排名第 5
- SolvBTC 利用率: 90%
- 三款产品（不含 Babylon）APY 均值 ~15%，估算年收益约 $4 亿
- 用户数: 52.9 万+
- 生态覆盖: 15 条链 + 50+ DeFi 协议
- Hyperliquid 现货拍卖: $12.8 万获得 SOLV ticker
- OKX Web3 Cryptopedia 活动: 20 万+ 人参与

## 竞争优势 / 护城河
- **先发+规模优势**: BTCFi 最大流动性协议，2.5 万+ BTC 锁仓在 BTC 生态中领先
- **标准化野心**: SAL 试图定义 BTC 质押的行业标准（类似 Lido 在 ETH LSD 的地位）
- **团队基因**: 创造了 ERC-3525 标准，有深厚的技术积累，非跟风项目
- **顶级资本背书**: Binance Labs、Blockchain Capital 等一线机构投资
- **生态深度**: 15 条链 + 50+ 协议整合，网络效应初现

## 风险 / 争议
- 智能合约风险：多层 DeFi 堆栈（跨链桥+LST+Restaking）增加了攻击面
- 储备证明可信度：尽管声称「透明实时」，独立审计和验证机制的细节不足
- 代币经济学未公布：即将发布的代币模型是否可持续是核心不确定性
- 竞争激烈：Babylon、Lombard、pSTAKE、StakeStone 等争夺同一市场
- 跨链桥依赖：依赖 Chainlink CCIP 和 Free.tech 等第三方跨链基础设施

## 相关事件时间线
- 2020-2023: 构建链上基金平台，为 USDC/ETH/BTC 创造基础收益机会
- 2024 年初: 捕捉 BTC 生态崛起机遇，推出 SolvBTC
- 2024 年中: SOLV 扩展到多链，成为 BTC 生态最大流动性
- 2024/12: 参与 Hyperliquid 现货拍卖（$12.8 万），即将发布代币经济模型

## 我的判断
Solv 的「链上微策略」叙事有一定说服力——它把 MSTR 的储备经济逻辑从 TradFi 搬到了链上，用 DeFi 原语替代可转债和 ATM 增发。但核心区别在于：MSTR 的风险是金融工程层面的（溢价收敛/Delta 对冲反馈环），Solv 的风险是技术安全层面的（合约漏洞/跨链桥攻击）。Solv 若能在代币经济学中设计出一个可持续的增长飞轮（类似 veToken 或收益分享模型），有机会成为 BTCFi 的基础设施层。但 2024 年底 BTC L2/BTCFi 赛道已经拥挤，Solv 能否从「最大流动性」升级为「行业标准」取决于 SAL 的采用率。

## 相关实体
- [[microstrategy]] — Solv 自称「链上微策略」，两者都是从 BTC 储备中提取额外价值的模型，但路径不同（DeFi 生息 vs 金融工程杠杆）
- [[babylon]] — BTC 质押基础设施，Solv 的 Babylon LST 是建立在 Babylon 之上的产品，存在竞合关系
- [[hyperliquid]] — Solv 参与 Hyperliquid 现货拍卖，可能成为其 BTC 本位抵押品标准
- [[ethena]] — 类似的「链上结构化产品」逻辑：Ethena 用 delta 中性策略创造 USDe 收益，Solv 用 BTC LST+DeFi 组合创造 BTC 收益
- [[pendle]] — SolvBTC 在 Pendle 上可做收益拆分（YT-SolvBTC.BBN），放大潜在收益

## 来源
- [[来源_2024-12_Solv_Protocol_链上微策略_BTC_生息_BlockBeats]]
- [[来源_2024_Babylon_BTC质押_唤醒万亿美元流动性]] — Solv TVL $10.48 亿/19,000+ BTC（早期数据）
- [[来源_2024-11_DeFi流动性获取四种策略]] — Merlin+Solv 流动性互导案例
- [[来源_2024-08_Babylon主网上线_BTCFi赛道再思考]] — 在 BTCFi 赛道盘点中被列为头部项目代表：SolvBTC 作为全链收益 BTC 资产将 BTC 流动性引入 DeFi 协议
