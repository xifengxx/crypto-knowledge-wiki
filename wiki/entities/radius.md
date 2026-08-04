---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [l2, infrastructure, sequencer, zk, mev]
---

# Radius

## 基本信息
- 类型: 去中心化排序器 / 共享排序层
- 赛道: Rollup 基础设施 / MEV 保护
- 定位: 无信任共享排序层（Trustless Shared Sequencing Layer）
- 核心技术: PVDE（Practical Verifiable Delay Encryption）加密内存池

## 核心业务/产品

Radius 通过引入加密内存池，确保 Rollup 交易排序过程无信任化，从根本上消除 MEV 和用户交易审查问题。

### 四层技术架构

1. **排序层 (Sequencing Layer)**
   - 用户提交加密交易及证明至排序器
   - 排序器验证证明和交易有效性
   - 排序器在解密前对交易排序
   - 排序器构建区块并提交至 Rollup 执行层

2. **执行层 (Execution Layer / Rollup)**
   - Rollup 接收区块并按指定顺序执行交易
   - 提交交易状态和状态证明至结算层

3. **结算层 (Settlement Layer)**
   - 接收并验证 Rollup 的状态和状态证明以确认最终性
   - 确保交易执行遵循排序层指定的顺序

4. **数据可用性层 (Data Availability Layer)**
   - 负责排序数据并确保其可用性

### PVDE 加密内存池机制

- 用户生成时间锁谜题（time-lock puzzle）和对称密钥
- 用户使用对称密钥加密交易，加密交易进入内存池
- 排序器对加密交易排序，但在时间锁谜题解锁前无法获取解密密钥
- 排序器在解锁时间锁谜题前计算排序承诺（order commitment）并提交至结算层
- 排序承诺用于验证排序器是否按正确顺序向 Rollup 执行层提交交易

### 与共识型排序器的关键差异
Espresso 和 Astria 基于共识机制的去中心化排序虽然降低了 MEV 和审查风险，但以牺牲网络可扩展性和时间效率为代价（需达成排序共识导致确认延迟）。此外，即使在去中心化环境中，内存池中公开透明的交易信息仍存在排序器恶意提取 MEV 的风险。Radius 通过加密内存池使排序器看不到交易内容，从根本上解决这一问题。

## 竞争优势 / 护城河
- PVDE 加密内存池是独特的 MEV 消除路径，区别于 PBS（分离提议/构建）和公平排序
- 排序-后解密的设计提供了最强的抗审查和抗 MEV 保证

## 风险 / 争议
- 时间锁谜题解锁后交易内容仍然暴露，存在信息泄露窗口
- PVDE 的零知识证明开销可能影响系统吞吐量

## 来源
- [[来源_2026-06_去中心化排序器_Rollup_Sequencer_Lumoz]]
