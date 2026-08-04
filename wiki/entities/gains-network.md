---
type: entity
entity_type: protocol
created: 2026-06-28
updated: 2026-06-28
tags: [defi, derivatives, trading, arbitrum, polygon]
---

# Gains Network

## 基本信息
- 定位：去中心化杠杆交易平台，gTrade为旗舰产品
- 链：Arbitrum + Polygon（最初在以太坊，后迁移）
- 代币：GNS（动态供应，通缩型应用代币）
- 创始人：独立开发者（除UI外全部自建）

## 核心业务
- **gTrade**：去中心化杠杆交易平台，支持91+交易对（加密货币/外汇/股票），杠杆最高1000x（外汇）/150x（加密）
- **gDAI合成流动性池**：以DAI计价，作为交易者对手盘，Volume/TVL=18（GMX的3倍+）
- **自制预言机DON**：Chainlink底层+7交易所API+8节点，链上防插针
- **GNS代币经济**：铸造上限0.05%/天（年通胀上限18.25%），实际为通缩

## 关键数据
- 累计交易量：>$340亿，87万+笔（截至2023年4月）
- gDAI TVL：$50M，周交易量$913M
- 收益分配：GNS质押者36% / gDAI LP 18%
- gTrade保护机制：+900%自动平仓 / -90%自动平仓

## 保护机制
- Fixed Spread（大市值资产固定费用）
- Price Impact（GMX无此功能，防止小币种操纵）
- Rollover Fee（波动性挂钩，抑制长期对冲持仓）
- Funding Fee（多空平衡）

## 风险/教训
- Luna事件：坚持去中心化原则不下架，流动性池几乎被掏空。事后增加多层保护

## 相关实体/概念
- [[gmx]]（待创建）— 最大竞争对手，GLP多资产池模式
- [[defi]] — 链上衍生品赛道

## 来源
- [[来源_2023-04_Binary_Research_Gains_Network_gTrade_去中心化杠杆交易]]
