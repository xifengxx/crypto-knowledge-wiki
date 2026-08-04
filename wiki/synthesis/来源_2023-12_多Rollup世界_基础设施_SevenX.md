---
type: source
source_type: article
url: https://www.theblockbeats.info/news/48983?from=telegram
author: Grace，SevenX Ventures
date: 2023-12-20
ingested: 2026-07-01
---

# SevenX Ventures：多Rollup世界需要哪些前沿的基础设施？

## 阅读证据
- 总行数: 401
- Q1 (前25%): Plasma 和 Sidechains 曾被视为以太坊扩容的救世主，但它们的衰落源于「数据可用性」等问题破坏了信任，最终损失了用户——这解释了为什么安全层必须放在首位讨论。
- Q3 (中后25%): 运用 DCF 分析评估为应用推出 Rollup 的可行性，公式为 DCF(收入 - 费用) > 初始投资。收入来自用户费+MEV，费用包括 L2 运营费（排序/执行/证明）+ L1 数据发布费 + L1 结算费。
- Q4 (最后25%): EigenLayer 将安全的价值商品化，为许多原语提供了支撑这种价值的能力。Ion Protocol 正在构建价格不可知的借贷平台，使用 ZK 基础设施（零知识状态证明系统 + ZKML）来支持再质押资产，避免低级别惩罚风险。
- 图片: 文章包含多张架构图/信息图，已由 BlockBeats 中文版重新编译调整（原版英文图表不可直接访问），外部图片URL不可用，跳过计数

## 核心要点
- 多 Rollup 世界的四大基础设施支柱：安全基础（信任假设与风险）、可定制性与互操作性的平衡、成本分析、共享安全性。
- Layer 2 交易生命周期的每个阶段（RPC 提交→排序器排序→DA 层发布→最终结算）都存在不同的信任假设和安全风险。排序器的抗审查性和有效性是关键问题，解决方案从单一排序器到基于 Rollup（按 L1 排序）依次增强。
- 模块化带来碎片化问题，但结算中心数量有限（以太坊、Arbitrum、zkSync、StarkNet、Polygon 2.0），有效简化了拓扑结构。Hyperlane（模块化安全层）和 Catalyst（无需许可跨链流动性）解决了可扩展的互操作性问题。
- 缩短最终结算时间的三种路径：(1) Hybrid Rollup（欺诈证明+ZK，仅在挑战时生成证明）；(2) 共享排序层+经济机制（Espresso、Umbra Research）；(3) ZK Rollup 即时验证（Sovereign Labs、Polygon 2.0 的证明聚合，zkSync 的超块链分层聚合）。
- 降低 Rollup 成本的两大策略：与其他 Rollup 聚合分摊费用（共享 DA 发布、证明聚合）和委托外部服务商（RAAS、证明者市场）。NEBRA UPA 可通用聚合异构证明，分摊验证成本。
- 共享安全解决方案对比：EigenLayer（ETH 再质押，三种信任：经济/去中心化/以太坊包含）、Babylon（BTC 质押，无需跨链）、Cosmos ICS（Hub 出借安全性）、Mesh Security（双向安全流动）。

## 关键数据
- 以太坊 protodanksharding 推出后数据发布成本预计降低 90%，但即使吞吐量提升 10 倍，对 Rollup 而言可能仍杯水车薪。
- zk Rollup 在以太坊上验证单个证明需花费 30 万到 500 万 gas；Optimism 在 Bedrock 之后每天仅向以太坊支付约 5 美元结算费。
- Optimistic Rollup 挑战期为 7 天，zk Rollup 通常每隔数小时才向 L1 发布一次证明（如 StarkEx）；Axelar/Squid 的 GMP Express 可将低于 20000 美元的跨链交易缩短至 5-30 秒。
- EigenLayer 支持的三类信任：经济信任（可链上验证的客观惩罚条件）、去中心化信任（独立运营者网络，增加勾结难度）、以太坊包含信任（ETH 验证者运行 sidecar 执行额外计算）。

## 与已有知识的关系
- 补充 [[layer2]] — 多 Rollup 世界的系统性基础设施分析框架（四支柱），详细拆解 L2 交易生命周期各阶段的信任假设与安全风险，以及 Hybrid Rollup / 共享排序 / ZK 聚合三种缩短终局时间的路径。
- 补充 [[data-availability]] — 对比 Celestia（DAS+欺诈证明）、Avail（DAS+KZG）、EigenDA（托管证明+惩罚机制）在安全性和性能上的权衡，以及数据可用性证明桥接的不同方案（Celestia blobstream optimistic 验证 vs Avail optimistic 验证 vs Succinct ZK 桥接）。
- 补充 [[restaking]] — 详细阐述 EigenLayer 的三类信任模型（经济/去中心化/以太坊包含），以及 Babylon（BTC 原生质押）、Cosmos ICS、Mesh Security 的差异化共享安全方案；提及否决委员会的风险缓解机制和 Ion Protocol 的再质押资产 DeFi 化。
- 补充 [[cross-chain]] — 模块化世界中的互操作性新问题（验证三/四个不同组件而非单一共识）、结算中心概念、Hyperlane/Catalyst 的无许可互操作方案、意图为中心的桥接基础设施（UniswapX、SUAVE、Essential）。
- 补充 [[intents]] — 意图为中心架构在跨域桥接中的应用，UniswapX 的结算预言机挑战（速度 vs 信任的循环），求解器中心化风险对意图全部潜力的限制。
- 与已有实体 [[eigenlayer]] 紧密关联 — 本文提供了 EigenLayer 三类信任的精确区分和在 Rollup 安全/互操作/成本三大领域的应用全景。
- 与已有实体 [[babylon]] 紧密关联 — BTC 原生质押的独特机制（无需跨链、利用 BTC 脚本优化和高级加密），测试网时间戳服务为 Cosmos 链 DeFi 活动提供安全保障。

## 值得记住的引用
> 「模块化，而非最大化。如果 Rollup 不能安全高效地进行互操作，那么模块化就不是最大化，而是碎片化。」——点出了模块化区块链世界的核心矛盾。
>
> 「安全性提高不代表性能提高。通常情况下，安全措施的增加需要权衡可扩展性。Rollup 提供了灵活性，可以根据个人偏好选择不同级别的安全假设。这种适应性是模块化世界的一个显著特点。」——明确表达了模块化范式中安全与性能的取舍自由。
>
> 「随着 Rollup 的数量与日俱增（意味着你可以与更多合作方分摊费用），同时有越来越多 Rollup 服务提供商提供更精细的服务，我们创建 Rollup 所需的费用有望减少。」——从经济分工角度论证了多 Rollup 世界的正向飞轮效应。

## 我的笔记
这篇文章是 SevenX Ventures 对多 Rollup 世界基础设施的系统性 mapping，四支柱框架（安全/互操作/成本/共享安全）覆盖全面且逻辑清晰。最大的价值在于将 Rollup 交易生命周期的每个阶段拆解出信任假设、安全风险和现有解决方案，提供了可操作的分析框架而非泛泛而谈。

一个值得警惕的隐含结论：当前大多数解决方案（如共享排序器、经济惩罚机制、第三方桥接）都存在不同程度的时间延迟和信任折中，真正信任最小化的终极方案（Enshrined Rollup）仍在以太坊长期路线图中。这意味着在未来相当长的过渡期内，用户和开发者需要在安全、速度和成本之间做动态权衡——这本身就是一种隐藏的复杂性和风险。
