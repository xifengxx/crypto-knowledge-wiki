---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [l1, infrastructure, modular, interoperability]
aliases: [Cosmos Hub, Cosmos生态, Cosmos Network]
---

# Cosmos

## 基本信息
- 定位：应用链（App-Chain）蓝图平台，不是单一区块链而是构建应用特定区块链的框架
- 核心组件：Cosmos SDK（开发区块链的框架）、Tendermint（共识引擎）、IBC（跨链通信协议）、CosmWasm（智能合约）
- 核心开发者：Informal Systems（开发了 ICS、Cosmos SDK、Tendermint、IBC、CosmWasm）
- 代币：ATOM（Cosmos Hub 的质押代币）
- 启动时间：2019 年 3 月（Cosmos Hub 主网）

## 核心业务/产品

### Interchain Security (ICS)
2023 年初推出的共享安全模型。消费者链（应用链）通过治理提案获批后，可以借用 Cosmos Hub 的验证者集合和质押 ATOM 安全性（当时 $2.74B），无需自建验证者集合。消费者链保留大部分 Gas 费，只需向 Hub 支付安全服务费。消费者链未来可选择脱离 Hub 成为完全主权链——ICS 本质上是一个"应用链启动服务"。

首批消费者链：Neutron（智能合约平台）、Stride（流动性质押）、Duality（DEX）。

### 应用链生态
Cosmos 的定位是让开发者部署应用特定区块链而非在通用智能合约平台上构建 dApp。代表链包括 Osmosis（DEX，TVL 曾进入前 15）、dYdX（2023 年从以太坊迁移至 Cosmos SDK 独立链）、Sei、Injective 等。

### IBC（跨链通信协议）
Cosmos 生态内链之间的标准化通信协议，也正在扩展到其他 L1（如 Polkadot、Ethereum via Polymer）。

## 关键数据
- Cosmos Hub 质押 ATOM 市值：$2.74B（2023年2月）
- ICS 激励测试网：2022年11月完成
- 竞争对手以太坊质押市值：$27.7B（2023年2月），约 2.8x

## 核心张力：技术优势 vs 代币价值捕获缺失

Cosmos 长期面临一个根本性矛盾：技术架构（SDK + Tendermint + IBC）是公认优秀的，但 ATOM 代币缺乏价值捕获机制。应用链使用 SDK 构建但不一定使用 Cosmos Hub 或 ATOM 作为 Gas 代币。Cosmos 2.0 试图通过"铸币税"改变这一局面但被社区否决。ICS 是 2.0 失败后的替代方案——通过让 Hub 提供安全服务来为 ATOM 创造需求。但更深层的问题是模块化架构天然不利于主链代币的价值捕获（这也是 Celestia/EigenLayer 面临的同类挑战）。

## 竞争优势
- 最早的应用链框架，开发者生态成熟
- IBC 是跨链通信的事实标准之一
- ICS 将安全成本外部化，降低应用链启动门槛
- 高度主权——链可自主选择升级、治理、经济模型

## 风险 / 争议
- ATOM 代币价值捕获长期缺失，2026 年仍未完全解决
- Cosmos 2.0（ATOM 2.0 提案）2022 年被否决，暴露治理问题
- 生态碎片化——每条链独立，网络效应分散
- Solana 等高吞吐量单体链对应用链叙事的挑战

## 相关实体
- [[celestia]] — 同属 Cosmos 生态，模块化 DA 层，创始人为 Cosmos 早期贡献者
- [[eigenlayer]] — EigenDA 与 ICS 存在竞争关系（共享安全 vs 再质押共享安全）
- [[polkadot]] — 平行链 vs 应用链，共享安全的不同实现路径
- [[fuel]] — 模块化执行层示例

## 相关概念
- [[data-availability]] — Cosmos 生态的 Celestia 是模块化 DA 开创者
- [[layer2]] — 模块化区块链概念的平行发展
- [[blockchain-governance]] — ICS 的治理审批机制
- [[tokenomics]] — ATOM 价值捕获困境

## 来源
- [[来源_2023-02_Cosmos共享安全_模块化区块链_数据可用性_DecentralPark]] — ICS 详细介绍、Cosmos Hub $2.74B 安全性、首批消费者链
- [[来源_2023-03_Cosmos_天才在左疯子在右_网络结构与价值分析]] — Cosmos 深度分析：技术架构优秀但 ATOM 价值捕获缺失，ICS 是 2.0 失败后的替代方案
- [[来源_2023-04_Sei_Network融资_生态版图_MarsBit]] — Sei 作为 Cosmos 应用链案例：通过优化 ABCI 实现 500ms Twin Turbo 共识，展示 Cosmos SDK 的可定制性边界
- [[来源_2022-06_dYdX_应用链_DApp造链_Medium]] — 2022年6月对Cosmos生态应用链案例的早期系统整理：Osmosis定制化AMM、THORChain跨链RUNE机制、Juno Network WASM智能合约、Evmos EVM兼容桥，以及Tendermint共识/Cosmos SDK/IBC三大核心架构组件的说明
- [[来源_2022-09_Cosmos_介绍_区块链互联网]] — Cosmos 入门级介绍，清晰阐述了"区块链互联网"核心理念及 Tendermint + SDK + IBC 三件套工具，补充了 Cosmos SDK 的"基于功能的安全性"（object capabilities）安全哲学和 Peg-Zones 跨链机制的细节
