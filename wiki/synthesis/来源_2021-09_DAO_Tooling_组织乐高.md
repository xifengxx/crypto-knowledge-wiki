---
type: source
source_type: article
url: https://medium.com/1kxnetwork/organization-legos-the-state-of-dao-tooling-866b6879e93e
author: Nichanan (1kxnetwork)
date: 2021-09-16
ingested: 2026-07-02
---

# Organization Legos: DAO Tooling 全景 — 组织乐高积木：DAO工具的状态

## 阅读证据
- 总行数: 270
- Q1 (前25%): 超过1,000个Snapshot空间、70万治理代币持有者、100亿美元DAO国库资产——DAO运营是一个被低估的新兴加密赛道。DeFi在过去一年从70亿增长到900亿美元，而"组织乐高"仍在早期。
- Q3 (中后25%): Gnosis SafeSnap插件利用Reality.eth预言机确保多签执行前社区已通过Snapshot链下投票批准交易——弥合链下投票与链上执行之间的鸿沟。Zodiac模块将此概念框架无关化，任何可报告给预言机的链下事件都能触发链上执行。
- Q4 (最后25%): 新一代DAO框架从单体刚性转向模块化（modularity）、灵活性和可扩展性。DAOHaus的Boosts和Gnosis Zodiac套件使DAO工具安装可以像"npm install organization-lego"一样简单。文章预言：未来个人将同时在多个DAO中贡献，跨应用携带身份和声誉。
- 图片: 0 analyzed / 0 decorative skipped / 25+ external URLs unavailable（所有图片均为miro.medium.com外部链接，无法本地分析）

## 核心要点
- DAO面临着三个核心挑战：降低有意义贡献的门槛、在去中心化过程中保持运营效率、大规模协调决策。整个DAO工具生态围绕解决这三个问题而构建。
- 文章提出"渐进式去中心化"（Progressive Decentralisation）理念——初始团队先寻找产品市场匹配，再逐步走向可信中立。通过"受约束的授权"（Constrained Delegation）和工作组模式平衡效率与去中心化。
- 薪酬工具（Coordinape、SourceCred/Govrn）从主观和客观两个方向解决贡献量化与价值分配问题，强调社区不应"将自己硬塞进别处定义好的指标"。
- 链下投票（Snapshot）与链上执行之间出现裂缝——多签签署者可能背离社区意志。新工具层（Gnosis SafeSnap、Zodiac、Kleros Court）通过预言机和仲裁机制重建信任，确保执行与投票一致。
- 第一代DAO框架（Moloch、DAOStack、Aragon）过于刚性，社区需要"把自己硬塞进模板"。第二代框架（DAOHaus+Boosts、Gnosis Zodiac、Orca Protocol的pods、Tribute DAO的可扩展适配器）强调模块化和可组合性。
- DAO工具生态仍处于早期阶段，类比DeFi的"货币乐高"进步速度，组织乐高的创新潜力巨大。未来个人将跨多个DAO协作，形成流动参与和真正所有权的多对多工作关系。

## 关键数据
- 超过1,000个Snapshot空间（2021年9月数据）
- 70万治理代币持有者
- 100亿美元DAO国库资产
- DeFi从70亿美元增长到900亿美元——同期DAO工具生态仍处于"婴儿期"
- 文章引用Yearn团队按yIP-61（YIP-61 Governance 2.0）建立yTeams工作组模型作为"受约束授权"的范例

## 与已有知识的关系
- 补充 [[dao]] — 本文是2021年视角下DAO工具生态的全面地图，对dao.md概念页中"降低协调成本"的核心判断提供了具体工具层面的实证支撑——Coordinape、Snapshots、SafeSnap、Kleros等工具分别解决贡献评估、链下投票、执行验证、争议仲裁等问题
- 补充 [[blockchain-governance]] — #来源_2022_DAO大败局_去中心化自治_定慧 从"人治"视角批判DAO的失败原因，本文则从"工具能否解决"的正向视角提供互补论述——两篇结合可完整理解DAO的机遇与局限
- 补充 [[coordinape]] — 本文较早系统描述了Coordinape的"同工互评"设计哲学（时间约2021年）以及与Govrn Movement Models的定位差异
- 补充 [[gnosis]] + [[safe]] — 本文详述了SafeSnap和Zodiac的早期设计：利用Reality.eth预言机连接Snaphot链下投票与Safe多签执行，以及框架无关的设计理念

## 值得记住的引用
> "Decentralisation doesn't mean leaderless. Rather, more people are empowered to take initiatives towards shared goals: the DAO's North Star."（去中心化不意味着没有领导者。相反，更多人被赋权为实现共同目标——DAO的"北极星"——而主动作为。）

> "The community shouldn't have to retrofit itself to metrics that were defined elsewhere."（社区不应该把自己硬塞进别处定义好的指标。）——关于Govrn Movement Models的设计理念

> "Unlike the more monolithic, rigid first-generation frameworks, modular and composable tooling flexibly serves the ever-evolving needs of communities."（与更单体化、刚性的第一代框架不同，模块化和可组合的工具灵活服务于社区不断演变的需求。）

> "We are at the dawn of DAOs. Like DeFi and NFTs before it, the floodgates for innovation in decentralised organisation ops will open once we have the core primitives at our disposal."（我们正处在DAO的黎明。就像DeFi和NFT一样，一旦核心原语就位，去中心化组织运营的创新洪流将奔涌而出。）

## 我的笔记
这篇文章的价值更多在于"历史快照"而非"永恒真理"。2021年正是DAO概念狂热期（ConstitutionDAO、Yearn yTeams等），作者对DAO工具生态的乐观预见部分成真（Snapshot确实成为标准、Gnosis Safe成为基础设施），但也遗漏了关键变量——DAO面临的真正瓶颈不是工具不足，而是治理冷漠和激励机制的根本缺陷（即[[来源_2022_DAO大败局_去中心化自治_定慧]]所指出的问题）。文中提到的大部分项目（Govrn、Orca Protocol、Tribute DAO、Llama等）在2024年后几乎不再被提及，说明DAO工具赛道本身迭代极快、淘汰率极高。不过文中对"模块化取代刚性框架"的判断非常准确——这一趋势在DAO工具和更广泛的Web3基础设施中都已成为主流设计哲学。作者将DAO工具类比为DeFi乐高的框架至今仍有解释力。
