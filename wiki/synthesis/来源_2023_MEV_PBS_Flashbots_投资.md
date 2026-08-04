---
type: source
source_type: article
url: https://medium.com/@EbunkerChinese/mev%E6%8F%AD%E7%A7%98-%E6%8F%AD%E5%BC%80%E4%BB%A5%E5%A4%AA%E5%9D%8Amev%E4%BA%A7%E4%B8%9A%E9%93%BE%E5%88%A9%E7%9B%8A%E7%9A%84%E7%A5%9E%E7%A7%98%E9%9D%A2%E7%BA%B1-1d084a9004a1
date: 2023-06
ingested: 2026-07-02
---

# MEV 最大可提取价值：从概念到生态、从技术到投资的全面指南

## 阅读证据
- 总行数: 118
- Q1 (前25%): MEV 最初指矿工可提取价值（Miners extractable value），应用于 PoW 下衡量矿工通过调整交易顺序获取的利润，现泛指最大可提取价值（Maximal extractable value），在 PoS 中同样适用。
- Q3 (中后25%): SUAVE（Single Unified Auction for Value Expression）是 Flashbots 正在开发的独立区块链，可插在任何其他链上充当其 Mempool 和 Builder，实现跨链协作区块构建。
- Q4 (最后25%): 从投资人角度看，MEV Searcher 项目是典型的股权架构，整体类似做市商投资但无 counterparty risk，退出路径可能只有并购和分红。
- 图片: 0 analyzed / 5 decorative skipped（路径为 MEV/Untitled.png 等，图片文件不存在）

## 核心要点
- MEV 从 PoW 时代的"矿工可提取价值"演化为 PoS 时代的"最大可提取价值"，验证者通过调整交易顺序提取超出标准区块奖励和 Gas 费的额外价值。
- MEV 具有双重效应：正面激励经济连贯性和网络去中心化（套利者缩小价差、吸引更多参与者），负面则伤害普通用户，使"科学家"群体从普通用户身上攫取价值。
- PBS（Proposer-Builder Separation）架构通过 Validator/Proposer、Searcher、Block Builder、Relayer 四个角色分离区块提案和构建，是 Ethereum MEV 生态的核心组织框架。
- MEV 的主要表现形式包括：抢先交易/三明治攻击、DEX 无风险套利、CeFi-DeFi 套利、借贷清算交易、跨链套利等五种类型。
- Flashbots 提供完整产品矩阵（Auction、Protect RPC、MEV-Boost、MEV-Explore、SUAVE、Bundle）应对 MEV 负外部性；SUAVE 作为跨链 Mempool 和 Builder 方案，旨在实现全链效率最大化。
- 从投资视角评估 MEV Searcher 项目，核心看四个维度：搜索算法可靠性、即时报价能力、Gas 成本控制能力、跨链扩展能力；技术门槛高，适合技术团队而非 BD 驱动型。

## 关键数据
- PBS 架构中四个角色：Validator/Proposer、Searcher、Block Builder、Relayer，各自承担区块生产供应链的不同环节。
- CeFi-DeFi MEV 被描述为"MEV 的最大产生来源之一"，核心驱动是中心化交易所价格先于链上 DEX 更新。
- MEV Searcher 项目评估四维框架：①搜索算法可靠性 ②即时报价能力 ③Gas 成本控制 ④跨链扩展。
- 文章引用 7 篇参考来源，覆盖中文（EbunkerChinese、TechFlowPost、0xAA_Science）和英文（Galaxy、Maven11、Paradigm）文献。
- SUAVE 被描述为由三个主要部分组成的独立区块链：通用偏好环境、最优执行市场、去中心化区块构建网络。

## 与已有知识的关系
- 补充 [[mev]] — 中文教育视角的 MEV 全面概述，涵盖五种 MEV 表现形式（含 CeFi-DeFi MEV 和跨链 MEV 分类），以及中国投资人视角的 MEV Searcher 项目评估框架（四个核心维度），这些内容在现有概念页中未系统覆盖。
- 补充 [[flashbots]] — 详细介绍了 Flashbots 全部产品线（Auction、Protect RPC、MEV-Boost、MEV-Explore、SUAVE、Bundle），尤其是 SUAVE 三层架构的简要描述。
- 补充 [[suave]] — 对 SUAVE 定位的描述（"可插在任何其他链的插件，充当其他链的 Mempool 和 Builder"）和三层架构（通用偏好环境 / 最优执行市场 / 去中心化区块构建网络）。
- 补充 [[cow-protocol]] — CoW Swap 的批量拍卖和统一清算价格机制作为抗 MEV 策略被提及。

## 值得记住的引用
> "MEV 不仅限于基于工作量证明 (PoW) 的区块链中的矿工，而且还适用于权益证明 (PoS) 网络中的验证者。现在 MEV 一般代指最大可提取价值。"

> "从投资人角度来看，MEV（Searcher）是一个典型的股权架构项目，整体会类似于做市商的投资，但是不存在 counterparty risk，因此整体风险更小。由于此类公司发币可能性较小，退出的路径可能只有并购，分红等。"

> "因整体对团队的技术要求比较高，典型不是BD导向性的行业，可能适合中国人做。"

## 我的笔记
- 文章在中文加密教育社区来看内容全面，从概念到技术架构再到投资视角都有覆盖，但深度有限——每个话题都只点到为止。PBS 部分的角色描述虽然清晰但没有触及 PBS 的激励机制设计和对去中心化的深层影响。
- 投资评估部分最有价值但也最粗糙："适合中国人做"是观察性陈述而非分析结论。缺乏对 MEV 项目实际财务数据的支撑（如典型 ROI、失败率、竞争壁垒的量化分析）。
- 文章来源参考了较高质量的英文资料（Galaxy Research、Paradigm、Maven11），但自身内容原创性有限，更像是一篇编译汇总而非独立研究。
- 跨链 MEV 以 Cosmos 为例（不含跨链桥的场景），反映了写作时间（约 2023 年）跨链桥尚未成为 MEV 主要关注点的背景。
