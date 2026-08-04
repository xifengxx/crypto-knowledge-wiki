---
type: source
source_type: article
url: https://www.theblockbeats.info/news/50997
author: Jasmine（Ordinals 社区用户）
date: 2024-02-22
ingested: 2026-07-01
---

# Casey 首谈 Runes 协议细节：前 10 个 Runes 只支持 Open Mint

## 阅读证据
- 总行数: 67
- Q1 (前25%): Runes 协议核心基于 UTXO，设计极其简洁——交易输出可同时包含比特币和多种 Runes 代币（例如 1 BTC + 100 个 A Runes + 1000 个 B Runes 在同一输出中）
- Q3 (中后25%): Runes 转账通过 OP_Return 输出定向分配——不包含 OP_Return 或包含但无数据时，所有 Runes 默认转入第一个非 OP_Return 输出；包含路由数据时可按指定规则分配
- Q4 (最后25%): Casey 将前 10 个 Runes（Rune 0 - Rune 9）硬编码进协议，只支持 Open Mint，避免被 VC 或项目方抢先预挖；同时向社区征集名称建议，提名 COMMUNISTRUNE、ANARCHISTRUNE、CYPERPUNKRUNE 等
- 图片: 0 张已分析（文中无内嵌图片）

## 核心要点
1. **Runes 技术架构 = UTXO 原生代币协议**：与 Ordinals 不同，Runes 不依赖 Ordinal 协议，而是直接在 UTXO 层面嵌入同质化代币信息，同一 UTXO 可混合包含 BTC 和多种 Runes
2. **名称渐进式释放机制**：上线前 4 个月要求名称长度 >= 13 个字母（如 "PEPE•IS•AWESOME"），此后每 4 个月减少 1 个字母，直至下一次减半时解锁单字符名称（共 26 个），目的是防止热门短名称被快速抢注
3. **发行采用 Commit-Reveal 防抢跑**：Rune 的「蚀刻」(Etch)使用两阶段提交，避免矿工提前知晓 Rune 名称进行 MEV 抢跑
4. **SPV 钱包兼容**：Runes 设计兼容轻量级 SPV 钱包（Simple Payment Verification），用户无需下载完整区块链即可管理和使用 Rune 代币
5. **前 10 个 Runes 硬编码为 Open Mint**：Casey 认为当前市场投机严重，第一个 Rune 将成为"谢林点"，因此将 Rune 0-9 硬编码为只支持公平铸造，不允许预挖，确保社区公平参与
6. **Casey 对同质化代币的真实态度**：直言 99.9% 的同质化代币都是骗局，认为从业者应坦率承认这是一个充满赌博和投机的行业——"IT'S JUST FOR FUN!"

## 关键数据
- 名称长度初始要求：13 个字母（上线前 4 个月），之后每 4 个月递减 1 个字母
- 单字符 Rune 总数上限：26 个（A-Z），需等到下一次比特币减半时解锁
- OP_Return 数据上限：80 字节（比特币协议原生限制，Runes 复用了此机制）
- 硬编码 Open Mint Runes 数量：10 个（Rune 0 - Rune 9）
- 名称字符集：大写字母 A-Z + "•" 符号（例如 "PEPE•IS•AWESOME"）
- 单位符号：支持传统货币符号（如 $）和任意 Unicode 表情符号

## 与已有知识的关系
- 补充 [[runes]] — 提供了 Runes 协议的**技术实现细节**（UTXO 层面操作、OP_Return 转账路由、蚀刻机制），而非仅是宏观定位
- 补充 [[ordinals]] — 澄清 Runes 与 Ordinals 是两个独立协议，Runes 不依赖 Ordinal 理论，尽管创始人为同一人
- 与 [[来源_2024-02_比特币Runes协议上线前_Alpha机会]] 形成互补 — 前者聚焦 Alpha 机会和市场情绪，本文聚焦技术实现细节和 Casey 的个人立场

## 值得记住的引用
> "Runes 并不发行「垃圾」币，只是提供一个发行「垃圾」币的场所。" — Casey 对 Runes 协议的定位

> "同质化代币 99.9% 都是骗局，大家也别冠冕堂皇的说自己要改变世界，坦率地承认这是一个充满赌博和投机的行业，以诚相待，对所有人都好。IT'S JUST FOR FUN!" — Casey 在 hellmoneypod 节目中的坦诚表态

> "为了避免第一个 Rune 被 VC 或项目方抢走或预挖，Casey 决定将前 10 个 Runes（Rune 0 - Rune 9）硬编码至 Runes 协议中，只支持 open mint，让大家都能公平地参与其中，一起玩起来。" — 前 10 个 Runes 公平发射的决策背景

## 我的笔记
Casey 对同质化代币的"骗局"评价和他设计 Runes 协议的行为看似矛盾，实际上有内在一致性：他认为既然投机和赌博是这个行业的现实，不如提供一个技术上更优雅、更省区块空间的工具来承载它。这与以太坊上很多"要改变世界"但实际只是资金盘的 DeFi 项目叙事形成鲜明对比。

前 10 个 Runes 硬编码为 Open Mint 是一个聪明的博弈论设计——它创造了一个"创始人的创始人"无法被收买的硬约束。如果这 10 个 Runes 中有一个成为谢林点进而获得巨大市值，这个机制本身就会成为 Runes 协议的最强叙事。Casey 不是要消除投机，而是要让投机的基础规则对所有人公平。
