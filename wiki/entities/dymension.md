---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [cosmos, rollup, infrastructure, raas]
---

# Dymension

## 基本信息
- 类型: Rollups-as-a-Service (RaaS) 平台 / Cosmos 生态 Hub
- 赛道: Rollup 基础设施 / 模块化区块链部署
- 定位: 在 Cosmos 生态构建 RollApps（基于 Cosmos SDK 的 Rollup），通过 Dymension Hub 实现 IBC 跨链互操作
- 核心组件: RDK (Rollup Development Kit) — 替代 Cosmos SDK 中共识相关模块，专为无需验证者转换逻辑的 Rollup 设计

## 核心业务/产品
- **RDK**: 允许开发者在 Cosmos 上创建 RollApps（本质是无共识模块的 Cosmos SDK 链）
- **Dymension Hub**: 中心-辐条架构的 IBC 连接枢纽，连接 RollApps 与其他 IBC 支持链
- 相比普通 Rollup，RollApps 不受数据发布带宽瓶颈限制，预计可扩展性更强
- Hub 的 IBC 连接不仅便利用户，也增强 Dymension Hub 作为自主网络的地位

## 竞争优势 / 护城河
- 基于 Cosmos SDK 的成熟工具链，开发者迁移成本低（仅需替换共识相关模块）
- IBC 原生互操作能力，理论上优于以太坊 L2 之间的跨链体验
- 中心-辐条架构使 Hub 自身可捕获网络价值

## 风险 / 争议
- Cosmos 生态 RaaS 赛道竞争激烈（Saga、Initia 等定位相似），用户和开发者面临选择疲劳
- 2023 年中仍处于早期开发阶段，未实现大规模采用
- 与以太坊 L2 RaaS 生态（OPStack、Arbitrum Orbit）相比，Cosmos 生态引力较弱

## 来源
- [[来源_2023-07_Rollups即服务_RaaS全景指南_BlockMagnates]]
