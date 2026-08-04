---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [solana, wallet, defi, nft]
aliases: [Phantom Wallet]
---

# Phantom

## 基本信息
- 类型: protocol
- 定位: Solana/EVM 多链钱包
- 成立时间: 2021 年
- 核心功能: 自托管加密钱包，支持 Solana 和 EVM 链上资产管理、DeFi 交互、NFT 收藏、Swap 交易

## 核心业务/产品

Phantom 是 Solana 生态领先的自托管钱包，最初仅支持 Solana 网络，后扩展至 EVM 兼容链（以太坊、Polygon 等），成为多链钱包。核心产品包括：

- **资产管理**：支持 SOL、SPL Token、ERC-20、NFT 的收发与展示
- **内置 Swap**：钱包内置代币交换功能，曾作为 [[pengu]] 空投资格判定标准之一（2024 年前使用 Phantom 内置 Swap 的用户获得空投资格）
- **DApp 浏览器**：集成 Solana 和 EVM 生态 DApp 交互
- **Solana Blinks 支持**：作为首批三款原生支持 [[Blinks]] 的钱包之一（另两款为 [[Backpack]] 和 Solflare），用户可在 X 平台直接完成链上操作
- **交易模拟**：支持交易模拟功能，帮助用户识别钓鱼交易风险
- **Stripe 支付集成**：[[stripe]] 通过 Phantom 钱包重新整合加密支付并现场演示 Solana 交易（2024 年）
- **Jupiter 聚合路由**：Phantom 深度集成 [[jupiter]] 交易路由，大量 Solana 交易通过 Jupiter 在 Phantom 内部完成

### MEME 交易功能（2025 年 4 月）
Phantom 在 MEME 交易场景中的核心功能包括：
- **实时新币发现**：集成 Jito、Birdeye 等数据源，自动识别新部署的 MEME 合约
- **内置交易功能**：支持直接在钱包内 Swap Solana 链上的 MEME 币，执行快、滑点小
- **Bot 兼容性好**：大多数 Solana Sniper 工具可通过 Phantom 快速连接并授权交易
- **社区标记与地址备注**：支持对项目方地址或活跃钱包手动添加标签

劣势：在 Base、BSC 等其他生态表现一般，不适合多链打狗。Phantom 的最大优势在于 Solana 生态原生的 MEME 项目高适配度，打狗流程几乎都在钱包内完成。

来源：[[来源_2025-04_MEME打金_信息差_钱包对比_深潮TechFlow]]

## 关键数据

- **用户规模**：3M+ 活跃用户（保守估计），2023 Q4 / 2024 Q1 Memecoin 狂潮期间 Phantom 下载量创历史新高
- **交易路由量**：通过 [[jupiter]] 聚合路由处理的月交易量约 **$30 亿**，从中赚取超 **$150 万** 路由费
- **生态集成**：Solana Blinks 首批三款原生支持钱包之一；[[wormhole]] W 代币空投合作认领渠道之一（与 Jupiter 联合）
- **支付演示**：[[stripe]] 2024 年重新整合加密支付时选择 Phantom 作为演示钱包
- **空投覆盖面**：[[pengu]] 代币空投中，Phantom 钱包内置 Swap 用户被列为 OG Solana 用户空投资格之一

## 竞争优势 / 护城河

- **先发优势**：Solana 生态最早的主流自托管钱包，建立了强大的品牌认知和用户粘性
- **生态深度集成**：深度嵌入 Solana 核心生态（[[jupiter]] 聚合路由、[[Blinks]] 交互、[[stripe]] 支付），形成"钱包即入口"的分发网络效应 —— 大量 Solana 交易实为通过 Jupiter 路由在 Phantom 内部完成，用户无需离开钱包
- **多链战略**：从 Solana 专属钱包扩展到 EVM 多链支持，降低用户切换成本
- **钱包流量集中效应**：行业趋势显示流量向头部 CEX 和钱包集中，[[metamask]] 和 Phantom 成为钱包端的两极（2024-2025 年验证了 OP Research 2022 年的判断）
- **品牌信任**：作为 Solana 生态核心基础设施，获得生态内主要项目（Jupiter、Pudgy Penguins、Stripe 等）的合作背书

## 风险 / 争议

- **安全挑战**：Solana 生态增长吸引大量 Wallet Drainer 从 EVM 转入 Solana，Phantom 用户面临钓鱼攻击、Durable Nonce 签名攻击等风险。虽然 Phantom 支持交易模拟，但 Durable Nonce + 合约升级的组合攻击仍可绕过模拟检测
- **用户体验瓶颈**：尽管支持交易模拟等安全功能，用户仍需管理助记词/私钥，链上操作门槛高于 CEX。文章指出"只要能买到新一代'狗狗币'，人们暂时还愿意忍受纷繁的助记词和难用的 UI" —— 这种容忍度在市场降温时可能下降
- **竞争加剧**：面临 [[Backpack]]（同样原生支持 Blinks）、Solflare、[[metamask]]（Solana 支持扩展中）以及链抽象方案（如 [[particle-network]] 的智能钱包）的竞争
- **依赖 Solana 生态**：作为 Solana 原生钱包，其增长高度依赖 Solana 生态的整体发展。若 Memecoin 热潮退却或 Solana 生态地位被挑战，Phantom 用户增长可能承压

## 相关事件时间线
- 2021 年: Phantom 钱包上线，成为 Solana 生态最早的主流自托管钱包之一
- 2023 Q4 - 2024 Q1: Memecoin 狂潮期间 Phantom 下载量创历史新高
- 2024 年 7 月: Phantom 成为首批三款原生支持 Solana Blinks 的钱包之一
- 2024 年: [[stripe]] 通过 Phantom 重新整合加密支付并现场演示
- 2024 年 11 月: Phantom 被 0xWizard 推荐为 Solana Meme 交易的核心钱包工具
- 2025 年: Phantom 通过 Jupiter 路由处理月交易量约 $30 亿，赚取超 $150 万路由费
- 2024 年 12 月: PENGU 空投将 Phantom 内置 Swap 用户列为 OG 空投资格条件之一

## 相关实体
- [[solana]] — Phantom 的核心生态网络
- [[jupiter]] — Phantom 深度集成的 DEX 聚合路由，提供内置 Swap 功能
- [[metamask]] — 竞争对手，以太坊生态领先钱包，正在扩展 Solana 支持
- [[backpack]] — 竞争对手，同样原生支持 Solana Blinks
- [[stripe]] — 支付合作伙伴，通过 Phantom 演示加密支付集成
- [[wormhole]] — 跨链协议，W 代币空投合作认领伙伴
- [[pudgy-penguins]] — PENGU 空投中 Phantom 用户获得资格
- [[particle-network]] — 链抽象/智能钱包方案，与 Phantom 形成竞争

## 来源
- [[来源_2024-12_Solana_Q4状况_Messari]] — Stripe 通过 Phantom 演示 Solana 交易
- [[来源_2024-08_Particle_Network_链抽象_通用账户]] — Memecoin 狂潮中 Phantom 下载量创新高
- [[来源_2024-07_Solana_Blinks_Web3大规模采用_PANews]] — Phantom 为首批 Blinks 支持钱包
- [[来源_2025-08_Jupiter_Hyperliquid_聚合器战争_深潮TechFlow]] — Phantom 通过 Jupiter 处理 $30 亿交易量/赚取 $150 万+
- [[来源_2024_GoPlus_Solana防钓鱼指南_五种攻击手法]] — Phantom 交易模拟安全功能与 Solana 钓鱼风险
- [[来源_2022-11_OP_Research_Web3流量入口_钱包vsCEXvsDAPP]] — 钱包流量向 MetaMask/Phantom 集中趋势
- [[来源_2024-12_PENGU代币经济学_Solana发行_PudgyPenguins]] — Phantom 作为 PENGU 空投资格条件
- [[来源_2024-03_Wormhole_W代币空投_代币经济学_BlockBeats]] — Phantom 与 Jupiter 联合认领 W 代币
- [[来源_2024-11_链上入门指南_从二级到链上_0xWizard]] — Phantom 作为 Solana Meme 交易核心工具
- [[来源_2025-04_MEME打金_信息差_钱包对比_深潮TechFlow]] — Phantom 在 MEME 交易场景的功能详解：实时新币发现、内置交易、Bot兼容性、社区标记
