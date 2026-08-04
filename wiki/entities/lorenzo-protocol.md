---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [bitcoin, liquid-staking, btc-ecosystem, babylon]
---

# Lorenzo Protocol

## 基本信息
- 赛道: 基于 Babylon 的比特币流动性金融层
- 成立时间: 2022年
- 融资: 2022年10月完成一轮融资，Binance Labs 参投，金额未披露
- LST 代币: stBTC（流动性本金代币 LPT）+ YAT（收益累积代币），**本息分离**模型

## 核心业务
Lorenzo 采用**本息分离**方式发行 LST：
- 用户质押 BTC/BTCB → 1:1 获得 stBTC（流动性本金代币）
- 质押奖励以 YAT（收益累积代币）单独结算
- 用户可获得 Babylon 质押原生收益 + Lorenzo 质押积分

采用 **Staking Agents（质押代理）** 机制管理发行和结算：Staking Agents 负责质押用户BTC到Babylon、上传质押证明到Lorenzo、发行 stBTC 和 YAT。设计上由一组受信任的比特币机构和传统金融巨头组成，但当前 Lorenzo 是唯一的 Staking Agent（中心化风险）。

## 关键数据
- Babylon 第一阶段质押委托: 129.36 枚 BTC，占比 12.9%
- Cap 1 + Cap 2 总质押: 507+ 枚 BTC（2024年9月）

## 竞争特色
本息分离模型是Lorenzo区别于其他Babylon LST协议的核心特征——类似Pendle的PT/YT分离逻辑，允许用户分别交易本金和收益权。这使得Lorenzo的stBTC/YAT在利率衍生品市场有潜在应用。

## 风险
- Staking Agent 当前中心化（唯一Agent是Lorenzo自身）
- 本息分离增加了智能合约复杂度
- Binance Labs 投资金额未披露，估值不透明

## 相关实体
- [[babylon]] — 底层质押收益来源
- [[pendle]] — 类似的收益代币化/本息分离模型（以太坊生态）
- [[solv-protocol]] — Babylon LST 竞争协议

## 来源
- [[来源_2024-09_八大Babylon生态流动性质押协议_odaily]]
