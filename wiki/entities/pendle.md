---
type: entity
entity_type: protocol
created: 2026-06-29
updated: 2026-06-29
tags: [defi, yield, yield-trading, interest-rate]
---

# Pendle

## 基本信息
- 类型：DeFi 收益代币化协议 / 链上利率衍生品市场先行者
- 核心功能：将生息资产的收益权与本金分离，实现收益交易市场

## 核心业务/产品
- **PT (Principal Token)**：代表本金部分 → 到期时固定收益 → 锁定当前收益率
- **YT (Yield Token)**：代表未来收益权 → 到期前所有收益归持有者 → 可交易/投机未来收益率变化
- **LP Pool**：为 PT/YT 池提供流动性 → 赚取交易费 + Pendle 代币 + 底层协议积分
- **典型用例**：sUSDe 的收益代币化 → PT-sUSDe（固定收益）/ YT-sUSDe（未来收益投机）

## 关键数据（2024年8月更新）
- 2023年Q4流通PE达555 → 2024年H1大幅回落至77.9 → 近期回升至180附近
- 累计收入约$1200万，但收入增速自7月以来明显放缓
- 收入分配：20%归LP，其余分配给$vePENDLE持有者
- vePENDLE基础APY仅0.8%-2.5%（极不稳定），最大APY波动在25%-150%之间

## TVL腰斩事件（2024年6月底）
Pendle TVL在四天内从$66亿（6月27日）暴跌至$39亿（7月1日）：
- 6月28日有$13亿eETH（Ether.fi的LST）和$7亿WETH流出
- 当前仅剩$4.45亿eETH
- 触发因素：多个LRT协议空投结束 + Pendle上多个金融产品到期到期
- 核心问题：Pendle高度依赖LRT协议（Etherfi/Ethena/Renzo等）的空投激励和积分乘数（2-4.5倍）

### 稳定币池收益策略（JacobZhao 2025.04）
Pendle的稳定币池通常包含五种收益来源叠加：
1. **原生资产收益** — 底层资产自身的利息/质押收益
2. **YT投机收益** — YT持有者押注未来收益率上升的价差收益
3. **LP交易费** — 为PT/YT池提供流动性赚取的AMM交易费
4. **Pendle代币激励** — PENDLE代币作为LP奖励
5. **积分奖励** — 底层协议的积分活动加成

注意：高收益池多为中短期限，不像质押/流动性挖矿/借贷池可一次部署长期运作，需频繁链上操作切换池子。

来源：[[来源_2025-04_稳定币_收益策略_综合指南_Mirror]]

## 竞争优势 / 护城河
- **收益交易市场先行者**：创建了 DeFi 中第一个利率衍生品市场
- **可组合性核心**：PT/YT 可被其他 DeFi 协议（Aave 等）作为抵押品
- **多协议飞轮**：Pendle × Aave × Ethena → 三层嵌套收益（借 USDC → 买 PT → Pendle LP）

## 风险 / 争议
- 收益代币化复杂度高 → 普通用户理解门槛
- 依赖底层收益协议的可持续性（如 Ethena 的资金费率、LRT空投积分）
- LRT繁荣的昙花一现风险：新进流动性不足背景下，2024 Q1的繁荣难以持续
- 需要选择新的增长渠道，利用好在利率衍生品赛道的领跑优势

## 相关实体
- [[ethena]] — sUSDe 是 Pendle 最大收益源之一
- [[aave]] — 借贷 + Pendle 嵌套收益策略
- [[lido]] — stETH等LST资产的收益代币化

## 来源
- [[来源_2023-08_RWA实现路径_OffChain-OnChain_美债代币化]] — RWA+DeFi类比LSD-Fi：Pendle的PT/YT拆分模式可应用于RWA生息资产，为RWA+利率衍生品提供路线图
- [[来源_2024-12_Opyn_DeFi碎片化_借贷市场X收益生成协议]]
- [[来源_2024-08_DeFi_PE市盈率_估值分析_BlockBeats]]
- [[来源_2024-10_Delta中性_收益套利_永续合约_MarsBit]] — PT代币作为收益套利多头端的首选工具：PT-LBTC (Corn) 84天固定7.51% APY、ETH PT牛市场景固定收益 >25%、PT-ENA近40%固定APY；PT固定收益明显高于Aave等借贷平台
- [[来源_2025-08_美国政策_加密利好_BlockBeats]] — Pendle "Project Boros"将收益交易市场拓展至永续合约资金费率（Funding Rate），让机构可在链上对冲Binance合约费率风险；Ethena-Pendle-Aave构成"泡沫TVL铁三角"（1美元循环贷变30美元TVL）
- [[来源_2025-03_YieldBasis_BTC收益层_BlockBeats]] — Yield Basis可与Pendle合作生成BTC真实收益的代币化，扩展收益来源
