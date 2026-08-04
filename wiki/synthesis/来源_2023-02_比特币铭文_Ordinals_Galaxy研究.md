---
type: source
source_type: article
url: https://www.galaxy.com/insights/research/bitcoin-ordinals-inscriptions-5-billion-nft-market/
author: Galaxy Research
date: 2023-02-28
ingested: 2026-06-29
---

# 比特币铭文和序号 — Galaxy 深度研究报告

## 阅读证据
- 总行数: 332
- Q1 (前25%): 自2022年12月14日起，超过200,000个铭文（inscriptions）已在比特币上被铸造。Casey Rodarmor 发布的 ORD 开源软件运行在 Bitcoin Core 全节点之上，可将任意文件编码进比特币交易的 witness 数据中。
- Q3 (中后25%): 假设 1 sat/vByte 费率，以 $23,000/BTC 计算，铭刻一个完整的 10,000 件 BAYC 级别收藏品需要约 9.95 BTC（约 $228,943）。铭文费用与数据体积（vbytes）和 sat/vByte 费率共同决定，高 vbytes 不等于高费用。
- Q4 (最后25%): 以太坊 NFT 占整个 NFT 生态的 92%，用了 3 年才达到 $1bn 市值。Galaxy 预测比特币 NFT 将在不到 2 年内达到 $45 亿市值。铭文的出现对比特币升级的社会共识是利空——比特币社区可能变得更保守，未来 BIP 审查将更严格、激活更慢。
- 图片: 0 张已分析 / 27 张外部 URL 路径不可获取

## 核心要点
1. **铭文 (Inscriptions) 和序号 (Ordinals) 是两个独立概念**：铭文是写入比特币区块链 witness 数据的任意数据块（最大约 4MB），无论 Ordinal Theory 是否存在都可独立存在；序号是基于 Casey Rodarmor 的"序数理论"对单个 satoshi 进行标记和追踪的方法论，依赖链下社会共识。
2. **市场规模预测 — 基准情形 $45 亿**：Galaxy 基于以太坊 NFT 现有市场规模，分别对 PFP、生成艺术、元宇宙物品、实用型、其他等 5 类 NFT 在比特币上的迁移概率建模，得出 bear $1.5bn / base $4.5bn / bull >$10bn 三种情形，同时预测 2025 年前达到 $1bn+ 累计交易量。
3. **对矿工经济是利好**：铭文交易为区块空间提供了"最后买家"的需求地板——铭文交易时间偏好低，可在 mempool 深度较高时等待，从而在没有金融交易时填充未充分利用的区块空间。若仅填充 2022 年未使用的区块空间，可额外产生 330 BTC 交易费（+6.1%）。
4. **对可替代性的担忧被夸大**：即使在最激进的增长假设下，需要 238 年才能铸造 5 亿个铭文（约 5 BTC 的 satoshis），加上每个铭文附带约 10,000 sats 的"邮资"，总计约 50,000 BTC 受影响，仅占 2100 万 BTC 终局供应的 0.24%。
5. **Taproot + SegWit 的技术基础是"意外之喜"**：2017 年隔离见证（BIP 141）将签名数据从交易的 witness 部分获得 75% 的权重折扣，2021 年 Taproot（BIP 341）进一步移除了 witness 数据的大小限制。这两个升级的组合意外地使铭文在经济和技术上变得可行，而社区在升级讨论时从未预见这一用例。
6. **基础设施将在 2023 Q2 前快速成型**：钱包（Sparrow、Electrum、Xverse）、市场（OpenOrdex 使用 PSBT 实现去信任交易）、浏览器（Ordinals.com、Gamma）和铭文服务商（OrdinalsBot、Gamma）已涌现。Yuga Labs 的 TwelveFold 集合（300 件生成艺术）将成为催化剂，推动更多创作者和 OpenSea 等主流市场进入。

## 关键数据
- 铭文数量：自 2022.12.14 起已铸造 200,000+ 个（截至 2023.02 底）
- 单个铭文最大体积：3.96 MB（2023.02 初有人铸造），理论上限 4 MB（区块上限）
- 超额交易费估算：若仅填充 2022 年未使用区块空间，铭文可额外产生 330 BTC 交易费（假设平均 3 sat/vByte），使矿工费总收入从 5,374 BTC 增至 5,705 BTC（+6.1%）
- 铭文费占每日总费比：最高达 23%
- BAYC 级收藏铭刻成本：9.95 BTC / $228,943（10,000 件，1 sat/vByte，BTC=$23,000）
- 市值预测：bear $1.5bn / base $4.5bn / bull >$10bn（2025 年前）
- 可替代性影响：50,000 BTC（含邮资）/ 2100 万 BTC = 0.24%（基准情形，需要 238 年）
- 网络难度：39.2 T / ~300 EH/s（报告撰写时）
- 以太坊 NFT 占市场 92%，用了 3 年达到 $1bn 市值
- 铭文费率趋势：初期 ~90% 低于 2 sat/vByte，53% 已升至 10-20 sat/vByte 区间（报告撰写时）
- 全球艺术市场交易量参照：比特币 NFT 仅需捕捉 1-2% 的 ETH NFT + 全球艺术交易量即可产生 $822mn-$1.65bn 交易量

## 与已有知识的关系
- 补充 [[bitcoin-ecosystem]] — 提供 Ordinals/铭文生态的最早期系统性研究（2023.02），包括 TAM 建模、矿工经济分析、可替代性量化论证，是理解 BTC NFT 赛道起源的基础文献
- 补充 [[nft]] — 详细对比了比特币 NFT 与以太坊 NFT 的技术栈差异（全链上存储 vs 链上指针+链下文件、无智能合约 vs 有智能合约、UTXO 托管 vs 账户模型），提供了 NFT 跨链比较框架
- 补充 [[来源_2023-12_铭文就是2023年DeFi_Summer]] — 前者（2月）是赛道萌芽期的冷静研究，后者（12月）是狂热期的市场观察，对比可清晰看到叙事演化
- 支持 [[来源_2024-02_比特币Runes协议上线前_Alpha机会]] — Galaxy 报告揭示了 Casey Rodarmor 的 Ordinals 创始人背景和 "Ordinal Theory" 哲学，为理解 Runes 协议的起源提供关键上下文
- 补充 [[来源_2024-12_Bankless_2024年NFT十大亮点]] — 在比特币 NFT 兴起初期（2023 Q1）就做出了系统性的市场预测

## 值得记住的引用
> "The emergence of inscriptions, and the low-likelihood that the functionality is ever removed from the project, has the potential yet again evolve Bitcoin, driving new use cases, interest, and adoption."
> — Galaxy Research 结论，强调铭文功能不太可能被移除，将持续推动比特币演进

> "there is only one clear loser in this debate: social consensus for Bitcoin upgrades."
> — 关于铭文对比特币治理的影响：Taproot 升级时社区从未预见到铭文的出现，今后每次 BIP 升级将面临更严格的审查

> "Even the 500m inscriptions tied to ordinals would see only 0.2% of Bitcoin's terminal supply become 'non-fungible.'"
> — 对可替代性担忧的量化反驳：即使极端情形下，影响也微乎其微

> "Inscriptions transactions have a lower time preference than financial transactions, Inscribers would choose to settle when average fee rates are lower, thus creating a constant floor of demand for blocks."
> — 铭文交易作为区块空间"最后买家"的经济逻辑

## 我的笔记
这篇报告是 Ordinals 赛道的基础文献，至今在以下方面仍有价值：1) 铭文 vs 序号的区分概念框架——很多后来的中文文章将两者混用，但 Galaxy 在早期就明确指出了这个区分的重要性；2) TAM 建模虽然保守（仅基于现有 NFT 类别推断），但其分层分析的方法论值得借鉴；3) 对比特币治理影响的判断具有前瞻性——"社会共识受损"这个论点在后续的 OP_CAT、CTV 等 BIP 辩论中反复应验。报告的最大盲点是完全没有预料到 BRC-20 代币标准的出现——这说明了即使是顶级研究机构，对"可组合性涌现"的预测力也是有限的。
