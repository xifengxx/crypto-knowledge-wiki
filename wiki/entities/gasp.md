---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [layer2, cross-chain, rollup, infrastructure]
---

# GASP

## 基本信息
- 类型: Layer 2 跨 Rollup 协议
- 赛道: 跨 Rollup 互操作 / 链抽象
- 起源: 2020 年由 Polychain 孵化，最初在 Polkadot 生态中启动
- 融资: 三轮共 $1100 万（Cluster Capital/Polychain Capital/Master Ventures/Faculty Group/Moonhill/LVT Capital/CMS/Token Metrics 等参与最近一轮 $500 万）

## 核心业务/产品
GASP 的愿景是使以太坊成为所有跨链交易的结算层，提供原生跨链交易，无需借助传统跨链桥。

### 技术特性
- **无桥跨 Rollup 交易**: 原生跨 Rollup swap，无需封装代币
- **逃生舱口（Escape Hatches）**: 保证用户资金随时提取——即使协议出问题，用户可以通过 L1 智能合约强制提取资产
- **ZK 证明**: 确保跨 Rollup 交易的有效性
- **去中心化排序器**: 交易排序不由单一实体控制
- **无 Gas + MEV 保护 + 快速**: 用户体验目标

## 差异化
与传统跨链桥的根本区别：GASP 通过去中心化机制确保无需信任的交易——不像中心化单点故障的传统桥接方案，也不产生封装代币（wrapped token）的安全风险（封装代币是大多数桥接攻击的根源）。

## 风险 / 争议
- 跨 Rollup 互操作是 2024 年多个项目争抢的赛道，竞争激烈（Across/ERC-7683/Espresso/Superchain）
- $1100 万融资规模较小，难以与 LayerZero/Wormhole 等跨链巨头竞争
- 从 Polkadot 迁移至以太坊生态的战略转向是否正确待验证

## 来源
- [[来源_2024-08_十二大新公链_高估值速览_ChainCatcher]]
