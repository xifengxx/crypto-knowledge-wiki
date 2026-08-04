---
type: source
source_type: article
url: https://medium.com/opyn/defragmenting-defi-lending-and-borrowing-markets-x-yield-generating-protocols-76d530c3fd49
author: Shark (Opyn)
date: 2024-12
ingested: 2026-06-29
tags: [defi, lending, yield, ethena, pendle, aave, opyn]
---

# DeFi碎片化：借贷市场 X 收益生成协议 (Opyn)

## 阅读证据
- 总行数: 141
- Q1 (前25%): DeFi Renaissance: TVL回到2021-2022高点。收益来源变革：不再是代币排放补贴→基于利率/验证者奖励/基差交易。2024关键变化=利率挂钩市场与借贷和交易融合。ENA+Pendle飞轮→AAVE
- Q3 (中后25%): Pendle x Aave x Ethena可组合性：PT-sUSDe(固定收益/锁定利率)+YT-sUSDe(未来收益/投机)。用户借USDC@5-12%→买PT获得更高固定APY→为Pendle提供LP→赚交易费+Pendle代币+Ethena积分。三重嵌套收益
- Q4 (最后25%): Opyn Markets: 统一借贷+永续合约+AMM LP平台。0-perp机制：存1000 sUSDe→铸50k 0-perps→卖出换50k sUSDe→再存入→51k敞口/sUSDe APY 25%-0-perp资金费率10%×50k=理论年化770%
- 图片: 0张已分析 / 3张装饰跳过 / 0张外部URL无法获取

## 核心要点
1. **收益范式转变**：2022 Anchor 20% APY = 庞氏补贴(Anchor Yield Reserve烧尽→UST脱锚→LUNA崩溃) → 2024 Ethena sUSDe = stETH质押奖励+永续合约资金费率(基差交易/10-15%历史收益/至少零收益保障)
2. **DeFi可组合性三层嵌套**：Aave(借USDC)→Pendle(PT固定收益/YT投机/Pool LP)→Ethena(sUSDe delta-neutral底层)→独特收益payoff
3. **Opyn Markets统一平台**：一个平台完成借贷+永续+AMM LP。0-perp=锁定抵押品铸造并卖出永续合约→循环放大敞口→理论770% APR
4. **Opyn核心论点**：DeFi中大多数东西都是perps——借贷市场/资金费率/收益产品/再质押资产

## 关键数据
- Ethena基差交易历史收益：**10-15%** (ETH+BTC)
- Opyn 0-perp机制示例：1000 sUSDe → 51k敞口 → 理论**770%** APR(sUSDe 25% APY/0-perp资金费率10%)
- PT=固定收益锁定/YT=未来收益投机+交易

## 与已有知识的关系
- 补充 [[defi]] — DeFi收益范式转变：补贴→可持续/可组合性嵌套/Opyn统一平台
- 关联 [[ethena]] — sUSDe收益来源：stETH+资金费率/delta-neutral
- 关联 [[pendle]] — PT/YT机制/sUSDe收益代币化（待创建）
- 关联 [[aave]] — sUSDe→Aave借贷循环

## 值得记住的引用
> "The yield, this time, is not subsidized by token emissions but is based on interest rates, validator rewards, or basis trades."
> "Most of the things in DeFi are perps. Lending/Borrowing markets, funding rate or yield reward products, restaked assets and perps have been the core traded products."
> "Everything is permissionless. Everything is composable. Everything is possible."

## 我的笔记
Opyn团队2024年12月关于DeFi收益演进的深度分析。核心框架价值：①2022 Anchor vs 2024 Ethena的对比完美展示了DeFi收益从"庞氏补贴"→"结构性收益"的范式转变；②Pendle x Aave x Ethena的三层可组合嵌套是理解2024 DeFi"收益乐高"的最佳案例；③Opyn的"DeFi=perps"论是激进但有力的统一理论——借贷/资金费率/再质押都可以抽象为永续合约。到2026年，Ethena确实成为最大的结构性收益协议，Opyn的0-perp产品也持续增长。
