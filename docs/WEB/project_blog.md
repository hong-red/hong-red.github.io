# 文明回响：让传统文化在AI时代焕发新生

![AI](https://img.shields.io/badge/AI-Moonshot-blue.svg)
![传统文化](https://img.shields.io/badge/传统文化-互动平台-green.svg)
![响应式](https://img.shields.io/badge/响应式-设计-orange.svg)

**项目地址**：[https://github.com/hong-red/civilization-echo](https://github.com/hong-red/civilization-echo)
**部署地址**：[https://hong-red.github.io/civilization-echo/](https://hong-red.github.io/civilization-echo/)

## 项目概述

"文明回响"是一个融合AI技术的传统文化互动平台，分为儿童、青少年和老年三个板块，针对不同年龄段用户需求提供定制化的传统文化体验。

## 核心功能

- **儿童板块**：四大神兽主题（青龙、白虎、朱雀、玄武），AI故事生成，语音播放
- **青少年板块**：诗词混创工坊，诗词信笺，书法展示
- **老年板块**：与苏轼对话，简洁易用的界面

## 技术栈

- **前端**：HTML5 + CSS3 + JavaScript ES6+
- **后端**：Node.js + Express
- **AI服务**：Moonshot AI API
- **部署**：GitHub Pages + Vercel

## 开发问题与解决方案

### 电脑端故事播放功能失效
**问题**：播放按钮被移除，语音合成对象未正确初始化

**解决**：恢复播放和暂停按钮，添加浏览器兼容性检查和错误处理

### 跨域请求问题
**问题**：前端从GitHub Pages访问Vercel后端时出现跨域错误

**解决**：在Express后端添加CORS中间件，配置Vercel跨域策略

### AI生成速度慢
**问题**：AI生成故事和对话速度较慢

**解决**：优化加载状态，设置30秒超时，实现错误重试机制

### 移动端适配问题
**问题**：移动端显示异常，交互不流畅

**解决**：创建专门的移动端版本，使用CSS媒体查询优化显示

## 项目亮点

- **传统文化与AI的完美结合**：古老文化元素与现代AI技术融合
- **多年龄段覆盖**：针对不同年龄段设计差异化功能模块
- **响应式设计**：自动适配桌面端和移动端
- **开源架构**：项目完全开源，便于社区贡献
- **自动化部署**：GitHub Actions和Vercel自动化部署

## 未来规划

- 扩展更多传统文化元素（传统故事、名人对话、艺术形式）
- 优化AI生成质量，调优AI模型
- 增加互动性（用户创作分享、评论功能）
- 支持更多语言
- 开发移动端应用


