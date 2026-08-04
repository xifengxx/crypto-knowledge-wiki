---
type: source
source_type: article
url: https://www.panewslab.com/zh/articledetails/axplnan8.html
author: Henry @IOSG
date: 2025-01-14
ingested: 2026-06-29
---

# 初探DeFAI生态：满足加密市场刚需，人人可借助AI Agent交易

## 阅读证据
- 总行数: 462
- Q1 (前25%): AI x memecoin 在3个月内市值达134亿美元，与AVAX或SUI等成熟L1规模相当
- Q3 (中后25%): Aixbt拥有14.76%的市场关注份额，聚合来自400多位Twitter KOL的数据，是生态中最具影响力的代理之一
- Q4 (最后25%): Nous Research的Distro和Prime Intellect的DiLoco算法已成功在低带宽环境中训练出超过100亿参数的模型；Exo Labs的SPARTA算法将GPU间通信量减少1000倍以上
- 图片: 31张，均为PANews CDN外链（cdn-img.panewslab.com）。约7张承载关键数据（市值对比图、DeFAI分类图、抽象AI对比表、Sturdy Dune数据图、Pink Brains基础设施全景图、Theoriq架构图、市场关注度份额图），其余为项目UI截图或推广图。无本地副本

## 核心要点
- DeFAI（DeFi + AI融合）市值约10亿美元，Griffian以45%份额主导，$ANON占22%。文章将DeFAI分为4大类：抽象/UX友好型AI、收益优化与投资组合管理、市场分析代理、DeFAI基础设施/平台。所有类别仍处于概念验证阶段
- AI Agent在DeFi中遵循6步工作流程——数据收集（链上索引器+链下价格平台）→模型推理（监督/强化学习+NLP）→决策制定（优化引擎+多代理协调）→托管运行（链下模型+链上交互）→互操作性（API/Webhooks/IPFS）→钱包（MPC或TEE密钥管理）
- 抽象AI赛道三强对比：Griffain功能最丰富（多代理协作聊天室+Solana原生+Shamir Secret Sharing钱包），Anon多模型多语言（Gemma/Llama/Claude+中文+Automate框架降幻觉），Slate唯一集成Hyperliquid（自动多空+LP管理+分级费率0.25%-1.00%）。但所有项目仍面临基础交易准确性挑战（如USDC Swap无法正确获取代币地址）
- 收益优化类：T3AI用AI做风险引擎实现非足额抵押借贷+ZK验证，Kudai是GMX生态实验性代理（交易费用资助自主交易→利润分配给$KUDAI持有者），Sturdy Finance通过Bittensor SN10子网训练AI模型在silo池间优化收益分配（但V2 TVL自2024年5月持续下降，聚合器TVL仅390万美元占29%）
- 去中心化AI基础设施三大基石：模型训练（Nous Research DisTrO/Prime Intellect DiLoco/Exo Labs SPARTA证明去中心化训练可行）、算力（Hyperbolic GPU市场降本75%+AgentKit让Agent自主获取算力）、数据（Grass日抓取300TB+3亿小时视频数据集=Nvidia的15倍）。TEE（Phala/Automata/Marlin）和ZKP提供自主代理的隐私与验证层
- DeFAI演进4阶段：第一阶段效率优化（自然语言交易+实时市场调研）→第二阶段自主交易（Agent独立执行策略，极少人工干预）→第三阶段隐私与验证（TEE+ZKP确保防篡改和可验证）→第四阶段无代码AI即服务（代理经济，加密训练模型自主交易）。当前瓶颈：多数工具只是ChatGPT包装、链上数据碎片化将AI推向中心化

## 关键数据
- AI x memecoin 3个月市值达134亿美元，与AVAX/SUI等L1规模相当
- DeFAI总市值约10亿美元，Griffian占45%，$ANON占22%（2025年1月Coingecko数据）
- Slate分级费率：常规操作（swap/桥接/借贷/多空等）0.35%，Gas条件订单0.25%，其他条件订单1.00%
- Aixbt市场关注份额14.76%，聚合400+ Twitter KOL数据；持有600,000枚$AIXBT（约24万美元）可访问分析终端
- Sturdy Finance聚合器TVL约390万美元，占协议总TVL 29%；日活用户自2024年9月起维持两位数（>100）
- Grass日抓取300TB数据，3亿小时视频数据集（Nvidia的15倍），每天增长400万小时（即Nvidia总数据集的20%每天被收集）
- Hyperbolic去中心化GPU市场降低计算成本达75%；AgentKit提供AI可读的算力资源地图
- Exo Labs SPARTA算法将GPU间通信量减少1000倍以上

## 与已有知识的关系
- 补充 [[defai]] — 将DeFAI从3方向框架扩展为4大类（抽象层/收益优化/市场分析/基础设施），引入4阶段演进模型和抽象AI三强对比（Griffain/Anon/Slate），可作为DeFAI概念页的核心参考来源
- 补充 [[ai-agents]] — 详述Agent在DeFi中的6步工作流程（从数据收集到钱包管理），提供多代理协作具体案例（Griffain聊天室多代理协同、Theoriq蜂群系统），补充Agent与Bot的本质区别（Agent具有动态适应性+自主学习能力）
- 补充 [[ai-crypto]] — 提供去中心化AI基础设施三层全景：模型训练（DisTrO/DiLoco/SPARTA算法及100亿+参数验证）、算力（Hyperbolic AgentKit让Agent自主获取和支付算力）、数据（Grass 300TB日抓取）；强化TEE在自主代理中的必要性论证
- 关联 [[hyperliquid]] — Slate是唯一集成Hyperliquid的抽象AI，可执行多空+LP管理+条件清偿
- 关联 [[gmx]] — Kudai作为GMX生态AI代理实验，利用交易费用资助自主交易
- 关联 [[bittensor]] — Sturdy Finance通过Bittensor SN10子网训练AI模型优化收益分配

## 值得记住的引用
> "我始终认为，市场的发展将分为三个阶段：首先是要求效率，然后是去中心化，最后是隐私化。" — IOSG Henry论DeFAI演进逻辑

> "目前的大多数工具都只是 ChatGPT 包装，没有明确的基准来识别高质量项目" — 对当前DeFAI赛道成熟度的冷静评估

> "Agent 与机器人有本质区别。机器人通常针对特定任务，需要人工监督，并需要在预定义的规则和条件下运行。相比之下，agent 更具动态性和适应性，能够自主学习以实现特定目标。"

> "真正的自主代理无法在没有 TEE 的情况下完全运行，因为 TEE 对于保护敏感信息至关重要，比如保护钱包私钥、防止未经授权的访问，以及确保 Twitter 账户的登录安全等。"

## 我的笔记
- 文章本质上是IOSG的赛道mapping，4分类框架有价值但"抽象AI"命名不够精确——这些本质上是"意图执行层"（Intent Execution Layer）：用户表达意图→AI翻译成链上操作。Griffain/Anon/Slate的竞争最终落在三个维度：执行速度、覆盖面（链和协议数）、可靠性（幻觉率）。目前所有项目都处于MVP阶段，文章自己承认"无法准确获取正确的代币地址或价格"，距离生产级可用还有显著距离
- Anon是最值得关注的方向：多模型支持+多语言+Automate框架标准化交互格式以降低AI幻觉。如果Automate框架被广泛采用，Anon可能从应用层升级为中间件/标准制定者。但创始人Daniele Sesta（Wonderland/MIM创始人）有争议历史，是重大风险因素。多模型策略（包括Claude）也意味着Anon不绑定单一LLM供应商，这在AI供应链风险中是个聪明的设计
