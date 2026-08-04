---
type: source
source_type: article
url: https://www.theblockbeats.info/news/50738
author: "@ChingChaLong02 (指导: @Zou_Block, @Erjiueth)"
date: 2024-02-07
ingested: 2026-06-30
tags: [telegram-bot, trading, memecoins, defi, solana, unibot, banana-gun, bonkbot]
---

# 万字解析 Telegram Bot 赛道（上）：链上券商如何推动 Web3 大规模应用？

## 阅读证据
- 总行数: 199
- Q1 (前25%): Unibot 代币从 2023 年 5 月最低 $3.13 涨至 8 月最高 $200.45，接近 100 倍增长，引领 Telegram Bot 热潮
- Q3 (中后25%): Banana Gun 代币上线不到 3 小时从 $8.7 暴跌至 $0.02，团队称合约存在两次审计均未发现的"关键错误"
- Q4 (最后25%): 用户忠诚度极低——一旦出现更优交易条件或有吸引力的机会，用户迅速转投其他平台，这是 Unibot/Maestro Bot 未能保持领先地位的根本原因
- 图片: 8 张外部图片（来自 image.blockbeats.cn），包括赛道数据图表/Certik 审计截图/历史沿革图/技术架构图，均为外部 URL 不可本地访问

## 核心要点
1. **Telegram Bot = 链上券商**：Telegram 交易机器人取代了 Web3 钱包和 DEX 的 UI/UX，将复杂的链上交易简化为对话式交互。用户只需复制合约地址到消息框即可买卖代币，极大降低了交易门槛
2. **赛道格局快速迭代**：从 Unibot（2023年7-8月龙头）→ Banana Gun（2023年9月接棒）→ BonkBot（靠 Solana 生态后来居上，日活约35,700），龙头更替迅速，市场领先地位不稳固
3. **Solana 链成为关键战场**：BonkBot 交易频率约为 Banana Gun/Maestro 的 10 倍，得益于 Solana 高 TPS。使用 Solana 作为基础设施的项目可能是开启下一波 Telegram Bot 热潮的关键。Unibot 也开始在 Solana 部署
4. **核心功能矩阵**：买卖代币、止盈止损单、防跑路/貔貅盘检测、跟单交易、狙击（流动性狙击/方法狙击/多钱包狙击）、空投挖矿自动化
5. **Telegram 平台基础优势**：Telegram 拥有超过 5,500 万日活跃用户，正在转型为类似微信的超级应用。与 TON 基金会和腾讯云合作，为 Bot 提供极肥沃的用户土壤
6. **三大核心风险**：(a) 资产安全——Bot 需访问私钥，破坏自我保管原则；(b) 代码审计缺失——Unibot 和 Banana Gun 均未通过 Certik 审计；(c) 竞争激烈——市场准入门槛低，同质化严重，用户忠诚度低

## 关键数据
- Unibot 价格振幅：$3.13 → $200.45（2023年5月→8月），约 100 倍
- BonkBot 日活跃用户：约 35,700（曾超越 Banana Gun 和 Maestro）
- BonkBot 交易频率：约为 Banana Gun 和 Maestro Bot 的 10 倍
- Telegram 日活跃用户：超过 5,500 万
- Banana Gun 上线 3 小时内暴跌：$8.7 → $0.02（几乎归零）
- BonkBot 7 天平均日活：在 DEX 领域仅次于 Sushiswap，领先 Maverick Protocol 和 Trader Joe
- BTCBot.pro：BTC 生态 Telegram Bot，上线近一个月

## 与已有知识的关系
- 补充 [[banana-gun]] — 提供 Banana Gun 代币上线初期的技术事故细节（合约 bug 导致 3 小时内 $8.7 → $0.02），以及其在 Solana 热潮兴起前的良好表现数据
- 补充 [[telegram]] — 提供 Telegram 作为"超级应用"转型的战略背景（5,500 万日活 + TON 基金会 + 腾讯云合作），以及 Telegram Bot 生态系统的技术实现路径（基于 HTTP 的 Bot API）
- 补充 [[memecoins]] — 阐明 Telegram Bot 作为 Meme 币交易基础设施的关键角色：Solana 上的 Meme 币热潮直接推动 BonkBot 交易活跃度，Bot 降低了 Meme 币投机门槛
- 与 [[sui]] 和 [[solana]] 相关 — 不同链上 Telegram Bot 生态的竞争格局：Solana 因高 TPS 成为 Bot 最优基础设施
- 补充 [[defi]] — Telegram Bot 作为 DeFi 的新 UI/UX 层，用对话式交互取代传统的 DEX 界面，是 DeFi 用户体验进化的一个重要方向

## 值得记住的引用
> "Unibot 的便利性在于，用户可以随时随地通过 Telegram 进行交易，无需依赖其他交易平台。这对加密货币交易的长远普及化大有裨益。"

> "Banana Gun 代币合约中存在一个团队未能修复的关键错误。尽管该合约已经进行了两次审计，但错误仍未被发现。"

> "这一领域的用户忠诚度普遍较低，他们更倾向于基于产品性能和潜在收益而非品牌忠诚度来选择服务。这意味着一旦出现更佳的交易条件或更有吸引力的机会，用户将迅速转向其他平台。这正是 Unibot 或 Maestro Bot 等平台未能保持领先地位的关键原因。"

## 我的笔记
这篇文章写于 2024 年 2 月，是 Telegram Bot 赛道早期阶段的系统性梳理。作者将 Bot 定位为"链上券商"是一个精准的类比——Bot 做的事情本质上是券商做的事（下单/止损/跟单/反欺诈），只不过后端是 DEX 而非 CEX 订单簿。这种券商化趋势可能比 Bot 本身更持久：未来的链上交易前端，无论是 Bot 还是 Web App，都会走向"券商化"——聚合流动性、优化执行、提供风控工具。另外值得注意的是，这篇文章描述的"龙头快速更替"模式——Unibot → Banana Gun → BonkBot——在 2024 年后续发展中可能已再次改写（例如 BullX、GMGN 等新玩家的崛起），这是该赛道"低用户忠诚度 + 低准入门槛"结构性特征的必然结果。
