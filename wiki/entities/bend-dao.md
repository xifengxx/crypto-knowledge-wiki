---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [nft, defi, lending]
---

# BendDAO

## 基本信息
- 类型: NFT P2POOL借贷协议
- 成立时间: 2022年3月
- 赛道: NFT借贷 / NFT金融化
- 相关链接: https://www.benddao.xyz/

## 核心业务/产品
BendDAO 是一个点对池（P2POOL）NFT借贷平台。借款人将NFT质押进入资金池获得流动性贷款，贷方将ETH/稳定币注入池中获得利息收入和BEND代币奖励。

## 核心机制
- **抵押资产**：仅接受蓝筹NFT（BAYC、CryptoPunks等），由社区投票确定可接受资产清单
- **定价机制**：底价由OpenSea和LooksRare的内部预言机检索
- **抵押率**：根据抵押资产不同而不同
- **强平保护**：提供48小时强平保护期，用户可按时还款赎回NFT质押品
- **利率**：贷款人利率约5%，借款人利率约15%；借贷活动均获得BEND代币奖励

## 关键数据
- TVL约73,000 ETH（约$1.1亿，2022年8月数据）
- 当前活跃贷款约17,000 ETH（约$2,550万，2022年8月数据）

## 竞争优势
- P2POOL模式比P2P效率更高，借款人不必等待匹配个别贷款人
- 自上线以来发展迅速，吸引了大量蓝筹NFT进行借贷
- BEND代币激励加速了供需两端增长

## 风险 / 争议
- **死亡螺旋风险**：在看跌市场中，清算恐惧导致用户折扣出售→底价降低→更多NFT被清算→进一步压低底价的负反馈循环
- **蓝筹依赖**：仅限蓝筹NFT，中低价格NFT无法参与借贷
- **预言机依赖**：依赖OpenSea和LooksRare的底价预言机，存在价格操纵风险
- **流动性危机**：熊市中BAYC和Azuki等蓝筹NFT曾面临清算边缘

## 相关事件时间线
- 2022-03: BendDAO正式上线
- 2022-08: 熊市中流动性危机爆发，BAYC和Azuki面临清算边缘

## 我的判断
BendDAO代表了NFT借贷从P2P向P2POOL演进的重要一步，其P2POOL架构后来成为NFT借贷的主流范式。但2022年熊市中暴露的死亡螺旋风险是该模式的根本性缺陷：在缺乏足够流动性的NFT市场中，超额抵押借贷的清算机制会放大而非缓解下跌。这提醒我们，将DeFi借贷模式直接移植到NFT资产上，不能忽视底层资产流动性极度不足这一结构性问题。

## 相关实体
- [[opensea]] — 为BendDAO提供底价预言机数据
- [[nftfi-protocol]] — P2P借贷模式竞争对手
- [[nftx-protocol]] — NFT流动性协议，与借贷互补

## 来源
- [[来源_2022-08_NFTfi_NFT借贷_市场全景_火币研究院]]
- [[来源_2022-08_NFTfi赛道_XResearchDAO]] — 补充BendDAO 48小时强平保护、社区投票抵押资产清单、OpenSea/LooksRare底价预言机等具体机制
- [[来源_2022-07_NFT定价_炼金术_同行定价_预言机_IOSG]] — 补充 BendDAO 的 TWAP 定价实现细节（与 Chainlink 多节点采集 Opensea/LooksRare 双平台地板价，支持 BAYC、Cryptopunks、Azuki 等 9 种蓝筹 NFT）
