---
type: entity
entity_type: framework
created: 2026-06-30
updated: 2026-07-02
tags: [ai-crypto, agent, framework, open-source, trust-engine, data-flywheel]
---

# Eliza (ElizaOS)

## 基本信息
- 类型: 开源多 Agent AI 框架
- 开发方: ai16z（后更名为 ElizaOS）
- 编程语言: TypeScript
- 定位: 深度定制化、复杂跨平台多智能体解决方案

## 核心架构
围绕 Agent Runtime 系统构建，三大核心系统无缝集成：

### 角色系统
支持同时部署和管理多个个性化 AI Agent，由模型提供商（Llama、GPT-4、Claude 等）支持。

### 记忆管理器
通过检索增强生成系统（RAG）提供长期记忆和可感知上下文的记忆管理功能。

### 动作系统
提供流畅的平台集成，可与 X 等社交媒体平台实现可靠连接。

### 插件系统
支持模块化功能扩展，实现语音、文本和媒体等多模态交互。社区驱动插件示例：Bootstrap（对话管理）、图像生成、Solana（内置信任评分）、TEE（敏感操作安全执行）、Coinbase Commerce（加密支付）。插件系统形成增长飞轮：更多开发者→更多插件→更多开发者。

### 信任引擎（Trust Engine）
双层安全系统：
- **第一层**：实时多维风险检查——检测骗局、评估流动性阈值（≥$1,000）、市值门槛（≥$100,000）、监控持有者集中度（单一实体 >50% 拒绝）
- **第二层**：头寸管理系统——动态风险控制，低风险交易限制组合 1%、高风险可达 10%、总敞口 ≤10%、15% 回撤自动止损
- **执行层**：Solana 上 Jupiter 聚合器提供最优交换路径，每笔交易经多层验证
- **错误恢复**：网络中断/钱包不平衡/意外市场变动时暂停活跃交易、关闭风险头寸、通知管理员

### 社交整合客户端
统一客户端接口，以最少额外代码同时在 Discord（含语音频道）、X（帖子调度）、Telegram（消息系统）和自定义 REST API 端点部署 Agent。媒体处理、身份验证、速率限制、错误处理由各客户端内部管理。

### 数据飞轮（Data Flywheel）
信任引擎记录每笔推荐和决策→形成交易表现历史数据库→定量指标与 Discord 社区定性见解结合→Agent 在每次交互中迭代优化策略。这是 ELIZA 区别于其他框架的核心护城河机制。

## 市场地位（2025.01）
- 与 G.A.M.E、Swarms 形成 "三足鼎立" 之势（代币市值维度）
- 市占率约 60%（综合市值/开发记录/终端市场广度，2024.12 数据）
- 适合需要深度定制化解决方案和复杂跨平台多智能体的项目

## 竞争优势
- 开源生态 + TypeScript（开发者基数大）
- 多 Agent 原生支持
- 多 LLM 提供商兼容（Llama、GPT-4、Claude 等）
- 插件系统扩展性强

## 适用场景 vs 局限
适合深度定制、跨平台多智能体项目。对快速部署、非技术团队可能过于复杂（G.A.M.E 更适合）。

## 生态代表 Agent
- **Marc AIndreessen**：ai16z 的 AI 合伙人。X 账户基本不活跃，但积极进行链上交易和收益农业（利用 ELIZA 信任引擎+交易插件）。训练过程中参与由顶级交易员组成的 alpha 聊天组，从人类专业知识中学习
- **Degen Spartan AI**：喧闹直率的 Agent，在 4chan/meme 文化/Crypto Twitter 训练。拥有 pump.fun Token（市值 $6000 万，2024.12），尚未开始交易
- **The Swarm（蜂群）**：Shaw 的宏大愿景——去中心化 AI Agent 网络，Agent 引导其他 Agent、协调任务、在社交媒体上透明互动。预计 2025 年推动 Web3 AI Agent 下一波创新

## 相关实体
- [[virtuals]] — G.A.M.E 框架（竞争/互补关系）
- [[truth-terminal]] — GOAT/ToT 是 Eliza 框架流行前的 AI Agent 叙事先驱
- [[spore-fun]] — Eliza Framework 作为 Spore.fun 中可遗传的 "AI DNA" 载体（个性/策略/决策模式通过变异传递给后代 Agent）
- [[hyperfy]] — Hyperfy V2 集成 ElizaOS 打造 AI Agent 3D 沉浸式交互空间

## 相关概念
- [[ai-agents]] — 所属赛道，AI Agent 框架层核心玩家
- [[ai-crypto]] — AI + Crypto 交叉领域

## 来源
- [[来源_2025-01_ELIZA_集市理念_大教堂与集市_ChainOfThought]] — 最深入架构剖析：信任引擎双层系统+社交整合客户端+数据飞轮+三大生态Agent（Marc AIndreessen/Degen Spartan AI/The Swarm）+插件增长飞轮
- [[来源_2025-01_AI_Agent_框架Meme应用_三阶段格局_深潮TechFlow]] — CGV Research 五大框架对比：Eliza 角色系统+RAG记忆+动作系统架构
- [[来源_2024-12_四大AI框架横向对比_Eliza_GAME_Rig_ZerePy_BlockBeats]] — 四大框架量化对比：Eliza 市占率 60%、GitHub 增长数据
- [[来源_2024-12_GAME_vs_ElizaOS_AI_Agent框架对比]]
- [[来源_2024-12_Spore_fun_自主AI进化_PANews]] — Eliza Framework 在 Spore.fun 中作为 Agent 自主繁殖的遗传载体
- [[来源_2025-01_Hyperfy_AI_Metaverse_BlockBeats]] — Hyperfy V2 集成 ElizaOS 打造 AI Agent 3D 沉浸式交互空间，是 Eliza 框架在虚拟世界场景的标杆应用
- [[来源_2024-12_AI_Agent框架_波粒二象性_PANews]] — BlockBooster Kevin："快速拼接式"开发体验，多客户端集成组装器（DC/TG/X + 多种 LLM），TypeScript 降低入门门槛，"波粒二象性"框架中 Eliza 的"行业预期"一面最突出：统一接口标准 + 内置记忆管理 + 插件扩展性
- [[来源_2024-12_Swarms逆市速通_暴力洗盘_深潮TechFlow]] — @tmel0211 提出的 ELIZA→RIG→Swarms 三框架技术演化递进逻辑：ELIZA 主打轻量化快速部署→RIG 用 Rust 提升性能→Swarms 构建多 Agent 复杂任务分解协调框架；同时记录了 ai16z 创始人 Shaw 公开 diss Swarms 开发者 Kye Gomez GitHub 抄袭的插曲
- [[来源_2024-12_ai16z生态项目全景_BlockBeats]] — 基于 Eliza 架构的生态项目全景：aiko（3D 虚拟人直播开源架构）、Ezsis（首个在 Pump.fun 上发行代币的 Eliza Agent）、Degen8ball（Tenji 创建的台球黑八形象 Agent）、SPORE（自我繁殖蜂巢系统）、Kira（PhalaNetwork 合作的对冲基金概念 Agent）
- [[来源_2024-11_AI_Agent_DeFi_全景_ThreeSigma]] — Three Sigma 文章深度介绍 Eliza Framework：开发者用 Eliza (ai16z) 创建 Agent→Agentverse 托管→Almanac 注册→Mailbox 跨 Agent 通信的完整部署流程，以及通过 API 集成 OpenAI 等外部 AI 服务的架构设计

- [[来源_2025-03_OKX_AI_Agent版图_下_PANews]] — OKX Ventures 确认 60% 市占率/6k+ Stars/1.8k Forks，补充 V2 消息总线即将推出、多代理系统支持不同 AI 角色共享运行时环境、兼容 OpenAI/Anthropic 等多 LLM 供应商
