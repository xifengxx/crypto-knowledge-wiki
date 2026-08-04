---
type: entity
entity_type: protocol
created: 2026-06-29
updated: 2026-06-30
tags: [defi, dex, solana, perp, aggregator, infrastructure]
---

# Jupiter

## 基本信息
- 定位：Solana生态最大的DEX交易聚合器+永续合约交易平台，2024年起通过密集收购转型为生态基础设施运营商
- 成立时间：2021年
- 区块链：Solana
- 代币：$JUP（2024年1月上线，治理代币）
- 创始人：Meow
- 产品线：现货交易聚合、DCA定投、限价单、永续合约（Perps）、Launchpad

## 核心业务/产品
- **DEX聚合**：44.3%的Solana DEX交易量通过Jupiter完成（剔除机器人后占63%），到2023年已占据链上超50%代币互换份额
- **Perps永续合约**：2023年10月推出，已成为协议主要收入来源
- **JLP（Jupiter Liquidity Pool）**：一揽子资产池（SOL/ETH/WBTC/USDC/USDT），类似GMX的GLP，捕获Perps交易手续费75%+交易者亏损
- **Launchpad**：代币发行服务
- **Jupnet（开发中）**：全链网络，跨链 DeFi 基础设施

## 收购版图与生态扩张（2024-2025）

Jupiter 从"单点 DEX 聚合器"向"全域 DeFi 基础设施运营商"转型的核心路径。

### 数据基建
| 时间 | 收购对象 | 业务 | 战略价值 |
|------|---------|------|---------|
| 2024.9 | SolanaFM | 区块链浏览器 | 链上数据分析引擎+技术团队；2022年已完成450万美元种子轮（Spartan Group参投），Jupiter本身也是投资方 |
| 2024.9 | Coinhall | 交易分析平台 | 市场数据分析+一键交易+数据可视化工具 |
| 2025.1 | Sonarwatch | 链上投资组合追踪器 | 多链开源追踪工具，覆盖实时市场监控短板，与 Jupnet 全链网络定位协同 |

### 交易基础设施
| 时间 | 收购对象 | 业务 | 战略价值 |
|------|---------|------|---------|
| 2024.4 | Ultimate Wallet | 钱包/移动端 | 启动 Jupiter Mobile 计划，构建自有前端控制用户入口 |
| 2025.1 | [[moonshot]] | Meme交易平台（多数股权） | 法币入金入口+Meme流动性来源控制；TRUMP币日交易量近$4亿 |

### 生态/文化扩展
| 时间 | 收购对象 | 业务 | 战略价值 |
|------|---------|------|---------|
| 2025年初 | Drip Haus | NFT收藏品分发平台 | 切入Solana创作者经济和社区驱动的NFT分发；Jupiter首次涉足文化和内容领域，将NFT作为激励提供给交易员和流动性提供者 |

### 协同生态
- **Meteora**：原 Jupiter 团队开发、原 Mercurial 团队转型，Solana 收益优化层。TVL 峰值 $13 亿（2024.1），一度为生态最大 DEX
- **PumpAI**：Meteora 上的 AI 代币启动平台，与 Raydium、Jupiter 建立流动性池合作

## 关键数据
- **2024年收入**：约1.2亿美元
- **JUP上线时PE**：48，Q2因行情遇冷下滑16%，随后回到48附近
- **Perps周费用**：从50万美元（2023.10）→260万美元（2024.1）→760万美元（2024.3）
- **Perps上线以来累计**：近1.5亿美元协议收入
- **JLP TVL**：6.61亿美元，年收益率21.9%
- **日交易量**：主要在2亿-9亿美元，8月5日峰值16亿美元
- **Solana Perps市场**：日独立钱包占比超70%，远超Drift、Zeta、Flash
- **SolanaFM种子轮**：450万美元（2022年，Spartan Group等参投）
- **Moonshot TRUMP币日交易量**：近4亿美元

## JLP 机制详解（来源：WOO X Research 2025.03）

Jupiter Perp (Jupiter Perps) 的 JLP 流动性池采用"LP-to-Trader"模型：
- 多资产池包含 SOL、ETH、WBTC、USDC、USDT，用户通过兑换资产铸造 JLP
- 无订单簿，交易直接与 JLP 池对手执行，通过预言机定价，近零滑点
- 支持限价单但由池子撮合填充
- **无传统资金费率**，代之以**借贷费（Borrow Fee）**：基于借用资产占池子比例的小时利率，从保证金中扣除；持仓越长+利用率越高→利息越高→清算价向市价逼近
- 自动清算：保证金率低于维持水平（~6.25%）时自动执行，智能合约以预言机价平仓；JLP 吸收仓位盈亏；多余保证金归池子；用户持仓期间可增/减抵押物
- 风控：预言机维持合约价接近现货；Solana 高 TPS 减少清算延迟；可设单资产总仓位上限；借贷费随利用率递增

来源：[[来源_2025-03_PerpDEX三大机制_Hyperliquid_Jupiter_GMX_PANews]]

## 飞轮机制
大盘上涨→JLP作为"加密蓝筹ETF"跟随上涨；大盘震荡/下跌→Perps交易者亏损增加→JLP收益增加。实现正向飞轮。

## 战略演进：从聚合器到基建运营商

创始人 Meow 的愿景："不仅要做好一个DEX，而是要建立一个完整的DeFi基础设施生态系统。" 战略逻辑是构建从"入金→数据分析→交易执行→资产管理→收益优化"的完整 DeFi 闭环。

收购背后的结构化应对：DEX 聚合市场接近天花板 → 通过纵向整合（控制钱包入口+数据工具+流动性来源）突破单一聚合器增长瓶颈 → 将护城河从"价格最优"升级为"便利性垄断"。

与 Coinbase/Base 的"链上银行"、Uniswap 的 Unichain 属同一方向的不同路径。

## 代币经济模型升级（2025.2）

2025年2月，Jupiter 宣布重大代币经济模型转向，直接回应了 JUP "治理代币零价值捕获" 的批评：

- **50% 协议费用用于回购 JUP**：协议产生的交易手续费中，50% 将用于在公开市场回购 JUP 代币
- **回购代币锁仓 3 年**：回购所得 JUP 将锁仓 3 年，而非直接销毁或分发，旨在减少流通供应同时避免一次性销毁带来的价格冲击
- **方向转变**：从"JUP 与协议收入完全分离"转向"JUP 通过回购间接捕获协议价值"，与 [[hyperliquid]] 的收入驱动回购销毁模式类似但路径不同（锁仓而非销毁）

这一升级使 Jupiter 成为 DeFi 治理代币价值捕获的最新实验案例——介于 UNI（零费用开关、零回购）和 HYPE（约 50% 收入回购销毁）之间。

## 社区文化

Jupiter 建立了加密领域最活跃的 DEX 社区之一，主要通过以下机制：

- **行星会议**：每周 YouTube/Twitter 直播，期均 4000+ 实时观看，Twitter 以万计
- **PPP（Player Pump Player）**：创始人 Meow 提出的社区互助理念，倡导成员相互支持
- **社区文化符号**：J4J、555、PPP 等专属"加密语言"，社区成员自发形成的身份标识
- **Uplink 工作组**：专门负责社交内容运营的社区团队，覆盖 Twitter、Discord、YouTube 等渠道
- **DAO 治理**：vote.jup 机制，投票率超 50%，提案通过率 70%+，弃权票 <15%

## 推特被盗事件（2025.1）

2024-2025 年期间，Jupiter 曾遭遇推特账号被盗事件。官推被黑客发布钓鱼合约地址后，团队迅速反应展开"发推删推拉锯战"。经调查确认是员工设备问题（该员工因家事从新加坡返美），Meow 首先在推特表达对加密货币从业者安全的担忧，随后发布完整调查报告澄清资产安全。这种透明处理方式使 Jupiter 未受重大舆论影响——在"假装被盗发 CA 也无人深究"的行业中，属罕见案例。

## 1A3C 愿景与新产品

### Jupnet（全链网络）
通过 Dove（去中心化预言机）和 Omnichain 分布式账本网络，将所有链上的加密货币聚合到一个去中心化账本中，最大化用户和开发者便利。

### ADI（Aggregated Decentralized Identity）
聚合去中心化身份系统，将链上身份和认证系统整合为用户熟悉的账户界面体验。

### 1A3C
最终目标：一个账户访问所有链、所有货币、所有商品（One Account, All Chains, All Currencies, All Commodities）。

## 与 AI 生态的协同
- **ElizaOS Magic Fund**：与 [[eliza-os]] 合作设立激励基金，支持在 Jupiter 平台发射的 AI 项目
- **Virtual Protocol**：与 Virtuals 深度合作（Virtuals 已将重心转向 Solana），整合 AI Agent 发行

## 风险 / 争议
- JUP定位为治理代币，创始人多次强调JUP与协议收入分离——JUP正面临与UNI类似的价值捕获困境（但2025.2宣布的50%回购计划是對此的直接回应）
- DEX聚合市场已接近天花板，增长空间趋于饱和（收购战略本身是对此的结构性回应）
- JLP也受交易者亏损驱动（Chaos Labs数据显示近3个月交易者持续亏损）
- 快速收购带来的整合风险：6个月内收购5个项目/平台，团队融合与产品整合的执行难度被低估
- 多线作战风险：同时推进 Jupnet 全链网络+Meme 交易+数据基建，资源分散可能拖累核心业务
- 与 Pumpfun 的发射控制竞争：虽然 TRUMP 发行验证了 LFG 技术栈，但 Pumpfun 控制超 80% 每日代币发行，Jupiter 份额仍不足 10%

## 相关实体
- [[uniswap]] — 曾多次超越Uniswap V3成为交易量最大DEX聚合器；Uniswap 推 Unichain 是类似战略方向
- [[gmx]] — JLP机制借鉴GMX的GLP
- [[jito]] — Solana生态协同
- [[drift]] — Solana Perps竞争对手
- [[moonshot]] — 2025年1月收购多数股权的Meme交易平台
- [[pumpfun]] — Solana Meme币发行平台，与Moonshot形成互补
- [[solana]] — 底层公链，Jupiter是其生态基建整合的核心推动者

## Launchpad 与社区治理（2024年核心争议）

Jupiter 打造了加密领域最活跃的 DEX 社区（行星会议周均 4000+ YouTube 观看、DAO 投票 95% 支持率、2.74 亿票创记录），但 LFG Launchpad 暴露了"高参与度不等于高质量共识"的根本矛盾。

### LFG 三期表现
- **一期 Zeus Network**：$0.776 开盘，一周跌至 $0.185（跌 76%），OKX 上线 20 分钟交易量破 $1 亿后迅速崩盘
- **二期 Sanctum**：获 2.3 亿+投票（单期最高），但空投仅 2000 名"真诚贡献者"获 5000 万枚代币，引发积分玩家不满
- **三期 deBridge**：表现相对平稳

### 投票逻辑悖论
散户嘴上支持无 VC 项目，实际投票给 Zeus（$8M 融资+Solana 联创背书）和 Sanctum（Dragonfly 领投 $6.1M）——投票变成了"押注哪个 VC 项目能上大所"。1 JUP = 1 票的公平设计反而让投票成为形式。

### ASIANMOM 与 Irene Zhao 事件
Jupiter 于 2024 年 7 月推出 meme Launch，首个项目 ASIANMOM 合作方 Irene Zhao 被 ZachXBT 揭发多次参与诈骗项目。meow 以「trust」回应但未做实质性补救，社区信任崩塌。

### 市场份额被 Raydium 超越
Q2 2024 末，Raydium TVL 达 $9.91 亿成 Solana DeFi 最大协议，Jupiter DEX 市场份额季末被 Raydium 超越——Raydium 通过 pump.fun 毕业管道捕获了 meme 交易的主要流动性。

## 聚合战略：三级跃升框架

Jupiter 在 Solana 上完成了 DeFi 聚合器的经典三级跃升（来源：Decentralised.co 2025.08）：

1. **第一层级：价格发现** — 始于 DEX 聚合器，整合 Solana 上分散于 Orca/Raydium/Serum 的流动性，始终提供最佳价格
2. **第二层级：执行** — 通过智能订单路由进入执行层，用户无需手动兑换，路由引擎优于手动操作
3. **第三层级：分发控制** — 嵌入 Phantom/Drift 等前端，大量 Solana 交易实为 Jupiter 交易即使用户从未输入 jup.ag；一度占 Solana 近半计算使用

达到第三层级后，Jupiter 的飞轮已启动：更多交易者→更多流动性→更优执行→更多交易者。此时的问题变为"还能通过此分发运行什么？"

### Jupnet：应用控制的低延迟执行层
Jupnet 旨在成为 Solana 生态内的共享基础设施，支持永续合约、报价请求系统、批量拍卖等对延迟敏感的交易。最终原生结算在 Solana 上，在保持用户和资产留存的同时提供垂直整合场所的速度与确定性。这是弥合通用区块链吞吐量与全球金融微延迟需求差距的尝试，无需跨链分割流动性。

### 并购筛选标准
Jupiter 的并购策略核心是"收购创始人而非功能"：寻找垂直领域专家团队，在不拖累核心路线图的前提下扩大覆盖面。筛选标准：该团队是否带来强化飞轮的新型流动性或用户。每次收购添加独特的流动性原语（发行/文化/杠杆），而非重复现有功能。

但部分指标增长尚未显现：Pumpdotfun 和 LetsBonk 控制超 80% 每日代币发行，Jup Studio 和 Moonshot 合计不足 10%——在启动板赛道，分发优势未自动转化为市场份额。

## 来源
- [[来源_2024-08_DeFi_PE市盈率_估值分析_BlockBeats]]
- [[来源_2025-01_Jupiter收购时间线_DEX基建_深潮TechFlow]]
- [[来源_2025-08_Jupiter_Hyperliquid_聚合器战争_深潮TechFlow]] — Decentralised.co 深度分析：三级聚合跃升框架（价格发现→执行→分发控制）、Jupnet 定位、创始人主导并购策略、"收购创始人而非功能"筛选标准、Moonshot/DRiP 收购数据、Jupiter vs Hyperliquid 哲学对立（聚合器 vs 供应商）
- [[来源_2024-07_Solana_Blinks_Web3大规模采用_PANews]] — Jupiter 已支持 Solana Blinks，用户可通过 X 平台链接直接进行 swap 交互，代表 DEX 聚合器从"网站入口"向"社交信息流入口"的触达面扩展
- [[来源_2024-09_持续盈利项目_代币炒作_商业模式_深潮TechFlow]] — Jupiter作为Solana原生DEX随着Solana人气激增显著占据Uniswap市场份额；前五大DEX交易量接近450亿美元
- [[来源_2024-08_Jupiter_Launchpad社区失望_BlockBeats]] — LFG Launchpad 三期表现惨淡（ZEUS 跌 76%/Sanctum 空投争议）、社区投票被 VC 背书左右、ASIANMOM 暴雷事件、市场份额被 Raydium 超越
- [[来源_2025-01_Trump加密图谱_七大类_Layergg]] — Trump 团队与 Jupiter/Meteora 合作发行 $TRUMP，未来名人币可能延续此路径（Jupiter 作为名人币基础设施的叙事锚点）
- [[来源_2025-03_Meteora_DLMM_单边池_价格区间_深潮TechFlow]] — Meteora DLMM 单边池机制详解（Bin Step/Bin ID/价格区间计算公式），Dev 利用单边池出货吸筹的操作方法，Meteora 与 Jupiter 生态的协同关系
- [[来源_2025-05_加密并购_买现成还是自己建_PANews]] — 本文记录Jupiter收购Drip Haus以扩展NFT分发的战略逻辑，将Jupiter定位为从DeFi向文化/内容领域扩展的代表案例
- [[来源_2025-02_Jupiter_代币经济学_回购_BlockBeats]] — 2025年2月最新报道：50%协议收入回购JUP并锁仓3年、社区文化细节（PPP/行星会议/Uplink）、Jupnet+ADI+1A3C新概念披露、ElizaOS/Virtual Protocol合作、TRUMP发行验证LFG技术栈
