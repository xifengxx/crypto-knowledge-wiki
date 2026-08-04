---
type: entity
entity_type: project
created: 2026-07-01
updated: 2026-07-01
tags: [layer2, security, infrastructure]
---

# Witness Chain

## 基本信息
- 类型: Rollup 安全监测层
- 赛道: Rollup 基础设施 / 安全服务
- 核心产品: 勤勉证明 (Proof of Diligence)

## 核心业务/产品

Witness Chain 作为 Optimistic Rollups 的监测方，确保至少有一个诚实方会对无效状态发起挑战。

### 勤勉证明 (Proof of Diligence)
一种独特的激励机制，确保监测方（验证者）始终有动力监控和验证交易，从而保证提交到主链的状态是正确的：

- **独立奖励机制**：验证者获得的奖励对于每个节点而言都是具体且独立的——如果一个验证者发现了赏金，它不能与其他验证者分享这笔奖励，从而确保每个节点都进行独立验证，避免搭便车问题。
- **可定制要求**：允许 Rollups 指定定制要求，如验证者的数量及其地理分布。地理分布由其独立服务支持的「位置证明」提供，确保安全性和效率之间的平衡。
- **Watchtower 网络**：正成为 Rollup 堆栈中的一个新层，为 Rollup 安全性、互操作协议、通知服务和 keeper 网络等应用提供全方位的安全性。

### 解决的问题
Arbitrum 和 Optimism 等成熟 Rollup 有足够的内在激励促使第三方监控链状态。但新的 Rollup 或应用链可能不具备这种级别的安全性。Witness Chain 通过勤勉证明填补了这一缺口。

## 竞争优势
- 独特的独立奖励设计避免了验证者之间的搭便车问题
- 可定制的地理分布要求增加了抗审查弹性
- 面向新 Rollup 和长尾应用链的市场定位

## 相关实体
- [[eigenlayer]] — 共享安全，也可用于 Rollup 监测
- [[arbitrum]] — 其 BOLD 协议解决欺诈证明的无许可问题

## 来源
- [[来源_2023-12_多Rollup世界_基础设施_SevenX]]
