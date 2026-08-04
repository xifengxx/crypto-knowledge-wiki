---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [socialfi, layer2, infrastructure]
---

# Lens Protocol

## 基本信息
- 类型: 去中心化社交图谱协议
- 融资: $15M
- 链上部署: Polygon（初始）→ zkSync（因获资助迁移）+ 自建L3
- 核心团队: Aave团队（Stani Kulechov）孵化

## 核心业务/产品
去中心化社交图谱——用户拥有自己的社交关系数据，应用可以基于图谱构建。类似Web3版社交关系层。

**技术架构（基于ERC-721 NFT）**：
- **Profile NFT**：用户创建Profile后获得，包含所有posts/mirrors/comments历史，是用户内容的控制权凭证
- **Publication**：Post（标准内容）、Comment（带指针的评论，受Reference Module约束）、Mirror（转发，无内容仅指针）
- **Follow NFT**：关注行为NFT化，内置治理功能（投票委托），支持Social DAO
- **模块系统**：Follow Module（可设付费关注/订阅）、Collect Module（内容货币化，创建时设定不可变）、Reference Module（评论/转发规则，可限制特定Follower NFT ID持有者）

## 关键数据
- 2022年2月8日：Lens Protocol 由 Aave 团队在 Polygon 上发布
- 2022年5月17日：在Polygon主网上线
- 2022年11月4日（PANews报道）：FTX Ventures投资，金额未披露（仅7天后FTX崩溃）
- 2022年11月：93,900 Profiles发放 / 86,422个持有地址 / 92%唯一持有率 / 仅3%上架
- 2022年11月：用户交互分布——76.8%仅1-10次、18.2% 10-50次、5% 50次以上；月活1-2万
- 2022年11月：Profile月增长1-2万（公开信签署和合作活动驱动）
- 2022年11月：主网上线一个月内用户赚取超过$125,000（无中间人）
- 2022年11月：Lens handle NFT地板价从0.003 ETH飙升至0.018 ETH（+600%）
- 2022年11月：宣布部署Scroll Pre-Alpha测试网
- 2022年12月（First.VIP研报）：近10万Profile持有者、65万posts、26.6万comments、115个应用、11个Featured、仅白名单用户可创建Profile
- 2022年12月5日：收购NFT手游Sonar（1000+NFT持有者，交易量49 ETH）
- $15M融资（后续轮次）
- 因基础设施碎片化导致失败：先在Polygon上构建（获资助），后迁移至zkSync（再获资助），同时维护自有L3
- 三链并行使开发者和用户分裂，生态无法形成网络效应

## 竞争优势 / 护城河
- Aave团队的DeFi背景和品牌
- 早期进入社交图谱赛道
- 模块化架构（Follow/Collect/Reference Modules）允许开发者灵活定制社交逻辑
- NFT化社交关系——社交行为成为可组合的链上资产

## 风险 / 争议
- **EBOLA受害者典型案例**：被VC叙事驱动在多条链上分散建设，而非聚焦产品-市场匹配
- **对比Farcaster**：Farcaster采取轻基础设施的Web2路径，单一客户端+单一链（OP），结果远超Lens
- 基础设施碎片化直接导致协议失败——开发者不知道该在哪条链上构建，用户不知道该在哪条链上使用
- **早期白名单投机信号**：2022年底部分用户在OpenSea转售Profile NFT，暗示稀缺性价值可能超过实际使用价值

## 早期生态应用（2022年11月）
- **Lensfrens** — Lens团队构建的Profile策展网页，用户Profile主页直接跳转至此页面
- **Lenster** — 去中心化社交媒体应用（类似Twitter），LFGrow黑客松12个胜出项目之一，15K推特关注/12K Discord
- **Lenstube** — 开源视频共享平台（类似YouTube），由Livepeer和Vercel提供支持
- **ORB** — 去中心化职业社交应用（类似LinkedIn），端到端链上信誉系统，已上架App Store和Google Play，16K推特/10K Discord
- **Phaver** — Share-to-Earn社交应用，55K推特/41K Discord，每日发放5枚代币质押发现优质内容
- **Rememe** — Aave实验组Newt构建的链上meme生成器
- **LensPort** — 内容和Profile交易的NFT市场（2022年10月推出），成交额不足1 ETH
- **Lensta** — 图片流平台（类似Instagram）

## 产品与增长张力
- CreatorDAO创始人dashuo指出：Lens官方刻意不做内容聚合和推荐，不利于用户活力和留存；但用户数据NFT化后存储在个人钱包，用户可随时离开平台无损失
- 社区关于Profile是否开放申领存在对立观点：一方认为不开放可防羊毛党但提高入场门槛阻碍发展，一方认为永远不开放则保持稀缺性和可交易性

## 相关事件时间线
- 2022-01: Lens Protocol 开始开发
- 2022-03~04: 代码提交高峰，日均10-15次commit
- 2022-05-17: Polygon主网上线，仅白名单用户可创建Profile
- 2022-11-04: FTX Ventures投资（金额未披露）；宣布部署Scroll Pre-Alpha测试网
- 2022-11: 93,900 Profiles发放，76.8%用户仅交互1-10次，月活1-2万
- 2022-12-05: 收购NFT手游Sonar
- 2022-12: 近10万Profile、115个应用生态、尚无ERC-20代币计划

## 相关实体
- [[farcaster]] — 竞争对手，采取相反策略（轻基础设施）并取得成功
- [[aave]] — 孵化方
- [[stani-kulechov]] — 创始人，Aave创始人，赫尔辛基大学法学硕士
- [[cyberconnect]] — 竞品，社交图谱基础设施路线（侧重与其他项目集成而非孵化自有生态）
- [[deso]] — 竞品，自建L1的去中心化社交方案
- [[atem-network]] — 竞品，Token/NFT群组社交方案
- [[relation-labs]] — 竞品，多链社交图谱+Rust图数据库
- [[5degrees]] — 竞品，TokenPocket孵化，ERC-1155社交模块嵌入DApp

## 来源
- [[来源_2022-11_Lens深度体验_Web3社交_PANews]] — PANews 2022年11月深度体验：FTX Ventures投资、93,900 Profiles数据分布、76.8%低交互率、生态8款产品详情、Profile注册开放争议
- [[来源_2022-12_Lens_Protocol_社交图谱_FirstVIP]] — 2022年12月First.VIP项目研报，详细记录了Lens早期技术架构、生态数据、竞品分析
- [[来源_2024-08_以太坊VC基建痴迷_EBOLA_Solana_BlockBeats]]
- [[来源_2025-01_Q1发币项目盘点_Berachain_Monad_OpenSea_PANews]] — 官方通告主网即将上线但具体日期未定；未披露轮次$3100万+种子轮$1500万，累计融资$4600万
