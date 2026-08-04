---
type: concept
created: 2026-07-02
updated: 2026-07-02
tags: [ai, protocol, agent, interop]
aliases: [A2A, Agent-to-Agent协议, Google A2A]
---

# A2A（Agent-to-Agent 协议）

## 一句话定义
A2A（Agent-to-Agent）是 Google 于 2025 年 4 月推出的开放协议，旨在为不同 AI Agent 之间的直接通信与协作提供标准化接口，常被类比为"AI Agent 之间的 HTTP"。

## 核心原理
A2A 协议与 MCP（模型上下文协议）形成互补关系：
- **MCP** 解决 Agent 与外部工具/数据源之间的通信（Agent-to-Tool）
- **A2A** 解决 Agent 与 Agent 之间的通信（Agent-to-Agent）

A2A 的核心设计关注点包括：
- **Agent 能力发现**：一个 Agent 如何发现另一个 Agent 的能力和可调用接口
- **任务编排**：多 Agent 协同完成复杂任务的标准化流程
- **状态传递**：Agent 间任务状态的共享与同步
- **安全与信任**：Agent 间通信的身份验证与授权机制

## 为什么重要
1. **补齐多 Agent 协作的通信层**：MCP 解决了 Agent 连接外部世界的"纵向"问题，A2A 解决 Agent 之间"横向"协作问题，两者组合构成完整的 Agent 通信栈
2. **Web2 的成熟应用**：A2A 在 Web2 领域能迅速普及，因其服务于已足够成熟的应用场景，本质是"价值放大器"
3. **Web3 适配的挑战**：A2A 直接移植到 Web3 存在"水土不服"——链上数据实时解析、Gas 费优化、滑点控制、MEV 防护等 Web3 特有问题需要额外的基础设施改造

## 关键项目/案例
- [[anthropic]] — MCP 协议的发起者，A2A 的互补方
- [[ai-agents]] — A2A 是 AI Agent 间协作的基础通信协议

## 相关概念
- [[model-context-protocol]] — MCP（Agent-to-Tool）与 A2A（Agent-to-Agent）互补，构成 Agent 通信协议栈的两层
- [[ai-agents]] — A2A 是 AI Agent 协作生态的基础设施层
- [[defai]] — DeFAI Agent 的跨协议协作可能受益于 A2A 标准化

## 我的立场
A2A 是一个重要的行业标准尝试，但其在 Web3 环境中的适配程度取决于 Crypto 基础设施的成熟度。当前 Web3 AI Agent 生态尚缺乏深度应用场景，A2A 和 MCP 在 Web3 中更多是"价值放大器"角色而非"价值创造者"——在应用场景成熟之前，协议本身无法催生需求。

## 来源
- [[来源_2025-04_A2A_MCP_Web3死亡盲区_PANews]]
- [[来源_2025-04_Web3_AI_Agent落地场景_Haotian]] — Haotian 认为在 Web3 场景中 A2A 协议需求可能超过 MCP，因为 MCP 需要成熟应用生态而 Web3 缺乏标准化 API 基础，A2A 能孵化增量 Agent 市场
