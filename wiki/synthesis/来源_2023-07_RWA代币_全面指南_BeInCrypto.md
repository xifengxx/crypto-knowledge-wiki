---
type: source
source_type: article
url: https://beincrypto.com/learn/real-world-asset-tokens/
date: 2023-07
ingested: 2026-06-29
---

# RWA 代币全面入门指南 (BeInCrypto)

## 阅读证据
- 总行数: 401
- Q1 (前25%): Simon Taylor 被引述称"Tokenization is the largest transformation of finance and markets in over 50 years"；文章以 $1000 万纽约房产拆分为 100 万枚代币为例说明碎片化所有权，最低 $10 即可参与
- Q3 (中后25%): BCG 预测非流动性 RWA 代币化将在 2030 年成为 $16 万亿市场机会；MakerDAO 于 2021 年与 New Silver 合作铸造房地产支持的 DROP 代币作为铸造 DAI 的抵押品
- Q4 (最后25%): 代币化美国国债在 2023 年突破 $6 亿规模，Maple Finance 向部分贷方承诺 APY 高达 8.31%；Ondo Finance 的 OUSG 和 OHYG 基金代币经 AML/KYC 后可跨 DeFi 协议使用
- 图片: 约 15 张图片（EY/Chainlink/DuneAnalytics/Twitter 来源），均为网页抓取时嵌入的相对路径或外部链接，无法本地访问

## 核心要点
- RWA 代币将实物（房地产、黄金、艺术品）和无形资产（碳信用、债券、股权）的价值转化为链上代币，实现碎片化所有权和 7×24 全球交易
- 代币化流程五步：资产选择 → 法律框架确立 → 专业估值 → 智能合约编写与审计 → 代币销售；不同资产类型适用不同代币标准（ERC-20 用于可替代资产如黄金，ERC-721 用于唯一资产如艺术品，ERC-1155 可混合两者，ERC-3643 用于证券代币内嵌合规）
- 三大工作阶段：链下资产合法化（法律/合规确认）→ 数字-物理整合（通过预言机将链下信息桥接到链上，嵌入代币的金融和法律逻辑）→ 代币化资产市场管理（上架、KYC/AML 合规、供需动态）
- RWA 代币对 DeFi 的核心价值在于抵押品多样化——参与者可使用债务工具、房地产甚至商品作为 DeFi 活动抵押品，降低对波动性加密资产的依赖
- 主要 RWA 平台包括 MakerDAO（RWA 占其资产基础和收入的大半）、Centrifuge（tranching 机制允许选择风险/收益级别）、Goldfinch（审计员链验证企业信用）、Maple Finance（无抵押借贷，池代表制）、Ondo Finance（基金代币模式）
- 代币化应用场景远超金融资产：供应链融资、债务代币化、知识产权碎片化、保险代币化、基础设施融资、风投组合代币化、NFT 艺术家版税流

## 关键数据
- $10 最低投资额：以 100 万枚代币供应量拆分 $1000 万房地产的碎片化示例
- BCG 预测 2030 年 RWA 代币化市场 $16 万亿（非流动性资产）
- 代币化美国国债在 2023 年突破 $6 亿规模
- Maple Finance 向部分贷方承诺 APY 最高 8.31%
- Polymath ST-20 标准和 Swarm MAP 协议是两种将合规要求编码进代币本身的早期方案
- ERC-3643（证券）、ERC-2222（分红资产）、ERC-4626（收益资产）、ERC-1400（安全代币）等新标准扩展了代币化的功能维度

## 与已有知识的关系
- 补充 [[rwa]] — 提供 RWA 概念的入门级全景框架（定义/流程/类型/平台/趋势），与花旗、Mint Ventures 等深度研究报告形成"入门-进阶"互补
- 补充 [[makerdao]] — 确认 MakerDAO 为早期 RWA 采用者，RWA 占其资产基础大半且贡献过半收入
- 补充 [[centrifuge]] — 详述其 tranching 机制（投资者可选择风险/收益级别）及 DROP/TIN 代币结构
- 补充 [[goldfinch]] — 描述其审计员链机制替代传统信用评估
- 补充 [[ondo-finance]] — 确认其基金代币（OUSG/USDY/OHYG）经 AML/KYC 后可在 DeFi 协议中使用
- 补充 [[defi]] — RWA 为 DeFi 提供"生息抵押品"维度，使 DeFi 与外部市场兼容

## 值得记住的引用
> "Tokenization is the largest transformation of finance and markets in over 50 years." — Simon Taylor, entrepreneur

> "NFTs are just one sign of what's to come next in tokenization." — David Schwartz, CTO at Ripple

> "Tokenization bridges real-world assets and options to store, trade, and transfer them right into the digital space. The process converts the value associated with the tangible or intangible entity into a token."

## 我的笔记
这是一篇典型的加密媒体教育性长文，覆盖面广但分析浅。它对 RWA 概念初学者友好，用 Mona Lisa 和纽约房地产的例子将碎片化所有权讲得直观。但其价值更多在于提供了一张 RWA 生态的"名词地图"（平台列表、代币标准、场景分类），而非深度洞察。值得注意的是，文章发布于 2023 年中，当时代币化国债刚突破 $6 亿——到 2026 年这个数字已增长到 $44 亿以上（BUIDL 单独 $29 亿），说明当时的"趋势"确实兑现了。文章提及的 ERC-3643 等标准在后续年份成为行业基础设施，Polymath、Swarm 等早期玩家却已被主流遗忘——合规代币化的赢家未必是技术先行者。
