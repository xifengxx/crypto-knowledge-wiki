---
type: source
source_type: article
url: https://threesigma.xyz/blog/mastering-amm-order-books-and-intents
date: 2025-02
ingested: 2026-07-02
---

# 掌握 AMM：探索订单簿和意图 — Three Sigma 深度解析 DeFi 交易机制的演进

## 阅读证据
- 总行数: 677
- Q1 (前25%): 无常损失（Impermanent Loss）对 LP 是固有的设计缺陷，通过回报补偿风险；Smilee Finance 将 IL 转化为"Impermanent Gains"让交易者对冲波动率。
- Q3 (中后25%): CoW Swap 使用批量拍卖（batch auction）系统：用户提交意图书面订单 → 分组发送给 solver 网络 → solvers 竞争寻找最优执行路径 → 匹配订单链下结算 → 未匹配订单通过 AMM/DEX 聚合器执行；获胜 solver 获得 COW 代币激励，行为不端将被罚没质押金。
- Q4 (最后25%): 以太坊合并后约 90% 的区块通过 mev-boost 生产，三家实体控制 95.3% 的区块生产份额——beaverbuild.org 44.9%、Titan Builder 39.9%、Vanilla Builders 10.5%，意图的广泛采用可能加速这种集中化风险。
- 图片: 0 analyzed / 0 decorative skipped / ~30 external URLs unavailable（所有图片来自 cdn.sanity.io 外部 CDN，无法访问）

## 核心要点
- **AMM 的核心问题三维度**：对 LP 而言有无常损失（IL）、低资本效率、LVR（Loss-Versus-Rebalancing 导致 LP 年化损失 10-12%）；对用户有三明治攻击/抢跑和糟糕 UX/UI；这些缺陷催生了订单簿和意图两种替代/补充方案。
- **CLOB vs AMM 的根本差异**：CLOB 通过限价订单集中流动性，适合高流动性"肥尾"资产（BTC/ETH），滑点低但需要主动做市；AMM 通过自动化定价曲线擅长"长尾"资产的价格发现，但资本效率低。Uniswap V3 的集中流动性在高级阶段可近似 CLOB 效果。
- **混合 CLOB-AMM 模型（Vertex Protocol 案例）**：离链排序器（5-15ms 延迟，15,000 TPS）+ 链上 CPAMM（xy=k）+ 整合清算所，提供 CEX 级性能的同时保留自托管。AMM 充当故障保护层——排序器宕机时自动降级为 Uniswap 类环境。Three Sigma 对 Vertex 进行了 14 周安全审计。
- **意图架构的范式转换**：用户从手动构造交易（指定执行路径）转变为签名意图（定义期望结果），Solver 网络竞标执行。三类代表协议——CoW Swap（批量拍卖 + COW 匹配消除 MEV）、Aperture Finance（AI 自然语言界面 + Intents DSL + Solver DAO）、Across（三层意图桥：RFQ + 中继器网络 + UMA 乐观预言机结算）。
- **意图架构的风险与挑战**：区块构建集中化（三家实体控制 95.3%）和信任壁垒可能形成垄断性中间商；用户放弃对链上资产的直接控制导致透明度下降；EIP-4337 意图格式也可能被既有信任中间商所绑架。
- **新兴 AMM 设计方向**：am-AMM（拍卖管理权转移波动风险给池管理人，BidDog/Bunni v2）、pm-AMM（Paradigm 提出，针对预测市场结果代币优化，高斯评分动态定价）、sr-AMM（抗三明治，基于时间窗口锁定价格，Ellipsis Labs/Plasma 首次生产实现）。

## 关键数据
- **Ethereum DEX 月交易量**：2025 年 1 月达到 860 亿美元。
- **意图方案 DEX 占比**：前三名（CoW Swap + Uniswap X + 1inch Fusion）2025 年 1 月交易量超 105 亿美元，约占以太坊 DEX 总交易量的 12%。
- **CoW Swap 月交易量**：单月超 35 亿美元（排除路由至聚合器的交易）。
- **Aperture Finance 累计交易量**：约 50 亿美元已结算。
- **Across Protocol 月桥接量**：2024 年 11 月超 20 亿美元。
- **LVR 对 LP 的年化损失**：10-12%。
- **Vertex 性能指标**：平均每秒 15,000 笔交易（TPS），订单撮合延迟 5-15ms，日均现货交易量约 1000 万美元，Arbitrum 上排名前 10 的 DEX。
- **区块生产集中度**：beaverbuild.org 44.9%、Titan Builder 39.9%、Vanilla Builders 10.5%，合计 95.3%。
- **动态 pm-AMM**：到到期日预期损失 50% 初始财富。
- **Vertex 审计**：Three Sigma 进行了 14 周审计，发现预言机操纵风险、流动性池操纵、重入漏洞。
- **Three Sigma 审计时长达 14 周**，覆盖现货/永续市场、交叉保证金系统和风险引擎。

## 与已有知识的关系
- 补充 [[intents]] — 提供 CoW Swap 批量拍卖的完整技术流程（6 步）、Aperture Finance 的 AI + Intents DSL 详细架构以及 Across 的三层意图桥系统，补充了当前 intents 页面中缺少的代表项目实现细节。
- 补充 [[vertex-protocol]] — 详细解释 Vertex 的混合 CLOB-AMM 设计核心组件（CPAMM 风险引擎、离链排序器、撮合延迟 5-15ms）、排序器故障时的降级机制以及 Three Sigma 的 14 周审计发现。
- 补充 [[mev]] — 增加 sr-AMM（抗三明治 AMM）的设计原理：通过时间窗口锁定价格消除套利机会，Plasma 为首个生产实现。
- 新增实体 [[aperture-finance]] — 该文章中 Aperture Finance 获得实质性覆盖（架构图 + 4 段详细描述 + Solver DAO 机制 + 50 亿美元数据），需创建独立实体页。
- 补充 [[sequencer]] — Vertex 的离链排序器设计（独立节点运行、计划去中心化、HFT 友好 API、降级方案）提供了 sequencer 概念的实操案例。

## 值得记住的引用
> "In constant-product AMMs, prices are determined along an infinite curve. However, capital isn't always actively used across all price ranges. For example, it's highly unlikely that Ethereum will trade at 1 USDC within the next week, yet the AMM's formula still allocates capital for such unlikely scenarios."

> "While order books have been around for a long time coming from Traditional Finance (TradFi), they bring new ideas into the AMM space such as hybrid Central Limit Order Book (CLOB) + AMM design of decentralized exchange (DEX). On the other hand, intent is a completely new concept that can fix lots of problems such as poor UX or execution inefficiency."

> "Since the Merge, three entities—beaverbuild.org, Titan Builder, and Vanilla Builders—have been responsible for building most of the blocks, with 44.9%, 39.9%, and 10.5% of the total, respectively. Together, they account for 95.3% of all blocks."

> "While many liquidity providers may be unaware of LVR, this silent threat can decrease their earnings by 10-12% annually."

## 我的笔记
- 这篇文章是 Three Sigma（安全审计公司）的 AMM 系列第二部分，天然带有对其审计客户 Vertex 的推广色彩——14 周审计篇幅明显超出技术介绍需求，更像案例营销。使用来自其客户（Vertex）的数据时需要独立交叉验证。
- "意图代表 12% DEX 交易量"这个数据颇有意思——在 860 亿的以太坊 DEX 市场中，意图方案已经拿下一成以上份额，但其生态仍高度依赖少数 Solver（CoW Swap、1inch Fusion 等），去中心化承诺与实际执行集中化之间存在张力。文章自身也承认了区块构建集中化（95.3%）的风险，但未量化 Solver 市场的集中度。
- sr-AMM 的设计思路相当优雅——利用时间窗口锁定价格直接消除三明治攻击的套利基础，但"槽窗口边界仍可被利用"的缺陷说明这类方案在实践中可能遭遇类似 MEV-Boost 的博弈升级。
- 文章对 AMM 问题的总结（IL、低资本效率、LVR、三明治攻击）全面且准确，但对 CLOB 的缺点着墨不足——CLOB 在低流动性场景下的"无法成交"问题同样是致命缺陷，这恰恰是 AMM 不可替代的价值（LUNA 崩溃时的连续性）。
