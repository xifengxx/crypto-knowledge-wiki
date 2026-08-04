---
type: entity
entity_type: project
created: 2026-06-30
updated: 2026-06-30
tags: [ai-agents, agent-framework, gaming, ecs]
---

# Project89

## 基本信息
- **类型/赛道**: AI Agent 框架 / 游戏开发基础设施
- **核心产品**: argOS — 基于 ECS（Entity-Component-System）架构的高性能 Agent Framework
- **开源仓库**: https://github.com/project-89/argOS
- **创始团队**: 此前开发了 Magick（github.com/Oneirocom/Magick），一款 AI 编程软件。Shaw（ai16z/ElizaOS 创始人）是 Magick 项目的第四大贡献者
- **定位**: 针对游戏开发的高性能 Agent Framework，比现有 Agent 框架更模块化、性能更好
- **代币**: $project89（文中提及但未详述经济模型）

## 核心业务/产品

### argOS — ECS 架构的 Agent Framework

argOS 的核心创新是将游戏引擎中成熟的 ECS（Entity-Component-System）架构应用于 AI Agent 框架设计：

- **Entity**: 每个 Agent 是一个实体，仅由 ID 标识
- **Component**: Agent 的能力/状态以组件形式挂载（Perception、Memory、Action、Goal、Plan、Appearance 等 6 大类）
- **System**: 8 个独立运行的执行系统，按不同频率周期调度，通过共享 Component 数据实现协同

### 三层意识模型（ConsciousnessLevel）

| 层级 | 包含 System | 执行频率 | 功能 |
|------|------------|---------|------|
| CONSCIOUS | Room/Perception/Experience/Thinking/Action/Cleanup | ~10秒 | 实时感知与执行 |
| SUBCONSCIOUS | GoalPlanning/Planning | ~25秒 | 中长期目标与计划 |
| UNCONSCIOUS | （暂未启用）| 50秒以上 | 底层需求（预留）|

### 8 大 System 工作流

感知环境(PerceptionSystem) → 转化为体验(ExperienceSystem) → 自我思考(ThinkingSystem) → 执行动作(ActionSystem) → 动态调整目标(GoalPlanningSystem) → 生成/更新计划(PlanningSystem) → 同步环境(RoomSystem) → 回收无用实体(CleanupSystem)

所有 System 之间零直接调用关系，完全通过读写 Component 数据协同。

### 模块化设计

- 增加 Agent 能力：注册新 Component + 新 System，不影响已有系统
- 减少 Agent 能力：少注册 Component + 少注册 System，无需改代码
- 天然支持不同类型 Agent 拥有不同能力组合

## 关键数据
- System 总数：8 个
- Component 分类：6 大类
- CONSCIOUS 层频率：约每 10 秒
- SUBCONSCIOUS 层频率：约每 25 秒
- UNCONSCIOUS 层频率：约每 50 秒以上
- 框架语言：文章未明确（需核查 argOS 仓库）

## 竞争优势 / 护城河
- **架构代际差异**: ECS 架构 vs 传统 Agent 框架的管线式设计，根本性的技术路径差异
- **并发性能**: ECS 天然适合并行处理，在复杂多 Agent 场景（量化交易、大规模 NPC）有理论优势
- **游戏行业验证**: ECS 已被守望先锋、星际公民、Unity 等验证，技术可行性无需证明
- **模块化门槛最低**: 增减 Agent 能力只需加减 Component/System 注册，无需修改现有代码
- **创始人背景**: 与 Shaw 的技术渊源表明团队处于 AI Agent 开发的核心技术圈

## 风险 / 争议
- **项目知名度极低**: 作者撰写此文正是因为"$project89 项目一直缺少对这个框架的宣传"
- **代币经济模型不明确**: 虽然提及 $project89 代币，但未说明经济模型和价值捕获机制
- **ECS 学习曲线**: ECS 架构对多数 Web3 开发者来说陌生，可能限制社区贡献
- **尚处于早期**: UNCONSCIOUS 层尚未启用，框架成熟度存疑
- **竞争激烈**: ElizaOS、G.A.M.E、arc Rig 等多个框架已有先发优势和社区基础

## 相关实体
- [[ai16z]] — Shaw 与 Project89 创始人曾在 Magick 项目中共事，形成技术人才网络
- [[dark-forest]] — 早期全链游戏案例，未来可能受益于 ECS+Agent 架构
- [[virtuals]] — G.A.M.E 框架为 Agent 框架竞品，不同架构路径

## 相关概念
- [[ai-agents]] — argOS 是 Agent Framework 架构的第四种范式（ECS 模式）
- [[gamefi]] — argOS 面向游戏场景，为 AI 驱动 NPC 和自主游戏世界提供基础
- [[defai]] — ECS 并发性在 Agent 量化交易场景有潜在优势

## 来源
- [[来源_2025-01_Project89_argOS_ECS_Agent框架_深潮TechFlow]]
- [[来源_2024-12_Bankless_15个加密AI_Agent项目]] — Bankless 2024.12 补充：Project89 是基于 Solana 构建的前沿另类现实游戏（ARG），将 AI 驱动的游戏玩法与现实元素融合，AI 自主创建任务而玩家注入创意和策略，形成一个根据玩家行动动态改变的共享宇宙
- [[来源_2024-12_ai16z生态项目全景_BlockBeats]] — 补充 Shaw 与 Parzival 的合作历史：二人曾共同创立 Magic 公司，开发无代码代理平台，可在 60 秒内创建 Discord AI 机器人
