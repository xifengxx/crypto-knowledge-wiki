---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [ai-crypto, distributed-training, decentralized-ai, protocol-learning]
---

# Pluralis (Pluralis Research)

## 基本信息
- 赛道: 去中心化 AI 训练 / 协议学习
- 核心理念: Protocol Learning（协议学习）——将模型训练过程"协议化"
- 定位: 专注于"可信协同训练网络"的 Web3 AI 项目，推动去中心化、开放式参与、具备长期激励机制的模型训练范式
- 代币: 未发币

## 核心创新: Protocol Learning（协议学习）

### 三大支柱

1. **Unmaterializable Models（不可提取模型）**：模型权重以碎片形式分布在多个节点之间，任何单一节点无法还原完整权重。模型天然成为"协议内资产"，可实现访问凭证控制、外泄防护与收益归属绑定。

2. **Model-parallel Training over Internet（基于互联网的模型并行）**：通过异步 Pipeline 模型并行机制（SWARM 架构），不同节点仅持有部分权重，通过低带宽网络协作完成训练或推理。

3. **Partial Ownership for Incentives（按贡献分配所有权）**：所有参与节点根据训练贡献获得模型部分所有权，享有未来收益分成及协议治理权。

### 关键技术机制

- **SWARM + NAG（Nesterov Accelerated Gradient）**：异步 Pipeline 模型并行架构，首次在 LLaMA-3 上实证。NAG 机制有效修正异步更新中的梯度漂移与收敛不稳问题。
- **Column-Space Sparsification（列空间稀疏化）**：结构感知的压缩方法替代传统 Top-K，避免破坏语义路径。实测在异步模型并行环境中可压缩 90% 以上通信数据。
- **异步更新**：支持异构设备间低带宽环境下的实际训练可行性。

### 技术博客体系（6篇）
- 哲学与愿景：《A Third Path: Protocol Learning》《Why Decentralized Training Matters》
- 技术机制：《SWARM Parallel》《Beyond Top-K》《Asynchronous Updates》
- 制度创新：《Unmaterializable Models》《Partial Ownership Protocols》

## 团队与融资
- 2025 年完成 760 万美元种子轮融资，由 Union Square Ventures（USV）与 CoinFund 联合领投
- 创始人 Alexander Long，机器学习博士背景，具备数学与系统研究双重背景
- 核心成员全部由博士背景的机器学习研究者组成，典型的技术驱动型项目
- 当前尚未建立 BD/Growth 团队，专注于攻克低带宽异步模型并行的基础架构难题

## 当前状态
- 尚未上线产品、测试网或代码开源
- 2025 年 6 月发布新论文，将去中心化训练框架从模型预训练拓展到模型微调阶段
- 技术路径极具挑战性：需先解决底层系统架构、通信协议、权重不可导出等系统级难题

## 竞争优势
- 异步模型并行路线的技术开创性——相比数据并行更适合低带宽/异构设备/弹性调度
- 学术深度突出：团队全博士背景，高密度论文+技术博客发布路径
- Unmaterializable Models 概念为去中心化训练提供了可持续激励结构的前提假设

## 风险
- 无产品/测试网/代码开源，进度远落后于 Prime Intellect 和 Nous Research
- 目标路径过于理论化，工程落地可能面临多重技术瓶颈
- 无 BD/Growth 团队，商业化路径不清晰

## 相关实体
- [[prime-intellect]] — 同为去中心化训练，但侧重数据并行+RL，路线互补
- [[gensyn]] — 侧重可验证计算协议，不同架构方向
- [[nous-research]] — 侧重通信压缩（DisTrO）+ 认知演化

## 来源
- [[来源_2025-06_去中心化训练_前链条引擎_后链条生态_深潮TechFlow]]
