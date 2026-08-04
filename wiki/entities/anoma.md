---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [l1, intent, privacy, cross-chain]
---

# Anoma

## 基本信息
- 类型：Layer 1 区块链协议
- 赛道：意图中心架构 / 隐私 / 跨链结算
- 定位：去中心化交易对手发现、解决和原子多链结算的隐私协议
- 融资: A 轮 $675 万（Polychain Capital 领投，Electric Capital/Coinbase Ventures/FBG Capital/CMS Holdings 等参投）+ 后续 $2600 万（Polychain Capital 领投，Fifth Era/Maven Capital/Zola Capital/Electric Capital/CMCC 等参投），总 $3275 万

## 核心设计
Anoma 的架构与所有传统区块链根本不同：用户不需指定执行流程，只需通过"意图"（可编程承诺）定义愿意接受的最终状态。

### 交易架构四阶段
1. **通用意图** — 处理任意意图，不限于特定应用，允许广泛的应用和交互
2. **交易对手发现** — 去中心化过程，意图在网络中传播，供潜在 Solver 访问
3. **解决** — Solver 合作组合意图，计算跨链执行的有效解决方案
4. **结算** — 在 Anoma 自身主权 L1、其他 L1 或任何在 L1 上结算的 rollup 上验证和最终确定

## 独特之处
- **意图可组合**：意图可集体解决，无论其来源
- **隐私原生**：注重隐私的意图匹配
- **原子多链结算**：跨链执行在一个原子步骤中完成
- **与 ERC-7683 等标准化努力的区别**：Anoma 是底层 L1 协议级别的意图架构，而非应用层标准

## 与已有知识的关系
Anoma 代表了链抽象的"最激进路径"——不是在现有链上叠加抽象层，而是从 L1 协议层面重新设计交互范式。

## 相关概念
- [[intents]] — Anoma 是意图中心架构的原型实现
- [[chain-abstraction]] — Anoma 是链抽象三条路径中最激进的一条
- [[privacy]] — Anoma 将隐私融入意图匹配流程

## 来源
- [[来源_2022-07_10个新Layer1_熊市布局_Odaily]] — 最早中文覆盖：首轮$675万Polychain领投+第二轮$2600万Polychain继续领投、总$3275万融资、"以物易物"核心概念、统一屏蔽池隐私交易机制
- [[来源_2024-07_链抽象_Thanefield研报_深潮TechFlow]]
- [[来源_2024-08_十二大新公链_高估值速览_ChainCatcher]]
