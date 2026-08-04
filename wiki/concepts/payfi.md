---
type: concept
created: 2026-06-29
updated: 2026-06-30
tags: [solana, rwa, payment, defi]
aliases: [PayFi, 支付金融]
---

# PayFi（支付金融）

## 一句话定义
PayFi = 围绕"货币的时间价值"创建的新金融原语。利用未来现金流作为当下交易媒介，严格属于 RWA 赛道。由 Solana Foundation 主席 Lily Liu 提出并主推。

## 核心原理
- **货币的时间价值（Time Value of Money）**：未来的 $100 ≠ 今天的 $100，PayFi 将这种时间差金融化
- **可编程货币**：不仅用于交易支付，还可基于预设规则自动执行复杂金融操作
- **区别于 DeFi**：DeFi 围绕金融交易产品（借贷/DEX/衍生品），PayFi 围绕商品和服务（支付/应收/供应链）

## 代表项目
| 项目 | 定位 | 数据 |
|------|------|------|
| **Huma** | 应收账款承购 + 借贷协议 | $8.9亿支付融资，0%违约率 |
| **Arf** | 跨境支付营运资金信贷 | 无担保短期 USDC 信贷 |
| **Sanctum** | Solana LST 流动性层 | 小 LST 流动性聚合 |

## 区块链支付四层架构（Binance Research）
1. **结算层**：L1/L2区块链（BTC/ETH/Solana/Optimism），销售区块空间，类比传统支付中的银行网络
2. **资产发行层**：稳定币发行商（Tether/Circle），资产负债表驱动（利差模式），区块链支付堆栈唯一新增"中介"
3. **出入金层**：法币↔稳定币桥接（Moonpay等），收取~1.5%费用，是整个堆栈最昂贵的部分
4. **接口/应用层**：面向用户的支付应用（Binance Pay等），平台费+交易费模式

⚠️ **核心瓶颈**：法币→稳定币→法币完整链路成本高达3%，出入金层是区块链支付大规模采用的最大障碍。Binance Pay的策略是构建商家网络让用户直接用加密货币消费，绕过出入金层。

## 市场规模数据
- 全球支付行业收入：**$2.83T**（2024），预计$4.7T（2029），CAGR 10.8%
- B2B跨境支付：**$39T**（2023）→ $53T（2030），增长43%
- 全球汇款流入：**$857B**（2023），平均成本6.35%（$540亿总费用）
- 稳定币2023年支付量：**$2.3T**（排除机器交易）
- 区块链vs传统速度：区块链100%交易<1小时 vs 汇款30%需>1天
- 全球14亿成年人无银行账户 → 区块链"跨越式"机会

来源：[[来源_2024-09_Binance_Research_区块链支付一个新的开始]]

## 为什么重要
- Solana 官方主推叙事，继 Memecoin 之后的下一个增长方向
- 将传统金融的应收账款融资（Factoring）搬到链上，用 USDC 结算
- 属于 RWA + 支付的交叉赛道，连接加密货币与实体经济
- 挑战：KYC/合规门槛 vs 去中心化愿景、传统金融机构的成熟模式

## 相关概念
- [[rwa]] — PayFi 严格属于 RWA 赛道：未来收入/应收账款代币化
- [[stablecoins]] — USDC 是 PayFi 核心结算媒介
- [[defi]] — DeFi 面向金融交易，PayFi 面向商品服务
- [[solana]] — Solana 是 PayFi 叙事主战场（待创建）

## 我的立场
PayFi 概念本身不新——应收账款融资是传统金融的成熟业务。但 Solana Foundation 把它包装成新叙事是聪明的战略：把加密从"赌场"叙事拉回"支付"初心。真正的 PMF 在于跨境中小企业的营运资金缺口，这个市场比 DeFi 借贷大几个数量级。关键看 Huma/Arf 能否在合规框架下实现规模化，以及 Solana 生态能否围绕 PayFi 建立完整的供应链金融基础设施。

## DePayFi：IOSG 的多链 PayFi 全景框架（2024.12）

IOSG Ventures 提出 DePayFi（Decentralized Payment Finance），将 PayFi 从 Solana 生态叙事扩展为多链全局框架，核心主张：
- **智能美元（Smart Dollar）**：并非每一个美元都相等——PayFi 将 DeFi 整合到支付中，使闲置资金自动寻找产生收益的机会
- **解决不可能三角**：传统金融中收益/流动性/风险不可兼得，PayFi 利用区块链打破此模式，维持流动性的同时提供有竞争力的收益
- **两大产品方向**：
  1. 支付时金融产品：提前付款折扣、分期付款/BNPL、商家加速支付
  2. 嵌入式收益解决方案：钱包内置收益、生息稳定币、CEX 灵活收益（收益来源：DeFi 借贷/协议空投/delta 中性策略/美国国债）
- **五大支柱**：
  1. [[huma]] — 基础设施（六层 PayFi 堆栈）
  2. [[fun-xyz]] — 支付层（Checkout 跨链结账）
  3. [[morpho]] — 嵌入式收益（模块化借贷，几行代码即集成）
  4. Offramp — Web3 卡（稳定币支持加密卡，5% USD 收益率）
  5. Bridge — 出入金（orchestration APIs，稳定币支付整合，>5% 国债收益）

链上嵌入式收益的核心优势（vs 传统金融科技）：用户自我托管 + 自主流动性管理 → 提升透明度和资本效率。例：Revolut $130 亿存款仅 3% 利息 vs 链上资金可分配至流动性池最大化收益。

## Solana 支付进展（Q4 2024）
- **Stripe**：重新整合美国加密支付，通过Phantom钱包现场演示Solana交易
- **Solayer**：推出sUSD，首个RWA背书的合成稳定币（可访问代币化美国国债）
- **Sphere**：$5M战略融资，与Etherfuse合作添加MXN（墨西哥国债代币）和USTRY（美国国债背书），展示Phantom→银行账户的能力
- **Fuse**：虚拟银行账户上线，支持USD直接转换为USDC
- **数字卡**：SolCard和Kast上线Apple Wallet数字卡，Sanctum Cloud Card等待上线
- **Helio**：MoonPay在Q4结束后收购Helio
- Visa扩展USDC结算试点至Solana（2023年Q3起）
- Siam Commercial Bank（泰国最古老商业银行）将在Solana上提供稳定币跨境支付和汇款服务

## Aptos 的 PayFi 定位
Aptos 以"安全、高效、合规"三位一体定位切入 PayFi 赛道，形成与 Solana 主推 PayFi 叙事的差异：
- **安全**：Move 语言资源模型防止双重支付，确保每一次稳定币转账准确性；AptosBFT 去中心化共识降低中心化风险
- **高效**：内存池预排序和 Block-STM 保证支付交易的稳定性和低延迟；高 TPS（160,000）分摊 Gas 成本，使小额支付场景极具竞争力
- **合规**：模块化架构支持开发者嵌入 KYC/AML 检查，优于以太坊的中心化中继模式和 Solana 提议者主导的潜在合规短板
- **高 TPS 和低成本支持微支付场景**：内容创作者实时打赏、跨境结算等

Aptos 在稳定币支付领域的叙事聚焦于"下一代支付基础设施"和"安全驱动的价值网络"，连接传统经济与区块链。

来源：[[来源_2025-03_交易生命周期_以太坊_Solana_Aptos_PANews]]

## Base/Coinbase 链上支付进展（Jesse Pollak 2024.10）
- Jesse 在奥克兰共同经营一家餐馆，感受到 3-5% 利润被支付处理费吞噬的痛点
- acceptusdc.com 商户支付推广 + 扫码支付 + PoS 改进是短期重点
- Jesse 希望 2025 年夏天能用 Coinbase Wallet 在棒球比赛买热狗
- OAK 本地稳定币试点（swap.oak.community）

## Base App 的 Base Pay（2025年7月）

2025年7月，Base App（原 Coinbase Wallet）正式推出 Base Pay，支持用户使用 USDC 进行几乎实时的低成本支付，这是 PayFi 概念在 Base 生态的重大落地：

- **Shopify 合作**：Base Pay 已与电商巨头 Shopify 合作，未来将支持全球数百万商户接受 USDC 支付
- **4.1% APY**：用户仅需持有 USDC 即可享受 4.1% 的年化收益率
- **1% 现金返还**：计划年底面向美国用户推出消费支付 1% 现金返还奖励
- **Flashblocks 技术底座**：200 毫秒区块时间为 Base Pay 提供高吞吐量支持

Base Pay 将 Base App 从"交易加密资产的工具"升级为 Web3 世界的综合支付入口。详见 [[来源_2025-07_Coinbase_Wallet_Base_App_Web3超级应用_深潮TechFlow]]

## Solana vs Base：稳定币支付基础设施选型（Squads 2025.03）

Squads博客从支付基础设施选型角度系统对比了Solana和Base，核心结论：

### Solana的优势
- **去中心化费用市场**：本地费用市场 + Jito交易分割引擎使费用可预测且低廉
- **费用归属**：费用流向1000+去中心化验证者，而非单一公司
- **REV主导**：2024年Q4 REV $7.51亿，所有公链第一
- **应用生态丰富**：pump.fun $4.5亿累计费用、稳定币TVL $107亿（ATH）、跨境支付/POS/借记卡/收益生成等垂直领域已落地
- **可信中立性**：抗审查，适合构建全球化的无国界货币流动应用

### Base的优势
- **Coinbase分销**：美国CEX 45%市场份额，用户主要为北美用户
- **USDC深度协同**：零入金费、折扣Gas、免费应用Gas额度
- **监管从容**：无原生代币，未受SEC调查
- **排序器效率**：仅8%收入用于以太坊结算
- **快速迭代**：中心化设计使升级快速、OP Stack持续扩容

### 谁适合用谁
- 面向全球市场、需要抗审查和长期可信中立性 → Solana
- 面向北美市场、受监管企业、优先合规 → Base
- 文章长期判断：Solana将主导稳定币支付，Base承担新用户引导角色

来源：[[来源_2025-03_Solana_Base_稳定币支付_Squads]]

## Circle Payments Network (CPN) 的 AI Agent 支付用例
CPN 白皮书明确将 AI Agent 支付（4.1.E 章节）列为商业支付用例之一：AI Agent 可代表用户/系统自主跨境预订物流服务并完成支付，通过智能合约以编程方式执行，实现机器对机器的跨境支付。这验证了 PayFi 叙事中 AI 自主经济参与者的方向。详见 [[来源_2025-04_Circle_Payments_Network_稳定币支付网络白皮书]]。

## 来源
- [[来源_2025-04_RWA布局_10项目_PayFi_Biteye]] — Huma PayFi 项目参与方式：Huma 2.0 Classic 10.5% USDC 年化 vs Maxi 模式（高羽毛积分、无年化）
- [[来源_2024-09_Web3_Mass_Adoption_Web2.5_深潮TechFlow]] — PYUSD 突破 $10 亿 + 线下支付合规壁垒：小团队难以切入 PayFi 线下支付，需要传统金融资源（PayPal/PYUSD 更有优势）
- [[来源_2024_PayFi_Solana新叙事]]
- [[来源_2023-09_Web3支付_行业巨头_PANews]] — PayPal/Coinbase/MetaMask三巨头支付闭环拆解：出入金+链上支付双路径、合规壁垒（MTL/BitLicense/EMI/MiCA）
- [[来源_2024-02_GSR数字资产参考包_Web3入门指南_BlockBeats]] — 区块链支付优势(7×24/低成本/即时结算)/支付系统挑战(网络效应/行为惯性)/BTC/XRP/Stellar支付对比
- [[来源_2024-12_Solana_Q4状况_Messari]] — Stripe/PayPal/Solayer sUSD/Sphere/Fuse/数字卡/Siam Commercial Bank Solana支付进展
- [[来源_2022-11_Web3支付赛道全景_ZONFF_Research]] — 2022年Web3支付完整版图：传统支付四方模式→加密支付映射、SCP协议（信息流/资金流分离）技术原理、出入金四层玩家拆解、地域差异机会（拉美65%无银行账户/DolarApp USDC跨境方案）、流支付（Zebec）与ZK隐私支付创新
- [[来源_2024-10_Base创始人Jesse答社区100问]] — Coinbase 链上支付实地试点：acceptusdc.com 商户推广、OAK 本地稳定币、扫码支付路线图
- [[来源_2024-12_AI_稳定币_三阶段采用_Peter-Schroeder]] — AI Agent + 稳定币跨境支付场景：AI 分析汇率+识别最优路径+自主执行转账，传统汇款 ~6% 费率 vs 稳定币近零成本
- [[来源_2024-08_Blackbird_Pay_特洛伊木马_加密支付_Web3Brand]] — Blackbird Pay 是消费级加密支付的标杆落地案例：2% 费率（vs 行业 3-4%）+ $FLY 链上积分 = "支付+忠诚度"双飞轮，证明任何有流量的消费类 Crypto 应用都可以变成支付公司
- [[来源_2024-10_AI一小时研报_支付赛道_5个Prompt_Web3Brand]] — Stripe 稳定币支付实战流程拆解（5步：法币支付→银行清算→Stripe内部USDC兑换→链上传输→商户法币收款）；全USDC闭环愿景：5方→3方模型、费率2.5-3%→0.5-1%、T+2→即时结算；Bridge $11亿收购定价逻辑
- [[来源_2025-04_普吉岛加密沙盒_泰国_稳定币支付_Tiger_Research]] — 泰国普吉岛加密支付沙盒实战：SCB Rubie Wallet在DevCon实现即时加密转法币、Bitkub私有泰铢稳定币被评为最可行支付资产、政府借可追溯数字资产改善外国人消费税收征管
- [[来源_2024-12_DePayFi_智能美元_PayFi堆栈_IOSG]] — IOSG DePayFi 全景框架：智能美元/不可能三角破解/五大支柱（Huma/Fun/Morpho/Offramp/Bridge）/两大产品方向
- [[来源_2023-10_加密支付卡_发卡即服务_BlockBeats]] — 加密支付卡爆发逻辑：出金安全+ChatGPT订阅需求、"发卡即服务"模式拆解（Marqeta/Galileo/Gnosis Pay）、四方盈利模型、用户充值资金被用于美国国债投资的 RWA 套利
- [[来源_2024-09_Huma_Finance_3800万融资_PayFi_ChainCatcher]] — Huma 3800 万美元融资详情（Distributed Global/Circle Ventures/ParaFi/Hashkey/Folius/Fenbushi）+ Arf 收购细节（1-6 天周转/50+次年周转/2%保证金/Senior-Junior 分级流动性池）+ 全球跨境支付 $4T 预付资金锁定痛点 + Huma x Scroll 联合激励活动
- [[来源_2024-11_稳定币格局_散户参与_万亿赛道_BlockBeats]] — 稳定币支付效率对比：传统跨境支付约6.25%费用/结算长达5天 vs 链上外汇0.15%-0.25%/即时结算（成本降低约90%）；B2B支付年交易额120-150万亿美元/P2P 1.8-2万亿/B2C 5.5-6万亿；链上外汇作为"最大市场空白"（传统外汇日交易量7.5万亿）；新兴市场稳定币溢价数据（阿根廷30.5%/尼日利亚22.1%/土耳其GDP的3.7%）
- [[来源_2024-12_XRP_500亿市值飙升_Ripple_RWA_ETF_insights4vc]] — Ripple/XRPL 作为跨境支付赛道的元老级方案：联邦共识+Trust Lines+Rippling 机制提供不同于 Solana PayFi 的支付技术架构；但 RLUSD 延迟上线说明合规是支付赛道最大摩擦；MoneyGram 历史合作（$5000 万补贴）暴露"企业采用需要经济激励而非技术优势"的核心问题
- [[来源_2025-07-13_稳定币四大未来方向]] — ConduitPay $100亿年化支付额/16x增长（拉美+非洲跨境B2B）；Shopify通过Stripe接受USDC、PayPal PYUSD市值$10亿、沃尔玛亚马逊计划自主稳定币；AMM上EURC/USDC兑换比Wise便宜30bp
- [[来源_2024-12_RWA赛道未发币潜力项目_odaily]] — Huma 定位为全球首个交易量突破 20 亿美元的 PayFi 网络，推出 PayFi Stack 概念，运行于 Polygon/Celo/Scroll 等 L2
- [[来源_2024-09_PayFi_五大Web3支付项目_Followin]] — 2024.09 PayFi 五大项目全景：Ondo（$5.56亿TVL收益型稳定币）/Karrier One（DePIN电信支付/KNS手机号钱包）/Huma（$9亿支付融资）/Sphere Pay（0.3%费率支付API）/Loopcrypto（企业支付自动化）；Tether迪拉姆稳定币+Circle iPhone NFC支付+PYUSD跃升第六大稳定币
- [[来源_2023_移动货币_Web3_普惠金融_维斯曼笔记]] — 移动货币+Web3在非洲的普惠金融场景：SIM卡绑定钱包=去中心化账户、USDC规避本币汇率贬值、RWA资产保值，全球仍有24%人口无银行账户
- [[来源_2025-02_Cryptorails_支付超导体_Archetype]] — 拓展了 PayFi 的 B2B 跨境支付场景细节：$2400 亿收入/$150 万亿交易量市场、Stripe 国际结算需一周的痛点、出入金层的成本结构（5-10%）和 P2P 代理模式在非洲/拉美的实操数据；包含 20 个 5 年预测，是 PayFi 赛道战术层面的重要补充
- [[来源_2025-06_区块链重塑七行业_代币化_insights4vc]] — Stripe以$11亿收购Bridge的行业背景和战略定位：Stripe的交易轨道已触及约1%全球GDP，Bridge使其商户可直接接受美元稳定币。补充PayFi在企业级B2B支付场景的落地证据
- [[来源_2025-06_非洲跨境支付_稳定币_OuiCapital]] — 非洲跨境支付全景数据（3290亿美元市场、三条支付路径成本对比、稳定币三大核心用例），补充PayFi在新兴市场的真实PMF证据
- [[来源_2025-08_a16z_银行_资管_Fintech_区块链转型_深潮TechFlow]] — a16z指南中Fintech/PayFi章节：Fintech通过稳定币支付和专属L2（Base/Ink/Unichain）构建新型跨境支付服务，OP Stack成为构建支付L2的主流框架，Coinbase Base作为L2示例
- [[来源_2025-03_稳定币支付_四层技术栈_深潮TechFlow]] — Foresight Ventures 稳定币支付行业四层技术栈全景（应用层/支付处理商/资产发行商/结算层），30+ 支付赛道项目具体运营数据（BVNK $100亿年化/Hellio 45万用户等），"稳定币三明治"向"稳定币原生经济"演进方向的提出
- [[来源_2025-06_Artemis稳定币支付_深潮TechFlow]] — Artemis 自下而上稳定币支付数据：B2B $360亿年化为最大类别（远超P2P的$180亿），Huma 亚马逊试点将供应商付款从数天缩短至<3小时，预融资 $25亿年化反映跨境垫资需求
- [[来源_2025-03_Solana_Base_稳定币支付_Squads]] — Solana vs Base支付基础设施选型对比：Solana去中心化/REV主导 vs Base合规/Coinbase分销优势
- [[来源_2025-05_加密支付卡_乱纪元_生意经]] — 加密支付卡"乱纪元"分析：纯U卡资金池风险（用户充值Crypto流入服务商链上账户，法币端仅为公司子账户而非同名存款）、"卡+银行账户"新模式（SafePal & Fiat24瑞士银行账户实现券商出入金/Wise跨境汇款闭环）、2025年Web3支付从2B向2C叙事转折（OKX Pay）
- [[来源_2025-07_Coinbase_Wallet_Base_App_Web3超级应用_深潮TechFlow]] — Base App 的 Base Pay 支付基础设施：USDC 即时支付、Shopify 合作覆盖数百万商家、4.1% APY、1% 消费现金返还
- [[来源_2025-06_万事达卡_链上买币_Chainlink_PANews]] — Mastercard与Chainlink合作打通法币入金至链上资产通道，是传统支付网络与DeFi融合的PayFi落地案例，30亿+持卡人可通过信用卡直接购买链上资产
- [[来源_2025-04_PayFi_Huma_暴雷风险_PANews]] — Huma 最新的运营数据更新（$3.9B 累计交易量/$19.92 亿 Arf 授信/$853.6 万月收入）、Huma 2.0 在 Solana 上线详情、P2P 风险专题分析（9 类风险披露）、HUMA 代币发行计划（Jupiter LFG）；作为 PayFi 叙事实证的最新补充
