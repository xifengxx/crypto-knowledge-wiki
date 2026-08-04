---
type: source
source_type: article
url: https://medium.com/@GoPlus/goplus-solana防钓鱼指南-b7efa445f7f0
author: GoPlus Security
date: 2024 (估算)
ingested: 2026-06-29
tags: [solana, security, phishing, wallet, scam-prevention]
---

## 阅读证据
- 总行数: 98
- Q1 (前25%): Solana市值飙升→大量Wallet Drainer从EVM转入Solana。GoPlus分析多笔Solana钓鱼事件→五种攻击类型：(1)诱导转移SOL(SystemProgram.transfer);(2)同一交易多资产转移(多个instruction一次性洗劫);(3)诱导代币账户所有权转移(createSetAuthorityInstruction)
- Q3 (中后25%): (4)骗取代币授权(createApproveCheckedInstruction/Delegate)="不直接转移资产/赋予攻击者控制权限→等用户够多/金额够大再转移"。比直接转账更隐蔽/影响面最广。(5)Durable Nonce骗取交易签名="用户签名但交易未发上链→攻击者之后随时广播"
- Q4 (最后25%): 最危险的组合攻击=Durable Nonce+合约升级逃避交易模拟检测。用户签名看似正常→攻击者升级合约为恶意版本→广播交易→"即使经验丰富用户也可能无法识别"。防范措施8条。GoPlus呼吁"Solana生态深度关切用户安全/加快提升安全基础设施建设"
- 图片: 约10张(交易模拟截图/Phantom+Backpack钱包界面)

# GoPlus：Solana 防钓鱼指南

## 核心要点
1. **Solana财富效应 → Wallet Drainer涌入**：Solana市值一度超越BNB全球前三→大量EVM钓鱼团伙迁移至Solana→针对Solana的空投诈骗/钓鱼网站大规模部署→大量用户损失惨重。GoPlus总结五种核心攻击手法
2. **三种直接转移攻击**：(1)诱导转移SOL——伪装Swap界面/实际执行SystemProgram.transfer;(2)多资产转移——同一交易多个instruction一次性洗劫钱包所有Token+NFT;(3)代币账户所有权转移——createSetAuthorityInstruction直接转移所有权(Phantom+Backpack会警告)
3. **两种隐蔽授权攻击**：(4)Delegate授权——createApproveCheckedInstruction/不直接转移/获取控制权限后等时机→"影响面最广/因为攻击者等到用户够多金额够大才转移";(5)Durable Nonce签名——用户签名无害交易→交易未广播→攻击者随时广播上链
4. **终极攻击 = Durable Nonce + 合约升级**：用户签名时合约正常(钱包+模拟工具无法预警)→攻击者拿到签名后升级合约为恶意版本→广播交易执行恶意操作→"极其隐蔽/即使是经验丰富用户也可能无法识别"
5. **核心防范 = 交易模拟+授权监控**：Solana JSON RPC支持交易模拟→主流钱包(Phantom/Backpack)已支持→"只要用户耐心查看每次交易变化/就能规避大部分钓鱼风险"。但合约升级+Durable Nonce组合仍可绕过模拟检测→目前无完美防护

## 关键数据
- Solana市值: 一度超BNB全球前三
- 攻击类型: 5种(3种直接+2种隐蔽+1种终极组合)
- 钱包: Phantom/Backpack已支持交易模拟
- 钓鱼手段与EVM一致: 诱骗领空投/假项目网站/免费抽奖/NFT空投引导

## 与已有知识的关系
- 补充 [[solana]] — Solana生态安全现状+钱包钓鱼风险
- 与 [[privacy]] 关联 — 链上透明性的另一面=交易可被恶意构造
- 与 [[defi]] 关联 — DeFi用户资产安全的底层基础设施需求

## 值得记住的引用
> "近期Solana的市值水涨船高，一度超越BNB排名全球前三，巨大的财富效应吸引了大量的活跃玩家，更吸引到了大量Wallet Drainer团伙从EVM的链转入Solana。"
> "这种类型的攻击特别隐蔽，对用户来说构成了极大的隐患，因为即使是经验丰富的用户在签署交易时也可能无法识别出潜在的风险。"

## 我的笔记
这篇文章虽然是一份安全指南，但揭示了Solana生态的一个结构性问题：EVM生态的安全基础设施经过多年沉淀(Revoke/Metamask模拟/Blocknative预警等)已相对成熟，而Solana的账户模型与EVM不同→攻击手法需要"重新翻译"(如SPL Token Account vs ERC-20/Delegate vs Approve)→安全工具需要"重新适配"。Solana的快速涨跌周期(2024年Meme季+AI Agent季)吸引了大量新用户→新用户=最容易被钓鱼的群体。最值得警惕的是"Durable Nonce+合约升级"组合攻击——它绕过了交易模拟这一核心防线，目前没有完美防护手段。Solana生态如果想持续增长，安全基础设施建设必须跟上——否则每一波散户涌入后的大规模被盗事件会严重伤害生态信誉。
