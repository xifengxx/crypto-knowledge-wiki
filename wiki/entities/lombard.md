---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [bitcoin, liquid-staking, btc-ecosystem, babylon]
---

# Lombard

## 基本信息
- 赛道: Bitcoin 流动性质押（Babylon 生态）
- 成立时间: 2024年4月
- 融资: 种子轮 $1600万（2024.7.2），Polychain 领投，Foresight Ventures、OKX Ventures、Robot Ventures、Babylon 等参投
- LST 代币: LBTC（以太坊链上1:1铸造，收益直接计入代币价值）

## 核心业务
用户将 BTC 存入 Lombard → BTC 被质押到 Babylon 获取收益 → 用户在以太坊链上1:1铸造 LBTC → LBTC 参与以太坊 DeFi。未来计划扩展到 Solana 和 Cosmos。

安全模型采用**安全联盟机制 + CubeSigner 非托管密钥管理平台**。

## 关键数据
- LBTC 供应量: 4400.3958+ 枚（2024年9月 Dune 数据）
- 持有地址数: 4443
- Babylon 主网第一阶段质押委托: **未成功委托**（因Gas竞争过大主动放弃）
- 2024.8.21 开启白名单存款测试 → 9.3 推出公共测试版

## 竞争策略
Lombard 在 Babylon 第一阶段质押中的策略选择值得注意：面对Gas竞争，主动放弃委托BTC进入Babylon，将节省的Gas费用投入生态建设。这是一种"战略性后撤"——优先建设LBTC的以太坊DeFi生态（铸造量+地址数），而非在Babylon委托份额上硬拼。

## 风险 / 争议
- Babylon委托执行力不足——首阶段未能将BTC质押进Babylon
- 跨链依赖：LBTC在以太坊铸造，依赖跨链桥基础设施
- 安全联盟机制的具体细节透明度有限

## 相关实体
- [[babylon]] — 底层质押收益来源
- [[solv-protocol]] — Babylon LST 竞争协议，Babylon第一阶段委托250 BTC占比25%
- [[bedrock-defi]] — Babylon LST 竞争协议，Babylon第一阶段最大委托人

## 来源
- [[来源_2024-09_八大Babylon生态流动性质押协议_odaily]]
