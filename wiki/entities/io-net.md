---
type: entity
entity_type: project
created: 2026-06-29
updated: 2026-07-01
tags: [ai-crypto, depin, compute, gpu-marketplace]
---

# io.net

## 基本信息
- 赛道: 去中心化GPU算力市场（DePIN + AI算力）
- 网络: Solana原生
- 成立/公开: 2024年6月上线Binance Launchpool（#55期）
- 融资: $3000万A轮（2024年3月），估值$10亿；由Hack VC领投，Multicoin Capital、6th Man Ventures、M13、Delphi Digital、Solana Labs、Aptos Labs、Foresight Ventures、Longhash、SevenX、ArkStream、Animoca Brands、Continue Capital、MH Ventures、OKX参投。个人投资者包括 Solana 创始人 Anatoly Yakovenko、Aptos 创始人 Mo Shaikh 和 Avery Ching、Animoca Brands 的 Yat Siu、Perlone Capital 的 Jin Kang

## 团队
- **Ahmad Shadid** — 创始人兼CEO，前 WhalesTrader 量化系统工程师
- **Tory Green** — COO，前 Hum Capital COO、Fox Mobile Group 企业发展与战略总监
- **Garrison Yang** — CSO兼CMO，前 Ava Labs 增长与战略副总裁，加州大学圣巴巴拉分校环境健康工程专业

## 核心业务/产品
去中心化GPU聚合市场，连接算力提供者和AI开发者：

### 六组件产品架构
1. **IO Cloud** — GPU云平台，宣称降低AI/ML项目成本高达90%，与IO SDK集成，支持RAY分布式计算框架，提供OpenAI ChatGPT插件私人访问权限
2. **IO Worker** — WebApp设备管理端，提供实时监控连接设备仪表板、设备详情分析（流量/连接状态/工作历史）、收益与奖励追踪（交易详情可在SOLSCAN上访问）、简化设备连接流程
3. **IO Explorer** — 网络透明性浏览器，提供供应/验证供应商/活跃硬件数量/实时市场定价洞察，集群页显示实时指标和预订详情，设备页显示公共详情和交易跟踪
4. **IO-SDK** — 基于Ray技术分支的分布式计算框架，支持多语言并行运行，兼容主流ML框架，七层多层架构（用户界面→安全层→API层→后端层→数据库层→任务层→基础设施层）
5. **IO Tunnels** — 反向隧道技术，从客户端创建到远程服务器的安全连接，绕过防火墙和NAT，IO Worker连接中间服务器，工程师通过io.net服务器连接到IO Workers
6. **IO Network** — 网状VPN架构，为antiMiner节点之间提供超低延迟通信，去中心化连通性、对节点故障具有强抗性、无单点故障

- **30万+验证GPU**已接入网络（后续数据更新）
- 同时支持训练和推理工作负载（workload-agnostic）
- 聚合企业级GPU供给，也包括来自Render Network和Filecoin的GPU
- 宣称比中心化云服务节省**90%成本**
- 2024年6月时间点：95,000+ GPU和1,000+ CPU已接入
- 日收入**$25,000**（年化约$9M，后续数据）
- 无需KYC，只需Solana钱包即可接入

## 代币经济（双代币系统）

### $IO 代币
- **最大供应量**: 8亿枚（固定）
- **初始流通**: 3亿枚
- **剩余释放**: 5亿枚，20年内按递减模型释放——第一年8%起始，每月减少1.02%（约年减少12%），按小时释放
- **代币分配**: 社区50%、研发与生态16%、初始核心贡献者11.3%、种子轮投资者12.5%、A轮投资者10.2%
- **减半机制**: 2024-2025年每年释放600万枚 → 2026-2027年减半至300万枚 → 2028-2029年再减半至150万枚
- **用途**: 支付计算资源租赁费、GPU提供者奖励、平台治理投票
- **销毁机制**: 用IOG网络收入购买并销毁$IO，销毁量根据$IO价格调整以产生通缩压力
- **支付费率**: 使用$IO支付免手续费，USDC支付收取2%

### $IOSD 稳定币
- 与美元1:1挂钩的稳定币，提供稳定的价值储存和交易媒介
- 用于支付平台费用以避免加密市场波动风险
- 注意：后续实际运营中 $IOSD 未突出落地，可能仅为白皮书设计

## 竞争定位
- 在AI-native GPU市场中属于早期领先者
- 与Aethir（4万+GPU，含4000+H100）形成竞争
- 也与传统GPU聚合器Vast.ai竞争，但多了代币激励层
- 同赛道项目：Golem（通用去中心化计算）、Render（去中心化渲染）、iExec RLC（去中心化计算市场）

## 五大挑战
1. **技术复杂性与用户采用** — 去中心化计算技术对非技术用户构成入门障碍，限制广泛采用
2. **网络安全和数据隐私** — 去中心化网络的开放性使其更容易受到网络攻击和数据泄露威胁
3. **性能和可靠性** — 不同地理位置和不同质量硬件资源之间的协调可能带来性能问题
4. **规模可扩展性** — 有效管理和扩展全球范围内分散资源是巨大的技术挑战
5. **竞争和市场接受度** — Golem、Render、iExec等竞品存在，需持续创新保持竞争力

## 相关实体
- [[aethir]] — 竞争对手，4万+GPU
- [[prime-intellect]] — 也提供GPU市场，但重心在训练框架
- [[render-network]] — GPU提供者之一（通过io.net市场）
- [[akash]] — GPU提供者之一（通过io.net市场）
- [[filecoin]] — GPU资源来源之一

## 来源
- [[来源_2024-06_io.net_去中心化GPU_Binance_Launchpool_链茶馆]] — 2024年6月Binance Launchpool上币前夕最系统的中文介绍：六组件产品架构（IO Cloud/Worker/Explorer/SDK/Tunnels/Network）、双代币经济模型完整参数、团队背景、$3000万A轮投资人全名单、五大挑战
- [[来源_2024-12_DePIN现在与未来_中间件_应用层_PANews]] — 详述产品架构；指出去中心化算力训练的NVLINK物理距离瓶颈迫使项目转向推理市场
- [[来源_2023-12_AI与加密交汇_潜力未发币项目_BlockBeats]] — 2023年底未发币阶段盘点：IO代币2230万总量/月分配50万/两年减半、三件套产品架构
- [[来源_2024-11_分散式计算_分布式训练_decentralised-co]]
- [[来源_2024_DePIN生态解密_WHAT-WHY-HOW]]
- [[来源_2024-10_DePIN经济模型_核心要素_PANews]] — 2%集群利用率数据，揭示供给和需求之间的gap
