---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [solana, defi, dex, amm, liquidity]
---

# Meteora

## 基本信息
- 类型：Solana 链上去中心化流动性层 / DEX
- 开发者：前 Jupiter 团队（原 Mercurial 团队转型）
- 核心产品：DLMM（Dynamic Liquidity Market Maker）、Dynamic Pools（动态池）
- TVL 峰值：约 13 亿美元（2024年1月），一度为 Solana 生态日交易量最大的 DEX
- 生态角色：Jupiter 收购的协同生态项目，Jupiter 收益优化层

## 核心业务/产品

### DLMM（Dynamic Liquidity Market Maker）
- 基于离散 Bin 结构的 AMM，每个 Bin 代表一个价格点
- 支持 **双边池**（同时提供两种代币）和 **单边池**（仅提供一种代币）
- 单边池应用：Dev/做市商可在高价位仅提供溢价代币实现自动出货，在低价位仅提供基础代币实现自动吸筹
- **Bin Step**：相邻 Bin 之间的价格间隔，以基点计（1基点=0.01%），由池子创建者设置
- **Position（仓位）**：流动性提供者的资金在特定价格区间的分配，包含价格区间、资金量、分布策略
- 分布策略：Spot（均匀分布）、Curve（钟形分布/资金集中在当前价附近）、Bid-Ask（双向分布/资金集中在当前价格两侧）

### 动态池（Dynamic Pools）
- 与 DLMM 并行存在的流动性池类型

### 价格区间计算公式
价格区间最小值: min_price = (1 + Bin_Step/10000)^lower_Bin_id / 10^(decimals_B - decimals_A)
价格区间最大值: max_price = (1 + Bin_Step/10000)^upper_Bin_id / 10^(decimals_B - decimals_A)

需从 Solscan 获取的参数：Bin_Step、lower_Bin_id、upper_Bin_id、代币精度

## 关键数据
- TVL 峰值 $13 亿（2024年1月），一度成为 Solana 生态中日交易量最大的 DEX
- 关联项目 PumpAI：Meteora 上的 AI 代币启动平台，与 Raydium、Jupiter 建立流动性池合作

## 竞争优势 / 护城河
- 单边池机制是 DLMM 相比其他集中流动性 AMM（如 Uniswap V3）的差异化优势，允许做市商仅提供一种代币的流动性
- 与 Jupiter 生态深度集成（Jupiter 为 Solana 最大 DEX 聚合器），获客成本低
- $TRUMP 等名人币使用 Meteora DLMM 单边池部署，成为 Meme 币 Dev 的标准工具之一

## 风险 / 争议
- 单边池可被 Dev 用于隐蔽的出货/吸筹操作，散户交易者处于信息劣势
- $LIBRA（阿根廷总统米莱发行的 Meme 币）使用单边池出货，涉及政治人物背书下的庞氏风险

## 相关事件时间线
- 2024年1月：TVL 创下 $13 亿美元峰值，成为 Solana 日交易量最大 DEX
- 2025年1月：Jupiter 收购 Meteora（与 PumpAI 并列作为协同生态收购项目）
- 2025年2月：$TRUMP 和 $LIBRA 等 Meme 币使用 Meteora DLMM 单边池部署

## 我的判断
Meteora 的核心价值不止于做 DEX，而在于其 DLMM 机制为做市商提供了精细化的价格区间管理工具。单边池的出货/吸筹能力使其成为 Meme 币 Dev 的标配基础设施。结合 Jupiter 的聚合优势，Meteora 在 Solana 流动性层中占据关键地位。但散户追踪其操作的教程化（如本文）正在削弱 Dev 的做市策略优势。

## 相关实体
- [[jupiter]] — 母公司/收购方，Solana 最大 DEX 聚合器
- [[phantom]] — 钱包，支持观察地址模式查看 Meteora 仓位
- [[solana]] — 所在的底层公链
- [[debot]] — 链上分析工具，可用于查找 Dev 地址
- [[gmgn]] — 链上分析工具，可识别加/撤池子交易
- [[trump-token]] — 使用 Meteora 单边池部署的知名 Meme 币

## 相关概念
- [[automated-market-maker]] — DLMM 是第三代离散 Bin 结构 AMM
- [[memecoins]] — Meteora 单边池是 Meme 币 Dev 的核心出货工具
- [[defi]] — 所属的 DeFi 赛道

## 来源
- [[来源_2025-03_Meteora_DLMM_单边池_价格区间_深潮TechFlow]]
- [[来源_2025-01_Jupiter收购时间线_DEX基建_深潮TechFlow]]
