---
type: entity
entity_type: project
created: 2026-07-01
updated: 2026-07-02
tags: [layer2, infrastructure, rollup]
---

# AltLayer

## 基本信息
- 类型: RAAS (Rollup-as-a-Service) 提供商
- 赛道: Rollup 基础设施 / 模块化区块链
- 核心功能: 帮助项目方一键部署 Rollup，并提供信标层 (Beacon Layer) 作为 Rollup 的社交层

## 核心业务/产品

### RAAS 服务
提供 Rollup 的初始开发和部署服务，大幅降低启动 Rollup 的复杂性和工作量，体现分工的经济效益。

### 信标层 (Beacon Layer)
信标层是 AltLayer 的核心差异化组件，位于 Rollup 和 Layer 1 之间：

- **社交分叉机制**：无论以太坊上的桥接合约是否升级，与信标层 Rollup 验证器一起运行 Rollup 的排序器都可以以社交方式分叉 Rollup。这解决了智能合约 Rollups 中桥接受多签控制、可通过恶意升级窃取用户资金的安全问题。
- **加速终局性**：信标层的排序器负责排序、执行和生成有效性证明 (POV)。有效性证明允许验证者在不访问整个状态的情况下验证 Rollup 的状态转换。通过去中心化验证器定期检查，实现高度稳健的交易终局，无需等待 7 天挑战期。
- **生态内互操作**：通过 AltLayer 启动的 Rollup 都被封装到信标层，信标层充当结算中心，确保安全的互操作性。

## 竞争优势
- 将 RAAS 便利性与独特的信标层安全机制结合
- 社交分叉概念为 Rollup 升级提供了额外的安全保障
- 验证器网络定期检查机制降低了终局等待时间

## 相关实体
- [[eigenlayer]] — 共享安全层的代表性项目
- [[arbitrum]] — 主流 Optimistic Rollup，面临类似的安全挑战
- [[celestia]] — 模块化数据可用性层

## 来源
- [[来源_2023-12_多Rollup世界_基础设施_SevenX]]
- [[来源_2024-04_ZK模块化新星_Lumoz_RaaS_PANews]] — 将 AltLayer 作为 Lumoz 的对标项目，AltLayer 通过再质押排序器赋能 RaaS（MC $6.7 亿 / FDV $53 亿），Lumoz 通过共享 ZK 算力赋能 RaaS
