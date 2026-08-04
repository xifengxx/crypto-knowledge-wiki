---
type: entity
entity_type: protocol
created: 2026-06-29
updated: 2026-07-02
tags: [layer2, ethereum, coinbase, op-stack]
---

# Base

## 基本信息
- 类型：以太坊 Layer 2（OP Stack）
- 发起方：Coinbase
- 定位：Coinbase 的链上战略核心，连接 CEX 用户与 DeFi 生态

## 核心业务/产品
- **低成本 L2**：Dencun 升级后 Gas 费降 99%，NFT 铸造近乎免费
- **AI Agent 生态**：Virtuals Protocol 基于 Base → AI Agent 市值 $30 亿
- **Coinbase 链上银行战略**：Onramp + ApplePay 合作 + Bridge 直接存款 + USDC 5% 收益扩展到 Base
- **NFT 生态**：87% 新 NFT 部署在 Base + Zora Network
- **Base App（2025.7 起）**：原 Coinbase Wallet 于 2025 年 7 月 18 日更名为 Base App，从单一加密钱包转型为集资产、支付、社交于一体的 Web3 超级聚合应用
  - **Base Pay**：USDC 即时支付，与 Shopify 合作覆盖数百万商家，持有 USDC 享 4.1% APY，年底推 1% 消费现金返还
  - **Flashblocks**：区块时间缩短至 200 毫秒，支持高频交易、链上游戏和实时应用
  - **Base Build**：提供 SDK/API/资金支持，目标吸引 100 万开发者；"Sign in with Base"简化 dApp 开发
  - **Farcaster 社交集成**：支持发帖、分享、查看链上动态、Mini Apps（游戏/DeFi 工具）、个人主页和内置聊天

## 关键数据
- AI Agent 生态市值：$30 亿（Virtuals/77% 份额）
- 87% 新 NFT 部署在 Base + Zora
- Dencun 后 Gas 费降幅：99%
- 稳定币供给增长：$0.5b（2024年1月）→ ~$4.5b（2025年5月），成为「稳定币原生链」
- 稳定币 DEX 收入占比：2025年初峰值超过 25%（Keyrock 2025.06 报告）
- 一年收入增长：$64,570,000（2023.10 — 2024.10，比 Arbitrum 多 $7,000,000）
- 一年 TVL 增长：$1,800,000,000（总 TVL $2,260,000,000）
- 每周交易数：35,000,000 次（每日交易数比 Arbitrum 多一倍有余）
- 活跃地址数增加：59,000,000 个
- Jesse 估算链上用户：500万-1000万（支付）/ 100万-200万（交易）/ <100万（社交/音乐/游戏）

## 2025 战略方向（Jesse Pollak AMA 2024.10）
- **隐私**：Base 2025 年重大技术升级方向，短期做合规隐私池，中期原生集成隐私到 L2 堆栈
- **钱包 + Base 整合**：Jesse 升任核心高管后加速 Smart Wallet 与 Base 的协同
- **消费者应用三大优先**：链上无抵押信贷 / 本地稳定币 / 链上社交和创作者工具
- **本地稳定币试点**：OAK 在奥克兰测试，已通过 acceptusdc.com 开展商户推广

## 稳定币支付定位（2025 Q1）

Squads博客2025年3月的分析将Base视为Solana在稳定币支付领域的主要竞争对手，核心特征：

### 与Coinbase和Circle的深度绑定
- USDC由Circle和Coinbase于2018年联合推出，是首个被Coinbase支持的稳定币
- Base提供免费Gas额度（对应用开发者）、USDC支付折扣Gas、零费用USDC入金
- Coinbase持有美国CEX市场45%的份额，Base用户主要为北美用户——对美企整合链上支付极具吸引力

### 排序器经济
- Base交易由Coinbase运营的中心化排序器处理，费用直接归Coinbase
- 2024年Coinbase从排序器费用中至少获得$5600万收入
- 排序器仅用8%的费用收入完成以太坊结算，尽管消耗了以太坊40%+的Blob空间
- Base出块时间2秒（预确认），真正最终性~15分钟（以太坊结算）

### 监管中立性挑战
- Base无原生代币，因此未受SEC监管调查
- 但Base的中心化设计使其可被Coinbase单方面：地理围栏用户、要求KYC、黑名单代币/应用、冻结钱包
- Coinbase Attestations已上线，提供了执行上述规则的底层工具
- 相比之下，Solana运行在1000+验证者上，监管要求通过前端或代币扩展执行，非中心化管理

### 稳定币支付应用
Base上的原生稳定币支付应用包括：[[peanut]]（Peanut.to）、[[llamapay]]（LlamaPay）、[[superfluid]]（Superfluid）、[[acctual]]（Acctual）。整体规模小于Solana，但Base生态更年轻。

来源：[[来源_2025-03_Solana_Base_稳定币支付_Squads]]

## Base 上的 MEV 垃圾问题

Flashbots 2025年6月的研究（[[来源_2025-06_MEV_伸缩限制_垃圾机器人_Flashbots]]）揭示了 Base 链上严重的 MEV 垃圾问题：

- **56% Gas 消耗来自垃圾机器人**（2025年2月数据），仅贡献 14% 的手续费
- **有效吞吐量停滞**：2024年11月至2025年2月，Base 总吞吐量从 15 Mgas/s 增至 26 Mgas/s，但有效吞吐量（扣除垃圾后）恒定在约 12 Mgas/s——所有新增容量全被垃圾机器人吞噬
- **市场高度集中**：仅 2 个利润接收地址控制了 >80% 的垃圾交易
- **26% 的 L1 DA 使用量**被垃圾机器人消耗
- **费用被人为抬高**：垃圾机器人的持续需求使 Base 的 Gas 费用无法降至理论最低水平

该问题随着 Libra 丑闻（2025年2月14日）后 Meme 币交易量下降而有所缓解，有效吞吐量开始重新增长。

## 机构采用：摩根大通 JPMD 存款代币试点
2025 年 6 月，摩根大通选择 Base 作为 JPMD（存款代币）的首个公链试点平台。JPMD 由受监管存款支持，代表机构客户在摩根大通持有的美元存款，可在支持的公链网络间转移、交易或支付。这是全球最大银行首次在公链上发行代币化存款产品，标志 Base 从"零售支付和 DeFi 场景"向"机构级金融基础设施"的方向升级。

试点细节：固定数量的 JPMD 转移到 Coinbase 测试机构转账，成功后向选定机构客户开放实时交易。

参见 [[来源_2025-06_银行_代币化_JPMD_深潮TechFlow]] 和 [[来源_2025-06_JPMD_存款代币_摩根大通_PANews]]

## 相关实体
- [[coinbase]] — 母公司
- [[jesse-pollak]] — Base 创始人，Coinbase 核心高管
- [[virtuals]] — Base 上 AI Agent 首发平台
- [[daos-world]] — Base 上 DAO 对冲基金发行平台，灵感源自 Solana daos.fun
- [[optimism]] — OP Stack 提供方（待创建）
- [[avantis]] — Base 生态头部衍生品协议，累计交易量 220 亿美元

## 来源
- [[来源_2023-04_Bankless_五大新兴L2项目_交互指南]] — 2023年初最早期的 Base 报道：Goerli 测试网阶段、无代币计划但留变数、1.1亿Coinbase用户基础
- [[来源_2024-12_Bankless_2024年NFT十大亮点]]
- [[来源_2024-12_Delphi_DeFi_2025_Consumer_DeFi与加密银行卡]]
- [[来源_2024-10_Base创始人Jesse答社区100问]]
- [[来源_2025-09_链上预测平台_FootballFun_Limitless_BlockBeats]] — Base链上预测市场生态爆发：Football.Fun（14天TVL超1000万美元/Base最快游戏增长纪录）、Limitless（Base三个月交易量超2.5亿美元但有数据造假争议）、Fantasy.top（从Blast迁移至Base）
- [[来源_2025-08_a16z_银行_资管_Fintech_区块链转型_深潮TechFlow]] — Base作为以太坊L2（OP Stack）的代表示例，可提供低于$0.01的交易费用和亚秒级延迟；作为Fintech构建专属L2的典型案例（类似Kraken Ink、Uniswap Unichain均基于OP Stack）
- [[来源_2024-03_Base不发币策略_消费者应用]]
- [[来源_2024-08_Blackbird_Pay_特洛伊木马_加密支付_Web3Brand]] — Blackbird=Base 上消费级支付+忠诚度应用标杆：2% 费率使用 USDC 结算，40K 钱包/125K NFT/142 餐厅
- [[来源_2024-08_各链PumpFun仿盘_跨链对比_ForesightNews]] — Base链Meme发行平台最多（Ape.store/Rug.fun/Trugly.meme/Bibobibo共4个），但整体财富效应弱于Solana/Tron，缺发后劲
- [[来源_2025-01_daos-world_Base_DAO基金平台]] — daos.world 在 Base 上运行的 DAO 对冲基金平台：预售→Uniswap V3上线、单边流动性设计、基金经理可调用任意智能合约
- [[来源_2025-04_CEX_反脆弱_中心化交易所_BingVentures]] — Base占L2市场近40%份额（Gas费$0.00012），日活120万地址，与Coinbase Prime机构业务形成正循环；TVL $40.8亿，Aerodrome TVL $8.71亿
- [[来源_2025-06_Circle_IPO_Coinbase_风险_Artemis]] — 补充 Base 排序器经济数据：周毛利润约 100 万美元，利润率约 90%，占所有以太坊 L2 毛利润 75%+；Base 可能获得最多 1.18 亿枚 OP 代币激励；但与 Solana 量化差距仍大（Solana 日活 3 倍、日交易量 7 倍）
- [[来源_2025-06_MEV_伸缩限制_垃圾机器人_Flashbots]] — Flashbots 研究揭示 Base 链 56% Gas 消耗来自垃圾机器人、有效吞吐量停滞等问题
- [[来源_2025-03_DEV链上操作_Cocoro_EVM_PANews]] — 以Cocoro meme代币为例，详解BASE链上dev操作追踪方法：合约创建、单边池添加(LP NFT Token ID 2256046/2256052)、impersonator.xyz模拟登录查池
- [[来源_2025-03_Solana_Base_稳定币支付_Squads]] — Base稳定币支付定位：与Coinbase/USDC深度协同、排序器年收入$5600万、无条件监管审查优势
- [[来源_2025-06_稳定币_DeFi收入_Keyrock]] — 稳定币供给 $0.5b→$4.5b 增长数据、稳定币 DEX 收入峰值 >25%、Base 作为"稳定币原生链"的定位分析
- [[来源_2025-07_Coinbase_Wallet_Base_App_Web3超级应用_深潮TechFlow]] — 记录 Coinbase Wallet → Base App 品牌升级事件：Base Pay（USDC+Shopify+4.1% APY）、Flashblocks（200ms 区块时间）、Base Build（100 万开发者计划）、Farcaster 社交集成等核心更新详情
- [[来源_2025-07_公链数据_以太坊_Base_Hyperliquid_PANews]] — 2025年Q2 8链横向对比：Base TVL 24亿→40亿美元（+63%）、日活翻倍（+115%）、但3月净流出56亿美元至以太坊、Flashblocks 200ms上线
- [[来源_2025-09_CryptoNews合集_Avantis_Base衍生品]] — Base 生态衍生品协议 Avantis 的完整分析：220 亿美元累计交易量、风险分层 LP 模型、零费用永续合约创新
