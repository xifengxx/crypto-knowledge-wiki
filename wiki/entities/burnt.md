---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [chain-abstraction, infrastructure, cross-chain]
---

# Burnt

## 基本信息
- **类型**: 通用链抽象协议
- **赛道**: [[chain-abstraction]]
- **首次出现**: 2024 年（Rui/SevenX Ventures 的链抽象全景分析中提及为特定链抽象参与者之一）

## 核心设计

### 元账户（Meta-Account）设计
Burnt 的核心创新是元账户架构，包含三个关键特性：
1. **不可知签名（Signature Agnosticism）**: 不绑定特定签名算法或密钥管理方案，与 [[account-abstraction]] 的模块化设计思路一致但走得更远
2. **参数化费用层（Parameterized Fee Layer）**: 允许用户和应用自定义 Gas 支付策略，不限于 ERC-20 或赞助模式
3. **状态机更新（State Machine Updates）**: 账户状态可跨链迁移和同步，对应 [[chain-abstraction]] 中的状态同步模块

### 与传统账户抽象的差异
Burnt 的元账户设计超越了 ERC-4337 的智能合约账户范畴。"元"的含义在于：账户本身是一个可进化的状态机，其规则可以动态更新，而非一个静态的智能合约。

## 在链抽象六大模块中的定位
按 Rui (SevenX Ventures) 的链抽象六模块框架，Burnt 覆盖了：
- 多链统一地址（核心）
- 签名聚合（不可知签名）
- 单一 Gas（参数化费用层）
- 状态同步（状态机更新）

## 与其他链抽象项目的对比
| 项目 | 核心路径 | 差异化 |
|------|---------|--------|
| [[particle-network]] | Cosmos SDK L1 + Universal Account | EVM 生态优先，自建结算层 |
| [[near-protocol]] | MPC Chain Signatures + 中心辐射模型 | 全栈方案（DA+账户+意图+应用） |
| Light | 4337 兼容跨链智能合约钱包 | 聚焦钱包层，不建自有链 |
| **Burnt** | 元账户协议 | 最抽象的账户模型，不绑定任何具体签名方案或费用模式 |

## 风险 / 待验证
- 公开信息极少，仅通过 SevenX 投资人 Rui 的推特线程为人所知，白皮书或正式文档尚未发现
- 元账户的"状态机更新"如何在去中心化环境中安全执行，技术细节未知
- 是否有独立融资、团队背景均未公开——可能是早期项目，也可能仅仅是概念阶段

## 来源
- [[来源_2024-04_链抽象细分_六模块_主要参与者_SevenX]] — Rui 将 Burnt 列为 2024 年链抽象统一前端方案的四个主要参与者之一，描述其元账户设计的三个特性
