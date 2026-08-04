---
type: source
source_type: article
url: https://www.paradigm.xyz/2025/04/the-key-neutrality-of-baselayer-markets
date: 2025-04-18
ingested: 2026-07-02
---

# 基座市场的关键中立性：Paradigm 从法律与技术角度为 MEV 辩护

## 阅读证据
- 总行数: 829
- Q1 (前25%): "Defi Summer of 2020" 期间 Gas 价格因机器人竞相出价而飙升，常达数百 Gwei，导致普通用户交易停滞
- Q3 (中后25%): 第 15 条脚注指出许多 Layer 2 网络没有内存池（mempool），因此在三明治攻击方面不普遍
- Q4 (最后25%): SEC v. Coinbase 案裁决：非托管产品不符合经纪商定义，因此不承担最佳执行义务
- 图片: 0 分析 / 1 装饰性跳过（base64 内置 1x1 透明 PNG）/ 0 外部 URL 不可用

## 核心要点
- MEV 从 PoW 时代的 "Miner Extractable Value" 演变为 PoS 时代的 "Maximal Extractable Value"，涵盖验证者、排序器等基座层参与者；PBS（提议者-构建者分离）和 MEV-Boost 创建了搜索者-构建者-提议者三层专业化分工，使 MEV 收入民主化
- 以太坊的分布式架构无法支持先到先得（first-in-time）排序，区块构建本质是竞争性拍卖而非"重新排序"；先到先得会迫使所有节点共址，破坏去中心化
- MEV 基础设施（私有订单流拍卖）将 Gas 战争从公开内存池转移到链下，显著减少了网络拥堵和费用波动，提升了用户体验
- 三类 MEV 中，套利（尤其是 CEX-DEX 价差套利）是最大价值来源且有益于市场效率；清算型 MEV 对 DeFi 协议偿付能力至关重要；交易型 MEV（三明治/抢跑）产生负外部性但市场已涌现多元解决方案
- 法律分析论证 MEV 不构成证券欺诈（缺乏 scienter/虚假市场信号）、不构成内幕交易（公开信息、无私信义务），最佳执行义务仅适用于注册中介而不适用于非托管 DeFi 基础设施
- 政策建议：SEC 应优先采用灵活原则而非僵化规则，发布 opt-in 披露指南供 DeFi 前端选择使用，并明确注册交易所有运营 L1 区块构建者的权限冲突

## 关键数据
- 以太坊每个 slot 时长 12 秒，PBS 拍卖在几分之一秒内完成
- MEV 保护工具（Flashbots Protect / MEV Blocker）可将高达 90% 的套利机会价值返还给用户
- CEX-DEX 套利是以太坊区块构建中价值最大的 MEV 来源，"远超其他类型"
- 2022 年 9 月以太坊 Merge 完成 PoW 到 PoS 转型，MEV 术语随之调整
- SEC 专员 Hester Peirce 于 2025 年 2 月发布 48 个问题征求 Crypto Task Force 意见，其中第 17 和 20 题直接涉及 MEV 和最佳执行义务

## 与已有知识的关系
- 补充 [[mev]] — 该文是 Paradigm 对 SEC 的正式法律/政策回应，提供 MEV 概念页中缺失的详细美国证券法分析（scienter/内幕交易/最佳执行）与具体政策建议
- 补充 [[paradigm]] — 展示 Paradigm 作为研究型 VC 的监管参与策略：以"技术中立、保护创新"为核心论点的政策倡导
- 补充 [[defi]] — 用清算场景论证 MEV 对 DeFi 协议偿付能力的关键正面作用
- 补充 [[sequencer]] — 阐明 MEV 概念已从 L1 验证者扩展至 L2 排序器的基座层角色
- 补充 [[compound]] 和 [[aave]] — 提供其清算机制中 MEV 价值的正面论述
- 补充 [[dark-forest]] — 引用了 Paradigm 2020 年经典文章，构成同一主题的 5 年演进脉络
- 补充 [[coinbase]] — 引用 SEC v. Coinbase 案裁决（非托管钱包非经纪商）作为法律先例
- 补充 [[ethereum]] — 详细描述以太坊的 PBS 技术架构和 MEV-Boost 四步流水线

## 值得记住的引用
> "MEV is a side-effect of Ethereum's decentralization: no single clock or gatekeeper orders transactions, so economic incentives fill that gap. This is why MEV does not inherently amount to an exploit or manipulation, but rather a form of latency arbitrage native to blockchains."

> "While the Commission has a duty to protect investors and consumers, its duty to promote capital formation and foster innovation must take precedence here, and any guidance the Commission might choose to issue should take a 'first, do no harm' approach, and trend towards flexible principles, rather than ossifying requirements."

## 我的笔记
这是一份立场鲜明的监管游说文，代表 Paradigm 及其投资组合（包括 Flashbots、Sorella Labs 等涉及 MEV 基础设施的项目）的商业利益。文章的法律论证在逻辑上是自洽的——MEV 在技术上确不符合传统证券欺诈/内幕交易的要件——但这回避了一个核心矛盾：三明治攻击虽不构成法律意义上的欺诈，但对散户交易者造成的经济损失是真实的。Paradigm 将"市场会自我修正"作为推迟监管的核心论据，但这种"技术解决主义"尚未得到充分验证——BuilderNet 仍处于早期，MEV Blocker 90% 价值返还率是在集中式基础设施下实现，去中心化方案尚未证明同等效果。此外，文章深度引用 BIS/IMF/IOSCO/FSB 的警示观点再加以反驳，形成"先树靶子再打靶"的论证结构，读者需注意其选择性的证据引用。
