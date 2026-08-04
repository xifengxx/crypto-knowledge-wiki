---
type: source
source_type: article
url: https://www.techflowpost.com/article/detail_26230.html
date: 2025-06-15
ingested: 2026-07-02
---

# 去中心化AI训练全景：前链条引擎与后链条生态的系统性梳理

## 阅读证据
- 总行数: 665
- Q1 (前25%): Prime Intellect 于 2025 年 5 月发布 INTELLECT-2，全球首个由异步、无需信任的去中心化节点协作训练而成的强化学习大模型，32B 参数，100+ GPU 跨三大洲，训练超 400 小时
- Q3 (中后25%): Flock.io 累计融资 1,100 万美元（DCG、Lightspeed Faction、Animoca Brands、OKX Ventures 等），平台已创建 6428 个模型，接入 176 个训练节点、236 个验证节点、1178 个委托者
- Q4 (最后25%): RPS Labs 基于 Transformer 架构将微调后的 AI 模型用于 Solana 生态 DeFi 流动性管理，旗舰产品 UltraLiquid 为主动式做市引擎，降低滑点并优化代币发行与交易体验
- 图片: 9 key architectural diagrams and comparison tables (all external upload.techflowpost.com URLs, unavailable for local analysis)

## 核心要点
- 系统性划分了去中心化AI训练的四种范式：集中化训练、分布式训练（集中控制+分布式执行）、去中心化训练（无中心协调器+加密激励）、联邦学习（数据本地+参数集中聚合），并以表格对比其技术架构、信任激励与应用特征
- 提出"前链条引擎 vs 后链条生态"的完整框架：前链条 = 模型预训练与底层协议（Prime Intellect/Pluralis/Gensyn/Nous Research），后链条 = 微调与部署（Bagel/Pond/RPS Labs），Flock 作为中间层联邦学习桥梁
- 每个项目均从系统架构、技术机制、团队融资三个维度深入解析，覆盖 PRIME-RL 异步调度、TOPLOC 轻量验证、SHARDCAST 异步聚合、Protocol Learning 协议学习、SWARM + NAG 异步模型并行、RL Swarm 多模型优化、Verde 可验证机制、DisTrO 通信压缩、Psyche 网络、zkFL 零知识聚合等核心技术
- 从区块链协作层（可验证性/激励机制/开放性）和 AI 训练系统层（调度容错/训练优化/通信优化）两个维度构建了 4 项目系统性评估矩阵
- 指出强化学习（RL）是去中心化训练的未来演进方向，PRIME-RL 和 RL Swarm 正在推动 RL 从后训练微调向预训练主结构演进

## 关键数据
- INTELLECT-2：32B 参数，100+ GPU 跨三大洲，400+ 小时异步训练，全球首个可验证去中心化训练模型
- Prime Intellect 累计融资超 2,000 万美元（$5.5M 早期轮 + $15M 种子轮，Founders Fund 领投）
- Pluralis 760 万美元种子轮融资（USV + CoinFund 联合领投）
- Gensyn 4,300 万美元 A 轮融资（a16z crypto 领投）
- Nous Research 5,000 万美元 A 轮融资（Paradigm 领投），估值达 10 亿美元
- Flock.io 累计融资 1,100 万美元，平台已有 6,428 个模型、176 训练节点、236 验证节点、1,178 委托者
- Flock.io zkFL 零知识聚合机制实现隐私保护与可验证性融合

## 与已有知识的关系
- 补充 [[prime-intellect]] — 新增 INTELLECT-2（32B/100+ GPU/400+hrs）、PRIME-RL 异步调度、TOPLOC 轻量验证、SHARDCAST 聚合协议、PCCL 通信库、$15M Founders Fund 种子轮等关键信息
- 补充 [[gensyn]] — 新增 RL Swarm 三步流程（Answering/Critique/Resolving）、Verde+Proof-of-Learning 验证、SkipPipe 容错、HDEE 异构集群、Truebit 博弈机制、Testnet Phase 0 部署详情
- 补充 [[nous-research]] — 新增 Desideratic AI 哲学、Psyche 网络、Hermes 1-3 系列、Forge 推理框架（MCTS/CoC/MoA）、TEE_HEE 自主代理实验、$50M Paradigm A 轮/独角兽估值
- 补充 [[flock]] — 新增 AI Arena/FL Alliance/AI Marketplace 三产品线、zkFL 零知识聚合、具体运营数据（6428 模型/176 训练节点/236 验证节点/1178 委托者）、$11M 累计融资
- 补充 [[exo-labs]] — 新增 DiLoCo 异步延迟同步、SPARTA 稀疏参数交换、EXO Gym 多节点模拟、evML 验证机制等训练侧信息
- 补充 [[ai-crypto]] — 为"去中心化算力三层工作负载"框架中的"微调/训练"层补充了大量项目级工程验证数据
- 新实体 [[pluralis]] — Pluralis Research 首次建立实体页，"Protocol Learning"理念、Unmaterializable Models、SWARM+NAG 异步模型并行、Column-Space Sparsification

## 值得记住的引用
> "去中心化训练可以理解为：一群全球的志愿者，各自贡献算力协同训练模型，但「真正可行的大规模去中心化训练」仍是一项系统性的工程挑战，涉及系统架构、通信协议、密码安全、经济机制、模型验证等多个层面，但能否「协同有效 + 激励诚实 + 结果正确」尚处于早期原型探索阶段。"

> "我们相信，去中心化训练不仅是区块链精神在 AI 时代的自然延伸，更是全球协作式智能生产力体系的基础设施雏形。未来，当我们回望这条充满挑战的前路征途，仍将以那句初心共勉：去中心化不只是手段，它本身就是价值。"

> "Pluralis 明确以「异步模型并行」为核心方向，强调其相较于数据并行具备以下优势：支持低带宽网络与非一致性节点、适配设备异构允许消费级 GPU 参与、天然具备弹性调度能力支持节点频繁上线/离线。"

## 我的笔记
- 这篇文章最突出的价值在于首次系统性地将去中心化AI训练分为"前链条引擎"（预训练协议层）和"后链条生态"（微调部署层）两个大类，为理解这个碎片化赛道提供了简洁有力的分析框架。作者显然是深入了解各个项目的技术白皮书和工程实现，而非简单的新闻综述。
- 值得注意的是，除了 Flock 有具体的产品和用户数据（6428 模型/176 节点），其他四个前链条项目几乎都还处于理论/测试网阶段。Prime Intellect 的 INTELLECT-2 虽已发布，但性能"尚未超越 GPT-4 或 Gemini"。整个赛道距离真正的 production-ready 仍有巨大距离，投资者需警惕"过度技术叙事"的风险。Pluralis "尚未上线产品、测试网或代码开源"这一事实尤其值得警惕。
