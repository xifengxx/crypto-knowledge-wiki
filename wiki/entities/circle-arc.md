---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [stablecoins, layer1, circle]
aliases: [Arc, Circle Arc, 稳定币L1]
---

# Circle Arc

## 基本信息
- 类型：稳定币专用 Layer 1（由 [[circle]] 发起）
- 宣布时间：2025 年 8 月
- 共识机制：名义 PoS，实际 DPoS（最多 20 个验证节点）
- Gas 代币：USDC（原生 Gas Token）
- 技术基础：Cosmos SDK + 基于 CometBFT 改造的 Malachite 共识引擎
- 核心目标：摆脱对 Coinbase 分销渠道和现有公链（Ethereum/Tron）Gas Fee 的依赖，建立 Circle 自有的稳定币结算轨道

## 核心业务/产品
Arc 并非一条孤立的链，而是 Circle 产品矩阵的统一底座。它将 Circle 此前分散的产品线（USDC/EURC/USYC 发行、CCTP 跨链、CPN 清算网络、Mint/Wallet/Gateway）整合为一条专用 L1 上的协同堆栈。

### 产品组件
- **USDC/EURC/USYC**：Circle 三大稳定币产品线。USDC 锚定美元（符合 Genius Act），EURC 锚定欧元（符合 MiCA），USYC 为收益型稳定币（与币安合作）
- **CPN（Circle Payment Network）**：以 USDC 为基础的跨境清算网络，类似 SWIFT
- **Mint**：用户铸造 Circle 稳定币的入口
- **Circle Wallet**：个人和机构统一管理 Circle 稳定币的钱包
- **Contracts**：Circle 编写的稳定币智能合约
- **CCTP**：USDC 跨链技术标准
- **Gateway**：USDC 抽象层，用户无需知晓底层公链即可与 USDC 交互
- **Paymaster**：允许任意代币充作 Gas 代币

### 逻辑堆栈（自上而下）
USDC/EURC/USYC → Gateway → CCTP（链上）/ CPN（传统金融机构）→ Arc

Mint（充值入口）、Wallet（资金归集）、Contracts（编程入口）、Paymaster（Gas 灵活层）环绕核心堆栈。

## 关键数据
- 最多 20 个验证节点（DPoS 架构）
- 理论 TPS：3000（当前），50000（Malachite 改造后潜力）
- 交易确认：亚秒级
- Gas Fee：可低至 1 美元以下
- EVM 兼容、MEV 防护、FX（外汇）引擎、交易优化
- 隐私技术：计划融合 TEE / ZK / FHE / MPC

## 战略动机
Circle 2024 年全年支付 Coinbase 9.08 亿美元分销费用（占收入 54%），Tether 无需给交易所分润（USDT 是唯一有真实用户的稳定币）。Arc 的战略目标是将 Circle 从"Coinbase 附属物"升级为独立结算基础设施运营商，控制稳定币的发行、分销和结算全链条——类似 Capital One 通过收购 Discover 从发卡行升级为发卡行+卡组织一体化。

## 竞争优势 / 护城河
- **合规壁垒**：USDC 已符合 Genius Act 和 MiCA，Arc 在此基础上构建
- **企业级功能**：隐私转账、金库模式，为承接大规模企业资金上链准备
- **RWA 接口预留**：通用 L1 架构为更多资产（国债/外汇等）上链预留空间
- **Circle 品牌和贝莱德合作**：传统金融信任背书

## 风险 / 争议
- **中心化**：20 节点 DPoS 架构比 Tron 更集中，本质是企业级私有链
- **分销依赖未解除**：自建链不等于自动获得用户，Circle 仍需与 Coinbase/币安等渠道合作
- **时间劣势**：Visa 花了 50 年建立分销网络，USDT/Tron 联盟花了 8 年，Circle 能否在合理时间内建立自有分销网络存疑
- **与开放公链的关系**：Arc 的崛起意味着 Ethereum/Tron/Solana 将失去 Circle 带来的稳定币交易费和生态引力

## 相关实体
- [[circle]] — 发起方和运营主体
- [[tether]] — 竞争对手，选择 Plasma/Stable 外部赛马而非自建
- [[ethena]] — USDe 发行方，同步推进 Converge 稳定币 L1
- [[stripe]] — 推出 Tempo 稳定币 L1，终端网络优势
- [[coinbase]] — 当前最大分销渠道，Circle 自建 Arc 的动机来源

## 来源
- [[来源_2025-08_稳定币公链_分销_收益_Arc_Tempo_深潮TechFlow]]
