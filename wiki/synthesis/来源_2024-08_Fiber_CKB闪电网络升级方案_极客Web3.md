---
type: source
source_type: article
url: https://mp.weixin.qq.com/s/SFIsmjf2CDWJvSDbi5unmA
author: Faust & Nickqiao (极客Web3)
date: 2024-08-23
ingested: 2026-06-29
tags: [bitcoin-ecosystem, ckb, lightning-network, fiber, layer2, payment]
---

## 阅读证据
- 总行数: 91
- Q1 (前25%): CKB 8月23日发布Fiber Network(光纤网络)→CKB价格一天涨近30%。核心优势：原生支持多类型资产(CKB/BTC/稳定币)/手续费远低于BTC/响应更快。宣称将设置10万个物理节点。当前BTC闪电网络：$3亿+资金/1.2万节点/近5万条支付通道
- Q3 (中后25%): BTC闪电网络的替代交易循环攻击(replacement cycling attack)导致开发者Antoine Riard退出→至今无根本解决方案。CKB在交易池层面改良可解决此问题。Fiber vs BTC闪电网络对比：PTLC替代HTLC(隐私改良)/Daric协议(同一撤销密钥适用于多笔过期承诺交易→减少WatchTower存储压力)/跨域原子支付(无需信任第三方)
- Q4 (最后25%): 流动性管理核心问题：通道余额耗尽→需重新注入→BTC链上手續費高(开$100通道花$10=10%)→CKB TPS高+手续费美分级别。Fiber与Mercury Layer合作→流动性注入可摆脱链上操作。总结对比图(7维度Fiber优于BTC闪电网络)
- 图片: 约15张(技术架构示意图/均装饰性)

# Fiber：把闪电网络嫁接到CKB上的宏大实验

## 核心要点
1. **Fiber = CKB上的升级版闪电网络**：基于CKB的链下支付通道网络。核心四组件：支付通道+WatchTower瞭望塔+多跳路由(PTLC)+跨域支付。相比BTC闪电网络7项优化：多资产原生支持/低手续费/高响应速度/PTLC隐私/替代交易循环攻击免疫/Daric存储优化/Mercury链下流动性注入
2. **支付通道核心机制**：通道双方在链上建多签账户→链下转账(即时)→退出时结算最终余额到链上。防双花=不对称承诺交易(双方只能提交对自己不利的版本)+撤销密钥(提交过期交易→对方可罚没全部资金)。Fiber优化=Daric协议让同一撤销密钥适用多笔过期交易→大幅减少WatchTower存储
3. **PTLC替代HTLC = 隐私升级**：HTLC可通过相同密钥推断关联性(两个中间节点发现总是收到相同密钥→推断上下游关系)。PTLC每跳用不同密钥→结合洋葱路由→隐私支付理想方案
4. **跨域原子支付 = Fiber↔BTC闪电网络互联**：通过跨域中转商(Ingrid)在两个网络中运行节点→HTLC保证原子性(要么全成功要么全失败)→用户在Fiber中用CKB/RGB++资产换取BTC闪电网络中的BTC
5. **CKB的战略定位**：闪电网络=BTC L2的支付层。当前BTC闪电网络：$3亿+资金/1.2万节点/5万条通道→如果Fiber能吸引部分流动性+CKB的低成本优势+BTC生态叙事→潜在价值重估

## 关键数据
- CKB消息当天涨幅: ~30%
- BTC闪电网络资金: $3亿+
- BTC闪电网络节点: ~1.2万/通道: ~5万条
- Fiber计划节点: 10万个(目标)
- 开通通道成本对比: BTC $10(10% of $100通道) vs CKB 美分级别
- Fiber资产支持: CKB+BTC+RGB++稳定币(原生多资产)

## 与已有知识的关系
- 补充 [[bitcoin-ecosystem]] — Fiber=BTC闪电网络的互补/升级方案(CKB上的闪电网络)
- 与 [[layer2]] 关联 — 闪电网络=Fiber=BTC L2支付层的关键组件
- 与 [[privacy]] 关联 — PTLC+洋葱路由=链下支付隐私方案
- 与 [[cross-chain]] 关联 — Fiber↔BTC闪电网络跨域原子支付

## 值得记住的引用
> "Fiber可以原生支持多类型资产，如CKB、BTC、稳定币等，而且CKB的手续费远比BTC低、响应速度快，Fiber可以借此在UX方面取得突破。"
> "Bob只要敢把过期的承诺交易提交上链，Alice就可以用撤销密钥把Bob的钱拿走，作为惩罚。"
> "Fiber和比特币闪电网络可以互联互通，形成更大的P2P网络。"

## 我的笔记
这篇文章是理解CKB价值主张的核心技术文献。CKB本质上在走"BTC的L2"路线：通过Fiber(CKB上的升级版闪电网络)+RGB++(CKB上的资产协议)构建BTC生态的支付+资产层。技术上看Fiber确实比BTC原生闪电网络有显著优势(多资产/低成本/PTLC/替代交易循环免疫)，但核心挑战是：(1)BTC闪电网络已有$3亿+锁定资金和网络效应→Fiber冷启动需要时间+激励；(2)10万物理节点的目标听起来过于宏大(HNT/Helium的教训)；(3)CKB自身市值和流动性能否支撑这个叙事。从投资角度：CKB的核心价值取决于"BTC L2"叙事的持续性+BTCFi赛道的整体增长。Fiber的技术优势是真实存在的，但技术优势≠市场成功。
