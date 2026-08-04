---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-07-02
tags: [l1, aptos, move, high-performance, enterprise]
---

# Aptos

## 基本信息
- 类型: Layer 1 区块链
- 共识机制: AptosBFT（基于 HotStuff 演进的 BFT 共识，支持验证者轮换）
- 并行执行引擎: Block-STM（乐观并行事务处理）
- 编程语言: Move（Diem 遗产，资源导向编程）
- 定位: 企业级 Web2 友好的高性能 L1
- 团队: Aptos Labs (Mo Shaikh、Avery Ching 等前 Facebook Diem 成员)
- 成立/官宣时间: 2022 年 2 月正式官宣，2022 年 10 月主网上线

## 核心业务/产品
- **高性能 L1**: 并行执行 + 低延迟 BFT 共识，理论吞吐量 >10 万 TPS，实际测试达 160,000 TPS
- **Block-STM 乐观并行执行**: 假设交易无冲突并同时处理，执行后验证，若发现冲突则重新执行受影响的交易。内存池预排序提前规避冲突，降低节点性能需求
- **内存池设计**: 保留公共内存池（区别于Solana的无内存池），交易进入后按FIFO/Gas费用预排序，确保后续并行执行时交易无冲突。提议者原则上无法自由排序交易（aip-68赋予提议者额外填充被延迟交易的权利）
- **交易生命周期五步**: 创建与发起→广播（内存池预排序）→排序（AptosBFT）→执行（Block-STM乐观并行）→状态更新（检查点确认）
- **Move 语言生态**: 以 Move 语言为智能合约标准，强调安全性和资源所有权模型；资源模型防止双重支付
- **企业级合作**: 收购 HashPalette（日本 NFT 市场）、与 SK Telecom/Lotte 等韩国巨头合作
- **RWA 生态进展**: 
  - 2024年7月引入 Ondo Finance USDY（Aptos上市值约1500万美元，占USDY总市值2.5%）
  - 2024年10月富兰克林邓普顿在Aptos推出BENJI代币（FOBXX基金）
  - 与Libre合作推进证券代币化，将Brevan Howard、BlackRock和Hamilton Lane投资基金上链
- **Grant 生态**: 官网将 Grant 置于突出位置并给出清晰规则，但社媒上 Grant 推广力度不足

## 运营策略（2023 年初数据）
- **社媒内容四大主题**: 测试网进展、每周 MoveMonday、Aptos/Move 技术布道、Ecosystem Highlight 系列
- **运营阶段论**: 主网上线前以 Developer 内容为主 → 主网上线后增加 Community 和活动内容
- **与 Sui 的关键差异**: Aptos 侧重宣传各类生态项目进展（更吸引散户/投资者关注），Sui 侧重技术文档和 Move 布道（主要吸引开发者）——这解释了 Aptos 社媒热度明显高于 Sui 的原因：开发者在 Crypto 用户中占比远低于散户

## APT ETF 申请（2025年3月）

2025年3月，Bitwise Asset Management向SEC提交了Aptos现货ETF的S-1注册声明（2025年2月25日特拉华州注册"Bitwise Aptos ETF"信托实体），Coinbase Custody被列为拟议托管人。分析师评价获批可能性较低到中等，认为在SOL、XRP和ADA获得批准后更有可能。这被视为Bitwise抓住下一波山寨币增长浪潮的大胆举措。

来源：[[来源_2025-04_山寨ETF_加密ETF申请_PANews]]

## 竞争优势 / 护城河
- 顶级资方和团队背景带来的早期关注度（a16z、Multicoin、FTX Ventures 等参与早期融资）
- Move 语言安全优势（比 Solidity 更安全、比 Rust 更易学）
- 亚太地区布局深入（日本 HashPalette 收购、韩国 SK Telecom 合作）
- 注重生态项目宣发带来的社媒传播优势

## 风险 / 争议
- 主网上线时间短，生态成熟度远不及 Solana/BNB Chain
- 早期热度高度依赖团队/资方光环，需要证明生态内生增长动力
- FTX 暴雷影响：FTX Ventures 是 Aptos 投资方之一
- 与 Sui 的 Move L1 竞争（两条链争夺同一开发者池和 Move 叙事）
- 社媒上 Grant 推广不足可能导致潜在开发者错过资助机会

## 相关实体
- [[sui]] — Move 语言同源 L1（Diem 遗产），最直接的竞争对手
- [[solana]] — 高性能 L1 竞争对手（高吞吐定位重叠）
- [[monad]] — 高性能并行 EVM L1 竞争对手

## 相关概念
- [[l1-competition]] — Aptos 作为五大挑战者之一参与新 L1 竞争格局

## 来源
- [[来源_2022-07_10个新Layer1_熊市布局_Odaily]] — 最早期的全覆盖介绍：2022年2月成立、$2亿+战略融资、激励测试网500枚代币空投、Martian/Fewcha钱包及Aptos Name Service/Liquidswap/Topaz等早期生态
- [[来源_2023-01_公链运营三大维度_差异化_PANews]]
- [[来源_2024-10_Finding_the_Next_Solana_L1竞争分析]]
- [[来源_2024-08_各链PumpFun仿盘_跨链对比_ForesightNews]] — Uptos为Aptos上Meme Launchpad，平台代币UPTOS最高$13M市值后回落至$1.2M（跌幅~90%），生态缺乏持续资金承接
- [[来源_2025-04_山寨ETF_加密ETF申请_PANews]] — Bitwise APT ETF申请详情
- [[来源_2025-03_交易生命周期_以太坊_Solana_Aptos_PANews]] — 交易生命周期视角深度对比Aptos/Ethereum/Solana，包含Block-STM乐观并行、内存池预排序、AptosBFT排序机制等技术细节，以及RWA合作数据
- [[来源_2022-07_Libra新势力_Aptos_Sui_Linera]] — 2022年中Aptos早期全景：Diem团队背景、累计超3.5亿美元融资（a16z 2亿+FTX/Jump 1.5亿）、理论TPS 16万、测试网2万节点、2亿美元生态资助计划、首批生态项目清单（Econia/hive/Martian/NjordFinance等）
- [[来源_2025-07_公链数据_以太坊_Base_Hyperliquid_PANews]] — 2025年Q2 8链横向对比：Aptos价格仅涨10%、TVL/资金流/日活均为负、日交易笔数增34%、稳定币增3亿美元、与Sui差距拉大
- [[来源_2022_新公链_Layer1_概述_多链接]] — 2022年新L1导航汇编中将Aptos列为"最强势的新生代Layer1"并排在首位，反映当时市场对其Meta/Diem背景的极高期待
