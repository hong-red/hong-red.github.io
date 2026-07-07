# 小世界·记忆 - AI 伴侣

![AI](https://img.shields.io/badge/AI-Moonshot-blue.svg)
![PWA](https://img.shields.io/badge/PWA-支持-green.svg)
![响应式](https://img.shields.io/badge/响应式-设计-orange.svg)

**项目地址**：[https://github.com/hong-red/memory-ai-companion](https://github.com/hong-red/memory-ai-companion)
**PWA版本**：[https://hong-red.github.io/memory-ai-companion/](https://hong-red.github.io/memory-ai-companion/)
**完整版本**：[http://81.70.191.44:3000](http://81.70.191.44:3000)

## 项目概述

小世界记忆是一款基于 AI 技术的记忆陪伴应用，通过智能对话与情感交互为用户提供温暖的陪伴体验。强调"记忆"的延续性，记录与用户的交互历史，在后续对话中引用过往交流内容，营造出"被记住"的亲密感。

## 项目分支

- **main 分支**：纯前端 PWA 版本，数据存储在 LocalStorage，适合快速体验
- **master 分支**：前后端完整版本，支持数据持久化和多设备同步

## 主要功能

- **智能对话**：基于 Moonshot AI API，支持自定义角色性格和系统提示词
- **个性角色**：内置角色 + 自定义角色（4种快速模板），支持专属头像
- **智能日记**：手动记录 + AI 自动总结聊天记录生成日记
- **界面个性化**：自定义背景、头像、花环风格统计卡片
- **用户系统**：注册登录、数据持久化（仅 master 分支）

## 快速开始

```bash
# PWA 版本
git clone -b main https://github.com/hong-red/memory-ai-companion.git
# 直接用浏览器打开 index.html

# 完整版本
git clone -b master https://github.com/hong-red/memory-ai-companion.git
cd server
npm install
npm start
# 访问 http://localhost:3000
```

## 配置说明

1. 访问 https://platform.moonshot.cn/ 注册账号并创建 API Key
2. 在应用设置页面填入 API Key
3. master 分支需创建 `server/.env` 文件配置环境变量

## 技术栈

- **前端**：HTML5 + CSS3 + JavaScript ES6+，响应式设计
- **后端**：Node.js + Express + SQLite3 + JWT（仅 master 分支）
- **部署**：GitHub Pages + PM2 + Docker

## 使用指南

- **创建角色**：点击"角色"标签，选择快速模板（友好伙伴、导师、心理咨询师、领域专家）
- **开始对话**：选择角色进入聊天界面，AI 会记住对话历史
- **记录日记**：手动记录或使用"从对话生成"功能自动创建

## 更新日志

- **v1.1.0**：新增角色创建模板功能，优化移动端显示
- **v1.0.0**：首次发布，智能对话、角色管理、日记记录功能

## 核心功能

- **记忆管理**：自动提取对话关键信息，形成结构化记忆档案
- **情感陪伴**：识别用户情绪状态，提供相应回应策略
- **多场景适配**：日常闲聊、心情倾诉、知识问答、睡前陪伴

## 开发问题与解决方案

### 记忆引用的自然度
**问题**：AI 引用记忆时生硬突兀

**解决**：设计多层引用策略，设置引用阈值，语言润色融入语境

### 上下文长度限制
**问题**：无法将整个对话历史与记忆档案一次性传入

**解决**：动态上下文压缩，记忆检索机制，分层上下文管理

### 用户隐私与数据安全
**问题**：记忆档案涉及用户个人信息

**解决**：本地存储优先，JWT 身份验证，提供清空记忆功能

### 响应速度优化
**问题**：API 调用耗时较长

**解决**：流式输出，打字机效果，缓存回复，优化提示词长度

## 项目亮点

- **记忆连续性**：通过记忆档案实现对话延续性
- **情感化设计**：营造温暖、安全、被接纳的氛围
- **隐私优先**：用户数据本地存储，完全控制权
- **低门槛使用**：无需注册，打开网页即可对话
- **双分支架构**：PWA 版本与完整版本并存

## 未来规划

- 多模态交互（语音输入与语音合成）
- 个性化人设（自定义性格特征与说话风格）
- 记忆可视化（时间轴、关系图谱）
- 情感趋势分析
- 离线模式

