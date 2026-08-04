---
type: entity
entity_type: project
created: 2026-06-30
updated: 2026-06-30
tags: [btc-l2, bitcoin, scaling, payments]
---

# Tectum

## 基本信息
- **类型**: BTC 二层扩展 / 独立分布式账本协议
- **赛道**: 比特币扩容、加密货币支付
- **成立时间**: 不详（2023 年 12 月被深潮 TechFlow 报道时已有产品）
- **官网**: https://tectum.io/
- **代币**: TET（Tectum Token），总供应量 1000 万枚（15% 私募 / 20% 质押节点 / 10% 流动性 / 10% 营销）

## 核心业务/产品
Tectum 是一整套分布式账本协议，生态系统包括五大组件：
1. **Tectum Blockchain** — 采用专有 HashDrive 算法（宣称 100 万+ TPS），分层结构将原始数据存储在较低层级
2. **Tectum Wallet** — 使用比特币节点生成钱包
3. **Tectum Token (TET)** — 原生代币，用于铸造 SoftNote、减免商户手续费、访问其他产品
4. **Tectum SoftNote** — 核心产品：独立于 BTC 主网的票据转账系统，用户间转账通过电子邮件完成，不上链、零费用、即时到账、完全隐私
5. **3FA 身份认证应用**

### SoftNote 运作流程
1. 创建钱包（基于比特币节点）
2. Minter 花费 TET 铸造 SoftNote 账单，每张账单分配唯一序列号
3. LP 将 BTC/Crypto 填充到 SoftNote 账单钱包中
4. LP 以不同面值出售 SoftNote 票据给最终用户
5. 最终用户使用账单进行购买/交易，收款人支付最高 1% 费用

## 竞争优势 / 护城河
- 零费用即时交易，通过电子邮件即可完成转账
- 完全隐私：交易不在比特币区块链上记录
- HashDrive 算法宣称百万 TPS 的理论性能

## 风险 / 争议
- **本质上不是真正的 BTC L2**：不继承比特币主网安全性，独立共识机制的去中心化程度未经验证
- HashDrive 算法技术细节未公开，百万 TPS 宣称为未经验证的营销话术
- SoftNote 依赖 LP 提供流动性，存在中心化风险
- TET 代币分配中仅 20% 用于质押和节点，其余大部分为团队/私募/营销，代币集中度存疑
- 2023 年底报道后至 2026 年未见主流市场关注，项目实际进展不明

## 相关实体
- [[bevm]] — 同时期被报道的另一 BTC L2 项目，路径相反（通过 EVM 兼容引入 ETH 生态）
- [[bitcoin]] — 比特币主网
- [[stacks]] — 老牌 BTC 侧链项目

## 来源
- [[来源_2023-12_铭文狂热_BTC_L2_Tectum_BEVM]]
