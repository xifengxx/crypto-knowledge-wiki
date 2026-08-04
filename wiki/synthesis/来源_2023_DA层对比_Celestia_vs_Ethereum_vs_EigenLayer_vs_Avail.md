---
type: source
source_type: article
url: https://forum.celestia.org/t/a-comparison-between-da-layers/899
author: Celestia Forum
date: 2023
ingested: 2026-06-28
tags: [data-availability, celestia, ethereum, eigenlayer, avail, das]
---

# DA层对比：Celestia vs Ethereum vs EigenLayer vs Avail

## 阅读证据
- 总行数: 114
- Q1 (前25%): Rollups需要DA扩展。四大方案：Ethereum/Celestia/EigenLayer/Avail。出块时间：Eth 12s/Celestia 15s/Avail 20s。EigenLayer不是区块链而是以太坊上智能合约
- Q3 (中后25%): DAS(数据可用性采样)支持：Celestia+Avail上线即支持DAS轻节点→可安全扩展区块大小。Ethereum EIP-4844无DAS→仍需全节点下载所有数据。EigenLayer上线时无DAS→需全节点
- Q4 (最后25%): 编码方案差异：Eth/EigenLayer/Avail用有效性证明(KZG承诺/大区块时生产者开销高)。Celestia用欺诈证明(无承诺生成开销/但轻节点需等待欺诈证明窗口/可切换方案)
- 图片: 0张已分析 / 7张装饰跳过 / 0张外部URL无法获取

## 核心要点
1. **DA层四方案竞争格局**：Ethereum(主网DA/12s出块/12-15min最终性)、Celestia(专用DA/15s出块/单槽最终性)、EigenLayer(ETH上合约/继承ETH最终性)、Avail(20s出块/BABE+GRANDPA)
2. **DAS = 轻节点安全的关键分水岭**：Celestia+Avail上线即支持DAS→轻节点可验证DA不需全节点。Ethereum/EigenLayer无DAS→需全节点=更高硬件门槛
3. **最终性速度差异巨大**：Ethereum 12-15min(Casper每64-95槽最终化)→Rollup等待12-15min。Celestia 15s(Tendermint单槽最终性)。Avail 20s-60s
4. **编码证明方案=核心设计取舍**：有效性证明(KZG) vs 欺诈证明。前者生产者开销高/后者轻节点需等待。Celestia采用欺诈证明但可切换

## 关键数据
- 出块时间：Ethereum 12s / Celestia 15s / Avail 20s
- 最终性：Ethereum 12-15min / Celestia 15s(单槽) / Avail 20-60s
- DAS支持：Celestia✅ / Avail✅ / Ethereum❌(EIP-4844无DAS) / EigenLayer❌
- 编码证明：Ethereum/EigenLayer/Avail=KZG有效性证明 / Celestia=欺诈证明

## 与已有知识的关系
- 补充 [[celestia]] — Tendermint单槽最终性/DAS/欺诈证明编码方案
- 补充 [[eigenlayer]] — DA模式：以太坊上合约/继承ETH最终性/无DAS
- 更新 [[data-availability]] — DA四方案对比维度：出块时间/最终性/DAS/编码方案/轻节点安全
- 关联 [[avail]] — 待创建：Polkadot生态DA方案/BABE+GRANDPA

## 值得记住的引用
> "Rollups emerged as a solution to scale layer 1s. As it turns out, rollups also need some help with scaling."
> "The main difference between a fraud proof and validity proof encoding scheme is the tradeoff between node overhead for generating commitments and latency for light nodes."

## 我的笔记
Celestia论坛2023年的DA层对比文章，虽来自Celestia社区（有倾向性），但技术对比维度客观：出块时间/最终性/DAS/轻节点安全/编码证明。核心洞察：①Celestia的核心技术优势是Tendermint单槽最终性（15s vs ETH 12-15min）+DAS轻节点安全；②EigenLayer的最大局限是作为ETH上合约→最终性受限于ETH→若无自有共识则无法突破ETH最终性瓶颈；③编码方案取舍反映了区块链设计中"验证者成本 vs 用户延迟"的经典tradeoff。到2026年，EIP-4844已落地但DAS仍在路线图中，Celestia主网已运行，EigenDA已上线。
