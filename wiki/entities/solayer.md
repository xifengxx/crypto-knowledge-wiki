---
type: entity
entity_type: protocol
created: 2026-06-29
updated: 2026-07-01
tags: [solana, restaking, defi, infrastructure, rwa, hardware]
---

# Solayer

## 基本信息
- 定位：Solana Restaking 协议 → 经三次叙事转型，现定位为硬件加速 SVM 区块链 + RWA 合成稳定币 + 加密支付卡的综合生态
- 创始人：Rachel Chu（前 Sushiswap 核心开发人员）、Jason Li（伯克利计算机科学专业，曾创建非托管 Web3 钱包 MPCVault）
- 成立时间：2024年
- 投资方：Polychain Capital 领投 $12M 种子轮（投后估值 $8000万）+ Binance Labs、Arthur Hayes 家族理财室 Maelstrom 参投；Pre-Seed 轮含 Solana 联创 Anatoly Yakovenko、Polygon 联创 Sandeep Nailwal 参投
- TVL 里程碑：$3.7亿（2025年1月），Solana TVL 排名第9，所有再质押协议中排名第6

## 叙事演变（一年三次转型）
1. **再质押协议（2024年8月主网上线）**：Solana 内源性 AVS，基于 swQoS 提供交易通过性租赁
2. **RWA 合成稳定币（2024年10月）**：推出 sUSD（Solayer USD），国债基础合成稳定币，市值约 $3000万
3. **硬件加速 SVM（2024年12月-2025年1月）**：提出 InfiniBand RDMA 硬件加速方案，目标 1M TPS、100Gbps 带宽

## 核心业务/产品
- **内源性 AVS（Endogenous AVS）**：为 Solana 内部 DApp 提供差异化的区块空间和交易优先级服务。与 Eigenlayer 的外源性 AVS 根本不同——Solayer 是"交易通过性租赁平台"，而 Eigenlayer 是"协议安全租赁平台"
- **技术基础：Solana swQoS**（stake-weighted Quality of Service，质押加权服务质量）：2024年4月客户端升级后正式生效，区块生产者依据质押金额确定交易优先级。质押全网 x% 的 SOL，最多可提交 x% 的交易。Solayer 的目标是成为 swQoS 事实上的基础设施
- **用户流程**：存入 SOL → 获得 sSOL（LST）→ 质押 SOL 获取基础收益 + 将 sSOL 委托给对交易通过率有需求的协议获取额外费用
- **高速公路类比**：Solayer 像高速公路协调系统——DApp（汽车）通过 Staking Tiers（不同车道）获得不同速度/拥堵程度的服务
- **用户收益**：Solana Staking Rewards + MEV 收入 + 可能的代币空投
- **Solayer USD（sUSD）**：合成稳定币，以国债为基础资产，与 Usual 的 USD0 模式类似，市值约 $3000万，Solana 生态第6，全网排名第46
- **硬件加速 SVM**：基于 InfiniBand RDMA（远程直接内存访问）技术，实现微秒级跨节点通信和"零拷贝"通信，极大降低 CPU 负载和通信延迟。该技术此前主要用于 HPC、AI/ML、金融和分布式存储领域，Solayer 为区块链领域首创应用
- **Solayer Emerald Metal Card**：与 Visa 合作的虚拟+实体借记卡，可在线和离线使用，参与社区发售用户有机会获得
- **LAYER 代币**：总量 10 亿枚，社区发售 3000 万枚，募资 $1050万，均价约 $0.35，隐含估值 $3.5亿，100% TGE 解锁

## 竞争优势 / 护城河
- 与 EigenLayer 差异化：EigenLayer 是外源性 AVS（对外卖安全服务），Solayer 是内源性 AVS（对内优化 Solana 生态）
- 目标客户是已有需求的 Solana DApp，采用门槛低，商业闭环更短
- 占据 Solana 基础设施生态位——类似以太坊的 EigenLayer 在模块化生态中的位置

## 竞争对比
### vs Jito Restaking
- Jito 更接近 EigenLayer 的外源性模式，为跨链桥/预言机/Rollup 提供经济安全服务
- Solayer 聚焦内源性，服务 Solana DApp 的区块空间需求

### vs Sanctum
- Sanctum 定位较小：Solana LST 流动性层，解决小 LST 流动性不足问题
- Solayer 叙事更宏大：协调 DApp-Validator-Restaker 三方

## 风险 / 争议
- 目前仅在第一阶段，长期能否扩展到外源性 AVS 未验证
- 依赖 Solana 生态繁荣度——如果 DApp 需求不足，"收费站"模式难以为继
- 与 Jito 的竞争格局尚未明朗
- **硬件加速技术风险**：InfiniBand RDMA 在区块链中为首创应用，技术可行性尚未验证，1M TPS 和 100Gbps 目标是否可实现存疑
- **叙事切换频率**：一年三次重大叙事转型，可能反映团队在寻找 PMF 而非深耕单一方向，存在"追风口"风险
- **100% TGE 解锁**：LAYER 社区发售代币 TGE 当天全部解锁，二级市场抛压显著

## 相关事件时间线
- 2024年：项目创立，Pre-Seed 轮（Anatoly Yakovenko、Sandeep Nailwal 参投）
- 2024年8月：主网上线，完成 $1200万种子轮（Polychain 领投，Binance Labs 参投），投后估值 $8000万
- 2024年10月：推出 sUSD 合成稳定币，切入 RWA 叙事
- 2024年12月：博客发文《软件扩展已达到极限 - 未来在于硬件扩展》，预告硬件加速方向
- 2025年1月7日：发布 2025 路线图，提出 InfiniBand RDMA 硬件加速 SVM，目标 1M TPS、100Gbps
- 2025年1月8日：宣布收购智能合约混合模糊器公司 Fuzzland
- 2025年1月9日：宣布与 Buidlpad 合作 LAYER 代币社区发售
- 2025年1月13日：Buidlpad 宣布因注册超预期 15 倍，发售延迟至 1月16日
- **2025年2月15日-16日：创始人Chaofan Shou追踪LIBRA Rug Pull事件** — Chaofan Shou在社交媒体上公开追查LIBRA代币背后团队，声称自己和Solayer工程师在LIBRA上亏损超200万美元，发布KIP Protocol核心成员名单，追踪发现LIBRA做市商关联MELANIA和ENRON代币内部人士及印度连环撤池诈骗者，并已报警处理。Chaofan Shou要求Kraken与Binance协助冻结相关资金

## 我的判断
Solayer 的内源性 AVS 模式商业闭环更短——直接服务 Solana 已有 DApp 的区块空间需求，相比 EigenLayer 需要培育 AVS 生态，Solayer 的客户获取成本更低。但天花板也可能更低：EigenLayer 可以服务所有需要经济安全的新协议，而 Solayer 受限于 Solana 生态边界。

2025年1月的新动态进一步复杂化了判断：团队展示了对市场叙事的精准把握能力（三次转型均踩中风口），运营执行力也较强（社区发售热度、Fuzzland 收购）。但真正的考验在于硬件加速技术的交付——InfiniBand RDMA 在区块链中为首创，技术风险极高。走了类似 Hyperliquid "先交付产品再交付技术"的路线，成败取决于何时将产品推向市场以及技术是否真正落地。

## 相关实体
- [[eigenlayer]] — 外源性 AVS vs 内源性 AVS，两种 Restaking 范式
- [[jito]] — Solana MEV + Restaking 竞争对手（待创建）
- [[solana]] — Solana 生态基础设施（待创建）

## 来源
- [[来源_2024_Solayer_Solana_Restaking商业分析]]
- [[来源_2024_Solayer_Restaking_好生意]]
- [[来源_2024-11_以太坊_Solana_Staking商业模式差异_MintVentures]]
- [[来源_2025-01_Solayer_社区发售_硬件加速_SVM_PANews]]
- [[来源_2025-02_Milei弹劾_LIBRA回购销毁_BlockBeats]] — 创始人Chaofan Shou追踪LIBRA rug pull事件，亏损超200万美元并"开盒"KIP Protocol团队
