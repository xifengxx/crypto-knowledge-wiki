---
type: entity
entity_type: protocol
created: 2026-07-01
updated: 2026-07-01
tags: [bitcoin, smart-contract, layer1, nft, tokens]
---

# Atomicals 协议

## 基本信息
- 定位: 比特币主网一层智能合约协议，基于 UTXO 的资产发行和转移框架
- 核心组件: ARC-20（同质化代币标准）/ AVM（Atomicals 虚拟机）
- 社区评价: 被部分比特币生态玩家视为"最理想的一层智能合约方案"
- 风格特点: 项目方做事风格较为"清真"（正统/不迎合市场），开发进度缓慢但稳步推进

## 核心机制
### ARC-20
基于比特币 UTXO 的代币标准，每个 ARC-20 代币由 1 satoshi 支撑（1 token = 1 sat），利用比特币原生 UTXO 模型实现资产创建和转移，无需链下索引器。

### PoW 公平铸造（Bitwork Mining）
Atomicals 在铸币过程中引入了工作量证明（PoW），铸造者必须计算出特定前缀字符的哈希值才能进行铸造。Atomicals 协议为 ARC-20 提供了 Bitwork Mining 的前缀参数设置，使参与者可以直接挖铭文/NFT。这是一种比 BRC-20 自由铸造更去中心化的公平分发方式。

### 首个代币 ATOM
Atomicals 协议在 2023 年 9 月推出后，第一个代币 ATOM 很快被挖完。与 BRC-20 相比，ATOM 的挖矿过程更具技术门槛和公平性。

### UTXO 模型扩展
Atomicals 扩展了比特币的 UTXO 模型：
- 使用聪作为基本单位代表代币（1 token = 1 sat）
- UTXO 的可组合性使 ARC-20 代币的可编程性更强
- 理论上 BTC 与 ARC-20 的交换只需调换 UTXO 的输入和输出
- 所有操作（创建、传输、更新数字对象）均可依靠比特币主网完成，无需额外步骤

### AVM（Atomicals Virtual Machine）
开发者可通过智能合约（使用比特币脚本）定义自己的规则来管理资产的创建和转移。Beta 版于 2024 年 8 月 15 日发布。

## 热度周期
- 2023 年下半年: 高热度期，与 Ordinals/BRC-20 并列 BTC 生态主要叙事
- 2024 年: 热度减退，原因包括周期轮动和项目方不迎合市场的"清真"风格
- 2024 年 8 月: AVM Beta 版发布，生态重新获得关注

## 与竞争对手的对比
| 维度 | Atomicals | Ordinals/BRC-20 | Runes | RGB |
|------|-----------|-----------------|-------|-----|
| 资产模型 | UTXO 原生（1 token = 1 sat） | 基于 witness 数据 + 链下索引器 | UTXO 原生 | 客户端验证 + 一次性密封 |
| 智能合约 | AVM（比特币脚本） | 无原生支持 | 无 | 图灵完备 |
| 正统性 | 高（被社区视为"最理想"） | 中 | 高（Casey Rodarmor 设计） | 极高（2016 年提出） |
| 开发速度 | 慢 | 快 | 快（已主导交易） | 极慢 |

## 风险 / 争议
- 开发速度过慢可能导致被更务实的方案（如 Fractal Bitcoin / Runes）抢占市场份额
- "清真"风格虽然保护了协议正统性，但在牛市窗口期中可能错失用户采纳的机会窗口
- AVM 从 Beta 到主网的路径和时间线尚不明确

## 相关事件时间线
- 2024-08-15: AVM Beta 版发布
- 2023 H2: Atomicals 在 BTC 生态中获得高热度

## 相关实体
- [[fractal-bitcoin]] — 对比：务实兼容路线（BTC 核心代码 + OP_CAT）
- [[rgb-protocol]] — 对比：同为 BTC 智能合约方案，RGB 更偏链下验证
- [[bitcoin-ecosystem]] — BTC 生态全景

## 来源
- [[来源_2024-08_BTC生态_重大变化_Odaily]]
- [[来源_2024-02_BTC衍生协议_正统性_炒作分析]] — 正统性评价：ARC20 被评价为最去中心化的代币协议——1 token = 1 sat 的 UTXO 绑定设计直接由 BTC 主网处理转账，极大降低第三方排序器依赖，铸币引入 PoW 公平分发。被认为"最接近 BTC 原生 DeFi"，但关注度可能不如其他协议
- [[来源_2023-11_铭文赛道全扫描_MT资本_BlockBeats]] — MT Capital 2023年11月扫描：Bitwork Mining 前缀参数设置、Atomicals 9月推出后 ATOM 首个代币很快被挖完、1 token = 1 sat 的 UTXO 扩展模型、ARC-20 的 PoW 铸造去中心化公平分发机制
