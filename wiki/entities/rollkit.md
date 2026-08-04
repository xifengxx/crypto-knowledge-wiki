---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [celestia, rollup, infrastructure, data-availability]
---

# Rollkit

## 基本信息
- 类型: 模块化 Rollup 框架
- 赛道: Rollup 基础设施 / 数据可用性
- 定位: Celestia 生态的模块化 Rollup 开发框架，支持创建具有模块化 DA 组件的主权 Rollup
- 前身: Rollmint → Optimint → Rollkit（三次更名反映产品迭代）
- 所属生态: Celestia

## 核心业务/产品
- 模块化 Rollup 框架：允许开发者创建主权 Rollup（Sovereign Rollup）或 Optimistic Rollup
- **通用 DA 层接口**: 支持插入任意数据可用性层，最具争议的集成是与 Bitcoin 的 DA 方案
- 提供标准化 Rollup 开发套件，抽象 DA 层复杂性
- 计划支持多种 Rollup 类型（主权 Rollup 已可用，Optimistic Rollup 标记为 "soon"）

## 关键数据
- 2023 年 7 月时主权 Rollup 已可用，Optimistic Rollup 仍标注 "soonTM"
- 与 Bitcoin 的 DA 集成方案引发社区争议（2023 年 3 月公布）

## 竞争优势 / 护城河
- 通用 DA 接口设计提供最大灵活性和未来可迁移性
- Celestia 生态的先发优势和深度集成
- 主权 Rollup 概念允许 Rollup 自行处理结算（不依赖某条 L1），是对传统 Rollup 定义的突破
- **比特币主权 Rollup 方案**: 允许将比特币作为共识和数据可用性层，执行环境可自定义（甚至可在比特币网络之上运行 EVM）
- 利用 Taproot 和 SegWit 升级（与 Ordinals/Inscriptions 相同的技术基础）将 rollup 数据刻入比特币区块

## 风险 / 争议
- Bitcoin DA 集成被部分社区视为营销噱头——Bitcoin 的区块空间和数据吞吐能力并非为 Rollup DA 设计
- 2023 年中 Optimistic Rollup 尚未就绪，产品成熟度有限
- 主权 Rollup 概念较新，开发者教育和生态建设难度高

## 关键事件时间线
- 2023-02: Rollkit 发布，Celestia 团队开发的比特币 Rollup 模块化框架
- 2023-05: 比特币思想领袖 Eric Wall 评价 Rollkit："你可以使用与 Ordinal Inscriptions 用于将 JPEG 放在比特币上的相同存储空间，而是将 Rollup 放在比特币上"

## 来源
- [[来源_2023-07_Rollups即服务_RaaS全景指南_BlockMagnates]]
- [[来源_2023-05_币安研报_BTC生态_潜在机会]] — 币安研报首次系统介绍 Rollkit：模块化框架、主权 Rollup 概念、sBTC 潜在集成、利用 Taproot/SegWit 将 rollup 数据刻入 BTC
