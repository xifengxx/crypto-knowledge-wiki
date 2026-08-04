---
type: source
source_type: article
url: https://visioncap.feishu.cn/docs/doccnPtPyrFuEItkpQFJCr2bqAg
date: 2022
ingested: 2026-07-02
---

# PlayerOne：人人都可创建元宇宙的多链沙盒平台

## 阅读证据
- 总行数: 362
- Q1 (前25%): PlayerOne 完成两轮融资，天使轮由 SIG（TikTok 最大外部股东）和 The9（魔兽世界早期运营商）领投，第二轮投资者包括 FBG、TsingTing Capital、Waterdrip、Element、Winkrypto 等十余家机构
- Q3 (中后25%): RarityScore 公式为 RarityScore = (bs + vc) * 11 * ln(q+1)，通过自然对数机制让部件越多增长越慢，防止用户一味堆砌角色部件
- Q4 (最后25%): PlayerOne 是首个接入 LayerZero 的元宇宙平台，NFT 在创世之初可同时在 7 条公链（以太坊、Polygon、Arbitrum、Optimism、BSC、Avalanche、Fantom）上 Mint，且跨链转移是原子级的——源链资产减少，目标链相应增加，而非复制副本
- 图片: 0 analyzed / 21 decorative skipped / 0 external URLs unavailable（图片来自 Feishu 文档内嵌，本地未保存）

## 核心要点
- PlayerOne 定位为"人人都可创建元宇宙"的多链沙盒游戏平台，集成工具、社交、交易市场和 P2E 玩法四大模块，旨在与 Sandbox、Decentraland、CryptoVoxels 竞争
- 产品矩阵完整：RoleEditor（可组合 NFT 角色，ERC-1155 部件 + ERC-721 组合）、SpaceEditor（零门槛空间编辑器 + BluePrint 蓝图一键建建筑）、VoxelEditor（体素道具制作）、GameEditor（Scratch 式可视化游戏编辑）
- 独创 RarityScore 稀有度算法，通过自然对数惩罚部件堆叠，并将稀有度与 P2E 奖励权重、宠物捕获概率、空间访问量权重挂钩，同时发挥反女巫作用
- 多链架构基于 LayerZero 全链互操作协议，NFT 原生支持 7 条公链并实现原子级跨链转移；支持第三方 PFP 导入（Meebits 已整合，Mfer 规划中）
- 经济模型为 O2E（Operate to Earn），激励用户创造内容、运营土地；支持土地租赁和协作功能；合约支持资产回购及销毁机制处理低利用率土地
- 创世大陆采用希腊岛屿分区命名（Snow Crash、Oasis、Metaverse、BTC、Ethereum 等），引入社区 DAO 治理公共空间，提供多样化地理环境（山脉、河流、湖泊、岛屿、地铁房）

## 关键数据
- 天使轮由 SIG 和 The9 领投，第二轮有 FBG、TsingTing Capital 等十余家机构参投
- 最低土地价格 0.2 ETH，附带最少价值 100 美元的创世建筑
- RarityScore 公式：RarityScore = (bs + vc) * 11 * ln(q+1)，其中 bs=基础分数、vc=部件系数、11=最大部件数、q=部件数量
- 第一期白名单：限量 1000 块土地，四种土地类型
- 原生支持 7 条公链：以太坊、Polygon、Arbitrum、Optimism、BSC、Avalanche、Fantom
- 已合作数十个认证建筑设计师，制作上百个 BluePrint 蓝图
- 道具 NFT 定价 5-10 USD 区间

## 与已有知识的关系
- 补充 [[metaverse]] — PlayerOne 是 2022 年区块链元宇宙工业化的典型案例，其完整产品矩阵（四个编辑器）展示了元宇宙平台从概念炒作到工具落地的演进，补充了现有 metaverse 页面中缺少的东亚元宇宙项目案例
- 补充 [[gamefi]] — PlayerOne 的 RarityScore 算法将 NFT 稀有度与 P2E 奖励权重挂钩，形成独特的反女巫机制；O2E 模型是对传统 P2E 模型的改良延伸
- 补充 [[nft]] — PlayerOne 的可组合 NFT 角色系统（ERC-1155 部件随机盲盒生成 + ERC-721 组合铸造 + 部件销毁）是 NFT 协议组合使用的典型案例，补充了现有 nft 页面中 ERC-1155 和 ERC-721 协议的实际协同案例
- 补充 [[cross-chain]] — PlayerOne 通过 LayerZero 实现 7 链原子级跨链转移，是 ONFT（全链 NFT）标准的典型应用场景，补充了跨链概念页中缺少的元宇宙/NFT 跨链案例
- 补充 [[layerzero]] — PlayerOne 是首个产品化集成 LayerZero 的元宇宙平台，作为 ONFT 跨链 NFT 的实践案例

## 值得记住的引用
> "可组合 NFT 角色 — 目前 PFP 项目主流的做法是预先生成 20,000 个 NFT，然后大家再随机获得其中一个 NFT。这样最大的问题是 NFT 都是提前预设的，社区完全没有参与，只能被动的接受。"

> "当资产在某条链上生成之后，可以通过合约直接完成在不同链之间的穿行，比如从 Polygon 到 BSC，或是从 Avalanche 到以太坊。必须强调的是，这些穿行至其他区块链之上的资产并不是原始 NFT 的副本，而是可被目标链合约认可的真实 NFT"

> "用户只需要一个 BluePrint 即可一键建造建筑，然后在建筑的基础上进行修改就可以了——用户可以千分之一的价格就可以购买，然后一键建造自己的建筑。"

## 我的笔记
- 本文是 VisionCap（视野资本）撰写的项目介绍文章，有明显的推广性质——"知名机构背书"、"顶尖技术团队"、"复合降维打击"等表述过于乐观，缺乏对风险和技术挑战的深入分析。本文不应被视为独立的第三方研究报告。
- 从 2022 年至今（2026 年）的时间距离来看，PlayerOne 的核心叙事——元宇宙沙盒平台——经历了 Web3 行业从 metaverse 叙事高峰到退潮的完整周期。截至 2026 年，该项目是否已兑现产品承诺、Token TGE 是否完成、社区是否活跃，均值得另行核查。本文最大的价值在于完整记录了 2022 年 Metaverse 叙事高峰期的一个典型区块链元宇宙项目的产品设计全貌，作为历史参考而非投资建议。
