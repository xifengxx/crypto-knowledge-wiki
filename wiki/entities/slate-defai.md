---
type: entity
entity_type: project
created: 2026-06-29
updated: 2026-06-29
tags: [defai, ai-agent, hyperliquid, abstraction]
---

# Slate

## 基本信息
- 赛道: DeFAI / AI抽象层
- 投资方: BigBrain Holdings
- 定位: "Alpha AI"，基于链上信号进行自主交易
- 差异化: 唯一能够在Hyperliquid上自动执行交易的抽象AI

## 核心业务/产品
Slate将自己定位为"Alpha AI"，优先考虑价格路由、快速执行和交易前模拟。

### 主要功能
- EVM链和Solana之间的跨链Swap
- 基于价格、市值、Gas费用和盈亏指标的自动交易
- 自然语言任务调度
- 链上交易聚合
- Telegram通知系统
- Hyperliquid集成：可开仓多空、条件清偿、LP管理+挖矿
- 交易前模拟

### 费用结构
1. **常规操作**（swap/桥接/claim/借入/借出/偿还/质押/解除质押/做多/做空/锁定/解锁）：0.35%
2. **条件操作**：
   - Gas费用条件订单：0.25%
   - 其他条件（如限价订单）：1.00%
3. 常规转账/提款：免费

## 技术架构

### 钱包安全
集成Privy嵌入式钱包架构。Slate和Privy均不托管用户钱包。用户可连接现有钱包或授权Agent代表自己执行交易。

## 竞争优势
- 唯一集成Hyperliquid的抽象AI——独占差异化
- 分级费率结构清晰透明
- 交易前模拟能力提升可靠性
- 跨EVM+Solana的覆盖面

## 风险/局限
- 功能范围较Griffain窄（缺少NFT、memecoin狙击等）
- Agent依赖用户授权，自主程度有限
- 费率较高（1.00%条件订单费）

## 相关实体
- [[griffain]] — 竞品，功能最丰富
- [[Anon]] — 竞品，多模型多语言
- [[hyperliquid]] — 独家集成的Perp DEX+L1
- [[privy]] — 钱包基础设施（如已有页面）

## 来源
- [[来源_2025-01_DeFAI未发币_6个潜力项目_PANews]] — 确认"首个在 Hyperliquid 上交易的 AI 代理"定位；新增数据：兼容 51+ 协议和 11 条区块链，支持同时执行 Hyperliquid/Solana/Base 交易
- [[来源_2025-01_DeFAI生态_AI_Agent交易_PANews]]
- [[来源_2025-01_DeFAI三大方向_0xJeff_BlockBeats]] — 0xJeff 一手使用体验：作者亲自使用 Slate 设置条件交易（"如果 xxx 达到 500 万美元市值就卖出仓位 25%"/"如果 xxx 达到某价格就买入 $5000 代币"），当时仍早期、未发币
