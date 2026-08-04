---
type: entity
entity_type: protocol
created: 2026-07-01
updated: 2026-07-02
tags: [bitcoin, runes, fungible-token, utxo, btc-ecosystem]
---

# Runes 协议

## 基本信息
- 类型: 比特币同质化代币协议
- 创始人: Casey Rodarmor（同时也是 [[ordinals]] 协议创始人）
- 上线时间: 2024 年 4 月（比特币区块高度 840,000，第四次减半时同步上线）
- 技术基础: 基于 UTXO，**不依赖 Ordinals 协议**（两个独立协议）
- 核心理念: 比 BRC-20 更优雅——简单、UTXO 原生、无需链下索引器

## 技术架构

### UTXO 原生代币模型
Runes 的核心创新：交易输出（UTXO）可以同时包含比特币和多种 Runes 代币。例如一个输出可包含 1 BTC + 100 个 A Runes + 1000 个 B Runes。这与 BRC-20 的链下索引器模式有根本性技术差异——Runes 的代币信息直接嵌入 UTXO，由比特币网络原生验证和追踪。

### 发行机制：蚀刻（Etch）
- 每个 Rune 名称独一无二，由大写字母 A-Z 和 "•" 符号构成
- 采用 **Commit-Reveal 两阶段提交** 机制，防止矿工提前知晓 Rune 名称进行 MEV 抢跑
- 名称长度渐进式释放：
  - 上线前 4 个月：>= 13 个字母（如 "PEPE•IS•AWESOME"）
  - 此后每 4 个月减少 1 个字母
  - 下一次减半时解锁单字符名称（共 26 个，A-Z）
- 单位符号：支持传统货币符号（如 $）和任意 Unicode 表情符号

### 转账机制：OP_Return 路由
- 默认规则：一笔交易中所有输入的 Runes 转入第一个输出（非 OP_Return）
- 定向转账：通过 OP_Return 输出（最多 80 字节）指定 Runes 分配规则
  - 例如：OP_Return 为输出 1 → 自己的地址为输出 2 → 小明的地址为输出 3
  - OP_Return 中注明 25 Runes → 输出 3 → 剩余 75 Runes 默认转入第一个非 OP_Return 输出（自己的地址）

### 钱包兼容性
- 兼容 SPV（Simple Payment Verification）轻量级钱包
- 用户无需下载完整区块链即可管理和使用 Rune 代币

### 核心数据结构（Go 实现参考）
基于社区开发者深蓝（studyzy）的 Go 语言开源实现（github.com/bxelab/runestone），Runes 协议的四大数据结构：

1. **Etching（蚀刻）**：创建新符文的声明结构，包含 6 个字段——`divisibility`（小数位数，类似 ERC20 decimal）、`premine`（预挖数量）、`rune`（名称，基数-26 编码）、`spacers`（名称间隔符）、`symbol`（货币符号，1 个 UTF8 字符）、`terms`（铸造条款）。Terms 含 4 个子字段：Amount（每次铸造数量，uint128）、Cap（铸造次数上限，uint128）、Height（绝对开始/结束区块高度）、Offset（相对发行区块的开始/结束偏移）。符文总量 = premine + Amount × Cap，数值类型为 uint128（非 ETH 的 uint256 也非 BTC 的 uint64）。

2. **RuneId（符文 ID）**：由区块高度和揭示交易在区块中的索引值编码而成，文本格式为 `BLOCK:TX`（如 "2609649:946"）。系统预定义符文 UNCOMMON•GOODS 的 ID 为 1:0，每笔交易可铸造一个。

3. **Edict（法令）**：符文转移指令，包含 `id`（符文 ID）、`amount`（数量）、`output`（输出索引）。多个 Edict 按符文 ID 排序后经 Delta 编码压缩。特殊规则：amount=0 表示分配该符文所有剩余单位；output=交易输出总数表示等量分配到每个非 OP_RETURN 输出。

4. **Runestone（符文石）**：协议消息载体，包含一个 Edict 集合 + 可选 Etching + 可选 Mint（RuneId）+ 可选 Pointer（未分配符文默认转入的输出索引）。

### 错误处理：Cenotaph 墓碑
当 Runestone 不符合协议规则时触发，导致输入的符文被永久销毁。触发条件共 5 类：
- 包含协议无法识别的偶数标签（Even Tags）
- 包含无法识别的标志（Flags）
- Edict 输出编号大于交易实际输出数量
- 符文 ID 的 block=0 但 tx_index≠0（无效 ID）
- Runestones 解码数据被截断

蚀刻操作触发 Cenotaph → 符文供应量为零且不可铸造；铸造操作触发 Cenotaph → 铸造计入 Cap 上限但符文被销毁。

### Commit-Reveal 技术细节
- **TapScript Commitment 计算**：符文名称的 Commitment 通过将名称的数值（大端字节序）反转为小端字节序后去尾零得到
- **Commit 交易**：向 P2TR 地址转账 BTC（TapScript 中已嵌入名称承诺，但不公开），需等待 **≥6 个区块**确认
- **Reveal 交易**：在 OP_RETURN 中公开蚀刻详情 + 在 TapScript 中揭示名称承诺，必须间隔 ≥6 区块
- **OP_RETURN 编码**：MAGIC_NUMBER（OP_13）+ Runestone 二进制数据（超过 520 字节时分片推送）

### 转账机制补充
符文遵循比特币 UTXO 模型——简单转账（单个符文、无复杂分配）只需花费包含该符文的 UTXO 即可，无需 OP_RETURN。仅在需要 Edict 指定的复杂多符文分配时才使用 OP_RETURN 上链。

## 发行模式

| 模式 | 说明 | 典型场景 |
|------|------|---------|
| **固定总量（预挖）** | 项目方可预设分配，包括团队预留 | VC 支持的项目币 |
| **Open Mint（公平发射）** | 无预挖，所有人公平参与铸造 | 社区驱动的 meme 币 |

### 前 10 个 Runes 的硬编码规则
Rune 0 - Rune 9 被硬编码至协议中，**只支持 Open Mint，禁止预挖**。Casey 的设计意图：
- 第一个 Rune 将成为"谢林点"（博弈论中人们在没有沟通时的选择倾向）
- 防止 VC 或项目方抢先注册第一个 Rune 并预挖
- 确保社区公平参与，体现 Runes 的草根精神

Casey 向社区征集这 10 个 Runes 的名称、单位和铸造规则，提名包括：COMMUNISTRUNE、ANARCHISTRUNE、CYPERPUNKRUNE 等。

## BRC-20 vs Runes

Casey 对 BRC-20 的评价：
- **认可 BRC-20 的成功之处**：开创了 Open Mint 模式，让所有人都有机会参与铸造
- **指出 BRC-20 的技术缺陷**：垃圾 UTXO 膨胀问题
- **Runes 的设计目标**：借鉴 BRC-20 公平参与的优势，同时解决其技术缺陷

## PIPE Protocol — Runes 概念的首个实现
在 Casey Rodarmor 的 Runes 仅存在于概念设计阶段时，开发者 [[bennythedev]] 在 Casey 提出的技术架构基础上实现了 **PIPE Protocol**。PIPE 是 TRAC 生态的重要组成部分，该生态还包括 BRC-20 代币 $TRAC、Bitmap，以及 Tap Protocol（允许 BRC-20 实现代币 Swap 等 DeFi 功能的 OrdFi 协议）。

PIPE 协议的特点：
- 采用基于 UTXO 的技术实现同质化代币
- 紧随 Casey 的 RUNE 协议思路
- 发布后吸引了来自 BRC-20 的炒作热情，快速完成首轮炒作
- 相比 BRC-20，在比特币社区接受度上面临挑战，但正统性仍强于 BRC-20

## 创始人立场
Casey 对同质化代币的真实态度：
> "同质化代币 99.9% 都是骗局。Runes 并不发行垃圾币，只是提供一个发行垃圾币的场所。"

他坦率承认加密货币行业充满赌博和投机，认为从业者应以诚相待——"IT'S JUST FOR FUN!"

## 相关实体
- [[ordinals]] — 同一创始人，比特币 NFT 元协议；Runes 虽独立于 Ordinals，但共享创始人愿景和 BTC 生态定位
- [[bitcoin]] — 底层区块链
- [[atomicals]] — 另一种比特币数字资产协议（ARC-20），与 Runes 存在竞争关系
- [[unisat]] — BTC 生态钱包和市场，支持 BRC-20 和 Runes
- [[btns]] — 广播型 BTC 元协议（第六类方案），与 Runes 的 UTXO 原生路线形成技术对比
- [[rune-alpha]] — Runes 协议的先行预演项目（2023 年 12 月上线），独立于 Casey 但共享 Runes 品牌，首创部署方收费模式（$2/mint）；与纯正 Runes 存在技术兼容性风险
- [[cook-runes-token]] — Rune Alpha 上的龙头符文代币，上线初期市值 ~$79.2M

## 相关概念
- [[bitcoin-ecosystem]] — Runes 是 BTC 生态同质化代币赛道中设计最优雅的协议之一
- [[tokenomics]] — 固定总量 vs Open Mint 两种发行模式的博弈，前 10 个 Runes 的硬编码规则是"公平发射"的制度化设计

## 来源
- [[来源_2024-02_Runes协议细节_Casey_Hellmoneypod]] — Casey 在 hellmoneypod 首次详述 Runes 技术细节：UTXO 模型、蚀刻机制、OP_Return 转账、前 10 个 Runes 硬编码 Open Mint
- [[来源_2024-02_比特币Runes协议上线前_Alpha机会]] — Runes 上线前市场情绪和 Alpha 机会前瞻
- [[来源_2024-04_Runes协议_技术实现_深蓝]] — 开发者深蓝基于 Go 语言自实现 Runestone 库后撰写的技术详解：四大数据结构（Etching/Edict/Runestone/Cenotaph）、基数-26 名称编码、TapScript Commitment 计算、Commit-Reveal 6 区块硬性间隔、Delta 编码、Cenotaph 5 类触发条件、UNCOMMON•GOODS 系统符文
- [[来源_2024-02_BTC衍生协议_正统性_炒作分析]] — Rune 设计可能受 ARC20 影响（直接在 UTXO 脚本中写入 Token 数据）；与 ARC20 的区别：Rune 在脚本中写入了 Token 数量（精度更高但牺牲了 UTXO 组合性）；$PIPE 是 Trac 创始人基于 Rune 理念编写的首个可用协议；Casey 的高知名度带来了炒作热度
- [[来源_2024-01_Runes协议_RuneAlpha_COOK_BlockBeats]] — Ordinals 一周年之际（2024 年 1 月）介绍 Rune Alpha 先行项目：部署方收费模式（$2/mint）、COOK 龙头代币市值 ~$79.2M、PSBT 技术在符文交易中的应用、矿工激励对齐分析
- [[来源_2023-11_铭文赛道全扫描_MT资本_BlockBeats]] — MT Capital 2023年11月扫描：Casey 的 Runes 六项设计特点、BennyTheDev 基于 Casey 架构实现的 PIPE Protocol、PIPE 作为 RUNE 概念首个可用实现
- [[来源_2025-06_叙事评分_加密货币_NarrativeScore]] — Ignas 对 Runes 进行叙事评分（69 分），认为其虽然技术创新（创新 9/10）但缺乏流动性（流动性 3/10）且上线时机不佳（市场条件 0.5），并指出 Casey 本应同时为 Runes 搭建 AMM 池
