---
type: source
source_type: article
url: https://www.panewslab.com/zh/articledetails/17bokh5i.html
date: 2025-03-02
ingested: 2026-07-02
---

# BitVM背景知识：欺诈证明与ZK Fraud Proof的实现思路

## 阅读证据
- 总行数: 146
- Q1 (前25%): BitVM由Robin Linus于2023年提出，以欺诈证明为核心思想基于Taproot技术；项目从BitVM0（逻辑门电路）演进到BitVM2（ZK Fraud Proof + Groth16验证电路）；Bitlayer、Citrea、BOB、Fiamma、GoatNetwork均以BitVM为技术根基
- Q3 (中后25%): Optimism的FDG（Fault Dispute Game）包含两级GameTree嵌套结构：第一层级叶子为各区块的OutputRoot，第二层级叶子为MIPS虚拟机状态hash；争议双方通过二分法交互定位到有争议的单条MIPS操作码后，在以太坊链上MIPS虚拟机中执行该指令验证
- Q4 (最后25%): ZK Fraud Proof将交互式欺诈证明的多轮链上交互（约数十次）改为单轮ZK证明生成+链上验证，大幅节省Gas和时间成本；与ZK Rollup不同，ZK Fraud Proof不需要每次出块都生成证明，仅在被挑战时临时生成；BitVM2采用此思路，Bitlayer/Goat Network/ZKM/Fiamma等通过比特币脚本实现ZK Proof验证
- 图片: 13张架构/流程图全部为外部CDN链接（cdn-img.panewslab.com），均为关键信息载体但无法本地分析

## 核心要点
- 欺诈证明最早源自以太坊社区，被Arbitrum和Optimism采用；Optimism的方案包含OutputRoot/StateRoot机制、MIPS虚拟机链下模拟+链上单指令重放、交互式二分法定位争议点的完整技术栈
- Optimism的MIPS虚拟机采用32位架构，内存包含2^27个地址，组织为28层二叉Merkle Tree；通过stateData和proof两个参数在链上Step函数中执行单条MIPS指令完成最终验证
- FDG协议设计两级GameTree：第一级定位争议区块（按OutputRoot），第二级定位争议MIPS状态（按VM状态hash），通过二分法高效定位
- 传统交互式欺诈证明面临三大瓶颈：（1）多轮交互需数十次链上触发，Gas成本高；（2）交互启动后Rollup暂停交易处理；（3）链上实现特定VM重放指令开发难度极高
- ZK Fraud Proof是混合方案：保留Optimistic的默认信任假设（不每次出块生成证明），仅在受到挑战时由定序器生成ZK证明交给链上验证，兼具OP Rollup的低成本和ZK的短挑战周期
- BitVM2采用ZK Fraud Proof思路，通过比特币脚本实现ZK Proof验证程序，进一步精简链上计算尺寸，适用于比特币网络的环境限制

## 关键数据
- MIPS虚拟机内存含2^27个地址，组织为28层二叉Merkle Tree
- 交互式欺诈证明需要在以太坊链上触发约数十次交互
- Optimism单个区块包含多笔交易，每笔交易又涉及一连串MIPS操作码——在链上完整执行一整区块不现实
- ZK Fraud Proof将多轮交互压缩为单轮ZK证明生成+链上验证
- 与ZK Rollup的关键差异：ZK Fraud Proof仅在挑战时生成证明而非每区块生成

## 与已有知识的关系
- 补充 [[bitvm]] — 此前bitvm实体页仅记录2023年10月白皮书版本（BitVM0逻辑门电路+三位开发者评价），本文新增BitVM2（ZK Fraud Proof+Groth16）演进信息、Bitlayer/Citrea/BOB/Fiamma/GoatNetwork作为实际实现方、BitVM2通过比特币脚本实现ZK验证的程序的精简化方向
- 补充 [[optimism]] — 此前optimism页面覆盖了Bedrock升级、OP Stack、Superchain等高层架构，本文补充了底层技术细节：MIPS虚拟机32位架构/2^27个地址/28层Merkle Tree内存设计、FDG交互式欺诈证明两级GameTree结构、PreimageOracle链下数据读取方案、ZK Fraud Proof作为OP Stack证明系统的进化方向
- 补充 [[layer2]] — 本文对Optimistic Rollup欺诈证明的微观机制提供了教科书级的拆解（从OutputRoot到单条MIPS指令的逐层定位），与此前layer2页面侧重宏观竞争格局和经济模型形成互补；ZK Fraud Proof作为OP/ZK混合方案填入了"OP Rollup vs ZK Rollup"二分法的中间地带

## 值得记住的引用
> "交互式欺诈证明包含两个核心机制：1.FDG先定位到需要上链执行的MIPS操作码及此时的VM状态信息；2.在以太坊链上实现的MIPS虚拟机里执行该操作码，获得最终结果。"

> "相比于交互式欺诈证明，ZK Fraud Proof 的最大优点是将多轮交互修改为了一轮的ZK证明生成和链上验证，节省了大量时间和gas成本。而相比于ZK Rollup，基于ZK Fraud Proof的OP Rollup不需要每次出块都生成证明，只在被挑战时临时生成一个ZK证明，这也降低了Rollup节点的计算成本。"

> "BitVM2采用ZK化欺诈证明的思路。采用BitVM2的项目方如Bitlayer和Goat Network及ZKM、Fiama等，通过比特币脚本来实现ZK Proof验证程序，并对需要上链的程序尺寸进行了极大程度的精简化。"

## 我的笔记
- 本文由仙壤GodRealmX（Shew & Noah）撰写，是一篇高质量的欺诈证明技术科普——从Optimism的具体实现切入层层递进到ZK Fraud Proof，最终回归BitVM2，逻辑链条完整。文章在以太坊欺诈证明和比特币BitVM之间架起了一座关键的认知桥梁：理解了Optimism的交互式欺诈证明，就理解了BitVM的底层逻辑。
- 值得注意的是，文章将ZK Fraud Proof定位为OP Rollup和ZK Rollup之间的"第三条路"——它既保留了Optimistic的懒惰验证优势（不每次出块生成证明），又通过ZK单轮挑战替代了交互式多轮挑战。这个中间地带在实际工程中非常有价值，但文章没有讨论ZK证明生成的计算成本和时间延迟在比特币主网环境下是否可行——比特币区块10分钟、脚本能力有限，生成/验证ZK Proof的实际Gas开销可能是BitVM2落地的最大挑战。
- 文章对Bitlayer/Goat Network/Fiamma/ZKM的提及只是简单列出，没有具体的技术实现对比，这些项目如何克服比特币脚本限制实现ZK验证，是更值得深入追踪的方向。
