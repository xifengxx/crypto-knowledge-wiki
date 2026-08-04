---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [layer2, ethereum, zk, zkevm]
---

# Scroll

## 基本信息
- 类型：以太坊 Layer 2（zkEVM）
- 定位：在高级 L2 环境中执行原生 EVM 字节码，同时继承以太坊 L1 的安全保证
- 融资: 总 $8000 万（Polychain/Robot Ventures 等）
- 测试网历史：2023 年 2 月启动 Alpha 测试网
- 合作伙伴: 与以太坊基金会支持的 PSE 团队合作研发 zkEVM

## 核心业务/产品
Scroll 是以太坊 L2 扩展场景中的新一代 zkEVM，架构由三个核心组件构成：

1. **Scroll Node**：从用户交易构建 L2 块，提交到以太坊 L1，管理 L1↔L2 消息传递。内部包含 Sequencer、Coordinator、Relayer 三个模块
2. **Roller Network**：生成 zkEVM 有效性证明，确保交易正确执行
3. **Rollup & Bridge Contracts**：提供数据可用性（DA）并允许用户在以太坊和 Scroll 之间移动资产

## 关键数据
- Alpha 测试网上线：2023 年 2 月
- 测试网桥基于 Hop 协议的 fork 版
- 技术路线：zkEVM，允许开发者直接执行原生 EVM 字节码

## 关键进展
- 2024 年 4 月 29 日引入 EIP-4844 数据 Blob，实现 Layer1 数据可用性，显著优化 L2 方案并缓解 DA 问题
- 与以太坊基金会 PSE 团队合作研发 zkEVM——尽管 PSE 团队近期重心转移至 zkVM，Scroll 仍保持独立正统性
- 尝试新 ZK 证明、硬件加速等技术方案
- 主网上线后，生态系统通过社区激励活动和黑客松吸引用户和开发者

## 竞争优势 / 护城河
- zkEVM 架构完整：从节点、证明生成到桥接合约，技术栈自研程度高
- 原生 EVM 兼容性——开发者无需修改代码即可部署
- 以太坊基金会生态关联——PSE 合作赋予"正统性"

## 风险 / 争议
- zkEVM 赛道竞争白热化，Polygon zkEVM / Linea / Taiko 均同期推进
- 空投预期驱动的早期用户质量参差不齐

## 生态合作
- [[huma]] — 2024 年 9 月 Huma x Scroll 联合激励活动：用户在 Huma 平台锁仓 USDC 可同时获得 Huma 积分 + Scroll marks 双重奖励

## 相关实体
- [[arbitrum]] — L2 主要竞争对手
- [[polygon]] — Polygon zkEVM 是直接竞品
- [[huma]] — PayFi 生态合作伙伴

## 来源
- [[来源_2023-04_Bankless_五大新兴L2项目_交互指南]]
- [[来源_2024-09_Huma_Finance_3800万融资_PayFi_ChainCatcher]]
- [[来源_2024-08_十二大新公链_高估值速览_ChainCatcher]]
- [[来源_2025-04_Web3叙事退潮_明星项目_深潮TechFlow]] — 补充 Scroll 在 zkEVM 炒作峰值时 MAU 达 120 万，目前约 11.1 万；随着基础设施转向性能优先叙事，市场新鲜感消退
- [[来源_2025-02_空投市场_三大矛盾_深潮TechFlow]] — 提供SCR空投门槛数据：200积分以上才有空投资格
