---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [l2, infrastructure, sequencer, rollup, privacy]
---

# Espresso Systems

## 基本信息
- 类型: 去中心化排序器 / 共享排序网络 / 隐私智能合约平台
- 赛道: Rollup 基础设施 / Sequencing-as-a-Service / 隐私
- 融资: 总 $6000 万（a16z、Electric Capital 等）
- 核心产品: Espresso Sequencer + CAPE 可配置资产隐私智能合约

## 核心业务/产品

Espresso 提供去中心化共享排序服务，允许多个 Rollup 共享一个去中心化排序器网络，避免各自运行中心化单一排序器的风险。

### HotShot 共识机制
- 在一组排序器中通过 HotShot 共识选举出一个排序器负责排序 Rollup 交易并打包入块
- 区块需获得至少 2/3 HotShot 节点签名同意（Quorum Certificate, QC）才能达成"软最终性"
- QC 被提交至 L1 排序器合约作为区块有效性的证明

### 交易生命周期
1. **交易提交**: L2 用户通过 API 将交易发送至 Rollup 服务器
2. **交易排序**: 排序器通过 HotShot 共识选举排序交易并包含入块
3. **广播与确认**: 排序器广播排序后交易，其他节点通过 HotShot 达成共识后创建区块并执行交易，同时提供软确认快速反馈
4. **区块承诺**: 排序器将含 QC 的区块发送至 L1 排序器合约存储
5. **状态更新**: Rollup 节点将更新后的状态发送至 L1（zkRU 需有效性证明，ORU 进入挑战期）
6. **状态验证**: L1 Rollup 合约验证排序器合约的 QC 以检查状态更新有效性

### 双层最终性设计
- "快速最终性"：通过 HotShot 共识 + QC 快速确认，降低延迟提升 UX
- "真正最终性"：L1 验证通过后获得以太坊安全继承
- 如果 L1 验证发现无效交易，已产生的 L2 区块面临回滚

## 竞争优势 / 护城河
- 共享排序网络模式降低单个 Rollup 建设排序器基础设施的成本
- HotShot 共识提供明确的安全性保证（2/3 节点签名门槛）

## 风险 / 争议
- HotShot 共识延迟可能影响交易确认速度
- 共享排序网络的跨 Rollup 协调复杂性

### CAPE 可配置资产隐私
Espresso 的隐私系统独特之处在于其部署在以太坊上的 CAPE（Configurable Asset Privacy for Ethereum）智能合约。用户可以自定义资产数量、类别、发送方和接收方地址等条目的隐私级别——自主选择公开哪些信息、对谁公开。这种"可配置隐私"设计不同于全匿名方案（如 Tornado Cash），为合规场景保留了灵活性。

## 来源
- [[来源_2026-06_去中心化排序器_Rollup_Sequencer_Lumoz]]
- [[来源_2024-08_十二大新公链_高估值速览_ChainCatcher]]
