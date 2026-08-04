---
type: entity
entity_type: protocol
created: 2026-07-01
updated: 2026-07-01
tags: [ethereum, inscriptions, tokenomics, fair-launch]
aliases: [FERC20, Fair ERC-20, 公平ERC20, ferc20]
---

# FERC20 (Fair ERC-20)

## 基本信息
- 类型: 以太坊公平代币发行协议
- 创始人: jackygu (jackygu.eth)
- 上线时间: 2023年6月1日
- 平台: erc20.cash
- 核心合约: InscriptionFactory.sol + Inscription.sol（未经审计）
- 开源地址: https://gist.github.com/jackygu2006/39dbc920703bcc46c8aa0fb2a071f720

## 核心业务/产品
FERC20 是将比特币 BRC20 "公平发售"精神移植到以太坊 EVM 链的实验性方案。在标准 ERC20 合约基础上添加三组可选防女巫/防机器人属性：

### 三组防不公平机制
1. **冷冻期（Freeze Period）**: 首次铸币后进入冷冻期，期间额外铸币需支付小费，每次翻倍（0.00025 ETH → 0.0005 ETH → 0.001 ETH → ...）
2. **持仓条件（Holding Requirement）**: 部署人可要求铸币者持有特定 NFT 或其他 ERC20 代币，防止女巫账号大规模快速铸币
3. **预售/众筹（Presale/Crowdfunding）**: 部署人可设置铸币价格，平台收取1%手续费

### 8种子类型
三组属性的布尔组合产生 2³ = 8 种代币子类型，从"完全无约束"到"三重约束"覆盖不同公平性需求。

### 与 BRC20 对比的核心优势
- 兼容标准以太坊钱包（MetaMask 等，无需下载新软件）
- 可参与 DeFi 生态（DEX、借贷、多签等）
- 无 owner 权限（真正无主代币，不可升级/不可篡改）
- Tick 字符数可升级（BRC20 固定 4 字符）
- 无预挖（总量从零铸造至硬顶）
- 全链上架构（无服务器，搜索/查找均在智能合约中完成）

## 费用模型
| 操作 | 费用 |
|------|------|
| 部署 FERC20 | 免费（仅 Gas） |
| 铸造无冷冻期 FERC20 | 免费（仅 Gas） |
| 铸造有冷冻期 FERC20 | 首次免费，之后每次翻倍 |
| 铸造众筹 FERC20 | 1% 平台手续费 |

## 风险/争议
- 合约未经审计（InscriptionFactory.sol + Inscription.sol），用户需自行评估风险
- 单开发者模式，无团队/社区治理
- 2023年铭文热潮退去后生态存续不确定
- "可选公平"的矛盾：部署者可选择对自己最有利的属性组合，公平性取决于部署者的自律而非协议强制

## 相关实体
- [[ordinals]] — BTC 铭文协议，FERC20 的灵感来源
- [[ethscriptions]] — 同期以太坊铭文实验，技术路线不同（calldata + 链下 Indexer vs 标准 ERC20 合约）

## 来源
- [[来源_2023-06_FERC20_公平ERC20_jackygu]]
