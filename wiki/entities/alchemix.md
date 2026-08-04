---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, tokenomics, timelock]
---

# Alchemix

## 基本信息
- **类型**：DeFi协议（创新代币设计）
- **赛道**：代币经济学 / 收益机制

## 核心业务/产品
Alchemix 开发了一种名为 Flux 的创新代币经济设计，用于解决veTokenomics中的时间锁问题。

**Flux代币的核心机制**：
- 协议发行Flux代币，用户可通过销毁Flux来解锁锁定的veToken
- 这实质上代币化了时间锁本身——时间锁变成了可交易的Flux代币
- 允许协议让所有用户保持"最大锁定"状态，减少链上记账和重新锁定交易

**与动态时间锁的结合**：
- 系统可调节Flux的发行速率，从而控制特定时间点的解锁总量
- 相比现有的liquid locker模式（如Convex的cvxCRV），优势包括：
  - 退出收益归协议而非第三方中间人（补偿所有持有者而非仅抄底者）
  - 理论上的无限流动性深度（vs liquid locker的有限流动性池）
  - 无需向LP支付额外收益来维护liquid locker代币的流动性

## 关键数据
- 来源：[[来源_2025-03_代币经济学_代币化结构化产品_tokenomicsexplained]]

## 竞争优势 / 护城河
- Flux设计解决了veCRV模型的三个核心问题：同步解锁的系统性风险、频繁重锁的维护成本、liquid locker代币破坏了时间锁的初衷
- 概念上是"利率剥离"（rate stripping）的延伸——将时间锁本身货币化

## 风险 / 争议
- Flux代币本身需要市场对其有定价共识，但作者声称Flux不需要像cvxCRV那样维持流动性深度
- 尚未在大型协议中验证其实际效果与鲁棒性

## 相关实体
- [[curve]] — veCRV模式的原型，liquid locker（Convex/cvxCRV）问题的根源
- [[yearn-finance]] — 同为代币化策略的创新者

## 来源
- [[来源_2025-03_代币经济学_代币化结构化产品_tokenomicsexplained]] — Alchemix的Flux代币设计
