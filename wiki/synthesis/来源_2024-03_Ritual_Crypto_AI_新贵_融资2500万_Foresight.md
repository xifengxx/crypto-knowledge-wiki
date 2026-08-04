---
type: source
source_type: article
url: https://mirror.xyz/foresightnews.eth/VMuusyRHhntqKWlbrlNdpudQO8gwzkRIzRbz0TUJw-s
author: Karen (Foresight News)
date: 2024-03 (估算)
ingested: 2026-06-29
tags: [ai-crypto, ritual, ai-infrastructure, eigenlayer, zk, gpu]
---

## 阅读证据
- 总行数: 91
- Q1 (前25%): ChatGPT推动AI生态进化但面临挑战：数据隐私滥用/计算完整性/审查阻力/许可+中心化API/高计算成本/巨头垄断/AI治理和所有权。Ritual=AI开放/模块化/主权执行层→分布式节点网络+模型创建者→用户通过通用API访问任何模型+加密基础设施保证计算完整性+隐私
- Q3 (中后25%): Ritual两阶段路线图。第一阶段=Infernet(AI优化去中心化预言机网络/EVM兼容/智能合约通过Infernet节点链下请求计算→Infernet SDK将结果传回链上)。第二阶段=Ritual Chain(主权链+定制虚拟机+协处理器/ZK为可扩展性关键组件/未来几个月推出)
- Q4 (最后25%): EigenLayer合作=AI原生AVS(Ritual节点=EigenLayer运营商/重质押→经济安全+去中心化/Slash机制惩罚错误推理)。io.net合作=去中心化GPU堆栈为Ritual提供算力(节点客户端可通过io.net GPU本地访问/Ritual Chain推出后GPU节点可参与保护链+AI工作负载)
- 图片: 2张(Infernet架构图/EigenLayer集成图/均装饰性)

# Ritual：融资$25M的Crypto+AI新贵

## 核心要点
1. **Ritual = AI的开放/模块化/主权执行层**：分布式节点网络+模型创建者→用户通过通用API访问任何模型(LLM/经典ML)。加密infra保证计算完整性+隐私。解决AI四大痛点：数据隐私/计算完整性/审查阻力/巨头垄断
2. **顶级团队+顾问**：联创Niraj Pant(Polychain前GP/19岁加入/1个月后从UIUC退学)+Akilesh Potti(Polychain前合伙人/ML+HFT背景)。顾问=Illia Polosukhin(NEAR联创+Transformer论文Attention Is All You Need合著者)+Sreeram Kannan(EigenLayer创始人)+Arthur Hayes(BitMEX联创)
3. **两阶段产品路线**：(1)Infernet=AI优化的去中心化预言机网络(EVM兼容/节点链下计算+SDK回传链上)→已是可运行产品；(2)Ritual Chain=主权链+定制VM+协处理器(ZK验证计算)→更高级的AI原生应用
4. **EigenLayer+io.net双重合作**：(1)AI原生AVS→EigenLayer运营商注册为Ritual节点→重质押提供经济安全→Slash(罚没)机制惩罚错误推理；(2)io.net GPU→Ritual客户端可通过io.net GPU本地访问→运行GPU的节点可参与保护链+AI工作负载
5. **$25M融资+豪华投资阵容**：Archetype领投/Accomplice+Robot Ventures+dao5+Accel+Hypersphere参投。天使=Balaji Srinivasan(CB前CTO)+Keone Hon(Monad联创)+Calvin Liu(EigenLayer CSO)

## 关键数据
- 融资: $25M (2023年11月公布)
- 投资方: Archetype(领投)+Accomplice+Robot Ventures+dao5+Accel+Hypersphere
- 团队: 21名成员(来自Polychain/Microsoft AI/Facebook Novi/Diem/dYdX等)
- 顾问: Illia Polosukhin(NEAR/Transformer论文)/Sreeram Kannan(EigenLayer)/Arthur Hayes(BitMEX)
- 天使: Balaji Srinivasan/Keone Hon/Calvin Liu
- 产品: Infernet(已上线)+Ritual Chain(未来几个月)

## 与已有知识的关系
- 补充 [[ai-crypto]] — Ritual=AI×Crypto基础设施层(执行层+协处理器+ZK验证)
- 与 [[eigenlayer]] 关联 — AI原生AVS(EigenLayer上首批非金融类AVS用例)
- 与 [[bittensor]] 对比 — Bittensor=去中心化AI模型网络(底层)/Ritual=AI执行层+协处理器(中间层)
- 与 [[depin]] 关联 — 与io.net合作(GPU算力供给→AI推理需求)

## 值得记住的引用
> "Ritual希望融合密码学和AI的最佳原理和技术，创建一个能够开放且无需许可地创建、分发和改进AI模型的系统。"
> "Ritual支持将AI无缝集成到任何链上的应用或协议中，并且支持进行微调、货币化和执行推理。"

## 我的笔记
Ritual是2023-2024年Crypto+AI赛道中团队背景最顶级的项目之一。核心定位是"AI的中间件/执行层"——让任何链上应用都能调用AI模型推理。这个定位的聪明之处是：(1)不做模型训练(成本高/时间长)→只做推理验证(更轻量/更可验证)；(2)通过EigenLayer AVS获取经济安全(不需要自建验证者网络)；(3)通过io.net获取GPU算力(不需要自建硬件网络)。在技术架构上Ritual是"模块化AI"的典型案例：安全层(EigenLayer)+算力层(io.net)+执行层(Ritual Chain)+预言机层(Infernet)=完整AI×Crypto栈。核心风险：(1)是否有足够多的应用需要链上AI推理(ZK验证成本仍高)；(2)EigenLayer AVS的经济安全性是否足够(取决于ETH重质押量)；(3)与Bittensor/OpenAI等竞品的差异化能否持续。从叙事角度，Ritual+EigenLayer+io.net的组合是当前Crypto+AI最完整的infra叙事之一。
