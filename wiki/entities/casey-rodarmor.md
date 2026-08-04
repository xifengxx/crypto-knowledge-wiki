---
type: entity
entity_type: person
created: 2026-07-02
updated: 2026-07-02
tags: [bitcoin, ordinals, runes, developer, protocol]
aliases: [Casey Rodarmor, rodarmor, @rodarmor]
---

# Casey Rodarmor

## 基本信息
- 类型: 比特币协议开发者
- 定位: Ordinals 协议和 Runes 协议创始人
- 关键贡献: 2022 年 12 月创建 Ordinals 协议（ORD 开源软件），引入序数和铭文概念，催生比特币 NFT 生态；2023 年提出 Runes 协议概念，旨在解决 BRC-20 等现有代币方案的缺陷
- X/Twitter: [@rodarmor](https://www.twitter.com/rodarmor)
- GitHub: [casey/ord](https://github.com/casey/ord)

## 核心业务/产品

### Ordinals 协议（2022 年 12 月）
比特币 NFT 的基础协议，运行在 Bitcoin Core 全节点之上，将任意数据（文本/图片/音频等）铭刻在比特币最小单位"聪"上。引入两个核心概念：铭文（Inscriptions）和序数（Ordinals）。依赖于 SegWit（2017）和 Taproot（2021）两次比特币网络升级。

### Runes 协议（2023 年概念提出）
基于 UTXO 的同质化代币协议，旨在替代 BRC-20 等方案。核心设计原则：不依赖链下数据、没有原生代币、适合比特币 UTXO 模型、尽可能简单。Runes 余额由 UTXO 所持有，每个 UTXO 可以包含任意数量的 Runes。

## 关键数据
- Ordinals 协议发布时间: 2022 年 12 月
- ORD 开源软件运行在 Bitcoin Core 全节点之上
- Runes 协议目前仅有概念设计流出（截至 2023 年 5 月），主网上线于 2024 年 4 月比特币减半日

## 争议
- Casey 对 BRC-20 持批评态度，认为其两步转账机制导致大量垃圾 UTXO 膨胀，曾要求币安删除 ORDI 介绍中的 Ordinals 关联
- Casey 认为 BRC-20、Taproot Assets 等现有代币方案"各有各自不同的缺陷"，是创建 Runes 协议的直接动因

## 相关实体
- [[domodata]] — BRC-20 标准创建者，Casey 的 BRC-20 批评促使 Runes 诞生
- [[bennythedev]] — BennyTheDev 的 PIPE 协议是 Casey Runes 概念的首个可用实现
- [[ordinals]] — Casey 创建的比特币 NFT 协议
- [[runes]] — Casey 提出的同质化代币协议

## 来源
- [[来源_2023-05_BTC_Ordinals生态_代币协议_全景指南]]
- [[来源_2025-06_叙事评分_加密货币_NarrativeScore]] — Ignas 引用 Casey 作为 Runes 创始人，认为他"做出了出色的同质化代币模型，但也许本应为 Runes 在比特币上搭建一个 Uniswap AMM 池来维持热度"
- [[来源_2023-05_Ordinals_BRC20_技术生态数据_Biteye]] — 确认 Casey 创建 Ordinals 协议的时间线（2022 年底）、两项技术前提（SegWit 2017 + Taproot 2021）、序数理论的完整编号范围（0-2,100,000,000,000,000）、以及铭文存储在 Taproot 脚本中的技术实现细节
