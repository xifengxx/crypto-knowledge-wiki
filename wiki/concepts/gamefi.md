---
type: concept
created: 2026-06-28
updated: 2026-07-02
tags: [gamefi, gaming, nft]
aliases: [GameFi, 链游, 区块链游戏]
---

# GameFi（区块链游戏）

## 一句话定义
将游戏与 DeFi 结合的区块链原生游戏形态。"Game + Finance"——玩家通过游戏行为获得代币和 NFT 奖励，游戏内资产真正归玩家所有并可自由交易。

## 演化路径
- **2012-2015**：比特币博彩起步——SatoshiDice（2012）第一个基于比特币的博彩游戏，全链游戏的原初形态是去中心化赌场而非娱乐应用
- **2015-2017**：以太坊智能合约博彩（vDice、Etheroll）+ 第一个已知 NFT（2014.05，Kevin McCoy & Anil Dash）
- **2017-2019**：CryptoKitties 等 NFT 游戏雏形
- **2019-2021**：Axie Infinity 引领 Play-to-Earn（P2E）热潮
- **2022-至今**：从纯 Ponzi 转向可玩性优先，全链游戏（Fully On-Chain Game / FOCG）兴起，Web2.5 模式（核心资产上链 + 链下主体运行）成为务实路径

> 注：2023 年之前的 GameFi 叙述中，区块链游戏的历史通常追溯到 CryptoKitties（2017）。LK Venture（2023.10）对此进行了谱系学修正：区块链上的第一个游戏是博彩（SatoshiDice, 2012），它"天然是全链的，因为比大小、猜数字无非是数学上的计算，通过简单的哈希函数就能实现可验证性"。这一修正揭示了区块链游戏的原初驱动力是信任最小化的博弈结算，而非娱乐体验。

### 全链游戏（FOCG）子类别

全链游戏将**全部游戏逻辑和状态**部署在区块链上，而非仅将资产代币化。核心特征（响指研究所，2023）：

1. **真实资产拥有权**：游戏资产以链上 NFT 存在，玩家可自由买卖、跨游戏使用
2. **唯一可验证数字资产**：每个 NFT 独一无二，稀缺性由链上数据验证
3. **去中心化交易市场**：智能合约撮合，消除中介和对第三方平台的依赖
4. **社区治理参与**：玩家通过代币投票参与游戏发展方向

#### FOCG 游戏类型分类：MPG vs UGG（LK Venture, 2023.10）

LK Venture 提出"全链不是目的，而是手段"——应根据区块链的核心优势选择游戏类型：

1. **多方博弈游戏（Multi Party Game, MPG）**：利用区块链的公开、透明、可验证特性，让多方对抗性交互获得公正裁决。博弈意味着各方是对抗性的，全链保证设计者也无法篡改结果。涵盖博彩、棋牌、回合制策略——特点是交互次数相对较少，更考验思考而非反应速度
2. **用户生成游戏（User Generated Game, UGG）**：利用区块链的开放、自治、所有权特性，设计者仅设定最小化核心规则集，用户在链上探索创造各种玩法。AI 大模型辅助下用户创造力被释放，区块链确权让创造者获取收益。不满意核心规则集？部署新合约即成为新世界

#### 全链游戏三阶段路线图（LK Venture, 2023.10）

- **短期**：GameFi 高经济激励主导（Gas 成本仍高，纯粹游戏体验难获用户）
- **中期**：以太坊单极地位打破，高性能 L1 崛起，ZK-Rollup 技术成熟（Gas 降至传统世界水平），专用链出现避免无关事件拥堵
- **长期**：游戏数据训练 AI 反哺现实（如赛车→自动驾驶边界案例），UGG 使游戏社区向链上社会生态演化——"人类社会也是在一套核心自然法则下通过个体探索创造而建立的"

#### 全链游戏公链五维评估框架（LK Venture, 2023.10）

按 TPS、确认时间、交易成本、安全性、独立性五个维度的 5 分制雷达图评估各公链对 FOCG 的适用性。结论：没有银弹，项目应根据自身设计特性选择。

**代表项目与技术路线分化**（截至 2023 年中）：
- **zkSNARKs 派**：[[dark-forest]] — 利用零知识证明实现链上战争迷雾/不完全信息博弈，无原生代币
- **L2 引擎派**：Loot Survivor、Isaac — 部署在 StarkNet，使用 DoJo 链上游戏引擎和 Cairo 合约
- **定制链派**：Treaty (Curio) — 自建定制链，声称性能为普通 EVM 链的 100 倍
- **混合架构派**：[[wolf-game]] — 最初完全链上，后转为 Web3-Web2 混合（资产上链、玩法链下）
- **代币经济多元实验**：Dark Forest 无原生代币 → Isaac 的 Play 2 Vote（零货币激励）→ Influence 的 ERC-1155+ERC-721+ERC-20 三层资产体系

**关键趋势**：2023 年的 FOCG 普遍回避"代币先行"模式，更注重可玩性和技术验证，是对 2021-2022 P2E 泡沫的清醒反思。Starknet 是 2023 年最活跃的 FOCG 生态（LootRealms/GO L2/Isaac/Unstoppable Games），但 Gas 成本仍是主网上线的核心瓶颈。

## 代表项目

### P2E / Web2.5
- Axie Infinity — P2E 鼻祖，部署于 [[ronin]] 链
- [[big-time]] — 3A 级 MMORPG 链游，Web2.5 模式代表，以太坊上构建，Epic/暴雪团队背景，融资 $9000 万+
- [[heroes-of-mavia]] — AAA MMO 策略链游（类似《部落文明》），受 Axie 启发。三类 NFT（土地 70/20/10 稀有度分布、英雄、雕像）功能分层，双币模型（RUBY 效用 + MAVIA 治理），Mavia-Match 匹配质押机制针对传统空投缺陷设计。Binance Labs 等融资 800 万美元
- [[sunflower-land]] — Polygon 链上的农场 P2E，种田/砍伐/采矿/养殖多玩法递进，SFL 代币按参与人数递减产出（无预挖），提款滑动税率（30%-10%）抑制"挖提卖"，Wishing Well 质押池
- [[ronin]] — 游戏专用 L1（Sky Mavis 开发），累计 NFT 交易量 $43 亿，12+ 款游戏，2024 年 DAA 峰值 160 万，DPoS + zkEVM 路线图
- [[klaytn]] — 韩国元宇宙/游戏公链（Kakao 旗下），KLAY 总市值 $43 亿，三大游戏侧链 WEMIX/MARBLEX/NEOPIN，KakaoTalk 4500 万用户入口
- [[oasys]] — 游戏专用公链（育碧、世嘉合作），Hub+Verse 模块化架构，零 Gas 费，2022 年 10 月主网上线，28 款链游

### 传统游戏公司转型链游
- [[wemade]] — 韩国游戏公司，MIR 4 Global（140万CCU/620万MAU），自建WEMIX Chain L1 + 完整生态
- [[netmarble]] — 韩国$40B市值的游戏公司，双平台策略（Marblex+FNCY），2022年三款链游1300万用户，Ni no Kuni 95%代币销毁率

### Web3 游戏平台
- [[matr1x]] — Web3娱乐平台，自研+引入三方游戏。第一款射击手游MATR1X FIRE下载量300万+。2024年8月$MAX以1.6亿FDV低估值上线OKX，打破VC币高FDV惯例。2000-3000万美元融资，投资方包括Folius/Hana/OKX/Makers Fund/SevenX/Amber
- [[degame]] — Web3 游戏聚合平台（2021 年成立），收录 4795 款游戏 / 77 条链 / 1356 种 Token，累计融资 $1000 万+
- [[hyperplay]] — Web3 原生游戏启动器，跨游戏资产互操作，2023 年 6 月融资 $1200 万

### 全链游戏（FOCG）
- [[playerone]] — 多链元宇宙沙盒平台，2022 年代表项目。独创 RarityScore 算法将 NFT 稀有度与 P2E 奖励权重挂钩、O2E（Operate to Earn）经济模型、LayerZero 七链互操作、四个编辑器产品矩阵（RoleEditor/SpaceEditor/VoxelEditor/GameEditor）。天使轮由 SIG 和 The9 领投
- [[dark-forest]] — 首个 zkSNARKs 链游，不完全信息博弈，MIT 团队，V 神背书
- [[wolf-game]] — 风险协议（ERC-20/ERC-721 盗窃交互），被 Pixel Vault 收购，混合架构

## Web2.5 模式（Big Time 案例）
Big Time 代表了 2023 年链游的一个重要设计范式——**Web2.5**：
- **核心资产上链**：皮肤 NFT、功能性 NFT、SPACE 土地 NFT 和 BIGTIME 代币在链上，其余游戏内容在链下服务器
- **用户无需钱包**：通过专利 Vault 技术实现链下资产托管，玩家用谷歌账户登录即可游玩和交易，随时可将资产转至链上
- **代币经济双锚定**：BIGTIME 代币产出成本由时间水晶（法币定价，$5/500 个）和时间沙漏（市场供需定价）共同决定，实现供需弹性调节
- **NFT 功能分层**：皮肤类 NFT（消费品，不影响数值）+ 功能性 NFT（生产工具：军械库/熔炉/时间守卫），后者需要挂载到 SPACE 土地上才能使用

## 核心矛盾
"玩游戏赚钱" vs "因为好玩才玩"——早期 GameFi 偏向前者，可持续性差。下一阶段的核心是游戏性 vs 经济模型的平衡。

## W Labs 外循环分析框架与生命周期分类（2022年9月）

W Labs（瓜田实验室）联合 Footprint Analytics 在 2022 年 9 月对 GameFi 1.0 的系统性诊断（来源：[[来源_2022-09_GameFi模型发展_外循环_web3caff]]）：

### "外循环" vs "内循环"

GameFi 1.0 的"外循环"本质是庞氏结构——老玩家用新玩家资金复投，新玩家不断向老玩家支付利息和短期回报。所有打金产出的 token 都需要有新玩家购买消耗，否则 token 价格即死亡螺旋。与此对应的是"内循环"——游戏本身的玩法、内容、社交产生的内生价值循环，不依赖新玩家资金维持。

> "这种偏庞氏在项目初期是一种引流方式，但仅依靠外循环模式并不可行，如果项目方找不到自身内循环的方式吸收掉之前的泡沫将很难逃离出死亡螺旋的命运。"

### 三种生命周期形态

W Labs 基于 Footprint Analytics 数据，将 GameFi 项目生命周期分为三种典型形态：

1. **蓝筹项目形态**（代表：[[axie-infinity]]）：资源、共识最强，在基础双币+繁殖模型下维持数月上升期后缓慢下跌，至今仍有忠实用户
2. **强背景项目形态**（代表：[[binaryx]]）：社区共识+大户锁仓创造初期造富效应，但子币通胀导致用户迅速流失。BNX 币价因交易所和项目方高度控盘出现反弹——但游戏用户依然寥寥无几，呈现"金融属性与游戏属性脱钩"
3. **纯资金盘项目形态**（代表：[[cryptomines]]）：极短回本周期吸引资金，升得越高跌得越快，断崖式死亡螺旋——"大部分土狗项目"的标准轨迹

三类项目均在 2021 年 12 月左右同步陷入困境，说明熊市环境加速了所有类型的外循环模式崩溃，但根本原因是"token 整体的资金膨胀增速已跟不上游戏内部资金收益需求"。

### 三种未来路径

W Labs 提出 GameFi 的三种进化方向：
1. **3A 游戏路径**：高开发成本、高体量、高质量（代表：[[big-time]]、[[illuvium]]、Sidus、Shrapnel、Phantom Galaxies）。优势是关注度极高；问题同样突出：开发进程慢、画质远不及传统游戏、IDO/INO 后赋能不足、Roadmap 不清晰。仍需等待（可能至 2023 年 Q2/Q3 或更久）
2. **叙事型 X2E 产品**：类似 [[stepn]]、SNKRZ、Melody 等"带有赚钱属性的 Web3 产品"，更注重产品功能带来的社交属性——大世界聊天、排行榜、公会战等 SocialFi 元素
3. **利益过渡型 Fi 游戏**：在当前阶段仍以 P2E 为主流，双币/多币模式+DAO 金库+自有 NFT 交易市场（确保税收为项目方主要收入来源），强调横向和纵向延伸

### 横向延伸与纵向延伸设计框架

W Labs 提出的 GameFi 经济模型改进方案，核心是打破 P2E 的"刷怪-产币-提升属性"简单循环：

- **横向延伸**：丰富基础场景设定。增加更多 token 和 NFT 装备的产出/消耗场景（装备寿命机制+修复标准、F2E 和 P2E 用户分层、不同游戏玩法设定）
- **纵向延伸（向上）**：解决玩家可选角色太少、99% 靠"挖提卖"单一模式的问题。增加高级副本、PVE、PVP 等差异化场景，通过利益和共识给予更多赋能
- **纵向延伸（向下）**：大幅增加道具数量和玩法以拉长生命周期。增加道具碎片、宝石，进而增加合成、分解功能——大量借鉴传统游戏玩法

> "当游戏自身内循环的动力足够大时，将产生能摆脱陷入死亡漩涡惯性的离心力。"

### 与 Foresight Research 框架的对比

W Labs 框架与 Foresight Research（2022.05）互补但不相同：
- Foresight 强调"非货币性收益"作为大前提（健康/社交/娱乐让零和博弈转为正和），偏抽象概念
- W Labs 更具体地给出"横向/纵向延伸"的架构设计方法，偏实操指南
- 两者均诊断出外循环/庞氏的本质问题，但 W Labs 通过三种生命周期形态让诊断更可视化
  
## Foresight Research 经济模型设计框架（2022年5月）

Foresight Research 于 2022 年 5 月提出了 GameFi 经济模型的系统性设计框架，核心围绕一个"大前提"和七个"核心设计要点"构成（来源：[[来源_2022-05_Gamefi_经济模型_非货币性收益_ForesightResearch]]）：

### 大前提：非货币性收益产出
任何可持续的 GameFi 经济模型必须满足 **"大前提"——必须给予用户非货币性收益（健康、社交、娱乐）**，否则是零和博弈/旁氏骗局。框架通过 Stepn（健康价值）和 Axie（纯投机）的对比建立论点：非货币性收益使生态不再是零和游戏，因为它在游戏之中产生了正向外部价值，玩家不再仅盯着投资回报率。

### 七大核心设计要点
1. **玩家数量与货币供给的时序匹配**：重点在用户暴增期的动态调整——控制增长速度与货币供给速度，建议实行货币总量固定分配制，使代币供应增速 < 玩家数量增速
2. **多样化+概率化奖励机制**：使玩家无法精确计算 APR——引入排位赛奖励、竞速排名 Buff、随机装备掉落等非货币性概率奖励，让回本期难以估算（参照传统 MMO 的随机掉落设计）
3. **双货币制度 + 储蓄物**：区分治理货币（高获取难度+关键消耗场景）与游戏货币（内循环消耗），设立类似"黄金"的储蓄物以对抗通胀；引入时间/数量/资深度三个维度的赋税参数
4. **核心资产换代制**：核心资产不能一劳永逸——通过等级制、升级上限、数值膨胀、稀有合成等机制引导玩家持续更换/升级资产
5. **用户画像分层与金字塔结构**：针对肝帝/神操/上班族/学生/氪佬/月卡党开发不同模式，激发各类用户的支付力——氪佬贡献外部资金流，底层玩家加工材料，形成健康的小型社会
6. **游戏公会双刃剑**：鼓励玩家自发的社交公会（增强 bonding 和归属感），限制专业打金公会（通过时长/耐久度/体力值防止过度开采）
7. **经济租赁化**：租赁使装备拥有者可选收租而非出售，但打金租赁需限制避免机器化；高端租赁（按次租赁高级装备）反而增加"游戏性"这一非货币收益，被定义为双赢模式

### 与同期框架的对比
- 晚于 Nat Eliason 2021 年 3 月的系统性批判（七大问题/八大解决方案），但比 Eliason 更正面地提出了"如何构建"的设计框架
- 早于 Incuba Alpha Labs 2022 年 7 月的"十问十答"（不可能三角、三币/四币系统），两者在设计方法论上互补——Foresight 更强调"为什么"（非货币收益作为前提），IncubaAlpha 更具体地给出了代币经济参数设计方案
- 七个核心点均引用传统 MMO（魔兽世界/梦幻西游/龙之谷）作为正面参照系，与 [[来源_2022-11_梦幻西游_经济系统_半佛仙人]] 的视角一致

### 局限与后续验证
- 文章 2022 年 5 月对 Stepn 持相对乐观态度，但 Stepn 在 2022 年下半年依然经历代币崩溃，"健康"这一非货币收益不足以抵抗代币供需失衡的死亡螺旋——说明非货币收益只是必要条件而非充分条件
- 七大设计要点至今（2026 年）尚无 GameFi 项目完整实现过，反映了理论与实践之间的巨大鸿沟

### Nat Eliason 的早期系统性批判（2021年3月）
Nat Eliason（Crypto Raiders 经济顾问，资深加密游戏玩家）在2021年3月发表了最早的 GameFi 系统性批判之一，提出七大问题和八大解决方案。其核心论点包括：NFT从收藏品投机范式引入游戏导致"地板价焦虑"；DeFi的庞氏挖矿模式被直接复制到游戏中；收益不可持续的根本原因是所有新生产资源都增加收入潜力；"玩即赚"本质是伪工作而非真正好玩的游戏。这些预判在后续Axie Infinity SLP崩溃、STEPN代币通胀等事件中得到验证。来源：[[来源_2021-03_加密游戏_困局_突破_NatEliason]]

## 用户洞察：Web3 玩家画像与 Bartle 分类（Clique 数据，2023）

Cube Labs（SunnyZ）基于 [[clique]] 的用户分析数据，首次将 Bartle 玩家分类框架应用于 Web3 场景（来源：[[来源_2023-07_GameFi玩家洞察_增长黑客_CubeLabs]]）：

**Web3 玩家 vs 普通用户**：购买力 4x / 社交影响力 1.2x / Steam 游戏时长 4x（人均 1,784 小时）/ 人均 ETH 持有量 16.5 / Twitter 粉丝 500 人量级。超过 50% 偏好硬核游戏（人均 3,303h），明显偏好多人游戏（合作/对抗），70% 喜欢动作+策略类。

**Bartle 四分类与 Web3 运营策略**：
| 类型 | 占比 | 行为特征 | Web3 运营策略 |
|------|------|---------|-------------|
| 社交型 | 67% | 偏好多人合作、公会战斗 | 给予社区管理员角色，带动其他玩家 |
| 杀手型 | 16% | 追求竞技胜利、愿意氪金 | 排行榜+竞技性引导，氪金升级道具 |
| 成就型 | 11% | 主动完成任务、对激励敏感 | 任务复杂度与奖励稀有度平衡 |
| 探索型 | 6% | 热衷彩蛋/隐藏剧情/新机制 | 设置彩蛋+隐藏内容，让其成为布道者 |

**获客路径两分法**：
- 路径一（传统买量，如 CounterFire/CEBG）：97% 新玩家，购买力一般但社交影响力好
- 路径二（Alpha 社区 + Launchpad，如 BLOCKLORDS）：60% 为 Web3 存量玩家，钱包余额丰厚，精准度高

**适合 Web3 化的游戏类型**：MMORPG（账号/道具/公会天然交易需求）> SLG 策略游戏（运营成本低）> Simulation 模拟游戏（养成+社交+道具交易）。不推荐 MOBA（开发成本高、生命周期长）。

**局限警告**：Bartle 框架假设玩家动机是内在的，但 Web3 的外部经济激励可能导致「伪分类」——代币激励下的社交行为可能完全不同于内在动机驱动的社交行为。Clique 数据的代表性也可能存在正向选择偏差（仅覆盖已使用 Clique 集成协议的用户）。

## 代币经济可持续性：熵增理论与 ServerFi（耶鲁，2024）

耶鲁大学研究从热力学第二定律出发，为 GameFi 代币经济失败提供了系统性理论框架：

**熵增诊断**：在封闭的代币经济系统中，代币初始分配有序（低熵）→ 更多代币通过游戏机制持续生成 → 交易和流动增加 → 市场熵（混乱度）激增 → 代币供应过剩引发通胀 + 投机者涌入导致价格不稳定 → 系统达到高熵状态，代币价值普遍下降，玩家参与度减少。典型案例是 Axie Infinity 的 SLP 代币：繁殖机制持续增发 → 二级市场饱和 → 供需失衡 → 代币贬值。

**ServerFi 模型**：玩家通过贡献值获取抽奖机会 → 收集碎片 → 合成 NFT → 质押 NFT 分享服务器收益。核心机制是碎片抽奖引入的随机性，打破了"早期玩家垄断"，促进社会流动性：顶级玩家不能"坐享其成"（必须持续贡献维持地位），新玩家有向上流动机会。500 次迭代模拟实验验证了 ServerFi 在长期可持续性上优于"持续奖励高留存玩家"模型（后者导致尾部玩家边缘化→新玩家进入壁垒升高→顶级玩家奖励下降→恶性循环）。

**未解决的问题**：服务器经济价值的外源性来源（如果仅靠新玩家贡献维持，本质上仍是 Ponzi 结构）；随机性是否足以抵抗"鲸鱼"通过资本规模碾压概率优势。

## 相关概念
- [[igaming]] — 传统在线赌博产业（1994年起），是理解 GameFi"赌场基因"的前置知识。两者独立但存在交叉（加密赌场），iGaming 的监管框架和合规实践对 GameFi 的未来监管方向有参照价值
- [[defi]] — GameFi 是 DeFi 在游戏领域的延伸
- [[tokenomics]] — 代币经济模型分类框架（单币/双币/三币），是 GameFi 经济设计的基础
- [[nft]] — 游戏内资产以 NFT 形式存在
- [[socialfi]] — 游戏+社交的交叉
- [[layer2]] — StarkNet 等 L2 是全链游戏的主要计算层

## Game CP 三维分类框架（Reid, 2022）
Reid（2022.08）提出了GameFi游戏的三维坐标定位法，按三个维度分类：

1. **与现代电子游戏的相似度**：追求电影级表现（高）vs 简洁抽象（低）
2. **上链程度**：哪些要素上链
3. **金融属性**：是否是DeFi变体（高）vs 仅基础经济系统（低）

典型定位示例（Reid, 2022）：
- [[defi-kingdoms]] — 低相似度/高上链/高金融（DeFi游戏化代表）
- [[wolf-game]] — 高相似度/高上链/低金融（全链博弈游戏代表）
- [[dark-forest]] — 高相似度/高上链/低金融（zkSNARKs链游代表）
- 链改游戏 — 高相似度/低上链/低金融（如Theta arena）
- 博彩 — 低相似度/低上链/高金融
- 随机数型游戏 — 低相似度/高上链/低金融

### 代币设计分类（Reid, 2022）
- **单币**：所有经济产出和消耗与同一token挂钩，易调控但难应对极端市场（代表：飞船）——关注消耗机制设计和价值锚定
- **双币**：大多数游戏采用，主币（价值币/治理）+辅币（游戏内产出），代表Axie及其仿盘——关注两币供应比例和消耗关联设计
- **多币**：常用于SLG和开放世界等资源较多游戏（代表：Farmers World、Star Sharks）——关注各币种代表的活动关系和产出消耗关系

### 内容载体演化框架（Reid, 2022）
游戏作为内容载体的演化路径：桌游→街机→主机→页游→端游→手游→VR/AR+Blockchain。每个阶段经历"移植借鉴前一代→自适应→井喷式创新"的过程，区块链作为最新载体正处于移植借鉴Web2游戏的阶段。

### 未来两极分化预测（Reid, 2022）
文章在2022年即预见GameFi将出现"两极分化"：
- **轻链改方向**：接近现代电子游戏，减少Ponzi特性，增加消费行为
- **Crypto Native方向**：数学/密码学背景团队主导，在极客和金融玩家的"有趣"路线上发展

## VC 判断框架（Rachel/Reid, 2022）
判断 GameFi CP 四要素：(1) 公链+资方——高性能链+丰富生态；(2) 代币设计——代币数量是否匹配经济深度+消耗场景是否多样；(3) 品类选择——重型(高风险高回报)/休闲(进入门槛低)/DeFi类(需要数据和金融理解)；(4) 投放方式。

## 花旗视角：游戏是区块链最大消费者入口（2023）

花旗将游戏定位为消费者自下而上进入区块链的最大入口之一。2022 年每天超 100 万个独立活跃钱包连接游戏 Dapp。全球 32 亿玩家，2022 年游戏收入 1840 亿美元（亚洲占一半）。关键预测：到 2025 年，5000 万至 1 亿人使用含 Web3/区块链元素的游戏。亚洲游戏工作室是 Web3 游戏最早驱动者，重度消费玩家（"鲸鱼"，近 1 亿人）向区块链游戏的迁移将是整个生态系统的拐点。

花旗提出重要类比："游戏玩家不会去理解云计算给游戏带来的益处，也不会去了解游戏是基于亚马逊云服务器还是谷歌云服务器。"——区块链元素最终将像云计算一样在用户无感知的情况下融入游戏。

## 传统游戏公司进军区块链（2023年趋势）

2023年初，以韩国为首的亚洲传统Web2游戏公司大规模进入区块链游戏领域，形成两种差异化战略（Xangle/CoinMarketCap, 2023）：

### 战略一：构建完整区块链生态系统
适合寻求新增长引擎的中型游戏公司，从dApp开发商升级为L1生态运营者，将生态产生的附加值内部化：
- **[[wemade]]**：从Klaytn侧链dApp → 自建WEMIX Chain（L1）+ Wemix Play + Wemix.Fi + Wemix Dollar，代币融资$2.5亿
- **[[netmarble]]**：双平台策略（Marblex GameFi + FNCY娱乐），直接用核心IP（Seven Knights/Let's Get Rich）整合区块链
- **Com2uS**：在Cosmos上建XPLA L1，利用Summoners War IP（八年累计收入$30亿）作为杀手级内容

### 战略二：在选定IP上小规模测试
大型游戏公司（年收入数十亿美元级别）的保守路线——区块链市场规模太小且存在IP受损风险，因此仅在不足以产生公司级影响的IP上试水：
- **Nexon**：MapleStory N（20年历史IP，占公司收入~25%），以"让游戏更具可持续性"为目标，引入创作者生态系统
- **Kakao Games**：BORA平台，2023年聚焦休闲游戏代币经济学测试
- **Square Enix**：Symbiogenesis（Polygon上，10,000 NFT），首款全新区块链游戏IP

### 亚洲市场结构优势
亚洲偏好MMORPG（能体现数字资产所有权）+ 休闲游戏（轻量可完全上链），与美国偏好策略/动作游戏形成对比。中国游戏公司因监管缺席，为韩日公司留下窗口期。

### 2023年关键发布管线
- Q1: Wemade的MIR M（1月已发布）
- Q2: Netmarble的Meta World（Let's Get Rich IP, 1.5亿下载量）
- Q3: Com2uS的Summoners War区块链版
- 年内: Nexon的MapleStory N、Square Enix的Symbiogenesis

## 2024 年防御性投资趋势（IOSG 审慎态度）

IOSG Ventures（2024.10）对 GameFi 市场近年防御性投资趋势提出系统性质疑，总结了三大现象：

1. **游戏平台拉新化**：38% 高额融资流向游戏 Infra/平台，平台从纯基建演进为拉新渠道。TON 上 Telegram mini game CPC 低至 $0.015，远低于交易所获客成本（$200-350/付费用户）
2. **短期项目 P2A 化**：Notcoin/Catizen/仓鼠采用全流通一次性解锁，P2E 飞轮被阉割为 P2A（Play to Airdrop），TGE 后用户流失 90-94%，最终留存仅 3 万人
3. **赌场抽水化**：Polychain/a16z/Dragonfly 布局线上赌场（Monkey Tilt/Myprize），赌场项目占 GameFi 高额融资 15%。Pump.fun 已变卖 $60M SOL（约占总收入一半），缺少发币预期和价值捕获

IOSG 结论：对防御性投资持审慎态度，渴望寻找未形成共识的高质量游戏——游戏质量可转化为更高留存率、消费和链上活跃度。来源：[[来源_2024-10_IOSG_GameFi防御性投资_审慎态度]]

## 时间尺度错配理论（Tiger Research, 2025）

Tiger Research（Mike Kang 顾问）从产业时间尺度角度提出了 Web3 游戏困境的第三种解释框架：

**核心诊断**：游戏开发是长周期项目（AAA 游戏 3-8 年、平台建立市场主导地位 8 年），而加密市场遵循短期注意力经济——叙事半衰期 3-6 个月，新 meta 和投资机会快速轮换。这种"时间尺度错配"意味着 Web3 游戏项目往往在尚未完成产品打磨时，市场热度已经消退，融资窗口已经关闭。

**与已有理论的互补关系**：
- 耶鲁熵增理论解释的是**经济机制层面**的失败（代币通胀→熵增→系统崩溃）
- IOSG 审慎态度描述的是**投资策略层面**的异化（P2A 化、赌场化、拉新化）
- Tiger Research 时间错配理论补充了**产业时间尺度层面**的解释——即使经济模型设计完美，如果游戏需要 5 年打磨而市场只给 6 个月窗口，Web3 游戏仍然难以成功

**解决方案期待**：Tiger Research 认为 MapleStory N（Nexon，20 年 IP）和 Overdare（Krafton）值得关注——由成熟游戏公司长期开发、有现有 IP 和用户基础支撑，可能跨越加密叙事的短周期。同时 AI Agent（Krafton CPC 共生角色技术）可能通过持续生成新内容和交互方式，缓解 Web3 游戏的注意力经济困境。

**关键数据支撑**：
- 全球游戏收入：$706 亿（2012）→ $1,877 亿（2024），移动占比 18% → 49%；移动游戏市场预计 2030 年达 $1,819 亿但接近增长峰值
- 29/40 头部游戏公司已布局 Web3（截至 2023），但尚未出现扭转负面印象的标杆案例
- AI 相关项目占加密市场 70%+ 关注度，游戏赛道仅个位数——差距既说明低估也可能反映市场对"慢赛道"的耐心不足

来源：[[来源_2025-06_Web3游戏_Tiger_Research]]

## Solana 游戏基础设施：Sonic SVM（2025）

Sonic SVM 是 Solana 上首个 SVM Layer 2，专为 Web3 游戏设计，代表了不同于以太坊 L2 游戏方案（Immutable X）和独立游戏链（Ronin/Oasys/WAX）的第三条路径——依托高性能 L1 的专用 L2：

- **HyperGrid 多网格架构**：每个 DApp 运行在独立网格，网格间互不干扰，最终通过 HyperGrid 与 Solana L1 结算
- **EVM-to-SVM 桥接**：支持 EVM 上编写但最终在 Solana 上结算，将 EVM 游戏生态引入 Solana
- **veTokenomics**：$SONIC → $veSonic（锁定）→ 验证者质押委托 → 分享序列器费用 + 生态收入分成（类 Curve veCRV 模式）
- **TikTok 引流**：Sonic X 原生应用 + TikTok 渠道分发，试图将 Web2 用户引入 Web3 游戏
- **核心矛盾**：Solana 游戏赛道本身未被验证——TOP 25 UAW 游戏无 Solana 项目，Sonic 需同时证明自己和赛道
- $SONIC 总供应 24 亿枚，初始流通 15%，12 个月后大量解锁（投资者+早期支持者共 23%）构成投资时间压力

参见 [[sonic-svm]]。

## X to Earn 2.0：从死亡螺旋到可持续模式的进化

CGV Research在2022年将X to Earn分为两个阶段：

**X to Earn 1.0**（2021-2022）：Axie Infinity到StepN，"死亡螺旋"如影随形——代币激励驱动用户 → 代币供需失衡 → 价格崩溃 → 用户流失。

**X to Earn 2.0**（展望阶段）：CGV引用Mtyl的框架，认为合适的X场景需同时满足两个条件：
1. **劳动成果可数值化**——难以被明确数值化的劳动成果会给经济模型设计带来巨大挑战
2. **场景对大众的正向价值**——为用户提供无形价值，降低收益敏感度，还更容易出圈吸引新用户

被看好的四个主要场景：**运动、游戏、学习、阅读**。iJump、ATP.Club等项目被列为值得长期关注的对象。

在网络效应方面，CGV强调——通过网络效应构建产品壁垒，教育和引导用户更关注场景的无形价值获得，是重要的商业模式进化方向。

参见 [[来源_2022-07_加密牛市_十大叙事_CGV]]。

## 2025年链游关闭潮：17款游戏停运的系统性证据

2025年上半年，Web3游戏行业经历了有史以来最大规模的关闭潮。Ronin Network主持人Tr3ver整理的名单显示至少17款游戏宣布关闭或暂停运营，包括《Nyan Heroes》《Mystery Society》《Blade of God》《The Walking Dead: Empires》等。

**核心发现**：
- 几乎所有关闭游戏的共同原因是融资困难，即使拥有百万级玩家基础（Nyan Heroes四次Pre-Alpha测试超100万玩家）和知名IP（The Walking Dead）也无法获得持续资金
- 部分项目转向纯Web2开发（Blade of God、Jungle）或探索非Web3重新发布（Mystery Society考虑Steam去Web3版）
- 少数游戏选择开源代码（Blast Royale于2025年6月1日起完全开源）或寻找买家续命
- 多个项目受此前生态系统崩盘波及（Derby Stars因2022年Terra崩盘损失种子资金），或遭黑客攻击（RoboKiden 3870万代币被盗）

**宏观数据**：
- 2025年Q1 Web3游戏投资环比下降71%至9100万美元（DappRadar）
- 2025年1月Web3游戏市值下降19.3%至223亿美元，交易量下降12.4%（Footprint Analytics）
- 日均活跃独立钱包数量580万，环比下降6%
- 投资者兴趣从游戏转向AI和现实世界资产（RWA）

**与已有理论的关系**：
- 验证了Tiger Research"时间尺度错配理论"——游戏开发的长周期（3-8年）与加密市场的短注意力窗口（3-6个月叙事轮换）之间的根本矛盾
- 补充了IOSG"防御性投资审慎态度"的现实证据——即使用户基础良好、IP强大的项目也无法获得持续融资
- 揭示链游行业的结构性困境：问题不在个别项目的执行力，而在整个赛道的资本配置逻辑已经改变

来源：[[来源_2025-05_链游停运_17款_PANews]]

## 2025 Q2 转折性时刻：游戏 NFT 登顶

2025 Q2 是 Web3 游戏 NFT 的标志性转折点：

- [[guild-of-guardians]] NFT 交易量登顶季度榜首，超越 [[bayc]] 和 CryptoPunks 等蓝筹项目——自 2021 年以来首个游戏 NFT 合集实现这一突破
- 印证了 DappRadar 观察到的整体趋势：Q2 NFT 市场活动主要由 **RWA 和游戏资产**推动
- 但 GameFi 整体活跃钱包仍下降 17%，市场份额被 AI 板块蚕食
- 游戏 NFT 登顶更多反映 NFT 从投机（PFP）向功能（游戏可用性）的价值转移，而非 GameFi 赛道的整体复苏

来源：[[来源_2025-07_2025Q2_DApp市场报告_AI代理_RWA_NFT_深潮TechFlow]]

## 来源
- [[来源_2022-07_GameFi二十代币经济_Web3游戏设计_IncubaAlpha]] — Incuba Alpha Labs十问十答：提出"不可能三角"解释GameFi 1.0失败的经济学根源、三币/四币代币系统的具体设计方案（消费币+治理代币+调控币+可选积分）、以及"Web 3.0游戏即国家经济体"的分析框架
- [[来源_2023-03_花旗RWA_代币化_区块链十亿用户]]
- [[来源_2022-10_GameFi_赛道分析_VC视角]]
- [[来源_2023-10_Big_Time_MMORPG链游_头等仓]] — Big Time 深度研报：Web2.5 模式、Vault 技术、代币经济双重锚定、赛道 UAW 80 万
- [[来源_2025-01_AI_Game_Agentic_Engine_叙事新范式]] — Agentic Engine/Digimon/Moddio/AI×Game范式革命
- [[来源_2024-05_Notcoin_mini_dApp_Mass_Adoption转折点]] — Tap-to-Earn/Telegram mini dApp/3500万用户
- [[来源_2024-07_Notcoin详解_NOT代币_Decrypt]] — Decrypt 官方入门指南：3500 万玩家/600 万 DAU/NFT 凭证场外定价机制/$140 亿 Binance 质押/Netflix for games 平台战略
- [[来源_2024-12_TON生态研报_链上交易量_Telegram双赢]] — TON三步战略：Tap-to-Earn获客→空投转化→DeFi留客；头部游戏留存60%但第二梯队仅37%；Notcoin/Hamster Kombat/Catizen持有者290万/130万/160万
- [[来源_2024-02_GSR数字资产参考包_Web3入门指南_BlockBeats]] — CryptoKitties起源/Axie Infinity 300万DAU/AAA链游管线(Illuvium/Shrapnel)
- [[来源_2023-08_全链游戏_7款盘点_响指研究所]] — 7 款 FOCG 横向对比（Dark Forest/Loot Survivor/Treaty/Isaac/Mithraeum/Influence/Wolf Game），全链游戏四大特征定义
- [[来源_2022-06_StepN_死亡螺旋_六一资本]] — 六一资本从"场内玩家"视角逐帧还原StepN从Solana可控增长到BSC失控爆发的全过程，是"不爆即死 vs 爆发即死"GameFi核心矛盾的最佳案例研究；"深圳老哥"作为场外资本力量与项目方的量价博弈是GameFi独有的生态现象
- [[来源_2022-03_StepN_新手入门_打金攻略_0xPineapple]] — StepN小白新手入门实操指南，展示了GameFi参与者需要理解复杂的技术细节（能量系统、四维属性、宝石插槽、mint机制）才能参与经济系统——说明GameFi的"入门攻略"需求本身就是参与者门槛的微观证据
- [[来源_2022-06_韩国链游生态图鉴_Klaytn_Foresight_News]] — 韩国链游生态横截面扫描：80%归属游戏生态/70%链改/60% MMORPG，Klaytn 元宇宙定位公链，三大巨头 WEMIX/MARBLEX/NEOPIN 差异化战略
- [[来源_2024-08_Ronin生态图谱_DPoS迁移_MarsBit]] — Ronin 游戏专用 L1 全貌：DPoS 共识迁移、Goda 升级轮换验证者、$43 亿 NFT 交易量、12+ 游戏生态、zkEVM 路线图
- [[来源_2024-02_Portal_Binance_Launchpool_Web3游戏_BlockBeats]] — Portal（Binance Launchpool #47）：LayerZero跨链游戏平台/病毒式营销（Crystal Dash积分系统）/Stake-to-Scale游戏分发/$3400万种子轮/10亿PORTAL
- [[来源_2024-05_Web3游戏行业趋势_JLab]] — J Lab 2024年 Web3 游戏全景：四阶段演化分类（GameFi→X2E→AAA→Metaverse）、2024 Q1 日活钱包>200万创历史新高、资本从押注单款游戏(53%)转向平台生态(56%)、游戏分发平台争夺「Web3 的 Steam」、人才复合型需求
- [[来源_2024-04_加密融资周报_BlockBeats]] — 2024年4月首周GameFi融资$13M/4笔：Gomble Games($10M/Binance参投/休闲游戏)、Cellula($2M/全链AI游戏/vPOW机制)、Planet Mojo(自走棋/$10.5M总额)
- [[来源_2025-01_Project89_argOS_ECS_Agent框架_深潮TechFlow]] — Project89/argOS：基于 ECS 架构的 Agent Framework，ECS 已被 Mud/Dojo 等链游引擎使用，argOS 验证了 ECS+Agent 可行性，为"AI 驱动全链游戏 NPC"提供技术基础
- [[来源_2023-03_区块链游戏复兴_亚洲市场_CoinVoice]] — Xangle/CoinMarketCap 2023年链游行业报告：亚洲55%全球玩家/韩国公司最前沿/两种战略路径（L1生态 vs IP试水）/MIR 4 Global 140万CCU/Wemade Netmarble Com2uS Nexon Kakao Square Enix战略分析/2023年关键发布管线
- [[来源_2024-01_HashKey_Capital_Web3投资赛道全解析_PANews]] — HashKey 2024年游戏投资框架：五类 Studio 分类（Casual/大型/Casual-mid-core/IP Building/AI feature），团队 web3 理解深度 > web3 经验，UGC 去中心化可解决 Web2 UGC 激励不透明问题：亚洲55%全球玩家/韩国公司最前沿/两种战略路径（L1生态 vs IP试水）/MIR 4 Global 140万CCU/Wemade Netmarble Com2uS Nexon Kakao Square Enix战略分析/2023年关键发布管线
- [[来源_2023-03_Arbitrum详解_Optimistic_Rollup_火币研究院]] — Arbitrum GameFi 生态：Treasure DAO（"去中心化任天堂"/$MAGIC共享货币）、Trident DAO（Risk To Earn/$PSI通缩机制）、Arbitrum Nova 游戏专用链
- [[来源_2025-01_Monad测试网_生态建设_参与策略_PANews]] — Monad 生态 4 款原生游戏：Sparkball（4v4 MOBA+体育，Q2 2025 Steam）、RareBetSports（DFS）、LEVR_bet（杠杆娱乐）、Breath of Estova（像素 MMORPG）
- [[来源_2022-12_Oasys_EVM兼容_零手续费_游戏公链_PANews]] — PANews 2022 年 12 月 Oasys 主网上线早期全貌：3 Verse/11 款游戏、融资历程（Republic Capital $2000 万领投+公募 $0.035/OAS）、创始团队（万代南梦宫/世嘉/double jump.tokyo/YGG/Gumi）、OAS 代币经济学参数（100 亿总量/五种效用）
- [[来源_2023-07_Oasys_游戏公链_育碧_世嘉]] — Oasys 游戏公链全解析：育碧/世嘉首款链游、Hub+Verse 模块化架构、零 Gas 费设计、三种代币标准（vFT/oFT/exFT）、2023 年 7 月上线 28 款游戏
- [[来源_2023-06_X-to-Earn经济模型判断框架_veDAO_BlockBeats]] — veDAO研究院：X to Earn经济模型分类框架（单币/双币/VCT三币模型），评估维度（供应/需求/价值捕获三要素），Uniswap vs Sushiswap吸血鬼攻击案例，Opensea不发币被Blur蚕食的市场教训
- [[来源_未知_ServerFi_GameFi_代币经济模型_耶鲁]] — 耶鲁大学 ServerFi 论文：用熵增理论诊断 GameFi 代币经济失败根源（以 Axie Infinity SLP 通胀为例），提出 ServerFi 模型（碎片合成→NFT 质押→服务器私有化），500 次迭代模拟验证 ServerFi 在长期可持续性上优于持续奖励高留存玩家模型
- [[来源_2024-10_IOSG_GameFi防御性投资_审慎态度]] — IOSG 对 2024 年 GameFi 防御性投资三大现象的审慎态度：平台拉新化（CPC $0.015 vs 交易所 $200-350）、短期项目 P2A 化（TGE 后流失 90-94%）、赌场抽水化（Pump.fun 卖 $60M SOL 缺价值捕获）
- [[来源_2023-10_全链游戏_FOCG_深度解析_LKVenture]] — LK Venture FOCG 研报：MPG/UGG 双分类框架、五维公链评估、三阶段路线图（GameFi→ZK-Rollup→链上社会）、全链游戏谱系学修正（起点为 2012 年 SatoshiDice 比特币博彩而非 2017 年 CryptoKitties）
- [[来源_2023-04_Web3确定性_金字塔分析框架_The_Quibbler]] — 2023年暴论：让GameFi更好玩并非当下最重要的事，优先做好交易向核心功能更务实；在周期明显的行业应寻找不变的东西而非追逐创新叙事
- [[来源_2025-06_Web3游戏_Tiger_Research]] — Tiger Research 时间尺度错配理论：游戏长周期（3-8年）vs 加密短注意力（3-6月叙事轮换）；Kaia+LINE 2亿用户；29/40头部公司已布局Web3；MapleStory N/Overdare作为潜在标杆案例
- [[来源_2024-09_Balance_Web3游戏平台_E-PAL陪玩_a16z领投_MarsBit]] — Balance：从北美最大陪玩平台E-PAL（420万活跃用户/45万Epals）进化而来的Web3游戏平台+zkEVM L2游戏链，a16z+Galaxy领投$3000万，AI生成智能合约降低开发者门槛，EPT代币10亿总供应，代表"陪玩流量+游戏基础设施"的差异化路径
- [[来源_2024-05_偶像_音乐节_Web3明星效应_BlockBeats]] — MEET48 GameFi产品矩阵（虚拟恋爱/舞蹈模拟/派对休闲/纸牌/养宠/大富翁）：不是Play to Earn而是Play to Support——玩家用游戏行为支持偶像，GameFi在粉丝经济中充当"增强参与的工具"而非独立的赚钱机器
- [[来源_2024-07_点赚小游戏_内冷外热_TGE延迟]] — 2024年7月Tap-to-Earn赛道全景：5个项目合计宣称超4亿用户但无一成功TGE；机器人问题同时制造繁荣假象和稀释真实用户空投；Notcoin创始人自认模式不可持续；Banana（Steam）证明"点赚"不需要Web3也能跑通
- [[来源_2023-12_三盘模型_庞氏第一性_MarsBit]] — @thecryptoskanda 三盘模型框架：明确将 GameFi 归类为"矿机分红盘"的创新变体——从 Stepn 到 Axie Infinity 到 Big Time，核心需求不是传统玩家而是专业工作室（三班倒、18人6个号），NFT 资产本质是矿机，代币产出是区块奖励
- [[来源_2024-09_币安_TON生态项目_上币预测_ChainCatcher]] — 2024年9月TON生态Tap-to-Earn/小游戏候选项目全景：Moonbix(币安自研)/Blum(6000万用户)/DejenDog/Yescoin(1570万用户)/Gatto(NFT门槛0.5TON)/Fanton/Data Hero，验证交易所"通过小游戏撬动Telegram用户"的流量争夺策略
- [[来源_2024-06_Delphi_TON游戏炒作]] — Delphi 2024年6月TON游戏深度分析：Facebook→WeChat→Telegram社交游戏分发历史脉络，Notcoin $1B FDV/Catizen $10M+ IAP/Hamster Kombat 2亿用户，移动游戏CPI上升趋势（2018→2024），TON代币经济学（前100持92%/0.6%通胀），WeChat vs Telegram Bear/Bull Case框架
- [[来源_2023-12_Dencun升级_以太坊_EIP-4844]] — Dencun 升级后全链游戏受益于低费用环境；DAW（去中心化自主世界）作为全链游戏子集，Lattice 团队 OPcraft（全链 3D Minecraft）案例；Dencun 通过 EIP-4844 降低 L2 交易成本直接利好链游
- [[来源_2024-12_Abstract_Chain_22个生态项目_PANews]] — Abstract Chain 消费级 L2 的游戏生态：DOGAMI（获 Ubisoft/Animoca/SANDBOX 投资/Tezos 最大 NFT 游戏→迁移至 Abstract）/77-Bit（赛博朋克 MMORPG/NFT 交易量 2.1 万 ETH）/Upcade（Web3 游戏中心）/Telgather（Telegram 迷你游戏平台），代表"消费级 L2 吸引成熟跨链游戏项目"的趋势
- [[来源_2024-08_黑天鹅_MAX_高FDV_终结序章]] — MATR1X $MAX：2024年8月黑天鹅日以1.6亿FDV上线OKX（远低于同期VC币10亿+FDV）、300万+游戏用户真实基础、盘前燃烧2亿+团队燃烧5000万枚、12个月锁仓+5年解锁，是GameFi赛道从高FDV叙事转向真实应用+低估值发行的标志性案例
- [[来源_2025-01_VIRTUAL生态_50亿市值_叙事解析_odaily]] — Freya/Starfall Chronicles：AI Agent角色IP+Roguelike RPG游戏，Rosentica出品，将上线Immutable，ATH $5500万，代表"AI Agent+Web3游戏"跨界融合案例
- [[来源_2024-12_Virtuals生态_AI项目扫描_Odaily]] — Agent YP：由 YellowPanther（Virtuals 顾问）创建的 Web3 游戏 AI KOL，ATH $55M/当前 $9.8M，目标是"Web3 游戏的 AIXBT"，代表 AI Agent 向垂直游戏赛道渗透的趋势
- [[来源_2024-12_Solana节点运营_MEV盈利_Jito_Raydium_PANews]] — Sonic作为Solana首个L2专攻游戏：底层规则在L2运行、代币激励在Solana主网结算、共享主网流动性避免独立的DEX/生态建设困难、已签约部分游戏项目、相比IMX等独立游戏L2更务实的流动性策略
- [[来源_2023-08_全链游戏_价值链拆解_产业链全景_PSE_Trading]] — PSE Trading全链游戏价值链四层拆解（基建→中间件→服务→应用）：游戏引擎四强MUD/Dojo/Argus/Curio竞对分析、ARC通讯结构（链上ECS）、分发三道路（TapTap路线/Crypto Native路线/公链孵化）、Wax占86.56%交易量但叙事焦点在Starknet生态
## TON Tap-to-Earn vs 传统 GameFi 对比（吴说播客，2024.09）

WuliGy 将 TON 生态 Tap-to-Earn 项目与传统 GameFi 进行了系统对比：

- **相似之处**：底层逻辑一致——"代币激励驱动用户行为"，与上一轮 Play to Earn 模式本质相同
- **关键差异一：回本周期可预测性**：GameFi 可精确计算 ROI（买道具→知道多久回本），TON 项目估值动态上升、早期参与者无法明确未来回报——增加了不确定性但也增加了潜在惊喜
- **关键差异二：流量动态性**：GameFi 代币模型相对可预测，TON 项目依赖流量的动态爆发（如 Dogs 两个月从 400 万→4000 万用户，项目方自己也无法预测）
- **关键差异三：平台依赖**：TON 项目依赖 Telegram（唯一对 Crypto 开放的 Web2 巨无霸社交媒体）+ TON 基金会 + 大型社群，GameFi 通常独立运作
- **共同困境**：上线后用户流失严重，Notcoin 上线后游戏直接关闭，代币分布过于分散导致拉盘困难

来源：[[来源_2024-09_币安疯狂上线TON生态_原因与走势_吴说播客]]

[[来源_2024-12_TON大规模铸造历史_四阶段演进]] — TON Tap-to-Earn 空投基础设施四阶段演进：Inscriptions→Mass Sender→TokenTable→Mintless Jettons，三种费用模型对比，DOGS 1000万链上持有者/5000万用户，Hamster Kombat月活1亿+首次Mintless实战
- [[来源_2024-09_币安疯狂上线TON生态_原因与走势_吴说播客]] — 吴说播客：TON Tap-to-Earn vs 传统GameFi对比框架（回本周期/流量动态/平台依赖）；Notcoin上线后直接关闭游戏的后续困境；WuliGy判断"第二波"接近天花板
- [[来源_2024-09_持续盈利项目_代币炒作_商业模式_深潮TechFlow]] — Web2 vs Web3游戏收入量化对比：Web2游戏首周$6亿收入 vs Web3游戏尚未接近；Axie Infinity双代币系统崩溃案例（SLP通胀→死亡螺旋）；STEPN代币供应过剩→用户参与度下降；核心诊断：Web3游戏过度依赖代币激励而非游戏体验本身，区块链应作为增强沉浸感的工具而非经济的全部驱动力
- [[来源_2024-08_黑神话悟空_GameFi破局_游戏科学_MarsBit]] — YBB Capital Zeke：用《黑神话：悟空》/游戏科学/冯骥 14 年历程反思 GameFi 困境——"矿洞"隐喻（GameFi=每天挖矿直到塌方）、Token/NFT 与游戏开发不可调和的矛盾、3A 链游在 100 万 Web3 玩家基础上的商业逻辑无法闭环、全链游戏可玩性困境、区块链赋能独立游戏众筹的可行路径
- [[来源_2022-04_Web3.0_范式_技术栈_生态_张浩]] — 阐明链游与 Web2 游戏（Fortnite/Roblox/Minecraft）的根本区别：游戏内物品是玩家拥有的 NFT，可交易成通货后兑换其他游戏资源；Axie Infinity 验证了"边玩边赚"模式，去中心化治理将游戏规则交予玩家
- [[来源_2023-12_Web3游戏平台_价值解密_掘金指南_Followin]] — 2023年末Web3游戏平台生态快照：七大平台横向对比（Galxe/DeGame/Zealy/QuestN/RabbitHole/HyperPlay/TaskOn），揭示"任务平台赛道拥挤"的结构性现象及游戏分发基础设施分层雏形
- [[来源_2024-11_迪拜_Web3游戏_DPG33_DMCC_Tiger_Research]] — Tiger Research 迪拜 Web3 游戏政策分析：DPG33 目标 2030 年 GDP 贡献 40 亿美元 + 27,000 就业，DMCC 100+ 游戏公司入驻，"负面光环效应"诊断，AI Agent 协同被视为最有前景的突破方向，从国家产业政策维度补充 GameFi 供给侧分析
- [[来源_2023-07_Rollups即服务_RaaS全景指南_BlockMagnates]] — RaaS 视角解释游戏为何是最高频引用用例：游戏需要与金融应用截然不同的参数配置（低安全性、高吞吐、高存储），RaaS 允许游戏团队获得定制化链上环境；Avalanche 子网已被 Crabada 和 DeFi Kingdoms 等游戏采用
- [[来源_2025-01_Sonic_SVM_Web3游戏_Solana扩展_PANews]] — Sonic SVM：Solana 首个 SVM Layer 2 游戏扩展方案，HyperGrid 多网格架构、veTokenomics、TikTok 引流策略，与 Immutable X/WAX 竞对分析
- [[来源_2024-03_Merlin_Chain五个生态项目_BlockBeats]] — [[dragonverse-neo]]（MOBOX出品）：BTC首个3D开放世界游戏，链游OG巨头"换赛道"策略案例——从BNB Chain转战BTC L2，BRC-420龙珠铭文$1360万市值，计划构建BTC游戏L3，预计2024.4上线Merlin Chain
- [[来源_2022_iGaming定义_在线赌博产业_SOFTSWISS]] — SOFTSWISS 官方科普 iGaming 产业全景：定义（狭义/广义）、历史（1994-2013）、全球监管格局、区块链/VR/5G 等驱动力；为理解 GameFi 的"赌场基因"提供了产业史前置知识
- [[来源_2023-06_全链游戏_Chainlink科普]] — Chainlink 官方全链游戏科普（2023.06）：给出全链游戏正式定义（全部游戏逻辑和数据在链上）、四大挑战（速度/透明性/机器人/随机数+自动化瓶颈）、四大优势（可组合性/永久性/低风险试验场/多前端），将 Chainlink VRF/Automation/预言机定位为全链游戏中不可或缺的中间件基础设施。时间上早于响指研究所和 LK Venture 的盘点，可作为 FOCG 叙事的早期科普文献
- [[来源_2025-01_P2E_游戏_AI代理_加密货币融合_深潮TechFlow]] — Sid@IOSG：AI 代理解决 GameFi 玩家流动性问题的第三种路径（非更好的代币经济或更高质量游戏设计，而是用 RL 代理填充 NPC + 动态难度平衡）。LLM vs RL 代理在游戏场景的技术路线对比（RL 在速度/规模上远超 LLM）。ARC Agents（$NRN）作为案例，形成"数据→模型→代理→玩家"的 DePIN 飞轮。补充"从 P2E 到真乐趣+无限扩展"的 GameFi 演化方向
- [[来源_2025-01_AI代理游戏_The_Farm_Hyperliquid_深潮TechFlow]] — The Farm：Hyperliquid 上首个 GenAI 宠物游戏，GenAI 生成个性化可进化角色+Orchestrator AI 多代理架构，三阶段路线图（祖先→进化→战场），50% 协议收益回购销毁。代表 AI Agent 打破 GameFi 同质化的新路径——用 AI 生成角色替代固定模板、玩家集体创意替代预设剧本
- [[来源_2023-07_GameFi玩家洞察_增长黑客_CubeLabs]] — Cube Labs/SunnyZ 基于 [[clique]] 数据：Web3 玩家购买力 4x / 游戏时长 4x（人均 1,784h Steam）/ 人均持币 16.5 ETH；Bartle 四分类 Web3 分布（社交型 67%/杀手型 16%/成就型 11%/探索型 6%）；两条获客路径对比（传统买量 vs Alpha 社区）；游戏性 > Tokenomics 的核心主张填补了 wiki GameFi 分析中的用户洞察维度
- [[来源_2023-01_Web3融资71亿美元_游戏占比62_PANews]] — 2022年Web3融资$7.17B中游戏占$4.49B（62.5%），游戏+元宇宙合计87.9%。这一压倒性占比为理解GameFi泡沫提供了资本面背景：P2E热潮末期VC仍在巨额押注，与后续2023-2024年行业反思形成对比
- [[来源_2022-12_GameFi代币经济学_BinanceResearch]] — Binance Research 2022年12月GameFi代币经济学深研：好游戏七根支柱、单币vs双币模型选择、通胀控制方法论、用户引导/收益分配/团队激励/游戏生命周期等系统化设计建议
- [[来源_2022-08_GameFi周期_发展展望_Reid]] — GameFi首个完整周期的一线观察：GameCP三维分类框架（相似度x上链度x金融属性）、STEPN成功三要素拆解（数值幻觉+资本叙事+游戏化运营）、代币设计分类（单币/双币/多币）、地域性演变分析、未来两极分化预测
- [[来源_2022-09_机构投资者访谈_火币研究院]] — 2022年熊市机构GameFi观点：Foresight Ventures "经济模型=1，玩法=0"判断；P2E/X2E本质为流动性挖矿变体的辨析；SevenX三类增长型游戏分类（低门槛简单游戏、高竞争性游戏、加密原生全链游戏）；Animoca Brands和火币Ventures讨论区块链赋能游戏的四个方向（玩家所有权回归、交易场景衍生、NFT互补性、L1流量入口）
- [[来源_2025-04_比特币生态_RWA赛道_Web3全景_PANews]] — Infinity Labs GameFi数据：Axie Infinity转型免费玩赚日活50万/Parallel TCG卡牌NFT交易$3亿/Immutable ZK-Rollup入驻300+项目/Gala Games转型订阅制/3A游戏Illuvium或成行业转折点
- [[来源_2022-11_梦幻西游_经济系统_半佛仙人]] — 传统MMO经济系统成功标杆案例：经过20年验证的点卡+自由交易+概率消耗模型，与GameFi代币经济模型直接对比，展示了"克制运营/维护旧价值"与"新版本退环境"的根本分歧；其中心化调参和强锚定能力恰恰是去中心化游戏经济无法复制的
- [[来源_2025-04_Web3消费者应用_投资理论_IOSG]] — IOSG Ventures 将 Games 列为 Alliance DAO 投资组合中最大类别（10个/28个），列出 Axie Infinity/Genopets/Nine Chronicles/Chibi Clash 等具体项目，并记录 Alliance DAO 从 Games 和创作者经济向 Crypto 投机类/SocialFi 类的偏好切换趋势
- [[来源_2022_PlayerOne_元宇宙_多链沙盒_visioncap]] — PlayerOne 多链元宇宙沙盒平台：RarityScore 反女巫 P2E 机制、O2E 经济模型、LayerZero 跨链、四个编辑器产品矩阵、社区 DAO 土地治理
- [[来源_2025-05_链游停运_17款_PANews]] — PANews 2025年5月盘点：17款Web3游戏停运，2025年Q1链游投资骤降71%至9100万美元，市值下降19.3%至223亿美元，日均活跃钱包580万（环比降6%），揭示链游行业结构性困境
- [[来源_2022-06_周期_加密市场_下一轮_tolks]] — 2022 年中 GameFi 仍处酝酿阶段：Axie 展示增长潜力但暴露代币经济学缺陷；作者预测 Q3-Q4 将形成 DeFi+NFT+GameFi 融合叙事，Aurory（SOL）和 Illuvium（ETH/IMX）被视为领域领跑者；高质量游戏需数年构建
- [[来源_2021-03_加密游戏_困局_突破_NatEliason]] — Nat Eliason 2021年3月发表的 GameFi 最早系统性批判之一：七大问题（NFT/DeFi坏先例、收益不可持续、进入成本过高、伪工作、资本碾压时间、P2E错误期望）和八大解决方案，是对 GameFi 1.0 经济模型缺陷的精准预判
- [[来源_2022-05_Gamefi_经济模型_非货币性收益_ForesightResearch]] — Foresight Research 2022年5月GameFi经济模型设计框架：大前提（非货币性收益产出）+七大核心设计要点（玩家数量控制/概率化奖励/双货币+储蓄物/核心资产换代/用户画像分层/公会双刃剑/经济租赁化），以Stepn（健康）和Axie（纯投机）对比建立论点
- [[来源_2022-09_GameFi模型发展_外循环_web3caff]] — W Labs x Footprint Analytics：外循环/内循环框架、三种生命周期形态（蓝筹/强背景/资金盘）、StarSharks模型解剖（SEA 90%销毁）、三种未来路径（3A/X2E/Fi）、横向+纵向延伸设计框架
- [[来源_2022-01_链游经济模型_水槽机制_1kx]] — Terry Chung (1kx Network) 从Web2游戏"水槽"经济设计角度审视链游：整理6类已验证的货币回流机制（公共设施、税收、铸造、质押、内容解锁、社区活动）和3类Web3特有机制（孵化MOD、社区燃烧、基础设施收费），核心洞见是P2E游戏不具备封闭经济的天然优势，"水槽"在开放经济中更难生效
- [[来源_2023-02_抽税制_Web3游戏_Folius]] — Folius Ventures 提出"抽税制"作为Web3游戏的第三条商业化路径（区别于P2E和内购）：基于经济体量持续征收交易税，适用于全球流动性定价的游戏资产。包含十条设计建议和虚拟游戏Foliseum框架验证。补充了GameFi商业模式演化光谱中"从一次性强收到持续税收"的重要维度
- [[来源_2023-02_足球_链游_竞品分析]] — 足球类链游垂直子类别完整竞品分析：覆盖Sorare/MonkeyLeague/Football World/TopManager/Goals/FootEarn/Footium等7个项目，从开发进度、官网流量、社交媒体、IP资源、投资机构五个维度对比，揭示体育链游特有的IP壁垒和世界杯热度周期
- [[来源_2022-12_TreasureDAO_TheBeacon_链游_PANews]] — TreasureDAO 生态全景：从 Loot 衍生项目发展为 Arbitrum 上最大的链游生态，MAGIC 代币经济模型（每年减半/流动性池 NFT 化/NFT 治理），孵化现象级游戏 The Beacon（9 天 2 万+ 玩家），代表 2022 年末链游从 P2E 向游戏孵化平台+共享经济模型转型的典型案例
- [[来源_2022-04_Mavia_土地_GameFi]] — Mavia Land
- [[来源_2022-07_Web3_收入_价值捕获_FutureMoney]] — 双币系统（Governance Token + Utility Token）风险分析：项目方可通过Utility Token增发暗中获利、类似Rug Pull抽走游戏经济体价值，且无需向社区披露（白皮书仅要求披露Governance Token释放规则）；Stepn和Axie Infinity作为案例展示了GameFi收入的高波动性：受 Axie Infinity 和《部落冲突》启发的 AAA MMO 策略链游。三类 NFT 功能分层（土地/英雄/雕像）、双币模型（RUBY + MAVIA）、Mavia-Match 匹配质押机制（无 KYC、需购买并锁定 MAVIA 6-12 个月）
	- [[来源_2022-08_核心赛道_演变_VC视角]] — 2022年中GameFi转型快照：链游已脱离1.0庞氏模型转向强竞技性/休闲/3A方向；育碧/盛大/Funplus等web2大厂入局但尚无落地项目；游戏仍是"最有可能出现百万千万用户级别的Killer APP"
- [[来源_2025-10_拒绝进化_山寨季_Odaily]] — 文章明确将游戏类代币定性为"临床死亡"状态，与元宇宙叙事并列为上轮周期已死的故事，补充了链游赛道在本轮周期（2025年10月视角）的市场情绪定性
- [[来源_2022-09_thirdweb_NFT用例_milkroad]] — 提供 GameFi 市场规模的早期佐证数据：2020 年全球数字服装和虚拟商品支出 $54B，2022 年 web3 游戏公司融资约 $7B；文章提出的"游戏资产 NFT 化→跨游戏可移植性"愿景与已有概念页中 Big Time / Mavia 的 NFT 功能分层设计形成互补
- [[来源_2022-06_AnimocaBrands_链游生态_GameFi]] — Animoca Brands 链游生态全景：8款游戏/12+子公司的并购扩张模式；$SAND/$REVV/$LYM 三大代币生态；$PRIMATE 跨7种代币互联机制；"收购传统游戏工作室+区块链化"的GameFi整合者案例；3.59亿美元融资和50亿+估值的资本面数据
- [[来源_2022-06_a16z链游布局_12项目_GameFi]] — 头部VC视角的GameFi投资全景：2022年前5个月行业融资170个项目/61.3亿美元；a16z投12个/9.5亿美元（15%份额）；覆盖游戏发行商、平台和开发商三大赛道，同时推出51亿美元Web3基金；包含Sky Mavis/Axie Infinity、Yuga Labs/Otherside等头部项目融资细节
- [[来源_2025-02_KGeN_玩家证明_游戏激励_Delphi]] — KGeN 的 PoG 引擎五大验证维度（人类/参与/技能/消费/社交网络）和 eCAC 有效用户获取模式，从用户质量筛选和 anti-bot 角度补充了 GameFi 供给侧分析。992% 数据属性增长说明行业对用户真实性验证的需求空前强烈
- [[来源_2022-12_Forte_Ultra_GameFi开发商]] — 区块链游戏基础设施提供商 Forte（累计融资超 $9 亿/合规优先/套利盈利模式）和游戏分发平台 Ultra（UOS 代币/$11.38M 融资/跨平台 SDK）项目详解，以及 2022 年十大 GameFi 开发商全景扫描
- [[来源_2023-02_ImmutableX_NFT_扩容_深潮TechFlow]] — Immutable X 在 2022 年以 ~9 亿美元融资成为 GameFi 领域融资最多的 L2 生态，游戏从 5 款到 100+ 款的增长历史快照；45 万+ Gods Unchained 玩家和 30 万+ Guild of Guardians 玩家的 2023 年初数据
- [[来源_2022-09_3A游戏_楼花_Web3_BlockBeats]] — Simon@IOSG Ventures 从 3A 游戏研发成本危机（RDR2 $9.44 亿/回本线 2300 万份/收益率 <50%/研发费每 5 年 x10 增长）出发，提出 Web3 三大解决方案：提前 NFT 预售回笼资金（数字"楼花"类比 1950 年代香港地产预售）、玩家持股计划（治理代币/核心资产作为游戏 equity）、内容资产化（美术资源 NFT 化提前售卖，风险隔离）
- [[来源_2025-12_TGE巅峰_新币虚假繁荣_SolusGroup]] — Solus Group 2025年113个代币数据表明GameFi赛道平均ATH ROI仅4.46倍（所有赛道最低）、当前ROI中位数仅0.52倍，"GameFi代币就像彩票，玩一次就永远被遗忘"，为GameFi代币表现提供了2025年的实证锚点
- [[来源_2023_GameFi_NFT_资源目录]] — GameFi/NFT资源索引页，收录2022-2023年间大量GameFi项目追踪、链游经济模型系列文章、NFT教程及工具资源，为该概念页提供了宏观的资源脉络背景
- [[来源_2022-05_InfiniGods_区块链游戏_Pantera]] — InfiniGods作为2022年早期GameFi项目案例，Web2老兵（Facebook/Zynga背景）转型Web3游戏，展示2022年GameFi从纯Ponzi向"可玩性优先"过渡的代表项目实例
- [[来源_2022-08_Gallium_Studios_Will_Wright_区块链游戏]] — 顶级传统游戏设计师 Will Wright（Sims/SimCity/Spore）与 Lauren Elliott 联合创立 Gallium Studios，首批两个项目 VoxVerse（Gala Games）和 Proxi 均整合区块链技术，Griffin Gaming Partners $6M 投资。展示了传统游戏界传奇人物对 Web3 游戏的早期入场尝试
- [[来源_2022_Xterio_GameFi_游戏开发商_融资]] — Xterio 早期"关于我们"材料：FunPlus/EA/Zynga/动视暴雪等顶级工作室团队背景，4000万美元融资（FunPlus/Makers Fund/XPLA领投，HashKey/Foresight/Animoca Brands等参投），目标服务30亿游戏玩家
