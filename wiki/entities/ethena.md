---
type: entity
entity_type: protocol
created: 2026-06-28
updated: 2026-07-02
tags: [stablecoins, defi, synthetic-dollar]
---

# Ethena

## 基本信息
- 产品：USDe（合成美元稳定币）+ sUSDe（质押收益版）
- 机制：Delta-Neutral 对冲（现货多头 + 永续合约空头）
- 推出时间：2023 年底
- 2025 Q2 AUM：~66 亿美元（波动区间 27-66 亿）
- 2025年7月 TVL：58.8亿→75.5亿美元（一周内+28.4%），市场份额68.1%→70.6%
- 波动率得分：8.23（180天，所有20个受测DeFi协议中最低）
- 累计协议收入：超4亿美元（自上线以来）
- DeFi协议总排名：第17位（跟踪协议中前3%）

## 团队与融资
### 核心团队
- **Guy Young（创始人）**：曾在市值 600 亿美元的对冲基金工作，Luna 崩盘后创立 Ethena
- **Elliot Parker（COO）**：前 Paradigm 产品经理，曾在 Deribit 工作
- **Jane Liu（亚太区机构增长主管）**：历任职 Fundamental Labs 投资研究主管、Lido Finance 机构合作伙伴关系和基金关系主管

### 融资历史
三轮融资累计 1.195 亿美元：
1. **种子轮**：600 万美元，Dragonfly、Maelstrom Capital 等领投
2. **A 轮**：1400 万美元，估值 3 亿美元
3. **战略轮**：1 亿美元（2024 年 12 月），Brevan Howard Digital、Franklin Templeton、F-Prime Capital（Fidelity 旗下）等参投

### 投资机构网络
Ethena 的投资者覆盖三大领域：
- **交易所**：YZi Labs、OKX Ventures、HTX Ventures、Kraken Ventures、Gemini Frontier Fund、Deribit
- **做市商**：GSR、Wintermute、Galaxy Digital、Amber Group
- **传统金融**：Paypal Ventures、Franklin Templeton、F-Prime Capital

这种三领域覆盖的投资者结构呼应了 Ethena 连接 CeFi/DeFi/TradFi 的核心定位。

## 核心业务
发行 USDe——一种不依赖法币储备的合成美元稳定币。用户存入 ETH/stETH 或 USDC，协议在 CEX/DEX 上开等值空单，实现价格对冲，铸造 USDe 给用户。持有者可将 USDe 质押为 sUSDe 分享协议收益。

此外面向传统受监管机构推出 iUSDe，允许传统投资机构在无需直接接触 Crypto 市场的情况下，将 Crypto 市场的高收益率提供给客户。

## 生态产品
- **Ethereal**（2025 Q1 推出）：去中心化交易平台，Ethena 生态的中心化流动性出口
- **Derive**（2025 Q1 推出）：链上交易协议，支持期权、永续合约和现货交易
- **USDtb**：与 [[blackrock-buidl]] 合作的第二款稳定币，储备资产为短期美国国债

此外发行第二款稳定币 USDtb，与 [[securitize]] 联合开发，依托 [[blackrock-buidl]]，背书资产为高质量短期国债。USDtb 作为独立于 USDe 的产品，在负资金费率期间可承接从 USDe 对冲头寸释放的资产，增强系统稳定性。

## 收益机制
**公式：AUM × 套利年化利率**

两层收益来源：
1. **Funding rate**：永续合约市场多头支付给空头的费率（主要来源，牛市时高）
2. **stETH staking rate**：抵押资产的 PoS 收益

**具体收入拆分**（JacobZhao 2025.04）：
- ~65% 来自资金费率套利
- ~35% 来自ETH质押、DeFi借贷和CeFi收益
- 资产托管于OES（Off-Exchange Settlement）提供商，月度审计报告覆盖

**操作流程**：
用户存入stETH → 协议在CEX开对冲空头 → 铸造等量USDe → 空头收取资金费（历史>80%场景为正）→ 负资金费时期用储备资本覆盖损失

年化收益区间：3-15%（随市场波动）

**与 UST 的本质区别**：
- UST：补贴式模型，没有真实利差，靠新钱养旧钱
- USDe：有真实链上套利收入支撑，不依赖增发

## 关键数据

### 托管资产快照（2025年1月30日）
- USDe 供应量: 57.39 亿
- Copper 托管: 25.73 亿美元
- Ceffu 托管: 30.45 亿美元
- Cobo 托管: 508 万美元
- Coinbase Web3 钱包: 1 亿美元
- 铸造/赎回中: 3000 万美元
- 总支撑资产: 57.53 亿美元
- 储备基金: 6041 万美元
- 含储备基金的总支撑率: 101.30%

Bybit 黑客事件（2025 年 2 月）后：引发超 1.2 亿美元 USDe 集中赎回，Ethena 以 19 亿美元 Liquid Stables 储备覆盖该冲击，USDe 短暂脱锚至 $0.97 后恢复。Ethena 每月进行托管快照。

- AUM 从 2024 Q2 的 27 亿 → 2025 Q2 的 66 亿（+144.6%）
- 季度收益收入波动大：4700 万 → 1.26 亿 → 4800 万
- 对冲成本一直高企
- USDtb 稳定币：不到 6 个月内增长至 $15 亿，成为第 8 大稳定币（2025 年 3 月，DeFiLlama 数据）
- USDtb 90% 储备金存放在 BlackRock BUIDL 基金（通过 Securitize 基础设施），间接贡献 BUIDL 超过 50% 的基金规模
- 通过 Pendle PT-sUSDe 市场积累超过 $20 亿 TVL（2025 年 6 月，跨 AAVE/Morpho/Euler/Silo）
- ENA 代币价格：由 2025 年 6 月底低点 0.25 美元升至 2025 年 8 月的 0.78 美元，涨幅 212%
- Ethena 基金会通过第三方做市商在公开市场回购 8,300 万枚 ENA（2025 年 7 月起）
- **四大增长支柱框架（2025.06 Tindorr/PANews）**：Telegram 集成（10 亿+用户）、Converge L1（机构 TradFi 通道）、DeFi 协议联盟、CEX 抵押品扩张
- **Telegram 集成数据**：16 周激励计划，tsUSDe APY 18%（部分由 TON 基金会资助），基础收益率约 8%，一键质押及发送
- **Converge + Securitize 合计**：近 100 亿美元 TVL/AUM；5 大协议承诺支持（Pendle/Morpho/Maple/Ethereal/Aave）；sENA 质押验证者网络
- **DeFi 协议交易量（2025.06）**：Pendle 平台 USDe 交易量 $2.6B，Aave 平台 $2.2B，Spark/Sky 平台 $600M
- **Bybit USDe 余额**：> $7 亿，超越该平台 USDC；USDe 在 CEX 稳定币份额仅约 1%，若达 10% 可释放 $50-60B 新供应
- **Chaos Labs 合作**：推出实时储备金证明系统，实时公开验证 USDe 储备情况
- **A1 Research 数据驱动分析（2025.07）**：TVL $58.8亿→$75.5亿（一周+28.4%），市场份额68.1%→70.6%；波动率8.23（所有20个受测协议中最低）；压力期留存率86.1%（3月）和88.4%（4-5月），平均87.25%；恢复速度3-6周（均值7.2周，快37.5%）；压力后TVL超出压力前12%-26.7%
- USDe 供应量在 2025 年 3 月初约 55 亿+美元，为第三大美元稳定币（仅次于 USDT、USDC），Transfer Volume 排名第四，但 Active Addresses 仅 1612 个，C 端应用场景有待扩展
- Ethena 是仅次于 Pump.fun 的第二快达到 1 亿美元收入的加密货币初创公司
- ENA 代币：FDV 56 亿美元，流通市值 20 亿美元（涨至 2B），第二轮融资估值 3 亿美元对应 18 倍+ 收益
- ENA 解锁结构：2025 年 4 月开始 OTC 购买份额解锁（成本约 0.25 U）；5 月 5 日起每月线性解锁投资机构份额约 7800 万 ENA/月
- ENA 价格表现（截至 2025 年 3 月）：自高点回调约 70%，同期 BTC 回调 25%、ETH 回调 50%
- OES 托管模型：与 Copper、Ceffu、Cobo 合作，backing assets 存储在 3 方多重签名保险库或破产远程信托中，需要 2 方签名才能执行交易
- 跨协议TVL留存对比：Ethena 76.2% > Sky Lending 68.7% > AAVE V3 61.8% > EigenLayer 54.8% > Lido 54.1%
- 累计协议收入超4亿美元，几乎100%分配给USDe持有者，收益留存率仅1.55%
- 日收入$1,564（$58.8亿TVL基础上），收益效率0.000027%（Uniswap V3为0.0096%，AAVE V3为0.00080%）
- 合成美元赛道分布呈极端幂律：1个协议>$50亿（Ethena），1个$5-10亿，3个$3-5亿，24个<$3亿；13个协议TVL<$1000万，6个<$100万
- 衍生品市场日交易量$136.2亿，周$733.1亿，与Ethena TVL比率为2.3倍
- DeFi Top 50中唯一的合成美元协议（品类集中度100%），整体排名第17位（前3%）

## 竞争优势
1. **金融工程创新**：首次将 Delta-Neutral 应用于稳定币，开启了「收益稳定币」品类
2. **原生加密收益**：不需要传统金融资产就能产生美元收益
3. **可组合性强**：sUSDe 可直接嵌入 DeFi 协议作为生息抵押品
4. **RWA 储备配置**：Ethena 推出 USDtb 稳定币，将储备资产大量配置于 [[blackrock-buidl]]，是推动 BUIDL AUM 突破 $10 亿的关键因素
5. **机构采用与战略合作**：ArkStream Capital 在 Trump 当选后（2024.11）战略投资 $500 万；WLFI 累计投资 $75 万 ENA 并计划将 sUSDe 作为借贷平台抵押资产；与多个全球顶级做市商和交易所深度合作
6. **双稳定币风险对冲**：USDtb + USDe 双产品结构使协议能在不同市场环境下切换资产配置，USDe 对冲头寸可在负费率期间关闭并转入 USDtb
7. **Converge 稳定币 L1**（2025）：Ethena 推出 Converge 作为稳定币专用 L1，与 Circle Arc/Stripe Tempo/Tether Plasma 并列；通过循环贷驱动 USDe 月内破 $100 亿，证明收益驱动的用户增长远超合规驱动的机构采用

## 机构投资与合作
- **ArkStream Capital**：2024 年 11 月初（Trump 当选后）战略投资 $500 万，将其作为重仓项目
- **WLFI（World Liberty Financial）**：链上交易累计投资 $75 万 ENA 代币，宣布合作计划将 sUSDe 作为 WLFI 借贷平台抵押资产
- **StablecoinX SPAC上市**（2025年）：通过纳斯达克 SPAC 公司 TLGY Acquisition Corp. IPO 募资 2.3 亿美元，后转向布局 Ethena 生态，PIPE 融资 3.6 亿美元用于战略积累 ENA 代币。PIPE 以约 0.21 美元/ENA 购买 12.3 亿 ENA（锁定 48 个月，12 个月后解锁 25%，剩余按月解锁）。发行价 10 美元，完全稀释市值约 14.3 亿美元。
- **做市商**：与多个全球顶级做市商合作提供流动性和市场深度
- **交易所**：与 Bybit、OKX、Deribit、Gemini、Huobi 等深度合作执行对冲策略

## 风险
1. **Funding rate 依赖**：市场转熊或低杠杆环境，funding rate 可能长期为负，收益归零甚至亏损
2. **对冲失效风险**：极端行情下现货和衍生品价差可能扩大，Delta-Neutral 假设被打破
3. **监管风险**：[[genius-act]] 中「内生抵押稳定币」条款可能一刀切限制其作为支付型稳定币
4. **未经历完整周期**：USDe 诞生于牛市，在长期熊市中的韧性未经验证
5. **巨额补贴模式**：USDe 增长靠 ENA 代币补贴驱动。Season 1 花 $6.5 亿换 $10 亿增长。一旦补贴停止，USDe 规模可能崩塌
6. **ENA 通胀**：未来 6 个月面临现流通量 85.4% 的通胀压力
7. **货币vs金融产品困境**：USDe 的 57% 已被质押到自身协议（sUSDe），纯粹作为收益金融产品持有，远非作为交换媒介的货币。与 USDT/USDC 的交易媒介定位存在本质差异

## 我的判断
USDe 在技术上有本质进步（Delta-Neutral vs UST 补贴式），但商业模式上暴露了相同的脆弱性：用代币印钞换增长。10 月协议收入仅 $1063 万，远不足以覆盖营销支出。与 [[tether]]/[[circle]] 的零 CAC 获客相比，Ethena 的获客成本极高。与 [[makerdao]] 的 $2.74 亿年收入相比，尚未证明盈利能力。

牛市逻辑成立（funding rate 高 → APY 高 → USDe 增长 → ENA 涨 → 更多补贴 → 循环），熊市逻辑脆弱。能否活到下一个周期是关键考验。

## 相关实体
- [[tether]] / [[circle]] — 传统稳定币对比
- [[makerdao]] — DAI 是另一种加密原生稳定币路径（待创建）
- [[stablecoinx]] — 通过 SPAC 上市的 ENA 代币积累工具，PIPE 融资 3.6 亿美元

## 来源
- [[来源_2025-05_Ethena_链上金融_PANews]]
- [[来源_2025-06_Ethena_四大增长领域_Telegram_Converge_PANews]]
- [[来源_2025-07-13_稳定币发展简史]]
- [[来源_2024-11-01_重新审视Ethena]]
- [[来源_2025-08_CEX永续合约交易规则详解]]（资金费率机制）
- [[来源_2023-08_Web3国债RWA_业务模式_去中心化稳定币_MintVentures]] — Ethena在"协议对冲风险的去中心化储备协议"谱系中的定位/Dragonfly领投$600万/Bybit+OKX+Deribit+Gemini+Huobi参投/Synthetix合作计划
- [[来源_2024-12_ArkStream_Ethena投资逻辑_深潮TechFlow]] — ArkStream $500万战略投资/USDtb与Securitize联合开发机制/WLFI $75万ENA投资+sUSDe抵押品计划/稳定币三维评估框架/2025年去中心化稳定币10%份额预测
- [[来源_2024-11_USDe代币经济学_ENA估值情景分析_PANews]] — USDe P&L拆解公式（年化$6200万/每$1 USDe=$0.04利润）/三种情景估值（$2.25基本→$5乐观）/催化剂清单（Deribit保证金/Aave抵押品/协议收入分配治理）
- [[来源_2024-09_RWA六大核心资产_OKX_Ventures_深潮TechFlow]] — 2024年8月数据：sUSDe TVL ~$17亿/市值增长978%自年初/APY 12.2%/Delta Hedge在牛市环境的策略优势
- [[来源_2024-11_稳定币格局_散户参与_万亿赛道_BlockBeats]] — USDe占稳定币市值1.67%/$30亿/57%已质押为sUSDe（金融产品而非货币）/牛市中funding rate表现良好但依赖CEX长期可行性存疑/黑天鹅事件与熊市持续低funding rate风险
- [[来源_2025-07-13_稳定币四大未来方向]] — YBS（含Ethena和Sky）市值过去一年增长6倍至$60亿；三种主流收益策略（短期国债/Delta中性/货币市场）；YBS每日创造约$150万收益
- [[来源_2024-08_二级OTC市场_买方市场_锁定代币_STIX]] — STIX创始人Taran将Ethena列为仍处"危险价格"的资产，二级OTC买方市场仍占优势，暗示锁仓代币可能以高折价场外交易
- [[来源_2024-10_Delta中性_收益套利_永续合约_MarsBit]] — 从策略原理层面解释Ethena商业模式的底层逻辑：收益套利 = Delta中性对冲 + 多空两端收益；多头端质押ETH生息 + 空头端收取资金费率；计算器展示杠杆对APY和强平价格的权衡
- [[来源_2025-08_稳定币公链_分销_收益_Arc_Tempo_深潮TechFlow]] — Converge 作为 Ethena 稳定币 L1 布局，与 Circle Arc/Stripe Tempo/Tether Plasma 共同构成稳定币专用 L1 赛道；USDe 月内发行量破 $100 亿美元（循环贷策略）；Genius Act 禁止付息但生息稳定币在规则边界外找到爆发路径
- [[来源_2025-06_链上金融_RWA_RedStone]] — USDtb 作为 USDe 储备资产的风险管理机制详解、$15 亿规模和 90% BUIDL 储备数据、USDtb 与 Pendle PT/YT 市场的联动
- [[来源_2025-05_稳定币分类_脱锚风险_Cork]] — 详述USDe因Bybit $14.5亿黑客事件脱锚至$0.97的过程（2025年2月），及Ethena动用$19亿稳定币储备缓冲处理$1.2亿赎回无碍的恢复表现；归类USDe为"Alternative"稳定币（衍生品+债券对冲机制），与法币抵押型/加密抵押型/算法型并列分析
- [[来源_2025-08_美国政策_加密利好_BlockBeats]] — Ethena与Aave新推出的Liquid Leverage产品上线一周吸引超15亿美元资金流入；Ethena-Pendle-Aave构成"泡沫TVL铁三角"（1美元通过循环贷变成3个协议共30美元TVL）；Pendle "Project Boros"将Ethena收益交易拓展至永续合约资金费率
- [[来源_2025-08_币股_机构趋势_深潮TechFlow]] — 补充 StablecoinX SPAC 上市信息（PIPE 3.6 亿美元/12.3 亿 ENA/48 个月锁仓），以及 ENA 代币价格从 0.25 美元涨至 0.78 美元（+212%）和 Ethena 基金会 8,300 万 ENA 回购信息
- [[来源_2025-07_Ethena_合成美元_市场份额_A1Research_深潮TechFlow]] — A1 Research数据驱动报告：68.1%-70.6%市场份额/8.23波动率/87.25%压力留存/3-6周恢复速度/$4亿+累计收入全部分配/收益效率0.000027%/幂律赛道分布/衍生品结构性支撑
- [[来源_2025-10_Flying_Tulip_全栈交易所_永续看跌期权]] — ftUSD 作为对比案例：多策略链上分散 vs USDe 的永续基差单引擎，ftUSD 与 USDe 的比较分析
- [[来源_2025-03_Ethena_合成美元_深潮TechFlow]] — 团队与融资细节（Guy Young/Luna崩塌后创业、$119.5M三轮融资、三大领域投资人网络）、iUSDe产品机制、OES多重签名模型、Bybit黑客冲击数据、ENA解锁时间表（5月5日7800万+/月、OTC成本0.25U）、生态项目Ethereal与Derive
- [[来源_2025-06_收益型稳定币_总清单_StacyMuur]] — 提供 sUSDE 市场定位全景（市值 $26.6-43 亿/YPO $2.86 亿/YBS 赛道 77% 双寡头格局/101.31% 抵押率），Hyperliquid 和 TON 扩展、Telegram 覆盖 10 亿+用户的集成策略
- [[来源_2025-03_稳定币_耕作机会_HFA]] — Ethereal perp DEX 的 Season Zero 积分活动详情：USDe 存款者可积累 Ethereal 积分和 30x Ethena Rewards，预计 APR 约 15-20%；Ethereal 旨在作为 Ethena 团队对冲多头仓位的场所
