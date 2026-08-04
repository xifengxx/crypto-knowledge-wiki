---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-07-02
tags: [layer2, ethereum, optimistic-rollup, defi, scaling]
aliases: [Arbitrum One, Arbitrum Nova, ARB]
---

# Arbitrum

## 基本信息
- **类型**: Ethereum Layer 2（Optimistic Rollup）
- **开发团队**: Offchain Labs
- **主网上线**: Arbitrum One 于 2021 年 8 月上线
- **Token**: ARB（2023 年 3 月 16 日宣布，初始总供应量 100 亿枚，年通胀上限 2%）
- **融资**: 投资者占 Token 分配 17.53%（17.53 亿枚 $ARB）；团队/顾问占 26.94%

## 核心技术架构

### 多轮欺诈证明（核心差异化）
不同于 Optimism 的单次交互式欺诈证明，Arbitrum 采用多轮交互：将争议拆分为多步，逐步缩小范围，最终只需证明排序者在执行某条特定指令时出现异常即可判定作恶。这降低了单次挑战的 Gas 消耗，避免因包含大量交易而超出 Gas 限制。

### 双链架构
- **Arbitrum One**: 主 Rollup 链，标准 Optimistic Rollup，7 天挑战期，面向 DeFi/高价值应用
- **Arbitrum Nova**: 基于 AnyTrust 技术的低成本链，通过数据可用性委员会（DACert）确保最小信任假设，取消 7 天提币期，专为游戏、社交、低成本场景设计。若委员会无法达成共识，回退为标准 Rollup 协议

### 关键技术升级时间线
- **2022 年 8 月 · Nitro**: WASM 架构取代定制 AVM、Geth 取代定制 EVM 模拟器、ArbOS 用 Go 重写，显著提升速度和降低成本
- **2023 年 · Stylus**: 下一代编程环境（EVM+），支持 Rust/C/C++ 编写智能合约，与 EVM 完全互操作，速度快一个数量级

### EVM 兼容性
几乎 100% 兼容 EVM，已有 DApp 从 L1 迁移无需修改代码（优于 Optimism 的 OVM）。但多步交互的异步机制更复杂，代码量更大，可能存在安全隐患。

## 关键数据（2023 — 2025 年演进）

### 2023 年 3 月（初始状态）
- **TVL**: 38.5 亿美元，占 L2 市场的 **55.97%**（最大 L2）
- **ARB 分配**: DAO 金库 42.78% | 团队/顾问 26.94% | 投资者 17.53% | 用户空投 11.62% | DAO 空投 1.13%
- **GMX**: Arbitrum 上最大的 DeFi 协议，TVL 4.96 亿美元，占 Arbitrum DeFi 的 27.53%
- **月活跃地址**: 608,365（2022年10月-2023年1月），较 9 月上涨 51.2%

### 2025 年 5 月 31 日（最新状态）
- **Arbitrum One 稳定币供应量**: 66 亿美元（所有 L2 中最高），其中 Hyperliquid Bridge 占 51.8%（34.2 亿美元）
- **Arbitrum One DeFi TVL**: 25.9 亿美元（不含 Hyperliquid Bridge），含 Hyperliquid 则跃升至 60 亿美元
- **Arbitrum One 链上 GDP**: 2.149 亿美元（YTD），Uniswap/GMX/Aave 占 40.5%
- **Arbitrum Orbit**: 48 条已主网上线的 Arbitrum Chains，另有 38 条测试网/开发中；累计 110 万周活跃地址，TVL 137 亿美元，18.9 亿笔总交易，占所有 L2 交易的 31.8%
- **网络 REV**: 740 万美元（YTD），应用收入捕获率(App RCR) 2,904%
- **ArbitrumDAO 财政**: 12.1 亿美元资产（ARB 92.7%、ETH 4%、RWA 2.3%、USDC 1%）
- **ARB 总供应量**: 100 亿，每月归属 1.086 亿 ARB，预计 2027 年 3 月完全归属

## 双产品战略：Arbitrum One + Arbitrum Orbit

Arbitrum 已发展为全面的多产品技术平台，由两款截然不同但又相互关联的产品组成：

- **Arbitrum One**: 旗舰 L2 Rollup，EVM 同等执行环境，核心 DeFi 生态。蓝筹协议部署包括 Aave（8.431 亿美元）、Uniswap（2.837 亿美元）、Compound（1.335 亿美元）、GMX（4.172 亿美元）
- **Arbitrum Orbit**: 基于 Arbitrum Nitro 的技术框架，使项目可部署定制 L2/L3 网络。2023 年 10 月上线主网。Caldera/Gelato/Conduit/Alchemy/AltLayer 等 RaaS 提供商简化构建流程。核心 Arbitrum Chains 包括 Gravity（Galxe）、Proof of Play（海盗国度游戏）、ReyaChain（永续期货）、ApeChain（BAYC 生态）

### Orbit 技术灵活性
- AnyTrust 协议（替代 DA 方案，通过 DAC 优化性能）
- 支持 Celestia/EigenDA 等外部 DA 提供商
- 支持 L3 架构（结算到 Arbitrum One 等 L2）
- 开发者可进行网络级定制，创建专属区块空间

## 数字主权国度战略与增长飞轮

2025 年，Arbitrum 开启新一轮发展，将重点转向构建充满活力的链上经济，以"数字主权国度(Digital Sovereign Nation)"为愿景。该模型通过三个核心要素运作：

1. **多元化参与者和利益相关者**: ArbitrumDAO 对协议升级和资金持有拥有完全链上控制权
2. **高利润区块空间**: Layer2 经济性使网络收入大量保留。Arbitrum One 交易平均毛利率超过 95%，Timeboost 和 AEP 等项目产生额外收入
3. **经济试验区**: DAO 将财政资产再投资于生态系统投资项目，形成增长飞轮

### 三重收入流
- **核心协议收入**: Arbitrum One 和 Arbitrum Nova 将 100% 排序器利润贡献给 DAO
- **AEP 许可费**: 所有其他 Arbitrum Chains 分享 10% 排序器利润（8% DAO / 2% 开发者协会），L3 免于利润分享
- **Timeboost 拍卖**: 捕获 MEV 的额外收入流

截至 2025 年 5 月 31 日，ArbitrumDAO 从这些来源获得 750 万美元收入。

## Timeboost（MEV 捕获机制）

2025 年 3 月宣布，2025 年 4 月 17 日在 Arbitrum One 和 Arbitrum Nova 上线。Timeboost 修改排序器交易排序，在保留先到先得模式的基础上，通过拍卖优先交易创造新收入：

- 增加约 250 毫秒延迟，引入可拍卖的快速通道
- 从原子套利和清算等策略中捕获 MEV
- 上线 44 天后总收入超 100 万美元
- 年化收入 1130 万美元（基于 30 日移动平均线）
- 97% 收入归 ArbitrumDAO，3% 归开发者协会
- 99% 的拍卖有活跃竞标者，占网络 REV 的 50% 以上

## BoLD 与去中心化 Stage 1

有限流动性延迟(BoLD)协议于 2025 年 2 月正式上线，引入无需许可的防欺诈系统：

- 允许任何人在母链上发布 Arbitrum Chain 状态声明
- 恶意方提交的保证金将被没收
- 满足 L2Beat Stage 1 全部五个必要条件（功能性防故障系统、至少五名参与者可提交错误证明、无需许可的桥梁、运作中的安全理事会、升级延迟至少 7 天）
- 截至 2025 年 5 月 31 日，仅 Arbitrum One 和 Kinto 达到 Stage 1

还满足 Stage 2 三个要求中的两个（仅差 30 天退出窗口和安全理事会仅针对严重缺陷干预的限制）。

## RWA 财政多元化（STEP）

稳定财政捐赠计划(STEP)旨在将 DAO 财政多元化至产生收益的 RWA：

- **STEP 1**（2024 年 4 月获批）: 3500 万 ARB 转换为 2930 万美元，配置为 Securitize BUIDL（960 万）、Ondo USDY（520 万）、Superstate USTB（520 万）、Mountain USDM（350 万）、OpenEden TBILL（350 万）、Backed bIB01（350 万）
- **STEP 2**（2025 年 2 月获批）: 3500 万 ARB 转换为 WisdomTree WTGXX、Spiko USTBL、Franklin Templeton BENJI
- 截至 2025 年 5 月 31 日，RWA 持有量总计 2760 万美元，产生 74.5 万美元利息收入

## Arbitrum Gaming Ventures（AGV）

前身为 Gaming Catalyst Program（GCP），2024 年 6 月获批，最高拨款 2 亿 ARB（总供应量 2%）：

- 建设补助金: 2500 万 ARB（0.25%）
- 投资: 1.35 亿 ARB（1.35%）
- 基础设施赏金: 4000 万 ARB（0.40%）
- 运营: 2500 万 ARB（0.25%）

2025 年 5 月宣布首笔 1000 万美元投资，对象包括 Wildcard、Hyve Labs、T-Rex、Xai、Proof of Play。超过 70 个项目正在筹备投资中。

## 机构采用与 RWA 生态

Arbitrum One 已成为传统金融机构进入链上经济的主要入口：
- **BlackRock BUIDL**: 代币化货币市场基金，Arbitrum 上供应量 3110 万美元
- **Franklin Templeton BENJI**: 代币化美国政府货币基金，供应量 9200 万美元
- **WisdomTree Connect**: 2025 年 4 月推出，涵盖 13 种代币化基金
- **Robinhood**: 2024 年 2 月集成 Arbitrum One 兑换功能；2025 年 6 月宣布将在 Arbitrum One 上推出股票代币
- **Hyperliquid**: L1 永续合约平台，通过 Arbitrum One Bridge 获得 34.2 亿美元 USDC 流动性

## 新兴实体：Onchain Labs

2025 年 3 月由 Arbitrum 基金会和 Offchain Labs 成立，旨在加速链上创新体验。首个孵化项目 Talos 由 AI 代理控制，自主管理资金资产、代币经济学和协议机制，由代币持有者通过 GitHub 治理。

## 生态亮点

### DeFi 飞轮
形成"GMX（衍生品 DEX）→ Jones DAO（收益聚合器）→ 更多流动性"的正向循环：衍生品协议类似赌场有持续收入 → 聚合器吸引资金扩大收益 → 流动性更充足 → 收入更多。

### 核心原生项目
- **GMX**: 去中心化永续合约平台，最高 30 倍杠杆，通过 Keeper 机制执行平仓
- **Camelot**: 原生 DEX（AMM + 稳定币互换 + Launchpad + NFT 质押头寸 spNFT）
- **RDNT**: 全链借贷协议，基于 LayerZero 实现跨链借贷
- **Treasure DAO**: "去中心化任天堂"游戏生态，$MAGIC 为共享货币
- **Trident DAO**: Risk To Earn 经济模型，$PSI Token 通缩机制

### 奥德赛活动（2022年6月）
为期 8 周生态激励活动，仅进行第一周即因网络拥堵导致 Gas 超过 L1 而暂停。但仍新增 20.7 万个地址，单日最高新增 5.5 万地址。

## Arbitrum Orbit（L3 框架）
Orbit 是 Arbitrum 在 L2 之上创建和部署 L3 链的无需许可开发框架，允许开发者在 Arbitrum L2 链之上部署定制链。支持三种模式：
- **第 3 层 Rollup**: 类似 Arbitrum One 的 L3 Rollup 链
- **第 3 层 AnyTrust**: 类似 Arbitrum Nova 的 L3 AnyTrust 链
- **可定制的第 3 层**: 基于 Arbitrum Nitro 部署针对特定应用需求的定制 L3 链，可定制隐私、权限、手续费代币、治理等组件

Arbitrum 将此方案品牌化为"定制链"（Custom Chains），目标吸引希望有更多控制权和可定制性的开发者。截至 2023 年 8 月，Arbitrum DAO 仍要求批准使用 Arbitrum 的 IP 开发 L2（与 Optimism 的完全开源策略形成对比）。

## 去中心化路线图
- 继续降低费用、提升 TPS
- 排序器（sequencer）去中心化
- 验证者去中心化
- 合约管理和升级治理去中心化

## 风险 / 争议
- **排序器中心化**: 当前为单一排序器 + 白名单验证者，存在审查和资金风险
- **可升级合约**: 虽未出现安全问题，但增加了信任假设
- **扩容能力待验证**: 奥德赛活动期间 Gas 超过 L1 主网，暴露承载力不足
- **多轮欺诈证明复杂度**: 异步机制代码量更大，潜在安全漏洞风险

## 相关实体
- [[base]] — 同为 OP Stack L2，消费者应用路线形成差异化竞争
- [[celestia]] — 模块化 DA 层，与 Arbitrum 的 AnyTrust 数据可用性委员会形成不同 DA 路径
- [[hyperliquid]] — 使用 Arbitrum One 作为主要 USDC 入口，Bridge 从 Arbitrum 获得 34.2 亿美元流动性
- [[gmx]] — Arbitrum 原生永续合约 DEX，2025 年占 Arbitrum One 链上 GDP 重要份额
- [[aave]] — 蓝筹借贷协议，在 Arbitrum One 上部署 8.431 亿美元
- [[blackrock-buidl]] — STEP 组合中最大份额的 RWA 产品
- [[franklin-templeton]] — BENJI 代币化基金在 Arbitrum 上供应量 9200 万美元
- [[ondo-finance]] — USDY 在 Arbitrum One 上供应量 630 万美元
- [[galxe]] — Gravity 链由 Arbitrum Orbit 提供支持，是 Orbit 生态交易量第二大链
- [[apechain]] — ApeCoin 的 L3 链，由 Arbitrum Orbit 提供支持

## 来源
- [[来源_2023-02_Rollup_ZKRollup_Optimistic_Arbitrum区别_Future小哥哥]] — 2023年初科普：Arbitrum 采用多轮欺诈证明（vs Optimism 单轮）、不在 L1 上执行交易、自带虚拟机更兼容 ETH 网络，当时 TVL 为 L2 最高
- [[来源_2023-03_Arbitrum详解_Optimistic_Rollup_火币研究院]]
- [[来源_2023-08_L2进化趋势_Superchain_L3_Hyperchain_币安研究院]] — Arbitrum Orbit 无需许可 L3 框架详解：Arbitrum 以 59 亿美元 TVL 占 L2 市场份额 60%+，Orbit 定位为"定制链"平台但要求 DAO 批准 L2 IP 使用
- [[来源_2024-09_L2_Solana_Appchain_应用部署选择_Web3Caff]] — 将 Arbitrum 列为通用 L2 代表选项之一：继承以太坊安全性+EVM 可组合性优势，但存在拥堵（奥德赛活动期间 Gas>L1）和 MEV/排序收入无法回馈应用的盈利模式局限
- [[来源_2023-04_反女巫_资金归集_空投农场_zksyncc]] — 2023 年教程选择 Arbitrum 作为操作链，侧面印证当时 Arbitrum 的低 Gas 成本和空投 farming 活跃度
- [[来源_2025-07_Arbitrum_双产品_Messari]] — Messari 2025 年 7 月研报：全面更新 Arbitrum 数据至 2025 年 5 月，覆盖 Timeboost/BoLD/STEP/AGV/数字主权国度战略/48 条 Orbit 链等最新发展
- [[来源_2022-07_以太坊_L2_Rollup扩容方案_综述]] — 2022 年中 Arbritrum 早期快照：TVL $10.6B（占 L2 总额 53.54%）、估值 $1.2B、Lightspeed/Polychain/Pantera 投资，奥德赛活动启动期
- [[来源_2025-06_以太坊RWA_监管变局_BUIDL_Etherealize_BlockBeats]] — Arbitrum RWA 数据：2.56 亿美元总市值中，BENJI 贡献 1.119 亿美元（43.7%）、Spiko 占 9350 万（36.5%），二者合计垄断超八成市值；RWA 生态多样性不足问题显著
- [[来源_2025-07_公链数据_以太坊_Base_Hyperliquid_PANews]] — 2025年Q2 8链横向对比：Arbitrum TVL增34%、ARB价格涨66%、但日活地址持平（460万无变化）、保持L2第二
