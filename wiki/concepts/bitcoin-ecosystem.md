---
type: concept
created: 2026-06-28
updated: 2026-07-02
tags: [bitcoin, ordinals, btc-l2, btns, broadcast-protocol, btcfi]
aliases: [BTC生态, 比特币生态]
---

# 比特币生态

## 一句话定义
在比特币主网之上构建的 DeFi、NFT、L2 和应用层。比特币从"数字黄金"向"可编程资产"演进。

## 主要赛道

| 赛道 | 代表项目/协议 | 说明 |
|------|------------|------|
| **Ordinals/BRC-20** | ORDI, SATS | 比特币 NFT 和代币标准。2023年5月已有四千多种BRC20代币被Mint（[[来源_2023-05_比特币NFT_BRC20_Ordinal_科普_TokenInsight]]）。SegWit（2017）提升区块容量至~2700笔交易，Taproot（2021）引入Schnorr签名和复杂脚本支持 |
| **Atomicals/ARC-20** | ATOM | 1 token = 1 sat UTXO绑定，PoW公平铸造（Bitwork Mining），无需链下索引器，技术上更符合比特币原教旨主义 |
| **Runes符文** | DOG, RSIC | Casey Rodarmor 开发的 UTXO 代币协议，比 BRC-20 更节省区块空间 |
| **BRC-420 / Bitmap** | 蓝盒子, Bitmap.land | 基于 Bitmap 位图理论的模块化递归铭文协议，支持复杂链上资产（游戏、元宇宙），Holder超25k超越The Sandbox |
| **BRC-100** | — | 扩展 BRC-20，引入去中心化计算和互操作性概念，支持 DeFi/SocialFi/GameFi 在 BTC L1 上开发 |
| **Taproot Assets** | TRICK, TREAT | Lightning Labs 开发，代币元数据写入 BTC 主网但转账通过闪电网络；非自由铸造（项目方预铸造分发） |
| **Nostr Assets** | NOSTR | 将 Taproot Assets 引入 Nostr 协议生态的开源协议，支持 Fair Mint 抽签发售 |
| **广播协议** | [[btns]] (BTNS-420), Stamp (SRC-20) | 广播信号+链下索引，不占用BTC区块存储。BTNS 由早期BTC开发者 @jdogresorg 创建（曾参与Stamp后独立），龙头代币 SAT（2.1万张，市值460万$） |
| **BTC L2** | Stacks, [[babylon]], Merlin, [[bevm]], [[corn]] | 比特币二层扩容，BEVM 以 BTC 为 Gas + EVM 兼容路线降低开发门槛；Corn 为以太坊 L2 但以 BTCN（BTC 映射）为原生 Gas |
| **BTC侧链/原生扩展** | Fractal Bitcoin (UniSat) | BTC核心代码+递归分层+PoW，30秒出块/20x吞吐。Binance+OKX投资 |
| **RGB/BitVM** | [[rgb-protocol]] | 比特币智能合约 |
| **再质押** | [[babylon]] | BTC 质押为 PoS 链提供安全 |
| **封装BTC** | cbBTC (Coinbase), WBTC (BitGo), tBTC (Threshold) | BTC跨链进入ETH/Base DeFi
| **BTC 流动性质押/收益** | [[solv-protocol]] (SolvBTC), [[babylon]], [[lombard]] (LBTC), [[bedrock-defi]] (uniBTC), [[pumpbtc]], [[lorenzo-protocol]] (stBTC), [[pstake-finance]] (yBTC), [[chakra]], [[satlayer]] (BVS), [[yield-basis]] | BTC 生息+跨链 DeFi 可组合性。Solv 定位「链上微策略」,25,000+ BTC 锁仓，SAL 质押抽象层。Babylon 第一阶段质押分布：Bedrock 297.8 BTC (30%) / Solv 250 BTC (25%) / Lorenzo 129.36 BTC (12.9%) / PumpBTC 118.43 BTC (11.8%)。Yield Basis 为 Curve 创始人推出，AMM 内嵌 AMM 机制最小化无常损失，历史模拟平均 20% APR

## BTC L2 五类技术方案

根据 YBB Capital 的分类，BTC 扩容方案可归为五大类（详见 [[来源_2024-01_BTC_L2_新形态_五类扩容方案_BlockBeats]]）：

| 类型 | 代表项目 | 验证机制 | 核心缺陷 |
|------|---------|---------|---------|
| **侧链** | Stacks, Liquid, RSK, Drivechain, BEVM | 独立共识+双向跨链桥，联盟多重签名 | 节点过少→中心化，不继承主链安全性 |
| **状态通道** | 闪电网络, Taproot Assets | 链下交易，仅关闭时上链 | 开发缓慢，通道复杂度高，接收方流动性问题 |
| **客户端验证** | [[rgb-protocol]] | 链下存储+链上承诺+客户端验证（一次性密封） | 开发数年进展缓慢，智能合约无法交互 |
| **铭文** | Ordinals(BRC-20), Atomicals(ARC-20) | 索引器提取 JSON，链下数据库记录余额 | 索引器中心化问题（曾导致交易所余额出错），占用主网空间 |
| **Rollup** | BitVM, B² Network, Bison | ZK/欺诈证明+挑战-响应，DA 刻录到铭文 | 主网无法验证 DA，无法完美复现 ETH Rollup 验证

### 第六类：广播协议（2024 年新赛道）
| 类型 | 代表项目 | 验证机制 | 核心缺陷 |
|------|---------|---------|---------|
| **广播协议** | [[btns]] (BTNS-420), Stamp (SRC-20) | 广播信号随BTC交易上链+链下索引器读取并锁定资产，不上链存储数据 | 团队/生态极小（单点风险），链下索引器中心化，尚未获得社区广泛认可 |

## 三阶段时间框架（Jademont 2023.12）

| 阶段 | 赛道 | 代表项目/协议 | 当前验证 |
|------|------|------------|---------|
| **短期** | BRC-20 铭文 | ORDI, SATS | 已退潮，万倍涨幅昙花一现 |
| **中期** | BTC Layer2 + Nostr/闪电网络 | Stacks, Lightning, [[babylon]], Merlin | L2 在 2024 爆发；Nostr 未成主叙事 |
| **长期** | 链下解决方案 | [[rgb-protocol]], BitVM | RGB 进展缓慢，BitVM 仍停留在概念阶段 |

## 核心叙事
- 比特币 $1 万亿+ 市值中沉睡的流动性 → 通过 L2/Ordinals/封装BTC 激活
- BTC ETF 通过后机构涌入 → BTC 生态需求增长
- Babylon 等协议让 BTC 持有者在不放弃托管权的情况下获得收益
- **Solv Protocol 的「Buy and Earn」范式**：将 BTC 从被动价值储存转变为主动金融引擎。链上已有 25,000+ BTC 获得收益，与 ETF/企业/国家储备相比排名第 5-7 位。SAL (Staking Abstraction Layer) 试图成为 BTC 质押的行业标准
- **cbBTC (2024.09)**：Coinbase推出封装BTC，980K+ BTC存量(~$57B)，次日市值$100M。与Aave/Curve/Uniswap等头部DeFi全面集成。风险：中心化托管+黑名单管理员（"央行比特币"争议）
- **BTC L2 vs ETH L2 估值差**：2023 年底 BTC L2 项目平均估值千万美元级，ETH L2 动辄十亿美元起步，存在 ~100 倍估值差距，以太坊 L2 团队因此转向比特币蓝海

## 相关概念
- [[ordinals]] — 比特币链上 NFT 协议，BTC 生态最核心的元协议之一
- [[layer2]] — BTC L2 与 ETH L2 本质上都是扩容方案，Stacks/Babylon vs Arbitrum/Optimism
- [[defi]] — BTCFi 是 DeFi 在比特币上的延伸
- [[stablecoins]] — 稳定币是 BTCFi 的基础交易对

## 区块空间经济学

比特币区块大小不是一个单纯的扩容问题，而是一个涉及热力学安全、验证去中心化和交易成本的三方权衡问题（详见 [[来源_2025-02_比特币_区块空间经济学_Lopp]]）：

- **金发姑娘问题**：区块太小则交易成本过高（迫使用户依赖托管方），区块太大则验证成本过高（降低全节点去中心化程度）。2017 年区块大小战争后，比特币处于"Goldilocks Zone"——1 MB/4 MWeight 区块限制使全节点数量可持续，同时允许费率市场形成
- **最大热力学安全需要满块**：矿工当前每区块收入约 30 万美元（含补贴），若完全依赖交易费，每笔交易需支付约 100 美元。区块空间稀缺是形成可持续费率市场的必要条件
- **9 个 BIP 全部被拒**：BIP100-109（2016-2017 年提出）包括矿工投票、每年 17.7% 增长、动态调整等方案，均未激活。作者 Lopp 认为 BIP-103（Pieter Wuille 的每年 17.7% 技术增长匹配方案）最具合理性，但带宽不是唯一约束
- **动态区块空间调整机制提议**：若连续调整周期内 >99% 区块空间被消耗则谨慎增加；低于 99% 则减少以维持费率市场。类比比特币已有的难度调整机制
- **主权使用下降信号**：Lopp 指出 BTC 价格 ATH 但内存池空空，说明主权自托管使用极低，大量需求通过 ETF 和大托管方进行

## BRC-20 交易基础设施
- [[btcbot]] — BTC 生态首个 Telegram 交易机器人（2023年12月上线），创新性提出 BRC-20 限价买单（行业首创）、多平台同时挂单（Unisat+OKX）、BTC Gas 滑点控制、AutoBoost 铭文加速（99% 成功率）

## 来源
- [[来源_2023-05_BRC20_玩转指南_BlockBeats]] — 2023年5月 BRC-20 早期实操教程：ORDI $1.2→$2.83、TVL $62M、Deploy/Mint/Transfer JSON 格式、Unisat 钱包买卖流程，记录参与比特币生态的实际操作门槛
- [[来源_2023-05_BRC20_闪电网络_RGB_扩容_ChainCatcher]] — 2023年5月BRC-20热潮引出的比特币扩容三路径科普：闪电网络（1.6万节点/7.3万通道/5376 BTC锁仓）、RGB协议（生态应用DIBA/Iris Wallet/Bitmask首次系统记录）、侧链（Stacks/OmniLayer/Liquid/RSK横向对比）
- [[来源_2023-11_铭文赛道全扫描_MT资本_BlockBeats]] — MT Capital 2023年11月铭文赛道全景扫描：SegWit/Taproot技术背景、Ordinals/BRC20、Atomicals/ARC20、Rune/PIPE、Bitmap/BRC420、BRC100、Taproot Assets/Nostr Assets、Ethscriptions/iERC20、多链铭文、矿工收益转型完整覆盖
- [[来源_2023-04_Ordinals_比特币NFT_铭文_BinanceAcademy]] — Binance Academy 对 Ordinals 协议的入门科普：顺序理论、6级稀有度系统参数、Taproot 作为技术前提（2021.11.14），截至2023年2月超10万次记录
- [[来源_2023-02_比特币铭文_Ordinals_Galaxy研究]] — Ordinals/铭文赛道的基础研究（2023.02），首次对 BTC NFT 市场做 TAM 建模（base $4.5bn），量化铭文对矿工经济（+6.1% 费收）、可替代性（仅 0.24%）和治理的影响
- [[来源_2023-12_以太坊铭文_ETHS_Ethscriptions_Facet_深潮TechFlow]] — ETHS 作为 Ordinals 铭文叙事在以太坊上的复刻实验，揭示铭文在已有智能合约平台上的技术冗余性
- [[来源_2024-01_BTC_L2_新形态_五类扩容方案_BlockBeats]] — YBB Capital 五类 BTC 扩容方案系统分类：侧链/状态通道/客户端验证/铭文/Rollup，含 SegWit+Taproot 升级背景、15 张架构图、BRC-20 $6.4 亿市值等数据
- [[来源_2024-09_cbBTC改变比特币DeFi地位]]
- [[来源_2023-11_ABCDE_BTC生态项目路演日_7个项目获投]]
- [[来源_2024-12_L2IV_Research_2025加密前景展望]]
- [[来源_2024-12_Bankless_2024年NFT十大亮点]]
- [[来源_2024-02_GSR数字资产参考包_Web3入门指南_BlockBeats]] — 比特币挖矿机制详解/2100万供应上限/减半周期/最大矿工排名
- [[来源_2024-12_比特币_10万美元_2万亿_16年_BlockBeats]] — 比特币16年完整历史：金融危机起源→暗网第一用例→区块战争/BCH分叉→中国矿业兴衰→机构化/ETF→特朗普政治合法化，2024年12月突破$100K
- [[来源_2024-12_比特币矿工_AI数据中心_Galaxy]] — 矿工向 AI/HPC 数据中心转型的逻辑：大型场址+已获批电力是 hyperscaler 最稀缺资源，估值套利 6-12x→20-25x EV/EBITDA，合格矿工转型将分流算力、减缓 hashrate 增长
- [[来源_2024-09_Fractal_Bitcoin_深度研究_RyzeLabs]] — Fractal Bitcoin 上线后深度研报（Ryze Labs/Odaily）：合并挖矿占BTC算力40%+、详细代币经济学（FB总量2.1亿/六大分配）、OP_CAT治理投票、6个生态资助项目、BTC devs 1,071 vs ETH 7,864的开发者差距量化
- [[来源_2024-01_HashKey_Capital_Web3投资赛道全解析_PANews]] — HashKey 2024年初 BTC 生态五线判断：侧链/L2/客户端验证(RGB+Taproot Assets)/闪电网络/BRC20+DLC，强调比特币非全局共享状态的根本差异（Ryze Labs/Odaily）：合并挖矿占BTC算力40%+、详细代币经济学（FB总量2.1亿/六大分配）、OP_CAT治理投票、6个生态资助项目、BTC devs 1,071 vs ETH 7,864的开发者差距量化
- [[来源_2023-05_币安研报_BTC生态_潜在机会]] — 币安研报系统性扫描 Ordinals 热潮前后的 BTC 生态全景：铭文累计费用超 150 BTC、L2 TVL 仅占 BTC 市值 0.06% 的早期数据、闪电网络/Stacks/RSK/Liquid/Rollkit L2 方案横向对比、社区"硬通货 vs 新用例"争论完整记录
- [[来源_2023-03_比特币NFT交易体验_OrdinalsWallet_MagicEden_BlockBeats]] — 2023年3月BTC NFT交易基础设施实操快照：PSBT无信任交易技术成熟、内置钱包（Ordinals Wallet）和外置钱包（Magic Eden+Hiro Wallet）两类市场范式、三个未解决的结构性问题（无智能合约/市场碎片化/数据缺失）
- [[来源_2023-Q3_比特币生态DApp盘点_DeFi_NFT_基础设施_钱包_BlockBeats]] — Q3 2023 比特币生态 DApp 完整横截面：DeFi（14个）/基础设施（15个）/NFT（17个）/钱包（8个）/其他（9个）共63个项目地毯式扫描，揭示 BTCFi 与 ETH DeFi 的技术路径根本差异（DLC/PSBT vs 智能合约）
- [[来源_2023-05_RGB_vs_Ordinals_Kernel_Ventures]] — Kernel Ventures 深度对比 Ordinals 与 RGB 协议：五分钟维度对比（安全/速度/隐私/费用/可扩展性），四种 BTC 智能合约方案总览（RGB/SegWit/闪电网络/侧链），RGB 生态 4 个早期项目盘点，Tether 从 OmniLayer 迁移 USDT 至 RGB 的标志性事件
- [[来源_2024-01_比特币_现货ETF通过_新篇章_BlockBeats]] — BTC 现货 ETF 获批：11 支 ETF 全名单、Galaxy 三年资金流入预测（$140/$270/$390 亿）、黄金 ETF 类比框架（8 个月盘整→10 年牛市）、8.8x 市场影响倍数
- [[来源_2024-01_比特币现货ETF_合规产品现状_DigiFT]] — ETF 获批前的合规产品格局：五大发行方 AUM 比较（Grayscale $333.7亿一家独大）、物理担保 vs 合成担保技术区分、GBTC 信托结构缺陷导致折溢价机制、ETN(债务工具)vs ETF vs 信托三种法律结构对比
- [[来源_2024-12_Solv_Protocol_链上微策略_BTC_生息_BlockBeats]] — Solv「链上微策略」：Buy and Earn 范式，25,000+ BTC 锁仓（BTC ETF 第 7/企业第 6/国家第 5），SAL 质押抽象层四角色架构，15 链 50+ 协议生态
- [[来源_2024-09_八大Babylon生态流动性质押协议_odaily]] — Babylon 生态八大 BTC LST 协议全景对比（2024.9）：Bedrock/Solv/Lorenzo/PumpBTC/pSTAKE/Lombard/Chakra/SatLayer，含主网第一阶段委托分布数据
- [[来源_2023-12_ORDI_比特币生态_BRC-20_L2_RGB_BlockBeats]] — Jademont 三阶段时间框架（短期 BRC-20 / 中期 L2+Nostr / 长期 RGB+BitVM）；BTC L2 vs ETH L2 100 倍估值差距；ORDI 13800 倍涨幅数据；RGB 作为终局最优方案的论证
- [[来源_2024-12_BTNS协议_BTNS420_代币铸造_CG]] — BTNS协议（广播型BTC元协议第六类方案）详解：广播信号+链下索引，零存储占用。创始人 @jdogresorg 曾参与Stamp后独立创建。龙头代币SAT（2.1万张，场外~220U，市值460万$）
- [[来源_2023-12_铭文狂热_BTC_L2_Tectum_BEVM]] — 2023 年底铭文狂热推动 BTC L2 叙事升温：STX 周涨幅 93.6%/Rif 38.7%；Tectum（SoftNote 票据系统，零费用即时转账）和 BEVM（EVM 兼容 BTC L2，BTC 为 Gas）两早期项目首次被系统报道，代表"体验优先于正统性"的设计理念
- [[来源_2024-08_Corn_BTCN_Gas_以太坊L2_深潮TechFlow]] — Corn 是以太坊 L2 赛道中首个以 BTCN（多方托管 BTC 映射代币）为原生 Gas 的项目，$6.7M 种子轮（Polychain + Binance Labs），采用 ve 双代币模型（$CORN/$popCORN）借鉴 Curve，提出 Crop Circle 生态为 BTC 持有者在以太坊 DeFi 中创造收益
- [[来源_2024-08_Babylon主网上线_BTCFi赛道再思考]] — Babylon 主网第一阶段 1000 BTC（1.27 万用户）上线即满 + BTCFi 赛道盘点（BounceBit/Solv/Yala）+ PoW+PoS 共享安全模型质疑（BTC 质押者未主动参与共识 → 安全传递链条断裂）
- [[来源_2024-08_BTC生态_重大变化_Odaily]] — 2024 年 8 月下旬 BTC 生态多协议同步成熟临界点：Fractal 主网即临（9月1日）/Babylon 质押开放（8月23日）/RGB 生态首次空投（Jerry's box）/闪电网络 Taproot Assets 稳定币落地（USDT-L/TA-USDT）/AVM Beta（8月15日）/符文交易占比 50%+ 确立主导地位
- [[来源_2024-08_Fractal_Bitcoin_深潮TechFlow_入门介绍]] — 深潮TechFlow/Dr.DODO 对 Fractal Bitcoin 的批判性入门科普，质疑"BTC 是否需要功能化公链"这一根本问题，指出此前 Merlin、B² 等 BTC L2 均未获真实玩家青睐，仅停留在空投挖矿阶段
- [[来源_2023-12_Nostr_Assets_Fair_Mint_复盘_BlockBeats]] — [[nostr-assets-protocol]] 2023年12月首次Fair Mint 实战复盘：BTC区块哈希抽奖的统计偏差（Taurus 4倍幸运/Sagittarius 2倍倒霉/300次不足收敛）、7200万双T投入+0.2-0.7 USDT价格周期、NOSTR场外4 USDT/枚、Fair Mint作为BTC生态Ordinals之外的替代发币路径
- [[来源_2024-02_Runes协议细节_Casey_Hellmoneypod]] — Casey 在 hellmoneypod 首次详述 Runes 技术细节：UTXO 原生模型、OP_Return 转账路由、蚀刻 Commit-Reveal 机制、名称渐进释放规则、前 10 个 Runes 硬编码 Open Mint 的公平发射设计
- [[来源_2024-04_Runes协议_技术实现_深蓝]] — 开发者深蓝基于 Go 语言自实现后的 Runes 技术详解：四大数据结构/基数-26 编码/TapScript Commitment/Commit-Reveal 6 区块间隔/Cenotaph 5 类错误处理/UNCOMMON•GOODS 系统符文
- [[来源_2024-02_比特币二层Layer2_基础知识体系_BlockBeats]] — 付少庆（SatoshiLab/万物岛）系统化BTC L2认知框架：三层路线（链式/分布式/中心化）、L1-L2连接技术、冯诺依曼结构类比区块链发展、已有+新兴L2项目全景。提出二层建设三大维度：增加容量、降低成本、定制特性
- [[来源_2024-02_Telegram_Bot赛道下_Banana_BonkBot_Unibot_BTCBot_BlockBeats]] — BTCBot.pro 深度分析：BRC-20 限价买单（行业首创）、AutoBoost 铭文加速（99%成功率）、自动燃料恢复退款机制、0.4%-1% 弹性费率结构
- [[来源_2024-01_比特币ETF预期_十大比特币生态项目_BlockBeats]] — 2024年1月9日ETF获批前夜的BTC生态横截面：STX/ALEX/T/ICP/BSV/RIF/BADGER/MUBI/BSSB/ORDI十个项目价格/市值/赛道全景，BTC当日突破$47,000
- [[来源_2021-11_DLC_谨慎日志合约_比特币隐形智能合约_btcstudy]] — DLC（Discreet Log Contracts）技术科普：Tadge Dryja 2017年发明，七步合约流程，使用断言机+适配器签名实现链上不可见的BTC条件支付。核心应用：美元远期合约、保险、预测市场。执行环境为MIT DCI的lit闪电网络实现
- [[来源_2024-03_Merlin_Chain五个生态项目_BlockBeats]] — Merlin Chain 五大核心生态项目（2024.3）：[[merlinswap]](DEX//$MP)、[[dragonverse-neo]](MOBOX 3D游戏/L3)、[[unicross]](BRC-20/Runes多协议铭刻+LaunchPad)、[[surf-protocol]](AMM衍生品/Binance MVB)、[[bitsmiley]](MakerDAO模式超额抵押稳定币)。展示了BTC L2在2024年Q1已形成DeFi+DEX+游戏+衍生品+稳定币的完整生态矩阵雏形
- [[来源_2024-09_OP_CAT_BIP347_比特币智能合约_ChainCatcher]] — OP_CAT（BIP347）软分叉提案：Fractal Bitcoin 实现 OP_CAT→FB 短期 3-4x，CAT20→Gas 5000+，闪电核心开发者（Tadge Dryja/Olaoluwa Osuntokun/Andrew Poelstra）集体站台，StarkWare $100 万研究基金，代表 BTC 脚本层原生智能合约的新路径
- [[来源_2024-10_共享比特币共识安全_BTC_Layer2困境_Web3CN]] — 共享共识安全框架：BTC L2必须共享BTC共识安全才能获用户信任；量化BTC L2 TVL(14.5亿) vs ETH L2 TVL(360亿)=1/30；BTC网络攻击成本(>2000亿) vs ETH(460亿)=4x+；闪电网络是唯一共享BTC共识安全的L2(5000 BTC无代币流通)
- [[来源_2024-02_BTC衍生协议_正统性_炒作分析]] — BTC 衍生协议的"正统性 vs 炒作潜力"评估框架：BTC Wizard 三原则为判断锚点（不修改网络/不扩容区块/不托管私钥）；ARC20 最去中心化、Taproot Assets 最中心化但凭 Lightning Labs 背书获正统光环；闪电网络正统性最高但用例仅限于支付；揭示"最正统协议缺乏炒作吸引力"的核心矛盾
- [[来源_2023-12_LD_Capital_BRC20基建盘点_BlockBeats]] — LD Capital 2023年末 BRC20 基建五大赛道全景盘点（DEX/借贷/稳定币/Launchpad/跨链共13个项目），PSBT (BIP 174) 为 BRC20 交易核心技术路径，BTC L1 借贷清算模块根本性瓶颈分析，BSSB/DAII 跨链借用ETH清算基础设施的混合架构
- [[来源_2023-04_Ordinals生态_项目介绍_知乎]] — 2023年4月（Ordinals上线~4个月）华语Ordinals OG撰写的BTC生态全景指南：钱包五选+市场三足鼎立+代打/Launchpad服务+分析工具四件套+早期NFT/BRC-20项目，记录了Ordinals从概念到具备完整工具链的过渡期生态状态
- [[来源_2024-04_RGB_RGB++协议设计_同构绑定_VICOINDAO]] — RGB++ 协议设计白皮书通俗解读：同构绑定机制、CKB/Cardano/Fuel 作为 BTC 验证层和 DA 层的角色、交易折叠降低使用成本、RGB（客户端验证/隐私）与 RGB++（乐观托管/DeFi 友好）的兼容切换关系
- [[来源_2023-05_Ordinals是什么_TokenInsight]] — TokenInsight 技术详解：铭文代码实现、Ordinal 理论先进先出追踪规则、早期生态快照与前景判断
- [[来源_2023-05_BTC_Ordinals生态_代币协议_全景指南]] — 2023年5月 BTC 代币协议全景对比，涵盖 7 种协议（BRC-20、ORC-20、BRC-721、SRC-20、ARC20、Rune/PIPE、Taproot Assets）的技术路径和去中心化程度评估，提供 BTC 生态"协议大爆发"时期的完整快照
- [[来源_2023-10_BitVM_比特币计算_图灵完备_BlockBeats]] — BitVM 白皮书发布（2023.10.9）时的三位资深开发者第一手评价
- [[来源_2024-04_NegentropyCapital为什么投资TaprootChain_BlockBeat]] — Negentropy Capital 领投 TaprootChain 的投资逻辑：OP-Rollup 防欺诈 vs POS/POA 侧链、Taproot Bridge（Schnorr+Tapscript+时间锁）去信任跨链、Taproot Exchange vs Nostr Assets 三大差异化对比、Waterdrip Capital 同时布局 TaprootChain 和 Merlin Chain（80% TVL）的多篮子策略：BobBodily 指出"更慢更贵更复杂但无需升级"、Sam Parker 论证比特币早已图灵完备、Eric Wall 警告矿工合谋攻击模型；白皮书 182 万浏览量创 BTC 生态最大热点之一
- [[来源_2023-06_Taproot_Assets_比特币本地代币_公众号]] — "本地代币（native）vs 客户端验证"二分框架：Taproot Assets安全性由矿工通过Taproot交易间接保护，客户端验证（BRC-20/Omni）将主链当"硬盘"且矿工不管数据死活；2014年OP_RETURN从80字节缩减至40字节的历史背景；Bitcoin Core开发者对Taproot Assets的支持态度；交易所集成Taproot Assets仅需Bitcoin Core+闪电网络
- [[来源_2024-12_MARA比特币持仓_近40亿美元_Bankless]] — MARA 40,435 BTC 持仓案例：矿企从"挖矿-卖出"模式转向可转债融资+HODL策略，揭示比特币挖矿行业的结构性转型
- [[来源_2025-07_特朗普_加密政策_Galaxy]] — Galaxy报告记录Trump行政令建立美国战略比特币储备（BTC-only）和数字资产库存（非BTC），政府BTC禁止出售；财政部和商务部需寻找"预算中性"的BTC增持策略；禁止CBDC创建
- [[来源_2025-02_比特币_区块空间经济学_Lopp]] — Jameson Lopp 对比特币区块空间经济学的系统论述：Goldilocks Zone、9 个 BIP 提案回顾、热力学安全与区块大小的硬权衡、动态区块空间调整机制提议、主权使用下降信号
- [[来源_2025-04_比特币生态_RWA赛道_Web3全景_PANews]] — Infinity Labs全景覆盖BTC生态：BRC20与Runes双雄争霸量化数据(BRC20 55%份额/Runes 3个月30%)、UTXO原生派vs EVM兼容派范式冲突、BitVM欺诈证明推动多链DeFi融合、BRC420模块化递归铭文(3链游TVL $8B)、Merlin Chain TVL $2.5B爆发样本、闪电网络节点6万/日交易$1.2B
- [[来源_2025-05_45家加密上市企业_深潮TechFlow]] — 24家上市比特币挖矿与硬件企业全景列表，包括Marathon、Riot、CleanSpark、Hut 8等头部矿商的最新运营数据和月涨幅；Strategy持有576,230枚BTC占全球近3%；Twenty One Capital（XXI）成立时持$3.6B BTC为第三大企业持有者
- [[来源_2025-02_比特币挖矿_力量_Grayscale]] — Grayscale Research首份比特币挖矿专题报告：挖矿经济学（765 EH/s哈希率/2024年$150亿收入/$34-59k生产成本）、攻击成本（$5-20bn/1h 51%攻击）、环境数据（0.2%全球电力/50-60%清洁能源）、AI/HPC转型（Core Scientific/CoreWeave $35亿合同）及电网稳定贡献
- [[来源_2025-06_链上鬼城_比特币网络活动_Glassnode]] — Glassnode Week 24 2025 揭示比特币"价格高、链上冷"的背离现象：非货币交易（Inscriptions/Runes）退潮是交易量萎缩的主因，矿工手续费收入降至日均$558K，活动向链下CEX大规模迁移
- [[来源_2023-05_聪时代_Ordinals_闪电网络_LKVenture]] — LK Venture 2023年5月研报，提出"聪计价时代"概念框架，记录Ordinals发布4个月（160万铭文）、BRC-20最初1个月（4473种代币/$4000万总市值）及闪电网络（1.6万节点/7.5万通道/5379 BTC锁仓）同期数据，覆盖Strike-Send Globally跨境汇款和Shopify商户支付两大商用场景
- [[来源_2023-05_BTC生态重点项目盘点_Biteye]] — Biteye 2023 年 5 月 BTC 生态全面盘点：Ordinals NFT 项目地板价清单、BRC-20/ORC-20/SRC-20/BRC-721 标准对比、L2/侧链（闪电网络/Stacks/RSK/Liquid）介绍、Stacks 早期 DeFi 生态（Alex/Arkadiko/MoneyOnChain）TVL 数据
- [[来源_2025-04_CoinGecko_Q1加密货币行业报告]] — 比特币主导地位在Q1升至59.1%（2021年初以来最高），山寨币（尤其ETH）受创更重；BTC价格ATH $106,182后收于$82,514（-11.8%），表现逊于黄金（+18.0%）但优于纳指（-10.3%）
- [[来源_2025-03_特朗普2.0_上任8周_加密监管_PANews]] — 补充美国战略比特币储备建立细节（2025年3月7日行政令），资金来源主要依赖刑事/民事资产没收所得
- [[来源_2023-05_比特币生态_项目工具_ODaily]] — 2023年5月比特币生态早期历史快照
- [[来源_2023-05_BTC_DeFi_ALEX_Arkadiko]] — 2023年5月 Stacks DeFi 微观切片：ALEX 占 Stacks 链 94.3% TVL（26.7M/28.31M），Arkadiko TVL 6.9M 超额抵押 STX 铸造 USDA，仅 7 个交易对和 3 种借贷资产，涵盖24个项目（钱包/市场/工具/DeFi/域名/DAO），记录了 Ordinals/BRC-20 热潮初期的项目全景，包括 btswap（首个BRC-20 DEX）、ALEX（Stacks DeFi）、BTCDomain（ZK域名）等
- [[来源_2025-03_YieldBasis_BTC收益层_BlockBeats]] — Yield Basis 作为新的 BTC 收益层 AMM 协议，Curve 创始人推出，以最小化无常损失为核心，历史模拟平均 20% APR
- [[来源_2023-05_比特币地址_隔离见证_转账手续费_知乎]] — 知乎科普三种比特币地址类型（1 传统 P2PKH / 3 P2SH + Nested SegWit / bc1 Native SegWit）的技术原理和手续费差异：bc1 比 1 节省 35%、比多签节省 70%；2023 年不足 1% BTC 存储在 bc1 地址中。此地址体系是比特币生态所有上层应用的基础设施前提
- [[来源_2025-06_Bitcoin2025_大会_拉斯维加斯_BlockBeats]] — Bitcoin 2025 大会信号：PSG 成为首个公开持有比特币的顶级足球俱乐部；Steak 'N Shake 接受 BTC 付款节省 50% 手续费；Square 在大会现场启动闪电网络支付试点；Tether 持有超 10 万 BTC 及 50 吨黄金；Cantor Fitzgerald 将推出黄金支持比特币基金
- [[来源_2018-10_囤比特币_基本价格模型_ahr999]] — ahr999从囤币者视角出发的比特币供需弹性理论，解释了减半行情的基本驱动力
