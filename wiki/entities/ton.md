---
type: entity
entity_type: protocol
created: 2026-06-30
updated: 2026-07-01
tags: [ton, telegram, layer1, gamefi, mini-dapp]
aliases: [TON, The Open Network, Telegram Open Network, TON大规模铸造]
---

# TON (The Open Network)

## 基本信息
- 类型：Layer 1 区块链
- 起源：2018年由Telegram团队（Pavel Durov & Nikolai Durov）创建（原名Telegram Open Network），2020年因SEC诉讼被Telegram放弃，由社区接手继续开发
- 共识机制：PoS（BFT共识变体）
- 核心技术特征：动态分片（infinity sharding paradigm）、高TPS、低费用
- 基金会：TON Foundation
- 生态系统核心合作伙伴：Telegram（2023年9月宣布战略合作）

## 核心叙事
> TON = 将Telegram 9.5亿用户导入Web3的基础设施层。三步战略：社交游戏获客 → 代币空投转化 → DeFi留客。

## 关键数据（截至2024年10月）
- **激活钱包**：3200万（2023年9月为80万，增长39倍）
- **非零余额Jetton钱包**：2200万
- **月活跃钱包（MAW）**：1000万
- **日均活跃钱包（DAW）**：80万
- **月链上交易量**：2亿笔（增长30倍），约60%为Toncoin转账
- **月交易费**：510万美元
- **TVL**：7.26亿美元（DEX 3.42亿 + 流动性质押3.35亿）
- **TON Space注册用户**：1亿（2024年11月）

## 生态系统关键项目
- **DEX**：STON.fi / DeDust.io（两大领先DEX）
- **GameFi / Tap-to-Earn**：Notcoin（290万持有者）、Hamster Kombat（130万持有者）、Catizen（160万持有者）
- **模因币**：DOGS（持有者1700万，日交易峰值1440万笔）
- **钱包**：Telegram原生钱包（托管）+ TON Space（非托管）
- **稳定币**：USDT on TON（2024年4月上线）

## 增长里程碑
- 月交易量从500万到3000万：TON 5个月 vs Avalanche 28个月 vs Ethereum 52个月
- 2024年7月：Telegram Mini Apps MAU达5亿
- 2024年11月：TON Space注册用户达1亿

## 大规模代币分发：四阶段技术演进

TON 在 2024 年经历了从零到四个成熟工具的技术跃迁，每条路径由一次大规模实战驱动：

| 阶段 | 时间 | 事件 | 方案 | 范式 | 费用承担 |
|------|------|------|------|------|---------|
| 1 | 2023.12 | Inscriptions | TON-20（非空投） | 用户 Mint | 用户消耗 24 万+ TON |
| 2 | 2024.05 | Notcoin | Mass Sender | 项目方发送 | 项目方（用户偿还 300 NOT） |
| 3 | 2024.夏 | DOGS | TokenTable → Mass Sender | 用户认领 → 发送 | 用户 → 项目方 |
| 4 | 2024.09 | Hamster Kombat | Mintless Jettons + GigaDrop | 免铸造 + 认领 | 极低 + 用户 |

**当前可选方案（2024 年底）**：
- **Mintless Jettons**：开源、基于 Merkle proofs、仅在链上存 single hash。用户交互时才生成合约。局限：必须在部署前锁定全部接收人
- **Mass Sender**：自托管、需申请获取。16 个 highload wallet 按分片分布，同分片消息减少跨分片转发。含流量监控和手动调速
- **TokenTable**（商业化）和 **GigaDrop**（商业化）：用户主动认领范式，费用转嫁用户

**关键教训**：
- Inscriptions：验证者硬件不达标、API 无法水平扩展、单地址收币导致分片失效
- DOGS：验证者纪律问题催生惩罚机制、DEX 中心化架构为瓶颈（2024.08 升级隔离）
- Hamster Kombat：Mintless Jettons 有效但 API 层仍 overwhelmed

## 治理演进
- 早期：TON基金会集中治理 + Grant计划（资助开发者）
- 2024年1月：推出The Open League (TOL)，按实际成果（四项竞赛类别：App/DeFi/Token/NFT）奖励表现最优项目
- 2024年8月：TON Society独立运营
- 2024年12月：引入Society DAO，转向社区驱动型资金分配
- TOL第六赛季重大调整：从奖励开发者转向直接奖励活跃用户（Normie Airdrop + Degen Airdrop）

## 竞争优势
- **用户入口优势**：Telegram 9.5亿MAU = Web3最大潜在用户池，无需下载新app/管理私钥/理解gas即可接触Crypto
- **增长速度为L1中最快**：5个月完成以太坊52个月的交易量增长
- **生态多样性**：GameFi + Memecoin + DeFi 三引擎驱动链上活动
- **代币效用**：Toncoin作为Telegram广告平台的独家支付方式，具有真实外部需求

## 风险 / 挑战
- **用户留存**：头部GameFi项目留存60%，第二梯队仅37%，第三梯队25%——漏斗坍塌严重
- **资本效率偏低**：7.26亿TVL对应1000万MAW，人均TVL约$73
- **监管风险**：Telegram与TON的法律历史（2020年SEC诉讼），Pavel Durov 2024年8月在法国被捕
- **2028年目标差距**：当前约3000万激活钱包，距离5亿目标仍需增长约20倍
- **依赖Telegram平台**：与Web3去中心化理念存在张力

## TON 流动性质押赛道
- 赛道总TVL：约4.08亿美元，占全网质押量（6.46亿TON）的约11.5%
- **[[tonstakers]]** — 龙头（TVL $1.97亿，CertiK审计94.5分，tsTON）
- **[[bemo]]** — 第二（TVL $7101万，DWF Labs合作，stXP激励系统，stTON）
- **[[stakee]]** — ⚠️ 高风险（TVL $3224万，增速最快593%，但无审计+代币无法定价）
- **[[ton-whales]]** — 综合服务商（TVL $1.05亿，钱包+浏览器+质押+俱乐部，wsTON）
- **[[hipo]]** — 去中心化模型（TVL $332万，无许可验证者竞拍，hTON）

## 相关实体
- [[telegram]] — 战略合作伙伴，9.5亿MAU用户入口
- [[solana]] — L1竞争对手，Memecoin生态对比
- [[ethereum]] — L1对比基准
- [[base]] — 另一个C2C（Consumer to Crypto）路径对比
- [[tonstakers]] — TON LSD龙头
- [[bemo]] — TON LSD第二名
- [[stakee]] — TON LSD，高风险
- [[ton-whales]] — TON生态基础设施
- [[hipo]] — TON LSD，去中心化

## 交易所上币策略与Web2.5困境（2024年9月快照）
币安在Notcoin之后连续上线5个TON生态代币，在历史上极为罕见。核心驱动力是**拉新**——TON mini app背靠Telegram 9亿用户，为交易所提供巨大增量用户池。但暴露了TON生态的结构性断层：
- Dogs有4000万潜在用户，链上持币用户仅数十万——大部分用户通过交易所预充值直接转化为CEX用户而非TON链上用户
- TON TVL未因mini apps热潮显著增长——链上生态与Telegram mini apps联系不够紧密
- WuliGy判断Catizen和Hamster上线后交易所对同类项目兴趣将显著下降——"第二波"可能接近天花板
- Colin将其定性为**Web2.5生态**——链上的重要性尚不明显，Telegram付费功能和交易所拉新效果更为重要
来源：[[来源_2024-09_币安疯狂上线TON生态_原因与走势_吴说播客]]

## 来源
- [[来源_2024-12_TON生态研报_链上交易量_Telegram双赢]]
- [[来源_2024-09_TON生态LSD赛道_Tonstakers_Bemo]]
- [[来源_2024-05_Notcoin_mini_dApp_Mass_Adoption转折点]]
- [[来源_2024-06_Delphi_TON游戏炒作]] — Delphi 2024年6月TON游戏深度报告：Notcoin/Hamster Kombat/Catizen/Fanton/Gatto五项目分析，TON代币经济（前100持92%/0.6%通胀/50%燃烧），WeChat vs Telegram对标框架，移动游戏UA成本上升趋势，社交平台→游戏分发历史脉络
- [[来源_2024-08_DOGS空投_Telegram_Meme币安Launchpool]]
- [[来源_2024-07_点赚小游戏_内冷外热_TGE延迟]] — 2024年7月TON生态五个头部Tap-to-Earn项目全景（Hamster Kombat 239M用户/TapSwap 60M/Pixelverse 50M/Dotcoin 17M/MemeFi 20M选择Linea），集体TGE延迟，机器人问题侵蚀数据可信度
- [[来源_2024-09_币安_TON生态项目_上币预测_ChainCatcher]] — 2024年9月TON生态快照：币安累计上线6个TON项目/Moonbix(币安自研740万用户)/Blum(6000万用户Binance Labs投资)/DejenDog(HashKey发行)/Yescoin(1570万用户)/Gatto/Fanton/Vana Data Hero 7个候选项目用户与融资全景
- [[来源_2024-12_TON大规模铸造历史_四阶段演进]] — TON Foundation官方文章：Inscriptions→Notcoin/Mass Sender→DOGS/TokenTable→Hamster Kombat/Mintless Jettons四阶段技术演进，DOGS 1000万链上持有者创纪录但导致宕机，三种费用模型对比
- [[来源_2024-09_币安疯狂上线TON生态_原因与走势_吴说播客]] — 吴说播客：币安连续上线5个TON生态代币的拉新逻辑、公开联赛运作机制（每期$300万奖池）、链上承载瓶颈（4000万用户→仅几十万持币）、Web2.5定性、俄语区KOL社群运作、对波场USDT的威胁
