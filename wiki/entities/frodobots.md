---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [ai-crypto, embodied-ai, depin, gamefi, data-collection]
---

# Frodobots

## 基本信息
- 类型：去中心化具身 AI 数据采集平台 / GameFi + 众源机器人
- 赛道：Embodied AI / DePIN / 数据众源
- 代币：暂无明确代币信息（积分和 NFT 激励模式）
- 状态：已运行，数据集已发布

## 核心业务/产品
Frodobots 将复杂且昂贵的真实世界 3D 数据采集众源化、游戏化。用户仅需最低 $149 的成本，即可远程驾驶搭载多种传感器的漫游车，在真实城市街道上采集数据，并在此过程中赚取积分、收集 NFT 并攀升排行榜。

### 漫游车传感器配置
- 摄像头（视觉输入）
- 麦克风（音频采集）
- 扬声器（人机交互）
- GPS（地理定位）
- 惯性传感器（运动捕捉）

### 数据采集机制
- 人类驾驶员通过远程操控漫游车在城市街头行驶
- 机器人在移动过程中采集视觉输入和操纵杆动作数据
- 数据构成真实世界的驾驶数据集，已分享在 HuggingFace 上
- 数据集名称：FrodoBots-2K
- 支持多种操作方式：控制器、键盘或游戏方向盘
- 用户通过完成驾驶任务赚取 FrodoBot Points（FBPs），积分与任务距离和难度相关

### 公会系统
- **Earth Rovers School**：FrodoBots 建立的类似"公会"的系统
- 允许新用户通过租用 Earth Rovers 来参与数据采集
- 降低了参与门槛，无需购买硬件即可加入

### AI vs 人类竞赛
- FrodoBots 已在多个城市进行测试
- 举办了 AI 与人类之间的导航能力竞赛
- 研究人员可在平台上部署 AI 导航模型进行测试

## 关键数据
- 最低参与成本：$149（可远程驾驶漫游车）
- 数据集已发布在 HuggingFace：FrodoBots-2K 数据集
- 数据应用方向：三维视觉研究、自动驾驶训练、机器人导航

## 竞争优势 / 护城河
- 解决真实 3D 数据稀缺问题：LLM 和二维视觉模型有 Web-scale 训练数据，但真实物理场景的 3D 数据采集成本极高（自动驾驶汽车/无人机大范围采集成本巨大）
- GameFi 激励降低采集成本：将数据采集变成游戏，用户主动付费参与（$149 最低门槛），而非项目方承担采集成本
- 数据众源化：区别于传统研究机构的高成本集中式采集，Frodobots 实现分布式大规模数据收集

## 解决的真实问题
作者（zagen 扎根）本职研究聚焦三维视觉，指出真实 3D 数据严重缺乏，尤其是室外真实场景。使用携带激光雷达等采集设备的自动驾驶汽车、无人机进行大范围数据采集成本极高。Frodobots 提供了一种众源化解决方案。

## 相关实体
- [[render-network]] — 去中心化 GPU 渲染/计算网络，同为 AI+Crypto 基础设施层
- [[hivemapper]] — 去中心化地图数据采集，类似的数据众源模式（行车记录仪采集地图数据）
- [[dimo]] — 去中心化车辆数据网络，类似的数据采集激励机制

## 来源
- [[来源_2025-04_Virtuals_Web3AI_DeFAI_深潮TechFlow]]
- chainofthought.xyz 研报：https://chainofthought.xyz/p/the-robot-are-coming-frodobots
- HuggingFace 数据集：https://huggingface.co/datasets/frodobots/FrodoBots-2K
- [[来源_2025-02_DePAI_Messari_深潮TechFlow]]
- [[来源_2025-03_DeSPIN_空间智能_8项目_深潮TechFlow]] — 补充Earth Rovers School公会系统、AI vs人类导航竞赛详情
