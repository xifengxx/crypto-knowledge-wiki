---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [l1, chain-abstraction, mpc, data-availability, near]
---

# NEAR Protocol

## 基本信息
- 类型：Layer 1 区块链
- 赛道：链抽象基础设施 / 分片 L1
- 链抽象定位：全栈方案——唯一同时覆盖 DA、账户聚合、意图层和应用层的 L1

## 链抽象四大组件

### 1. 安全聚合栈
- **NEAR DA**（数据可用性）：收集支持链的状态
- **zkWASM**：与 Polygon 合作开发的零知识证明系统
- **EigenLayer 快速最终性**：利用 EigenLayer 提高交易处理速度

### 2. 账户聚合
- 基于 **MPC（多方计算）**，使 NEAR 账户能通过请求签名与外部区块链交互
- 第三方链账户的私钥由 NEAR 网络验证者管理，作为去中心化签名服务
- 将不同网络的账户绑定到一个中心 NEAR"主账户"

### 3. 意图层
- 包含执行复杂跨链意图的中继者（Relayer）网络
- 促进复杂的跨区块链交易和交互

### 4. 应用层
- 将各种 Web3 服务整合到统一用户友好应用中
- 简化对去中心化技术的访问

## 架构特点
NEAR 的链抽象方案本质上是"中心辐射"模型：NEAR 主链作为协调层，通过 MPC 签名服务将外部链账户聚合到 NEAR 主账户下。这与 Particle Network 的独立 L1 调度方案和 Polygon 的 ZK 聚合方案形成对比。

## 相关实体
- [[polygon]] — 合作开发 zkWASM，但链抽象路径不同（NEAR用MPC vs Polygon用ZK聚合）

## 相关概念
- [[chain-abstraction]] — NEAR 是链抽象的三种代表性技术方案之一
- [[intents]] — NEAR 意图层是链抽象堆栈的中间件

## 来源
- [[来源_2024-07_链抽象_Thanefield研报_深潮TechFlow]]
- [[来源_2024_链抽象_互操作性2.0_链爆炸]]
- [[来源_2024-04_链抽象细分_六模块_主要参与者_SevenX]] — Rui (SevenX) 确认 NEAR Protocol 集成了 MPC 层用于处理跨链交易，将其与 Particle Network (Cosmos SDK L1)、Light (4337 钱包)、Burnt (元账户) 并列为 2024 年链抽象统一前端方案的主要参与者
