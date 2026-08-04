---
type: entity
entity_type: protocol
created: 2026-06-28
updated: 2026-07-02
tags: [infrastructure, da, modular]
---

# Celestia

## 基本信息
- 定位：首个模块化数据可用性（DA）区块链
- 联合创始人：John Adler（同时为 Fuel Labs 联合创始人，前 ConsenSys Layer2 可扩展性研究员）
- 只做 DA + 共识，不做执行
- 竞争对手：Ethereum L1 DA、EigenDA、Avail

## 核心业务
为 Rollup 提供数据可用性层。Rollup 将交易数据发布到 Celestia，Celestia 确保数据可被任何人验证，但不执行交易。模块化设计让 Rollup 可以"租用"DA 而不是自己建。

## 关键数据
- TIA 代币，2023 年底空投
- 市值排名前 50

## 相关概念
- [[data-availability]] — Celestia 是该赛道的开创者
- [[eigenlayer]] — EigenDA 是主要竞争对手
- [[layer2]] — Celestia 的主要客户

## 风险 / 争议
- 2024 年 10 月被 0xLouisT 点名：Celestia 存在"允许投资者质押处于锁定状态的代币并随时领取质押奖励"的做法，这使早期投资者在代币解锁前就能提前获利——属于"幽灵代币经济学"的六种内幕交易类型之一（来源：[[来源_2024-10_幽灵代币经济学_内幕交易_0xLouisT_Odaily]]）

## 来源
- DA 赛道分析文章
- [[来源_2022-07_模块化执行_Fuel_UTXO_并行交易]] — 其联合创始人 John Adler 同为 Fuel Labs 联合创始人，阐明模块化区块链堆栈中 DA（Celestia）与执行层（Fuel）的协同关系
- [[来源_2022-06_Celestia数据可用性_欺诈证明_W3Hitchhiker]] — W3 Hitchhiker 白皮书级技术解析：二维 RS 纠删码 + 双欺诈证明（状态转换无效 + 错误扩展数据）+ 随机抽样验证机制，写于 2022 年 6 月 Celestia 主网上线前
- [[来源_2023-09_模块化区块链_7个神话_Avail]] — Avail 官方博客将 Celestia 并列为 DAS 支持的模块化 DA 竞争方案，间接印证 Celestia 在模块化叙事中的核心地位
- [[来源_2024-10_幽灵代币经济学_内幕交易_0xLouisT_Odaily]] — 被点名：存在 PoS 网络"锁定代币质押奖励随时领取"的透明度问题
- [[来源_2024-09_EigenDA如何变革Rollup经济学_金色财经]] — 费用收入数据揭示 DA 赛道价值捕获困境：尽管 20 个 rollup 集成 + $55B FDV，Celestia 自推出以来仅产生 ~4,091 TIA（$21K-$35K）费用收入；Eclipse 占其 blob 份额 86%
- [[来源_2022-07_Celestia_模块化区块链]] — 2022 年中（主网上线前 16 个月）的早期全面架构介绍
- [[来源_2022-07_10个新Layer1_熊市布局_Odaily]] — 早期媒体覆盖：Celo宣布迁移至Celestia作为L2 Rollup（2022年4月）、模块化共识+执行解耦构架、PoS质押代币计划、2022测试网/2023主网路线图
