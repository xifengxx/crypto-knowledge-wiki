---
type: entity
entity_type: protocol
created: 2026-07-01
updated: 2026-07-01
tags: [defi, lending, solana]
---

# Marginfi

## 基本信息
- 类型：去中心化借贷协议
- 赛道：DeFi 借贷 / Solana 生态
- 链：Solana

## 核心业务
Solana 生态的去中心化借贷协议，为 The Arena 等杠杆交易平台提供底层借贷基础设施。支持超额抵押借贷和闪电贷（在同一交易内完成借入和归还）。

## 与 The Arena 的关系
Marginfi 是 The Arena 的"游戏引擎"——The Arena 作为前端允许用户对 Solana 新代币做多/做空，底层的借贷池和闪电贷功能由 Marginfi 提供。The Arena 的独立借贷池（每个代币专用池，超额抵押）基于 Marginfi 的 DeFi 基础设施构建。这种合作模式让 Marginfi 通过为 Meme PVP 提供杠杆工具来盘活自身借贷业务。

## 关键特征
- 独立借贷池架构：每个代币有专用借贷池，非 AMM 配对池
- 超额抵押机制：存入资金多于借出资金以保障安全性
- 闪电贷支持：允许同一交易内完成借入和归还
- 用户可成为"房主"存入资产赚取利息，或借入资产进行杠杆交易

## 风险 / 争议
- 借贷池直接暴露于 Meme 币极端波动风险，独立池架构意味着单个代币闪崩可能导致对应池的坏账
- 作为 DeFi OG 为 Meme PVP 推波助澜，引发"是否加剧市场投机"的伦理争议

## 相关实体
- [[pumpfun]] — Meme 币发行层（供给侧），与 Marginfi（杠杆交易基础设施层）同属 Meme PVP 堆栈
- [[solana]] — 底层公链，Meme 经济主战场

## 来源
- [[来源_2024-08_MemePVP_DeFi业务转型]]
