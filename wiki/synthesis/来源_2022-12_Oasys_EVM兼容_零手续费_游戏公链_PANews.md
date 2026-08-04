---
type: source
source_type: article
url: https://www.panewslab.com/zh/articledetails/0ig5zvyo.html
date: 2022-12-19
ingested: 2026-07-02
---

# 一文详解 Oasys：兼容 EVM 的零手续费高速游戏公链

## 阅读证据
- 总行数: 173
- Q1 (前25%): Oasys 于 2022 年 7 月完成由 Republic Capital 领投的 2000 万美元 Token 私募轮融资，Jump Crypto、Crypto.com、Huobi、Kucoin、Bitbank 和 Mirana Ventures 等参投；12 月 6 日宣布完成新一轮战略融资，由 Galaxy Interactive、韩国游戏巨头 Nexon、Jets Capital、ChainGuardians 等参投（金额未公布），同月分配 100 万美元额度在 Republic 平台公募，价格 0.035 USD，12 小时内售罄
- Q3 (中后25%): OAS 的总供应量为 100 亿个，主网启动六年后 OAS 持有者将通过去中心化治理确定额外的质押奖励供应量；多代币经济体系包括三个层次——OAS（基础原生代币）、Verse 代币（各 L2 生态代币）、游戏/Dapp 代币
- Q4 (最后25%): 截至撰稿时（2022 年 12 月），Oasys 上已建立 3 个 Verse，创建了 11 个游戏项目；12 月 12 日 OAS 正式登陆 OKX、Huobi、Gate、KuCoin、Bybit 五个交易所；12 月 8 日宣布与游戏制作人 Yu Suzuki 合作推出首个 NFT 项目 OASYX（1 万个 NFT）
- 图片: 0 analyzed / 13 decorative skipped / 13 external URLs unavailable（PANews CDN）

## 核心要点
- Oasys 是由日本万代南梦宫与世嘉联合推出的游戏专用公链，兼容 EVM，采用 PoS 共识机制，由 Hub-Layer（L1）+ Verse-Layer（L2）双层架构组成，核心卖点是用户零 Gas 费（费用由开发者承担）和与 Web2 产品持平的高速交易体验
- Verse-Layer（L2）采用 Optimistic Rollup 技术，但取消了传统的 7 天挑战期以适配游戏场景对即时确认的需求，未来计划兼容 ZK-Rollups；所有 L2 上的交易数据反映在 Hub-Layer 上，实现高数据可用性——即使 Verse-Layer 数据丢失也可完全从 Hub-Layer 恢复
- 代币体系采用三层多代币经济：vFT/vNFT（仅限特定 Verse 内使用，不可跨链）对应游戏内币和 IP 资产；oFT/oNFT（Hub-Layer 铸造，全生态互通可跨链至以太坊）对应互通性资产；exFT/exNFT（外部网络代币通过跨链桥进入）对应外部资产
- 主网于 2022 年 10 月 25 日启动，首批 21 个机构节点包括万代南梦宫研究院、世嘉、育碧、YGG、Com2uS、Jump Crypto 等，属于"传统游戏公司+Web3 机构"的产业联盟型验证者群体
- 创始团队阵容强大：Gabby Dizon（YGG 联合创始人）、Hajime Nakatani（万代南梦宫研究院总裁兼 CEO）、Hironobu Ueno（double jump.tokyo CEO）、Hironao Kunimitsu（Gumi 创始人）、Shuji Utsumi（世嘉联席 COO/PlayStation 创始成员）；核心开发力量来自 double jump.tokyo（曾开发链游 My Crypto Heroes，因遇到痛点而决定自建游戏专用链）
- OAS 代币具有五种效用：Gas 费支付（跨层交易/Bridge/Rollup）、Verse 开发质押（需 100 万 OAS 才能创建 Verse）、去中心化治理（投票决定质押通胀率、资金使用、Hub-Layer 合约部署等）、验证者质押奖励（需 1000 万 OAS 成为验证者）、生态内小额支付

## 关键数据
- 2022 年 7 月私募轮融资：2000 万美元，由 Republic Capital 领投
- Republic 公募价格：0.035 USD/OAS，12 小时内售罄（100 万美元额度）
- OAS 总供应量：100 亿个
- 创建 Verse 最低质押：100 万 OAS
- 成为 Hub-Layer 验证者最低质押：1000 万 OAS
- 主网上线日期：2022 年 10 月 25 日，首批 21 个机构验证节点
- 截至 2022 年 12 月：3 个 Verse，11 个游戏项目
- OAS 上线交易所：OKX、Huobi、Gate、KuCoin、Bybit（2022 年 12 月 12 日）
- Hub-Layer 出块时间：15 秒（与以太坊一致）

## 与已有知识的关系
- 补充 [[oasys]] — 本文提供了 Oasys 在主网即将上线/刚上线时间点（2022 年 12 月）的系统性介绍，包括融资细节（Republic Capital 领投 2000 万美元、公募 0.035 USD）、创始团队构成、代币经济学设计和主网上线早期状态；与 2023 年 7 月的后续报道（[[来源_2023-07_Oasys_游戏公链_育碧_世嘉]]）形成时间线对照——本文明明只有 3 个 Verse 和 11 款游戏，不到 7 个月后增长到 5 个 Verse 和 28 款游戏
- 补充 [[游戏公链]] — 提供了"游戏专用链"模式的又一案例，与 Ronin 模式（[[ronin]]）形成对比：Ronin 围绕单一爆款游戏（Axie）自下而上生长，Oasys 是传统游戏巨头联盟自上而下构建
- 补充 [[double-jump-tokyo]] — 作为 Oasys 背后的核心开发团队，double jump.tokyo 因在开发 My Crypto Heroes 过程中遇到痛点而决定自建游戏专用链，这一动机与 Sky Mavis 开发 Ronin 的逻辑相同
- 补充 [[ygg]] — Gabby Dizon（YGG 联合创始人）同时是 Oasys 创始团队成员，体现了链游公会与游戏公链在早期的人员和利益绑定

## 值得记住的引用
> "由日本万代南梦宫与世嘉联合推出的游戏公链 Oasys 是兼容以太坊 EVM 的一条侧链，并支持多链交互。Oasys 采用 PoS 共识机制，包含 Layer1 和 Layer2 层，一层主要用于主网共识，游戏主要运行在二层网络上。"

> "Oasys 的创始成员主要来自游戏和区块链行业的著名企业。...Oasys 背后的主要开发团队来自日本链游开发公司 double jump.tokyo。和 AxieInfinity 开发 Ronin 公链的原因一样，double jump.tokyo 在开发链游 My Crypto Heros 的过程中碰到了很多痛点，于是决定开发一个独立的游戏专用区块链来解决这些问题。"

> "Oasys 的原生主代币是 OAS，它是整个 Oasys 生态系统中最高级别的代币。OAS 的总供应量为 100 亿个。主网启动六年后，OAS 代币持有者将通过去中心化治理确定额外的质押奖励供应量。"

## 我的笔记
本文写于 Oasys 主网上线后仅两个月（2022 年 12 月），是一篇介绍性文章而非深度分析。其独特价值在于记录了 Oasys 在主网上线早期的确切状态（3 个 Verse、11 款游戏）和完整的代币经济学参数（100 亿总量、100 万 OAS 创建 Verse、1000 万 OAS 成为验证者），这些参数在后来的报道中常被省略。与 7 个月后的 [[来源_2023-07_Oasys_游戏公链_育碧_世嘉]] 对照，可见 Oasys 在不到一年的时间里 Verse 数量增长了 67%，游戏数量增长了 155%，验证了游戏巨头入场后生态的快速扩展。

值得警惕的是，"取消 Optimistic Rollup 的 7 天挑战期"在 2022 年被称为技术优势，但这本质上是牺牲安全性换取速度的取舍。文章未讨论这种设计在面对恶意验证者时可能带来的风险。另外，本文提及的 6 年 DAO 过渡目标在加密行业属于典型的"远大愿景"——主网上线半年不到就承诺 6 年后完全 DAO 运行，需要持续跟踪其治理权力是否真正向社区转移，还是停留在机构验证者之间的联盟治理。
