---
type: entity
entity_type: protocol
created: 2026-06-29
updated: 2026-07-02
tags: [identity, did, data-storage, infrastructure, ipfs]
---

# Ceramic

## 基本信息
- 类型：去中心化数据变更和可组合性协议
- 赛道：Web3 身份基础设施 / 数据层
- 成立时间：未明确（2022 年已活跃）
- 融资：2022年2月 A 轮 $3000 万（Multicoin Capital + USV 领投），种子轮 $250 万，共 $3250 万
- 技术基础：基于 IPFS 或 Arweave 等持久性存储网络，将不可变文件转化为动态数据结构（"数据流"）

## 核心业务/产品
- **数据流（Streams）**：Ceramic 上的可变账本。用户更新资料时，协议将更新验证为流，转化为新状态，同时保持对以前状态变化的跟踪。每个更新由 DID 验证
- **ComposeDB**：去中心化图形数据库，允许应用开发者使用 GraphQL 发现、创建和重用可组合的数据模型。图中节点是账户（DID）或文件（数据流），边代表节点间关系
- **模型系统**：模型是 Ceramic 流，存储文档数据结构、验证规则、关系和发现信息的元数据。开发者可创建、组合和重新混合模型形成数据组合，作为应用数据库

## 关键数据
- **总融资**：$3,250 万（2022年2月 A 轮 $3,000 万由 Multicoin Capital + Union Square Ventures 领投，种子轮 $250 万）
- **核心团队**：开发方为 3Box Labs（前身为 3Box 团队，专注去中心化身份和数据基础设施）
- **生态集成**：被 [[cyberconnect]] 用于社交图谱数据存储；被 Orbis 用作社交应用数据层；与 [[lit-protocol]] 组合实现 MPC 访问控制
- **行业定位**：在 2023 年底 DePIN 赛道全景中，Ceramic 被归类为"数字资源网络→数据库"子赛道的 7 个代表性项目之一（与 Tableland、WeaveDB、Polybase 等同列）
- **W3C 标准化**：数据模型系统旨在为去中心化应用提供类似 ERC-20/ERC-721 的数据标准层，推动跨应用数据互操作性

### 已验证应用（截至 2021 年底）
- **IDX 跨链身份协议**：作为 Ceramic 的关键工具，提供了统一存储库，所有应用可在其中注册和发现与用户 DID 关联的数据源——可被视为"去中心化用户表"
- **[[Boardroom]]**：DAO 治理管理平台，使用 Ceramic 平台存储提案评论
- **[[rabbithole]]**：通过 Ceramic 网络将多个 Web2 和 Web3 账户链接到统一的跨链 DID，实现用户声誉跨应用移植
- **ArcX**：去中心化应用，通过发行"DeFi 护照"提供链上信用评分和身份

## 竞争优势 / 护城河
- 解决核心痛点：通用区块链和 IPFS 保证不变性，但大多数应用需要不断更新数据——Ceramic 填补了这一空白
- 数据模型市场：策展市场为最有用的数据模型（社交图、博客文章等）提供信号，激励公共数据集产生更好的分析
- 与 web3 身份生态深度集成：DID 验证更新，与 Lit Protocol、Kepler 等项目组合使用

## 风险 / 争议
- 数据模型质量和社区参与度的成熟需要时间，需超越 DAO 和加密用例
- 竞争：Tableland 等替代方案采用不同技术路径（NFT 表+SQL）
- 采用瓶颈：去中心化身份和应用层整体采用滞后于基础设施就绪度，Ceramic 的生态增长受限于 SocialFi 等下游赛道的用户增长缓慢

## 相关事件时间线
- 2021-2022: 3Box Labs 完成种子轮 $250 万，随后 2022年2月 A 轮 $3,000 万
- 2022: ComposeDB 发布，提供去中心化图形数据库和 GraphQL 查询能力
- 2022-2023: 与 CyberConnect 深度集成，成为其社交图谱的底层数据存储方案
- 2023-12: PANews DePIN 全景图将 Ceramic 归类为数字资源网络→数据库赛道代表性项目

## 我的判断
Ceramic 定位精准地填补了 Web3 基础设施的关键空白：在 IPFS/Arweave 等不可变存储之上提供可变的、由 DID 验证的数据层。它解决了"区块链和 IPFS 保证不变性，但绝大多数应用需要不断更新数据"这一核心矛盾。ComposeDB 和模型系统的设计理念（类似 ERC 标准化的数据模型市场）具有前瞻性，是 SocialFi 和去中心化身份栈不可或缺的中间件。

但风险在于：它属于"基础设施中的基础设施"——价值捕获高度依赖下游应用层的采用。SocialFi 赛道在 2022-2026 年间经历了多轮泡沫和冷却，Ceramic 的生态增长始终受限于终端应用的 mass adoption 进展。作为数据中间件，它缺乏直接面向用户的价值捕获机制，长期价值更依赖生态网络效应而非自身变现能力。

值得继续追踪：ComposeDB 的开发者采用率、与 AI Agent 数据的结合可能性（Agent 需要可证明的可变状态，Ceramic 恰好提供）、以及是否有 SocialFi/DePIN 头部项目将其作为标准数据层。

## 相关实体
- [[lit-protocol]] — 组合使用：Ceramic 存储数据 + Lit 加密；Lit PKPs 可让应用"拥有"Ceramic 流并授权 Lit Actions 在满足条件下签署更新
- [[cyberconnect]] — 下游集成：使用 Ceramic 可变数据流作为社交图谱的底层数据存储
- [[orbis]] — 下游应用：基于 Ceramic 构建的 Web3 社交网络应用
- [[kepler]] — 组合使用：Kepler 可使用 Ceramic 文档作为信标路由到私人存储区
- [[tableland]] — 竞品/替代方案，NFT 表+SQL 方式，同属去中心化数据赛道
- [[ipfs]] / [[arweave]] — 底层依赖：Ceramic 在 IPFS/Arweave 持久存储之上构建可变数据流
- [[decentralized-identity]] — Ceramic 是去中心化身份堆栈的"数据变更和可组合性"层
- [[socialfi]] — SocialFi 基础设施层的重要组件，为去中心化社交应用提供动态数据存储

## 来源
- [[来源_2022-11_抢占SocialFi先机_Web3社交_资本布局_PANews]] — CeramicNetwork 在 SocialFi 中的具体应用场景（CyberConnect 使用 Ceramic 存储社交图谱）和完整融资数据（共 $3250 万）
- [[来源_2022-12_Web3身份堆栈_去中心化身份_DID_Web3Caff]] — Ceramic 作为数据变更和可组合性层的详细机制，七层 Web3 身份堆栈中的定位
- [[来源_2023-12_DePIN赛道全景_一图尽览_PANews]] — DePIN 赛道全景图中 Ceramic 被归类为数字资源网络→数据库赛道，与 Tableland、WeaveDB 等并列 7 个数据库项目之一
- [[来源_2021-11_去中心化身份_DID_通行证_AmberGroup]] — Ceramic 的数据流（Streams）机制描述、IDX 跨链身份协议解析、Boardroom/Rabbithole/ArcX 等早期应用案例
- [[来源_2022-07_Web3_DAO_基础设施_控制权]] — 从"数据自拥有"视角阐述 Ceramic 价值：通过 DID 和 Stream 数据流机制打破 Web2 数据孤岛，实现跨 DAPP 数据互通和个性化组合；用户不再需要输入账号密码，不同 DAPP 数据自由互通
