---
type: source
source_type: article
url: https://www.chaincatcher.com/article/2125495
date: 2024-05-22
ingested: 2026-07-02
---

# Lumoz 推出基于 EigenLayer 的 zkProver 和 zkVerifier — AVS 计算层

## 阅读证据
- 总行数: 122
- Q1 (前25%): EigenLayer ETH TVL 已突破 500 万枚 ETH，EIGEN 代币质押超 5400 万枚，活跃 AVS 为 11 个、Operator 为 251 个。Lumoz 2024 年 4 月以 $3 亿估值完成 Pre-A 轮融资
- Q3 (中后25%): zkVerifier 的多源证明整合能力——能整合来自不同 ZKP 来源的证明，支持广泛的零知识证明应用场景，是区块链生态系统的关键灵活性优势
- Q4 (最后25%): zkVerifier 集体决策机制——至少三分之二的验证节点确认证明有效后才认定有效，确保验证结果的权威性和一致性
- 图片: 0 analyzed / 4 decorative skipped (均为外部 URL 架构/流程图，chaincatcher.com，本地不可用)

## 核心要点
- Lumoz 在 EigenLayer 上推出由 zkProver 和 zkVerifier 组成的 AVS 计算层，将 ZKP 计算能力接入 EigenLayer 再质押安全体系
- zkProver 负责生成零知识证明，包含 zkRollup Prover、zkFraud Prover、zkML Prover 等专用证明者类型，通过 Dispatch 模块智能调度
- zkVerifier 负责分布式验证 ZKP，通过多源证明整合、Gas 成本优化、专用验证器部署等 8 项设计策略降低验证成本并提升效率
- Lumoz 计算层架构 = Ethereum (EigenLayer AVS) + EVM Chain (Polygon zkEVM/CDK/ZKStack/Scroll) + Lumoz AVS Oracle (数据中继) + Lumoz Chain (核心调度层) + zkProver (计算节点) + zkVerifier (验证节点)
- 通过 EigenLayer 再质押机制，Lumoz 用经济安全替代纯信任假设：质押者锁仓 ETH 为 zkProver/zkVerifier 网络提供安全保障，同时获得质押收益
- 文章本质是 Lumoz 的 PR 通稿——技术细节丰富但缺乏独立数据验证，对性能提升只有定性描述没有定量对比

## 关键数据
- EigenLayer ETH TVL: 突破 500 万枚 ETH（2024 年 5 月）
- EIGEN 代币质押量: 超过 5400 万枚
- 活跃 AVS 数量: 11 个
- 活跃 Operator 数量: 251 个
- Lumoz 估值: $3 亿（2024 年 4 月 Pre-A 轮）
- zkVerifier 共识门槛: 至少 2/3 验证节点确认
- Lumoz 生态合作方: Polygon zkEVM、Polygon CDK、ZKStack、Scroll 等

## 与已有知识的关系
- 补充 [[lumoz]] — 在 ZK-RaaS + ZK-PoW 云之外，新增 EigenLayer AVS 计算层这一业务线，完善 Lumoz 产品矩阵认知
- 补充 [[restaking]] — 新增 Lumoz 作为 EigenLayer AVS 需求端的具体案例：zkProver/zkVerifier 是以 ZK 计算为服务内容的 AVS，扩展了 AVS 类型（此前已知 AVS 类型为 DA/预言机/ZK 协处理器/DePIN/游戏 L2）
- 呼应 [[eigenlayer]] — Lumoz 是 EigenLayer 生态 20+ 赛道龙头项目之一（同期还包括 Espresso、Near、Dodo），验证了 EigenLayer 生态爆发的叙事
- 与 [[来源_2024-04_ZK模块化新星_Lumoz_RaaS_PANews]] 形成时间线衔接——4 月融资 → 5 月推出 AVS 计算层

## 值得记住的引用
> "Lumoz 宣布推出基于 EigenLayer 的 zkProver 和 zkVerifier，不仅显著增强了计算和验证的效率，而且通过 EigenLayer 的再质押机制有效确保了整个服务流程的安全性和收益。"（开篇核心声明）

> "至少三分之二的验证节点确认证明有效，确保验证结果的权威性和一致性。"（zkVerifier 分布式验证的共识门槛）

> "通过整合强大的计算资源与 EigenLayer 的再质押机制，Lumoz 打造了一个高效且安全的计算服务生态系统。"（价值主张总结）

## 我的笔记
这是一篇典型的项目 PR 通稿，信息密度不高，关键数据（TVL、节点数等）来自 EigenLayer 整体而非 Lumoz 自身。文章对 zkProver/zkVerifier 的技术描述停留在架构框图层面，没有提供 benchmark 数据——比如 zkProver 生成一个 ZKP 的实际耗时、zkVerifier 验证的 Gas 节省百分比。这使得文章的说服力主要依赖于"绑定 EigenLayer"的叙事杠杆，而非 Lumoz 自身的技术差异化证据。

值得注意的是，这篇文章发布时间（2024 年 5 月）正好在 EigenLayer 空投争议爆发后不久——文章开篇即承认"尽管近期身陷空投争议"。在这种背景下发布 AVS 集成公告，Lumoz 实际上是在押注 EigenLayer 的长期生态价值能够超越短期 FUD。两年后（2026 年中）回看，EigenLayer 的 AVS 生态确实存活并发展，但 Lumoz 的 zkProver/zkVerifier 是否实际落地并产生收入，仍需通过主网数据交叉验证。
