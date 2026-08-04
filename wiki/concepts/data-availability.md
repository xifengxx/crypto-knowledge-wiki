---
type: concept
created: 2026-06-28
updated: 2026-07-02
tags: [infrastructure, layer2, modular]
aliases: [DA, 数据可用性]
---

# 数据可用性（Data Availability / DA）

## 一句话定义
确保区块链的交易数据被公开发布、可被任何人验证。对于 Rollup 型 L2，DA 层是"公告板"——L2 交易数据必须发布到 DA 层供验证。

## 主要方案

| 方案 | 项目 | 说明 |
|------|------|------|
| **以太坊 DA** | Ethereum L1 | 最安全但最贵 |
| **模块化 DA** | Celestia | 专为 Rollup 设计的独立 DA 链 |
| **再质押 DA** | EigenDA ([[eigenlayer]]) | 用以太坊安全 + 高性能 |
| **ETH L2 DA** | DAC (Arbitrum AnyTrust) | 链下数据可用性委员会 |

## Vitalik 的 DA 政治战
Vitalik 通过四步试图将 DA 市场留在以太坊体系内：(a) 宣布不用 ETH DA 的不是真正 L2 → (b) 妥协称可为 Validium → (c) 用 ENS 域名解析做"软锁"（不用 ETH DA 的链无法兼容 ENS）→ (d) 复活 Plasma 叙事引导 ZK+Plasma 方向。本质是不想把 DA 费用分给 Celestia。

## 五大 DA 方案对比
| 方案 | 机制 | 验证者 | 成本 | 状态 |
|------|------|------|------|------|
| **Celestia** | DAS抽样+NMT, Optimistic证明 | 独立P2P网络 | 中 | ✅ 主网已上线 |
| **EigenDA** | KZG承诺+托管证明 | ETH验证者子集 | 中高 | 🟡 开发中 |
| **Avail** | Polkadot NPoS, KZG | 最多1000个 | 中 | 🟡 未上线 |
| **NearDA** | 继承Near安全性 | Near验证者 | 最低($0.0033/100kB) | ✅ 已上线 |
| **Covalent** | 永久存储+数据索引 | 独立 | N/A | ✅ 差异化 |

> 火币研究院预测：未来 7-8 家主要 DA 就够用，DA 市场不会一家独大。

## 2025 预测（Equilibrium Research）
>80% L2/L3 数据将发布到替代 DA 层（当前 35%）。由高吞吐量 Rollup（Eclipse/MegaETH→Celestia+EigenDA）和原生 Rollup 生态（Celestia/Avail）驱动。数据量较当前增长 10-30x。

## 竞争格局
以太坊 L1 → Celestia → EigenDA → Avail。DA 是模块化区块链堆栈中最关键的层之一。谁控制了 DA，谁就控制了 L2 的经济命脉。

## 相关概念
- [[layer2]] — L2 依赖 DA 层
- [[eigenlayer]] — EigenDA 是 EigenLayer 的旗舰 AVS
- [[cross-chain]] — DA 层的跨链验证

## DA 成本经济学（2024 基准）

L2 将交易数据发布到 DA 层是最大单项成本。在 EIP 4844 之前，L1 结算/DA 成本占 L2 成本的 **98%**。EIP 4844 引入 Blob（约 18 天后自动删除，不永久存储）后，L2 gas 费降低 90%+。但即便在 EIP 4844 后，处理 1 亿笔交易/月的标准 rollup 仅在 L1 成本上仍可达 **$25,000/月**。

使用 Celestia 替代以太坊作为 DA 层，成本可降低**数个数量级**，且节省幅度随交易量增加呈**指数增长**——这是为什么 >80% 的 L2/L3 数据预计将迁移到替代 DA 层的关键经济驱动因素。

## 来源
- DA 赛道分析文章
- [[来源_2023-02_Cosmos共享安全_模块化区块链_数据可用性_DecentralPark]] — DAS 机制深入解释：轻节点通过多轮随机采样区块数据子部分，直到达到预设置信度阈值；DAS 降低了 DA 层硬件要求 + 允许独立调整区块容量 → 费用更低；2023年初 DA 赛道四大方案：Celestia（激励测试网即将上线）、Laconic Network、Polygon Avail、EigenDA
- MT Capital Celestia vs EigenDA 研报
- [[来源_2024-01_HashKey_Capital_Web3投资赛道全解析_PANews]] — 2024年初 DA 赛道竞争格局：Celestia 上线拉高赛道估值，DA 本质是 to B 业务（收入与生态项目数量质量直接相关），EigenDA 定位特殊（与以太坊相关但不直接相关，可吸收中间客户），Bitcoin DA 等细分场景有机会
- [[来源_2024-09_运行自己链的成本_L2经济学_RaaS_深潮TechFlow]] — DA 成本量化：EIP 4844 前 L1 成本占 L2 成本 98%；Celestia 替代以太坊 DA 节省数个数量级且随交易量指数增长；1 亿笔月交易 rollup 的 L1 成本仍可达 $25K/月
- [[来源_2023-09_模块化区块链_7个神话_Avail]] — DAS 机制深入解释：轻节点随机采样→高概率 DA 保证、DAS + 递归有效性证明组合威力、共享 DA 层消除多链重复安全成本的经济逻辑
- [[来源_2024-01_数据可用性_科普_Avail]] — Avail 官方 DA 基础科普：DA 定义/为何重要/Rollup 对 DA 的依赖/以太坊 DA 成本 $1300-$1600/MB/DAC 信任风险/目的构建 DA 方案（Validium/Optimium 术语定义）
- [[来源_2023-12_Dencun升级_以太坊_EIP-4844]] — EIP-4844 提升以太坊自身 DA 能力：Blob 替代 Calldata 后 L2 成本大幅降低，但最高仅 350 TPS；专用 DA 层（Celestia/Avail）在成本上仍具指数级优势
- [[来源_2024-12_AI_Agent链化_CEX选币策略_PANews]] — AI Agent 专属 DA 新概念：需解决 LLM 语义记录/角色插件-DA 交互/多模态匹配/分层存储成本（短期-长期-工作记忆）四大难题，focEliza 以此为破局点
- [[来源_2023-12_多Rollup世界_基础设施_SevenX]] — DA 层深度对比：Celestia（DAS+欺诈证明）、Avail（DAS+KZG）、EigenDA（托管证明+惩罚机制）的安全与性能权衡；数据可用性证明桥接不同方案（Celestia blobstream optimistic 验证 vs Avail optimistic 验证 vs Succinct ZK 桥接 vs EigenDA 分散器聚合签名）
- [[来源_2025-01_以太坊Gas限制之争_区块上限_验证器_MEV_深潮TechFlow]] — EIP-7623 通过调整 calldata 价格将最坏情况区块大小从 2.58MB 降至约 1.2MB，是 Gas 上限提高的前提条件之一
- [[来源_2023-07_Rollups即服务_RaaS全景指南_BlockMagnates]] — RaaS 生态中各项目对 DA 层的不同处理方式：Celestia Rollkit 提供通用 DA 接口（含 Bitcoin DA 争议集成）、Arbitrum AnyTrust 使用链下 DAC 加 L1 故障回退、zkSync 提供 zkRollup/zkPorter/zkValidium 三种 DA 选择
- [[来源_2024-10_The_Surge_以太坊扩容_Rollup_Vitalik]] — 以太坊原生 DAS 路线图：PeerDAS（1D 采样）→ 2D 采样；Dencun 后每 slot 3 blob（~375 kB），中期目标 16 MB/slot（256 blob 目标 128）；三条长期路径：理想 2D DAS / 保守 1D DAS 接受低上限 / 放弃 DA 转向 Plasma；PeerDAS 与 SubnetDAS 的分工设计（PoS 节点用 SubnetDAS，客户端用 PeerDAS）
- [[来源_2022-06_Celestia数据可用性_欺诈证明_W3Hitchhiker]] — 白皮书级技术解析：二维 RS 纠删码从 k×k 扩展到 2k×2k 矩阵、shares 256 字节固定格式、双重欺诈证明（状态转换无效 / 错误扩展数据）、6 步随机抽样验证流程，写于 2022 年 6 月主网上线前 16 个月
- [[来源_2022-07_Celestia_模块化区块链]] — 2022 年中 Celestia 架构全景介绍：模块化区块链接口界定、DAS 概率验证原理（第 7 次抽样 < 1% 漏检率）、主权 Rollup 概念、与 ETH/Avalanche/Polkadot/Cosmos 的架构对比、8 种核心属性框架、3+1 费用结构
- [[来源_2024-08_十二大新公链_高估值速览_ChainCatcher]] — DA 选择的两个实例：(1) Eclipse 选择 Celestia 作为 DA 层（模块化极致组合：ETH 结算+SVM 执行+Celestia DA+RISC Zero ZK 欺诈证明）；(2) Scroll 于 2024 年 4 月 29 日引入 EIP-4844 Blob 实现以太坊 L1 DA——展示了 L2 项目在"牺牲以太坊正统性换成本优势"和"留在以太坊生态内"之间的不同 DA 策略选择
- [[来源_2024-09_EigenDA如何变革Rollup经济学_金色财经]] — EigenDA 定价与收入模型：按需 0.015 ETH/GB 降低 rollup DA 成本 ~99%，Tier 1 年费 70 ETH，月收入目标 $160K；Celestia 实际费用收入仅 $21K-$35K（vs $55B FDV）；Eclipse 占 Celestia blob 份额 86%
- [[来源_2022-09_机构投资者访谈_火币研究院]] — 火币研究院自身测算：若Rollup获得更大采用且出现"以Rollup为中心"格局，预期DA层年收入可达20亿美元；指出ZK Rollup虽需上传较少数据但仍需存储原始交易数据，DA层作为ZK上游将受益于ZK繁荣
- [[来源_2022-07_Danksharding_以太坊分片_PBS_Mtyl]] — DAS 机制深入详解：RS 编码线性代数原理（2 数→一次函数类比）、KZG 多项式承诺实现编码合法性证明、2D RS 编码重构方案（256×256→512×512 碎片、验证 75 次、碎片大小 1/256）、DAS 安全性概率边界（数据可用性<75% 的概率小于 0.5^30）。写于 Proto-danksharding 实现前 20 个月。
- [[来源_2021-11_Layer2介绍_ZK_OP_Rollup_Wayne]] — 以"老师批改试卷只传分数不传试卷照片"的类比解释 Validium 模式，通俗说明数据可用性的核心矛盾——抛弃 DA 可换取极高吞吐量但牺牲安全可审计性