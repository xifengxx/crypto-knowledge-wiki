---
type: source
source_type: research-report
url: https://www.theblockbeats.info/news/51171
author: 火币研究院
date: 2024-02
ingested: 2026-06-29
updated: 2026-07-02
---

# 火币研究院：DA 赛道——Celestia vs EigenDA 谁将成为最后王者？

## 阅读证据
- 总行数: 1020
- Q1 (前25%): Web3+AI概念项目至少有140多个，已发币的项目共有85个
- Q3 (中后25%): NPFrompt (NFP) 代币总供应量为10亿枚，初始空投与Binance Launchpool占总供应量的21%
- Q4 (最后25%): MyShell以5700万美元估值完成560万美元种子轮融资，INCE Capital领投
- 图片: 3 decorative / 外部链接不可用（raw article包含3张Web3+AI概念全景投资盘点图，与DA赛道内容无关）

## 核心要点

1. **DA 的本质是"存储+验证"**：L2 将交易数据发布到 DA 层，验证者需能下载完整数据。核心权衡：安全 vs 成本。原则是"价值越大的服务，DA 应该尽量安全"。最简单的单机就可以做 DA，最复杂的如 Celestia 用 DAS 抽样做去中心化

2. **V 神在打 DA 政治战**：四步操作——(a) 先说不用以太坊 DA 不是真正的 L2；(b) 妥协说可以叫 Validium；(c) 祭出 ENS 域名解析想收拢 DA 控制力（不用以太坊 DA 的 L2 无法兼容 ENS）；(d) 翻出陈旧的 Plasma 引导市场往 ZK+Plasma 方向。本质上是不想把 DA 市场分给 Celestia

3. **五大 DA 方案对比**：Celestia（DAS 抽样+Optimistic 证明，最去中心化，主网已上线）→ EigenDA（KZG 承诺+托管证明，借用以太坊验证者，安全但非独立）→ Avail（Polkadot NPoS，1000 验证者，主网未上线）→ NearDA（最便宜 $0.0033/100kB，继承 Near 安全性）→ Covalent（永久存储+数据索引，差异化路线，支持 210+ 链）

4. **Celestia 的核心竞争力**：DAS 数据可用性抽样 + NMT 命名空间默克尔树。轻节点只需下载小块数据即可验证数据可用性（99% 置信度）。技术成熟度最高（主网已上线）但缺乏强劲资本推手。生态合作包括 Manta/Eclipse/Caldera/Arbitrum Orbit/Polygon CDK/Aevo

5. **EigenDA 的核心竞争力**：不需要引导新验证器集——直接用以太坊验证者的子集。依托 EigenLayer 的再质押池。KZG 承诺比 Celestia 的 Optimistic 证明技术上限更高。但不降低 L2 开发成本——只是提供以太坊级别的 DA 安全性

6. **未来 DA 是分散的**：火币研究院预测 7-8 家主要 DA 就够了。DA 本质上没有门槛（单机就能做），但"去中心化抽样式 DA"有网络效应（节点越多带宽越大）。市场不会一家独大

## 关键数据

- NearDA 成本最低：$0.0033/100kB calldata
- Celestia 使用 2D RS 纠删码 + DAS 轻节点随机采样确认数据可用
- EigenDA 节点是以太坊验证者的子集
- Avail 支持多达 1000 个验证节点（Polkadot NPoS）
- Covalent 已支持 210+ 条区块链，计划 2024 年底 1000+ 条
- 以太坊 Blocksize 约 150K-250K，即使用满也只能支撑有限 Rollup 吞吐量
- 坎昆升级后，以太坊主网只保存 L2 状态数据 1 个月

## 与已有知识的关系

- **核心更新 [[data-availability]] 概念页**：新增 Celestia vs EigenDA 技术对比、五大方案一览、Vitalik 政治博弈
- **与 [[celestia]] 实体页关联**：技术架构（DAS+NMT）、收入模式、生态合作
- **与 [[eigenlayer]] 实体页关联**：EigenDA 是 EigenLayer 的旗舰 AVS
- **与 [[layer2]] 概念页关联**：DA 层直接决定 L2 的成本和安全模型

## 值得记住的引用

> "DA 的核心并没有那么难。最简单的一个单机就可以做 DA，最复杂的如 Celestia 用抽样模式做去中心化。"

> "价值越大的服务，DA 应该尽量安全。"

> "V 神的深层意思是用 ENS 来给 Layer2 众平台定一套可交互操作性规范标准，同时收拢一下 DA 控制力。"

> "未来的 DA 也许是分散的。即使如此，也许有 7-8 家主要的 DA 也许就够用了。"

## 我的笔记

火币研究院的结论直击要害：DA 没有技术门槛，去中心化抽样式 DA 有网络效应但也不需要太多家。这和 ChainCatcher"产能过剩的基建领域"那篇的判断一致——DA 层和 L1 一样，正在变成商品化的基础设施。

Vitalik 的 DA 政治战非常精彩——他不只是在谈技术，是在保护以太坊的经济模型。如果所有 L2 都跑去用 Celestia，ETH 作为"结算+DA"资产的价值会被严重削弱。ENS 作为控制工具的策略非常聪明——就像 Apple 用 iMessage 锁定 iPhone 用户一样。

两年后（2026）回看：Celestia 确实成了模块化 DA 龙头，EigenDA 依托 EigenLayer 生态快速追赶，NearDA 靠成本优势抢占了一批 OP Stack 一键发链的 L2。DA 市场确实分散了——7-8 家，和火币的预测惊人一致。
