---
type: source
source_type: article
url: https://www.panewslab.com/zh/articledetails/0911rm2k68xx.html
date: 2025-03-16
ingested: 2026-07-02
---

# 在一笔交易的生命周期里理解以太坊、Solana和Aptos的主要差异

## 阅读证据
- 总行数: 190
- Q1 (前25%): Aptos使用Block-STM技术实现乐观并行执行，假设交易无冲突并同时处理，若发现冲突则重新执行，TPS可达160,000
- Q3 (中后25%): Solana不使用公共内存池，交易直接发送给当前及下两位提议者，区块时间仅400毫秒；采用Sealevel确定性并行执行，需提前声明读写集合以避免冲突
- Q4 (最后25%): 2024年7月Aptos将Ondo Finance的USDY引入生态，截止3月10日USDY在Aptos上市值约1500万美元，约占USDY总市值的2.5%
- 图片: 5 key架构图/对比表 + 2 decorative（作者信息图），均为外部CDN链接，本地不可用

## 核心要点
- 交易生命周期（创建与发起→广播→排序→执行→状态更新）是理解公链设计差异的最佳锚点，本文以Aptos为中心对比以太坊和Solana
- Aptos采用乐观并行执行（Block-STM）+ 内存池预排序，既降低了节点性能需求，又实现160,000 TPS高吞吐量，且保留内存池确保高负载稳定性
- 以太坊采用EVM串行执行，区块时间12秒/插槽，TPS低，是公链技术原点但性能受限
- Solana采用确定性并行执行（Sealevel）+ PoH共识，区块时间400毫秒，无内存池设计使交易可即时成交但网络过载时可能丢弃交易
- Aptos与Solana的并行执行分化核心在于"何时确认交易依赖项冲突"：Solana执行前声明读写集合，Aptos执行后验证冲突（乐观并行）
- Aptos的安全优势（内存池预排序、Block-STM、AptosBFT、Move语言）使其在RWA和PayFi方向具有叙事优势，与Ondo Finance（USDY）、Franklin Templeton（BENJI）、Libre等合作已落地

## 关键数据
- Aptos TPS可达160,000，超过Solana一倍以上
- Solana区块时间400毫秒，以太坊12秒/插槽
- Aptos上USDY市值约1500万美元，约占USDY总市值2.5%
- 2024年10月富兰克林邓普顿在Aptos上推出BENJI代币代表的FOBXX基金

## 与已有知识的关系
- 补充 [[aptos]] — 本文提供了Aptos交易生命周期各环节的详细技术解析（Block-STM乐观并行、内存池预排序、AptosBFT排序机制、Move语言资源模型防双重支付），补充了现有entity页中缺失的技术细节
- 补充 [[solana]] — 本文从交易生命周期角度对比了Solana的无内存池设计、PoH出块机制和Sealevel确定性并行执行，补充了Solana技术决策的权衡分析
- 补充 [[l1-competition]] — 本文在并行执行路径上对比了Aptos（乐观并行）和Solana（确定性并行）两种技术方向，丰富了L1竞争格局的技术维度分析
- 补充 [[rwa]] — 本文阐述了Aptos在RWA领域的叙事基础：Block-STM并行处理资产转移、内存池预排序确保资产记录可靠性、Move语言模块化安全设计，以及具体的合作案例（USDY、BENJI、Libre）
- 补充 [[payfi]] — 本文以Aptos视角补充了PayFi叙事的另一条路径：Aptos的"安全、高效、合规"三位一体定位，区别于Solana主推的PayFi叙事
- 补充 [[ondo-finance]] — 本文提供了USDY在Aptos上的市值数据（1500万美元）
- 补充 [[franklin-templeton]] — 本文补充了FOBXX在Aptos上线的具体时间（2024年10月）和BENJI代币信息

## 值得记住的引用
> "乐观并行并非单纯假设交易无冲突，而是在某一阶段提前规避了风险，这个阶段就是交易广播阶段。在Aptos上，交易进入公共内存池后，会根据一定规则（如FIFO和Gas费用高低）进行预排序，确保一个区块内的交易在并行执行时不会冲突。"

> "Aptos的乐观并行无需声明读写集合，节点门槛更低，TPS却更高。"

## 我的笔记
- 本文作者Kevin为Movemaker研究员，文章带有明显的Aptos推广倾向，将Aptos定位为"平衡之道"而以太坊"稳健低效"、Solana"高性能高门槛"，在技术论述中穿插了大量Aptos叙事展望。读者需要意识到这是生态研究员的立场性文章，而非中立的技术对比。
- 最有价值的部分是交易生命周期的五步分析框架和并行执行两种路径的技术对比，这些内容本身不偏颇。Aptos的乐观并行 vs Solana的确定性并行是L1架构设计中最根本的分歧之一，本文用账户余额的简单例子清楚地说明了这一点。
