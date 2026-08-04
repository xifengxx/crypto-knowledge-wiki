---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, staking, ethereum, lsd]
---

# Rocket Pool

## 基本信息
- 类型：去中心化流动性质押协议
- 成立时间：2016年底完成概念构想，2021年11月7日主网上线
- 创始人及CTO：David Rugendyke
- 团队：总经理Darren Langley、Kane Wallmann、Nick Doherty
- 投资方：ConsenSys Ventures（唯一可查投资人）
- 原生代币：RPL（2017年发行，总量1800万枚，年通胀率5%）

## 核心业务/产品
- 提供以太坊流动性质押服务，用户质押ETH后获得rETH作为质押凭证
- 不直接运营节点，通过激励机制吸引节点运营商提供服务
- 独创分级资产管理设计：将32ETH门槛分为普通用户提供16ETH（优先级）和节点运营商提供16ETH（劣后级），节点运营商承担罚没风险
- 动态佣金机制平衡普通用户与节点运营商两端的供需关系

## 关键数据
- 主网质押超过15万枚ETH，引入973个节点运营商（截至2022年3月）
- 坚持等待以太坊共识层允许智能合约作为取款私钥后才上线主网（2021年7月支持），上线时Lido已质押140万+ ETH
- 节点运营商需质押RPL作为ETH罚没后的最后抵押物
- RPL通胀分配：70%给节点运营商、15%给预言机DAO成员、15%给DAO Treasury

## 竞争优势 / 护城河
- 最去中心化的ETH流动性质押方案之一，节点运营商无需任何审查即可参与
- 通过超额抵押和分级资产结构实现比Lido更去信任的安全模型
- 预言机DAO成员包括Prysm、Lighthouse、Nimbus、Consensys Codefi、Etherscan等以太坊核心基础设施

## 风险 / 争议
- 主网上线时间远晚于Lido，差距巨大且难以追赶
- 节点运营商需要自行提供16ETH+超额RPL质押，资金门槛较高
- rETH的DeFi可组合性和流动性不如stETH

## 相关事件时间线
- 2016年底：Rocket Pool概念构想
- 2021年11月7日：以太坊主网上线
- 5次成功测试网

## 我的判断
Rocket Pool在技术设计和去中心化理念上优于Lido，但"产品先行"vs"业务先行"的策略选择使其在市场份额上被Lido大幅领先。其分级资产设计（优先级/劣后级）是对Lido中心化节点审查的有效去中心化替代方案，但节点运营商的资金门槛限制了网络增长速度。

## 相关实体
- [[lido]] — 直接竞争对手，ETH流动性质押赛道龙头
- [[ssv-network]] — 上游基础设施，可为Rocket Pool提供DVT安全冗余
- [[ethereum]] — 底层公链

## 来源
- [[来源_2022-03_以太坊_PoS_Staking赛道_MintVentures]]
