---
type: source
source_type: article
url: https://www.techflowpost.com/article/detail_27595.html
date: 2025-08-17
ingested: 2026-07-02
---

# 稳定币公链：以机构和隐私之名，行分销和收益之实

## 阅读证据
- 总行数: 144
- Q1 (前25%): Capital One 2024 年以 353 亿美元收购 Discover，变身发卡行+卡组织一体化组织——作者以此类比稳定币发行方自建 L1 的逻辑
- Q3 (中后25%): Arc 技术架构最多 20 个验证节点，DPOS 机制下理论 3000 TPS、亚秒确认、Gas Fee 低于 1 美元；基于 CometBFT 改造的 Malachite 共识理论可达 50000 TPS
- Q4 (最后25%): USDe 依靠循环贷策略，月内发行量突破 100 亿美元大关；作者认为"说"合规+"做"分销是稳定币 L1 的核心 GTM 策略
- 图片: 3 analyzed / 0 decorative skipped / 0 external URLs unavailable

## 核心要点
- 稳定币发行方正从"依赖通用公链"转向"自建专用 L1"：Circle 的 Arc、Stripe 的 Tempo、Tether 的 Plasma/Stable、USDe 的 Converge 都在打造自己的稳定币专用链，目标不再是技术差异化，而是控制分销渠道和终端用户网络
- 稳定币 L1 竞对的不是以太坊或 Tron，而是 Visa/MasterCard/SWIFT 体系——在 Genius Act 之后，银行→稳定币发行方、卡组织→稳定币 L1 的角色替代正在发生，可编程性消除了一切中间方存在的必要性
- 技术不是壁垒——基于 Cosmos SDK、EVM 兼容、CometBFT 改造的共识引擎让启动一条"Hyperliquid 级"稳定币 L1 的难度接近部署 Docker 实例。真正的壁垒是生态扩张和分销网络（Visa 花了 50 年，USDT/Tron 花了 8 年）
- 稳定币 L1 的 GTM 策略是"说一套，做一套"：对外宣称合规+机构采用（Arc 主推全球合规，Tempo 和 Converge 瞄准机构），实际操作中依赖 Crypto 原生方式推广（Plasma/Converge 与 Pendle 合作、USYC 收益稳定币暗推、Tempo 由 Paradigm 创始人亲自挂帅）
- Genius Act 禁止支付型稳定币支付利息，但收益在用户转化上是"致命诱惑"——USDe 通过循环贷月内破 100 亿美元证明了生息稳定币的市场需求远超合规框架的想象
- 完整产业链正在闭环：发行方（Circle/Tether）→ 分销渠道（Coinbase/币安/现有公链）→ 终端网络（Stripe Tempo），三方都在自建 L1 以摆脱对彼此和卡组织的依赖

## 关键数据
- USDT 曾宣称 40% 的公链手续费由其创造
- Circle 单季度向 Coinbase 额外"补贴"约 3 亿美元的分销成本（2024 年全年支付 Coinbase 9.08 亿美元）
- Arc 最多 20 个验证节点，理论 3000 TPS（Malachite 改造后可达 50000 TPS），Gas Fee 低于 1 美元
- USDe 月内发行量突破 100 亿美元（通过循环贷策略）
- Tron 上 TRC-20 USDT 是事实上的全球 USDT 清算网络，USDT 是唯一有真实用户的稳定币

## 与已有知识的关系
- 补充 [[stablecoins]] — 新增"稳定币公链"品类作为第五大演进方向（此前四类：法币抵押/加密抵押/算法/合成美元），揭示稳定币赛道的竞争正从"发行层"上移到"结算层"
- 补充 [[circle]] — Arc 的战略意义：Circle 不再甘于做 Coinbase 的附属物，自建 L1 是为了掌握分销定价权和终端用户数据
- 补充 [[l1-competition]] — 新增"稳定币专用 L1"赛道：Arc/Tempo/Converge/Plasma 与通用 L1（Solana/Monad/Berachain）形成完全不同的竞争维度——前者争夺支付清算基础设施地位，后者争夺开发者生态
- 补充 [[genius-act]] — 法案禁止支付型稳定币付息，但稳定币 L1 和生息稳定币（USYC/USDe）正在规则的边界之外找到突破方式，暴露了监管框架与市场现实之间的张力
- 补充 [[ethena]] — Converge 作为 Ethena 的稳定币 L1 布局，与其循环贷驱动的 USDe 增长形成协同
- 补充 [[tether]] — Tether 选择 Plasma 和 Stable 两条外部赛马路线，而非 Circle 的内部自建模式，延续其"高效轻量"的运营基因
- 补充 [[payfi]] — 稳定币 L1 本质上是 PayFi 的结算层竞争：谁控制了稳定币的底层结算轨道，谁就掌握了全球支付金融的定价权

## 值得记住的引用
> "稳定币直接对接国债，银行业尚且可以发行稳定币自救，但是卡组织和跨境支付渠道都要面临生存危机。"

> "在稳定币 L1 之前，TRC-20 USDT 是事实上的全球 USDT 清算网络，USDT 也是唯一有真实用户的稳定币，所以 Tether 无需给交易所分润，USDC 只不过是其合规替身，如同 Coinbase 是币安在纳斯达克的映射。"

> "稳定币 L1 的 GTM 策略是'说和做分离'——做：散户使用→分销渠道→机构采用；说：机构合规→大众普及。机构采用从来都是一种合规手段，如同 Meta 也宣称要保护用户隐私，但在现实商业中，都要先有用户才能推动机构采用。"

> "在 Cosmos 的加持下，启动 Hyperliquid 级的产品在技术上都无卡点，如果是 L2 难度更不会超过部署 Docker 实例。"

## 我的笔记
这篇文章的最大价值在于揭示了一个被市场忽视的趋势：稳定币竞争的主战场已从"谁的储备更透明"（Circle vs Tether 时代）迁移到"谁控制了结算层"（稳定币 L1 vs 通用公链 vs 卡组织）。Circle 自建 Arc 不是因为 Cosmos 技术好，而是因为它一年给 Coinbase 9 亿美元分销费实在忍不下去了。但讽刺的是，Arc 的 20 节点 DPoS 架构本质上比 Tron 还中心化——这不是去中心化理想主义，而是赤裸裸的商业理性：企业级客户需要 SLA，不是 Nakamoto 系数。

另一个值得警惕的论点是"技术不是壁垒"。作者说启动一条 Hyperliquid 级链的难度等于部署 Docker 实例——如果这是真的，那么稳定币 L1 赛道的结局可能不是百花齐放，而是被最有分销渠道的玩家垄断。Stripe 掌握了商户端、币安掌握了交易端、Coinbase 掌握了合规端——这三家如果都自建 L1，开放公链（Ethereum/Tron/Solana）在稳定币结算上的份额将被系统性蚕食。同时，文章中近乎轻描淡写地提到 USDe 通过循环贷月内破 100 亿美元——这种速度本身就说明收益驱动的用户增长远超合规驱动的机构采用，Genius Act 的"禁止付息"条款在市场面前形同虚设。
