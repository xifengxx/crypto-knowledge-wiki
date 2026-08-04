---
type: source
source_type: article
url: https://substack.chainfeeds.xyz/p/eigenlayer-avs
author: Zhixiong Pan (ChainFeeds)
date: 2024
ingested: 2026-06-29
tags: [eigenlayer, avs, restaking, zk-coprocessor, oracle, depin]
---

## 阅读证据
- 总行数: 81
- Q1 (前25%): EigenLayer+EigenDA上线主网。首批6个AVS：AltLayer(RaaS)/Brevis(ZK协处理器)/eoracle(预言机)/Lagrange(ZK协处理器)/Witness Chain(DePIN)/Xterio(游戏L2)
- Q3 (中后25%): Brevis coChain=PoS链+ETH质押安全+乐观+ZK组合机制。Lagrange强调并行+水平扩展/Renzo+Swell+Puffer各委托$5亿
- Q4 (最后25%): 商业模式=终端用户付费→AVS→节点→Restaking用户。EigenLayer略过智能合约直接接管节点生态→系统性风险。与Lido利益冲突
- 图片: 4张已分析 / 0张装饰跳过

# EigenLayer 第一批 AVS 真实用例分析

## 核心要点
1. **AVS = Actively Validated Services**（主动验证服务）= EigenLayer 生态的"中间件"层。上游是 Restaking 节点(ETH)，下游是终端产品(DeFi/游戏/钱包)
2. **首批6个AVS**：AltLayer(RaaS: VITAL状态验证+MACH快速终局性+SQUAD去中心化定序器)、Brevis(ZK协处理器: coChain乐观+ZK混合)、eoracle(ETH原生预言机)、Lagrange(并行ZK协处理器)、Witness Chain(DePIN瞭望塔协调层)、Xterio(基于EigenDA+OP Stack的游戏L2)
3. **商业模式清晰**：终端用户付费→产品付费给AVS→AVS分配给节点/EigenLayer/Restaking用户。多数AVS采用双代币模式(ETH保安全+原生代币激励)
4. **关键数据**：Lagrange获Renzo+Swell+Puffer各委托$5亿(共$15亿)。eoracle明确双代币模式。AltLayer已为Xterio和Optimism提供MACH服务
5. **系统性风险**：EigenLayer略过智能合约直接接管ETH节点生态→与Lido利益冲突→需要时间补齐罚没(Slashing)等缺失模块

## 关键数据
- 首批AVS: 6个，覆盖RaaS/预言机/ZK协处理器/DePIN/游戏5个赛道
- Lagrange: Renzo+Swell+Puffer各委托$5亿Restaked ETH(共$15亿)
- 双代币模式：ETH保证安全+原生代币激励节点参与
- AltLayer: 为Xterio和Optimism提供MACH快速终局性服务

## 与已有知识的关系
- 大幅补充 [[restaking]] — AVS需求端详解(供给端LRT已在之前覆盖)
- 补充 [[eigenlayer]] 实体页 — 首批AVS列表+商业模式+系统性风险
- 与 [[lagrange]] / [[altlayer]] / [[eoracle]] 关联 — 新识别的AVS实体(待创建)

## 值得记住的引用
> "AVS才是EigenLayer协议能否真的具有实用性和安全性的最终体现。此前的Restaking协议只是生态的起步和吸引流动性的手段之一。"
> "EigenLayer略过了智能合约，直接接管了以太坊的节点生态——这个情况和之前所有其他基于以太坊的协议都不相同。"

## 我的笔记
这篇2024年的文章在EigenLayer主网上线时对AVS做了最清晰的分类介绍。核心判断完全应验：AVS才是Restaking价值释放的关键，LRT只是供给端的第一步。ZK协处理器(Brevis/Lagrange)是个当时较新的概念——两个项目同时被首批支持说明EigenLayer看好这个方向。商业模式上，双代币制(ETH保安全+原生代币激励)成为事实标准。系统性风险方面，与Lido的利益冲突至今未完全解决——Lido占据ETH质押的~30%，EigenLayer能否绕过Lido的节点网络仍是个问号。到2026年，AVS生态已大幅扩展但实际需求(付费用户)增长慢于供给(LRT)，这是Restaking赛道最大的待验证假设。
