---
type: source
source_type: article
url: https://www.theblockbeats.info/news/35870
date: 2023-03-27
ingested: 2026-07-02
---

# 我们试着在比特币上交易NFT，体验离OpenSea差多少？

## 阅读证据
- 总行数: 156
- Q1 (前25%): 一个多月前（约2023年2月），探索比特币NFT需要下载Bitcoin Core并花费数日同步全部区块数据，再通过命令行安装Ord Wallet，还要学习用Sparrow管理UTXO防止NFT被转丢。基建在极短时间内发生了质变。
- Q3 (中后25%): Magic Eden首次购买时会要求"Prepare your wallet"，创建一个单独的UTXO确保NFT不会在转移中丢失。Hiro Wallet在此过程中弹窗要求对PSBT进行签名。
- Q4 (最后25%): 比特币没有智能合约，每个NFT系列不是通过合约识别，必须由每个NFT市场手动收录。没有聚合器，需要挑选流动性较大的市场。比如Bitcoin Frog在Gamma上只有个位数挂单，在Magic Eden上则有很多。
- 图片: 0 analyzed / 26 decorative skipped / 0 external URLs unavailable

## 核心要点
- 2023年3月，比特币NFT交易体验已接近OpenSea，但仅仅一个多月前还极其硬核（需同步全节点+命令行操作+UTXO管理）。基建迭代速度惊人。
- 主流比特币NFT市场已全面采用PSBT（部分签名比特币交易）技术实现无需信任的交易，解决了"市场是否盗走用户NFT"的信任问题。
- 两类市场范式并存：(1) 内置钱包市场（Ordinals Wallet）——网站内置钱包，无需浏览器插件，交易无需额外签名；(2) 外置钱包市场（Magic Eden/Gamma/Openordex）——需安装Xverse/Hiro Wallet/UniSat等浏览器插件，每次交易需签名确认。
- Magic Eden从Solana延伸至比特币NFT市场，需要用户先"Prepare your wallet"创建隔离UTXO，这是比特币NFT交易特有的步骤，源于UTXO模型下防止NFT被误转走的需求。
- 三个未解决问题：(1) 无双约→收藏品无法通过合约识别，需各市场手动收录；(2) 内置钱包和外置钱包市场之间存在壁垒，资产迁移不便；(3) 各NFT系列缺少数据分析工具。

## 关键数据
- NFT交易市场数量：至少5个主流平台（Ordinals Wallet, Magic Eden, Gamma, Ordswap, Openordex）
- 支持的外置钱包：Xverse、Hiro Wallet、UniSat 三种浏览器插件
- Ordinals Wallet内置钱包：无需签名（网站预先完成签名），需保存12个助记词
- Magic Eden首次购买步骤：Prepare your wallet（创建隔离UTXO）→ PSBT签名→二次签名确认购买
- Bitcoin Frog案例：Gamma上个位数挂单 vs Magic Eden上大量挂单，说明流动性极度分散

## 与已有知识的关系
- 补充 [[ordinals]] — 记录了Ordinals NFT交易基础设施从"命令行+全节点"到"浏览器+插件钱包"的关键转折点（2023年2月→3月），PSBT技术成为信任基础
- 补充 [[bitcoin-ecosystem]] — 这是BTC生态交易层从0到1的早期快照：在BRC-20爆发（2023年4-5月）之前，市场已在搭建基本交易设施
- 补充 [[opensea]] — 提供了一个具体对比基准，说明比特币NFT交易体验在2023年3月已接近OpenSea，但缺乏智能合约带来的可组合性和聚合器生态
- 补充 [[nft]] — 揭示比特币NFT与以太坊NFT在交易层面的根本差异：UTXO管理需求（Prepare your wallet）、无合约→手动收录
- 与 [[来源_2023-Q3_比特币生态DApp盘点_DeFi_NFT_基础设施_钱包_BlockBeats]] 形成时间线对照——本文是2023年3月的交易实操，Q3那篇是半年度全景盘点，可看到基础设施从动手教程到生态图谱的演进

## 值得记住的引用
> "一个多月前，想要探索比特币 NFT 世界，需要下载安装 Bitcoin Core，花费可能数日的时间等待同步比特币诞生至今的所有区块数据，再通过命令行安装 Ord Wallet... 搞定以上问题后，还要学习怎么用 Sparrow 管理 UTXO 防止比特币 NFT 被转丢... 头大，实在难顶。"
>
> "可以看见，购买比特币 NFT 的过程和在 OpenSea 上购买 ETH NFT 在体验上已经相差无几。但是依然有一些暂时还没有解决的问题：比特币没有智能合约，每个 NFT 系列也不是通过合约来识别，必须由每个 NFT 市场手动收录。"

## 我的笔记
这篇文章的价值不在于教程内容（早已过时），而在于它精确捕捉到了比特币NFT交易体验的"临界点时刻"——从极客专属到普通用户可用的质变窗口。值得注意的是，作者说"体验离OpenSea差多少"的答案是"相差无几"，但这个判断过于乐观：三个月后的Q3 2023盘点显示，市场碎片化（手动收录+缺乏聚合器）正是比特币NFT赛道以太坊相比最大的结构性短板，至今未完全解决。另外，PSBT作为无需信任交易的答案被寄予厚望——Ordinals创始人甚至怒驳Yuga Labs拍卖方案——说明技术路线的选择从一开始就充满争议和竞争。
