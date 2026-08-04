---
type: source
source_type: article
url: https://foresightnews.pro/article/detail/8491
date: 2022-07
ingested: 2026-07-02
---

# 一览模块化执行层 Fuel：采用 UTXO 模型支持并行交易执行

## 阅读证据
- 总行数: 89
- Q1 (前25%): Fuel 是最早部署在以太坊主网上的 Optimistic Rollup（2020 年底上线 V1），但 V1 锁仓额仅不到 10 美元，总共只有 21 笔交易
- Q3 (中后25%): Fuel V2 引入类似比特币的 Predicate 脚本功能，可在保持 UTXO 数据模型性能优势的同时启用智能合约应用，且通过可延展交易设计解决用户竞用问题
- Q4 (最后25%): Fuel Labs 推出 DEX「SwaySwap」，在 Fuel devnet 上运行，兑换、转移和 LP 资产均为原生资产而非代币，无需事先批准即可与合约交互，Gas 极低且执行仅需 3-4 秒
- 图片: 0 analyzed / 0 decorative skipped / 5 external URLs unavailable

## 核心要点
- Fuel 是最早部署在以太坊主网上的 Optimistic Rollup（2020 年底），V1 主打支付场景，但采用率极低；团队随后将全部重心转向 V2，将其重新定位为模块化执行层
- Fuel 的技术堆栈三大核心支柱：基于 UTXO 模型的并行交易执行（通过严格状态访问列表实现）、FuelVM（减少传统 VM 浪费处理）、以及 Sway 语言和 Forc 工具链（受 Rust 启发，结合 Solidity 优势和 Rust 生态范式）
- Fuel Labs 联合创始人 John Adler 同时也是 Celestia 的联合创始人，Fuel 在模块化区块链堆栈中定位为"可验证计算系统"，与 Celestia 的 DA 层互补
- Fuel V2 支持基于 UTXO 的图灵完备智能合约、类似比特币的 Predicate 脚本、以太坊可互操作智能合约，以及通过 HTLC 原子兑换实现的快速提款（几分钟内完成，而非两周长延迟）
- Fuel Labs 获得以太坊基金会资助、Gitcoin 社区捐赠（超 275 位贡献者），以及 2021 年 9 月由 CoinFund 领投的 150 万美元融资
- SwaySwap 演示应用验证了 Fuel 的低 Gas 和快速执行优势，其中原生资产设计免去了传统 DeFi 中的代币批准步骤

## 关键数据
- Fuel V1 锁仓额不到 10 美元，仅有 21 笔总交易（L2BEAT 数据）
- Fuel Labs 在 2021 年 9 月完成 150 万美元融资，CoinFund 领投，Fenbushi Capital、Origin Capital 等参投
- 超 275 位 Gitcoin 贡献者对 Fuel Labs 进行了捐赠
- SwaySwap 提供流动性仅需 3-4 秒，兑换时间更少

## 与已有知识的关系
- 更新 [[fuel]] — 补充 Fuel 早期历史细节：2020 年底上线 V1 的全部数据（<$10 TVL、21 笔交易）、V1 支付场景细节（HTLC 原子兑换、OP_RETURN、多代币 Gas）、团队背景（John Adler 同时是 Celestia 联合创始人）、融资细节（以太坊基金会 + Gitcoin 捐赠 + CoinFund 领投 150 万）、V2 Predicate 脚本设计、SwaySwap 原生资产设计优势
- 更新 [[celestia]] — 补充 John Adler 作为 Celestia 与 Fuel Labs 双联合创始人的关键信息，阐明模块化区块链堆栈中 DA（Celestia）与执行层（Fuel）的协同关系
- 补充 [[layer2]] — Fuel 作为模块化执行层的差异化定位，与 Arbitrum/Optimism 等全栈 L2 对比
- 补充 [[modular-blockchain]] — 以 Fuel 为案例展示"可验证计算系统"作为模块化区块链堆栈中执行层的具体技术方案

## 值得记住的引用
> "Fuel 是最早部署在以太坊主网上的首个 Optimistic Rollup，主要适用以支付为中心的应用。即将推出的 Fuel V2 将基于 UTXO 的高度可并行化的最小执行系统和启用智能合约支持。"

> "过去其他基于 UTXO 的智能合约系统在尝试同时与同一个合约交互时会遇到用户竞用（contention）的情况，不过，Fuel 得益于可延展交易设计因此没有竞用问题。"

> "在 SwaySwap 中，兑换、转移以及用来创建为 LP 的这些资产都是原生资产，而非代币，这意味着用户与智能合约交互之前不需要再先批准资产。"

## 我的笔记
这篇文章写于 2022 年 7 月，正值模块化区块链叙事开始升温的早期阶段。有趣的是，Fuel V1 上线一年多后仅有 21 笔交易和不到 10 美元 TVL，这个数据说明非 EVM 兼容的执行层在以太坊生态中面临巨大的冷启动困难——即便在技术上有并行执行的优势，缺乏智能合约支持和开发者生态也是致命短板。Fuel 团队在 V1 失败后迅速转向 V2 模块化执行层的定位，这个 pivot 本身反映了 2022 年模块化叙事开始获得市场认可的时间窗口。SwaySwap 演示应用的性能确实亮眼，但自研语言 Sway 也意味着开发者迁移成本极高。
