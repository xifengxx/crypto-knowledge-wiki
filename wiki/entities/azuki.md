---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [nft, pfp, ethereum, art]
---

# Azuki

## 基本信息
- **赛道**: NFT / PFP 收藏品
- **类型**: 动漫风格 NFT 项目
- **成立**: 2022年1月（官方推特上线）
- **团队**: Zagabond（创始人，曾创立Phantom Network和Zunks）
- **合约**: ERC-721A（自研改进协议）

## 核心业务/产品
- **Azuki系列NFT**：以动漫美学为核心的10,000个PFP NFT集合
- **BEANZ**：Azuki生态的衍生NFT系列（小豆子形象）
- **The Garden**：Azuki持有者社区/品牌生态
- **Physical Backed Tokens (PBT)**：物理物品代币化标准（ERC-721扩展）

## 技术贡献：ERC-721A
Azuki团队基于ERC-721优化开发的改进协议ERC-721A，核心优化在于：
- 批量铸造时Gas费大幅降低——使铸造一个和多个NFT时手续费基本相同
- 优化了Store Mint模式，避免了逐一代币批准的Gas消耗
- 被OpenSea和众多NFT项目采纳为标准方案

## 关键数据
- 2022年1月初始铸造价格为1 ETH
- 铸造日创下Gas费消耗历史纪录
- ERC-721A被广泛采用为NFT项目的默认铸造合约方案
- 上线不到6天跃升至OpenSea近7日成交量前三，约11,670 ETH（超3,860万美元，ETH约3,300美元）
- 荷兰拍卖起始价1 ETH，以0.05ETH/20分钟速率下降至0.15 ETH，8800个Azuki在拍卖阶段提供
- 白名单铸造价为荷兰拍卖最终价格的一半

## 发售机制：三阶段策略
Azuki 的发售采用了"荷兰拍卖 + 白名单Mint + 公开销售"三阶段组合（见[[来源_2022-11_NFT_玩法_设计_运营_Web3Caff]]）：

### 荷兰拍卖（价格发现）
- 起始价格1 ETH，以0.05ETH/20分钟速率下降至0.15 ETH
- 荷兰拍卖结果直接影响后续Mint价格和公开销售价格
- 通过拍卖提供起始价格发现，让团队有依据调整后续市场动作

### 白名单Mint（目标用户筛选）
- 白名单铸造成本为荷兰拍卖最终价格的一半
- 白名单筛选极具目标性：非随机分配，通过社交媒体活动收集数据后主动筛选符合目标用户画像的参与者（尤其防止科学家等投机者）
- 通过Twitter私信主动联系白名单用户，防止欺诈团队干扰获得者

### 公开销售
- 价格为荷兰拍卖中最后一个Azuki的价格
- 出售所有剩余Azuki

## 其他玩法设计
- **空投配对**：持有Azuki的用户获Bean NFT空投，Bean可与Azuki配对
- **NFT碎片化**：对IP Bobu进行碎片化，碎片化所有者决定Bobu未来发展
- **元宇宙**：在Sandbox VR、Decentraland、Cryptovoxels和Somnium Space部署3D场景
- **线上线下融合**：Azuki商店售卖街头服饰、实物收藏品、玩具，举办见面会/展览/音乐节

## 相关事件时间线
- 2022-01: Azuki系列NFT公开发售（采用荷兰拍卖+白名单Mint+公开销售组合策略）
- 2022-05: Zagabond被曝光此前曾运营多个弃置项目，社区信任危机
- 2023-01: 推出BEANZ系列
- 2023-06: 推出PBT（Physical Backed Token）标准
- 2024: 构建Azuki品牌生态，进入消费品和IP衍生品领域

## 风险 / 争议
- 2022年5月创始人Zagabond被曝此前创立的Phantom Network和Zunks被弃置，引发社区信任危机，Azuki地板价从20 ETH一度跌至10 ETH以下
- 动漫风格定位使其文化受众较窄，相比BAYC和Pudgy Penguins在主流品牌合作方面进展相对缓慢

## 相关实体
- [[okay-bears]] — Solana同期PFP项目，类似的画风评价话题
- [[arweave]] — 同为2022年热门NFT生态参与者

## 来源
- [[来源_2022-05_NFT_代币协议_元数据存储_匿名达摩院]] — ERC-721A的技术细节和优化原理
- [[来源_2022-08_NFT版权_许可类型_Galaxy]] — Galaxy Research 分析 Azuki 版权许可：授予无限制盈利权利，无收入上限、场地或时间限制，属于"商业权利"类别；但 Chiru Labs 保留随时更改或撤销许可的权利且无需通知持有者。
- [[来源_2022-11_NFT_玩法_设计_运营_Web3Caff]] — 补充 Azuki 三阶段发售策略（荷兰拍卖+白名单Mint+公开销售）、Twitter私信白名单筛选、Bean NFT空投配对、Bobu碎片化、元宇宙及线上线下融合路线
