---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-07-02
tags: [layer2, ethereum, scaling, high-throughput]
---

# MegaETH

## 基本信息
- 类型：以太坊 L2 扩展解决方案（EVM 兼容 Rollup）
- 定位：实时区块链性能——专为需要即时响应的应用设计
- 核心承诺：近乎即时的出块时间和高交易吞吐量
- 数据可用性：集成 EigenDA

## 核心业务/产品
- **超低延迟 L2**：区块时间 1-10 毫秒，TPS 100,000+
- **以排序器为中心的架构**：为节点（排序器、验证器、完整节点）分配专门角色，简化执行并减少冗余
- **EVM 完全兼容**：与以太坊生态无缝集成，实现与现有 dApp 的直接部署
- **EigenDA 集成**：利用 EigenDA 实现数据可用性，在不影响可靠性或性能的情况下扩展

## 技术架构
- **中心化出块 + 去中心化结算**：中心化排序器实现连续交易流处理（无需两轮全球通信），安全性委托给以太坊 L1 和 EigenDA。引用 Vitalik Buterin 2021 年《Endgame》博文为理论依据——所有扩展方案最终都导向中心化出块。
- **JIT 编译**：实现 Just-In-Time 编译将 EVM 字节码预编译为原生机器码，消除 EVM 解释执行瓶颈。在以太坊截至 2025 年 1 月的最新区块测试中获得显著性能提升。
- **状态树重设计**：用新设计的状态树替换传统 Merkle Patricia Trie (MPT)，大幅减少状态更新时的磁盘 I/O。选择写优化型数据库。
- **全内存状态**：将全部状态缓存到内存中，磁盘 I/O 从执行层时间占比 80%+ 降至约 10%。
- **测量为先**：团队在 Intel Xeon w5-2465X (16 核 @ 3.1GHz) / 512G DDR5-4800 / NVMe PCIe 4.0 SSD 硬件上建立基准，用 Linux cgroup 模拟不同内存配置。

## 关键数据
- 区块时间：1-10 毫秒（极端负载 100k TPS 下仍保持）
- 吞吐量：100,000+ TPS
- L2 最终确定性：约 10 毫秒（近乎即时）
- L1 完全结算：约 7 天（继承以太坊最终性延迟）
- 历史同步（无状态更新）测试：~14,000 TPS
- 实时同步测试：~1,000 TPS（14 倍降速，Merkleization 占 9.3x，数据库写入 1.5x）
- 执行层数据库 I/O 占比：80%+ → 全内存优化后降至约 10%

## 竞争优势 / 护城河
- **极端低延迟**：1-10ms 出块在 L2 中独一档，适合高频交易、竞技游戏和支付系统
- **EVM 兼容**：现有以太坊 dApp 可无缝迁移
- **EigenDA 扩展性**：绕过 L1 DA 瓶颈，避免高峰拥塞问题
- **数据驱动优化**：对 EVM 瓶颈的精确量化（Merkleization 9.3x、DB I/O 1.5x 降速系数）是其他团队无法直接复用的内部工程洞察

## 风险 / 争议
- **中心化排序器设计**：牺牲去中心化换取速度——MegaETH 团队明确接受此取舍，引用 Endgame 论证其必然性，不将其视为"待解决的技术债"
- **L1 结算延迟**：虽然 L2 即时确认，但继承以太坊 L1 的 7 天完全结算周期——与 Monad/Hyperliquid 的原生快速最终性形成对比
- **以太坊 SSF 风险**：如果以太坊完成单槽最终性升级，MegaETH 的 7 天结算约束将变得更突出
- **与已有高性能 L2 竞争**：Base/Arbitrum 等已占据 L2 TVL 和用户心智
- **抗审查性和 MEV 未回应**：Stanford Review 技术文完全未涉及中心化排序器的抗审查性缺失和 MEV 提取风险问题

## 目标用例
- 高频交易（HFT）
- 竞技游戏
- 实时支付系统
- 需要即时响应的去中心化应用

## 相关实体
- [[hyperliquid]] — L1 竞争者，专注金融市场，HyperBFT 共识，0.2s 出块/20 万 TPS
- [[monad]] — L1 竞争者，并行 EVM 平衡路线，MonadBFT 共识，1 万 TPS
- [[ethereum]] — 依赖其 L1 进行结算和安全性
- [[eigenlayer]] — 通过 EigenDA 提供数据可用性

## 来源
- [[来源_2025-01_MegaETH_Monad_Hyperliquid_高性能区块链对比_PANews]] — Three Sigma 三链横向对比：MegaETH 速度占优但中心化排序器设计引发争议，7 天 L1 结算是对比 Monad/Hyperliquid 原生快速最终性的核心劣势
- [[来源_2025-02_ETH卷土重来_DeFi投资者]] — MegaETH在2025年2月的叙事定位：作为以太坊生态内挑战高性能L1（Solana等）的L2方案，目标100,000+ TPS
- [[来源_2025-03_MegaETH_实时区块链_StanfordReview]] — Stanford Blockchain Review 首发技术深文，MegaETH 团队第一手技术说明：JIT 编译实现、MPT 替换、全内存状态方案、基准测试硬件配置和精确分项量化数据（14k 历史同步 vs 1k 实时同步、9.3x Merkleization 降速）
- [[来源_2025-02_Yap-to-Earn_BERA空投_PANews]] — 作为 Kaito Connect 投票激励案例：投票支持 MegaETH 的用户可能获得 Ruffle NFT 白名单（治理总供应量的 5%）
