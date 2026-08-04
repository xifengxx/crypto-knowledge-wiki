---
type: entity
entity_type: company
created: 2026-07-02
updated: 2026-07-02
tags: [bitcoin, infrastructure, lightning, research]
---

# Blockstream

## 基本信息
- 类型: 比特币基础设施和研发公司
- 成立时间: 2014 年
- 创始团队: Adam Back（PoW 之父）、Matt Corallo、Greg Maxwell、Pieter Wuille 等比特币早期核心开发者
- 定位: 比特币生态最核心的基础设施公司之一，民间称其为「比特币背后的话事人」
- 编程语言: C（与 Lightning Labs 的 Go 路线形成技术路线分野）

## 核心业务/产品
- **Bitcoin Inquisition**: 用于评估比特币新功能的测试网络，为 OP_CAT 等未广泛接受的协议变更提供安全「试验田」，已在 Inquisition 上激活 OP_CAT
- **Liquid Network**: 比特币侧链，面向交易所和机构的快速结算网络
- **闪电网络基础设施**: 用 C 语言实现的闪电网络节点软件（与 Lightning Labs 的 LND/Go 实现竞争），在比特币扩容战争中明确站台和推动闪电网络

## 关键人物
- **Adam Back**: 创始人，PoW 概念提出者（Hashcash 发明人），比特币早期密码朋克
- **Andrew Poelstra**: 研究主管，资深比特币密码学脚本开发者。2021 年 1 月首次发表文章讨论 OP_CAT + CHECKSIGFROMSTACK 组合，此后持续推动 OP_CAT 研究和测试。其观点也经历了转变——2019 年与 Ethan Heilman 私下交流后，从不支持比特币智能合约功能转为认可其可行性
- **Greg Maxwell**: 联合创始人，Taproot 提案最初提出者（2018.01）

## 在 OP_CAT 中的角色
- 通过 Bitcoin Inquisition 为 OP_CAT 测试提供「训练场」，让研究人员在真实世界条件下观察其表现
- Andrew Poelstra 将 OP_CAT 与 OP_CTV 对比，指出 OP_CAT 提供更广泛灵活性而 OP_CTV 更狭隘聚焦非递归合约
- 目前没有为 OP_CAT 单独创建区块链，采取「先测试后推动」的谨慎策略

## 行业影响力
- 比特币扩容战争中的关键角色，推动闪电网络成为比特币扩容的主流方案
- 团队包含多位比特币 Core 开发者和早期贡献者，在技术路线上的发言权极高
- Bitcoin Inquisition 为比特币协议升级提供了「先试后推」的安全范式

## 竞争格局
- vs **Lightning Labs**: 同推闪电网络但技术路线不同（C vs Go），早期团队实力不相上下。历史上 Blockstream 研发 BOLT 协议，Lightning Labs 的 Olaoluwa Osuntokun 开发了兼容性更好的 LIT 协议，后者在开发者社区中获得更广泛认可
- vs **StarkWare**: 虽非同赛道竞争，但 StarkWare 也在比特币 OP_CAT 生态中活跃（$100 万研究基金 + Signet ZK PoC），未来可能在比特币智能合约层形成合作或竞争关系

## 相关实体
- [[lightning-labs]] — 闪电网络竞争对手，技术路线不同（C vs Go），但在 OP_CAT 支持上达成共识
- [[lightning-network]] — 推动闪电网络成为主流方案的关键力量
- [[starkware]] — 同为 OP_CAT 生态的重要推动方
- [[fractal-bitcoin]] — 首个实现 OP_CAT 的 BTC 原生扩展方案

## 相关概念
- [[op-cat]] — 当前最重要的研究推动方向
- [[bitcoin-ecosystem]] — 所属赛道

## 来源
- [[来源_2024-09_OP_CAT_BIP347_比特币智能合约_ChainCatcher]]
