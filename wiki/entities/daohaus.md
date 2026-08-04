---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [dao, framework, tooling]
---

# DAOHaus

## 基本信息
- 类型：DAO 部署与管理平台
- 定位：基于 Moloch 框架的 DAO 创建和运营前端，提供一站式 DAO 启动和治理操作界面
- 核心贡献者：Spencer Graham 等
- 关系链：DAOHaus 是 Moloch 框架的主要前端推动者

## 核心业务/产品
- **DAO 一键部署**：通过前端界面快速创建基于 Moloch 框架的 DAO，配置投票周期、法定人数、初始成员和份额等参数
- **提案投票**：DAOHaus 提供投票和提案管理功能
- **Boosts（插件系统）**：模块化扩展机制，允许 DAO 安装外部插件将链上活动集成到 Discord、Discourse、Gnosis Safe 等外部应用
- **Discord 集成**：通过 Boosts 插件，Discord 频道可在有提案活动时实时通知社区成员
- **Zodiac 集成**：DAOHaus 采用 Gnosis Zodiac 实现任意合约调用（通过提案执行）

## 关键数据
- 2021年已是 Moloch 框架 DAO 部署的主要前端
- Boosts 市场提供多种可插拔集成
- 曾驱动 The LAO、MetaCartel 等多个知名早期 DAO 的运营

## 竞争优势 / 护城河
- 与 Moloch 框架深度绑定，Moloch 的"Rage Quit"（在投票通过后不同意者可销毁份额退出）机制提供了独特的治理安全阀
- Boosts 市场对标传统 SaaS 的"扩展包"模式，DAO 可以按需安装功能
- 提供从 DAO 创建到运营的完整工具链，降低非技术用户门槛

## 风险 / 争议
- 依赖 Moloch 框架的局限性——Moloch 擅长管理资金库（Guild Bank），但不一定适合所有类型的 DAO
- 随着 Zora、Juicebox 等更垂直的提案平台兴起，通用 DAO 框架的吸引力下降
- 2022年后 DAO 叙事的整体降温影响了 DAOHaus 的新 DAO 创建速率

## 相关实体
- [[snapshot]] — DAOHaus 与 Snapshot 互补：DAOHaus 处理 DAO 创建和链上操作，Snapshot 处理链下信号投票
- [[gnosis]] — DAOHaus 采用 Gnosis Zodiac 实现任意合约调用
- [[safe]] — Gnosis Safe 多签是 DAOHaus DAO 资金库管理的基础组件

## 来源
- [[来源_2021-09_DAO_Tooling_组织乐高]]
- [[来源_2022-08_DAO补偿_Coordinape_Hedgey]] — 补充 DAOhaus 作为 Hedgey 协议首个用户的 Time-Locked Distribution Boost 产品细节：贡献者锁定 HAUS 一年可赚取双倍 HAUS，混合薪酬模型（稳定币 + 锁仓原生代币 NFT）
