---
type: source
source_type: article
url: https://www.reflexivityresearch.com/all-reports/a-look-into-on-chain-lending-and-under-collateralized-loans
date: 2025-04
ingested: 2026-07-02
---

# 链上借贷和低抵押贷款的探讨 — 从超额抵押到信用借贷的演进路径

## 阅读证据
- 总行数: 119
- Q1 (前25%): Compound 于 2018 年推出算法货币市场，12 个月内总供应资产从不到 $1 亿膨胀至 $60 亿以上；Aave V3 以太坊池目前持有 $236 亿抵押品和 $89 亿活跃借款，规模超过许多区域性银行
- Q3 (中后25%): Maple Finance 的 Secured Lending 在 2024 年增长 1600%+，从 $3200 万增至 $5.62 亿 TVL，活跃出借方数量增长 14 倍至 796 家机构
- Q4 (最后25%): 文章预测未来链上信贷市场将达到 $400 亿规模；Maple 在 2024 年发生 61 次追加保证金通知，平均处理时间仅 3 小时
- 图片: 0 analyzed / 2 decorative skipped (外部 CDN 图片，仅作为资料来源图示) / 2 external URLs unavailable

## 核心要点
- 链上借贷从 2017-18 年的 MakerDAO (CDP 模型) 和 Compound (算法货币市场) 起步，到 Aave 引入闪电贷和 aToken 实现收益可组合性，最终在 2025 年 4 月以约 $200 亿活跃贷款规模超越 CeFi 对手方
- 中心化借贷方（Celsius、Voyager、BlockFi）在 2022 年因期限错配和抵押品纪律不良而崩溃，DeFi 协议因透明储备和市场实时重新定价风险而保持偿付——到 2024 年 Q4，DeFi 占复苏的 $300 亿贷款账簿的 63%
- 低抵押信贷赛道存在两种主流设计：许可制资金池协议（Maple、TrueFi、Clearpool）要求 KYC 借款人和链下法律协议；纯链上声誉模型（Wildcat）将信用合约完全保留在链上，但执行权薄弱
- Maple 的混合模式（超额抵押但低折扣 + 委托代表质押 + 保证金追缴引擎）实现了 2024 年 16 倍 TVL 增长，证明"许可制管道 + 许可制承销"的组合正在赢得市场
- 关键未解决问题：无抵押情况下的执行依赖链下法院（时间跨度远超区块链结算）；信息不对称（借款人比公众更了解自身财务状况）；监管既是风险也是催化剂
- 文章提出未来 $400 亿链上信贷繁荣需要身份/声誉基础设施、外部保险（CDS 覆盖/EigenLayer 再质押）、治理规范和清晰的数据标准

## 关键数据
- Aave V3 以太坊池: $236 亿抵押品, $89 亿活跃借款（远多于许多区域性银行）
- 2020 年 3 月 COVID 崩盘中，Maker、Compound 和 Aave 承受了 50% 的日内跌幅而未致存款人损失
- 截至 2025 年 3 月，LSTs 在 Aave 上支持超过 $135 亿的借款，其中三分之二是循环杠杆策略
- Maple Secured Lending: $3200 万 → $5.62 亿 TVL（1,600%+ 增长），出借方从 56 增至 796 家机构，平均 APY 10-17%
- TrueFi: 自 2020 年以来发放 $17 亿贷款，终生违约率 1-4%（相当于较低级别高收益债券）
- Goldfinch: 已在 20+ 新兴市场司法管辖区融资 $1.1 亿贷款，目标 $1.4 万亿全球私人信贷市场
- Centrifuge V3: 代币化 $2.3 亿 Janus Henderson 国债基金，通过 Wormhole 跨链
- 2025 年 4 月链上货币市场活跃贷款约 $200 亿（首次超越 CeFi）
- Centrifuge/Keyrock 预测：代币化私人信贷 TVL 到 2027 年达 $120-175 亿
- 文章预测：$400 亿链上信贷繁荣即将到来

## 与已有知识的关系
- 补充 [[defi]] — 提供链上借贷从 2017 到 2025 年的完整演进时间线，特别是 DeFi 借贷在 2022 年 CeFi 崩溃中保持偿付的关键对比数据，以及低抵押信贷的最新实验设计
- 补充 [[rwa]] — 深化对链上私人信贷赛道的理解，特别是 Maple/TrueFi/Goldfinch/Centrifuge 四种不同低抵押信贷架构的对比分析
- 补充 [[maple-finance]] — 以本文为 Maple 的混合模式（低折扣抵押 + 委托代表制）提供迄今最详尽的竞争定位和 2024 年增长数据
- 补充 [[aave]] — Aave V3 以太坊池 $236 亿抵押品和 $89 亿借款的最新数据
- 补充 [[centrifuge]] — Centrifuge V3 代币化 $2.3 亿 Janus Henderson 国债基金并跨链的新进展
- 补充 [[truefi]] — TrueFi 2025 年路线图：Polaris 生息稳定币和治理改革（固定授权取代代币投票）
- 提出 [[wildcat]] — 纯链上无抵押借贷实验的新实体，与现有协议形成对比
- 提出 [[clearpool]] — Credit Vaults 和 Prime V2 的新进展实体

## 值得记住的引用
> "Permissionless plumbing + permissioned underwriting beats either extreme. Maple's 16-fold TVL expansion in 2024 proves that institutional lenders will move on-chain — if they can rely on professional delegates, real-time collateral monitoring, and fast liquidation rails."

> "The lesson: replicate the parts of TradFi that work (credit committees, senior-junior tranching) and outsource the rest to immutable code."

> "Under-collateralized lending is no longer a moon-shot idea; it is a small but rapidly compounding asset class with credible product-market fit. The next steps are mostly operational, including identity, insurance, governance hygiene, and data standards."

## 我的笔记
- 本文对链上借贷从 2017 到 2025 年的演进做了极好的全景梳理，尤其精彩的是将 CeFi 崩溃（Celsius/BlockFi/Voyager）与 DeFi 保持偿付形成对比——这是理解 DeFi 核心价值主张（透明储备 + 实时风险定价）的关键案例。但需要审慎的是，DeFi 之所以能保持偿付，在很大程度上是因为它只做超额抵押贷款（本质上是有抵押品的信贷，更接近当铺而非银行），而 CeFi 做的是期限转换和信用创造。两者承担的风险类型不同，直接对比存疑。
- 文章对低抵押信贷的四种模式（Maple、TrueFi、Goldfinch、Wildcat）的并列分析非常有用，但 Wildcat 的"纯粹实验"定位意味着它尚未经过真实违约周期的检验。Maple 的 16 倍 TVL 增长虽然令人印象深刻，但也需注意其 2022 年的 $6930 万坏账历史——只不过这次它从无抵押转向了低折扣抵押模式。
- 文章最后提出的 $400 亿预测是"自证预言"式的——如果基础设施到位、监管清晰、身份系统成熟，这个数字是合理的；但这恰好在强调这些条件目前都未达到。从投资角度，值得关注哪些协议能在"身份 + 保险 + 治理"三个维度上最早建立竞争优势。
