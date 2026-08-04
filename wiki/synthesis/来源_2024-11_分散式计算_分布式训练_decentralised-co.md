---
type: source
source_type: article
url: https://www.decentralised.co/p/decentralised-compute
date: 2024-11
ingested: 2026-06-29
---

# 分散式计算和分布式训练：Crypto在AI基础设施中的真实位置

## 阅读证据
- 总行数: 402
- Q1 (前25%): 曼哈顿计划耗资近$2B（通胀调整$30B）、动用12万+人；阿波罗计划$28B（1960s，折合今日$300B）、40万+人参与，1966年峰值时NASA占美国联邦预算4.4%——文章以此类比当前ASI竞赛的规模和投入
- Q3 (中后25%): Nous Research的DisTrO项目成功训练1.2B参数Llama-2模型，实现857倍跨GPU带宽需求降低；Prime Intellect的OpenDiLoCo框架在两大洲三个国家间训练十亿参数模型，保持90-95%算力利用率
- Q4 (最后25%): io.net聚合30万+验证GPU，宣称比中心化云节省90%成本，日收入$25,000（年化$9M）；Aethir聚合4万+GPU（含4000+H100）；Exo Labs在4台M4 Pro Mac Mini上分布式运行70B模型
- 图片: 0张已分析 / ~20张装饰性/示意图跳过（Substack CDN外部URL不可获取）

## 核心要点
1. **ASI不会在去中心化网络上训练**：前沿模型需要10万+最新GPU集群、专用光纤连接、数亿美元级资本，只有Big Tech+头部neocloud能组装这种规模。即使算力足够，还需要专有数据和顶级AI研究人员——目前都集中在中心化实体手中。作者对此"99.99%确定"。
2. **去中心化训练的现实空间在中小模型**：DisTrO和OpenDiLoCo通过延迟同步（每500步才同步一次）和伪梯度共享（只传差异不传全量权重）降低了跨地域通信需求。INTELLECT-1是目前最大的去中心化训练实验（10B参数，20+全球GPU集群）。下一代GPU可能支持到100B参数级别的去中心化训练。
3. **推理是去中心化算力最清晰的产品-市场契合点**：推理需要广地域覆盖、高可用性、冗余部署——与GPU市场的天然优势（全球分布、多代GPU兼容、闲置算力）完美匹配。但目前行业内讨论最少，因为不如"10万GPU训神级模型"性感。
4. **Crypto的核心差异化是代币激励飞轮**：GPU市场是赢家通吃的网络效应生意。代币通胀奖励可以在冷启动阶段同时补贴供给方（GPU提供者）和需求方（AI开发者），通过动态乘数（地域/硬件类型/利用率分层）塑造供给侧行为。一旦网络效应建立，代币激励可以逐步退出。
5. **GPU市场的三种并行策略各有适用场景**：数据并行（多GPU各自持有完整模型副本，处理不同数据batch后同步平均权重）适用于数据中心间的"岛屿"级同步；张量并行（每层权重分布到多GPU，每步都通信）需要NVLink 400Gb/s低延迟连接；流水线并行（模型按层分配，数据顺序流经GPU）适用于连接同一数据中心内的8-GPU服务器。
6. **去中心化算力的终极价值是抗审查**：类比Bitcoin和稳定币——它们在"好时候"看起来不必要，但在金融危机/货币贬值时成为关键基础设施。当AI成为文明的底层操作系统，无需许可的算力获取将成为对抗数字霸权的必需品。

## 关键数据
- GPT-4训练：**1.8万亿参数**，120层，**25,000块A100 GPU**，耗时**3个月**，成本**$6000万+**
- NVIDIA B200 GPU：**2000亿晶体管**，**2,250 TFLOPS**（每秒2250万亿次并行计算），单价**$40,000**，单卡可容纳740B参数模型。NVIDIA股价5年涨**2500%**
- 下一代训练集群：**10万块B100/H100 GPU**，GPU资本支出超**$40亿**，总功耗**150MW**（相当于30万人口城市如新奥尔良/苏黎世）。2025年训练集群成本预计**$100亿+**，2027年**$1000亿+**
- 数据中心电力需求：预计到2030年消耗全球**4.5%**的发电量。长距离光纤往返延迟：美国东西海岸约**43ms**
- 云市场格局：AWS+Microsoft+Google+Oracle合计年收入约**$3000亿**，利润率30-40%
- Neocloud商业模式示例：3年合同锁定10,000块H100，月费$4000万，总保底收入$14.4亿——以此获取银行贷款（6%利率），基础设施投入$7亿，月利润$1000万
- 微调算力需求：小模型(1-7B)单GPU<12小时；中型(7-13B)2-4 GPU<36小时；大型(>30B)最多8 GPU<4天
- DisTrO带宽压缩：**857倍**降低跨GPU通信需求
- OpenDiLoCo算力利用率：**90-95%**跨国训练

## 与已有知识的关系
- 大幅补充 [[ai-crypto]] — 首次系统分解去中心化算力的训练/微调/推理三个工作负载，给出每个负载中心化vs去中心化的竞争力判断（训练×、微调△、推理✓）。明确了代币激励飞轮的具体设计参数（地域乘数/硬件类型乘数/利用率分层）
- 大幅补充 [[depin]] — GPU市场网络效应飞轮的冷启动机制、Burn-Mint Equilibrium在算力市场的具体体现。io.net/Aethir/Render/Akash的竞争定位
- 关联 [[bittensor]] — Nous Research在BitTensor上运行过LLM-ranking子网，Macrocosmos在BitTensor生态中使用类似DiLoCo算法训练模型
- 补充 [[ai-agents]] — AI Agent未来可能需要自主获取算力，去中心化算力网络是无人工干预的Agent-to-Infrastructure交互的自然基础设施

## 值得记住的引用
> "I am 99.99% certain that the training of ASI—or even the world's most powerful models—will not be trained on a decentralised compute project." — 作者对去中心化ASI训练的明确否定，但这是精准定位而非全盘否定

> "Decentralised compute isn't about offering cheaper GPUs or more flexible deployment options (though it must deliver both to succeed). It's about ensuring that access to artificial intelligence—humanity's most transformative technology—remains uncensorable and sovereign."

> "Crypto is by nature a defensive technology—innovations that seem unnecessary during good times but become essential during crises. The need for these solutions only becomes apparent when incumbent systems fail or reveal their true colours."

> "The race to artificial superintelligence might be beyond the reach of decentralised systems. But ensuring that the fruits of this intelligence remain accessible to all? That's a race worth running."

## 我的笔记
这篇文章是目前见过的对去中心化算力赛道最清醒、最诚实的分析。它避免了Crypto行业常见的"去中心化将颠覆一切"的夸大叙事，而是逐层拆解了GPU计算的物理约束（延迟、带宽、集群密度）和商业现实（资本集中度、数据垄断、人才集中）。最有价值的insight：去中心化算力的主战场不是训练而是推理——这恰恰是行业讨论最少的方向，因为不如"训AGI"性感。但推理市场随AI应用从研发走向生产将指数增长，且对去中心化网络的地理分布优势天然友好。

另一个值得标记的观点：去中心化算力与Bitcoin/稳定币的类比——都是"晴天修屋顶"的防御性技术。当前AI友好期（VC自由流动、价格竞争、限制稀少）不会永远持续。当AI成为社会基础设施后，算力获取的许可问题将变得尖锐。这个类比对理解DePIN叙事的长期价值至关重要，但需要更具体的催化剂时间线来验证。
