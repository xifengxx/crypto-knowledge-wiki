---
type: source
source_type: article
url: https://www.theblockbeats.info/news/51372
author: YBB Capital / BlockBeats
date: 2024-03-01
ingested: 2026-06-30
---

# Eclipse — 首个 SVM 以太坊 L2：模块化组合的极致

## 阅读证据
- 总行数: ~200
- Q1: Eclipse=以太坊首个SVM通用L2。模块化组合：ETH结算+SVM执行+Celestia DA+RISC Zero ZK欺诈证明+IBC跨链+Hyperlane互操作。创始人Neel Somani(Airbnb/Citadel→2022创立)。融资$15M(Polychain+Tribe+Tabiya)
- Q3: SVM+Sealevel并行执行引擎=Eclipse核心差异化——EVM单线程 vs SVM多线程并行处理。结算层=ETH(L2BEAT定义的安全性+抗审查+ETH作Gas)。DA层=Celestia(可扩展DA)
- Q4: 竞争格局：Eclipse=首个组合三大叙事(ETH安全+Solana速度+Celestia DA)的L2。Solana联创Anatoly+SBF前同事支持。"为Solana与Polygon构建兼容Rollup"愿景
- 图片: 0张/2张外部URL

## 核心要点
1. **模块化极致组合**：ETH结算层(Ethereum嵌入式验证桥+ETH Gas)+Solana SVM执行(Sealevel并行引擎)+Celestia DA(可扩展数据可用性)+RISC Zero ZK欺诈证明。将三大头部项目的最佳模块拼成一个L2
2. **SVM>EVM的执行优势**：Solana虚拟机的并行交易处理(Sealevel跨GPU/SSD水平扩展) vs EVM单线程顺序执行。这是Eclipse相对于OP/Arb等EVM L2的核心性能差异化
3. **跨链双协议**：IBC(Cosmos链间通信)+Hyperlane(无许可互操作)。不依赖单一跨链方案
4. **$15M融资+顶级背书**：Polychain领投$6M Pre-Seed+Tribe/Tabiya $9M种子轮。Solana联创Anatoly+Polygon支持

## 关键数据
- Pre-Seed：$6,000,000（Polychain领投）
- 种子轮：$9,000,000（Tribe Capital+Tabiya领投）
- 总融资：$15,000,000

## 与已有知识的关系
- [[layer2]] — Eclipse代表了L2设计的极端模块化路线：执行/DA/结算/证明四个层全部由不同项目提供。对比OP Stack(一体化)和Arbitrum Orbit(自建)
- [[l1-competition]] — Eclipse=SVM vs EVM的"特洛伊木马"——在以太坊L2上运行Solana虚拟机，让ETH生态获得Solana级性能
- [[data-availability]] — 选择Celestia而非以太坊DA=放弃ETH DA的完全安全性换取更低的DA成本

## 值得记住的引用
> "Eclipse Mainnet 为以太坊首个围绕 SVM 建设的通用 L2，结合了模块化堆栈的精华部分。"

## 我的笔记
Eclipse是模块化区块链理论的终极实验——如果每个层都可以独立选择最佳方案，为什么不让ETH做结算、Solana做执行、Celestia做DA？但这个"四合一"架构的挑战是复杂性：4个不同技术栈的集成点=4倍的潜在故障点。RISC Zero ZK欺诈证明需要在SVM指令和ZK电路之间做转换——这是极其复杂的工程。2024年3月Eclipse还在测试网阶段，回头看2026年的进展可以判断模块化极致路线是否可行。Eclipse如果成功=证明了"区块链的乐高积木"理论；如果失败=说明过度模块化的复杂性超过了收益。
