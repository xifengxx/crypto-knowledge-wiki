---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, perp-dex, dex, ethereum, mobile]
---

# EdgeX

## 基本信息
- 类型：去中心化永续合约交易所（Perp DEX），模块化金融系统
- 成立：2024 年 7 月（Amber Group 加速器孵化的首批项目）
- 开发者：Amber Group
- 结算层：以太坊（StarkEx L2）
- 定位：移动端优先的 Perp DEX，目标降低 CEX 用户迁移门槛
- 优势市场：韩国社区（移动端 App 体验获好评）

## 核心业务/产品
- **V1 - StarkEx 永续合约**：基于 StarkEx 实现无信任结算和抗审查功能（强制提款）；交易在链下执行后提交 StarkEx 生成证明，最终在以太坊结算
- **强制提款（Forced Withdrawal）**：用户若在宽限期（1-2 周）内未获提款处理，可注册 Stark Key 到 L1 地址，通过 Merkle 证明直接退出——资金始终保存在以太坊合约中
- **V2 - 模块化金融系统**：提供即插即用的金融模块（交易、流动性、借贷、钱包），类似金融领域的"乐高积木"，让低编程能力用户也能构建金融产品
- **统一 DeFi 入口**：聚合多链流动性 + 统一前端 UI（网页、App、TG Bots），简化多链复杂性
- **移动端优先**：原生移动应用（App Store 已上架）

## 关键数据
- 24 小时手续费收入：230 万美元（2025年10月，超越 Hyperliquid 成为链上手续费之王）
- 24 小时交易量：50.6 亿美元（2025年10月，Perp DEX 排名第四）
- 桥接资金净流入量排名第二（仅次于以太坊，2025年10月）

## 竞争优势 / 护城河
- **移动端体验**：Perp DEX 中少有的原生 App 体验，针对韩国等移动交易活跃市场
- **强制提款安全机制**：用户可独立退出，抗审查能力较强
- **V2 模块化愿景**：从单一 Perp DEX 扩展到完整金融平台
- **Amber Group 资源支持**：大型做市商/交易公司的技术和流动性支持

## 风险 / 争议
- V2 从"交易工具"到"金融操作系统"的跨越极大，执行风险高
- V1 使用 StarkEx 依赖中心化 Sequencer，仅通过 ZK 证明验证结果而非过程
- 模块化金融系统概念与 [[jupiter]]、Aster 等竞品方向类似，最终可能趋同

## 相关实体
- [[dydx]] — dYdX v3 也基于 StarkEx，类似的 L2 架构路径
- [[hyperliquid]] — Perp DEX 龙头竞争者，edgeX 24h 手续费收入（$230万）曾超越 Hyperliquid
- [[jupiter]] — 同样从单一功能向生态基建扩展的策略对比
- [[aster]] — Perp DEX 竞争对手

## 相关事件时间线
- 2025-10: 24 小时手续费收入 230 万美元超越 Hyperliquid，成为链上手续费之王（据 Artemis 数据）
- 2025-10: 桥接资金净流入量排名第二，仅次于以太坊
- 2025-10: 推特发起吉祥物/代币符号投票（24 小时内 11.1 万次浏览），被解读为 TGE 即将到来的明确信号
- 2025-10: 管理员在 Telegram 群确认 TGE 按计划推进，将逐步公布代币经济模型和分配方案

## 来源
- [[来源_2025-10_PerpDEX格局_Hyperliquid胜利_dYdX_GMX教训_OKXVentures]] — OKX Ventures 深度分析：V1/V2 双阶段产品设计、强制提款机制、移动端优先策略、Amber Group 孵化背景
- [[来源_2025-10_头部Perp DEX动态_Lighter_Aster_Hyperliquid_BlockBeats]] — BlockBeats 2025年10月更新：edgeX 24h 手续费 $230 万超越 Hyperliquid、TGE 信号明确、Telegram TGE 确认
