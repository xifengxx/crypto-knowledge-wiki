---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [farcaster, memecoins, base, token-launcher, ai-agents]
---

# LarryBot

## 基本信息
- 类型：Farcaster AI Bot 代币发射器
- 创建者：df 和 Stephancill
- 链：Base（通过 Farcaster 集成）
- 定位：应对 Clanker 狙击问题的公平发行代币发射工具

## 核心机制
LarryBot 是为解决 [[clanker]] 的狙击机器人问题而构建的公平发行工具：

### 等价格窗口
- 所有参与者在代币正式上线前 **69 分钟**（原为 15 分钟，改为 69 分钟符合 meme 文化）内以相同价格购买代币
- 利用 Party DAO 合约锁定狙击者对初始代币分配的访问权限

### 准入门槛
- 代币必须在时间窗口内吸引至少 **3 ETH** 流动性注入才能从绑定曲线毕业并上线
- 参与者 Neynar 评分需高于 **0.9**（基于 Farcaster 声誉的准入控制）

### 流动性聚合
- 通过 Party 模式实现强大的众筹流动性聚合，在上线前统一注入

## 争议与局限
- 仍面临与 HIGHER 等早期代币相同的"逐底竞争"激励缺陷
- 费用效果尚不明确，Party 模式中固有的激励结构仍有改进空间
- 声誉门槛（Neynar > 0.9）虽然过滤了纯狙击者但也可能限制了参与广度

## 相关实体
- [[clanker]] — 被 LarryBot 设计为反制的狙击问题源
- [[launcher]] — 另一种更长期主义导向的代币发射器
- [[farcaster]] — 底层社交协议

## 相关概念
- [[memecoins]] — 代币发射器的主要产品
- [[ai-agents]] — LarryBot 是嵌入社交信息流的 AI Agent
- [[socialfi]] — Farcaster 代币化社区的实践案例

## 来源
- [[来源_2024-12_Farcaster_AI_Agent代币发射器_BlockBeats]]
