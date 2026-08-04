---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, dex, amm, uniswap]
---

# Bunni

## 基本信息
- 定位：基于 Uniswap V4 钩子（hooks）的 DEX，专注于 LP 盈利能力优化
- 版本：V1（流动性提供衍生品 LPD 协议）→ V2（自建 DEX + 钩子功能）
- 核心创新：超出范围钩子（out-of-range hooks）——将闲置流动性部署到外部借贷协议赚取利息

## 核心业务/产品

### Bunni V1
流动性提供衍生品（LPD）协议，解决 Uniswap V3 集中流动性的痛点：LP 无需手动调整流动性范围，协议自动管理 LP 仓位以匹配市场价格变化。与 Gamma 和 Arrakis Finance 同赛道竞争。

### Bunni V2
自建 DEX，利用 Uniswap V4 钩子架构实现差异化功能：
- **超出范围钩子**：当 LP 流动性不在当前市场价格范围内（闲置状态），不去重新调整范围，而是将闲置流动性存入借贷协议（Aave、Yearn、Gearbox、Morpho 等）赚取利息
- LP 获得双重收益：交易手续费 + 借贷利息
- 相比传统做法（调整 LP 范围到当前价格附近），用互操作性替代重新平衡

## 竞争优势
- 利用 Uniswap V4 模块化架构实现传统 AMM 无法实现的功能
- 提高 LP 资本效率：闲置流动性不再"白白躺着"
- 与多个成熟借贷协议集成，收益来源可信

## 风险/争议
- 流动性互操作性增加合约风险（跨协议依赖）
- AMM 交换所需流动性可能被耗竭（借贷协议锁定了流动性）
- 仍处于测试阶段，长期权衡待观察

## 相关实体
- [[uniswap]] — Bunni V2 基于 Uniswap V4 钩子架构构建
- [[aave]] — 超出范围钩子将闲置流动性存入 Aave 等借贷协议
- [[cow-protocol]] — 同为 2024 年 LP 盈利能力创新的代表项目

## 来源
- [[来源_2024-08_LP盈利_DEX存活_LVR_深潮TechFlow]] — Bunni V2 超出范围钩子机制详解
