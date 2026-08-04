---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [bitcoin, lightning, infrastructure, l2]
---

# Lightning Labs

## 基本信息
- 定位：Lightning Network 核心软件开发方
- 产品：开源、安全、可扩展的 Lightning 网络软件系统
- 服务：非托管、可验证的基于 Lightning 的金融服务
- 赛道：Bitcoin L2 基础设施

## 核心产品
- Lightning Network 节点软件（LND）
- Lightning 金融服务（非托管）：连接开源软件与下一代比特币金融应用

## 融资
- 2022 年 4 月 5 日：$7000 万 B 轮融资
- 领投方：Valor Equity Partners、NYDIG、Goldcrest Capital、Baillie Gifford、Vlad Tenev
- 其他知名投资者：CMT Digital、Electric Capital、Digital Currency Group、Craft Ventures

## 相关实体
- [[bitcoin]] — 底层 L1 资产
- [[craft-ventures]] — 投资方

## 关键人物
- **Tadge Dryja**: 闪电网络白皮书联合作者，2015 年与 Joseph Poon、Elizabeth Stark 共同创建 Lightning Labs。2016 年底因与团队（特别是 Olaoluwa Osuntokun）的技术路线分歧离开，加入 MIT DCI 继续闪电网络研究（Utreexo 等项目），2022 年加入 Lightspark 任高级研究科学家
- **Olaoluwa Osuntokun (Roasbeef)**: 联合创始人兼 CTO，开发了兼容性更好的 LIT 协议（vs Tadge Dryja 的首版 LIT 协议 vs Blockstream 的 BOLT 协议），在开发者社区中获得更广泛认可。历史上与 Dryja 存在「君子之争」，但两人在 [[op-cat]] 支持上达成共识

## 相关技术趋势
- **Taproot Assets**：Taproot 升级后闪电网络获得发币能力，理论上可在闪电网络上发行数字资产
- **Nostr 集成**：Nostr（去中心化消息协议）与闪电网络互补——Nostr 负责去中心化消息传递，闪电网络负责快速低成本金融交易，两者结合有望支持下一代去中心化应用
- **OP_CAT 支持**：CTO Olaoluwa Osuntokun 公开支持 [[op-cat]]，视其为闪电网络后比特币的重大突破。与前任联合创始人 Tadge Dryja（现 Lightspark）在此议题上罕见达成共识。OP_CAT 的拼接功能可提升闪电网络类支付通道的中间交易管理和验证效率
- 当前闪电网络主要挑战：用户进入门槛高、缺乏去中心化业务基础设施、总体网络规模仍然有限

## 来源
- [[来源_2023-06_Taproot_Assets_比特币本地代币_公众号]] — 指出Taproot Assets由闪电网络开发组推出，文档与闪电网络文档共同发布；称Taproot Assets开发者是"目前所有基于比特币开发代币方案中最强的"；获得Bitcoin Core开发者支持
- [[来源_2024-12_David_Sacks_白宫加密负责人_投资组合_BlockBeats]]
- [[来源_2023-12_ORDI_比特币生态_BRC-20_L2_RGB_BlockBeats]] — Nostr+闪电网络作为比特币生态中期第二赛道；Taproot Assets 发币能力；2023.07 币安集成闪电网络
- [[来源_2024-08_BTC生态_重大变化_Odaily]] — Taproot Assets 首批稳定币落地：Speed Wallet（USDT-L 桥接以太坊 USDT）、Lnfi Network（前 Nostr Assets，LN Bridge 桥接为 TA-USDT）；验证"走稳定币路线"策略
- [[来源_2024-09_OP_CAT_BIP347_比特币智能合约_ChainCatcher]] — Tadge Dryja 离开 Lightning Labs 历史揭示（2016 年底）+ Olaoluwa Osuntokun 公开支持 OP_CAT + 两人「宿敌共识」故事线
- [[来源_2024-02_BTC衍生协议_正统性_炒作分析]] — 指出 Lightning Labs 同时控制最去中心化的支付方案（闪电网络）和最中心化的发币方案（Taproot Assets），揭示双重身份的内含利益冲突；"正统性是一种虚幻而朦胧的概念，拥有话语权的'教宗'说你合法你就是合法"
