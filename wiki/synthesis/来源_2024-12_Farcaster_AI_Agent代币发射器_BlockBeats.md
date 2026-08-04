---
type: source
source_type: article
url: https://www.theblockbeats.info/news/56152
author: 原文 papajams.eth (Paragraph)，译编 BlockBeats
date: 2024-12
ingested: 2026-06-30
tags: [farcaster, ai-agents, memecoins, socialfi, token-launcher, base]
---

# 一文盘点Farcaster的AI Agent代币发射器

## 阅读证据
- 总行数: 217
- Q1 (前25%): Farcaster 代币化第一阶段始于 POINTS，由 iammatthias 以玩笑形式推出，Six 写了一篇关于它的著名帖子。后续诞生了 HIGHER、TNX100 和 DEGEN 等至今仍在蓬勃发展的代币化社区。
- Q3 (中后25%): LarryBot 为了解决 Clanker 的狙击问题而创建——在上线前 69 分钟（原为 15 分钟，改为 69 分钟符合 meme 文化）内所有参与者以相同价格购买代币，需吸引至少 3 ETH 流动性注入且 Neynar 评分高于 0.9。
- Q4 (最后25%): Launcher 由 Kompreni 构建，核心机制包括：前 10 ETH 固定价格 Uniswap 流动性池防狙击、两年 1% LP 激励、12.5% 代币以"汗水股权"形式分配给工作贡献者、90% ETH 交易费分配给代币持有者、创始人 2.5% 代币一年逐步解锁。
- 图片: 0 张分析 / 22 张装饰性跳过 / 22 张外部 CDN URL 无法获取（image.blockbeats.cn）

## 核心要点
1. **Farcaster 代币化三阶段演进**：POINTS（玩笑起点）→ HIGHER/TNX100/DEGEN（社区代币化实验）→ AI Bot 代币发射器（Clanker/Larry/Onsen/Terminal/Launcher），每一阶段都带来新的机制创新和新的激励扭曲问题。
2. **Clanker 效应**：由 Dish 和 ProxyStudio 构建的 TokenBot 在 Farcaster 动态中通过标记即可一键创建代币，已超过 1 万个代币，总交易量 10 亿美元，手续费收入超过 700 万美元。这引爆了基于 Farcaster 的代币发行浪潮，但也暴露了狙击机器人问题——机器人在代币发行瞬间以极快速度抢购，随后迅速抛售。
3. **Dan Finlay 的 CONSENT 实验揭示了狙击问题的严重性**：MetaMask 联合创始人 Dan Finlay 创建 CONSENT 代币作为实验，代币在发行后一分钟内因狙击机器人和自动化行为推动市值飙升至 400 万美元（基于此时数据），随后被迅速抛售，狙击机器人获利颇丰。
4. **LarryBot 的公平发行实验**：由 df 和 Stephancill 创建，设定 69 分钟等价格窗口、3 ETH 最低流动性门槛和 Neynar 声誉评分准入，利用 Party DAO 合约锁定狙击者对初始代币分配的访问权限，同时实现众筹流动性聚合。
5. **Launcher 最具长期主义设计**：Kompreni 构建的 Launcher 引入固定价格池防价格抢夺、两年 LP 长期激励、"汗水股权"工作协议（12.5% 分配给贡献者）、90% 费用返还持有者和创始人代币一年锁仓——定位为"链上运营创业公司的工具包"。
6. **激励对齐是核心未解问题**：文章反复指出，所有代币发射器都面临同样的激励不对称——快速奖励不良行为、缓慢奖励良好行为（"一开始的认真尝试，最终沦为堕落"）。流动性提供者在代币发行时急于撤离、"拉高出货"现象是系统性问题而非个别工具的问题。

## 关键数据
- TokenBot（Clanker）已创建：超过 **10,000** 个代币，总交易量 **10 亿美元**，手续费收入超过 **700 万美元**（截至 2024 年 12 月 7 日前）
- CONSENT 代币实验：发行后 **1 分钟**内市值飙升至 **400 万美元**（基于发行时数据），随后被迅速抛售
- HIGHER 代币上线前通过 Party 应用众筹流动性后的市值：**3900 万美元**（截至 2024 年 12 月 7 日）
- LarryBot 的公平发行门槛：**69 分钟**等价格窗口、**3 ETH** 最低流动性注入、Neynar 评分 > **0.9**
- Launcher 的经济参数：前 **10 ETH** 固定价格池（对应 **80 ETH** 市场市值）、**12.5%** 代币为工作贡献分配、**90%** ETH 交易费分配给代币持有者、创始人 **2.5%** 代币一年逐步解锁
- Onsenbot 费用：**5%**（相比 Clanker 在 1% Uniswap 费用中收取 **75%**）
- Dreamcoins（Zora）毕业门槛：市值需达到 **$120K** 才能完成绑定曲线进入公开市场

## 与已有知识的关系
- 补充 [[farcaster]] — 此前实体页侧重协议层和客户端生态，本文补充了 Farcaster 上代币化社区和 AI Agent 代币发射器的完整工具图谱（Clanker/LarryBot/Onsenbot/Heyterminal/Launcher），是理解 Farcaster 金融层（Moxie 之外）自发形成的代币化生态的关键素材
- 补充 [[clanker]] — 此前 Clanker 对比分析侧重与 Pump.fun 的数据对比，本文补充了 Clanker 面临的狙击问题（Dan Finlay CONSENT 实验案例）和其催生的"Clanker 效应"（社交信息流嵌入发币功能），也提到了团队正在探索的潜在解决方案
- 补充 [[pumpfun]] — 本文提供了 Farcaster/Base 生态代币发射器与 Solana Pump.fun 模式的差异视角：Farcaster 发射器深度嵌入社交信息流（通过标记/指令直接在动态中发币），而非独立网站；LarryBot/Launcher 等工具的公平发行机制创新是对 Pump.fun 模式的迭代回应
- 补充 [[ai-agents]] — AI Agent 在 Farcaster 上的具体应用形态：不是"自主交易 Agent"或"KOL Agent"，而是嵌入社交信息流的代币发行服务机器人
- 关联 [[socialfi]] — Farcaster 代币化社区的演变是社会图谱+代币经济的交叉实验，TokenBot 等工具让"发币"成为社交互动的一部分，加速了 SocialFi 从"概念"到"可操作的金融行为"的转化
- 关联 [[memecoins]] — 所有代币发射器的核心产品都是 meme 币，Farcaster 生态的 meme 币发行不同于 Solana 的完全无许可模式，不同的发射器代表了对"公平性 vs 效率"的不同权衡

## 值得记住的引用
> "一个激励机制不对称的系统（针对长期结果），快速奖励不良行为，缓慢奖励良好行为，导致流动性提供者在代币发行时纷纷急于撤离。"（原文对"逐底竞争"的系统性诊断）

> "任何人都应该能够启动一个代币经济。如果你拥有一个钱包，一个 Farcaster 账户？为你的社区、健身集体，甚至是你的猫创建一个代币。"（Carlos，Heyterminal 开发者，概括了 Farcaster 代币发射器的无许可愿景）

> "这是一个可以让你在链上运营创业公司的工具包。"（Kompreni，Launcher 创作者，将代币发射器提升到"创业基础设施"的叙事高度）

> "这种'拉高出货'现象并非 Farcaster 特有，而是区块链使得投机性 meme 工具能够普遍、无限制接入的初期表现，且许多架构师对如何规避这些倾向的结构细节并不熟悉。"（文章对 meme 币投机泛滥的结构性解释）

## 我的笔记
本文是对 Farcaster AI Agent 代币发射器生态最系统的一次盘点，价值在于它不是孤立介绍工具而是从"代币化实验的迭代演进"视角串联了整个故事——从 POINTS 到 Clanker 到 LarryBot 到 Launcher，每一代工具都在试图修复上一代的激励缺陷。文章的核心洞察是：工具本身无好坏，取决于实现方式和用户体验的透明度；但"激励不对称"是所有代币发射器共有的结构性问题，LarryBot 通过声誉门槛+等价格窗口缓解了狙击问题但可能牺牲了热度，Launcher 通过长期 LP 激励+汗水股权的设计看似最优雅但复杂度和摩擦也更高。一个未言明的矛盾是：Farcaster 的代币化生态本质上是"社交社区金融化"的实验，如果最终所有社区都以发币告终，社交图谱是否会沦为一层薄薄的注意力前端，真正的价值捕获全部被 bot 和狙击者攫取？
