---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [socialfi, social, base, ethereum]
---

# Farcaster

## 基本信息
- 类型：去中心化社交协议（开放社交底层技术架构）
- 定位：对标 Twitter 的 Web3 社交协议——"一个所有用户数据可自由获取的 Twitter"
- 生态链：以太坊 / Base（Base 核心开发者文化的基础设施）
- 核心人物：Vitalik 活跃使用；Jesse Pollak（Base 创始人）从 Farcaster 创始之初深度参与

## 核心业务/产品
### 协议层
Farcaster 是一个开放社交协议，核心特性：
- **数据完全开放**：任何开发者可自由获取所有用户的公开内容、点赞、评论、关注等社交交互数据
- **账户统一**：同一账户可在所有 Farcaster 生态客户端使用
- **无需代币即可使用**：代币/资产是可选的激励层，非使用前提

### 客户端生态
多个独立客户端共享同一社交数据底层：
- **Warpcast**：官方客户端（注：存在"旗舰客户端主导"问题，详见下方风险部分）
- **Takocast**：Tako Protocol 团队开发
- **Recaster**：独立开发者 0xHaole 开发
- 另有十几个侧重点不同的客户端（不同推荐算法、不同 UI、不同功能集成）

**旗舰客户端主导问题（2024-2025）**：Warpcast 作为官方客户端一直主导用户注意力，使第三方客户端难以竞争。2024 年中曾有一波 Farcaster 客户端建设热潮（如 Nook、Kiosk 等差异化界面），但很快停滞，多数团队暂停开发或转型。共同困境：已获取的流量最终流回 Warpcast。Supercast（最有前途的独立客户端之一）已被 Farcaster acquihire，团队并入 Warpcast 建设，引发社区对协议层与客户端层激励不一致的担忧。

### 金融层
- Moxie 金融层正在开发中，由 @betashop.eth 领导

## 代币化社区与 AI Agent 代币发射器生态

Farcaster 上自发形成了代币化社区的演进路径：

### 阶段一：社区代币实验
- **POINTS**：由 iammatthias 以玩笑形式推出的第一个 Farcaster 代币，Six 写了一篇关于它的著名帖子
- **HIGHER**：通过 Party 应用在上线前众筹流动性，截至 2024 年 12 月市值达到 3900 万美元
- **TNX100 (ham)**：流动性通过 NFT 机制实现
- **DEGEN**：流动性挖矿激励 + 外部投资，建立了强大的流动性池

### 阶段二：AI Bot 代币发射器
- **[[clanker]] (TokenBot)**：由 Dish 和 ProxyStudio 构建，通过标记 TokenBot 即可一键发币，已创建超 10,000 个代币，总交易量 10 亿美元，手续费收入超 700 万美元。面临狙击机器人抢跑问题
- **[[larrybot]]**：由 df 和 Stephancill 创建，69 分钟等价格窗口、3 ETH 最低流动性、Neynar 评分 > 0.9 门槛，利用 Party DAO 合约防止狙击
- **Onsenbot**：由 Hellno 开发，5% 费用（较 Clanker 更竞争力），支持创建者初始分配（默认 3%）
- **Heyterminal**：由 Carlos 开发，4% 创作者分配 + 50% LP 费用，通过自身 DEX 互动
- **[[launcher]]**：由 Kompreni 构建，最长期主义设计：固定价格池防狙击、两年 LP 激励、汗水股权、90% 费用返还持有者、创始人代币一年锁仓

这一生态的核心矛盾：激励不对称——快速奖励不良行为（狙击/拉高出货），缓慢奖励良好行为，是所有代币发射器共有的未解问题。

## 核心创新：开放社交数据协议
与 Web2 社交平台的根本区别：
- Web2：每个平台是数据孤岛——独立的账户体系、数据服务、不开放 API（Twitter API 成本高昂）
- Farcaster：开放协议——所有用户公开数据可被任何开发者自由获取和利用

这带来**颠覆性的应用开发逻辑**：
- 开发者可以基于已有社交数据直接开发新客户端，无需从零做起"内容创作者增长"
- 理论上可以出现各种垂直客户端（如"只推荐某类内容的客户端"），每个有不同推荐算法和交互体验
- 甚至可以基于社交数据做电商、服务推荐等非社交应用

类比：如果 Twitter 底层是 Farcaster 式开放协议，外部开发者可以直接筛选 Twitter 已有内容数据做任何应用

## 关键数据
- 2023 年宣布 **$10 亿**估值融资
- Jesse Pollak 估计 Farcaster 比一年前大 **10 倍**、相关性强 10 倍，需再增长 10 倍才能进入复合超高速增长（2024 年 10 月）
- 已知客户端：3 个以上独立客户端 + 十几个侧重点不同的客户端
- DAU 仍在数万级别（2025年中），远低于 Web2 社交平台以亿计的用户规模
- 用户群集中在 EVM/Crypto 原生圈层，尚未突破主流市场
- **Snapchain（Farcaster专用的Layer1区块链）**：专为解决Farcaster扩展问题构建，采用分片技术和账户级隔离。主网启动时9000+ TPS，可承载200万DAU（当前DAU约5万）；用户每年支付2-3美元获得每小时500笔交易和约1万笔存储限制；旧数据可删除以释放存储空间。创世区块已激活，主网计划2025年4月15日上线。Merkle Manufactory（Farcaster开发公司）2024年5月完成1.5亿美元融资，Paradigm领投，a16z crypto、Haun Ventures、USV、Variant、Standard Crypto参投

## 相关实体
- [[clanker]] — Base 生态 AI Agent，与 Farcaster 集成
- [[towns]] — 竞品/对比：Towns 是链上群聊协议，Warpcast/Farcaster 是开放社交协议
- [[ai16z]] — Eliza 框架集成 Farcaster

## 相关概念
- [[socialfi]] — Farcaster 是 Web3 社交的核心协议之一
- [[payfi]] — Moxie 金融层可能在 Farcaster 生态内实现链上支付/金融功能

## 我的判断
Farcaster 是 Web3 社交赛道最接近"协议层基础设施"定位的项目。它的价值不在于代币经济（Vitalik 活跃使用也不是为了赚钱），而在于**数据开放协议对应用开发范式的颠覆**——类似 HTTP 对互联网的意义，虽然当时没人能预测基于 HTTP 会诞生 Google/Facebook/Amazon。核心风险是：开放数据获取在大规模采用时必然面临 GDPR 等隐私法规挑战，以及用户是否真正在意"数据所有权"还是更在意"哪个平台好用"。

## Base App 集成（2025年7月）
2025年7月18日，Base App（原Coinbase Wallet）正式集成Farcaster协议作为核心社交功能，这是Farcaster主流采用的关键里程碑：
- Base App用户可直接在应用内发帖、分享内容、查看链上动态（如NFT购买或代币转账）
- 支持Farcaster Mini Apps，允许用户直接运行轻量级Web3应用（游戏、DeFi工具）
- 用户可创建个人主页展示链上活动，并通过内置聊天工具与社区互动
- 这一集成将Farcaster从独立的社交客户端用户群扩展至Coinbase/Base的数百万潜在用户

详见 [[来源_2025-07_Coinbase_Wallet_Base_App_Web3超级应用_深潮TechFlow]]

## 来源
- [[来源_2024-09_Web3_Mass_Adoption_Web2.5_深潮TechFlow]]
- [[来源_2024-10_Base创始人Jesse答社区100问]]
- [[来源_2024-11_Crypto_x_AI_Agents_互联网新范式]]
- [[来源_2024-12_Farcaster_AI_Agent代币发射器_BlockBeats]]
- [[来源_2025-03_新公链_稳定币_顶级项目_PANews]] — Farcaster 代币化社区三阶段演进 + 五大 AI Bot 代币发射器完整图谱
- [[来源_2024-09_持续盈利项目_代币炒作_商业模式_深潮TechFlow]] — Farcaster的收入模式：用户支付账户永久存储费用（而非依赖代币投机），是加密社交领域最大的平台；受益于meme币社区和degen投资者的支持
- [[来源_2025-06_Web3社交图谱_投资论文_1kxnetwork]] — 1kx论文中关于Farcaster旗舰客户端主导问题（Warpcast）、Supercast acquihire、第三方客户端停滞的详细分析
- [[来源_2025-04_Web3叙事退潮_明星项目_深潮TechFlow]] — 定义 Farcaster 为"静默复利"的典范：DAU 稳定在 2-5 万，无空投激励，依靠真实使用量缓慢积累信任；提出"不追求病毒传播"的反脆弱模式
- [[来源_2025-07_Coinbase_Wallet_Base_App_Web3超级应用_深潮TechFlow]] — Base App 集成 Farcaster 的详细功能描述：发帖/分享/链上动态/Mini Apps/个人主页/内置聊天
