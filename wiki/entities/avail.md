---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [avail, data-availability, da, polkadot, modular]
---

# Avail

## 基本信息
- 类型：模块化数据可用性 (DA) 层
- 出身：Polygon 团队分拆 (2023年)
- 共识：BABE + GRANDPA (Polkadot 系)
- 定位：与 Celestia/EigenDA 竞争的 DA 解决方案

## 核心业务/产品
- **Avail DA**：模块化数据可用性层/支持 DAS (数据可用性采样) 轻节点 → trust-minimized 安全
- **Avail Nexus**：跨 Rollup 互操作性层
- **Avail Fusion**：多资产质押安全层

## 关键数据
- 区块时间：20秒
- 最终性：BABE + GRANDPA (单槽或多块/最佳20秒/最差多块)
- DAS 支持：启动时即支持（与 Celestia 同列/Ethereum EIP-4844 不支持）
- 编码证明方案：有效性证明 (KZG)
- 出身：Polygon → 独立分拆

## 竞争优势 / 护城河
- DAS 启动即支持（比 EigenLayer 更早/比 Ethereum 更快）
- Polkadot 系技术遗产 (BABE+GRANDPA 成熟共识)
- 三位一体架构 (DA + Nexus + Fusion) = 更完整模块化方案

## 风险 / 争议
- Celestia 先发优势+生态网络效应
- EigenDA (EigenLayer AVS) 从 ETH 安全池获得经济安全
- DA 赛道商品化风险（DA 可能变成低成本同质化服务）

## 相关实体
- [[celestia]] — DA 赛道龙头
- [[eigenlayer]] — EigenDA 竞争
- [[data-availability]] — DA 概念页

## 详细技术论证（来自官方博客）

### 主权 Rollup 与硬分叉
Avail 上的主权 Rollup（如 OpEVM 原型）可以像 L1 一样硬分叉，无需更改 Avail 本身。Rollup ≠ 桥合约——桥是独立构造，分叉能力与桥解耦。OpEVM 拥有去中心化排序器集和无需许可的 watchtower。

### DAS + 递归有效性证明
Avail 支持的 DAS 轻节点通过随机采样小部分数据即可获得高概率 DA 保证，比全网节点下载所有数据快一个数量级。结合递归有效性证明（后 ZK 时代核心突破），轻节点也能获得强安全保证。

### 流动性 Hub 设计
每个基于 Avail 的 Rollup 生态都将拥有至少一个专业化流动性 Rollup（Liquidity Hub），提供 CEX 连接、法币出入金、桥接到主要结算层、深度流动性 DEX。通过廉价快速的跨 Rollup 消息机制，Liquidity Hub 可被生态内所有 Rollup 无缝访问。

## 来源
- [[来源_2023_DA层对比_Celestia_vs_Ethereum_vs_EigenLayer_vs_Avail]]
- [[来源_2023-09_模块化区块链_7个神话_Avail]] — 官方博客：逐条反驳模块化区块链 7 大误解（复杂性/性能/成本/实验空间/拥堵/垂直整合/硬分叉）
- [[来源_2024-01_数据可用性_科普_Avail]] — 官方博客 DA 基础科普：定位 Avail 为"从零构建、专为 DA 设计"的 ZK 技术方案，可插拔的 DA 层，为建立在其上的整个区块链网络提供 DA 保障
