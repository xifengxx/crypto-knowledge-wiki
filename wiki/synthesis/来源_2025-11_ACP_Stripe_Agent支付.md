---
type: source
source_type: article
url: https://mp.weixin.qq.com/s/YsILMMbYO1p9cYDa65yerg
date: 2025-11-08
ingested: 2026-07-02
---

# Stripe 联手 OpenAI 推出 ACP（Agentic Commerce Protocol），重新定义 Agent 经济中的支付标准

## 阅读证据
- 总行数: 269
- Q1 (前25%): Stripe 最新估值达 1060 亿美元，每年处理约占全球 GDP 1.3% 的交易量
- Q3 (中后25%): Stripe 将盗刷检测率从约 59% 提升至 97%，决策延迟控制在 100 毫秒以内
- Q4 (最后25%): AI 公司达到 100 万/1000 万/3000 万美元 ARR 的速度比传统 SaaS 公司快两到三倍
- 图片: 0 analyzed / 8 decorative skipped / 11 external URLs unavailable（所有图片均为微信 CDN 外部链接，无法直接访问）

## 核心要点
- Stripe 与 OpenAI 于 2025 年 9 月联合推出 Agentic Commerce Protocol（ACP），这是一个面向 agent 经济的开放商业标准，定义了商家如何向 AI agent 展示商品、库存、品牌形象与定价策略。首批合作伙伴包括 Etsy、Shopify 商家（Glossier）、Salesforce、沃尔玛和山姆会员店。
- ACP 包含两大核心组件：共享支付令牌（Shared Payment Token）允许 agent 在不接触用户敏感支付凭证的情况下完成支付；欺诈检测机制通过风险评分区分"善意机器人"和"恶意机器人"，尤其针对票务囤货等新型滥用行为。
- Stripe 为 AI 公司推出 Token Billing（基于底层 LLM 推理成本的实时定价）和 Outcome-based Billing（按结果付费，如 Intercom 按成功解决的案例数收费）两种创新计费模式，帮助 AI 企业在模型成本波动中维持健康的单位经济效益。
- 稳定币支付在 AI 公司中快速采用：Shadertoy 案例显示 20% 交易来自稳定币，总收入提升 10%，其中一半为增量收入，交易成本仅 1.55%（vs 国际信用卡 4.5%）。稳定币和 Link 均带来网络效应。
- Stripe 内部 AI 应用深入：约 8,500 名员工（总数约 1 万）每天使用 AI 工具；LPM 团队将新支付方式集成时间从 2 个月缩短至 2 周；内部数据查询工具 Hubert 约 900 名员工每周使用。
- Emily Glassberg Sands（Stripe Head of Data & AI）认为 AI 公司具有高速增长、客户需求强、全球化速度快等特征，但推理成本是隐藏的关键支出，需基于模型成本持续下降的预期来评估公司价值。

## 关键数据
- Stripe 最新估值 1060 亿美元，每年处理约占全球 GDP 1.3% 的交易量
- 盗刷检测率从约 59% 提升至 97%，决策延迟 <100 毫秒
- 收入最高前 100 家 AI 公司成立第一年平均覆盖 55 个国家和地区，第二年扩展到 100 个以上
- Shadertoy 稳定币交易占比 20%，总收入提升 10%，交易成本 1.55%（vs 信用卡 4.5%）
- Link 用户突破 2 亿，Lovable 58% 交易量来自 Link
- Stripe 约 1 万员工中每天约 8,500 人使用 AI 工具
- LPM 团队集成新支付方式：从 2 个月缩短至 2 周
- 使用 Stripe 的企业平均增长速度是 S&P 500 企业的七倍
- 票务案例：约 3000 张门票面对 40 万人抢购，绝大多数为机器人
- Hubert 约 900 名员工每周使用

## 与已有知识的关系
- 补充 [[stripe]] — 新增 ACP 协议、Storage Balance、Token Billing、Emily Glassberg Sands 访谈等关键信息；估值从约 700 亿升至 1060 亿美元
- 补充 [[openai]] — 新增与 Stripe 联合推出 ACP、ChatGPT Instant Checkout 功能
- 补充 [[b2a]] — ACP 是 B2A（Business-to-Agent）框架中"AI 商业支付"层的具体实现协议，与 Nevermined 形成对照
- 补充 [[ai-agents]] — 新增 agent 作为"具备购买与支付能力的经济参与者"维度，呼应 B2A 框架的 Agent 经济参与者定位
- 补充 [[stablecoins]] — 新增 AI 公司采用稳定币支付的具体案例（Shadertoy：20% 交易、收入 +10%、成本 1.55%），验证 AI Agent 是稳定币下一个重要采用场景的论点
- 与 [[来源_2024-12_AI_稳定币_三阶段采用_Peter-Schroeder]] 的 Agent 三阶段采用框架（H2A/A2H/A2A）一致，ACP 在技术层面为 A2A 支付铺平道路

## 值得记住的引用
> "全球商业生态需要一个开放的共享标准，而这个标准不一定要贴上 Stripe 的名字，ACP 的使命在于促进整个互联网商业生态的增长，而非单纯服务于 Stripe 自身或局限于 Stripe 的支付体系。" — Emily Glassberg Sands, Stripe Head of Data & AI

> "欺诈不仅限于争议性扣款或未付款等问题，还包括扭曲市场公平、恶意囤货和资源滥用的行为。" — Emily Glassberg Sands，关于 ACP 欺诈检测机制的设计动机

> "随着推理成本在未来会显著降低，这些公司有望展现出更强的盈利能力和更具吸引力的经济模型。" — Emily Glassberg Sands，关于 AI 公司估值应基于模型成本下降预期

## 我的笔记
这篇文章基于对 Emily Glassberg Sands（Stripe Head of Data & AI）的访谈，内容覆盖面极广——从 ACP 协议设计哲学到内部 AI 工具使用、从稳定币支付到 AI 泡沫讨论——但每部分都较浅，更像是高层战略沟通而非深度技术分析。ACP 的定位是"协议而非产品"，这种战略选择既避免了与现有支付体系的直接绑定性，又让 Stripe 在 Agent 支付标准的制定中占据先发位置，是非常聪明的竞争姿势。Stripe 在 AI 时代的最大优势是其已经存在的商户网络和支付基础设施——它不是从零搭建 Agent 支付，而是将现有能力标准化输出给 Agent 生态。值得警惕的是，文章提到的 AI 公司高速增长数据（全球化速度 2 倍于 SaaS 等）来自 Stripe 平台上收入最高的 100 家公司，存在明显的幸存者偏差；AI 泡沫与否的讨论过于依赖 Stripe 自身的平台数据作为论据，说服力有限。
