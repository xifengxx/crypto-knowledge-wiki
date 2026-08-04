---
type: source
source_type: article
url: https://medium.com/@bitizenwallet/a-complete-guide-on-all-crypto-wallets-88fff678db5d
date: 2022-11-11
ingested: 2026-06-30
---

# 加密钱包完整指南：从托管到无密钥

## 阅读证据
- 总行数: 164
- Q1 (前25%): 交易所作为托管方（custodian）提供托管钱包服务，但用户不掌握私钥。交易所面临黑客攻击、政府政策限制、服务器宕机、财务破产和"rug-pull"等风险，即便大型交易所也没有返还用户资金的法律责任。
- Q3 (中后25%): 多签钱包最常见的配置是 2-of-3，即 3 方签名地址中只需 2 个签名即可动用资金。Argent 和 Loopring 是多签钱包的代表，但仅支持以太坊或 EVM 兼容链，降低了可用性。
- Q4 (最后25%): 从弱到强的钱包安全性排序：Web Wallets（最不安全，私钥存浏览器 session storage）→ Browser Extension → Mobile App → Hardware → Keyless & Seedless Wallets（最高安全，无私钥无助记词，独立分布式密钥分片共同签名）。
- 图片: 3 张（均为 Medium CDN 品牌插图/示意图，已下载至本地但无法做内容分析）

## 核心要点
- **钱包本质**：加密钱包并不"存储"数字资产，而是生成使用加密货币所需的信息——公钥（区块链地址）和私钥（签名交易的机密密码）。
- **托管 vs 非托管**：交易所作为托管方控制用户私钥，用户将资金信任给第三方。"Not your Keys — not your coins"是社区铁律。非托管钱包让用户自持私钥，成为"自己的银行"。
- **冷热钱包分类**：冷钱包是离线硬件设备（如 Trezor、Ledger），使用 RNG 生成密钥并存于设备内；热钱包是联网软件（网页钱包、浏览器插件、桌面钱包、移动钱包），便利但更易受钓鱼和恶意软件攻击。
- **私钥和助记词是单点故障**：私钥是 256 位数字（64 个十六进制字符），助记词是 12-24 个 BIP39 随机词。一旦丢失或被窃，资金不可逆地丢失。这是所有传统钱包的根本脆弱性。
- **下一代钱包：无密钥无种子**：利用 MPC/SMPC（安全多方计算）和 DKG（分布式密钥生成）技术，多个独立方协同生成密钥分片并共同签名，任何时刻都不存在完整私钥。Bitizen 使用三方 MPC（服务器 + 手机 + 第二设备），并提供 3FA 恢复方案（生物识别/邮箱/云存储）。
- **安全层次排序**：Web Wallets < Browser Extension < Mobile App < Hardware < Keyless & Seedless Wallets，关键差异在于是否存在私钥/助记词这个单点故障。

## 关键数据
- 私钥长度：256 位数字，标准表示为 64 个十六进制字符或 32 字节
- BIP39 助记词：12 至 24 个随机单词的组合，可生成多个私钥，加载至任何 BIP39 兼容钱包即可恢复所有资金
- 多签配置：最常见的 2-of-3 模式，3 方签名中只需 2 个签名即可动用资金
- Bitizen 三方 MPC 架构：服务器端 + 用户手机 + 用户第二设备（第二手机/电脑/iPad）共同参与签名
- Bitizen 3FA 恢复方案：生物识别/人脸识别 + 邮箱 + 个人云存储，还支持离线 2FA 恢复（不连接 Bitizen 服务器）

## 与已有知识的关系
- 补充 [[account-abstraction]] — Bitizen 的 MPC 无密钥/无种子方案与 ERC-4337 账户抽象的守护者（Guardian）机制解决同一问题（消除私钥/助记词），但技术路径不同：MPC 是密码学层面的分布式密钥生成，AA 是智能合约层的可编程账户。两者可以互补而非互斥。
- 补充 [[metamask]] — 本文将 MetaMask（浏览器插件钱包）归类为安全层级第三档（共五档），仅在 Web Wallets 和一般 Browser Extension 之上，低于 Hardware 和 Keyless & Seedless。指出了插件钱包面临的假扩展和钓鱼攻击风险。
- 补充 [[decentralized-identity]] — 钱包是 Web3 身份的基础层，Bitizen 的无密钥方案在消除私钥单点故障的同时，通过 3FA 和离线恢复提供了与传统 Web2 身份体验更接近的用户友好性，可为 DID 的大规模采用铺路。

## 值得记住的引用
> "Both cold wallets and hot wallets store a private key (confidential password) and a seed phrase (wallet restoring mechanism)." — 本文对冷热钱包共性的简洁概括，二者本质上都依赖私钥和助记词，差异仅在于联网状态。

> "The most vulnerable parts, yet a fundamental mechanism of traditional wallets are private keys and seed phrases. They are a single point of failure, and once lost, the funds will be stolen and this is irreversible." — 直指传统钱包架构的根本缺陷：私钥/助记词是不可逆的单点故障。

> "A Keyless wallet can be described as a wallet that doesn't have private keys at any point: creating a wallet and signing transactions. Seed phrases are also being replaced with other secure backup and restore means, making it a seedless wallet." — 对无密钥/无种子钱包的精准定义：从创建到签名，任何时刻都不存在完整私钥。

> "No keys — no tears" — Bitizen 对其 MPC 方案的 slogan，戏仿社区的"Not your keys — not your coins"。

## 我的笔记
这篇文章本质上是 Bitizen 钱包的产品营销内容，分类框架和安全性分析服务于推广其 MPC 无密钥方案。但这不意味着文章没有价值——它对钱包类型的分类体系（托管/非托管 → 冷/热 → 多签 → 无密钥）清晰且结构化，对私钥/助记词/"单点故障"问题的剖析准确，可作为钱包概念的入门索引。需要注意的是，文章中"Keyless & Seedless wallets — highest security"的结论需要审慎对待：MPC 消除了私钥单点故障，但引入了一个新的信任假设集合（MPC 参与方的合谋风险、3FA 恢复的社会工程攻击面），只是将单点风险替换为多点风险的协调问题。另外 Bitizen 项目在 2022 年之后的发展情况未在本文中覆盖，其 MPC 方案是否真正实现了"完全抗审查"（full censorship-resistance）需要验证其节点去中心化程度。
