---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [cross-chain, interoperability, cosmos]
---

# Axelar

## 基本信息
- 类型：通用跨链覆盖网络 / 全栈去中心化传输层
- 赛道：跨链互操作（Cross-Chain Interoperability）
- 上线时间：2022 年 2 月（公共主网）
- 初始支持链：Ethereum, Avalanche, Terra
- 原生代币：AXL（总量 10 亿枚）
- 技术栈：Cosmos SDK + 无需许可 PoS 验证器集
- 官网：https://axelar.network/

## 核心业务/产品
Axelar 提供覆盖所有区块链生态系统的跨链互操作服务，核心组件包括：
1. **去中心化网络** — 无需许可的 PoS 验证器集负责跨链消息的验证和路由
2. **网关智能合约** — 连接 Axelar 网络与外部链的桥接合约
3. **SDK 与协议 API** — 帮助开发者集成跨链功能

定位为"其他网络之上的去中心化网络"，促进不同共识机制的区块链之间的通信。

## 关键数据
- AXL 创世供应量：10 亿枚
- 代币分配：公司 29.5%（核心团队 17% + 公司运营 12.5%）、支持者 29.54%（Seed 13.4% + A轮 12.64% + B轮 3.5%）、社区销售 5%、社区项目 35.96%
- 主网上线首支持 3 条链（Ethereum, Avalanche, Terra）
- 声称新链集成时间约 10 分钟
- 使用 Cosmos SDK 构建

## 竞争优势 / 护城河
- **通用跨链方案** — 与所有链（Cosmos、EVM、Bitcoin、PoS、PoW）互操作的统一方案，而非仅限特定生态
- **去中心化验证** — 唯一使用无需许可 PoS 验证器集进行跨链消息身份验证的跨链网络
- **全栈服务** — 提供安全 + 路由 + 转换一站式服务（覆盖网络模型），非单纯消息传递
- **即插即用** — 新链集成成本低（技术层面约 10 分钟）

## 风险 / 争议
- Terra 生态依赖风险 — 早期重点支持 Terra，但 Terra 于 2022 年 5 月崩盘，相关叙事失效
- 竞争激烈 — LayerZero（全链消息/Wormhole（跨链消息/Chainlink CCIP（预言机跨链）等已占据市场主导地位
- 验证器集安全性 — 作为 PoS 网络依赖验证者节点安全，存在与其它桥类似的安全攻击面

## 相关事件时间线
- 2022-02: 公共主网启动，支持 Ethereum、Avalanche、Terra
- 2022-05: Terra 崩盘 (Axelar 早期生态重要一环)
- 后续发展需补充

## 我的判断
Axelar 在 2022 年初是一个有差异化定位的跨链方案（通用覆盖网络 vs 桥 vs 生态特定方案），但后续市场更倾向于 LayerZero（全链消息）和 Wormhole（已获广泛采用）的竞争格局。需要核实 Axelar 在 2026 年的实际采用数据和链集成数量来更新判断。

## 相关实体
- [[cosmos]] — Axelar 使用 Cosmos SDK 构建
- [[layerzero]] — 直接竞争对手
- [[wormhole]] — 直接竞争对手
- [[chainlink]] — CCIP 作为跨链竞争对手
- [[terra]] — 早期支持的生态（已崩盘）

## 来源
- [[来源_2022-02_Axelar_跨链覆盖网络]]
