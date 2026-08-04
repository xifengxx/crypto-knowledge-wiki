---
type: source
source_type: article
url: https://www.decentralised.co/p/hyper-liquid
date: 2025-06-27
ingested: 2026-07-02
---

# 超流动性Hyperliquid生态系统：解决 DeFi 的流动性危机

## 阅读证据
- 总行数: 205
- Q1 (前25%): Solana 以仅 18 亿美元稳定币供应，在 2025 年上半年结算了 11.5 万亿美元稳定币，每枚稳定币换手超过 6300 次
- Q3 (中后25%): Builder codes 是无需许可的费用分享机制，让所有应用接入同一个统一的 20 亿美元+ 流动性池而不碎片化——当新交易机器人带来 1000 个活跃用户时，这些人增加的是所有应用共享的同一流动性池的交易量
- Q4 (最后25%): HyperEVM 生态已积累超过 15 亿美元 TVL，覆盖 100 多个项目，其中 HyperLend 达 4.7 亿美元、HypurrFi 达 3.19 亿美元
- 图片: 0 analyzed / 8 decorative external images skipped (all from substackcdn.com, external URLs unavailable)

## 核心要点
- Hyperliquid 的核心战略是成为 DeFi 的"流动性引力中心"——通过统一的订单簿让资本难以离开，类似历史上丝绸之路、Rothschild 信息网络和 JP Morgan 基础设施垂直整合的模式
- DeFi 当前的流动性碎片化问题根源于孤立抵押品账户、超额抵押贷款和互不通信的流动性池——传统金融在右下象限（高资本效率、需许可），DeFi 在左上象限（低资本效率、无需许可），Hyperliquid 要占据右上象限（高资本效率且无需许可）
- 预编译（Pre-compiles）让 HyperEVM 上的借贷协议可以直接读写 HyperCore 订单簿，将 10 万美元清算成本从以太坊上的约 1500 美元（含 MEV）降至低于 5 美元——仅需 2100 gas 获取价格数据 + 47000 gas 执行清算
- Builder codes 是一种创新的经济模型，允许开发者通过路由用户交易到 Hyperliquid 订单簿来获得永久性费用分成，类似于电力从每座工厂自建发电厂到接入公共电网的转变——开发者只需关注产品本身，无需操心流动性引导
- HyperEVM 生态已有 100+ 项目、15 亿美元 TVL，涵盖借贷（HyperLend/HypurrFi）、DEX（HyperSwap/KittenSwap）、流动性质押（StakedHYPE/Kinetiq/LoopedHYPE）等赛道，所有项目共享 20 亿美元+ 的深度订单簿流动性
- 与 MegaETH、Monad 等新链的竞争关键在于经济设计而非技术性能——技术性能已是竞争门槛，共享流动性和资本效率的经济设计才是长期价值来源

## 关键数据
- Solana 以 18 亿美元稳定币供应结算了 11.5 万亿美元稳定币，每枚稳定币换手超 6300 次；Base 上 2025 年稳定币换手超 1700 次
- 以太坊上 10 万美元清算：预言机 8 万 gas（10-30 美元）+ 外部 DEX 交换 15 万 gas（15-50 美元）+ 滑点损失 0.5-2%（500-2000 美元）+ MEV 约 1% = 总计约 1500 美元；Hyperliquid 上仅需 2100 gas 加 47000 gas，清算成本低于 5 美元
- Hyperliquid 订单簿流动性超过 20 亿美元，是加密领域（不仅是 DeFi）中流动性最强的交易所之一
- HyperEVM TVL 超过 15 亿美元，覆盖 100+ 项目；其中 HyperLend 4.7 亿美元、HypurrFi 3.19 亿美元
- HyperSwap & KittenSwap 每日处理 7500 万美元交易量（但仍是 AMM 模式，需自行引导流动性，有别于主交易所的订单簿模式）
- 以太坊上交易成本约 10 美元时会阻止小交易者频繁交易，但 Solana 上基本零费用的环境改变了行为模式
- 传统 DeFi 借贷协议通常提供 75% 的贷款价值比（LTV），Hyperliquid 上的协议可将缓冲消除、提供 90%+ 的 LTV

## 与已有知识的关系
- 补充 [[hyperliquid]] — 本文从"流动性基础设施"角度补充了 Hyperliquid 的战略框架：历史类比（丝绸之路/Rothschild/JP Morgan 基础设施垄断）、具体清算成本数据对比（$1500 vs $5）、BasedApp 案例、以及 builder codes 的"电力公共电网"隐喻
- 补充 [[defi]] — 提供了关于流动性碎片化问题的深层分析，特别是将传统金融、当前 DeFi、和 Hyperliquid 模式放在"许可程度x资本效率"二维坐标系中定位
- 补充 [[perp-dex]] — 从"流动性共享"视角补充了 Perp DEX 赛道的竞争维度，提出"四重优势"框架（流动性获取/费用分享/开发聚焦/跨协议协同）
- 支持 [[来源_2025-06_Hyperliquid_Degen擂台_IOSG]] 中关于 Hyperliquid 生态的论述，但更侧重"流动性架构"而非"Degen 博弈"
- 补充 [[来源_2025-08_Jupiter_Hyperliquid_聚合器战争_深潮TechFlow]] — 该文引用 Decentralised.co 的 Hyperliquid vs Jupiter 分析，本文是同一来源（Decentralised.co）对 Hyperliquid 生态的独立深入分析

## 值得记住的引用
> "The chain is not trying to be a universal computer or a metaverse theme park. It is trying to be Manhattan's financial district, squeezed into a single matching engine."
>（这条链不是想成为通用计算机或元宇宙主题公园，它想成为曼哈顿金融区，压缩进单一的撮合引擎中。）

> "On other chains, you might get a $50,000 grant to build a DEX, but then spend six months convincing market makers for liquidity and burning your runway on incentives. On Hyperliquid, you get instant access to $2+ billion in order book liquidity from day one."
>（在其他链上，你或许能拿到 5 万美元的赠款来建 DEX，但之后要花六个月说服做市商提供流动性，把运营资金烧在激励上。在 Hyperliquid 上，你从第一天起就拥有 20 亿美元+ 的订单簿流动性。）

> "Builder codes flip this completely. Every new app on Hyperliquid actually makes the whole ecosystem stronger, like adding another store to a shopping mall."
>（Builder codes 彻底翻转了这一局面。Hyperliquid 上每个新应用都让整个生态系统更强——就像给购物中心增加新店铺一样。）

## 我的笔记
本文最独特的价值在于其历史类比框架（丝绸之路→Rothschild→JP Morgan→Hyperliquid），它把"流动性基础设施"放在了文明尺度上理解，而非仅作为 DeFi 技术问题。这种历史叙事比纯粹的技术罗列更能解释为什么 Hyperliquid 的战略是可持续的——基础设施垄断在人类历史上反复被证明是最持久的商业护城河。不过需注意，这种叙事本质上是自利性论述（作者所在的 Decentralised.co 公开披露正在建立 Hyperliquid 头寸），文章中的乐观预测应与其他来源（如回顾验证人中心化和 JELLYJELLY 事件的分析）对照阅读。此外，Builder codes 的"正和博弈"假设基于一个关键前提——Hyperliquid 的流动性不被其他链的竞争稀释，MegaETH 和 Monad 等新链如果也能实现类似的统一流动性架构，Hyperliquid 的先发优势可能被削弱。
