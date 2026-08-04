---
type: source
source_type: article
url: https://www.chainalysis.com/blog/introduction-to-erc-3643-ethereum-rwa-token-standard/
date: 2025-04
ingested: 2026-07-02
---

# ERC-3643：面向受监管资产的以太坊许可代币标准（Chainalysis）

## 阅读证据
- 总行数: 122
- Q1 (前25%): ERC-3643（原名 T-REX: Token for Regulated Exchanges）由卢森堡 Tokeny Solutions 推动，是唯一正式被接受为 ERC 标准的证券代币标准，由 ERC-3643 Association 治理维护
- Q3 (中后25%): OnchainID 是 Tokeny 开发的身份框架，用于发行和管理去中心化身份（DID），存储 KYC 提供商等受信方的加密声明，ERC-3643 在每次转账时实时验证发送方和接收方的 OnchainID 状态
- Q4 (最后25%): 传统证券结算周期为 T+2（交易日+两天），而区块链可实现同日或即时结算，加密市场 24/7/365 运行，代币化证券可在任何时间交易
- 图片: 1 张外部 URL 截图（Chainalysis CDN），无法本地访问

## 核心要点
- ERC-3643 是以太坊上专为受许可代币设计的协议标准，可在代币层面嵌入身份验证、转账限制和合规逻辑，适合房地产、证券和私募基金等受监管资产。原名 T-REX（Token for Regulated Exchanges），由 Tokeny Solutions 推动
- 与 ERC-20 的无许可设计根本不同：ERC-20 的假名性使其从根本上不适合受监管资产代币化，而 ERC-3643 在协议层强制执行信任与资格验证，每次转账前检查发送方和接收方是否符合预设条件
- 采用模块化架构，将身份管理、合规规则和代币逻辑分离到不同智能合约中。核心是声明（claim）链上身份系统，每个用户链接到一个经授权的链上身份
- 发行流程：部署身份注册表、合规合约和代币合约 → 配置合规条件 → 认证身份验证者 → 投资者 KYC → 铸造和分发代币
- 相比传统证券，代币化可减少中间商数量、实现即时结算、提供 24/7/365 交易，并通过智能合约自动化股息支付等操作
- 相比于其他试验性标准（如 ERC-1400），ERC-3643 是唯一正式通过 EIP 流程被接受为 ERC 标准的证券代币标准

## 关键数据
- ERC-3643 原名 T-REX（Token for Regulated Exchanges），通过 EIP-3643 正式标准化
- 传统证券结算周期 T+2（交易日+两天），区块链可实现同日或即时结算
- ERC-20 的设计使假名地址间的自由转账成为可能，但这使其"从根本上不适合"（fundamentally unsuitable）受监管资产代币化
- OnchainID 身份框架可发行和管理 DID，存储来自受信方的加密声明，无需透露持有人敏感个人信息
- 用例覆盖金融、房地产、游戏、艺术品及收藏品、碳信用五个行业
- 最佳实践包括使用审计合约、选择合规 KYC/AML 提供商、规划治理流程、先在测试网部署

## 与已有知识的关系
- 补充 [[rwa]] — rwa.md 已提及 ERC-3643 作为"代币标准化"前提条件，本文提供了该标准的技术原理、模块化架构、合规流程和部署细节，填补了"合规代币标准如何运作"的知识空白
- 补充 [[decentralized-identity]] — 引入 OnchainID 作为 DID 在合规代币化中的实际应用案例，身份系统从"用户可选组件"升级为"代币核心基础设施"——没有 OnchainID 就没有合规转账
- 补充 [[ethereum]] — ERC-3643 作为首个正式通过的证券代币 ERC 标准，证明了以太坊作为受监管资产代币化底层平台的技术成熟度，而不仅是 DeFi/NFT 平台
- 补充 [[chainalysis]] — Chainalysis 首次以合规教育内容发布者角色出现，推广 ERC-3643 标准，与其核心合规监控业务形成互补
- 补充 [[tokeny-solutions]] — 新建实体页，Tokeny 作为标准推动者和基础设施提供商的双重角色

## 值得记住的引用
> "ERC-3643 is an Ethereum-based protocol standard for creating and managing permissioned tokens — digital assets that represent real-world value, and can only be held and transferred by verified participants."

> "ERC-20 assumes a trustless environment, ERC-3643 enforces trust and eligibility at the protocol level."

> "Whereas ERC-20 assumes a trustless environment, ERC-3643 enforces trust and eligibility at the protocol level."

## 我的笔记
这是一篇标准的企业教育性文章，Chainalysis 通过介绍 ERC-3643 间接推广其合规解决方案。文章的技术深度属于入门到中级水平，最大的价值在于清晰对比了 ERC-20 和 ERC-3643 的设计哲学差异（无许可 vs 合规模块化），并提供了完整的部署流程描述。但它刻意回避了两个关键问题：(1) ERC-3643 的合规检查依赖的中心化身份验证者——这在多大程度上是"去中心化"很可疑；(2) 许可代币在 AMM 和 DeFi 协议中的可组合性实际非常有限——许可代币本质在围墙花园中运行，与 DeFi 的核心价值主张存在根本张力。Tokeny 同时作为标准推动者和基础设施提供商，存在潜在的利益冲突。该标准的真正考验不在于技术设计（智能合约模块化很好），而在于有多少实际资产发行方和二级市场采用。此外，文章写于 2025 年 4 月，但到 2026 年中，以太坊 RWA 生态中占据主导地位的是 BUIDL 等基于传统 ERC-20（但配合链下白名单）的方案，ERC-3643 的实际采用率并未达到预期，说明技术标准本身不如与发行方合作网络重要。
