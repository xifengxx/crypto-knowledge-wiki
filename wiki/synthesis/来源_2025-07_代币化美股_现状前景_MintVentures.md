---
type: source
source_type: article
url: https://research.mintventures.fund/2025/07/02/zh-analysis-of-the-current-state-and-future-prospects-of-the-tokenized-us-stock-market/
date: 2025-07-02
ingested: 2026-07-02
---

# 代币化美股市场现状和前景分析 — Mint Ventures 深度研报

## 阅读证据
- 总行数: 309
- Q1 (前25%): 代币化股票市场市值仅 3.21 亿美金，持币地址仅 2444 人
- Q3 (中后25%): Helix 的美股产品日均交易量均不超过 1000 万美金，Gains 不足 200 万美金
- Q4 (最后25%): Dinari 和 Backed Finance 均未发行代币；SPI 的 Project Open 成员中 Phantom、Superstate 尚未发币，只有 Orca 发行了代币
- 图片: 0 analyzed / 10 external URLs unavailable (全部为 research.mintventures.fund 外部托管图片)

## 核心要点
- 代币化美股市场处于极为早期的阶段，总市值仅 3.21 亿美元，持有地址约 2444 人。但在本轮友好监管周期中，多个重量级玩家（Kraken、Coinbase、Robinhood、Solana）正在加速布局
- 当前市场的两种核心模式分歧在于链上可组合性：Dinari 严格合规但 dShares 无法链上交易，Backed Finance 通过瑞士监管框架支持自由链上交易（无需 KYC），二者 TVL 相差约 10 倍
- xStocks（Kraken + Backed + Solana）于 2025 年 6 月 30 日上线，拥有 200+ 美股产品和 CEX（Kraken/Bybit）+ DEX（Jupiter/Raydium）+ 借贷（Kamino）的多层合作伙伴生态，被作者认为是快速超越现有玩家的最有力竞争者
- Solana 政策研究所（SPI）的 Project Open 框架在 Backed 模式基础上补充了 KYC 要求，已与 SEC 加密工作组进行多次讨论，作者认为在当前友好的 SEC 任内通过是大概率事件
- 衍生品途径（Gains Network、Helix）提供免 KYC 的美股交易但流动性严重不足（日均 < 1000 万美金），监管风险大；Shift 的 ART 概念试图通过监管缝隙实现免 KYC 交易但尚未上线
- 投资标的稀缺：现有玩家（Dinari、Backed）均无代币，布局玩家中 Coinbase、Solana、Ondo 已市值较高且主营业务非代币化美股，衍生产品中只有 GNS 可选

## 关键数据
- 代币化股票市场总市值 $3.21 亿，总计 2444 个持有地址（RWA.xyz 数据）
- Dinari 融资额：种子轮 $1000 万（2023）+ A轮 $1270 万（2024），投资者包括 VanEck Ventures、Fidelity F Prime
- Backed Finance 融资额：$950 万（Gnosis 领投），链上 LP TVL 接近 $800 万，平均 APY 32.91%（bCOIN-USDC 池 APY 高达 149%）
- EXOD 市值 $7.7 亿，其中约 $2.4 亿在链上
- xStocks 上线时已支持 200+ 股票产品，交易时间 5x24
- myStonks.org 美股账户储备超 $5000 万
- Helix 美股日均交易量 < $1000 万，Gains < $200 万

## 与已有知识的关系
- 补充 [[rwa]] — 提供代币化美股市场最精确的 $3.21 亿总市值和 2444 个持有者数据，以及所有当前玩家的业务模式对比，为 RWA 概念页的代币化股票分类提供市场现状数据
- 补充 [[backed]] — 详细说明 Backed Finance 独立于 xStocks 的商业模式（发行方/专业投资者→铸造 bSTOCK→AMM LP 池），以及其"无限制 ERC-20"策略如何实现 TVL 为 Dinari 10 倍的效果；补充 Backed 融资细节（$950 万 Gnosis 领投）
- 补充 [[solana]] — Solana 政策研究所（SPI）和 Project Open 框架的详细机制和与 SEC 的互动进程，这是 Solana 在 RWA 赛道最重要的监管推动举措
- 补充 [[kraken]] — 提供 xStocks 产品于 2025.06.30 正式上线的详细信息、产品架构（与 Backed 一致的法律架构）、合作伙伴生态
- 补充 [[coinbase]] — Coinbase 正在寻求 SEC 无行动函或豁免救济以开展代币化股票业务，其主要区别是计划向美国用户开放

## 值得记住的引用
> 巨大的市场空间和目前有限的资产规模形成了明显的对比。

> 从需求的根本动机来说，用户购买代币化股票的主要目的是从股票价格波动中获利，关注的是交易场所的流动性、兑付能力以及能否免 KYC 的交易，是否一定要有合规机构来进行代币化并不是用户关心的点

> 最终获得更多交易市场份额的，可能还是那些目前拥有更好流动性、更多交易员用户的交易所。

## 我的笔记
- 作者用 "不可靠的 CeFi 汇率报价" 这个细节来揭示 xStocks 的早期阶段——大多数产品尚未有足够流动性，只有产品层面的 promise 而无实际交易深度。这符合我对所有早期加密金融产品的评估框架：关注流动性而非产品 announcement。
- 文章提出的核心矛盾非常清晰：合规要求（KYC/不允许链上交易）与可组合性优势（免 KYC/链上 AMM 交易）之间的根本张力。Backed Finance 的 "瑞士合规无限制 ERC-20" 路径是目前唯一实际打通二者的方案，但其依赖瑞士而非美国监管框架，美 SEC 的态度仍是最大不确定性来源。相比之下 Solana Project Open 框架虽然更保守（强制 KYC）但更具美国监管可接受性，可能成为最终标准。
- 作者看好的 xStocks 和看衰的 Dinari 的判断与数据一致——Dinari 的 TVL 确实远低于 Backed，且其 "合规但不可交易" 的模式在功能上与富途无异，对 web3 用户毫无吸引力。这个判断值得跟踪验证。
