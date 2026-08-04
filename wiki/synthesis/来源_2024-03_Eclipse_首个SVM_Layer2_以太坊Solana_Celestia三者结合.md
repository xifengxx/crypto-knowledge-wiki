---
type: source
source_type: article
url: https://www.theblockbeats.info/news/51372
author: Ac-Core, YBB Capital Research
date: 2024-03
ingested: 2026-06-29
tags: [eclipse, svm, layer2, ethereum, solana, celestia, modular]
---

# Eclipse：首个SVM Layer2 — ETH安全+SOL性能+Celestia DA

## 阅读证据
- 总行数: 149
- Q1 (前25%): Eclipse=以太坊首个SVM通用L2。创始人Neel Somani(Airbnb+Citadel背景)。融资$15M(Polychain领投$6M Pre-Seed+Tribe Capital+Tabiya $9M种子轮)。Solana联创Anatoly+Polygon天使投资。架构=ETH结算层+SVM执行层+Celestia DA+RISC Zero ZK欺诈证明+IBC+Hyperlane跨链
- Q3 (中后25%): Celestia DA选择逻辑：ETH DA受限(即使EIP-4844仅0.375MB Blobs/rollup共享~213TPS vs Celestia 2MB→8MB/9000-30000 ERC-20 TPS)。DAC信任假设问题。Blobstream=权益证明共识网络→Layer2访问Celestia Blobspace
- Q4 (最后25%): 欺诈证明流程：SVM执行器定期发布epoch承诺+抵押→基础检查→质疑窗口→验证者提交欺诈证明→成功则执行者担保被罚没+批次拒绝+状态回滚。模块化=套娃+乐高新旋律(LSD+Restaking后的下一波模块化组合创新)
- 图片: 0张已分析 / 7张装饰跳过 / 0张外部URL无法获取

## 核心要点
1. **Eclipse = 三重叙事叠加**：以太坊结算层(安全性+ETH Gas)+Solana SVM执行层(Sealevel并行/140TPS+单线程EVM)+Celestia DA(2→8MB Blobspace/9000-30000 TPS)
2. **结算层=ETH安全性**：嵌入式验证桥→用户不依赖L2验证者诚信→可强制交易+抗审查。符合L2BEAT Layer2定义
3. **执行层=SVM优势**：Sealevel超并行事务处理引擎→跨GPU/SSD水平扩展。vs EVM单线程。Neon EVM合作→兼容以太坊工具+MetaMask Snaps
4. **DA=Celestia选择逻辑**：ETH EIP-4844仅0.375MB Blobs→所有Rollup共享~213TPS。Celestia 2MB起步→8MB目标=9000-30000 ERC-20 TPS。DAS轻节点安全+加密经济安全
5. **模块化的"套娃+乐高"延续**：DeFi Summer=DeFi套娃→LSD+Restaking=质押套娃→模块化=模块套娃(解耦各层独立优化)

## 关键数据
- 融资：$15M(Polychain $6M Pre-Seed+Tribe+Tabiya $9M Seed)
- SVM吞吐：~140TPS(vs EVM单线程)
- EIP-4844 DA：0.375MB Blobs→~213TPS(所有Rollup共享)
- Celestia DA：2MB→8MB→9000-30000 ERC-20 TPS
- 欺诈证明：RISC Zero ZK+BPF字节码执行
- 主网计划：2024 Q1(测试网已上线)

## 与已有知识的关系
- 大幅补充 [[eclipse-l2]] — Eclipse架构详解/ETH+SOL+Celestia三重结合/SVM执行层/欺诈证明流程
- 关联 [[celestia]] — Celestia DA作为以太坊DA替代方案
- 关联 [[solana]] — SVM执行环境/Sealevel并行引擎

## 值得记住的引用
> "模块化的魅力之处在于组件的解耦效益，从而实现堆栈中的每一层创新，让每个模块的优化都可以放大其它模块的优化。"
> "Eclipse是以太坊上的第一个SVM Layer2。"

## 我的笔记
YBB Capital 2024年3月对Eclipse的技术分析揭示了模块化区块链的终极形态——从不同链借用最优组件。Eclipse的架构选择(ETH结算+SOL执行+Celestia DA)代表了"不重新造轮子"的设计哲学。核心看点：SVM作为以太坊L2执行层→连接了最大开发生态(EVM)和最高性能虚拟机(SVM)。到2026年，Eclipse主网已上线，但SVM L2的叙事热度不及预期，"模块化套娃"的下一波尚未全面爆发。
