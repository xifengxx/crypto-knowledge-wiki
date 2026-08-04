---
type: entity
entity_type: project
created: 2026-06-30
updated: 2026-07-01
tags: [telegram-bot, trading, solana, memecoins]
---

# BonkBot

## 基本信息
- 类型：Telegram 交易机器人 / 链上交易前端
- 赛道：Telegram Bot / 链上券商
- 链：Solana
- 活跃期：2023 年末至 2024 年初为赛道龙头

## 核心业务/产品
- **Solana 链上 Telegram 交易机器人**：基于 Solana 高 TPS 的高频交易 Bot
- 核心功能：代币买卖、狙击、跟单交易等标准 Telegram Bot 功能
- 受益于 Solana 生态 Meme 币热潮，专注于 Solana 链上代币交易

### 特色功能
- **最低持仓价值**：可设置投资组合中显示的最低持仓阈值，低于阈值代币自动隐藏
- **自动买入**：粘贴代币地址后立即执行买入，免去确认步骤
- **按钮配置**：可自定义仪表盘上的买入和卖出按钮
- **滑点配置**：可自定义买入和卖出滑点设置
- **MEV 保护（携手 Jito Labs）**：
  - 涡轮增速（Turbo）模式：交易通过 Jito 发送，在最快速度下提供前置交易保护（若普通传输更快则不启动 MEV 保护）
  - 安全（Secure）模式：在任何情况下保证交易保护，即使可能牺牲速度（可通过提高贿赂金额加速）
  - 用户可选择优先级：中、高、非常高，高级用户还可自定义交易优先级

## 底层代币：$BONK
- $BONK 最初在 2022 年圣诞节作为对 Solana 社区的免费空投发布
- 作为迷因币被 Coinbase 和 Binance 先后上市，极大推动生态发展
- BONKBot 选择 $BONK 作为交易平台主要代币，通过交易费回购和销毁机制增强 $BONK 实用性

## 经济模型
- BONKBot 对交易收取 **1% 手续费**，分配如下：
  - 30% 归 BONKBot 背后团队
  - 20% 用于支付推荐费
  - 10% 用于立即销毁 $BONK
  - 10% 用于 Bonk 社区贡献
  - 10% 用于支付基础设施成本和未来发展
  - 10% 归 BonkDAO 多签钱包
  - 10% 用于资助 BonkLabs

## 关键数据
- 日活跃用户：约 35,700（曾超越 Banana Gun 和 Maestro）
- 交易频率：约为 Banana Gun 和 Maestro Bot 的 10 倍
- 7 天平均每日用户量：在 DEX 竞争领域仅次于 Sushiswap，领先于 Maverick Protocol 和 Trader Joe
- 自上线以来在交易频率和用户数量上领先于市场上其他交易机器人
- 单日收入高位：75 万美元（受益于 Solana Meme 币炒作高峰）
- 约 95% 的 BONKBot 交易通过 Raydium 的 Swap 功能完成
- 主要交易对：SOL/PONKE, SOL/USEDCAR, SOL/OMNI, SOL/$WIF, SOL/BORK（各类迷因币）

## 与 Raydium 的共生关系
- BONKBot 是 Raydium 的关键催化剂：约 95% 的 BONKBot 交易通过 Raydium Swap 完成
- Raydium 的锁仓量（TVL）随 BONKBot 交易量增长而明显增加
- Raydium 的任何重大更新（如新增交易对）会直接惠及 BONKBot

## 竞争优势 / 护城河
- **Solana 先发优势**：作为 Solana 链上 Telegram Bot 的市场先行者，抢占 Meme 币交易热潮红利
- **高 TPS 基础设施**：Solana 链的高吞吐量使 BonkBot 能以远超竞品的频率处理交易
- **生态红利**：Solana Meme 币热潮直接推动交易活跃度

## 风险 / 争议
- **用户忠诚度低**：赛道共性风险——用户基于产品性能而非品牌选择服务，更优竞争者出现即流失
- **仿盘竞争**：Sol Trading Bot 等仿盘已在 Solana 上线，交易量/频率/日用户方面快速追赶
- **对 Solana 生态的依赖**：若 Solana Meme 热潮消退，交易量可能同步下降

## 相关实体
- [[unibot]] — 赛道先驱，已被 BonkBot 超越
- [[banana-gun]] — EVM+SVM 双链竞争者
- [[sol-trading-bot]] — Solana 链上仿盘，2023 年 12 月起快速追赶
- [[solana]] — 底层基础设施，高 TPS 是核心优势来源
- [[raydium]] — 核心 DEX 集成，约 95% 交易通过 Raydium 完成
- [[jito]] — MEV 保护技术合作方
- [[telegram]] — 底层平台

## 来源
- [[来源_2024-02_Telegram_Bot赛道_链上券商_Web3应用]]
- [[来源_2024-02_Telegram_Bot赛道下_Banana_BonkBot_Unibot_BTCBot_BlockBeats]]
