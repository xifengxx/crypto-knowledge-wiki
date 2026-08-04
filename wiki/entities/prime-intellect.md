---
type: entity
entity_type: project
created: 2026-06-29
updated: 2026-07-02
tags: [ai-crypto, depin, compute, distributed-training]
---

# Prime Intellect

## 基本信息
- 赛道: 去中心化AI训练 + GPU算力市场
- 核心产品: OpenDiLoCo分布式训练框架 + GPU marketplace
- 定位: 聚合全球算力资源，实现去中心化的大规模AI模型协同训练

## 核心业务/产品

### OpenDiLoCo — 分布式低通信训练框架
实现DeepMind的Distributed Low-Communication方法，支持跨地域GPU集群协同训练：
- 让每个GPU"岛屿"独立训练数百步后才同步一次（传统数据并行需要每步同步）
- **双优化器架构**：Inner optimizer处理本地GPU更新；Outer optimizer管理跨集群周期性同步
- 同步时传输**伪梯度**（当前权重与上次同步时的差异）而非全量权重——类似只传文档变更而非整个文件
- 在两大洲三个国家成功训练十亿参数模型，保持**90-95%算力利用率**
- **已于 2024.12 完全开源**（Teng Yan 报道）

### INTELLECT-1
OpenDiLoCo的实际部署，迄今最大规模的去中心化训练实验：
- **10B参数模型**，由全球**20+个GPU集群**分布式训练
- 额外优化：数据压缩、节点掉线备份容错、同步耗时<1分钟
- 已完成预训练，完全开源发布
- Teng Yan 评价：将 DeepMind 最初针对小型模型的方法"成功扩展到训练一个拥有 100 亿参数的模型"

### INTELLECT-2 — 去中心化RL大模型的里程碑
Prime Intellect 于 2025 年 5 月发布 INTELLECT-2，全球首个由异步、无需信任的去中心化节点协作训练而成的强化学习大模型：
- **32B 参数**规模，基于 QwQ-32B 并在代码和数学上做了专门的 RL 训练
- 由遍布 **三大洲的 100+ GPU 异构节点**协同训练完成
- 使用完全异步架构，训练时长超 **400 小时**
- 集成了 PRIME-RL（异步训练结构）、TOPLOC（训练行为验证）与 SHARDCAST（异步权重聚合）三大核心协议模块
- 训练过程完全开源：训练数据、策略更新轨迹、验证流程与聚合逻辑均透明可查
- 标志着"训练即共识"范式的首次系统落地

### PRIME-RL — 解耦式异步强化学习任务架构
专为去中心化训练场景定制的任务建模与执行框架，以强化学习为优先适配对象：
- 将训练、推理与权重上传过程结构性解耦
- 每个训练节点可在本地独立完成任务循环
- 通过标准化接口与验证和聚合机制协同
- 相比传统监督学习流程，更适合在无中心调度的环境中实现弹性训练

### TOPLOC — 轻量级训练行为验证机制
TOPLOC（Trusted Observation & Policy-Locality Check）是训练可验证性核心机制：
- 通过分析"观测序列 ↔ 策略更新"之间的局部一致性轨迹，完成轻量化结构验证
- 与 ZKML 等重型方案不同，不依赖全模型重计算
- 首次将训练过程中的行为轨迹转化为可验证对象
- 实现无需信任训练奖励分配的关键创新

### SHARDCAST — 异步权重聚合与传播协议
专为异步、带宽受限与节点状态多变的真实网络环境设计：
- 结合 gossip 传播机制与局部同步策略
- 允许多个节点在不同步状态下持续提交部分更新
- 实现权重的渐进式收敛与多版本演化
- 相比集中式或同步式 AllReduce 方法，显著提升可扩展性与容错能力

### PCCL — 协同通信库
PCCL（Prime Collective Communication Library）是为去中心化 AI 训练量身打造的轻量级通信库：
- 解决传统通信库（NCCL、Gloo）在异构设备、低带宽网络中的适配瓶颈
- 支持稀疏拓扑、梯度压缩、低精度同步与断点恢复
- 可运行于消费级 GPU 与不稳定节点
- 支撑 OpenDiLoCo 协议异步通信能力的底层组件

### 激励网络与角色分工
协议运行基于三类核心角色：
- **任务发起者**：定义训练环境、初始模型、奖励函数与验证标准
- **训练节点**：执行本地训练，提交权重更新及观测轨迹
- **验证节点**：使用 TOPLOC 机制验证训练行为的真实性，参与奖励计算与策略聚合

### GPU Marketplace
提供H100等GPU的按需租赁，支持竞价实例

## 竞争优势
- 拥有实际运行的大规模分布式训练实验（INTELLECT-1 和 INTELLECT-2 构成去中心化训练领域最大的公开验证数据集）
- 同时覆盖训练框架+算力市场，形成闭环
- 开源策略有助于吸引研究社区
- 协议栈最完整：PRIME-RL + TOPLOC + SHARDCAST + OpenDiLoCo + PCCL 五大模块覆盖训练全流程
- 创始人背景横跨 Meta AI、Google Research、OpenAI、Flashbots 等顶级机构

## 相关实体
- [[nous-research]] — DisTrO项目，另一条低通信训练路线
- [[bittensor]] — Macrocosmos在BitTensor上使用类似算法
- [[gensyn]] — 类似训练框架+市场模式

## 来源
- [[来源_2024-11_分散式计算_分布式训练_decentralised-co]]
- [[来源_2024-12_Crypto_AI_去中心化计算_算力为王_Teng_Yan]] — Open DiLoCo 完全开源 + 10B参数模型训练验证，带宽需求降至 1/500
- [[来源_2025-06_去中心化训练_前链条引擎_后链条生态_深潮TechFlow]] — INTELLECT-2 (32B/100+ GPU/400+hrs)、PRIME-RL、TOPLOC、SHARDCAST、PCCL 五大模块详解及 $15M Founders Fund 种子轮
