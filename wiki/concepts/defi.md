---
type: concept
created: 2026-06-28
updated: 2026-07-02
tags: [defi, lending, dex, yield]
aliases: [DeFi, 去中心化金融]
---

# DeFi（去中心化金融）

## 一句话定义
构建在区块链上的开放式金融服务体系，不依赖传统金融中介（银行/券商/保险），通过智能合约实现借贷、交易、理财、保险等金融功能。

## 核心赛道

| 赛道 | 代表项目 | 说明 |
|------|---------|------|
| **借贷** | [[makerdao]], [[aave]], Compound | 超额抵押借贷 |
| **借贷（BNB Chain）** | [[lista-dao]] | 2025 年 TVL 超 12 亿美元，较年初 +900%，BNB Chain 第二大借贷市场 |
| **DEX** | [[uniswap]], Curve, [[aerodrome]], [[thena]], [[pancakeswap]], [[shadow-exchange]] | 自动做市商（AMM）；PancakeSwap 2025 年中 DEX 市占率 74.6%，30 天收入 6.6 亿美元；Aerodrome/Thena 为 ve(3,3) 模型代表；Shadow Exchange 为 Sonic 链 x(3,3) 龙头，总交易量突破 100 亿美元，全球 DeFi 收入前十 |
| **收益聚合** | Yearn | 自动化收益策略 |
| **借贷优化** | [[morpho]] | P2P 利率匹配 + 无许可借贷基础层 |
| **衍生品** | [[dydx]], [[gmx]], [[hyperliquid]], [[synfutures]] | 链上永续合约，SynFutures Oyster AMM 最高 26,666x 资金效率 |
| **流动性质押** | [[lido]], Rocket Pool | LSD/LSDFi |
| **预测市场** | Polymarket | 链上事件投注 |

## 关键特征
- **无需许可**：任何人可接入，无需 KYC
- **可组合性**：不同协议如乐高积木可组合
- **透明度**：链上公开，所有交易可审计
- **7×24 运行**：无休市时间

## 加密抵押贷款市场规模（2025 Q1）
Galaxy Research 追踪数据显示，Q1 2025 末加密抵押贷款总规模为 $39.07B（含 CeFi、DeFi 和 CDP 稳定币三通道），环比下降 4.88%，为自 Q3 2023 以来首次季度下降：

- **CeFi 贷款**（[[tether]]、[[ledn]]、[[two-prime]] 等）：$13.51B，环比 +9.24%。Tether 以 $8.825B 和 65.34% 市占率绝对主导，前三强合计控制 78.79% 市场
- **DeFi 借贷**（[[aave]]、Compound、[[kamino]] 等）：$17.7B，环比 -21.14%，完全驱动整体下降。但 3 月 31 日至 5 月 26 日出现强劲反弹，存款增 $15.08B（+38.52%），借款增 $5.62B（+31.14%），Pendle 代币上线 Aave 是主要催化剂
- **CDP 稳定币抵押部分**：环比 +25.56% 至约 $7.86B

链上稳定币借贷利率从年初 11.59% 降至 5 月 26 日的 5%（-56.86%），OTC 利率同步下降。Ethereum 在 DeFi 借贷存款中占 80.97% 绝对主导（5 月 26 日）。

来源：[[来源_2025-06_加密货币杠杆_Galaxy]]

## DeFi 协议流动性获取四策略（成本从低→高）
| 策略 | 成本 | 收益 | 风险 | 代表案例 |
|------|:--:|------|------|------|
| 发币预期（积分/空投）| ★ | 最高ROI | 发币后流动性流失 | 多数未发币项目 |
| 项目合作（资源互换）| ★★ | 依赖渠道 | 合作方风险 | Merlin+Solv |
| 收益激励（流动性挖矿）| ★★★ | 快速提升TVL | 通胀/短期主义 | Compound引领 |
| 创造新资产（LST/LRT）| ★★★★ | 吸引增量资金 | 层层套娃风险 | Lido stETH/EigenLayer |

核心洞见：获取流动性≠留住流动性。发币预期获取的流动性最便宜也最短暂（空投落地后95%离开）。真正的挑战是从"预期经济"切换到"实用经济"。

## DeFi 与稳定币的关系
稳定币（[[stablecoins]]）是 DeFi 的基础货币和计价单位。没有稳定币就没有繁荣的 DeFi 借贷和交易市场。DeFi 也是稳定币最大的使用场景之一。

**DeFi 协议稳定币的四大支点**（来源 [[来源_2025-09_DeFi稳定币_支点_USDH_HyperLiquid]]）：2025 年 HyperLiquid USDH 竞标事件揭示，DeFi 协议原生稳定币的支点已从「如何发行」转向「如何让它被高频交易和使用」。关键成功要素包括：内生应用场景（Aave 借贷/Curve 交易/HyperLiquid 衍生品）、深度流动性池、DeFi 协议可组合性、可持续收益。

**稳定币贡献超过三分之一 DeFi 协议收入**（Keyrock 2025.06）：自2021年以来，稳定币在 DeFi 协议收入中的占比在 ~3.0% 到 ~35.8% 之间波动，2024年6月压缩至 ~4.7% 后大幅反弹至 2025年中期 ~30.8%。四大驱动因素：链上稳定币供给增长（$206b 新增/77% 流入链上）、市场情绪（牛市同步增长）、市场波动率（与 BTC 波动率高度相关）、稳定币借贷利率。跨链差异显著：以太坊主网 $127b AUM vs Solana $13b。DEX 赛道和借贷赛道呈现不同的结构性趋势——DEX 稳定币收入回升，Aave 稳定币收入占比下降。

## Aave V3 架构创新：多链借贷与稳定币战略（2022）
2022 年，Aave 推出 V3 版本，在 DeFi 借贷领域引入多项架构创新（来源：[[来源_2022-07_Aave_V3_多链扩张_GHO_Web3Caff]]）：

### 双段斜度利率模型
Aave 的利率模型是 DeFi 借贷利率设计的经典案例，采用分段线性函数：
- 当资产利用率 U < 最优利用率 UU：低斜度线性上升（R0 → R0+R1），鼓励借贷
- 当 U > UU：高斜度急剧上升（R0+R1 → R0+R1+R2），R2 远大于 R1，激励偿还和新增供应
- 波动性高的代币：UU 定在 45%-60%，R2 可达 300%（避免流动性枯竭）
- 稳定币：UU 较高（~80%+），R2 较小（~60%）
- 参数通过 Aave DAO 治理调整

### 门户（Portal）— 跨链借贷
- 通过 Aave 治理白名单的跨链桥协议，在一条链上铸造 aTokens 并在另一条链上销毁
- 实现跨链共享流动性：如 Arbitrum 上存款 → Polygon 上借款
- 截至 2022 年 7 月功能已部署但未投入使用（尚未集成白名单桥）

### 隔离市场（Isolated Market）
- 应对 Euler、Kashi 等无许可借贷池对长尾资产的竞争
- 新抵押品作为"隔离资产"只能单一抵押品使用
- 债务上限由 DAO 严格控制，仅可借入治理许可的稳定币
- 机制：允许快速上市新资产同时隔离风险

### 高效模式（eMode）
- 同类资产（如稳定币类、ETH 类）LTV 最高 98%
- 例：存入 USDC 以 eMode 借出 EURS = 链上外汇交易
- 为 GHO 稳定币构建天然低滑点兑换途径

### GHO 稳定币
- 2022 年 7 月 7 日提案的去中心化稳定币
- 核心创新：**促进者（Facilitator）**机制 — 经治理批准的协议可在存储桶上限内无需信任铸造/销毁 GHO
- 全部利息收入归 AaveDAO 国库（区别于 Aave 常规借贷的备用金分配）
- stkAAVE 持有者享受借款利率折扣
- 与 Aave V3 高度协同：eMode+门户+促进者 = 完整产品矩阵
- 潜在风险：促进者可能导致全局抵押不足、DAO 利率治理的激励扭曲

## 核心概念速查
- **清算（Liquidation）**：超额抵押借贷中抵押品价值跌破清算线时触发强制平仓。大量集中清算会形成"砸盘"效应，引发连锁反应直至市场稳定。可通过补仓或提前还款降低风险。常用监测工具：Parsec、DeFiLlama、欧科云链、Dune
- **无常损失（Impermanent Loss）**：向 AMM 流动池注入流动性后因代币价格波动产生的账面损失。非永久性——价格恢复后损失消失，但提前赎回则将账面损失转化为永久亏损。Bancor 研究显示超过 50% 的 Uniswap V3 LP 收入无法覆盖无常损失
- **价值捕获（Value Capture）**：项目方从用户交易行为中获取商业利润的手段。存在两种策略：**最大化价值捕获**（高手续费）短期内利润最大但驱使用户逃离（如以太坊高 Gas 费促使 BNB Chain/Solana 崛起）；**最小化价值捕获**（维持运营即可）保留用户价值并吸引新用户（如币安通过销毁 BNB+扩展期货/保证金/现货/公链生态构建良性循环）。价值捕获健康度通常体现在币价上
- **资金效率（Capital Efficiency）**：质押借贷或提供流动性时资金的使用效果，不同于资金利用率（侧重充分性），资金效率侧重回报率。提升方式包括：提高资本利用率（Uniswap V3 集中流动性）和提高资本流动性（Liquity 110% 低抵押率、闪电贷）
- **TVL（Total Value Locked）**：DeFi 项目中用户存储或抵押的数字资产总价值。高 TVL 通常意味着更好的安全性、可用性、流动性和传播度；低 TVL 高 APY 需要警惕 Rug pull 风险
- **APY vs APR**：APR 不考虑复利（年化=日利率*天数），APY 考虑复利（年化=(1+日利率)^(天数-1)）。高 APY 可能源于短期高日利率快速稀释或收益代币本身是波动剧烈的"垃圾币"，不可盲目追求

## 价值捕获框架
来源 [[来源_2022-09_DeFi重要词汇_清算_无常损失_价值捕获]] 提供了一个简洁的分析框架：
- **价值捕获最大化**：从每笔交易中获取最大价值，短期利润最大但削弱用户购买力，导致用户逃离
- **价值捕获最小化**（仍有利润）：仅获取维持运营所需价值，保留用户价值并吸引新用户
- 良性价值捕获案例：币安通过低手续费吸引用户增长→扩大交易量→获取更多手续费→销毁 BNB 提升代币价值→扩展生态建设形成正向飞轮
- DeFi/DEX 通过开放性（无许可交易、上架、注入流动性）获得更多价值捕获机会

## 相关概念
- [[stablecoins]] — DeFi 的基础货币层
- [[rwa]] — RWA 正在成为 DeFi 的抵押品和收益来源
- [[tokenomics]] — 代币经济模型是 DeFi 协议协调 LP 和治理代币持有者利益的核心机制
- [[layer2]] — L2 降低 Gas 费，推动 DeFi 大规模采用

## Consumer DeFi 落地（Delphi 2025）
加密卡四代演化：(Gen0)托管预付法币→(Gen1)托管预付加密→(Gen2)非托管预付→(Gen3)自托管智能合约钱包卡(Gnosis Pay/Fuse/Metamask/Argent)→(Gen4)主钱包直接消费。Coinbase 通过 Base 链上迁移构建"加密银行"而非"加密卡"——ApplePay入金+Bridge直接存款+USDC 5%收益。

端到端 Crypto 财务栈已可用：PayPal/Coinbase锚定银行侧+链上收益+加密卡消费。但 UX 仍然笨拙。

## DeFi 收益范式转变（2022→2024）
**2022 Anchor Ponzi**：19.5% "无风险" APR = Anchor Yield Reserve 补贴 → 储备耗尽 → UST 脱锚 → LUNA 崩溃
**2024 结构性收益**：Ethena sUSDe = stETH 质押奖励 + 永续合约资金费率（delta-neutral/10-15%历史收益）。收益不再由代币排放补贴 → 利率、验证者奖励、基差交易

**可组合性三层嵌套**：Aave（借 USDC @ 5-12%）→ Pendle（PT 固定收益 / YT 投机 / LP Pool）→ Ethena（sUSDe delta-neutral 底层）

## Hyperliquid 流动性基础设施框架（Decentralised.co 2025.06）
Decentralised.co 将 Hyperliquid 定位为 DeFi 流动性碎片化的解决方案——通过统一的订单簿使每个应用共享超过 20 亿美元的深度流动性。关键创新包括：
- **Builder codes**：无需许可的费用分享机制，使每个新应用都为整个生态增加流动性而非分散它，类似"购物中心增加新店铺"的正和博弈
- **清算成本革命**：10 万美元清算在以太坊上需约 1500 美元（含 MEV），在 Hyperliquid 上低于 5 美元，使 LTV 从 75% 提升至 90%+
- **电力公共电网类比**：过去每座工厂自建发电厂，公共电网出现后工厂只需"买电"——builder codes 让开发者无需操心流动性引导

来源：[[来源_2025-06_Hyperliquid_生态系统_流动性_Decentralised]]

## Hyperliquid：公平上币革命
Perp DEX 龙头，无 VC/无私募/无 CEX 分配。荷兰式拍卖上币机制（每 31h/全年最多 282 现货/拍卖费回馈社区）。HYPE 空投 $6.2 亿（平均 $28.5K/最高 $956 万），3 天涨 500%。vs CEX 暗箱操作（币安要求 15% 代币供应/$50-100M 上币费传言）

## IC0 平台复兴
反 VC 浪潮下的新融资路径：Echo（精英天使联盟/$66.6M 总融资）、Legion（KOL 信誉评分/Fuel 27 倍）、Buidlpad（大众 IC0/Solayer $57.3M 公售/545% 超额）

## Dragonfly Haseeb 数据反驳
初始流通 13% = 历史正常水平（SOL 48%/AVAX 42%/BNB 50% 团队+投资者分配）。4 月代币同步下跌=中东地缘冲击（非 VC 倾销）。AVAX/SOL/NEAR 上市 2 月分别跌 24%/35%/47%→历史先例。VC 也不希望高 FDV：DPI 考核（不能吃账面浮盈）、LP 视之为虚假资产类别

## DeFi协议估值横截面（2024年8月 BlockBeats）
以P/E市盈率系统性评估13个DeFi协议，核心发现：
- **Aave**表现最强：PE~22，GMV逼近上轮牛市，Base生态增长显著
- **MakerDAO**收入之王：Q2创$85M历史新高，RWA占收入绝大部分，已更名为Sky
- **Uniswap/Lido/Jupiter**共同困境：赚钱但不给代币持有者分钱，费用开关是最大变量
- **Curve/dYdX/Pendle**衰退信号：Curve跌至第8名，dYdX真实交易量<$30M，Pendle TVL从$6.6B腰斩
- 核心矛盾：DeFi的生意是否和代币有关？治理代币≠股权，"卖币"是唯一商业模式

## DeFi 聚合理论：Web2 战略框架的链上映射

DeFi 竞争格局可透过 Web2 经典聚合理论（Damodaran "控制货架" + Ben Thompson "聚合理论"）进行结构化分析（来源：Decentralised.co 2025.08）。

该理论框架的早期版本（Decentralised.co Joel John, 2022.03）首次提出：区块链降低验证和信任成本，使 Web3 聚合器能比 Web2 竞争对手更高效地验证供给方合法性。早期案例包括 Gem（跨8个NFT市场聚合，$4亿交易量）、Instadapp（管理$50亿资产）、Zerion（交互60种协议/5万种资产）。参见 [[来源_2022-03_聚合理论_Web3_去中心化]]。

### 聚合器成功三条件
1. 直接连接并拥有用户关系
2. 供应方要么独特，要么可替换到不会被单一供应商绑架
3. 增加供应的边际成本接近零

### DeFi 聚合的三级跃升
| 层级 | 描述 | DeFi 案例 |
|------|------|-----------|
| **价格发现** | 告知用户最佳交易在哪里 | 1inch、Matcha、DeFiLlama 兑换 |
| **执行** | 不再导向别处，代为操作 | Aave 借贷（流动性已在合约中） |
| **分发控制** | 成为入口，供应方无法绕过你触达用户 | Jupiter（嵌入 Phantom/Drift，占 Solana 近半计算） |

### Jupiter vs Hyperliquid：聚合器 vs 供应商
两大范式形成哲学对立：
- **Jupiter**（聚合器）：流动性追随用户界面 → 构建入口，控制分发
- **Hyperliquid**（供应商）：流动性即界面 → 构建终点，将流动性作为服务提供

核心问题：赢家不仅是最先到达者，更是他人无法舍弃者。若 L2 不掌控分发，当其上的应用掌控时，价值流向何方？

### 流动性护城河的双刃剑
流动性是 DeFi 中最难撼动的护城河，但激励足够强时流动性会迅速转移（2020 年 Sushiswap 通过流动性挖矿在几天内从 Uniswap 抽走超 10 亿美元）。只有当离开比留下更痛苦时，流动性才会稳固。

## DeFi 隐形化与机构采用（2025 H1，Artemis/Vaults.fyi 报告）

2025年上半年DeFi收益格局经历深刻变革，核心趋势是DeFi从"投机狂热"转向"隐形基础设施"：

### 机构采用量化数据
- **借贷平台TVL**：Aave、Spark和Morpho等抵押借贷平台截至2025年6月TVL超500亿美元
- **机构级借贷利率**：USDC的30天借贷收益率在4%-9%之间，处于或高于同期3个月美国国债约4.3%的收益率水平——说明利差驱动的机构配置逻辑成立
- **加密原生资管崛起**：Re7、Gauntlet和Steakhouse Financial等公司链上资本基础从2025年1月约10亿美元增长至6月超40亿美元（4个月4倍）。在Morpho协议中，这些资管公司的托管TVL接近20亿美元。格局：Gauntlet 31%、Steakhouse Financial 27%、Re7 23%、MEV Capital 15.4%
- **代币化国债增长**：链上美国国债从2025年初40亿美元增长至6月70多亿美元，半年增长75%

### "隐形DeFi"范式
DeFi收益正嵌入成为用户无感知的后端基础设施：
- **金融科技整合**：Coinbase提供USDC存款收益、PayPal PYUSD约3.7%年利率、Bitget钱包集成Aave
- **嵌入式借贷**：Coinbase与Morpho的链上借贷集成（截至2025年6月已发放超3亿美元）允许用户以BTC抵押借贷，"DeFi Mullet"模式使平台获得发放费和利差收入
- **收益支持借记卡**：稳定币消费已增长至每周100万美元以上
- **M0基础设施**：M0使平台能推出内置收益的定制稳定币而不造成流动性碎片化，其供应量接近3亿美元

### 用户行为转变
- 收益率并非唯一驱动力：市场波动期资本流向"蓝筹"借贷协议和RWA金库，即便收益率低于高风险选项
- 协议忠诚度：Aave用户偏爱原生金库，Ethena持有者数量在收益率降至历史低点时仍相对稳定
- 自动化和无Gas体验（账户抽象ERC-4337）正成为提升留存率的关键

### 跨链收益率差异
截至2025年6月：以太坊平均借贷收益率约4.8%，Polygon为5.6%。资本在APY差异驱动下机会主义流动，跨链聚合器自动化路由基础设施正在快速改进。

来源：[[来源_2025-06_链上收益_DeFi隐形_机构入场_PANews]]

## TG Bot：新兴链上交易前端与PBS系统风险
Telegram交易机器人（TG Bot）已成为以太坊重要的交易发起者，截至2024年6月贡献9.4%的交易量，来自5.3%的钱包。Banana Gun是该赛道龙头，通过区块0狙击捆绑包建立市场份额优势（7%→88%+）。然而，Banana Gun与[[titan-builder]]的独占订单流（EOF）协议暴露了PBS系统的结构性漏洞：交易发起者可私下将用户贿赂独家路由给单一构建者，截留本应流向验证者的费用，形成"去中心化幻觉"。参见 [[banana-gun]] 和 [[来源_2024-08_Banana_Gun_EOF_Titan_PBS_深潮TechFlow]]。

## 以太坊 DeFi 生态 Gas 消耗分布（2024年8月快照）
Ethereum 30日 Gas 费 $99.89M，DeFi 占整体 Gas 消耗 60%——是生态的绝对核心：
- **DEX 赛道**: 占 DeFi 超 40%、生态超 25%。Uniswap 30d 收入 $54.23M，贡献燃烧 $8.15M（生态占比 17.3%）——交易对以 ETH/稳定币为主，Meme 极低，生态健康。1inch 贡献 $1.21M（生态 3%）
- **稳定币转账**: 近一月燃烧 $4.01M（总燃烧 8.5%），主要由 USDT/USDC 主导——反映链上资金需求和活跃度
- **Dex Trading Bot**: Banana Gun $1.73M + Maestro $1.51M = 生态 6.9%，头部两项目占赛道 90%+ 份额。此赛道由 Meme 币交易驱动，但占比健康（未失控）
- **钱包**: MetaMask 30d 贡献 $2.91M Gas（生态 ~2%），反映真实用户活跃度
- 整体判断: 以太坊 DeFi 生态分布合理——DEX 占比最高但仅为总生态的 25%，无单一赛道过度集中

来源：[[来源_2024-08_三大公链收入可持续性_Ethereum_Solana_Tron_odaily]]

## Sui DeFi 生态（2025年2月数据）
Sui DeFi 总 TVL 达 12.6 亿美元，以高收益激励驱动稳定币流动性，形成了独特的 DeFi 格局：

| 协议 | 类型 | TVL / 关键数据 |
|------|------|:---:|
| **Suilend** | 借贷 | $3.875 亿（Sui最大借贷协议），AUSD借贷APY ~11.19% |
| **Cetus** | DEX | Sui主导DEX，USDY LP APY ~46.92%，86.55% USDY锁仓于此 |
| **NAVI** | 一站式DeFi | 借贷+聚合器+流动性质押，$714M TVL / 80万+用户 |

**核心特征**：稳定币在不同协议间形成明显的用途分化——AUSD集中于借贷（Suilend 75.80%），USDY集中于高收益LP（Cetus 86.55%），USDC分布较均匀。持有者高度集中反映当前 Sui DeFi 流动性主要由少数收益追逐者的 DeFi 激励驱动，零售分布仍不充分。

来源: [[来源_2025-02_Sui流动性激增_稳定币_深潮TechFlow]]

## DeFi 风险溢价分层框架（Treehouse 2022）
2022 年 7 月，Treehouse Finance 提出了 DeFi 投资的系统性风险溢价分层框架，强调任何 DeFi 回报本质上是承担特定风险溢价的补偿：

| 层级 | 风险类型 | 核心内容 |
|------|---------|---------|
| **L0（第 0 层）** | 基础设施风险 | 互联网基础设施（如 Cloudflare 故障）、DeFi 基础设施（稳定币脱钩、钱包服务中断）——极低概率但可能毁灭性影响 |
| **L1（第 1 层）** | 链生态风险 | 链基础设施故障（削减、分叉、长时间停机）、早期激励参与（如 AVAX Rush）——承担此层可获得有意义的回报 |
| **L2（第 2 层）** | 协议风险 | 智能合约漏洞、预言机故障、开发者信用风险（拉地毯）、黑客攻击、代币经济设计缺陷、桥风险、流动性质押平价损失 |
| **市场风险** | 可交易因子 | 无风险利率选择（美债 vs BTC/ETH 质押率 vs 对冲后剩余）、现货波动、资金费率、借贷风险、无常损失、非线性波动风险 |

核心洞见：即使所谓的"市场中性"策略（如套利）也只是"市场风险中性"，仍然承担操作风险和信用风险。理解具体承担了哪种风险溢价，是评估 DeFi 投资是否合理的先决条件。

来源：[[来源_2022-07_DeFi风险溢价_Treehouse]]

### Treehouse 固定收益协议层（2025 TGE 转型）
2025 年 7 月，Treehouse 从 DeFi 分析工具转型为去中心化固定收益协议，启动 TGE（Gaia），推出两大核心产品：

**tAssets** — 新型流动性质押代币，通过借贷与质押利率间的利差套利提供高于普通 LSD 的收益（tETH 约 3.5-5% APY），集成 Aave/Balancer/Compound/Curve/Pendle/Silo，已上线以太坊/Arbitrum/Mantle。

**DOR（去中心化利率共识机制）** — 类传统金融 LIBOR/SOFR 的链上基准利率框架。专家组（Panelists：质押商/做市商/交易所）每日提交利率预测，系统整合为共识利率，首个基准利率为 TESR（Treehouse 以太坊质押利率）。

该模式是 DeFi 固定收益赛道的新探索方向——通过标准化链上利率和可组合的收益资产弥补 DeFi 固定收益基础设施空白。挑战在于链上利率标准化 PMF 尚未验证。

来源：[[来源_2025-07_Treehouse_TGE_TREE空投_深潮TechFlow]]

## 链上借贷演进时间线（2017-2025）

链上借贷经历了从超额抵押到低抵押探索的完整演进路径，关键里程碑如下：

| 阶段 | 时间 | 事件 | 意义 |
|------|------|------|------|
| **诞生期** | 2017-18 | MakerDAO 推出 CDP 模型（锁定 ETH 铸 DAI）+ Genesis 等托管型放贷 | 并行实验链上/链下借贷两种模式 |
| **算法市场** | 2018 | Compound 引入算法货币市场，浮动利率曲线 | 消除双边撮合，催生收益农耕时代 |
| **爆发增长** | 2018-19 | 12 个月内总供应从 <$1 亿 → >$60 亿 | 超额抵押借贷获得 PMF |
| **Aave 升级** | 2020 年初 | 推出 aToken（收益可组合存款凭证）+ 闪电贷（单笔交易内无抵押借贷） | 借贷乐高化 |
| **压力测试** | 2020.3 | COVID 崩盘，Maker/Compound/Aave 承受 50% 日内跌幅，存款人无损失 | 证明链上自动清算优于人工经纪商 |
| **CeFi 崩溃** | 2022 年中 | Celsius/Voyager/BlockFi（$480 亿峰值贷款）因期限错配崩盘 | DeFi 透明储备使市场实时重新定价风险 |
| **DeFi 超越** | 2024 Q4 | DeFi 占复苏的 $300 亿贷款账簿的 63% | 首次超越 CeFi |
| **LST 时代** | 2025.3 | LSTs 支持 Aave 上 >$135 亿借款，2/3 为循环杠杆 | 自偿还抵押品（质押收益覆盖部分借款成本） |
| **里程碑** | 2025.4 | 链上货币市场活跃贷款 ~$200 亿，首次全面超越 CeFi | On-chain 成为主导信贷渠道 |
| **低抵押实验** | 2024-25 | Maple（1600% TVL 增长/$5.62 亿）、TrueFi（$17 亿贷款/1-4%违约）、Goldfinch（20+市场/$1.1 亿）、Wildcat（纯链上零抵押实验） | 从超额抵押向信用借贷的多元探索 |

### 低抵押借贷四种模式

1. **许可制资金池**（Maple、TrueFi、Clearpool）：KYC 借款人 + 链下法律协议 + 委托代表承销，代币化贷款供任何人提供流动性
2. **纯链上声誉模型**（Wildcat）：信用合约完全在链上，出借方自行决定信任哪些假名身份，但执行权薄弱
3. **混合模型**（Goldfinch）：法律追索 + 自动化清算结合，社区驱动尽职调查
4. **RWA 桥梁**（Centrifuge、Huma）：链下资产（国债、应收账款）代币化后作为 DeFi 抵押品

核心矛盾：DeFi 借贷已经证明超额抵押模式在极端市场条件下的韧性，但真正的资本效率需要低抵押/无抵押信用创造——而这需要链上身份、外部保险和链下执行机制的成熟。

来源：[[来源_2025-04_链上借贷_低抵押贷款_Reflexivity]]

## 2025 Q2 DeFi 市场：TVL 回升但融资遇冷

DappRadar 2025 Q2 报告显示 DeFi 处于"量升质降"的分化状态：

- **TVL 突破 2000 亿美元**（+28% QoQ），受益于以太坊 36% 的价格反弹和比特币 30% 的涨幅
- **以太坊占 DeFi TVL 62%** 绝对龙头，Solana 以 10% 居次
- **Hyperliquid TVL 暴增 547%**，成为本季度增速最快的链
- **融资骤降 50%**：DeFi 领域 Q2 仅融资 4.83 亿美元，2025 上半年总计 14 亿美元，反映了资本配置趋于成熟和谨慎
- **DeFi 活跃钱包下降 33%**，市场份额被 AI 和 Social 板块蚕食

来源：[[来源_2025-07_2025Q2_DApp市场报告_AI代理_RWA_NFT_深潮TechFlow]]

## 代币化股票作为DeFi收益新来源的路径展望

2025年5月，《去监管政策推动美股RWA叙事》提出代币化股票与DeFi收益的结合路径：

- 高股息蓝筹股票（成熟行业、稳定现金流、低波动性、抗经济周期）可作为收益型DeFi协议（如Ethena配置BUIDL模式）的真实收益来源
- 随着链上原生真实收益场景收益率下降，收益型DeFi协议需要不断寻找新的真实收益场景以维持竞争力
- 代币化股票的可组合性使链上借贷等场景成为可能，但受限于两点：监管政策推进速度（股币同权问题未解决）和非美国用户稳定币获取成本（OTC溢价0.3%~1%）

此方向目前仅是推测性框架，尚无实际产品落地验证。

来源：[[来源_2025-05_去监管_美股RWA_代币化股票_深潮TechFlow]]

## 来源
- [[来源_2025-07_Solana_H1_盈利增长_Helius]] — Solana DeFi全景：TVL约80-90亿美元（第二，18% QoQ增长）、Jupiter Perps日均10亿美元交易量（79.2%市场份额）、Kamino以16亿美元TVL（24%份额）领先、PumpSwap上线后取代Raydium成为日交易量最高DEX。2025年前5个月Solana DEX交易量超8900亿美元（已达2024年全年90.7%）
- [[来源_2023-07_跨链DeFi_Chainlink_CCIP]] — 跨链DeFi范式：多链→跨链的演进路径、四大痛点（流动性割裂/资产孤立/资金效率低/无法扩展）、四种跨链DeFi应用类型（借贷/DEX/质押/收益聚合）
- [[来源_2023-10_DeFi发展史_Uniswap之前_BlockBeats]] — DeFi 2013-2018 完整发展谱系：从 Bitcoin Counterparty 到 EtherDelta/Bancor/MakerDAO/Compound/dYdX 的演进，Vitalik 2016 年 Reddit 帖子奠定 AMM 理论基础
- [[来源_2024-10_World-Liberty-Financial_特朗普OEM_WLFI_金色财经]] — World Liberty Financial：政治品牌+DeFi OEM 案例——特朗普出品牌（75% 净收入分成），不知名团队操盘（Dough Finance $2M 黑客前科），在 Scroll 上部署 Aave V3 实例
- [[来源_2025-02_WLFI_深度分析_特朗普政治赋能_BitMart]] — BitMart研究院深度分析：WLFI持仓分类表、63.8% ETH占比、Macro Strategy宣布、解质押1.94万stETH用于流动性管理，批判性指出WLFI是政治募资工具而非真DeFi产品
- [[来源_2025-05_去监管_美股RWA_代币化股票_深潮TechFlow]] — 提出高股息代币化股票作为收益型DeFi协议真实收益来源的推测框架，以及稳定币采用度对代币化股票需求的约束条件
- [[来源_2024-12_Delphi_DeFi_2025_Consumer_DeFi与加密银行卡]]
- [[来源_2024-12_Opyn_DeFi碎片化_借贷市场X收益生成协议]]
- [[来源_2024-12_Ethena_DeFi定时炸弹还是救世主_PANews]] — Ethena系统性风险+AAVETHENA协同
- [[来源_2024-12_HyperLiquid_vs_Ethena_成长战略对比]] — DeFi增长范式+护城河对比
- [[来源_2024-02_ETH再质押_36亿美元套娃年来了_BlockBeats]] — 6大ETH再质押协议+LRT套娃
- [[来源_2022_Goldfinch_去中心化无抵押借贷_a16z_CB]] — 无抵押借贷先驱
- [[来源_2024-02_ERC404_SimpDoge_NFT分割所有权_BlockBeats]] — NFT碎片化实验
- [[来源_2024-12_Hyperliquid空投_人均28500美元_3天涨500%]]
- [[来源_2025-01_Echo_Legion_Buidlpad_新一代IC0平台崛起]]
- [[来源_2024_Dragonfly_Haseeb_VC币低流通高FDV_数据反驳]]
- [[来源_2025-07-09_稳定币DeFi和信用创造_Galaxy]]
- [[来源_2024-02_GSR数字资产参考包_Web3入门指南_BlockBeats]] — DeFi Summer起源/DeFi组件全景/CEX vs DEX市场份额
- [[来源_2024-08_DeFi_PE市盈率_估值分析_BlockBeats]] — 13个DeFi协议P/E横截面/治理代币价值捕获困境
- [[来源_2024-08_Maker机制详解_RWA战略_白话区块链]] — Maker作为DeFi收入最高协议($2.74亿/年)的机制详解+财务拆解：三类拍卖/PSM+DSR锚定系统/Endgame四阶段SubDAO架构；成熟DeFi协议应对治理疲劳和创新停滞的解决方案(RWA转型+SubDAO模块化)
- [[来源_2024-12_TON生态研报_链上交易量_Telegram双赢]] — TON上DeFi作为用户留存层：DEX TVL $3.42亿+流动性质押$3.35亿；STON.fi/DeDust.io双DEX格局；TOL从资助DeFi项目转向直接激励用户交易和流动性
- [[来源_2024-12_AI_稳定币_三阶段采用_Peter-Schroeder]] — AI 动态优化 DeFi 流动性分配（Velodrome/Aerodrome ve-token 模型）、VanEck 预测 2025 年 DEX $4T 交易量+TVL $2000亿、2024 年全球 DeFi 已处理 $1.3T 交易量
- [[来源_2021-07_Uniswap_V3_生态全景_链闻]] — V3上线三个月生态爆发：43个项目/21个流动性管理器/V3将LP代币ERC-20改为NFT打通DeFi+NFT可组合性
- [[来源_2023-03_Arbitrum详解_Optimistic_Rollup_火币研究院]] — Arbitrum DeFi 飞轮案例：GMX（衍生品 4.96亿TVL）→ Jones DAO（收益聚合器）→ 更多流动性，原生DEX Camelot 和跨链借贷 RDNT
- [[来源_2024-01_HashKey_Capital_Web3投资赛道全解析_PANews]] — HashKey 2024年初 DeFi 判断：投资者偏好实际收益产品（LSDfi/RWA）而非排放型收益；L2 上线带来高性能 DEX 机会；永续 DEX 费用在各细分赛道占比最高（dYdX/GMX/Drift/Jupiter）；近 22% ETH 已质押，Lido 占 32% 份额，LST 为最大 DeFi 赛道（200 亿美元 TVL）
- [[来源_2025-01_Monad测试网_生态建设_参与策略_PANews]] — 新 L1 DeFi 生态矩阵：Monad 已构建 LSD（aPriori/Kintsu）+ CDP 稳定币（Jigsaw/jUSD）+ CLOB DEX（KuruExchange）+ 链抽象聚合器（Symphony）+ AI 交易（Narwhal）完整 DeFi 原语体系
- [[来源_2022-11_web3用例_使用场景_0xShah]] — 全球数字借贷作为 web3 五大已验证用例之一：任何人以 $1 即可出借并获取收益，对无银行账户人群的被动收入意义；同时承认"真实世界借贷"不足和协议风险
- [[来源_2023-11_Morpho_Aave_借贷赛道_MintVentures]] — 去中心化借贷赛道竞争格局：Aave 协议收入 7x 于代币激励（有机 PMF），Compound 仍高度依赖补贴，Radiant 为庞氏结构；Morpho 以 P2P 利率优化器寄生 Aave/Compound 积累 $10 亿资金后推出 Morpho Blue 无许可借贷基础层
- [[来源_2024-02_Telegram_Bot赛道_链上券商_Web3应用]] — Telegram Bot 作为 DeFi 新 UI/UX 层：以对话式交互取代 DEX 界面，实现买卖/止损/跟单/反欺诈一站式链上交易，"链上券商"定位准确捕捉了 Bot 聚合流动性+优化执行的券商化趋势
- [[来源_2023-08_币安研究院_Telegram_Bot赛道前景及风险_BlockBeats]] — Binance Research 2023年报告：TG Bot 作为"移动端 DeFi 入口"的早期全景——$1.9亿累计交易量、$2870万赛道收入、Unibot 收入 86% 来自代币税（投机>产品使用）、8亿 MAU Telegram 做分发底座
- [[来源_2024-08_Banana_Gun_EOF_Titan_PBS_深潮TechFlow]] — Banana Gun与Titan Builder的独占订单流（EOF）协议揭露：TG Bot作为DeFi入口如何利用PBS系统漏洞截留用户贿赂和验证者费用
- [[来源_2023-04_Web3确定性_金字塔分析框架_The_Quibbler]] — 2023年初判断：资产交易是 DeFi 中唯一被大规模验证的真实需求；熊市下表现良好的交易类产品（GMX、Blur）获得更多青睐；大部分 Gas 烧在各类交易所，需求仍停留在交易和赚钱层面
- [[来源_2023-Q3_比特币生态DApp盘点_DeFi_NFT_基础设施_钱包_BlockBeats]] — 比特币 DeFi（BTCFi）完整项目清单：14 个项目几乎清一色依赖 DLC 和 PSBT 技术路径（而非智能合约），BTCFi 更像是"条件支付"而非"可编程金融"；核心项目含 Liquidium/Sovryn/DLC.Link/Atomic Finance/Deep Lake 等
- [[来源_2024-09_Orderly_Network_流动性中央厨房_ChainCatcher]] — B2B2C 流动性基础设施新模式：Orderly Network 通过统一订单簿聚合多链流动性，为 DEX 开发者提供"即插即用"的后端服务，60% 收入以 USDC 分配给代币质押者，发币前已实现 $740 万净收入
- [[来源_2024-08_Aerodrome_ve33收入机制_100%回馈持有者_MarsBit]] — Aerodrome ve(3,3) 深度分析：100% 收入回馈持有者、$1 亿年收入、Base 上 79% DEX 份额、早期锁仓者 48x ROI 案例研究、与 Coinbase 共生关系
- [[来源_2023-06_用户分层_CEX价值贡献_Chainalysis]] — CEX用户6层分群框架与价值贡献量化：晚期机构23.6%流入/0.1%用户 vs 晚期零售11.4%流入/75.8%用户；CEX 750→640面临DEX竞争压力
- [[来源_2023-06_X-to-Earn经济模型判断框架_veDAO_BlockBeats]] — veDAO研究院：代币经济驱动流动性迁移的经典案例——Sushiswap对Uniswap的吸血鬼攻击（代币空投吸引LP→两周后迁移流动性→Sushi巅峰占Uni 70%用户），经济模型如何取代传统Web2买量策略
- [[来源_2024-08_Berachain_POL_流动性证明_深潮TechFlow]] — POL 改变 DeFi 协议获取流动性的方式：从"租用流动性"变为利用链原生 BGT 发放作为收益来源，通过贿赂验证者而非支付 LP 租金来吸引流动性
- [[来源_2025-02_Berachain_生态项目_主网上线_PANews]] — Berachain 主网上线首周 DeFi 生态项目全貌：Kodiak（TVL $6.9B+）、Ooga Booga（$200M 交易量）、Dolomite（$1B 资产）、Infrared（1.8 亿 BERA 质押）、Beradrome、Yeet 等 dApp 数据与 Boyco 存款计划详情
- [[来源_2025-01_Jupiter收购时间线_DEX基建_深潮TechFlow]] — Jupiter 从 DEX 聚合器到生态基建运营商的进化：6个月收购5个项目/平台（SolanaFM/Coinhall/Sonarwatch/Ultimate Wallet/Moonshot），构建"入金→数据→交易→资产管理"DeFi 闭环；DEX 护城河从价格优势升级为便利性垄断
- [[来源_2025-08_Jupiter_Hyperliquid_聚合器战争_深潮TechFlow]] — Decentralised.co 深度分析：DeFi 聚合理论三级跃升框架（价格发现→执行→分发控制）、Jupiter vs Hyperliquid 聚合器 vs 供应商哲学对立、流动性护城河双刃剑特性、"应用即新平台"对胖协议理论的挑战、亚马逊飞轮与创始人主导并购策略的链上映射
- [[来源_2024-12_SynFutures衍生品OysterAMM_BlockBeats]] — SynFutures V3 Oyster AMM：借鉴 UniV3 集中流动性用于 Perp，26,666x 资金效率，Base 上 68% 份额（24h），Q2/Q3 全链 Perp 14.11% 市场占比（#3），2024-12-06 TGE
- [[来源_2023-12_Aevo_去中心化衍生品_Ribbon_BlockBeats]] — Aevo（Ribbon Finance 转型）：链上期权 DEX + Pre-Launch 期货 + aeUSD 收益抵押资产，基于自有 OP Stack L2，2023 年 7 月并入 Aevo，Paradigm 875 万美元 B 轮背书
- [[来源_2024-10_Hyperliquid技术架构_CEX对标_深潮TechFlow]] — Hyperliquid TGE前技术全景：HLP 去中心化做市金库（0-20% APY/20%手续费分配）、HIP-1/HIP-2 现货市场标准、HyperBFT 20万订单/秒非阻塞共识、与币安 2-3% 交易量对比
- [[来源_2024-12_Web3市场操纵_洗售交易_拉高出货_慢雾科技]] — 慢雾科技揭示DeFi市场中做市商的阴暗面：部分做市商利用流动性优势进行洗售交易和幌骗，95%的未受监管交易所BTC交易量为伪造（Bitwise 2019）。链上透明性并不自动带来市场公正——流动性挖矿的TVL和交易量KPI可能被系统性污染
- [[来源_2024-07_Solana_Blinks_Web3大规模采用_PANews]] — Solana Blinks 将 DeFi 操作（swap/限价单）从独立网站解绑到社交信息流，Raydium 已支持 1% Blinks 返佣，代表 DeFi 交互界面从"去网站"到"去链接"的范式探索
	- [[来源_2024-08_链上流动性_AMM_OpenRug]] — 链上流动性四层供给结构（DEX LP/JLP-GLP/机器人/散户）、AMM vs 订单簿的本质差异（确定性流动性 vs 做市商可控流动性）、机器人作为"与 AMM 一样确定性流动性来源"的反直觉框架、15-20% 市场总流动性已从 CEX 迁移至链上
- [[来源_2025-02_Dapp报告_用户活动降温_AI增长_PANews]] — DappRadar 2025年2月报告：DeFi TVL从$217B暴跌至$168B（-22.6%），以太坊降27%至$97B，Solana降33%至$15.4B；Berachain逆势TVL达$5.05B；27%活跃钱包与DeFi相关

	- [[来源_2024-08_MemePVP_DeFi业务转型]] — DeFi 借贷协议业务转型新方向：Marginfi 为 The Arena 提供杠杆多空基础设施、Solend 推出 dumpy.fun 做空 Meme 币，通过"收台子费"模式从 Meme PVP 中获利，反映 DeFi 在缺少真实用例下的生存逻辑转向
	- [[来源_2024-08_永续合约DEX_应用模式_生态概览]] — 永续合约DEX全景科普：四种定价模式（预言机/vAMM/链下订单簿+链上结算/全链订单簿）、流动性获取两大新范式（社区金库HLP+跨链聚合）、五种创新产品方向（方差永续/Pre-Launch/RWA永续/ETP永续/预测市场永续）
- [[来源_2024-09_持续盈利项目_代币炒作_商业模式_深潮TechFlow]] — DeFi是唯一能持续带来可观收入的Web3类别：Uniswap/Aave/Maker/Curve贡献巨大收入，是"无聊但可持续"的长期业务；Across Protocol占据60%+以太坊桥接市场份额（基于意图架构/秒级延迟）；Kamino $14M ARR/年化$30M用户利息
- [[来源_2022-04_Web3.0_范式_技术栈_生态_张浩]] — 从 Web 3.0 全景视角定位 DeFi：低成本/实时/无边界/点对点价值转移，不受主流金融机构营业时间限制，为全球 20 亿无银行账户人口提供金融服务，改变了金融后端基础设施
- [[来源_2023-06_去中心化资管_Debank_链上资产工具_深潮TechFlow]] — 链上资产管理工具赛道竞争格局：[[debank]]/Zapper/Zerion 三剑客产品拆解与商业模式对比，Enzyme 作为链上基金协议先行者，去中心化资管六大改进（成本/时间/门槛/托管/透明度/可组合性）
- [[来源_2025-01_USD0++脱锚_循环贷爆仓_Morpho清算_PANews]] — DeFi 循环贷杠杆风险案例：Usual USD0++ 在 Morpho 的循环贷（LTV=50%杠杆率200%+）被 0.87 保底价精准爆破；DeFi 治理中心化问题——"治理代币"从未用于治理，协议参数由项目方单方面决定
- [[来源_2023-07_Rollups即服务_RaaS全景指南_BlockMagnates]] — RaaS 视角下 DeFi 应用链案例：支付（Terra Chai）和衍生品（dYdX、永续合约、结构化产品）作为不需要共享执行层可组合性的独立金融应用，适合部署为独立应用链
- [[来源_2024-11_链上入门指南_从二级到链上_0xWizard]] — 以 act 代币为例的 AMM 池子入门解释（池子含 $93 万 act + $93 万 sol，买入=向池子加 sol 取 act→价格涨，卖出=加 act 取 sol→价格跌）；LP 角色=按比例添加两种资产获取手续费、承担无常损失
- [[来源_2024-09_AAVE币价翻倍_TVL回归_老牌龙头复苏_GreenLightCapital]] — AAVE 作为 DeFi 蓝筹复苏的先行指标：价格 80→170 翻倍、加密借贷 $110 亿 vs 传统金融 $8000 亿（80 倍差距）、AAVEnomics Update 将治理代币升级为收入分配工具
- [[来源_2024-03_Merlin_Chain五个生态项目_BlockBeats]] — Merlin Chain BTC L2 生态中 DeFi 三大方向落地案例：[[merlinswap]] DaaS 模式（iZUMi提供/$MP代币/210亿总供）、[[surf-protocol]] AMM衍生品（50x杠杆/聪本位保证金/盘前市场/币安MVB）、[[bitsmiley]] 超额抵押稳定币+借贷（BTC抵押→BitUSD/MakerDAO+Compound模式）
	- [[来源_2024-10_Unichain_胖应用_DeFi演进_BlockUnicorn]] — "DeFi越来越胖"趋势：ASS（应用特定排序）如 CoW AMM 批量拍卖消除 LVR、Jupiter/Uniswap 钱包控制分发、DApp→L2 垂直整合；Unichain 从经济逻辑（MEV+Gas费用>LP费用）到技术实现（Flashblocks/UVN/优先排序）的完整案例
- [[来源_2025-10_PerpDEX格局_Hyperliquid胜利_dYdX_GMX教训_OKXVentures]] — OKX Ventures Perp DEX 赛道全景分析：AMM vs CLOB 系统权衡、Hyperliquid 透明市场哲学与六阶段增长策略、dYdX/GMX 失败归因、新竞争格局（Aster/Lighter/EdgeX）
- [[来源_2024-12_Hyperliquid生态_链上赌场_淘金指南_PANews]] — PerpDEX 细分赛道"上币效应"机制：荷兰式拍卖如何驱动流动性正向循环（价格越高→项目越优质→上币效应越强→下一次拍卖价更高），以及 HyperEVM 生态 DeFi 乐高八方向项目图谱（HyperSwap DEX/Kinetiq LSD/HyperLendX 借贷/Keiko Finance 动态利率/HyBridge 跨链/Felix Protocol 稳定币等）
- [[来源_2024-08_LP盈利_DEX存活_LVR_深潮TechFlow]] — DEX LP 盈利能力是 DEX 存活发展的关键：LVR（损失与再平衡）是 LP 持续充当套利者对手方的成本；CoW AMM 通过批量拍卖内化 MEV 消除 LVR；Bunni V2 用 Uniswap V4 钩子将闲置流动性部署到借贷协议；价值内部化 + 利润再分配是 DEX vs CEX 的独特价值主张
- [[来源_2024-08_Vessel_Finance_ZK_DEX_红杉融资]] — Vessel Finance 代表 ZK 驱动 DEX 新方向：构建 L3 统一平台 + VAELOB（订单簿+AMM 融合）+ 链下计算/链上 ZK 验证架构，红杉等参投 1000 万美元，试图在 1000+ DEX 的拥挤赛道中通过技术创新突围
- [[来源_2024-11_Thena_币安HODLer空投_ve33_DEX_MarsBit]] — Thena BNB Chain ve(3,3) DEX 超级应用：现货+永续(270+交易对/60x)+社交交易+Launchpad，三代币经济模型（THE/veTHE/theNFT），初始周排放260万枚每周递减1%
- [[来源_2023_移动货币_Web3_普惠金融_维斯曼笔记]] — DeFi 在非洲无银行账户人群中的普惠金融场景：MakerDAO 等协议通过 SIM 卡绑定钱包为移动货币用户提供去中心化金融服务，无需传统银行中介
- [[来源_2025-01_DeFAI驱动DeFi_Summer_AI降低门槛_PANews]] — DeFi 用户渗透率基准数据：全球 5.62 亿持币者中仅 1.4%（约 800 万日活地址）使用 DeFi，高交易量（DEX/CEX 16.7%）但低渗透率的结构性矛盾，以及 DeFAI 作为破局路径的叙事框架
- [[来源_2022-03_Web3_漫游指南_全面解读]] — DeFi从1.0到2.0的完整演变分析，涵盖借贷协议、DEX、AMM、稳定币（USDT/DAI/UST/OHM/FEI/Frax）、衍生品、DeFi治理、预言机、侧链/L2策略等。提供了DeFi在2022年初的历史切片
- [[来源_2025-06_链上金融_RWA_RedStone]] — 详述DeFi协议构建RWA桥梁的最新进展：Morpho v2固定利率/固定期限借贷架构（$4.2B TVL）、Spark Liquidity Layer自动再平衡（$3.5B+管理）、Ethena USDtb稳定币储备策略（$1.5B）、Pendle Citadels机构固定收益方案、Aave Horizon许可-非对称借贷模型。代表DeFi从纯链上金融向TradFi融合的关键转折点
- [[来源_2025-02_UniswapV4_Hooks_LVR_2077Research]] — Uniswap V4 深度技术剖析：Singleton 架构将池部署成本降低 99%+，Flash Accounting（EIP-1153 瞬态存储）将 Gas 从 20,000 降至 100，Hooks 编程模型使 Uniswap 从 DEX 进化为流动性平台，催生 LVR 解决方案（Arrakis/Sorella）和代币发行创新（Flaunch/Doppler）
- [[来源_2024-12_AMM自动化做市商指南_ThreeSigma]] — 系统性AMM技术综述：33个协议分类、CPMM/CSMM/PMM/DAMM/FM-AMM等模型详解、Uniswap V4 Hooks和意图范式对DeFi DEX赛道的影响分析
- [[来源_2025-02_AMM_订单簿_意图_ThreeSigma]] — AMM系列第二部分：CLOB vs AMM对比、混合CLOB-AMM（Vertex）、意图架构三种代表（CoW Swap/Aperture Finance/Across）及其对DeFi DEX格局的影响
- [[来源_2025-06_区块链重塑七行业_代币化_insights4vc]] — TradFi-DeFi融合趋势：JPMorgan Onyx/JPM Coin即时结算系统、许可制DeFi池、银行参与流动性网络。传统银行预计5-10%后台成本削减，BlackRock/Hamilton Lane代币化基金份额，RWA代币化有望2030年达$6000亿AUM，说明DeFi与传统金融的边界正在消失
- [[来源_2022-09_机构投资者访谈_火币研究院]] — 2022年熊市机构DeFi策略：现有协议需稳定现金流且独立于补贴才能再次爆发；新兴机会集中在链上竞争者少的传统金融领域（以衍生品市场为主）；机构整体关注DeFi但保持观望
- [[来源_2024-11_AI_Agent_DeFi_全景_ThreeSigma]] — AI Agent 在 DeFi 中的全景观：AI Agent 三级自动化分类（Workflow/Agentic/Autonomous），涵盖交易/预测/Agent创建平台/基础设施等六层、60+ 项目名单，以及 AI 自动化可能改变 20% 服务经济（14 万亿美元）的宏观分析
- [[来源_2022-01_智能合约开发工具_十大工具_Medium]] — 2022年初DeFi项目开发工具全景：前10 DeFi项目开发框架选用格局（Hardhat/Brownie/Truffle等），预言机（Chainlink）在DeFi中的关键安全角色，约80% DeFi项目以某种形式使用预言机基础设施
- [[来源_2025-03_SIMD-0228_Solana通胀_深层博弈]] — SIMD-0228 降低通胀释放资本进入 DeFi 的逻辑分析：提案支持方认为高质押率抑制 DeFi 活动（类似美联储提高利率收紧金融条件），预计 DeFi 锁仓 SOL 增 5-10%
- [[来源_2025-04_比特币生态_RWA赛道_Web3全景_PANews]] — Infinity Labs DApp全景数据：Uniswap V4日均$50亿交易量/Aave V4隔离池0.5%坏账率/Lido ETH质押市占65%/$350亿TVL/EigenLayer再质押/ Pendle收益拆分/Ethena合成美元USDe/Pendle本金收益分离/1inch整合200+ DEX/LayerZero全链交易70%/MakerDao DAI超额抵押/Compound企业贷款占比40%/dYdX链上衍生品60%
- [[来源_2025-02_DeFAI_DeFi_AI_Saurabh]] — Saurabh Deshpande 从算法交易历史切入分析 DeFi 采用瓶颈：DeFi 仅占 CEX 现货交易量 10-20%、Yearn Finance TVL 从 $7B 跌至 $250M 的案例、以及 DeFAI 作为解决 DeFi 可用性难题的潜在路径

- [[来源_2025-04_Web3消费者应用_投资理论_IOSG]] — IOSG 将 DeFi 列为四种最有潜力找到 PMF 的 Web3 消费者应用之一，以 Hyperliquid 为例说明高性能去中心化金融将冲击传统 CeFi 体系
- [[来源_2022-08_链上基金_DeFi资管_iZUMi]] — DeFi 链上基金赛道系统性梳理：22个项目按主动/算法/被动三类策略分类，深层拆解 Ribbon Finance、Umami Finance、iZUMi Finance 三个代表性项目，涵盖结构化产品、Delta Neutral 对冲、主动策略基金等方向
- [[来源_2022-05_Web3数据赛道_数据索引_SevenX]] — 提出通过多维数据向量构建去中心化声誉体系是实现链上信用借贷的核心路径，认为 Lens Protocol 用 NFT 管理数据为无抵押信用贷铺设地基；该判断代表了 2022 年中期 DeFi 信用借贷方向的早期观点
- [[来源_2022-07_加密衍生品_CeFi_DeFi_Web3Caff]] — 2022年DeFi衍生品早期全景：去中心化衍生品仅占总量1%、dYdX日交易量仅为中心化龙头的1/8、DeFi覆盖比CEX更多样产品类型（永续合约/期权/合成资产/利率衍生品/Staking/预测市场）
- [[来源_2025-06_DEX_去中心化交易所_灰度]] — 灰度研究系统报告提供 DEX 赛道宏观数据框架：占全球加密交易 7.6%、spot 份额约 25%、前十大 $22bn 市值
- [[来源_2025-02_预言机_机构信任_Chainlink]] — insights4.vc 三大预言机横向对比（Chainlink/Pyth/RedStone）：预言机作为 DeFi 信任层、安全架构差异（推送 vs 拉取）、经济激励模型（质押/再质押/罚没机制）
- [[来源_2025-04_加密货币借贷_Galaxy]] — Galaxy Research系统报告：CeFi/DeFi借贷市场全景（含CDP稳定币），DeFi借款从熊市底部$1.8B增长959%至$19.1B（2024 Q4），市占率从34%跃升至63%；Aave V3以太坊$23.6B存款/$8.9B借款主导；链上借贷利率机制技术细节；DeFi风险全景（预言机操控/$350抵押借$23万USDC事件）
- [[来源_2025-05_Alliance毕业季_20加密初创_深潮TechFlow]] — Alliance 2025年5月批次中的 DeFi 项目反映了去中心化金融向普通用户友好的演进方向：Fido（低门槛 DeFi 零售银行，前创始人曾运营 AUM 1 亿美元的类似公司）、Offline Protocol（灾难/拥挤场景的离线通信和交易）、Orbit（DeFAI 助手简化收益挖矿和 LP 操作）
- [[来源_2025-06_稳定币_DeFi收入_Keyrock]] — 补充稳定币在 DEX 和借贷协议中的收入占比数据：DEX 稳定币收入占比从 10% 回升至 20%，Aave 稳定币收入占比持续下降；跨链对比分析（以太坊 $127b vs Solana $13b 稳定币 AUM）
- [[来源_2025-02_空投_Q1耕收_9大项目_CryptoIntegrated]] — Q1 2025 空投耕种指南涵盖 9 个未发币 DeFi/基础设施项目：RateX（Solana 杠杆收益交易）、DeFi.app（模块化 DeFi 聚合，600 万美元融资）、Rivo（收益聚合器，存入超 2.5 亿美元）、Zerion（非托管钱包，2,200 万美元融资）等，展示"积分→代币"空投模式在 DeFi 协议中的广泛采用
	- [[来源_2022-08_核心赛道_演变_VC视角]] — 2022年中DeFi子赛道估值分层快照：稳定币50B-100B/DEX 10B-50B/借贷1B-5B/衍生品1B-5B/Staking 1B-5B；Tether vs Circle合规竞赛延续、DEX垄断效应（新链才有新DEX）、Maple Finance/Solv Protocol向2B做市商债权方向尝试、DEX逐渐Infra化成为衍生品协议的基础流动性层
- [[来源_2025-03_传统金融与链上金融_DeFi交汇_深潮TechFlow]] — 2025年初DeFi全景综述：机构采用加速（现货比特币ETF获批、HSBC/Citi Aave外汇实验、Swift-Chainlink合作）、监管演变（MiCA生效、SEC终止Uniswap调查）、L2/跨链技术突破（Arbitrum/Optimism TVL达数十亿美元、以太坊Gas费降98%）、新兴用例（RWA代币化、NFT抵押、DeFi保险、去中心化身份）
- [[来源_2025-03_Manus_AI_Web3_自主执行_PANews]] — 从 AI Agent 角度提出 Manus 可赋能 DeFi 智能化交易决策（跨链套利/数据采集/风险评估）、多签名安全增强等应用场景

- [[来源_2025-04_CoinGecko_Q1加密货币行业报告]] — CoinGecko Q1报告DeFi TVL数据：多链TVL从$1774亿跌至$1286亿（-27.5%）；以太坊TVL从$1126亿暴跌-35.4%至$727亿，主导地位从63.5%降至56.6%；Berachain上线后迅速达$52亿TVL排第6大
- [[来源_2025-02_BNB路线图_生态潜力_BlockBeats]] — 2025年2月 BNB Chain DeFi 生态数据：PancakeSwap 成为7日交易量第一DEX（CAKE $9.1亿市值/+58%）；Thena 币安首日交易量超10亿美元（市值$2亿/+73%）；Lista DAO $3.3亿市值（+18%）/slisBNB 和 clisBNB 上线 Pendle；BakerySwap $8470万（+91%）
- [[来源_2025-04_Crypto估值_梅特卡夫_DCF_深潮TechFlow]] — 补充DeFi协议估值的DCF方法论：以Raydium为案例（Revenue $98.9m，DCF总估值~$1.002B vs 实际市值$1.16B），并揭示治理代币未捕获协议营收、未来现金流预测极难、折现率敏感等DeFi DCF的核心挑战
- [[来源_2025-05_良性货币_去中心化稳定性_深潮TechFlow]] — 批判性分析加密资产的资本形成障碍：加密资产因价值不确定性很少被用作债务计价单位，DeFi借贷市场的发展瓶颈不仅是技术或流动性问题，更是货币设计层面的结构性缺陷
- [[来源_2025-06_Ethena_四大增长领域_Telegram_Converge_PANews]] — Ethena 通过 DeFi 协议联盟（Pendle $2.6B/Aave $2.2B/Spark $600M）驱动 USDe 增长，其中 Aave 单月通过 Pendle PT 为 USDe 追加 $1.5B+ 交易量，展示 DeFi 可组合性对稳定币扩张的乘数效应
- [[来源_2025-04_熊市_早期项目_申请_PANews]] — 补充10个早期DeFi/Crypto项目：Neutrl（合成美元协议，OTC套利+资金费率+Delta中性策略）、Codex PBC（稳定币专用L2）等，体现DeFi在熊市中的早期参与机会
- [[来源_2025-12_TGE巅峰_新币虚假繁荣_SolusGroup]] — 2025年代币数据显示DeFi赛道代币"早期暴涨后暴跌"模式最为极端——ATH ROI 5.09倍但当前ROI中位数仅0.2倍，跌幅在所有赛道中最为灾难性，"炒作与现实之间的差距极其残酷"，为DeFi代币价值捕获困境提供了2025年的实证数据
- [[来源_2023-05_BTC_DeFi_ALEX_Arkadiko]] — 2023年5月 Stacks 链 DeFi 微观数据：两个头部协议（ALEX、Arkadiko）构成链上 DeFi 的全部 TVL，反映 BTC L2 生态 DeFi 的早期集中度特征
- [[来源_2025-03_TradFi_DeFi_机构采用_Paradigm]] — Paradigm & Allium Labs 联合报告：66% TradFi 机构已参与 DeFi，五大关注领域（代币化/稳定币/DEX/预测市场/借贷），监管清晰度为主要驱动力
