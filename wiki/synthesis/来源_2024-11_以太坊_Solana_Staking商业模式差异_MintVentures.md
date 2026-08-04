---
type: source
source_type: article
url: https://research.mintventures.fund/2024/11/19/zh-differences-in-the-staking-business-models-of-eth-and-sol-starting-with-lido-and-solayer/
author: Lawrence Lee, Mint Ventures
date: 2024-11-19
ingested: 2026-06-30
tags: [staking, restaking, ethereum, solana, lido, eigenlayer, solayer, defi]
---

# 以太坊和Solana的Staking商业模式差异：从Lido和Solayer谈起

## 阅读证据
- 总行数: 312
- Q1 (前25%): Solayer获得Polychain领投1200万美元和Binance Labs两轮融资，TVL超过Orca在Solana链上排名第十二。Lido协议收入由共识层收益（PoS增发）和执行层收益（优先费+MEV）两部分构成，市占率接近9成。
- Q3 (中后25%): ETH质押数量已接近30%，质押收益率从22年底的6%（经常达10%短时APR）降至3%。Solana swQoS机制在2024年4月客户端升级后正式生效，交易成功率迅速提高。Solayer定义自身为内源性AVS（Endogenous AVS）——交易通过性租赁平台，区别于Eigenlayer的外源性AVS（协议安全租赁平台）。
- Q4 (最后25%): SOL市值只有ETH的1/4，但staked SOL市值已达staked ETH市值的60%。Solana的REV（真实经济价值）在坎昆升级后已成功超过以太坊。Solana PoS底层收益年化6.5%（vs ETH 2.8%），交易排序收益约1.5%（vs ETH 0.5%）。结论：Solana的staking和restaking是比以太坊上更好的业务。
- 图片: 13张外部URL图片（BlockBeats CDN），均未下载到本地。关键图表包括：Lido APR走势、Eigenlayer AVS列表、Etherfi TVL分布、swQoS前后TPS对比、Solayer vs Eigenlayer对比、ETH vs SOL增发奖励对比、ETH vs SOL REV对比。

## 核心要点
- **质押生态三种收益来源框架**：1) PoS底层收益（网络增发，占80%+收入）；2) 交易排序收益（优先费+MEV，随链上活跃度波动）；3) 质押资产出租收益（restaking/AVS，目前最小但增长潜力大）。三类协议分别覆盖不同收益组合。
- **以太坊质押生态的三层结构**：LST协议（Lido/Rocket Pool）只能获取收益1+2；Restaking协议（Eigenlayer/Symbiotic）只能获取收益3；LRT协议（Etherfi/Puffer）理论上可获取全部三种收益，实质是"聚合了restaking收益的LST"。
- **Etherfi的市场空间是被以太坊基金会的"不信任"创造出来的**：Lido被Vitalik和以太坊基金会持续施压（质押中心化问题），被迫放弃restaking业务，转而投资Symbiotic并成立Lido联盟；Eigenlayer受Justin Drake和Dankrad Feist作为顾问的约束，native restaking流程故意做得复杂以"与以太坊对齐"。这给Etherfi留下了空白地带。
- **Solana swQoS是Solayer内源性AVS的核心支撑**：swQoS（stake-weighted Quality of Service）机制让区块生产者依据质押金额确定交易优先级，质押x%可提交x%交易。Solayer基于此构建"交易通过性租赁平台"，目标客户是对交易可靠性有需求的DEX等Solana内部协议，而非Eigenlayer服务的外部协议（预言机/桥/DA）。
- **Solana质押协议比以太坊有事实上更大的市场**：尽管SOL市值仅为ETH的1/4，但Solana的PoS增发奖励（6.5% vs 2.8%）和交易排序收益（1.5% vs 0.5%）均持续高于以太坊，且差距仍在扩大。Solana的REV已于2024年超过以太坊。
- **监管/治理约束 vs 商业自由**：以太坊的去中心化意识形态（Vitalik 2023年《Don't overload Ethereum's consensus》）严重约束了Lido和Eigenlayer的商业扩张；而Solana的"性能优先"实用主义允许任何LST协议做restaking、任何restaking协议发LST，商业边界由市场竞争而非基金会意识形态划定。

## 关键数据
- Solana PoS底层收益年化6.5%，以太坊2.8%（2024年11月），差距持续扩大
- Solana交易排序收益约1.5%，以太坊约0.5%（EIP-4844后显著下降）
- ETH质押率接近30%（仍大幅低于其他PoS链，但以太坊基金会讨论过设置25%上限）
- ETH质押收益率从2022年底的6%降至2024年11月的约3%
- Etherfi高峰TVL超60亿美元，FDV最高80亿美元（超过LDO和EIGEN历史最高FDV）
- staked SOL市值约为staked ETH市值的60%（尽管SOL市值仅为ETH的1/4）
- Solana REV在坎昆升级后呈上升趋势，近期已超过以太坊
- Lido市占率接近9成（以太坊LST市场），长期占以太坊质押比例约三成，持续受以太坊基金会制约
- Solayer获得Polychain领投1200万美元 + Binance Labs融资

## 与已有知识的关系
- 补充 [[lido]] — Lido 2024年5月由Hasu正式确认放弃restaking、投资Symbiotic、成立Lido联盟的战略决策，以及以太坊基金会对Lido质押中心化的持续制约
- 补充 [[eigenlayer]] — Justin Drake和Dankrad Feist被聘为顾问以确保"与以太坊对齐"，这是Eigenlayer native restaking流程故意复杂的根本原因
- 补充 [[solayer]] — 内源性AVS的swQoS技术基础、Polychain $12M领投细节、与Eigenlayer的技术架构分歧原文引用
- 补充 [[ether-fi]] — 高峰TVL $60亿/FDV $80亿的具体数据，以及其市场空间源于Lido和Eigenlayer被约束的"空白地带"
- 关联 [[liquid-staking]] — 三种收益来源的完整框架，以太坊vs Solana质押协议市场规模对比
- 关联 [[restaking]] — swQoS机制作为Solana restaking的核心支撑，外源性AVS vs 内源性AVS的完整对比
- 关联 [[solana]] — swQoS机制的细节和影响，Solana性能优先实用主义在商业自由度上的体现
- 关联 [[jito]] — Jito作为Solana LST代表，其协议APY构成（MEV收益+基础质押收益）

## 值得记住的引用
> "我们从根本上不同意 EigenLayer 的技术架构。因此从某种意义上说，我们重新构建了 Solana 生态系统中的 restaking。复用 Stake 作为保护 APP 网络带宽的一种方式。我们的目标是成为 swQoS 事实上的基础设施，并最终成为 Solana 区块链/共识的核心原语。" —— Solayer官方文档

> "Reaffirm that stETH should stay an LST, not become an LRT. Support Ethereum-aligned validator services, starting with preconfirmations, without exposing stakers to additional risk. Make stETH the #1 collateral in the restaking market, allowing stakers to opt into additional points on the risk and reward spectrum." —— Hasu, Lido在restaking事项的立场（2024年5月）

> "从某种意义上，Etherfi的市场空间是被以太坊基金会对Lido和Eigenlayer的'不信任'所带来的。"

> "Solana的staking和restaking是比Ethereum上更好的业务。"

## 我的笔记
这篇文章是罕见的从商业分析角度（而非技术/意识形态角度）系统比较两条链质押生态的文章。核心洞察是：以太坊的去中心化意识形态正在成为其质押协议商业扩张的结构性障碍——Vitalik不希望共识超载、基金会不信任Lido太大、顾问约束Eigenlayer，结果是人为制造了商业空白给Etherfi等LRT协议。反观Solana，没有这些意识形态包袱，商业逻辑纯粹得多，加上更高的链上活跃度带来更高的真实收益，使得Solana质押赛道的基本面确实优于以太坊。但需要注意：文章发表于2024年11月，当时Solana meme热潮正盛，REV超过以太坊是否具有可持续性仍需观察。另外，以太坊的"约束"虽然限制了短期商业天花板，但可能换来更强的长期去中心化和抗监管能力——这是一个短期商业效率vs长期系统韧性的经典权衡。
