---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [bitcoin, oracle, brc20, btc-ecosystem, indexer]
---

# Trac

## 基本信息
- 类型: protocol
- 定位: Bitcoin data oracle (Alpha) / BRC-20 去中心化索引器
- 团队角色: BRC20/Rune 生态核心基础设施团队（"BRC20/Rune 依赖 Trac 团队"）
- 关键产品: $PIPE（Trac 创始人基于 Casey Rodarmor 的 Rune 理念编写的首个可用协议）

## 核心业务/产品

Trac 定位为比特币数据预言机（Alpha 协议），核心业务是为比特币生态的同质化代币协议提供去中心化索引器（classifier/indexer）服务：

- **去中心化分类器**: BRC-20 协议仅将代币数据存储在 BTC 输出脚本中，无法实际执行状态变更，必须依赖第三方索引器来记账和执行转账。Trac 提供去中心化分类器方案，解决 BRC-20 索引器中心化的关键脆弱点——曾导致交易所余额计算错误。
- **Rune/PIPE 协议**: Trac 创始人编写了 $PIPE，这是基于 Casey Rodarmor 的 Rune 理念的首个可用实现协议。PIPE 在 UTXO 脚本中写入 Token 数量（相比 BRC-20 精度更高），属于 BTC 资产发行协议中的 Rune 路线。
- **Alpha 数据预言机**: 为比特币链上应用提供可信数据源，是 BTC 生态基础设施层的组成部分。

## 关键数据

- **生态排名**: 在 2024 年初 BTC 衍生协议"正统性 vs 炒作潜力"评估中，BRC20/Rune 路线（依赖 Trac 团队）整体排名第三，仅次于 ARC20 和 Taproot Assets，超过 Lightning/RGB 和 RSK/Stacks。
- **PIPE 协议地位**: $PIPE 被认定为 Rune 概念的"首个可用协议"，在 Casey Rodarmor 正式发布 Runes 协议前占据了先行者位置。

（具体融资数据、用户数、代币市值等信息待补充）

## 竞争优势 / 护城河

- **BRC-20 生态刚需**: BRC-20 协议的天生缺陷（只存数据不执行）使得去中心化索引器成为刚需。Trac 团队是 BTC 资产发行赛道中最主要的去中心化索引方案提供方。
- **先发优势**: 作为 BRC-20 生态最早的去中心化分类器方案之一，已与 BRC-20/Rune 生态深度绑定。
- **Rune 生态卡位**: 通过 $PIPE 协议在 Rune 概念正式发布前占据先行位置，建立了与 Casey Rodarmor Runes 路线的关联性。

## 风险 / 争议

- **正统性争议**: 依赖第三方分类器的 BRC-20 路线本身存在正统性不足的问题——比特币核心社区认为该方案不符合"不修改网络、不扩容区块、不托管私钥"的比特币三原则。Trac 作为 BRC-20 基础设施，面临"改良不治本"的风险。
- **竞品替代风险**: ARC-20（Atomicals 协议）通过 UTXO 绑定设计直接在 BTC 主网处理转账，不需要链下索引器，是 Trac 所服务赛道的结构性替代方案。如果市场从 BRC-20 向 ARC-20 或 Runes（Casey 版）迁移，Trac 的业务基础可能被削弱。

## 相关实体
- [[brc20]] — Trac 提供去中心化索引器的核心服务对象
- [[runes]] — Trac 创始人编写了 $PIPE 作为 Rune 的首个可用协议实现
- [[atomicals]] — ARC-20 协议，不需要链下索引器，是 Trac 的竞争性技术路线
- [[ordinals]] — BRC-20 的底层元协议
- [[taproot-assets]] — BTC 资产发行赛道的另一条路线（Trac 的间接竞争者）

## 来源
- [[来源_2024-02_BTC衍生协议_正统性_炒作分析]] — Trac 团队在 BTC 衍生协议中的定位：BRC20/Rune 依赖 Trac 团队、$PIPE 为首个 Rune 可用协议、去中心化分类器方向

