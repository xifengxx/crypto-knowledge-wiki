---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [l2, zk, ethereum, agglayer, polygon]
---

# Polygon

## 基本信息
- 类型：以太坊 Layer 2 生态 / ZK 基础设施
- 赛道：ZK Rollup / 聚合层 / 链抽象
- 关键产品：Polygon zkEVM / Polygon CDK / AggLayer / POL 代币

## AggLayer（聚合层）
Polygon 的链抽象方案，基于 ZK 证明聚合，解决不同 rollup 和 L1 之间的互操作性和碎片化问题。

### 工作原理
1. **统一桥接合约**：在以太坊上部署统一桥接根，每个连接链维护该根的副本，实现无缝跨链交易
2. **消息协议桥**：为每条链建立消息队列，允许各链维护由 ZK 证明保护的本地出站消息队列
3. **消除代币锁定**：不需要在一个链上锁定代币来与另一个链交互
4. **ZK 证明聚合**：在以太坊上发布跨多个链的事件的聚合 ZK 证明

### 生态扩展
- **Polygon CDK**：允许项目启动基于 ZK 的互联 L2，或将现有 L1 连接到 AggLayer
- AggLayer 首个组件于 2024 年 2 月上线

## ZK并购热潮（2021-2022）
Polygon在2021-2022年牛市期间进行了激进的零知识技术收购，总花费近10亿美元，是加密行业第二波并购浪潮的典型案例：

| 收购对象 | 金额 | 技术领域 | 后续 |
|---------|------|---------|------|
| Mir Protocol | $4亿 | 零知识证明技术 | 增强ZK人才储备 |
| Hermez Network | $2.5亿 | ZK Rollup扩展方案 | 融入Polygon zkEVM路线图 |

- 这两笔收购的目标是获取当时极度稀缺的ZK密码学人才（据称2021年仅约500人真正了解ZK技术）
- 2024年，Miden（Polygon关键的ZK项目之一）分拆为独立公司，引发对收购回报的质疑
- 截至2025年的观察：这些收购尚未转化为有意义的用户采用或市场主导地位，Polygon的战略相关性相比2021-2022年高峰期已大幅下降
- 这一案例被行业引为"激进人才收购可能失败的样板"：即使资金充足，缺乏合适的时机、整合和明确的下游用途也会导致投资回报不佳

## 链抽象对比
| 方案 | 核心机制 | 生态定位 |
|------|---------|---------|
| Polygon AggLayer | ZK 聚合 + 统一桥 | 以太坊生态内优化 |
| NEAR 链抽象栈 | MPC + 全栈 | 独立 L1 中心辐射 |
| Anoma | 意图中心 L1 | 协议级重新设计 |

## 生态游戏项目
- [[sunflower-land]] — Polygon 上的农场 P2E 链游，SFL 代币，种田/砍伐/采矿等玩法，2022 年上线

## 相关实体
- [[near-protocol]] — 合作开发 zkWASM，但链抽象路径不同
- [[eigenlayer]] — AggLayer 概念上与 EigenLayer 的 AVS 模式有重叠（共享安全）

## 相关概念
- [[chain-abstraction]] — AggLayer 是链抽象的三种代表性方案之一（ZK 聚合路径）
- [[layer2]] — AggLayer 本质是 L2 间的协调层

## Polygon 2.0（2023 年 8 月愿景）
Polygon 2.0 旨在统一 Polygon 的各个平台，由 ZK 技术驱动，使用独特的跨链协调协议：

- **目标**: 创建"互联网的价值层"，统一 Polygon PoS、Supernets 和 zkEVM 为一个由 ZK 技术驱动的 L2 链集合
- **无限链**: 网络可容纳无限数量的链，确保安全且即时的跨链交互
- **三大支柱**: 互操作性（ZK 证明实现跨多链流畅交互）、安全性（ZK + PoS 机制）、可扩展性（支持"实际上无限数量的链"）
- **转型计划**: Polygon PoS 侧链将从自身验证者集合保护升级为 ZK L2，用户和开发者体验不变，但安全性因 ZK 证明而增强
- **时间表**: 预计 2024 年 Q1 前启动 zkEVM validium 主网
- **差异化**: 与 Optimism（完全开源框架）、Arbitrum（无许可 L3 平台）不同，Polygon 选择更集成的模型，将 L2 产品组合在一起

## 运营策略（2023年初观察）
- **Solution 模块**: 因 Polygon 做了大量技术整合（ZK Rollup、CDK 等），单独设置 Solution 模块呈现不同技术方案
- **Web2 品牌合作**: Nike、星巴克等传统品牌选择基于 Polygon 构建。原因是 Polygon 在以太坊兼容性、技术成熟度、企业服务方面的优势使其成为 Web2 品牌进入 Web3 的首选入口。典型案例：Nike 旗下 RTFKT 的虚拟创作平台 .Swoosh 基于 Polygon 构建，但 RTFKT 已于 2024 年 12 月关停（母公司战略转向），.Swoosh 平台将继续运营（[[rtfkt]] / [[来源_2025-01_RTFKT关闭_耐克Web3失败_PANews]]）
- **潜在优化建议**（文章建议）: 打造"合作伙伴墙 + Case 解读"资料库，类似高配版 Avalanche Subnet Case Study，作为强 BD 工具吸引更多品牌合作——传统品牌拥有大量用户，合作越多越能为 Polygon 带来用户基础

## 来源
- [[来源_2023-08_L2进化趋势_Superchain_L3_Hyperchain_币安研究院]] — Polygon 2.0 愿景：ZK 驱动的统一 L2 网络，日处理 200-300 万笔交易，30-40 万活跃地址，2024 年 Q1 前启动 zkEVM validium 主网
- [[来源_2024-07_链抽象_Thanefield研报_深潮TechFlow]]
- [[来源_2024_链抽象_互操作性2.0_链爆炸]]
- [[来源_2023-01_公链运营三大维度_差异化_PANews]]
- [[来源_2025-01_RTFKT关闭_耐克Web3失败_PANews]]
- [[来源_2025-05_加密并购_买现成还是自己建_PANews]] — 本文详细记录Polygon ZK收购（Mir $4亿/Hermez $2.5亿）及Miden分拆事件，并提供对Polygon收购策略的行业批评视角
- [[来源_2025-06_以太坊RWA_监管变局_BUIDL_Etherealize_BlockBeats]] — Polygon RWA 数据：核心市值来源集中于 Spiko 与 Mercado Bitcoin 两大项目；与其他 L2 同样面临生态多样性不足的挑战
