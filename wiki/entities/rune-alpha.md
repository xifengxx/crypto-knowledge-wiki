---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [bitcoin, runes, btc-ecosystem, fungible-token]
---

# Rune Alpha

## 基本信息
- 类型: 比特币 Runes 协议先行项目 / 区块浏览器 + 一体化应用
- 主网上线: 2023 年 12 月 5 日
- 首个代币: $COOK
- 关系声明: 官方明确表示与 Casey Rodarmor 的纯正 Runes 协议无关，但后续可能已达成某种共识
- 网站: https://runealpha.xyz/

## 核心业务/产品
Rune Alpha 是一个基于 Runes 协议理念的比特币同质化代币平台，提供：
- **代币部署（Deploy）**：项目方可在平台上部署符文代币
- **代币铸造（Mint）**：用户参与铸造已部署的符文代币
- **市场（Market）**：基于 PSBT（部分签名比特币交易）的代币交易市场（文章发布时尚未上线）
- **区块浏览器**：Runes 协议上的交易查询和数据分析

## 商业模式：部署方收费
Rune Alpha 与 BRC-20 铭文最大的区别在于**部署方收入模式**：
- 每 mint 一张代币，参与者需额外支付 **2 美元**给部署方
- BRC-20 铭文则是完全免费参与
- 这种模式为优质项目方提供了直接的经济激励来符文生态建设
- 部署方可获得交易手续费分成（市场功能上线后）

### 典型案例：PSBTS
PSBTS 仅靠部署费即收入 **60 万美元以上**（按 30 万张 × $2/mint 计算，实际总量超过 30 万张），验证了部署方收费模式的商业可行性。

## PSBT 技术应用
部分签名比特币交易（PSBT）是 Rune Alpha 市场的核心技术：
- **多方交易**：混合匹配买方和卖方签名，将结果广播到比特币网络，安全且节省费用
- **离线签名**：PSBT 携带元数据帮助设备检查地址和金额

## 关键数据
- 上线时间: 2023 年 12 月 5 日
- COOK 龙头代币市值（上线初期）: ~7920 万美元
- PSBTS 部署收入: ≥$600,000

## 与 Casey Runes 的区别
| 维度 | Rune Alpha | Casey Runes |
|------|-----------|-------------|
| 创建者 | Rune Alpha 团队 | Casey Rodarmor |
| 上线时间 | 2023 年 12 月 | 2024 年 4 月（区块高度 840,000） |
| 关系 | 独立项目，非官方 | Ordinals 创始人，协议原版 |
| 代币发行模式 | 部署方收费（$2/mint） | Open Mint / 预挖两种模式 |
| 技术规范 | 自行实现 | 官方协议标准 |

## 风险 / 争议
- Rune Alpha 与 Casey 纯正 Runes 可能不兼容——如果 Casey 正式版 Runes 与 Rune Alpha 的技术实现存在差异，Rune Alpha 上的资产可能面临迁移或废弃风险
- 部署方收费模式可能引发"付费 mint"的公平性质疑
- 项目初期市场功能未上线，流动性不足

## 相关实体
- [[runes]] — Casey Rodarmor 的纯正 Runes 协议，Rune Alpha 是其先行预演项目
- [[ordinals]] — 同一生态背景，BRC-20 的底层协议
- [[cook-runes-token]] — Rune Alpha 上的龙头代币

## 来源
- [[来源_2024-01_Runes协议_RuneAlpha_COOK_BlockBeats]] — Odaily/BlockBeats 对 Runes 协议和 Rune Alpha 的介绍（2024 年 1 月），含 COOK 早期市场数据
- [[来源_2024-02_比特币Runes协议上线前_Alpha机会]] — 提及 Rune Alpha 和 COOK 作为 Runes 生态预演项目
