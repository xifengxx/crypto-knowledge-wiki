---
type: source
source_type: article
url: https://mp.weixin.qq.com/s?__biz=MzIyNzIzODcyMQ==&mid=2678428755&idx=1&sn=df1521ecec25d18c01a061b61ebb9464
date: 2023-08
author: Will 阿望, Diane Cheung
ingested: 2026-06-29
---

# RWA 实现路径与 RWA-Fi 发展逻辑

## 阅读证据
- 总行数: 228
- Q1 (前25%): BCG和ADDX研究预测全球非流动性资产代币化将产生16万亿美元市场（接近2030年全球GDP的10%），花旗预计2030年10万亿美元规模市场将被代币化
- Q3 (中后25%): Ondo Finance TVL为1.62亿美元，Flux Finance TVL为4278万美元；MakerDAO有11个RWA相关项目被用作抵押品，总TVL为27亿美元
- Q4 (最后25%): Pendle TVL因LSD赛道火爆达到1.45亿美元；stUSDT定位为"Web3版余额宝"，设计参考Lido stETH的Rebase机制
- 图片: 0 analyzed / 约10张外部URL图片（架构图、数据图表等），全部为微信图床/外部链接，未本地化

## 核心要点
- 短期RWA驱动力来自加密世界DeFi协议单方面的需求（资产管理、投资多元化、新资产类别），而非传统金融主动进入。长期应是双向奔赴：RWA上链 + TradFi借助DeFi释放潜能
- 美债RWA实现路径分为两条：(1) 传统金融主导的Off-Chain to On-Chain（合规基金上链，区块链仅作记账工具，不接入DeFi）；(2) 加密金融主导的On-Chain to Off-Chain（DeFi协议通过法律架构/SPV主动捕获链下收益）
- MakerDAO通过Monetalis信托架构（BVI法律安排）实现链上治理与链下执行统一，是DeFi协议捕获RWA的最成熟案例。MIP65提案将债务上限从5亿提升至12.5亿美元
- Centrifuge的SPV+Tranch结构（DROP/TIN）+受托人+LockBox隔离账户，是RWA资产证券化与破产隔离的标准范式，已被MakerDAO多个Vault采纳
- RWA生息资产上链只是第一步，后续与DeFi乐高组合（借贷、交易、利率衍生品）才能打开天花板。类比：U本位RWA生息资产 vs ETH本位LSD生息资产，DeFi应用逻辑一致
- T Protocol通过代币封装移除STBT白名单限制，实现无需许可的美债代币化产品，是合规与开放之间的一种折中方案

## 关键数据
- BCG & ADDX: 全球非流动性资产代币化将产生16万亿美元市场（接近2030年全球GDP 10%）
- 花旗: 预计2030年10万亿美元规模市场将被代币化
- MakerDAO: 11个RWA相关项目作抵押品，总TVL 27亿美元；MIP65初始债务上限5亿→后提升至12.5亿美元；Sygnum Bank初始费用95万美元
- Franklin Templeton FOBXX: AUM超过290亿美元，年化收益4.88%，1份额=1 BENJI代币
- Ondo Finance: TVL 1.62亿美元（截至2023年8月1日），Flux Finance TVL 4278万美元
- Pendle TVL: 1.45亿美元（受益于LSD赛道）
- Hamilton Lane: 管理资产8239亿美元，代币化基金最低投资门槛从500万降至2万美元

## 与已有知识的关系
- 补充 [[rwa]] — 系统阐述两条实现路径(Off-Chain to On-Chain vs On-Chain to Off-Chain)的完整法律/技术架构，填补了概念页中"如何实现"的空白；明确了RWA生息资产与LSD生息资产的逻辑对称性
- 补充 [[makerdao]] — 详细记录MIP65提案的BVI信托法律架构、Monetalis执行流程、Coinbase/Sygnum Bank角色分配
- 补充 [[centrifuge]] — 记录改进后的受托人+LockBox隔离账户结构，降低资产发行方资金滥用风险
- 补充 [[ondo-finance]] — 记录OUSG基金的豁免路径（Qualified Purchaser≥500万美元 vs Accredited Investor≥20万美元年收入）和Flux Finance借贷协议联动
- 补充 [[pendle]] — 提出RWA+DeFi可类比LSD-Fi的Pendle利率互换模式，预言RWA资产也可拆分为PT/YT
- 补充 [[liquid-staking]] — 建立"U本位RWA生息资产"与"ETH本位LSD生息资产"的对称框架
- 补充 [[curve]] — MatrixDock STBT在Curve池中交易，是RWA资产进入DEX流动性的早期案例

## 值得记住的引用
> "过分纠结RWA的定义没有太多意义，Token是价值的载体，RWA的价值几何还得去看将底层资产的何种权益/价值带到了链上，以及其应用场景。"
> "生息类RWA的本质，是在建立起U本位，带有底层资产真实收益率（Real Yield）的RWA资产类别，其与LSD建立ETH本位的生息资产逻辑一致。"
> "RWA将生息资产映射上链只是第一步，后续如何嫁接DeFi可组合性的乐高将非常值得探索，有望进一步打开RWA+DeFi的天花板。"
> "长期来看，RWA不应该只是单向的，例如目前DeFi对于TradFi的单方面需求。未来将是双向奔赴，一方面能够将现实世界资产带到链上，另一方面TradFi也能借助DeFi的种种优势进一步释放潜能。"

## 我的笔记
这篇文章的价值不在于数据（有些已经过时或存在明显笔误，如Flux Finance借款金额"2802亿美元"疑为"2802万美元"），而在于它建立了一个清晰的RWA分析框架——两条实现路径（Off-to-On vs On-to-Off）和U本位生息资产与ETH本位LSD的对称逻辑。这个框架在2023年提出时具有前瞻性，后续2024-2025年RWA的发展基本验证了它的判断。文章的盲点是几乎完全忽略亚洲市场（仅提及Matrixport/TRON），对欧洲的MiCA等监管框架也缺乏讨论。另外，作者对"RWA+DeFi乐高"的乐观预期在2024年并没有大规模兑现——大部分RWA产品至今仍是"持有生息"模式，可组合性受限于合规白名单。
