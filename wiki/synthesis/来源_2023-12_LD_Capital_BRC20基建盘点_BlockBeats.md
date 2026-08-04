---
type: source
source_type: article
url: https://www.theblockbeats.info/news/49527?from=telegram
author: Lisa, Jaden, LD Capital
date: 2023-12
ingested: 2026-07-02
---

# LD Capital: BRC20 基建五大赛道全盘点

## 阅读证据
- 总行数: 180
- Q1 (前25%): DotSwap 是 BRC20 首个正式上线的原生 AMM swap，$DSWP 总供应 12 亿枚（22.76% 已销毁），流通量仅 2,737,9620 枚（2.292%），采用类似 Curve 的 veToken 经济模型——用户锁定 DSWP 获得 veDSWP 投票权来分配 LP 奖励
- Q3 (中后25%): BitStable（BSSB）协议支持在比特币/以太坊/BNB 链上抵押 ORDI（抵押率 500%）或 BTC/BTCB 获得稳定币 DAII，BSSB 总量 2100 万枚，其中 50% 在 Bounce Finance 上公开发售
- Q4 (最后25%): 跨链赛道中 MultiBit 于 11 月 12 日在 Bounce 完成 $MUBI 公售；ROUP（Rolluper）使用 MAP Protocol 的 BRC201 跨链方案实现 BRC20 到 MAP L2 的跨链，总发行量 21 亿枚，协议服务收入用于回购销毁 $ROUP
- 图片: 0 analyzed / 14 decorative skipped (均为项目代币分配饼图、路线图、产品截图等配图) / 0 external URLs unavailable

## 核心要点
- LD Capital 在 2023 年末系统盘点了 BRC20 生态的五大基建赛道：DEX（3个）、借贷（2个）、稳定币（1个）、Launchpad（3个）、跨链（4个），共 13 个项目
- DEX 的核心技术路径是 PSBT（部分签名比特币交易，BIP 174），这是 BRC20 交易绕开智能合约限制的关键——RDEX 和 DotSwap 均基于 PSBT + 比特币脚本 + Nostr 协议构建
- BRC20 借贷产品面临根本性技术瓶颈：BTC L1 缺乏智能合约，交易速度慢，清算模块无法像以太坊 DeFi 那样自动执行——"借贷产品的核心为清算模块，需要避免不及时清算导致的系统坏账……目前 BTC layer1 交易速度和无智能合约的特性并不能满足上述要求"
- 稳定币方案（BSSB/DAII）通过跨链到以太坊来借用其清算基础设施，形成"BTC 抵押 + ETH 清算"的混合架构，但安全性待考量
- Bounce Finance（AUCTION）和 Turtsat（TURT）形成 BRC20 Launchpad 双雄格局：Bounce 拥有 Coinbase/Binance/Pantera 等顶级 VC 背书并计划推出 BTC L2 BounceBit；Turtsat 定位 Ordinals 的 Gitcoin，通过 TURT 质押 → EGGS → 白名单的漏斗机制吸引社区
- 文章隐含判断：DotSwap 凭借先发优势和丝滑体验"有机会成为生态龙一的 DEX"，但窗口期短暂——所有竞争者的护城河尚未建立

## 关键数据
- DotSwap $DSWP 总供应 12 亿枚（22.76% 销毁），流通量仅 2,737,9620 枚（占总量 2.292%），剩余代币在 4 年内线性解锁
- Ordiswap $ORDS 总供应 1,000,000 枚，私募轮 $3.50/枚，种子轮 $2.00/枚，TGE 流通 437,500 ORDS，市值 $7M，FDV $16M
- Bounce $AUCTION 最大供应 10,000,000 枚（不含销毁），流通量 6,500,033 枚，预计 2024 年 8 月全部释放
- Turtsat $TURT 总供应 10 亿枚，截至 2023 年 12 月质押量 3.134 亿枚（31.34%）
- BSSB 总量 2100 万枚，分配：50% Bounce 公售 / 36.5% 质押奖励 / 5% 团队（6 月锁 + 15 月线性解锁）/ 3.5% 空投 / 5% LP
- ORDI 在 BitStable 中的抵押率为 500%，即每借出 $1 DAII 需 $5 ORDI 抵押
- MultiBit 在 Bounce 和 Turtsat 两次 IDO 共募资约 $35 万（88 ETH + 4.64 BTC）

## 与已有知识的关系
- 补充 [[brc20]] — 系统化的赛道分类（DEX/借贷/稳定币/Launchpad/跨链）和 PSBT 技术基础，丰富了 BRC20 从"代币标准"到"完整 DeFi 生态"的演进图景
- 补充 [[bitcoin-ecosystem]] — 添加 2023 年末时间切片，展示 BTCFi 在 DEX 和借贷方面的早期基建状态，可作为 BTC L2 后来崛起（2024 年 Stacks/Babylon/Fractal）的前期参照
- 补充 [[bitstable]] — 新增 BSSB 代币经济学细节（抵押率 500%、50% Bounce 公售分配、6+15 团队解锁结构），以及借贷清算模块在 BTC L1 上的技术瓶颈分析
- 补充 [[multibit]] — 新增 MUBI 在 Bounce Finance 的 IDO 细节和跨链技术路线
- 关联 [[ordinals]] — 所有 BRC20 基建项目均依赖 Ordinals 协议的铭文存储和 PSBT 交易标准
- ⚠️ 与 2024 年 BTC L2 繁荣时期叙事形成对照：2023 年末的 BRC20 基建项目几乎全部停留在 L1 层使用 PSBT+索引器方案，2-3 个月后 BTC L2（Merlin/Babylon/B²）崛起，部分 L1 基建被迅速边缘化

## 值得记住的引用
> "Dotswap 作为第一个正式上线的 brc20 native swap，凭借其丝滑的体验占据先发优势，若能进一步通过上线优质项目、优化经济模型等途径吸引注意力，培养用户习惯，获得 TVL 沉淀，在短暂的窗口期形成对未来竞争者的壁垒，有机会成为生态龙一的 DEX。"

> "借贷产品的核心为清算模块，需要避免不及时清算导致的系统坏账。为了激励清算人并降低参与清算的风险，需要提供足够利润空间以及良好的二级流动性将清算物即时卖出。目前 BTC layer1 交易速度和无智能合约的特性并不能满足上述要求，因此大部分比特币生态产品可能会偏向中心化或借用以太坊网络进行构建，安全性待考量。"

## 我的笔记
这篇文章本质上是 LD Capital 投研团队在 BRC20 叙事高峰期的一份赛道 mapping 笔记——文章末尾标注的"原文链接"图片暗示来源可能是内部投研文档。从时间点看，2023 年 12 月下旬正是 ORDI 暴涨后、BTC L2 叙事尚未全面爆发的窗口期，文中所有项目的估值和叙事都受"BTC 生态基建稀缺性"溢价影响。回头看，文中被看好的 DotSwap 并未成为"生态龙一"，而 Bounce 提到的 BounceBit 后来在 2024 年反而成为一个独立的 BTCFi 赛道。这篇文章最大的价值不是项目推荐，而是作为 BRC20 狂热期的"时间胶囊"——记录了市场在 BTC 生态叙事最亢奋时如何用 ETH DeFi 的品类框架（DEX/借贷/稳定币/Launchpad/跨链）去套 BTC 生态的早期产品。
