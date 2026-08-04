---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [l2, ethereum, rollup, interoperability, based-rollups]
---

# Spire Labs

## 基本信息
- 类型 / 赛道: Rollup 基础设施 / 基于 L1 的 Rollup
- 核心产品: Based Stack（专为基于 L1 的 Rollup 设计）
- 预计上线时间: 2025 年 Q1

## 核心业务/产品
Spire Labs 提供 **Based Stack**——一套专为"基于 L1 的 Rollup"（Based Rollup）设计的开发框架。与使用独立排序器的传统 Rollup 不同，Based Rollup 使用以太坊 L1 作为排序层，由 L1 验证者负责交易排序，从而实现 L2 之间的原子交互，从根源上解决流动性碎片化问题。

这是 DevCon 大会上讨论的 Rollup 互操作性两大竞争方案之一（另一方案为共享排序器，代表项目 Astria/Espresso/Polygon AggLayer）。

## 竞争优势
- 继承以太坊 L1 的全部安全性（无需额外的排序器信任假设）
- 消除中心化排序器的单点故障和 MEV 提取风险
- 与其他 Based Rollup 实现原生原子交互，解决流动性碎片化

## 风险 / 争议
- 依赖 L1 出块时间（12 秒），牺牲 L2 的交易确认速度
- 与共享排序器方案存在竞争，技术路线尚未收敛
- 2025 Q1 上线时间存在不确定性

## 相关实体
- [[ethereum]] — 作为排序层的 L1
- [[astria]] — 共享排序器方案，竞争路线
- [[espresso-systems]] — 共享排序协议，竞争路线
- [[polygon]] — AggLayer 跨链桥聚合方案

## 相关概念
- [[layer2]] — Rollup 互操作性是 L2 多链未来的核心挑战
- [[sequencer]] — Based Rollup 本质上是"不使用独立排序器"的 Rollup
- [[cross-chain]] — Based Stack 实现的是 L2 间的原子交互

## 来源
- [[来源_2025-01_以太坊路线图_Pectra升级_DevCon_PANews]] — Based Stack 预计 2025 Q1 上线，作为 DevCon Rollup 互操作性核心方案之一
