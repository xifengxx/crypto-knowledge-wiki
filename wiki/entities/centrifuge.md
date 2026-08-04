---
type: entity
entity_type: protocol
created: 2026-06-29
updated: 2026-06-30
tags: [rwa, lending, polkadot]
---

# Centrifuge

## 基本信息
- 定位：RWA 领域业务最全面的项目，链上私人信贷活跃贷款 #1
- TVL：$2.01 亿（2023.5），80% 来自 MakerDAO 相关资金池
- 底层链：Centrifuge Chain（基于 Substrate，Polkadot 第 8 次插槽拍卖）
- 融资平台：Tinlake

## 核心业务

### Tinlake — RWA 结构化融资平台
- **DROP 代币**（优先级）：固定利率，低风险低回报，优先受偿
- **TIN 代币**（次级）：浮动利率，高风险高回报，承担首损
- TIN 有最低认购比例——次级不够则优先级也无法购买

### 融资流程
资产发起人→设立 SPV→铸造 NFT 代表抵押品→Tinlake 池铸造 DROP/TIN→投资者用 DAI 购买→SPV 将 DAI 兑换为美元→转给借款人

### 合规框架
- 基于 1933 年美国证券法 D 条款 506(b)/(c)
- 每个资金池对应独立的 SPV（资产隔离，发起人破产不影响 SPV）
- 与 [[securitize]] 合作完成投资者 KYC/AML

## 关键数据
- 与 MakerDAO：$1.61 亿资金（占 TVL 80%），BlockTower 为最大发起人
- 与 Aave：$762 万 RWA 借贷池
- CFG 代币：Gas + 治理 + 安全质押
- 目前无协议费用（社区投票 100% 赞成开启）

### Solana 扩展（2025.5）
- 推出 deRWA 代币标准，首个 Solana 代币 deJTRSY 代表 Anemoy 管理的 $4 亿短期美债基金
- deRWA 资产可在 Solana DeFi 生态中自由转移：Raydium (DEX)、Kamino (借贷)、Lulo
- 消除 RWA 代币流动性中长期存在的摩擦——机构级基金可组合到高速 DeFi 基础设施
- Centrifuge 还为 Solana 上私人信贷池提供支持

### Centrifuge V3（2025 年初）
- 代币化 $2.3 亿 Janus Henderson 国债基金，通过 Wormhole 跨链至其他公链
- 这些代币可在 DeFi 货币市场中作为借款侧的抵押品使用
- 展示了 RWA 与 DeFi 可组合性的新高度——传统资产管理公司的产品可直接成为链上抵押品

## 相关实体
- [[makerdao]] — Centrifuge 80% TVL 来源
- [[securitize]] — 合规伙伴
- [[solana]] — 2025 年扩展目标公链（deRWA 代币标准）
- [[rwa]] — 赛道概念

## 融资历史
- 2018-2024年五轮融资共获3,080万美元
- 知名VC：ParaFi Capital、IOSG Ventures 等
- 1,514份资产完成代币化，融资总资产636M美元，同比TVL增长23%（但随后大幅下滑）

## 发展问题
核心数据如TVL在2022年熊市影响及2024年项目预期落空等因素共同作用下持续下滑，TVL一度跌至仅497,944美元（远低于2023年高峰$2.01亿），暴露RWA项目对市场周期的强依赖。

## 来源
- [[来源_2025-04_链上借贷_低抵押贷款_Reflexivity]] — Centrifuge V3 代币化 $2.3 亿 Janus Henderson 基金并跨链
- [[来源_2024-07_RWA前世今生_真实资产崛起_PANews]] — 融资历史/技术架构/TVL下滑数据
- [[来源_2023_Centrifuge_RWA_业务模式拆解]]
- [[来源_2023-07_RWA代币_全面指南_BeInCrypto]] — Centrifuge作为RWA领军平台，tranching机制允许用户选择风险/收益级别，DROP和TIN为核心代币
- [[来源_2023-08_RWA实现路径_OffChain-OnChain_美债代币化]] — MIP6改进后的受托人+LockBox隔离结构/RWA002/RWA012/RWA013 Vault详情/与MakerDAO的DROP+TIN代币化融资流程
- [[来源_2025-07_Messari_Solana_RWA_赛道]] — Solana 扩展 + deRWA 代币标准 + deJTRSY 产品
- [[来源_2023-04_RWA_大机构布局_币安高盛_ChainCatcher]] — 最早涉足RWA的DeFi协议之一/MakerDAO&Aave的技术提供方/2022.12联合设立2.2亿美元基金/Tinlake结构化融资流程(NFT抵押→带息ERC20→DAI购买→到期赎回)
- [[来源_2024-09_RWA六大核心资产_OKX_Ventures_深潮TechFlow]] — 定位为撮合平台模型(区别于Maple/TrueFi直接放贷)/平均年化8.7%超AAVE的4-5%/与Morpho结合支持抵押借贷
- [[来源_2025-05_Ondo_RWA龙头_代币估值_深潮TechFlow]] — Centrifuge专注私募信贷RWA（中小企业贷款），TVL $4.09亿（5.96%份额），月增速222.66%，年化5-10%+；与Ondo形成差异化竞争（Ondo侧重高流动性美债）
