---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [ai-crypto, trading, agent, defi, open-source]
aliases: [NOFX, tinkle-community/nofx, NOFX操作系统]
---

# NOFX（AI加密交易操作系统）

## 基本信息
- 类型: AI加密交易开源系统
- 赛道: AI Agent + 量化交易
- 协议: MIT License
- 代码仓库: https://github.com/tinkle-community/nofx
- 技术栈: 后端Go + 前端React+TypeScript
- 支持交易所: Binance Futures、Hyperliquid、Aster（通过Trader Interface可扩展）
- AI模型: DeepSeek（推荐首选）、Qwen、GPT-4o，或本地部署开源模型

## 核心业务/产品
NOFX是一个将大语言模型（DeepSeek、Qwen等）直接接入加密货币合约交易的完整系统。它不是传统的"量化交易框架"，而是一个让AI Agent自主分析市场、决策、执行并自我进化的操作系统级平台。

### 核心架构
1. **Trader Interface** — 统一交易所API抽象层，AI只需调用OpenLong/OpenShort等标准方法，不关心底层是CEX还是DEX
2. **AI决策引擎** — 给AI完整的"交易员视角"数据（价格序列、技术指标序列、持仓信息、账户状态），让AI自主判断市场形态，而非硬编码if-else规则
3. **自我进化机制** — 每次决策前复盘过去20次交易（胜率/夏普比率/币种表现），自动调整策略；夏普比率过低时强制暂停18分钟
4. **三层风控** — 决策前验证（杠杆上限/仓位上限/盈亏比≥1:3）、执行前反重复检查（防仓位叠加）、保证金红线（使用率>90%暂停开仓）
5. **多Agent竞赛模式** — 不同AI模型（Qwen vs DeepSeek）在同一市场对战，优胜劣汰
6. **决策日志系统** — 完整记录AI思维链(CoT)到JSON，每个决策文件包含完整Prompt、思维链、结构化决策、账户快照
7. **Web Dashboard** — React前端模拟币安暗色主题，实时展示权益曲线、持仓、AI决策日志和竞赛排名

### 关键设计理念
- **目标导向而非规则导向**: "最大化夏普比率"替代"当RSI<30时做多"
- **数据丰富度**: 给AI完整的价格/指标序列而非单点值，让AI自己判断趋势演变
- **历史反馈闭环**: 每次决策前"复盘"过往交易，像人类交易员一样"越做越聪明"

## 关键数据
- 单周期总响应时间: 3-6秒
- 资源消耗: ~80MB内存(Go)、~5-30% CPU、~10MB/天日志
- 候选币种: AI500算法评分Top20 + OI_Top持仓量Top20 双引擎合并
- 筛选门槛: OI价值≥15M USD（防流动性不足）
- 风控参数: 山寨币仓位≤1.5x净值、BTC/ETH≤10x净值、盈亏比≥1:3
- AI成本: DeepSeek $0.14/百万tokens，日均$10-20（每3分钟1次）
- 自我进化效果: 胜率40%→70%、夏普-0.6→1.2
- 杠杆配置: 子账户5x上限、主账户最高50x（可配置）

## 竞争优势/护城河
- 完整可运行的开源参考实现，5分钟即可启动
- Trader Interface跨交易所抽象层设计精良，可扩展至股票、期货、外汇
- Prompt Engineering水平高——以夏普比率为目标代替"赚钱"指令，体现对LLM能力边界的深刻理解
- 思维链完整记录使每笔交易可审计、可回溯，这在金融场景是关键合规需求

## 风险/争议
- AI成本对小资金用户(1000 USD以下)可能吃掉大部分利润
- 极端行情下（交易所宕机、流动性枯竭）仍无法止损
- 项目不支持历史回测，仅支持测试网实时模拟
- 现场案例描述可能经过美化，实际运行中的API超时、限频、AI幻觉等问题文章未充分讨论
- 仅支持加密货币合约，股票/期货/外汇支持仍在路线图中

## 部署方式
- Docker Compose一键启动（后端:8080/前端:3000/Nginx反向代理:80）
- PM2进程守护方案（可选）
- 开发环境无需Go/Node.js/TA-Lib依赖（Docker封装）

## 相关实体
- [[ai16z]] — AI Agent框架(ElizaOS)，与NOFX在AI自主交易方向上有交叉但架构不同
- [[hyperliquid]] — NOFX已支持的DEX交易所之一
- [[binance]] — NOFX的核心支持交易所（币安合约）
- [[openai]] — GPT-4o作为NOFX可选AI模型提供商
- [[ai-agents]] — NOFX是AI Agent在金融交易侧的完整实现案例

## 来源
- [[来源_2025-11_NOFX_AI加密交易系统_技术演进]]
