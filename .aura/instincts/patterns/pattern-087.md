---
id: pattern-087
category: security
language: unknown
score: 50
tags: [security]
---

## 컨텍스트
파일: satlayer.md (Write 완료)

## 핵심 코드
```unknown
---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [bitcoin, restaking, btc-ecosystem, babylon]
---

# SatLayer

## 基本信息
- 赛道: 比特币流动性再质押平台（Babylon 生态的 Restaking 层）
- 成立时间: 2024年
- 融资: Pre-Seed $800万（2024.8.22），Hack VC 和 Castle Island Ventures 领投，OKX Ventures、Mirana Ventures、Amber Group 等参投
- 核心概念: BVS（Bitcoin Validated Services，比特币验证服务），类比 EigenLayer 的 AVS

## 核心业务
SatLayer **不将 BTC 直接存入 Babylon**，而是建立在 Babylon LSD 之上的再质押层：
- 用户将 wBTC 或 Babylon 生态的 LST（LBTC、pumpBTC、SolvBTC 等）存入 SatLayer
- SatLayer 以 BVS 形式为任何类型的 dApp 或协议提供比特币安全保障
- 收益以 SatLayer 积分形式发放

2024年8月23日开启第一季存款活动，上限 100 BTC，持续2周。

## 关键数据
- 质押量: 132.54 枚 BTC（超过100 BTC上限，2024年9月）
- uniBTC 占比: 75% 以上（Bedrock的LST是SatLayer最大抵押品来源）
- 定位: Babylon生态的"EigenLayer"——不做LST，做Restaking基础设施

## 竞争定位
SatLayer 选择了与 Lombard/Bedrock/Solv 等 LST 协议完全不同的路径：不参与 Babylon 委托竞争，而是在 LST 之上构建再质押层。这一策略的优势是避免了 Gas 战和委托份额竞争，但缺点是依赖 Babylon LST 生态的整体增长——如果LBTC/pumpBTC/SolvBTC的规模不够大，SatLayer的BVS需求端可能缺乏足够的抵押品。

## 相关实体
- [[babylon]] — 底层质押基础设施，SatLayer 是 Babylon 的二层协议
- [[eigenlayer]] — 以太坊上的对应物：AVS → BVS 的概念映射
- [[bedrock-defi]] — uniBTC 是 SatLayer 最大抵押品来源（75%+份额）

## 来源
- [[来源_2024-09_八大Babylon生态流动性质押协议_odaily]]

```

## 태그
- security