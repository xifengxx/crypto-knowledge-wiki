---
type: source
source_type: article
url: https://www.theblockbeats.info/news/58809
date: 2025-07-06
ingested: 2026-07-02
---

# 从Robinhood到xStocks：美股代币化的三种实现路径与路线之争

## 阅读证据
- 总行数: 116
- Q1 (前25%): Backed Finance 借助 IBKR Prime 通道在美股市场购入股票，托管于 Clearstream、盈透等受监管托管机构，然后在 Solana 上 1:1 铸造股票代币（TSLAx、AAPLx、NVDAx），且发行商为第一责任主体，平台端仅作为接入方。
- Q3 (中后25%): Robinhood 在6月末宣布在欧洲31国推出基于 Arbitrum 的股票代币交易平台，首批上线超200支美股与ETF，计划扩展至未上市公司的股权代币如 SpaceX 和 OpenAI；Robinhood Chain 的三阶段规划中最终阶段允许用户自托管代币并迁移至其他链或 DeFi 协议。
- Q4 (最后25%): 6月17日 Coinbase 首席法律官 Paul Grewal 表示已向 SEC 申请 no-action letter，计划一旦获批即通过 Base L2 链上发行具备股权代表性的代币，实现 T+0 结算、碎股拆分、实时分红等流程。
- 图片: 0 analyzed / 7 decorative external URLs unavailable

## 核心要点
- 当前美股代币化市场存在三种主流路径：第三方合规发行+多平台接入（Backed/xStocks）、持牌券商自营闭环（Robinhood）、差价合约CFD（Bybit），三条路径在技术架构、合规责任和用户关系上有本质区别。
- FTX 在2020年就曾用类似 xStocks 的模式尝试股票代币化（通过瑞士子公司 Canco GmbH 发行），因 FTX 暴雷于2022年11月终止，为行业留下历史教训。
- Robinhood 是目前唯一打通"券商+L2+实股托管"三者的链上券商雏形，以立陶宛 MiFID 证券牌照为基础，自建全链条（股票采购、代币铸造、交易结算），并通过 Robinhood Chain（与 Offchain Labs 合作基于 Arbitrum 构建的 L2）向开放生态演进。
- Robinhood Chain 底层设计分为三个阶段：阶段一券商购入实股并托管后铸造代币；阶段二引入 Bitstamp 作为补充流动性来源实现周末持续交易；阶段三用户可将代币自托管并迁移至其他链或 DeFi 协议。
- Coinbase 走的是"合规先行"路径：先建好 Base L2 基础设施，再向 SEC 申请 no-action letter 获得代币化股票的合法豁免权，一旦获批则利用原生稳定币资产和 Base 生态形成开放链上证券标准网络。
- Backed 团队背景存在争议——三位联合创始人 Adam Levi、Yehonatan Goldman、Roberto Klein 均为"归零"项目 DAOstack 的核心成员，其 ICO 募资约3000万美元的 $GEN 代币在发币后放任归零。

## 关键数据
- Robinhood 以2亿美元现金完成对 Bitstamp 的收购（2025年6月），为加密部门新增超过50个许可证和注册及5000+机构客户。
- Robinhood 以约1.79亿美元收购加拿大加密平台 WonderFi（2025年5月）。
- Robinhood 在欧洲首批上线超200支美股与 ETF 的代币化交易。
- Bybit TradFi 上线超100种传统金融资产（石油、黄金、股票 CFD、外汇），且支持高频交易和杠杆操作。
- DAOstack 通过 $GEN ICO 募资约3000万美元，代币发币后"连个小所都懒得上"最终归零。

## 与已有知识的关系
- 补充 [[robinhood]] — 详细分析 Robinhood 代币化股票的三种路径规划（Robinhood Chain三阶段）、欧洲业务合规结构（立陶宛 MiFID 牌照）、以及"券商+Arbitrum L2+实股托管"三位一体的链上券商模式。
- 补充 [[backed]] — 增加对 Backed 团队背景的关键争议：三位联合创始人均来自"归零"项目 DAOstack，$GEN ICO 募资3000万后放任归零，引发社区对发行方信任的担忧。
- 补充 [[coinbase]] — 记录 Coinbase 于2025年6月17日向 SEC 申请 no-action letter 以推出代币化股票产品的合规先行策略，及其差异化路径（技术驱动 vs Robinhood 牌照驱动）。
- 补充 [[rwa]] — 提供美股代币化的三种路径分类（第三方发行、券商自营、CFD）以及 Robinhood Chain 的三阶段演化规划。
- 补充 [[cex]] — 记录 Bybit 通过 CFD 模式切入传统金融资产交易（超100种），Bybit TradFi 的产品扩张策略。

## 值得记住的引用
> "Robinhood 是唯一一家将「券商 + Layer2 + 实股托管」三者打通的链上券商雏形。"
> "这场对决，归根结底还是「谁能同时说服用户、监管与市场」的多边协同游戏。Robinhood 若能打通链上流动性 + 多平台联动，而 Coinbase 若能从 SEC 获得绿灯，则可能直接成为美国主场代币化股权的流量入口。"
> "链上只是记账层，所有行为在链下有同步对照。这种模式牺牲了代币的可转移性，却极大增强了监管可控性。"
> "（Backed的三位联创）其代币 $GEN ICO 募资约3000万美元后，团队连个小所都懒得上，发完币就任由归零了。"

## 我的笔记
- 这篇文章的价值在于清晰分类了美股代币化的三种路径，并对比了 Robinhood 和 Coinbase 的路线之争。但整体偏向 Robinhood 叙事，对 xStocks/Backed 的分析相对薄弱（尤其是 Backed 的技术架构细节不足），且没有涉及 Ondo Global Markets 等 RWA 原生项目的最新进展。
- Backed 团队的 DAOstack 背景值得警惕——如果代币化股票的核心价值在于"信任发行方"，那团队过往"ICO募资后放任归零"的行为记录直接影响其信誉。但文章仅引用 KOL 单方面观点，未有 Backed 官方回应，需保持批判态度。
- 文章对 CFD 路径（Bybit TradFi）的分析过于简单，仅批评其风险较高，但忽略了 CFD 路径实际覆盖的资产种类更广（石油、黄金、外汇等），且在全球衍生品市场中已有成熟监管框架的事实。
