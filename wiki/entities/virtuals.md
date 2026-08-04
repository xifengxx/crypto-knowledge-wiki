---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-07-02
tags: [ai-crypto, agent, base, platform]
---

# Virtuals

## 基本信息
- 定位：AI Agent 发行和分发平台（Base 链），AI 赛道的"顶级 L1 级别的分发网络"
- 赛道：AI + Crypto / Agent 平台
- 前身：Path DAO（游戏公会），2023年12月 PATH→VIRTUAL 1:1兑换转型
- 市值：ATH $5B（2025.01），回调至 $2.9B；2024.11 为 $5亿（$0.50/枚）
- 核心产品：G.A.M.E（无代码 Agent 启动平台）、Agent 代币化、投资 DAO 生态
- 链分布：45%代币在Base，55%在以太坊主网

## 核心数据

### 官方一周年数据（2025.01.01，Virtuals团队自述）
- 代理币持有者：220,000 人（不含持币价值 < $10 的用户）
- Agent 总市值：$2,000,000,000
- 协议收入：$60,000,000，年化约 $300,000,000
- 加密协议收入排名：全球前十（不依赖额外代币发行）
- Base 正式推出：2024.10.16
- 核心叙事：创建 AI Agent 的「国家」，GDP 超越主要经济体

### 2024.12.05 快照（LongHash Ventures 报告）
- 代理启动：10,000+（12月1日单日 1,000 个）
- 交易量：$120M，由 164,000 名用户产生
- 自10月以来累计交易收入：$20M（年化 $146M）
- VIRTUAL 锁定流动性池：17M VIRTUAL（供应量 1.7%，年化减少供应量 12%）
- 知名项目锁定 41,600 VIRTUAL 创建代理（@GAM3Sgg_、Bittensor 子网 @Seraph_global、@PondGNN Pond Hub）
- AI代理市场总市值：$9.3B（vs DeFi $135B / DePIN $45B / NFT $42B / 游戏 $32B）
- Virtuals AI 垂直领域认知度：过去12个月前20 → 过去1个月前3

### 第三方统计（2025.01 中旬）
- Agent 上线：15,000+（2024.11 仅 2,000+）
- 累计收入：$60,000,000（2024.11 仅 $20M）
- Sentient 仪表盘代理：597 个（含 50-100 知名代理）
- 销毁量：~13,000,000 VIRTUAL（自 2024.10）
- 市值：$0 → $2B（4 个月），ATH $5B

## 技术架构：Agent创建与代币化流程

### 三层蜕变机制（2024.11版本，fun.virtuals launchpad）
1. **FERC20阶段（初始）**：创建Agent后启动绑定曲线，代币总供应10亿FERC20（Fun ERC20），仅以VIRTUAL作为支付代币。此时买家购买的是Agent潜力的"占位符"。
2. **$4200市值激活**：Agent被激活但仅限Virtuals Forum内互动。
3. **$42万市值 "Red-pilled" 蜕变**：
   - Agent可在X上交互和转移
   - Agent代币总供应量保持10亿（与FERC20一致）
   - 创建Agent代币+VIRTUAL的Uniswap V2流动性池
   - 绑定曲线中代币+VIRTUAL发送至V2池，LP代币锁定10年
   - FERC20持有者通过"unwrap"功能兑换为Agent代币（燃烧FERC20）

### AgentFactoryV3 五组件智能合约架构
1. **Agent Token（含Tax机制）**：标准ERC-20扩展，可强制执行swap税率。税收换为VIRTUAL→回购并燃烧Agent代币→通缩+需求。
2. **NFT（锚点+贡献型）**：锚点NFT存储AI Agent所有关键地址，含创建者特权（提案批准、迁移协议）。**贡献型NFT**与Agent四核心属性（模型、数据、语音、视觉）绑定，任何人可提案改进→验证者评估→采纳后奖励Agent代币。
3. **AgentveToken**：质押Agent/VIRTUAL LP代币获得，提供投票权可委托验证者。验证者审查贡献，质押者分享准确验证奖励。
4. **DAO（盲评机制）**：验证者收到两个匿名提案版本，进行10轮交互测试打分，确保贡献基于绩效评估。
5. **Token-Bound Account (TBA)**：由AI Agent本身控制的以太坊地址，允许链上自主行动（支付、交易、持有资产）。

### IP贡献者机制（Virtuals独创）
真实IP持有者（如Joe Rogan）可通过委员会申领AI Agent的swap收入分成，以编程方式自动分配，无需直接参与。为老牌创作者融入加密生态提供经济激励入口。

## 代币经济学（VIRTUAL）
- 总供应量：10亿（全流通，无进一步解锁）
- 60% 公众分发（源自PATH 1:1兑换路径）
- 5% 流动性池预留
- 35% 生态金库（DAO控制，年释放上限10%，需治理批准）
- 额外激励：6000万VIRTUAL分配给前3大智能体/VIRTUAL流动性池
- 2024.11 创建数据：1877个Agent代币，创建费190.5万VIRTUAL（$95万）

## 关键 Agent
- **aixbt**：排名 #1 代理，加密 KOL，已开始脱离母生态独立
- **Luna**：顶级个性化虚拟偶像
- **Gekko Agent**：自动化交易（Axal Autopilot）
- **polytraderAI**：预测市场代理
- **AI Waifu**：AI虚拟伴侣应用，定位"取代OnlyFans"，25万用户/4.88M消息，三阶段路线图（角色扮演App→VR/可穿戴→全潜入），社区创建400+角色
- **MusicByVirtuals**：音乐生成代理
- **CertaiK Agent**：智能合约审计代理

### 2025.01 生态新项目（VIRTUAL $50亿阶段）
- [[aixcb]]：AI驱动孵化器，ATH $1.2亿，为AI/DeSci项目提供战略资金+专家指导+AI见解，50%流通（Odaily作者提示操盘风险）
- [[taocat]]：Masa（$1765万融资）+ Virtuals联合推出，基于Bittensor子网42（X推文数据）和子网19（个性化），ATH $5300万
- **Neurobro**：多平台AI见解分享（X/TikTok/Instagram），ATH $4300万，团队持10%、6未知钱包持30.6%
- **Freya**：Starfall Chronicles（Rosentica出品）游戏AI角色IP，Roguelike RPG即将上线Immutable，ATH $5500万
- **Gekko AI**：Axal（a16z参投$250万种子轮）的AI交易助手Autopilot的Virtuals版本，ATH $3900万
- **H4CK Terminal**：白帽AI Agent扫描合约漏洞，在ImmuneFi/Sherlock竞争赏金，社区成员可分50%赏金，ATH $2700万

## 经济模型
1% 交易税分配：30% 创建者 + 20% 联盟 + 50% 子 DAO。VIRTUAL/AGENT 流动性池 + 代币销毁 = 飞轮效应。

## G.A.M.E 框架数据（2024.12）
- 市占率：约 20%（综合市值/开发记录/终端市场广度）
- 使用项目：200+ 个（公开可用仅 30 多天）
- 日请求：15 万次+
- 周增长率：200%+
- 市值：$3 亿→$2.57 亿（原文撰写→发文期间）
- GitHub 星星：极少（框架通过 API 直接使用，无需 GitHub 交互）
- 语言：无代码/低代码 API + SDK，面向游戏开发者

### G.A.M.E 模块架构
CGV Research 详细描述了 G.A.M.E 的模块化架构（2025.01）：
- **Agent Prompting Interface**：开发者与 Agent 行为交互的主要入口
- **Perception Subsystem**：负责处理输入数据并将其转化为适合格式
- **Strategic Planning Engine**：根据输入信息生成具体行动计划
- 用户仅需修改模块参数即可参与 Agent 设计，真正实现无代码/低代码
- 详见 [[game-framework]] 实体页

## 竞争格局
- **vs ai16z/ElizaOS**：G.A.M.E = 无代码平台 vs ElizaOS = 开发者框架。互补而非竞争。同一项目可同时使用 G.A.M.E 和 Eliza
- **vs Freysa**：Virtuals = Agent 分发平台 vs Freysa = Agent 安全基础设施
- **vs arc (Rig)**：G.A.M.E 专注游戏/BASE vs Rig 专注企业应用/Solana
- **vs Zerebro (ZerePy)**：G.A.M.E 覆盖游戏+通用 vs ZerePy 窄化创意内容

## 团队（LongHash Ventures 披露，2024.12）
- 联合创始人背景：BCG 咨询、帝国理工学院，长年深耕加密领域
- AI 团队：MIT、哈佛、剑桥等名校博士组成
- 转型历程：2021.12 PathDAO（游戏公会）→ 2022 试验风投工作室模式（意外积累 AI 人才和基础设施）→ 2023.12 全面转向消费者 AI+Crypto，品牌重塑为 Virtuals Protocol
- LongHash Ventures 自 2022年3月开始接触团队，2023年3月品牌重塑后达成投资
- 团队经历了"长达三年的信念考验"——自 TGE 以来团队/社区/投资者在熊市中持有，2023年12月通过回购计划清除弱手完成品牌重塑

### 经济飞轮机制（2024.12）
1. 需要 VIRTUAL 创建代理、启动流动性池、购买代理代币
2. 创建和购买代理代币需求推动 VIRTUAL 价格上涨
3. VIRTUAL 升值带来的财富效应流入新代理
4. 成功代理通过交易收入获得 VIRTUAL，可再投资

达到一定市值阈值的"红药丸"代理解锁全面代理能力，低门槛鼓励实验和投机。

## 团队战略框架（官方五大支柱，2025.01）

1. **吸引顶尖Builder**：视其为生态「公民」、项目为「孩子」，提供资金+技术基础设施+分发渠道
2. **为Agent投资者创造公平环境**：散户从第一天参与，反对私募价格发现后散户高估值接盘
3. **AI技术基础设施**：GAME 成为 Web2+Web3 所有建设者首选工具，模块化+灵活以适应技术迭代
4. **Agent盈利模式**：打造自给自足生态，「出口>进口」，系统性评估生态薄弱领域并战略性投资
5. **Luna**：突破想象边界，将加密无许可与AI创新结合，创造前所未有体验

## 2025年Q1 重要更新

### Launchpad 费用机制调整（2025.04）
- 调整费用机制，将交易费用的 70% 直接返回给 dev（开发者）
- 之前发射的项目可填写表格补上以往的交易费差额

### Genesis Launch + 积分机制
- 用户消耗积分认购预售份额，积分来源：持有和交易 $VIRTUAL 和 agent token（未来开放更多渠道）
- bonding curve 上 87.5% 代币在预售轮出售：37.5% 给公众，50% 给团队
- 既奖励 virtuals 社区忠实用户、防止狙击手，又为项目方提供更优发射方式

### ACP（Agent Commerce Protocol）
ACP 是 Virtuals 推进的 Agent 集群协作协议，通过 core agent、任务执行 agent 和评估 agent 的三元组合形式，实现以下完整流程：
1. **意图理解**：Core Agent 评估用户画像（如资金规模、风险偏好）
2. **任务分解分发**：将用户需求拆解为子任务，对接到下游专精 agent（如 yield farming agent、alpha agent、链上分析 agent）
3. **成果评估**：评估 agent 审核执行结果
4. **中立托管**：确保协作过程中的资产安全

### ACP + ERC-8004 集成
2025 年 10 月，ACP 协议更新宣布将全面支持 ERC-8004 标准。这意味着每个在 Virtuals 上发行的 Agent 都将自动获得链上身份和声誉系统，与 ERC-8004 的身份注册表（ERC-721 NFT）、声誉注册表和验证注册表集成。这一集成使 Virtuals 成为首批落地的 ERC-8004 应用层平台之一。

ACP 在该文章提到的具体应用方向：
- **自动化 Hedge Fund**：Core Agent 依据用户资金规模和风险偏好分配到 yield farming、staking 或投土狗
- **TradingDAO**：多专精 agent 协作的路径发现和交易执行
- **Media House 集群**：Luna 作为 core agent 发挥社媒内容营销作用

ACP 叠加 Virtuals 已有超过 17,000 个 agent 的庞大生态，是多 Agent 协作方向最有规模的实践之一。来源：[[来源_2025-04_Virtuals_Web3AI_DeFAI_深潮TechFlow]]

## 我的判断
Virtuals 4 个月 $0→$2B 是 AI Agent 赛道最具代表性的增长案例。aixbt 独立成长证明平台孵化能力。"市值=成功首要标准"的内部文化是双刃剑——快速迭代 vs 过度投机。$60M "收入"中多少是真实用户 vs 机器人刷量需要验证。官方"AI Agent 国家"愿景虽然宏大，但现实是 Virtuals 更像是以太坊/Base 上的"Agent 经济特区"而非独立"主权国家"——其安全性和计价单位仍依赖外部基础设施。ACP 若能成功落地，将是 Virtuals 从 Launchpad 向 Agent 基础设施平台升级的关键一步。

### 与 Zora 的平行关系
2025 年 7 月，市场将 [[zora]] 称为"Base 生态的下一个 Virtuals"，主要基于飞轮结构的相似性：
- Virtuals 飞轮：Agent 币均与 $VIRTUAL 配对 → 创建和交易 Agent 币的需求推动 $VIRTUAL 价格上涨 → 财富效应吸引更多用户和 Agent 创建者
- Zora 飞轮：创作者币均与 $ZORA 配对 → 交易创作者帖子和个人资料的需求推动 $ZORA 价格上涨 → 财富效应吸引更多创作者和交易者
- 两者均经历了代币发行初期的投机退潮后，通过基础应用整合和飞轮效应重新获得市场关注
- Zora 的 3% 费率低于 Virtuals 的 1% 交易税，但覆盖了 SocialFi 社交资产交易的场景差异

## 相关概念
- [[ai-agents]] — 所属赛道
- [[l1-competition]] — Agent 平台 = 新 L1 的类比

## 0xJeff 视角（2024.12）
- Agent 总市值 $30 亿，占 AI 智能体市场 77%（来源：cookie.fun）
- 定位为 Base 平台上 AI 智能体的首选分发网络，通过绑定流动性实现曝光度+项目合作
- 正在开发 Agent Society 通信协议——Agent 间无缝提供服务和商业应用
- 多样化 Agent（aixbt/luna/sekoia/Vader/taocat/Agent YP/Gekko/Sam）持续吸引开发者入驻，推动 VIRTUAL 价值上涨
- $30 亿 Agent 总市值涵盖多条链（Base 为主），若跨链 Agent 互操作成为刚需可能削弱单平台垄断优势

## Launchpad 对比数据（2025年7月）

在2025年7月PANews编译的8大主流Launchpad对比中，Virtuals被定位为"AI版Pump.fun"：

- **前24个项目平均回报率**: 32倍（最高128倍），远超其他平台均值
- **代表案例**: IRIS ($IRIS) 从约$20万FDV涨至8000万美元，ROI高达400倍
- **Backroom ($ROOM)**: 去中心化InfoFi创作者经济协议，首发ROI达3倍
- **Maneki AI ($MANEKI)**: DeFi策略AI助手，从预售低点上涨至约10倍
- **WachXBT ($WACH)**: 链上DeFi安全AI代理，自上线以来上涨3-4倍
- **h011yw00d ($HOLLY)**: AI电影角色代币，连接NFT与叙事内容
- **与ChainGPT Pad对比**: Virtuals专注"代理型AI"经济体（自动交易Bot/信息助手/社交AI），ChainGPT Pad则覆盖AI基础设施+GameFi
- **竞争定位**: 游戏化销售风格（积分+预测元素）使其成为AI代理+InfoFi项目的首选Launchpad
- **差异点**: 与其他7大Launchpad相比，Virtuals所有代币TGE即100%解锁，波动最剧烈

来源：[[来源_2025-07_Launchpad_八大平台对比_PANews]]

## 2025 Q2 市场地位
2025 年第二季度，基于代理的 DApp 表现出强劲势头，其中 Virtuals Protocol 在 DappRadar 日活跃独立钱包数排名中位居榜首，成为活跃度最高的 DApp。AI 板块市场份额显著扩大，作者预测到年底 AI 可能超越 Gaming 或 DeFi 之一成为主导类别。

来源：[[来源_2025-07_2025Q2_DApp市场报告_AI代理_RWA_NFT_深潮TechFlow]]

## 来源
- [[来源_2025-07_Zora_经济飞轮_SocialFi_深潮TechFlow]] — Zora 飞轮与 Virtuals 飞轮的系统对比：飞轮结构（所有子资产配对平台币）、投机退潮后复苏模式、散户入驻叙事、3% vs 1% 费率差异
- [[来源_2025-01_ELIZA_集市理念_大教堂与集市_ChainOfThought]] — "大教堂 vs 集市"框架：Virtuals 被定位为"大教堂"模式——有条不紊、中心化、精确规划，与 ELIZA 的"集市"模式形成对比；Virtuals 估值 $18 亿为 AI Agent 平台市场领导者，是 ai16z ($8 亿) 的相对估值基准
- [[来源_2024-11_Virtuals_Protocol_代币化_智能合约_金色财经]] — AgentFactoryV3五组件架构、三层蜕变创建机制、IP贡献者机制、代币经济学、Path DAO转型历史
- [[来源_2024-12_四大AI框架横向对比_Eliza_GAME_Rig_ZerePy_BlockBeats]] — G.A.M.E 市占率 20%、200+ 项目、日请求 15 万、周增长 200%
- [[来源_2025-01_Virtuals_AI_Agent创业方法论]]
- [[来源_2025-01_Virtuals数据更新_15000代理_60M收入]]
- [[来源_2024-12_GAME_vs_ElizaOS_AI_Agent框架对比]]
- [[来源_2024-12_AI_Agent_发展全景图_Meme_Utility_MarsBit]] — VIRTUAL $20 亿 ATH、10,000+ Agent、内外盘联动机制（42,420 VIRTUAL 阈值 ≈ $36 万）
- [[来源_2024-10_AI_Waifu_OnlyFans_Virtuals_协议_BlockBeats]] — AI Waifu深度拆解：AI虚拟伴侣>$1000亿市场/OnlyFans 14.5%份额转移/三阶段路线图/25万用户产品数据/社区400+UGC角色
- [[来源_2024-11_Binance_AI_Agent_报告_深潮TechFlow]] — Binance Research 首次系统化梳理 IAO 机制：每 Agent 10 亿代币 + VIRTUAL 配对流动性池 + 公平发行无预挖 + 前三大 Agent TVL 排名激励，Creator.Bid 首周创建 300+ Agent
- [[来源_2024-12_Bankless_十大AI_Meme代币]] — Bankless推荐时VIRTUAL市值18亿美元，创建新Agent需将VIRTUAL锁定为流动性（通货紧缩压力），Agent收入部分汇入链上金库可分配或回购销毁，VIRTUAL是平台上所有Agent代币的计价和交换媒介
- [[来源_2025-01_VIRTUAL生态_50亿市值_叙事解析_odaily]] — VIRTUAL $50亿阶段生态盘点：强背景项目增多、"AI+其他领域"成新热点、aixCB/TAOCat/Neurobro/Freya/Gekko AI/H4CK Terminal六个项目业务模式与数据、Solana与Virtuals叙事分化（工具框架 vs 应用层）
- [[来源_2024-12_Virtuals生态_AI项目扫描_Odaily]] — VIRTUAL $3B 市值（12.17），生态中腰部项目（$10M-$55M）六项目扫描（VaderAI/sekoia/Seraph/Agent YP/nftxbt + Convo 风险警告），"半数疑似骗局、半数想成为各自领域的 AIXBT"
- [[来源_2025-01_Virtuals官方年度总结_五支柱战略_BlockBeats]] — Virtuals团队官方一周年总结：220K持有者/$20亿Agent市值/$6000万收入/年化$3亿，五大战略支柱，"AI Agent国家"终极愿景，公平发行vs私募不公的价值观声明
- [[来源_2025-01_AI代理Launchpad之争_Virtuals到Solana_深潮TechFlow]] — 0xJeff 分析 AI Agent Launchpad 竞争格局：Virtuals 通过"G.A.M.E sandbox + 原生启动 + 1-2% 交易费"的垂直整合模式建立 Base 先发优势，Solana 因框架和 Launchpad 分散尚未出现明显赢家，垂直 Launchpad（3D/DeFAI/交易/游戏）正在崛起
- [[来源_2024-12_Memecoin五个用例_无用即有用_CoinTelegraph]] — Virtuals Protocol 被列为 AI Agent 融资的核心平台（Use Case 4）：支持无代码 AI Agent 构建+代币化+部署+代币经济设计；Mei 提出 "智能 AI Agent memecoin vs 愚蠢 memecoin" 的区分；AI Agent 在 Crypto Twitter "漫游" 捕捉市场情绪的 "几乎不可阻挡的投资论点"
- [[来源_2024-11_AI代理启动平台_Bankless]] — Bankless 2024.11 四大 AI Agent 平台对比：Virtuals 双阈值激活机制（$4.2K 基础/$420K 完整）、IAO 流程、2,400 VIRTUAL 创建费、LUNA/SEKOIA 等旗舰 Agent 案例、Uniswap V2 LP 锁定10年机制
- [[来源_2024-12_Virtuals_经济飞轮_Decacorn_LongHash]] — LongHash Ventures 投资论点：经济飞轮四步机制、12.05 数据快照（10K+代理/$120M交易量/164K用户）、团队 BCG/帝国理工/MIT/哈佛背景、三年熊市信念考验、AI代理$9.3B vs DeFi $135B 市场对比、Virtuals AI垂直认知度 top20→top3

- [[来源_2025-03_OKX_AI_Agent版图_下_PANews]] — OKX Ventures 补充 GAME 框架技术细节：API+SDK 模型、战略规划引擎（高层目标规划+底层策略执行）、低代码/无代码集成降低成本、针对高并发游戏场景性能优化
- [[来源_2025-04_Virtuals_Web3AI_DeFAI_深潮TechFlow]] — 从 Virtuals 进化看 Web3 AI 格局：ACP 协议三元组、Genesis Launch 积分机制、70% 交易费返 dev、17,000+ Agent 生态数据
- [[来源_2025-05_AI赛道重拾热度_潜力项目_BlockBeats]] — 补充 Virtuals 熊市持续 Build 细节：VPN 计划（Virtuals Partners Network）一条龙孵化器、ACP（Agent Commerce Protocol）与 Google A2A 对比、Virgen/Genesis 积分发射模式；市值从 ATH $4.5B 跌 90% 后复苏至 $1B
- [[来源_2025-06_叙事评分_加密货币_NarrativeScore]] — Ignas 将 Virtuals DEX 列为流动性启动机制案例（Pairing new AI agent launches with VIRTUAL token），并作为本轮周期（2024-2025）的零到一创新
- [[来源_2025-10_ERC-8004_AI_Agent_信任层_深潮]] — Virtuals ACP 协议更新将全面支持 ERC-8004 标准，Agent 自动获得链上身份和声誉系统
- [[来源_2025-06_Virtuals_Genesis_Launch_打新_撸毛_BlockBeats]] — Virgen Points 积分系统操作攻略：DAB（每日活跃奖励，质押+交易提升倍率）和 DDP（每日直接积分，质押$VIRTUAL/$VADER/$KAITO 或社媒 yapping），绿锁代币1.5倍加成，大小玩家策略对比，14天积分过期机制
- [[来源_2025-06_AI代理链上主导地位_资本规模_PANews]] — PANews报告补充Virtuals最新数据：截至2025年6月已上线17,124个代理，平均每天新增超85个；cookie.fun追踪到1,748个活跃代理（vs 17,124上线的落差表明大量代理已不活跃）
- [[来源_2025-02_DWF_Labs_AI代理_变革潜力_BlockBeats]] — DWF Labs研究报告将Virtuals列为AI代理基础设施类别的核心项目，提及G.A.M.E框架作为AI代理与Memecoin融合的第二大催化剂，17,000+代理推出数据
- [[来源_2025-04_Web3叙事退潮_明星项目_深潮TechFlow]] — 从叙事动能角度分析 Virtuals 从 Base 预测平台到 AI 代理平台的转型，是为数不多能改写自身叙事的协议；补充代理创建从日峰值 60+ 降至个位数的具体数据
- [[来源_2025-03_Virtuals代理发射_开发者指南_深潮]] — 从开发者实操视角补充 Virtuals AI Agent 发射全流程：bonding curve 42k $VIRTUAL 阈值/1% 交易税分配/固定 10 亿供应/实名开发与透明度原则/发射时机 UTC13:00/空投策略/发射后运营最佳实践
- [[来源_2025-05_10个Launchpad平台_Solana发射中心_PANews]] — Virtuals推出Genesis Launches发射平台细节：11.2万枚VIRTUAL（约12万美元）固定稀释市值起步/Virgin Points积分制（Trenchor积分/质押VIRTUAL/VADER/24h竞拍）/未使用积分30天过期，覆盖Base和Solana双链
