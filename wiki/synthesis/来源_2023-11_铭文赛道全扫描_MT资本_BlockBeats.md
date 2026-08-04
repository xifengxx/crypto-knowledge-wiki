---
type: source
source_type: article
url: https://www.theblockbeats.info/news/47753
date: 2023-11-20
ingested: 2026-07-02
---

# MT资本研究：铭文（Inscription）赛道全链盘扫描

## 阅读证据
- 总行数: 285
- Q1 (前25%): SegWit 升级将满载区块交易容量从约 1650 笔提升至约 2700 笔，并引入 Bech32 编码和两种创新脚本类型
- Q3 (中后25%): BRC-420 首个通证"蓝盒子"从初始 0.15 美元上涨至 1000 美元，开发者短时间内获得显著链上版税收入
- Q4 (最后25%): Galaxy Research 预测到 2025 年 Ordinals 市值达 50 亿美元，但仅半年内铭文数量已从 26 万个增长至 3300 万个（126 倍），ORDI 市值达 4 亿美金，SATS 市值达 3 亿美金
- 图片: 0 analyzed / 10 decorative skipped (image files not downloaded for this article)

## 核心要点
- **技术驱动**：比特币 SegWit（2017）和 Taproot（2021）两次关键升级为铭文赛道提供了技术基础——SegWit 引入区块权重概念提升交易容量，Taproot 引入 Schnorr 签名和支持复杂脚本，为 BTC 可编程性和可扩展性打开大门
- **矿工利益转型**：铭文繁荣显著提升矿工手续费收入占比——从 2023 年 8 月 19 日的 2.4% 升至 11 月 16 日的 23.46%。预计到 2024 年 4 月比特币减半时可能达 50%。矿工更关注交易次数而非铭文价格
- **Ordinals 与 BRC-20 分化**：Ordinals 创始人 Casey Rodarmor 对 BRC-20 不满，划清界限甚至要求币安删除 ORDI 介绍中的 Ordinals 关联。BRC-20 的第三方索引器依赖和两步转账设计成为系统薄弱点
- **Atomicals/ARC-20 的"正统"路线**：以 1 token = 1 sat 的 UTXO 绑定设计，引入 PoW 公平铸造（Bitwork Mining 前缀参数），无需第三方索引器，技术上更符合比特币原教旨主义
- **RUNE/PIPE 的探索**：Casey 提出 RUNE 概念但仅在设计阶段；BennyTheDev 在 Casey 架构基础上实现了 PIPE Protocol，是 TRAC/BTC 生态中的重要组成部分
- **Bitmap 与 BRC-420 的元宇宙方向**：Bridge 序数理论和位图理论，Bitmap.land Holder 地址超 25000 个超越 Sandbox 成为全链 Holder 最多的元宇宙资产；BRC-420 通过模块化递归铭文创建复杂链上资产，市值约 3000 万美元

## 关键数据
- 矿工手续费占比在三个月内从 2.4%（2023.08.19）升至 23.46%（2023.11.16）
- Ordinals 推出不到一年，已有超过 5 万个代币发行
- BRC-420 "蓝盒子"代币从 0.15 美元涨至 1000 美元，上涨约 6667 倍
- Galaxy Research 预测 2025 年 Ordinals 市值 50 亿美元，但仅半年铭文从 26 万增长至 3300 万（126 倍），远超预期
- ORDI 市值约 4 亿美元，SATS 市值约 3 亿美元（截至撰写时）
- Bitmap.land Holder 地址超 25000 个，超越 The Sandbox
- BRC-420 市值约 3000 万美元，超过 200 个开发团队围绕 Bitmap 建设
- ETHS 代币早期铸造价格约 0.5 美元，后涨至约 3000 美元
- Nostr Assets 空投 TRICK & TREAT 各 2.1 亿枚，总计 4.2 亿枚，空投占比约 20%，价值约 2000 美元
- Polygon 链上 PRC-20 代币 POLS 总发行量 2100 万张，铸造费不到 0.05 Matic
- 比特币网络单日交易费用达 1160 万美元，自 2020 年以来首次超过以太坊

## 与已有知识的关系
- 补充 [[ordinals]] — 详述 Ordinals 与 BRC-20 的分化、Casey Rodarmor 对 BRC-20 的不满和划清界限，以及 ord 协议中父子铭文/诅咒铭文等索引扩展
- 补充 [[brc20]] — 详述 BRC-20 的两步转账机制（先归集再转账）导致垃圾交易问题，Domo 在 Ordinals Summit 上提出的 Inscription-based Virtual Machines 和 Rollup 概念
- 补充 [[atomicals]] — 详述 Bitwork Mining 前缀参数设置的 PoW 铸造过程，ATOM 为第一个代币且很快被挖完
- 补充 [[brc420]] — 详述"蓝盒子"从 0.15 美元到 1000 美元的涨势、Bitmap Over 200 开发团队、RCSV 全链游戏计划和 BTC 扩容方案
- 补充 [[nostr-assets-protocol]] — 详述 TRICK & TREAT 万圣节空投具体数据（各 2.1 亿枚，20% 空投比例）
- 补充 [[taproot-assets]] — 详述 Lightning Labs + Jack Dorsey 支持背景，对比 BRC20/ARC20 的发行模式差异（预铸造分发 vs 自由铸造）
- 补充 [[ethscriptions]] — 详述 iERC20 协议、$Ethi 代币、iERC20 的 EVM 跨链功能和 PoW 公平挖矿计划
- 补充 [[runes]] — 详述 Casey 的 RUNE 概念六项设计特点和 BennyTheDev 的 PIPE 实现
- 补充 [[bitcoin-ecosystem]] — 铭文赛道全景（BRC-20/ARC-20/Rune/BRC-420/BRC-100/Taproot Assets/Nostr Assets）的完整技术对比

## 值得记住的引用
> "铭文存放于输入的 Taproot 脚本中，而 Colored Coin 存放于输出中。"

> "BRC20 需要借助第三方排序器在 BTC 链下记录账本，这增加了额外的复杂度，并成为了系统的薄弱点。"

> "Atomicals 从根本上重新思考了如何在比特币上中心化、不可篡改且公平地发行代币。它以聪作为基本「原子」，每个聪的 UTXO 代表一个 Token。"

> "RUNE 仅存在于概念设计阶段，但 BennyTheDev 在 Casey 提出的技术架构基础上实现了 PIPE Protocol。"

> "同一时间，美国比特币矿场大部分时间处于亏损状态，且半导体行业面临制程瓶颈，矿机算力的竞赛趋于缓和。因此，矿工们可能会转向比特币铭文作为新的收入来源。"

## 我的笔记
这篇 MT Capital 研报是铭文赛道在 2023 年 11 月（ORC20 回归、ORDI 刚上币安不久）的全景扫描，覆盖了几乎所有重要协议。作为 2023 年底的 snapshot，它在理解"铭文狂热"全貌方面很有价值——当时市场同时存在 BRC-20、ARC-20、Rune/PIPE、BRC-420、BRC-100、Taproot Assets、Nostr Assets、Ethscriptions 等多个竞争协议，多链铭文也刚刚开始。

需要注意的是，该文写作时（2023 年 11 月），Runes 协议尚未正式上线（仅存在于 Casey Rodarmor 的概念设计中），BRC-100 也只是推出不久。文章本身偏向正面介绍，缺乏对各协议的批判性评估（尤其是实用性不足和炒作属性），且对 BRC-20 的评价明显偏正面——"因为是最原创最先上交易所的协议"——但后来事实表明 BRC-20 因技术缺陷确实被 Runes 部分取代。这也提醒我们：社区共识和先发优势可能会被更好的技术方案逐步侵蚀。
