---
type: entity
entity_type: protocol
created: 2026-07-01
updated: 2026-07-01
tags: [defi, yield, stablecoins, restaking]
---

# Cap Money

## 基本信息
- 类型: 链上收益聚合平台
- 赛道: DeFi / 收益聚合 / 稳定币
- 链: MegaETH
- 核心创新: 通过 EigenLayer 再质押机制为稳定币持有者提供"信任"保障

## 核心业务/产品

### 收益聚合
- 在 MegaETH 平台上整合所有顶级链上和链下收益策略
- 将敞口统一为一个稳定币或锚定资产（与任何 DeFi 协议兼容，高度可组合）
- 资金分配依据策略表现 = 自我强化的市场机制，只有最具竞争力的策略留存

### 信任市场（Trust Market）
- 允许资产持有者（restakers）通过 [[eigenlayer]] 将资产委托给策略提供者
- 这些资产为稳定币持有者提供"信任"（即安全垫/保险）
- 资产持有者获得部分收益作为补偿

示例流程：用户存入稳定币 → 系统分配至最优收益策略 → EigenLayer restakers 提供信任保障 → stablecoin 持有者获得安全收益，restakers 获得保障费

## 竞争优势 / 护城河
- EigenLayer 再质押 + 收益聚合的独特组合（信任层创新）
- 收益竞争的自我强化市场设计
- 作者（深潮TechFlow编译者）已投资该项目（需注意利益冲突）

## 风险 / 争议
- 依赖 EigenLayer AVS 的安全性假设
- 收益策略的尾部风险未被充分量化
- 作者利益冲突披露（文章末尾声明已投资 Cap 和 Perena）

## 相关实体
- [[perena]] — 同赛道收益聚合竞品（Solana 生态 / USD\* 收益平台）
- [[gauntlet]] — 同赛道收益聚合竞品（量化风险管理 / 链接下策略）
- [[eigenlayer]] — 再质押基础设施，Cap 信任市场的底层保障机制
- [[morpho]] — 同为策略策展平台（Morpho Blue 供 Gauntlet 等部署策略）

## 来源
- [[来源_2025-07-13_稳定币四大未来方向]]
