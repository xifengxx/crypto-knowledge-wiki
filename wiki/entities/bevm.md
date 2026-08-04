---
type: entity
entity_type: project
created: 2026-06-30
updated: 2026-06-30
tags: [btc-l2, bitcoin, evm, defi, btc-fi]
---

# BEVM

## 基本信息
- **类型**: 比特币 EVM 兼容 Layer 2（侧链架构）
- **赛道**: BTC L2、BTC-Fi、跨链互操作
- **成立时间**: 不详（2023 年 12 月已有测试网和生态产品）
- **官网**: https://www.bevm.io/
- **代币**: 尚未发币（截至 2023 年 12 月），官方暗示空投

## 核心业务/产品
BEVM 定位为第一个完全去中心化的 EVM 兼容 BTC L2，核心产品包括：
1. **BEVM 区块链** — 以 BTC 为 Gas 的 EVM 兼容链，支持 Metamask、Truffle/Hardhat、Solidity
2. **BEVM Blockchain Explorer** (scan.bevm.io) — 官方链上浏览器
3. **BSWAP** (bswap.bevm.io) — BTC-EVM DEX，支持 BRC20 与 ERC20 兑换
4. **BITBOX** (bswap.bevm.io/#/bridge) — Ordinals 铭文服务平台

未来规划兼容更多非 EVM 的 L1 网络，将 BTC 及链上资产拓展到任意链。

## 关键数据
- 白皮书 NFT 铭文：1 万个，在 Magic Eden Ordinals 市场交易
- BSWAP 上资产池以 BTC 成对为主，多数为铭文资产（Ordi、Sats）
- 官方在 Zealy 发布社区任务，Discord 设有角色系统

## 竞争优势 / 护城河
- **EVM 兼容性**：让以太坊开发者零学习成本进入 BTC 生态，DeFi/GameFi 等 EVM 应用可无缝迁移
- **BTC 作为 Gas**：强化 BTC 在生态中的核心地位
- 完整的生态闭环：浏览器 + DEX + 铭文服务平台
- 计划扩展到非 EVM L1，长期想象空间大于纯 BTC 侧链

## 风险 / 争议
- "完全去中心化"声称与侧链独立共识架构存在张力，验证节点数量和控制权未披露
- 侧链架构不继承 BTC 主网安全性，跨链桥存在攻击风险
- 2023 年底未发币状态下通过空投预期吸引用户，本质是"撸空投经济学"驱动
- BTC L2 赛道极度拥挤（Stacks/Merlin/Babylon/SatLayer 等），BEVM 差异化（EVM 兼容+BTC Gas）可复制性强
- 2023 年底至 2026 年发展情况需后续追踪验证

## Super Bitcoin 框架（2024年发布）
BEVM 发布 Super Bitcoin 白皮书，技术战略从"EVM兼容侧链"转向"基于闪电网络的共享比特币共识安全"框架：

- **核心口号**：无法共享比特币共识安全的比特币Layer2都得死
- **方案**：把 Bitcoin 作为基础账本层，闪电网络作为唯一比特币二层，把点状闪电网络节点升级为支持智能合约的链状节点，突破闪电网络只能做支付的限制
- **模块化扩展**：通过模块化抽象，把比特币共识安全共享给基于 Super Bitcoin 模块化 Stack 构建的各种 Lightning Chain

## 相关实体
- [[lightning-network]] — Super Bitcoin 将闪电网络定位为唯一 BTC L2 基础设施层
- [[tectum]] — 同时期报道的 BTC 扩容项目，采用完全不同的票据化路径
- [[merlin-chain]] — 另一 BTC L2，同样采用 EVM 兼容路线
- [[bitcoin]] — 比特币主网
- [[stacks]] — 老牌 BTC 侧链

## 来源
- [[来源_2023-12_铭文狂热_BTC_L2_Tectum_BEVM]]
- [[来源_2024-02_比特币二层Layer2_基础知识体系_BlockBeats]] — 付少庆系统分类BTC L2：BEVM为基于链的二层建设，利用Taproot/Schnorr签名实现去中心化BTC跨链，EVM兼容，2023.11.29发布白皮书
- [[来源_2024-10_共享比特币共识安全_BTC_Layer2困境_Web3CN]] — BEVM发布Super Bitcoin白皮书，从EVM侧链定位升级为共享BTC共识安全框架，提出基于闪电网络节点升级+模块化Lightning Chain的解决方案
