---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [l2, infrastructure, sequencer, rollup]
---

# Astria

## 基本信息
- 类型: 去中心化排序器 / 共享排序网络
- 赛道: Rollup 基础设施 / Sequencing-as-a-Service
- 定位: 通用、无需许可的去中心化排序器，为各类 Rollup 提供即插即用共享排序服务

## 核心业务/产品

Astria 提供开箱即用的共享排序服务，通过去中心化排序权来降低单一排序器的特权。

### 两种排序器轮换机制

**领导轮换 (Leader Rotation)**
- 通过选举形成排序器集合，集合内排序器轮流对 Rollup 交易排序
- 防止单一排序器长期垄断交易排序权
- 在一定程度上解决用户持续被审查的担忧

**拜占庭容错共识算法 (BFT Consensus)**
- 更复杂、更安全的机制，允许在存在恶意节点的情况下仍能达成共识
- 多个排序器共同参与决策
- 在特定数量节点故障或受攻击时系统仍可正常运行

## 与 Espresso 的对比
- Astria 和 Espresso 共享排序器运行机制类似，目标均为通过去中心化排序权降低排序器特权
- Astria 额外强调 Leader Rotation 作为 BFT 共识之外的简化轮换方案
- Astria 定位更偏"即插即用"和"通用无需许可"

## 竞争优势 / 护城河
- 双重轮换机制（Leader Rotation + BFT）提供灵活的排序器去中心化路径
- 无需许可的设计降低了 Rollup 项目接入门槛

## 风险 / 争议
- Leader Rotation 模式下，单个排序器在其轮值窗口内仍拥有全部排序权，存在时间窗口内的 MEV 提取和审查风险
- 即插即用的通用方案可能无法满足特定 Rollup 的定制化需求

## 来源
- [[来源_2026-06_去中心化排序器_Rollup_Sequencer_Lumoz]]
