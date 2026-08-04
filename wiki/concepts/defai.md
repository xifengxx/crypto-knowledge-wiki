---
type: concept
created: 2026-06-29
updated: 2026-07-02
tags: [defi, ai-crypto, agent]
aliases: [DeFAI, DeFi+AI, AI驱动的DeFi]
---

# DeFAI（DeFi + AI 融合）

## 一句话定义
DeFAI = DeFi + AI Agent 的融合。让用户通过自然语言与 DeFi 协议交互——"帮我用 USDC 在 Aave 上借出 ETH，当利率低于 3% 时自动还"。AI 抽象掉底层技术复杂性，用户不需要理解协议名称、链、Gas 费。

## 三大垂直方向
1. **AI 抽象层（市场洞察/抽象层）**：自然语言→DeFi 操作。代表：Griffain (GRIFFAIN $3.7亿)、Orbit (GRIFT $1.07亿)、Hey Anon (ANON $2.3亿，Daniele Sesta 部署，9+链)、aixbt (AIXBT $6.4亿，38万粉丝)
2. **自主交易 Agent**：量化策略 AI 化，机构级工具向零售开放。代表：VaderAI ($8600万，100%自研工具，集成8个数据源)、Gekko AI (Autopilot 集成)
3. **AI 原生应用**：风险管理/流动性提供/收益优化的 AI 自动化。代表：Mozaic (Archimedes AI，LayerZero 支持)、Sturdy Finance (Bittensor 子网 SN10)、Derive Pro (Messari 合作，2025 Q1 上线)
4. **Path-finder / 多 Agent 协作**（2025年Q1新兴方向）：非单一 Agent 完成所有任务，而是通过多专精 Agent 集群协作完成复杂 DeFi 操作。Core Agent 评估用户画像（资金规模、风险偏好）→ 任务拆解分发到下游专精 Agent（yield farming agent、alpha agent、链上分析 agent）→ 评估 Agent 审核结果。代表：[[wayfinder]]（Parallel/Colony，PROMPT 代币）、[[virtuals]] ACP（Agent Commerce Protocol，自动化 Hedge Fund/TradingDAO）

## 2025 年 1 月生态全景（40+ 项目，来源: Foresight News）
### 市场洞察/抽象层 (20+ 项目)
Griffain、Hey Anon、aixbt、Wayfinder (Parallel/Colony，PROMPT 代币即将发布)、Olas (Modius alpha on Mode, $1.1亿)、VaderAI、The Hive (BUZZ $8000万)、DegenAI ($5300万)、Dolion (BULLY $4600万)、neur (NEUR $4600万，Claude 3.5-Sonnet+GPT-4)、HeyElsa、Orbit (GRIFT $1.07亿，100+链)、Bankr (BNKR $2100万，Base)、Gekko AI ($1700万)、Polytrader (POLY $1300万，Polymarket)、Hiero Terminal ($1760万)、Project Plutus (PPCOIN $620万)、Sola AI (SOLA $400万，Solana 语音助手)、ASYM、Lexicon (LEXICON $440万)、Blormmy ($350万)、Thales ($1780万，ai16z ElizaOS+Story Protocol+Nillion+Shogun)、Moby AI (MOBY $5100万)、Slate、aiPump (AIPUMP $1000万)、DeFAI Agent (DEFAI $700万)

### 基础设施 (10+ 项目)
ai16z (Eliza 框架→AI L1 转型提案)、Virtuals Protocol (低代码 Agent 工具包)、zerebro (Zentients Launchpad)、Mode ($3.8亿，AI Terminal+Bittensor 子网 Synth)、Cookie DAO (COOKIE $1.7亿，首个 AI 代理索引)、Nillion ("盲计算"+"Agent Superhighway"愿景)、SwarmNode.ai (SNAI $5600万)、AiSweatShop (DEFAI $3300万，Arbitrum)、Cod3x (RAG+微调，自建稳定币/借贷/Launchpad)、Empyreal (EMP $6280万，Simulacrum AI 无代码代理)、Ritual (AI 执行层，Polychain+NEAR+EigenLayer+Arthur Hayes 顾问)

### AI 加持的 DeFi 应用 (9 项目)
Derive Pro (链上期权+Messari AI，2025 Q1)、ZyfAI (ZKsync 账户抽象，$200万融资)、Mozaic ($320万，Archimedes AI 收益策略)、Sturdy Finance (STRDY $2600万流通，Bittensor SN10)、Kudai (KUDAI $1360万，GMX Blueberry Club，四阶段路线图)、EnsoFi (跨链 DeFi 中心，Solana/Sui/Eclipse/Movement)、Velvet Unicorn (VU $650万，Velvet Capital via Virtuals)、tao.bot (Bittensor 网关)

## 为什么是 DeFi 的下一波
- DeFi Summer 2020 带来了链上金融原语（借贷/DEX/收益）
- DeFi 2.0 带来了协议可控流动性（Olympus/Curve Wars）
- **DeFAI 将带来用户界面的范式转变**——不再需要理解协议，只需要说出意图

> L2IV 预测：2025 年底，多数新 DeFi 用户将通过 AI 界面与协议交互。

## 相关概念
- [[defi]] — DeFAI 的基础设施层
- [[ai-agents]] — AI Agent 是 DeFAI 的执行单元
- [[stablecoins]] — 稳定币是 AI Agent 操作 DeFi 的结算媒介

## DeFi Agent 工作流（IOSG 6步模型）
AI Agent在DeFi中的标准流程：数据收集（链上索引器+链下API）→模型推理（监督/强化学习+NLP）→决策制定（优化引擎+多代理协调）→托管运行（链下模型+链上交互）→互操作性（API/Webhooks/IPFS）→钱包（MPC或TEE密钥管理）

## 四阶段演进（IOSG）
1. **效率优化**：自然语言交易、实时市场调研——创造"iPhone时刻"
2. **自主交易**：Agent独立执行策略（基于第三方观点/其他Agent数据），极少人工干预
3. **隐私与验证**：TEE+ZKP确保防篡改和可验证——用户开始要求透明度
4. **无代码AI即服务**：代理经济，加密训练模型自主交易

当前瓶颈：多数工具只是ChatGPT包装、链上数据碎片化将AI推向中心化

## DeFAI 赛道中的衍生品 DEX 案例：SynFutures

[[synfutures]] 作为链上永续合约 DEX 赛道前三的项目（累计交易量近 2500 亿美元），于 2025 年 2 月公布了其 DeFAI 三阶段路线图，代表 DeFi 衍生品头部项目向 DeFAI 布局的路径：

1. **三阶段路线图**: 单体 AI Agent（交易/分析/社交交易）→ 开放 AI Agent 生态（Web3 AI Framework）→ Meta Agents（AI 自主生成和管理 Agent）
2. **具体产品**: Trading AI Agent Synthia（自动链上交易）、Alpha Hunter Agent（链上监测+信号推送）、AI社交交易助手（一句话交易）
3. **与传统 DeFAI 项目的差异**: SynFutures 已有真实用户、交易量和手续费收入（5848 万美元），资金储备充足；对比纯 DeFAI 初创项目，更懂交易者痛点但面临落地验证压力

SynFutures 的案例也暴露了 DeFAI 赛道的一个结构性问题：高市值的 DeFi 项目通过增加 AI 叙事来寻求估值重塑，但 AI 功能从规划到落地存在时差，执行风险尚未被市场充分定价。参见 [[来源_2025-02_SynFutures_DeFAI_路线图_深潮TechFlow]]。

## L2 级 DeFAI 基础设施：Mode 三层层级架构

[[mode]] 是当前唯一一条从 L2 协议层提供完整 DeFAI 基础设施的链，其三层层级架构代表了一种"自上而下"的 DeFAI 实现路径：

1. **交互层**: AI Terminal（GPT 驱动 DeFi 智能助手/Synth 概率预测集成）+ AI Agent App Store（7349+ 智能体/$332K AUA/运行于 Giza 和 Olas）
2. **数据层**: Bittensor Synth 子网 SN50（合成价格数据概率分布/CRPS 评估/支持 AMM 流动性优化+期权定价+多路径交易策略）
3. **基础设施层**: Forta AI 安全排序器（99% 漏洞检测/50ms 响应/<0.001% 误报）+ Superchain 跨链互操作性

Mode 的架构优势在于从 L2 层面将 DeFAI 所需的三大组件（用户界面/高质量数据/安全执行）原生集成，但 AUA 仅 $33.2 万/7300+ 智能体的数据表明其产品-市场匹配仍远未验证。参见 [[来源_2025-02_Mode_Network_DeFAI_L2_深潮TechFlow]]。

## Solana AI 黑客松 DeFAI 相关获奖项目（2025-01）
- **Cleopetra**（DeFAI 赛道冠军/$15K）：AI 做市机器人，每 30 分钟自动分析 Meteora DEX 做市机会，通过 Jupiter 执行代币兑换，Telegram 界面操作，商业模式基于用户盈利分成
- **Voltr**（DeFAI 赛道亚军/$7.5K）：模块化收益策略基础设施，完全去许可 Vault 框架，基金经理和 AI 代理可创建自动化收益资金池
- **Xcombinator**（DeFAI 赛道季军/$5K）：AI 项目代币发射平台，$X 市值 $570 万
- **[[the-hive]]**（主赛道冠军/$60K）：模块化 DeFi 策略自动化，$BUZZ 市值约 $1 亿
- **[[project-plutus]]**（Trading Agents 冠军/$15K）："分析+交易"双模块 Agent，$PPCOIN 市值 $1720 万，对标 [[aixbt]]

## 来源
- [[来源_2024-12_六个次新AI项目_SwarmNode_neur_AlphaArc_YesNoError_Soulgraph_Scoutly_Odaily]] — neur 作为 DeFAI 抽象层的早期数据点：与 Griffain 高度同质化但借开源差异化追赶，验证 DeFAI 赛道护城河缺失的结构性问题
- [[来源_2025-01_DeFAI三大方向_0xJeff_BlockBeats]] — **0xJeff 原始框架**：最早系统性提出 DeFAI 三分类（抽象层/自主交易代理/AI 驱动 dApp），成为后续 IOSG/YBB Capital/CGV Research/DWF Ventures 等所有 DeFAI 研报的框架基础；预言 2025 年为"DeFAI Summer"
- [[来源_2025-01_ELIZA_集市理念_大教堂与集市_ChainOfThought]] — ELIZA 信任引擎作为 DeFAI "自主交易 Agent" 基础设施级实现：双层安全系统（实时风险检查+头寸管理）+ 数据飞轮（交易数据库→策略优化→Agent 迭代学习）+ Jupiter 聚合器执行层
- [[来源_2023-12_Web3_AI_赛道全景盘点_BlockBeats]] — 覆盖 AI+DeFi 方向的 SingularityDAO/Arc/PAAL AI/Hera Finance/LeverFi (Morpheus+微软) 等早期项目
- [[来源_2025_L2IV_2025加密货币前景展望]]
- [[来源_2025-01_AiFi生态版图_40+项目_Foresight_News]] — 2025 年 1 月最全面的 AiFi 项目盘点，40+ 项目分三大类，含代币市值快照（如 aixbt $6.4亿、Griffain $3.7亿、Mode $3.8亿），多数项目处于内测/概念期
- [[来源_2025-01_DeFAI生态_AI_Agent交易_PANews]] — IOSG DeFAI赛道mapping：4大类+4阶段演进+抽象AI三强对比（Griffain/Anon/Slate）+TEE/ZKP验证层论证
- [[来源_2025-01_Project89_argOS_ECS_Agent框架_深潮TechFlow]] — ECS 架构天然适合并发处理，在 Agent 量化交易（DeFAI 场景）有理论性能优势
- [[来源_2024-12_四大AI框架横向对比_Eliza_GAME_Rig_ZerePy_BlockBeats]] — AI 框架板块 $17 亿→$200 亿预测，框架市值加权投资策略，为 DeFAI 赛道整体估值提供参考锚点
- [[来源_2025-01_Solana_AI黑客松落幕_获奖项目详情_深潮TechFlow]] — Solana AI 黑客松 9 赛道 21 获奖项目详情，含 DeFAI/Trading Agents 赛道获奖项目及代币市值快照
- [[来源_2025-01_AI_Agent_框架Meme应用_三阶段格局_深潮TechFlow]] — CGV Research：DeFAI 两大方向（Agent 辅助用户 vs Agent 自主交易）、Griffain vs Neur 功能对比、Agent 自主交易信任瓶颈分析
- [[来源_2025-05_AI赛道重拾热度_潜力项目_BlockBeats]] — 补充 DeFAI 相关项目在市场复苏期的表现：Virtuals ACP 协议（多 Agent 协作/自动化 Hedge Fund/TradingDAO）、GRIFFAIN 涨超 60% 的市场数据
- [[来源_2025-01_DeFAI_AI_Agent_新浪潮_深潮TechFlow]] — YBB Capital：DeFAI=意图的新添加路径（AI Agent+Solver+Intent-Centric+DeFAI终极公式），15个项目盘点，2025.1.14 DeFAI代币逆势上涨38.73%（BTC同日跌至$90K下方），GRIFFAIN $457M+ANON $248M合计占赛道37.29%，AI金融化左右分叉论点（Game vs DeFi）
- [[来源_2025-01_DeFAI_入门_The_DeFi_Investor]] — 2025年1月The DeFi Investor入门介绍：HeyAnon/Griffain/Mode三大项目+maxAPY收益优化器，"95%项目会死"的风险警告，DEX/CEX现货交易量创ATH
- [[来源_2024-11_Binance_AI_Agent_报告_深潮TechFlow]] — daos.fun AI 对冲基金模式为 DeFAI "自主交易 Agent" 方向早期实践案例：募集 SOL→投资 Solana 协议→DAO 代币价值取决于交易表现，ai16z 市值曾近 $1 亿
- [[来源_2025-03_AI_Agent_赛道潜力项目_深潮TechFlow]] — 补充DeFAI三分类项目（抽象层：Hey Anon/Griffain/Bankr，交易代理：Cod3x/Almanak，AI dApp：Giza/Olas/Amplifi），与0xJeff原始框架一致，增加Almanak（机构级量化代理）等新项目
- [[来源_2025-01_新AI项目_早期研究_深潮TechFlow]] — Stacy Muur 早期发现视角下的 DeFAI 项目清单：Neur（Solana自然语言→DeFi操作）/Baos.fun（Berachain PoL挖矿自动化）/Almanak（金融策略AI Agent）/Limitus（跨链DeFi策略自动化），覆盖多链DeFAI场景
- [[来源_2024-12_Bankless_十大AI_Meme代币]] — VaderAI作为DeFAI自主交易Agent早期案例：声称首个自主交易AI代理币的机器人，子DAO收益20%分成，VADER质押（1万VADER锁定3个月）获得投资DAO白名单+每1万VADER可追加1 SOL
- [[来源_2024-12_Virtuals生态_AI项目扫描_Odaily]] — Virtuals 生态两个 AI VC 案例：VaderAI（Investment DAO 尚未落地）和 sekoia（Telegram 提交系统无响应），均为早期概念阶段，DeFAI 投资管理方向尚未验证
- [[来源_2025-01_AI_Agent回暖_AIOS_SORA_AICC_BlockBeats]] — SORA 的 Solana Toolkit 和 AIOS 的统一工具接口均涉及 DeFi 交互能力；AICC 作为 AI 投资 DAO 是 DeFAI 投资管理方向的早期失败案例
- [[来源_2024-10_daos_fun_ai16z_pump_fun_Odaily]] — daos.fun 三阶段运作细节：募资→运行→赎回；AI 代理 pmairca 实际投资能力远未验证（持仓 $80 万 vs 代币市值 $4700 万），DAO 代币定价完全脱离 NAV——DeFAI 投资管理方向的核心悖论：叙事溢价主导，业绩验证缺失
- [[来源_2024-12_AI_Agent_年度回顾_2025展望_深潮TechFlow]] — 0xJeff 2024 回顾：链上交易 Agent（Spectral/BigTony+Allora 价格预测）、投资 DAO（ai16z/cryptohayesai/AimonicaBrands）、DeFi Agent（Mode 生态）、AI 应用商店（Alchemist/MyShell）、抽象层（Griffain/Orbit）——五大 DeFAI 相关方向的项目清单和 2025 演进方向
- [[来源_2025-01_特朗普MEME币吸血_DeFAI抄底_50项目盘点_BlockBeats]] — 2025年1月20日 DeFAI 赛道快照：TRUMP MEME币吸血导致AI代币暴跌后的入场机会，50个项目按六大子类别盘点（市场分析/抽象平台/交易代理/启动平台/DeFi优化/基础设施），诚实披露赛道两大结构性问题——护城河缺失（项目高度同质化）和代币价值捕获薄弱（多个项目代币效用不明），MODE数据显示1,684个代理仅管理$30.4万资金
- [[来源_2025-01_AI代理Launchpad之争_Virtuals到Solana_深潮TechFlow]] — 0xJeff 分析 DeFAI Launchpad 格局：Griffain 作为第一个 DeFAI 抽象层正在演变为"阶段性 Launchpad"，Cod3x 和 Almanak 引领交易智能体 Launchpad 方向，DeFAI 抽象层（Orbit/Hive/HeyAnon）有望沿类似路径发展
- [[来源_2025-02_YC春季创业指南_AI_Agent六大Web3赛道_BlockBeats]] — Defi0xJeff 将 DeFAI Agent（Cod3x/Gizatech/Autonolas 的 LP 管理/收益耕作/自动交易）纳入 YC RFS 框架下的「垂直 AI Agent」与「个人 AI 助理」两大赛道；B2A 中的 AI 商业支付（Nevermined）为 DeFAI Agent 的自主支付基础设施
- [[来源_2025-01_DeFAI未发币_6个潜力项目_PANews]] — 6 个未发币 DeFAI 项目盘点：Wayfinder（Parallel 双代币模型，1%+40% 空投）、Axal（CMT Digital 支持，Gekko AI vs aixbt）、Cod3x（Big Tony 最赚钱代理，NFT 空投暗示）、Slate（首个 Hyperliquid AI 代理，51+协议/11链）、Almanak（LEGION 预售完成）、HeyElsa（专有 LLM，ChatGPT UX，积分激励）；文章预测 2025 年底 DeFAI 千亿美元市值（从 $27 亿起需 37x 增长）
- [[来源_2025-01_DeFAI驱动DeFi_Summer_AI降低门槛_PANews]] — WOO 撰写 PANews 普及向文章：从 1.4% DeFi 渗透率数据出发论证 DeFAI 叙事必然性，三分类项目地图（AI抽象层 Griffain/Heyanon/Grift/Buzz + 自动化交易 Almanak/Cod3x + 市场分析 AIXBT/Kwant），核心论点为"DeFAI将驱动下一波DeFi Summer"
- [[来源_2025-11_NOFX_AI加密交易系统_技术演进]] — NOFX 是"自主交易 Agent"方向的具体工程化实例：Go后端+React前端的完整系统，三层风控（杠杆上限/仓位上限/盈亏比≥1:3）+ 自我进化机制（复盘过去20次交易自动调整策略），为 DeFAI 自主交易方向提供了可运行的参考实现
- [[来源_2024-11_AI_Agent_DeFi_全景_ThreeSigma]] — 2024.11 时间切片的 AI Agent x DeFi 全景图，交易/预测/Agent创建/基础设施六层分类法，60+项目清单，包含较早期 DeFAI 项目数据和服务经济 14 万亿美元市场规模的分析框架
- [[来源_2025-02_DeFAI_DeFi_AI_Saurabh]] — Saurabh Deshpande 为 Decentralised.co 撰写的深度分析：从算法交易历史（Medallion Fund 39% CAGR）到 DeFAI 产品的一手实测（Hey Anon/Orbit/AIXBT），包含 AIXBT 胜率 39% 的首个量化数据，以及 DeFAI 三支柱（情报+执行+界面）和多 Agent 协作方向（Listen）的讨论
- [[来源_2025-02_Mode_Network_DeFAI_L2_深潮TechFlow]] — Memento Research Mode 深度研报：Mode 三层层级架构（交互层/数据层/基础设施层）作为 L2 级 DeFAI 基础设施的完整实现，veMODE 代币经济模型，7300+ 智能体实操数据，生态案例研究（ARMA/Amplifi/BabyDegen），以及 Bittensor Synth 子网 SN50 在 DeFAI 数据层的具体落地
- [[来源_2025-02_OKX_AI_Agent版图_上_深潮TechFlow]] — OKX Ventures 研报上篇将 DeFAI 定位为 AI 代币演变的 "Stage 4.5 金融应用（生态融合期）"，从演化角度提供了 DeFAI 的分类框架补充
- [[来源_2025-03_OKX_AI_Agent版图_下_PANews]] — OKX Ventures 研报确认 DeFAI 市场 < $10 亿 vs DeFi $1100 亿的百倍增长空间，深度拆解 Griffain（Solana 首个高性能抽象 AI，SSS 密钥拆分，AI 应用商店模式）作为 DeFAI 核心代表项目
- [[来源_2025-04_Virtuals_Web3AI_DeFAI_深潮TechFlow]] — 提出 DeFAI 第四方向 Path-finder / 多 Agent 协作：Wayfinder 路径发现、Virtuals ACP 三元组（Core Agent → 任务执行 Agent → 评估 Agent）、自动化 Hedge Fund 和 TradingDAO 方向
- [[来源_2025-05_Alliance毕业季_20加密初创_深潮TechFlow]] — Alliance 2025年5月批次中的 Orbit 被定位为 DeFAI 助手，旨在简化 DeFi 收益挖矿和流动性提供等操作，为 DeFAI 赛道增加了另一消费者友好型用例
- [[来源_2025-02_DWF_Labs_AI代理_变革潜力_BlockBeats]] — DWF Labs研究报告详细阐述DeFAI如何解决DeFi三大成长痛点（金融知识门槛、钱包跨链复杂性、资产组合管理低效），将DeFAI定位为AI代理最大的应用场景
- [[来源_2025-02_SynFutures_DeFAI_路线图_深潮TechFlow]]
- [[来源_2025-04_ETHGlobal_Taipei_黑客松8项目_PANews]] — DynaVest 作为 DeFAI 智能体，通过 Multicall3 跨链聚合 Morpho 借贷、EigenLayer 再质押和 Uniswap 流动性，用户一次签名即可自动化执行多链 DeFi 策略
- [[来源_2025-02_DeepSeek_Agent泡沫_DeFAI_PANews]] — BlockBooster 从 DeepSeek 视角分析 DeFAI 前景：低成本推理使成百上千 Agent 可组合为 Swarm，每个 Agent 处理细分任务；DeFAI 被定位为 Agent 泡沫破灭后"孕育新生"的方向，有望推动 DeFi 协议活跃度和流动性上升
- [[来源_2025-04_A2A_MCP_Web3死亡盲区_PANews]] — 链上观在讨论 A2A/MCP 协议落地 Web3 时，将"Web3 AI Agent 大多停留在一键发布Agent的初级阶段，缺乏深度应用场景如DeFAI、GameFAI"列为第一大死亡盲区，揭示了 DeFAI 作为应用场景仍处于早期阶段的结构性问题
- [[来源_2025-04_Web3_AI_Agent落地场景_Haotian]] — Haotian (CryptoInsight) 对 DeFAI 方向提出质疑：AI 模糊推理/幻觉与交易精准性天然相悖，主张短期优势在外围辅助（数据清洗/意图解析）而非直接交易执行，为 DeFAI 赛道提供了"过热警惕"的批判性视角
