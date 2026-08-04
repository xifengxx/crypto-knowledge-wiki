---
type: entity
entity_type: person
created: 2026-07-02
updated: 2026-07-02
tags: [bitcoin, ordinals, brc20, developer]
aliases: [domodata, @domodata, Domo]
---

# @domodata

## 基本信息
- 类型: 比特币生态开发者
- 定位: BRC-20 代币标准创建者
- 关键贡献: 2023 年 3 月 8 日提出 BRC-20 实验性标准
- X/Twitter: [@domodata](https://twitter.com/domodata)
- 文档: [BRC-20 实验文档](https://domo-2.gitbook.io/brc-20-experiment/)

## 核心业务/产品

### BRC-20 标准（2023 年 3 月 8 日）
基于 Ordinals 协议的比特币网络同质化代币标准。利用 JSON 数据格式的铭文来部署代币合约、铸造代币和转移代币。本质上是文本类型的铭文，没有智能合约。模仿 ERC-20 但在比特币网络上执行。

### 后续影响
- 截至 2023 年 5 月，比特币网络上已有接近 1 万种 BRC-20 代币
- 第一个也是最大的 BRC-20 代币 $ORDI 已上线币安交易所
- BRC-20 催生了整个比特币代币化热潮，带动了 ORC-20、BRC-721、LTC-20 等分叉和改进标准

## 关键数据
- BRC-20 提出日期: 2023 年 3 月 8 日
- 币种数量（2023 年 5 月）: 接近 1 万种
- 首个和最大代币: $ORDI（已上线币安）

## 争议
- BRC-20 被比特币核心开发者 Casey Rodarmor 批评，认为其两步转账机制导致 UTXO 膨胀和粉尘攻击问题
- BRC-20 依赖链下索引器进行代币状态追踪，被认为存在系统性薄弱点

## 相关实体
- [[casey-rodarmor]] — Ordinals 和 Runes 协议创建者，对 BRC-20 持批评态度
- [[ordinals]] — BRC-20 依赖的底层铭文协议

## 来源
- [[来源_2023-05_比特币NFT_BRC20_Ordinal_科普_TokenInsight]] — 2023年5月5日TokenInsight科普文，记录domo提出BRC20标准的过程及推文链接（twitter.com/domodata/status/1633658974686855168），早期科普对domo贡献的平民化解读
- [[来源_2023-05_BRC20_玩转指南_BlockBeats]] — 2023年5月早期实操教程，包含 domodata 声明 BRC-20 "这是个实验性产品"的原话、ORDI 早期价格数据（1.2 → 2.83 USD）
- [[来源_2023-05_BTC_Ordinals生态_代币协议_全景指南]]
- [[来源_2023-05_Ordinals_BRC20_技术生态数据_Biteye]] — 收录 domo 的 BRC-20 三功能（部署/铸造/转移）JSON 格式技术细节、domodata GitBook 文档链接，以及 BRC-20 在 2023 年 5 月的高频交易数据全景
