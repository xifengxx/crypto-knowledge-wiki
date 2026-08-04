---
type: entity
entity_type: project
created: 2026-07-02
updated: 2026-07-02
tags: [ai, infrastructure, gateway, open-source]
---

# Higress

## 基本信息
- 全称: Higress
- 类型: AI 原生 API 网关（开源）
- 所属: 阿里云（Alibaba Cloud）
- 技术基础: 基于 Envoy 代理构建
- 定位: 提供传统 API 网关能力（认证、授权、限流、可观测性）并针对 AI 场景优化
- 官网: https://higress.io / https://higress.ai

## 核心业务/产品
Higress 是阿里云开源的 AI 原生 API 网关，核心能力包括：

1. **传统 API 网关能力**：基于 Envoy 实现认证、授权、限流、可观测性等标准网关功能
2. **MCP Server 托管方案**：提供完整的 Remote MCP Server 一站式托管，包括会话保持、OAuth2 认证、审计日志、速率限制和 MCP 路由
3. **Wasm 插件机制**：支持通过 WebAssembly 插件扩展，提供 Go 语言 MCP Server SDK，插件在独立沙箱中运行，可热更新
4. **协议卸载**：在网关层屏蔽 MCP 协议版本差异，同时支持 MCP 20241105 和 20250326 版本
5. **MCP 市场**：计划提供社区版和企业版 MCP 市场，方便用户发现和使用 MCP Server

## MCP Server 的三种接入方式
1. **内置 MCP Server**：通过 Wasm 插件在 Higress 内部实现，适用于将现有 SaaS API 转化为 MCP 能力
2. **外部转发**：直接转发给外部已支持 MCP 协议的服务
3. **Nacos 动态发现**：通过服务注册中心动态发现外部 MCP Server，支持热更新工具定义

## 重要里程碑
- **2025 年 4 月**：Higress MCP 托管方案被 Anthropic 官方 MCP Server 项目文档收录
- **2025 年 4 月中旬**：计划在 higress.ai 上线公开 MCP 市场
- **自 2025 年**：阿里云 API 网关计划推出企业级 MCP 市场（99.99% SLA）

## 竞争优势
- 基于 Envoy 的成熟网关技术栈，在大规模生产环境中验证过
- 同时支持 HTTP/1.1、HTTP/2、WebSocket 等多种传输协议
- Wasm 沙箱隔离确保 MCP Server 故障不影响网关整体稳定性
- 支持弹性伸缩（Kubernetes 自动伸缩）、灰度发布、Helm Chart 一键部署

## 相关实体
- [[anthropic]] — Higress 的 MCP 托管方案被 Anthropic 官方文档收录
- [[openai]] — OpenAI 产品也将集成 MCP 协议，扩大 Higress MCP 托管的市场生态

## 来源
- [[来源_2025-04_Remote_MCP_Server_开源托管_Higress]]
