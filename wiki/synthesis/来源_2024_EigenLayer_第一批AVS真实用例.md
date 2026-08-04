---
type: source
source_type: article
url: https://substack.chainfeeds.xyz/p/eigenlayer-avs
author: Zhixiong Pan (ChainFeeds)
date: 2024
ingested: 2026-06-29
tags: [eigenlayer, avs, restaking, zk, oracle, depin, altlayer]
---

# EigenLayer第一批AVS：真实用例全景

## 阅读证据
- 总行数: 81
- Q1 (前25%): Restaking生态两大里程碑：EigenLayer主网+EigenDA上线，首批6个AVS：AltLayer/Brevis/eoracle/Lagrange/Witness Chain/Xterio。AVS=EigenLayer实用性和安全性的最终体现。此前LRT只是吸引流动性的手段，AVS才释放需求端
- Q3 (中后25%): Brevis coChain(ZK协处理器/PoS链/ETH质押安全/乐观+ZK机制/欺诈证明+有效性证明/团队来自Celer Network)。eoracle=第一个ETH原生预言机(安全性由质押ETH保证 vs Chainlink由LINK节点保证/双代币模式)。Lagrange=并行ZK协处理器/Renzo+Swell+Puffer各委托$5亿ETH
- Q4 (最后25%): Witness Chain=DePIN协调层(瞭望塔测量带宽+物理位置)。Xterio=基于EigenDA+OP Stack的游戏L2/使用MACH快速终局性AVS。系统性风险：EigenLayer略过智能合约直接接管以太坊节点生态→与Lido利益冲突
- 图片: 0张已分析 / 5张装饰跳过 / 0张外部URL无法获取

## 核心要点
1. **AVS = EigenLayer需求端**：此前Renzo/Puffer等LRT只是供给端(聚集ETH+节点)，AVS才是释放需求的终极形态——终端用户付费→AVS→节点→Restaking用户分配
2. **首批六个AVS全景**：AltLayer(RaaS/三个模块化AVS:VITAL状态验证+MACH快速终局性+SQUAD去中心化定序器)、Brevis(ZK协处理器/coChain)、eoracle(ETH原生预言机)、Lagrange(并行ZK协处理器/$15亿ETH委托)、Witness Chain(DePIN协调层)、Xterio(AI游戏L2)
3. **ZK协处理器=新概念**：Brevis+Lagrange同时入选→通过ZK让EVM智能合约获取更多可验证数据。Lagrange强调并行化+水平扩展。Renzo/Swell/Puffer各委托$5亿至Lagrange
4. **商业模式清晰**：eoracle明确双代币模式(ETH保证安全性+原生代币激励节点)。预言机需求最明确(DeFi/RWA需要链外数据)
5. **系统性风险**：EigenLayer略过智能合约直接接管以太坊节点生态→与任何基于智能合约的协议本质不同。Lido有直接利益冲突

## 关键数据
- 首批AVS：**6个**(AltLayer/Brevis/eoracle/Lagrange/Witness Chain/Xterio)
- Lagrange委托ETH：Renzo+Swell+Puffer各**$5亿**=共$15亿
- eoracle：双代币模式(ETH安全+原生代币激励)
- AltLayer三模块：VITAL(状态验证)/MACH(快速终局性)/SQUAD(去中心化定序器)

## 与已有知识的关系
- 大幅补充 [[eigenlayer]] — AVS首批上线全景/六大AVS详细分析/ZK协处理器概念/商业模式/系统性风险
- 关联 [[altlayer]] — RaaS+三个模块化AVS（待创建）
- 关联 [[lagrange]] — ZK协处理器+$15亿委托（待创建）

## 值得记住的引用
> "AVS才是EigenLayer协议能否真的具有实用性和安全性的最终体现。此前的Restaking协议只是生态的起步和吸引流动性的手段。"
> "EigenLayer略过了智能合约，直接接管了以太坊的节点生态，这个情况和之前所有其他的基于以太坊的协议都不相同。"

## 我的笔记
Zhixiong Pan对EigenLayer首批AVS的解读是理解Restaking需求端的关键文本。核心框架：①区分供给端(LRT/Renzo/Puffer)和需求端(AVS)→只有AVS跑通才意味着Restaking的真实价值被验证；②六个AVS覆盖RaaS/ZK协处理器/预言机/DePIN/游戏→EigenLayer的定位是"去中心化网络的AWS"；③ZK协处理器(Brevis+Lagrange)是全新概念→代表了EigenLayer最有想象力的应用方向。到2026年，EigenLayer主网已运行，AVS生态持续扩充但商业闭环（终端用户付费→AVS分配）仍处于早期阶段。
