---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defai, ai-agent, hyperliquid]
aliases: [Slate DeFAI, Hyperliquid DeFAI Agent]
---

# Slate

## 基本信息
- 类型: protocol / DeFAI 抽象层
- 定位: Hyperliquid DeFAI agent platform
- 投资方: BigBrain Holdings
- 差异化: 唯一集成 Hyperliquid 并支持自动执行交易（开仓多空、LP 管理、条件清仓）的 AI Agent
- 代币状态（2025年1月）: 未发币

## 核心业务/产品

Slate 是一个 DeFAI（DeFi + AI）Agent 平台，定位为 "Alpha AI"，优先考虑价格路由、快速执行和交易前模拟。核心竞争力在于它是**首个（也是截至 2025 年 1 月唯一）能够在 Hyperliquid 上执行 AI 代理交易**的抽象层产品。

### 主要功能
- **Hyperliquid 自动交易**：开仓做多/做空、LP 管理+挖矿、条件清偿——独占差异化能力
- **条件交易**：自然语言设定条件订单（"如果 xxx 达到 500 万美元市值，卖出我仓位的 25%"），由 0xJeff 本人亲自验证使用过
- **跨链 Swap**：EVM 链（如 Base）与 Solana 之间的跨链资产交换
- **自然语言任务调度**：通过聊天界面完成 Swap、借贷、质押、解锁等 DeFi 操作
- **链上交易聚合**：聚合多来源流动性，优化价格路由
- **交易前模拟**：在正式执行前模拟交易结果，降低错误率
- **Telegram 通知系统**：交易执行状态推送

## 关键数据

- **协议覆盖**：兼容 51+ 协议、11 条区块链（2025年1月数据）—— 支持同时执行 Hyperliquid / Solana / Base 上的交易
- **费率结构（分级制）**：
  - 常规操作（Swap/桥接/借贷/多空等）：**0.35%**
  - Gas 费用条件订单：**0.25%**
  - 其他条件订单（如限价）：**1.00%**
  - 常规转账/提款：**免费**
- **投资方**：BigBrain Holdings（有公开记录的投资方）
- **赛道定位**：DeFAI 抽象层六大项目之一，与 Griffain、ANON、GRIFT、MODE、BUZZ、NEUR 并列（来源：BlockBeats 50 项目全景盘点）

## 竞争优势 / 护城河

- **Hyperliquid 独占集成**：截至 2025 年初，Slate 是唯一能在 Hyperliquid 上自动执行 AI 代理交易的 DeFAI 抽象层。Hyperliquid 作为 TVL 超 $5 亿的头部 Perp DEX 和新兴 L1，其交易量（2025 年 1 月日均 $50 亿+）为 Slate 提供了独有的流量入口
- **分级费率透明**：不同操作类型对应不同费率，Gas 条件订单低至 0.25% 激励高频条件交易
- **交易前模拟**：降低 AI 幻觉导致的执行错误，提升可靠性
- **跨链+Hyperliquid 双重覆盖**：覆盖 EVM + Solana + 专属 Hyperliquid L1 交易能力

## 风险 / 争议

- **功能范围较窄**：相较于 Griffain（支持 NFT、memecoin 狙击、多代理协作）和 Hey Anon（多模型多语言），Slate 的功能集更专注于交易执行层面
- **高条件订单费率**：1.00% 的条件订单费率在同类中偏高，可能影响复杂策略用户的采用
- **未发币**：截至 2025 年 1 月尚未推出代币，社区有空投预期但缺乏确定性。代币经济模型不明确增加了估值难度
- **DeFAI 赛道结构性风险**：整个赛道面临护城河不足、项目高度同质化、代币价值捕获薄弱的问题（来源：BlockBeats 50 项目盘点作者诚实指出）。Slate 的 Hyperliquid 独占性是当前的核心差异化，但 Hyperliquid 如果自身推出 AI Agent 层，或将接口开放给其他 DeFAI 项目，这一护城河可能被削弱
- **早期阶段**：所有产品功能仍处于 MVP/测试阶段，自动化执行的可靠性和安全性未经大规模验证

## 相关实体

- [[hyperliquid]] — 独家集成的去中心化 Perp DEX + L1，Slate 核心差异化来源
- [[griffain]] — 竞品，DeFAI 抽象层赛道市值第一（2025.1 约 $4.57 亿），功能最丰富（多代理协作、NFT、memecoin）
- [[hey-anon]] — 竞品，赛道市值第二（2025.1 约 $2.48 亿），多模型多语言，由 Daniele Sesta 创建
- [[grift]] — 竞品（Orbit 项目代币），跨链抽象层赛道，30 天涨幅 +442%（2025.1），支持 117 条链
- [[privy]] — 钱包基础设施，Slate 集成其嵌入式钱包架构
- [[defai]] — Slate 所属的概念赛道
- [[neur]] — 竞品，开源 DeFAI 抽象层，专注 Solana
- [[mode]] — 生态合作伙伴，AI 驱动 DeFi（但 Slate 与之关系较弱，更多是同一赛道的关联）

## 事件时间线

- **2025-01-06**: 0xJeff 发布 DeFAI 三大方向文章，亲自使用 Slate 条件交易功能并给出正面反馈，确认 Slate 当时仍早期、未发币
- **2025-01-14**: IOSG Henry 发表 DeFAI 生态分析，将 Slate 列为"抽象 AI 三强"（Griffain/Anon/Slate）之一，披露详细费率结构和 Hyperliquid 独占优势
- **2025-01-16**: PANews 将 Slate 列为 6 个 DeFAI 未发币潜力项目之一，披露 51+ 协议和 11 条链覆盖数据
- **2025-01-20**: BlockBeats 50 项目盘点将 Slate 列入 DeFAI 抽象平台子类别

## 我的判断

Slate 的 Hyperliquid 独占性是 DeFAI 赛道中相对最清晰的差异化定位——它不是又一个通用聊天界面，而是为 Hyperliquid 生态打造的专属 AI Agent 交易层。如果 Hyperliquid 持续增长（其 L1 和 Perp DEX 在 2025 年日均交易量达 $50 亿+），Slate 作为其唯一的 AI 交易入口将获得直接受益。

核心风险在于：1）Hyperliquid 可能自己下场做 AI Agent，此时 Slate 将面临"平台风险"；2）DeFAI 赛道整体产品-市场匹配（PMF）尚未验证（MODE 生态 1,684 个代理仅管理 $30.4 万资金的现象说明赛道用户使用量远低于叙事热度）。

## 来源

- [[来源_2025-01_DeFAI三大方向_0xJeff_BlockBeats]] — 0xJeff 一手使用体验、条件交易功能实证、未发币状态确认
- [[来源_2025-01_DeFAI生态_AI_Agent交易_PANews]] — IOSG 抽象 AI 三强对比、费率结构、Hyperliquid 独占优势
- [[来源_2025-01_DeFAI未发币_6个潜力项目_PANews]] — 51+ 协议/11 链数据、"首个在 Hyperliquid 上交易的 AI 代理"定位确认
- [[来源_2025-01_特朗普MEME币吸血_DeFAI抄底_50项目盘点_BlockBeats]] — 赛道全景定位、DeFAI 共性的护城河和代币效用风险披露
- [[来源_2025-01_DeFAI_AI_Agent_新浪潮_深潮TechFlow]] — 15 个 DeFAI 项目中的赛道背景定位
