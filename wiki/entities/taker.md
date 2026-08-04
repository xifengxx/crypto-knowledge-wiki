---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [nft, defi, lending, dao]
---

# Taker

## 基本信息
- 类型: NFT流动性协议 / 借贷协议
- 赛道: NFT借贷 / NFT金融化
- 代币: TKR
- 时间: 2022年活跃

## 核心业务/产品
Taker 是一个 NFT 资产的流动性协议，主要通过 DAO 形式为 NFT 借贷提供流动性，支持包括 NFT、证券、合成资产等在内的多种形式的资产。

## 核心机制（主体评估定价）
Taker 采用 DAO curator 主体评估定价模式：
- **DAO结构**：内部设有多个 curator DAO (sub-DAO)，每个 sub-DAO 可以自行管控自己的白名单及白名单上任何 NFT 的地板价以防借款人违约
- **投票决策**：sub-DAO 成员通过集体投票，决定将自有国库的资金投入特定类型的 NFT 资产（如 Metaverse 土地类、PFP 艺术类）
- **门槛**：持有 TKR 代币后获得 DAO 成员资格，参与决策借贷利率和公平定价

### 完整借贷流程
1. 贷款人向 DAO 存入资金
2. DAO 铸造 DAO 代币 (TKR) 代表成员股份
3. Curator（发起人）对 NFT 藏品进行主观定价
4. 借款人抵押 NFT，根据 curator 评估价格贷款
5. 借款人用利息偿还贷款
6. DAO 成员根据利息收益率获取奖励
7. DAO 发展壮大后成员收益累增

## 竞争优势
- 对 NFT 资产质量要求无限制，可广泛应用于长尾和新兴 NFT 藏品的价格发现
- DAO 机制将贷方利益与平台利益绑定，缩减风险敞口

## 局限
- 对 curator 判断能力依赖严重
- 无法提供实时更新的 NFT 价格，整体效率较低

## 相关实体
- [[abacus]] — 另一种流动池博弈定价模式
- [[bend-dao]] — TWAP 预言机定价模式

## 来源
- [[来源_2022-07_NFT定价_炼金术_同行定价_预言机_IOSG]]
