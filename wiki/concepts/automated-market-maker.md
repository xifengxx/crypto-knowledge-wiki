---
type: concept
created: 2026-07-02
updated: 2026-07-02
tags: [defi, dex, trading, infrastructure]
aliases: [AMM, 自动做市商, 自动化做市商, 恒定函数做市商, CFMM]
---

# 自动化做市商（AMM）

## 一句话定义
基于去中心化流动性池的链上交易协议，通过智能合约和预设数学函数自动定价，无需传统订单簿和对手方匹配，实现用户与池子（Peer-to-Pool）的直接交易。

## 核心模型分类

### 第一代：恒定函数做市商（CFMM）
- **恒定乘积做市商（CPMM）**：公式 x*y=k，双曲线定价，流动性始终可用但滑点随深度递减。代表：Uniswap V1/V2、SushiSwap
- **恒定求和做市商（CSMM）**：公式 x+y=k，直线定价，零滑点但套利脆弱，未广泛独立使用。Trader Joe的Liquidity Book以离散bin结构部分实现CSMM特性
- **恒定均值做市商（CMMM）**：Balancer首创，支持多代币池和自定义权重

### 第二代：混合/动态模型（2019-2021）
- **混合CFMM**：CPMM+CSMM结合，在稳定价格区间接近线性（低滑点），极端价格呈抛物线。代表：Curve StableSwap
- **动态AMM（DAMM）**：根据市场条件实时调整费率/流动性/储备比例。代表：Kyber DMM、Sigmadex
- **主动做市商（PMM）**：整合外部预言机，模仿传统CLOB做市行为，单边流动性提供。代表：DODO
- **复制做市商（RMM）**：在CFMM框架内复制期权等TradFi工具的收益结构，尚未大规模采用
- **集中流动性**：LP可在指定价格区间集中资金，提高资本效率但增加管理复杂度。代表：Uniswap V3

### 第三代：优化时代（2022-2024）
- **Liquidity Book**：离散bin结构，每个bin内恒和定价，跨bin梯度滑点。代表：Trader Joe
- **DLMM（Dynamic Liquidity Market Maker）**：离散Bin结构AMM，每个Bin代表一个价格点。核心创新为支持**单边池**（仅提供一种代币），允许做市商在高价位仅提供出货代币、低价位仅提供吸筹代币。三种流动性分布策略（Spot均匀/Curve钟形/Bid-Ask双向）。代表：[[meteora]]
- **ve(3,3) AMM**：Curve veCRV+Olympus (3,3)的Tokenomic创新，非AMM模型创新。代表：Solidly→Aerodrome/Thena/Velodrome
- **x(3,3) AMM**（2024-2025）：ve(3,3)的再次进化，由Shadow Exchange在Sonic链上首创。主要改进包括：支持随时退出（按退出时间长短收取罚金）、PVP Rebase机制（罚金100%回流到其他质押者形成反稀释）、以及x33流动性质押版本（将治理代币转化为可在二级市场交易的LST代币）。代表：[[shadow-exchange]]
- **Knockout Liquidity**：一种击中价格边界即永久移除的条件流动性，类似限价单。代表：Ambient Finance
- **动态Fee模型**：基于交易量波动率（SMA/EMA）调整费率。代表：Kyber DMM、Meteora、Ambient
- **FM-AMM（函数最大化AMM）**：批量交易+统一清算价，消除LVR和三明治攻击。代表：CoW Swap、Sorella Labs
- **am-AMM（自动化流动性管理者AMM）**：抗审查链上拍卖任命临时池管理者，动态设费+套利对齐市场价
- **Hooks可编程AMM**：在交易生命周期特定节点执行自定义逻辑（8个回调点）。代表：Uniswap V4
- **意图AMM**：Solver竞标执行用户意图，聚合链上链下流动性。代表：Uniswap X、CowSwap、1Inch Fusion

## 核心变量分析框架
根据 [[来源_2024-12_AMM自动化做市商指南_ThreeSigma]] ，可基于两个变量分类所有AMM：
1. **价格发现方式**：链上内部定价（依赖池比）vs 链下外部定价（预言机/Solver）
2. **流动性来源**：内部流动性（仅依赖池内资产）vs 外包流动性（整合外部来源）

## 为什么重要
- AMM是DeFi最核心的基础设施之一，DEX是DeFi第四大赛道（仅次于流动性质押/借贷/跨链桥），且AMM是DEX中协议数量最多的子类
- 从2018年Uniswap V1到2024年Uniswap V4，AMM经历了三代模型演进，是理解DeFi技术创新的最佳窗口
- AMM面临的根本挑战（无常损失、LVR、资本效率、用户体验）至今未完全解决，是持续的研究和投资方向

## 已知挑战
- **无常损失（IL）**：LP因池价偏离外部市价而产生的账面损失。Bancor 研究曾发现超过 50% 的 Uniswap V3 LP 获得的收入无法覆盖无常损失（来源 [[来源_2022-09_DeFi重要词汇_清算_无常损失_价值捕获]]）
- **LVR（Loss-Versus-Rebalancing）**：AMM特有的MEV形式，套利者利用离散区块间的时间差从LP处提取价值
- **资本效率**：传统CPMM大量流动性闲置在非活跃价格区间，Uniswap V3集中流动性缓解了但引入了管理复杂性；Uniswap V2 中 DAI/USDC 稳定币对的资金有效利用率可能低至 0.5%
- **LP盈利能力**：集中流动性时代"谁都可以做LP，但谁能盈利？"成为尖锐问题
- **意图范式威胁**：主流资产订单流可能被意图协议（Solver竞拍）吸走，AMM退守长尾资产

## 关键项目
- [[uniswap]] — 最大DEX，V3集中流动性/V4 Hooks/Uniswap X意图范式
- [[curve]] — 稳定币AMM龙头，混合CFMM+动态锚定
- [[bancor]] — 首个生产级AMM，Omnipool+IL保护（已下线）
- [[balancer]] — 可定制权重池，CMMM模型
- [[trader-joe]] — Avalanche最大DEX，Liquidity Book离散bin模型
- [[dodo]] — PMM主动做市商，单边流动性+预言机定价
- [[aerodrome]] — Base ve(3,3) DEX龙头
- [[thena]] — BNB Chain ve(3,3) DEX超级应用
- [[shadow-exchange]] — Sonic链 x(3,3) DEX龙头，ve(3,3)的进一步进化
- [[cow-protocol]] — CoW Swap意图DEX+CoW AMM FM-AMM
- [[pendle]] — 收益代币化，PT/YT分离

## 相关概念
- [[defi]] — AMM是DeFi的核心交易基础设施
- [[mev]] — LVR是AMM特有的MEV表现形式
- [[intents]] — 意图范式可能重塑AMM生态的订单流格局
- [[liquid-staking]] — 流动性质押代币（如stETH）是AMM的重要交易资产

## 来源
- [[来源_2024-12_AMM自动化做市商指南_ThreeSigma]] — 核心来源，完整技术演进史+33协议分类
- [[来源_2021-07_Uniswap_V3_生态全景_链闻]] — Uniswap V3生态全景
- [[来源_2022-09_Sudoswap_NFT_AMM_机制分析]] — NFT AMM特殊模型
- [[来源_2025-02_UniswapV4_Hooks_LVR_2077Research]] — V4 Hooks技术深度解读
- [[来源_2024-08_LP盈利_DEX存活_LVR_深潮TechFlow]] — LP盈利能力和LVR分析
- [[来源_2024-08_链上流动性_AMM_OpenRug]] — 链上流动性AMM分析
- [[来源_2025-06_DEX_去中心化交易所_灰度]] — 灰度研究提供 AMM vs CLOB 的适用场景分析，以及 DEX 费用 vs CEX 费用的横向对比数据
- [[来源_2025-07_Shadow_x33_Sonic_深潮TechFlow]] — Shadow Exchange x(3,3)模型深度解析，ve(3,3)到x(3,3)的进化详解
- [[来源_2025-02_Shadow暴涨_Sonic_深潮TechFlow]] — Shadow Exchange 早期报道：x(3,3)模型机制详解、Sonic 链冷启动数据
- [[来源_2025-03_Meteora_DLMM_单边池_价格区间_深潮TechFlow]] — Meteora DLMM 离散 Bin 结构 AMM 详解：单边池机制、Bin Step/Bin ID/价格区间计算公式、三种流动性分布策略
