---
type: entity
entity_type: protocol
created: 2026-06-28
updated: 2026-07-02
tags: [rwa, yield, stablecoins, solana, aptos, tokenized-equities, wall-street-2.0]
---

# Ondo Finance

## 基本信息
- 产品：USDY（收益型稳定币）、OUSG（代币化国债基金）、Flux Finance（借贷协议）、Ondo Global Markets（即将推出的代币化证券平台）、Nexus（跨发行方流动性协议）、Ondo Chain（合规L1）
- 定位：RWA 聚合层 + 链上收益产品平台，覆盖"链上华尔街2.0"全环节
- 融资：三轮共获3,400万美元（Pantera Capital、Coinbase Ventures、Tiger Global、Wintermute等）
- Solana 上最大 RWA 发行方：USDY $1.75 亿（占 Solana RWA 总量 41.9%）
- **Aptos 扩展**：2024年7月将USDY引入Aptos生态，截止2025年3月10日USDY在Aptos上市值约1500万美元，约占USDY总市值2.5%，已与Aptos上主要DEX和借贷应用集成
- 美债代币化市场排名第二：17.01% 份额，锁定资产约 $11.7 亿（2025年5月）
- 持有人数占全市场 90%+（因USDY开放给非美国零售用户）

## 品牌叙事与使命（2025年2月更新）

Ondo Finance 在其 2025 年 2 月的品牌宣言文章《华尔街 2.0：迈向开放经济》中正式提出以下核心叙事：

### "华尔街 2.0"定位
Ondo 将自身市场定位从"RWA 代币化发行方"升级为**金融市场的基础设施升级者**。核心主张是：区块链技术不会摧毁现有金融体系，而是对其实现"基础性升级"（foundational upgrade）——通过代币化、智能合约和去中心化协议使传统资产更易访问、透明和可互操作。

### "开放经济"使命
Ondo 将公司使命更新为：**加速向开放经济的转型**（Accelerate the transition to the open economy）。"开放经济"指商品、服务和信息在全球范围内自由流动的系统，超越金融体系本身，涵盖互联网、AI 和区块链三种技术趋势的交汇。

### 三层受益者叙事
Ondo 构建了一个"投资者—资产管理人—开发者"的三层受益框架，每个层次都强调区块链带来的"访问权"（access）改善：

| 层次 | 核心价值 | 关键改进 |
|------|---------|---------|
| 投资者 | 全球资产 + 24/7 市场 + 更优利率 | 打破国籍/时间/中介限制 |
| 资管人 | 高效行政 + 更广触达 + 简化合规 | 智能合约自动化合规 |
| 开发者 | 简易集成 + 更多资产 + 内置合规 | 无需许可的创新环境 |

来源：[[来源_2025-02_华尔街开放经济_OndoFinance]]

## 核心业务

### USDY（US Dollar Yield）
- 收益型稳定币，由短期美国国债和银行存款支持，2023 年 8 月推出
- 收益率: 4.35%（当前），收益自动累积，无需手动申领
- 两种版本: 累积版（USDY，价格随收益上升）+ 弹性供应版（rUSDY，保持$1.00锚定，通过增加代币数量分配收益）
- 面向非美国投资者（合规要求）
- 破产隔离结构: 由 Ondo USDY LLC 发行，与 Ondo Finance 独立的法律实体
- 价格随利息累积升值，通过 [[layerzero]] 跨链
- Solana 上 6,978 名持有者，市值 $1.75 亿（2025.7）
- Solana RWA 生态最大单一资产，驱动了 2025 年 3 月的 TVL 爆发式增长

### OUSG
- 代币化国债基金，2023 年 1 月推出
- 底层资产除 [[blackrock-buidl]] 外，还包括富兰克林邓普顿（FOBXX）、惠灵顿、WisdomTree、富达等发行的美债份额
- 面向合格投资者（Qualified Purchasers），要求严格KYC
- 管理费0.15%（2025.7.1起征收）+基金成本费0.15%
- 基础面值100美元，可转换为rOUSG（rebase型，类似stETH机制）
- Solana 上 $7,960 万，7 名持有者（2025.7）
- 年初至今增长 275.1%，是 Solana RWA 中增长最快的资产
- 供给在3条链上（ETH/Polygon/Solana），仅57个持有地址，前10大占90%+
- 全年无休即时铸销（vs BUIDL仅工作日特定时段赎回）

### Ondo Global Markets
- 即将推出（计划 2025 年底上线）：代币化公开股票和 ETF 平台
- 链上经纪商接口：非合成资产，将真实股票托管并与链上 onToken 关联
- 代币作为可编程所有权代表，可用作抵押品或白名单用户间转移
- 交易指令在传统交易所链下执行，链上即时结算
- 定位：将代币视为消息传递基础设施而非新资产类别

### Nexus 资产发行协议
- 2025年2月推出，为第三方发行的美债代币提供即时流动性
- 利用 OUSG 的即时铸销能力，充当不同发行主体之间的共同流动性层
- 合作机构：Franklin Templeton（FOBXX）、WisdomTree（WTGXX）、Wellington 等
- 机制：投资者将第三方美债代币卖给Ondo换取USDC → Ondo将该代币纳入资产池 → 铸造等值OUSG
- 为市场提供"即时赎回"机制，打破传统基金仅工作日赎回限制

### Flux Finance 借贷协议
- 基于Compound V2资产池模型，支持OUSG为抵押品借出稳定币
- 支持 USDC/DAI/USDT/FRAX 等稳定币借贷
- 总存款 $7400万，借出 $3343万（2025年5月）
- 由Ondo DAO治理，ONDO持有人控制参数和资产列表
- 当更多RWA资产被引入链上后，Flux将成为Ondo生态的关键借贷组件

## 团队背景
- 创始团队主要来自高盛（Goldman Sachs）数字资产部门
- 联合创始人 Nathan Allman — 高盛数字资产部门出身
- 总裁兼COO Justin Schmidt — 高盛数字资产市场部门前主管，高盛数字资产团队创建成员之一
- 首席战略官 Ian De Bode — 麦肯锡前合伙人，近十年数字资产咨询经验
- 总法律顾问 Mark Janoff — 斯坦福法学院，科技公司法律事务背景
- 核心成员全实名，履历与RWA赛道（强合规+DeFi+TradFi融合）高度匹配

## 政府关系布局
- 2025年4月会见SEC加密资产工作组，提交代币化证券合规框架提案，建议"监管沙盒"或暂时性豁免
- 2025年联合Davis Polk律师事务所与美SEC就代币化证券合规进行商谈，提出"包裹型证券代币"方案——通过分发层嵌入权限控制，探索注册豁免、市场结构豁免等路径，试图让代币化证券在美国市场找到合法落地的空间
- 2025年2月纽约首届Ondo Summit，邀请前众议院金融服务委员会主席Patrick McHenry、CFTC委员Caroline Pham出席
- Patrick McHenry 以顾问身份加入 Ondo Finance，任顾问委员会副主席
- 与特朗普家族WLFI建立战略合作，WLFI购入ONDO代币（先24.5万美元，后47万美元USDC买入34.2万枚ONDO）
- 合作机构意向包括：Franklin Templeton、Wellington、WisdomTree、Google Cloud、ABN AMRO、Aon、McKinsey等

## 合规架构与外市场策略
Ondo采取"双轨合规策略"应对美国监管高压环境（根据曼昆律师的分析）：

### 海外市场策略（非美用户）
- 产品层通过IP检测主动对美国用户设限，规避美国监管高压区域
- 资产托管在受美监管的信托机构（如Ankura Trust），遵循美国合规标准
- 借贷玩法严格进行许可和资质审核
- 设计破产隔离机制，保障投资者优先索偿权
- USDY面向非美国零售用户开放，吸收全球流动性

### 美国本土策略
- 联合Davis Polk律师事务所与SEC对话，推动"包裹型证券代币"合规框架
- 核心设计：通过分发层嵌入权限控制（而非代币本身），使代币可自由流转但同时确保合规限制
- 探索两条豁免路径：注册豁免（Regulation D、Regulation S等）和市场结构豁免（ATS替代方案）
- 这一框架若获认可，可能成为代币化证券的行业级合规标准

来源：[[来源_2025-05_解析OndoFinance_美国RWA玩法_曼昆律师_PANews]]

## 竞争优势
1. **RWA 聚合层定位**：不是单一产品，是连接多类 RWA 的平台
2. **BUIDL 生态位**：OUSG 底层用 BUIDL，形成上下游关系；进一步延伸至Franklin Templeton、WisdomTree等多发行方
3. **多产品线**：国债 → 收益稳定币 → 股票代币化，覆盖 RWA 三大类别
4. **Solana 先发优势**：USDY 是 Solana RWA 第一大资产（41.9% 市场份额）
5. **经纪人接口创新**：Ondo GM 的架构在合规与可编程性间找到平衡点
6. **持有人广度**：美债代币持有人数占全市场90%+（vs Securitize主要服务少数大型客户）
7. **DeFi集成深度**：USDY/OUSG在多链80+应用中可用，支持链上抵押借贷（Flux），优于Securitize

## 外部批评与争议

- **高控盘质疑**：叶开（YekaiMeta/BlockBeats评论员）指出，Ondo早期是高度控盘项目，其次生代币模式（底层RWA资产+二层次生代币）"并不可能实现所谓的一阳线"——即代币价格不可能因底层资产收益而持续上涨。该观点指出RWA项目的代币经济学存在根本性缺陷：底层资产收益与代币价格之间的传导机制不直接，代币估值最终由市场情绪而非资产收益驱动。
- **估值泡沫**：P/E超300倍、FDV千倍以上的估值主要受"链上华尔街"叙事支撑，若Ondo不能在2-3年内将TVL扩展到$100亿+并延伸到股票业务，当前估值难以被业绩消化（详见代币估值分析章节）。
- **代币价值捕获缺失**：ONDO代币仅治理权，无费用分红或回购销毁机制，代币持有者无法直接分享协议收入增长。结合未来一年64%的代币通胀，代币价格面临显著稀释压力。

## 竞争格局
- **vs [[securitize]] (BUIDL)**：Securitize 42.11%份额居首（$29.12亿），Ondo 17.01%第二（$11.7亿）。Securitize持有ATS牌照，BUIDL仅工作日特定赎回；Ondo无牌照但借助合作伙伴架构运营，提供全年无休即时赎回和更深的DeFi集成
- **vs [[centrifuge]]**：Centrifuge专注私募信贷RWA（中小企业贷款），TVL $4.09亿（5.96%），月增速222.66%，年化5-10%+，承担更高信用风险；与Ondo形成差异化竞争
- **vs [[polymesh]]**：专用证券链，POLYX用于链上费用和治理，内置身份认证和权限控制，但链上实际资产发行量远小于Ondo
- **核心竞争风险**：RWA资产源头仍由TradFi巨头控制，监管明朗化后大型机构可能自建生态

## 相关实体
- [[blackrock-buidl]] — OUSG 底层资产
- [[ethena]] — 同为收益型稳定币赛道
- [[superstate]] — 代币化股票赛道竞争对手（Opening Bell）
- [[backed]] — 代币化股票赛道竞争对手（xStocks）
- [[layerzero]] — USDY 跨链传输协议
- [[alpaca]] — Ondo Global Markets的券商合作方（2024年9月官宣合作，负责美股及ETF资产托管和代币化后端）

## 融资历史
- 三轮融资共获3,400万美元
- 投资方：Pantera Capital、Coinbase Ventures、Tiger Global、Wintermute 等知名机构
- 合作伙伴82个，覆盖链支持、资产托管、流动性支持和服务设施四大领域

## 代币价格历史
| 阶段 | 价格 | 相对当前涨幅 |
|------|------|:--:|
| A轮融资 | $0.0285 | +2448% |
| ICO | $0.055 | +1270% |
| 开盘 | $0.089 | +784% |
| 撰稿时 | $0.6979 | — |

## 代币估值分析（2025年5月）
- 总供应：100亿枚 ONDO
- 流通量：约31.6亿枚（31.6%）
- 流通市值：约 $32.7 亿
- FDV：约 $103 亿
- 年收入（估算）：不足 $1000 万（主要来自USDY和OUSG管理费/利差，资产规模约$10亿、平均收益5%、费用比率0.3-0.5%）
- 静态P/E：流通市值 >300 倍，FDV 千倍以上
- 代币通胀：未来一年高达 64%
- 代币功能：仅治理权，无费用分红或回购销毁机制
- **估值判断**：价格已充分price-in对未来扩张的乐观预期，估值纯粹由"链上华尔街"叙事支撑；若Ondo能在2-3年内拓展到$10B+ TVL并延伸到股票业务，估值才能被消化

## 产品架构细节
- **USDY累计型**：代币价格随基础资产收益增加，适合长期持有和现金管理
- **rUSDY重新定基型**：保持$1.00价格，收益通过增加代币数量实现，适合结算和交换
- **OUSG底层存放**：主要存放于贝莱德BUIDL基金，其余在TFDXX（贝莱德联邦基金）、银行存款和USDC中
- **铸造/赎回**：投资者通过USDC即时铸造OUSG，或赎回为USDC
- **KYC门槛**：需用户KYC，通过Flux Finance为需许可代币提供稳定币抵押借贷，实现后端无许可参与
- **Ondo Global Markets代币化股票战略**：2025年2月6日宣布，代币化股票是Ondo Global Markets中的核心交易标的；通过Ondo Chain合规L1网络为传统证券提供链上发行和交易基础设施

## 来源
- [[来源_2025-06_Solana_RWA_全面概述_Helius]] — Ondo Global Markets 平台设计详情/Global Markets Alliance 10+ 合作方名单
- [[来源_2024-07_RWA前世今生_真实资产崛起_PANews]] — 融资历史/代币价格多阶段对比/USDY和OUSG双版本架构详解/Flux Finance合作
- [[来源_2023-07_RWA代币_全面指南_BeInCrypto]] — Ondo Finance以"基金代币"模式运作，OUSG（短期美债基金）和OHYG（高收益企业债基金）经AML/KYC后可跨DeFi协议使用
- [[来源_2023-08_RWA实现路径_OffChain-OnChain_美债代币化]] — OUSG基金豁免路径(Qualified Purchaser≥$500万 vs Accredited Investor≥$20万年收入)/Flux Finance借贷协议联动/Clear Street经纪商执行/Coinbase Custody出入金
- [[来源_2024-09_PayFi_五大Web3支付项目_Followin]] — PayFi 语境下的 Ondo：OUSG + USDY $5.56 亿 TVL（2024.08），作为支付代币的 PayFi 典型案例
- [[来源_2025-07_Messari_Solana_RWA_赛道]] — Solana RWA 完整生态数据/Ondo Global Markets 详细架构/产品线最新数据
- [[来源_2023-04_RWA_大机构布局_币安高盛_ChainCatcher]] — 2023年4月时OUSG占债券代币市场61%份额/Flux Finance总供应超4000万美元/前高盛数字资产团队成员创立/通过KYC持有者与非KYC用户间接借贷机制
- [[来源_2024-09_RWA六大核心资产_OKX_Ventures_深潮TechFlow]] — 2024年8月数据：USDY $332M(+155% QoQ)/OUSG $206M(+60% QoQ)/OUSG采用Reledgered模式将管理"外包"给贝莱德SHV ETF/Ondo充当贝莱德分销商的产业链定位
- [[来源_2023-07_RWA_底层资产_业务结构_潜在机遇]] — Ondo Finance与Maple Finance、MakerDAO并列为2023年率先推出基于美国国债收益投资产品的代表项目，印证了"加密市场余额宝"方向的早期探索
- [[来源_2025-02_ETH卷土重来_DeFi投资者]] — 2025年2月6日首届Ondo Summit在纽约举行（BlackRock/Fidelity/BNY高管出席）、Ondo Global Markets将数千种公开证券带上链、TVL超$5亿
- [[来源_2025-01_Trump加密图谱_七大类_Layergg]] — Paul Atkins 加入 Securitize 顾问委员会，Securitize 与 $ONDO 有深层联系（新 SEC 主席的顾问关系为 ONDO 提供监管叙事关联）
- [[来源_2025-04_比特币生态_RWA赛道_Web3全景_PANews]] — Infinity Labs更新Ondo Finance数据：OUSG短期美债代币TVL突破$50亿/年化收益4.8%/最低投资门槛$1/机构投资者占比超70%/Ondo与Maple Finance竞争机构资金入口
- [[来源_2025-05_Ondo_RWA龙头_代币估值_深潮TechFlow]] — 产品矩阵全面分析（OUSG/USDY六维度对比/Nexus协议细节/Flux数据）、竞争格局对比（vs Securitize/Centrifuge/Polymesh 份额与策略差异）、团队背景（高盛数字资产）、政府关系（SEC会谈/McHenry顾问/WLFI合作）、估值批判分析（P/E>300x/通胀64%/价值捕获缺失）、USDY多链数据（8链/ETH$3.3亿/Solana$1.77亿/6329地址）
- [[来源_2025-02_华尔街开放经济_OndoFinance]] — 品牌宣言：华尔街2.0定位（金融市场基础性升级而非颠覆）、开放经济使命、三层受益者框架（投资者/资管人/开发者）、从稳定币到收益币的演进逻辑、Ondo Nexus流动性协议介绍、'Access'作为核心叙事
- [[来源_2025-03_交易生命周期_以太坊_Solana_Aptos_PANews]] — 补充USDY在Aptos上部署数据：截止2025年3月市值约1500万美元，占USDY总市值2.5%
- [[来源_2025-05_去监管_美股RWA_代币化股票_深潮TechFlow]] — 补充Ondo于2025年2月6日宣布Ondo Chain和Ondo Global Markets战略，代币化股票为核心交易标的
- [[来源_2025-04_RWA布局_10项目_PayFi_Biteye]] — 确认 TVL 突破 10 亿美元，巩固美债代币化领先地位
- [[来源_2025-03_RWA流动性_生态资本框架_BlockBeats]] — 叶开/BlockBeats 对Ondo模式的外部批判：早期高控盘、次生代币模式不可持续
- [[来源_2025-06_收益型稳定币_总清单_StacyMuur]] — 提供 USDY 最新市场数据（市值约 $5.8 亿/APY ~5%/非美国投资者定位/Ethereum+Aptos+Stellar 三链/40-50 天转账延迟合规设计/SEC 注册标准）
- [[来源_2026-06_Alpaca_94%25市场_币股竞赛_Odaily]] — 补充Ondo于2024年9月与Alpaca合作代币化美股及ETF的细节，以及Alpaca作为代币化股票基础设施层的全景
- [[来源_2025-02_OndoGlobalMarkets_华尔街DeFi]] — Ondo Global Markets 官方发布公告（2025年2月5日）：1:1 资产支持代币/类稳定币自由转移设计/分发层合规模型/1,000+ 证券覆盖/24/7/365 即时铸销/仅非美国投资者
