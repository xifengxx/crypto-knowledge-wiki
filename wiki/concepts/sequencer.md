---
type: concept
created: 2026-07-02
updated: 2026-07-02
tags: [l2, rollup, infrastructure, mev]
aliases: [Sequencer, 排序器, 交易排序器]
---

# Sequencer（排序器）

## 一句话定义
排序器是 Rollup 的核心组件，负责对 L2 交易进行排序、打包和提交至 L1，是决定 Rollup 安全性、抗审查性和 MEV 分配的关键节点。

## 核心原理

在 Rollup 架构中，排序器承担以下职责：
1. **交易接受**: 接收用户提交至 L2 的交易
2. **交易排序**: 决定交易在区块内的执行顺序（直接影响 MEV 分配）
3. **区块创建**: 将排序后的交易打包成区块
4. **交易执行**: 执行交易并生成 L2 状态更新
5. **数据提交**: 将压缩后的交易批次提交至以太坊 DA 层

排序器在比特币网络中由矿工执行，在以太坊 L1 由验证者执行（通过共识机制决定记账权），但在大多数 L2 中，排序器是单一中心化节点。

## 为什么重要

- **单点故障风险**: 中心化排序器宕机或被攻击→整个 L2 交易处理中断
- **审查风险**: 排序器可选择性地处理或拒绝交易，限制用户访问特定 DeFi 协议
- **MEV 提取**: 排序器可以优先排序自己的交易，通过三明治攻击和抢先交易获取不公平收益
- **收入分配**: 排序器利润（交易费+MEV）是 L2 的核心收入来源，去中心化排序直接关系到 L2 代币的价值捕获

## Base 中心化排序器的支付场景权衡（2025.03）

Squads博客的Solana vs Base稳定币支付分析揭示了中心化排序器在支付场景中的双重角色：

### 优势
- **快速迭代**：Coinbase运营的中心化排序器使Base能够快速升级和实验
- **低费用、高结算效率**：仅用8%的收入即可完成以太坊结算（消耗40%+ L1 Blob空间）
- **监管合规**：Coinbase可单方面执行地理围栏、KYC、黑名单等合规操作——对受监管企业反而是优势
- **收入丰厚**：2024年Coinbase从排序器获取至少$5600万收入，占所有L2毛利润的75%+

### 风险
- **审查风险**：Coinbase可拒绝特定交易（冻结钱包、封锁应用）
- **单点故障**：排序器宕机则Base交易处理完全中断
- **长期中立性存疑**：对寻求"可信中立"的全球化支付应用而言，Base的去中心化方向不明确

### 与Solana的对比
- Solana没有排序器——由1000+验证者通过PoH+PoS共识直接确认交易
- Solana费用流向去中心化验证者集，而非单一公司
- 监管合规通过前端或代币扩展（Token Extensions）执行，非中心化

来源：[[来源_2025-03_Solana_Base_稳定币支付_Squads]]

## 去中心化排序器五大方案

| 方案 | 核心机制 | 差异化 |
|------|---------|--------|
| **Espresso** | HotShot 共识 + QC 证明 | 共享排序网络，双层最终性 |
| **Astria** | Leader Rotation + BFT | 即插即用，双重轮换机制 |
| **SUAVE** | 区块竞价 + 偏好环境 | 跨链 mempool 聚合，MEV 返还 |
| **Radius** | PVDE 加密内存池 | 排序-后解密，根本上消除 MEV |
| **Metis** | PoS + MPC 多重签名 | 首个自研去中心化排序器 L2 |

## 混合 DEX 中的离链排序器：Vertex Protocol 案例

Vertex Protocol 的混合 CLOB-AMM 设计提供了一个非 Rollup 场景的排序器应用案例：

- **离链 CLOB 排序器**：不用于 Rollup，而是作为混合 DEX 的订单撮合引擎，独立节点运行
- **性能**：5-15ms 撮合延迟，15,000 TPS，HFT 友好 API
- **故障保护**：AMM 层作为降级备份——排序器宕机时，用户仍可直接与链上 AMM 交易
- **去中心化路线**：计划通过 Vertex 治理实现排序器去中心化
- **关键区别**：与 Rollup 排序器不同，Vertex 的排序器不处理状态提交至 L1，而是专注于订单簿匹配，链上操作（抵押品管理/清算/AMM 兑换）独立于排序器执行

## 排序即服务（Sequencing-as-a-Service）

第三方提供共享去中心化排序服务的商业模式，是模块化区块链叙事在排序器层的延伸，与 RaaS（Rollup-as-a-Service）和 DA-as-a-Service 构成模块化三件套。代表项目：Espresso、Astria。

## 相关概念
- [[layer2]] — Rollup 排序器的运行环境和安全基础
- [[mev]] — 排序器是 MEV 提取的核心节点
- [[data-availability]] — 排序器最终将数据提交至 DA 层

## 相关实体
- [[espresso-systems]] — 共享排序网络，HotShot 共识
- [[astria]] — 通用无需许可共享排序
- [[suave]] — Flashbots 共享排序器，区块竞价
- [[radius]] — PVDE 加密内存池，无信任排序
- [[metis]] — 自研去中心化 PoS 排序器 L2

## 我的立场
排序器去中心化是 L2 成熟度的关键指标。目前五大方案各有取舍：共识型（Espresso/Astria）牺牲性能换安全，加密型（Radius）牺牲吞吐量换隐私，自研型（Metis）最完整但最复杂。没有"最佳方案"，取决于 Rollup 的优先级（速度 vs 抗审查 vs MEV 公平分配）。

## 来源
- [[来源_2026-06_去中心化排序器_Rollup_Sequencer_Lumoz]]
- [[来源_2023-02_Rollup_ZKRollup_Optimistic_Arbitrum区别_Future小哥哥]] — 将排序器/验证者角色以"代表推荐制"比喻说明——推选被信任的代表汇总审核交易、集中处理，代表的靠谱程度决定安全性
- [[来源_2024-04_ZK模块化新星_Lumoz_RaaS_PANews]] — Lumoz 链提供标准化去中心化排序器：PoS 验证者同时为 Rollup 层提议区块充当排序器，分离构建者与提议者角色
- [[来源_2023-07_Rollups即服务_RaaS全景指南_BlockMagnates]] — OPStack 共享排序器愿景：在 Superchain 生态中通过共享排序器实现 Rollup 之间的同步性和原子性，是 2023 年中期排序器叙事的重要源头
- [[来源_2024-08_Vessel_Finance_ZK_DEX_红杉融资]] — Vessel Finance 将排序器作为 DEX 的三核心组件之一（Sequencer→Prover→Smart Contract），负责即时处理交易并生成执行轨迹供证明者创建 SNARK 证明，路线图中包含排序器去中心化目标
- [[来源_2025-01_以太坊路线图_Pectra升级_DevCon_PANews]] — DevCon 将共享排序器列为 Rollup 互操作性的核心竞争方案之一（Espresso/Astria/Polygon AggLayer），与基于 L1 的 Rollup（Spire Labs Based Stack）形成两条互操作路径
- [[来源_2025-03_MegaETH_实时区块链_StanfordReview]] — MegaETH 中心化排序器设计的正面论证：引用 Vitalik Endgame 论证中心化出块是扩展的必然方向，通过放弃共识协议实现连续交易流处理，将安全性委托给以太坊 L1 和 EigenDA——代表排序器"中心化是特征而非 bug"的极端立场
- [[来源_2025-02_AMM_订单簿_意图_ThreeSigma]] — Vertex Protocol 离链排序器作为混合 DEX 排序器的实操案例（5-15ms 撮合延迟 + AMM 降级保护）
- [[来源_2025-03_Solana_Base_稳定币支付_Squads]] — Base中心化排序器在支付场景的双重角色权衡：快速迭代vs审查风险、年收入$5600万、仅8%收入用于以太坊结算
- [[来源_2021-11_Layer2介绍_ZK_OP_Rollup_Wayne]] — 将排序器比喻为"批改试卷的操作员"，通俗解释排序中心化攻击（三明治攻击即排序攻击），是 L2 早期中文科普对排序器角色的标志性介绍
