---
type: source
source_type: article
url: https://cn.investing.com/analysis/article-200487844
author: Kairos Research（翻译：金色财经 xiaozou）
date: 2024-09-02
ingested: 2026-07-02
---

# EigenDA 如何通过低成本高吞吐 DA 服务重塑 Rollup 经济学

## 阅读证据
- 总行数: 20（原始 raw 文件仅含金色财经 UI 框架，无正文内容；通过 WebFetch 获取完整文章，正文约 200 行）
- Q1 (前25%): EigenDA 是目前最大的再质押资本 AVS，从 245 个运营者和 12.7 万个唯一地址质押钱包中获得超过 364 万再质押 ETH 和 7000 万再质押 EIGEN，合计约 91 亿美元的再质押资本
- Q3 (中后25%): Celestia 尽管有 20 个 rollup 集成且 FDV 约 55 亿美元，自推出以来仅产生约 4,091 TIA 的费用（按当时价格约 2.1-3.5 万美元）；Eclipse（SVM rollup）占 Celestia blob 全部份额的 86%
- Q4 (最后25%): 要达到 EigenDA 团队设定的 16 万美元月收入目标，按 Tier 1 定价（年费 70 ETH，ETH≈$2,500），需要 11 个付费 rollup；但自 EIP-4844 上线以来，仅约 6 个 rollup 的 L1 费用超过 70 ETH
- 图片: 0 analyzed / 0 decorative skipped / 0 external URLs unavailable

## 核心要点
- EigenDA 基于"数据可用性不需要独立共识"原则设计为线性扩展架构，由 Operators（存储 blob 不承担共识责任）、Disperser（纠删编码+KZG 承诺分发）、Retrievers（请求并重建 blob）三组件构成
- EigenDA 公布分层定价：按需选项 0.015 ETH/GB 可变吞吐量；Tier 1 为 256 KiB/s，年费 70 ETH。使用按需定价可将 L2 的 DA 直接成本平均降低约 98.91%
- Celestia 作为 EigenDA 主要竞争对手，虽然降低了 rollup 运营成本，但在费用累积方面实际牵引力很小——自推出以来仅产生约 4,091 TIA（约 2.1-3.5 万美元），与其 55 亿美元 FDV 形成巨大反差
- EigenDA 的成本大幅降低对 L2 和用户有利，但给再质押者带来收益平衡挑战——DA 费用的剧烈压缩意味着 EigenDA 作为 AVS 向再质押者分配的价值可能有限
- 文章以贝萨麦炼钢法（降低钢铁成本 82%）类比 DA 成本降低将刺激创新，认为成本下降将催生高吞吐量 rollup（如 MegaETH），通过 RaaS 提供商（AltLayer、Conduit）大规模部署
- EigenDA 能否达到 16 万美元月收入目标存疑：短期内需要更多付费 rollup，"还需要一些证明工作"

## 关键数据
- EigenDA 再质押资本：364 万 ETH + 7000 万 EIGEN，合计约 91 亿美元，来自 245 个运营者和 12.7 万个唯一地址
- EigenDA 按需定价：0.015 ETH/GB；Tier 1 定价：256 KiB/s，年费 70 ETH
- 使用 EigenDA 按需定价可平均降低 L2 直接成本约 98.91%
- Dencun 升级后：240 万个 blobs（总数据 294 GB）向 L1 付费超过 1700 ETH；每个区块限制 6 个 blob（750 KB），该限制每天被多次触碰
- Celestia 自推出以来：20 个 rollup 集成，发布总数据 54.94 GB，产生 4,091 TIA 费用（约 2.1-3.5 万美元）
- Eclipse（SVM rollup）占 Celestia blob 全部份额的 86%
- 月收入目标：16 万美元，需 11 个付费 rollup（年费 70 ETH，ETH≈$2,500）
- 自 EIP-4844 上线以来，仅约 6 个 rollup 的 L1 费用超过 70 ETH

## 与已有知识的关系
- 补充 [[eigenlayer]] — 提供 EigenDA 作为旗舰 AVS 的定价策略、收入模型和市场竞争力的定量分析，此前 EigenLayer 页面仅概览性地提及 EigenDA
- 补充 [[data-availability]] — 提供 2024 年 9 月 DA 竞争格局的核心数据：EigenDA 成本降低 98.91% 的精确数字、Celestia 实际收入仅数万美元的实证、EigenDA 收入目标与现实的差距分析
- 补充 [[celestia]] — 揭示 Celestia 在 DA 费用收入上几乎为零的困境（$21K-$35K 总收入 vs $55B FDV），以及 Eclipse 占其 blob 份额 86% 的集中度风险
- 与 [[来源_2024_DA赛道_Celestia_vs_EigenDA_火币研究院]] 互补 — 火币研究院（2024 年 2 月）聚焦技术架构对比，本文（2024 年 9 月）聚焦经济学和收入模型，两篇共同构成 DA 赛道的完整拼图

## 值得记住的引用
> "EigenDA 基于一个简单原则：数据可用性不需要独立共识来求解，因此被设计为线性扩展——运营者的主要角色是处理数据存储，而不承担共识责任。"

> "使用 EigenDA 的按需定价，可以平均降低约 98.91% 的直接成本。这让 L2 获得更多利润和收入，但并未让那些希望 EigenDA 成为最高再质押奖励 AVS 的再质押者们保持信心。"

> "文章以贝萨麦炼钢法做类比——该发明将钢铁生产成本降低 82%，使更坚固、高质量的钢铁大规模生产成为可能。类似原则适用于 DA 服务：多 DA 服务提供商的引入不仅大大降低成本，还刺激创新。"

> "Celestia 在费用累积方面的实际牵引力却很小——自去年万圣节推出以来，20 个 rollup 集成了其 DA 服务，发布了总计 54.94 GB 的 blobspace 数据，支持协议收集了 4,091 TIA，按当前价格约 2.1 万美元。"

## 我的笔记
文章的核心矛盾在于：EigenDA 将 rollup 的 DA 成本降低了 ~99%，这确实为 L2 生态创造了巨大价值，但它自身能捕获多少价值？如果 DA 服务像文章论证的那样不可避免地走向商品化和低价竞争，那么 EigenDA 作为 EigenLayer 的旗舰 AVS，其向再质押者分配收益的能力将受到根本性限制。这不是执行问题，而是 DA 赛道本身的经济结构问题——和火币研究院"DA 不需要太多家"的判断以及 ChainCatcher"产能过剩基建"的批评一脉相承。

Celestia 的数据令人震惊：55 亿美元 FDV，实际产生的手续费只有几万美元。这不仅是 Celestia 的问题，而是整个 DA 赛道估值逻辑的问题——"基础设施叙事溢价" vs "实际现金流"之间存在巨大鸿沟。如果 EigenDA 最终也落入同样的局面（高 FDV、低收入），EigenLayer 的再质押飞轮将受到严重质疑。
