---
type: source
source_type: article
url: N/A — 汇编整理型文章，无单一原始 URL；文中引用了 ordswap.io, ordinalswallet.com, magiceden.io, unisat.io, mempool.space 等多个工具链接
date: 2023-05
ingested: 2026-07-02
---

# BTC Ordinals 生态全景：代币协议、交易市场与工具指南

## 阅读证据
- 总行数: 361
- Q1 (前25%): BRC-20 标准由 Twitter 用户 @domodata 于 2023 年 3 月 8 日提出，是一种实验性质的比特币网络同质化代币标准，基于 Ordinals 协议，使用 JSON 数据格式的铭文部署、铸造和转移代币，没有智能合约。
- Q3 (中后25%): RUNE 协议是 Ordinals 创办人 Casey Rodarmor 认为 BRC20、Taproot Assets 等现有方案有各自缺陷后，提出的基于 UTXO 的同质化代币协议；PIPE 则是生态开发者 BennyTheDev 对 Casey 概念的先行实现。
- Q4 (最后25%): 文章列出大量实战工具链接，包含交易市场（OrdinalsWallet、Magic Eden Bitcoin、Ordswap、OpenOrdex）、钱包（UniSat、Xverse、Sparrow、Electrum）、LaunchPad（Magic Eden Bitcoin、OrdinalsWallet）、代打平台（UniSat、LooksOrdinal、idclub）和分析工具（ordiscan、ordspace、bestinslot、Dune、mempool、Hiro、OrdSpy）。
- 图片: 0 analyzed / 8 张本地路径图片不可用（均为 `.jpeg`/`.png` 格式本地引用路径，文件目录未随文章迁移）

## 核心要点
1. **比特币基础回顾**：比特币是点对点支付结算网络，总量 2100 万枚固定供应，去中心化、无需许可，通过 PoW 挖矿验证交易。
2. **Ordinals 协议机制**：由 Casey Rodarmor 于 2022 年 12 月创建，包含"铭文"（Inscriptions — 将任意数据刻在聪上）和"序数"（Ordinals — 为聪编号追踪的系统）两个核心概念；依赖 SegWit（2017）和 Taproot（2021）两次比特币网络升级实现。
3. **比特币代币标准全景**：BRC-20（domodata 创建，JSON 铭文，无智能合约）是最早的同质化代币标准；随后出现 ORC-20（BRC-20 改进版，防双花、可取消交易）、BRC-21/BRC-42（跨链版本，Interlay 创始人 Alexei Zamyatin 提出）、BRC-721（NFT 标准，支持 Trait 和链下存储）和 Generative BRC-721（通过特征拆分降低铸造成本）。
4. **替代代币协议**：SRC-20 基于 STAMPS 协议，数据存储在 UTXO 中而非见证数据，比 Ordinals 更"区块链原生"但空间更小（最高 24x24 像素）；LTC-20 和 DRC-20 是 BRC-20 在莱特币和狗狗币上的分叉，成本更低、速度更快。
5. **UTXO 原生协议**：Atomicals/ARC20 使用聪作为基本原子代表代币，1 Token = 1 Satoshi，引入 PoW 铸造增加公平性，对第三方排序器依赖大大低于 BRC-20；Rune 协议是 Casey 对基于 UTXO 的同质化代币协议构思，目前仅概念设计流出，PIPE 是 BennyTheDev 的先行实现。
6. **Taproot Assets 方案**：由 Lightning Labs 发布，代币元数据写入 BTC 主网 UTXO 脚本但实际交易通过闪电网络进行；需要项目方预铸造分发（非自由铸造），依赖第三方存储索引器，是目前最中心化的 BTC 代币协议方案，但因不增加 BTC 网络负担而获社区默许。

## 关键数据
- 比特币最大供应量: 21,000,000 BTC
- BRC-20 提出时间: 2023 年 3 月 8 日，由 @domodata 在 Twitter 提出
- BRC-20 币种数量（截至 2023 年 5 月）: 接近 1 万种，第一个也是最⼤的是 $ORDI（已上线币安）
- SRC-20 最大图像限制: 24x24 像素 / 8 色深
- ARC20 代币最低价值: 1 聪 = 1 ARC20 代币，永不归零
- $pipe: PIPE 协议代币，发布后迅速完成第一波炒作

## 与已有知识的关系
- 补充 [[brc-20]] — 本文为 BRC-20 提供了 2023 年 5 月的时间切片：刚诞生 2 个月时已有近万种币种、$ORDI 已上线币安，生态从单一代币标准发展为多协议竞争格局（ORC-20、BRC-721、Generative BRC-721、LTC-20 等）。
- 补充 [[bitcoin-ecosystem]] — 本文详细对比了 7 种比特币代币协议（BRC-20、ORC-20、BRC-721、SRC-20、ARC20、Rune/PIPE、Taproot Assets）的技术路径和去中心化程度，提供了 2023 年 BTC 生态"协议大爆发"时期的完整快照。
- 补充 [[runes]] — 本文记录了 Casey Rodarmor 提出 Runes 协议的早期动因（不满 BRC-20 的缺陷）和设计原则（基于 UTXO、简单性、去中心化），以及 BennyTheDev 的 PIPE 作为先行实现的过程。
- 补充 [[lightning-network]] — 本文提供了 Taproot Assets 与 BRC-20/ARC20 的技术对比：Taproot Assets 将 BTC 主网作为代币注册表，转账通过闪电网络，非自由铸造，依赖第三方索引器，是目前最中心化的方案但社区阻力最小。

## 值得记住的引用
> "BRC-20 是一个模仿 ERC-20，但是在比特币的网络上执行的 Token 发行标准。BRC-20 就是在比特币 NFT 铭文的基础上，规定了附着在每一个 Satoshi 上的信息规则。"

> "对于 STAMPS 协议而言，由于信息存储在 UTXO 中，每个完整节点都必须存储它们，因此比 Ordinals 更加「区块链原生」。"

> "Rune 协议尽可能简单，不依赖于链下数据，没有原生代币，并且适合比特币的 UTXO 模型。"

## 我的笔记
- 这篇文章是典型的"生态盘点+工具导航"型内容，约 2023 年 5 月成文，正是 BRC-20 热潮的初期。文章最大的价值在于完整收录了当时所有比特币代币协议的横向对比（BRC-20 / ORC-20 / BRC-721 / SRC-20 / ARC20 / Rune / Taproot Assets），让读者能快速理解不同协议的技术路径和取舍。这种"协议对照表"性质的资料在事后看非常有信息密度。
- 文章后半部分的大段工具链接列表（钱包、市场、浏览器、分析工具、代打平台）对于 2023 年的读者是实用资源，但作为知识库条目有效信息密度较低，因为链接容易过时。真正有长期价值的还是前半部分的协议对比部分，特别是对各种协议的去中心化程度和技术路线的评估（如 STAMPS 的"区块链原生" vs Ordinals 的"可修剪"对比）。
- 文章视角偏向参与者和交易者（"早参与早吃肉"），而非技术研究，但协议对比部分的客观性较好。需要注意这篇文章的发表日期较早，后续（2024-2026 年）的 Runes 主网上线、Fractal Bitcoin 推出、BTC L2 爆发等事件都不在覆盖范围内。
