---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [cross-chain, bridge, interoperability, defi]
---

# Stargate

## 基本信息
- 定位：全链原生资产跨链桥协议
- 基础设施：构建在 [[layerzero]] 之上的跨链流动性协议
- 核心创新：第一个解决"跨链不可能三角"的协议
- 关键机制：统一流动性池 + 即时交易最终性

## 核心业务
允许用户和应用程序在跨链传输原生资产的同时，使用协议的统一流动性池，获得即时交易最终性。用户无需处理包装资产（Wrapped Assets），可将以太坊上的 USDC 直接换成 Arbitrum 上的 USDT。支持用户使用源链上的 Gas 代币支付多链交易所需的 Gas 费用。

## 跨链不可能三角
传统跨链桥面临三个无法同时满足的属性：
1. 即时最终性（Instant Finality）
2. 统一流动性（Unified Liquidity）
3. 原生资产（Native Assets）

Stargate 声称是第一个同时满足三者的协议。

## 关键数据
- 超 100 万次转账（截至 2023 年 4 月）
- 超 45 亿美元交易量
- Sushiswap 等应用已部署在 Stargate 上，支持原生资产跨链交换

## 生态集成
- [[sushiswap]] — DEX 部署在 Stargate 上，允许用户进行原生资产交换
- [[layerzero]] — 底层跨链消息传递基础设施

## 相关概念
- [[cross-chain]] — Stargate 属于跨链桥类别中的统一流动性池方案
- [[chain-abstraction]] — 源链 Gas 代币支付多链 Gas 费的设计是实现链抽象的重要一步

## 来源
- [[来源_2023-04_LayerZero_全链野心_应用场景_BixinVentures]] — 提供 Stargate 核心数据和应用场景
