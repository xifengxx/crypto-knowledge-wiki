---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [ethereum, inscriptions, layer2, nft]
aliases: [ETHS, Ethscriptions, Facet, 以太坊铭文]
---

# Ethscriptions / ETHS

## 基本信息
- 类型: 以太坊铭文协议 + 类 L2 计算平台
- 赛道: Ethereum Inscriptions / Layer 2 替代方案
- 时间: 2023 年下半年（趁 BTC Ordinals 热潮推出）
- 核心组件: Ethscriptions（铭文协议）、Facet VM（链下计算平台）、Rubidity（呆笨合约编程语言）
- 原理: 利用以太坊交易 calldata 字段写入铭文信息，由链下 Indexer 监听解析并维护状态数据库，将智能合约运算剥离至链下以降低 Gas 费

## 核心业务/产品

### Ethscriptions（铭文层）
- 向 EOA 黑洞地址 `0x00000000000000000000000000000000000face7` 发送带有 calldata 的交易来刻写铭文
- 链下 Indexer 监听 calldata → 解析 → 更新数据库 → 通知用户
- 定义了 6 个 ESIP（Ethscriptions Improvement Proposal）标准
- 支持 NFT 和代币的铸造与转账（类似 Ordinals/BRC-20）

### Facet VM（计算层）
- 由 ESIP-4 提案催生，最初名为 Ethscriptions VM，后改名为 Facet VM
- 使用 Ruby 编写的链下虚拟机，监听 ETHS 交易 calldata 并在链下执行运算
- 核心概念"呆笨合约"（Dumb Contract）：代码以 calldata 形式发布到以太坊，不在 L1 上执行
- 编程语言 Rubidity：模仿 Ruby 语法但保留 Solidity 概念（目前仅支持官方白名单合约）

### FacetSwap
- Facet 上的 AMM DEX，由 Ethscriptions 创始人 Middlemarch 创建，2023年11月30日上线
- Gas 费约为以太坊主网正常交易的十分之一（~2U vs Uniswap ~10U），上线当天燃烧 ETH 超 Uniswap 居全网第一
- 使用前需将 ETH 通过跨链桥转换为 FETH。上线初期有五天锁定期——存入后五天内无法提取（创始人称"为了资金安全"）
- 截止上线初期共 35 个流动性池，覆盖 35 类不同铭文资产
- 四种创世代币：FacE7（首个字母铭文，21M 总量，约半小时铸造完毕）、18684900（首个部署在区块 18684900，19万总量，创始人亲自参与唯一一次铸币）、PAMP（空投给 10K ETHS ENS 域名持有者，10亿总量）、ETHX（第三个部署，21M 总量，市值最小）
- ETHS 价格在 FacetSwap 上线后突破 8,000 美元

### iERC20 协议
iERC20 是另一种基于以太坊的铭文代币协议，提供低成本代币生态系统，允许任何人部署、铸造和交易代币。$Ethi 作为 iERC20 生态的首个代币，较 $ETHS 早期低调但后来受到关注。

iERC20 的特色：
- 开发了 Swap 功能和 EVM 跨链功能，构建以太坊铭文和传统 Layer2 之间的桥梁
- 引入 PoW 公平挖矿模式（类似 Atomicals 的挖掘方法）
- 与 Binance 孵化的 GameFi 项目 Sparkle 合作，引入 Inscription NFT
- $Ethi 可拆分技术使其对散户投资者吸引力更大
- 持有 $Ethi 的用户可能获得合作项目的铭文空投

## 关键技术局限

### 资产归属判定
ETH/ETHS 资产**不是真正的 L1 资产**。判断标准：资产状态能否在以太坊"世界状态"中还原、EVM 能否引用/调用/查询/修改该资产——铭文资产不满足此条件。

### 与 Rollup 的系统性差距
| 维度 | Rollup | Ethscriptions/Facet |
|------|--------|---------------------|
| 批量 calldata 提交 | 排序器批量压缩提交，摊薄基础 gas | 用户各自直接提交 L1，人均 21608 gas |
| 链下预确认 | 1 秒内 | L1 12 秒+ |
| 状态结算 | ZKR/OPR 证明 + L1 合约裁决 | **无状态结算** |
| 提现安全 | 无需许可、Merkle Proof 去信任 | 单一管理员 signer 签名（可被全面盗取） |
| 盈利模式 | 排序器 MEV + gas 差价 | Indexer 无明确盈利模式 |
| 开发者工具 | 直接复用 EVM 工具链 | 需学习 Rubidity + 自建工具 |

### 桥安全
Facet 桥合约 `0xD729345aA12c5Af2121D96f87B673987f354496B` 依赖单一 signer 签名放行提现。无经济安全机制、无多签、无质押威慑。类似此前被盗的 Axie 跨链桥的见证人模式。

## 相关事件时间线
- 2023 年: BTC Ordinals/BRC-20 热潮 → 多条链出现铭文仿盘
- 2023-11-30: FacetSwap 正式上线，当天 gas 消耗超越 Uniswap 居全网第一
- 2023-12 初: ETHS 价格突破 8,000 美元，FacetSwap 上 35 个流动性池运行，四种创世代币（FacE7/18684900/PAMP/ETHX）完成铸造
- 2023-12: 深潮TechFlow 发表技术批判文章，指出 ETHS 本质是金融炒作、Facet 存在严重安全隐患
- 2024 年起: Ethscriptions/Facet 生态逐渐沉寂，未形成有意义的 TVL 或用户留存

## 我的判断
ETHS 是 2023 年 BTC 铭文狂热潮中涌现的以太坊仿盘，其技术方案存在根本性缺陷——尤其是 Facet 桥的单 signer 安全模型对于一个承载资产跨域的系统而言不可接受。它在宣传中攻击的 Rollup 方案，恰好是它如果想补全功能就必须演化成的形态。2026 年回看，ETHS 生态已几乎无存在感，验证了该协议缺乏长期价值支撑的判断。这是一个典型的"叙事驱动、概念炒作、技术空心"的案例，可作为识别类似项目的参考模板。

## 相关实体
- [[ordinals]] — BTC 铭文协议，ETHS 的灵感来源和模仿对象
- [[rgb-protocol]] — BTC 客户端验证智能合约方案，同为铭文范式的替代路径
- [[ferc20]] — 同期以太坊铭文实验，技术路线不同：FERC20 走标准 ERC20 智能合约路线，ETHS 走 calldata + 链下 Indexer 路线

## 来源
- [[来源_2023-12_以太坊铭文_ETHS_Ethscriptions_Facet_深潮TechFlow]]
- [[来源_2023-12_FacetSwap_铭文交易平台_教程_BlockBeats]]
- [[来源_2023-06_FERC20_公平ERC20_jackygu]]
- [[来源_2023-11_铭文赛道全扫描_MT资本_BlockBeats]] — MT Capital 2023年11月扫描：iERC20协议详情、$Ethi as iERC20龙头代币、iERC20的EVM跨链功能与PoW挖矿计划、与Sparkle GameFi合作
