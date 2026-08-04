---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [data-availability, ethereum, restaking, infrastructure, layer2]
---

# EigenDA

## 基本信息
- 定位：EigenLayer 旗舰 AVS（主动验证服务），提供高性能数据可用性（DA）服务
- 所属协议：[[eigenlayer]] 生态
- 核心原则：数据可用性不需要独立共识，因此可线性扩展
- 再质押资本：364 万 ETH + 7000 万 EIGEN（约 91 亿美元），来自 245 个运营者和 12.7 万个唯一地址（截至 2024 年 9 月）

## 技术架构

三大核心组件：

| 组件 | 角色 | 关键功能 |
|------|------|---------|
| **Operators** | 存储 blob | 不承担共识责任，验证 KZG 承诺和证明后存储数据块 |
| **Disperser** | 编码分发 | 对数据 Reed-Solomon 纠删编码 → 计算 KZG 承诺 → 分发数据块 → 聚合签名 → 链上登记 |
| **Retrievers** | 重建 blob | 向运营者请求数据块 → 验证准确性 → 重建原始 blob |

### 工作流程
1. Rollup 排序器将交易批作为 blob 发送到 EigenDA 的 disperser sidecar
2. Disperser 纠删编码 → 生成 KZG 承诺和 multi-reveal 证明 → 发送给运营者
3. 聚合签名后向 EigenDA Manager 合约登记 blob
4. 排序器将 blob ID（不超过 100 字节）发布到 inbox 合约
5. Inbox 合约向 Manager 合约查询 blob 是否被授权可用 → 放行或弃用

## 定价模型（2024 年 9 月公布）

| 方案 | 吞吐量 | 价格 |
|------|--------|------|
| 按需（On-demand） | 可变 | 0.015 ETH/GB |
| Tier 1 | 256 KiB/s | 70 ETH/年 |

使用按需定价可平均降低 L2 直接 DA 成本约 **98.91%**。

## 竞争格局

| 维度 | EigenDA | Celestia |
|------|---------|----------|
| 吞吐量 | 明显优势，随运营者增加线性扩展 | 受区块大小限制 |
| 以太坊一致性 | 最高（直接使用 ETH 验证者子集） | 较低（独立共识网络） |
| 实际费用收入 | 待验证（目标 $160K/月） | ~4,091 TIA（$21K-$35K 总收入） |
| FDV | N/A（EigenLayer 代币） | ~$55 亿 |

## 收入模型与挑战
- 月收入目标：16 万美元（团队设定）
- 实现条件：11 个付费 rollup（Tier 1 年费 70 ETH，ETH≈$2,500）
- 现实差距：自 EIP-4844 上线以来，仅约 6 个 rollup 的 L1 费用超过 70 ETH
- 核心矛盾：DA 成本降低 ~99% 为 L2 创造巨大价值，但 EigenDA 自身能捕获的价值有限——DA 赛道呈现商品化趋势

## 生态合作
- RaaS 提供商：AltLayer、Conduit
- 高吞吐量 rollup 潜在客户：MegaETH
- 已集成：Arbitrum Orbit、OP Stack 等 8 家 rollup 基础设施提供商

## 我的判断
EigenDA 在技术和以太坊一致性上确实有优势，但 DA 赛道面临的根本问题是："基础设施叙事溢价" vs "实际现金流"之间的巨大鸿沟。Celestia $55B FDV 仅产生几万美元费用收入的前车之鉴表明，即使占领市场份额，DA 层的价值捕获也可能极度有限。EigenDA 能否打破这个魔咒，取决于高吞吐量 rollup 的爆发速度和付费意愿——目前看短期内不容乐观。

## 相关实体
- [[eigenlayer]] — 母协议，提供再质押安全基础
- [[celestia]] — 主要 DA 竞争对手
- [[avail]] — DA 赛道第三极

## 来源
- [[来源_2024-09_EigenDA如何变革Rollup经济学_金色财经]] — 核心来源：定价、收入模型、竞争分析
- [[来源_2024_DA赛道_Celestia_vs_EigenDA_火币研究院]] — 技术架构对比
- [[来源_2024_EigenLayer_第一批AVS真实用例分析_ChainFeeds]] — EigenDA 作为首批 AVS 的部署
