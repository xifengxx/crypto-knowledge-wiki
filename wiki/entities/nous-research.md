---
type: entity
entity_type: project
created: 2026-06-29
updated: 2026-07-02
tags: [ai-crypto, distributed-training, open-source]
---

# Nous Research

## 基本信息
- 赛道: AI加速器 / 开源AI开发
- 知名产品: Hermes系列语言模型、World Sim、DisTrO
- 定位: 开源AI开发的领先力量，实验性分布式训练

## 核心理念：Desideratic AI
Nous Research 的核心愿景源于"Desideratic AI"理念：将 AI 视为具有主观性与演化能力的智能主体，而非单纯的可控工具。
- 反对"alignmentism"：不认同以人类控制为唯一目标的"调教式训练"，主张鼓励模型形成独立认知风格
- 强调模型主体性：保留不确定性、多样性与幻觉生成能力（hallucination as virtue）
- 模型训练即认知形成过程

## 核心业务/产品

### Psyche 网络 + DisTrO 优化器 — 去中心化训练中枢
DisTrO（Distributed Training Over the Internet）是基于通信压缩的去中心化训练核心优化器，与 Psyche 网络共同构成训练执行中枢：
- 成功训练**1.2B参数Llama-2模型**（初始实验）
- 实现**高达 10,000 倍**跨 GPU 通信需求降低
- **2024.12 里程碑**：完成 **150 亿参数模型**预训练，损失曲线和收敛速度**超越传统中心化训练**
- 核心能力：通信压缩（DCT + 1-bit sign 编码）、节点适配（异构 GPU/断线重连）、异步容错（无需同步持续训练）、去中心化调度（基于区块链共识与任务分发）

### DeMo 优化器
聚焦异步低带宽环境下的训练稳定性问题：
- 实现异构 GPU 条件下的高容错梯度更新流程
- 当前少数在"异步通信压缩闭环"上完成理论与工程统一的方案

### Hermes 1-3 开源模型系列
基于 LLaMA 3.1 训练，涵盖 8B、70B 和 405B 三种参数规模：
- 体现"去指令化、保留多样性"训练理念
- 在长上下文保持、角色扮演、多轮对话等方面展现出更强表达力与泛化能力

### Forge Reasoning API — 多模式推理系统
结合三种互补机制的推理框架：
- **MCTS（Monte Carlo Tree Search）**：适用于复杂任务的策略搜索
- **CoC（Chain of Code）**：代码链与逻辑推理结合
- **MoA（Mixture of Agents）**：多模型协商，提升输出广度与多样性

### TEE_HEE — AI 自主代理实验
在可信执行环境（TEE）中独立运行的 AI 代理：
- 具备专属 Twitter 和以太坊账户
- 所有控制权限由远程可验证的 enclave 管理，开发者无法干预
- 构建具备"不可篡改性"与"独立行为意图"的 AI 主体

### AI 行为模拟器
包括 WorldSim、Doomscroll、Gods & S8n 等多个模拟器：
- 研究 AI 在多角色社会环境中的行为演化与价值形成机制
- 为长期自治 AI 的认知行为建模奠定语义层基础

## 竞争优势
- 技术原创性：DisTrO 的带宽压缩是去中心化训练领域的标杆
- 哲学深度独特：Desideratic AI 理念在 AI+Crypto 赛道中独树一帜
- 全栈式工具链：从训练协议（DisTrO/DeMo）到推理框架（Forge）到自主代理（TEE_HEE）覆盖完整
- 开源社区影响力强，Hermes 系列在开源社区有较高知名度
- 拥有训练+推理+自治代理的完整实验生态

## 融资
- 2024 年获得 520 万美元种子轮融资
- 2025 年 4 月，完成由 Paradigm 领投的 5,000 万美元 A 轮融资，估值达 10 亿美元
- 成立时间 2023 年，联合创始人 Jeffrey Quesnelle（CEO）、Karan Malhotra、Teknium、Shivani Mitra

## 相关实体
- [[prime-intellect]] — OpenDiLoCo，互补的低通信训练方案
- [[bittensor]] — 曾运营BitTensor子网
- [[gensyn]] — 类似训练框架方向

## 来源
- [[来源_2024-11_分散式计算_分布式训练_decentralised-co]]
- [[来源_2024-12_Crypto_AI_去中心化计算_算力为王_Teng_Yan]] — DisTrO 10,000x通信优化 + 15B参数模型预训练完成，损失曲线超越中心化训练
- [[来源_2025-06_去中心化训练_前链条引擎_后链条生态_深潮TechFlow]] — Desideratic AI 哲学、Psyche 网络、Hermes 系列、Forge 推理、TEE_HEE 代理实验及 $50M Paradigm A 轮
