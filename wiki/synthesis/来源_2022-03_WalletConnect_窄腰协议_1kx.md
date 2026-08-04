---
type: source
source_type: article
url: https://medium.com/1kxnetwork/walletconnect-the-narrow-waist-protocol-between-wallets-dapps-75a1f7665a4c
date: 2022-03-10
ingested: 2026-07-02
---

# WalletConnect：钱包与DApp之间的窄腰协议

## 阅读证据
- 总行数: 142
- Q1 (前25%): 2020年移动端驱动全球超过65%的网络流量，WalletConnect被定位为类似"Signal for wallets"的端到端加密通信协议
- Q3 (中后25%): WalletConnect从2018年成立时的2个钱包+2个DApp增长到超过200个DApp和超过100个钱包；5大Android钱包累计超过2000万安装量
- Q4 (最后25%): 第一代DeFi乐高（DEX、借贷、保险）、组织乐高（DAO框架和治理工具）、媒体乐高（NFT协议）为下一代加密原生用例奠定基础，钱包将最终成为个人身份的代理
- 图片: 0 analyzed / 0 decorative skipped / 7 external URLs unavailable（全部为miro.medium.com外部CDN图片）

## 核心要点
- WalletConnect是一个通用协议，实现任意钱包与任意DApp之间的安全端到端加密通信，被类比为"钱包界的Signal"
- 文章借用TCP/IP的"沙漏模型"（hourglass model/narrow waist）类比WalletConnect在Web3堆栈中的定位——作为连接底层钱包和顶层DApp的简约、无偏见的中间层
- WalletConnect具有四大价值主张：移动原生用户体验、安全性（私钥存储在手机而非浏览器）、无需许可、可信中立
- V2.0将新增多链支持（Cosmos、Polkadot、Celo、Solana、Near）、推送通知、基于Waku的去中心化消息中继和钱包间加密通信
- WalletConnect Cloud是白手套低延迟服务，是未来完全去中心化WalletConnect Network的前身
- 文章将钱包定位为超越银行账户的Web3身份入口——最终成为个人的DAO成员资格、治理活动、NFT收藏和POAP活动记录的中心枢纽

## 关键数据
- 每周npm安装量在一年内增长超过900%，从13,000增长到140,000以上
- 从2018年的2个钱包+2个DApp增长到超过200个DApp和超过100个钱包（截至2022年3月）
- 5大Android钱包（Trust、Metamask、Crypto.com、imToken、bitpay）累计超过2000万安装量
- 2020年全球超过65%的网络流量来自移动端

## 与已有知识的关系
- 补充 [[walletconnect]] — 用大量新数据（900% npm增长、200+ DApp/100+钱包生态、2000万安装量、Pedro Gomes创始故事、Waku中继网络）大幅充实已有实体页面，并新增V2.0具体功能细节
- 补充 [[1kx]] — 1kx以投资论文形式发布的深度技术分析，展示了其研究驱动的投资风格
- 补充 [[decentralized-identity]] — 将钱包定位为Web3身份的接入点（DAO成员资格、治理活动、NFT收藏、POAP记录），但强调WalletConnect是通信协议而非身份协议本身
- 相关 [[fat-protocols-fat-apps]] — "窄腰协议"概念与胖协议/胖应用辩论互补，讨论的是协议的层次结构和价值分配位置而非价值捕获

## 值得记住的引用
> "WalletConnect is a generalised protocol to facilitate a secure connection between any wallet and any dapp. Under the hood, the protocol facilitates end-to-end encrypted communication between two clients — akin to a 'Signal for wallets'."

> "By being radically unopinionated, WalletConnect ensures any new dapp can reach users on any wallet, and any new wallet can be plugged into dapps without any UX inconsistencies. The flywheel of web3 has begun spinning. Except this time, users are in control."

## 我的笔记
- 这篇文章本质上是1kx的"持仓论文"——作为WalletConnect的投资方之一，文章对协议的推崇有其利益立场。虽然数据详实，但有意回避了几个关键问题：中继网络的中心化风险（即使V2转向Waku，初期WalletConnect Cloud仍是中心化服务）、协议层面的费用机制不清晰、以及被大公司（如MetaMask）自带连接功能替代的可能性。
- "窄腰协议"的类比很强但需要谨慎：TCP/IP的不可替代性在于它解决了异构网络连接的根本技术难题，而WalletConnect解决的是应用层标准化问题——两者的技术难度和护城河深度不可同日而语。WalletConnect的真正护城河在于网络效应而非技术壁垒。
