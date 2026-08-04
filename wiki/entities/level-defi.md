---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [stablecoins, defi, yield, restaking]
aliases: [Level, Level DeFi, lvlUSD, slvlUSD]
---

# Level

## 基本信息
- **类型**: 去中心化稳定币协议
- **赛道**: 稳定币 / DeFi 收益
- **团队/融资**: Dragonfly、Polychain 支持
- **核心产品**: lvlUSD（稳定币）+ slvlUSD（质押收益版）
- **当前最高收益率**: slvlUSD 13.69%（截至文章写作时）

## 核心业务/产品

Level 发行的 lvlUSD 是一种由 USDC 和 USDT 全额支撑的稳定币。其收益产生机制具有双层结构：

1. **基础收益层**: 用户存入的 USDC/USDT 被存入 Aave 借贷协议，产生 Aave 基础借贷收益
2. **再质押收益层**: Aave 产生的 aUSDT 和 aUSDC 收据代币被存入 Symbiotic 再质押协议，在维持稳定经济安全池的同时保护去中心化网络，叠加额外收益
3. **用户积分**: 通过质押累积的 Symbiotic 积分返还给用户

lvlUSD 持有者可以质押 lvlUSD 获得 slvlUSD，赚取链上复利收益。当前收益率 13.69%，按协议分配给 slvlUSD 的收益除以 slvlUSD 每日平均市值计算并进行年化复利。

## 收益与市场情绪的关系

slvlUSD 的收益率与 Aave 上 USDC 的借贷收益率高度相关。牛市中链上交易者借入更多稳定币以增加多头敞口，推动收益率上升；熊市中需求下降，收益率降低。

## 竞争优势 / 护城河
- 双重收益叠加机制（Aave 借贷 + Symbiotic 再质押），在同类型稳定币中提供较高的基础收益率
- 顶级 VC 支持（Dragonfly、Polychain），在流动性和信任度上具有背书优势

## 风险 / 争议
- 译者注: 本文作者供职于 Level，存在利益冲突，数据可能带有倾向性
- 收益高度依赖 DeFi 借贷市场需求，具有顺周期性
- 依赖多层协议（Aave、Symbiotic），智能合约风险叠加
- Symbiotic 为较新的再质押协议，长期运营记录有限

## 相关实体
- [[aave]] — lvlUSD 基础收益来源，USDC/USDT 存入获得 aUSDC/aUSDT
- [[ethena]] — 同类型收益型稳定币协议，头部对标
- [[usual-money]] — 同类型收益型稳定币协议
- [[resolv]] — 同类型收益型稳定币协议
- [[ond-finance]] — 同类型收益型稳定币协议

## 来源
- [[来源_2025-03_七大生息稳定币_风险回报_深潮TechFlow]]
