---
type: concept
created: 2026-06-28
updated: 2026-06-30
tags: [infrastructure, ux, cross-chain]
aliases: [链抽象, Chain Abstraction]
---

# 链抽象（Chain Abstraction）

## 一句话定义
让用户在使用 DApp 时不需要知道或关心底层是哪条链。"用户只需要用，不需要知道跑在什么链上"——这是 Web3 UX 的终极目标。

## 核心思路
- 统一账户余额（不管资产在哪个链上）
- 自动 Gas 管理和跨链路由
- 前端对链无感知

## 代表项目
- **Particle Network** — 链抽象基础设施，EVM 优先 Universal Account
- **Near Protocol** — 原生链抽象设计，去中心化 MPC Chain Signatures
- **Polygon AggLayer** — 聚合跨链桥优化以太坊生态内互操作性
- **Socket/Bungee** — 跨链聚合
- **Initia** — L1 原生链抽象方案，通过"L1 编排层+ L2 Minitias"架构实现统一用户体验：JIT Gas 抽象（用户可用任意代币支付 Gas）、L1 作为中央资产枢纽（ERC-20 ↔ CW-20 自动转换）、.init 链上用户名（类 ENS）。其"意见性堆栈"将链抽象从外部基础设施集成提升为协议层的原生能力。参见 [[initia]] [[来源_2025-02_Initia_德尔福_交织Rollup_StacyMuur]]

## 三种技术方案（ChainFeeds/Zhixiong Pan）
| 方案 | 代表 | 核心思路 | 优势 |
|------|------|---------|------|
| 签名网络 | NEAR Chain Signatures | MPC 网络实现跨链签名 | 去中心化，多链兼容 |
| 通用账户层 | Particle Network | EVM 优先 L1 + Universal Account | 用户迁移成本低 |
| 跨链桥聚合 | Polygon AggLayer | 聚合跨链桥，以太坊生态内优化 | 生态兼容性好 |

**作者判断**：三种方案殊途同归，边界逐渐模糊；胜负手在于"谁能先让用户感知不到链的存在"。

## 与跨链的区别
[[cross-chain]] 解决"怎么跨"，链抽象解决"不用跨"——用户根本不需要知道跨链这个概念。

## 链爆炸背景
- 模块化公链 + RaaS → 场景链激增：DePIN/AI/金融各自发链
- BTC L2 密集上线（Citrea, BOB, Bitlayer, Merlin）
- 用户痛点："已经不记得在哪些链和哪些协议中质押过什么资产了"

## 持久战框架（HelloLydia, Particle Network）
"链抽象无用论错误（多链已成定局），速胜论也错误（复杂系统工程）"——持久战。Particle Network 三层：L1(Particle Chain)+基础设施(Universal Account)+旗舰应用(UniversalX)。三段式竞争：需求→费率→商业模式。

## Thanefield 堆栈分层
Thanefield Research（2024年7月）将链抽象拆解为三层堆栈：
1. **账户抽象层**（Safe/ERC-4337/EIP-7702）— 消除私钥和 Gas 管理摩擦
2. **互操作性与意图层**（消息传递/基于意图的 Solver 网络/ERC-7683）— 统一跨链执行
3. **应用层** — 将基础设施整合为统一前端，价值捕获的最终战场

代表路径对比：Anoma（意图中心+隐私）、Polygon AggLayer（ZK 聚合）、NEAR（全栈 MPC+DA+意图+应用）。

## 思想渊源
链抽象的核心思想并非 2024 年才出现。2023 年 4 月，Bixin Ventures 在 LayerZero 投资分析中已明确表述："未来用户使用 Dapps 的时候，无须知道它们部署在哪条区块链，这类似于用户在使用 Web2 世界里的 Instagram、Tiktok、Google 时，没必要知道它们是托管在 Amazon Web Services，还是 Microsoft Azure。"这一类比后来成为链抽象叙事的标准论述。LayerZero 作为跨链消息传递底层，与链抽象上层体验是互补关系——LayerZero 提供"连接"，链抽象提供"隐藏"。

## 来源
- [[来源_2024-09_Web3_Mass_Adoption_Web2.5_深潮TechFlow]] — Clusters `用户名/链名` 全链域名服务是链抽象在地址管理层的重要落地：$0.01 ETH 注册费，一键解析 8 条公链地址，与 Universal Account 互补
- [[来源_2025-01_链抽象持久战_HelloLydia]]
- [[来源_2024_链抽象_互操作性2.0_链爆炸]]
- [[来源_2024-07_链抽象_Thanefield研报_深潮TechFlow]]
- [[来源_2024-08_Particle_Network_链抽象_通用账户]]
- [[来源_2025-01_Monad测试网_生态建设_参与策略_PANews]] — 链抽象在 Monad 生态的应用：Symphony（意图驱动跨链交易，前身 Cadence Protocol）和 EarnOS（链抽象广告平台，电子邮件登录+多设备无缝交互）
- [[来源_2024-09_Orderly_Network_流动性中央厨房_ChainCatcher]] — Orderly Network 是链抽象在交易场景的落地案例：用户在任何集成 DEX 上交易时，不需要感知底层是哪条链，所有链共享同一个订单簿和流动性池，"全链 DeFi 应用真正落地，用户在 DeFi 交易中不再受'链'所困"
- [[来源_2024-09_L2_Solana_Appchain_应用部署选择_Web3Caff]] — 将链抽象定位为模块化 Rollup 路线图成功的必要条件："随着新链的不断推出，碎片化问题只会加剧"，Xion/Okto/Particle Network/NEAR/Halliday/Aarc 等团队是决定模块化未来的关键
- [[来源_2023-04_LayerZero_全链野心_应用场景_BixinVentures]] — 链抽象核心思想的早期表述（2023.4）：用户不需要知道 Dapp 部署在哪条链，类比 Web2 用户不需要知道 Instagram 托管在 AWS 还是 Azure
- [[来源_2024-12_AI_Agent链化_CEX选币策略_PANews]] — 链抽象被纳入 AI Agent 链化五大基建之一，与 TEE/DA/Oracle/zkVM 共同构成 AI Agent 可信基础设施栈，为 Agent 跨链协作提供统一接口
- [[来源_2023-07_Rollups即服务_RaaS全景指南_BlockMagnates]] — 2023 年中即已将链抽象列为"百万链未来必须解决的真正用户痛点"之一，视其为 RaaS 大规模普及的前置条件
- [[来源_2022-12_胖应用_Fat_App_范式转移_BlockBeats]] — 超级应用作为"区块链封装器"实现区块空间同质化（大宗商品化），用户不知道执行轨迹——本质上是链抽象的早期理论框架
- [[来源_2025-01_以太坊路线图_Pectra升级_DevCon_PANews]] — Pectra 升级中 EIP-7702（EOA 转智能合约）为链抽象的账户层提供协议级支持；DevCon 将链抽象列为 Rollup 互操作性的关键方向之一，跨链意图（Cross-Chain Intents）作为排序器之外的高层互操作路径
- [[来源_2024-04_链抽象细分_六模块_主要参与者_SevenX]] — Rui (SevenX) 将链抽象拆解为六大功能模块（多链统一地址/签名聚合/状态同步/单一Gas/区块构建与中继/统一流动性），与 Thanefield 三层堆栈形成正交分析框架；点名 Particle Network/Light/Burnt/NEAR 为 2024 年特定链抽象统一前端方案的主要参与者
- [[来源_2025-03_链抽象_间接影响_Shoal]] — Alex Nardi (Shoal Research) 横跨用户/开发者/DeFi/游戏/VC 五个维度的链抽象间接影响分析，明确区分 Intents vs Chain Abstraction 概念差异，列举四大挑战（安全MEV/去中心化权衡/监管/经济可持续性）；⚠️ 赞助内容（Particle Network 赞助）
- [[来源_2025-03_加密营销_新用户增长_深潮TechFlow]] — 从用户体验角度论证链抽象的必要性：即便有新用户进入加密领域，也要面对成百上千条链和数百种钱包的选择，这种复杂性远超Web2体验，是链抽象需要解决的核心UX问题。
