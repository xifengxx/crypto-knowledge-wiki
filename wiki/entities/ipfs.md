---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [storage, infrastructure, nft]
aliases: [星际文件系统, InterPlanetary File System]
---

# IPFS（星际文件系统）

## 基本信息
- **类型**: 去中心化内容寻址存储协议
- **赛道**: Web3 基础设施 / 去中心化存储
- **创始**: Protocol Labs（Juan Benet），2015年发布白皮书
- **核心原理**: 基于内容哈希（CID）的内容寻址替代基于位置寻址（URL），每个文件通过其内容的加密哈希唯一标识

## 核心业务/产品
- 去中心化的点对点超媒体协议，旨在创建更快速、安全、开放的互联网
- 通过内容寻址（而非位置寻址）实现数据检索——相同的文件在不同节点上具有完全相同的哈希值
- **NFT 领域的核心应用**：作为 NFT 元数据和媒体文件的主要链下存储方案，与 Arweave 并列
- 通过 IPFS Gateway 和公共节点访问存储内容
- Pinata、NFT.Storage 等服务提供 IPFS 数据持久化（pinning）服务

## 与 Arweave 的关键差异
- IPFS 本身不保证永久存储——数据需要主动 "pinning" 来保持可用，否则可能被垃圾回收
- Arweave 通过一次性付费 + Endowment 基金机制提供理论上的永久存储
- IPFS 更灵活且无付费门槛，Arweave 适合需要长期无人维护的场景（如 NFT 元数据）

## 关键数据
- 在 NFT 领域与 Arweave 并列为两大链下存储标准
- Pinata 是社区最常用的 IPFS pinning 服务之一
- NFT.Storage（Protocol Labs 旗下）为 NFT 数据提供免费的 IPFS 存储和持久化

## 风险 / 争议
- **数据持久性风险**：IPFS 不提供内置的永久存储保证，依赖 pinning 服务或自运行节点来维持数据可用性——如果 pinning 服务关闭或节点下线，数据可能丢失
- 与 Filecoin 的关系：Filecoin 是 IPFS 上的激励层，但 IPFS 数据并不自动存储到 Filecoin
- 去中心化存储赛道竞争加剧：Arweave（永久存储）、Filecoin（热存储 + 经济激励）各有优势

## 相关实体
- [[arweave]] — 互补/竞争：永久存储 vs 灵活内容寻址
- [[filecoin]] — IPFS 的激励层，提供经济驱动的存储市场
- [[opensea]] — NFT 市场，依赖 IPFS 存储 NFT 元数据

## 来源
- [[来源_2023-04_NFT发行指南_从零构建NFT项目_深潮TechFlow]] — 将 IPFS 与 Arweave 并列为 NFT 媒体文件的两大链下存储方案；NFT 项目在第 7 步需将图片/视频以特定格式上传至 IPFS
- [[来源_2024-12_DePIN现在与未来_中间件_应用层_PANews]] — 将 Arweave 定位为永久存储方案时提及 IPFS 作为对比参照
