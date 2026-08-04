---
type: source
source_type: article
url: https://www.panewslab.com/zh/articledetails/6jeoramg.html
date: 2025-03-18
ingested: 2026-07-02
---

# 三大 Perp DEX 机制一览：Hyperliquid vs Jupiter vs GMX 架构对比

## 阅读证据
- 总行数: 80
- Q1 (前25%): Hyperliquid 鲸鱼攻击事件——某巨鲸在 Hyperliquid 开 50x ETH 多头，峰值未实现利润超 $2M，通过撤出保证金抬高清算价触发强制平仓，获得 $1.8M 利润；对手方 HLP 在 3 月 12 日单日损失约 $4M
- Q3 (中后25%): GMX 采用 Chainlink 去中心化预言机报价，零滑点执行机制；自动清算通过预言机指数价格触发（保证金率低于约 1.25x 初始保证金时）；70% 交易手续费奖励给 GLP；借贷费 0.01%/小时，利用率高时可飙升至 50%+ 年化
- Q4 (最后25%): Hyperliquid 事后风控措施——BTC 最大杠杆降至 40x、ETH 降至 25x、保证金转账要求提高 20%；ADL（自动减仓）机制讨论；长期方案依赖市场成熟度和流动性自然增厚；三大协议在全维度（流动性池/交易模型/滑点/清算/资金费率/预言机/核心风险）的横向对比表
- 图片: 3 张外部 CDN 图（不可用/跳过，为对比表格和架构图）

## 核心要点
- 以 Hyperliquid 鲸鱼攻击事件为切入点，系统性对比三大 Perp DEX 的核心机制——Hyperliquid 的 HLP 订单簿+做市模型、Jupiter 的 JLP LP-to-Trader 模型、GMX 的 GLP 预言机零滑点模型
- Hyperliquid 采用链上订单簿+ HLP 做市的 CLOB 模式，HLP 作为集中做市商但仅占总交易量不到 2%；多交易所预言机每 3 秒更新；小时级多空资金费率锚定现货价格
- Jupiter 采用 JLP 多资产池（SOL/ETH/WBTC/USDC/USDT）作为交易对手方，无订单簿，预言机定价近零滑点；无传统资金费率，代之以基于利用率的小时借贷费
- GMX 采用 GLP 多资产指数池，Chainlink 预言机报价零滑点执行；借贷费 0.01%/小时，利用率高时年化超 50%；70% 交易费归 GLP 激励 LP
- 核心冲突：预防措施（降杠杆、提高保证金、ADL、账户追踪）与 DeFi 无需许可精神之间的根本张力
- 长期出路不在于机制设计，而在于流动性自然增厚到使攻击成本超过收益——赛道发展必经之路

## 关键数据
- 鲸鱼攻击 50x 杠杆 ETH 多头，获取 $1.8M 利润，HLP 单日损失约 $4M
- Hyperliquid 事后风控：BTC 最大杠杆 40x，ETH 最大杠杆 25x，保证金要求提高 20%
- GMX 清算触发线：保证金率低于初始保证金的约 1.25x；借贷费最高年化 50%+（利用率驱动）
- Jupiter 清算维持保证金率约 6.25%，无传统资金费率，改为基于利用率的小时借贷费

## 与已有知识的关系
- 补充 [[perp-dex]] — 本文以鲸鱼攻击实战案例补充了三大 Perp DEX 机制对比的实操维度，尤其是 HLP 系统性风险的量化表现（$4M 单日损失），以及 ADL 机制在 Hyperliquid 场景的适用性讨论；对比了 HLP/JLP/GLP 三种流动性供给模型的核心差异
- 补充 [[hyperliquid]] — 提供 HLP 鲸鱼攻击事件的详细数据（50x ETH 多、$1.8M 套利、$4M HLP 损失），以及 Hyperliquid 的即时风控响应（降低杠杆、提高保证金要求）
- 补充 [[jupiter]] — 详细说明 JLP 借贷费机制：无传统资金费率，代之以基于利用率的小时借贷费，持仓时间越长/利用率越高则费用越高
- 补充 [[gmx]] — 量化 GMX 清算阈值（~1.25x 初始保证金）和借贷费上限（年化 50%+），以及 70% 交易费归 GLP 的激励结构

## 值得记住的引用
> "最好的解方还是 Perp Dex 协议本身随着市场成熟，流动性逐渐加厚，拉高让攻击者付出成本，直至无利可图，而当前困境为赛道发展必经之路。"

> "Prevention measures (lower leverage, higher margin requirements, ADL, account tracking) — limit individual accounts and approach KYC-style controls; DeFi ethos — '无需许可' (permissionless) access for anyone."

## 我的笔记
本文由 WOO X Research 撰写，以鲸鱼攻击事件为引子做三大 Perp DEX 机制横评，结构清晰但深度有限。亮点在于以同一事件视角切入了三种完全不同的架构（CLOB+HLP / LP-to-Trader / 预言机零滑点），而非分列式介绍。缺陷是原文大量内容在图片（3 张外部 CDN 对比表）中，纯文本部分较为简略，许多关键对比只能通过 WebFetch 从网页 DOM 中提取。核心洞见——"流动性加厚是唯一解"——过于理想化，忽视了先发优势固化后新协议冷启动的结构性困境；不过 ADL 与 DeFi 去中心化精神的矛盾确实是值得深挖的张力点。
