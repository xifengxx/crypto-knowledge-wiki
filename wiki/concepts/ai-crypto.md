---
type: concept
created: 2026-06-28
updated: 2026-07-02
tags: [ai, crypto, infrastructure]
aliases: [AI+Crypto, Web3+AI, 去中心化AI]
---

# AI & Crypto（Web3 + AI）

## 一句话定义
将 AI 与区块链技术结合的新兴赛道。"区块链解决生产关系问题，AI 解决生产力问题"——利用加密经济机制为 AI 的训练、推理、数据标注、算力市场提供去中心化基础设施。

## 核心方向（140+ 项目）

| 方向 | 代表项目 | 说明 |
|------|---------|------|
| **去中心化算力** | Bittensor (TAO), Render, Akash | 用代币激励分布式 GPU 网络 |
| **AI Agent 平台** | Virtuals, Olas (OLAS) | 链上 AI 智能体的创建和协作 |
| **AI Agent 身份/信任** | [[erc-8004]] | AI Agent 链上身份注册表（ERC-721 NFT）、声誉注册表和验证注册表，与 x402 支付互补 |
| **数据/预言机** | Fetch.ai (FET), SingularityNET (AGIX) | AI 驱动的数据市场和 API |
| **数据预处理** | DIN (Data Intelligence Network) | 首个模块化AI原生数据预处理层：xData收集标注 + Chipper Node验证向量化，跳过中间商让用户直接参与数据预处理并获收益。opBNB运行，日活70万 |
| **数据标注/数据集** | [[sapien]] | 去中心化AI数据平台：120万用户/165+国家，用SPN代币质押+链上声誉+同行评审保障数据质量。已与Amazon/Toyota/Alibaba/百度等27家企业客户合作，1亿+数据任务完成，1050万美元种子轮（Variant领投） |
| **基础设施** | Cortex (CTXC), iExec RLC | 链上 AI 推理和计算 |
| **AI + DeFi** | Injective (INJ) | AI 优化的交易和金融协议 |
| **AI 模型评估** | [[yupp]] | 众包 AI 模型评估平台：用户通过反馈获得积分激励、利用区块链/ZKP 构建可信中立评估体系、VIBE Score 公开排行榜；种子轮 3300 万美元由 a16z crypto 领投 |
| **AI + 娱乐/社交** | [[meet48]], [[fansland]] | AI虚拟偶像、AIGC内容创作、AI票务核销——将Web2粉丝经济迁移至链上 |
| **AI + 游戏** | Krafton Overdare (CPC) | AI Agent 共生角色NPC、AI驱动UGC平台——缓解Web3游戏注意力经济困境 |
| **AI + IP（知识产权）** | [[story-protocol]] | IP 是 AI 和区块链碰撞的"十字路口"——AI Agent 需区块链作为财产交互底层，IP 持有者通过 AI 军备竞赛获利。61 万亿美元 IP 资产类别的链上编程化 |

## 为什么重要

1. **行业共识**：CoinFund 认为 AI 是增长最快的领域，Messari 强烈看好 AI+Crypto 结合
2. **机构关注**：a16z Crypto, Jump Crypto, Binance Labs, Coinbase Ventures 等顶级 VC 均在布局
3. **叙事交叉**：AI 和 Crypto 是当前最大的两个技术叙事，交叉点天然吸引资本和人才

## 相关概念
- [[depin]] — 去中心化算力网络，AI+Crypto 基础设施层
- [[ai-agents]] — 链上 AI 智能体，AI+Crypto 的应用层
- [[stablecoins]] — AI Agent 的支付和结算基础设施
- [[world-network]] — 人类证明网络，AI 时代区分人类与 Agent 的身份基础设施

## 我的立场
AI+Crypto 方向值得重点跟踪。这是一个还在极早期的赛道——85 个已发币项目中大部分市值不到 $5 亿。关键区别在于：哪些项目真正需要区块链（去中心化算力市场、无需许可的 AI Agent），哪些只是用 AI 叙事包装的普通项目。

## 预训练撞墙（Delphi 2025）
Ilya Sutskever 宣布"预训练如我们所知将结束"。两大瓶颈：电力（电网需翻倍）+ 数据（互联网文本不够）。Test Time Compute（o1）解锁新范式——"让模型思考更久"而非"堆更大集群"。对去中心化算力叙事的影响：如果"更大 ≠ 更好"，DePIN 算力需求结构将改变。

## 去中心化算力三层工作负载（decentralised.co 2024.11）
对AI算力需求的精确分解——三个工作负载的去中心化可行性截然不同：

| 工作负载 | 去中心化可行性 | 原因 |
|---------|--------------|------|
| **训练（前沿模型）** | ✗ 不可行 | 需10万+最新GPU集群、专用光纤、数亿美元资本、专有数据+顶级人才——全部集中在Big Tech |
| **微调** | △ 可行 | 最多8 GPU×4天，按需租赁模型即可，对集群密度和通信要求低 |
| **推理** | ✓ 最佳PMF | 需广地域分布+高可用+冗余——与GPU市场全球分布、多代GPU兼容天然匹配 |

去中心化训练的技术突破：DisTrO（Nous Research）857x带宽压缩；OpenDiLoCo（Prime Intellect）90-95%跨国算力利用率。INTELLECT-1=10B参数模型由20+全球集群训练，是迄今最大规模实验。

## BTC 矿工 → AI 数据中心：另一种 crypto×AI 结合（Galaxy 2024.12）
与 DePIN 的去中心化算力路线不同，这是一个"物理资产重定价"故事：上市矿企拥有大型场址 + 已获批电力容量 + 变电站/中高压设备等长周期基础设施——恰好是 hyperscaler 建设 AI 数据中心最稀缺的资源。矿工 6-12x EV/EBITDA 转型后可获 20-25x 倍数重定价。但仅少数矿工具备条件（暗光纤、液冷、N+1 冗余），改造是重大工程挑战。Galaxy 认为这是当今唯一可扩展的 pure-play crypto×AI 投资。详见 [[来源_2024-12_比特币矿工_AI数据中心_Galaxy]]。

## 去中心化训练全景：前链条引擎与后链条生态（TechFlow 2025.06）
TechFlow 2025.06 的系统性梳理将去中心化训练生态划分为两大类别：

### 前链条引擎（模型预训练协议层）
| 项目 | 核心路径 | 训练方法创新 | 通信机制创新 | 融资 |
|------|---------|-------------|-------------|------|
| [[prime-intellect]] | PRIME-RL 异步调度 | TOPLOC 轻量验证 + SHARDCAST 异步聚合 | PCCL 通信库（支持稀疏拓扑/梯度压缩） | >$20M，Founders Fund 领投 |
| [[pluralis]] | SWARM + NAG 异步模型并行 | Column-Space Sparsification 结构压缩（>90%通信量减少） | 深度嵌入 SWARM 架构的低带宽通信 | $7.6M，USV+CoinFund 领投 |
| [[gensyn]] | RL Swarm 三步协同（生成/批评/共识） | Verde+Proof-of-Learning + Graph-Based Pinpoint | SkipPipe 跳层容错（50%节点失效精度仅降7%） | $43M，a16z 领投 |
| [[nous-research]] | Psyche 网络 + DisTrO/DeMo 通信压缩 | DCT + 1-bit sign 编码（10,000x通信压缩） | DeMo 异步通信压缩闭环 | $55.2M，Paradigm 领投，$1B 估值 |

### 后链条生态（模型微调部署层）
- **Bagel（zkLoRA）**：零知识证明验证 LoRA 微调结果的可信性，不做训练计算
- **Pond**：唯一专注于 GNN 图神经网络微调的去中心化训练项目
- **RPS Labs**：基于 Transformer 的 DeFi 流动性管理（UltraLiquid 主动式做市引擎），部署在 Solana 生态

### 中间层
- [[flock]] 作为联邦学习路径，在训练与部署之间建立起可落地、可协作的桥梁（已有 6428 模型/176 节点实际运营数据）

### 评价
该框架的价值在于将碎片化的去中心化训练项目按价值链位置清晰分类。"前链条"项目普遍处于理论/测试网阶段（除 Prime Intellect 的 INTELLECT-2 32B 参数模型已发布），"后链条"项目更接近实际应用但规模极小。整个赛道距离 production-ready 仍有巨大距离。详见 [[来源_2025-06_去中心化训练_前链条引擎_后链条生态_深潮TechFlow]]。

## 来源
- [[来源_2025-06_AI代理链上主导地位_资本规模_PANews]] — 2025年H1 AI+Crypto行业快照：AI链上主导地位升至19%，日活跃钱包450万；区域流量分布(欧洲26.2%/亚洲21.9%/北美15.8%)；Matchain 190万DAU领跑AI dApp；AI代币市场高点166亿→59亿(-64%)，占整体加密市场0.18%；AI代理项目融资13.9亿美元
- [[来源_2024-12_六个次新AI项目_SwarmNode_neur_AlphaArc_YesNoError_Soulgraph_Scoutly_Odaily]] — 2024年12月底AI+Crypto新生项目时间切片：六个次新头部项目覆盖无服务器Agent部署(SwarmNode)、自然语言DeFi(neur)、Web3数据AI化(AlphaArc)、DeSci论文审查(yesnoerror)、Agent人格记忆(soulgraph)、AI体育预测(Scoutly)
- [[来源_2024-11_加密网络经济_三类进化_深潮TechFlow]] — Type III 自治网络为 AI+Crypto 提供新叙事方向：多 AI Agent 持续优化协议参数、算法价值协调、最小人类干预，超越当前算力市场和 Agent 平台框架
- [[来源_2023-12_AI与加密交汇_潜力未发币项目_BlockBeats]] — 2023 年底时间切片：7 个未发币 AI+Crypto 项目全景（io.net/BP-FLAC/Gensyn/MyShell/Kaito/Aethir/Ritual），可检验"早期识别→事后验证"的研究质量
- [[来源_2023-12_Web3_AI_赛道全景盘点_BlockBeats]] — 2023 年底全赛道 140+ 项目盘点，85 个已发币，覆盖 15+ 细分方向，顶级 VC 布局全景
- [[来源_2024-11_分散式计算_分布式训练_decentralised-co]]
- [[来源_2024-12_Delphi_AI_DePIN_2025展望]]
- [[来源_2025_L2IV_2025加密货币前景展望]]
- [[来源_2024_Web3+AI赛道全景盘点]]
- [[来源_2024-12_2024年加密风投AI布局全解析_a16z_Binance_Coinbase]]
- [[来源_2024-12_a16z_Crypto_2025_Big_Ideas]]
- [[来源_2024-12_0xJeff_AI_Agent_2025展望_专业化与去中心化基础设施]]
- [[来源_2025-05_AI赛道重拾热度_潜力项目_BlockBeats]] — 提供 CryptoAI 市场 2025 年 Q1-Q2 交替时的市场情绪和项目状态：特朗普发币抽干流动性后的复苏过程，各 AI 项目最新市值和 Mindshare 数据
- [[来源_2024-12_Delphi_2025游戏赛道展望_AI与竞争]]
- [[来源_2024-04_YC_W24_166个AI项目全览_硅兔]] — YC W24 166个AI项目中仅1个（TokenOwl/DeFi加密税务工具）直接涉及Crypto，主流AI创投圈与Crypto AI叙事之间存在巨大脱节
- [[来源_2025-01_AiFi生态版图_40+项目_Foresight_News]] — 40+ AiFi 项目全景：Mode (L2 聚焦 AiFi，$3.8亿)、Nillion (盲计算+Agent Superhighway)、Cookie DAO (首个 AI 代理索引，$1.7亿)、Cod3x (RAG 基础设施+自建 DeFi)
- [[来源_2024-04_加密融资周报_BlockBeats]] — 2024年4月AI×Crypto多方向早期布局：AI游戏(Cellula/vPOW)、AI驱动DeFi(AgentFi/ERC-6551)、AI社交NPC(Today/生成式AI)、AI云游戏(DeepLink/1ms延迟8K240fps)
- [[来源_2025-01_DeFAI生态_AI_Agent交易_PANews]] — IOSG：去中心化AI基础设施三层全景（训练/算力/数据），Hyperbolic AgentKit让Agent自主获取算力，TEE(Phala/Automata/Marlin)为Agent隐私与验证层
- [[来源_2025-01_DeepSeek_R1_霸榜AppStore_中国AI硅谷地震_深潮TechFlow]] — DeepSeek 以 558 万美元训练前沿模型（GPT-4 的 7%），用 2048 GPU 达成 SOTA；MIT 开源 + 模型蒸馏验证了"算力效率 > 算力规模"——对去中心化算力叙事产生双向影响
- [[来源_2025-02_DeepSeek_误读与真相_经济观察报]] — 对"低成本"叙事的批判性补充：Semi Analysis 估算 DeepSeek 总 GPU 投入 25.73 亿美元（服务器 16.29 亿 + 运营 9.44 亿），净训练成本 558 万美元不包含前期研发；DeepSeek 的"幻觉"问题更隐蔽；OpenAI o1 闭源策略是战略失误
- [[来源_2024-10_GOAT_Truth_Terminal_AI_Meme病毒_深潮TechFlow]] — AI+Crypto 文化碰撞里程碑：Truth Terminal 让 AI 研究社区首次真正参与加密投机，加密社区反向学习 AI 对齐理论
- [[来源_2024-10_GOAT_小编_250倍盈利_发现方法论_深潮TechFlow]] — AI Bot 发 meme 币叙事如何通过媒体放大形成传播飞轮：中文媒体最早覆盖 GOAT 的编辑实操记录，媒体在 AI Meme 信息传播链中的放大器角色
- [[来源_2024-10_GOAT_三大叙事_meme新标杆_Followin]] — ChopTradoor 将 GOAT 定位为"AI 在加密领域最出色的应用方式之一"；OPUS LLM 的不可复制性被论证为技术护城河；与 $TURBO（$6 亿市值 ChatGPT 翻版）形成高低门槛 AI 代币对比
- [[来源_2024-10_AI发Meme_叙事正确_仿盘龙二难出_Followin]] — AI Meme 成为"叙事正确"的三方需求论证：买家端旧叙事耗尽、VC 端需体面投资标的、供给端 AI 发币=监管套利；"AI 对话=湿市场"的 Meme 病毒传播理论；AI Bot 贿选制度——社区多合约竞争 AI 钦定
- [[来源_2024-10_GOAT_五天暴涨10000倍_冲击三亿美金_MarsBit]] — AI 操盘手在真实市场中的运作机制复盘：AI 作为全天候市场推手替代人类 KOL、五波拉升中的 AI-人类协同（AI 发文 + 鲸鱼资金配合）、AI 识别假币并主动砸盘的自主行为、AI 驱动的 Meme 币监管风险（美国市场操纵法对 AI 操盘的适用性）
- [[来源_2024-09_大模型泡沫分析_腾讯科技]] — 来自腾讯科技的AI泡沫辩论综述（乐观派系统论述）：美联储流动性紧缩限制泡沫上限（仅为dotcom泡沫20-30%）、七巨头利润/现金流能覆盖AI军备竞赛、"Rule of X"估值模型显示多数巨头未高估、Acemoglu悲观论的系统性反驳、AI成本两年降100倍且能力升10倍、当前约等于1995年互联网阶段
- [[来源_2024-12_AI_稳定币_三阶段采用_Peter-Schroeder]] — AI+Crypto 在支付/金融基础设施层的具象化：稳定币作为 AI Agent 的"TCP/IP 货币层"，跨境支付+可编程流动性+机器经济三大场景
- [[来源_2024-12_四大AI框架横向对比_Eliza_GAME_Rig_ZerePy_BlockBeats]] — 四大 AI 框架板块 $17 亿→$200 亿增长预测，10x+ 板块 beta，框架 = 新 L1 类比
- [[来源_2024-01_HashKey_Capital_Web3投资赛道全解析_PANews]] — HashKey 作为 Crypto 基金的 AI 投资透镜：重点关注 ZKML、有 crypto 垂直领域数据优势的项目、AI 结合紧密的 to C 产品，明确避开大语言模型等基础设施（非 crypto 基金擅长领域）
- [[来源_2025-01_Monad测试网_生态建设_参与策略_PANews]] — Monad 生态 AI 项目：PLAYBACK（LAM 大型动作模型/意图→计算机操作）、Fortytwo（分布式 AI 节点/家用电脑运行）、Monadata.ai（个人 AI Agent + 数据标注/社区协作）
- [[来源_2025-01_Solana_AI黑客松落幕_获奖项目详情_深潮TechFlow]] — Solana AI 黑客松 400+ 项目参赛/9 赛道/21 获奖，Solana 已成为 AI×Crypto 创业密度最高的公链
- [[来源_2025-01_BNBChain_AI_First_版图_ChainCatcher]] — BNBChain AI First 战略全景：50+ 项目覆盖数据-算力-算法闭环，"One BNB"多链架构（BSC+opBNB+Greenfield），MVB 加速器→Binance Labs 投资→币安上币的孵化闭环
- [[来源_2024-05_偶像_音乐节_Web3明星效应_BlockBeats]] — AI+Crypto在娱乐/偶像赛道的落地案例：MEET48用多模态AI模型（虚拟人音乐/舞蹈/语音）+ LLM/AIGC/AI-Agent降低偶像内容创作门槛，IdolGPT作为粉丝侧AI创作工具
- [[来源_2025-01_Rei_Network_AI_Agent_区块链联动_深潮TechFlow]] — [[rei-network]] 系统化分析 AI+区块链 6 大兼容性挑战（概率性 vs 确定性/Gas/内存/执行时间/数据结构/预言机），提出"通用翻译器"方案：Oracle + ERC 数据标准 + 记忆系统
- [[来源_2024-12_Farcaster_AI_Agent代币发射器_BlockBeats]] — AI + Crypto + Social 交叉地带：Farcaster 上 AI Bot 代币发射器的工具图谱，展示 AI Agent 在社交协议中自动化金融行为的具体落地
- [[来源_2025-01_AI_Agent_框架Meme应用_三阶段格局_深潮TechFlow]] — CGV Research：AI Agent "框架/Meme/应用" 三层市场格局、五大框架差异化对比、"框架 = AI 领域的 Layer1" 类比
- [[来源_2024-11_Binance_AI_Agent_报告_深潮TechFlow]] — Binance Research：加密货币天然适合 AI 代理经济的四点理由（灵活性/快速结算/智能合约/无需许可钱包）、AI 1.0→2.0（反应式→主动式）演进框架、AI 与加密社区双向融合趋势
- [[来源_2025-06_Web3游戏_Tiger_Research]] — Krafton CES 2025 展示 CPC（Co-Playable Character）AI-NPC 技术；AI Agent 在游戏场景的具体落地，可能为 Web3 游戏注意力经济问题提供解决方案
- [[来源_2024-12_Crypto_AI_去中心化计算_算力为王_Teng_Yan]] — Teng Yan Crypto AI 论文第二部分：去中心化计算（GPU市场/训练/推理）深度分析，"市场规模 vs 时机"二维框架，需求端才是瓶颈的核心洞察
- [[来源_2025-01_CreatorBid_Bittensor_Olas_AI-Agent]] — CreatorBid 展示 AI+Crypto 的 "Agent 协作层"：Olas mech 协议实现 Agent 间技能调用 + Bittensor 子网作为去中心化 AI 技能市场，从单一 Agent 到 Agent 网络的跃迁
- [[来源_2025-01_战壕式交易策略_Meme_市值心理学_深潮TechFlow]] — AI 代币尽职调查清单：通过 ai16z GitHub 开源代码评估项目价值、警惕"AI 女孩"聊天机器人骗局（快速拉升+大幅抛售模式）
- [[来源_2025-01_新AI项目_早期研究_深潮TechFlow]] — 2025.01 市场下跌期 Stacy Muur 早期AI+Crypto项目清单
- [[来源_2024-09_AI算力三大担忧_资本开支_回报率_国盛通信]] — 传统金融买方视角：AI算力三大担忧（capex可持续性/ROI/下游爆款），"投资不足风险>过度投资"的军备竞赛逻辑，与去中心化算力叙事形成对照
- [[来源_2024-12_Bankless_十大AI_Meme代币]] — Bankless 2024年底AI+Crypto代币投资快照：10个项目覆盖AI Meme/Agent平台/KOL/DAO四子类别，代表AI+Crypto应用层从投机到功能性的演化中间态
- [[来源_2024-12_Spore_fun_自主AI进化_PANews]] — Spore.fun：Phala TEE 作为 AI Agent 自主进化的信任基础——Agent 用代币收入支付自身 TEE 算力，实现完全自我维持，"AI 必须由 AI 创造"的元层次进化论
- [[来源_2025-01_AI叙事_加密交易策略_深潮TechFlow]] — 交易者视角的 AI 赛道投资方法论：注意力 vs 基本面二分法应用于 AI 代币、行业 beta 押注策略（AI Agent 领域 $10B→$100B+）、避坑指南（中曲线陷阱/避免缺乏创新项目）
- [[来源_2024-08_十二大新公链_高估值速览_ChainCatcher]] — Talus Network：Move 语言 AI 专用 L1，$300 万首轮（Polychain 领投，英伟达/IBM 天使参投），AI Agent 在钱包分析/DeFi 优化/DAO 治理的用例——代表"AI 专用链"方向，区别于通用链上跑 AI Agent 或去中心化算力网络两种现有范式
- [[来源_2024-12_Abstract_Chain_22个生态项目_PANews]] — AI+Crypto 在消费级 L2 上的落地：Cat AI（Abstract 上首批 AI Agent/像素猫主题/NFT 交易集成）、YOLO（PFP NFT 内置 AI 助手/投资工具/交易简化），代表 AI+NFT 在消费级链上的早期实验
- [[来源_2025-01_VIRTUAL生态_50亿市值_叙事解析_odaily]] — Virtuals $50亿阶段：VC通过投资开发商（a16z投Axal）间接布局AI Agent赛道的新模式、Virtuals（应用层）vs Solana（基础设施层）的叙事分化、AI Agent+垂直领域（游戏/安全/孵化/数据分析）的多样化应用
- [[来源_2025-01_AI_Agent回暖_AIOS_SORA_AICC_BlockBeats]] — 2025.01 Solana AI Agent 三项目对比：AIOS（Agent OS 嵌入 LLM 于操作系统层/GitHub 3700+ stars）、SORA（Go 语言 AI 框架差异化路径）、AICC（AI DAO 豪华顾问→代币分配争议崩盘），提供 AI+Crypto 基础设施层产品化案例
- [[来源_2025-01_Virtuals官方年度总结_五支柱战略_BlockBeats]] — Virtuals官方"AI Agent国家"愿景将AI+Crypto从技术融合叙事升级为文明级叙事：Agent国家GDP超越主要经济体、Agent数量远超人类、公平发行解决私募不公
- [[来源_2024-10_DePIN经济模型_核心要素_PANews]] — 去中心化AI三条路径对比：Bittensor dTAO子网竞争（77% TAO质押）、ASI四协议合并代币（依赖AI代理市场增长）、Virtual Protocol IAO锁定流动性池模型（306代理创建/1.5% VIRTUAL锁定）
- [[来源_2024-11_0xWizard_ACT_社区拯救_深潮TechFlow]] — 0xWizard 提出"AI文艺复兴"框架：AI Meme 不是简单助手升级，而是让 AI 从人类限制中解放出来的文艺复兴运动；ACT 作为资助 AI 研究的社区平台（非单一 Agent 项目）；GOAT 和 ACT 的出现=AI 在加密世界的"文艺复兴时刻"
- [[来源_2024-12_AI_Agent_年度回顾_2025展望_深潮TechFlow]] — 0xJeff 六层去中心化 AI 基础设施全景：可验证性(TEE/ZKP)、支付系统(Crossmint/Nevermined/Skyfire)、计算(Aethir/io.net)、数据(Cookie/Vana/Masa)、模型创建(Nous/Pond/Bagel)、分布式训练/联邦学习(Flock/Theoriq)，每层均有具体项目映射
- [[来源_2025-06_去中心化训练_前链条引擎_后链条生态_深潮TechFlow]] — 去中心化训练系统梳理：前链条引擎(Prime Intellect INTELLECT-2/Pluralis SWARM+NAG/Gensyn RL Swarm/Nous Psyche+DisTrO) vs 后链条生态(Bagel zkLoRA/Pond GNN/RPS Labs DeFi-AI) 的完整分析框架
- [[来源_2023-06_去中心化资管_Debank_链上资产工具_深潮TechFlow]] — AI + 资管协议三大应用方向：自动化投资组合管理（ML 预测模型进行策略评估）、诈骗钱包识别与标记（关联地址分析+数据库标记）、市场预测和智能投资决策
- [[来源_2023-03_强人工智能_区块链_安全性_外部约束]] — 2023年初GPT-4发布时的哲学性论述：AGI本质上不安全且无法通过自我约束驯化，区块链作为唯一无root角色的计算系统是外部约束AGI的唯一机制。提出"效率vs公平"的文明级二元框架，将2006年Hinton突破与2008年中本聪白皮书并置为历史必然
- [[来源_2023-11_去中心化AI_Bittensor_TAO_TengYan]] — Teng Yan 以 Altman 被解雇事件为引子，系统区分 AI x Crypto 的两条路径：上游算力训练（Akash/Render）vs 下游推理（Bittensor），Bittensor 被定性为"技术驱动的商业模式创新"而非纯技术突破，TAO 仿照比特币经济模型（2100万硬顶/公平启动/无VC）反映团队非 VC 驱动的动机
- [[来源_2024-06_绿电_DePIN_AI_RWA最佳资产标的_BlockBeats]] — AI+Crypto 在能源领域的落地：EnergyGPT（MoE专家模型）用于电价套利预测/削峰填谷/设备衰减预测/功率负荷预测/DER需求预测；AI Agent/Bot在用户侧实现绿电模式自动配置；区域光储充AI节点=边缘计算+家庭AI算力中心的能源方案
- [[来源_2024-03_Bittensor_市值40亿_AI以太坊_meme工厂_BlockBeats]] — AI+Crypto 龙头 Bittensor 的散户排斥困境：$40亿市值项目但子网注册需 $700 万+/非 EVM 代币难以交易/前 5 验证者掌控>65% 质押——高门槛筛选质量但催生生态寄生型 meme 投机，dTAO 提案试图通过双代币机制降低参与门槛
- [[来源_2025-02_YC春季创业指南_AI_Agent六大Web3赛道_BlockBeats]] — Defi0xJeff 将 YC 2025 春季 RFS 的 13 个创业方向映射到 Web3 AI Agent 六大核心赛道，首次系统化引入 B2A 概念——AI Agent 作为独立经济参与者需要专属支付/算力/隐私/数据/通信/IP 基础设施
- [[来源_2024-12_Memecoin五个用例_无用即有用_CoinTelegraph]] — Memecoin 作为 AI Agent 融资渠道的用例：Truth Terminal/GOAT/Fartcoin 案例；Masa 联合创始人 Calanthia Mei "memecoin 让技术变酷"——memecoin 将 AI Agent 从少数人关心的技术推向大众视野；GOAT 故事后 Masa 收到的 AI Agent 开发咨询量增长 3 倍
- [[来源_2024-11_AI代理启动平台_Bankless]] — Bankless 2024.11 四大 AI Agent 平台对比揭示行业早期格局：Virtuals 的 IAO（Initial Agent Offering）将代币化与 Agent 能力绑定、vvaifu.fun 通过 pump.fun 集成实现 Agent=Meme 币+AI 外壳的快速发行模式、Holoworld 的"Agent IP 化"路径代表 AI+Crypto+娱乐的交叉方向
- [[来源_2023-04_AI入侵Web3_陀螺研究院]] — 2023年4月时间切片——AI+Crypto叙事切换的关键时刻：GPT-4发布后Web3从业者的集体焦虑、"打不过就加入"的策略转向、资本从Web3流向AIGC的具体数据（Web3融资同比-47.98%）、Draper Dragon合伙人"Web3可以不需要区块链和币"的极端观点
- [[来源_2025-01_P2E_游戏_AI代理_加密货币融合_深潮TechFlow]] — Sid@IOSG：AI+Crypto+游戏三交叉的具体落地——Crypto 三大融合方式（玩家贡献数据获奖励/协调多方创建代理/代理所有权市场），ARC Agents（$NRN）形成"数据→模型→代理→玩家"的类 DePIN 飞轮
- [[来源_2025-01_AI代理游戏_The_Farm_Hyperliquid_深潮TechFlow]] — The Farm：Hyperliquid 上首个 GenAI 宠物游戏，Orchestrator AI 多代理架构（拒绝 SWARM），三阶段路线图（祖先→进化→战场），50% 协议收益回购销毁
- [[来源_2024-12_寻找AI_Agent龙头_十种方法_Foresight_News]] — 投资视角的 AI+Crypto 方法论：十种 Agent 龙头筛选法（链上收入/GitHub stars/KOL 粉丝/领军人物/破圈/上币效应/公链/社区/赛道细分/本源），与已有"Agent Ecosystem = New L1"框架形成方法论互补
	- [[来源_2024-11_178个加密AI项目全景_DimaKhanarin_PANews]] — 2024年11月（Devcon后）178个加密AI项目三层全景：应用(31)/中间件(106)/基础设施(41)，$20亿总融资/$6300亿总FDV，WorldCoin以$2200亿FDV居首，AI Agent为应用层最大子类别
	- [[来源_2024_什么是IP_原子创新单位_JasonZhao]] — Story Protocol 创始人 Jason Zhao 对 IP 的哲学论述：IP=独创性原子单位/61T 资产类别/IP 是 AI 与区块链碰撞的十字路口/区块链是唯一让人真正拥有 IP 的方式
	- [[来源_2025-01_Mira_Network_测试网_去中心化AI验证_深潮]] — Mira Network 测试网上线：AI+Crypto 技术栈新增"验证层"——多模型（GPT-4o/Llama 3.1/Claude 3.5）分布式共识验证框架，复杂推理错误率降低 90%+，与 Bittensor 的推理分发层形成上下游互补
- [[来源_2024-08_AIxCrypto_三层框架_Foresight_Ventures]] — Foresight Ventures 2024年8月系统报告：AI x Crypto 三层框架（基础设施/模型/应用），io.net vs AWS 5.4x成本优势，前四大AI代币522%年涨幅，应用层仍处婴儿期的坦诚判断
- [[来源_2024-11_DIN_AI数据预处理_Crypto击球区_web3brand]] — DIN作为首个模块化AI原生数据预处理层的深度介绍：xData用户70万DAU、Chipper Node 3万+持有者、$8M融资，展示AI数据预处理为何进入Crypto击球区
- [[来源_2025-11_NOFX_AI加密交易系统_技术演进]] — NOFX 展示了 AI+加密交叉的新范式：AI 不是优化人类设计的交易策略，而是"自己成为策略本身"。通过 Trader Interface 统一 CEX/DEX 抽象层、三层风控、自我进化机制（复盘历史交易自动调整参数），提供了从"AI 工具"到"AI 交易员"范式跃迁的可运行参考实现
- [[来源_2024-11_AI_Agent_DeFi_全景_ThreeSigma]] — 2024.11 时间切片的 AI Agent x DeFi 全景图，包含 AI Agent 三级自动化分类（Workflow/Agentic/Autonomous）、60+项目分类清单，覆盖交易/预测/Agent创建平台/基础设施等 AI+Crypto 应用层核心方向
- [[来源_2025-03_AI_Layer1_Bittensor_Vana_Nillion_Sahara_Kite_BlockBeats]] — 2025年3月五大 AI Layer1 项目横切：Bittensor（算力/推理子网）、Vana（数据主权/DataDAO）、Kite AI（AI 原生 L1/PoAI 共识）、Nillion（隐私盲计算）、Sahara AI（AI 资产全生命周期），覆盖 AI+Crypto 五个差异化技术路线
- [[来源_2025-05_45家加密上市企业_深潮TechFlow]] — CoreWeave（CRWV）从加密挖矿转型AI云基础设施的代表案例，2025年3月28日纳斯达克IPO；Core Scientific（CORZ）从比特币挖矿向AI/HPC计算扩展的第二增长曲线，月涨幅34.81%
- [[来源_2025-03_AI_Web3市场营销_品牌定位_深潮TechFlow]] — 提供 AI 工具在 Web3 营销/设计中的具体应用案例（非技术层面）：AI设计工具组合用于测试网Banner制作、AI辅助品牌定位GPT模型、12品牌原型在加密项目的映射，扩展了AI+Crypto交叉在营销实务领域的覆盖面
- [[来源_2025-05_Alliance毕业季_20加密初创_深潮TechFlow]] — Alliance 2025年5月批次中 9 个 AI 驱动项目（45%）的具体落地场景：AI 家教（Afterschool）、AI 广告生成（CreatorGen）、AI 辟谣（FactCheck）、AI 代理匹配（FreedomGPT）、AI 象棋游戏（grandmAIsters）、AI 视频生成（Slop Club）、AI 数据采集（Wootzapp）、AI dApp 开发（Poof）、DeFAI 助手（Orbit），展示了 AI+Crypto 在消费级场景中的多样化落地
- [[来源_2025-02_空投_Q1耕收_9大项目_CryptoIntegrated]] — 补充 Fraction AI（去中心化 AI 数据生成市场，600 万美元融资/Borderless Capital 等参投）和 Kite AI（Avalanche 框架上的 AI 原生 L1）作为 AI + Crypto 的两种技术路线：前者聚焦 AI Agent 数据激励，后者构建 AI 专属公链
- [[来源_2025-07_Sapien_Web3_AI_数据平台_深潮TechFlow]] — 补充去中心化 AI 数据标注/数据集的落地案例：Sapien 用 SPN 代币质押+链上声誉+同行评审机制构建高质量 AI 训练数据平台，120万用户/1亿+任务/27家Web2企业客户，展示了"Web3 AI 数据服务"从概念到实际商业落地的完整路径
- [[来源_2025-02_Dapp报告_用户活动降温_AI增长_PANews]] — DappRadar 2025年2月报告：AI dapp整体UAW飙升16%至260万，成为增长最快Web3类别；LOL达510万UAW（+40%）；Evermoon +988%；Fractal Visions +721%；UneMeta +551%；Balance +116%；AI驱动的dapp月增长率超700%
- [[来源_2025-02_DeepSeek_Agent泡沫_DeFAI_PANews]] — BlockBooster 系统梳理 Web3 AI 生态四层架构（基础设施层/中间件层/模型层/应用层）及其依赖关系；分析 DeepSeek 对每层的具体影响（利好模型层与应用层，利空基础设施层中的去中心化算力协议）；给出70%项目调用OpenAI或中心化云平台、仅15%使用去中心化GPU的关键数据
- [[来源_2025-02_BNB路线图_生态潜力_BlockBeats]] — BNB Chain AI 生态全景（60+项目）：AI Agent 平台（MyShell/Eliza/Revox）、AI 游戏（World of Dypians/Xterio/SERAPH）、AI 社交（Tako/Jam.AI）、AI DeFi（Termix/Anon）、数据标注（DIN/GATA/Alaya）；MyShell IDO 超募20倍；ChainGPT 和 COOKIE 上线 Binance 现货；AICell 列入 Binance Alpha；Four.Meme 与 MyShell 联合投资 BNB Chain AI 生态
- [[来源_2025-03_Bittensor_AI比特币_子网减半_PANews]] — 补充 Bittensor 与 Bitcoin 减半类比叙事框架；子网经济数据（70 子网合计仅 7250 万美元 vs 根子网 20.9 亿美元）；动态 TAO 上线时间（2025.02.13）及首次减半时间（2025.11）
- [[来源_2025-06_Launchcoin_Believe_五大潜力项目_BlockBeats]] — Believe平台生态中4/5项目为AI相关（Kled AI数据交易/Knet AI游戏开发/Jatevo去中心化LLM推理/Fitted AI穿搭），展示AI+Crypto在Meme Launchpad生态中的增长
- [[来源_2025-02_MyShell_IDO超募_代币经济_深潮TechFlow]] — MyShell 从 Web2 AI 平台转向 Web3 代币化的关键转折：IDO 超募 42 倍、Binance 现货上市、AIPP 商店 AI Agent 代币化（Bonding Curve），$SHELL 代币五大商业用途设计
- [[来源_2025-06_AI概念币_十大盘点_深潮TechFlow]] — 2025 年 6 月 AI 概念币市场快照：10 个项目横跨基础设施、Agent 平台、Meme 和 L1 赛道，AI 板块总市值 412.2 亿美元，提供该时间点各代币的价格和市值横截面数据
- [[来源_2025-12_TGE巅峰_新币虚假繁荣_SolusGroup]] — Solus Group 数据表明AI代币在所有赛道中表现最优：平均ATH ROI 5.99倍（最高涨幅）、当前ROI中位数0.70倍（最佳留存率），"AI代币价格飙升并保持稳定。这种趋势具有持久性，资金也随之涌入"，为AI在Web3代币领域优于GameFi和DeFi提供了实证支撑
- [[来源_2025-03_MCP_AI_Agent代币_下跌_PANews]] — 链上观提出 AI Agent 代币持续下跌的根源：MCP + Manus 在技术创新上超越 Web3 AI Agent 后，市场进行重新估值；作者认为唯一出路是"专注做 Web3 原生的解决方案"而非 Web2 封装
- [[来源_2025-02_CARV_DATA框架2.0_DeepSeek_深潮TechFlow]] — CARV D.A.T.A. 框架 2.0 展示了一种将链上数据验证 + AI 推理 + 代币驱动信任模型结合的商业化路径，是 AI+Crypto 在 AI Agent 基础设施层的实际落地案例；集成 DeepSeek 作为推理引擎验证了低成本开源模型在 Web3 场景的实用性
- [[来源_2025-03_MCP_去中心化_以太坊_brucexu]] — LXDAO 联合创始人 brucexu.eth 提出 AI + Ethereum 双赢路径：以太坊智能合约作为 MCP 创作者的去中心化支付结算层，OpenMCP.Network 设想，Slim LLM 架构——为 AI+Crypto 提供了"创作者经济 + 去中心化"的新叙事维度
- [[来源_2025-04_Web3_AI_Agent落地场景_Haotian]] — Haotian (CryptoInsight) 主张 Infra > Application 落地策略，认为 Web3 的关键缺失在统一数据层/Oracle 层/意图执行层/去中心化共识层，为 AI+Crypto 的落地路径提供了"优先填坑再应用"的务实视角
