---
type: source
source_type: article
url: https://www.techflowpost.com/article/detail_23744.html
date: 2025-02-23
ingested: 2026-07-02
---

# 预言机项目RedStone即将TGE：模块化架构、AVS优势和代币经济五角度解读

## 阅读证据
- 总行数: 238
- Q1 (前25%): RedStone于2024年7月完成1500万美元A轮融资，使用EigenLayer AVS框架实现链下数据验证以降低Gas成本，流程为AVS运营商从数据源获取市场价格和TWAP费率后链下验证再反馈上链
- Q3 (中后25%): RED代币总供应量10亿枚，其中48.3%分配给社区增长计划（含空投和未来激励），20%分配给核心贡献者；70%的代币在TGE后12个月内完全锁定，随后36个月逐步解锁
- Q4 (最后25%): 参考文章列表包括2025年7小时前的Bybit被盗15亿美元事件分析，RWA相关文章（Sonic 市值接近前高、以太坊 Pectra 升级等）
- 图片: 0 analyzed / 10 external URLs (upload.techflowpost.com) unavailable

## 核心要点
- RedStone凭借模块化架构（同时支持Pull和Push两种数据模式）和EigenLayer AVS链下验证机制，在Gas效率、可扩展性和安全性上优于传统预言机方案，成为DeFi领域增长最快的预言机提供商之一
- 2024年RedStone实现重大市场突破：TVS超68亿美元，与超100个新客户合作（包括Spark、Pendle、Ethena等DeFi头部协议），覆盖超30条链，成为第二大多链预言机提供商
- 在极端市场事件中表现优异：2024年2月20亿美元清算事件中24小时内推送11.9万次更新（ETH/USDC更新超Chainlink 30个点）；2024年4月Renzo（ezETH）脱钩期间3个区块内发布约40次价格更新（Chainlink同期约20次）
- RED代币为收益型实用代币，支持质押和委托给数据提供商获取费用分成，还可封装为LRT部署到DeFi协议中释放额外收益，形成"客户增长→运营商费用增加→代币持有者收益提升→更高质押率"的正反馈循环
- 以Pyth 20亿美元FDV为估值基准，每枚RED代币预计价格为2美元；若市场走好达到Chainlink的FDV水平，代币价格或涨至20美元

## 关键数据
- RedStone TVS超68亿美元，2024年与超100个新客户合作，覆盖超30条链，成为第二大多链预言机提供商
- RED代币总供应量10亿枚，初始流通占比30%，48.3%分配至社区增长，20%分配至核心贡献者
- 70% RED代币在TGE后12个月内完全锁定，随后36个月逐步解锁
- RED作为ERC-20代币发行，通过Wormhole原生传输标准桥接到Solana、Base等网络
- 2024年2月20亿美元清算事件中RedStone 24小时推送11.9万次更新
- 2024年4月ezETH脱钩事件中RedStone 3个区块内发布约40次价格更新（Chainlink约20次）

## 与已有知识的关系
- 补充 [[redstone]] — 提供RedStone代币经济（RED代币）、TGE前市场数据（68亿美元TVS）和极端事件性能的具体数据，以及三大预言机横向对比（Chainlink/Pyth/RedStone）
- 补充 [[chainlink]] — 本文提供了将Chainlink（主EVM/push model/昂贵集成）与RedStone（任意链/双模式/AVS经济验证）的直接比较
- 补充 [[pyth]] — 强调Pyth专注于非EVM和Perps市场，使用Wormhole作为跨链中继器，与RedStone形成差异化竞争
- 补充 [[eigenlayer]] — 补充AVS在预言机场景的具体应用案例：RedStone通过EigenLayer AVS框架实现链下数据验证和高效Gas管理
- 补充 [[tokenomics]] — 提供RED代币分配模型的具体案例（48.3%社区/20%核心贡献者/70%锁仓12个月+36个月逐步解锁）

## 值得记住的引用
> "与其他oracle不同，RedStone可以通过使用EigenLayer AVS框架来验证价格反馈数据的准确性和有效性，从而实现更高效的Gas花费和可扩展性。"

> "在2024年2月的20亿美元清算事件中，Redstone在24小时内成功推送了11.9万次更新，其中ETH/USDC 价格的更新次数超出 Chainlink 30个点，为其提供更新更准确的价格。"

> "RED的设计以社区为中心：大部分代币供应（48.3%）将分配给社区增长计划，包括空投、未来的捐赠计划和激励措施，20%将分配给核心贡献者。"

## 我的笔记
- 本文由DeFi KOL Poopman撰写，编译自Odaily，带有明显的项目推广倾向——文章发布在RED TGE前一周，估值预测（以Pyth的2B FDV为基准，RED=2美元）本质上基于对标而非基本面分析，Core Contributor 20%的分配在加密叙事中被包装为"社区中心"仍显牵强。
- RedStone在极端行情下的性能数据（11.9万次更新/3区块40次更新）确实有实证说服力，但关键在于这些数据来自Chaos Labs报告而非独立第三方验证，且仅对比Chainlink一个竞争对手。Pyth和Chainlink对非EVM的支持、CCIP跨链等生态壁垒被简单带过，竞争格局的真实复杂度高于本文呈现的二分法叙事。
