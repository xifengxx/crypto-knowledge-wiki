---
type: entity
entity_type: protocol
created: 2026-06-28
updated: 2026-07-02
tags: [defi, restaking, ethereum, infrastructure]
---

# EigenLayer

## 基本信息
- 定位：以太坊再质押（Restaking）协议
- 核心创新：让 ETH 质押者将已质押的 ETH "再质押"为其他协议提供安全，赚取额外收益
- 范式意义：从"每协议自己建安全"→"共享安全池"
- 融资：a16z $100M（2024.02）+ Blockchain Capital 领投 $50M A轮（2023.03）
- 主网上线：2024年Q1分阶段上线（Holesky测试→运营商注册→EigenDA→恢复存取款）

## 核心业务
- **三方市场**：再质押者（LST/原生ETH）→ 节点运营商（验证者）→ 主动验证服务AVS（EigenDA/跨链桥/预言机/排序器等）
- **汇集安全性**：通过再质押的ETH保护新模块，使腐败成本(CoC)从最小质押量增加到质押总和
- **自由市场治理**：验证者自行权衡风险回报选择保护哪些AVS
- **AVS生态**：EigenDA（首个AVS/DA层）、Espresso（去中心化排序器）、AltLayer（RaaS+再质押汇总）、Lagrange（轻客户端）、Hyperlane（链间通信）、Near（快速最终确认层）、Omni（跨汇总通信）、Lumoz（zkProver/zkVerifier ZK计算层）、**ERC-8004 Agent 验证**（正在将 8004 集成到 200+ AVS，验证者质押 ETH 担保，虚假验证则罚没资产）
- **再质押汇总（AltLayer）**：三个垂直整合AVS——VITAL（去中心化验证）+ MACH（快速最终确认+跨链互操作）+ SQUAD（去中心化排序）
- **分阶段上线**：阶段1质押者（2023.6启动/12种LST）→ 阶段2运营商+EigenDA（2024H1主网）→ 阶段3更多AVS+支付+罚没（2024H2）

## 市场数据
- TVL峰值：取消充值上限后5天内从$2B→$6B（+180%），截至2024年3月>$7.5B，成为第四大DeFi DApp
- ETH质押率：~25%（vs Solana/ADA/Avax >50%），再质押可能推动突破30%
- EigenDA合作：Arbitrum Orbit、OP Stack、8家汇总基础设施提供商启动合作伙伴计划

## 以太坊基金会的约束
- Vitalik 于 2023 年 5 月（Eigenlayer 完成 $50M 融资后）专门撰文《Don't overload Ethereum's consensus》，用一系列例子阐述以太坊共识应如何被复用，实质是对 restaking 方向的约束
- 以太坊基金会研究员 Justin Drake 和 Dankrad Feist 很早就被 Eigenlayer 聘请为顾问。Dankrad Feist 表示加入的主要目的就是使"Eigenlayer 与以太坊对齐"
- 这可能是 Eigenlayer 的 native restaking 流程（需用户自行完成以太坊质押全流程、配置客户端、设置取款凭证等）故意设计得复杂的原因——防止 Eigenlayer 直接吸纳用户 ETH 进行质押，避免与 Lido 等 LST 协议正面竞争

## 风险考量
- 验证者串通：同时攻击多个AVS可能经济可行
- 意外罚没：编程错误/智能合约安全问题
- 杠杆滑坡：用户可能借入资金→再质押→作为抵押品循环
- Vitalik立场："不要让以太坊共识过载"，以太坊不能对应用层事故负责
- 可持续性：空投挖矿驱动TVL占比？主网上线后资金会否回流？

## 为什么重要
- 改变了新协议启动的方式——不需要自建验证者网络，直接租用以太坊安全
- 与 Celestia 竞争 DA 赛道
- LSD + Restaking = 以太坊安全的经济化

## Solana 对比：外源性 vs 内源性 AVS
- [[solayer]] 采用**内源性 AVS**模式——服务 Solana 内部 DApp 的区块空间需求，类似高速公路收费站
- EigenLayer 采用**外源性 AVS**模式——对外提供共享安全服务（跨链桥/预言机/Rollup）
- 两种范式：EigenLayer 的天花板更高但需要培育 AVS 生态；Solayer 商业闭环更短但受限于 Solana 生态边界

## 相关概念
- [[liquid-staking]] — EigenLayer 的生长土壤
- [[data-availability]] — EigenDA vs Celestia（待创建）
- [[layer2]] — L2 可以使用 EigenDA 做数据可用性
- [[solayer]] — Solana Restaking，内源性 AVS 范式

## 风险 / 争议
- 2024 年 10 月被 0xLouisT 点名：EigenLayer 存在"允许投资者质押处于锁定状态的代币并随时领取质押奖励"的做法，这使早期投资者在代币解锁前就能提前获利——属于"幽灵代币经济学"的六种内幕交易类型之一（来源：[[来源_2024-10_幽灵代币经济学_内幕交易_0xLouisT_Odaily]]）

## 来源
- Binance LSDFi 研报
- [[来源_2024_Solayer_Restaking_好生意]]
- [[来源_2024-03_EigenLayer主网上线_DVT]]
- [[来源_2024-11_以太坊_Solana_Staking商业模式差异_MintVentures]]
- [[来源_2024-08_以太坊VC基建痴迷_EBOLA_Solana_BlockBeats]] — 被点名批评：融资 $1.71 亿但未产生重大影响/收入，VC+内部人士持有 55% 代币，是"低影响高 FDV"基础设施泡沫典型案例
- [[来源_2024-08_Babylon主网上线_BTCFi赛道再思考]] — Babylon 与 EigenLayer 的安全模型对比：EigenLayer 的 ETH 质押者本身就是 PoS 共识维护者（安全责任链连续），Babylon 的 BTC 质押者是资产被动持有者（矿工才是安全维护者），EigenLayer 的安全逻辑更自洽
- [[来源_2023-12_多Rollup世界_基础设施_SevenX]] — EigenLayer 三类信任模型精确区分（经济信任/去中心化信任/以太坊包含信任）；在 Rollup 安全（中继/监测/排序/MEV保护/EigenDA）、互操作（EigenSettle/桥接）、成本（证明者网络）三大领域的全景应用；否决委员会作为早期风险缓解机制；Ion Protocol 再质押资产 DeFi 化；Rio Network/Renzo 降低再质押参与门槛
- [[来源_2024-05_Lumoz_zkProver_zkVerifier_EigenLayer_ChainCatcher]] — Lumoz 基于 EigenLayer 推出 zkProver/zkVerifier AVS 计算层，ZK 计算成为新的 AVS 服务类别
- [[来源_2024-09_EigenDA如何变革Rollup经济学_金色财经]] — EigenDA 定价策略（按需 0.015 ETH/GB + Tier 1 年费 70 ETH）、收入模型（目标 $160K/月需 11 个付费 rollup）、DA 成本降低 ~99% 但价值捕获有限的核心矛盾
- [[来源_2025-10_ERC-8004_AI_Agent_信任层_深潮]] — EigenLayer 将 ERC-8004 集成到 200+ AVS 作为 Agent 验证服务的经济安全层
- [[来源_2025-02_空投市场_三大矛盾_深潮TechFlow]] — EigenLayer的快照风波被引述为积分空投存在老鼠仓嫌疑的典型案例
- [[来源_2025-02_Yap-to-Earn_BERA空投_PANews]] — 作者以 EigenLayer EIGEN 空投为例说明 Yapping 的长期回报
