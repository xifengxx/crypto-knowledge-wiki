---
type: concept
created: 2026-06-28
updated: 2026-07-02
tags: [layer2, ethereum, scaling, rollup]
aliases: [L2, Layer 2, 以太坊二层网络]
---

# Layer 2（以太坊二层扩容）

## 一句话定义
构建在以太坊 L1 之上的扩容方案，将交易执行移到链下，仅在 L1 上做最终结算和数据可用性，以此提升吞吐量、降低 Gas 费。

## 核心技术路径

| 方案 | 代表项目 | 原理 |
|------|---------|------|
| **Optimistic Rollup** | Arbitrum, Optimism | 默认信任，7 天挑战期 |
| **ZK Rollup** | zkSync, StarkNet, Scroll | 零知识证明即时验证 |
| **Hybrid (ZK Fraud Proof)** | Optimism (evolving), BitVM2 | OP Rollup的低成本 + ZK单轮挑战，仅在争议时生成证明 |
| **Validium** | Immutable X | 数据可用性在链下 |
| **侧链** | Polygon PoS | 独立共识，非严格 L2 |

## 关键项目
- **Arbitrum** — TVL 最大的 L2，DeFi 生态最丰富
- **Optimism** — OP Stack 生态，Base 链底层
- **zkSync** — ZK 技术路线，Era 主网已上线
- **StarkNet** — STARK 证明，Cairo 语言
- **[[abstract-chain]]** — 消费级 L2，Pudgy Penguins 母公司 Igloo 开发，zk stack + EigenDA，2025 年 1 月主网上线，22 个生态项目以 NFT/游戏为主

## BTC L2 与 ETH L2 的关键差异

ETH L2（以 Rollup 为主）具有相对统一的技术范式，主要差异仅在数据有效性验证方式（OP vs ZK）。BTC L2 则完全不同（详见 [[来源_2024-01_BTC_L2_新形态_五类扩容方案_BlockBeats]]）：

| 维度 | ETH L2 | BTC L2 |
|------|--------|--------|
| 主网验证 DA | 原生支持 | **无法验证**（根本瓶颈） |
| 技术方案统一性 | 较高（Rollup 为主） | 极低（五类方案，实现千奇百怪） |
| 智能合约 | 图灵完备 | 非图灵完备，需绕道实现 |
| 安全性继承 | ZK Rollup 完全继承 | 所有方案都有信任假设，无法完全继承 BTC 安全性 |

核心矛盾：所有 BTC L2 都试图"形似"ETH Rollup，但受限于 BTC 脚本的非图灵完备性和无法原生验证 DA，只能在不可能三角间取舍。

### 共享共识安全 —— BTC L2 的正统性标准（2024年新框架）

BEVM Super Bitcoin 白皮书提出：**无法共享比特币共识安全的比特币Layer2都得死。** 核心逻辑：

- ETH L2（Arbitrum/zkSync/BASE）没有独立共识，依赖定序器向主网排序、最终由主网保障安全 → 用户信任 ETH L2 = 信任以太坊安全
- 几乎所有 BTC L2 都是"多签钱包 + 独立共识的链"，与 BTC 共识无关 → 用户无信任基础 → TVL 和市值远低于理论值
- BTC 网络攻击成本（>2000 亿美金）是 ETH（~460 亿美金）的 4 倍以上，理论上 BTC L2 估值应更高，但实际 BTC L2 TVL（14.5 亿）/ ETH L2 TVL（360 亿）= 1/30
- 闪电网络是唯一共享 BTC 共识安全的 L2，无代币激励仍长期保持 ~5,000 BTC 流通

这一框架对 L2 投资分析有重要参考价值，但需注意其提出者 BEVM 存在利益冲突（该框架直接导向其 Super Bitcoin 方案）。

## 核心批判：L2突破主链资源依赖的困境

关键问题是：所有需要将交易数据发布到主链的L2方案（ZK-Rollup、Optimistic Rollup）仍然占用主链资源（Calldata/blob空间）。其可扩展性受制于主链资源容量。这与闪电网络等状态通道（仅在链上锁定和结算，不在主链发布中间交易数据）有本质区别。

基于[[来源_2022-09_PoW_PoS_阿剑_ForkIt]]的分析：ETH2.0 Merge后Vitalik通过blob-carrying transaction扩大每个slot承载的数据量(通过纠删码让PoS见证者检查L2区块)，本质是"大区块"路线的变体。即使引入了EIP-4844，L2的扩容效果依然是通过在主链上提供更多数据空间来实现，并没有从根本上脱离"大区块"范式。

## 相关概念
- [[bitcoin-ecosystem]] — BTC L2 同为扩容方案，但面临更根本的技术瓶颈
- [[defi]] — L2 是 DeFi 的主要运行环境
- [[data-availability]] — L2 依赖 DA 层发布数据
- [[celestia]] — 模块化 DA 链
- [[account-abstraction]] — L2 低 Gas 使 AA 钱包可行

## 2025 预测（Equilibrium Research）
- L2/L3 从 120→2,000+（应用特定+企业级 L2）
- 以太坊扩容倍数 25x→200x
- ZK 扩容方案将超越 Optimistic（按部署数计）
- 以太坊 Gas Limit 30m→60m（Fusaka 升级）

## L2 运营成本经济学（2024 基准）

EIP 4844 实施前，L1 结算/DA 成本占 L2 总成本基础的 **高达 98%**。EIP 4844 通过 Blob 机制将主要 L2 的中位数 gas 费用降低了 **90%+**。此后运营一条链的月成本：

| 链类型 | 月固定成本 | 排序器利润分成 |
|--------|-----------|--------------|
| Optimistic Rollup（RaaS） | $3,000-$4,000 | 3-5% |
| ZK Rollup（RaaS） | $9,500-$14,000 | 3-5% |
| 200 万笔交易/月 optimistic 链（含 DA） | $4,000-$6,500 | — |
| 200 万笔交易/月 ZK 链（含 DA） | $10,500-$16,500 | — |

1 亿笔交易/月的标准 rollup 仅在 L1 成本上就可达 $25,000/月。替代 DA 层（Celestia、EigenDA、NearDA）可将此成本降低数个数量级，且节省幅度随交易量呈指数增长。

## L2 早期竞争格局（2022 年中）

2022 年 7 月的数据提供了 L2 赛道的早期快照（[[来源_2022-07_StarkWare_80亿美元估值_以太坊扩容]]）：

- 整个 Layer2 赛道总锁仓量 49.5 亿美元，仅占以太坊总锁仓量（680.7 亿美元）的 7%
- StarkWare 支持的应用占 L2 市场份额 21.32%，Arbitrum 占 53.54%
- StarkWare 收入高度集中于 dYdX（占 90%），dYdX 的 Cosmos 迁移被视为 L2 叙事转折点
- StarkEx 采用独特的"扩容即服务"（scaling as a service）商业模式，与多数 L2 通过运营节点收费的模式不同
- zk rollup 链上模式 tps 上限约 2000，Validium 模式可达 9000+；但实际体验中 dYdX 创始人称 tps 更像 30

### L2 萌芽期竞争快照（2021 年 11 月）

在 2022 年中数据之前，[[来源_2021-11_Layer2介绍_ZK_OP_Rollup_Wayne]] 提供了更原始的 2021 年 11 月快照：
- Arbitrum 上线约 2 个月即处理超 300 万笔交易；Optimism 同期约 20 万笔（约 15 倍差距）
- StarkEx TVL 超 10 亿美元、5100 万笔交易、2150 亿美元累计交易量；zkSync 仅支付场景成熟
- OP 内部：Optimism 刚完成首次网络升级，地址数飙升但应用极少；Arbitrum 靠土狗项目吸引用户和资金
- 该文对排序角色的通俗解释（"操作员只负责把交易排个顺序"）和三明治攻击作为排序攻击的说明，构成了 L2 早期讨论的标志性叙事

### Arbitrum 奥德赛事件：L2早期阵痛
2022年，Arbitrum开启奥德赛（Odyssey）活动第二阶段第一天，由于链上繁重负载导致高于正常的Gas费用，Arbitrum宣布暂停该活动。**令人尴尬的是，Arbitrum最主要目标就是大幅降低Gas费用以提升用户体验**。CGV Research将此事件作为证据，认为Layer2仍处于非常早期的阶段，Optimism和Arbitrum网络相继遭遇重大问题，各种bug的出现可能成为常态化事件。

这一事件也是推动**模块化区块链**叙事升温的催化剂——CGV将"不可能三角"（安全性、可扩展性、去中心化程度难以兼得）作为模块化公链的核心出发点，认为未来堆栈将分解为数据可用性和一致性、块验证和构造、事务排序和块提议、以及多用途或定向计算等独立模块。

参见 [[来源_2022-07_加密牛市_十大叙事_CGV]]。

## L2 技术栈战争与经济模型

各大 L2 通过开源技术栈争夺链构建者，并通过收入分成模型获利：

| 生态 | 技术栈 | 收费模式 |
|------|--------|---------|
| Optimism | OP Stack（Superchain） | 排序器收入 2.5% 或排序器利润 15% |
| Arbitrum | Arbitrum Orbit | 排序器利润 10%（L3 免费） |
| Polygon | Polygon CDK | 目前免费 |
| ZK Sync | ZK Stack（Elastic Chain） | 目前免费 |

Optimism 和 ZK Sync 各自提供 $2,200 万生态赠款争夺项目。盈利后排序器利润分配可高达 20%。

## Arbitrum 2025: 双产品战略与 Stage 1 去中心化

Arbitrum 在 2025 年的关键进展凸显了 L2 赛道的成熟方向：

**BoLD 与 Stage 1 去中心化**
- BoLD（有限流动性延迟）于 2025 年 2 月上线，引入无需许可的防欺诈系统
- Arbitrum One 达到 L2Beat Stage 1，满足全部五个条件：功能性防故障系统、至少五名参与者可提交错误证明、无需许可的桥梁、运作中的安全理事会、升级延迟至少 7 天
- 截至 2025 年 5 月，仅 Arbitrum One 和 Kinto 达到 Stage 1
- 还满足 Stage 2 三个要求中的两个

**Orbit 生态爆发**
- 截至 2025 年 5 月 31 日，48 条已主网上线的 Arbitrum Chains，38 条测试网/开发中
- 累计 110 万周活跃地址，TVL 137 亿美元，18.9 亿笔总交易
- 占所有 L2 交易的 31.8%

**MEV 协议化捕获**
- Timeboost 将 MEV 通过协议拍卖返还 DAO，上线 44 天收入超 100 万美元

详见 [[来源_2025-07_Arbitrum_双产品_Messari]]。

## L2 对以太坊 L1 价值捕获的侵蚀（2025年视角）

以太坊 Rollup 中心路线在缓解主链压力的同时，也造成大量交易和价值停留在 L2 网络，未能回流主网。渣打银行在2025年初的一份报告中直言，L2 分流已对以太坊主链的价值捕获构成结构性侵蚀——仅 Coinbase 推出的 Base 一条 L2，就被估算"拿走"了约 **500亿美元** 的以太坊生态市值（[[来源_2025-07_以太坊十年_世界计算机_PoS转型_BlockBeats]]）。

Dencun升级（EIP-4844）后这一趋势进一步加剧：blob 交易大幅降低了 L2 向主网提交数据的费用，Arbitrum、Optimism 等 Rollup 的日交易笔数多次超越甚至超过主链。这一现象印证了"以太坊把交易执行外包出去"的图景，但也引发广泛担忧：如果不主动调整协议费和 MEV 分配机制，主链可能退化为单纯的"清算层"，价值与活力被不断稀释。

## 来源
- [[来源_2025-07_以太坊十年_世界计算机_PoS转型_BlockBeats]] — 渣打银行估算Base一条L2"拿走"约500亿美元以太坊生态市值、Dencun后L2日交易笔数超越主链、主链价值捕获被侵蚀的结构性分析
- [[来源_2023-12_ORDI_比特币生态_BRC-20_L2_RGB_BlockBeats]] — BTC L2 vs ETH L2 估值差视角：2023 年底 BTC L2 千万美元 vs ETH L2 十亿美元，~100 倍差距；以太坊 L2 团队转向比特币蓝海的竞争策略逻辑；Stacks/Liquid/Rootstock 四大 BTC L2 方案简述
- [[来源_2023-12_以太坊铭文_ETHS_Ethscriptions_Facet_深潮TechFlow]] — ETHS/Facet 类 L2 方案的技术批判：缺少状态结算→去信任提现不可行；从反面定义了"什么不是真正的 L2"
- [[来源_2024-12_Equilibrium_2025年20个预测]]
- [[来源_2023-03_Arbitrum详解_Optimistic_Rollup_火币研究院]] — Arbitrum 技术架构（多轮欺诈证明/Nova/Nitro/Stylus）+ ARB 代币经济 + DeFi 生态飞轮 + 奥德赛活动数据
- [[来源_2024-09_数据中的L2_戛然而止的增长_淘汰赛开启]] — L2淘汰赛/60+条链/ZkSync从天王到天亡
- [[来源_2025-01_Base_七次破圈_Solana外最强公链]] — Base 1.5年七次破圈成ETH第一L2
- [[来源_2024-10_Uniswap_Unichain_UNI质押验证者网络]] — Unichain=UNI做链/Flashblocks 250ms
- [[来源_2024-10_Base创始人Jesse答社区100问]] — Base 定位从"不止是 L2"升级为"全球链上经济"、隐私作为 L2 技术升级新方向
- [[来源_2024-10_World_Network大更新_WLD赋能困局_Odaily]] — World Chain OP Stack/免Gas L2
- [[来源_2024-02_GSR数字资产参考包_Web3入门指南_BlockBeats]] — 四大扩容方案对比/模块化区块链四功能/Rollup排序器集中化风险
- [[来源_2023-04_Bankless_五大新兴L2项目_交互指南]] — 2023年初新兴L2快照：Base/Fuel/Linea/Scroll/Taiko五个项目早期状态、技术路线和测试网交互方法；记录zkEVM叙事爆发期的竞争格局
- [[来源_2023-03_zkSync_Lite_Era_交互指南_MingoAirdrop]] — 2023 年初 zkSync 空投 farming 实操指南：用户通过测试网交互和生态项目使用争取空投奖励的典型行为模式
- [[来源_2024-01_BTC_L2_新形态_五类扩容方案_BlockBeats]] — BTC L2 五类方案系统分类+与 ETH L2 的关键差异（主网无法验证 DA 是根本瓶颈）
- [[来源_2023-04_Web3用户增长_市场周期_新叙事_CoinVoice]] — 2023年初Arbitrum TVL $1B/Optimism $500M，L2日常链上活动已超大部分L1竞争者；zkEVM、模块化层和L3被列为下一阶段重点方向；预计L2和模块化为ETH带来新价值堆叠
- [[来源_2024-12_Abstract_Chain_22个生态项目_PANews]] — Abstract Chain 消费级 L2 生态盘点：22 个项目以 NFT/游戏为主，2025 年 1 月主网上线，代表 L2 从"DeFi 同质化竞争"向"消费级差异化"的转型案例
- [[来源_2024-09_运行自己链的成本_L2经济学_RaaS_深潮TechFlow]] — EIP 4844 前后 L2 成本量化
- [[来源_2024-08_以太坊VC基建痴迷_EBOLA_Solana_BlockBeats]] — EBOLA 批判视角：L2 基础设施已成为 VC 基金经济学驱动的高 FDV 叙事载体，"专门提高 TPS 以支持 NFT 社区的 EVM L2"偏离为全球货币打造 TCP/IP 设施的初心：L1 成本占比从 98% 降至 90%+降幅；RaaS 月费 optimistic $3-4K / ZK $9.5-14K；L2 技术栈收入分成模型（OP 2.5%/15% vs Arbitrum 10% vs ZK 免费）
- [[来源_2025-01_MegaETH_Monad_Hyperliquid_高性能区块链对比_PANews]] — MegaETH 作为 L2 的性能天花板（1-10ms 出块/10 万+ TPS）及其代价：中心化排序器 + 继承以太坊 7 天 L1 结算延迟，是 L2 "速度 vs 去中心化"三难困境的具体案例
- [[来源_2025-03_MegaETH_实时区块链_StanfordReview]] — MegaETH 团队第一手技术说明：JIT 编译消除 EVM 解释执行瓶颈、全内存状态将磁盘 I/O 从 80%+ 降至约 10%、精确量化 Merkleization 9.3x 降速因子和实时同步 14x 降速总量
- [[来源_2024-09_L2_Solana_Appchain_应用部署选择_Web3Caff]] — 开发者部署决策视角：通用 L2 以安全继承和可组合性取胜但存在"吵闹邻居"拥堵和 MEV 收入外泄问题，应用链通过定制化和排序收入内化弥补通用 L2 短板，但需权衡启动复杂性和互操作冷启动
- [[来源_2023-12_Dencun升级_以太坊_EIP-4844]] — EIP-4844 引入 Blob 携带交易替代 Calldata，Calldata 占 L2 费用 80%+，预计容量提升 38-192 倍、最多容纳 384 个 Rollup、正常 175 TPS；但也引发 Rollup 收入分流 L1 的担忧（@zen_llama 论点）
- [[来源_2025-01_以太坊路线图_Pectra升级_DevCon_PANews]] — Pectra 升级 EIP-7691：Blob 目标 3→6、上限 6→9 进一步降低 Rollup 成本；Rollup 互操作性两大竞争方案（Based Stack vs 共享排序器）；L2 成熟度现状（仅 Optimism/Arbitrum 达 Stage 1）
- [[来源_2023-12_铭文狂热_BTC_L2_Tectum_BEVM]] — 铭文狂热推动 BTC L2 叙事升温：STX/Rif 两位数涨幅；Tectum（SoftNote 票据化 BTC 支付，零费用即时转账）和 BEVM（EVM 兼容 BTC L2，BTC 为 Gas）两早期项目代表"体验优先于正统性"的 BTC 扩容设计理念
- [[来源_2024-08_Corn_BTCN_Gas_以太坊L2_深潮TechFlow]] — Corn 作为以太坊 L2 以 BTCN 为原生 Gas 的差异化案例：在 60+ 条 L2 的拥挤赛道中通过 BTC 映射代币作为 Gas + ve 双代币治理模型寻求突围，$6.7M 种子轮（Polychain + Binance Labs），代表 L2 赛道从"技术同质化竞争"向"叙事差异化"的转型
- [[来源_2023-12_多Rollup世界_基础设施_SevenX]] — SevenX Ventures 多 Rollup 世界四大基础设施支柱：安全基础（L2 交易生命周期四阶段信任假设与风险拆解）、可定制性与互操作性平衡（结算中心简化拓扑/碎片化到三大结算中心）、成本分析（DCF 模型：收入-费用>初始投资）、共享安全性（EigenLayer 三类信任 vs Babylon vs ICS vs Mesh Security）
- [[来源_2023-08_L2进化趋势_Superchain_L3_Hyperchain_币安研究院]] — 2023 年中三大 L2 路线分化（Superchain/L3/Hyperchain）+ 五大玩家横向对比：Arbitrum TVL $5.9B 占 60%+，OP $2.2B 占 23%，zkSync Era $625M+；Bedrock 降费 77%+；L2 竞争三维度（软件可定制性/交易费排序器/治理代币）
- [[来源_2024-02_比特币二层Layer2_基础知识体系_BlockBeats]] — 付少庆从系统结构角度将BTC L2分为三类：基于链（EVM兼容侧链/Rollup）、基于分布式系统（闪电网络/RGB）、基于中心化系统（Ordinals索引器），提供区别于五分类法的底层架构视角；L1-L2连接技术总结（跨链/隔离见证/侧链/State Channel/Plasma）
- [[来源_2024-10_The_Surge_以太坊扩容_Rollup_Vitalik]] — Vitalik 2024.10 The Surge 完整愿景
- [[来源_2026-06_去中心化排序器_Rollup_Sequencer_Lumoz]] — 排序器中心化风险与五大去中心化方案（Espresso/Astria/SUAVE/Radius/Metis）技术拆解
- [[来源_2024-04_ZK模块化新星_Lumoz_RaaS_PANews]] — Lumoz ZK-RaaS 平台全景
- [[来源_2025-02_传统大公司_以太坊_RWA_NFT_深潮TechFlow]] — Galaxy Research 调查报告：传统大公司自建L2的新趋势——德意志银行与Matter Labs合作开发DAMA 2 L2（基于ZKsync，新加坡MAS+24家金融机构联合倡议）、索尼基于OP Stack推出Soneium L2网络；L2的机构定制化需求（隐私保护、可审计性、合规性）正在从加密原生扩展到TradFi；链游公司（Atari/Lamborghini/Lotte）在Base和Arbitrum上发行NFT和游戏资产，利用L2可扩展性优势：ZK-Rollup 三大技术瓶颈（ZKP 计算成本/硬件门槛/zkEVM 复杂性）及 ZK-PoW + ZK-RaaS 解决方案，Lumoz 类比为 ZK 赛道 AltLayer
- [[来源_2025-01_以太坊Gas限制之争_区块上限_验证器_MEV_深潮TechFlow]] — L1 Gas 上限提高（3000 万→3600 万→6000 万）作为 Rollup 之外的 L1 扩容路径：与 blob 扩展的 L2 路径本质不同，揭示以太坊社区内 L1 扩展 vs Rollup 为中心的路线张力：DAS 数据层/数据压缩/Generalized Plasma/L2 证明三阶段成熟度（Stage 0/1/2）/跨 L2 互操作性（ERC-3770/ERC-7683/Keystore钱包）/L1 扩展三策略；关键数据：Dencun 后 L2 TPS ~173-607，中期目标 58,000 TPS；Plasma 与 Rollup 互补而非替代
- [[来源_2023-07_Rollups即服务_RaaS全景指南_BlockMagnates]] — 2023 年中期以太坊 L2 RaaS 生态快照：OPStack（Base 底层基础设施）、Arbitrum Orbit（L3 战略+Stylus 多语言支持）、StarkNet Slush（zkVM L3 SDK）、zkSync Hyperchains（无许可分形扩展+临时执行环境）、Caldera/Conduit（一键部署），OP Labs 愿景将 RaaS L2 定位为以太坊的"实验层"
- [[来源_2024-10_Unichain_胖应用_DeFi演进_BlockUnicorn]] — L2 价值积累问题量化：100+ L2 碎片化流动性、L2 仅消耗 0.9% 以太坊 Gas、EIP-4844 进一步降低 L2 对主网经济贡献；"L2 寄生以太坊"批判（Jon Charboneau: "L2 是以太坊，就像说特斯拉是加利福尼亚"）；应用做链的双重价值创造（MEV 内化+代币经济学升级）
- [[来源_2025-07_Arbitrum_双产品_Messari]] — Messari 2025 年 7 月研报：Arbitrum 双产品战略（One + Orbit）、BoLD Stage 1 去中心化、Timeboost MEV 捕获机制、48 条 Orbit 链生态数据
- [[来源_2023-02_Rollup_ZKRollup_Optimistic_Arbitrum区别_Future小哥哥]] — 入门级科普：Rollup/ZK Rollup/Optimistic Rollup/Arbitrum 四种概念的区别与类比解释（VIP签名块、代表推荐制、节假日高速收费站等比喻），ZK 四特点（Zero Knowledge/Succinct/Non-Interactive/Argument of Knowledge），OP 与 ZK 本质差异（信任性验证 vs 人人可参与 PoW 认证）
- [[来源_2024-08_十二大新公链_高估值速览_ChainCatcher]] — 2024 年 8 月 L2 赛道融资快照：Scroll $8000 万（zkEVM+EIP-4844）、Eclipse $6500 万（SVM L2+Celestia DA）、GASP $1100 万（跨 Rollup 协议/逃生舱口/无封装代币）；L2 占加密市场 6.67% 市值，24h 涨幅 +6.66%；三条 L2 分别代表 ZK 扩容、模块化组合、跨 Rollup 互操作三种差异化路线
- [[来源_2024-03_Eclipse_5000万_A轮_测试网交互_BlockBeats]] — Eclipse $50M A 轮（Placeholder/Hack VC 领投），累计 $65M；主网计划 2024 Q2；测试网交互指南（OpenBook DEX + Clone Markets）；融资结构从 Solana 生态 VC（Polychain/Anatoly）扩展到通用顶级 VC（Placeholder/Hack VC）
- [[来源_2024-10_共享比特币共识安全_BTC_Layer2困境_Web3CN]] — 引入"共享共识安全"作为L2正统性评判标准：BTC L2必须共享BTC共识安全才能获得用户信任；量化BTC L2 vs ETH L2的TVL差距（30倍）和市值差距（5-10倍）；闪电网络被定位为唯一达标案例
- [[来源_2024-03_并行EVM四杰_Monad_Sei_Neon_Eclipse_Foresight]] — Eclipse 作为模块化 L2 的极致案例：ETH 结算 + SVM 执行 + Celestia DA + RISC Zero ZK 的四层解耦；通过集成 Neon EVM 提供 EVM 兼容性，计划 EIP-4844 后可能迁移到以太坊 DA
- [[来源_2022-08_Web3参考架构_三层模型_路线图_登链社区]] — 将 L1/L2 区分纳入 Web3 架构的区块链内核子模块，指出可扩展性是七大薄弱环节之一，以太坊升级承载 Web3 交互主要份额，Solana/Cardano 等 L1 竞争者的进展同样值得关注
- [[来源_2025-02_ETH卷土重来_DeFi投资者]] — L2数量爆炸（100+）从"生态繁荣"变为"流动性碎片化"危机：跨L2 UX被指认为mass adoption首要障碍、L2代币泛滥被指控为分散ETH投资需求的关键原因、建议L2销毁部分手续费回馈L1
- [[来源_2023-10_BitVM_比特币计算_图灵完备_BlockBeats]] — BTC 乐观 Rollup 的早期里程碑
- [[来源_2025-03_BitVM_欺诈证明_ZK_Fraud_Proof_PANews]] — 欺诈证明技术微观机制拆解：Optimism的OutputRoot/StateRoot、MIPS虚拟机（32位/2^27地址28层Merkle Tree内存）、FDG交互式欺诈证明两级GameTree定位争议指令、ZK Fraud Proof作为OP+ZK混合方案：BitVM 通过 Taproot+欺诈证明实现图灵完备而无需修改共识，揭示 BTC L2 与 ETH L2 的根本差异——BTC 主网无法原生验证 DA，BitVM 仅在争议时才上链，与 ETH Rollup 的持续验证模型本质不同
- [[来源_2024-04_NegentropyCapital为什么投资TaprootChain_BlockBeat]] — OP Stack 在 BTC L2 的具体应用案例：TaprootChain 证明 OP Stack 可作为 BTC Rollup 框架，Taproot Bridge（Schnorr+Tapscript+时间锁）提供去信任跨链方案，同时揭示 BTC L2 普遍采用的 POS/POA 侧链方案存在节点作弊和数据存储成本高的结构性问题
- [[来源_2025-01_2024年空投149亿美元_Dropstab_PANews]] — Dropstab 2024年空投赛道分布：L2以$42.2亿（28.3%）位居空投第一大赛道，领先DeFi（$33.1亿/22.2%）和L1（$26.3亿/17.6%），反映L2项目数量爆发和"发币即空投"的行业惯例
- [[来源_2022-07_模块化执行_Fuel_UTXO_并行交易]] — 全面介绍 Fuel 模块化执行层：最早以太坊 Optimistic Rollup、UTXO 模型并行执行、V1 仅 21 笔交易/< $10 TVL 的早期失败案例、John Adler 双联合创始人（Fuel + Celestia）的模块化协同
- [[来源_2022-03_Web3_漫游指南_全面解读]] — 系统梳理区块链扩容的七大技术路径（L1优化、L0建设、状态通道、侧链、Plasma、Optimistic Rollup、ZK-Rollup），并对比分析各主要公链（以太坊/Solana/Polkadot/Cosmos/Avalanche/Cardano/Near/Polygon/Algorand）的竞争策略和技术选择。提供2022年初L2赛道的完整历史视角
- [[来源_2022-09_PoW_PoS_阿剑_ForkIt]] — 深度批判L2方案依赖主链资源的问题：ZK-Rollup/Optimistic Rollup需要通过Calldata发布交易数据到主链，可扩展性受制于主链资源容量；Vitalik的blob-carrying transaction路线本质是大区块路线的变体
- [[来源_2022-09_公链_扩容_一超多强_BuidlerDAO]] — 系统对比了五种Layer2方案（状态通道/Plasma/Op-Rollup/ZK-Rollup/Validium），详解Op-Rollup欺诈证明机制和ZK-Rollup的三阶段发展路径（SNARK/STARK/Bulletproofs）；记录以太坊从分片转向"以Rollup为中心"的路线变迁及Vitalik《Endgame》文章的核心论断
- [[来源_2022-07_StarkWare_80亿美元估值_以太坊扩容]] — 2022 年中 L2 赛道早期快照：TVL $4.95B（ETH 的 7%）、StarkWare 21.32% vs Arbitrum 53.54% 市场份额、"扩容即服务"商业模式、dYdX Cosmos 迁移事件
- [[来源_2022-09_机构投资者访谈_火币研究院]] — 2022年熊市中20+机构投资者对ZK Rollup的一致偏好（几乎所有受访机构看好ZK而非OP Rollup），多个机构认为OP仅有中短期价值而长期无价值；ZK被类比为区块链的机器学习
- [[来源_2025-04_比特币生态_RWA赛道_Web3全景_PANews]] — Infinity Labs L2数据：Arbitrum TVL $150亿/Rollup市占55%/欺诈证明7天延迟、Blast $50亿TVL/多签争议、zkSync LLVM编译器Rust开发支持/3.5亿基金、Scroll完全EVM字节码兼容/DApp数800+/9个月、Merlin Chain $2.5B TVL/双挖机制、OP Stack阵营vs Starknet/Scroll竞争格局
- [[来源_2025-06_Circle_IPO_Coinbase_风险_Artemis]] — Base 排序器经济量化数据：周毛利润约 100 万美元，利润率约 90%，占所有以太坊 L2 毛利润 75%+；但与 Solana 的用户规模差距显著（Solana 日活 3 倍、日交易量 7 倍）；Base 的核心限制来自模块化 L2 架构的流动性碎片化
- [[来源_2022-06_周期_加密市场_下一轮_tolks]] — 2022 年中 L2 格局：Optimistic Rollup 短期优势 vs ZK Rollup 长期最优解；Arbitrum TVL $2.65B（领导者），Optimism $492M（刚发 OP 代币）；StarkWare 以 $8B 估值融资 $1B，zkSync 2.0 在测试网；Aztec Connect 将上线，IMX 是 ZKR NFT/游戏领跑者
- [[来源_2022-07_以太坊_L2_Rollup扩容方案_综述]] — 2022 年中 L2 赛道全景：Rollup 四分类（验证方式 x DA）、Optimistic vs ZK 路线对比、各项目 TVL/估值/生态数据、Vitalik 对 ZK 长期胜出的判断、RaaS 叙事早期形态
	- [[来源_2022-08_核心赛道_演变_VC视角]] — 2022年中ZK-EVM推进阶段快照（Language级Starkware / Bytecode级Polygon Hermez+Scroll+zksync / Consensys级"有生之年"）；Starkware递归性有望在L2上无限套娃建立L3/L4 App Chain；OP Rollup虽快但慢+贵，大方向为ZK Rollup
- [[来源_2023-06_BTC_L2_闪电网络_Stacks_RGB]] — 2023年中 BTC L2 全景扫描：前四大 BTC L2 合计 TVL 仅 3.5265 亿美元（BTC 市值 0.06%），对比 ETH L2 同期数倍渗透率；闪电网络、Stacks、RSK、Liquid、RGB、Rollkit、OmniLayer 七大方案简述
- [[来源_2025-03_传统金融与链上金融_DeFi交汇_深潮TechFlow]] — 2025年初DeFi综述提及L2数据：Arbitrum和Optimism TVL达数十亿美元、Base占约2.8% DeFi TVL、以太坊Gas费从峰值下降约98%，量化L2对DeFi大规模采用的关键推动作用
- [[来源_2023-02_ImmutableX_NFT_扩容_深潮TechFlow]] — StarkEx Validium 在 NFT 扩容领域的具体实现
- [[来源_2025-04_熊市_早期项目_申请_PANews]] — 补充Codex PBC：基于OP Stack构建的稳定币专用L2，完成1580万美元种子轮融资（Dragonfly领投），团队来自Meta、TikTok、Coinbase等，是L2应用链方向的新案例：9000 TPS、零 Gas、非托管；Immutable X 作为首批专注于 NFT 的 ZK-Rollup 方案的历史定位
- [[来源_2025-03_ETH卷技术_Solana卷代币_LaoBai]] — Lao Bai（ABCDE投研合伙人）深度分析Based Rollup和Native Rollup的演进路径与困境：Based Rollup（Puffer/Taiko）将排序权交给L1验证者可实现互操作性，但头部L2缺乏转型动力且验证者硬件负担增大会损害去中心化；Native Rollup（Justin Drake提出）通过预编译将证明系统交给L1验证者，本质是"重新发明分片"，ZK实时证明还需3-5年
