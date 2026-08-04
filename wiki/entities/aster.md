---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, perp-dex, dex, derivatives, bnb-chain]
---

# Aster

## 基本信息
- 类型：去中心化永续合约交易所（Perp DEX），双模式架构
- 成立：2024 年 3 月 31 日（由 Astherus 与 APX Finance 合并诞生）
- 区块链：BNB Chain 生态
- 代币：$ASTER
- 投资方：YZi Labs 全资投资
- CEO：Leonard
- 定位：与 BNB 生态高度绑定，为 PancakeSwap 提供 perp 交易后端集成

## 核心业务/产品
- **Simple Mode（简单模式）**：基于链上流动性池 + Oracle 预言机定价，类似 GMX 的 GLP 模式，用户直接与资金池交易；支持高达 1001 倍杠杆（"Degen 模式"），无需预先充值
- **Pro Mode（专业模式）**：CLOB 订单簿机制，面向量化机构和做市商；配备网格交易机器人、高级 API、隐私订单功能
- **隐私订单（Hidden Orders）**：与 Hyperliquid 的"完全透明"哲学对立的核心功能——将完全隐形的限价单直接放入公开撮合引擎，仅在成交后被市场看到；利用 ZK 证明加密封装、统一流动性池 + 影子匹配算法实现
- **美股永续合约**：支持特斯拉等传统股票衍生品的 24/7 永续交易

## 关键数据
- Pro Mode 费率：maker 0.010% / taker 0.035%，针对性低于 Hyperliquid（0.015% / 0.045%）
- 代币分配：53.5% 供应量分配给社区空投，其中 8.8%（7.04 亿枚）TGE 当日空投
- Trade & Earn 功能：使用 USDF 做保证金可获得基础 APY 4.5% + 额外 12.2% APY = 合计 16.7% 收益
- **24 小时交易量：121.2 亿美元（2025年10月，Perp DEX 排名第一）**
- **30 天交易量：341.7 亿美元（2025年7月数据）**
- **24小时手续费：约 1500 万美元（2025年10月）**
- **预期回购金额：基于每日 1500 万美元手续费，市场预期总回购超 2 亿美元**
- 生态合作：PancakeSwap、SafePal、Lista DAO、Creditlink、Four.meme

## 竞争优势 / 护城河
- **双模式覆盖**：同一协议同时服务散户（AMM/高杠杆）和专业交易者（CLOB/隐私订单），形成用户分层漏斗
- **BNB 生态绑定**：PancakeSwap 提供 perp 后端、SafePal 钱包集成、Lista DAO 提供 USDF 生息资产
- **隐私订单差异化**：直接挑战 Hyperliquid 透明市场哲学，吸引担心被 Front-run 的大资金
- **保证金生息创新**：asBNB、USDF 等生息资产可直接用作保证金，提升资本效率

## 相关事件时间线
- 2025-10-06: 第三阶段空投计划"Aster Dawn"启动，为期 5 周至 11 月 9 日，4% ASTER 总供应量专项空投
- 2025-10: 启动第三阶段代币回购计划，S2 回购地址公开
- 2025-10: 移动端 App 正式登陆 iOS App Store 和 Google Play
- 2025-10-21: "Aster Vibe 交易竞技场"启动（5 万美元 ASTER 奖金池，AI 交易员竞赛）
- 2025-10: MoneySharks 在 Aster 上启动六 LLM 永续合约交易比赛

## 风险 / 争议
- 高度绑定 BNB 生态是双刃剑——生态衰退将直接影响 Aster
- 双模式架构增加技术复杂度和维护成本
- Hidden Orders 的 ZK 方案在实践中的延迟和成本是变量
- 社区质疑 perp DEX 普遍偏低的 OI/Volume ratio 表明刷量博弈空投问题依然存在

## 相关实体
- [[hyperliquid]] — 直接竞争对手，在透明市场哲学上形成对立
- [[gmx]] — Simple Mode 借鉴 GLP 模式
- [[pancakeswap]] — 生态合作伙伴，提供 perp 交易后端
- [[jupiter]] — 同类 Perp DEX 竞争者

## 来源
- [[来源_2025-10_PerpDEX格局_Hyperliquid胜利_dYdX_GMX教训_OKXVentures]] — OKX Ventures 深度分析：双模式架构细节、Hidden Orders 技术实现、BNB 生态合作策略、代币分配方案
- [[来源_2025-07_BNB_Chain_新叙事_200天_BlockBeats]] — Aster 在 Perp DEX 排名仅次于 Hyperliquid（24h 交易量 $4.5B，30 天 $341.7B）
- [[来源_2025-10_头部Perp DEX动态_Lighter_Aster_Hyperliquid_BlockBeats]] — BlockBeats 2025年10月更新：Aster 24h 交易量 121.2 亿美元居首、S3 Dawn 空投计划（4% 总供应量）、回购计划（每日 $15M 手续费预期总回购超 $200M）、移动端 App 上线、AI 交易竞技场
