---
type: concept
created: 2026-07-02
updated: 2026-07-02
tags: [bitcoin, ordinals, runes, btc-ecosystem]
aliases: [符文, Runes协议]
---

# Runes

## 一句话定义
Bitcoin fungible token protocol by Casey Rodarmor — 比特币原生同质化代币协议，采用 UTXO 模型，旨在替代 BRC-20 等基于铭文的代币方案。

## 核心原理
- **基于 UTXO**：Runes 余额由 UTXO 所持有，每个 UTXO 可以包含任意数量的 Runes
- **交易和协议信息**：包含特定脚本的输出被视为协议信息的一部分
- **灵活性**：Runes 的转移通过解释交易中的数据推送来定义
- **发行**：协议消息中的第二个数据推送被视为发行事务
- **简单性和去中心化**：不依赖链下数据，没有原生代币，适合比特币的 UTXO 模型
- **符号分配**：可以有相关符号，但不试图避免符号抢注以保持简单

## 设计动机
Casey Rodarmor 认为 BRC-20（JSON 铭文）、Taproot Assets 等现有方案各有各自不同的缺陷：
- BRC-20 的两步转账机制导致大量垃圾 UTXO 膨胀
- 现有方案依赖链下索引器，技术路径复杂
- Runes 旨在成为最简洁的 UTXO 原生代币方案

截至 2023 年 5 月，Runes 仅有概念设计流出。PIPE 协议是 BennyTheDev 对 Casey 概念的先行实现，发行了 $pipe 代币并迅速完成首轮炒作。

## 关键数据
- 主网上线时间：2024 年 4 月（比特币减半日）
- 代表代币：DOG, RSIC
- 市场份额：上线 3 个月内达到 BTC 代币协议市场的约 30%

## 相关概念
- [[brc-20]] — 同赛道竞争者，基于 Ordinals 铭文的代币标准
- [[ordinals]] — Casey Rodarmor 之前创建的比特币 NFT 协议
- [[bitcoin-ecosystem]] — 比特币生态整体

## 来源
- [[来源_2023-05_BTC_Ordinals生态_代币协议_全景指南]] — 记录了 Casey 提出 Runes 的早期动机（不满 BRC-20 缺陷）和设计原则

