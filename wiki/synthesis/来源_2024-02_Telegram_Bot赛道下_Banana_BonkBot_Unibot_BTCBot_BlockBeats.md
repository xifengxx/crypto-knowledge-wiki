---
type: source
source_type: article
url: https://www.theblockbeats.info/news/50742
author: "@ChingChaLong02 (指导: @Zou_Block, @Erjiueth)"
date: 2024-02-07
ingested: 2026-07-01
tags: [telegram-bot, trading, memecoins, defi, solana, unibot, banana-gun, bonkbot, brc20, bitcoin]
---

# 万字解析 Telegram Bot 赛道（下）：链上券商全景图

## 阅读证据
- 总行数: 588
- Q1 (前25%): Unibot 约 80% 的收入来源于代币交易税，5% 税率意味着买卖合计实际税负达 10%，过度依赖税收模式不利于项目长期可持续性
- Q3 (中后25%): BTCBot.pro 的 AutoBoost 功能通过多阶段捆绑提升 BRC-20 铭文交易到下一区块确认，成功率高达 99%，并配合自动燃料恢复实现失败退款
- Q4 (最后25%): Telegram Bot 赛道整体市值约 3.37 亿美元，而去中心化交易所赛道市值高达 155.2 亿美元——是前者的近 50 倍，显示 Bot 赛道仍有巨大增长空间
- 图片: 18 张外部图片（来自 image.blockbeats.cn），包括各项目 K 线历史事件图/代币分配饼图/链上数据图表/可比估值表/费用结构对比等，均为外部 URL 不可本地访问

## 核心要点
1. **五大项目深度对比**：本文逐一剖析 Unibot、Banana Gun、BonkBot、SolTradingBot、BTCBot.pro 的历史事件 K 线、经济模型、协议表现和未来展望，提供了比上篇宏观概览更微观的产品层面分析
2. **Banana Gun 估值模型**：采用可比分析法（与 Unibot/Maestro Bot 及 Uniswap/Sushiswap/Pancakeswap 对比），基于市销率推算 $BANANA 合理价格为 $10.12-$10.37，基于市盈率推算为 $13.73-$23.52，暗示当时市场可能低估了其价值
3. **BTC 生态的 Telegram Bot**：BTCBot.pro 是 BTC 生态首个 Telegram 狙击机器人（2023年12月上线），创新性地提出了 BRC-20 限价买单功能（行业首创）、多平台同时挂单（Unisat + OKX）、滑点控制（应对 BTC Gas 而非 AMM 流动性影响），这是 BTC 生态 DeFi 基建的一个重要方向
4. **Solana 高 TPS 的结构性优势量化**：相比以太坊高 Gas 费用对小额交易的抑制，Solana 的低费用+高 TPS 使散户能更频繁交易，对高频/热点交易的散户投资者更具吸引力——这是 Solana Telegram Bot（BonkBot/SolTradingBot）超越以太坊 Bot 的结构性基础
5. **费用结构是核心竞争维度**：Banana Gun 手动交易仅 0.5%、BTCBot.pro 可根据级别折扣最低至 0.4%——费用差异长期累积可能为用户节省大量资金，是用户选择 Bot 的关键因素
6. **Banana Gun 取消代币税的战略转型**：当机器人手续费收入稳定超越代币税后，转向 0% 代币税模式，以此提升交易量/减少滑点/方便 CEX 集成——年化收益率从峰值的 ~72% 降至 21%，但仍具吸引力，长期有助于建立更可持续的收入模型

## 关键数据
- Banana Gun 年化总收入：2,108 万美元；代币持有者年化总收益：922 万美元（在同类项目中表现突出）
- Banana Gun 上线 Solana 一周后吸引约 1,700 新用户，当日总用户数超 4,000
- BonkBot 单日收入高位：75 万美元（受益于 Solana Meme 币炒作）；约 95% 的 BonkBot 交易通过 Raydium Swap 完成
- SolTradingBot 2023 年 12 月刚推出，不足一个月后（12月26日）交易量已超越 Unibot 和 Banana Gun
- Unibot 上线 Solana 后一周内，Solana 交易量已超过 Ethereum 的 3 倍
- BTCBot.pro 交易费 0.4%-1%（根据层级奖励和转介计划折扣），50% 分配给持有 200+ $BPIX 的用户
- Banana Gun 代币初发价 $0.65，约 20 倍升幅；团队份额分两期解锁（2025年起3年5% + 2031年起3年5%），约 70% 流动性被锁定
- DEX 赛道市值: Telegram Bot 赛道市值 = 155.2 亿 : 3.37 亿 ≈ 46:1

## 与已有知识的关系
- 补充 [[banana-gun]] — 提供了 Banan Gun 的完整特征矩阵（FoF/防跑路/黑名单转移等 10+ 个狙击交易功能参数）、估值模型（PS 法 $10.12-$10.37 / PE 法 $13.73-$23.52）、代币分配细节（60% 锁 UNCX、团队 10% 分两期解锁至 2034 年）、0% 税转型背景和 DEXTools 战略合作细节
- 补充 [[unibot]] — 提供了 Unibot 的收入结构（80% 来自代币税 vs Banana 已实现机器人手续收入超越税收）、Solana 扩展数据（一周内 Solana 交易量超 Ethereum 3 倍）、Birdeye 数据聚合器合作、UnibotX 订单簿产品线
- 补充 [[bonkbot]] — 提供了 BonkBot 的详细功能矩阵（Jito MEV 保护的涡轮/安全双模式、自动买入、按钮自定义、滑点配置）、手续费分配（1% 交易费拆分 7 部分：30% 团队/20% 推荐/10% 销毁/10% 社区/10% 基建/10% BonkDAO/10% BonkLabs）、与 Raydium 的共生关系（约 95% 交易通过 Raydium）、Solana 迷因币文化起源（Anatoly 穿"傻龙"服装）
- 补充 [[bitcoin-ecosystem]] — BTCBot.pro 作为 BTC 生态首个 Telegram Bot，创新性地提出了 BRC-20 限价买单和 AutoBoost/自动燃料恢复机制，是在 Unisat/OKX 之外新增的关键交易基础设施
- 补充 [[memecoins]] — 量化了 Solana Meme 币热潮对 Telegram Bot 的驱动：BonkBot 单日收入 75 万美元、SolTradingBot 一个月内交易量超越 Unibot+Banana Gun——Meme 币是 Bot 赛道的核心燃料
- 补充 [[defi]] — BTCBot.pro 通过限价买单和盘口管理功能，初步解决了 BRC-20 缺乏做市商的流动性问题，是 DeFi 在 BTC 生态的一种新形态

## 值得记住的引用
> "Unibot 大约 80% 的收入来源于代币交易税。项目设计要求每次交易 $UNIBOT 时，用户需支付 5% 的交易税，因此在买卖过程中，用户实际承担的交易税累计达到 10%，成为项目的主要收入来源。然而，这也暗示了一个潜在问题：项目通过机器人服务收取的手续费也许不足以维持其基本收入。"

> "在 BONKBot 上主要的交易配为 SOL/PONKE, SOL/USEDCAR, SOL/OMNI, SOL/$WIF, SOL/BORK。属于各类型的迷因币。"

> "取消代币税被视为提升项目吸引力和效率的战略举措。这种新模式的优势包括由于没有交易费用而增加的交易量，交易者减少了滑点，与中心化交易所更容易集成，以及代币更广泛的曝光度。"

> "目前关于代币分配只有一些非常初步的信息。尽管 SolTradingBot 在首个月有一个不错的开端，但它需要明确自己的市场定位。考虑到该项目相对较晚推出，如果未来的路线图不能实现，可能会面临被 BONKBot 吞噬的风险。"

## 我的笔记
这篇下篇比上篇更有价值——上篇是赛道概览，下篇才是真正的"券商"层面分析。作者对 Banana Gun 的估值模型尝试（PS/PE 可比分析）在 Crypto 研究报告中属于少见的严肃财务分析，虽然用的是基础的相对估值法，但至少建立了一个可讨论的框架。另一个值得关注的点是费用结构的详细对比——这暴露了一个反直觉的事实：Banana Gun 的手动交易费率（0.5%）远低于 Unibot 和 BonkBot，且通过取消代币税进一步优化——在低用户忠诚度的赛道中，这种成本优势可能是最坚实的护城河。BTCBot.pro 的部分则揭示了一个更宏大的叙事：BRC-20 的基础设施还极其原始（连限价买单都没有），而 Telegram Bot 正在成为 BTC 生态 DeFi 基建的先锋——这与以太坊 DeFi 的发展路径（先有 DEX 再有 UX 层）不同，BTC 生态可能是"Bot 先行、DEX 后建"。
