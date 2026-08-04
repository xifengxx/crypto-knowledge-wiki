---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, yield, curve, tokenomics]
---

# Convex Finance

## 基本信息
- 类型: DeFi 收益聚合器 / veCRV 代币化协议
- 代币: $CVX
- 最大供应量: 100,000,000 CVX
- 核心逻辑: 用户在Convex上质押CRV获得cvxCRV（流动性质押凭证），Convex通过集中CRV的veCRV投票权参与Curve治理和收益分配
- 成立时间: 2021年（Curve War时期）

## 核心业务/产品
- **CRV质押池**：用户将CRV存入Convex获得cvxCRV，享受更高的CRV质押收益
- **cvxCRV**：流动性质押衍生品，可在二级市场交易
- **CVX代币排放机制**：CVX排放量取决于Convex平台赚取的CRV数量，CRV收益越高CVX排放越多；CVX:CRV铸造比率持续下降，直至达到1亿CVX流通上限
- **投票权市场**：通过Convex集中veCRV来控制Curve流动性排放方向

## 关键数据
- CVX通胀率：持续下降（因CVX:CRV铸造比率不断降低，直到1亿枚CVX全部流通后停止排放）
- 锁仓机制：用户主动选择锁仓CVX获取奖励，锁仓周期为17周（加锁后约4个月解锁）
- 首批锁仓事件：2021年9月大量CVX持有者锁仓 → 2022年1月（17周后）批量解锁，与价格下跌走势高度吻合

## 竞争优势 / 护城河
- 作为Curve War的核心参与者，Convex控制了Curve大部分的veCRV投票权
- cvxCRV为CRV质押者解决了流动性问题——不需要锁定CRV即可获得收益
- 投票权集中化降低了Curve Wars中的参与门槛，但也带来了治理中心化的风险

## 风险 / 争议
- **批量解锁风险**：锁仓周期固定的设计导致大量代币同时解锁，造成可预测的卖压。2022年1月的批量解锁事件后CVX价格显著下跌，显示锁仓机制设计中的时间聚集风险
- 依赖Curve生态：Convex的核心价值来源于Curve的veTokenomics，Curve生态衰退直接影响Convex
- 治理中心化：Convex集中的投票权可能违背Curve的去中心化治理初衷

## 相关事件时间线
- 2021年9月: Convex锁仓功能上线，大量CVX持有者锁仓
- 2022年1月: 首批17周后批量解锁，CVX价格承压
- 2022年3月: Nat Eliason在Tokenomics 102中将Convex作为锁仓/解锁分析案例

## 相关实体
- [[curve]] — Convex的核心依赖协议，CVX排放与CRV收益挂钩
- [[crypto-raiders]] — 同样被Nat Eliason在代币供应分析中引用的项目

## 来源
- [[来源_2022-03_代币供应量_流通估值_排放_NatEliason]]
