---
type: entity
entity_type: company
created: 2026-07-02
updated: 2026-07-02
tags: [stablecoins, payment, infrastructure]
aliases: [Bridge, 稳定币后端]
---

# Bridge

## 基本信息
- 赛道：稳定币支付基础设施 / 稳定币编排服务
- 核心业务：为企业提供将稳定币支付集成到已有系统的基础设施 API
- 收购方：[[stripe]]，2024 年 10 月以 11 亿美元收购
- 收购后状态：继续独立运营

## 核心业务/产品
Bridge 提供三项核心服务，开发者只需几行代码即可访问：

1. **稳定币编排功能**：让企业能够转移、存储和接受各类稳定币，同时由 Bridge 负责合规和监管要求
2. **货币承兑功能**：使企业能够将当地的法币兑换成稳定币
3. **转账功能**：支持美元和欧元的全球资金流动和账户创建

## 关键数据
- 稳定币金融账户已在 **101 个国家**运营
- 允许企业以 USDC 和 **USDB**（Bridge 的稳定币）持有余额
- 通过传统银行和加密网络接收资金
- 与 Visa 合作推出全球首个稳定币卡发行产品（合作伙伴包括 Ramp、Squads、Airtm）
- 持卡人可在全球接受 Visa 的 1.5 亿商户处使用稳定币余额消费

## 实际应用场景
- **SpaceX**：通过 Starlink 使用 Bridge 将在阿根廷赚取的收入以美元形式汇回美国
- **尼日利亚用户**：通过 Bridge 的轨道支付 YouTube Premium 和 ChatGPT 费用
- **美国小型企业**：无需担心国际银行的复杂性，即可接受全球稳定币支付

## 在 Stripe 稳定币战略中的角色
Bridge 与 [[privy]]（2025 年 6 月被 Stripe 收购的嵌入式钱包提供商）形成互补：
- Bridge：负责合规法币出/入金通道、稳定币托管、支付渠道
- Privy：负责链上非托管钱包基础设施
- 两者整合使 Stripe 在 Fiat & Crypto 堆栈各层面提供完整工具

## 相关实体
- [[stripe]] — 收购方，整合 Bridge 与 Privy 构建完整稳定币堆栈
- [[privy]] — 被 Stripe 同日收购的嵌入式钱包基础设施，提供链上自托管能力

## 相关概念
- [[stablecoins]] — Bridge 核心业务围绕稳定币编排和支付
- [[payfi]] — Bridge 的稳定币支付基础设施是 PayFi 企业级实践的核心组件

## 来源
- [[来源_2025-06_Stripe收购Privy_稳定币钱包_深潮TechFlow]] — Bridge 三项核心服务详解、101 国运营数据、Visa 稳定币卡合作、实际应用场景
- [[来源_2024-10_AI一小时研报_支付赛道_5个Prompt_Web3Brand]] — Bridge $11 亿收购验证稳定币支付基础设施价值
