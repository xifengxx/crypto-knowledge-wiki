---
type: source
source_type: article
url: https://www.theblockbeats.info/news/51941
author: BlockBeats
date: 2024-03-15
ingested: 2026-06-30
---

# EigenLayer 主网上线 + DVT 技术解读

## 阅读证据
- 总行数: ~75
- Q1 (前25%): EigenLayer宣布多阶段主网上线。a16z投资$100M，Blockchain Capital领投$50M A轮。上线前暂停存取款，先在Holesky测试网调试
- Q3 (中后25%): DVT（去中心化验证技术）= 验证器在多个节点同时运行，主动-主动冗余→容错。主要项目：Obol Network + SSV Network。EigenLayer与SSV合作互补再质押
- Q4 (最后25%): SSV价格$45.19，月涨幅43.8%，3月13日突破$50 ATH。SSV Network资助多个项目应用DVT。结论：更多AVS加入+DVT技术→再质押赛道增长空间大
- 图片: 0张已分析 / 3张外部URL未获取

## 核心要点
1. **EigenLayer分阶段主网上线**：先Holesky测试网调试→暂停存取款→运营商注册→EigenDA推出→新仪表板上线→恢复存取款。分阶段策略出于安全和性能考量
2. **EigenDA = 第一个AVS**：目标写入吞吐量10 MB/s，采用纠删码+KZG承诺+ACeD，DA与共识解耦，性能远超以太坊DA方案
3. **AVS生态定义**：主动验证服务(AVS)=用再质押ETH增强安全性的dApp。可以是新区块链、DA层、虚拟机、预言机网络、跨链桥等任何项目
4. **DVT = 验证器高可用基础设施**：去中心化验证技术允许验证器在多个节点同时运行，主动-主动冗余替代主动-被动，减少停机→减少罚没。SSV与EigenLayer合作互补

## 关键数据
- a16z 投资：$100,000,000
- Blockchain Capital A轮：$50,000,000 (2023.03)
- EigenDA 目标写入吞吐量：10 MB/s
- SSV 价格：$45.19（撰稿时），月涨幅+43.8%，ATH $50+ (2024.03.13)

## 与已有知识的关系
- [[eigenlayer]] — 主网上线是关键里程碑，EigenDA作为首个AVS标志再质押从概念→落地。DVT提供验证器容错层
- [[data-availability]] — EigenDA加入DA赛道竞争，与Celestia/Avail形成三足鼎立。10 MB/s是重要性能指标
- [[liquid-staking]] — EigenLayer主网上线后LRT项目（ether.fi/Puffer/Kelp等）的再质押需求从预期变为实际

## 值得记住的引用
> "AVS 即主动验证服务，将再质押的 ETH 用于增强其实用性的 dApp 被称为 AVS。"
> "DVT 允许以太坊权益证明验证器同时在多个节点上运行，可以为 Staking 基础设施落地可信网络。"

## 我的笔记
这篇文章的时间节点是2024年3月——EigenLayer主网刚要上线、生态最狂热的时候。回头看，EigenDA 10 MB/s的目标吞吐量在当时是亮点，但现在2025-2026年DA赛道已经验证了Celestia的主导地位，EigenDA的实际采用率需要重新评估。DVT技术本身很重要但对于散户投资者来说，SSV的代币价值捕获取决于多少验证器实际采用DVT——这是一个基础设施层的b2b销售问题，不是消费者应用。值得关注的是"AVS可以是任何项目"这个表述，说明EigenLayer的野心远比"再质押收益"大得多——它想成为整个Crypto的安全即服务平台。
