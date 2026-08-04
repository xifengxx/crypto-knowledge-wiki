---
type: concept
created: 2026-07-02
updated: 2026-07-02
tags: [ethereum, scaling, infrastructure]
aliases: [Danksharding, 丹克分片, 以太坊分片新方案]
---

# Danksharding

## 一句话定义
Danksharding 是以太坊提出的全新分片方案（2021 年末由 Dankrad Feist 提出），通过数据可用性采样（DAS）、出块者-打包者分离（PBS）和抗审查清单（CrList）实现"中心化出块 + 去中心化验证 + 抗审查"，将以太坊 L1 重塑为结算层和数据可用性层。

## 核心原理
Danksharding 抛弃了 Sharding 1.0 的 64 分片链+信标链架构，采用三项核心技术：

1. **数据可用性采样（DAS）**：利用 RS 纠删码将数据块从 k 个碎片扩展为 2k 个碎片，验证节点只需随机采样 k 个碎片即可从概率上验证数据可用性。采用 2D RS 编码（k×k → 2k×2k）进一步降低带宽和重构负担。
2. **出块者-打包者分离（PBS）**：将区块提议（去中心化验证者轮换）和区块构建（高性能节点竞价）分离。打包者竞标区块构建权，MEV 价值通过竞价机制分配给所有验证者，而非集中到少数打包者手中。
3. **抗审查清单（CrList）**：出块者指定存储池中符合条件的交易列表，打包者必须强制包含这些交易，防止打包者审查交易。

Proto-danksharding（EIP-4844）是迈向完整 Danksharding 的第一步，引入临时 blob 存储（约 125 kB，18 天后自动删除），EVM 无法直接访问 blob 但可验证其承诺。

## 为什么重要
- Danksharding 是以太坊从"单片链"走向"模块化区块链"的关键架构决策，解决了 L1 扩容中数据同步和 MEV 两个核心难题。
- 它将以太坊 L1 定位为结算+DA 层，释放 L2 Rollup 的计算潜力（理论上可达数百万 TPS），定义了"以 Rollup 为中心"的以太坊路线图。
- "中心化出块 + 去中心化验证 + 抗审查"的三元设计被广泛视为公链突破"不可能三角"的最可能路径。

## 关键项目/案例
- [[ethereum]] — Danksharding 是以太坊 The Surge 阶段的核心升级
- [[celestia]] — 模块化公链，与 Danksharding 共享"模块化"设计理念
- [[flashbots]] — 以太坊 MEV 生态核心基础设施，实现 MEV-Boost 替代双槽 PBS

## 相关概念
- [[data-availability]] — DAS（数据可用性采样）是 Danksharding 的核心技术
- [[mev]] — PBS 是 Danksharding 对抗 MEV 的核心机制
- [[layer2]] — Danksharding 将 L1 变为结算+DA 层，为 L2 Rollup 释放空间
- [[l1-competition]] — Danksharding 代表以太坊 L1 扩容的最新路线

## 技术演进时间线
- 2021-12: Dankrad Feist 提出 Danksharding 方案
- 2022-07: Proto-danksharding (EIP-4844) 提议，作为 Danksharding 第一步
- 2023-12: Dencun 升级在 Devnet #12 激活测试
- 2024-03: Dencun 升级主网上线（EIP-4844 包含在内）
- 长期: 从 Proto-danksharding 升级至完整 Danksharding（实现 2D DAS）

## 我的判断
Danksharding 是以太坊自 PoS 合并后最重要的架构升级。Proto-danksharding（EIP-4844）已证明临时 blob 方案可以大幅降低 L2 费用（约 90%+），但完整 Danksharding 的 2D DAS 方案在技术上仍面临挑战——PeerDAS 和 SubnetDAS 的取舍、PBS 的确切实现路径等仍在讨论中。值得注意的是，Danksharding 的设计假设（中心化出块可接受）在社区中一直存在争议，关乎以太坊的去中心化核心价值观。

## 来源
- [[来源_2022-07_Danksharding_以太坊分片_PBS_Mtyl]] — Danksharding 技术核心详解（RS 编码/KZG 承诺/PBS/CrList）
- [[来源_2023-12_Dencun升级_以太坊_EIP-4844]] — Dencun 升级与 EIP-4844 实际部署情况
- [[来源_2024-10_The_Surge_以太坊扩容_Rollup_Vitalik]] — 以太坊长期 DAS 路线图（PeerDAS/SubnetDAS/2D DAS）
