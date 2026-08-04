---
type: source
source_type: article
url: https://blog.humanode.io/liveness-detection-solutions-a-comparison/
date: 2022-07-06
ingested: 2026-07-02
---

# 活体检测解决方案全景对比：PAD攻击分级、核心技术路线与全球供应商生态

## 阅读证据
- 总行数: 676
- Q1 (前25%): FaceTec 提出的 PAD（Presentation Attack Detection）五级攻击分类体系——Level 1 高分辨率照片/高清视频/纸质面具、Level 2 仿真娃娃/乳胶硅胶3D面具、Level 3 超逼真蜡头/3D面具、Level 4 生物识别模板篡改（解密编辑3D FaceMap注入合成数据）、Level 5 摄像头馈送接管（注入预录视频帧或 deepfake），而 ISO 30107-3 标准及 NIST/iBeta 实验室测试仅覆盖 Level 1-2
- Q3 (中后25%): iProov 的 "Genuine Presence Assurance"（真实在场保证）概念——验证用户是正确的人、真实的人、且正在此刻进行身份验证，区别于 Basic Face Verifier 仅使用 Liveness Assurance 技术的低频低风险交互场景
- Q4 (最后25%): SVORT 的匿名神经生物特征方案——在注册时通过旋转挑战创建面部的参数化 3D 模型，神经网络学会用密钥协调该模型，认证时完成数十亿可能组合的随机挑战；原始生物特征数据永不离设备，在 Secret Network 区块链的可信执行环境中执行活性检查
- 图片: 0 analyzed / 0 decorative skipped / 0 external URLs unavailable

## 核心要点
- 活体检测（Liveness Detection）是确保生物特征样本来自真人而非照片/面具/视频/假指纹等技术欺骗的关键安全功能，可应用于面部、指纹、手掌、语音乃至心跳等多种生物识别模态
- FaceTec 提出的五级 PAD 攻击分类框架将攻击从 Level 1（简单照片/视频）到 Level 5（摄像头注入/模板篡改）完整分级，远超出 ISO 30107-3 标准仅覆盖的 Level 1-2 范围
- 活体检测技术路线分为三大类：主动式（要求用户执行动作如眨眼/转头，如 Ariadnext 的运动分析）、被动式（无需用户操作，如 ID R&D 的单图像被动检测、iProov 的真实在场保证）、以及硬件辅助式（3D 传感/红外/深度摄像头，如 LIPS 的 3D AI 面部识别）
- 文章以 Humanode 博客视角，系统梳理了全球 20+ 活体检测提供商及其技术特点，涵盖面部/指纹/语音/心跳四种生物识别模态，以及各提供商的认证资质（NIST/iBeta/FIDO/ISO）
- ISO 30107-3 标准在攻击覆盖面上存在显著缺口——仅验证 Level 1-2 攻击（照片/视频/简单面具），而 Level 3-5（超逼真面具/模板篡改/摄像头注入）尚无标准化测试，目前仅 FaceTec 的 Spoof Bounty Program 可以覆盖
- 活体检测行业的两大趋势：向被动式无感检测演进（用户体验最优）、以及向隐私保护方向演进（SVORT/IDENTY 的设备端处理、Choch AI 的哈希化生物特征存储）

## 关键数据
- FaceTec 声称 3D 人脸匹配率 1280 万分之一 FAR @ < 1% FRR，以及 50 万分之一的 3D FaceMap-to-2D-photo-ID 匹配准确率
- FaceTec 2021 年活体检测收入增长 320%，月均处理 1500 万次验证
- ID R&D 的 IDLive Face 是世界上第一个单图像被动面部活体检测产品，同时是唯一符合 iBeta Level 1&2 ISO 30107-3 PAD 标准的产品；其 IDVoice 嵌入式算法实现 0.01% FAR 和低于 5% FRR
- Oz Forensics 的活性算法识别准确率：MIT LFW 测试 99.87%，NIST 2021 测试 99.9998%；识别时间缩短至 3 秒
- Shufti Pro 支持 3000+ 种身份证件和 150+ 语言，30-60 秒验证，准确率 98.67%
- IDEMIA 全球近 15,000 名员工，服务 180 个国家，其活体检测攻击表示分类错误率 (APCER) 为 0%
- iProov 赢得澳大利亚数字身份证生物特征活体检测合同；Ariadnext 与 IDnow 以 5000 万欧元合并生物识别产品组合
- Veriff B 轮融资 6900 万美元；ID R&D 被 Mitek 以 4900 万美元收购

## 与已有知识的关系
- 补充 [[decentralized-identity]] — 活体检测是 DID 体系中人机验证和安全身份锚定的关键基础设施，文章提供了完整的 PAD 攻击分级框架和全球供应商对比，填补了 DID 概念页中"生物特征活体检测如何保障数字身份可信"的细节空白
- 补充 [[worldcoin]] / [[world-network]] — Worldcoin 使用 IrisCode 虹膜生物特征验证"人类身份"，而本文系统介绍了主流面部活体检测技术路线的对比和局限，提供了更广泛的生物识别安全背景以理解 Worldcoin 的技术选择
- 补充 [[ubi]] — UBI 概念页中对比了生物识别路线（Worldcoin）与社交信任图谱路线（Circles），本文提供了活体检测行业的技术成熟度和攻击防御能力的全景数据，可用于评估生物识别 UBI 方案的技术安全性

## 值得记住的引用
> "生物特征活度是指使用计算机视觉技术来检测活的用户的实际存在，而不是照片或面具、视频或屏幕、假硅指纹或其他恶搞伪影等表示。"

> "FaceTec 率先在商业上可行的活体检测，并且是在 NIST/NVLAP 认证的演示攻击检测 (PAD) 测试中获得 1 级和 2 级认证的人脸验证器。FaceTec 还提供了一个易于使用的 IDV 仪表板来管理生物特征验证过程，包括 3D 人脸匹配到 2D 照片 ID、文档防篡改检查、用户年龄估计、重复检查和欺诈列表。"

> "ISO 30107-3 标准中缺少 PAD 3 级和 4 级和 5 级绕过，因此，所有相关的实验室测试，目前只有他们的 Spoof Bounty Program 可以解决这些问题。"

## 我的笔记
- 这篇文章本质上是 Humanode（一个基于生物特征的无密码区块链项目）的 SEO/品牌营销内容——通过撰写行业综述吸引 DID/生物识别领域的流量，同时巧妙地将自己的 PoB（Proof of Biometrics）共识放在活体检测大背景下赋以技术正当性。作为行业概览来说覆盖面好，但深度有限，大部分信息来自各公司官网和 Biometric Update 的新闻汇总。
- 最大的信息价值在于 FaceTec 的五级 PAD 分类框架和 ISO 30107-3 标准的覆盖缺口——这两个洞察直接影响到对生物特征身份验证安全性的判断：一家供应商即使通过了 iBeta Level 1&2 认证，也仅意味着能防御最基础的攻击手段（照片/视频/简单面具），对高级攻击（深度伪造注入/摄像头接管）完全没有测试保证。这提醒我们在评估 Worldcoin 等生物特征身份方案的安全边界时，不能只看认证标签，更要看具体的攻击面覆盖范围。
