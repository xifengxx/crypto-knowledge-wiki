---
type: source
source_type: article
url: https://mp.weixin.qq.com/s/Az29uOJKEx_rIyC2x8-2Dg
date: 2023-02-14
ingested: 2026-07-02
---

# Rollup、ZK Rollups、Optimistic Rollup 与 Arbitrum 的区别（Future小哥哥科普文）

## 阅读证据
- 总行数: 112
- Q1 (前25%): Rollup 的核心比喻——"原先链上每笔交易一个Block里面只能有一个确认Sign签名，而现在这个块等于压缩了很多笔交易签名的VIP签名块。VIP一个过了，等于100个过了"（第25行），将批量打包验证作为 Rollup 提升 TPS 的本质
- Q3 (中后25%): Optimistic Rollups 验证者需先质押 Token 作为保证金，若打包有问题，验证者（Sequencer）被罚款并将罚金奖励给发现者；ZK Rollups 本质上是 PoW 共识 Layer 2，任何人都可以参与认证（第63-69行）
- Q4 (最后25%): Arbitrum 进行多轮 fraud proofs（相比于 Optimism 仅一轮欺诈证明），且 Arbitrum 交易不在 Layer 1 上执行，有自己虚拟机，更兼容 ETH 网络（第88-89行）
- 图片: 0 analyzed / 0 decorative skipped / 2 external URLs unavailable（均为微信公众号图片链接，不可访问）

## 核心要点
- Rollup 是将以太坊交易计算复制到 L2 执行后，将结果压缩打包发回 L1 的扩容方法。一个压缩块包含大量交易的签名确认，相当于一个"VIP 签名块"顶 100 个普通签名，从而大幅提升 TPS
- ZK Rollups 通过零知识证明验证（Validity Proof），验证者无需看到交易所有数据即可认证真实性。四特点：Zero Knowledge、Succinct（简练）、Non-Interactive（无需知道验证者身份）、Argument of Knowledge（证明交易真实性）。本质上 ZKSnark 是一种 PoW 共识机制的 L2——任何人都可以参与认证
- Optimistic Rollups 默认信任所有打包交易，验证者需质押 Token 作为保证金，发现问题则罚没并奖励发现者。相比 ZK（人人可参与 PoW 认证），OP 更倾向于选择一组可信认证者监督打包过程。提币到 L1 需等待约一周的挑战期
- Arbitrum 属于 Optimistic Rollup 类项目，但有两个核心差异：(1) 采用多轮欺诈证明而非 Optimism 的单轮，(2) 交易不在 L1 上执行，有自有虚拟机，更兼容 ETH 网络。当时 Arbitrum 在 L2 层面 TVL 属于各协议最高
- ZK Rollups 更适合支付、交易所等需要快速结算的业务，Optimistic 类更适合 Dapp 开发与 DeFi 业务，但提币时间较长。此外还有 Plasma、Metis、Truebit（博弈机制+AI）等扩容方案

## 关键数据
- ETH Gas 费用在网络拥堵时可达几十至几百美金一笔（2023年初背景数据）
- Optimistic Rollup 提币到 L1 挑战期：通常需要 1 周以上（文中具体描述为"1周以上"）
- Arbitrum 在 L2 层面的 TVL 为"所有协议最高"（2023年2月时点，文中定性描述）
- "VIP签名块"比喻：1 个打包块相当于压缩 100 笔交易签名

## 与已有知识的关系
- 补充 [[layer2]] — 从初学者的比喻视角（工作日 vs 节假日吃饭、高速收费站、代表推荐制）解释了 Rollup/OP/ZK 三种方案的核心差异，是概念科普层级的入门读物，不涉及技术实现细节
- 补充 [[arbitrum]] — 记录 2023 年 2 月时点 Arbitrum 的差异化特征：多轮欺诈证明（vs Optimism 单轮）、自研虚拟机、不在 L1 执行交易。当时 TVL 为 L2 中最高的定位
- 补充 [[optimism]] — 记录 Optimism 与 Optimistic Rollup 方法论的名称混淆问题（OP Token / Optimism 项目 / Optimistic Rollup 方法三者关系），以及 OP 采用单轮欺诈证明的技术选择
- 补充 [[sequencer]] — 将验证者/Sequencer 角色以"代表推荐制"比喻说明——推选被信任的代表汇总审核问题、集中处理，该代表的靠谱程度决定安全性
- 补充 [[zksync]] — 记录 ZK 系列项目的四大特征定义（Zero Knowledge/Succinct/Non-Interactive/Argument of Knowledge），以及 ZK Rollup 本质为 PoW 共识 L2 的观点

## 值得记住的引用
> "原先链上每笔交易一个Block里面只能有一个确认Sign签名，而现在这个块等于压缩了很多笔交易签名的VIP签名块。VIP一个过了，等于100个过了。" — 用"VIP签名块"比喻解释 Rollup 批量验证如何提升 TPS

> "Op Rollups与ZK Rollups方法本质的区别是，ZK所有人都可以参与通过PoW认证来参与认证，而OP里面更倾向于选择一组值得信赖的认证者，监督整个打包交易的过程。" — OP 与 ZK 本质差异的一句话说清

> "我们经常用来谈论的OP Token，Optimism是利用Optimistic方法的Layer2协议之一，而Arbitrum也是利用Optimistic Rollups模式开发的Layer 2协议。由于Optimism项目与Optimistic Rollup方法名称很类似，所以很容易搞混。" — 指出 Optimism 项目名与方法名混淆的认知陷阱

## 我的笔记
- 这篇是 2023 年 2 月的入门级科普，类比生动（VIP签名块、代表推荐制、节假日高速收费站）但技术深度有限。文中将 ZK Rollup 描述为"PoW 共识 L2"是一个值得注意的概括——这在技术上不完全准确（ZK Rollup 的证明生成是计算密集但不是共识层面的 PoW），但作为"任何人都可参与验证"的类比可以接受
- 文章写作时的 2023 年 2 月，Arbitrum 尚未发币（ARB 于 2023 年 3 月 16 日宣布），文中未提及代币经济；Optimism 的 OP Stack/Superchain 战略也未展开。此文件应被视为该时点的技术科普快照，非投资或技术评估参考
- 值得注意的信息缺口：文章未涉及 Rollup 的数据可用性问题、EIP-4844 之后的成本变化、以及 Sequencer 去中心化等后来成为焦点的议题
