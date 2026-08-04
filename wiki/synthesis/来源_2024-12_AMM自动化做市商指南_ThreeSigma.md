---
type: source
source_type: article
url: https://threesigma.xyz/blog/defi-automated-market-maker-guide
date: 2024-12
ingested: 2026-07-02
---

# DeFi 自动化做市商（AMM）全景指南——从实验到优化的全面技术演进

## 阅读证据
- 总行数: 677
- Q1 (前25%): 2017年Bancor发布白皮书首次提出基于债券曲线（bonding curve）的定价机制，但因其公式化定价仅依赖代币储备而非市场均衡，在极端行情中持续高于零价提供流动性导致储备耗尽
- Q3 (中后25%): Ambient Finance采用策略预言机每60分钟监控Uniswap v3费率层级并动态调整自身费率结构，根据其测算，动态费率模型对LP的盈利能力远高于固定30bps或100bps的池子
- Q4 (最后25%): Valantis的HOT（混合订单类型）签名者过去2个月促成约1200万美元交易量，TVL仅41.5万美元，说明该架构仍处于早期阶段
- 图片: 0 analyzed / 0 decorative skipped / 22 external URLs unavailable（均为cdn.sanity.io外部引用）

## 核心要点
- AMM从2016-2018年实验阶段（CFMM基础模型：CPMM/CSMM/CMM）起步，经过2019-2021 DeFi Summer的高速迭代（集中流动性、混合模型、动态AMM、主动做市），进入2022-2024的优化时代，核心议题从"能不能做"转向"如何更高效"
- 关键模型创新包括：Uniswap v3集中流动性（价格tick分级）、Curve混合CFMM（CPMM+CSMM结合的低滑点稳定币交易）、Kyber DMM动态费用（基于SMA/EMA交易量调整费率）、DODO PMM主动做市（模仿传统订单簿做市行为）
- Bancor V3的Omnipool（单池聚合流动性）和瞬时无常损失保护是重要创新，但后者在2022年6月极端波动中因储备不足以覆盖损失被迫下线，暴露了IL保护的可持续性难题
- 2023年后AMM进入优化期：Ambient Finance双流动性模型（集中+全场）+Knockout Liquidity、Maverick AMM v2可编程池和方向性Swap费、PoolShark三种池类型（Range/Limit/Cover）展现了对不同交易场景的精细切分
- 2024年起意图（Intents）范式崛起，Uniswap X/CowSwap/1Inch采用Solver竞拍模式，可能在主流资产订单流上逐步取代传统AMM，而LP可能被迫退守长尾资产
- Uniswap V4的Hooks机制和Singleton合约架构代表了AMM可编程性的重大飞跃，支持在交易生命周期8个回调点插入自定义逻辑，同时单合约管理所有池大幅降低创建和多跳成本

## 关键数据
- 过去30天内Uniswap前端和钱包交易量23亿美元，Uniswap X交易量5.87亿美元，意图范式已占据约20%的Uniswap生态订单流
- Kyber DMM的动态费用模型中，基础费用与波动因子（基于SMA/EMA交易量计算）结合，满足条件：-fee <= 波动因子 < 1 - fee
- Ambient Finance的策略预言机每60分钟更新一次费率结构，动态切换至Uniswap v3中表现最好的费率层级
- Valantis HOT签名者2个月促成约1200万美元交易量，TVL仅41.5万美元，交易量/TVL比约29倍
- Curve V2引入动态锚定模型，参数A（放大系数）决定曲线曲率，值越高曲线越平直、价格变动越小
- 文章覆盖33个AMM协议：从1Inch、Aerodrome到WOO，横跨Ethereum、Solana、Avalanche、BNB Chain、Base等多链生态

## 与已有知识的关系
- 补充 [[automated-market-maker]] — 本文是该概念页的核心知识来源，提供了从2016到2024的完整技术演进史以及33个协议的横向对比
- 补充 [[mev]] — 文章详细解释了LVR（Loss-Versus-Rebalancing）作为AMM特有的MEV表现形式，以及FM-AMM（CoW Swap/Sorella Labs）通过批量拍卖消除LVR的机制
- 补充 [[uniswap]] — 增加Uniswap V4 Hooks（8个回调点/Singleton合约）和Uniswap X（荷兰拍+MEV内化+无Gas交换）的技术细节
- 补充 [[bancor]] — 增加V3 Omnipool架构和2022年6月IL保护被取消的关键历史事件
- 补充 [[curve]] — 增加V2动态锚定模型的双参数机制（peg/price和amplification coefficient A）
- 补充 [[cow-protocol]] — 增加CoW Swap作为FM-AMM代表的Solver竞争机制和批量拍卖设计
- 补充 [[intents]] — 增加意图范式在AMM领域的具体应用（Uniswap X/CowSwap/1Inch）及对LP生态的潜在影响
- [[defi]] 概念页中DEX赛道可补充本文覆盖的33个协议全景

## 值得记住的引用
> "Uniswap V4 brought with itself one of the biggest updates in recent years, introducing hooks as a new method to customize liquidity pools and trading strategies." ——对Uniswap V4 Hooks的评价，代表了AMM向可编程基础设施的范式转变

> "A widely held view is that intents will dominate order flow for major assets like USDC, USDT, ETH, and BTC. Meanwhile, LPs on AMMs could find themselves trading only less desirable, long-tail assets that solvers on intent-based platforms avoid." ——对意图范式与传统AMM未来分工的前瞻性判断

> "How many can be profitable?" ——作者在讨论Uniswap v3集中流动性时对普通LP盈利能力的尖锐质疑，点出AMM复杂度提升与用户可及性之间的根本矛盾

## 我的笔记
本文是Three Sigma撰写的一篇系统性的AMM技术综述，覆盖从2016年Bancor到2024年Uniswap V4和意图范式的完整演进。与一般科普不同，文章对每个模型的数学机制有实质性描述（CPMM的x*y=k、Curve的动态锚定参数、DODO的PMM定价公式、Kyber的SMA/EMA动态费），但缺乏对各个协议实际运营数据（TVL、交易量市占率）的系统性对比，使得技术分析虽深入但商业影响力评估不足。作为一篇2024年末的文章，它对意图范式的讨论具有前瞻性，但未预见到2025年AI Agent与AMM的深度融合趋势。最大的价值在于将33个协议放入统一的技术分类框架（价格发现方式+流动性来源），为后续深入研究提供了结构性地图。
