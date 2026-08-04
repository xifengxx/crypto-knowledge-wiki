---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [zk, layer2, infrastructure, rollup, raas]
aliases: [Opside]
---

# Lumoz

## 基本信息
- 类型: ZK-RaaS (ZK-Rollup as a Service) 平台 + ZK-PoW 挖矿网络
- 赛道: ZK 基础设施 / 模块化区块链 / RaaS
- 前身: Opside
- 团队背景: 参与过 6block 和 zk.Work 两个 ZK 挖矿项目，有深厚 ZK 技术积累和 PoW 矿工资源
- 融资: $1000 万累计融资；最近一轮以 $1.2 亿估值完成，OKX Ventures、HashKey Capital、KuCoin Ventures 等参投
- 主网: 2024 年 Q3 上线（计划）
- 代币: MOZ（Lumoz 原生代币），TGE 预计 2024 年 8 月

## 核心业务/产品

### EigenLayer AVS 计算层 (zkProver + zkVerifier)
2024 年 5 月推出，是 Lumoz 在 ZK-PoW 云之外的第二个核心业务线：

- **zkProver**: 基于 EigenLayer AVS 的 ZKP 生成节点网络。包含 zkRollup Prover（交易批次压缩证明）、zkFraud Prover（欺诈证明）、zkML Prover（机器学习模型验证证明）等专用证明者类型。通过 Dispatch 模块根据任务类型和 Prover 性能动态调度计算资源
- **zkVerifier**: 分布式 ZKP 验证节点网络。通过多源证明整合、Gas 成本优化、专用验证器部署等策略降低验证成本。采用至少 2/3 验证节点确认的集体决策机制
- **经济安全**: 通过 EigenLayer 再质押机制，质押者锁仓 ETH 为 zkProver/zkVerifier 网络提供安全保障，同时获得质押收益
- **架构**: Ethereum (EigenLayer AVS) + EVM Chain (Polygon zkEVM/CDK/ZKStack/Scroll 兼容) + Lumoz AVS Oracle (数据中继) + Lumoz Chain (核心调度层) + zkProver (计算) + zkVerifier (验证)

### ZK-PoW 云
利用 PoW 机制激励矿工提供 ZKP 计算能力，为 ZK-Rollup 提供去中心化硬件基础设施。核心创新：
- **两步提交机制**: 先提交 proofhash（证明的哈希值）到合约，时间窗口结束后再提交原始 ZKP 验证，允许多矿工并行参与而非仅奖励最快者
- **并行计算 + 顺序提交**: 打破传统 zkEVM 中 ZKP 计算和提交的顺序瓶颈，矿工可同时执行多个 ZKP 生成任务
- **递归聚合算法优化**: 提高集群机器资源利用率，20 台机器（128 核 CPU + 1TB 内存）集群可维持 27.8 TPS，将确认时间从 5-6 分钟缩短至约 3 分钟（效率提升 ~80%）

### ZK-RaaS 发射台
一键式 ZK-Rollup 生成服务：
- 支持基础链: Ethereum、Lumoz 链、BNB Chain、Polygon PoS 等
- 支持 zkEVM 类型: zkSync、Polygon zkEVM、Scroll、StarkNet 等
- 通过质押 MOZ 租赁 Rollup 槽位（类似 Polkadot 平行链槽位 / Cosmos 应用链），开发者获得独立执行环境和完全的经济模型自定义权（包括 GAS 代币选择和零费用设置）
- 开发者无需承担硬件成本（DA、排序器、ZKP 算力均由 ZK-PoW 云提供）

### Lumoz 链
PoS + PoW 混合共识的基础链：
- PoS 验证者: 同时充当 Rollup 层排序器，从交易中赚取 GAS 费用
- PoW 证明者: 为 Rollup 层区块生成 ZK 证明
- 提供标准化去中心化排序器机制、预编译合约加速 ZKP 验证、数据分片支持
- 实现本地跨 Rollup 通信（不同基础链上不同 ZK-Rollup 之间可直接交互）

## 关键数据
- ZKP 计算效率: 20 台机器集群维持 27.8 TPS，平均确认时间 ~3 分钟
- 效率提升: 相比传统方案 ZKP 生成效率提高约 80%
- 以太坊 PoW 闲置矿机: ~$120 亿资本规模可被 ZK-PoW 网络再利用
- 测试网 (Gala Event): ~70 万用户、2.5 万 PoS 节点、145 个矿工实体、15 个 zkEVM 项目
- 已助推项目: ZKFair、Merlin Chain

## 竞争优势
- ZK 算力 + RaaS 组合拳：同时解决 ZK-Rollup 的开发门槛和算力成本两个核心痛点
- 团队 ZK 挖矿经验积累 + 矿工网络资源优势
- 差异化定位：在 RaaS 同质化市场中以 ZK 算力共享作为独特切入点
- 类比 AltLayer：AltLayer 以再质押排序器赋能 RaaS，Lumoz 以共享 ZK 算力赋能 RaaS

## 风险 / 争议
- ZK-PoW 矿工激励可持续性：依赖 ZK-Rollup 生态持续产生 ZKP 计算需求，若需求不足则代币激励难以覆盖电费成本
- "一分钟启动 zkEVM"的宣传未经验证
- RaaS 赛道竞争激烈：Caldera、AltLayer 等竞品也有 ZK 支持能力
- 团队与前身 Opside 的历史关系及品牌重塑原因值得关注

## 相关事件时间线
- 2024-04-08: 披露以 $1.2 亿估值完成新一轮融资
- 2023-08 ~ 2023-12: Gala Event 激励测试网活动（4 个月）
- 2024-Q3: 主网计划上线
- 2024-08: 代币生成事件 (TGE) 预计

## 相关实体
- [[altlayer]] — 同赛道 RaaS 平台，以再质押排序器赋能，MC $6.7 亿 / FDV $53 亿
- [[merlin-chain]] — Lumoz 助推的 BTC L2 案例
- [[celestia]] — 模块化 DA 层，Lumoz 生态可选择的 DA 方案之一

## 来源
- [[来源_2024-04_ZK模块化新星_Lumoz_RaaS_PANews]]
- [[来源_2024-05_Lumoz_zkProver_zkVerifier_EigenLayer_ChainCatcher]]
