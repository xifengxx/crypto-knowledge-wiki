---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [ai-crypto, agent, infra, defai]
---

# Rei Network (Unit00x0)

## 基本信息
- **类型**: AI Agent 框架 / AI+区块链翻译层
- **赛道**: AI+Crypto、DeFAI、AI Agent Infrastructure
- **首个应用**: Unit00x0 (Rei_00 - $REI)，被训练为量化分析师
- **部署链**: Base（两个链上钱包均部署在 Base）
- **作者**: francesco (francescoweb3)
- **首次出现**: 2025 年 1 月

## 核心设计：通用翻译器
Rei 不试图强行融合 AI 和区块链，而是充当两者之间的"通用翻译器"——通过翻译层让概率性的 AI 输出可靠地转化为确定性的区块链操作。

### 四层认知架构
1. **思考层 (Thinking Layer)**: 处理和收集原始数据（图表、交易历史、用户行为），寻找潜在模式
2. **推理层 (Reasoning Layer)**: 为发现的模式添加上下文（日期、时间、历史趋势、市场状况），让数据立体化
3. **决策层 (Decision Layer)**: 根据上下文化信息制定具体行动方案
4. **行动层 (Action Layer)**: 将决策转化为可在区块链上执行的确定性操作

### 三大核心支柱
1. **Oracle (预言机/神经路径)**: 将 AI 的多样化输出转化为统一结果，记录到区块链
2. **ERC 数据标准 (ERC Data Standard)**: 扩展区块链存储能力，支持复杂模式数据存储，保留思考层和推理层的上下文信息
3. **记忆系统 (Memory System)**: 随时间积累经验，随时调用先前的输出和学习成果

## Quant V2 功能（5 种分析形式）
1. **项目分析**: K 线图 + 互动图表 + 持有者分布 + PnL
2. **流入流出分析**: 链上热门 Token 价格/交易量 + 资金流入流出对比
3. **互动分析**: 即时数据 vs 24h 前数据对比 + 相对价格变化
4. **顶级类别分析**: 单一类别中最低交易量 + 最高交易数
5. **单品深度分析**: 展示底部交易量 + 顶部交易数，深入单个项目 vs 同类指标变化

## 数据来源
Plotly + Matplotlib 图表库、Coingecko、Defillama、链上数据、Twitter 社交情绪数据

## 链上钱包（Base 链）
- **EOA 钱包（签名）**: `0x3BC4c3A2a2Fa5ad20a2B95B18CA418D06A360cB`
- **智能钱包（ERC-4337 账户抽象）**: `0xf6835acc8d2b51e5d47632ca8954bfee9a0ce49c`
- 用户通过签名授权，将操作委托给 Rei，使其能自主管理投资组合

## 未来路线图
- 更好的 UI
- 基于 Token 权限的 Alpha 终端
- 开发者平台

## 扩展应用场景
金融之外的潜力领域：内容创作、供应链/物流市场分析、治理自适应系统、医疗风险评估

## 我的判断
Rei 的"翻译层"定位和四层认知架构是差异化设计——大多数 Agent 框架关注"如何搭行为逻辑管道"，Rei 关注"如何在概率性 AI 和确定性区块链间建立可靠数据桥梁"。这个方向在 AI+Crypto 基础设施层有独特生态位，但目前缺乏第三方实证验证数据（训练方法、模型规模、性能基准均未公开）。需持续跟踪 Quant V2 独立评估和开发者平台上线进展。

## 相关实体
- [[aixbt]] — 同为 AI 驱动的加密分析 Agent，但 AIXBT 偏向 KOL/内容输出，Rei 偏向量化+链上执行
- [[virtuals]] — 同属 AI Agent 平台赛道，但 Virtuals 侧重 Agent 创建和代币化，Rei 侧重 AI→区块链数据翻译
- [[griffain]] — 同为 AI Agent 链上自主操作，Griffain 偏向自然语言 DeFi 交互，Rei 偏向量化分析

## 来源
- [[来源_2025-01_Rei_Network_AI_Agent_区块链联动_深潮TechFlow]]
- [[来源_2025-01_AI_Agent赛道入门指南]] — 将 REI 列为数据分析赛道的关注项目
