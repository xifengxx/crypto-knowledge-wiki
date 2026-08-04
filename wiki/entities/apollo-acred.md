---
type: entity
entity_type: project
created: 2026-06-29
updated: 2026-06-29
tags: [rwa, private-credit, tokenized-fund, solana, trad-fi]
---

# Apollo ACRED（代币化多元化信贷基金）

## 基本信息
- 发行方：阿波罗全球管理公司（Apollo Global Management），全球最大另类资管公司之一
- 底层资产：阿波罗多元化私人信贷基金（$10 亿+ 规模）
- 代币化平台：[[securitize]]（作为受监管 sToken 发行）
- 上线时间：2025 年 5 月在 Solana 推出
- Solana 上市值：$2,690 万（2025.7），8 名持有者
- Solana RWA 市值排名：第 3 位（仅次于 USDY 和 OUSG）

## 核心业务
ACRED 代币代表对公司贷款和其他私人信贷工具组合的权益。面向合格投资者，通过 Securitize 合规框架实现链上发行。

## DeFi 集成
- **Kamino Finance**：持有者可将 ACRED 作为抵押品借入 USDC 等稳定币
- **Drift Institutional**：机构流动性池（ACRED-USDC/ACRED-USDT），支持以 ACRED 借入稳定币并实施杠杆策略
- 将传统非流动性资产转变为可组合的 DeFi 抵押品

## 竞争优势
1. **顶级品牌背书**：Apollo 是华尔街顶级另类资管（管理 ~$6,500 亿资产）
2. **多元化敞口**：不限于国债，而是覆盖公司贷款等多元私人信贷
3. **DeFi 可组合性**：是首批实现"传统私募信贷 → DeFi 抵押品"闭环的产品

### sACRED：ERC-4626 合规版本的创新
a16z在指南中详细介绍了ACRED的DeFi集成机制：通过Securitize协助创建sACRED（ACRED的ERC-4626合规版本），投资者可以在Morpho（去中心化借贷协议）上实施杠杆循环策略。sACRED将传统非流动性私募信贷转变为可组合的DeFi抵押品，实现了链下世界无法实现的收益增强策略。

## 风险
- 私人信贷的信用风险（底层贷款可能违约）
- 合格投资者限制（仅 8 名持有者），流动性极低
- 依赖 Securitize 的合规框架和 KYC/AML 流程

## 相关实体
- [[securitize]] — 代币化平台 + 合规网关
- [[kamino]] — 借贷抵押集成
- [[drift]] — 机构流动性池
- [[blackrock-buidl]] — 同为机构级代币化基金，但 BUIDL 是国债，ACRED 是私人信贷

## 来源
- [[来源_2025-06_Solana_RWA_全面概述_Helius]] — ACRED 基金详细构成（63% 企业直接贷款/26% 优质信贷/10% 资产支持贷款），Kamino Multiply 集成和 Drift Institutional 杠杆池实操细节，~9.5% APR 数据
- [[来源_2025-07_Messari_Solana_RWA_赛道]]
- [[来源_2025-08_a16z_银行_资管_Fintech_区块链转型_深潮TechFlow]] — sACRED的ERC-4626合规版本及其在Morpho上实现杠杆循环策略的详细描述，Apollo代币化私人信贷基金作为"包装代币"与DeFi集成的案例
