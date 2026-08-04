---
type: entity
entity_type: company
created: 2026-06-29
updated: 2026-07-02
tags: [rwa, tokenized-equities, solana, trad-fi]
---

# Backed（代币化股票发行方）

## 基本信息
- 定位：受监管的瑞士代币化资产发行商
- 成立：2021年
- 融资：$950 万（Gnosis 领投，Cyber Fund、Blockchain Founders Fund、Blue Bay Capital 等参投）
- 核心产品：
  - **bSTOCK / wbSTOCK**（自有品牌代币化股票，无限制 ERC-20）
  - **xStocks**（与 Kraken 和 Solana 合作的代币化股票产品线）
- 合作方：Kraken（交易所分销）、Solana（发行网络）、Gnosis（Base/Arbitrum/Avalanche）
- 上线时间：2023年初（自有产品），2025年6月30日（xStocks）
- 监管结构：欧洲招股说明书支持，受监管机构托管，瑞士实体运营

## 核心业务/产品

### 自有品牌 bSTOCK / wbSTOCK
- 业务流程：发行方（专业投资者）完成 KYC → 支付稳定币 → Backed 通过合作券商购买股票 → 铸造 bSTOCK token
- **无限制 ERC-20 代币**：bSTOCK 可在链上自由交易，无需 KYC 的 C 端用户可直接通过 AMM 购买
- wbSTOCK 是封装版本，便于处理股息派发等操作
- 流动性分布在 Gnosis（Balancer、Swapr）、Base（Aerodrome）、Avalanche（Pharaoh）
- 流动性池 TVL 接近 $800 万，平均 APY 32.91%（bCOIN-USDC 池 APY 达 149%）
- 链上流动性主要来自 SPX 指数、Coinbase 和 Tesla 对应的 bSTOCK

### xStocks（与 Kraken / Solana 合作）
- 61 种美股代币（英伟达、Coinbase、伯克希尔哈撒韦、苹果、亚马逊、特斯拉、标普 500 指数等）
- 非美国客户可访问（不包括美国用户）；买卖操作无需 KYC，但 Backed 平台本身需 KYC
- 全额抵押代表标的股票，由受监管机构托管
- 可在 Kraken 交易所交易（免交易费），或提取至 Solana DeFi 协议中使用
- 法律架构与自有品牌 Backed Finance 一致
- **底层流程**：注册在瑞士的母公司控制泽西岛的 Backed Assets，通过盈透证券 IBKR Prime 通道在美股市场买入股票，转移至 Clearstream（德交所存管机构）的隔离账户，触发 Solana 链上合约 1:1 铸造代币
- **托管方**：Maerki Baumann & Co. AG（瑞士私人银行，1932 年成立）、InCore Bank AG（瑞士 FINMA 监管银行）、Alpaca Securities LLC（美国券商，2015 年成立）
- **费用结构**：当前不收取管理费（未来可能最高年化 0.25%）；买入和赎回时最多收取投资价值的 0.50%（最低 100 美元）
- **现阶段无做市商角色**；xStocks 官方暂无发币计划

## 关键数据
### 自有品牌（来源：Mint Ventures 研报 2025.07）
- 链上 LP TVL 接近 $800 万
- 流动性池平均 APY 32.91%（bCOIN-USDC 池 APY 149%）
- 代币化股票市值约为 Dinari 的 10 倍
- 受限因素：链上用例不足（目前仅能做 LP），发行方不愿增加流动性投入

### 自有品牌发行量与流动性（来源：深潮TechFlow 2025.05）
- 总发行量约 $16M（自有品牌），其中bCSPX（标普500指数）约 $10M，wbCOIN（Coinbase股票）约 $3M
- 链上流动性和交易主要集中在 Gnosis 和 Base 两条链
- bCSPX在Gnosis链上最大流动池自2025年2月21日起部署，至2025年5月累计交易量约 $3.8M，累计Transaction约400次

### xStocks（截至 2025.7.7）
- 持有者总数：45,700+
- 总市值：$5,170 万
- SPYx（标普 500 xStock）：9,692 持有者，市值 $680 万
- TSLAx（特斯拉 xStock）：9,914 持有者，市值 $620 万

## 竞争优势
1. **无限制 ERC-20 代币设计**：bSTOCK 可在链上自由交易和做 LP，实现无 KYC 的 DeFi 可组合性
2. **合规优先结构**：欧洲招股说明书 + 全额抵押 + 受监管托管 + 瑞士监管认可
3. **双重分销渠道**：自有品牌链上 + xStocks Kraken CEX 渠道
4. **先发优势**：代币化股票赛道的早期先行者（2023年初上线），TVL 领先 Dinari 约 10 倍

## 竞争策略 vs Dinari
- Backed 通过瑞士合规框架的"无限制 ERC-20"设计，事实突破了 KYC 限制
- 用户可以（无需 KYC）直接在链上用 USDC 或 sDAI 购买 bSTOCK，体验与普通链上代币相同
- 打开可组合性的大门：与稳定币配对做 LP（平均 33% APY）
- 这是 Backed TVL 接近 Dinari 10 倍的核心原因
- 风险：SEC 尚未对瑞士监管框架下的美股代币化做出评价

## 竞争格局
- [[dinari]] — 美国注册，严格合规但 dShares 无法链上交易，TVL 约为 Backed 的 1/10
- [[superstate]] Opening Bell — SEC 路线，面向注册公司股票上链
- [[ondo-finance]] Ondo Global Markets — 链上经纪商接口，计划 2025 年底上线
- Republic Mirror Tokens — IPO 前股权投资代币
- Step Finance Remora Markets — 面向散户的碎片化股票交易

## 风险
- 监管不确定性：Backed 交易的证券是美股，得到瑞士监管许可但 SEC 尚未表态
- 链上流动性不足：Backed 自身非交易所，流动性依赖发行方意愿
- 仅面向非美国客户（对 xStocks），限制总市场空间
- 上线时间短（自有品牌 2023/ xStocks 2025.06），流动性深度待验证
- **团队信任风险**：三位联合创始人 Adam Levi（联创兼前CTO）、Yehonatan Goldman（COO）、Roberto Klein（法律与监管事务负责人）均来自"归零"项目 DAOstack。$GEN ICO 募资约3000万美元后团队放任代币归零，引发社区对 Backed 发行方可信度的质疑。

## 相关实体
- [[kamino]] — Solana 借贷协议，支持 xStocks 抵押
- [[solana]] — 发行网络
- [[superstate]] — 代币化股票赛道竞争对手
- [[dinari]] — 代币化股票赛道直接竞争对手
- [[kraken]] — xStocks 分销方和合作方

## 来源
- [[来源_2025-04_RWA布局_10项目_PayFi_Biteye]] — 确认投资者门槛：至少 500,000 瑞士法郎资产或 2,000,000 瑞士法郎可融资资产；支持 bTSLA、bGOOGL、bCSPX 等标的
- [[来源_2025-07_代币化美股_现状前景_MintVentures]] — Backed 独立业务模式全分析（bSTOCK 无限制 ERC-20/发行方流程/TVL $800 万/AVG APY 32.91%/ vs Dinari 10x 差距分析/瑞士合规框架细节）
- [[来源_2025-06_Solana_RWA_全面概述_Helius]] — Kraken xStocks 作为 Backed 产品的发布详情：超 55 种 US 股票和 ETF、Solana SPL 代币、Kraken 为官方分销方
- [[来源_2025-07_Messari_Solana_RWA_赛道]]
- [[来源_2024-09_RWA六大核心资产_OKX_Ventures_深潮TechFlow]] — Backed与Ondo/Swarm同为链上重新登记国债产品发行方/从爱尔兰UCITS购买底层资产(ISIN: IE00BGSF1X88)/映射贝莱德iShares短期国债ETF
- [[来源_2025-07_美股代币化_三种模式_Robinhood_xStocks_BlockBeats]] — 补充联合创始人背景争议：DAOstack 背景及 $GEN ICO 3000万美元募资后归零事件
- [[来源_2025-07_xStocks十问_美股代币入门_BlockBeats]] — 补充 xStocks 具体运营细节：61 种代币数量、三家托管方（Maerki Baumann/InCore Bank/Alpaca Securities）、Clearstream 存管流程、IBKR Prime 交易通道、赎回费用结构、无做市商、买卖免 KYC、无发币计划等实操信息
- [[来源_2025-05_去监管_美股RWA_代币化股票_深潮TechFlow]] — 补充发行量数据（CSPX $10M/COIN $3M）和链上流动性分布（Gnosis+Base）
- [[来源_2025-07_结构障碍_未来发展_美股代币化_BlockBeats]] — 补充xStocks法律结构细节：SPV设立在列支敦士登，代币为"1:1资产支持的优先担保债（追踪凭证）"，信任机制基于独立第三方托管+Chainlink PoR，B2B2C分销模式
