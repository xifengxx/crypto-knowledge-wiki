---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [farcaster, memecoins, base, token-launcher]
---

# Launcher（Farcaster 代币发射器）

## 基本信息
- 类型：Farcaster Bot 代币发射器
- 创建者：Kompreni
- 链：Base（通过 Farcaster 集成）
- 定位：通过长期激励机制促进长期承诺的代币发行工具——"链上运营创业公司的工具包"
- 启动指令：`launcher launch [ticker]`

## 核心机制
Launcher 是 Farcaster 生态中设计最具长期主义色彩（截至 2024 年 12 月）的代币发射器，包含五个关键创新：

### 1. 固定价格防狙击
- Uniswap 上前 **12.5%** 代币供应量以前 **10 ETH** 固定价格提供流动性（对应 **80 ETH** 市场市值）
- 此部分售罄后，Uniswap 完整曲线对 **50%** 代币生效
- 通过固定价格阶段防止机器人在代币发行的最初几秒内价格抢夺

### 2. 长期 LP 激励
- 为期 **两年**的 **1%** 流动性提供者激励
- 将 LP 的利益与代币长期成功绑定，而非在发行后立即撤离

### 3. 汗水股权（Sweat Equity）
- 通过工作协议，**12.5%** 的代币供应量分配给为项目做出工作贡献的人
- 让非资本贡献者也能通过劳动获取代币份额

### 4. 费用返还持有者
- **90%** 的 ETH 交易费用分配给代币持有者
- 建立了直接的经济利益共享机制

### 5. 创始人代币归属
- 创始人获得 **2.5%** 代币分配，在 **一年**内逐步解锁
- 比大多数代币发射器更友好的创始人分配方案，同时通过锁仓防止创始人立即抛售

## 与 LarryBot 的定位差异
- Launcher 不是一个具备个性的 AI Agent（如定制调优的 LLM），它纯粹是一个功能型机器人
- 相比 [[larrybot]] 关注公平发行（等价格窗口），Launcher 更关注可持续性（长期激励 + 汗水股权 + 费用分享）

## 相关实体
- [[clanker]] — 最早引爆 Farcaster 代币发行浪潮
- [[larrybot]] — 另一种公平发行工具
- [[farcaster]] — 底层社交协议

## 相关概念
- [[memecoins]] — 代币发射器的主要产品
- [[socialfi]] — Farcaster 代币化社区的实践案例

## 来源
- [[来源_2024-12_Farcaster_AI_Agent代币发射器_BlockBeats]]
