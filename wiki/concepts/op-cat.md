---
type: concept
created: 2026-07-02
updated: 2026-07-02
tags: [bitcoin, smart-contract, soft-fork, opcode, scaling]
aliases: [OP_CAT操作码, BIP347, 比特币智能合约]
---

# OP_CAT

## 一句话定义
比特币脚本中曾被中本聪包含后因安全顾虑禁用的操作码，功能是将栈上两个数据片段拼接为一个元素。通过 BIP347 软分叉提案重新启用后，可大幅提升比特币的智能合约和可编程能力。

## 核心原理
OP_CAT 的作用极其简单：从栈顶取出两个元素，拼接成一个新元素放回栈顶。但这个简单操作与其他操作码组合后，可以实现：
- **交易内省（Transaction Introspection）**：与 CHECKSIGFROMSTACK 结合，脚本可以检查和验证交易自身的字段
- **默克尔树验证**：在脚本中构建和验证 Merkle 证明
- **状态合约**：跨多个交易维护状态的智能合约
- **多重签名优化**：合并多个签名减少链上空间和交易费用
- **支付通道优化**：更高效地管理和验证通道中间交易

### 技术背景
- 最初存在于比特币早期版本，由中本聪设计
- 后因安全性和复杂性顾虑被禁用（操作码 OP_SUCCESS126 取而代之）
- BIP347 提案通过软分叉重新定义 OP_SUCCESS126，重新启用 OP_CAT
- 与 OP_CTV 的对比：OP_CAT 提供更广泛的灵活性，OP_CTV 更狭隘地专注于非递归智能合约

## 为什么重要
- **比特币原生智能合约路径**：不需要侧链、L2 或铭文等外部方案，直接在比特币脚本层实现更强的可编程性
- **开发者共识汇聚点**：闪电网络白皮书作者、Lightning Labs CTO、Blockstream 研究主管等核心开发者罕见地达成共识，在闪电网络面临质疑的背景下 OP_CAT 成为新的技术希望
- **生态催化剂**：Fractal Bitcoin 率先实现 OP_CAT（主网 2024.9），CAT20、StarkWare ZK 桥等项目基于 OP_CAT 构建，形成正反馈循环
- **支付通道增强**：对闪电网络类支付通道网络的扩展性有直接提升作用

## 关键项目/案例
- [[fractal-bitcoin]] — 首个在主网实现 OP_CAT 的 BTC 原生扩展方案，OP_CAT 治理投票为 BTC 生态首次
- [[starkware]] — 发起 $100 万 OP_CAT 研究基金，在 Bitcoin Signet 展示 ZK 证明 + OP_CAT 的 PoC
- [[blockstream]] — 通过 Bitcoin Inquisition 测试网为 OP_CAT 提供测试环境
- BitVM — Robin Linus 创建，OP_CAT 重新引入后可使验证任意计算更简单高效
- Taproot Wizards / Quantum Cats — 借助模因文化推广 OP_CAT 概念的第一个 NFT 项目

## 关键人物
- **Ethan Heilman & Armin Sabouri** — BIP347 提案联合撰写者和推进者
- **Andrew Poelstra** — Blockstream 研究主管，2021 年首次讨论 OP_CAT + CHECKSIGFROMSTACK 组合
- **Tadge Dryja** — 闪电网络白皮书联合作者，一直支持在 Bitcoin 测试网上测试 OP_CAT
- **Olaoluwa Osuntokun (Roasbeef)** — Lightning Labs CTO，公开支持 OP_CAT

## 风险 / 争议
- 增加比特币可编程性可能引入新的攻击向量，被比特币极端主义者视为对比特币「数字黄金」定位的偏离
- Anthony Towns（Bitcoin Inquisition 开发者）对比特币增加过多可编程性持谨慎态度，担心增加被审查或控制的风险
- OP_CAT 本身只是拼接操作码，其「革命性」来自于与其他操作码的组合使用——安全性和可行性需要大量测试
- Ethiopia Heilman 发起挑战鼓励人们提出「黑暗」智能合约证明 OP_CAT 的安全性，但至今无人成功——这既是安全证据，也可能说明攻击者尚未充分研究

## 相关概念
- [[bitcoin-ecosystem]] — 所属赛道，OP_CAT 代表 BTC 生态第六类技术突破
- [[lightning-network]] — OP_CAT 可能增强闪电网络类支付通道的效率，也被视为闪电网络的替代方向
- [[bitcoin]] — 比特币脚本和共识层的重大演进

## 来源
- [[来源_2024-09_OP_CAT_BIP347_比特币智能合约_ChainCatcher]]
- [[来源_2024-09_Fractal_Bitcoin_深度研究_RyzeLabs]]
- [[来源_2023-10_BitVM_比特币计算_图灵完备_BlockBeats]] — 对照参考：BitVM 通过 Taproot+欺诈证明实现图灵完备而不依赖新 op_code，BobBodily 指出"通过一个 op_code 升级比特币可以实现同样的事情"，揭示 BTC 可编程性两条路线（协议内升级 vs 协议外绕道）的早期分歧
