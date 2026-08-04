---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [layer2, ethereum, zk-rollup, hyperchain, scaling]
aliases: [zkSync Era, zkSync Lite, Matter Labs, Hyperchain]
---

# zkSync

## 基本信息
- **类型**: Ethereum Layer 2（ZK Rollup / zkEVM）
- **开发团队**: Matter Labs
- **主网上线**: zkSync Era 于 2023 年 3 月上线主网
- **TVL**: 主网上线后迅速超过 6.25 亿美元，成为最广泛使用的 zkEVM 解决方案之一
- **终极目标**: 超级可扩展性（Hyperscaling）——管理无限数量的交易，不妥协安全性或去中心化

## 核心架构

### zkSync Era
Matter Labs 的 zkEVM rollup，利用 ZK 证明实现即时验证（无需 7 天挑战期）。

### Hyperchain（超级链）
zkSync 对 L3 的愿景：一个广泛的无信任和可定制的链接区块链生态系统。采用模块化方法，为开发者提供 Hyperchain SDK 框架，允许选择或开发各种组件。

Hyperchain 五大优势：
- **安全性**: 分形 Hyperchain 之间的交互通过本地桥进行，克服非本地桥接的典型漏洞
- **性能**: 通过 Hyperchain 架构实现超级可扩展性
- **成本**: 数据可用性解决方案显著降低数据费用
- **易用性**: SDK 包含低代码/无代码解决方案
- **组合性**: LLVM 编译器支持 Solidity 及 Rust、C++、Swift 等现代编程语言

### 超级扩展理论（Hyperscaling）
多个不同的 ZK 链（超级链）并行运行，区块证明被聚合并以递归方式在 L1 上结算。理论上可支持无限数量的超级链。

核心创新——**超级桥**：
- 本地桥将每个 L3 应用链连接在一起
- 超级链之间的转移不消耗第三链上的资源
- 确保基链不成为中央可扩展性瓶颈
- 类比：超链接允许从一个网页无缝导航到另一个网页，只需一次点击

对比：没有超级桥的分形扩展会让基链随时间推移成为大多数转账的主要交点，最终成为可扩展性障碍。

## 技术差异化
- 与 Optimism（开源模块化 + Superchain）和 Arbitrum（无许可 L3 平台）在执行策略上有所不同
- LLVM 编译器是其独特优势：支持多编程语言，降低非 Solidity 开发者的进入门槛
- ZK 证明提供即时最终性（vs Optimistic Rollup 的 7 天挑战期）

## 风险 / 争议
- 2024 年面临"从天王到天亡"的市场评价，生态发展未达早期预期
- ZK 技术的证明生成成本仍是难点
- 与 Optimism/Arbitrum 的用户和流动性竞争激烈

## 相关概念
- [[layer2]] — ZK Rollup 技术路线代表
- [[cross-chain]] — 超级桥是对跨链互操作性的新方案

## 相关实体
- [[arbitrum]] — 同为以太坊 L2 头部，Orbit L3 路线 vs Hyperchain 路线
- [[starkware]] — 同为 ZK 路线，分形扩展概念启发了 zkSync 的超级扩展
- [[celestia]] — 替代 DA 层方案

## 来源
- [[来源_2023-02_Rollup_ZKRollup_Optimistic_Arbitrum区别_Future小哥哥]] — 2023年初科普：ZK 四特点定义（Zero Knowledge/Succinct/Non-Interactive/Argument of Knowledge），ZK Rollup 本质为 PoW 共识 L2（任何人都可参与认证），适合支付/交易所等快速结算业务
- [[来源_2023-08_L2进化趋势_Superchain_L3_Hyperchain_币安研究院]] — 币安研究院 L2 进化报告：Hyperchain/超级扩展/超级桥详解
- [[来源_2024-09_数据中的L2_戛然而止的增长_淘汰赛开启]] — zkSync 从"天王到天亡"的后续发展
- [[来源_2025-08_a16z_银行_资管_Fintech_区块链转型_深潮TechFlow]] — zkSync母公司Matter Labs与全球银行合作展示跨境支付和日内回购协议的近实时结算；zkSync作为基于零知识的协议实现链上私密交易，满足监管合规需求
- [[来源_2022-07_以太坊_L2_Rollup扩容方案_综述]] — 2022 年中 zkSync 早期生态全景：2.0 测试网阶段、Matter Labs $58M 三轮融资详情、< 40 项目未上线、生态以 NFT/DeFi/基础设施为主，钱包/跨链桥的特殊性
- [[来源_2025-06_以太坊RWA_监管变局_BUIDL_Etherealize_BlockBeats]] — zkSync 凭借 [[tradable]] 项目单一驱动跃居 L2 RWA 市值第二；但其 RWA 资产多样性匮乏，高度依赖 Tradable 单一项目，构成结构性缺陷
- [[来源_2025-02_空投市场_三大矛盾_深潮TechFlow]] — zkSync的多重条件筛选策略被引用为严格筛选型空投的典型案例
- [[来源_2023-03_zkSync_Lite_Era_交互指南_MingoAirdrop]] — 2023 年初 zkSync 空投 farming 实操指南：Lite/Era 双版本交互方法、跨链桥使用、DEX 交易、NFT 铸造、生态项目推荐
