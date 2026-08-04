---
type: entity
entity_type: project
created: 2026-06-30
updated: 2026-07-02
tags: [infrastructure, wallet, ux, account-abstraction, stablecoins]
aliases: [Privy, 嵌入式钱包]
---

# Privy

## 基本信息
- 赛道：Web3 登录/账户/嵌入式钱包基础设施
- 核心功能：支持 Web2（邮箱、手机号、社交账号）+ Web3（钱包）全部登录体系的嵌入式组件
- 定位：Web2.5 登录层——让用户无需 Web3 钱包即可注册使用 Web3 应用
- 成立时间：2021 年
- 创始人：Henri Stern（CEO & Co-Founder）
- 收购：2025 年 6 月 12 日被 [[stripe]] 收购，收购后继续独立运营
- 此前估值：2.3 亿美元（市场讨论暗示达十位数）
- 投资人：Sequoia， Ribbit Capital， Paradigm， Blue Yard， Coinbase Venture， Archetype， Electric Capital， Protocol Labs

## 核心业务/产品
Privy 提供登录、账户管理和嵌入式钱包组件，让 Web3 应用开发者可以在不要求用户持有钱包的情况下完成用户注册和登录：
- 支持所有主流 Web2 登录方式（邮箱、手机、Google/Apple/Twitter 等社交账号）
- 支持 Web3 钱包连接
- 嵌入式 AA 钱包，用户进入应用后可逐步引入链上功能
- 组件化接入，开发者集成简单
- 提供 API 及 SDK，让开发者将加密钱包直接嵌入应用程序（市场、游戏、金融科技平台），无需依赖独立钱包（如 Metamask 或 Phantom）

## 关键数据
- 支持 1000+ 开发团队的 7500 万+ 账户（截至 2025 年 6 月）
- 在钱包、应用程序和用户之间促成了数十亿美元的交易
- 关键客户：Hyperliquid（交易平台）、OpenSea（NFT 市场）、Blackbird（餐厅忠诚度）、Toku（全球薪资支付）、Farcaster（社交图谱）、Jupiter（DEX 聚合器）

## 竞争优势 / 护城河
- 先发优势：在 Web2.5 登录赛道已建立用户基数和开发者生态
- 覆盖面广：同时支持 Web2 和 Web3 的登录体系，降低用户进入门槛
- 集成简单：组件化设计，开发者接入成本低

## 在 Cryptorails 中的角色
本文（2025.02 Archetype）将 Privy 定位为汇款场景中推动加密采用的关键基础设施：非托管嵌入式钱包提供 Web2 级用户体验，使用户无需自托管密钥即可通过 cryptorails 收发跨境汇款和薪资支付。在典型汇款流程中，如果发送方没有钱包，PSP 会自动通过 Privy 为其创建。

## Stripe 收购的战略意义（2025.06）
Stripe 于 2025 年 6 月 12 日宣布收购 Privy，作为 2024 年 10 月以 11 亿美元收购 Bridge 之后对稳定币市场的又一重注：

- **对 Stripe 的价值**：获得具有原生加密货币产品基因的团队、以开发者为中心的嵌入式钱包平台、广泛的原生加密货币客户基础（Hyperliquid/Blackbird/Toku 等），以及"现在就有的发展势头"
- **对 Privy 的价值**：获得 Stripe 面向大量金融科技和企业开发者的分发渠道、全球合规声誉、以及继续独立运营的资本支持
- **战略协同**：Bridge 负责合规法币出/入金通道（101 个国家），Privy 负责非托管链上钱包基础设施。Stripe 可以在 Fiat & Crypto 堆栈各层面提供工具——Bridge（法币通道+稳定币托管）→ Stripe（稳定币场景构建）→ Privy（链上自托管）
- **独立运营**：与被收购的 Bridge 一样，Privy 将继续独立运营，以保持灵活性和创新能力
- **链上金融开启**：通过 Privy 的自托管钱包，Stripe 可以绕开银行账户的监管和合规限制，为新兴市场和全球金融科技领域开启链上金融创新

## 关键数据
- 在 cryptorails 生态中定位为非托管嵌入式钱包提供商，解决"用户没有钱包"的采用瓶颈
- 在汇款场景中使 PSP 能够在用户入金时自动创建钱包（无需额外操作）

## 相关实体
- [[stripe]] — 2025 年 6 月 12 日以未公开价格收购 Privy，整合 Bridge+Privy 形成稳定币堆栈两端
- [[griffain]] — 使用 Privy 进行密钥分片存储和授权共享
- [[slate-defai]] — 集成 Privy 嵌入式钱包架构，Agent 可代表用户执行交易

## 相关概念
- [[account-abstraction]] — Privy 的嵌入式钱包依赖 AA 技术，是 AA 在登录层的实际落地
- [[chain-abstraction]] — 登录抽象 + 链抽象 = 完整的 Web3 UX 解决方案

## 来源
- [[来源_2024-09_Web3_Mass_Adoption_Web2.5_深潮TechFlow]]
- [[来源_2025-06_Stripe收购Privy_稳定币钱包_深潮TechFlow]] — Stripe 收购 Privy 的完整报道：战略动机、Privy 基本面数据、Bridge 协同、未来方向预测
