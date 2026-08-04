---
type: entity
entity_type: protocol
created: 2026-06-29
updated: 2026-06-29
tags: [rwa, treasury, singapore]
---

# Matrixdock

## 基本信息
- 母公司：Matrixport（新加坡持牌资管公司）
- 产品：Short-term Treasury Bill Token（STBT）
- 定位：链上债券平台，以美国国债为基础资产的代币化产品
- 合规：仅对 KYC 合格投资者开放，白名单地址制度

## 核心业务/产品

### STBT（Short-term Treasury Bill Token）
- 底层资产：6个月美国国债 + 以美国国债作抵押的逆回购协议
- 仅白名单用户之间可转移（包括在 Curve 池中）
- STBT 持有者对实体资产池拥有第一优先清偿权

### 实现路径
1. 投资人将稳定币存入 STBT 发行商 → 智能合约铸造 STBT
2. STBT 发行商通过 Circle 将稳定币兑换为法币
3. 法币交由合格第三方托管 → 通过传统金融机构购买6个月内到期短债或投入美联储隔夜逆回购
4. Matrixport 成立的 SPV 将持有的美债与现金资产质押给 STBT 持有者

## 竞争优势 / 护城河
- Matrixport 的持牌资管背景提供合规基础
- 第一优先清偿权的法律安排增强投资者保护
- 与 T Protocol 和 Curve 的集成扩展了 STBT 的 DeFi 可用性

## 风险 / 争议
- 严格白名单限制使用场景，STBT 仅限白名单地址间转移
- 依赖 Matrixport 的中心化信用

## 相关实体
- [[ondo-finance]] — 同类竞品（OUSG 代币化国债基金）
- [[curve]] — STBT 在 Curve 池中提供流动性
- [[circle]] — 稳定币出入金通道

## 来源
- [[来源_2023-08_RWA实现路径_OffChain-OnChain_美债代币化]]
