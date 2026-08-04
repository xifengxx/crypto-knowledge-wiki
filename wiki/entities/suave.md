---
type: entity
entity_type: project
created: 2026-07-01
updated: 2026-07-01
tags: [mev, infrastructure, intents, cross-chain]
---

# SUAVE (Flashbots)

## 基本信息
- 类型: 多域订单流聚合层
- 赛道: MEV 基础设施 / 意图为中心架构
- 开发方: Flashbots
- 全称: Single Unified Auction for Value Expression

## 核心业务/产品

SUAVE 是 Flashbots 构建的多域区块构建和订单流聚合基础设施，旨在解决跨域 MEV 和用户意图表达问题。

### 三大功能方向

**TEE 解决方案（隐私保护）**
SUAVE 使用 TEE（可信执行环境）隐藏交易信息，帮助保护用户免受抢跑交易或三明治攻击，同时也有助于提高抗审查性。

**跨域 MEV 捕获**
作为多域订单流聚合层，SUAVE 协助构建者/搜索器探索跨域 MEV。通过共享内存池和共享区块构建连接多个域，可捕获更多跨链 MEV 机会。

**意图为中心的基础设施**
SUAVE 是以意图为中心架构的核心推动者之一。用户表达预期目标（而非精确交易），复杂参与者（做市商、构建者）竞争为用户提供更好的结果。

## 在 MEV 保护中的角色
MEV 保护（而非消除）是目标。降低 MEV 的两个主要方向：通过强制执行排序规则减少矿工重新排序的灵活性，以及引入竞争市场用于重新排序、添加和/或审查交易。但仅凭公平排序或经济机制都无法完全消除 MEV。

## 竞争优势 / 护城河
- Flashbots 品牌和生态优势
- TEE 隐私保护与 MEV 捕获的结合
- 多域覆盖——跨链 MEV 市场尚处于早期

## 相关实体
- [[arbitrum]] — 正在实施 FCFS 私有内存池
- [[shutter-network]] — 阈值加密技术
- [[eigenlayer]] — 与 SUAVE 在部分场景中互补

## 作为共享排序器
SUAVE 在去中心化排序器生态中被归类为共享排序解决方案，其区块"竞价"机制区别于 Espresso 的 HotShot 共识和 Radius 的加密内存池方案。SUAVE 的三层架构（通用偏好环境 / 最优执行市场 / 去中心化区块构建）不仅处理排序，还聚合跨链 mempool 偏好并将 MEV 返还用户。

## 来源
- [[来源_2023-12_多Rollup世界_基础设施_SevenX]]
- [[来源_2026-06_去中心化排序器_Rollup_Sequencer_Lumoz]] — SUAVE 作为五大去中心化排序器方案之一的技术分析
- [[来源_2023_MEV_PBS_Flashbots_投资]] — SUAVE 被描述为"可插在任何其他链的插件，充当其他链的 Mempool 和 Builder"，并简要介绍其三层架构（通用偏好环境 / 最优执行市场 / 去中心化区块构建网络）
