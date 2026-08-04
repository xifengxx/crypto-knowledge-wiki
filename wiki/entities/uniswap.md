---
type: entity
entity_type: protocol
created: 2026-06-28
updated: 2026-06-29
tags: [defi, dex, amm]
---

# Uniswap

## 基本信息
- 定位：以太坊上最大去中心化交易所（DEX）
- 核心创新：自动做市商（AMM）模型
- 版本：V1→V2→V3（集中流动性）→V4（Hooks）

## 核心业务
任何人对可自由创建交易对、提供流动性赚取手续费。不需要订单簿、不需要做市商——智能合约根据公式自动定价。

## V3 生态快照（2021年7月，上线三个月后）
- V3核心创新：集中流动性（聚合流动性粒度控制）、范围订单、多级费率（0.05%/0.30%/1.00%）、高级预言机
- LP代币从ERC-20改为NFT，使做市头寸可定制化，打通DeFi+NFT可组合性
- 生态项目共43个，其中流动性管理类21个（最大子赛道），工具类、流动性挖矿类、衍生品类22个
- 已部署至以太坊主网+Arbitrum+Optimism三条链
- 代表项目：Visor/Gamma（$50万初始资金）、Gelato G-UNI（30分钟自动再平衡）、Charm Alpha Vault（被动再平衡）、Perpetual Protocol V2（vAMM与V3耦合）、Integral Protocol（采用V3预言机）
- 多数V3生态项目（Visor、Lixir、xU3LP等）已不再活跃，但集中流动性范式被Trader Joe、PancakeSwap V3等后续项目广泛采用

## 关键数据（2024年8月更新）
- 所有DEX中交易量最大
- Q1+Q2 GMV均维持在$1800亿水平（巅峰级别）
- P/S市销率稳定在8
- 协议费用全归LPs（协议本身零利润）— UNI持有者无法捕获协议价值
- Uniswap Labs通过前端API收费（0.15%→0.25%），累计收入$5960万
- 以太坊主网为最大费用来源（8月15日单日交易量$11.6亿），Arbitrum+Base交易量与主网相当
- 上半年Uniswap是ETH消耗量最大的应用协议（销毁约71,915枚ETH）
- 过去一周V3以太坊主网交易量$39.6亿，前15交易对占比82.8%

## 费用开关争议
2024年5月社区提出打开费用开关（协议收取0.05%费用）并激励UNI持有者的提案，但因各利益团体阻挠一再推迟。背后核心矛盾：监管层面对"证券与否"的忧虑与妥协。Labs能赚钱不等于UNI持有者能赚钱——协议和Labs的发展几乎与UNI代币无关。

## Unichain 与 Appchain 转型
- 2025 年 2 月正式推出 [[unichain]]（Uniswap L2），基于 OP Stack，TVL 约 10 亿美元
- 截至 2025 年 8 月已有超过 100 个应用和基础设施提供商在 Unichain 上构建
- 推出 Flashblocks（200ms 区块时间）和 Unichain 验证网络（UVN）
- 核心逻辑：Uniswap 为以太坊创造了 27 亿美元 gas 收入，但自身价值捕获不到 1%——自建链实现 gas 费和 MEV 内化

## 相关实体
- [[unichain]] — Uniswap 自建的 L2 应用链
- [[aave]] / [[makerdao]] — DeFi 三件套
- [[circle]] — USDC 是 Uniswap 上最大的交易对资产

## 来源
- [[来源_2025-08_Appchain_胖应用_胖协议_IOSG]] — 提供 Uniswap 价值捕获困境核心数据（$6.4B 价值创造/$2.7B gas 流向以太坊/<1% 归协议）
- [[来源_2025-03_特朗普2.0_上任8周_加密监管_PANews]] — 补充SEC在Trump上任后终止对Uniswap的调查，撤销执法行动
- [[来源_2023-10_DeFi发展史_Uniswap之前_BlockBeats]] — Uniswap 诞生的理论背景：Vitalik 2016 年 Reddit 帖子提出链上 AMM 概念，Bancor 2017 年首次实现
- [[来源_2021-07_Uniswap_V3_生态全景_链闻]] — V3上线三个月生态全貌，43个项目分类盘点
- [[来源_2024-08_DeFi_PE市盈率_估值分析_BlockBeats]]
- [[来源_2023-10_加密支付卡_发卡即服务_BlockBeats]] — 2023年10月 Uniswap DAO 发起提案讨论发行带有 Uniswap 标志的 VISA 卡，DeFi 应用也开始谋划发卡生意
- [[来源_2022-09_DeFi重要词汇_清算_无常损失_价值捕获]] — 提供 Uniswap V2 被动全范围做市与 V3 集中流动性主动做市的对比分析，以及无常损失的具体计算示例（ETH/DAI 池示例）
- [[来源_2024-09_持续盈利项目_代币炒作_商业模式_深潮TechFlow]] — Uniswap作为最大的DEX，持续产生强劲交易量；最近决定通过交易和提供流动性来奖励用户；但Solana原生的Jupiter开始显著占据Uniswap的市场份额
- [[来源_2024-10_Uniswap_Unichain_UNI质押验证者网络]] — Unichain 宣布日产品细节：Flashblocks 250ms/UVN/UNI 质押验证
- [[来源_2024-10_Unichain_胖应用_DeFi演进_BlockUnicorn]] — Unichain 理论溯源（Elitzer 2022预测/MEV+Gas>LP费用）、胖应用框架定位、Pantera/Syncracy 投资机构视角、以太坊L2价值积累困境
- [[来源_2024-08_LP盈利_DEX存活_LVR_深潮TechFlow]] — Uniswap V4 钩子架构催生 Bunni V2 等 LP 盈利能力创新；Uniswap 费用开关讨论反映代币持有者 vs LP 的价值分配矛盾
- [[来源_2023-04_反女巫_资金归集_空投农场_zksyncc]] — Uniswap LP 的非典型用例：利用 DEX 池子作为链上资金混淆层，通过 swap 行为掩盖多地址资金归集以规避女巫检测
- [[来源_2025-02_UniswapV4_Hooks_LVR_2077Research]] — V4 完整技术深度解读：Singleton 架构、Flash Accounting（EIP-1153 瞬态存储）、Hooks 编程模型、LVR 解决方案（Arrakis/Sorella）、代币发行范例（Flaunch/Doppler）
- [[来源_2024-12_AMM自动化做市商指南_ThreeSigma]] — 补充V4 Hooks 8回调点详解、Singleton模型架构图、Uniswap X荷兰拍机制及过去30天链上订单流数据（23亿vs 5.87亿美元）
- [[来源_2025-04_比特币生态_RWA赛道_Web3全景_PANews]] — Infinity Labs更新Uniswap数据：V4日均交易量$50亿/意图交易(UniswapX)减少MEV/交易成本降低30%
- [[来源_2022-07_Web3_收入_价值捕获_FutureMoney]] — 核心数据点：Uniswap累计总交易额达1万亿美金，半年总收入高达6亿美金，但没有任何Protocol Revenue——成为"协议收入为零"的经典案例，与其万亿交易规模形成鲜明对比
- [[来源_2025-02_Memecoin_CEX流动性_DEX竞争_TigerResearch]] — Tiger Research 提供 Uniswap 市场份额下滑数据：从 2024 年 12 月的 34.5% 降至 2025 年 1 月的 22%，被 Raydium（27%）超越；分析以太坊高 Gas 费是 Memecoin 交易者离开 Uniswap 转向 Solana DEX 的关键原因
- [[来源_2025-03_DEV链上操作_Cocoro_EVM_PANews]] — 以Cocoro在BASE链上的Uniswap V3单边池为例，演示LP NFT查看方法(Token ID 2256046/2256052)、三种查池方式(官方APP/直接URL/impersonator模拟)
