---
type: entity
entity_type: company
created: 2026-07-02
updated: 2026-07-02
tags: [ai, chip, compute, hardware]
aliases: [Cerebras Systems]
---

# Cerebras

## 基本信息
- **全称**: Cerebras Systems
- **类型**: AI芯片公司
- **成立时间**: 2015年
- **总部**: 美国加州桑尼韦尔 (Sunnyvale)
- **创始人**: Andrew Feldman (CEO), Sean Lie (CTO), Gary Lauterbach, Michael James, 等
- **融资**: 累计融资超过7.5亿美元，投资者包括Abu Dhabi Growth Fund（ADG）、Altimeter Capital、Benchmark Capital等
- **上市状态**: 2024年秘密提交IPO申请

## 核心业务/产品

### Wafer Scale Engine (WSE) 系列
Cerebras 的核心技术是**晶圆级引擎（Wafer Scale Engine）**，即在一块完整的12英寸晶圆上制造单芯片 AI 处理器，传统芯片设计将晶圆切割成多个 die，而 Cerebras 将整个晶圆作为一个巨型芯片使用。

- **WSE-1** (2019): 1.2万亿晶体管，400,000 AI 核心，TSMC 16nm
- **WSE-2** (2021): 2.6万亿晶体管，850,000 AI 核心，TSMC 7nm
- **WSE-3** (2024): 4万亿晶体管，900,000 AI 核心，TSMC 5nm

### CS-3 系统
搭载 WSE-3 处理器的 AI 计算系统。CS-3 的内存带宽达到 NVIDIA H100 的 **7000倍**，解决了生成式 AI 的内存带宽瓶颈。

### Cerebras Inference（2024年发布）
全球最快的 AI 推理方案，性能指标：
- **Llama 3.1 8B**: 1800 tokens/s
- **Llama 3.1 70B**: 450 tokens/s
- 速度号称是微软 Azure 等超大规模云中基于 NVIDIA GPU 推理方案的 **20倍**
- 定价远低于主流 GPU 云：**10美分/百万 token** 起，整体性价比高出100倍

提供三个层级：
1. **免费层**: 登录用户免费 API 访问
2. **开发者层**: 无服务器部署，Llama 3.1 8B 为 $0.10/百万 token，70B 为 $0.60/百万 token
3. **企业层**: 微调模型、定制 SLA、专属支持

### Andromeda 超算
Cerebras 搭建的 1350万核心 AI 超级计算机，由16台 CS-2 系统组成，专为大规模 AI 训练设计。

## 关键数据
1. **WSE-3 芯片规模**: 4万亿晶体管，900,000个AI核心，为世界上面积最大的单芯片（~46,225 mm²）
2. **推理速度**: Llama 3.1 70B 达 450 tokens/s，是 NVIDIA GPU 云端方案的 20 倍快
3. **累计融资**: 超过 $750M（约7.5亿美元），来自 ADG、Altimeter、Benchmark 等
4. **CS-3 内存带宽**: 是 NVIDIA H100 的 7000 倍
5. **定价优势**: 推理起售价 $0.10/百万 token，宣称性价比是 NVIDIA GPU 云方案的 100 倍
6. **AI数据中心芯片市场**: 2024年约780亿美元，预计2029年达1510亿美元（Omdia预测），Cerebras 作为挑战者可切入其中

## 竞争优势 / 护城河
- **晶圆级架构壁垒**: 无需将芯片切割再互联，单芯片内通信延迟极低、内存带宽极高，功耗效率也更优
- **训练+推理双场景覆盖**: 是目前极少数同时提供高速训练和推理的 AI 芯片方案之一
- **推理性能优势显著**: 在 Llama 3.1 系列模型上推理速度达 NVIDIA 方案的 20 倍，价格仅为其 1/100
- **技术路径差异化**: 不与 NVIDIA 在传统 GPU 领域正面竞争，而是以独特晶圆级方案切入高价值推理和训练场景
- **战略合作伙伴**: 与阿布扎比 G42 深度合作（G42 采购了大量 CS 系统），进入中东 AI 市场

## 风险 / 争议
- **软件生态薄弱**: CUDA 生态是 NVIDIA 的绝对护城河，Cerebras 的软件栈成熟度远不及 CUDA，开发者迁移成本高
- **单芯片良率挑战**: 晶圆级芯片的制造良率是硬件工程难题，虽然 Cerebras 设计了冗余结构来应对，但成本仍然极高
- **客户集中度**: 高度依赖少数大型客户（如 G42），客户多元化不足
- **IPO 不确定性**: 2024年秘密提交 IPO，但资本市场对 AI 芯片公司估值逻辑尚未稳定，上市时机和定价存在风险
- **AI 硬件竞争加剧**: NVIDIA 保持快速迭代，AMD MI 系列追赶，Groq/SambaNova 等也在推理领域竞争
- **市场增速放缓风险**: Omdia 预测 2026年后 AI 数据中心芯片市场增速将大幅放缓，从技术采用驱动转向应用需求驱动

## 相关实体
- [[nvidia]] — AI 芯片市场绝对龙头，Cerebras 直接竞争对手
- [[amd]] — AMD Instinct 系列 GPU，AI 芯片市场份额第二
- [[deepseek]] — AI 模型开发商，是推理服务的潜在客户
- [[openai]] — 大模型训练和推理的重要需求方

## 相关概念
- [[ai-suanli]] — AI 算力产业链，Cerebras 作为芯片挑战者的角色
- [[ai-crypto]] — 去中心化算力与中心化算力的关系

## 来源
- [[来源_2024-09_AI算力三大担忧_资本开支_回报率_国盛通信]] — 提及 Cerebras 推理方案的性能数据和定价
