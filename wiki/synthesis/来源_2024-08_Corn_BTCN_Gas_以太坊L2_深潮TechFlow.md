---
type: source
source_type: article
url: https://www.techflowpost.com/article/detail_19863.html
date: 2024-08-21
ingested: 2026-06-30
---

# 解读 Corn：第一个用比特币当 Gas 的以太坊 L2

## 阅读证据
- 总行数: 148
- Q1 (前25%): Corn 于 8 月 20 日宣布完成 $6.7M 种子轮融资，Polychain Capital 领投，Binance Labs、Framework Ventures、ABCDE、Symbolic Capital、HTX Ventures、Relayer Capital 参投，Polygon 和 Berachain 开发者以个人身份参与
- Q3 (中后25%): Corn 引入双代币系统 $CORN（基础代币，类似 CRV）和 $popCORN（治理代币，类似 veCRV），采用 vote-escrowed（ve）模型，锁定 $CORN 获得 $popCORN，锁定期越长权重越大，权重随时间衰减需定期重新锁定
- Q4 (最后25%): 8 月 21 日晚 11 点官方 X Space 披露空投细节，仅限过去 12 个月内使用过 Corn 合作 DeFi 协议的超级 DeFi 用户；Galxe 社媒活动 8 月 20-23 日进行
- 图片: 0 张本地分析 / 4 张外部 URL 不可用（upload.techflowpost.com）

## 核心要点
- Corn 是一个以太坊 L2，核心创新是将比特币（通过 BTCN 映射代币）作为网络原生 Gas 代币，这在 L2 赛道中属于首次
- BTCN 是通过多方托管 + 桥接机制铸造的 ERC-20 格式比特币映射，类似 wBTC 但采用多方托管以提高去中心化程度
- Corn 提出 "Crop Circle"（作物圈）生态系统概念：用户质押 BTCN 获得网络收益，参与流动性挖矿赚取额外收益，与现有以太坊 DeFi 协议（借贷/衍生品/收益聚合器）深度集成
- 双代币 ve 模型（$CORN + $popCORN）借鉴 Curve 的 veCRV 机制，创新性地内置了 Bribe Marketplace，正式化"贿赂"投票市场
- 项目处于早期阶段，白皮书未完全上线，测试网和代币均未正式上线
- 融资阵容豪华（Polychain + Binance Labs 双重背书），但技术细节（桥接机制、验证机制、多方托管实现）尚未公开

## 关键数据
- 种子轮融资额：$6.7M（670 万美元）
- 融资时间：2024 年 8 月 20 日
- 投资方：Polychain Capital（领投）+ Binance Labs、Framework Ventures、ABCDE、Symbolic Capital、HTX Ventures、Relayer Capital（跟投）
- BTCN 与原生 BTC 的锚定比例：1:1
- Galxe 社媒活动持续时间：8 月 20 日-23 日（4 天）
- 空投资格筛选范围：过去 12 个月内使用过 Corn 合作 DeFi 协议的超级 DeFi 用户

## 与已有知识的关系
- 补充 [[bitcoin-ecosystem]] — 在 BTC L2 分类中新增"以太坊 L2 + BTC 为 Gas"的子类别，区别于 BEVM（独立侧链以 BTC 为 Gas）和 Merlin（BTC L2），Corn 是以太坊生态内的 L2 但以 BTCN 为 Gas
- 补充 [[layer2]] — 以太坊 L2 赛道在 2024 年已极度拥挤（60+ 条链），Corn 以"BTC 作为 Gas"作为差异化切入点，试图同时捕获 ETH 生态的流动性和 BTC 持有者的资产需求
- 补充 [[tokenomics]] — ve 模型（Curve 首创）在 Corn 中的应用及其 Bribe Marketplace 创新，是 veTokenomics 在新项目中的演化案例
- 关联 [[curve]] — Corn 的代币经济模型直接借鉴 Curve 的 veCRV 机制（锁定→治理权重衰减→贿赂市场）
- 关联 [[berachain]] — Berachain 开发者以个人身份投资 Corn，两者在三代币/双代币模型上有思想交叉
- 关联 [[babylon]] — 两者都致力于为 BTC 持有者创造收益，但路径不同：Babylon 是 BTC 质押为 PoS 链提供安全，Corn 是在以太坊 L2 生态中为 BTC 创造 DeFi 收益

## 值得记住的引用
> "Corn 为比特币创造了新的价值捕获机会，使其不仅仅是一种存储价值的资产，还可以成为活跃的交易媒介。"（开篇核心主张）

> "之前无论是 wBTC 还是其他 DeFi，都是通过资产和应用的方式来做 BTC 收益的文章；基建类的 L2 把 BTC 映射的资产当 Gas 则还是头一回。"（差异化价值陈述）

> "Corn 网络引入了一种新的代币化比特币，称为 BTCN。这是 Corn 网络的原生 Gas 代币，用于支付网络交易费用。"（BTCN 的技术定位）

## 我的笔记
Corn 的叙事设计相当精巧：在以太坊 L2 已经卷到 60+ 条链的 2024 年，单纯再做一条 EVM L2 毫无意义。Corn 选择的差异化路径是"BTC 作为 Gas + 以太坊 DeFi 收益"，本质上是同时讨好两个阵营——BTC 持有者想要收益但不愿离开 BTC 生态，ETH DeFi 用户想要更多流动性和 BTC 作为抵押品的深度。问题在于：BTCN 的桥接机制完全未公开，多方托管的安全模型能否经受市场考验是最大不确定性——wBTC 的中心化托管争议（BitGo）已经证明这是一个雷区。此外，"BTC 当 Gas"在 BEVM 等项目上已有先例（尽管 BEVM 是独立侧链而非以太坊 L2），Corn 的差异化更多在于"ETH 生态内"而非技术首创。融资阵容确实豪华，但 Polychain + Binance Labs 的配合在 2024 年已成标配——不足以成为投资理由，需要等待白皮书和测试网数据验证。
