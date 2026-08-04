---
type: entity
entity_type: protocol
created: 2026-06-29
updated: 2026-07-02
tags: [depin, ai-crypto, compute, infrastructure, trustless-verification]
---

# Gensyn

## 基本信息
- 赛道: 去中心化 AI 计算协议
- 代币: 尚未发币（截至 2023.12）
- 定位: 让开发者在小型数据中心、个人游戏计算机和其他连接硬件上构建 AI 系统，按需付费

## 核心业务
基于区块链的 AI 计算协议，专注于"深度学习训练任务可信执行"。Gensyn 的核心定位不是"怎么训练"，而是"由谁训练、如何验证、如何分润"的训练任务执行协议层。

### RL Swarm — 协同强化学习训练系统
首创的去中心化多模型协同优化系统，面向后训练阶段：
- **生成阶段（Answering）**：每个节点独立输出答案
- **批评阶段（Critique）**：节点互相点评他人输出，选出最优答案与逻辑
- **共识阶段（Resolving）**：预测大多数节点偏好并据此修改自身回答，实现局部权重更新
- 每个节点运行独立模型并进行本地训练，无需梯度同步
- 天然适应异构算力与不稳定网络环境，支持节点弹性接入与退出
- 已在 Gensyn 基于 Ethereum Rollup 的 Testnet Phase 0 中部署上线

### Verde + Proof-of-Learning — 可信验证机制
结合三种验证手段：
- **Proof-of-Learning**：基于梯度轨迹与训练元数据判断训练是否真实发生
- **Graph-Based Pinpoint**：定位训练计算图中的分歧节点，仅需重算具体操作
- **Refereed Delegation**：仲裁式验证机制，由 verifier 与 challenger 提出争议并局部验证
- 相较于 ZKP 或全重算验证方案，在可验证性与效率之间取得更优平衡

### SkipPipe — 通信容错优化
解决"低带宽 + 节点掉线"场景下的通信瓶颈：
- **跳层机制（Skip Ratio）**：跳过受限节点，避免训练阻塞
- **动态调度算法**：实时生成最优执行路径
- **容错执行**：即使 50% 节点失效，推理精度仅下降约 7%
- 支持训练吞吐提升高达 55%，实现 early-exit 推理、无缝重排、推理补全

### HDEE — 跨领域异构专家集群
Heterogeneous Domain-Expert Ensembles，优化多领域/多模态/多任务训练：
- MHe-IHo：为不同难度任务分配不同大小模型
- MHo-IHe：任务难度统一但训练步长异步调整
- 支持异构专家模型 + 可插拔训练策略

### 多角色博弈机制
灵感来源于 Truebit 经济博弈设计，引入四类参与者：
- **Submitter**：发布训练任务、设定结构与预算
- **Solver**：执行训练任务，提交结果
- **Verifier**：验证训练行为，确保合规有效
- **Whistleblower**：挑战验证者，获取仲裁奖励或承担罚没
- 通过强制插入错误 + 随机仲裁，激励参与者诚实协作

## 融资
- 2022.03: 650 万美元种子轮，Eden Block 领投，Galaxy Digital、Maven 11、CoinFund、Hypersphere 等参投
- 2023.06: 4300 万美元 A 轮，**a16z 领投**，CoinFund、Canonical Crypto、Protocol Labs、Eden Block、Jsquare 等参投
- 由 Ben Fielding 和 Harry Grieve 联合创立，总部英国伦敦

## 竞争优势
- a16z 领投 A 轮，顶级 VC 背书
- 四层技术栈最完整：RL Swarm + Verde/Proof-of-Learning + SkipPipe + HDEE
- 独创的仲裁式验证机制（Refereed Delegation）在可验证性与效率间取得平衡
- Testnet Phase 0 已实际部署在 Ethereum Rollup 上

## 风险
- 尚未发币，代币经济模型未公布
- 整个去中心化训练赛道仍处于早期原型阶段
- 与中心化云服务（AWS/GCP）相比，性价比和可靠性有待验证

## 相关实体
- [[bittensor]] — 去中心化 AI 训练网络，不同激励和验证机制
- [[render-network]] — 去中心化 GPU 渲染，可延伸至 AI 计算
- [[ritual]] — 去中心化 AI 计算平台，类似定位，$25M 融资

## 相关概念
- [[depin]] — DePIN 算力方向核心项目
- [[ai-crypto]] — AI+Crypto 基础设施层

## 来源
- [[来源_2023-12_AI与加密交汇_潜力未发币项目_BlockBeats]] — 补充训练成本对比（$0.4/h vs AWS $2 vs GCP $2.5）和四角色验证系统（提交者/求解者/验证者/吹哨者）
- [[来源_2023-12_Web3_AI_赛道全景盘点_BlockBeats]]
- [[来源_2024-12_Crypto_AI_去中心化计算_算力为王_Teng_Yan]] — Teng Yan 提及 Gensyn 正在探索无需信任的节点验证方法
- [[来源_2025-06_去中心化训练_前链条引擎_后链条生态_深潮TechFlow]] — RL Swarm / Verde+Proof-of-Learning / SkipPipe / HDEE 详解及 $43M a16z 融资
