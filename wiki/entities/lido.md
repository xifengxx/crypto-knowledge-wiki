---
type: entity
entity_type: protocol
created: 2026-06-28
updated: 2026-06-30
tags: [defi, staking, ethereum]
---

# Lido

## 基本信息
- 定位：以太坊上最大的流动性质押协议
- 产品：stETH（质押 ETH 的流动凭证）
- TVL：$300 亿+，全部 DeFi 协议中排名第一

## 核心业务
用户存入 ETH → Lido 代为质押到以太坊验证者 → 用户获得 stETH → 可在 DeFi 中使用 stETH（借贷/交易/再质押）

## 关键数据（2024年8月更新）
- stETH 是 DeFi 中最大的抵押品（$100 亿+ 在 Aave/Maker 等协议中）
- 目前占据整个ETH质押市场的28.5%（较之前的30%+略有下降）
- 协议收取ETH质押收益的10%，累计总计$1.75亿
- PE值持续压缩：Q1 31.6 → Q2 18.7 → Q3 13.7
- 获客成本持续上升（即使营收增长）
- 再质押赛道（LRT）和减少中心化叙事正在动摇Lido的绝对龙头地位
- LDO治理代币缺乏价值捕获机制，受到投资者质疑

## 战略决策：放弃 Restaking（2024年5月）
- Lido 事实上的领导者 Hasu 于 2024 年 5 月发文，正式确认 Lido 放弃自行开展 restaking 业务
- 三大立场：1) stETH 保持为 LST 而非 LRT；2) 通过预确认形式支持与以太坊对齐的验证者服务，不给质押者增加风险；3) 使 stETH 成为 restaking 市场最大抵押物
- 替代策略：投资并支持 restaking 协议 Symbiotic，成立 Lido 联盟来应对 Eigenlayer 和 LRT 协议对市场份额的竞争
- 背景：Lido 长期占以太坊质押比例约三成，以太坊基金会内部对其制约声音不断，Vitalik 多次撰文讨论质押中心化问题。Lido 已关停 Solana 等所有非以太坊业务以"与以太坊对齐"

## 风险
- **中心化风险**：Lido 32% ETH 质押份额。超过 1/3 共识阈值可能导致以太坊被操纵。社区已投票否决存款限制提案——自我约束失败
- **stETH 脱锚风险**：极端行情下 stETH 可能偏离 ETH 价格，引发 DeFi 抵押品体系连锁清算
- **天花板可见**：ETH 质押率接近 30%（基金会讨论过 25% 上限），质押收益率从 22 年底 6% 降至 3%，LST 市场天花板逐步可见
- [[liquid-staking]] — Lido 是该赛道的定义者
- [[eigenlayer]] — Lido stETH 是 EigenLayer 再质押最大的资产来源
- [[makerdao]] / [[aave]] — stETH 的主要使用场景

## 来源
- [[来源_2022-07_Web3_收入_价值捕获_FutureMoney]] — 风险分析：Lido 180天内收入16.6 million USD，但其业务模式存在显著风险——持有大量锁仓ETH同时发行流动stETH并承诺1:1刚兑；文章指出Lido模式在信用扩张周期表现良好但信用收缩周期面临极大提现风险，且协议首要保卫目标是stETH持有人而非LDO token持有人
- LSDFi 研报
- [[来源_2024-08_DeFi_PE市盈率_估值分析_BlockBeats]]
- [[来源_2024-11_以太坊_Solana_Staking商业模式差异_MintVentures]]
- [[来源_2024-08_Banana_Gun_EOF_Titan_PBS_深潮TechFlow]] — Banana Gun与Titan Builder的EOF协议导致Lido单月损失1,666 ETH（2024年4月-5月数据集），区块19728051案例中Lido仅获19.75 ETH而Titan获56.6 ETH纯利润
- [[来源_2022-03_以太坊_PoS_Staking赛道_MintVentures]] — Lido早期全景：融资记录（种子轮200万美元/Paradigm轮7500万美元/a16z 7000万美元）、stETH在Aave上线细节、MEV捕获研究参与、保险基金仅覆盖0.11%质押量等早期关键数据
- [[来源_2025-04_比特币生态_RWA赛道_Web3全景_PANews]] — Infinity Labs更新Lido数据：ETH质押市占率约65%/TVL超$350亿/通过多节点运营商实现非托管质押/EigenLayer再质押协议允许多重收益
- [[来源_2022-07_加密衍生品_CeFi_DeFi_Web3Caff]] — 2022年Lido早期快照：锁仓量66.5亿美元、stETH作为质押凭证可在其他DeFi中使用、LDO代币总量10亿枚、投资方包含a16z/Coinbase Ventures/三箭资本/Paradigm
- [[来源_2022-08_DAO补偿_Coordinape_Hedgey]] — 补充 Lido DAO 薪酬结构：83 名贡献者/20 工作流，LDO 长期激励计划（1 年悬崖 + 3 年连续每月归属）
