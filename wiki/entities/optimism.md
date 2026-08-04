---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [layer2, ethereum, optimistic-rollup, superchain, scaling]
aliases: [OP Mainnet, OP Labs, OP Stack, Superchain]
---

# Optimism

## 基本信息
- **类型**: Ethereum Layer 2（Optimistic Rollup）+ L2 基础设施（OP Stack）
- **开发团队**: OP Labs
- **主网上线**: OP Mainnet 于 2021 年 12 月上线
- **Token**: OP（治理代币）
- **定位**: 从单一 L2 升级为"超级链"（Superchain）网络的基础设施提供者

## 核心产品架构

### OP Mainnet
- 与 EVM 兼容的 Optimistic Rollup
- 截至 2023 年 6 月，TVL 超过 22 亿美元，L2 市场份额 23% 以上（第二大 L2）
- 2023 年 Bedrock 升级后，平均交易费用降低超过 77%，成为最便宜的以太坊 L2

### OP Stack
开源、模块化、标准化的 L2 开发栈，被描述为"搭建 L2 的超市"。六大核心组件：
- **数据可用层**: 定义原始输入发布位置，大部分使用以太坊 DA 层
- **排序层**: 确定交易收集和发布方式，当前为单一排序器，未来拟引入多排序器
- **派生层**: 处理 DA 层原始数据形成执行层输入
- **执行层**: 稍加修改的 EVM 版本
- **结算层**: 处理跨链资产提取和状态证明
- **治理层**: 管理系统升级和配置的通用工具集

OP Stack 核心原则：可扩展性（开源、模块化）、简单性（复用经过实战验证的代码）、可理解性（以太坊开发者可轻松上手）、客户多样性。

### Superchain 愿景
Bedrock 升级之后，Optimism 将自身升级为 Superchain——一个去中心化的 L2 链网络（OP Chains），共享安全性、通信层和开源技术栈。这些链被标准化为可互换资源，开发者可以针对 Superchain 整体构建应用而非单一链。

Superchain 三大好处：
- 加固和安全的代码基础（链越多，共享审计越多）
- 原子级跨链可组合性（无缝跨 OP 链交易，无需桥接）
- 通用的以太坊基础设施

## 生态成员
- **Base** (Coinbase): Superchain 第二个成员，2023 年 8 月上线主网
- **Worldcoin**: 承诺在 OP Stack 上构建（后上线 World Chain）
- **opBNB** (BNB Chain): 基于 OP Stack 的 EVM 兼容 L2 测试网
- **Zora Network**: 去中心化 NFT 市场推出的 L2，铸币成本低于 $0.50
- **Aevo**: 去中心化期权交易所，与 Conduit 合作基于 OP Stack 推出 rollup
- **Conduit**: 帮助开发者一键启动 OP Stack rollup 的 RaaS 提供商

## 欺诈证明技术架构

Optimism的欺诈证明系统是OP Stack证明系统的核心，也是理解BitVM等技术方案的认知基础。

### OutputRoot与StateRoot机制
- Optimism定序器处理交易后，将DA数据发送到以太坊；任意节点可下载数据在本地重新执行计算
- 定序器定期将OutputRoot（由StateRoot+其他字段计算得出）上传到以太坊
- StateRoot反映以太坊World State Trie的最终hash（包含所有账户余额、合约代码hash等）
- 若本地计算的结果与定序器上传的OutputRoot不一致，可发起欺诈证明挑战

### MIPS虚拟机与内存Merkle Tree
- 由于以太坊Gas Limit限制，无法在链上完整执行OP节点客户端
- OP团队用Solidity编写了MIPS虚拟机（32位架构），仅实现欺诈证明所需的部分功能
- OP节点Golang代码可编译为MIPS程序由链上MIPS虚拟机处理
- MIPS虚拟机内存包含**2^27个地址**，组织为**28层二叉Merkle Tree**，底层叶子记录每个内存地址中的数据，根hash为memRoot
- 通过PreimageOracle合约允许链上合约读取链下数据，解决智能合约无法自动获取欺诈证明输入参数的问题

### 交互式欺诈证明（FDG）
OP开发了Fault Dispute Game（FDG）协议，包含挑战者和防御者两个角色：
1. **两级GameTree结构**：
   - 第一级：叶子节点为不同区块的OutputRoot，用于定位争议区块
   - 第二级：叶子节点为MIPS虚拟机状态hash，用于定位产生争议的具体MIPS操作码
2. **二分法定位**：双方通过链上交互，从OutputRoot层级逐级缩小范围，最终定位到单个有争议的MIPS操作码
3. **链上验证**：通过`Step`函数在链上MIPS虚拟机中执行该单条MIPS指令，`_stateData`和`_proof`参数提供所需的VM环境（寄存器状态、内存hash等）
4. **裁决**：链上权威结果与定序器提交结果不一致时，判定定序器作恶

### ZK Fraud Proof（ZK化欺诈证明）
为解决交互式欺诈证明的三大瓶颈（多轮交互Gas成本高、交互期间Rollup暂停交易处理、链上实现特定VM开发难度极高），Optimism提出了ZK Fraud Proof概念：

- **单轮挑战**：挑战者指定有争议的交易，定序器生成ZK证明（如通过Bonsai工具）
- **链上验证**：以太坊智能合约验证ZK证明，通过则判定定序器无过错
- **混合优势**：保留OP Rollup的懒惰验证（不每次出块生成证明），同时避免多轮交互

### 技术局限与演进方向
- 传统交互式欺诈证明需约数十次链上交互，Gas成本显著
- ZK Fraud Proof将交互压缩为单轮，但ZK证明生成的计算成本和时间延迟是不可忽略的现实约束
- OP Stack已将证明系统模块化，支持故障证明和ZK有效性证明两种方案并行的路线

## Bedrock 升级关键改进
- 优化数据压缩策略，费用降低 >77%
- 改进证明模块化：从 OP Stack 抽象出证明系统，可使用故障证明或 ZK 有效性证明
- 改进节点性能：支持单块内执行多笔交易，状态增长减少约 15GB/年
- 用户体验增强

## 竞争优势
- 开源技术栈形成网络效应（Base、opBNB 等加入证明生态引力）
- Superchain 标准化使跨 OP 链的原子交易成为可能
- RaaS（Rollup-as-a-Service）模式降低部署门槛

## 风险 / 争议
- **排序器中心化**: 当前单一排序器设置，去中心化仍在规划中
- **开源策略的风险**: 其他使用 OP Stack 的 rollup 可能分散 Optimism 自身的流动性和用户
- **与 Optimistic Rollup 的通用风险**: 7 天挑战期延迟

## 相关实体
- [[arbitrum]] — 最大竞争对手，Orbit 走 L3 路线 vs Superchain 走 L2 标准化网络路线
- [[base]] — Superchain 最重要的生态成员，已成功验证 OP Stack 的可扩展性
- [[bnbchain]] — opBNB 基于 OP Stack
- [[celestia]] — 替代 DA 层，与 OP Stack 的以太坊 DA 默认形成对比

## 来源
- [[来源_2023-02_Rollup_ZKRollup_Optimistic_Arbitrum区别_Future小哥哥]] — 2023年初科普：指出 Optimism 项目名与 Optimistic Rollup 方法名易混淆的认知陷阱，OP 采用单轮欺诈证明，更倾向于选择可信认证者（vs ZK 人人可参与 PoW 认证）
- [[来源_2023-08_L2进化趋势_Superchain_L3_Hyperchain_币安研究院]] — 币安研究院 L2 进化报告：OP Stack/Superchain/Bedrock 升级详解
- [[来源_2024-10_Base创始人Jesse答社区100问]]
- [[来源_2025-08_a16z_银行_资管_Fintech_区块链转型_深潮TechFlow]] — OP Stack作为Fintech构建专属支付L2的模块化开源框架：PayPal可在OP Stack上构建"支付超级链"优化PYUSD，Base作为Op Stack L2的典型成功案例，单一排序器设计在开放性与控制之间找到平衡
- [[来源_2022-07_以太坊_L2_Rollup扩容方案_综述]] — 2022 年中 Optimism 早期快照：TVL $2.56B（占 L2 总额 12.65%）、34 万唯一地址数、估值 $1.65B、排序器收入 $24.5M（99% 为 L1 发布成本）
- [[来源_2025-03_BitVM_欺诈证明_ZK_Fraud_Proof_PANews]] — Optimism欺诈证明系统技术详解：OutputRoot/StateRoot机制、MIPS虚拟机32位架构和内存Merkle Tree设计（2^27地址/28层树）、FDG交互式欺诈证明两级GameTree结构、ZK Fraud Proof作为OP证明系统的进化方向
