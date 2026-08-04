---
type: concept
created: 2026-06-28
updated: 2026-07-02
tags: [cross-chain, interoperability, bridge]
aliases: [跨链, 互操作性, 全链]
---

# 跨链互操作性

## 一句话定义
连接不同区块链网络，实现资产和数据的跨链流转。解决区块链"孤岛"问题——每条链有独立的状态、资产和用户，跨链协议让它们能互相通信。

## 主要方案

| 方案 | 代表项目 | 原理 |
|------|---------|------|
| **跨链消息传递** | LayerZero, Wormhole, Chainlink CCIP | 通用消息协议 |
| **跨链桥** | Across, Stargate | 资产跨链转移 |
| **通用覆盖网络** | Axelar | 全栈去中心化传输层，使用无需许可 PoS 验证器集，Cosmos SDK 构建，与所有链（EVM/Cosmos/BTC/PoW）互操作 |
| **BRC-21/BRC-42** | Interlay | BRC-20 的跨链扩展，通过锁定起始链资产生成比特币网络上的 BRC-20 版本代币（BRC-21：外部链→BTC，BRC-42：BTC→外部链），依托比特币中继器（BTC-Relay）实现去中心化验证 |
| **Cosmos IBC** | Cosmos 生态 | 链间通信标准 |
| **Polkadot XCM** | Polkadot 生态 | 跨共识消息格式 |

## 关键项目
- **LayerZero** — 全链互操作性协议，连接 50+ 链
- **Wormhole** — 被 [[blackrock-buidl]] 用于多链部署
- **Chainlink CCIP** — 预言机龙头的跨链方案，共享Price Feeds基础设施无额外信任假设，独立风控网络
- **Initia** — L1 原生跨 Rollup 互操作方案：通过"L1 作为中央资产枢纽"实现跨 Rollup 的"One Token, Many Chains"——从 EVM Rollup 发送 ETH 到 Cosmos 链会自动转换代币标准（ERC-20 ↔ CW-20），无需第三方桥。结合 IBC 和 LayerZero 提供统一跨链通信层。参见 [[initia]] [[来源_2025-02_Initia_德尔福_交织Rollup_StacyMuur]]

## 为什么重要
1. 多链是确定性趋势（Ethereum + Solana + L2 + ...）
2. RWA 跨链（BUIDL 用 Wormhole 部署到 Solana/Aptos 等）
3. 钱包作为"公链衔接器"——多链竞争格局分割了 DeFi 产品的流动性和可组合性，钱包在多链之间架起桥梁，成为用户跨链交互的统一入口（参见 [[来源_2022-09_加密钱包_千亿平台_7OClockCapital]]）
3. 稳定币跨链转移是支付场景的基础设施

## 相关概念
- [[layer2]] — L2 的跨 L2 互操作是下一个挑战
- [[l1-competition]] — 多链格局下，跨链基础设施的价值随链数量增长
- [[chain-abstraction]] — 链抽象是跨链的下一步：用户不需要感知跨链
- [[rwa]] — 多链 RWA 依赖跨链基础设施

## Lock and Mint 跨链桥模式（花旗 2023）

花旗明确阐述了跨链桥最常用的 Lock and Mint 模式：用户在 A 链发送代币到跨链桥智能合约并锁定 → 跨链桥在 B 链上部署智能合约铸造等量代币（通常为 A 链代币的 Wrapped 版本）→ B 链代币发送到用户地址。这一步在传统金融市场应用区块链的背景下尤其重要，因为信息和数据需要在不同机构或区块链生态系统之间传输。花旗明确断言"未来区块链的本质是多链的"。

## 跨链DeFi：从多链孤岛到统一流动性

跨链DeFi 是相对于多链DeFi的范式升级。多链模式下，同一应用在各链独立部署，流动性被割裂在不同网络的池子中，导致交易滑点增大、资金效率降低。跨链DeFi 通过跨链智能合约（在不同链上部署多个智能合约，合约之间可以通信）统一多链体验。

四大跨链DeFi应用类型：
| 类型 | 机制 | 关键价值 |
|------|------|----------|
| 跨链借贷 | 在安全链上抵押，在高吞吐链上借入并产生收益 | 统一各市场收益率，降低低流动性市场贷款利率 |
| 跨链DEX | 跨网络搜寻流动性，原生跨链兑换 | 无需包装资产或CEX，盘活所有链上流动性 |
| 跨链质押 | 在一条链上质押资产，另一条链上获得收益 | 拓宽质押机制覆盖范围，吸引更多资金 |
| 跨链收益聚合器 | 将用户资金存入各链DeFi协议 | 用户无需手动跨链，大幅提升 yield farming 效率和UX |

## ERC-7281 / xERC-20：主权跨链代币标准

ERC-7281（也称 xERC-20）由 2077 Research 推动的以太坊改进提案，是继 OFT、ERC-7683、ERC-7802 之后的又一重要跨链代币标准。其设计思路是"发行方控制的多桥铸造模型"：

- **运作机制**：代币发行方部署符合 IXERC20 接口的代币合约，将多个跨链桥提供商加入白名单，并为每个桥设置独立的 `mintingLimit`（铸造限额）和 `burningLimit`（销毁限额），以 `ratePerSecond` 速度每秒恢复
- **Lockbox 合约**：可选模块，向后兼容缺乏铸造/销毁接口的存量 ERC-20 代币。原生 Lockbox（如 ETH）和非原生 Lockbox（如 USDC/DAI）两种类型
- **四大目标**：可互换性（统一多 rollup 代币标准）、安全性（多桥风险隔离）、零流动性冷启动、发行方主权控制
- **风险权衡**：消除了路径依赖（不再有 opETH vs arbETH 问题），但 DAO 治理负担加重、Lockbox 成为集中攻击目标、与最大程度去中心化的协议不兼容
- **采用情况**：Beefy（mooBIFI 代币）已采用；Hyperlane、Omni、Sygma、Router Protocol、Everclear 已承诺支持；Circle 对 xERC-20 表示兴趣

### 跨链代币标准对比

| 标准 | 核心思路 | 信任假设 | 治理负担 |
|------|---------|---------|---------|
| **OFT (LayerZero)** | 全链统一代币合约 | 信任 LayerZero 安全层 | 低 |
| **ERC-7683** | 跨链意图统一框架 | 信任 Solver 网络 | 低 |
| **ERC-7802 (SuperchainERC20)** | OP Stack 统一资产标准 | 信任超级链生态 | 中 |
| **ERC-7281 (xERC-20)** | 多桥白名单+动态限额 | 信任发行方+获批桥 | 高（需持续 DAO 治理） |

## OFT 与 ONFT：全链代币标准
LayerZero 的 OFT（Omnichain Fungible Token）和 ONFT（Omnichain Non-Fungible Token）是 Lock-Mint 包装资产模式的替代方案：
- **OFT**：代币在所有支持链上原生可替代，用户持有的代币在 Arbitrum 和 Avalanche 上是同一种资产，避免流动性和可组合性碎片化。代表案例：Trader Joe JOE、Pendle vePENDLE
- **USDT0**（Tether的全链稳定币，2024年推出）是基于 OFT 标准的最大规模应用——将传统 USDT 锁定在以太坊金库中，在目标链铸造等量 USDT0。自推出以来已促成超 $20 亿跨链转账，打通 Tron、TON、以太坊、Arbitrum 等链。与 Circle CCTP 形成"第三方 OFT vs 第一方 CCTP"的两极竞争，成为全链稳定币之战的核心战场。参见 [[来源_2025-06_全链稳定币_USDT0_CCTP_PANews]]
- **ONFT**：NFT 不再孤立于原生生态，可在多链间移动。代表案例：Pudgy Penguins Lil Pudgys（Polygon/BNB/Arbitrum），[[playerone]] 是首个产品化集成 ONFT 的元宇宙平台，支持 NFT 在以太坊/Polygon/Arbitrum/Optimism/BSC/Avalanche/Fantom 7 链间原子级跨链转移

## 跨链桥评估框架（五大维度）

2022 年 Ronin（7亿美元）和 Nomad（1.9亿美元）两起重大安全事件后，Joel John (Decentralised) 提出跨链桥可靠性评估的五大维度框架，最高分 70 分，10 个评估桥中最高仅 52 分。详见 [[来源_2022-08_跨链桥_五大维度_评估框架]]。

| 维度 | 关键参数 | 评分逻辑 |
|------|---------|---------|
| **安全性** | 争议时间/验证者权限/黑客补偿/审计&赏金 | 争议时间长+验证者无权动资金+有保险基金+多次审计的桥得分高 |
| **性能** | 跨链成本模型/交易时间 | 固定费率（~1%）优于AMM指数增长；1分钟内完成优于1小时以上 |
| **可提取价值（MEV）** | MEV提取量/审查抗性/资本效率 | 低MEV+抗审查+高流失率（交易量/TVL）得分高；流失率>100为优秀 |
| **连接性** | 支持域类型和数量 | 原生桥（Polygon/Celo）最低；多域类型（L1/L2/EVM/非EVM）互通性高 |
| **能力** | 资产类型范围/合约调用 | ERC-20为基本盘；支持合约调用（与Aave等DeFi协议交互）为加分项 |

### 安全性：四要素分解
1. **争议时间** — 验证者标记可疑交易后争议窗口越长越好（Synapse 被攻击后验证器标记并关闭系统，挽回 800 万美元）
2. **验证者访问权限** — 拥有代币访问权的验证者应受惩罚；理想状态是验证者身份与用户资金访问权分离（Ronin 事件中 5/11 验证器密钥被窃）
3. **黑客补偿机制** — 保险（Nexus Mutual） vs 发行原生代币按比例补偿；理想机制是设置独立保险基金通过代币激励防止黑客攻击后用户挤兑
4. **审计与赏金** — 多次审计+Immunefi 等公开平台漏洞赏金

### MEV 作为跨链桥评估维度
- 截至评估时，基于以太坊的 MEV 提取收入约 1.8 亿美元
- 与低MEV链交互的桥得分更高；高MEV链上的桥可通过 Cowswap 等保护措施缓解
- **资本效率（流失率）**：30天交易量/TVL，Hyphen 和 Hashflow 完成数十亿跨链交易仅需约 1000 万资本，流失率超过 100

## 来源
- [[来源_2022-08_跨链桥_五大维度_评估框架]]
- [[来源_2023-08_L2进化趋势_Superchain_L3_Hyperchain_币安研究院]] — zkSync 超级桥：通过 L3 本地桥实现跨链转移不消耗第三链资源，是跨链互操作性的新方案
- [[来源_2023-07_跨链DeFi_Chainlink_CCIP]] — 跨链DeFi四大痛点（流动性受限/资产孤立/资金效率低/无法扩展）+四大优势+四种应用类型+Chainlink CCIP产品定位
- [[来源_2023-04_LayerZero_全链野心_应用场景_BixinVentures]] — OFT/ONFT 全链代币标准详解 + Stargate 统一流动性桥 + 全链 DeFi 应用场景（Pendle veTokenomics/Rage Trade 循环流动性/Radiant Capital 跨链借贷）
- [[来源_2024-09_Web3_Mass_Adoption_Web2.5_深潮TechFlow]] — CEX 作为最大跨链流动性管理者可以成为"intent asset"服务提供者；Clusters 基于 LayerZero 的全链域名服务 `用户名/链名` 解决多链地址管理痛点
- [[来源_2023-03_花旗RWA_代币化_区块链十亿用户]]
- [[来源_2023_LayerZero研报]]
- [[来源_2024-02_GSR数字资产参考包_Web3入门指南_BlockBeats]] — 桥的三种跨链模式+四种验证方式/桥作为最大攻击向量
- [[来源_2024-09_Orderly_Network_流动性中央厨房_ChainCatcher]] — Orderly Network 提供了一种非桥接的跨链流动性方案：通过统一订单簿聚合不同链的订单信息（而非转移资产），以 OP Stack + Celestia DA + LayerZero 实现跨链交易撮合与结算
- [[来源_2024-02_Portal_Binance_Launchpool_Web3游戏_BlockBeats]] — Portal 基于 LayerZero 实现多链游戏生态系统：与 Solana/Polygon/Avalanche/Klaytn 等网络集成，200+款游戏准备集成 PORTAL 代币，Portal 节点结合 Web3 引擎+LayerZero Oracle/Relayer 提供跨链交易第二层验证
- [[来源_2023-12_多Rollup世界_基础设施_SevenX]] — 模块化世界互操作性新挑战：验证三个（可能四个）不同组件（DA/执行/结算/排序）vs 单体链单一共识验证；结算中心简化拓扑（以太坊/Arbitrum/zkSync/StarkNet/Polygon 2.0）；Hyperlane（模块化安全层）和 Catalyst（无需许可跨链流动性）作为可扩展互操作方案；意图为中心桥接（UniswapX/SUAVE/Essential）及其结算预言机悖论
- [[来源_2022-08_Web3参考架构_三层模型_路线图_登链社区]] — 2022 年即指出跨链桥的中心化风险："很多跨链桥是中心化的，与 Web3 理念相反"，并将互操作性列为 Web3 最紧迫的待解决问题，警告碎片化将导致流动性低迷
- [[来源_2023-05_BRC-21_跨链_ODAILY]] — BRC-21 跨链标准 V 0.1 技术细节：通过起始链智能合约、自定义索引器、比特币中继器三个组件实现完全去中心化的跨链资产桥接，核心用例为将去中心化稳定币引入闪电网络
- [[来源_2023-12_LD_Capital_BRC20基建盘点_BlockBeats]] — BRC20 跨链基础设施（2023年末）：MultiBit (BRC20↔EVM)、ROUP/MAP Protocol (BRC201 → MAP L2)、Ordinfinity (跨链+Swap+Lending+Launchpad)、TeleportDAO (BTC↔EVM 轻客户端桥)，展示了 BTC 生态跨链的四种技术路径
- [[来源_2025-01_以太坊路线图_Pectra升级_DevCon_PANews]] — Rollup 间互操作性两大 ERC 标准：ERC-7683（Unichain+Arbitrum 支持，解决跨链流动性）和 ERC-7802（Optimism SuperchainERC20，超级链统一资产标准）；基于 L1 的 Rollup（Based Stack）与共享排序器作为互操作性的两条竞争技术路径
- [[来源_2024-04_链抽象细分_六模块_主要参与者_SevenX]] — 统一流动性模块依赖 UniswapX 和流动性中心等 Solver 处理跨链流动性；LayerZero 和 Union 在链抽象生态中扮演"被动但必需"的跨链基础设施角色
- [[来源_2022-09_公链_扩容_一超多强_BuidlerDAO]] — 记录2022年公链跨链格局：Polkadot和Cosmos的Layer0跨链策略对比（两者均专注于底层协议搭建，降低开发者门槛并提供跨链互操作性），Avalanche通过子网Subnet实现平行链架构但缺乏原生跨链互操作方案；指出Ronin跨链桥被盗6.2亿美金是当时跨链安全的标志性事件
- [[来源_2025-03_链抽象_间接影响_Shoal]] — Q4 2024 VC 融资环比增长 46% 流向跨链基础设施；跨链桥攻击 2 年内损失 $2.5B；LI.FI 跨链流动性路由、LayerZero 消息层、Connext/Across 跨链交易路由被列为链抽象下层依赖的跨链基础设施组件
- [[来源_2025-04_比特币生态_RWA赛道_Web3全景_PANews]] — Infinity Labs跨链数据：2024年跨链桥攻击损失超$10亿(Ronin桥占40%)、LayerZero全链互操作/Wormhole消息协议主导、zkBridge无信任验证5秒内/意图中心化跨链(Socket Protocol)、BTC L2 BEVM完全去中心化跨链/Taproot多签降低第三方托管风险
- [[来源_2025-03_ERC-7281_主权跨链代币_xERC-20_PANews]] — ERC-7281/xERC-20 主权跨链代币标准详解：多桥白名单+动态铸造/销毁限额机制、Lockbox 合约设计、四大目标、与 CCTP/OFT 对比、Beefy 案例、DAO 治理风险
- [[来源_2022_PlayerOne_元宇宙_多链沙盒_visioncap]] — PlayerOne 作为首个接入 LayerZero 的元宇宙平台，NFT 在 7 条公链上同时 Mint 并实现原子级跨链转移，是 ONFT 标准在元宇宙场景的典型案例
- [[来源_2022-06_周期_加密市场_下一轮_tolks]] — 2022 年中跨链桥五强对比：LayerZero/STG（全链代币）、Synapse（xAssets 多链资产）、Connext（xApps 跨域应用）、Hop（最早 USDC 跨链）、Wormhole（Jump 支持，第 11 条链扩展至 Cosmos IBC，$6.7 亿 TVL）；指出桥接安全是核心问题（虫洞/Ronin 被盗事件）
- [[来源_2025-02_预言机_机构信任_Chainlink]] — CCIP 作为 Chainlink 跨链互操作性协议的战略定位，预言机跨链数据分发架构（Pythnet + Wormhole 的依赖关系、RedStone 70+ 链原生跨链支持）
- [[来源_2025-05_Alliance毕业季_20加密初创_深潮TechFlow]] — Alliance 2025年5月批次中的 Junction 定位为跨链交易的"统一入口"，允许用户交易任何链上的任何资产，创始人来自 Ledger、WalletConnect 和 Coinbase，展示了跨链赛道持续吸引顶级加密基础设施背景人才的趋势
- [[来源_2025-02_空投_Q1耕收_9大项目_CryptoIntegrated]] — 补充 Union Build 作为 ZK 互操作性协议（融资 1,600 万美元），支持通用消息传递/资产跨链/NFT 桥接/DeFi，测试网需要同时连接 EVM 和 Cosmos（Keplr）钱包，展示 ZK 技术在跨链互操作中的应用
- [[来源_2025-03_传统金融与链上金融_DeFi交汇_深潮TechFlow]] — 2025年初DeFi综述将LayerZero和IBC等通用消息协议视为跨链互操作性的关键突破，实现不同区块链间安全通信和流动性高效流动
- [[来源_2022-10_LayerZero_21生态项目_发币教程]] — 2022年10月LayerZero生态快照：21个已集成项目全清单（含DeFi/NFT/游戏），ZRO代币最早代码痕迹，融资完整时间线，空投耕作策略手册

- [[来源_2025-08_美国政策_通证化_Chainlink]] — 从政策层面论证通证化互操作性标准的重要性
- [[来源_2025-04_熊市_早期项目_申请_PANews]] — 补充Concero跨链互操作性基础设施协议（由Chainlink构建，支持104+条链，已开放V2测试网），是跨链赛道的新参与者，指出技术（如CCIP）已可实现跨链传输，但法律层面缺少解释跨系统传输时合规义务如何应用的框架；呼吁制定互操作性政策标准
- [[来源_2022-02_Axelar_跨链覆盖网络]] — Axelar 通用覆盖网络方案：使用 Cosmos SDK + 无需许可 PoS 验证器集进行跨链消息身份验证，声称新链集成仅需约 10 分钟，是不同于单纯跨链桥和生态特定方案（IBC/XCM）的差异化路径。本文记录了其 2022 年 2 月主网启动时的代币分配（AXL 总量 10 亿，社区项目 35.96%）

- [[来源_未知_跨链桥_资源汇总]] — 跨链桥项目极简资源索引（13行），提供Earndrop空投Alpha通知页面和Mirror上70+跨链桥全览两条外链，归纳跨链桥三大技术方案（锁定铸造/资金池/原子置换）和四发展趋势（NFT跨链/跨链聚合/资金池参与DeFi/专注特定生态）。外链均已不可达，但三条要点可作为2022年前后跨链桥核心叙事的行业共识切片。
