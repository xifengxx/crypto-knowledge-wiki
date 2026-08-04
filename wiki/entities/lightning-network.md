---
type: entity
entity_type: project
created: 2026-07-01
updated: 2026-07-01
tags: [bitcoin, layer2, state-channels, payment, scaling]
---

# 闪电网络 (Lightning Network)

## 基本信息
- 类型: 比特币 Layer2 状态通道网络（基于分布式系统的二层建设）
- 提出时间: 2015年首次提出，2018年开始全面实施
- 定位: 解决比特币可扩展性和低交易速度的二层解决方案
- 技术基础: RSMC协议（保证交易安全可靠）+ HTLC（解决可路由可扩展性）

## 核心机制
闪电网络通过建立一系列支付通道，使得比特币交易可以在通道内部进行，不需要直接记录在区块链上。核心依赖两个协议：
- **RSMC** (Revocable Sequence Maturity Contract): 保证通道内交易安全可靠，防止双花
- **HTLC** (Hashed Time-Locked Contract): 解决多跳支付路由问题，实现跨多个通道的价值传递

架构特点：去中心化的分布式系统（非区块链结构），拥有理论上的无限扩展能力。

## 关键数据
- 提出时间: 2015
- 全面实施时间: 2018
- 长期流通 BTC: 约 5,000 BTC（无任何代币激励），超过绝大多数依靠代币激励吸引 BTC 的 BTC L2 项目
- 特点: 快速、低成本、可扩展

## 竞争优势 / 护城河
- **比特币原生的支付扩展方案**：与比特币网络紧密集成，不引入新共识机制
- **理论无限扩展性**：基于Channel的分布式架构，并行交易能力不受区块大小限制
- **低费用+即时确认**：通道内交易秒级完成，费用极低
- **安全继承**：通道最终结算在比特币主网上，继承BTC安全性

## 风险 / 争议
- **发展缓慢**：分布式系统中的路由算法、价值拆分与封装算法复杂度高，工程实现经验不足
- **用户体验挑战**：通道管理、流动性锁定、在线要求等增加了使用门槛
- **通道容量限制**：单通道内价值传递受限于锁定BTC数量
- **路由效率**：在庞大分布式系统中寻找最优支付路径的算法仍在优化中
- **接收方流动性问题**：接收支付需要预先锁定的通道容量
- **核心开发者流失**：2024 年多位开发人员宣布退出闪电网络相关工作，Nostr 创始人 Fiatjaf 直言「闪电网络正在骗取比特币用户的时间、精力和金钱长达 6 年」
- **OP_CAT 作为替代方向**：部分闪电网络核心开发者（包括白皮书联合作者 Tadge Dryja、Lightning Labs CTO Olaoluwa Osuntokun）已将注意力转向 [[op-cat]]，视其为闪电网络之后比特币的下一个重大突破

## 相关协议/项目
- [[bevm]] — BEVM 的 Super Bitcoin 框架将闪电网络定位为唯一 BTC L2 基础设施层，在其上构建支持智能合约的链状节点和模块化 Lightning Chain
- [[rgb-protocol]] — RGB可在闪电网络通道上实现图灵完备智能合约，将闪电网络从"价值传递"扩展到"价值传递+计算"
- [[lightning-labs]] — Lightning Labs公司，闪电网络核心开发团队
- [[bitcoin]] — 底层结算层

## 与 DLC 的关系

[[dlc]]（Discreet Log Contracts）与闪电网络共享密码学基础设施（适配器签名），MIT DCI 的 DLC 执行工具 `lit` 本身就是闪电网络实现。两者可以叠加使用：在闪电通道内执行 DLC 条件支付，或在 DLC 中使用闪电网络支付通道。参见 [[来源_2021-11_DLC_谨慎日志合约_比特币隐形智能合约_btcstudy]]。

## 来源
- [[来源_2023-06_Taproot_Assets_比特币本地代币_公众号]] — Taproot Assets代币可迁移至闪电网络转账降低矿工费门槛；支持与BTC进行原子交换（可构建去中心化交易所）；交易所仅需支持闪电网络即可集成Taproot Assets代币
- [[来源_2024-02_比特币二层Layer2_基础知识体系_BlockBeats]] — 付少庆系统梳理三种BTC L2路线，闪电网络为分布式路线代表：2015提出→2018全面实施，RSMC+HTLC双协议栈
- [[来源_2024-01_BTC_L2_新形态_五类扩容方案_BlockBeats]] — YBB Capital五类扩容方案中的状态通道类
- [[来源_2024-12_David_Sacks_白宫加密负责人_投资组合_BlockBeats]] — David Sacks/Craft Ventures投资5个Bitcoin/Lightning生态项目
- [[来源_2024-09_OP_CAT_BIP347_比特币智能合约_ChainCatcher]] — 2024年闪电网络面临核心开发者流失和 Fiatjaf 公开质疑，OP_CAT 成为部分开发者眼中的替代方向；白皮书联合作者 Tadge Dryja 和 Lightning Labs CTO Olaoluwa Osuntokun 罕见达成共识支持 OP_CAT
- [[来源_2024-10_共享比特币共识安全_BTC_Layer2困境_Web3CN]] — 闪电网络被定位为唯一共享BTC共识安全的L2，无代币激励仍长期保持5000 BTC流通；BEVM Super Bitcoin基于闪电网络做智能合约扩展
- [[来源_2024-02_BTC衍生协议_正统性_炒作分析]] — 正统性评估最高：基于中本聪提出的支付通道概念、不需升级BTC网络、不扩容区块、严格遵循"your keys your coins"；网络节点近15,000个；但用例仅限于BTC支付（无法发行Token/智能合约），Ordinals爆红后使用量大幅下降，与炒作几乎无关
