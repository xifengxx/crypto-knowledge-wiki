---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [rwa, l1, ethena, securitize]
aliases: [Converge, Converge Chain]
---

# Converge (Converage)

## 基本信息
- 定位：高性能 RWA 公链平台，由 [[ethena]] 和 [[securitize]] 共同支持
- 官方网站：https://www.convergeonchain.xyz/
- 技术架构：基于 Arbitrum Orbit 和 Celestia（DA 层）
- 原生 Gas 资产：USDe 和 USDtb
- 验证人网络：ENA 驱动的验证人网络（CVN, Converge Validator Network）
- 跨语言支持：支持 Rust 与 Solidity 的跨语言合约组合（Stylus VM）
- 背景：Securitize 在遇到以太坊交易吞吐量、延迟和 Gas 费用等结构性局限后，决定与 Ethena 合作开发自有 RWA 专用链。此前的某些来源可能将其描述为 Securitize 独立项目，但实际为 Ethena 和 Securitize 联合项目

## 核心业务

### RWA 公链基础设施
- 为 RWA 代币化提供专用区块链基础设施
- 旨在解决通用公链（特别是以太坊）在合规效率和交易成本方面的不足
- 技术亮点：
  - **Stylus VM**：支持 Rust + Solidity 跨语言合约组合，实现超高性能
  - **Mini-block Streaming**：技术（具体机制待披露）

### Ethereal DEX
- 专属子项目去中心化交易所
- 目标支持 CEX 级别撮合速率
- 预期每秒处理百万订单
- 定位为链上高频交易基础设施

### 生态合作
- 与 Aave、Pendle、Morpho 等头部 DeFi 协议达成合作
- **5 大协议承诺支持**（2025.06）：Pendle、Morpho、Maple、Ethereal、Aave — 将在 Converge 上构建和分发机构级 DeFi 产品
- 首发部署基于 Ethena 与 Securitize 资产的应用
- USDe 和 USDtb 作为原生 Gas 资产，深度集成 Ethena 稳定币体系

## 项目状态
- 即将上线开发者测试网（撰稿时）
- 主网预计在未来数月内上线（预计 2025 年下半年）

## 竞争定位
Converge 属于 RWA 专用链趋势的一部分，与 [[plume]]、[[mantra]] 等处于同一赛道。差异点在于：
- 拥有 Ethena（$USDe 收益型稳定币）和 Securitize（代币化基础设施，$40 亿+ AUM）的双重生态支撑
- USDe/USDtb 作为原生 Gas 形成与其他 RWA 链的差异化
- Ethereal DEX 的高频交易定位独树一帜
- Ethena 的收益型稳定币体系为链上提供天然流动性基础
- **Ethena + Securitize 合计**近 100 亿美元 TVL/AUM（2025.06），使 Converge 有望成为最大区块链网络之一

## 相关实体
- [[securitize]] — 联合支持方，RWA 代币化合规平台
- [[ethena]] — 联合支持方，USDe 收益型稳定币
- [[plume]] — 竞争关系，RWAfi 专用 L1
- [[plume]] — 竞争关系，RWAfi 专用 L1

## 来源
- [[来源_2025-06_Ethena_四大增长领域_Telegram_Converge_PANews]]
- [[来源_2025-06_以太坊_RWA_主导地位_TigerResearch]]
- [[来源_2025-04_RWA布局_10项目_PayFi_Biteye]]
