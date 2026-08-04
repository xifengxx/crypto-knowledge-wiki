---
type: concept
created: 2026-06-29
updated: 2026-07-01
tags: [restaking, eigenlayer, avs, lrt]
aliases: [再质押, Restaking]
---

# Restaking（再质押）

## 一句话定义
将已质押的 ETH（或其他 PoS 资产）"再质押"以同时为多个协议（AVS）提供经济安全保障的机制。由 EigenLayer 首创，旨在将以太坊的经济安全性"租赁"给需要安全预算的新协议。

## 核心原理

### 供给端 vs 需求端
- **供给端（LRT）**：Renzo/Puffer/Ether.fi 等通过流动性再质押代币聚集 ETH 和节点 → 吸引流动性进入生态
- **需求端（AVS）**：Active Validated Services → 预言机/DA/ZK协处理器/DePIN/游戏等需要经济安全的中间件 → 需求释放才是Restaking价值的最终体现

### 首批 AVS（EigenLayer 主网上线）
| AVS | 赛道 | 核心功能 |
|-----|------|---------|
| AltLayer | RaaS | VITAL(状态验证)+MACH(快速终局性)+SQUAD(去中心化定序器) |
| Brevis | ZK协处理器 | coChain(PoS+ETH质押安全+乐观+ZK机制) |
| eoracle | 预言机 | 首个ETH原生预言机(ETH保证安全 vs Chainlink LINK保证) |
| Lagrange | ZK协处理器 | 并行+水平扩展/Renzo+Swell+Puffer各委托$5亿 |
| Witness Chain | DePIN | 瞭望塔协调层(带宽/物理位置测量) |
| Xterio | 游戏L2 | 基于EigenDA+OP Stack/使用MACH快速终局性 |

### Solana Restaking（内源性 AVS）与 swQoS 机制
[[solayer]] 侧重的内源性 AVS（服务 Solana 内部 DApp）vs EigenLayer 外源性 AVS（对外卖安全服务）。核心区别：

| 维度 | Eigenlayer（外源性 AVS） | Solayer（内源性 AVS） |
|------|------------------------|---------------------|
| 核心服务 | 协议安全租赁平台 | 交易通过性租赁平台 |
| 目标客户 | 侧链/DA/预言机/桥等外部协议 | Solana 内部 DApp（DEX 等） |
| 技术基础 | 以太坊 PoS 共识安全 | Solana swQoS 机制 |
| 业务范围 | 局限于以太坊生态（其他链竞争涌现） | Solana 内部（但可通过 swQoS 扩展业务范围） |

**swQoS（stake-weighted Quality of Service）**：2024年4月客户端升级后生效。区块生产者依据质押金额确定交易优先级——质押全网 x% 的 SOL，最多可提交 x% 的交易。Solayer 目标是成为 swQoS 事实上的基础设施，最终成为 Solana 共识的核心原语。

用户三重收益：Solana 质押+MEV+代币空投。Solayer 不仅做 restaking，还直接发行 LST（sSOL），类似"支持原生 restaking 的 Lido"。

## 关键数据
- Lagrange 委托 ETH：$15 亿（Renzo+Swell+Puffer 各 $5 亿）
- 商业模式：终端用户付费→AVS→节点→Restaking 用户分配（eoracle 明确双代币模式）
- 系统性风险：EigenLayer 略过智能合约直接接管 ETH 节点生态 → 与 Lido 利益冲突

## 相关概念
- [[liquid-staking]] — LST/LRT 是 Restaking 的流动性基础
- [[eigenlayer]] — 外源性 AVS 代表
- [[solayer]] — Solana 内源性 AVS 代表

## 来源
- [[来源_2024_EigenLayer_第一批AVS真实用例]]
- [[来源_2024_Solayer_Solana_Restaking商业分析]]
- [[来源_2024-12_Pantera_Paul_2025年8大预测]]
- [[来源_2024-12_Solana_Q4状况_Messari]] — Jito Restaking架构（Vault Program管理VRT + Restaking Program管理NCN和Operator）、Jito DAO采用Futarchy治理NCN拨款
- [[来源_2024-09_八大Babylon生态流动性质押协议_odaily]] — SatLayer 作为 Babylon 生态的再质押层：BVS（Bitcoin Validated Services）类比 EigenLayer AVS，以 LBTC/pumpBTC/SolvBTC 等 LST 为抵押品，uniBTC 占比 75%+
- [[来源_2024-11_以太坊_Solana_Staking商业模式差异_MintVentures]] — swQoS机制细节、外源性vs内源性AVS完整对比、Solayer官方"根本不同意EigenLayer技术架构"原文引用、restaking需求端PMF不确定性分析
- [[来源_2024-08_Babylon主网上线_BTCFi赛道再思考]] — Babylon BTC 再质押的安全模型批判：ETH 质押者主动参与共识（安全责任连续），BTC 质押者仅为资产被动持有者（矿工才是安全维护者），PoW+PoS 共享安全的传递链条存在逻辑断裂
- [[来源_2025-01_Solayer_社区发售_硬件加速_SVM_PANews]] — Solayer从restaking出发三次叙事转型（restaking→RWA→硬件加速SVM），显示纯restaking叙事可能不足以支撑长期愿景
- [[来源_2023-12_多Rollup世界_基础设施_SevenX]] — EigenLayer 三类信任模型（经济/去中心化/以太坊包含）精确区分；Babylon BTC 原生质押无需跨链机制；否决委员会作为早期风险缓解；Ion Protocol 再质押资产 DeFi 化；Rio Network/Renzo 降低再质押参与门槛
- [[来源_2024-05_Lumoz_zkProver_zkVerifier_EigenLayer_ChainCatcher]] — Lumoz 推出基于 EigenLayer 的 zkProver/zkVerifier AVS 计算层，扩展了 AVS 类型边界（ZK 计算作为一种新 AVS 服务类别）
- [[来源_2025-03_代币经济学_代币化结构化产品_tokenomicsexplained]] — 从节点运营者视角批判EigenLayer"推送模式"（资本提供者手动委派→中心化LRT垄断→小节点无法被发现），提出Rocketpool"拉取模式"（节点请求从资金池委派）作为替代方案；[[mellow]]正在建设无许可LRT市场以支持数百个差异化风险谱系
- [[来源_2025-06_叙事评分_加密货币_NarrativeScore]] — Ignas 将 Restaking 列为本轮周期创新案例之一，但指出其实"复杂叙事（低简化度 3/10）导致传播缓慢"，并认为其依赖 Eigenlayer 的 token launch 表现，且 token launch 失败（可能因复杂叙事或弱社区）导致叙事阶段性遇冷
- [[来源_2025-03_币圈盈利者_CEX_MEV_做市商_深潮TechFlow]] — 补充Restaking（EigenLayer、Solayer、Jito）TVL突破500亿美元的市场规模数据，从盈利者视角补充Restaking作为质押收益叠加范式
- [[来源_2024_LRT_流动性再质押代币_速览]] — LRT基本定义速览，9大赛道项目全景（Eigenpie/Puffer/EtherFi/KelpDAO/Renzo/Restake Finance/Swell/Babylon/Picasso）
