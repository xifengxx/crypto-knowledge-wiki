---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-06-30
tags: [bitcoin, meta-protocol, token-protocol, broadcast]
aliases: [BTNS, BTNS-420, Broadcast Token Naming System]
---

# BTNS / BTNS-420

## 基本信息
- 类型: 比特币元协议 / 资产发行协议
- 赛道: Bitcoin meta-protocol / token standard
- 创始人: @jdogresorg（BTC早期持有者和开发成员之一，曾参与Stamp邮票协议开发后退出独立创建BTNS）
- 时间: 约2024年5月前后创建（据2024年12月文章"7个月前"推算）
- 协议文档: https://github.com/jdogresorg (GitHub开源)
- 核心组件: BTNS（广播命名系统，类Ordinals层）/ BTNS-420（代币协议标准，类BRC-20层）

## 核心机制

BTNS通过"广播消息"(Broadcast Message)在BTC主链上实现资产发行。每笔BTC交易可附带一段广播数据，数据随交易上链进入区块记录。链下索引器读取区块中的广播数据，解析后进行资产锁定和状态管理。

**关键特征：广播数据不占用BTC区块存储空间**——这是与Ordinals铭文（将数据写入见证区/Witness）和Runes符文（依赖UTXO OP_RETURN）的本质区别。广播数据仅作为交易附带的信号传输，不对比特币账本进行任何更改。

## 与主流BTC协议的对比

| 维度 | BTNS/BTNS-420 | Ordinals/BRC-20 | Runes | Stamp/SRC-20 |
|------|--------------|-----------------|-------|-------------|
| 数据存储 | 不上链存储（仅广播信号） | 写入见证区(Witness) | UTXO OP_RETURN | 广播+UTXO编码 |
| 占用BTC空间 | 不占用 | 占用 | 占用（较BRC-20少）| 较少占用 |
| 索引方式 | 链下索引器读广播 | 链下索引器读铭文 | 链上UTXO集 | 链下索引器 |
| GAS加速 | 天然支持（重新广播即可拉高有效费率） | 需RBF或CPFP | 需RBF或CPFP | 类似BTNS |
| 转账体验 | 单步操作，直接输入数量 | 两步操作（先铭刻转账铭文，再转账） | 单步操作 | 单步操作 |
| 创始人背景 | jdogresorg（比特币早期开发者，前Stamp贡献者） | Casey Rodarmor | Casey Rodarmor | 匿名社区 |

## 基础设施
- **主网浏览器**：https://btns.xchain.io/
- **测试网浏览器**：https://btns-testnet.xchain.io/
- **核心索引器**：开源（GitHub jdogresorg/Broadcast-Token-Naming-System）
- **API**：主网API + 测试网API（REST接口）
- **钱包**：freewallet（https://freewallet.io/），由jdogresorg本人维护运营
- **铸造/转账/部署指令**：参考协议文档 https://github.com/jdogresorg/Broadcast-Token-Naming-System/blob/master/docs/BTNS.md

## 操作指令示例

| 操作 | 指令格式 | 示例 |
|------|---------|------|
| Mint铸造 | `bt:MINT\|币名\|数量` | `bt:MINT\|SAT\|1000` |
| Send转账 | `bt:SEND\|0\|币名\|数量\|地址` | `bt:SEND\|0\|SAT\|12000\|bc1q...` |

## 关键代币

### SAT（龙头/无主代币）
- 部署时间: 2024年7月（部署顺序排第三，前两张分别因测试/数量太少不具备交易价值）
- 总量: 21,000 张（每张1,000枚，总供应21,000,000枚）
- 持有人: 2,283 地址
- 筹码分布: 极度分散，头部最大持仓仅100多张（<0.5%）
- 场外价格: ~220 U/张（2024年12月），对应总市值约460万美元
- 铸造完成: 2024年12月11日

### USD（创始人部署）
- 总量: 500 张，被极少数人持有，不利于代币炒作

## 技术路线关联
- 创始人 @jdogresorg 曾参与Stamp邮票协议开发，后退出独立创建BTNS。BTNS在技术理念上继承了Stamp的广播模式，但构建了更完整的代币系统（mint/send/deploy/airdrop）
- BTNS的"零存储占用"定位与BTC原教旨主义者对铭文"占用珍贵区块空间"的批评直接对话——这是一个精心选择的差异化叙事

## 风险 / 争议
- 团队规模极小——核心基础设施（钱包+索引器+浏览器）均由jdogresorg一人维护，存在单点风险
- 生态深度远不及Ordinals/Runes等主流BTC元协议（无第三方钱包支持、无交易所上线代币、无DeFi集成）
- 链下索引器模式天然存在中心化索引风险（与BRC-20曾面临的交易所余额出错问题同源）
- 叙事推广依赖中文KOL圈子（本文作者 @CG_BRC20 为主要传播者之一），英文社区关注度不明
- 代币目前仅场外交易，无二级市场流动性

## 相关实体
- [[bitcoin]] — BTNS运行在比特币主链上
- [[ethscriptions]] — 另一条链的"非存储型元协议"路线（以太坊上的ETHS），与BTNS形成技术路线对照
- [[rgb-protocol]] — 同为BTC"零占用"方案的客户端验证路线，与BTNS的广播索引路线形成竞争

## 来源
- [[来源_2024-12_BTNS协议_BTNS420_代币铸造_CG]]
