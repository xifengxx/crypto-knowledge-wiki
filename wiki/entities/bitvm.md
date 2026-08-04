---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [bitcoin, smart-contract, layer2, rollup, btc-ecosystem]
---

# BitVM

## 基本信息
- 类型: 比特币乐观 Rollup / 图灵完备计算范式
- 提出时间: 2023年10月9日（Robin Linus 在 ZeroSync 项目框架下发布白皮书）
- 白皮书审核者: Super Testnet、Sam Parker
- 核心理念: 通过 Taproot 地址矩阵 + 欺诈证明机制，在不修改比特币共识规则的前提下实现图灵完备计算
- 当前状态: 概念验证阶段，工程实现极其困难

## 核心机制
- 利用比特币 Taproot 升级的脚本能力构建 NAND 逻辑门电路（二元电路承诺）
- 采用乐观执行 + 欺诈证明（fraud proof）的挑战-响应模式：证明者（prover）和验证者（verifier）两方交互
- 链下执行计算，仅在争议时将证明提交到 BTC 主网仲裁
- 将超出单笔交易范围的执行逻辑分散到多笔交易中（指数级扩展可运行程序的长度），未引入新语义特征
- 不需要新 op_code，不需要软分叉——完全基于比特币当前协议能力

## 开发者社区评价（2023.10 白皮书发布时）

### BobBodily（BioniqMarket CEO）
- **定位**: "不是一劳永逸的解决方案"，比 EVM 更慢、更贵、更复杂
- **核心优势**: 比特币额外可编程性"现在就能用"，无需升级、无新 op_code、无软分叉
- **潜在用例**: DLC 预言机去中心化、拥堵控制/CoinJoin 聚合器、侧链法定人数
- **明确局限**: 未解决侧链的无信任桥接问题，可能需要契约（covenants）；可通过一个 op_code 升级实现同样效果
- **基准对比**: 严格优于 Greg Maxwell 2016 年 ZKP 有条件付款示例

### Sam Parker（白皮书审核者）
- **核心论点**: 比特币早已具备图灵完备性——"图灵完备=坏"的经典比特币最大主义者论点很愚蠢。现实中永远不会有任何事物真正达到图灵完备，因为无限运行时间无法实现
- **BitVM 的本质**: 不是增加了新的表达能力，只是将运行时间分散到多笔交易中。比特币在技术上并没有变得"更具图灵完备性"，只是程序长度变得"对我们实际想执行的任何程序都足够"
- **自愿性**: UTXO 系统提供安全沙盒，如果用户不信任图灵完备合约锁定自己的币，"就不要锁定"。如果社区强烈反对此功能，将需要摆脱 Taproot，而这"非常愚蠢"

### Eric Wall（Simp DAO 创始人 / Drivechains 支持者）
- **态度**: "谨慎的兴奋"，所有概念在纸面上合理
- **担忧 1**: 设置阶段需要大量预签名交易交换——"额外资源消耗（overhead）和权限（permission）两个大问题"
- **担忧 2**: **矿工合谋攻击模型**——矿工可与证明者合谋并审查挑战来盗取 BitVM 全部余额，与 Drivechains 面临类似攻击模型，但 BitVM 中攻击窗口可能更短
- **乐观方向**: 如果 BitVM 能有效验证 ZK 证明，可充当 zkwasm 层的角色

## 传播与社区反应
- 白皮书发布 1 小时：11 万浏览量
- 截至撰稿：182 万浏览量（占加密圈近期最大热点之一）
- KOL @LeonidasNFT 将论文全文刻录为比特币铭文（Ordinal #35222444）

## 正统性评估
- 属于 BTC 扩展协议（与 Lightning、RGB、Stacks、RSK、Drivechains 并列）
- 路线属于"不修改协议"派（vs [[op-cat]] 的"软分叉升级"派）
- UTXO 安全沙盒模型使参与完全自愿——正统性争议的核心不在于"是否可行"而在于"是否应该"
- 截至 2024 年初仍停留在概念阶段，工程落地速度远慢于叙事热度

## BitVM2与ZK Fraud Proof演进（2025年3月）

2025年初BitVM从最初的BitVM0方案演进到BitVM2，核心变化是采用ZK Fraud Proof（ZK化欺诈证明）替代纯交互式欺诈证明：

### 技术演进路径
- **BitVM0**（2023.10）：基于逻辑门电路（NAND门）+ Taproot地址矩阵，纯交互式欺诈证明，支持证明者-验证者两方交互
- **BitVM2**（2025起）：基于ZK Fraud Proof + Groth16验证电路，将多轮交互改为单轮ZK证明生成+链上验证

### ZK Fraud Proof机制
ZK Fraud Proof是一种混合方案，位于OP Rollup和ZK Rollup之间：
- **保留Optimistic的懒惰验证**：不每次出块生成证明，仅在受到挑战时临时生成
- **替代交互式挑战**：将传统FDG的多轮链上交互（约数十次）压缩为单轮ZK证明生成+链上验证
- **降低计算成本**：相比ZK Rollup，减少了每区块生成证明的计算消耗；相比交互式欺诈证明，减少了Gas和时间消耗

### BitVM2的ZK Proof验证方法
采用BitVM2的项目通过**比特币脚本**实现ZK Proof验证程序：
- 将需要上链验证的ZK Proof验证程序进行极大程度的精简化，以适应比特币脚本环境的能力限制
- 脚本验证精简版ZK Proof，而非直接在比特币上运行完整ZK验证器

### 已知采用BitVM的项目
- [[bitlayer]] — 基于BitVM的比特币二层
- [[citrea]] — 基于BitVM的比特币二层
- [[bob]] — 基于BitVM的比特币二层（Build on Bitcoin）
- [[fiamma]] — 基于BitVM2的ZK验证层
- [[goat-network]] — 基于BitVM2的项目

### 与Optimism欺诈证明的技术同源性
BitVM的底层逻辑与Optimism的交互式欺诈证明高度同源：两者都使用OutputRoot/StateRoot状态承诺机制、通过争议解决协议定位争议点、在链上VM中重放验证。区别在于BitVM运行在比特币Taproot脚本之上，Optimism运行在以太坊智能合约之上。理解Optimism的FDG+MIPS VM机制是理解BitVM工作原理的认知桥梁。

## 安全风险
- **矿工合谋攻击**: 矿工 + 证明者合谋可审查挑战交易、盗取合约全部余额（Eric Wall 指出）
- **预签名交易复杂性**: 设置阶段的大量链下交互可能产生未预见的问题
- **两方限制**: 当前模型仅支持证明者-验证者两方，多方扩展未知

## 相关实体
- [[rgb-protocol]] — 同为 BTC 智能合约方案，不同技术路线（客户端验证 vs 乐观 Rollup）
- [[stacks]] — 同为 BTC 扩展方案（侧链 vs 原生脚本）
- [[op-cat]] — 对照路径：通过软分叉重新启用操作码实现类似目标，BitVM 明确不依赖新 op_code
- [[ordinals]] — BitVM 白皮书被刻录为铭文，两者同属 BTC 生态"不修改协议"的创新路径

## 来源
- [[来源_2024-02_BTC衍生协议_正统性_炒作分析]] — 将 BitVM 列为 BTC 扩展协议之一
- [[来源_2023-10_BitVM_比特币计算_图灵完备_BlockBeats]] — 白皮书发布时的三位资深开发者第一手评价（BobBodily/Sam Parker/Eric Wall），182 万浏览量事件记录
- [[来源_2025-04_比特币生态_RWA赛道_Web3全景_PANews]] — Infinity Labs更新BitVM进展：基于欺诈证明的类Rollup方案仍处早期验证阶段、BitVM验证网络测试中若成功将实现比特币L1直接调用Solana/以太坊智能合约、潜在场景为跨链桥与状态通道优化、比特币LST TVL突破$50亿/头部协议APR 18%
- [[来源_2025-03_BitVM_欺诈证明_ZK_Fraud_Proof_PANews]] — 详细拆解Optimism交互式欺诈证明（OutputRoot/MIPS VM/FDG GameTree/Step函数）作为理解BitVM的认知桥梁；BitVM2演进至ZK Fraud Proof技术路线；Bitlayer/Citrea/BOB/Fiamma/GoatNetwork作为BitVM实现方；比特币脚本实现ZK验证的简化方向
