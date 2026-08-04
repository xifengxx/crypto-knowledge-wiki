---
type: entity
entity_type: company
created: 2026-07-01
updated: 2026-07-02
tags: [ai, llm, safety]
---

# Anthropic

## 基本信息
- 全称: Anthropic PBC
- 成立时间: 2021 年
- 创始人: Dario Amodei (CEO), Daniela Amodei (President)
- 前身: 创始团队原为 OpenAI 安全研究团队，2021 年因安全理念分歧出走创立
- 总部: 美国旧金山
- 定位: AI Safety 优先的 frontier AI 公司

## 核心产品
- **Claude** 系列: 旗舰大语言模型（Claude 3.5 Sonnet/Opus/Haiku, Claude 4）
- **MCP（Model Context Protocol）**: 2024 年 11 月 25 日发布的开源协议，为 AI 应用与外部扩展提供标准化通信接口，被称为"AI 应用程序的 USB-C 接口"。由公司内部工程师 David Soria Parra 和 Justin Spahr-Summers 创建，灵感来自 LSP（Language Server Protocol）。现已获得 OpenAI、Microsoft、Google 以及国内阿里云百炼、腾讯云等厂商支持。
- 核心理念: Constitutional AI（宪法 AI），RAIH（Responsible AI at Scale）

## 关键数据
- **2025年Q1融资$45亿**（分两轮）：为Q1第二大AI融资（仅次于OpenAI），显示投资者对AI安全路线的持续信心
- 2024年全球AI风投总额超1000亿美元，大模型赛道（OpenAI/Anthropic为代表）为资金主要流向之一 — [[来源_2024_超越炒作_风投AI布局]]

- Claude 3 在 2024 年 3 月人类智商测试（IQ test）中取得 100+ 分，略超人类平均水平 — [[来源_2024-04_YC_W24_166个AI项目全览_硅兔]]
- 2024 年全球 AI 风投总额超 1000 亿美元，大模型赛道（OpenAI/Anthropic 为代表）为资金主要流向之一 — [[来源_2024_超越炒作_风投AI布局]]
- DeepSeek-V3（671B MoE, 训练成本 558 万美元）在性能上对标 Claude 3.5 Sonnet，对纯 AI 公司的估值逻辑形成结构性挑战 — [[deepseek]] / [[来源_2025-01_DeepSeek_R1_霸榜AppStore_中国AI硅谷地震_深潮TechFlow]]
- Claude Opus 无监督对话实验（Infinite Backrooms）催生了 Truth Terminal 和 GOAT meme 币生态，GOAT 市值一度超 4 亿美元 — [[来源_2024-10_GOAT_Truth_Terminal_AI_Meme病毒_深潮TechFlow]]
- 用户可用 Claude 通过 5 个递进式 Prompt 在 1 小时内生成 4000 字图文并茂的研报，展示了 AI 辅助研究的实操效率 — [[来源_2024-10_AI一小时研报_支付赛道_5个Prompt_Web3Brand]]

## 竞争优势 / 护城河

1. **安全优先的品牌定位**: 创始团队原为 OpenAI 安全研究成员，因安全理念分歧出走创立；以 Constitutional AI（宪法 AI）为核心方法论，强调通过原则约束而非事后对齐来确保模型行为可控。这一"善良的狗版"路线赢得了安全敏感型客户和监管机构的信任 — [[来源_2023-03_强人工智能_区块链_安全性_外部约束]]
2. **编码与创意工作公认领先**: 在 Agent 构建者社区中，Claude 被评价为"日常主力工具"，编码能力出色，响应清晰详细，适合创意工作；在 AI Agent 选型框架中被推荐为编码和创意工作的首选模型 — [[来源_2024-12_LLM选择指南_AI_Agent_深潮TechFlow]]
3. **封闭源 LLM 双寡头格局**: 与 OpenAI 共同构成封闭源大模型的供应双头垄断，是企业级 AI 采购的主要选择 — [[openai]]
4. **AI for Science 前瞻性叙事**: CEO Dario Amodei 提出"powerful AI 将生物学和神经科学 50-100 年的进展压缩到 5-10 年"的预言，为公司赢得了科技和学术界的关注 — [[来源_2024-12_AI_for_Science行业解析_Biotech_Top50]]

## 风险 / 争议

1. **封闭源 vs 开源挑战**: DeepSeek 以 558 万美元训练出性能对标 Claude 3.5 Sonnet 的开源模型，对 OpenAI/Anthropic 的天价估值形成根本性质疑 — [[deepseek]]
2. **自我约束路线的有效性争议**: 有观点认为，依赖内部对齐/自我约束来确保 AGI 安全性——即 Anthropic 选择"直接做善良的狗版"而非先做狼版再驯化——本质上仍无法解决不可知风险，只有区块链的外部约束才是根本解 — [[来源_2023-03_强人工智能_区块链_安全性_外部约束]]
3. **高资本开支的商业模式风险**: 大模型训练和推理的成本极高，AI 行业整体的商业模式验证程度"远低于预期"，如果开源模型快速追平或超越封闭源模型，高估值面临重估压力 — [[来源_2024_超越炒作_风投AI布局]]
4. **欧洲 AI 主权竞争**: Mistral 等欧洲厂商试图为不愿依赖美国公司的开发者提供第三条路径，可能侵蚀 Anthropic 的海外市场份额 — [[mistral]]

## Dario Amodei 的 AI for Science 愿景
- 2024 年 10 月发表长文，阐述对 AI 如何改变人类社会的看法
- **核心预测**: powerful AI 将把生物学和神经科学 50-100 年的进展压缩到 5-10 年内完成
- **虚拟生物学家概念**: AI 不仅是数据分析工具，更能设计实验、指导研究、操控实验室机器人
- 预测 AI 可将关键生物学突破的发现率提高 10 倍或更多，相当于为研究团队增加多个具备创造力的研究员

## MCP 协议

详见概念页 [[model-context-protocol]]。

MCP 是 Anthropic 在模型之外最重要的产品战略，其设计哲学包括：
- **借鉴 LSP**：解决"多个 AI 应用"与"多种扩展"的 M×N 集成问题
- **三大原语**：工具（Tool）、资源（Resource）、提示（Prompt），从应用开发者角度设计
- **AI 友好**：约 100-200 行代码可启动 MCP 服务器，SDK 专门优化以方便 LLM 辅助构建
- **开放治理**：已有多家公司（Microsoft、JetBrains、Spring AI、Block、Pydantic、Shopify）拥有 SDK 管理权限，Anthropic 希望 MCP 成为"真正的社区项目"

MCP 团队关键成员：[[justin-spahr-summers]]、[[david-soria-parra]]

## 相关实体
- [[openai]] — 直接竞争对手，构成封闭源 LLM 双寡头格局；Anthropic 创始团队原为 OpenAI 安全研究成员，因安全理念分歧出走
- [[deepmind]] — 竞争对手，两者均看重 AI for Science 方向；Dario Amodei 原为 DeepMind 员工
- [[deepseek]] — 低成本开源模型挑战者，以 558 万美元训练成本达到 Claude 3.5 Sonnet 级别性能，质疑纯 AI 公司估值逻辑
- [[mistral]] — 欧洲 AI 主权代表，为不想依赖美国模型的开发者提供第三条路径
- [[dario-amodei]] — CEO，提出 AI 加速生物学研究的核心论点
- [[truth-terminal]] — 基于 Infinite Backrooms（Claude Opus 无监督对话）实验诞生的 AI 智能体

## 来源
- [[来源_2024-12_LLM选择指南_AI_Agent_深潮TechFlow]] — Agent 构建者 superoo7 的使用体验：Claude 是日常主力工具，编码能力出色，响应清晰详细，适合创意工作
- [[来源_2024-12_AI_for_Science行业解析_Biotech_Top50]] — Dario Amodei 的"虚拟生物学家"概念与 AI 加速生物学预测的详细记录
- [[来源_2023-03_强人工智能_区块链_安全性_外部约束]] — 2023年初对比分析：Anthropic比OpenAI更谨慎（倾向于直接做"善良的狗版"而非先做狼版再驯化），但作者论证认为只要是自我约束思路，长期对AGI都是掩耳盗铃——只有区块链外部约束才是根本解
- [[来源_2024_超越炒作_风投AI布局]] — 2024年全球 AI 风投超 1000 亿美元，大模型（OpenAI/Anthropic）为主要资金流向
- [[来源_2024-04_YC_W24_166个AI项目全览_硅兔]] — Claude 3 在 IQ 测试中取得 100+ 分
- [[来源_2025-01_DeepSeek_R1_霸榜AppStore_中国AI硅谷地震_深潮TechFlow]] — DeepSeek 的低成本训练对 Anthropic 商业叙事的挑战
- [[来源_2024-10_GOAT_Truth_Terminal_AI_Meme病毒_深潮TechFlow]] — Infinite Backrooms（两 Claude Opus 无监督对话）实验细节
- [[来源_2024-10_AI一小时研报_支付赛道_5个Prompt_Web3Brand]] — Claude 生成研报的实操案例
- [[来源_2025-01_DeFAI_AI_Agent_新浪潮_深潮TechFlow]] — The Hive 集成 Anthropic 等多模型
- [[来源_2025-01_DeFAI生态_AI_Agent交易_PANews]] — Hey Anon 多模型策略中包含 Claude
- [[来源_2025-04_Q1风险投资_美国内部_加密货币交易_Insights4VC]] — Anthropic Q1 $45亿融资详情
- [[来源_2025-04_Remote_MCP_Server_开源托管_Higress]] — 记录了 Anthropic 2025-03-26 发布的新版 MCP 协议细节（Streamable HTTP、Mcp-Session-Id、批量请求等），以及 Higress MCP 托管方案被 Anthropic 官方文档收录
