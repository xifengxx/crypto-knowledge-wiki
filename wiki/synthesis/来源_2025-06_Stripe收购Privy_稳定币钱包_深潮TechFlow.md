---
type: source
source_type: article
url: https://www.techflowpost.com/article/detail_26331.html
date: 2025-06-17
ingested: 2026-07-02
---

# Stripe 收购 Privy，进一步完善稳定币基建布局

## 阅读证据
- 总行数: 209
- Q1 (前25%): Stripe 在 2024 年 10 月以 11 亿美元收购稳定币服务商 Bridge，此次收购 Privy 是其对稳定币市场的又一重注
- Q3 (中后25%): Bridge 的稳定币金融账户已在 101 个国家运营，允许企业以 USDC 和 USDB（Bridge 的稳定币）持有余额；与 Visa 合作推出全球首个稳定币卡发行产品
- Q4 (最后25%): Stripe 预计将在三个方向继续完成稳定币拼图：数字资产牌照、更多非美元支付渠道和出入金货币承兑通道、链上金融服务（信贷、借贷、加密交易）
- 图片: 0 analyzed / 3 decorative skipped（均为 techflowpost CDN 外部 URL，本地不可用）

## 核心要点
- Stripe 于 2025 年 6 月 12 日宣布收购 Privy（嵌入式钱包基础设施提供商），此前已于 2024 年 10 月以 11 亿美元收购 Bridge（稳定币后端服务商），形成"Bridge 负责法币出入金+稳定币托管 + Privy 负责链上自托管钱包"的完整稳定币堆栈
- Privy 成立于 2021 年，通过 API/SDK 让开发者将加密钱包直接嵌入应用，已支持 1000+ 开发团队的 7500 万+ 账户，促成了数十亿美元交易；关键客户包括 Hyperliquid、OpenSea、Blackbird、Toku、Farcaster
- Privy 此前估值 2.3 亿美元（但市场讨论暗示达十位数），投资人包括 Sequoia、Ribbit Capital、Paradigm、Blue Yard、Coinbase Venture、Archetype、Electric Capital、Protocol Labs；收购后将继续独立运营
- Privy 与 Bridge 形成战略互补：Bridge 负责合规法币通道和托管稳定币账户（101 个国家），Privy 负责非托管链上钱包基础设施，全部通过 Stripe 级别的开发者体验交付
- Stripe 现在可以在 Fiat & Crypto 堆栈的各层面提供工具：法币入金（Bridge）→ 链上钱包（Privy）→ 稳定币结算（USDB）→ 法币出金（Bridge），全部通过 Stripe 的现有 API 和市场渠道
- Stripe 预计将继续在三个方向补全稳定币版图：数字资产牌照、更多非美元支付渠道、链上金融服务（信贷/借贷/加密交易）

## 关键数据
- Stripe 2024 年处理了 1.4 万亿美元支付交易，同比增长 38%，服务对象包括半数《财富》100 强企业和 78% 的《福布斯》AI 50 强企业
- Stripe 在 2024 年 10 月以 11 亿美元收购稳定币服务商 Bridge
- Privy 已支持 1000+ 开发团队的 7500 万+ 账户，此前估值为 2.3 亿美元
- Bridge 稳定币金融账户已在 101 个国家运营，与 Visa 合作推出全球首个稳定币卡发行产品
- Bridge 的实际应用案例包括 SpaceX（通过 Starlink 用 Bridge 将阿根廷收入以美元汇回美国）、尼日利亚用户用 Bridge 支付 YouTube Premium 和 ChatGPT 费用

## 与已有知识的关系
- 补充 [[privy]] — 首次记录 Privy 被 Stripe 收购的完整细节（收购时间 2025.6.12、估值争议、独立运营承诺），此前 Privy 页面仅记录其 Web2.5 登录层定位
- 补充 [[stripe]] — 完善 Stripe 稳定币收购拼图（Bridge $11 亿 + Privy 收购），新增 Bridge 数据（101 国家运营、Visa 稳定币卡发行产品）
- 补充 [[stablecoins]] — 新增 Stripe 整合 Bridge+Privy 后的"Fiat & Crypto 堆栈"三层架构及链上金融市场开启方向
- 关联 [[payfi]] — Stripe 通过 Bridge+Privy 构建的稳定币支付堆栈是 PayFi 在企业级支付场景的重要基础设施实例

## 值得记住的引用
> "资金必须存放在某个地方，而 Privy 构建的是世界上最优质的可编程金库。除了我们其他的稳定币相关工作外，我们期待助力新一代全球化的、互联网原生金融服务的诞生。" — Patrick Collison, Stripe CEO

> "在 2024 年的年度信中，Stripe 做出了一个大胆的声明：'Stripe 平台将成为构建稳定币应用的最佳方式。'此次收购表明，他们正在迅速执行这一路线图。"

> "Privy 的最初洞见清晰而被低估：钱包是通往加密货币的门户，但这个门户是破碎的。Privy 通过开创嵌入式钱包改变了这一现状，让使用加密货币的感觉就像用电子邮件登录一样无缝。" — Caitlin, Paradigm Investment Partner

## 我的笔记
- 这篇文章的价值在于将 Stripe 两次收购（Bridge + Privy）置于同一叙事框架下，清晰展示了 Stripe 的稳定币战略并非孤立动作，而是从后端（稳定币编排）到前端（嵌入式钱包）的全面布局。Privy 收购最关键的细节可能是"独立运营"承诺——这延续了 Bridge 模式，暗示 Stripe 正在构建一个类似"联盟"的多实体稳定币基础设施，而非简单合并。
- "Stripe 2014 年测试比特币支付→2018 年放弃→2019 年加入 Libra→2024-2025 年全面回归"的十年起落时间线非常有文献价值，勾勒了传统支付巨头对加密态度的完整演化。但文章对 Stripe 自身的技术路径选择（如自建 Tempo L1 的关联）讨论不足，更像是对收购的即时报道而非深度战略分析。
