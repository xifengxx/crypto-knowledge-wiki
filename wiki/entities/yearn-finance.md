---
type: entity
entity_type: protocol
created: 2026-07-02
updated: 2026-07-02
tags: [defi, yield]
---

# Yearn Finance

## 基本信息
- 类型: protocol
- 定位: DeFi yield aggregator / 收益聚合器
- 创始人: Andre Cronje
- 代币: YFI（总供应量 30,000，完全 Fair Launch，无预挖/无 VC/无团队分配）
- 成立: 2020 年中
- 链: Ethereum（多链）

## 核心业务/产品

Yearn Finance 是 DeFi 领域最早的收益聚合协议，核心产品为 **yVaults**（收益金库）——自动化将用户存入的资产在不同 DeFi 协议间进行策略性配置，以获取最佳收益。

核心产品线：
- **yVaults**：自动执行收益策略，收取管理费 + 绩效费，用户无需手动操作即可获得最优 DeFi 收益
- **Earn**：自动将稳定币存入最高收益的借贷协议
- **Zaps**：一键完成多步 DeFi 操作（如存入、兑换、质押的组合）
- **Iron Bank**（已剥离）：无许可借贷市场

Yearn 在 DeFi 可组合性生态中扮演"收益层"角色——如 Bunni V2 利用 Uniswap V4 钩子架构，将不在当前价格区间的闲置流动性存入 Yearn 等协议产生额外利息收入，提高 LP 资本效率。

## 关键数据

- **YFI 代币发行**：2020 年 7 月通过完全 Fair Launch 发行，总量 30,000 枚，无预挖、无机构分配、无团队份额——这是 DeFi 史上最极端的 Fair Launch 案例之一
- **币安上架**：YFI 上线 Binance 被视作 DeFi Summer 叙事的关键里程碑事件，与 Compound 流动性挖矿、Big Data Protocol 峰值 $65 亿 TVL、基础设施爆发并列 DeFi Summer 泡沫-基础设施-新牛市的经典路径
- **Andre Cronje 后续项目**：AC 在 Yearn 之后创建了 [[solidly]]（ve(3,3) DEX 原型），Solidly 上线后 TVL 峰值达 $23 亿，但 2022 年 3 月 AC 宣布退出 DeFi 导致 TVL 几乎归零——成为 DeFi 史上最典型的"创始人单点风险"案例
- **巅峰 TVL**：约 $5-8B（2021 年，各 yVault 合计）
- **YFI 历史最高价**：约 $90,000（2021 年 11 月）

> 注：以上部分数据来自通用知识，具体链上指标需补充实时数据。

## 竞争优势 / 护城河

- **先发优势 + DeFi OG 品牌**：作为收益聚合赛道的开创者，Yearn 在 DeFi 早期建立了极强的品牌认知
- **Andre Cronje 个人品牌**：AC 被公认为 DeFi 领域最有影响力的开发者之一，其"建筑家"声誉（Yearn/Keep3r/Solidly）为协议带来极高的初始关注度和开发者社区
- **DeFi 可组合性深度整合**：Yearn 的 yVault 被多个协议集成作为收益层（如 Bunni V2 将闲置流动性存入 Yearn），形成生态嵌入
- **DeFi 联盟/并购整合**：Yearn 曾与 SushiSwap、Pickle Finance、Cream Finance、Akropolis、Cover Protocol 等形成"DeFi Alliance"，实现跨协议协同

## 风险 / 争议

- **创始人单点风险**：Andre Cronje 在 2022 年 3 月宣布退出 DeFi/加密行业，虽然后续回归，但这一事件严重影响了 Yearn 及相关项目（如 Solidly）的市场信心。YFI 代币从高点下跌超 90%。这是 DeFi 中最典型的"创始人依赖"风险案例
- **收益策略风险**：yVault 依赖底层协议的智能合约安全，历史上有多次因底层协议被攻击导致 vault 受损的事件
- **竞争加剧**：随着 Morpho、Instadapp、Zapper 等协议进入收益优化赛道，加上 LRT/LST 等新收益范式出现，Yearn 面临持续的竞争压力
- **叙事老化**：DeFi 焦点已从"收益聚合"转向 LSD/RWA/DeFAI 等新叙事，Yearn 需要找到新的增长引擎

## 相关实体
- [[andre-cronje]] — AC 是 Yearn 的创始人和 Builder
- [[flying-tulip]] — AC 最新全栈交易所项目，被描述为 Yearn 收益路由的制度化综合体
- [[solidly]] — Andre Cronje 后续创建的 ve(3,3) DEX，也是 AC 退出 DeFi 事件的直接受害者
- [[fantom]] — AC 深度参与的 L1，Fantom 基金会中 AC 担任董事
- [[aerodrome]] — ve(3,3) DEX 代表，其模型源于 AC 的 Solidly → Velodrome → Aerodrome 演化链
- [[keep3r]] — AC 创建的另一个 DeFi 协议
- [[uniswap]] — Yearn 在 Uniswap 上有大量流动性部署，Bunni V2 在 Uniswap V4 上集成 Yearn
- [[defi]] — Yearn 是 DeFi 收益聚合赛道的核心项目

## 来源
- [[来源_2023-12_铭文就是2023年DeFi_Summer]] — Yearn 上线 Binance 作为 DeFi Summer 叙事里程碑
- [[来源_2024-08_LP盈利_DEX存活_LVR_深潮TechFlow]] — Bunni V2 将闲置流动性存入 Yearn 作为收益层
- [[solidly]] — AC 后续项目和退出 DeFi 事件详情
- [[来源_2022-08_DAO补偿_Coordinape_Hedgey]] — 补充 Yearn 薪酬改革案例：从 YFI"不倾销"默契转向稳定币为主 + 折扣 YFI 购买选项（锁仓 1 个月至 4 年，锁仓越长折扣越大），4 级别贡献者分层的薪酬体系

