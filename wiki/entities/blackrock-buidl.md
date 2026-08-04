---
type: entity
entity_type: project
created: 2026-06-28
updated: 2026-06-30
tags: [rwa, tokenized-fund, trad-fi, blackrock]
---

# 贝莱德 BUIDL 基金

## 基本信息
- 全称：BlackRock USD Institutional Digital Liquidity Fund
- 发行方：贝莱德（BlackRock），全球最大资管公司
- 推出时间：2024 年 3 月
- 产品类型：代币化货币市场基金（MMF），受监管
- AUM：~$29 亿（2025 年中），全球最大代币化国债基金
- 市场份额：代币化国债市场 ~34%

## 核心业务

BUIDL 是一款在公共区块链上发行的受监管货币市场基金。底层资产 100% 为现金、美国国债和回购协议。每个 BUIDL 代币 = $1.00 NAV，每日计息，收益以新 BUIDL 代币形式按月空投。

**铁三角架构**：
- 🏦 贝莱德 — 资产管理人，负责投资策略
- 🔐 Securitize — 代币化平台 + 转让代理 + KYC/AML 合规网关
- 🏛️ BNY Mellon — 链下资产托管 + 基金行政管理人

## 关键数据

**AUM 增长**：
| 时间 | AUM |
|------|-----|
| 2024.3（推出）| $2.45 亿 |
| 2024.7 | ~$5 亿 |
| 2025.2 | ~$6.5 亿（年初供应量，2月底轻微下降至$6.25亿后回升） |
| 2025.3 | ~$10 亿 |
| 2025 年中 | ~$29 亿（其中2025年5月增涨2.1亿美元） |

**链上分布**：约 93% 集中于以太坊主网（2025 年中数据）。多链支持（2024.11 上线）后资产逐渐外流，2025 年 2 月超过 26% 分布在 Arbitrum、Optimism、Polygon、Aptos、Avalanche。

**多链部署**：Ethereum（首发，2024.3）→ Solana（2025.3）、Avalanche、Polygon、Arbitrum、Optimism、Aptos
**Solana 上数据**：市值 $2,523 万，3 名持有者（2025.7）
**跨链协议**：Wormhole
**主合约**：0x7712c34205737192402172409a8f7ccef8aa2aec

## 关键创新：Circle USDC 即时赎回

BUIDL 持有者可通过 Circle 的专用智能合约（0x31d...a53）将 BUIDL 1:1 即时兑换为 USDC。这个机制解决了传统 MMF 的 T+2 结算与 DeFi 7×24 即时流动性需求之间的根本矛盾。

**这是 BUIDL 能被 DeFi 协议大规模采用的最关键功能。** 没有这个通道，BUIDL 只是一个小众产品。

### DeFi 可组合性标志：Morpho Blue 集成
2024年中，BlackRock BUIDL首次作为收益型抵押选项加入Morpho Blue，标志着传统资产管理产品首次在DeFi中实现可组合性。a16z将此事件视为RWA从"持有生息"到"DeFi乐高"的关键跃迁。

**收益/分红数据**：
每月分红持续创新高：2025年3月达417万美元，至5月已飙升至790万美元。按月环比增速在2025年3月呈爆发式跃升，但5月增速有所放缓（月环比8.38%）。

### "包装代币"定位
a16z明确将BUIDL归类为"包装代币"（wrapped token）——它将传统货币市场基金的股份代币化，ERC-20形式的BUIDL代币用于链上流通，但其底层基金仍作为受美国证券法监管的链下实体运营。所有权仅限于经过白名单认证的合格机构投资者，铸造和赎回由Securitize和BNY Mellon托管机构管理。

## 主要采用者（B2B 驱动）

- **Ondo Finance**：将 OUSG 背后大量资产转移到 BUIDL
- **[[ethena]]**：USDtb 储备大量配置 BUIDL，推动 AUM 突破 $10 亿
- **Frax Finance**：frxUSD 稳定币由 BUIDL 持有资产支持

BUIDL 的核心客户不是传统投资者，而是需要"稳定、合规、生息抵押品"的 DeFi 协议。

## 竞争优势 / 护城河
1. **贝莱德品牌**：全球最大资管公司背书，机构信任无与伦比
2. **先发优势**：首个主流资管公司的代币化基金，已建立市场份额和生态网络
3. **Circle USDC 通道**：独特的流动性优势，竞争对手难以复制
4. **多链布局**：覆盖主流 L1/L2，确保跨生态系统的可及性
5. **合规标杆**：为后来者设定了监管标准

## 监管与法律结构
- 基金由BlackRock在英属维尔京群岛（BVI）设立的SPV（特殊目的载体）运营，SPV作为独立法律实体隔离基金资产负债
- 根据美国证券法申请Reg D豁免，仅向合格投资者开放
- Securitize LLC负责代币化过程，包括将基金份额转换为链上代币
- 链上收益由智能合约自动生成
- 底层资产：短期美国国债 + 隔夜回购协议，确保每代币维持$1稳定价值

## 风险 / 争议

1. **许可制围墙**：白名单机制使 BUIDL 无法与 Aave/Uniswap 等无许可协议直接交互。任何集成都需要受信任中介的"封装"
2. **信任模型**：投资者必须信任贝莱德 → Securitize → BNY Mellon → Circle → Wormhole 一长串中介链条，与 Crypto 的去信任精神相悖
3. **哲学分歧**：加密社区是否愿意将去中心化理想让位于合规和收益？这是 BUIDL 最深层的长期风险
4. **竞争对手**：Franklin Templeton BENJI、Hashnote USYC、Ondo USDY 等正在追赶
5. **监管演变**：SEC 未来政策可能影响 BUIDL 的现有结构

## 我的判断

BUIDL 是目前 RWA 赛道最重要的产品。它的成功证明了一个关键假设：DeFi 协议是 RWA 最大的需求方，不是传统金融机构。贝莱德通过 BUIDL 将自己嵌入了 DeFi 金融结构的核心——成为链上经济的抵押品基础设施层。

长期看，BUIDL 开创的「许可制 DeFi」会不会胜出，取决于加密社区在「合规收益」和「去中心化理想」之间的选择。这不是技术问题，是意识形态问题。

## 相关实体
- [[circle]] — USDC 赎回通道提供方，BUIDL 流动性的关键引擎
- [[ethena]] — USDtb 储备配置 BUIDL
- [[securitize]] — 核心技术与合规伙伴（待创建）
- Franklin Templeton — 主要竞争对手 BENJI（待创建）

## 来源
- [[来源_2024-07_RWA前世今生_真实资产崛起_PANews]] — BVI SPV结构/Reg D豁免/底层资产构成（短期国债+隔夜回购）/Securitize代币化角色
- [[来源_2025-06_Solana_RWA_全面概述_Helius]] — BUIDL 扩展至 Solana 的具体数据：已发行约 $2000 万，Wormhole NTT 跨链，年管理费 0.20%-0.50%，每日分红
- [[来源_2025-07-13_贝莱德BUIDL基金深度拆解]]
- [[来源_2025-07_Messari_Solana_RWA_赛道]]
- [[来源_2025-04_贝莱德_发家史_11.5万亿_ChainCatcher]] — 提供贝莱德整体企业史背景，BUIDL基金是贝莱德大版图中的最新一环 — Solana 上 BUIDL 数据（$2,523 万/3 持有者）
- [[来源_2024-09_RWA六大核心资产_OKX_Ventures_深潮TechFlow]] — 2024年8月数据：BUIDL $510M领跑代币化国债市场/季度增长74%/Ondo OUSG大量底层配置BUIDL形成产业链"贝莱德管资产→Ondo分销→DeFi消费"
- [[来源_2025-08_a16z_银行_资管_Fintech_区块链转型_深潮TechFlow]] — a16z将BUIDL归类为"包装代币"（wrapped token）并详细解释其链下资产链上映射的运作模式；首次作为收益型抵押品加入Morpho Blue的行业标志意义
- [[来源_2025-06_以太坊RWA_监管变局_BUIDL_Etherealize_BlockBeats]] — 补充BUIDL最新月度数据（2025年5月+2.1亿/8.38%环比/790万分红）、93%集中于以太坊主网、USDtb 90%储备配置BUIDL的协同效应
- [[来源_2025-02_RWA_链上资产_BUIDL_OurNetwork]] — 补充 2025 年 2 月数据：供应量 $6.5 亿、26%+ 已从以太坊流向 Arbitrum/Optimism/Polygon/Aptos/Avalanche、USDtb $8900 万供应（其中 $1870 万由 BUIDL 支持）
