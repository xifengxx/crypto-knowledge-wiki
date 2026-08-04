---
type: concept
created: 2026-06-28
updated: 2026-07-02
tags: [depin, ai, infrastructure, compute]
aliases: [DePIN, 去中心化物理基础设施]
---

# DePIN（去中心化物理基础设施网络）

## 一句话定义
DePIN = Decentralized Physical Infrastructure Networks（Messari 2022.11 正式命名）。用区块链代币激励替代中心化平台（滴滴/AWS），去中心化连接物理硬件（GPU/传感器/存储设备）。本质是一种新的**去中心化共享经济**——供给方掌握定价权，平台方退化为协议。

## 历史命名演变
- 2021.12：IoTeX 提出 "MachineFi"
- 2022.4：Multicoin 提出 "Proof of Physical Work (PoPW)"
- 2022.9：Borderless Capital 提出 "EdgeFi"
- 2022.11：Messari Twitter 投票，DePIN 以 31.6% 胜出 → 统一命名

## WHAT-WHY-HOW 分析框架

### What — 识别核心业务
首先识别项目的核心业务：共享算力？共享存储？共享数据？共享网络？

### Why — 为什么需要去中心化
传统 CePIN（中心化物理基础设施）三大困境：
1. **政企利益捆绑**：FCC 拍卖频谱，大资本垄断，新进入者门槛高
2. **创新不足**：垄断企业现金收益丰厚，缺乏升级动力
3. **成本高**：AWS/GCP 定价权集中，用户无选择

### How — 飞轮怎么转
设备部署 → 代币激励供给方 → 网络效应增长 → 服务质升价降 → 需求方接入 → 代币价值支撑 → 更多设备部署（正循环）

## 赛道分类

| 类别 | 子赛道 | 代表项目 |
|------|--------|---------|
| **数字资源网络** | 去中心化算力 | io.net, Render, Aethir, Akash, Heurist |
| | 去中心化存储 | Filecoin, Arweave |
| **物理资源网络** | 去中心化网络 | Helium（5G）, Pollen Mobile |
| | 去中心化能源 | Daylight（分布式电网/a16z $9M）、Starpower |
| | 去中心化数据 | Hivemapper（众包地图）, DIMO（车辆数据）, puffpaw（戒烟DePIN）|

## 新兴子赛道：DeSPIN（去中心化空间智能网络）

DeSPIN = Decentralized Spatial Intelligence Network，是将空间智能（Spatial Intelligence）技术与 DePIN 理念结合的新方向，2025 年 3 月由深潮TechFlow等中文媒体系统介绍。其核心是通过去中心化的众包方式采集和分析现实世界视觉数据（地图/3D场景/机器人训练数据），为地图构建、城市规划和具身AI提供数据基础。

### 空间智能四大核心组件
1. **数据收集** — 借助传感器网络（摄像头、GPS）和物联网设备（手机、笔记本）采集数据
2. **数据处理与分析** — 利用机器学习技术处理地理元数据，识别模式并构建空间查询数据库
3. **知识表示** — 通过语义映射将数据与环境上下文关联，提供可视化地理信息
4. **决策支持系统** — 构建空间预测模型，提供路线优化、障碍规避等服务

### DeSPIN 代表项目
| 方向 | 代表项目 |
|------|---------|
| 众包地图 | [[hivemapper]], [[natix]] |
| 3D空间数据 | [[jojoworld]] |
| 机器人数据采集 | [[frodobots]], [[mecka-ai]], [[prismaxai]] |
| 物理AI研发 | [[xmaquina]], [[openmind-agi]] |

DeSPIN 提出的核心叙事是"贡献即赚"（Contribute-to-Earn）和未来的"训练即赚"（Train-to-Earn, T2E）模式——用户通过日常生活中获取的空间数据贡献价值，根据数据质量获得奖励。该方向面临三大挑战：数据验证（众包数据真实性和准确性）、伦理问题（隐私泄露和滥用）、传统机构接受度。详见[[来源_2025-03_DeSPIN_空间智能_8项目_深潮TechFlow]]。

## 两种设备模式

| 模式 | 代表 | 优势 | 劣势 |
|------|------|------|------|
| 定制化专用硬件 | Helium 热点盒子 | 质量可控，标准化 | 部署慢，供给弹性差 |
| 普适性闲置硬件 | io.net/Render（闲置 GPU）| 供给弹性大，冷启动快 | 标准化难，可靠性不统一 |

## 核心项目

### io.net — 去中心化 GPU 算力
- 愿景："聚合 100 万 GPU，形成世界最大 GPU 集群"
- Solana 原生，$3000 万 A 轮，估值 $10 亿
- A100 GPU $1.58/小时，比 AWS 便宜 50%+
- 无需 KYC，只需 Solana 钱包
- Solana CEO Anatoly 参投

### Helium — 去中心化无线网络
- IoT（LoRaWAN）→ 5G 转型，迁移至 Solana
- Helium Mobile $20/月无限流量

## 绿电能源 DePIN：储能为中心的分布式网络
区别于 Daylight（家庭能源共享）和 Starpower 等现有能源 DePIN，绿电 DePIN 的核心场景是**分布式绿色能源存储即服务（Storage as a Service）**：

- **硬件基础**：光储充一体化设备（光伏板 + 储能模块 + 充电桩）已实现高度数字化——BMS（电池管理）、EMS（能源管理）、PCS（变流器控制）均可输出标准化数据
- **DePIN 智能盒子**：在单点设备数字化基础上，通过 DePIN 物联网芯片 + AI 算力实现分布式联网，将设备注册为链上节点，采集遥测数据并执行充放电指令
- **绿电资产"EVM"**：在基础设施之上构建第二层虚拟能源资产池——类似 L2 的聚合层，包含资产入池（确权/定位/质押条件）、动态定价、交易交换三套算法协议
- **VPP（虚拟电厂）**：对数百万物联网设备进行遥测建模，实现边缘预测与充放电控制，支撑隔墙 P2P 绿电交易
- **需求侧协同**：绿电 DePIN 智能盒子可配置部分 GPU 算力，同时服务于本地电价预测 + 家庭 AI 算力中心 + 边缘计算任务

全球光储充 80% 产能在中国的硬件优势 vs 欧美在软性基础设施（SaaS 云能源管理/EnergyGPT/P2P 交易所/定价算法）的领先，是绿电 DePIN 的地缘博弈焦点。详见 [[来源_2024-06_绿电_DePIN_AI_RWA最佳资产标的_BlockBeats]]。

## 经济模型核心：Burn-Mint Equilibrium
- **Mint**：代币激励供给方部署硬件/贡献资源
- **Burn**：需求方支付代币使用服务（或通过销毁机制获取服务信用）
- **平衡点**：当 Mint 激励 = Burn 销毁 → 网络可持续；当 Mint > Burn → 通胀不可持续

## 代币激励飞轮设计（decentralised.co 2024.11）
GPU市场是赢家通吃的网络效应生意。代币通胀是中心化竞争者不具备的冷启动工具：
- **供给侧**：贡献算力+利用率→代币。通过动态乘数引导行为：地理乘数1.5x（欠服务区域）、硬件乘数2x（紧缺GPU型号）、利用率分层（鼓励稳定在线）
- **需求侧**：代币奖励→实际使用成本补贴，向长期算力承诺倾斜以增加平台粘性
- **基准定价**：保持或略低于市场价，用zkTLS预言机持续监控竞争者定价
- **退出机制**：网络效应建立后逐步缩减代币激励，自然规模优势成为自驱增长

## 核心风险
去中心化 GPU 的供给可靠性 vs AWS 99.99% SLA——对于生产级 AI 训练，"便宜一半"是否足以补偿"可能掉线"？这个问题的答案决定了 DePIN 算力的天花板。

## 竞争路线：中心化矿工 → AI 数据中心（Galaxy 2024.12）
与 DePIN 的去中心化路线形成对照：上市比特币矿企拥有大型场址 + 已获批电力容量，可转型为 hyperscaler 的 AI/HPC 托管商（估值得以从 6-12x 重定价至 20-25x EV/EBITDA）。这是物理资产套利，不依赖代币激励飞轮。但仅少数矿工具备转型条件（暗光纤/液冷/N+1 冗余）。两种路线竞争同一需求（AI 算力短缺），供给模式截然不同。详见 [[来源_2024-12_比特币矿工_AI数据中心_Galaxy]]。

## 相关概念
- [[ai-crypto]] — DePIN 算力方向是 AI+Crypto 基础设施层
- [[depai]] — DePAI 是 DePIN 的自然进化：在去中心化物理基础设施上运行具身化 AI 和机器人，形成机器经济
- [[depin]] 自身
- [[rwa]] — RWA = 金融资产上链，DePIN = 物理基础设施上链，都是"现实世界→链上"的桥梁

## DePIN 验证框架（a16z Guy Wuollet 2025.03）

a16z加密合伙人 Guy Wuollet 在《Why DePIN Matters and How We Can Make It Work》中提出了系统性的DePIN验证框架：

### 两种支付模式
- **点对池（Peer-to-Pool）**：客户向网络支付，网络选择提供者并支付报酬；便于代币补贴和优化用户体验，但验证更关键
- **点对点（Peer-to-Peer）**：客户直接找提供者并支付；验证需求较低但代币补贴更难（自我交易风险更高）

### 自我交易问题
- 提供者同时扮演客户角色，从网络中提取价值
- 质押机制可缓解但无法完全解决：大型质押者在特定奖励比率下仍可获利
- 示例：奖励成本比5:1时，质押25%代币的提供者每花费四个代币获得五个代币奖励

### 五种验证方法对比
| 方法 | 适用性 | 说明 |
|------|--------|------|
| 共识机制 | DePIN不可行 | 只能验证数字计算，物理服务需引入预言机（更弱信任假设）|
| 正确执行证明（ZK/SNARK） | DePIN不可行 | 同上，仅适用于纯数字状态变更 |
| 随机抽样/挑战请求 | 最适合DePIN | 效率高、博弈论合理；被Nym/Orchid/Helium采用 |
| 可信硬件（TEE） | 适合启动/短期 | Intel SGX/TDX、ARM TrustZone；有漏洞风险(SGX.Fail) |
| 白名单+审计 | 最务实/技术门槛最低 | 定制硬件嵌入密钥+人工审计；最中心化，长期成功可能性低 |

### 最优方案建议
- 随机抽样是最适合DePIN的方案（效率高+博弈论合理）
- 可信硬件和白名单适合启动（最简单易行）但中心化程度高
- 共识和ZK在DePIN场景下因需预言机而不可行
- 来源：[[guy-wuollet]]

## 2024 年 9 月生态数据（OurNetwork/EV3）
- **规模**: 370+ DePIN 代币已上线，DePINScan 跟踪 300 万+ 活跃节点
- **代币分布**: 75% 在 EVM 链上发行，Solana 主导规模化项目（活跃节点超 10 万的 10 个网络中 7 个在 Solana：Helium、Natix、Hivemapper、Grass、Dawn、Uprock、Roam）
- **EV3 调查预期**（117 位创始人/投资者）: DePIN 链上 ARR 从 $20M 增长至 $50-100M，市占率从 8-10% 提升至 10-15%
- **新兴子赛道**: 太阳能 DePIN（Glow ARR $1.6M）、视频 AI 计算（Livepeer AI 费用 +1005%）、打车 DePIN（TADA 10 万+ 司机）
- 详见 [[来源_2024-09_DePIN专题_370代币_Helium_深潮TechFlow]]

## Solana DePIN 生态进展（Q4 2024）
- **Helium Mobile**：日均30万订阅用户、576 TB数据卸载、与美国运营商合作的Offloading beta上线
- **XNET**：迁移至Solana，已卸载50TB数据（110万+用户）
- **Grass**：GRASS代币10月底上线，$200M→$800M→$550M市值，Q4末稳定在$5.5亿
- **Hivemapper**：绘制1090万英里（全球30%覆盖），向三大全球地图厂商销售数据（含HERE Technologies）
- **能源DePIN**：Multicoin $12M投资Fuse Energy，GEODNET代币通过Wormhole NTT支持Solana
- Messari DePIN 2024报告将Solana列为网络基础设施领域领导者

## 2025 Q1 Solana DePIN 生态新进展

### DoubleZero — 分布式带宽基础设施
- 由 Solana 基金会前战略主管 Austin Federa 创立，Dragonfly 和 Multicoin Capital 领投 2800 万美元
- Solana 联合创始人 Anatoly Yakovenko 和 Raj Gokal 天使参投，被视为 Solana 基金会 DePIN 战略后的"亲儿子"
- 双环架构：Outer Ring（FPGA 硬件过滤攻击/垃圾交易）→ Inner Ring（专用带宽共识构建）
- 目标：为 Web3 创建基于 Web2 光纤基础设施的通信高速公路，解决网络延迟

### Roam — 全球 WiFi 共享网络
- 前身 MetaBlox（成立于 2018 年），2024 年品牌升级为 Roam 并迁移至 Solana
- 230 万用户、200 万 WiFi 节点覆盖 190+ 国家
- 硬件节点数 DePIN 赛道第一（Messari 2024 年报告）
- 代币 $ROAM 总供应 10 亿，流通市值约 1500 万美元
- 采用 OpenRoaming 标准 + eSIM + DID/VC + Proof-of-Service 挖矿

### 2025 Q1 生态融资事件
- **Shaga**：$400 万种子轮（IOSG Ventures 领投），云端游戏 DePIN
- **Geodnet**：$800 万代币轮（Multicoin 领投），代币过去 12 月增长一倍以上
- **Beamable**：$1350 万 A 轮（Bitkraft Ventures 领投），游戏后端基础设施
- **DoubleZero**：$2800 万（Dragonfly、Multicoin 领投），分布式带宽

### 2025 年 3 月生态全景
- Solana 上约 78 个 DePIN 项目，市值 250 多亿美元
- 头部项目（Helium、Render Network、Hivemapper）完全稀释估值（FDV）超 100 亿美元
- Solana 高性能（理论 50,000 TPS）+ 低成本（每笔约 $0.00025）持续吸引 DePIN 项目

详见 [[来源_2025-03_Solana_DePIN帝国_DoubleZero_Roam_BlockBeats]]

## 来源
- [[来源_2025-07_Solana_H1_盈利增长_Helius]] — Solana DePIN全景更新：Helium Mobile Q1新增30万用户超过传统运营商、Hivemapper测绘5.4亿公里（全球1/3道路）、Nosana完成176万次AI推理部署、Shaga云端游戏DePIN的概念验证，最大更新是DePIN项目在规模化验证阶段的最新经济数据 — Coinspire 2024.12 PANews 全景分析：DePIN 五步运行模型/中间件+应用层四板块/规模化四大掣肘/硬件五维度评估/BME+SFA 代币经济四层赋能/金融化三路径
- [[来源_2023-11_去中心化AI_Bittensor_TAO_TengYan]] — Bittensor 在 DePIN 中的独特定位：不是出租闲置硬件（Render/io.net），而是用加密经济激励 AI 模型竞争和协作的网络，聚焦下游推理而非上游训练
- [[来源_2023-12_AI与加密交汇_潜力未发币项目_BlockBeats]] — 2023 年底 7 个 AI+Crypto 未发币项目系统性盘点，覆盖 GPU 算力/公链/分布式训练/Agent 创作/搜索引擎/云游戏多子赛道
- [[来源_2024-11_分散式计算_分布式训练_decentralised-co]] — 代币激励飞轮/GPS算力市场网络效应/训练vs微调vs推理工作负载分析
- [[来源_2023-12_Web3_AI_赛道全景盘点_BlockBeats]] — 覆盖 Gensyn/Render/Akash/io.net 等去中心化算力项目，a16z/Kleiner Perkins/NVIDIA 等顶级机构布局
- [[来源_2024_DePIN生态解密_WHAT-WHY-HOW]]
- [[来源_2025-01_Grass_从挂机挖矿到AI开发平台]] — Grass=AI数据层/30亿视频数据
- [[来源_2024-11_Grass逆市拉盘_DePIN_AI数据层新龙头_MarsBit]] — FDV $15.5B/逆势涨186%
- [[来源_2024-08_Sahara_AI_4300万融资_去中心化AI数据市场]] — AI数据标注+Provenance
- [[来源_2024-02_GSR数字资产参考包_Web3入门指南_BlockBeats]] — DePIN飞轮模型/新硬件vs闲置资源两种模式/九大子赛道全景
- [[来源_2024-12_Solana_Q4状况_Messari]] — Helium Mobile 30万日活、Grass代币上线、Hivemapper 1090万英里覆盖、Fuse Energy Multicoin投资
- [[来源_2025-04_Solana_DePIN_月收入_PANews]] — 2025年4月最新月度数据：Solana DePIN总收入45.8万美元（+33% YoY）、Helium Mobile 3.6万用户+125%/收入25万美元创纪录、Grass数据3450万GB创新高、Roam 53.5万新增节点/400万总节点、14个项目分项表现
- [[来源_2024-01_HashKey_Capital_Web3投资赛道全解析_PANews]] — HashKey DePIN 投资框架：三类硬件判断——关注 ToC 高频硬件（可穿戴/欠发达地区硬件普及革命）、谨慎看待改善类硬件（路由器等已有大厂赛道）、观望特有矿机方向（日常可有可无，难形成用户黏性）；机制设计优先于时机判断
- [[来源_2023-04_Web3用户增长_市场周期_新叙事_CoinVoice]] — PoPW（物理工作证明）概念的早期来源之一，Multicoin Capital命名；去中心化移动网络/地理测绘/环境数据采集/VPN被列为重点方向，Helium为核心案例
- [[来源_2025-01_Monad测试网_生态建设_参与策略_PANews]] — Monad DePin 生态：PULSE（健康穿戴设备，$180 万种子轮）、Plato（Web3 大众点评）、PaperPlane（餐饮支付/会员，10,000+用户）、EarnOS（链抽象广告，200,000+验证用户）
- [[来源_2024-09_DePIN专题_370代币_Helium_深潮TechFlow]] — 2024年9月OurNetwork DePIN专题：370+代币上线/Solana 7/10规模化项目主导/EV3 ARR预期$50-100M/Helium 11.4万用户/Glow太阳能$1.6M ARR/Livepeer AI费用+1005%/IoTeX 33万用户/TADA 10万+司机
- [[来源_2023-12_三盘模型_庞氏第一性_MarsBit]] — 从庞氏三盘模型分析 Helium Mobile：$MOBILE 为矿币分红盘案例，第一年 50B 预挖背景下截至 2023.08 实际流通仅 30B（流通市值 78 万 U），矿商通过算力结构推动拉盘-矿机销售正循环，1 份拉盘→5 倍矿机销量
- [[来源_2024-10_DePIN经济模型_核心要素_PANews]] — ChainUp Investment 2024.10：存储/计算/AI/其他四条赛道13个项目系统对比，量化揭示DePIN项目的需求赤字（Livepeer $30万收入 vs $8,000万激励、Filecoin 3%燃烧率 vs 27%通胀率、io.net 2%集群利用率），Helium Mobile是唯一BME机制成功案例（98% DC燃烧）
- [[来源_2024-09_DePIN_双重曲线_价值网络_深潮TechFlow]] — Waterdrip Capital分析师Evan提出DePIN"双重曲线"理论框架：第一曲线硬件销售驱动（众包模式转移基建成本给矿工）、第二曲线数据价值网络变现驱动（BME/SFA两种代币经济模型）、中间件基础设施（DePHY/Swan Chain/Parasail）衔接两波增长、AI数据枯竭（Epoch AI预测2026年高质量语言数据耗尽）论证DePIN传感器数据价值
- [[来源_2024-12_Solana节点运营_MEV盈利_Jito_Raydium_PANews]] — DePIN与Solana的契合逻辑：以太坊上分发$5代币需付$3 Gas费不现实，Solana低成本实时结算使硬件矿业/打车协议等DePIN项目可行；Solana生态有两年历史的打车协议（类似Uber）正在美国试运营数据表现好
- [[来源_2024-12_Crypto_AI_去中心化计算_算力为王_Teng_Yan]] — Teng Yan 去中心化计算分析：GPU数量是虚荣指标，需求端才是真正瓶颈；Token补贴启动供给但无法解决需求；分布式GPU协调堪比Kubernetes级工程挑战
- [[来源_2024-09_Solana生态系统全景_融资历史_技术机制_深潮TechFlow]] — Insight VC明确Solana为DePIN链外用户引导首选链：Helium（IoT+5G）/Hivemapper（众包地图）/Render Network+io.net（分布式GPU）/IoTeX（设备数据上链）/Teleport（去中心化打车），五大DePIN子赛道在Solana上均已落地
- [[来源_2024-06_io.net_去中心化GPU_Binance_Launchpool_链茶馆]] — io.net 2024年6月Launchpool上币前夕最系统的中文介绍：六组件产品架构（IO Cloud/Worker/Explorer/SDK/Tunnels/Network）+双代币经济模型完整参数+$3000万A轮投资人全名单，为DePIN算力赛道提供了标杆项目级的运作机制全景
- [[来源_2024-09_持续盈利项目_代币炒作_商业模式_深潮TechFlow]] — DePIN是"现金奶牛"赛道：Helium 756,000用户/19.1TB数据/depin.ninja收入第一；GEODNET 9,000+矿工/月收入增长10-15%/$2-3M ARR预期/精度高GPS 100倍/比竞品便宜90%；Hivemapper众包行车记录仪数据货币化
- [[来源_2024-06_绿电_DePIN_AI_RWA最佳资产标的_BlockBeats]] — 绿电能源DePIN：光储充一体化设备的DePIN联网/智能盒子硬件/"绿电EVM"二层虚拟能源资产池/三大核心算法协议（入池+定价+交易）/VPP虚拟电厂与P2P绿电交易/全球80%产能在中国的硬件优势vs欧美软性基础设施领先
- [[来源_2024-03_APhone_DePIN云手机_全面介绍]] — APhone 开创 DePIN 新子赛道"云手机"：基于 Aethir 分布式云的虚拟手机，用户无需贡献硬件即可享受去中心化基础设施，对比传统 DePIN 硬件部署模式（Helium/io.net）
- [[来源_2024-09_PayFi_五大Web3支付项目_Followin]] — Karrier One 作为 DePIN + PayFi 融合案例：运营商级去中心化电信网络/KNS 手机号即 Web3 钱包/71 亿手机用户目标市场/Karrier DAO 治理
- [[来源_2024-11_178个加密AI项目全景_DimaKhanarin_PANews]] — 计算资源子类别中大量项目（Render/Akash/Aethir/io.net/Nosana/Flux/Spheron/Gensyn等）同时属于DePIN和加密AI赛道，算力DePIN是加密AI基础设施的核心供给端
- [[来源_2024-08_AIxCrypto_三层框架_Foresight_Ventures]] — Foresight Ventures 2024年8月报告将去中心化算力（io.net/Akash/APUS/PingPong）定位为 AI x Crypto 基础设施层核心，提供 io.net A100 $0.76/h vs AWS $4.10/h 的具体成本对比
- [[来源_2023-12_DePIN赛道全景_一图尽览_PANews]] — PANews 2023年12月全景图：最早的DePIN赛道系统分类之一，将~70个项目划分为物理资源网络（无线/地理空间/移动性/能源）和数字资源网络（存储/计算/带宽）两大维度，标注 IoTeX 和 Solana 为 DePIN 概念公链
- [[来源_2025-04_DePIN_代币经济_报告_Fluence]] — Fluence 联合创始人 Tom Trowbridge 撰写的 DePIN 代币经济学深度报告，提出代币经济学的系统分类框架（发行/使用两大维度×质押/奖励/治理/支付四大功能），为整个概念页补充了代币设计层面的深度分析
- [[来源_2025-06_区块链重塑七行业_代币化_insights4vc]] — 能源DePIN赛道6个协议状态更新：Project Zero (Fuse) $1200万融资覆盖5万+英国用户/450 MW在开发; Daylight测试网上线; Starpower种子轮$250万/10万连接设备; Glow $3000万融资/碳信用产量三倍; Sourceful ENERGY代币Q3 2025上线; Power Ledger $9300万市值。VPP虚拟电厂市场$50亿→$166亿的定量数据
- [[来源_2025-04_比特币生态_RWA赛道_Web3全景_PANews]] — Infinity Labs DePIN全景数据：Filecoin存储容量30EiB/利用率12%/FVM年收入+300%/检索效率不足冷数据>90%；Arweave累计存储800TB/成本高于Filecoin；Render好莱坞采用20%/算力收入年+150%；io.net AI推理成本降低70%/日调用1亿次；Helium 5G基站50万台；Grass节点200万/日吞吐量100TB
- [[来源_2025-03_DePIN构建指南_验证问题_a16z]] — a16z合伙人Guy Wuollet系统性DePIN验证框架：点对池vs点对点、自我交易分析、五种验证方法优劣对比（随机抽样最适合DePIN、共识/ZK不可行、TEE/白名单适合启动）
- [[来源_2022-05_Web3数据赛道_数据索引_SevenX]] — [[meson-network]] 作为去中心化 CDN 案例：通过挖矿聚合闲置服务器调度带宽，为 IPFS/Arweave 等去中心化存储提供文件/流媒体加速服务，解决存储层数据量大产生的拥堵问题
- [[来源_2025-02_比特币挖矿_力量_Grayscale]] — 比特币挖矿作为DePIN的经典案例：位置无关、可中断、模块化的电力消费者，0.2%全球电力但清洁能源占比50-60%，能加速可再生能源部署和电网稳定（如ERCOT德州案例）
- [[来源_2025-06_DePIN_6用例_a16z]] — a16z合伙⼈Guy Wuollet横向覆盖六大DePIN应用领域（能源/电信/交通/AI/机器人/医疗），重点补充了机器人和医疗两个此前覆盖较少的子赛道
- [[来源_2025-05_DePIN_投资逻辑_IOSG_PANews]] — IOSG Ventures分析师Jiawei从投资机构视角提出系统化DePIN投资框架：方向（市场空间）、产品（供给端+需求端双重PMF）、硬件（制造-销售-分发-维护四环节摩擦力分析）、团队（传统行业+加密原生双背景）。核心洞见：DePIN处于Infra与Consumer交汇点，兼具PMF和mindshare；Grass模式（无硬件门槛）为最优冷启动路径；Helium与Telefonica合作拓展拉美市场
- [[来源_2025-05_DePIN_值得关注_SubQuery]] — 从 SubQuery Network 官方视角介绍 DePIN 定义、四组件架构、2025 年三大驱动力，并列举 Helium/Render/io.net/SubQuery 为四个核心项目；SubQuery 近 300 链覆盖和去中心化 RPC 新服务
- [[来源_2025-02_DePAI_Messari_深潮TechFlow]] — Messari 将 DePAI 定位为 DePIN 的自然进化：DePIN 代币飞轮为物理 AI 的数据采集传感器和机器人提供快速部署支持；Frodobots/Hivemapper/NATIXNetwork/IoTeX 等案例展示 DePIN 从物理基础设施共享向物理 AI 数据采集的演进
- [[来源_2025-03_DeSPIN_空间智能_8项目_深潮TechFlow]] — 首次系统介绍 DeSPIN（去中心化空间智能网络）概念，涵盖8个协议项目，补充了 DePIN 在空间数据采集这一细分方向的项目图谱
- [[来源_2025-03_Delphi_DePin生态项目_DelphiDigital]] — Delphi Digital 在推文中将 DePin 项目分为互联网网络和计算网络两大类，分别推荐 DoubleZero/Helium（互联网网络）和 Akash/Phala/Fluence（计算网络），提供权威研究机构的赛道分类视角
