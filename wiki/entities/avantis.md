---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, perp-dex, base, derivatives]
aliases: [Avantis, AVNT]
---

# Avantis

## 基本信息
- 类型: 去中心化衍生品协议
- 赛道: Perpetual DEX / 永续合约
- 公链: Base
- 主网上线: 2024年2月
- 开发团队: Lumena Labs
- 代币: AVNT

## 核心业务/产品
Avantis 是一款基于 Base 链的去中心化衍生品协议，专注于永续合约 (Perpetuals) 交易，支持以下资产类别的合成衍生品交易：
- 加密货币
- 外汇 (FX)
- 大宗商品 (黄金、原油等)
- 美股指数

最大杠杆可达 500 倍。

### 创新机制
- **零费用永续合约 (Zero-Fee Perps)**: 降低高频交易成本
- **损失返还机制 (Loss Rebates)**: 为亏损交易者提供部分返还
- **风险分层 Vault 模型**: Junior Vault 承担 65% 亏损 + 获取 65% 手续费收益，Senior Vault 承担 35% 亏损 + 获取 35% 手续费收益
- LP 亏损保护：通过对冲大众持仓，承诺 LP 收益长期为正

## 关键数据
- 累计交易量: 220 亿美元 (截至 2025 年 9 月)
- 年化交易量: 超 600 亿美元
- 交易者: 4.1 万名
- LP 数量: 2.5 万+
- 未平仓合约 (OI): 2500 万美元
- 累计手续费: 740 万美元+
- TVL: 1675 万美元 (Junior 1060 万 / Senior 614 万)
- 24 小时交易额: 1.69 亿美元
- Vault APY: ~20% (180 天锁定)

## 代币经济学
- 总供应量: 10 亿枚 AVNT
- 社区分配: 50.1% (首次空投 12.5%，链上激励 28.6%，建设者资助 9%)
- 团队/顾问: 13.3% (12 个月锁仓 + 30 个月线性释放)
- 投资者: 26.61% (相同长期释放安排)
- 基金会: 4% 战略资金
- 流动性储备: 6%

## 融资历史
- 2023年9月: 种子轮 400 万美元，由 Pantera Capital 领投，Founders Fund、Galaxy Digital、Base Ecosystem Fund 等跟投
- 2025年6月: A 轮 800 万美元，由 Pantera Capital 与 Founders Fund 联合领投，Symbolic Capital、SALT Fund 等参与
- 总融资: 1200 万美元

## 竞争优势 / 护城河
- 创新的零费用永续合约模式，与传统 Perp DEX (如 GMX、dYdX) 形成差异化竞争
- 风险分层模型解决了 LP 激励机制问题，吸引多种风险偏好的资金提供者
- Base 生态头部衍生品协议，享受 Base 链增长红利
- 计划推出专属 EVM 兼容链 (Avantis v2)，实现快速无 Gas 交易

## 风险 / 争议
- Base 链出块速度限制导致开仓平仓延迟和下单价失败问题
- 零费用合约设有盈利上限 (计划随 LP 规模扩大逐步取消)
- 限价止盈止损功能尚未支持比例设置
- 移动端适配不完善
- 500 倍杠杆在极端行情下可能面临系统性风险
- 需面对 GMX、dYdX、Hyperliquid 等竞品竞争

## 相关事件时间线
- 2023-09: 完成 400 万美元种子轮融资
- 2024-02: 主网上线
- 2025-06: 完成 800 万美元 A 轮融资
- 2025-09-10: AVNT 上线币安 Alpha、Coinbase、Bitget、Bybit
- 2025-09-15: AVNT 上线 Upbit、Bithumb、币安主站，24 小时内价格接近翻倍
- 未来: 计划推出 Avantis v2 (10 倍资本效率、专属 EVM 链、RWA 市场)

## 团队
- 开发运营方: Lumena Labs
- CEO: Harsehaj Singh (前 Pantera Capital，UC Berkeley Haas 商学院)
- CTO: Brank D (全栈开发，处理数十万用户、数十亿美元 AUM 的技术经验)
- 其他团队成员来自麦肯锡、Lazard、Barclays 等机构

## 做市商
- [[flowdesk]] — A 轮融资参与方，重要的流动性合作伙伴

## 合作伙伴
- Bankr (AI 代理交易)
- Keyrock (机构做市商)
- [[pyth]] (预言机提供商)
- Nitrate (Telegram 交易机器人)

## 相关实体
- [[base]] — 部署公链
- [[pantera-capital]] — 连续两轮领投方
- [[flowdesk]] — 做市商
- [[pyth]] — 预言机合作方

## 来源
- [[来源_2025-09_CryptoNews合集_Avantis_Base衍生品]]
