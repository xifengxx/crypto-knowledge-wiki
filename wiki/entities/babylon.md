---
type: entity
entity_type: protocol
created: 2026-06-28
updated: 2026-07-01
tags: [bitcoin, staking, btc-l2]
---

# Babylon

## 基本信息
- 定位：比特币质押协议——让 BTC 持有者在不放弃托管权的情况下获得收益
- 核心创新：BTC 远程质押（Remote Staking）为 PoS 链提供安全
- 第一阶段主网上线：2024 年 8 月，1000 BTC 上限全部达成，1.27 万+ 用户参与

## 核心业务
三层架构：比特币（底层）→ Babylon（中间层，负责远程质押+时间戳服务器）→ PoS 链（上层，检查点记录到比特币主网）。BTC 持有者将 BTC 锁定在比特币主网 → Babylon 协议验证 → 为其他 PoS 链提供安全 → BTC 持有者获得质押收益。不需要跨链桥，不需要信任第三方。

## 关键数据
- 累计融资：9,600 万美元（Paradigm、Polychain、OKX Ventures、Binance Labs 等参投）
- 主网上线：2024 年 8 月
- 第一阶段质押上限：1000 BTC（全部达成），占 BTC 流通量不到 0.0051%
- 参与用户：12,700+ 人
- 质押总价值：截至 2025 年 7 月超过 50 亿美元
- Baby 代币已上线 Binance、OKX、Bybit、KuCoin 等主流交易所

## ATA Creativity Global 合作（2025年8月）
2025 年 8 月，Baby BTC Strategic Capital（Babylon 基金会为主要 LP）以 1 亿美元投资获得纳斯达克上市公司 ATA Creativity Global（Nasdaq: AACG）的控制权。ATA 的差异化策略包括：与 Babylon 深度合作激活 BTC 生态、引入比特币质押（BTC staking）到 DeFi、大规模收购 Baby 代币（流通市值约 1 亿美元，ATA 计划等量资金收购，相当于对市值的 100% 再投入）。

## ⚠️ 安全模型争议
Babylon 的 PoW+PoS 共享安全模型存在结构性质疑（来自金色财经 2024.08 分析）：
- BTC 质押者是资产持有者，并非比特币网络安全的主动维护者（矿工才是），安全传递链条存在断裂
- PoS 网络安全性实际与"比特币网络"低相关，与"BTC 质押者"强相关——是资产层面担保，还是网络层面共享？
- 技术上存在 PoW 分钟级出块不确定性 与 PoS 秒级终局性的协同问题
- 第一阶段 1000 BTC 占比极小，经济上尚未真正共享比特币网络安全性
- 立场：如果后续阶段无法有效回应这些挑战，其"BTC 共享安全层"的叙事基础将受到根本性削弱

## 为什么重要
- 激活沉睡的 BTC 流动性（$1 万亿+ 市值）
- 为 PoS 链提供比特币级别的安全性（受上述争议约束）
- BTC ETF 后的新叙事：让 BTC 从"数字黄金"变成"生息资产"

## 相关概念
- [[bitcoin-ecosystem]] — Babylon 是 BTC L2/质押赛道的龙头
- [[liquid-staking]] — BTC 质押 vs ETH 质押
- [[restaking]] — Babylon 在 BTC 生态的定位类比 EigenLayer，但安全模型有根本差异

## 来源
- [[来源_2024_Babylon_BTC质押_唤醒万亿美元流动性]]
- [[来源_2025-08_币股_机构趋势_深潮TechFlow]] — 补充融资 9,600 万美元、质押总价值超 50 亿美元、Baby 代币上线主流交易所、ATA Creativity Global 控制权收购等信息
- [[来源_2023-Q3_比特币生态DApp盘点_DeFi_NFT_基础设施_钱包_BlockBeats]] — Q3 2023 Babylon 被列为比特币基础设施赛道项目，定位为"从比特币链提取安全性与 Cosmos/BSC/Polkadot 等 PoS 链共享"
- [[来源_2024-08_Babylon主网上线_BTCFi赛道再思考]] — 主网第一阶段数据 + PoW+PoS 共享安全模型三层质疑
- [[来源_2024-08_BTC生态_重大变化_Odaily]] — 主网质押首日参数（1000 BTC 上限/0.005-0.05 BTC 单笔范围/积分系统过渡设计）、PumpBTC 和 pSTAKE 的 LST 配合活动
- [[来源_2023-12_多Rollup世界_基础设施_SevenX]] — Babylon BTC 原生质押无需跨链机制详解：通过优化比特币脚本语言使用和整合高级加密机制，双重签名等无效行为会泄漏验证者 BTC 私钥并在比特币网络上销毁其 BTC；第二个测试网将推出 BTC 质押功能；首个测试网已为 Akash/Osmosis/Juno 等 Cosmos 链高价值 DeFi 活动提供时间戳服务
