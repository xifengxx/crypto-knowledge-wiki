---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [bitcoin, tokens, lightning, btc-ecosystem]
aliases: [Taro, Taproot Assets Protocol]
---

# Taproot Assets

## 基本信息
- 类型: 比特币主网代币发行协议
- 开发团队: [[lightning-labs]]（闪电网络核心开发团队）
- 前身名称: Taro（后更名为 Taproot Assets）
- 技术基础: 基于比特币 Taproot 升级，与闪电网络深度绑定
- 定位: 让代币在闪电网络上快速流通

## 核心机制

### 代币注册模式
Taproot Assets 将 BTC 主网视为"代币注册表"（token registry），仅将代币的元数据信息写入 BTC 主网的 UTXO 输出脚本中。与 BRC-20 和 ARC-20 不同，**代币的转账、增发等功能代码不存储在链上**。

### 强制闪电网络流通
代币必须在发行后存入闪电网络才能进行交易。BTC 主网不处理 Taproot Assets 代币的实际转账计算。

### 第三方索引器依赖
代币数据依赖第三方存储索引器。如果离开这些存储索引器，代币将"永远丢失"。用户面临两个选择：
- 自己运行 BTC 全节点 + Taproot Assets 客户端（成本高）
- 完全依赖中心化服务器进行代币交易（中心化风险）

## 发行模式
- **非自由铸造（Non-Fair Mint）**：用户无法直接在 BTC 主网中自行铸造代币
- 由项目方在一个地址中**一次性发行（或注册）所有代币**，然后转入闪电网络分发
- 项目方可以预留部分代币，典型例子如"$trick $treat"
- 往往需要中心化项目方进行空投
- 与 BRC-20 和 ARC-20 的"自由铸造"模式有根本性差异

## 团队背景
Taproot Assets 由 Lightning Labs 开发，得到了推特创始人 Jack Dorsey 和大量融资背景的支持，使其在正统性和社区支持方面优于其他草根项目。

## 正统性评估
- **去中心化程度**：低——被评价为"目前 BTC 代币协议中最为中心化的方案之一"
- **社区接受度**：中——由闪电网络之父 Lightning Labs 发布，没有给 BTC 网络增加负担，社区至少没有反对声音
- **话语权优势**：高——Lightning Labs 的品牌背书提供了"正统性光环"
- **炒作逻辑转变**：从"公平铸造"变为"看项目方格局"，无形中增加了炒作的成本和不确定性

## "本地（Native）代币"技术论证
- 另一视角将 Taproot Assets 定位为比特币的"本地代币"协议，与"客户端验证"方案（BRC-20、USDT-Omni）形成技术二分
- **矿工间接验证机制**：Taproot Assets 的创建、转账、销毁等操作完全遵守 Taproot 交易，矿工在验证 Taproot 交易时实际上也在保护 Taproot Assets 的安全性——尽管矿工自身并不"知道"这些资产的存在
- **交易所集成优势**：只需支持 Bitcoin Core 钱包和闪电网络即可集成，无需像 BRC-20 那样维护独立的索引客户端
- **Bitcoin Core 开发者背书**：Taproot Assets 是少数获得 Bitcoin Core 开发者群体支持的代币协议，与 BRC-20 被 Core 开发者呼吁抵制形成对比

### ⚠️ Contradiction
- 来源 [[来源_2024-02_BTC衍生协议_正统性_炒作分析]] 认为 Taproot Assets 是"目前 BTC 代币协议中最为中心化的方案之一"（理由：非自由铸造、项目方一次性发行、完全依赖索引器且无索引器则代币"永远丢失"）
- 来源 [[来源_2023-06_Taproot_Assets_比特币本地代币_公众号]] 认为 Taproot Assets 是"本地代币"（native），矿工间接参与验证，具有与比特币同等的去中心化安全性
- 两种观点的分歧在于评价维度不同：中心化评估聚焦**分发和治理层面**（谁发行、谁索引），本地性评估聚焦**交易验证层面**（谁验证交易有效性）。两者不直接冲突——一个协议可以在分发上中心化但在交易验证上享受矿工安全。

## 关键引用
> "正统性是一种虚幻而朦胧的概念，拥有话语权的'教宗'说你合法你就是合法。"

## 与已有知识的关系
- 与 ARC-20 形成最鲜明的对比：ARC-20 最去中心化、无需索引器，Taproot Assets 最中心化、完全依赖索引器
- 但 Taproot Assets 凭借 Lightning Labs 的品牌背书获得了"免于被骂"的待遇

## 相关实体
- [[lightning-network]] — Taproot Assets 代币必须在闪电网络中交易
- [[lightning-labs]] — 开发团队
- [[atomicals]] — 对比：ARC-20 走最去中心化路线
- [[brc20]] — 同为代币协议但有不同技术取舍

## 来源
- [[来源_2024-02_BTC衍生协议_正统性_炒作分析]] — 完整的技术机制拆解：代币注册模式、闪电网络强制流通、索引器依赖、非公平分发、正统性评价
- [[来源_2023-06_Taproot_Assets_比特币本地代币_公众号]] — "本地代币（native）vs 客户端验证"二分框架；矿工通过 Taproot 交易间接验证 Taproot Assets 的机制论证；Bitcoin Core 开发者背书；交易所集成优势分析；ERC-20 功能差距认知；2014年 OP_RETURN 缩减历史背景
- [[来源_2023-11_铭文赛道全扫描_MT资本_BlockBeats]] — MT Capital 2023年11月扫描：Lightning Labs + Jack Dorsey 支持背景、与 BRC20/ARC20 的发行模式对比（预铸造分发 vs 自由铸造），NostrAssets 协议关联
