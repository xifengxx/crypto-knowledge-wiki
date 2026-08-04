---
type: source
source_type: article
url: https://medium.com/@first.vip/first-vip-project-analysis-social-graph-lens-protocol-b523d56f1d7f
date: 2022-12-15
ingested: 2026-07-01
---

# Lens Protocol 社交图谱分析 — First.VIP 项目研报（2022年12月）

## 阅读证据
- 总行数: 316
- Q1 (前25%): 团队共12名开发者参与Lens Protocol开发，代码完全开源在GitHub（Aave仓库），2022年1月开始开发，3-4月提交频繁，日均10-15次code commit，日均约4名code author
- Q3 (中后25%): 2022年5月17日在Polygon主网上线，截至报告时点（2022年12月）仅白名单用户可创建Profile，Dune Analytics显示近10万Profile持有者，近65万条posts、26.6万条comments，115个应用已构建在Lens之上（其中11个Featured），Lens Protocol于2022年12月5日收购了NFT手游Sonar（持有者1000+，交易量49 ETH）
- Q4 (最后25%): 隐私风险明确指出：用户需用钱包地址登录去中心化社交协议，链上数据对所有人透明，钱包地址与社交图谱关联时会产生隐私问题；商业风险方面，部分用户在OpenSea上转售Profile，主流用户只能通过购买Profile体验（且无法买到自己名字的Profile）
- 图片: 9个图表（Figure 2-1 代码提交统计、2-2 NFT架构图、2-3 Featured on Lens生态截图、2-4 LENSFRENS截图、2-5 Lenster截图、3-1 Profile数据、3-2 Posts & Comments数据、3-3 Lens合作伙伴、5-1 Social Graph基础结构），均为Medium/Wikimedia外部URL，无法本地获取

## 核心要点
- Lens Protocol是由Aave团队开发的去中心化社交图谱底层协议，提供Profile/Publication/Follow三大功能模块，所有用户行为均NFT化（Profile NFT、Follow NFT、Collect NFT），用户完全拥有自己的社交数据并可带入Lens生态内的任何应用
- 协议采用模块化架构：Follow Module（关注逻辑，如"付费关注"）、Collect Module（内容收藏/货币化，创建时设定不可变）、Reference Module（评论/转发规则，可限制特定Follower NFT ID持有者），模块是白名单智能合约，类似"hooks"机制在执行点被调用
- 生态现状（2022年12月）：115个应用（11个Featured），但多数是Web2应用的仿制品——Lenster（Twitter模式，24200 Twitter粉丝）、IRIS、Lenstube（YouTube）、Lensta（Instagram）、PHAVER（SocialFi，55000 Twitter粉丝）、ORB（移动端，含Learn & Get NFTs功能）
- 竞争对手分析：CyberConnect（社交图谱基础设施，偏向与其他项目集成）、Atem Network（基于Token/NFT的群组空间）、Relation Labs（多链社交图谱+Rust编写的关系图数据库）、5Degrees（TokenPocket孵化、ERC-1155标准、为DApp添加社交模块）、DeSo（L1区块链，去中心化版Twitter）、BBS Network（去中心化Reddit，帖子即NFT）
- 与同类项目相比，Lens更侧重构建自身生态——技术和产品更面向开发者，方便他们构建去中心化社交应用，而非为其他项目添加社交功能，这对团队运营能力要求极高
- 协议尚未发行ERC-20经济代币或治理代币，Aave创始人Stani认为当前重点应放在技术开发上，暂无发币计划

## 关键数据
- 12名开发者在GitHub上参与Lens Protocol开发（截至2022年12月）
- 2022年3-4月代码提交高峰：日均10-15次commit，约4名code author
- 2022年5月17日：Lens Protocol在Polygon主网上线
- 截至2022年12月：近10万Profile持有者、近65万条posts、26.6万条comments、部分帖子有10000+ collects、部分账号10000+ followers
- 115个应用已构建在Lens之上，11个Featured，Lenster有24200 Twitter粉丝，PHAVER有55000 Twitter粉丝
- 2022年12月5日：Lens收购NFT手游Sonar（1000+NFT持有者，交易量49 ETH）
- 生态中应用覆盖数据、艺术、视频、音乐、图像等领域

## 与已有知识的关系
- 补充 [[lens-protocol]] — 提供2022年底的时间切片数据：10万Profile、65万posts、26.6万comments、115个应用、白名单制、无代币计划；该实体页目前主要覆盖2024年后的EBOLA叙事（基础设施碎片化导致失败），本文提供早期发展阶段的第一手数据
- 补充 [[socialfi]] — 2022年SocialFi五层架构中Lens处于"社交图谱层"，本文详细记录了Lens的模块架构（Follow/Collect/Reference Modules）和生态应用矩阵（115个应用），确认2022年时点核心矛盾：产品是Web2仿制品、用户仅限于白名单、主流用户需求未验证
- 补充 [[cyberconnect]] — 明确的竞争对比：CyberConnect更侧重底层社交图谱技术与其他项目集成，Lens更侧重孵化自身生态内的去中心化社交应用，两条路线对应不同的运营能力要求
- 补充 [[aave]] — Lens是Aave团队的延伸项目，创始人Stani Kulechov（赫尔辛基大学法学硕士，2017年创立Aave），12名开发者直接向Aave GitHub仓库提交代码
- 补充 [[nft]] — Lens的技术架构完全基于ERC-721 NFT：Profile NFT控制用户身份和内容、Follow NFT记录关注关系并内置治理功能（投票委托）、Collect NFT用于内容货币化
- 补充 [[bbs-network]] — 共同特点：帖子NFT化 + 去中心化内容策展，BBS侧重论坛/Reddit模式，Lens侧重社交图谱底层协议
- ⚠️ 与 [[来源_2024_Lens_Protocol_Social_Graph]] 中的判断形成时间线对比：2022年底Lens仍处于早期白名单阶段、生态应用是Web2仿制品但势头良好；到2024年因基础设施碎片化（Polygon→zkSync迁移+L3）被判定为EBOLA受害者。本文记录的早期技术架构细节（模块化设计、NFT化社交关系）是理解Lens愿景为何未能兑现的关键背景

## 值得记住的引用
> "Lens Protocol corrects this by being a user-owned, open social graph that any application can plug into. Since users own their data, they can bring it to any application built on top of Lens Protocol."（Lens纠正了Web2社交网络的问题：用户拥有自己的数据，可以将其带入任何构建在Lens之上的应用。这解释了Lens的核心价值主张）

> "Breaking data silos is the narrative of decentralized social protocols. However, user data is now still stored in different contracts of different Web 3 projects on different ecosystems. Although these data are owned by users, they cannot 'take them away'. While Lens builds an underlying protocol for other projects thus allowing data in projects built on top of Lens can be shared, thus breaking data silos on its ecosystem."（打破数据孤岛是去中心化社交协议的叙事，但用户数据仍存储在不同项目/不同生态的不同合约中。Lens通过构建底层协议让生态内应用间数据可共享——但这只在自己的生态内打破了数据孤岛，跨生态数据孤岛问题依然存在。这是一个诚实且有自我批判性的观察）

> "'Following' on the Lens Protocol differs from following in Web 2 social applications. When users follow a profile on the Lens Protocol, they are given a Follow NFT, which creators and communities can encode with additional value."（Lens的关注机制不是简单的"Subscribe"按钮，而是给用户一个可编程价值的Follow NFT——关注行为本身成为一种链上资产。这从根本上改变了社交关系的经济属性）

## 我的笔记
这份2022年12月的First.VIP研报是一个极有价值的时间胶囊——它记录了Lens Protocol在白名单阶段的完整技术架构和早期生态数据。读完后最强烈的感受是：Lens的模块化设计（Follow/Collect/Reference Modules）在技术上是优雅的，但产品化路径从一开始就埋下了隐患——生态中最好的应用是社区开发者做的Web2仿制品（Lenster、Lenstube），团队自己的应用（LENSFRENS）功能简陋仅用于测试。这种"做底层协议、等开发者来建应用"的策略在2022年的叙事中听起来合理，但从2024年的结果看（EBOLA受害者），这恰恰是VC叙事过度投资基建、忽视产品-市场匹配的经典案例。

报告本身也有局限性：它用First.VIP框架分析了技术、团队、竞品、风险，但缺少对"用户为什么需要去中心化社交"这一根本问题的深入质疑。它承认"主流用户需求未验证"（第19行），但没有追问：如果连Web3原住民都不觉得Twitter/Facebook的数据所有权是痛点，Lens的10万Profile持有者中有多少是真正活跃的用户而非空投猎人？第280行提到"部分用户在OpenSea上转售Profile"——这暗示着Profile NFT的稀缺性价值可能超过了实际使用价值，是典型的投机信号。这份研报最后给的结论是"值得关注"而非明确的Yes/No，反映了2022年底市场对去中心化社交的态度：叙事足够大，但证据还不够。
