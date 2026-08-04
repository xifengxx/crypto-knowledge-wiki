---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [arweave, storage, cross-chain, infrastructure]
---

# Bundlr

## 基本信息
- **赛道**: 跨链存储 / 数据可用性
- **类型**: Arweave 中间件/存储网关
- **关系**: Arweave 生态的核心基础设施层
- **更名**: 后更名为 Irys

## 核心业务/产品
Bundlr作为Arweave生态的关键中间件，提供两大核心功能：

### 1. 跨链数据存储
Bundlr支持将Ethereum、Solana、Near等公链的数据跨链存储到Arweave网络：
- 严格检查上传文件完整性——若有文件丢失或被删除，会破坏该区块的上传而等待下一个区块
- 确保跨链数据完全写入Arweave，技术层面担保了90%+的数据完整性

### 2. Bundles（数据打包技术）
Bundles通过L2压缩技术将任意数量的数据压缩成单个可被L1处理的数据单元：
- 显著提升Arweave的可扩展性和交易吞吐量
- 使Arweave的交易容量得以线性增加
- 降低了小额数据上传的边际成本

## 竞争优势 / 护城河
- 作为Arweave的唯一官方级跨链网关，Bundlr是目前从其他公链向Arweave写入数据的主流通道
- Bundles技术解决了区块链存储扩容的核心矛盾——L1处理能力有限但需容纳大规模数据上链
- 数据完整性验证机制直接解决了"数据上传但未完全存储"的信任问题

## 相关实体
- [[arweave]] — Bundlr的核心底层协议网络
- [[filecoin]] — 去中心化存储的竞品方案
- [[solana]] — Bundlr支持的跨链目标公链之一

## 来源
- [[来源_2022-05_NFT_代币协议_元数据存储_匿名达摩院]] — Bundlr的跨链存储机制和Bundles技术详解
