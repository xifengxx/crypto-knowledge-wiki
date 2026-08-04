---
type: entity
entity_type: project
created: 2026-06-29
updated: 2026-06-30
tags: [defai, ai-agent, solana, abstraction]
---

# Griffain

## 基本信息
- 赛道: DeFAI / AI抽象层
- 链: Solana（当前仅支持Solana，预计将加入跨链）
- 创始人: Tony (@tonyplasencia3)，也是Solana上Blink项目开发者
- 背书: Solana创始人Anatoly支持与认可
- 市场地位: DeFAI赛道市值第一，占45%份额；代币GRIFFAIN市值$3.7亿（2025年1月）
- 访问模式: 仅接受邀请，需要通行证（invite-only + pass）

## 核心业务/产品
Griffain是Solana上第一个也是性能最强的抽象AI Agent。用户通过自然语言指令即可让Agent执行链上操作，无需理解底层协议细节。

### 主要功能
- 自然语言执行交易（swap等）
- 使用PumpFun发行代币、铸造NFT、可选地址空投
- 多Agent协调（同一聊天室协同工作）
- Agent代表用户发布推文
- 基于关键字/条件在PumpFun上狙击新上线Memecoins
- 质押、自动化和执行DeFi策略
- 调度任务，用户可输入自定义指令创造定制Agent
- 从平台获取数据进行市场分析（如识别代币持有者分布）

### Agent类型
1. **个人AI Agent (Personal AI Agent)**: 用户控制，可自定义指令和内存设置
2. **特殊Agent (Special Agents)**: 为特定任务设计的预训练Agent，如空投Agent（查找地址分配代币）、质押Agent（SOL质押挖矿）

## 技术架构

### 多代理协作系统
多个Agent在同一聊天室协同工作，既能独立解决复杂任务又能保持协作。这是Griffain与竞品的显著差异点。

### 钱包安全
密钥通过Shamir Secret Sharing (SSS)拆分为三部分：
1. 设备共享：存储在浏览器中，打开标签页时检索
2. 授权共享：存储在Privy服务器上，验证登录后检索
3. 恢复共享：加密存储在Privy服务器上，仅用户输入密码登录时可解密

Griffain和Privy均无法单独托管钱包。

## 竞争对比（CGV Research）
Griffain vs **Neur**（同为 Solana AI 助手）：
- Griffain 为用户提供的功能更多
- Neur 提供的功能相对较少但更加细致，且性能更加出色
- 未来 DeFAI 领域竞争焦点：功能完善程度、用户体验、费用

## 竞争优势
- Solana生态第一个抽象AI，先发优势
- 功能集最丰富（8+核心功能）
- 多代理协作工作流处理能力领先
- Solana创始人背书

## 风险/局限
- 当前仅支持Solana，跨链待实现
- 用户需手动输入Token地址或具体执行指令——对新手不够友好
- 基础交易准确性仍有问题（如USDC Swap无法正确获取代币地址）

## 相关实体
- [[Anon]] — 竞品，多模型多语言抽象AI
- [[slate]] — 竞品，唯一集成Hyperliquid的抽象AI
- [[solana]] — 底层L1
- [[pumpfun]] — 集成的Memecoin发行平台

## ⚠️ 代币效用不明
根据 BlockBeats 2025年1月20日报道，Griffain 文档中未明确说明 GRIFFAIN 代币的具体用途——平台上的大多数交易用 SOL 支付，代币价值捕获机制存疑。但 Solana Labs 的支持为项目带来了市场关注。

## 来源
- [[来源_2025-01_DeFAI生态_AI_Agent交易_PANews]] — IOSG详述：8+功能、多代理协作、SSS钱包拆分
- [[来源_2025-01_AiFi生态版图_40+项目_Foresight_News]] — Foresight盘点：$3.7亿市值、Blink开发者、邀请制+通行证
- [[来源_2024-12_AI_Agent_发展全景图_Meme_Utility_MarsBit]] — Hacking for Agentic Finance 黑客松起源、三步操作（创建→钱包→SOL）、$3 亿+市值
- [[来源_2025-01_AI_Agent_框架Meme应用_三阶段格局_深潮TechFlow]] — CGV Research：Griffain vs Neur 对比（功能多 vs 细致+性能好）
- [[来源_2025-01_DeFAI_AI_Agent_新浪潮_深潮TechFlow]] — YBB Capital：$457M市值（DeFAI赛道第一）、10.3万推特关注、0.01 SOL可铸造Agent Engine NFT、核心功能为生成钱包完成指向交易
- [[来源_2025-01_DeFAI_入门_The_DeFi_Investor]] — 2025年1月The DeFi Investor：确认Griffain为"通用化DeFAI平台"，已上线但需access pass，功能含发币/空投/跟单推特/止盈订单
- [[来源_2025-01_特朗普MEME币吸血_DeFAI抄底_50项目盘点_BlockBeats]] — 市值$4.56亿（2025-01-20），7天+24.7%/30天仅+6.6%（不同阶段涨幅分化明显），个人代理+专业代理（如代币狙击）双层体系，代币效用尚不明确
- [[来源_2025-01_AI代理Launchpad之争_Virtuals到Solana_深潮TechFlow]] — 0xJeff 将 Griffain 定位为"阶段性 Launchpad"：通过 MobyAgent 展示"平台提供可见性 + 智能体提供实用性"的共生模式，Moby 被定位为 Griffain 生态中的 Luna 等价物，正在向完整 DeFAI Launchpad 演进
- [[来源_2025-01_DeFAI三大方向_0xJeff_BlockBeats]] — 0xJeff 最早系统性提出 DeFAI 三分类框架中，Griffain 被列为抽象层第一个发币项目；与 Orbit（跨链最强，117 链/200 协议）和 Neur（开源，Solana 专注，估值后来居上）横向对比，功能包括 DCA、发币、空投等
- [[来源_2025-03_OKX_AI_Agent版图_下_PANews]] — OKX Ventures 确认其为 "Solana 生态中首个高性能抽象 AI 代理"（Copilot/Perplexity 类比），明确 SSS 密钥拆分三部分细节、Shamir Secret Sharing 安全机制、Personal Agents 与 Special Agents 双层体系
- [[来源_2025-05_AI赛道重拾热度_潜力项目_BlockBeats]] — 补充 GRIFFAIN 在 AI 市场复苏中涨超 60% 的市场表现数据
