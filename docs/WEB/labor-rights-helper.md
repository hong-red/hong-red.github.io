# 劳动维权帮助助手

一个专为劳动者维权设计的全栈网页应用，提供问题咨询、流程指导和功能使用统计分析。

![license](https://img.shields.io/badge/license-MIT-green.svg)
![node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![express](https://img.shields.io/badge/express-5.x-blue.svg)
![sqlite](https://img.shields.io/badge/sqlite-3.x-blue.svg)

## 项目概述

劳动维权帮助助手是一款面向劳动者的智能维权辅助工具，旨在帮助劳动者了解自身权益、获取法律援助信息，并在遇到劳动纠纷时提供专业的指导建议。该项目在竞赛中获得了 **北京 4C 软件应用与开发 Web应用与开发 省级三等奖**。

项目从实际社会需求出发，针对劳动者在维权过程中普遍面临的法律知识缺乏、维权流程不清、文书撰写困难等痛点，提供了一站式的智能辅助解决方案。

## 部署架构

```
┌─────────────────────────────────────┐         ┌─────────────────────────┐
│         GitHub Pages                │         │   腾讯云服务器          │
│   https://hong-red.github.io/       │  ────▶  │   81.70.191.44:4000    │
│   /labor-rights-helper/             │   API   │   (后端API + 数据库)    │
│   (前端静态页面)                     │         │                         │
└─────────────────────────────────────┘         └─────────────────────────┘
```

- **前端**: GitHub Pages 托管（免费、自动部署）
- **后端**: 腾讯云服务器 81.70.191.44（API服务）

## 快速开始

### 环境要求
- Node.js ≥ 18.0.0
- npm 或 yarn
- Git

---

## 分离部署指南（推荐）

### 第一步：部署前端到 GitHub Pages

#### 1. Fork/克隆仓库

```bash
# 克隆仓库到本地
git clone https://github.com/hong-red/labor-rights-helper.git
cd labor-rights-helper
```

#### 2. 推送代码到 GitHub

```bash
# 如果是新项目，初始化并推送
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/hong-red/labor-rights-helper.git
git push -u origin main
```

#### 3. 启用 GitHub Pages

1. 打开 https://github.com/hong-red/labor-rights-helper
2. 点击 **Settings** → **Pages**
3. **Source** 选择 **GitHub Actions**
4. 等待自动部署完成（约2-3分钟）

#### 4. 验证前端部署

访问： https://hong-red.github.io/labor-rights-helper/

---

### 第二步：部署后端到腾讯云

#### 方法A：宝塔面板部署

如果你的服务器有宝塔面板，这是最方便的部署方式：

```bash
# 1. 登录宝塔面板 → 终端
# 2. 进入网站目录
cd /www/wwwroot

# 3. 克隆项目
git clone https://github.com/hong-red/labor-rights-helper.git
cd labor-rights-helper

# 4. 运行宝塔专用部署脚本
node deploy-bt.js
```

部署完成后，在宝塔面板 → 安全 → 放行端口 `4000`

#### 方法B：使用部署脚本（SSH方式）

适用于：有SSH密码，直接部署到腾讯云服务器

**Windows PowerShell:**
```powershell
# 在项目根目录执行
.\deploy-backend.ps1
```

**Git Bash / Linux / Mac:**
```bash
# 在项目根目录执行
./deploy-backend.sh
```

**Node.js (跨平台):**
```bash
# 在项目根目录执行
node deploy.js
```

脚本会自动完成：
- 打包后端文件
- 上传到腾讯云服务器 (81.70.191.44)
- 安装依赖
- 使用PM2启动服务

⚠️ **注意**: 此方法需要服务器SSH密码，如果不知道密码请使用方法A（宝塔部署）

#### 方法C：手动部署

```bash
# 1. 上传项目到服务器
scp -r . ubuntu@81.70.191.44:/home/ubuntu/labor-rights-helper

# 2. SSH连接服务器
ssh ubuntu@81.70.191.44

# 3. 安装依赖并启动
cd /home/ubuntu/labor-rights-helper
npm install

# 4. 安装PM2（如果未安装）
sudo npm install -g pm2

# 5. 使用PM2启动
pm2 start server-4000.js --name "labor-rights-backend"
pm2 save
pm2 startup
```

#### 验证后端部署

```bash
# 测试API是否正常工作
curl http://81.70.191.44:4000/api/health

# 应该返回: {"status":"OK","timestamp":"..."}
```

---

## 访问地址

部署完成后，您可以通过以下地址访问：

| 环境 | 地址 |
|------|------|
| **前端页面** | https://hong-red.github.io/labor-rights-helper/ |
| **统计页面** | https://hong-red.github.io/labor-rights-helper/stats.html |
| **后端API** | http://81.70.191.44:4000/api |
| **健康检查** | http://81.70.191.44:4000/api/health |

---

## 本地开发

```bash
# 克隆项目
git clone https://github.com/hong-red/labor-rights-helper.git
cd labor-rights-helper

# 安装依赖
npm install

# 启动本地服务器
npm start
# 或
node server-4000.js

# 访问 http://localhost:4000
```

---

## 功能特性

### 前端功能
- **角色选择**: 农民工、大学生、个体户、律师等多角色适配
- **问题分类**: 欠薪、被骗、合同纠纷等场景化导航
- **流程指导**: 一步步教你维权流程
- **地图定位**: 集成高德地图 API，支持劳动仲裁机构、法律援助中心的位置查询与导航
- **实时统计**: 功能使用数据可视化展示

### 后端统计
- **功能点击追踪** - 自动记录每个功能的使用次数
- **实时排行榜** - 按点击次数从高到低排序
- **分类统计** - 按功能类型筛选统计
- **数据持久化** - SQLite数据库存储
- **RESTful API** - 完整的统计接口

### 核心API接口
```http
POST /api/track-click      # 记录功能点击
GET  /api/stats            # 获取统计数据
GET  /api/popular-features # 获取热门功能
GET  /api/total-clicks     # 获取总点击次数
GET  /api/health           # 健康检查
```

---

## 项目结构

```
labor-rights-helper/
├── index.html              # 主页面
├── stats.html              # 统计展示页面
├── plaintiff.html          # 角色选择页面
├── server-4000.js          # Express服务器
├── package.json            # 依赖配置
├── backend/                # 后端数据目录
│   └── stats.db            # SQLite数据库
├── js/                     # 前端JavaScript
│   └── stats.js            # 统计追踪模块
├── css/                    # 样式文件
├── deploy-backend.sh       # 后端部署脚本
├── Dockerfile              # Docker配置
├── docker-compose.yml      # Docker Compose配置
└── README.md               # 项目说明
```

---

## 常用命令

### 前端更新
```bash
git add .
git commit -m "Update frontend"
git push
# GitHub Actions会自动部署
```

### 后端更新
```bash
# 使用部署脚本
./deploy-backend.sh

# 或手动重启
ssh ubuntu@81.70.191.44
pm2 restart labor-rights-backend
```

### 查看日志
```bash
# 后端日志
ssh ubuntu@81.70.191.44
pm2 logs labor-rights-backend
```

---

## 技术栈

### 前端
- **HTML5** - 语义化结构
- **CSS3** - 响应式设计
- **JavaScript ES6+** - 现代JavaScript特性
- **高德地图 JavaScript API** - 地图展示、地点搜索与导航
- **FontAwesome** - 图标库

### 后端
- **Node.js** - JavaScript运行时
- **Express.js** - Web框架
- **SQLite3** - 轻量级数据库
- **CORS** - 跨域支持

### 部署
- **GitHub Pages** - 前端托管
- **腾讯云** - 后端服务器
- **PM2** - 进程管理器

---

## 安全配置

前端代码已自动识别环境：
```javascript
if (hostname === 'localhost') {
    this.apiBaseUrl = 'http://localhost:4000/api';
} else if (hostname.includes('github.io')) {
    this.apiBaseUrl = 'http://81.70.191.44:4000/api';
}
```

后端CORS已配置为允许GitHub Pages访问。

---

## 核心功能详解

### 权益知识库
- **劳动合同**：解读劳动合同的签订、变更、解除与终止相关法律规定
- **工资工时**：涵盖加班工资计算、最低工资标准、工时制度等核心内容
- **社会保险**：养老、医疗、失业、工伤、生育保险的缴纳与待遇说明
- **工伤赔偿**：工伤认定流程、赔偿标准、劳动能力鉴定等实务指引
- **经济补偿**：经济补偿金与赔偿金的计算方式、适用情形详解

### 智能咨询
- 用户可通过对话形式描述自身遭遇的劳动纠纷情况
- 系统基于预设的法律知识库与规则引擎，提供初步的维权方向建议
- 针对常见纠纷类型（拖欠工资、违法辞退、未缴社保等）给出标准化应对流程

### 文书辅助
- 提供劳动仲裁申请书、劳动争议起诉状、投诉举报信等常用法律文书模板
- 引导式填写：根据用户输入的案件信息，自动生成文书草稿
- 文书格式符合各地仲裁委员会与法院的规范要求

### 法规查询
- 整合《劳动法》《劳动合同法》《社会保险法》《工伤保险条例》等核心法律法规
- 支持关键词检索，快速定位相关法条
- 提供法规的解读说明与实务应用提示

### 地图定位服务
- **机构查询**：通过高德地图 API 搜索附近的劳动仲裁委员会、法律援助中心、司法局等机构
- **路线导航**：为用户提供从当前位置到目标机构的驾车、公交、步行路线规划
- **位置标注**：在地图上标注关键维权机构的地理位置与联系方式
- **城市切换**：支持用户切换所在城市，获取对应地区的机构信息

---

## 开发过程中的问题与解决方案

### 1. 法律知识准确性保障
**问题描述**：劳动法律涉及大量地方性规定与司法解释，如何保证输出内容的准确性是一个重大挑战。

**解决方案**：
- 以国家层面的核心法律为基础，确保基础内容的权威性
- 对知识库内容进行分级标注，明确适用范围
- 在关键节点设置免责声明，提示用户复杂案件应咨询专业律师

### 2. 文书生成的格式适配
**问题描述**：不同地区的劳动仲裁委员会对文书格式有细微差异，单一模板难以满足所有需求。

**解决方案**：
- 设计可配置的文书模板系统，支持地区字段的动态替换
- 提供通用模板与地区特化模板两种模式
- 生成后允许用户在线编辑调整

### 3. 高德地图 API 集成与密钥管理
**问题描述**：前端需要集成高德地图 JavaScript API 实现机构定位与导航功能，但 API Key 的安全管理、HTTPS 页面的混合内容限制以及地图加载性能成为关键问题。

**解决方案**：
- 申请高德地图 Web 端 JavaScript API Key，配置白名单限制域名访问
- 前端通过异步脚本加载高德地图 API，避免阻塞页面渲染
- 对地图容器进行响应式适配，确保移动端与桌面端的显示效果
- 在 GitHub Pages HTTPS 环境下，确保地图相关资源均通过 HTTPS 加载

### 4. 前后端部署分离
**问题描述**：前端部署在 GitHub Pages，后端部署在云服务器，存在跨域与 HTTPS 混合内容问题。

**解决方案**：
- 后端配置 CORS 中间件，允许 GitHub Pages 域名访问
- 云服务器配置 SSL 证书，确保前后端均通过 HTTPS 通信
- 提供备用访问入口，保障服务可用性

---

## 项目亮点

1. **社会价值导向**：聚焦劳动者权益保护这一社会议题，具有明确的公益属性
2. **法律知识工程化**：将分散的劳动法律知识进行系统化整理与结构化存储
3. **实用工具属性**：不仅是信息展示平台，更提供可直接使用的文书生成工具
4. **低门槛使用**：无需注册即可使用核心功能，降低劳动者获取帮助的门槛
5. **竞赛认可**：获得 4C 省级三等奖，体现了项目的完成度与创新性

---

## 未来规划

1. **扩展法律领域**：从劳动维权延伸至消费者权益、房屋租赁等常见民生法律领域
2. **接入 AI 大模型**：引入大语言模型提升智能咨询的交互体验与回答质量
3. **地区法规细化**：逐步覆盖更多省市的地方性劳动法规与政策
4. **用户案例库**：积累匿名化的维权成功案例，为后续用户提供参考
5. **律师对接服务**：与法律援助机构合作，为复杂案件提供转介服务

---



## 相关链接

| 类型 | 链接 | 密码 |
|------|------|------|
| 作品主文件夹 | [百度网盘](https://pan.baidu.com/s/1N4REyZHS2wz_dkXK3dEI8A?pwd=4kgm) | 4kgm |
| 作品文件夹 | [百度网盘](https://pan.baidu.com/s/1rvq8Yaz4f5qg1-yAAD6eag?pwd=k8af) | k8af |
| 作品代码文件夹 | [百度网盘](https://pan.baidu.com/s/1RxpHVGwcNsavZMK3iFQzuw?pwd=ezvv) | ezvv |
| 作品文档文件夹 | [百度网盘](https://pan.baidu.com/s/1YbxC8GfNya-k5aTnFi5nXA?pwd=iwkk) | iwkk |
| 作品演示文件夹 | [百度网盘](https://pan.baidu.com/s/15DazoGDP92B1xTjR5xOhjw?pwd=ima7) | ima7 |
| 部署链接 1 | [http://81.70.191.44:4000](http://81.70.191.44:4000) | - |
| 部署链接 2 | [https://hong-red.github.io/labor-rights-helper/](https://hong-red.github.io/labor-rights-helper/) | - |
