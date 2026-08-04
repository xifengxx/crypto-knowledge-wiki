---
type: source
source_type: article
url: https://writings.flashbots.net/mev-and-the-limits-of-scaling
date: 2025-06-22
ingested: 2026-07-02
---

# MEV 已成为区块链扩容的主导性经济限制——Flashbots 新论文

## 阅读证据
- 总行数: 268
- Q1 (前25%): 垃圾机器人在多个 OP-Stack Rollup 上消耗超过 50% 的 Gas，但支付的费用不足 10%。Base 在 2024年11月至2025年2月间新增了 11 Mgas/s 的吞吐量，几乎全被垃圾机器人消耗殆尽。
- Q3 (中后25%): Base 上仅两个实体就负责了超过 80% 的垃圾交易，市场高度集中。Base 的垃圾机器人消耗约 56% 的 Gas、26% 的 L1 DA 使用量，但仅贡献 14% 的手续费。
- Q4 (最后25%): 一个两笔交换的 Uniswap V3 套利仅需约 200,000 Gas，但在 Base 上实现同样的经济结果需消耗约 1.3 亿 Gas——650 倍的效率差距。Flashbots 提出通过 TEE（可信执行环境）实现可编程隐私 + 显式竞拍作为解决方案。
- 图片: 0 analyzed / 0 decorative skipped / 11 external URLs unavailable（所有图表均为 writings.flashbots.net 外链，无法本地访问）

## 核心要点
- MEV 驱动的链上搜索已成为高吞吐量区块链扩容的主导性限制，远超技术层面的瓶颈。
- 垃圾机器人通过在每个区块中批量发送失败交易来盲搜套利机会——每笔成功的套利背后约 350 笔失败交易，消耗约 1.32 亿 Gas（相当于近 4 个完整以太坊区块）。
- 根本原因在于市场结构缺陷：私密内存池使搜索者无法看到用户交易流，而可编程交易的灵活性允许他们将条件逻辑编码在链上执行，加上低费用和高吞吐量，共同创造了"垃圾竞拍"（spam auction）这一极度低效的竞争机制。
- 垃圾机器人对链产生的系统性外部成本远高于其支付的费用——在 OP Mainnet 上，垃圾机器人消耗约 57% 的 Gas 但只支付约 9% 的费用，效率差距达 6 倍。
- Base 的有效 Gas 吞吐量（扣除垃圾后的用户可用容量）在 4 个月内几乎恒定在 12 Mgas/s，而总吞吐量从 15 增长到 26 Mgas/s，新增容量全部被垃圾吞噬。
- 解决方案需要两个组件：可编程隐私（通过 TEE 让搜索者离线读取交易流但无法夹击或泄露数据）和显式竞拍（搜索者直接出价购买特定排序权，替代以 Gas 消耗为竞价的垃圾竞拍）。
- 垃圾机器人的需求对用户费用产生持续的上行压力，即使在高吞吐量 L2 上，费用也被人为抬高而无法达到理论上的最低水平。

## 关键数据
- 垃圾机器人在 OP-Stack Rollup 上消耗 >50% 的 Gas 但支付 <10% 的费用（OP Mainnet: 57% Gas vs 9% 费用，6 倍差距）
- Base 每笔成功套利前后约 350 笔失败交易，消耗约 1.32 亿 Gas（约 4 个完整以太坊区块）
- Base 上仅 2 个利润接收地址控制了 >80% 的垃圾交易量
- 650x 效率差距：Uniswap V3 两笔套利 20 万 Gas vs Base 上实现同等结果 1.3 亿 Gas
- Base 2024年11月至2025年2月：总吞吐量从 15 Mgas/s 增至 26 Mgas/s（+11），但有效吞吐量始终在 12 Mgas/s 附近
- Solana 上 MEV 机器人消耗约 40% 的区块空间
- Base 垃圾机器人消耗 56% Gas、26% L1 DA、仅贡献 14% 费用

## 与已有知识的关系
- 补充 [[flashbots]] — 本篇为 Flashbots 官方发布的最新研究论文，提出了其 MEV 研究的全新论题（MEV 是扩容的极限），补充了 Flashbots 对垃圾机器人在 OP-Stack Rollup 上的系统量化数据，以及 TEE + 显式竞拍的新解决方案方向
- 补充 [[mev]] — 提供了 MEV 研究的新维度：量化证明了 MEV 垃圾交易对链吞吐量的吞噬效应，引入"有效 Gas 吞吐量"（effective gas throughput）指标，以及垃圾竞拍（spam auction）的理论框架。与现有 MEV 概念页中 PBS/Timeboost/sr-AMM 等内容形成互补——从链扩容的宏观视角理解 MEV 的经济影响
- 补充 [[base]] — 提供了 Base 链上垃圾 MEV 的独特数据维度——56% Gas 的垃圾消耗、两实体垄断 80% 垃圾交易、有效吞吐量停滞于 12 Mgas/s 等。这是 Base 作为 Coinbase L2 未曾在其他来源中详细讨论的负面视角
- 支持 [[来源_2025-04_MEV_底层市场_关键中立性_Paradigm]] — 该 Paradigm 文章从监管角度分析 MEV，而本 Flashbots 文章从经济效率角度量化 MEV 的负外部性，两者形成互补——Paradigm 论证 MEV 的合法性，Flashbots 提出解决其低效性的方案

## 值得记住的引用
> "Spectacularly wasteful onchain searching is starting to consume most of the capacity of most high throughput blockchains."

> "For every single successful arb, this bot sends ~350 transactions that try but fail to find an arb. On average, this bot consumes approximately 132 million gas per single successful arbitrage — equivalent to nearly 4 full Ethereum blocks."

> "Increasing blockspace capacity leads to more throughput, but their effect on fees is limited because increasingly expressive onchain MEV eats up most of the gains."

## 我的笔记
这篇文章提出的"MEV 是扩容的极限"论题具有重要的战略意义，它将扩容讨论从技术层（TPS/Gas 上限）转移到经济层（市场结构设计）。650x 效率差距的数据令人震惊，但也让人怀疑该数据是否有统计偏差——它只选取了 OP-Stack 系列的链（因 trace_block 端点可用性），Solana 和 Arbitrum/zkSync 的数据来自第三方引用而非直接分析。Flashbots 推广 TEE + 显式竞拍的解决方案有其自身商业动机（Flashbots 正从 MEV-Boost 向 BuilderNet 和更广泛的 MEV 基础设施演进），文中对 TEE 方案可能引入的信任假设和延迟权衡未做深入讨论（仅在脚注中暗示了竞拍的最小区块时间约束）。尽管如此，这篇文章引入的"有效吞吐量"指标和垃圾竞拍理论框架对理解高吞吐量链的 MEV 经济生态具有实质性的分析价值。
