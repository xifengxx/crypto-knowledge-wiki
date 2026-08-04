---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, yield, arbitrum, vault, delta-neutral]
---

# Umami Finance

## 基本信息
- 类型: DeFi 链上基金 / 对冲基金
- 赛道: DeFi 算法策略基金（对冲型 Vault）
- 链: Arbitrum
- 状态: 产品已于2022年8月19日关闭，研究第二版本
- 最初定位: 类似 Olympus DAO 的去中心化金融储备平台

## 核心业务/产品
Umami Finance 主要产品为基于 GMX 的 GLP 和 Mycelium（原名 Tracer DAO）的 Perpetual Pool 构建的 USDC 基金——GLP/TCR USDC POOL。

**策略原理**：
- GLP 包含约 40+% 波动资产（BTC/ETH）和 50+% 稳定资产（USDC）
- 买入 GLP 相当于持有该一篮子资产组合 + GMX 平台费用现金流收入
- 对波动资产部分按比例用 Mycelium 的三倍杠杆做空代币对冲
- 合约每天调整一次以确保对冲数量准确
- 少量资金从 Insurace 购买 GLP 保险，防范黑客攻击

**底层 DeFi 乐高模块**：
- GMX 的 GLP：永续合约交易所的流动性提供者代币，作为交易对手方获取 70% 平台费（以 ETH 形式分配）
- Mycelium 的 Perpetual Pool：3 倍杠杆做多/做空代币，周期性根据 ETH 价格调整两边资金池比例，实现不会被清算的杠杆产品

## 关键数据
- 目标 USDC 本位年化 20% 左右
- GLP 构成：40+% 波动资产 + 50+% 稳定资产
- 每9小时 rebalance 一次，rebalance 数额约基金1%
- Mycelium 每8小时执行一次调整

## 竞争优势 / 护城河
- 创新性地将 GLP（DEX 流动性提供）与杠杆代币对冲结合，构建接近 Delta Neutral 的高收益低风险产品
- 购买了 Insurace 保险覆盖 GLP 的安全事件风险
- 产品对四方（Umami Finance、GMX、Mycelium、投资者）均有利

## 风险 / 争议
- Mycelium 曲线模拟在行情剧烈波动时产生偏差——做空代币涨幅未达到应有表现
- 2022年8月18-19日 USDC Vault 产生重大损失，团队决定关闭并以自有资金补偿用户
- 保险不覆盖 Mycelium 部分
- 每9小时 rebalance 一年累计费用可能高达总金额的数个百分点
- GLP 大规模 withdraw/deposit 造成比例失衡导致 rebalance 额外成本

## 相关事件时间线
- 2022-08-19: 因 Mycelium 杠杆代币算法偏差导致重大损失，Umami 关闭 USDC Vault，以团队资金补偿受损用户
- 关闭时公告正在研究第二版本

## 相关实体
- [[gmx]] — GLP 流动性提供模块
- [[arbitrum]] — 部署网络
- Mycelium（Tracer DAO）— 杠杆代币对冲模块（无独立实体页）
- Insurace — 保险提供方（无独立实体页）

## 来源
- [[来源_2022-08_链上基金_DeFi资管_iZUMi]]
