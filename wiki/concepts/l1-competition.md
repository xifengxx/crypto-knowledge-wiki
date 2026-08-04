---
type: concept
created: 2026-06-29
updated: 2026-07-02
tags: [layer1, competition, infrastructure, parallel-execution]
aliases: [L1竞争, L1格局, 新公链]
---

# L1 竞争格局

## 一句话定义
新一代 L1 区块链（Monad/Berachain/Sui/Aptos/Sei）试图挑战 Solana 和以太坊的地位。核心结论：**技术性能不是决定因素——社区、应用生态和分发渠道才是。**

## 浏览器发展史类比（2025年3月视角）

外部观察者将公链竞争类比为浏览器发展史，提供了一个理解超级公链格局的分析框架：

- **Ethereum/EVM = Chromium**：行业事实标准，最高市场份额，EVM 体系的网络效应（dApp/L2/Dev/VC/KOL 组成的自我强化生态）使其难以替代，但"被骂也不能离开"的状态类似 Web 开发者对 Chromium 的依赖
- **Solana/SVM = Safari**：极致流畅但集权，"极致的流畅背后是集权"——类似 Apple 的封闭生态，性能优先但去中心化程度妥协
- **BNB Chain = Edge**：跟随者策略，核心优势是母公司的分发渠道（币安 ≈ 微软）。EVM 是 Chromium，BNB Chain 最好的出路是成为 Edge

这一类比的核心洞察：公链竞争不再是技术标准之争，而是"商业财团之争"。Solana 和 Base 的斗争更多是商业利益分配，与技术路线无关（[[来源_2025-03_以太坊_Solana_BNBChain_三链对比_深潮TechFlow]]）。

## 五大挑战者

| 链 | 定位 | 技术特色 | 社区策略 | EVM? |
|---|------|---------|---------|:--:|
| **Monad** | 消费者应用+社区文化 | 并行执行+MonadBFT+MonadDB | Monad Run Club, memetic premium, APAC | ✅ |
| **Berachain** | Proof of Liquidity 代币经济 | BGT 治理代币+流动性飞轮 | NFT 起源(Bong Bears), Gen Z 营销 | ✅ |
| **Sonic (原Fantom)** | 高性能DeFi/Gas货币化 | 声称10,000 TPS, <1秒最终性, FeeM 90%费用返dApp | Andre Cronje个人品牌, $1.32亿空投 | ✅ |
| **Sui** | 游戏+TradFi | Mysticeti 共识, Objects Model | 韩国区块链周, TikTok(Byteplus)合作 | ❌ |
| **Aptos** | 企业级 Web2 友好 | AptosBFT, Block-STM | 收购 HashPalette(日本), SK Telecom/Lotte | ❌ |
| **Sei** | 高性能 DeFi 特化 | SeiDB, 并行执行 | Million Japan 生态 | ✅ |

## 近期新L1项目（2025年3月视野）

### Initia：多链生态的"世界编排层"（[[initia]]）
L1网络通过整合不同L2构建模块化应用链生态（"Minitias"），与Avalanche子网类似但支持EVM、MoveVM和WasmVM三大虚拟机架构。核心创新是**Enshrined Liquidity（内置流动性）**——用户在Initia DEX提供LP后可同时赚取交易费、质押收益和治理投票权，Y单位INIT可创造2Y价值。VIP（Vested Interest Program）每两周投票决定Rollup激励分配，Vote Lock质押锁定最多4年可达4倍投票权。A轮1400万美元，估值3.5亿美元FDV。

Delphi Research 在其 Initia 深度研报中提出"四大支柱"分析框架：(1) 用户体验优先（JIT Gas 抽象、.init 用户名、本地化工具链）；(2) 跨 Rollup 互操作（One Token, Many Chains 资产标准化）；(3) "意见性"交织堆栈（固定组件+灵活执行）；(4) VIP + Cabal 治理激励对齐。文章的总结性隐喻是："如果以太坊是世界计算机，Initia 就是世界编排层——让应用链和谐共唱。"该框架强调 Initia 的差异化不在于性能（如 Monad 或 Solana），而在于经济协调和跨链互操作。参见[[来源_2025-03_新公链_稳定币_顶级项目_PANews]] [[来源_2025-02_Initia_内置流动性_深潮TechFlow]] [[来源_2025-02_Initia_德尔福_交织Rollup_StacyMuur]]

### Fogo：SVM极速L1（[[fogo]]）
采用Jump Crypto的Firedancer作为唯一执行客户端，理论速度最高100万TPS（20ms出块时间），实际开发者网络约5.4万TPS。运行Solana虚拟机（SVM），Solana应用无需修改即可迁移。多本地共识（"太阳公转"）、GAS费抽象化。Echo平台融资800万美元（估值1亿美元），种子轮550万美元。参见[[来源_2025-03_新公链_稳定币_顶级项目_PANews]]

### Snapchain：社交专用L1（[[snapchain]]）
专为Farcaster社交网络打造，采用分片技术实现账户级隔离，旧数据可删除以优化存储。主网启动时9000+ TPS，可承载200万DAU。开发主体Merkle Manufactory完成1.5亿美元融资，Paradigm领投。参见[[来源_2025-03_新公链_稳定币_顶级项目_PANews]]

这三个项目代表三种不同的L1竞争策略：通用多VM L1（Initia）、垂直性能L1（Fogo）、应用特化L1（Snapchain），验证了"链正在赛道化"的趋势——每条链必须有明确的应用场景，而非通用型区块链。

## 既存公链的反击：BNB Chain 的 2025 年全面崛起

新 L1 挑战者的另一面是既存公链的强势反击，其中 BNB Chain 在 2025 年上半年的表现最为显著：

- **增长驱动**：Binance Alpha 流量引擎（截至 2025 年 7 月 1 日上线超 200 项目，120 个来自 BNB Chain）+ PancakeSwap 多链扩张 + Four.meme Meme 赛道 + 机构 RWA 资本入场
- **DEX 交易主导**：PancakeSwap 7 天 DEX 市占率 74.6%、30 天收入 6.6 亿美元（仅次 Tether 和 Circle），将 BNB Chain 周度 DEX 份额从 2024 年中 20-30% 推升至 2025 年 6 月底的 80%
- **用户规模全面领先**：DAU 209 万、MAU 2779 万，稳定币月均活跃钱包地址占比 36.7%（全网第一），24 小时交易笔数 1180 万笔
- **基础设施升级**：Maxwell 升级将出块时间从 1.5 秒缩短至 0.75 秒
- **圈外资本认可**：xStocks 美股代币上线、Nano Labs 启动 10 亿美元 BNB 储备策略、YZi Labs 推动 BNB Treasury Company

来源：[[来源_2025-07_BNB_Chain_新叙事_200天_BlockBeats]]

## 技术层面的真实进步

- **单槽最终性**（Single-Slot Finality）：<1 秒最终确认（Solana/以太坊均为多槽）
- **更低的 Gas 费**：比 Solana 便宜 10x，对 HFT 场景有意义
- **并行执行**：Sui/Solana（状态访问并行/确定性并行）vs Sei/Aptos/Monad（乐观并行）。核心分化在于"何时确认交易依赖项冲突"：确定性并行（Solana）在交易执行前声明读写集合，乐观并行（Aptos/Block-STM）在交易执行后验证冲突并重试

## 为什么技术不是决定因素

- **非 EVM 链活跃钱包 >3x EVM 兼容链**（a16z 数据）
- **无数 EVM 兼容链已经死了**——兼容性不保证用户
- **Base 成功 = Coinbase 用户基础，不是 EVM**
- **用户跟应用走，不跟技术走**

## 链正在赛道化

| 赛道 | 主导链 | 说明 |
|------|--------|------|
| DePIN | Solana | io.net/Render/Helium 均迁移至 Solana |
| AI Agent | Base (L2) | Virtuals, AIXBT |
| DeFi 蓝筹 | Ethereum L1+L2 | Aave/Uniswap/Maker |
| DeFi DEX 交易量 | **BNB Chain** | 2025 年中 DEX 周度市占率 80%，PancakeSwap 主导 |
| Meme | Solana / **BNB Chain（竞争）** | Pump.fun vs Four.meme 双平台格局；BNB Chain 通过 Binance Alpha + Four.meme + 极低费率快速追赶 |
| RWA/机构 | Ethereum | BUIDL, Ondo |
| RWAfi (专用链) | [[plume]] (新兴) | 模块化 RWA 全生命周期 L1，2025 年初 2000 万美元融资 |
| 稳定币支付 | Solana + Base（竞争格局） + **Tron** | Solana 在 REV/生态/去中心化占优，Base 在合规/美国分销占优。Tron 仍主导 USDT 转账——Tron 链上 USDT 超 800 亿枚，超越以太坊成为最大稳定币网络（2025年7月数据，[[来源_2025-07_以太坊十年_世界计算机_PoS转型_BlockBeats]]）|
| 稳定币专用 L1（2025 新兴） | Arc/Tempo/Converge/Plasma | 发行方自建结算轨道，竞对 Visa/SWIFT 而非其他公链 |

新 L1 如果不能找到差异化赛道 → "又一个鬼城 L1"。

## 收入可持续性对比（2024 年 8 月快照）

三大公链展现了三种截然不同的收入模型，其可持续性排名为 **Ethereum > Tron > Solana**：

| 维度 | Ethereum | Solana | BNB Chain | Tron |
|------|----------|--------|-----------|------|
| 30d Gas 费收入 | $99.89M | $46.21M | — | $38.97M |
| 日活地址 | 31.6 万 | 110 万 | **440 万** | 210 万 |

BNB Chain 以 440 万活跃地址碾压所有公链（远超 Solana 的 300 万和以太坊的 30 万），但其活跃度被认为主要由 Meme 投机和币安导流驱动，而非生态质量（[[来源_2025-03_以太坊_Solana_BNBChain_三链对比_深潮TechFlow]]）。
| 收入来源 | 多元化（DeFi 60%/转账 12%/MEV 8%/NFT 8%） | 高度集中（Meme >55%/DEX 86%） | 单一但刚需（USDT 转账 94.51%） |
| 收入质量 | 高——四大类合计 88%，分布合理 | 低——Meme 投机驱动，玩家年化亏损 $1.3B | 中高——支付刚需，但不乏集中度风险 |
| 可持续性 | 强——多元生态+技术创新 | 弱——投机驱动，情绪逆转即断崖 | 强——刚性需求支撑，核心业务不受 Meme 波动影响 |

**核心洞见**：收入规模不等于收入质量。Solana 收入是 Tron 的 1.2 倍，但高度依赖不可持续的 Meme 投机（Meme 玩家月均亏损 $110M）。Tron 的 USDT 支付刚需提供了结构性韧性——即使 Meme 涌入导致占比从 94.51% 降至 52%，核心业务的能量消耗稳定在 80B-90B。

## 关键变量
1. **APAC**：所有新 L1 都在争抢亚洲市场（韩国/日本/东南亚）——这是增量用户所在
2. **分发渠道**：Coinbase → Base、TikTok → Sui、SK Telecom → Aptos。谁有 Web2 分发渠道谁有优势
3. **社区忠诚度**：Monad 的 memetic premium 能否在代币上线后维持？
4. **去中心化程度**：Nakamoto 系数方面，Solana 为 19（Helius 2024年10月数据），在 PoS L1 中排名中等；以太坊更高。客户端多样性方面，Solana（Jito 88%）和以太坊（Nethermind 45% + Geth 39%）是唯二拥有多客户端实现的 L1，但 Solana 的客户端集中度仍是显著弱点。
5. **地理分布**：Solana 验证者分布于 37 国（vs 以太坊 83 国），68% 质押在欧洲，美国仅 18.3% 质押。托管服务商集中度（前两名 43.4%）构成单点故障风险。

## 稳定币专用 L1 的崛起（2025 年 8 月）

Circle（Arc）、Stripe（Tempo）、Tether（Plasma/Stable）、Ethena（Converge）几乎同时宣布自建稳定币专用 L1。这与通用 L1 竞争完全不同维度——稳定币 L1 争夺的是支付清算基础设施地位（竞对 Visa/SWIFT），而非开发者生态。技术壁垒极低（Cosmos SDK + EVM 兼容 ≈ 部署 Docker 实例），真正壁垒是分销网络和用户获取。

核心悖论：稳定币 L1 的发展逻辑反向验证了"用户跟着应用走，不跟着技术走"——发行方自建 L1 不是因为现有公链性能不够，而是因为不想把利润让给中间商（Circle 年付 Coinbase $9 亿、Tether 声称 40% 公链手续费由其创造）。

## Sui 稳定币增长的竞争意义
Sui 在 2025 年初展现出强劲的稳定币增长——一年内从 $540 万到 $5.5515 亿（100 倍），日活跃地址 170 万超以太坊。这验证了"原生稳定币是链上资产负债表扩张的基础"的观点（[[来源_2023-06_Sui生态现状_数据分析_链上基本面]]），意味着 L1 竞争中稳定币生态能力正在成为关键差异化因素。

**对比视角**：Sui $5.5 亿 vs Solana 稳定币 $117 亿（2025 H1），显示虽然 Sui 增长速度快，但绝对规模差一个数量级。Sui 在 L1 竞争中靠"低费用+对象模型灵活性+游戏/支付场景差异化"定位，但面临 Solana 网络效应和 Basis/degen 生态的压力。

来源: [[来源_2025-02_Sui流动性激增_稳定币_深潮TechFlow]]

## Appchain 作为 L1/L2 竞争的新维度

2025 年，头部应用自建链（Appchain）正在成为 L1/L2 竞争格局的新变量：

- **价值流失**：Unichain 和 HyperEVM 生态 TVL 合计超过 30 亿美元——这些资产在过去本应沉淀在以太坊、Arbitrum 等通用型 L1/L2 上。顶级应用自立门户直接导致了这些平台的 TVL、交易量和 MEV 等核心价值来源的流失
- **「产品优先」vs 「基础设施优先」**：Unichain 和 HyperEVM 先有经过市场验证的核心产品和用户，再围绕产品构建生态，与 L1/L2 先建基础设施再用激励吸引开发者的模式截然不同
- **新的竞争关系**：Unichain 和 HyperEVM 自己成为了平台层，与其他 L1/L2 形成了直接竞争——不仅争夺用户和流动性，还争夺开发者在自己的链上构建
- **L1 估值逻辑重构**：头部应用自立门户后，L1 的估值逻辑将从「捕获生态总价值」转变为「基础设施服务提供商」，估值泡沫将被挤压
- **执行完整性风险**：Appchain 面临「流动性割裂」和「跨链可组合性丧失」两大核心风险，并非所有协议适合（Aave 等依赖可组合性的协议不适合）

来源：[[来源_2025-08_Appchain_胖应用_胖协议_IOSG]]

## 相关概念
- [[stablecoins]] — 稳定币专用 L1 是稳定币赛道从"发行层"向"结算层"演进的最新形态
- [[layer2]] — L2 是新 L1 的竞争对手
- [[depin]] — DePIN 正在向 Solana 集中
- [[ai-agents]] — AI Agent 选 Base，链在分化

## 来源
- [[来源_2025-07_Solana_H1_盈利增长_Helius]] — Solana L1竞争关键数据：2025年1月REV 5.52亿美元（以太坊的3.31倍）、DEX交易量占全行业81%、开发者增长83%超越以太坊、中位手续费仅$0.003178（以太坊的1/1523）。CME Solana期货上线、多家资管提交SOL ETF申请（91%获批概率）。报告确认Solana在收入、交易量、开发者三大维度已全面超越以太坊
- [[来源_2024-10_Solana去中心化程度_中本聪系数_验证者分布_Helius]]
- [[来源_2023-04_Web3确定性_金字塔分析框架_The_Quibbler]] — 2023年初公链开发者竞争快照：以太坊开发者第一，Cosmos增速最快，Solana过山车，Polygon~100%增速；公链吸引开发者手段单一（黑客松/基金会补贴），除BSC流量扶持外缺乏技术选型以外的差异化壁垒；作者提出「公链效率→开发者→应用→用户→市场规模」金字塔分析框架
- [[来源_2023-04_Web3用户增长_市场周期_新叙事_CoinVoice]] — 2023年初L1格局快照：9条公链TVL曾峰值超$80亿但第二三名仅~$40亿；"L1黄金时代已结束，只有真正带来新东西的L1才能生存"；Arbitrum/Optimism TVL分别$1B/$500M已超大部分L1竞争者
- [[来源_2025-01_Monad测试网_生态建设_参与策略_PANews]] — Monad 生态全景
- [[来源_2024-08_以太坊VC基建痴迷_EBOLA_Solana_BlockBeats]] — Solana vs Ethereum 差异化竞争：Solana 低启动成本吸引用户导向型创始人，Ethereum 被 VC 基金经济学锁定在基础设施叙事；新兴 meta（DePIN/Memecoin/消费者）均在 Solana 上发展：25+ Native 项目 7 大类别，基金会成立（2024.12.17），社区驱动+Solana 生态资本关联的空投策略线索
- [[来源_2023-01_公链运营三大维度_差异化_PANews]] — 公链运营的系统性分析框架：Developer/Ecosystem/Community 三大维度、Grant 机制优劣、Migrate 策略、"Web3 用户跟着应用走不跟公链走"的核心洞察、Aptos vs Sui 社媒策略对比
- [[来源_2023-06_Sui生态现状_数据分析_链上基本面]] — Sui主网上线一月后的真实生态快照：TVL仅$19m、日活2.2万且下滑、活动完全由IDO驱动。验证"技术性能不是决定因素"——Sui拥有Move语言和Narwhal+Tusk共识的技术优势，但早期链上活动惨淡
- [[来源_2024-08_各链PumpFun仿盘_跨链对比_ForesightNews]] — Meme发行基础设施成为2024年L1竞争新维度：Tron通过Sun.pump实现链级别复苏（TRX近三年新高+新用户激增），证明"Meme发射平台=链级流量引擎"范式，但多数仿盘（Uptos $13M→$1.2M）暴露"多平台瓜分存量用户→PvP加剧"的结构性矛盾
- [[来源_2024_Berachain_技术社区与未来_CryptoSnap]] — Berachain 技术架构+三币模型+生态项目全景
- [[来源_2024-08_Berachain_POL_流动性证明_深潮TechFlow]] — Berachain POL 共识机制深度技术解析：贿赂系统嵌入 L1 共识层、飞轮设计、Fat Bera 理论及风险
- [[来源_2025-02_Berachain_生态项目_主网上线_PANews]] — Berachain 主网上线首周生态项目全景：Kodiak/Ooga Booga/Dolomite/Beradrome 等 DeFi 项目及 GameFi/SocialFi/MemeFi 非 DeFi 应用数据
- [[来源_2024-10_Hyperliquid技术架构_CEX对标_深潮TechFlow]] — Hyperliquid 作为"应用特化型 L1"的 TGE 前全景：HyperBFT 20 万订单/秒非阻塞共识、HLP 去中心化做市金库、HIP-1/HIP-2 现货标准、无 VC 社区优先路线
- [[来源_2025-01_MegaETH_Monad_Hyperliquid_高性能区块链对比_PANews]] — Three Sigma 三链横向对比：MegaETH（L2 100K TPS/1-10ms 极端低延迟）vs Hyperliquid（L1 20万 TPS/金融市场专业化）vs Monad（L1 1万 TPS/并行 EVM 平衡路线），核心结论"没有一种方案主导所有用例"验证了赛道差异化的必要性
- [[来源_2025-03_MegaETH_实时区块链_StanfordReview]] — MegaETH 团队第一手技术深文：中心化出块 + 去中心化结算架构的理论依据（引用 Vitalik Endgame）、JIT 编译和全内存状态等优化手段的量化数据，确认 MegaETH 在 L2 极端性能路线的设计取舍
- [[来源_2024-09_L2_Solana_Appchain_应用部署选择_Web3Caff]] — L2 vs Solana vs Appchain 三维比较框架：应用链通过模块化堆栈试图在性能和开发者体验上与 Solana 等单体 L1 竞争，但互操作性和链抽象是前提条件
- [[来源_2025-01_Q1发币项目盘点_Berachain_Monad_OpenSea_PANews]] — 2025 Q1 L1赛道TGE/主网时间线核查：11个头部项目中仅Abstract（1月）和Nillion（2月）有明确官方公告，Berachain/Monad的Q1预期多为社区传闻；Initia主网进度78%是唯一公开披露开发进度的项目
- [[来源_2024-08_三大公链收入可持续性_Ethereum_Solana_Tron_odaily]] — 三链收入可持续性对比：Ethereum（多元均衡）> Tron（支付刚需）> Solana（Meme 依赖/不可持续）
- [[来源_2024-12_XRP_500亿市值飙升_Ripple_RWA_ETF_insights4vc]] — XRPL 作为非 EVM/非通用智能合约的专用支付链：联邦共识 1,500 TPS / 3-5 秒确认 / 31 UNL 验证者；正在通过 EVM 侧链向通用可编程性靠拢；技术定位类似 Tron（支付专用）但治理模型更中心化
- [[来源_2025-01_Plume_RWAfi_RWA专用链_深潮]] — Plume 作为首个 RWAfi 专用 L1：模块化架构（Arc/Passport/Nexus）/机构+DeFi 双轮驱动/2000 万美元融资/专用链赛道差异化——RWA 赛道正在从"以太坊通用链"向"专用 RWA L1"分化
- [[来源_2024-08_十二大新公链_高估值速览_ChainCatcher]] — 2024 年 8 月 12 条高估值新公链融资快照：Monad $2.25 亿/Aleo $2.28 亿/Berachain $1 亿 B 轮/Aztec $1.19 亿；叙事从"TPS 竞赛"转向 8 种差异化技术叙事（并行 EVM/ZK 隐私/ZK Rollup/模块化 SVM/POL 共识/Move 语言/意图中心/跨 Rollup）；Paradigm 出现在 2/12、Polychain 6/12、a16z 4/12——顶级 VC 在公链赛道"广撒网"
- [[来源_2024-12_Hyperliquid生态_链上赌场_淘金指南_PANews]] — Hyperliquid 从 PerpDEX 向 L1 公链估值逻辑切换的市场验证：HYPE 市值 ~90 亿（流通）/270 亿（FDV）超越 Fantom 和 Aptos 进入加密资产前 30，市场已按公链估值而非 DEX 估值定价；"赶 SUI 超 SOL"叙事驱动生态 FOMO，但验证者中心化（76 仅 23 活跃）和"机房链"争议构成估值风险
- [[来源_2024-03_并行EVM四杰_Monad_Sei_Neon_Eclipse_Foresight]] — 四大并行 EVM 项目横向对比：Monad（独立 L1 全栈优化+最强社区）、Sei V2（Cosmos L1 升级+先发但叙事弱）、Neon EVM（Solana 兼容层+无人需要的尴尬定位）、Eclipse（ETH L2 运行 SVM+叙事融合极致案例）；验证"社区>技术"和"跨生态桥接两边不讨好"两个核心规律
- [[来源_2024-12_老牌公链狂拉_MEME发射平台_百倍机会_BlockBeats]] — 老牌公链2024年底集体复苏：EOS/XLM/XRP/ADA 大幅拉涨，"Meme发射平台=链级流量引擎"范式在老牌公链上重现——Four.meme（BNB）/First Ledger（XRP）/Snek.fun（Cardano）/SunPump（TRON）
- [[来源_2023-04_Sei_Network融资_生态版图_MarsBit]] — 2023 年初 L1 融资竞赛快照：Sei 以 1.2 亿美元生态资金总额领跑，3000 万美元股权融资（估值 8 亿美元），与 Aptos/Sui 并列"新星公链"；展示"DeFi 特化链"差异化定位及 Twin Turbo 共识技术路线
- [[来源_2025-08_稳定币公链_分销_收益_Arc_Tempo_深潮TechFlow]] — 稳定币专用 L1 新品类：Circle Arc/Stripe Tempo/Tether Plasma/Ethena Converge 四线并行，竞争维度从"TPS 竞赛"切换为"结算基础设施控制权争夺"；技术壁垒接近零，分销网络是唯一真实壁垒
- [[来源_2022-08_Web3参考架构_三层模型_路线图_登链社区]] — 2022 年即观察到 L1/L2 协议分化的早期格局：以太坊承载 Web3 交互主要份额，Solana/Cardano 作为竞争者被关注，"更加平衡的 L1/L2 协议生态系统"被预测为 Web3 成熟标志
- [[来源_2025-02_ETH卷土重来_DeFi投资者]] — 2025年2月ETH vs SOL竞争态势更新：Solana在收入和DEX交易量上已超越以太坊、Solana无L2代币分散需求→买SOL即押注Solana生态（vs ETH被L2代币分流）
- [[来源_2022-09_机构投资者访谈_火币研究院]] — 2022年机构对新L1链的两个创新亮点评价：Move编程语言（更安全、更低门槛、更好可组合性、比Solidity门槛低）可能价值超越基于它的L1链本身；并行处理技术（Aptos 16核CPU多线程处理无关事务）预示L1链标准转变趋势，类比2018年后所有L1链采用POS共识机制
- [[来源_2025-02_VanEck_加密货币月度回顾]] — Sonic(S)作为Fantom转型L1的实战数据（TVL $10亿/FeeM 90%返佣/$1.32亿空投），以太坊收入份额55%→24%显示L1竞争烈度
- [[来源_2022-06_周期_加密市场_下一轮_tolks]] — 2022 年中非 ETH L1 竞争格局全景：作者明确看好 SOL 为"最可能赢家"，NEAR 为"最感兴趣的 L1"，AVAX 子网架构巩固 EVM 测试场地位；LUNA 崩溃后 ATOM 生态可能受益；DOT 开发活跃但未转化为实际影响
- [[来源_2025-03_Solana_Base_稳定币支付_Squads]] — 稳定币支付作为L1竞争新维度：Solana和Base在支付赛道对决分析
- [[来源_2022-07_10个新Layer1_熊市布局_Odaily]] — 2022年熊市初期10条未发币新L1全景扫描
- [[来源_2025-07_Stripe_L1_传闻_深潮TechFlow]] — 支付巨头Stripe可能自建L1的系统性猜想（2025年7月），展示了"支付公司自建L1"这种不同于通用公链的竞争逻辑：技术性能不重要，核心是分发网络和支付场景垂直整合。Tempo（Stripe稳定币专用L1）后来证实了这一方向（Aptos/Sui/Linera/Canto/Gear/Celestia/Aleo/Anoma/Iron Fish/Monad），展示了这些项目"萌芽期"的原始状态：融资规模、技术叙事、团队背景——与2024-2025年这些项目的成熟状态形成鲜明对比，验证了"一级市场批量押注，最终只有少数活下来"的规律
- [[来源_2025-03_以太坊_Solana_BNBChain_三链对比_深潮TechFlow]] — 三链对比分析：浏览器发展史类比、BNB Chain 440万活跃地址、Solana 人效比超越
- [[来源_2025-07_BNB_Chain_新叙事_200天_BlockBeats]] — BNB Chain 2025 年上半年全面崛起：DEX 市占率 80%、DAU 209 万、MAU 2779 万、PancakeSwap/Aster/Four.meme/Lista 生态爆发、机构 RWA 入场
- [[来源_2025-03_新公链_稳定币_顶级项目_PANews]] — Initia、Fogo、Snapchain三种新L1竞争策略分析
- [[来源_2025-05_Outlier_Q1融资报告_L1基建_深潮]] — 2025年Q1 Networks类别融资中位4510万美元（受Binance 20亿美元影响），L1公链和扩展性项目仍为资本"重镇"，机构分配者和战略基金保持对L1的高度兴趣
- [[来源_2025-03_交易生命周期_以太坊_Solana_Aptos_PANews]] — 从交易生命周期视角深度对比乐观并行（Aptos Block-STM）与确定性并行（Solana Sealevel）两种执行路径的技术分化
	- [[来源_2022-08_核心赛道_演变_VC视角]] — 2022年中L1竞争格局快照：Aptos/Sui主网未上线时估值已达3B/2B，技术定位为"并行处理+不宕机"；Cosmos在Terra崩盘后仍安全运行吸引dYdX等项目迁移；亚洲基金难以投到硅谷/大湾区的公链项目，"还得是润到北美"
- [[来源_2025-06_BNB_Chain_财富密码_Binance_Alpha_深潮TechFlow]]
- [[来源_2025-04_CoinGecko_Q1加密货币行业报告]] — CoinGecko Q1报告L1竞争数据：Solana DEX市场份额Q1平均39.6%（交易量$2937亿，+35.3%），1月达52%峰值（以太坊首次跌破20%），但3月以太坊以30.1%反超Solana 23.4%；新进入者Sonic和Berachain挤入DEX交易量前10；以太坊主导地位跌至7.9%（2019年底最低） — BNB Chain 2025年5月 DEX 交易量 1,782.28 亿美元全链第一（历史新高），7日活跃地址增长率 7.25% 领先以太坊（4.86%）、Solana（3.02%）、Tron（3.01%）；稳定币月活突破 1,530 万（+40% MoM）；区块速度降至 0.75 秒，2025 路线图"亚秒级延迟+Gasless体验"持续兑现
- [[来源_2025-02_BNB路线图_生态潜力_BlockBeats]] — 2025年2月 BNB Chain 早期复苏信号：5亿地址数、2025技术路线图（多代币Gas/项目方赞助Gas/AI开发工具）、CZ回归后积极发声"BNB Chain被禁锢太久"、生态全线上涨（CAKE/BNX/BAKE/Thena/LISTA)
- [[来源_2025-07_公链数据_以太坊_Base_Hyperliquid_PANews]] — 2025年Q2 8条主流公链横向对比数据：以太坊ETF净增50亿美元但TVL中ETH量降21%；Solana链上资金净流出1.12亿；BSC日活+74.6%；Base TVL+63%但净流出56亿至以太坊；Hyperliquid TVL+202%
- [[来源_2022_新公链_Layer1_概述_多链接]] — 2022 年新 L1 导航式汇编，涵盖 12 条未发币 L1（Aptos/Sui/Linera/Canto/Gear/Celestia/Aleo/Anoma/Iron Fish/Monad/zkSync）的多源链接索引，反映当时中文市场以技术路线（Move/模块化/隐私/并行 EVM）为核心叙事框架的认知状态
- [[来源_2025-03_ETH卷技术_Solana卷代币_LaoBai]] — Lao Bai提出"ETH卷技术卷扩容，Solana卷代币卷应用"的对比叙事：ETH以Native Rollup为代表追求核心技术创新，Solana以Token Extension为代表追求应用场景扩展；两者在Native Rollup/Ephemeral Rollup技术路线上意外"汇合"——用户无需切换网络、资产无需桥接、流动性无孤岛
