---
type: source
source_type: article
url: https://www.techflowpost.com/article/detail_23287.html
date: 2025-01-26
ingested: 2026-06-30
---

# Project89 的 argOS — 基于 ECS 架构的下一代 Agent 框架

## 阅读证据
- 总行数: 495
- Q1 (前25%): Project89 创始人此前开发了 Magick 项目（github.com/Oneirocom/Magick），ai16z 的 Shaw 是该项目的第四大贡献者，说明二人有技术渊源
- Q3 (中后25%): ArgOS 将组件(Component)分为 6 大类：核心身份类(Agent/PlayerProfile)、行为与状态类(Action/Goal/Plan)、感知与记忆类(Perception/Memory/Stimulus)、环境与空间类(Room/OccupiesRoom)、外观与交互类(Appearance/Relationship)、辅助或运维类(Cleanup/DebugInfo)
- Q4 (最后25%): 架构最大创新点：每个 System 独立运行，无互相调用关系，但仍能通过 ECS 架构实现"感知→体验→思考→行动→规划→房间同步→清理"的完整 Agent 行为闭环。作者认为将 System 分为有意识/潜意识/无意识三个层次来区分执行频率是"极其高明的设计"
- 图片: 10张外部URL图片（upload.techflowpost.com），均为架构图/截图/代码图示，不可直接获取

## 核心要点
1. **ECS 架构首次应用于 Agent Framework**：argOS 将每个 Agent 视为一个 Entity，挂载不同 Component（Perception/Memory/Action/Goal/Plan 等），由独立的 System 按固定周期执行逻辑。这与当前主流 Agent 框架（ElizaOS、G.A.M.E）的面向对象管线式架构有根本差异
2. **系统完全解耦但功能协同**：PerceptionSystem、ExperienceSystem、ThinkingSystem、ActionSystem、GoalPlanningSystem、PlanningSystem、RoomSystem、CleanupSystem 各自独立运行（不同频率、无调用关系），但通过共享 Component 数据实现从感知到行动到规划的完整 Agent 闭环
3. **三层意识频率模型**：CONSCIOUS 层（Room/Perception/Experience/Thinking/Action/Cleanup，约10秒）负责实时感知和执行；SUBCONSCIOUS 层（GoalPlanning/Planning，约25秒）负责中长期规划；UNCONSCIOUS 层（暂未启用，50秒以上）为更底层的需求预留
4. **极致的模块化可扩展性**：增加新功能只需注册新的 Component 和 System，不影响已有系统。减少 Agent 能力只需少注册 Component，无需改代码。这一特性特别适合游戏场景下角色能力的差异化设计
5. **性能优势来自 ECS 天然并发性**：ECS 的 System 独立运行设计天然适合并行处理，在复杂 DeFAI 场景（如 Agent 量化交易）下可能比传统面向对象框架有优势
6. **创始人技术背景深厚**：与 Shaw（ai16z）在 Magick 项目中有合作历史，团队有游戏和 AI 编程工具双重背景

## 关键数据
- argOS 共 8 个 System：PerceptionSystem / ExperienceSystem / ThinkingSystem / ActionSystem / GoalPlanningSystem / PlanningSystem / RoomSystem / CleanupSystem
- System 执行频率：CONSCIOUS 层约每 10 秒，SUBCONSCIOUS 层约每 25 秒，UNCONSCIOUS 层约每 50 秒以上
- argOS 开源仓库：github.com/project-89/argOS
- System 之间：零直接调用关系，全部通过 Component 数据共享实现协同
- 组件分类：6 大类，覆盖身份/行为/感知/环境/外观/运维全维度
- 作者撰写耗时：4 天

## 与已有知识的关系
- 补充 [[ai-agents]] — 新增一种 Agent Framework 架构范式：ECS 模式 vs 传统面向对象管线模式。argOS 代表了"游戏引擎架构思想进入 Agent 开发"的趋势，与 ElizaOS（TypeScript 管线）、G.A.M.E（无代码平台）、arc Rig（Rust 企业级）形成第四种路径
- 补充 [[gamefi]] — ECS 架构已在 Mud/Dojo 等链游引擎中使用，argOS 证明了 ECS+Agent 的可行性，为"AI 驱动的全链游戏 NPC"提供了技术基础
- 关联 [[ai16z]] — Shaw 与 Project89 创始人曾在 Magick 项目中合作，表明 AI Agent 框架赛道有隐秘的技术人才网络
- 补充 [[来源_2024-12_GAME_vs_ElizaOS_AI_Agent框架对比]] — 在那篇框架对比的基础上，argOS 代表了第三种（也是更根本性的）架构选择，不走管线式设计，而是采用游戏引擎的 ECS 范式

## 值得记住的引用
> "每个System都是独立运行的，不会跟其他的System之间有调用关系，因此即便我们希望实现Agent的'感知环境变化→记录或转化为内在经验→自我思考并决策→付诸行动→动态调整目标与计划→同步环境→及时回收无用实体'能力的时候，各个System在功能上会有很多互相依赖的点，但是我们依然可以通过ECS架构把整体结构成各个互不相关的System。"
> "将System分成有意识、潜意识和无意识来区分不同类型的System应该在多久后执行一次，是极其高明的设计，已经是一个很具象的人的能力了。"
> "比如我现在只是希望一个Agent拥有一些基本能力，我只需要在定义Entity的时候减少注册一些Component以及减少注册System就可以轻易的实现，都不用改几行代码。"

## 我的笔记
这篇文章的价值不在于 Project89 这个项目本身（目前似乎缺乏代币和经济模型，社区关注度有限），而在于它引入了一个**被整个 Crypto AI Agent 赛道忽略的思想来源**：游戏引擎架构。ECS 在游戏行业已被守望先锋、星际公民、Unity 等验证了可扩展性，将 ECS 应用于 Agent 框架是一个逻辑上合理但此前无人认真实践的思路。argOS 的真正意义是作为一个概念验证，表明 Agent 框架可以不走"把 LLM 调用的管线一层层串起来"的传统路径，而是走"模拟一个世界的状态机，让 Agent 作为这个世界的实体自然演化"的路径。如果这个方向被更广泛采纳，Agent 框架将从"对话机器人编排工具"升级为"自主世界的模拟引擎"——叙事价值远大于当前的实际采用情况。
