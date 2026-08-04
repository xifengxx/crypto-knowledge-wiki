---
type: entity
entity_type: protocol
created: 2026-07-01
updated: 2026-07-01
tags: [defi, risk-management, yield, stablecoins]
---

# Gauntlet

## 基本信息
- 类型: DeFi 风险管理 + 收益策略平台
- 赛道: DeFi / 收益聚合 / 风险建模
- 核心产品: Gauntlet USD Alpha ($gtUSDa)
- 基础设施: 通过 Aera Finance 开发的金库基础设施将链下策略实施到链上

## 核心业务/产品
**Gauntlet USD Alpha ($gtUSDa)** 是 Gauntlet 推出的收益优化金库，核心机制：
- 将存款者的稳定币动态分配到收益最高的借贷市场
- 根据风险指南自动调整头寸（由 "Guardian" 指定执行者管理）
- 回测表现：7.76% Alpha 收益 vs 4.46% 基准收益（基于 Morpho 的风险调整策略，Base + ETH）
- 当前收益：7.2%，主要分配至 $midasUSD 和 $gtusdcf
- 定位：为寻求风险调整收益的被动收益农场用户提供"一键"解决方案

## RWA 策略
Gauntlet 在 RWA 领域扮演关键角色，与 RedStone 合作撰写了 RWA 报告中"杠杆 RWA 头寸"章节。核心贡献包括：

1. **sACRED 杠杆策略**：由 Gauntlet 设计并管理，利用 Securitize 的 sACRED 代币（代表 Apollo $13 亿多元化信贷基金的敞口），在 Morpho 上实现杠杆循环——以 sACRED 为抵押借款并再投资，使传统私募信贷收益通过 DeFi 可组合性放大
2. **交叉资产收益放大**：RWA 借贷增加了 Gauntlet 金库可配置的市场需求，创造正反馈循环
3. **投资组合多元化**：RWA 的"非相关性"为 Crypto 投资组合提供有效对冲
4. **多源定价系统**：与 RedStone 等预言机合作，建立满足 DeFi 精度标准和 RWA 估值方法的定价基础设施

Gauntlet 还与 Steakhouse Financial 合作，共同管理 sACRED 在 Morpho 上的风险参数和金库策略。

## 竞争优势 / 护城河
- 深厚的量化风险管理能力（团队背景偏量化建模）
- 链下策略 + 链上执行的 CeDeFi 混合模式
- 自动化风险调整头寸（传统收益聚合器不具备的动态风险能力）

## 相关实体
- [[morpho]] — Gauntlet 的策略部署在 Morpho Blue 市场上
- [[perena]] — 同赛道收益聚合竞品（Solana 生态）
- [[cap-money]] — 同赛道收益聚合竞品（MegaETH 生态）
- [[ethena]] — 同为 CeDeFi 模式的先行者

## 来源
- [[来源_2025-07-13_稳定币四大未来方向]]
- [[来源_2025-06_链上金融_RWA_RedStone]] — Gauntlet 联合撰写"杠杆 RWA 头寸"章节；sACRED 在 Morpho 上的杠杆策略设计；RWA 多源定价系统提案
