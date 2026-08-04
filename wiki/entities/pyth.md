---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [oracle, solana, defi, infrastructure]
aliases: [Pyth Network, PYTH]
---

# Pyth

## 基本信息
- 类型: protocol
- 定位: 去中心化预言机（Oracle）网络
- 链: Solana（原生，已扩展至 30+ 条公链）
- 代币: $PYTH（总供应 100 亿枚）
- 数据来源: 顶级交易公司和做市商（Jump Trading、Jane Street、CBOE、Binance、OKX 等）作为第一方数据发布者（Publishers）
- 技术模式: "Pull-based" 拉取式喂价（按需获取 vs 链上主动推送）
- TVS 市占率: 8.95%（2024.10，全预言机赛道第 4）
- **团队**: Michael Cahill (联合创始人兼CEO), Jayant Krishnamurthy (联合创始人兼CTO), Ciaran Cronin (联合创始人兼COO)
- **融资**: 2023 年 12 月战略轮（Delphi Ventures/Multicoin Capital/CMT Digital/Wintermute/Castle Island Ventures 等参投），金额未披露

## 核心业务/产品

### Pyth Network — 去中心化预言机
Pyth Network 是 Solana 上最大的预言机协议，提供 90+ 条实时价格喂价数据，覆盖加密货币、股票、ETF、外汇、大宗商品等资产类别。不同于 Chainlink 的 "Push-based"（推送式）模式，Pyth 采用 "Pull-based"（拉取式）架构——DeFi 协议按需从 Pyth 合约获取价格数据，而非被动接收持续推送。该模式可显著降低链上 gas 成本，尤其适合 Solana 的高吞吐环境。

### 技术架构
Pyth 的预言机基础设施通过 **Pythnet**（基于 Solana 客户端构建的独立区块链）运行。Pythnet 聚合价格喂价后，通过 Wormhole 桥进行跨链分发。这种架构不同于 Chainlink 的联盟式多节点模型——Pyth 直接从第一方数据提供者（CEX、DEX、做市商、对冲基金）获取价格数据，减少中间环节篡改风险。

### Oracle Integrity Staking（OIS）
截至 2025 年 1 月，超过 $100M 的 PYTH 代币已通过 OIS 机制质押。该机制要求数据发布者质押 PYTH 作为抵押品，恶意行为将被罚没。当价格偏差超过 250 基点并持续超过 60 秒时，**Pythian Council**（半中心化治理机构）审查差异并执行罚没处罚。

### 数据发布者网络
Pyth 的数据由全球顶级交易公司、做市商和交易所直接提供，包括 Jump Trading、Jane Street、CBOE、Binance、OKX 等。这些 "Publishers" 将实时市场价格提交至 Pyth 预言机，经聚合后供链上应用消费。 Publishers 需质押 $PYTH 代币以参与数据提交和网络治理。

### Oracle 价格喂价（Price Feeds）
Pyth 支持 90+ 条不同的价格喂价，每条喂价聚合多个数据发布者的报价，通过加权中位数算法计算最终价格，并伴随置信区间（Confidence Interval）以指示价格质量。

## 关键数据
- **TVS 市占率**：8.95%（2024.10，DefiLlama），排名第 4（前 3 为 Chainlink 44%、WINKlink 15%、Chronicle 13.59%）
- **Solana oracle 主导地位**：占 Solana 总喂价交易量的 **85%**，周均交易量超 **100 万笔**（vs Chainlink 在 Solana 上周均 <100 万笔）
- **核心客户 TVL**：最大客户 Kamino Lend 贡献 $13.2 亿 TVL，约占总 TVS 的 **30%**
- **TVS 增长**：2024 年总 TVS 较 2022 年高点翻一倍多，持续增长
- **EVM 扩张**：EVM 链周均交易量突破 **100K**，集中在 Arbitrum、Fantom、Optimism
- **代币供应**：$PYTH 总供应 **100 亿枚**，文章撰写时（2024.10）流通量仅 **36%**
- **价格波动**：$PYTH 从高点 **$1.20** 跌至 **$0.30**（2024.10，受 5 月大额解锁 + 市场降温影响）
- **EVM 对比 Chainlink**：Chainlink 仍占 EVM 约 **92.7%** 市场份额，Pyth EVM 交易量仅为 Chainlink 的零头

## 竞争优势 / 护城河

### 技术架构优势
Pyth 的 **Pull-based** 架构相较 Chainlink 的 Push-based 在 Gas 成本和灵活性上更具优势。应用仅在需要价格数据时主动拉取，避免了链上持续推送的冗余成本，尤其适合高频交易的 Solana 生态。

### Solana 生态锁定
Pyth 起源于 Solana 生态并深度嵌入其中，占 Solana 预言机交易量的 **85%**。Solana 生态的 DeFi 协议（Kamino、Drift、Jupiter 等）高度依赖 Pyth 的价格喂价，形成较强的迁移壁垒。Solana RWA 基础设施栈明确将 Pyth 列为标准组件（与 Switchboard、Redstone 并列）。

### 顶级数据来源
Pyth 的数据发布者网络涵盖 Jump Trading、Jane Street、CBOE 等传统金融 vs 加密领域的顶级流动性提供者，数据质量和及时性在预言机赛道具有差异化竞争力。

### Purple 生态扩展
Pyth 与 Wormhole 等 Solana 生态头部项目联合推出 "Purple" 生态成员计划，覆盖新公链（如 Monad）和一二级 DeFi 项目，形成跨项目协同和用户共享效应。Pyth 质押者（Stakers）还进入了 Wormhole W 代币空投的分配名单。

## 风险 / 争议

### EVM 市场份额极低
Pyth 在 EVM 生态中与 Chainlink 的差距巨大。Chainlink 仍占据 EVM 预言机约 **92.7%** 的市场份额，Pyth 的交易量仅为 Chainlink 的零头。预言机赛道正日益红海化，Pyth 的 "Why You" 问题在 EVM 生态仍未解决。

### 依赖 Wormhole
Pyth 的跨链数据分发完全依赖 Wormhole 桥，Wormhole 的任何漏洞都构成对 Pyth 的系统性风险。

### 治理去中心化有限
争议仲裁依赖 Pythian Council（委员会结构）而非完全去中心化仲裁，仍存在中心化治理风险。

### 代币价值捕获有限
$PYTH 的功能仅限于质押治理（社区投票），不涉及收入分红或费用共享。用户无法从 Pyth Network 的增长中获得直接经济收益。这与 Chainlink 的 $LINK 类似，属于 "估值 = 叙事溢价 - 解锁抛压" 的负和博弈模型。

### 大额解锁压力
$PYTH 在撰写时仅流通 **36%**（总供应 100 亿枚），2024 年 5 月的大额解锁直接导致价格从 $1.20 暴跌至 $0.30。后续持续解锁是代币价格的长期压制因素。

### 收入不透明
Pyth 未公开披露收入或费用数据，运营健康状况只能通过链上交易量指标间接推断。这与传统基础设施的财务透明度要求存在差距。

### Chainlink 的绝对垄断
即使在 Solana 生态，Chainlink 也已开始扩展（加上刚上线的 Chainlink CCIP），长期看 Chainlink 可能利用其品牌、流动性和开发者生态优势反攻 Solana。Pyth 的 "Solana 护城河" 并非永恒不变。

## 相关实体
- [[chainlink]] — 预言机赛道绝对龙头，EVM 生态垄断者，Pyth 的主要竞争对手
- [[kamino-finance]] — Pyth 最大客户（$13.2 亿 TVL），占 Pyth TVS 约 30%
- [[switchboard]] — Solana 生态另一家预言机协议，与 Pyth 形成竞合关系
- [[solana]] — Pyth 的原生生态，提供主要流量和增长动力
- [[wormhole]] — Solana 生态跨链桥，Pyth Purple 生态合作伙伴，Pyth 质押者获得 W 空投
- [[drift]] — Solana 头部 perp DEX，使用 Pyth 价格喂价
- [[monad]] — 新公链，Pyth Purple 生态延伸，$PYTH 持有者被推测可获 Monad 空投
- [[aevo]] — 衍生品交易所，使用 Pyth 作为价格来源之一
- [[jupiter]] — Solana 最大聚合 DEX，依赖 Pyth price feeds

## 来源
- [[来源_2024-08_寻找DeFi机会_八个潜力项目]] — Curvance + Pyth Purple 生态成员
- [[来源_2025-07_Messari_Solana_RWA_赛道]] — Pyth 作为 Solana RWA 基础设施预言机组件
- [[来源_2024-03_Wormhole_W代币空投_代币经济学_BlockBeats]] — Pyth 质押者进入 W 空投分配名单
- [[来源_2025-01_Monad测试网_生态建设_参与策略_PANews]] — $PYTH 持有者推测可获 Monad 空投
- [[来源_2024_MT_Capital_Solana生态爆发前夜]] — Pyth = Solana 核心基础设施项目
- [[来源_2024_产能过剩的基建领域]] — 预言机赛道 Chainlink vs Pyth 深度对比分析（TVS 市占率、Solana/EVM 运营数据、$PYTH 代币解锁影响）
- [[来源_2025-02_预言机_机构信任_Chainlink]] — insights4.vc 三大预言机横向对比：Pyth 团队背景/融资细节、OIS 质押超 $100M/Pythian Council 仲裁机制（250 基点/60 秒）、Wormhole 依赖风险
- [[来源_2025-03_zkTLS原理_潜在应用场景_PANews]] — zkTLS技术对Pyth等预言机项目的冲击：Pyth与Chainlink等行业巨头同样面临zkTLS带来的技术迭代压力

