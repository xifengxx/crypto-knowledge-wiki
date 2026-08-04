---
type: source
source_type: report
url: https://thenakedcollector.substack.com/p/finding-the-next-solana
author: The Naked Collector
date: 2024-10
ingested: 2026-06-29
tags: [l1, solana, sui, aptos, sei, monad, berachain, layer-1-competition]
---

## 阅读证据
- 总行数: 1162
- Q1 (前25%): 新L1对比Solana性能：TPS/区块时间/终局性。两种并行执行方式：State Access(Sui/Solana) vs Optimistic(Sei/Aptos/Monad)。Firedancer目标600K-1M TPS。单槽终局性优势
- Q3 (中后25%): Sui游戏+TradFi生态详解。Sei DeFi基础设施+MEV管理。Aptos企业策略。Monad社区文化优势(373K Discord/26.6K TG)。Berachain Proof-of-Liquidity代币经济学
- Q4 (最后25%): 数据对比：Solana TVL 6x Sui/活跃地址6x/日交易5.5x。Sui在早期500天增长轨迹超Solana同期。资金-表现负相关。结论：技术性能不构成护城河→社区+文化+实用才是
- 图片: 86张图表(绝大多数为数据分析图/对比表)

# Finding the Next Solana — L1 竞争全景分析

## 核心要点
1. **性能已成商品**：新L1(Sui/Aptos/Sei/Monad/Berachain)的TPS/区块时间/终局性均不差于Solana。单槽终局性+更低Gas是增量优势，但不是差异化关键。Firedancer 600K-1M TPS进一步压缩性能差距
2. **两种并行执行路径**：State Access(Sui/Solana)需声明状态访问→高效预分配但开发复杂度高；Optimistic(Sei/Aptos/Monad)→无预声明/简化开发但可能冲突重试
3. **EVM兼容性并非护城河**：跨链桥已消除用户体验差异。非EVM链(Solana/Sui)的活跃钱包是EVM链的3x+。用户跟随用例而非技术兼容性→Base依靠Coinbase用户基础而非EVM才成功
4. **两个竞争路径**：Sui=游戏+TradFi垂直深耕(动态NFT/DeepBook CLOB/Closed-Loop Token)；Aptos=Web2企业合作(Microsoft/SK Telecom/BCG)+Move语言安全；Sei=高性能DeFi(FBA防MEV/永续DEX)；Monad+Berachain=社区文化优先(未上线主网已获比Aptos+Sei更多的dApp融资)
5. **代币经济学反思**：高VC估值+低流通=上市后表现不佳。Wormhole 26% MC/FDV / ZKsync 17.5% MC/FDV。社区害怕VC解锁抛压→Monad/Berachain需要平衡社区期望与$1.5-3B VC估值
6. **Solana的护城河**：不是技术而是产品化能力(Apple of Web3)+DePIN先发优势(Helium/Hivemapper/Render)+Token Extensions合规功能(PayPal背书)+硬件生态(Seeker手机/PSG1游戏机)

## 关键数据
- Solana: 市值#4 L1 / TVL #3 / 活跃地址 #1 / 上线到峰值274x
- Solana 交易失败率40%(DEX滑点+机器人)
- Monad Discord 373K / Berachain Discord 468K(testnet阶段，超过已上线链)
- Solana TVL 6x Sui(最近竞争者)；活跃地址6x；日交易5.5x
- Sui: RECRD 481K日活 / NAVI $294M TVL / Overflow黑客松352项目79国
- Sei: 52K活跃地址 / $149M TVL(约Sui的15%) / Creator Fund $10M
- Aptos: Chingari占80%日活+50%Gas费(从Solana迁移)
- Monad: $1M Madness pitch比赛 / Berachain: $69M融资$1.5B估值
- Sui/Sei/Aptos社区分配50-58% / 团队+投资者42-49%
- 更大融资轮≠更好价格表现(去除Solana后呈负相关趋势)
- 更早上线=更好价格表现(稳健正相关)
- 各L1节点最低硬件要求对比表(含) / 各L1活跃钱包数据(a16z) / TVL分布(借贷/质押/DEX占比)

## 与已有知识的关系
- 大幅补充 [[l1-competition]] — 最全面的下一代L1全景分析(Sui/Aptos/Sei/Monad/Berachain五大链+Solana护城河)
- 补充 [[monad]] 实体页 — Monad社区策略/生态dApp/APAC布局
- 补充 [[solana]] 实体页 — Apple of Web3定位/DePIN先发优势/硬件生态/Token Extensions
- 补充 [[fundraising]] — 融资轮规模与价格表现负相关的新证据
- 与 [[restaking]] / [[eigenlayer]] 关联 — L1竞争→安全预算竞争→Restaking需求

## 值得记住的引用
> "A great cult beats great tech. Cardano and XRP have consistently outperformed more advanced chains like Cosmos and Polkadot in market cap through cult-like followings."
> "EVM compatibility alone doesn't guarantee network effects or liquidity – as evidenced by numerous dead EVM-compatible chains."
> "Users follow compelling use cases regardless of chain loyalty. Even the most dedicated Ethereum supporters bridged to Solana for NFTs."
> "The critical question remains whether these newer L1s can convert their initial momentum and capital advantages into sustained user adoption beyond the initial hype cycle."

## 我的笔记
The Naked Collector的这篇可能是2024年最全面的L1竞争分析。核心洞察：(1) 性能已是商品——所有新L1都够快够便宜，战争已从"谁最快"转向"谁有最好的应用+社区"；(2) 两条路泾渭分明——Sui/Aptos/Sei走VC+企业路线(高估值低社区感)，Monad/Berachain走社区+文化路线(未上线已有狂热社区)；(3) Solana的真正护城河不是SVM或TPS，而是产品化能力(Apple式体验)+DePIN先发优势(多年硬件网络建设)+品牌；(4) 跨链桥消除了EVM兼容性优势——用户在意的不是底层技术栈而是哪里有他们想用的应用。2026年回顾：Monad和Berachain已上线，社区确实狂热但代币表现分化。Sui的游戏战略初见成效。Solana的Firedancer仍在推进但未完全上线。Hyperliquid作为Specialized L1的崛起验证了"专注>通用"的论点。
