---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [layer2, ethereum, zk, zkevm]
---

# Taiko

## 基本信息
- 类型：以太坊 Layer 2（zkEVM）
- 定位：零迁移成本的 zkEVM——无需任何代码修改即可运行以太坊智能合约
- 测试网历史：Alpha-2 测试网被弃用（2023 年 4 月前），当时无可用测试网

## 核心业务/产品
Taiko 是正在开发中的 zkEVM L2，核心目标是通过最终支持 L2 架构中的所有 EVM 操作码来扩展以太坊。

技术架构三部分：
1. **zkEVM 系统**：用于证明生成
2. **L2 Rollup 节点**：管理 Rollup 链
3. **L1 协议**：用于 Rollup 协议验证

核心价值主张：开发者可将现有以太坊 dApp **无需任何修改**迁移到 Taiko。

## 关键数据
- Alpha-2 测试网在 2023 年 4 月前已被弃用
- 截至 Bankless 文章发表时，无活跃的公开测试网
- 2025 年 10 月 24 日部署 ERC-8004 注册表，定位为 Agent 经济活动的主战场 L2

## 竞争优势 / 护城河
- "完全 EVM 等效"的定位比兼容 EVM 更激进，理论上迁移成本最低
- 目标支持所有 EVM 操作码，在所有 zkEVM 中兼容性目标最高
- 成为 ERC-8004 的部署目的地：Agent 经济需要便宜快速的链，主网 gas 费过高，Taiko 作为 L2 可将成本降低至适合 Agent 高频身份更新和声誉交互的水平

## 风险 / 争议
- 目标过于激进，"完全 EVM 等效"在 ZK 证明效率上存在巨大挑战
- 测试网进度慢于竞争对手（Scroll、Linea 同期均有活跃测试网）
- 后续发展声量较同期项目明显不足
- ERC-8004 集成仍处于极早期，实际 Agent 使用量待验证

## 相关实体
- [[scroll]] — 同期 zkEVM 竞争者
- [[linea]] — ConsenSys 的 zkEVM
- [[erc-8004]]（概念）— Taiko 部署的 Agent 信任层标准

## 来源
- [[来源_2023-04_Bankless_五大新兴L2项目_交互指南]]
- [[来源_2025-10_ERC-8004_AI_Agent_信任层_深潮]]
