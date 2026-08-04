---
type: entity
entity_type: company
created: 2026-07-02
updated: 2026-07-02
tags: [ai, hardware, inference, chips]
---

# Groq

## 基本信息
- 类型: AI 推理芯片公司
- 成立时间: 2016 年
- 创始人: Jonathan Ross（前 Google TPU 核心设计者）
- 总部: 美国加州山景城
- 核心产品: LPU（Language Processing Unit）——专为大语言模型推理优化的处理器架构

## 核心业务
- 设计专用 AI 推理芯片（LPU），与通用 GPU（NVIDIA）竞争
- 提供云推理 API，号称在大模型推理速度和成本上优于 GPU
- 架构特点：确定性执行（无分支预测/无乱序执行），单线程顺序处理，避免 GPU/CUDA 瓶颈

## 关键数据
- 2025年Q1融资$15亿（Q1美国第四大VC交易，仅次于OpenAI/Anthropic/Infinite Reality）
- 此前融资：2024 年完成 $6.4 亿 D 轮，估值约 $28 亿

## 竞争优势 / 护城河
- 创始团队基因：Jonathan Ross 为 Google TPU v1 核心架构师
- LPU 架构差异化：不是 GPU 替代品，而是针对 LLM 推理的专用硬件
- 推理速度优势：市场认知中 LPU 在文本生成场景的 token 输出速度领先

## 风险 / 争议
- 与 NVIDIA GPU 生态的竞争差距巨大（CUDA 生态护城河）
- LPU 仅在推理场景有优势，训练仍需依赖 GPU
- 商业模式质疑：作为芯片初创公司，需要巨大的资本开支和客户获取周期

## 相关实体
- [[nvidia]] — 主要竞争对手（GPU 推理/训练）
- [[cerebras]] — 另一家 AI 芯片初创公司（WSE 晶圆级芯片）
- [[openai]] — 同为 AI 基础设施层的大额融资方
- [[anthropic]] — 同为 AI 基础设施层的大额融资方

## 来源
- [[来源_2025-04_Q1风险投资_美国内部_加密货币交易_Insights4VC]] — $15亿 Q1 融资
