---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [l1, cosmos, defi, stablecoin]
---

# Canto

## 基本信息
- 类型: Layer 1 区块链（基于 Cosmos SDK）
- 定位: 自带 DeFi 功能组件的 Layer1 网络
- 核心技术: Cosmos SDK
- 成立时间: 2022 年（测试阶段）
- 关键组件: 分叉于 Compound 的借贷市场、分叉于 Solidly 的 DEX、NOTE 稳定币

## 核心业务/产品
Canto 是一条基于 Cosmos SDK 搭建的 Layer1 网络，与其他 Layer1 不同之处在于：Canto 自带三个核心 DeFi 功能组件：
- **借贷市场**: 分叉于 Compound
- **DEX**: 分叉于 Solidly
- **NOTE 稳定币**: 全新稳定币，通过超额抵押 ETH/ATOM/CANTO 资产生成，而非直接 mint

NOTE 的设计机制：通过借贷市场超额抵押生成，有效锚定由借贷市场利率调整和 DEX 稳定币激励池共同维护。NOTE 将成为 Canto 链上（及 Cosmos 生态内）优先级最高的稳定币。

## 竞争优势 / 护城河
- UST 暴雷后 Cosmos 生态去中心化稳定币市场出现缺口，NOTE 意图填补这一空白
- NOTE 吸取了 UST 的教训（超额抵押替代算法抵押，借贷替代 mint），设计更为稳健
- 三个 DeFi 组件形成有机结合：NOTE 由借贷生成、DEX 提供流动性支持、借贷市场通过利率维护锚定

## 风险 / 争议
- 仍在测试阶段，实际运行效果未经验证
- 分叉代码是否足够差异化以吸引流动性
- Cosmos 生态稳定币竞争格局（多种稳定币方案同在）
- 公链竞争激烈，作为小众 L1 获取用户和流动性难度大

## 相关实体
- [[celestia]] — 同为 Cosmos 生态基础设施，但定位完全不同（DA 层 vs 应用链）

## 相关概念
- [[defi]] — Canto 核心为 DeFi 功能组件
- [[stablecoins]] — NOTE 稳定币设计

## 来源
- [[来源_2022-07_10个新Layer1_熊市布局_Odaily]]
