---
type: source
source_type: article
url: https://twitter.com/XResearchDAO/status/1561623620786368512
date: 2022-08-21
ingested: 2026-07-02
---

# X Research DAO 推特线程：NFTfi 赛道全景梳理

## 阅读证据
- 总行数: 92
- Q1 (前25%): NFTfi P2P借贷平台累计放款额2.25亿美元，当前放款额2300万美元，总交易数14,261笔
- Q3 (中后25%): Sudoswap使用联合曲线（Bonding Curve）允许LP自行设置参数delta，控制大额订单滑点恶化，与传统恒定乘积AMM（如NFTX）省去NFT兑换ERC-20的过程
- Q4 (最后25%): Putty V2 Beta于2022年6月30日上线，平台上已有22个蓝筹NFT；Tribe3定位为"专为NFT生态系统构建的终极Dex"
- 图片: 0 analyzed / 3 decorative skipped（均为本地相对路径，无法解析）

## 核心要点
1. **NFTfi五大赛道划分**：借贷（P2P/P2Pool）、流动性方案（碎片化/众筹/流动性池）、聚合器、定价与预言机、金融衍生品，几乎所有方案围绕提高流动性、可定价性和资金利用率展开。
2. **借贷模式的分化**：NFTfi（P2P）累计放款2.25亿美元，依赖Upshot和NFTbank定价，贷款期限7-90天；BendDAO（P2Pool）接受社区投票的蓝筹NFT，底价来自OpenSea和LooksRare预言机，提供48小时强平保护。
3. **流动性方案的三条路径**：碎片化（Fractional.art/Unicly将NFT分割为ERC-20）、众筹（Partybid的"派对"众筹模式）、流动性池（NFTX/NFT20/Sudoswap以底价聚集同类NFT，其中Sudoswap的Bonding Curve AMM创新性最高）。
4. **聚合器市场集中化**：Genie（630+用户，5,500+ ETH交易量）和Gem形成双寡头，垂直聚合器ENS.vision在ENS域名交易细分赛道占据约90%份额。
5. **NFT衍生品仍在早期**：包括预测市场（Reality Cards）、永续合约（NFT Perp、Injective BAYC永续）、期权（Putty V2）和DEX（Tribe3），所有项目数据表现不尽如人意。
6. **定价预言机是核心瓶颈**：NFT定价模型已有较成熟方案（Abacus博弈论/Banksea机器学习/Upshot即时报价），但无法批量使用和实时报价；基于机器学习的预言机技术上已能落地但仍需大量数据沉淀。

## 关键数据
- NFTfi协议：累计放款额2.25亿美元，当前放款额2300万美元，总交易数14,261笔
- Genie聚合器：631名用户完成1,600+笔交易，交易量超过5,500 ETH
- BendDAO：48小时强平保护，抵押资产由社区投票确定（仅限蓝筹NFT如BAYC/CryptoPunks）
- Putty：V2 Beta于2022年6月30日上线，平台上22个蓝筹NFT
- Fractional.art：NFT锁定在智能合约后返还ERC-20代币，可在Uniswap或SushiSwap流动性池交易

## 与已有知识的关系
- 补充 [[nft]] — 本文内容高度重叠于 [[来源_2022-08_NFTfi_NFT借贷_市场全景_火币研究院]]（源URL: https://research.huobi.com/#/ArticleDetails?id=306），本文为该研究的精简版Twitter线程，由X Research DAO成员 @Web3AndyHoo 撰写整理
- 补充 [[bend-dao]] — 提供BendDAO 48小时强平保护、社区投票抵押资产列表、OpenSea/LooksRare底价预言机等具体机制细节
- 补充 [[sudoswap]] — Sudoswap使用Bonding Curve允许LP设置参数delta，与NFTX等传统恒定乘积AMM形成对比，被视为"Uniswap V3之于V2"
- 补充 [[nftx-protocol]] — NFTX存入NFT获取vToken，与NFT20、Sudoswap构成2022年NFT流动性池三大方案

## 值得记住的引用
> "NFTP2P借贷：双方依赖 Upshot 和 NFTbank 的价格反馈；借款人存入 NFT，贷款人提出要约，双方达成一致同意的最终交易条款。贷款期限选项可在 7/14/30/90 天或定制。"

> "Sudoswap 与 NFTX 等传统 AMM 不同的地方还在于 Sudo 省去了将 NFT 兑换为 ERC-20 的过程，并且玩家可以自行选择设置单边或双边交易池。因而这类基于联合曲线的 AMM 之于恒定乘积的 AMM 可以被认为是 Uniswap 的 V3 之于 V2。"

> "NFT聚合器已经出现了强者恒强的状态，未来将与NFT交易市场一起协同发展，NFT聚合器与交易市场及数据分析工具的纵向整合是大势所趋。"

## 我的笔记
1. 本文实际上是火币研究院2022年8月NFTfi全景报告的精简Twitter版本，主要内容来自同一研究报告，因此与已有来源 [[来源_2022-08_NFTfi_NFT借贷_市场全景_火币研究院]] 高度重合。区别在于去掉了大量详细数据和机制说明，保留了五大赛道的框架性描述。作为一个Twitter线程，它在这个篇幅下已经做得相当全面——但同时意味着其独立信息增量有限。
2. 值得注意的是，文末的"NFT新兴玩家"作为收尾显得突兀，暗示了原始Twitter线程可能被截断或后续内容未完整收录。Sudoswap的Bonding Curve AMM是本文的创新性亮点——将Sudoswap定位为"Uniswap V3之于V2"是当时一个精准判断，后来Sudoswap确实在NFT AMM领域占据了一席之地，反过来验证了此文的判断力。
