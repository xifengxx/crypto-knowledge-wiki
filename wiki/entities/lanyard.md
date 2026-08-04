---
type: entity
entity_type: project
created: 2026-07-01
tags: [nft, infrastructure, open-source]
aliases: [Lanyard]
---

# Lanyard

## 一句话定义
由 Context、mint.fun、Zora 团队联合设计的开源 NFT 白名单创建工具，通过 Merkle root 标准化实现跨平台白名单互操作。

## 核心创新
- **横向 web3 栈（Horizontal Web3 Stack）**：白名单不锁定在单一铸造平台，而是作为独立的基础设施层
- **Merkle Root 标准化**：安全存储白名单、Merkle root 和证明，任何集成 Lanyard 的平台均可使用同一白名单
- **跨平台铸造**：社区可以从创作者网站、mint.fun 或任何集成 Lanyard 的平台铸造同一项目

## 技术特点
- 开源（open-source）
- 使用 Merkle root 从地址列表生成白名单证明
- 需将 Merkle root 加载到 NFT 智能合约中（技术门槛较高，但提供详细指南和 Discord 支持）

## 来源
- [[来源_2023-06_NFT白名单_Allowlist工具_PREMINT_Lanyard_Bueno]]
