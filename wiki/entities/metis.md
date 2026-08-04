---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [l2, sequencer, rollup, infrastructure]
---

# Metis

## 基本信息
- 类型: Layer 2 网络（Optimistic Rollup）
- 赛道: L2 扩容 / 去中心化排序器
- 核心创新: 首批实现去中心化 PoS 排序器的 L2 网络
- 代码仓库: https://github.com/MetisProtocol/mvm (fork of Optimism)

## 核心业务/产品

Metis 提供基于 PoS 的去中心化 Optimistic Rollup 方案，通过去中心化排序器池（Decentralized Sequencer Pool）解决传统 Rollup 单一排序器的运营风险、审查风险和操纵风险。

### 三大角色
- **管理员 (Administrators)**: 管理排序器网络
- **排序器 (Sequencers)**: 多节点协同处理交易聚合、排序和执行
- **PoS 共识层**: 协调以太坊、共识层和 Metis 层

### 共识与安全机制
- 超过 2/3 排序器节点就每个新区块状态达成共识后，交易批次才能提交至 L1
- MPC 多重签名用于验证提交至 L1 的交易批次真实性

### 节点五组件架构
1. **L2 Geth (含 OP-Node)**: 交易排序和区块组装；修改了 applyTransactionToTip 逻辑判断当前排序器是否应组装当前区块；修改 op-node 通过 MPC 共识层适配器模块获取排序器在轮换列表中的位置
2. **Adapter Module**: 与外部模块（主要是 PoS 节点）交互的中介
3. **Batch Proposer**: 构建交易批次，获得多个排序器批准后提交至 L1
4. **PoS Nodes**: 协调以太坊、共识层和 Metis 层，确保资产安全锁定和验证者奖励
5. **Consensus Layer**: Tendermint PoS 节点，与以太坊主网并行运行

### 排序器轮换机制
- 轮换信息排序于 L2 MetisSequencerSet 合约中，由共识层（PoS 节点）控制
- 每个 epoch 共识层更新排序器信息，经 MPC 签名后发起交易更新合约排序器列表
- 排序器按合约列表轮流排序
- 违规（未及时出块或产生错误交易如同 L2 TxID 重复）→ PoS 层选择新排序器，构建 ReselectSequencer 交易并获取 MPC 签名 → **无惩罚机制**
- 达到轮换间隔时暂停当前交易，执行 MetisSequencerSet.sol 合约更新交易，PoS 层选择新排序器

### 加入与退出机制
- L1 PoS 合约允许任何人通过质押 Metis 代币申请成为排序器
- 达到上限后申请人进入等待队列
- 申请人获得 NFT（Token ID 对应序列 ID）
- 禁止直接转让，通过 LockingPool 合约 → updateSigner 更改签名者并转让 NFT
- 退出：销毁 NFT
- 选择算法：加权随机选择

### MPC 模块
管理多重签名密钥的完整生命周期：
1. 多重签名生成
2. 密钥重新共享 (Key Resharing)
3. 应用签名
4. 删除签名
5. 异步使用多个多重签名

MPC 流程两阶段:
- **Phase 1**: 本地生成随机 sessionID → P2P 网络广播 keyGenPrepare → 各 MPC 节点启动 goroutine → 根据 keyId 检查 TSS 模块 → READY 状态直接返回 / PENDING 状态报错 → 建立 P2P 通道 → 返回 keyGenReady
- **Phase 2**: 发起节点等待接收所有节点的 keyGenReady → 广播 keyGenStart → 各节点构建 LocalParty 实例 → 开始接收其他节点信息

## 竞争优势 / 护城河
- 首个实现去中心化 PoS 排序器的主流 L2，具有先发优势
- MPC + Tendermint + 排序器轮换的完整工程实现
- 权重随机选择算法提供公平的排序器选择

## 风险 / 争议
- **无惩罚机制 (no penalty mechanism)**: 违规排序器仅被替换而无经济惩罚，攻击成本低
- NFT 转让机制增加了排序器市场的摩擦
- MPC 模块的复杂 P2P 协调可能引入延迟和故障点

## 来源
- [[来源_2026-06_去中心化排序器_Rollup_Sequencer_Lumoz]]
- [[来源_2022-07_以太坊_L2_Rollup扩容方案_综述]] — 2022 年中 Metis 并行 Optimistic Rollup 架构描述和 DAC（去中心化自治公司）概念
