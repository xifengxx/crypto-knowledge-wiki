---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [bitcoin, fungible-token, ordinals, btc-ecosystem]
---

# BRC-20

## 基本信息
- 类型: 比特币同质化代币协议标准
- 技术基础: 基于 [[ordinals]] 协议的铭文（inscription）机制
- 提出时间: 2023年3月（由匿名开发者 @domodata 提出）
- 核心理念: 模仿以太坊 ERC-20，将代币的全部功能写入 BTC 输出脚本中

## 核心机制

### 代币数据写入
BRC-20 将代币的部署（deploy）、铸造（mint）和转移（transfer）操作以 JSON 格式写入比特币交易的输出脚本中，借助 Ordinals 铭文机制将数据存储在隔离见证（SegWit）的扩展空间（每个区块最多 4MB）中。

### $ORDI — 首个 BRC-20 代币
$ORDI 是 Domo 部署的第一个 BRC-20 代币。部署者可自行决定代币总量和名称，遵循先到先得原则。

### 链下索引器依赖
输出脚本**只存储数据，无法实际运行**Token 的转移和铸造等功能。因此必须依赖第三方分类器（indexer）将账本记录在 BTC 链上，并将新的状态数据刻录到脚本中。

### 两步转账与垃圾交易问题
BRC-20 的转账不在 BTC 主链上直接执行，必须分为两个 BTC 交易步骤：
1. 先在分类器中收集（登记转账意图）
2. 然后执行转移（在链上完成最终状态更新）

这种设计增加了复杂性，并产生了大量无用的链上交易（垃圾 UTXO）。由于转账需要先归集再转账两步，产生了大量粉尘交易，这也是 Bitcoin 核心社区反对 BRC-20 的主要原因之一。

### 向 L2 发展的方向
Domo 在 Ordinals Summit 上提出 Inscription-Based Virtual Machines 和 Rollup 概念，预示 BRC-20 可能走向二层网络发展。部分开发者开始开发去中心化排序器（如 #Trac），但仍受限于整体框架难以取得根本性突破。

## 争议与缺陷

### 正统性争议
- 第三方分类器是系统的薄弱点，中心化风险高（曾导致交易所余额计算错误）
- 转账不直接在 BTC 主链执行，违背了"比特币原生"理念
- 自诞生以来未获 BTC 核心社区广泛接受，但凭借代币的广泛适用性和流动性受到投机者追捧
- 垃圾 UTXO 膨胀问题被 Ordinals 创始人 Casey Rodarmor 持续批评
- Casey 团队甚至要求币安从 ORDI 代币介绍中删除与 Ordinals 的关联，以划清界限

### 先发优势
尽管存在诸多争议，BRC-20 是最原创、最先上交易所的铭文代币协议。随着币安上线 ORDI，代表所有交易所开始承认并支持铭文赛道创新。预计后续优先上所的仍然是 BRC-20 代币（因为支持 BRC-20 充提和自建索引的技术难度不小）。

### 改进方向
- **去中心化分类器**：开发者开始构建如 #Trac 等去中心化索引方案
- 但整体框架限制使其难以根本突破

## 正统性评估
- 去中心化程度：低（严重依赖链下索引器）
- 比特币社区认可度：低（投机导向，未获核心社区接受）
- 市场热度：高（2023年 ORDI、SATS 等龙头代币产生万倍涨幅）
- 长期潜力：受限于框架，已"失去显著的创新性和可玩性"

## 相关实体
- [[ordinals]] — 底层铭文协议，BRC-20 基于其构建
- [[runes]] — Casey Rodarmor 开发的 UTXO 原生代币协议，旨在解决 BRC-20 的技术缺陷
- [[atomicals]] — 另一个基于 UTXO 的代币协议（ARC-20），无需链下索引器
- [[trac]] — 去中心化 BRC-20 索引器开发团队

## BRC-20 基础设施（2023年末格局）

| 赛道 | 代表项目 | 核心技术 |
|------|---------|---------|
| **DEX** | [[dotswap]]、[[ordiswap]]、RDEX | PSBT（BIP 174）+ 比特币脚本 + Nostr |
| **借贷** | Bitlend、DOVA | PSBT + Ordinals 协议 |
| **稳定币** | [[bitstable]] (BSSB/DAII) | BTC 抵押 + ETH 跨链清算 |
| **Launchpad** | [[bounce-finance]]、[[turtsat]] | 拍卖/社区众筹 |
| **跨链** | [[multibit]]、ROUP、Ordinfinity、TeleportDAO | Lock-Mint / MAP Protocol |

## 来源
- [[来源_2024-02_BTC衍生协议_正统性_炒作分析]] — BRC20 正统性分析：两类交易步骤、第三方分类器薄弱点、垃圾UTXO问题、Trac去中心化分类器方向
- [[来源_2023-06_Taproot_Assets_比特币本地代币_公众号]] — 将BRC-20明确定义为"客户端验证"方案：比特币主链充当"硬盘"存储数据，矿工不管数据死活，代币计算依赖链下索引客户端。与Taproot Assets的"本地代币"（矿工间接验证）形成完整的技术二分框架
- [[来源_2023-12_LD_Capital_BRC20基建盘点_BlockBeats]] — LD Capital 2023年末 BRC20 基建五大赛道盘点：DEX/借贷/稳定币/Launchpad/跨链 13 个项目，PSBT 技术核心，BTC L1 清算瓶颈
- [[来源_2023-04_Ordinals生态_项目介绍_知乎]] — 2023年4月BRC-20诞生仅约1个月的早期格局记录：ordi第一（场外翻几十倍）、meme第二（100万铭文中占1/10，持币地址最高）、pepe/punk/gold前十币种+domo/rssc/wzrd等趣味币种已出现，OG社区"积极的建设性质疑"
- [[来源_2023-11_铭文赛道全扫描_MT资本_BlockBeats]] — MT Capital 2023年11月扫描：$ORDI 为 Domo 部署的首个 BRC20 代币、两步转账垃圾交易问题、Domo 在 Ordinals Summit 提出的 Inscription-based Virtual Machines 和 Rollup 概念、Casey 要求币安删除 Ordinals 关联
- [[来源_2023-05_推特KOL_BRC赚钱_BlockBeats]] — 2023年5月BRC-20早期市场数据快照：总市值$10.2亿、14,690种代币、仅4种成交量超百万美元、活跃玩家仅约万人、Jack Levin 5币发行与NALS命名现象
