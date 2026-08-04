---
type: source
source_type: article
url: https://zhuanlan.zhihu.com/p/630970049
author: PANews
date: 2023-05
ingested: 2026-06-29
updated: 2026-07-02
---

# Centrifuge：RWA 龙头业务模式与产品组件拆解

## 阅读证据
- 总行数: 84
- Q1 (前25%): Centrifuge Chain 于 2022 年 1 月赢得 Polkadot 第 8 次插槽拍卖，为 RWA 专属链提供低手续费和专用区块空间
- Q3 (中后25%): Centrifuge 与 SEC 许可机构 Securitize 合作完成 KYC/AML 流程，投资者与 SPV 签订投资协议后可用 DAI 购买 DROP/TIN 代币
- Q4 (最后25%): MakerDAO 相关资金池共约 1.61 亿美元，占 Centrifuge TVL 的 80%，最大资金池为 BlockTower Series 3/4
- 图片: 2 张（文中内嵌截图，外部 URL 不可用）

## 核心要点

1. **Centrifuge 是 RWA 领域业务最全面的项目**：拥有自己的专属 L1（Centrifuge Chain，基于 Substrate/Polkadot 第 8 次插槽拍卖获得）。专属链的优势：低 Gas、专用区块空间处理 RWA 交易、能定义交易顺序——网络拥堵时也能正常处理 RWA

2. **Tinlake = RWA 的结构化融资引擎**：DROP（优先级/固定利率/低风险）和 TIN（次级/浮动利率/高风险）两层 ERC20 代币分割风险和回报。TIN 有最低认购比例——如果次级资本不够，优先级也无法购买

3. **合规框架 = 美国资产证券化法律 + SPV**：每个资产发起人需设立独立 SPV。资产已出售给 SPV→即使发起人破产也不影响 SPV 资产→保护投资人。基于 1933 年证券法 D 条款 506(b)/(c)。与非美国投资者合作时需重新设计法律结构

4. **MakerDAO 占 Centrifuge TVL 的 80%（$1.61 亿）**：BlockTower 系列资金池最大。与 Maker Vault 集成的好处——用户赎回时可直接通过 Vault 提取→个人债务转移给 Vault。Aave RWA 借贷池仅 $762 万（$341 万 USDC 存款+$278 万借款）

## 关键数据

- Centrifuge TVL $2.01 亿（2023.5），链上私人信贷活跃贷款 #1
- MakerDAO 相关资金池 $1.61 亿，占 TVL 80%
- Aave RWA 池：总存款 $762 万（USDC $341 万），借款 $278 万
- 目前无协议费用（链上投票 100% 赞成开启费用但未执行）
- CFG 代币：Gas + 治理 + 安全质押

## 与已有知识的关系

- **与 [[makerdao]] 深度关联**：Maker 80% RWA 敞口通过 Centrifuge 实现
- **与 [[rwa]] 概念页关联**：Centrifuge 是 RWA 基础设施的完整案例——从链到法律结构到融资平台
- **与 [[securitize]] 互补**：Securitize 做合规/KYC，Centrifuge 做资产代币化和结构化

## 值得记住的引用

> "Centrifuge 认为针对 RWA 的专属区块链有诸多优势——较低的交易手续费、出色的可扩展性、专用的区块空间。"

## 我的笔记

Centrifuge 是 RWA 赛道"全栈"模式的代表——从底层链到融资平台到法律结构，全部自己建。这和 Securitize 的"中间件"模式形成对比。2023→2025 年看，Securitize 的模式赢了（BUIDL/ACRED/VBILL 都跑在 Securitize 上），而 Centrifuge 的专属链路线证明太重——专属 L1 的生态吸引力远不如直接部署在以太坊/Solana 上+用中间件解决合规。
