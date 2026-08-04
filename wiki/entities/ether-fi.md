---
type: entity
entity_type: protocol
created: 2026-06-28
updated: 2026-06-30
tags: [restaking, lrt, eth, eigenlayer, defi]
---

# Ether.fi

## 基本信息
- 定位：最大流动性再质押协议（LRT），TVL超$12亿（2024年3月）
- 链：以太坊
- LRT代币：eETH（2023年11月首发，第一个进入市场的LRT）
- 融资：$5.3M种子轮（2023年2月）
- CEO：Mike Silagadze

## 核心业务
- 用户存入ETH → 获得eETH（流动性再质押代币）→ 可在DeFi中自由使用
- 质押的ETH同时累积以太坊PoS质押奖励 + EigenLayer再质押奖励
- 忠诚度积分 = 质押ETH × 1000 × 质押天数

## 差异化
- **Operation Solo Staker**：与Obol Labs合作使用DVT（分布式验证者技术），将验证者密钥分割给多个独立质押者，促进以太坊去中心化
- **Ether.fan NFT**：质押ETH铸造NFT，自动累积质押奖励
- 仅接受ETH（非LST）

## 关键数据
- TVL：>$1.2B（2024年3月，最大LRT协议）；高峰时超过 $60 亿（2024年）
- FDV 最高达 $80 亿（超过 LDO 和 EIGEN 历史最高 FDV）
- eETH 占 Etherfi TVL 的 90%
- 在短短半年内成为第四大质押实体
- 融资：$5.3M（种子轮）

## 产品多元化：稳定币市场中性 USD Pool（2025）

Restaking赛道饱和后，Ether.Fi推出多种BTC/ETH/稳定币收益产品的多元化战略。其**稳定币市场中性USD Pool**以主动管理基金形式运作，包含以下收益来源：

1. **借贷收益** — 通过Syrup、Morpho、Aave等协议
2. **流动性挖矿** — 通过Curve稳定币池
3. **资金费率套利** — 通过Ethena USDe
4. **收益代币化** — 通过Pendle

该池面向：缺乏足够资本或不愿频繁操作的用户，提供"高收益、风险分散"的被动链上收益。

来源：[[来源_2025-04_稳定币_收益策略_综合指南_Mirror]]

## 市场空间来源
- Etherfi 的市场空间本质上是被以太坊基金会对 Lido 和 Eigenlayer 的"不信任"创造出来的：
  - Lido 被以太坊基金会持续施压（质押中心化），被迫放弃 restaking 业务
  - Eigenlayer 受 Justin Drake 和 Dankrad Feist 顾问约束，native restaking 流程故意做得复杂，不能直接吸纳用户 ETH
- LRT 协议的长期商业逻辑依赖两个前提：1) Lido 不能提供 liquid restaking 服务；2) Eigenlayer 不能提供 liquid staking 服务

## 相关实体/概念
- [[eigenlayer]] — 底层再质押基础设施
- [[liquid-staking]] — LRT赛道
- [[lido]] — LST龙头，Puffer的"吸血鬼攻击"目标

## 来源
- [[来源_2024-03_Binance_Research_Restaking领域漫谈]]
- [[来源_2024-11_以太坊_Solana_Staking商业模式差异_MintVentures]]
