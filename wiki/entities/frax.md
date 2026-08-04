---
type: entity
entity_type: protocol
created: 2026-06-29
updated: 2026-07-02
tags: [defi, stablecoins, lsd, lending, layer2]
---

# Frax Finance

## 基本信息
- 定位：集成稳定币、交易、借贷、LSD、RWA、L2的多产品线DeFi协议
- 生态资产：FRAX（美元稳定币）、FPI（CPI-U通胀挂钩稳定币）、frxETH（以太坊LSD）、sFRAX、FXB
- 代币：$FXS / $veFXS（治理+费用分成）
- L2：Fraxtal（2024年2月推出，模块化区块链）

## 核心业务/产品
- **稳定币**：FRAX（市值6.4亿，稳定币排名第8，约为DAI的1/8）、FPI（TVL 0.97亿）
- **frxUSD**（2025年转型）：FRAX 升级为 frxUSD，采用"神圣托管人"模式——由贝莱德 BUIDL、Superstate USTB、Janus-Henderson JTRSY 等机构托管资产（可验证的国债和现金）支撑，每锁定一美元铸一枚代币。用户可将 frxUSD 存入 sfrxUSD 金库获取收益，收益来自短期国债、DeFi 套利和 AMO 市场做市。通过 FXB 拍卖实现原生链上收益率曲线，不受外部信用风险影响
- **Fraxswap**：现货交易，每笔收取0.3%手续费，预估年化费用180万美元
- **Frax Ether（frxETH）**：以太坊LSD，年化收入143万美元
- **Fraxtal**：模块化区块链，frxETH作为Gas代币，FRAX（原名FXS）为定序器质押代币，通过 veFRAX 锁定控制生态系统治理

## 关键数据（2024年8月）
- FXS代币半年跌幅超70%
- PE Q2跌去83%，随后PE反弹至约50
- FRAX+FPI合计在稳定币市场仅占0.4%
- 一季度曾凭frxETH在Curve War中取得优势
- Fraxtal日交易量仅1300万美元（与Fantom/Avalanche无差别——未体现"自家链"优势）
- veFXS APR在4月-5月因费用开关恢复飙升至近16%→急剧跌至不足2%
- 收入渠道：国债收益+AMO+ETH LSD+Gas费

### sfrxUSD 生息版本（前身为 sFRAX）
- sfrxUSD（质押的 frxUSD）通过 Frax Bonds（FXBs）和 Frax Lending AMO 产生收益
- 当前收益率: 8.80%
- Exponential 风险评级: D
- 收益来源: frxUSD 质押在 FXBs（固定回报）+ 部署到 Fraxlend/Aave/Compound 等借贷市场赚取利息
- 资金管理: 协议优化稳定币储备和收益策略，确保可持续回报
- rfrxUSD 为弹性供应资产，价值相对于 frxUSD 随时间增值
- 风险控制: 协议采用预言机价格操纵防御和负反馈循环保护，积极管理收益优化器并进行公开市场操作以调节 frxUSD 供应量

来源: [[来源_2025-03_七大生息稳定币_风险回报_深潮TechFlow]]

## 风险 / 争议
- Fraxtal做L2消耗精力和市场关注度，但未能激活frxETH和veFXS价值
- 各业务线均无突破性进展，高PE（50）不被实际收入支持
- 在竞争激烈的DeFi市场，多线作战可能导致战线过长

## 相关实体
- [[makerdao]] — 稳定币赛道对比（FRAX市值仅DAI的1/8）
- [[lido]] — LSD赛道竞争
- [[curve]] — 曾通过frxETH深度参与Curve War

## 来源
- [[来源_2024-08_DeFi_PE市盈率_估值分析_BlockBeats]]
- [[来源_2025-03_七大生息稳定币_风险回报_深潮TechFlow]] — sfrxUSD 生息版本详析
- [[来源_2025-06_全链稳定币_USDT0_CCTP_PANews]] — frxUSD "神圣托管人"模式、贝莱德 BUIDL/Superstate USTB/Janus-Henderson JTRSY 支撑细节、Frax 作为"炼金术士"的生态定位
- [[来源_2025-09_DeFi稳定币_支点_USDH_HyperLiquid]] — Frax 从算法稳定币危机转型到完全抵押（贝莱德 BUIDL 支撑）的完整叙事，以及 USDH 竞标提案细节（社区优先/100% 国债收益分配给 Hyperliquid 用户）
- [[来源_2022-10_代币模型_治理代币_veToken_Bankless]] — 2022年熊市数据：FXS下跌-84%，在投票托管代币中表现最差；糟糕表现很大程度上归因于Terra崩盘后算法稳定币的整体下跌以及4pool（UST/FRAX/USDC/USDT Curve池）启动失败；Frax仅发放约7%代币供应作为LP激励，通胀率远低于Curve和Balancer
