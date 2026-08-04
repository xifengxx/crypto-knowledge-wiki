---
type: source
source_type: article
url: https://medium.com/1kxnetwork/a-guide-to-dao-treasury-diversification-sales-eee65f89d0b5
date: 2021-11-25
ingested: 2026-07-02
---

# DAO 国库多元化销售指南：OTC 出售原生代币换取稳定币的操作框架

## 阅读证据
- 总行数: 136
- Q1 (前25%): Hasu 的论点——DAO 金库中持有的原生代币实际上相当于传统公司未发行的授权股份，不应当作"资产"，其可实现的购买力远低于报价市值
- Q3 (中后25%): ForeFront 初始报价 $3mm FDV（50%折扣/spot）募资 $800k（金库的30%），1kx 认为这会损害项目，提供 $10mm 估值（最终因需求调至 $20mm），说明良好投资者会争取公平价格而非最低价
- Q4 (最后25%): Forefront 社区预留 20% 额度（200k $FF / 1M $FF），上限 $10k 最低 $5k；Index Coop 按过去 3 个月贡献者奖励确定资格，每人上限 $100k，与战略投资者同条款
- 图片: 0 analyzed / 1 decorative header skipped / 0 external URLs unavailable

## 核心要点
- DAO 金库高度集中于原生治理代币，面临波动性大、共识变化导致购买力消失、"反射性"价格下跌螺旋三重风险；部分多元化到稳定币是关键的抗风险策略
- OTC 场外交易是减持原生代币的最佳方式，最小化市场冲击，同时可通过锁仓/归属期绑定战略投资者
- 交易结构设计需平衡四重约束：募资额最大化 / 代币抛售量最小化 / 吸引最高质量投资者 / 快速完成
- 折扣与锁仓期必须对称设计：折扣补偿流动性风险，典型锁仓 1-2 年配合 20-30% 折扣
- 社区成员是最好的战略合作伙伴——应预留专属额度与战略投资者同条款参与
- 提案制治理和事先共识是交易的关键前置条件：Sushi Phantom Troupe 因没有事先达成共识而失败

## 关键数据
- ForeFront 初始报价：FDV $3mm（50% discount to spot），最终 $20mm 估值完成募资，因需求上调四倍
- 折扣范围：20-30% 折扣至 30 日 TWAP（Sushi 提案），6 个月 cliff + 18 个月线性归属
- Index Coop IIP-32：6 个月线性归属期 + 折扣市场价，贡献者每人上限 $100k
- Forefront 社区分配：200k $FF（总 1M $FF 的 20%），个人 $5k-$10k
- 典型的第一个多元化目标：募集足够 1-2 年运营支出的稳定币

## 与已有知识的关系
- 补充 [[dao]] — 此前的 DAO 页面聚焦于治理机制和工具生态，本素材补充了 DAO 金库管理的实操维度：金库多元化出售的结构设计、投资者选择、折扣与锁仓、社区分配、提案流程
- 补充 [[fundraising]] — 加密融资概念包含 ICO/VC/Fair Launch 等方式，本素材增加了 DAO 通过 OTC 出售原生代币换取稳定币这一特定融资场景的详细框架，填补了"DAO Treasury Sale"这一融资子类型的空白
- 补充 [[1kx]] — 1kx 实体页面记录其作为投资机构的论文发布和研究驱动风格，本素材提供了其实际交易案例（Index Coop 和 ForeFront 的 treasury sale），丰富了其投资实践记录
- 补充 [[index-coop]] — Index Coop 页面目前仅含杠杆比率代币产品介绍，本素材补充了其 IIP-32 treasury sale 的社区参与设计

## 值得记住的引用
> "Since DAO treasuries concentrated in the native token are naturally reflexive, stakeholder outlook can significantly alter treasury valuations. If an external event or negative future outlook drives a dislocation in price, the DAO will lose access to its purchasing power when it needs it most."

> "A simple goal for your first treasury diversification sale might be to raise enough stablecoins to adequately fund operational expenses for a 1-2 year period. This frees up resources to focus on the DAO's goals without having to be concerned with the ongoing pressure of funding operations."

> "We generally recommend giving more skin in the game to a few investors as opposed to a wider distribution that usually leads to investor apathy where no investor feels accountability towards the project."

## 我的笔记
这篇文章是少数系统性地总结 DAO 国库 OTC 出售实操经验的资料，作者 1kx 作为实际 lead 投资了两笔交易，所以建议有实际经验支撑，不是纯理论推演。2021 年的文章放在 2026 年看有些细节已过时（如 Sushi、Visor、Ribbon Treasury 等项目的后续发展），但其结构化框架——从 deal sizing、折扣设计、投资者选择到社区分配——仍然是 DAO 金库管理的基础文献。文章的盲点是假设 DAO 的代币有足够流动性支撑 OTC 折扣定价，对流动性严重不足的长尾 DAO 来说这个框架难以直接套用。另外它默认代币有价值（即有人愿意以折扣买锁仓代币），这在熊市中可能不成立。
