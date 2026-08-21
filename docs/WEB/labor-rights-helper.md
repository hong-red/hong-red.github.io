# 劳动维权帮助助手

![license](https://img.shields.io/badge/license-MIT-green.svg)
![node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![express](https://img.shields.io/badge/express-5.x-blue.svg)
![sqlite](https://img.shields.io/badge/sqlite-3.x-blue.svg)

**项目地址**：[https://github.com/hong-red/labor-rights-helper](https://github.com/hong-red/labor-rights-helper)

**部署地址**：[https://hong-red.github.io/labor-rights-helper/](https://hong-red.github.io/labor-rights-helper/)

**完整版本**：[http://81.70.191.44:4000](http://81.70.191.44:4000)

**完整参赛资料**：[百度网盘](https://pan.baidu.com/wap/init?surl=N4REyZHS2wz_dkXK3dEI8A&pwd=4kgm)

劳动维权帮助助手是一款面向劳动者的智能维权辅助工具，在竞赛中获得了 **北京 4C 软件应用与开发 Web应用与开发 省级三等奖**。针对劳动者维权过程中的法律知识缺乏、维权流程不清、文书撰写困难等痛点，提供一站式智能辅助解决方案。

## 部署架构

- **前端**: GitHub Pages 托管（免费、自动部署）
- **后端**: 腾讯云服务器 81.70.191.44（API服务）

## 快速开始

```bash
git clone https://github.com/hong-red/labor-rights-helper.git
cd labor-rights-helper
npm install
npm start
# 访问 http://localhost:4000
```

---

## 功能特性

- **角色选择**: 农民工、大学生、个体户、律师等多角色适配
- **问题分类**: 欠薪、被骗、合同纠纷等场景化导航
- **流程指导**: 一步步教你维权流程
- **地图定位**: 集成高德地图 API，支持劳动仲裁机构、法律援助中心的位置查询与导航
- **实时统计**: 功能使用数据可视化展示
- **数据持久化**: SQLite数据库存储

## 技术栈

- **前端**: HTML5 + CSS3 + JavaScript ES6+ + 高德地图 API
- **后端**: Node.js + Express.js + SQLite3
- **部署**: GitHub Pages + 腾讯云 + PM2

## 开发问题与解决方案

### 法律知识准确性保障
**问题**：劳动法律涉及大量地方性规定与司法解释，如何保证输出内容的准确性

**解决**：以国家层面的核心法律为基础，对知识库内容进行分级标注，在关键节点设置免责声明

### 文书生成的格式适配
**问题**：不同地区的劳动仲裁委员会对文书格式有细微差异

**解决**：设计可配置的文书模板系统，支持地区字段的动态替换

### 高德地图 API 集成
**问题**：API Key 安全管理、HTTPS 混合内容限制、地图加载性能

**解决**：配置白名单限制域名访问，异步脚本加载，响应式适配

### 前后端部署分离
**问题**：跨域与 HTTPS 混合内容问题

**解决**：后端配置 CORS 中间件，云服务器配置 SSL 证书

## 项目亮点

- **社会价值导向**：聚焦劳动者权益保护，具有明确的公益属性
- **法律知识工程化**：将分散的劳动法律知识进行系统化整理与结构化存储
- **实用工具属性**：提供可直接使用的文书生成工具
- **低门槛使用**：无需注册即可使用核心功能
- **竞赛认可**：获得 4C 省级三等奖

## 未来规划

- 扩展法律领域（消费者权益、房屋租赁等）
- 接入 AI 大模型提升智能咨询体验
- 地区法规细化，覆盖更多省市
- 建立用户案例库，提供维权成功案例参考

