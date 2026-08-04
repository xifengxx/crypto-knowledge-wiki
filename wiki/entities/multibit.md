---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [bitcoin, cross-chain, brc20, bridge, evm]
---

# Multibit (MUBI)

## 基本信息
- 类型: BRC20资产跨链桥接协议
- 成立: 2023年5月
- 代币: MUBI
- 定位: 将BRC20资产连接至EVM网络，允许用户在ETH链、BNB链和BTC网络之间无缝转移代币

## 核心机制
1. 用户将BRC20代币转移到专用BRC20地址
2. Multibit协议确认后在以太坊或BNB链上铸造等量代币
3. Multibit从所有分发的唯一地址中收集代币并转移至统一冷钱包
4. 提取时，Multibit从EVM链销毁相应数量代币，从冷钱包转回等值代币给用户

## 融资与IDO
- 2023年11月12日: 在拍卖平台Bounce Finance完成IDO，募资88枚ETH
- 2023年11月4日: 在比特币捐赠平台TurtSat以相同单价完成IDO，募资4.64枚BTC
- 两次总计募资约$35万
- 在 Bounce 和 Turtsat 进行双平台 IDO，支持 BSC 和 Polygon 网络跨链

## 关键数据
- 代币总供应: 901,224,547枚MUBI（已全流通）
- 2024年1月9日价格: $0.1708
- 2024年1月9日市值: $1.62亿
- 24h/7d/30d涨幅: 29.4%/-24.7%/143.5%

## 风险 / 争议
- 统一冷钱包模式存在单点故障/rug风险
- BRC20市场退潮后将直接影响协议使用量
- 融资仅$35万——团队资金储备极薄
- 7d跌幅-24.7%说明短期炒作后资金快速出逃

## 相关实体
- [[ordinals]] — 底层BRC20协议
- [[bitcoin]] — 跨链资产来源链
- [[bounce-finance]] — IDO平台（Bounce Finance）
- [[turtsat]] — IDO平台（TurtSat）

## 来源
- [[来源_2024-01_比特币ETF预期_十大比特币生态项目_BlockBeats]] — 2024年1月项目详情：BRC20↔EVM桥、两次IDO共募$35万、总供应9.01亿全流通
- [[来源_2023-12_LD_Capital_BRC20基建盘点_BlockBeats]] — LD Capital 基建盘点：Bounce 和 Turtsat 双平台 IDO，BSC/Polygon 跨链支持
