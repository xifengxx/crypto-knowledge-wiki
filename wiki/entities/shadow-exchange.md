---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, dex, sonic, ve33, fantom]
---

# Shadow Exchange

## 基本信息
- **类型**: DEX（去中心化交易所）/ DeFi 协议
- **赛道**: DeFi / DEX / 流动性市场
- **链**: Sonic（原 Fantom）
- **上线时间**: 2024年12月
- **代币**: $SHADOW（原生代币，初始供应300万，最大供应1000万）、$xSHADOW（治理代币）、$x33（xShadow的流动性质押版本）
- **模型**: x(3,3) — ve(3,3)的进化版，由Andre Cronje参与推动

## 核心业务/产品

### x(3,3) 三层代币结构
- **Shadow**: 生态原生代币，交易和流动性挖矿效用，每个周期根据协议收入调整排放
- **xShadow**: 治理代币，通过质押Shadow获得，持有者可参与投票和获得收益
- **x33**: xShadow的流动性质押版本，可在Sonic DEX自由交易，具有自动复利功能，每周奖励自动增长

### x(3,3) 相较 ve(3,3) 的核心改进
1. **随时退出**: 立即退出罚没50%；90天分期退出按1:0.73转换；180天可1:1无损转换
2. **PVP Rebase**: 提前退出罚金按比例分配给其他xShadow质押者，形成反稀释机制
3. **治理与投票**: xShadow质押者每周通过Epoch投票决定流动性池代币奖励分配；项目方可通过贿选机制吸引投票
4. **x33流动性释放**: xShadow的LST版本，可在二级市场自由交易，用作借贷抵押品

### 流动性框架
- **传统流动性（V2）**: 基于Uniswap V2的恒定乘积池，覆盖整个价格区间，95%手续费分配给LP
- **集中流动性（V3）**: 基于Ramses V3 Core构建，类似Uniswap V3，允许集中流动性于指定价格区间

### 安全架构
- 基于Uniswap V3和Solidly模型，附带不可变智能合约设计
- 安全审计投入100万美元，通过Spearbit、Consensys Diligence、Code4rena、Zenith Mitigation、yAudit等多家机构审计

## 关键数据
- 总交易量突破100亿美元（截至2025年7月）
- 平均每天占Sonic总交易量46%，最高69%
- 80%的Sonic活跃用户使用Shadow
- 过去30天超过20万活跃地址
- 2025年2月: $SHADOW市值一周内从~500万美元暴增至3184万美元（涨幅超500%）
- 上线初期457个流动性池，7日交易量5.57亿美元，单日最高1.71亿美元
- 2025年2月21日24小时交易额达252,856,099美元（超越Hyperliquid当日）
- 累计3800+万美元手续费收益，1800+万美元平台收益
- Sonic平台上86%的收入来自Shadow
- 过去30天内为xSHADOW质押者和投票者分配204万美元
- 全球DeFi收入排名前十

## 竞争优势 / 护城河
- 占据Sonic生态绝对主导地位（86%收入、46%交易量、80%活跃用户）
- FeeM返佣机制：基于Sonic获得最高手续费（FeeM），返还90%Gas费用
- 智能费用架构：算法根据市场状况与交易量每30秒自动调整手续费
- 提前释放Sonic第二季空投50%预期奖励（300万枚$S）用于流动性激励

## 风险 / 争议
- Sonic生态依赖度高：Shadow的繁荣高度依赖Sonic链的整体发展，若Sonic增长放缓则直接受影响
- 文章调性偏正面宣传，数据依赖Messari和官方公布，需独立验证
- ve(3,3)系列模型本质上依赖通胀激励维持流动性，可持续性有待检验
- 竞争：面临Aerodrome（Base）、Thena（BNB Chain）等同类ve(3,3) DEX的跨链竞争

## 相关事件时间线
- 2024年12月: Shadow Exchange上线Sonic
- 2025年2月: $SHADOW市值一周内暴涨500%（~500万→3184万美元），457个池子，7日交易量5.57亿美元
- 2025年2月21日: 24小时交易额达2.52亿美元，超越Hyperliquid创历史新高
- 2025年7月: 总交易量突破100亿美元，宣布300万枚$S代币激励计划
- 2025年7月: 基于$x33的借贷市场上线

## 相关实体
- [[fantom]] — 构建的底层区块链Sonic（原Fantom）
- [[solidly]] — ve(3,3)模型的原创者，Shadow的x(3,3)的基础
- [[andre-cronje]] — Sonic生态和ve(3,3)的推动者
- [[aerodrome]] — Base链的ve(3,3) DEX，跨链对标项目
- [[thena]] — BNB Chain的ve(3,3) DEX，跨链对标项目
- [[velodrome]] — Optimism链的ve(3,3) DEX，同为Solidly分叉体系

## 来源
- [[来源_2025-07_Shadow_x33_Sonic_深潮TechFlow]]
- [[来源_2025-03_稳定币_耕作机会_HFA]] — Shadow Exchange 稳定币池具体收益率数据：USDC.e/scUSD 池 28.9%、USDC.e/USDT 池 35.3%；两个池均受益于 Sonic 大额空投激励活动
- [[来源_2025-02_Shadow暴涨_Sonic_深潮TechFlow]] — 早期报道：$SHADOW 一周涨超500%的爆发过程、Sonic 链 TVL 从零到 5 亿美元的冷启动数据
