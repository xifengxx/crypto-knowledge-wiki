---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [bitcoin, brc20, dex, btcfi, amm]
---

# DotSwap

## 基本信息
- 类型: BRC20 原生 AMM DEX
- 代币: $DSWP
- 创始人: 林哲明（十多年比特币投资经验、七年矿池管理经验，曾开发 DotWallet 钱包和 Ordinals 市场 TierTop）
- 状态: BRC20 首个正式上线的原生 swap（2023年12月已落地）

## 核心技术
- 基于 PSBT（部分签名比特币交易，BIP 174）+ 安全的资产池实现 BRC20 原生 AMM swap
- DotSwap V2 在 V1 基础上进行了产品升级

## 代币经济学
- 总供应: 1,200,000,000 枚 $DSWP（其中 22.76% 销毁）
- 流通量: 27,379,620 枚（占总供应仅 2.292%）
- 解锁: 除 burn 和初始流通外，剩余代币 4 年线性解锁
- LP rewards 占比最大，通过未来 LP 挖矿计划释放
- 采用类似 Curve 的 veToken 模型：用户锁定 DSWP 获得 veDSWP 投票权，veDSWP 持有者投票决定 LP 奖励分配

## 2024 年路线图
- 集成更多 UTXO 资产
- 拓展单边流动性、定制化流动性费用、无常损失阈值
- 高级交易功能（限价单等）
- 上线 Launchpad、跨链、预言机、闪电贷、NFT 质押和做空

## 竞争优势 / 护城河
- 先发优势：BRC20 第一个正式上线的原生 AMM swap
- 创始人团队有丰富的比特币开发经验（DotWallet + TierTop）
- veToken 经济模型借鉴 Curve 成熟模式

## 风险
- 流通量仅 2.3%，剩余代币解锁将产生巨大抛压
- BRC20 叙事退潮后用户和流动性可能快速流失
- 窗口期短暂，竞争者（Ordiswap 等）即将上线

## 相关实体
- [[ordinals]] — 底层协议
- [[brc20]] — BRC20 代币标准，DSWP 的交易标的
- [[bitcoin]] — 底层网络

## 来源
- [[来源_2023-12_LD_Capital_BRC20基建盘点_BlockBeats]] — LD Capital 基建盘点：首个 BRC20 原生 AMM swap，veToken 经济学，1.2B 总供应（2.3% 流通），创始人林哲明背景
