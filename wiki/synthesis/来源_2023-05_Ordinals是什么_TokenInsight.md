---
type: source
source_type: article
url: https://tokeninsight.com/zh/research/analysts-pick/what-are-btc-ordinals-are-they-ape-able
date: 2023-05-05
ingested: 2026-07-02
---

# BTC Ordinals 技术解析与早期生态前景判断 — TokenInsight QuantumZebra

## 阅读证据
- 总行数: 177
- Q1 (前25%): 截至2023年5月，比特币链上已创建约35万个Ordinals；图片占比62.8%，文本占比36.6%，两者合计占99.4%。
- Q3 (中后25%): Galaxy Research 估计以太坊 NFT 市值约169亿美元（最差情况117亿美元），Ordinals 市值至多数千万美元；作者认为 Ordinals 相比以太坊 NFT 存在"内置的1000倍"增长空间。
- Q4 (最后25%): 作者明确看空早期 Ordinals 项目（Yuga TwelveFold 除外），类比以太坊上的 Mooncats（CryptoPunk 时代的 OG 项目）如今无人问津，认为技术成熟和社区扩大后早期项目将被取代。
- 图片: 0 analyzed / 4 decorative skipped（本地图片目录不存在，图片无法获取）

## 核心要点
- Ordinals 协议由 Casey Rodarmor 于2022年12月发布，通过两步流程铸造比特币 NFT：先在比特币链上输入铭文（inscription）内容，再将其绑定到特定聪（satoshi）。技术前提是 SegWit（2017）和 Taproot（2021）两次网络升级。
- 铭文通过 Taproot script 写入交易的见证数据（witness data），完全链上存储。单个数据推送上限 520 字节，理论最大容量 400,000 字节（约一个比特币区块大小）。
- Ordinal 理论（序数理论）是一个链下编号方案，基于"开采顺序编号"和"先进先出追踪"两条规则为每个聪分配并追踪序列号。Ordinal 的存在依赖于社区对这套理论的共识。
- Yuga Labs 的 TwelveFold 拍卖总收入 735 BTC（约1650万美元），最高出价 7.12 BTC（约16万美元），是本文撰写时最引人注目的 Ordinals 项目。
- 作者认为基础设施（市场和钱包）是当前最大机会——Ordinals 的"OpenSea 和 MetaMask"位置空缺。截至发稿，已有至少十几个交易市场，Google 文档曾作为买卖工具说明行业极其早期。
- 作者对 Ordinals 项目本身持悲观态度：除 Yuga 的 TwelveFold 外，其他早期项目随着技术成熟和社区壮大将被取代。以太坊 NFT 发展史中每 1-2 个月出现一个新蓝筹，Ordinals 的时间线会因认知提前而缩短。

## 关键数据
- 第一个 Ordinal 创建于 2022年12月14日，但直到 2023年2月才开始流行。
- Yuga Labs TwelveFold 拍卖总收入 735 BTC（约1650万美元），最高出价 7.12 BTC（约16万美元）。
- Galaxy Research 以太坊 NFT 市值估计范围 117-169亿美元，NFTGo 估计 227.50亿美元，Degneknows 估计 472.40亿美元。
- 铭文理论最大容量为 400,000 字节（单次数据推送上限 520 字节）。
- 比特币市值是以太坊的 2.3 倍。
- ERC-721 于 2018年1月提出、2018年6月最终确定，作者认为当前 Ordinals 相当于 2018年8月的以太坊 NFT。

## 与已有知识的关系
- 补充 [[ordinals]] 概念页 — 本文提供了 Ordinals 协议早期的精确技术细节（铭文的技术实现代码示例、Ordinal 理论的先进先出追踪规则详解），这些在现有页面中没有覆盖。
- 补充 [[yuga-labs]] 实体页 — TwelveFold 拍卖的具体数据（735 BTC 总收入、7.12 BTC 最高出价）补充了 Yuga Labs 在比特币生态中的活动。
- 补充 [[casey-rodarmor]] 实体页 — 本文确认 ORD 开源软件运行在 Bitcoin Core 全节点之上的具体技术架构。
- 补充 [[nft]] 概念页 — 提供 Ordinals 在比特币链上实现 NFT 的技术路径对比（全链上存储 vs 以太坊链下指针）。

## 值得记住的引用
> "对以太坊NFT来说，MetaMask是一个糟糕的钱包。所以钱包这里的机会更大。在征服 Ordinals 后，一个项目还可以继续接管以太坊 NFT，前途不可限量。"

> "退回 2018 年 8 月，虽然 CryptoPunks 已经有一年的历史，但距离 BAYC 和 Azuki 还早。当然，Ordinals 的时间线会缩短，因为人们已经知道要去哪里了。"

> "对于这种在产品能用之前就发币的项目，我一点也不会碰。" —— 针对已发币的 Ordinals 市场项目 oBTC 和 ORD

## 我的笔记
- 本文作者 QuantumZebra 对基础设施 vs 项目的判断非常清晰，但回头看，其"Ordinals = 2018年8月的以太坊NFT"时间类比过于乐观——实际上 Ordinals 在2023年5月已经经历了爆发，而以太坊 NFT 从2018年到2021年的爆发用了3年。时间线缩短的判断正确，但幅度被低估。
- 作者看空早期 Ordinals 个人项目的观点在事后被部分验证（大量早期铭文项目确实被遗忘），但 BRC-20 代币作为一类新资产的出现（此文未提及，因 BRC-20 刚出现）改变了 Ordinals 生态的格局——Ordinals 的价值最终不只在于 NFT，更在于代币发行范式的创新。
