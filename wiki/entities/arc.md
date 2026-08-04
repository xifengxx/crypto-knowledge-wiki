---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-07-02
tags: [ai-agents, solana, agent-framework, rust, rig]
---

# ARC（Rig 框架）

## 基本信息
- 类型：AI Agent 框架 + Solana 生态 Agent 发行平台
- 代币：$ARC (Solana)
- 框架名：Rig（Rust 编写）
- 定位：企业级高性能 AI Agent 框架，Solana 生态版 "Virtuals"
- 团队：Playgrounds（Tachi 等，前西南研究院核物理/航天工程背景）

## 核心业务/产品
- **Rig 框架**：基于 Rust 的开源 LLM 应用开发框架，统一接口对接 OpenAI/Anthropic 等 LLM 提供商 + MongoDB/Neo4j 等向量存储
- **核心组件**：Provider Abstraction Layer（LLM API 标准化）、Vector Store Integration（多后端抽象）、Agent System（RAG + 工具集成）
- **Agent 发行机制（handshake）**：提交提案→团队+核心社区多维度评估→通过后注册→自行筹资或社区捐款→ARC 或 SOL 交易对
- 激励双轨：激励使用 Rig 启动的新项目 + 激励开发者增强 Rig 框架本身

## 关键数据（2024.12）
- 框架语言：Rust（注重性能、内存安全、零成本抽象）
- GitHub 星星：1,700（稳步增长，四框架中历史最悠久）
- 市占率：约 15%（综合市值/开发记录/终端市场广度）
- 市值：$1.6 亿→$2.79 亿（原文撰写→发文期间）
- Solana 生态定位：目标是成为 Solana 生态中占主导地位的 Agent 框架

## 竞争优势 / 护城河
- Rust 语言带来极致性能，适合企业级/资源密集型 AI 应用
- 模块化架构：Provider Abstraction + Vector Store Integration + Agent System 三层解耦
- 异步运行时处理高并发请求，编译时类型安全
- Solana 生态的 Rust 原生优势（Solana 本身也是 Rust 生态）

## 风险 / 争议
- Rust 学习曲线极陡，开发者门槛高，可能限制生态扩展速度
- GitHub 增长缓慢（vs Eliza 指数级增长），社区规模小
- 市值低于 ZerePy 但市占率声称 15%（vs ZerePy 5%），市占率计算方式存疑
- 框架成长处于极早期，handshake 机制上线仅数天

## 相关实体
- [[ai16z]] — 主要竞争对手（Eliza 框架/TypeScript/60% 市占率）
- [[virtuals]] — 竞争对手/类比对象（G.A.M.E 框架/Base 生态）
- [[solana]] — 核心部署链和生态基础
- [[zerebro]] — 第四大框架（ZerePy/Python/5% 市占率）

## 来源
- [[来源_2024-12_四大AI框架横向对比_Eliza_GAME_Rig_ZerePy_BlockBeats]] — 四大框架横向对比，Rig 市占率 15%、GitHub 1700 星
- [[来源_2024-12_arc_Solana_Agent框架_Rust_Rig_红蓝药丸]] — ARC 团队、handshake 机制、Solana Virtual 定位深度分析
- [[来源_2024-12_AI_Agent_发展全景图_Meme_Utility_MarsBit]] — RIG GitHub 260 星（早期）、发射 4 天市值 $1 亿、被定位为 AI Agent 框架黑马
- [[来源_2025-01_AI代理Launchpad之争_Virtuals到Solana_深潮TechFlow]] — arc 为 Solana 上主要 AI 框架之一，与 ai16z、Zerebro、Pippin 等并存竞争，但缺乏自有 Launchpad；与 Indiedotfun 合作提供强化学习技术赋能
- [[来源_2024-12_Swarms逆市速通_暴力洗盘_深潮TechFlow]] — 将 $swarms 对标 $arc 的"技术派发币速通剧本"：GitHub Stars 背书→市场买单→速通千万市值→清洗获利盘，两项目在叙事结构上高度相似；但 $arc 未被创始人级别的人物公开指控抄袭，$swarms 则经历了 Shaw 的重磅 FUD，揭示了两者在创始人信誉维度上的关键差异

- [[来源_2025-03_OKX_AI_Agent版图_下_PANews]] — OKX Ventures 确认 Rig 市占率 15%、Rust 高性能特性，补充 Rust 工作区结构、提供者抽象层（OpenAI/Anthropic）、MongoDB/Neo4j 向量存储支持、RAG 模型和工具优化等技术细节
- [[来源_2025-05_AI赛道重拾热度_潜力项目_BlockBeats]] — 补充 ARC 转型动态：forge 平台上线后自首个产品 AskJimmy 便沉寂；计划上线 Ryzome Agentic App Store 但尚未正式推出
