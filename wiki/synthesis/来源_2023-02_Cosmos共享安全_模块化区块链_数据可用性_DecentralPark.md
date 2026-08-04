---
type: source
source_type: article
url: https://decentralparkcapital.substack.com/p/in-the-weeds-4
date: 2023-02-01
ingested: 2026-07-02
---

# Cosmos共享安全、模块化区块链与数据可用性采样——Decentral Park"在杂草中"第4期

## 阅读证据
- 总行数: 141
- Q1 (前25%): ICS 允许消费者链接入 Cosmos Hub 的 $2.74B 质押 ATOM 安全性；ICS 不是完全无许可的——消费者链必须通过治理提案审批，评估其经济可行性和与 Cosmos Hub 愿景的一致性
- Q3 (中后25%): 模块化方法将执行、共识、数据可用性三个核心功能分离为专业化模块，理论上可带来 100x 到 10,000x 的效率提升，是实现区块链全球普及所必需的可扩展性水平
- Q4 (最后25%): 以太坊质押市值 $27.7B，是第二安全区块链网络的 2.8 倍以上——模块化叙事可能强化以太坊作为安全层的中心地位，竞争将集中在执行层和数据可用性层
- 图片: 0 已分析 / 3 装饰性图片跳过 / 3 外部 URL 不可用（ICS 架构图、Fuel 模块化区块链架构图、Celestia DAS 采样示意图——均为关键信息图表但因本地路径编码问题无法加载）

## 核心要点
- **ICS（Interchain Security）是 Cosmos 共享安全模型**：由 Informal Systems 开发，允许应用链（消费者链）借用 Cosmos Hub 的验证者集合和 $2.74B ATOM 安全性，大幅降低启动主权链的门槛。消费者链保留大部分 Gas 费，仅向 Hub 支付安全服务费，且未来可选择脱离 Hub 成为完全主权链
- **ICS 解决了 Cosmos 生态的核心瓶颈**：此前每个应用链必须自建验证者集合并发行有价值质押代币，这导致资源在"激励验证者"和"建设社区"之间分裂，且代币经济学常偏向高通胀质押而缺乏价值捕获。ICS 将这一负担外包给 Hub，让新链专注用例和社区建设
- **模块化区块链将单体链的三项功能（执行、共识、DA）分离为独立专业化层**：这打破了"区块链不可能三角"——单体链受资源约束只能优化其中两项。模块化意味着各层可以独立优化，带来 100x-10,000x 可扩展性提升
- **2023 年是模块化叙事从理论走向实践的关键年**：Celestia（激励测试网即将上线）、Laconic Network、Polygon Avail 和 EigenDA 等协议预计在 2023 年推出或获得重大进展
- **数据可用性采样（DAS）是模块化 DA 层的核心技术**：轻节点通过多轮随机采样区块数据的子部分，直到达到预设置信度阈值，从而无需下载全部数据即可验证数据可用性——这是解决区块链扩容时数据量爆炸问题的关键创新
- **模块化可能导致"以太坊中心化"的未来**：以太坊作为最安全的结算层（$27.7B 质押市值，远超第二名），可能成为模块化堆栈中结算/Settlement 层的事实标准，竞争将集中在执行层和 DA 层——甚至可能出现机构级 KYC 兼容执行层等垂直专业化

## 关键数据
- Cosmos Hub 质押 ATOM 总值：**$2.74B**（2023年2月），ICS 允许消费者链复用该安全性
- 以太坊质押市值：**$27.7B**，是第二名区块链的 **2.8 倍**，在模块化世界中优势可能进一步放大
- 模块化可扩展性提升：**100x 到 10,000x** 效率提升，是实现区块链全球普及的前提
- ICS 激励测试网：**2022 年 11 月**完成，首批获批消费者链包括 Neutron、Stride、Duality
- ATOM 质押收益率来源：stakingrewards.com，ETH 质押市值来源：stakingrewards.com
- 文章预测 ICS 将在未来 **12-18 个月**（即 2023-2024 年中）成为 Cosmos 应用链开发的重要催化剂

## 与已有知识的关系
- 补充 [[data-availability]] — 深入解释了 DAS（数据可用性采样）的工作机制：轻节点通过多轮随机采样达到预设置信度阈值，以及 DAS 如何从根本上改变 DA 的成本结构（低硬件要求 + 可自主增大区块 = 更低费用）
- 补充 [[celestia]] — 2023年初 Celestia 的状态：激励测试网即将在"未来几个月"上线，是模块化 DA 叙事中最受期待的项目
- 补充 [[eigenlayer]] — 将 EigenDA 定位为模块化 DA 赛道四大竞争者之一（Celestia、Laconic、Avail、EigenDA），并指出 EigenDA 的差异化在于借用以太坊安全
- 与已有概念 **模块化区块链**（待创建）直接相关 — 本文是 2023 年初模块化叙事的关键阐述，解释了"为什么单体链必须模块化"的经济和技术逻辑
- 与 [[来源_2023-03_Cosmos_天才在左疯子在右_网络结构与价值分析]] 互补 — 后者讨论了 ICS 作为 Cosmos 2.0 失败后的替代方案，本文则详细阐述了 ICS 的技术机制和价值主张

## 值得记住的引用
> "ICS is a highly effective solution to offset the costs associated with being a sovereign blockchain, enabling new application-specific chains to focus their resources on building use cases and strong community engagement."（ICS 是抵消主权区块链相关成本的高效解决方案，使新应用链能将资源集中在构建用例和强大社区参与上）

> "The modular blockchain thesis can therefore be thought of as a catalyst for an Ethereum-centric future, in which competition is fought at the execution and data availability layer."（模块化区块链叙事可被视为"以太坊中心化未来"的催化剂，在这个未来中竞争将在执行层和数据可用性层展开）

> "The combination of ICS, interoperability solutions, and Cosmos-based data availability solutions launching and enhancing over the coming 12-18 months will act as a material catalyst for Cosmos user and value accrual."（ICS、互操作性解决方案和基于 Cosmos 的数据可用性解决方案在未来 12-18 个月的推出和增强，将成为 Cosmos 用户和价值增长的重要催化剂）

## 我的笔记
- 这篇文章写于 2023 年 2 月，站在 2026 年回看，ICS 的实际效果需要检验：Cosmos Hub 的 ICS 消费者链数量增长是否符合 2023 年初的乐观预期？首批消费者链 Neutron 和 Stride 确实活下来了（Neutron 成为 Cosmos 生态重要 DeFi 链，Stride 成为领先的流动性质押协议），但 ICS 是否真的引发了"应用链开发爆发"值得怀疑
- 模块化叙事在 2023-2024 年确实大爆发——Celestia 2023 年 10 月主网上线、EigenLayer 主网 2024 年 Q1 上线、Avail 独立分拆——但"以太坊中心化未来"的预测面临挑战：Solana 以高性能单体架构证明了模块化不是唯一路径，且模块化 DA 层的竞争远比文章预期的激烈（NearDA、Celestia、EigenDA、Avail 等多强并立，DA 费用战导致价格趋近于零）
- 文章对 DAS 技术原理的解释值得保留——轻节点随机采样+置信度阈值机制是理解 Celestia 等技术的基础概念，即使 2026 年技术细节已有演进
