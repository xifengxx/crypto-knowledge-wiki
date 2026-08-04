---
type: entity
entity_type: project
created: 2026-06-30
updated: 2026-07-02
tags: [layer1, defi, pol, cosmos]
---

# Berachain

## 基本信息
- **类型**: Layer 1 区块链
- **赛道**: L1 公链 / DeFi 基础设施
- **成立时间**: 起源于 Olympus DAO 社区的 Bong Bears NFT（第一个 rebase NFT），2023 年正式转型 L1
- **团队**: 四位匿名联创，自称"加密原生 Degen"
- **技术栈**: Polaris EVM + Cosmos SDK
- **融资**: A 轮 $4206.9 万（Polychain 领投，Hack VC/OKX 参投）+ B 轮 $1 亿（2024 年 4 月，Brevan Howard Digital 和 Framework Ventures 领投），估值 $4.2B（B 轮）
- **核心创新**: Proof of Liquidity（POL）共识机制——将 Curve ve(3,3) 贿赂系统直接集成到 L1 共识层

## 核心业务/产品

### POL 共识机制
Berachain 最核心的差异化。POL 在 POS 基础上，在共识层面整合激励系统，使验证者、应用程序和用户三方利益对齐：
- 验证者决定 BGT 的发放方向
- 应用通过贿赂验证者吸引 BGT 发放到自己的流动性池
- 用户向 LP 池添加流动性赚取 BGT，再将 BGT 委托给验证者

### 三币模型
| 代币 | 功能 | 可转让 |
|------|------|:---:|
| **$BGT** | 治理代币，只能通过 LP 获得，可燃烧兑换 BERA | 否 |
| **$BERA** | Gas 代币，验证者必须质押 | 是 |
| **$HONEY** | 原生美元挂钩抵押稳定币（存入白名单抵押品铸造）| 是 |

### 飞轮
验证者 BGT 发放 → 协议贿赂 → 用户 LP 流动性 → BGT 委托 → 验证者权力增强 → 更多 BGT 发放

### 主网上线后生态项目矩阵（2025年2月）
Berachain 主网于 2025 年 2 月上线，通过 Boyco 计划吸引超 30 亿美元存款，上线后 TVL 超 19 亿美元，各大 dApp 迅速部署：

**核心 DeFi 生态**：
- [[kodiak]] — TVL 超 6.9 亿美元，Berachain 上最大 DEX，推出集中流动性池和"甜岛"高收益产品（三位数 APR），资产规模迅速增长至 11 亿美元以上
- [[ooga-booga]] — 原生流动性聚合器，上线后完成近 2 亿美元交易量
- [[dolomite]] — 货币市场 + 保证金交易协议，吸引近 10 亿美元资产，超 3200 万美元已借出
- [[infrared-finance]] — 流动性质押协议，吸引超 1.8 亿 BERA 质押，提供 iBERA 和 iBGT
- [[beradrome]] — 基于 Solidly 模型的流动性市场，2025 年 2 月 9 日上线，与 Kodiak 和 Yeet 协作推出自动化收益产品
- Yeet — 与 Beradrome 和 Kodiak 合作的流动性 Trifecta Vault，提供自动收益产品
- Smilee Finance — 推出 gBERA（独特的流动性质押代币，自动重新基准和累积奖励）
- D2 Finance — TVL 超 1000 万美元，提供代币化衍生策略（Hyperbera、Kodiak ++ 等）

**非 DeFi 生态**：
- **bera.tv** — "第一个跨维度的 AI 生成电视节目"，AI 熊新闻主播
- **Over/Under** — 实时视频游戏投注平台，支持多关连串（parlays）
- **Memeswap** — memecoin 交易平台，完成超 37 万 BERA 交易量，支持 BERA 质押提供租赁流动性
- **Shogun** — 跨链入口，一键从任何链转移资产到 Berachain
- **Honey Chat** — Berachain 原生社交网络，通过代币治理和管理社交声誉

### PoL 上线关键数据（2025年3月）
- 每年排放 54.52M $BGT（每周 1.05M $BGT），仅 16% 直接给验证者，84%（约 $740 万/年）分配至奖励金库
- $BERA 价格（2025年3月）：$8.43；年分发激励价值约 $880 万
- 验证者选择：仅 $BERA 质押量排名前 69 名可参与区块生产（最低 250,000 $BERA，最高 10,000,000 $BERA）
- 基础排放固定为每区块 0.5 $BGT
- Berapalooza 2 活动前 24 小时内贿赂金额超 $50 万美元，每周潜在贿赂 $100 万美元

## 竞争优势 / 护城河
- **共识层创新**：POL 是"第一个在协议层面可扩展的激励系统"，区别于 Curve 等应用层贿赂
- **流动性即安全**：流动性和安全性随网络增长成比例扩展
- **飞轮效应**：从零和博弈转为协作环境，降低协议的流动性获取成本
- **社区文化**：Cult + Meme 基因，匿名团队+故意拼错名字（Bear→Bera）致敬 HODL 文化

## 风险 / 争议
- **验证者权力集中**：验证者决定 BGT 发放方向，可能形成寡头
- **白名单机制**：验证者和流动性池需要白名单，与去中心化叙事存在根本张力
- **区块生产依赖**：如果区块创建需求下降，可能成为单点故障
- **贿赂博弈风险**：Curve 的 ve(3,3) 贿赂问题在 L1 层面会被放大
- **$BGT 赎回循环风险**：如果 $BERA 的内在价值超过了 $BGT 的持有收益，$BGT 持有者可能排队赎回（1:1 兑换 $BERA）并抛售。这取决于 Bera DeFi 生态的繁荣程度——激励市场越有竞争力，风险越低。
- **理论待验证**：多数假设未经实战检验，飞轮在熊市的持续性存疑
- **借鉴 Terra 原生稳定币**：$HONEY 的设计受 Terra 启发，UST 脱锚是前车之鉴

## 相关事件时间线
- 起源于 Bong Bears NFT（Olympus DAO 社区）
- 2023: $42M A 轮融资
- 2024 年 4 月: $1 亿 B 轮融资（Brevan Howard Digital + Framework Ventures 领投），估值 $4.2B
- 2024 年 5 月: 前 Polygon Labs DeFi 负责人 Jack Melnick 加入 Berachain 任同职位
- 2024 年 7 月: 与 Particle Network 共同推出联合测试网（Co-Testnet）上线
- 2024: 测试网"Artio"上线，社区热度飙升（468K Discord）
- 2025 年 2 月: 主网上线，Boyco 计划吸引超 30 亿美元存款，首周 TVL 超 19 亿美元，Kodiak、Ooga Booga、Dolomite、Infrared 等 dApp 迅速部署
- 2025 年 2 月 6 日: 主网上线，Boyco 预存款金库吸引约 $23 亿资金，上线至 Q1 末 DeFi TVL 迅速达 $52 亿，成为第 6 大 TVL 公链（来源：[[来源_2025-04_CoinGecko_Q1加密货币行业报告]]）
- 2025 年 3 月: PoL 机制正式上线，Berapalooza 2 活动 24h 内获 $50 万+ 贿赂承诺
- 到 2026: 主网运行中，Gas+稳定币+PoL 三件套运作正常，飞轮效应不如预期——流动性更多跟随应用而非代币经济学

## 我的判断
Berachain 是 L1 竞赛中"代币经济学创新"路线的最激进代表。将 Curve 贿赂从应用层搬到 L1 共识层是个天才想法，但也是一把双刃剑——Curve 的失败只影响一个 DEX，Berachain 的失败影响整条链。到 2026 年，主网已运行但飞轮效应不如预想的猛烈，说明"更好的代币经济学"不等于"更好的产品市场契合"。持续关注应用生态的实际增长而非代币排放数据。

## 相关实体
- [[monad]] — 同期新兴 L1，走并行执行技术路线 vs Berachain 走代币经济学路线
- [[curve]] — ve(3,3) 贿赂机制的前身，Berachain 将其从应用层搬到 L1 共识层
- [[solana]] — 高性能 L1 竞争对手
- [[aerodrome]] — Base 上 ve(3,3) DEX，同类贿赂机制在 L2 应用层的实践
- [[infrared-finance]] — Berachain 上领先的流动性质押协议（$20B+ TVL），通过 $iBGT/$iBERA 桥接 PoL 激励与 DeFi 可组合性

## 来源
- [[来源_2024-08_Berachain_POL_流动性证明_深潮TechFlow]]
- [[来源_2024_Berachain_技术社区与未来_CryptoSnap]]
- [[来源_2024-02_Berachain_灵魂十三问_PANews]] — 入门级基本面概览：赛道定位/商业模式/风险清单/合作伙伴，ChatGPT 辅助生成，信息密度低但覆盖维度广
- [[来源_2025-01_Q1发币项目盘点_Berachain_Monad_OpenSea_PANews]] — Q1 2025社区预期TGE但无官方确认；B轮$1亿估值$15亿；预存款活动与Ethena/StakeStone合作，截至1月8日累计存款$10亿
- [[来源_2024-08_十二大新公链_高估值速览_ChainCatcher]]
- [[来源_2025-03_Berachain_POL上线_Bera生态_深潮TechFlow]] — PoL 正式上线后的实战数据分析：排放量/贿赂金额/Infrared 桥接角色/通缩与博弈风险
- [[来源_2025-02_Dapp报告_用户活动降温_AI增长_PANews]] — DappRadar 2025年2月报告确认Berachain为增长最快DeFi链，TVL达$5.05B；流动性证明模型在市场普遍下跌中吸引用户
- [[来源_2025-02_Berachain_生态项目_主网上线_PANews]] — 主网上线首周生态项目全景：Kodiak、Ooga Booga、Dolomite、Infrared、Beradrome、Yeet 等 DeFi 项目数据，以及 bera.tv/Over/Under/Memeswap/Shogun/Honey Chat 等非 DeFi 应用
- [[来源_2025-02_空投市场_三大矛盾_深潮TechFlow]] — Berachain的NFT空投分配被引述为筹码集中可控盘的典型案例，分配比例不合理
- [[来源_2025-02_Yap-to-Earn_BERA空投_PANews]] — 用户视角的 Yap-to-Earn 实操指南，以"通过 Yapping 获得大量 BERA 空投"为案例，说明社交传播可以替代传统测试网活动
- [[来源_2025-03_稳定币_耕作机会_HFA]] — Berachain 原生 DEX 上 USDC.e/HONEY 池收益率数据：13.79% APR 以 BGT 形式发放；BGT 为不可转让的代币，可 1:1 兑换 BERA；farmers 可选择 farm-and-dump 或积累 BGT 博取 Berachain 生态增长
