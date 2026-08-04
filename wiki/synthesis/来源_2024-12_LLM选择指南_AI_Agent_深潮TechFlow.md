---
type: source
source_type: article
url: https://www.techflowpost.com/article/detail_22384.html
author: superoo7 (编译：深潮TechFlow)
date: 2024-12-19
ingested: 2026-07-02
---

# 自己做 AI Agent？大语言模型选择实战指南

## 阅读证据
- 总行数: 236
- Q1 (前25%): 作者自称帮助构建超过 20 个 AI 智能体（Agent），并在测试模型上投入了大量成本——强调经验来自实际构建而非实验室基准
- Q3 (中后25%): Cohere 的 Command R+ 被评价为"被低估的优秀模型"，支持 128,000 tokens 的上下文窗口，在角色扮演和复杂任务中表现出色
- Q4 (最后25%): 推荐使用 OpenRouter 或 Redpill 进行模型测试，这些平台支持加密货币支付；推荐 Ollama 用于本地 GPU 运行模型以节省成本
- 图片: 0 analyzed / 11 decorative skipped / 11 external URLs unavailable (techflowpost CDN)

## 核心要点
- 核心理念：没有一种模型能满足所有需求，应根据具体场景选择最合适的 LLM，就像组建"梦之队"一样混合搭配不同模型
- 封闭源 vs 开源模型二分法：GPT-4/Claude 等按量付费、由提供商托管；Llama/Mixtral 等需自行部署运行
- 模型规模不等于性能：7B 参数不代表比更大模型差，关键在于匹配具体需求
- 场景化推荐框架：社交机器人用 Grok；多语言（尤其是亚洲语言）用 Qwen/QwQ；通用推理用 OpenAI；编码和创意工作用 Claude；开源灵活用 Llama；角色扮演用 MythoMax 或 Command R+；轻量预算用 Gemma；复杂推理用 Mixtral
- 实操建议：通过 OpenRouter/Redpill 快速对比测试多个模型，用 Ollama 在本地 GPU 上低成本实验；Groq LPU 提供极快推理速度但模型选择有限
- AI16Z 的 Eliza 框架默认使用 XAI Grok 模型

## 关键数据
- 作者构建的 AI 智能体数量：超过 20 个
- Command R+ 上下文窗口：128,000 tokens
- MythoMax 参数规模：13B（130 亿参数）
- 模型参数规模示例：7B = 70 亿个参数

## 与已有知识的关系
- 补充 [[ai-agents]] — 提供了从 Agent 构建者视角的 LLM 选型实战框架，与现有 Agent 框架分析（Eliza/G.A.M.E/Rig/argOS）形成互补：框架是"骨架"，LLM 选型是"大脑"；特别验证了 Eliza 默认使用 Grok 的选型逻辑
- 补充 [[defai]] — DeFAI Agent 的模型选型隐含参考：推理密集型（交易策略）适合 OpenAI/Claude，多语言跨链场景适合 Qwen，角色扮演类 Agent 适合 Command R+/MythoMax
- 与 [[anthropic]] 实体页已覆盖的 Claude 编码能力形成交叉验证：本文从 Agent 构建者日常使用角度确认 Claude 是"日常主力工具"，编码能力出色
- ⚠️ 时效性警示：文章标注 2024 年 12 月，提及 Llama 3.3 为"近期"——到 2026 年 7 月已过 18 个月，模型格局已发生显著变化（GPT-5/Claude 4 等新模型发布）。本文价值在于"选型方法论"而非具体模型推荐

## 值得记住的引用
> "几乎每天我都会收到类似的问题。经过帮助构建超过 20 个 AI 智能体并在测试模型上投入了大量成本后，我总结出了一些真正有效的经验。"

> "没有一种模型能够满足所有需求。每种模型都有其特定的适用场景。"

> "就像组建一支梦之队，每个成员都有独特的角色和贡献。"

> "这篇文章并非基于实验室的基准测试或营销宣传。我将分享的是基于过去两年中，亲手构建 AI 智能体和生成式 AI (GenAI) 产品的实际经验。"

## 我的笔记
- 这篇文章的"场景化选型"框架简单直接，比技术白皮书式的 benchmark 对比更有实操价值。但它的推荐非常个人化（"我日常使用 Claude"），缺乏系统性的 A/B 测试数据支撑，本质上是经验之谈而非研究结论。
- 一个隐藏的洞察：文章推荐的 OpenRouter/Redpill 支持加密货币支付，这暗示了 Crypto+AI 的一个实际使用场景——AI Agent 开发者用加密货币支付模型 API 费用。这比许多"AI+Crypto"宏大叙事更接地气，是真实的 PMF 信号。
- 需要注意这篇文章的读者定位是"想做 AI Agent 的入门开发者"，因此推荐的模型偏保守（主流商业/开源模型），没有涉及更前沿的专用模型或微调策略。对于已经在构建复杂 Agent 系统的开发者，Llama 生态的微调变体（如针对特定任务的 LoRA）可能是更优选择。
