---
type: concept
created: 2026-07-02
updated: 2026-07-02
tags: [bitcoin, ordinals, nft, inscriptions]
aliases: [Ordinals, 序数, 比特币NFT, BTC NFT]
---

# Ordinals

## 一句话定义
比特币 NFT 协议，由 Casey Rodarmor 于 2022 年 12 月创建，通过"铭文"（Inscriptions）将任意数据刻在比特币最小单位"聪"上，配合"序数"（Ordinals）编号系统追踪每个聪。

## 核心原理
- **铭文（Inscriptions）**：把文本、图片、音视频等文件刻在比特币最小单位"聪"（Satoshi）上，数据写入比特币交易的见证数据（witness data）中
- **序数（Ordinals）**：为每个聪编号的系统，赋予每个聪序列号，并在交易中追踪它们
- 依赖两次比特币网络升级：SegWit（2017）提升区块数据容量，Taproot（2021）引入新的脚本支持方式提高灵活性和功能性
- Ordinals 是链下编号方案，需要依靠链下软件对 NFT 进行解析
- 两步铸造过程：先在比特币区块链上输入铭文内容（文本/图像等），再将铭文与特定聪绑定

## 技术基础
- Ordinals 协议运行在 Bitcoin Core 全节点之上（开源软件：github.com/casey/ord）
- 比特币的 UTXO 模型和 Taproot 脚本能力使任意数据嵌入成为可能
- 与以太坊 NFT 不同，Ordinals 铭文直接存储在比特币链上，可永久保存

## 为什么重要
- 催生了比特币 NFT 生态，使"数字黄金"具备资产发行能力
- 开启了比特币可编程性探索的新范式
- 带动了 BRC-20 等代币标准，形成了完整的比特币生态体系
- 引发了对"比特币正统性"的广泛辩论（铭文 vs. 比特币原教旨主义）

## 关键项目/协议
- [[brc-20]] — 基于 Ordinals 的代币标准，使用 JSON 铭文
- [[runes]] — 替代 Ordinals 铭文代币的 UTXO 原生协议
- [[casey-rodarmor]] — Ordinals 协议创建者
- [[domodata]] — BRC-20 标准创建者

## 相关概念
- [[bitcoin-ecosystem]] — BTC 生态整体，Ordinals 是其中最活跃的赛道之一
- [[inscription]] — 铭文，Ordinals 协议的核心组成部分
- [[stamp]] — STAMPS 协议，数据存储在 UTXO 中而非见证数据，比 Ordinals 更"区块链原生"
- [[atomicals]] — 基于 UTXO 的替代协议，与 Ordinals 不同的技术路径

## 来源
- [[来源_2023-05_比特币NFT_BRC20_Ordinal_科普_TokenInsight]] — 2023年5月5日TokenInsight微信科普文，用明星纪念卡"生日"类比Ordinal编号系统，提出"比特币NFT不会归零"的独特论点（Satoshi基础价值保障），记录Taproot作为技术前提
- [[来源_2023-05_BRC20_玩转指南_BlockBeats]] — 2023年5月实操教程，记录 Ordinals 早期市场数据（单日铸造峰值 193,063 枚/累计 242 万枚/213+ BTC 费用）和 4 月代码漏洞（1,200+ 铭文受阻，67.5% 反对修复）
- [[来源_2023-05_BTC_Ordinals生态_代币协议_全景指南]]
- [[来源_2023-05_Ordinals是什么_TokenInsight]] — TokenInsight 技术详解：铭文代码实现、Ordinal 理论先进先出追踪规则、早期生态快照与前景判断
- [[来源_2025-06_叙事评分_加密货币_NarrativeScore]] — Ignas 将 Ordinals 作为零到一创新案例（创新评分 9/10），详细描述了其四波投机浪潮：Dec 2022 理论发布 → Mar 2023 BRC-20 Wave 1 → Late 2023/Early 2024 Waves 2&3 → Apr 2024 Runes launch，指出 Ordinals 因其适度简化度（5/10）传播速度中等，但多次波浪给予了多次退出机会
- [[来源_2023-05_聪时代_Ordinals_闪电网络_LKVenture]] — LK Venture 2023年5月研报，提供 Ordinals 发布仅4个月时的早期生态快照（铭文突破160万枚），提出"聪计价时代"概念框架，收录BRC-20诞生初期数据（首个代币$ordi两天全量Mint、4473种代币/总市值约4000万美元）
- [[来源_2023-05_BTC生态重点项目盘点_Biteye]] — Biteye 2023 年 5 月记录：Ordinals NFT 早期头部六个项目详情及其地板价数据；Ordinals 协议技术原理概述（聪编号+附加数据至比特币区块链）
- [[来源_2023-05_Ordinals_BRC20_技术生态数据_Biteye]] — 同月 Biteye 另一篇全景文章，侧重 Ordinals 技术原理详解（序数编号范围 0-2.1 千万亿、铭文 Taproot 脚本存储 vs 以太坊 NFT 链下存储对比）和 BRC-20 热潮巅峰数据（5 月 8 日超过 1.4 万种代币/总市值 8 亿美元/ordi 占 65%/单日 37 万笔交易/61% 矿工费占比创历史新高）
- [[来源_2023-05_比特币生态_项目工具_ODaily]] — Odaily 2023 年 5 月比特币生态全景扫描，涵盖 24 个项目（钱包/市场/工具/DeFi/域名/DAO），包括 Ordinals Wallet、Hiro Wallet、Xverse、UniSat 等早期钱包和市场
- [[来源_2023-05_Ordinals家族_BRC20_协议对比_BlockBeats]] — 以"家族树"框架系统梳理 Ordinals 协议发布不到半年内的生态扩张，按同质化代币/非同质化代币/衍生/分叉四类组织；包含稀有度六层精确供应量数据、ORDI JSON 字段详解、Generative BRC-721 OrdiBots 案例、SRC-20/STAMPS 的技术上限（24x24/8色）
- [[来源_2023-03_出名OrdinalsNFT_六大项目]] — 盘点 6 个早期知名比特币 Ordinals NFT 项目（TwelveFold/Bitcoin Punks/Taproot Wizards/Pixel Pepes/Bitcoin Rocks/Ordinal Punks），记录 TwelveFold 盲拍细节（1650万美元/10 BTC最高出价/288名中标者）和 Taproot Wizard 创下 Bitcoin 最大 4MB 区块的链上记录
