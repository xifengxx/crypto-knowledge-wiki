---
type: source
source_type: article
url: https://tengsthoughts.com/p/ctrl-altman-del-the-dawn-of-decentralised
date: 2023-11-25
ingested: 2026-07-02
---

# 去中心化人工智能的黎明：Bittensor（TAO）初探

## 阅读证据
- 总行数: 111
- Q1 (前25%): 作者以 Sam Altman 突然被 OpenAI 董事会解雇事件切入——"几乎被牛奶呛到"——认为 OpenAI 非营利控制营利实体的别扭公司结构暴露了中心化 AI 巨头的不透明性，"We, as everyday users, find ourselves on the outside looking in"
- Q3 (中后25%): TAO 代币经济模型完全仿照比特币：硬顶 2100 万枚、公平启动无 VC 分配、减半周期（首次减半在 2025 年），当日流通量 565 万枚、流通市值略超 $10 亿、每日新发行 7200 枚 TAO
- Q4 (最后25%): Bittensor 定位为"面向企业的 API 基础设施，而非终端消费者产品"——作者在收听 Delphi Digital 播客后的关键笔记："Bittensor is meant for businesses/apps to be built on top of it (via APIs), less so for the end consumer"
- 图片: 0 analyzed / 3 decorative skipped (推文截图/讽刺漫画/AI生成图) / 2 informative但从Substack CDN加载 (Revelo Intel架构图/Taostats仪表板)

## 核心要点
- Bittensor 是一个去中心化 AI 推理网络，不同于 Akash/Render 的"算力上游"定位，Bittensor 聚焦 AI 推理（下游），用代币激励让 AI 模型在链上提供生成服务
- 网络由矿工（提供 AI 模型）和验证者（评估输出质量、路由用户请求）两大角色构成，支持文本生成、图像创作、音乐等 27+ 个子网
- 矿工和验证者之间不仅做评估，还交换知识和共享参数，网络通过"专家混合（Mixture-of-Experts）"机制整合多个 AI 模型产生最优输出——这是 Bittensor 区别于简单算力出租的核心设计
- TAO 代币完全仿照比特币经济模型设计——作者认为这"说明团队的动机与当今 VC 驱动项目的团队截然不同"
- 文章写作时（2023.11）网络仅有约 5 万个活跃账户，文本生成子网（SN1）有约 40 个活跃验证者和 990+ 矿工——处于极早期
- 作者提出 Bittensor 的本质可能是"技术驱动的商业模式创新"而非纯技术突破：它让专有数据和 AI 模型可以在不开源的情况下被更广泛的受众使用

## 关键数据
- TAO 硬顶 2100 万枚，首发于 2025 年进行减半
- 写作时流通量 565 万 TAO，市值 $10 亿+，每日排放 7200 枚 TAO 分配给矿工和验证者
- 网络共 27+ 个子网，覆盖文本生成、图像创作、音乐制作等
- SN1（文本生成子网）有约 40 个活跃验证者和 990+ 矿工，全网约 5 万活跃账户
- TAO 公平启动，无 VC 分配——全部通过挖矿和验证获得

## 与已有知识的关系
- 补充 [[bittensor]] — 这是 Bittensor 最早的独立研究员分析之一（2023.11），提供了创始叙事：为什么以 Altman 被解雇事件为引子、为什么 TAO 仿照比特币经济模型、Bittensor 定位为"企业 API 基础设施"。与后来的 BlockBeats 分析不同，此时尚无 dTAO 提案、无 Meme 寄生现象、无散户参与困境——是更纯粹的早期愿景记录
- 补充 [[ai-crypto]] — 区分了去中心化 AI 的两条路径：上游（算力训练：Akash/Render）vs 下游（推理：Bittensor），并指出上游只是"卖铲子"——仅触及 AI x Crypto 的皮毛
- 补充 [[depin]] — Bittensor 在 DePIN 中的独特定位：不是出租闲置硬件（Render/io.net），而是用加密经济激励 AI 模型竞争和协作的网络

## 值得记住的引用
> "It's just like saying monkey JPEGs are the pinnacle of what NFTs can offer." — 作者认为把 AI x Crypto 等同于 Akash/Render 的 GPU 去中心化租赁，就像把 NFT 等同于猴子 JPEG 一样肤浅

> "Bittensor, however, might represent a shift in this paradigm. It's perhaps more fitting to call it a business model innovation enabled by technology, rather than a technological breakthrough." — 作者对 Bittensor 的本质定性

> "I can envision one future where Bittensor hosts thousands of specialized subnets tackling a spectrum of challenges, from environmental and healthcare issues to energy solutions." — 作者的远期愿景，远超文本/图像生成

## 我的笔记
Teng Yan 这篇文章最值得玩味的地方在于他专门提了一句"TAO 仿照比特币经济模型说明团队的动机与 VC 驱动项目截然不同"——这与他后来（2024.12）系统性分析 Crypto AI 的"市场规模 vs 时机"框架形成了有趣的对照。早期他更关注团队气味和哲学，后期转向行业结构分析。另外，他明确提出了"Bittensor 是面向企业 API 基础设施而非终端消费者"的定位，这与后来 Virtuals（做终端消费者 AI Agent）在同一赛道形成分叉——两条路线至今仍在各自演化。
