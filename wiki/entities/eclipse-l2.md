---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-07-01
tags: [layer2, ethereum, solana, svm, modular]
---

# Eclipse

## 基本信息
- 定位：以太坊首个 SVM 通用 Layer2，模块化极致组合
- 架构：ETH 结算 + Solana SVM 执行 + Celestia DA + RISC Zero ZK 欺诈证明
- 创始人：Neel Somani（前 Airbnb 软件工程师 / Citadel 量化研究员，2022 年创立）
- 融资历史：
  - Pre-Seed + 种子轮：~$1500 万（Polychain/Tribe Capital/Tabiya，Solana 联创 Anatoly + Polygon 天使投资）
  - A 轮：$5000 万（2024 年 3 月，Placeholder + Hack VC 联合领投）
  - 累计公开融资：$6500 万
- 支持者：Solana 联创 Anatoly Yakovenko、Polygon、Placeholder、Hack VC

## 技术架构
| 层 | 方案 | 优势 |
|---|------|------|
| 结算层 | 以太坊（嵌入式验证桥，ETH 作 Gas） | 以太坊级安全性 + 抗审查 |
| 执行层 | SVM + Sealevel 并行引擎 | 多线程并行处理（vs EVM 单线程） |
| DA 层 | Celestia | 可扩展数据可用性 |
| 证明 | RISC Zero ZK 欺诈证明 | 无需中间状态序列化 |
| 跨链 | IBC + Hyperlane | 双协议互操作 |

## 差异化
Eclipse = 首个将三大叙事（ETH 安全 + Solana 速度 + Celestia DA）组合的 L2。SVM 并行执行是其相对于 OP/Arb 等 EVM L2 的核心性能优势。

## 风险
4 个不同技术栈的集成点 = 4 倍潜在故障点。SVM→ZK 电路转换是极端复杂的工程挑战。

## 相关事件时间线
- 2022: Neel Somani 创立 Eclipse
- 2023-12-14: 测试网上线
- 2024-03: $50M A 轮融资（Placeholder + Hack VC 领投），累计 $65M
- 2024-Q2（计划）: 主网上线

## 相关实体
- [[celestia]] — DA 层
- [[eigenlayer]] — 共享安全对比
- [[neon-evm]] — Eclipse 集成 Neon EVM 实现 EVM 兼容性
- [[solana]] — SVM 执行层来源

## 来源
- [[来源_2024-03_Eclipse_SVM_Layer2_模块化架构]]
- [[来源_2024-03_Eclipse_首个SVM_Layer2_以太坊Solana_Celestia三者结合]]
- [[来源_2024-03_并行EVM四杰_Monad_Sei_Neon_Eclipse_Foresight]] — 四项目对比：Eclipse = ETH 结算 + SVM + Celestia DA + RISC Zero ZK + Neon EVM + L3 生态，是叙事融合的极致案例；计划 EIP-4844 后考虑迁移到以太坊 DA；Solang 编译器作为 Neon EVM 替代方案
- [[来源_2024-08_十二大新公链_高估值速览_ChainCatcher]]
- [[来源_2024-03_Eclipse_5000万_A轮_测试网交互_BlockBeats]] — $50M A 轮（Placeholder/Hack VC 领投），累计 $65M；测试网 2023.12.14 上线，主网计划 2024 Q2；OpenBook DEX + Clone Markets 为早期测试平台
