---
type: source
source_type: article
url: https://www.chaincatcher.com/article/2143993
date: 2024-09-20
ingested: 2026-07-02
---

# OP_CAT：闪电网络后比特币最大的技术叙事，核心开发者为何集体站台？

## 阅读证据
- 总行数: 121
- Q1 (前25%): OP_CAT 的 BIP 草案被正式命名为 BIP347，闪电网络白皮书作者 Tadge Dryja、Lightning Labs CTO Olaoluwa Osuntokun、Blockstream 研究主管 Andrew Poelstra 均公开支持
- Q3 (中后25%): Blockstream 研究主管 Andrew Poelstra 早在 2021 年 1 月 30 日就发表文章讨论 OP_CAT，指出将 OP_CAT 与 CHECKSIGFROMSTACK 结合可提供交易内省方法；StarkWare 于 2022 年 7 月发起 100 万美元研究基金专门研究 OP_CAT 的利弊
- Q4 (最后25%): OP_CAT 在多重签名优化中可合并多个签名减少链上空间和交易费用；在支付通道网络中，OP_CAT 的拼接功能可使中间交易得到更有效管理和验证，提升吞吐量和效率
- 图片: 0 analyzed / 0 decorative skipped / 4 external URLs unavailable (chaincatcher.com 托管)

## 核心要点
- OP_CAT 从 2024 年初的冷门技术概念，半年内成为比特币生态最热叙事，被视作「下一个闪电网络」。Fractal Bitcoin 本质上是 OP_CAT 的代码实现，FB 上线几天涨 3-4 倍；CAT20 协议让 Fractal 网络 Gas 飙升至 5000+；Quantum Cats NFT 维持 0.25 BTC 地板价
- 闪电网络正面临核心开发者流失危机：多位开发者宣布退出，Nostr 创始人 Fiatjaf 直言「闪电网络正在骗取比特币用户的时间、精力和金钱长达 6 年」。OP_CAT 因此被视为闪电网络之后比特币的下一个重大突破
- OP_CAT 是一个曾被中本聪包含但后来因安全顾虑被禁用的比特币操作码，功能是将栈上两个数据片段拼接。BIP347 提案通过软分叉重新定义 OP_SUCCESS126 以重新启用它，可显著提升比特币智能合约能力
- 核心开发者阵容强大：闪电网络白皮书作者 Tadge Dryja（现 Lightspark）、Lightning Labs CTO Olaoluwa Osuntokun、Blockstream 研究主管 Andrew Poelstra、BIP347 提案撰写者 Ethan Heilman 和 Armin Sabouri 均支持 OP_CAT。值得注意的是 Dryja 和 Osuntokun 曾是 Lightning Labs 的「宿敌」，如今却在 OP_CAT 上达成共识
- StarkWare 也深度介入：2022 年 7 月发起 100 万美元 OP_CAT 研究基金，在 Bitcoin Signet 上展示 OP_CAT 实现零知识证明的潜力，并与 sCrypt 合作构建基于 OP_CAT 和 ZK magic 的 PoC 桥，暗示可能推出 OP_CAT 相关协议
- OP_CAT 的应用场景覆盖多重签名优化（合并签名减少链上数据）、状态合约（跨交易维护状态的智能合约）、支付通道网络扩展（提升闪电网络类通道的中间交易管理和验证效率）

## 关键数据
- Fractal Bitcoin 代币 FB 上线几天涨幅 3-4 倍；CAT20 协议铸造期间 Fractal 网络 Gas 飙升至 5000+
- Quantum Cats NFT 地板价维持在 0.25 BTC（约 $15,000+），成为比特币 NFT 蓝筹
- StarkWare 2022 年 7 月发起 100 万美元 OP_CAT 研究基金
- OP_CAT 最早被中本聪包含在比特币早期版本中，后因安全顾虑被禁用；BIP347 通过软分叉重新启用（重新定义 OP_SUCCESS126）
- Tadge Dryja 于 2016 年底离开 Lightning Labs（成立仅一年后），2022 年加入 Lightspark 任高级研究科学家

## 与已有知识的关系
- 补充 [[bitcoin-ecosystem]] — OP_CAT 作为 BTC 生态第六类技术突破（不同于五类扩容方案），通过操作码级别的升级为比特币智能合约提供原生能力，不依赖侧链/L2/铭文等外部方案
- 补充 [[lightning-network]] — 揭示闪电网络当前面临的核心开发者流失和质疑危机，OP_CAT 正在成为部分开发者眼中闪电网络的替代方向
- 补充 [[fractal-bitcoin]] — Fractal Bitcoin 本质上是 OP_CAT 在比特币中的代码实现，本文提供了 Fractal 背后 OP_CAT 技术的完整开发者和生态上下文
- 补充 [[starkware]] — StarkWare 在比特币生态的布局：$100 万 OP_CAT 研究基金 + Bitcoin Signet ZK 证明 PoC + sCrypt 合作
- 关联 [[lightning-labs]] — CTO Olaoluwa Osuntokun 公开支持 OP_CAT，Tadge Dryja 离开 Lightning Labs 的历史与两人在 OP_CAT 上的共识形成对比

## 值得记住的引用
> 「闪电网络正在骗取比特币用户的时间、精力和金钱，长达 6 年之久。」— Nostr 创始人 Fiatjaf

> 「将 OP_CAT 与 CHECKSIGFROMSTACK 结合使用，可以提供一种巧妙的交易内省方法。」— Andrew Poelstra, Blockstream 研究主管，2021 年 1 月

> 「OP_CAT 虽然不是最终方案，但它为实现各种新功能提供了可能性，是比特币脚本改进的重要一步。」— Armin Sabouri, BIP347 联合提案人

## 我的笔记
- 这篇文章的核心叙事是「开发者政治」而非纯技术：闪电网络正统性正在瓦解，OP_CAT 成为新的共识汇聚点。但 OP_CAT 是否真的能解决闪电网络未能解决的问题（可扩展性、用户体验、流动性），文章并未给出实质性论证，更多是「因为闪电网络不行了，所以 OP_CAT 行」的叙事转移
- 值得警惕的是「沾上 OP_CAT 就拉盘」的现象——CAT20 铸造期间 Fractal Gas 飙至 5000+、FB 短期翻 3-4 倍，这更多是投机情绪而非技术验证。历史上比特币生态的每一次技术升级（SegWit、Taproot、Ordinals）都经历过类似的投机周期，OP_CAT 软分叉能否通过、通过后能否真正改变比特币的可编程性，仍需时间验证。OP_CAT 本质上只是一个字符串拼接操作码，其「革命性」来自于与其他操作码的组合使用——这种组合的安全性和可行性还需要大量测试
