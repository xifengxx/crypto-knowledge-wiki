---
type: entity
entity_type: project
created: 2026-07-01
updated: 2026-07-01
tags: [depin, restaking, defi, filecoin]
---

# Parasail

## 基本信息
- 赛道: DePIN / 再质押协议 (Restaking)
- 定位: 专门为DePIN服务的再质押协议
- 当前支持链: Filecoin（计划扩展至IoTeX、Arbitrum、以太坊）
- 核心机制: 激活成熟网络中的闲置质押资产，为DePIN服务提供经济保证

## 核心业务/产品
- **质押FIL代币化**: 存储提供商质押FIL并按1:1比例铸造pFIL代币
- **pFIL开放市场**: 存储提供商出售pFIL获取流动性，代币持有者购买pFIL获得FIL挖矿回报
- **风险回收与奖励分配**: 质押FIL释放或矿工获区块奖励时，Repl协议回收FIL并通过拍卖回购pFIL，多余收益作为奖励分配
- 解决的问题: DePIN项目广泛采用和信任建设困难且成本高昂，Parasail通过激活闲置资产为DePIN服务提供经济保证

## 关键数据 (2024年9月)
- TVL: 超6,000万美元（Defillama数据）
- 上线前两周TVL突破1,000万美元
- 目前主要服务Filecoin链上的再质押

## 竞争优势/护城河
- DePIN+再质押的细分赛道定位，与EigenLayer等通用再质押协议形成差异化
- 解决了DePIN项目冷启动阶段的经济信任问题
- pFIL设计为存储提供商提供了新的流动性解决方案（类似Lido的stETH逻辑但面向DePIN场景）

## 风险/争议
- TVL集中在单一链（Filecoin），多链扩展计划尚未落地
- pFIL的流动性和定价机制在实践中可能面临滑点问题
- DePIN再质押的市场需求尚未被大规模验证，目前更像叙事驱动

## 相关实体
- [[depin]] — Parasail定位为DePIN基础设施层的再质押服务
- [[filecoin]] — 第一个支持的链，FIL质押是其TVL来源

## 来源
- [[来源_2024-12_DePIN现在与未来_中间件_应用层_PANews]] — 将 Parasail 定位为 DePIN 中间层流动性方案，确认 FIL→pFIL 1:1 铸造机制和多链扩展计划（IoTeX/Arbitrum/以太坊）
- [[来源_2024-09_DePIN_双重曲线_价值网络_深潮TechFlow]]
