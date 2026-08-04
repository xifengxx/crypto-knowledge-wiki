---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [bitcoin-ecosystem, l1, layer2, payment]
aliases: [CKB, Nervos Network, Common Knowledge Base]
---

# Nervos CKB

## 基本信息
- 类型: protocol
- 定位: L1 blockchain with cell model (extended UTXO), also acting as BTC L2 verification/DA layer
- 成立时间: 2018
- 核心团队: Jan Xie（前以太坊核心开发者）、Kevin Wang 等
- 融资: ~$28M 私募（2018）+ ~$10M 来自 Polychain Capital（2019）
- 主要投资方: Polychain Capital、红杉中国 等
- 共识机制: Eaglesong PoW

## 核心业务/产品

1. **CKB L1 公链**：采用独创的 Cell 模型（扩展型 UTXO），结合 PoW 共识机制，支持图灵完备的智能合约。Cell 模型在保留 UTXO 模型并行性和原子性的基础上，加入了状态存储和可编程能力。

2. **RGB++ 协议**：CKB 团队在 2024 年初提出的 RGB 协议演进方案。通过"同构绑定（Isomorphic Binding）"将 CKB 的扩展型 UTXO 作为 RGB 资产数据的容器，由 CKB 共识节点替代用户进行数据验证。用户无需跨链即可直接用比特币账户操作自己在 CKB 链上的 RGB 资产容器。支持交易折叠功能——多笔 RGB 转账可合并为 1 个比特币链上 Commitment，降低使用成本。

3. **Fiber Network（光纤网络）**：2024 年 8 月发布的基于 CKB 的链下支付通道网络，定位为 BTC L2 的支付层。核心组件包括支付通道、WatchTower 瞭望塔、多跳路由（PTLC）和跨域支付。相比 BTC 闪电网络拥有 7 项优化：多资产原生支持（CKB/BTC/稳定币）、低手续费、高响应速度、PTLC 隐私保护、替代交易循环攻击免疫、Daric 存储优化、Mercury 链下流动性注入。

4. **.bit 域名**：构建在 CKB 上的多链域名服务。定位为无公链标签的多链域名，支持绑定多种公链地址。

## 关键数据
- CKB 价格表现：2024 年 8 月 23 日 Fiber Network 发布当日，CKB 价格单日上涨约 **30%**
- BTC 闪电网络可争夺市场：约 **$3 亿+** 锁定资金、**~1.2 万**节点、**~5 万**条支付通道（截至 2024 年 8 月）
- Fiber 计划节点规模：宣称将设置 **10 万个** 物理节点
- 通道开通成本对比：BTC 约 **$10** 开 $100 通道（占比 10%）vs CKB **美分级别**
- 多资产支持：原生支持 CKB、BTC、RGB++ 稳定币
- RGB++ 支持 UTXO 公链：CKB、Cardano、Fuel（但实际生态几乎完全绑定在 CKB 上）
- 融资总额：约 **$38M**（$28M 私募 + $10M 战略轮）

## 竞争优势 / 护城河

1. **技术差异化**：独创 Cell 模型在 UTXO 生态中提供可编程性，这是 EVM 系公链无法做到的。同构绑定依赖 UTXO 模型，EVM 的账户模型天然不适配，CKB 在此场景拥有结构性优势。

2. **BTC L2 叙事卡位**：通过 RGB++ + Fiber 双轮驱动，CKB 同时占据 BTC 生态的资产层（RGB++ 作为资产协议）和支付层（Fiber 作为闪电网络的升级替代）。这个定位是 BTCFi 叙事在 2024-2025 年的核心主线之一。

3. **技术优势 vs BTC 原生方案**：Fiber 在 7 个维度上优于 BTC 原生的闪电网络——尤其是多资产原生支持、美分级手续费、PTLC 隐私改进和替代交易循环攻击免疫。CKB 的高 TPS 和低费用使其在支付场景中有显著的 UX 优势。

4. **RGB++ 生态先发**：作为 RGB++ 的提出者和首要实现平台，CKB 天然成为 RGB 资产生态的核心结算层。

## 风险 / 争议

1. **信任降级争议**：RGB++ 将原始 RGB 协议的 "trustless 客户端验证" 降级为 "trust CKB 共识"，新增了信任假设。虽然用户可在 RGB（隐私优先）和 RGB++（DeFi 友好）模式间切换，但实际切换意愿存疑。

2. **网络效应冷启动问题**：BTC 闪电网络已有 $3 亿+ 锁定资金和成熟的网络效应，Fiber 作为后来者需大量激励才能吸引流动性。10 万物理节点的目标规模宏大，但类似 HNT/Helium 的前车之鉴表明去中心化物理基础设施的冷启动十分困难。

3. **市值和流动性支撑不足**：CKB 自身的市值和代币流动性相对 BTC L2 叙事所需的市场深度存在差距。市场对 BTC L2 概念的投资热情可能存在周期性波动。

4. **生态绑定风险**：RGB++ 理论上支持 Cardano、Fuel 等 UTXO 公链同构绑定，但实际生态几乎完全集中在 CKB 上。如果任一备选链获得更大采用，CKB 的先发优势可能被稀释。

## 相关实体
- [[rgb-protocol]] — RGB++ 是 RGB 协议的演进方案，CKB 是首要实现平台
- [[bitcoin]] — CKB 的核心叙事是 BTC L2（资产层+支付层）
- [[cardano]] — 同为 RGB++ 同构绑定的目标 UTXO 公链之一
- [[lightning-network]] — BTC 原生闪电网络，Fiber 的直接竞争对手/互补方案
- [[taproot-chain]] — 同为 BTC L2 赛道竞争者
- [[stacks]] — BTC L2 竞争者（Clarity 智能合约）
- [[merlin-chain]] — BTC L2 竞争者（基于 BRC-20 生态）
- [[babylon]] — BTC 质押基础设施，与 CKB 的 BTCFi 叙事互补
- [[cmb-international]] — 2018年CKB投资方，2021年联合发起5000万美元InNervation生态基金；招银国际还促成了Nervos与招商银行体系内的合作（协助研发开放式许可链）

## 来源
- [[来源_2024-08_Fiber_CKB闪电网络升级方案_极客Web3]] — Fiber 网络技术详解与 BTC 闪电网络对比
- [[来源_2024-04_RGB_RGB++协议设计_同构绑定_VICOINDAO]] — RGB++ 协议设计与同构绑定机制
- [[来源_2022-11_Web3域名价值分析_ENS对比]] — .bit 域名构建在 CKB 上
- [[rgb-protocol]] — RGB++ 作为 CKB 核心协议的详细描述
