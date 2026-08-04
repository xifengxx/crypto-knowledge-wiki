---
type: concept
created: 2026-07-02
updated: 2026-07-02
tags: [tbd]
---

# Lightning Network

## 一句话定义
Bitcoin Layer 2 payment network for instant, low-cost transactions

## Taproot Assets（原名 Taro）
Taproot Assets 是由 Lightning Labs 推出的比特币资产协议，在比特币主网的 UTXO 输出脚本中写入 Token 信息作为注册，而转账交易等功能在闪电网络中实现。

### 与 BRC-20 / ARC20 的区别
- **发行方式**：不是自由铸造，而是项目方预先在一个地址中一次性铸造所有代币，再转入闪电网络分发。这种方式吸引 USDT 等稳定币部署，但代币分配不如 BRC-20 或 ARC20 公平
- **数据存储**：仅将代币相关信息写入 BTC 主网的未使用交易输出脚本（UTXO），没有存储转账或增发功能代码
- **交易依赖**：BTC 主网作为代币注册表，资产必须存入闪电网络才能交易
- **中心化风险**：依赖第三方存储索引器，如果索引器丢失，代币将永久丢失。是目前 BTC 代币协议中最中心化的方案之一
- **社区评价**：由 Lightning Labs 发布，没有给 BTC 网络增加负担，社区至少没有反对声音

### BRC-21 跨链稳定币部署
BRC-21 标准（由 [[interlay]] 创始人 Alexei Zamyatin 于 2023 年 5 月提出）的核心应用场景之一是将去中心化稳定币（如 DAI、RAI）引入比特币网络并部署至闪电网络。Interlay Labs 认为，通过 BRC-21 以完全去中心化形式将稳定币桥接至比特币，再利用闪电网络的支付通道能力，比直接为比特币构建编程协议更有可能实现大规模采用。参见 [[来源_2023-05_BRC-21_跨链_ODAILY]]。

## 来源
- [[来源_2023-05_BRC-21_跨链_ODAILY]]
- [[来源_2023-05_BTC_Ordinals生态_代币协议_全景指南]] — 提供了 Taproot Assets 与 BRC-20/ARC20 的技术对比：BTC 主网仅作为注册表、闪电通道交易、非自由铸造、依赖第三方索引器
- [[来源_2023-05_币安研报_BTC生态_潜在机会]] — 币安研报提供2023年初闪电网络精确数据：超4000万TPS理论容量、$0.000000572基础费用中位数、萨尔瓦多/Twitter/Cash App国家及企业级采用案例、LDK (Lightning Developer Kit) 和 Taro (Taproot Asset Representation Overlay) 开发进展
- [[来源_2025-04_比特币生态_RWA赛道_Web3全景_PANews]] — Infinity Labs闪电网络更新数据：节点数突破6万/日交易量$1.2亿/2025年整合Taproot Assets后将开启支付+资产流通新周期、Taproot Assets支持闪电网络通道内发行稳定币/提升链下交易效率
- [[来源_2023-05_BRC20_闪电网络_RGB_扩容_ChainCatcher]] — 2023年5月BRC-20热潮背景下的闪电网络数据快照：1.6万节点、7.3万支付通道、5376 BTC锁仓（$1.4亿）；单次交易费约$0.0001；Strike（Zap前身/$8000万B轮/Ten31领投）、Taro（Lightning Labs）、Lightspark（David Marcus/a16z+Paradigm）三个代表应用早期状态
- [[来源_2023-05_聪时代_Ordinals_闪电网络_LKVenture]] — LK Venture 2023年5月研报，提供同期闪电网络数据（1.6万节点/7.5万通道/5379 BTC通道资金/$1.52亿），详述三大商用场景：社交打赏（Nostr/Damus）、跨境汇款（Strike-Send Globally）、商户支付（Shopify-麦当劳体系），并指出闪电网络100美元手续费仅约1美分
- [[来源_2023-06_BTC_L2_闪电网络_Stacks_RGB]] — 补充闪电网络理论 4000 万+ TPS 和约 $0.0001/笔费用数据；Taro（Taproot Assets）协议定位为"在比特币链上发行资产并在闪电网络流通"；Strike/Lightspark 两个应用早期详情
- [[来源_2025-06_Bitcoin2025_大会_拉斯维加斯_BlockBeats]] — Block旗下 Square 在 Bitcoin 2025 大会现场启动比特币闪电网络实时支付试点，参会者可通过闪电网络购买周边商品
