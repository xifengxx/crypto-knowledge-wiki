---
type: source
source_type: article
url: https://metaversal.banklesshq.com/p/creating-an-nft-allowlist-
date: 2023-06-27
ingested: 2026-07-01
---

# NFT 白名单创建工具实战指南（PREMINT / Lanyard / Bueno）

## 阅读证据
- 总行数: 78
- Q1 (前25%): 文章开头将白名单创建定位为 NFT 技能树中的第三项（前两项为生成大集合和搭建铸造界面），强调白名单用于管理哪些人和社区可以参与铸造
- Q3 (中后25%): Lanyard 由 Context、mint.fun、Zora 团队共同设计，是开源的白名单创建工具，核心理念是"让创作者的白名单成为横向 web3 栈的一部分，而非被锁定在特定项目页面实现中"——使用 Merkle root 和证明系统实现跨平台白名单互操作
- Q4 (最后25%): Bueno 的 Forms 工具是该团队继 Art Generator（艺术生成器）、Smart Contract Deployer（智能合约部署器）、Microverse 之后的最新产品，主打无代码 web3 表单（包含白名单功能）
- 图片: 7 张（均为外部 S3 URL 的界面截图，不可访问）

## 核心要点
- 白名单（allowlist）是 NFT 铸造参数设置的核心环节，用于控制哪些地址可以参与 mint，帮助项目方筛选目标社区成员
- PREMINT 是一个 NFT 白名单抽签服务平台，允许项目方基于持币条件定制白名单（如要求持有 Nouns、CrypToadz、Blitmap 等特定 CC0 NFT），并在注册人数超过铸造数量时自动抽签选出获胜者
- PREMINT 采取 freemium 模式：前 250 个地址的简单白名单免费，前 5 次智能合约快照保存免费；超出限制需购买 Creator Pass NFT（1 ETH/个，无限供应，永久解锁高级功能）
- Lanyard 是一个开源的白名单创建工具，其核心创新是将白名单、Merkle root 和证明安全存储，使社区可以从任何集成 Lanyard 的平台（创作者自己的网站、mint.fun 等）铸造同一项目，避免白名单被锁定在单一平台
- Bueno Forms 是 Bueno 团队推出的无代码 web3 表单工具，可将白名单创建简化为表单填写——延续了 Bueno 为 NFT 创作者提供无代码工具的定位
- 三种工具代表了 NFT 白名单工具的三种范式：PREMINT = 平台化抽签服务（中心化但易用），Lanyard = 开源协议层（去中心化互操作），Bueno Forms = 无代码表单（最低门槛）

## 关键数据
- PREMINT Creator Pass NFT 价格：1 ETH/个（2023年6月），无限供应，通过 PREMINT 网站购买并兑换以永久解锁高级功能
- PREMINT 免费额度：前 250 个地址的简单白名单免费，前 5 次智能合约快照保存免费
- Lanyard 开发团队：由 Context、mint.fun、Zora 三个团队联合设计（2023年）
- Bueno 产品矩阵：至少 4 个工具——Art Generator（艺术生成器）、Smart Contract Deployer（智能合约部署器）、Microverse、Forms（白名单表单）
- 本文为 Bankless Metaversal 系列教程的第 4 篇，前序内容覆盖 NFT 集合生成和铸造 UI 搭建

## 与已有知识的关系
- 补充 [[nft]] — 本文提供了 NFT 铸造流程中的白名单环节的具体工具和操作指南，填补了 NFT 概念页中"铸造基础设施"子话题的空白，特别是白名单作为社区管理和防 bot 机制的实践层面
- 补充 [[layer2]] — PREMINT 和 Lanyard 的白名单快照依赖于链上数据查询（智能合约快照），这涉及 L2 和主网之间的状态同步问题，白名单工具需要支持多链环境
- 关联 [[gamefi]] — 游戏 NFT 项目的白名单管理尤为重要，可以用于筛选真正的玩家社区而非投机者，本文的工具链对此有直接适用性

## 值得记住的引用
> "Lanyard securely stores your allowlist, Merkle root, and proofs so that your community can mint your project from their preferred interface — your website, mint.fun, and any other platform that integrates Lanyard. As more and more mints happen on platforms like mint.fun, it's important that creators' allowlists are part of the horizontal web3 stack and not siloed to a specific project page implementation." — Lanyard 团队在 Mirror 上的公告，阐述了白名单作为横向基础设施而非平台锁定功能的愿景

> "Your NFT skill tree is growing fast. Now you know how to generate a large NFT collection and create your own minting UI. But what about setting up the actual parameters of your mint?" — William M. Peaster 将白名单定位为 NFT 创作者技能树的第三个关键节点，体现了 Bankless Metaversal 对 NFT 创作者的渐进式教育思路

## 我的笔记
- PREMINT 的 Creator Pass NFT 定价 1 ETH（2023年约 $1900）是一个有趣的门槛设计：对一次性的 NFT 项目方来说可能偏贵，但对于持续发布多个系列的创作者而言，无限供应 + 永久解锁的模型具有长期经济性——这本质上是用 NFT 作为软件许可证的 SaaS 替代方案，但 1 ETH 的固定定价是否合理取决于创作者预期的收入规模
- Lanyard 的"横向 web3 栈"理念值得关注：在 2023 年，大多数 NFT 铸造平台（如 OpenSea、Manifold）各自维护独立的白名单系统，Lanyard 试图通过 Merkle root 标准化打破这种锁定——这与当前（2026年）的链抽象和意图层趋势一脉相承，是对平台锁定效应的早期反击，但其成功依赖于足够多的平台集成，这在商业竞争中是一道高墙
- 三种工具的并存（2023年）说明 NFT 基础设施仍处于早期碎片化阶段：有的偏重抽签机制（PREMINT），有的偏重互操作性（Lanyard），有的偏重无代码（Bueno）。真正的赢家可能是将三者整合的统一平台，或者行业最终形成 Merkle root 标准使工具层无关紧要
