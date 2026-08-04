---
type: concept
created: 2026-07-02
updated: 2026-07-02
tags: [defi, perp, derivatives, dex]
aliases: [去中心化永续合约交易所, Perpetual DEX, 永续合约DEX]
---

# Perp DEX（去中心化永续合约交易所）

## 一句话定义
Perp DEX 是在区块链上运行的永续合约去中心化交易所，允许用户以杠杆做多或做空加密资产，无需中介托管资金，所有交易规则由智能合约执行。

## 核心原理

### 底层架构选择：AMM vs CLOB

Perp DEX 最根本的设计选择，是在流动性冷启动成本与规模化天花板之间的权衡。

**AMM（自动做市商）模式**：
- 以 GMX 的 GLP 为代表——多资产流动性池作为所有交易者的对手方，预言机喂价
- 优势：冷启动成本低，任何用户可存入资产成为 LP，快速汇集初始流动性
- 瓶颈 1：LP 承担被动风险敞口（方向性风险），难以吸引专业做市资金
- 瓶颈 2：TVL 对未平仓合约（OI）形成硬性天花板——总 OI 上限约为 TVL 的 5 倍，超过阈值时资金费率飙升抑制开仓

**CLOB（中央限价订单簿）模式**：
- 以 Hyperliquid、dYdX 为代表——买卖双方直接匹配
- 优势：流动性由独立做市商分散提供，OI 规模理论上无上限，交易执行质量高（低滑点、紧价差）
- 劣势：高昂的冷启动成本（"先有鸡还是先有蛋"困境——需专业做市商持续提供深度报价，但做市商只有在交易量足够时才有利可图）
- 冷启动成本量化参考：一个团队若收取 0.035% 手续费，分给做市商和返佣后可能仅剩 0.015%；若月运营成本 $50 万，需日均 $1.111 亿吃单量才能保本

### 市场公平性

**交易排序（MEV 防护）**：
- 协议设计面临公平 vs 效率的根本权衡
- 公平优先（Hyperliquid）：Speed Bump（3 区块缓冲 + Cancel Order First）保护做市商免受 HFT 狙击
- 效率优先（GTE 等批评者）：真正的价格发现源于做市商间不受限制的竞争；保护弱势做市商会削弱顶级做市商盈利能力

**清算机制**：
- 使用标记价格（Mark Price）而非最后成交价判定清算，以过滤异常波动和"插针"
- 标记价格的设计面临敏感度 vs 稳定性两难——敏感的预言机易受操作、稳定的预言机可能错过清算窗口导致坏账积累

### 第三种路径：AMM+CLOB 混合 + 无预言机（2025）

[[flying-tulip]] 由 Andre Cronje 构建，引入了 Perp DEX 的第三种设计选择：

- **价格发现机制**：AMM（自适应定价曲线）+ CLOB（中央限价订单簿）双引擎——AMM 提供深度和连续性，CLOB 提供精度和紧点差
- **无外部预言机**：价格来自内部交易执行，而非 Chainlink/Pyth 等第三方。结算在 500 毫秒内完成，清算基于可执行市场深度而非预言机刻度
- **核心困境**：此设计在 TVL > 1 亿美元后优势明显（无预言机风险、实时结算），但在 TVL < 1 亿美元时易受鲸鱼操纵——鲸鱼可在 FT 现货市场抛售压价，系统性清算多头仓位获利
- **防御**：深度感知杠杆（< 5000 万池最大 10x / > 2 亿池最大 50x）、清算上限（每区块池子 10%）、熔断机制（1 分钟 >10% 波动暂停交易）
- 来源：[[来源_2025-10_Flying_Tulip_全栈交易所_永续看跌期权]]

### 保证金资本效率

Perp DEX 与 CEX 在保证金效率上的差异根植于底层架构：
- **CEX**：中心化信任→全局风险计算→可识别对冲头寸→沉淀资本可再利用
- **Perp DEX**：代码即法律→资产隔离在智能合约→每个仓位独立保证金→被迫过度抵押

前沿解决方案包括统一抵押池（Marginfi）、多子账户（Drift Protocol）、永续需求借贷池 PDLP（Tarun Chitra 等提出）

## 为什么重要

Perp DEX 是链上应用中最具爆发力的赛道之一，2024 年全行业总交易量达 $1.5 万亿（同比 +138%），正向 CEX 的衍生品市场份额渗透（perpetual DEX 交易量占 CEX 的比例从 2024 年中起高速增长，截至 2025 年初约 8%）。Perp DEX 被视为"CeFi 的最后堡垒"——在现货 DEX 已占约 20% 份额时，衍生品 DEX 仍处于早期，增长空间巨大。

## 市场规模数据（2025年5月）

以 Galaxy Research 数据的 2025 年 5 月 24 日快照为基准（来源：[[来源_2025-06_加密货币杠杆_Galaxy]]）：

- **总期货 OI**（含永续和非永续）：$115.97B，从 4 月 8 日低点 $68.47B 反弹 +69.37%
- **永续合约 OI**：$83.87B（占总期货 72.32%），年初以来占比下降 266 bps，因 CME 等机构合约增长更快
- **CME 市占率**：24.63%（总期货 OI），+349 bps 年初至今；以太坊期货 CME 市占率达 39.1%（从 2024 年 11 月的 17.71% 增长）
- **由中心化交易所主导**：币安永续 OI $25.18B（30.02% 市占率），Hyperliquid 第四大（$9B / 10.73%）
- **Hyperliquid 增速最快**：$5.73B OI 增长（+175.33%）年初至今，从币安和 Bybit 吸收交易量

趋势判断：CME 市占率上升 + 永续合约偏离度下降反映机构参与度提高；Hyperliquid 的爆发代表新零售 DEX 平台正在挑战传统 CEX 永续市场格局。

## 关键项目/案例

- [[hyperliquid]] — 当前龙头（2025 年中市占率 75%+），自建 L1 + CLOB + "透明市场"哲学
- [[dydx]] — 先发霸主（2017-2023），v4 迁移至 Cosmos，但因 Ponzi 激励模式失利
- [[gmx]] — AMM 模式旗手（2021-2023），GLP 模型创新但存在结构性缺陷
- [[jupiter]] — Solana 聚合器，Perps 2023 年 10 月上线，市场份额第二
- [[aster]] — 双模式（AMM + CLOB）+ Hidden Orders 隐私交易；2025 年中 24 小时交易量 4.5 亿美元、30 天 341.7 亿美元，仅次于 Hyperliquid 排名 Perp DEX 第二
- [[lighter]] — 应用专用 ZK-Rollup + 零手续费 + 可验证过程撮合
- [[edgex]] — 移动端优先 + Amber Group 孵化 + 模块化金融系统 V2
- [[synfutures]] — 其他 Perp DEX
- [[superp]] — BSC 上 Perp DEX 龙头（2025 年中），定位「Meme 版 Hyperliquid」，以 NoLiquidation Perp（定时结算、永不爆仓、万倍杠杆）和 Meme 专项衍生品（上线 10 分钟内即可做空）实现差异化竞争，填补 Meme 币衍生品覆盖率不足 3% 的市场空白
- [[apex]] — 多维度积分激励驱动的 Perp DEX，强调创作者经济与 Kaito AI 合作，Season 1 积分池 6900 万 APE
- [[avantis]] — Base 生态 Perp DEX，通过零费用永续合约和风险分层 Vault 模型实现差异化，2024 年 2 月主网上线后累计交易量突破 220 亿美元，最高杠杆 500 倍

## 演化阶段

| 阶段 | 时间 | 标志性项目 | 核心特征 |
|------|------|-----------|---------|
| 概念验证 | 2017-2021 | dYdX v1, Perpetual Protocol | 以太坊主网性能受限，日均量数百万~数亿美元 |
| L2 爆发 | 2021 | dYdX v3（StarkEx）| L2 降本增效，dYdX 单日 $90 亿首超 Coinbase |
| AMM 时代 | 2021-2023 | GMX, Synthetix/Kwenta | GLP 零滑点模式、FTX 暴雷信任转移、dYdX 份额 73%→7% |
| 高性能革命 | 2023 至今 | Hyperliquid, Lighter, Aster | 自建链/CLOB/高性能/HLP+空投驱动增长 |

## 核心权衡列表
1. **冷启动成本 vs 规模天花板**（AMM vs CLOB）
2. **公平 vs 效率**（Speed Bump vs 无限制竞争）
3. **敏感度 vs 稳定性**（标记价格预言机设计）
4. **去中心化 vs 性能**（通用 L2 vs 专用链 vs ZK-Rollup）
5. **透明度 vs 隐私**（透明市场 vs Hidden Orders/暗池）
6. **可持续增长 vs 代币激励**（有机用户 vs Ponzi 挖矿）

## 相关概念
- [[defi]] — Perp DEX 是 DeFi 衍生品赛道的核心构成
- [[mev]] — 交易排序和 MEV 防护是 Perp DEX 的关键设计维度
- [[tokenomics]] — Perp DEX 代币模型从 Ponzi 激励（dYdX）到可持续模式（Hyperliquid 97% 收入回购）的演化
- [[layer2]] — L2 是 Perp DEX 早期性能破局的关键基础设施
- [[sequencer]] — Sequencer 的去中心化程度决定了 perp DEX 的信任模型
- [[trading-system]] — 链上交易系统设计原则

## 我的立场
Perp DEX 赛道正处于"鲸吞蚕食"阶段——Hyperliquid 凭借专用链 + CLOB + 社区经济飞轮形成难以复制的综合性优势（创始人 Jeff 的做市背景是理解其成功的关键）。新进入者仅靠降费或单点技术差异（如 Lighter 的 ZK 验证或 Aster 的隐私订单）很难颠覆。真正可能改变格局的变量：1）Hyperliquid HyperEVM 的生态扩展效果；2）Solana 生态能否通过 Jupiter 聚合器挑战 Hyperliquid 的流动性护城河；3）传统 CEX（如 Bybit、OKX）推出原生去中心化衍生品解决方案。

## 来源
- [[来源_2025-06_Hyperliquid_生态系统_流动性_Decentralised]] — 从流动性基础设施视角补充 Perp DEX 竞争维度：Builder codes 正和博弈模型、清算成本精确对比、共享流动性作为核心护城河
- [[来源_2025-06_Hyperliquid_Degen擂台_IOSG]] — IOSG 全面分析：JELLYJELLY 事件完整复盘、验证人中心化数据（Foundation 65.3% 质押）、"不可复制"四重护城河、HLP 系统性风险实证、HyperEVM 生态细节、CEX vs DEX 宏观趋势对比
- [[来源_2025-10_PerpDEX格局_Hyperliquid胜利_dYdX_GMX教训_OKXVentures]] — 全景式回顾：AMM vs CLOB 系统性分析、四大项目对比、dYdX/GMX 失败归因
- [[来源_2022-09_机构投资者访谈_火币研究院]] — 2022年熊市机构判断衍生品为DeFi新协议最大增长机会：永续合约成交量仍远低于CEX、链上竞争者少、机构专注于"传统领域业务相对成熟但链上竞争者较少"的衍生品协议；部分衍生协议模型表现良好但市场认知不足
- [[来源_2025-07_加密货币衍生品_BTC创新高_CoinGlass]] — 2025上半年市场数据印证Perp DEX增长趋势：Hyperliquid占据DeFi永续合约超80%份额
- [[来源_2022-07_加密衍生品_CeFi_DeFi_Web3Caff]] — 2022年加密衍生品全景历史基线：永续合约CEX占比从7.45%飙升至50.35%、dYdX宣布迁移Cosmos、DeFi衍生品仅占总量的1%
- [[来源_2025-06_DEX_去中心化交易所_灰度]] — 灰度研究系统报告：DEX 占全球加密交易 7.6%（2025前五月，vs 2023年3%），DEX perp 为 CEX perp 5.4%，Hyperliquid 占 perp DEX 80% 日均量，DEX spot 费用 12 bps vs CEX 15 bps
- [[来源_2025-07_Hyperliquid_CEX_衍生品格局_深潮TechFlow]] — 从极限交易者视角细化 HLP 金库机制、资金费率算法和固定保证金制度如何共同解决流动性深度和大额订单吸收问题
- [[来源_2025-07_BNB_Chain_新叙事_200天_BlockBeats]] — Aster 最新交易量数据（24h $4.5B，30 天 $341.7B），确认 Perp DEX 第二位置；Hyperliquid 因 JELLYJELLY 清算事件为竞品提供突围窗口
- [[来源_2025-10_头部Perp DEX动态_Lighter_Aster_Hyperliquid_BlockBeats]] — 2025年10月横向对比五大头部 Perp DEX：Aster 24h 交易量 121.2 亿美元居首、Lighter 86.16 亿美元第二、Hyperliquid 59.58 亿美元第三、edgeX 50.6 亿美元第四、ApeX 21.22 亿美元第五
- [[来源_2025-03_Hyperliquid收入引擎_EverythingExchange_SyncracyCapital]] — 从 Syncracy Capital 投资机构视角补充 Perp DEX 赛道的商业逻辑：Hyperliquid 交易所与智能合约平台融合的"Everything Exchange"飞轮效应（$577M 年收入、$1400亿+ 市场规模估算），以及 HyperEVM 作为金融聚合层的战略定位
- [[来源_2025-03_Hyperliquid_HYPE估值_三级火箭_PANews]] — Perp DEX 龙头的系统性估值框架：PS 5.8/PEG 0.27/DCF 目标价 $48.2-$79.5、"三级火箭"收入模型（衍生品交易费/现货拍卖/跨链服务）、TVL/收入比 50.6 vs Uniswap 184.9 显示资金利用效率优势、链上价值捕获系数 VCC 0.59 为行业均值 2 倍
- [[来源_2025-06_BNB_Chain_财富密码_Binance_Alpha_深潮TechFlow]] — BNB Chain 永续合约赛道 MYX Finance、Aster、KiloEx 等平台崛起，显示出 BNB Chain 在衍生品领域的竞争力
- [[来源_2025-03_稳定币_耕作机会_HFA]] — HLP 金库和 Navigator Exchange NLP 作为 perp DEX 流动性提供机制的具体收益案例：HLP 18.61% 做市收益（含清算事件单日暴涨特征）、Navigator GMX 分叉 NLP 35.60% S + 131.71% esNAVI（含 delta 风险）
- [[来源_2025-03_PerpDEX三大机制_Hyperliquid_Jupiter_GMX_PANews]] — WOO X Research 以鲸鱼攻击事件为引子做的三大 Perp DEX 机制横评：HLP/JLP/GLP 三种流动性供给模型对比（HLP 单金库集中、JLP 多资产池、GLP 多资产指数池）、交易模型（CLOB 订单簿 vs LP-to-Trader vs 预言机零滑点）、清算机制（开放参与 vs 自动合约 vs Chainlink 索引）、资金费率（小时级多空费率 vs 利用率借贷费 vs 小时借贷费）；ADL 机制与 DeFi 去中心化精神的矛盾讨论
- [[来源_2025-09_CryptoNews合集_Avantis_Base衍生品]] — 补充 Base 生态 Perp DEX Avantis 的完整数据：220 亿美元累计交易量、风险分层 Junior/Senior Vault 模型、零费用永续合约与损失返还机制、500 倍杠杆、AVNT 代币经济学与空投分配
