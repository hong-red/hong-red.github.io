# Hugging Face Spaces 部署指南

## 概述

[Hugging Face Spaces](https://huggingface.co/spaces) 是一个免费的机器学习应用托管平台，支持快速部署 Gradio、Streamlit、Docker 等类型的 AI 应用。本指南介绍如何将 AI 智能体项目部署到 Hugging Face Spaces，以 [SQL 优化智能体](https://huggingface.co/spaces/hong-red/sql-optimization-agent) 为例进行说明。

---

## 前置准备

- 注册 [Hugging Face](https://huggingface.co/join) 账号
- 安装 Git 并配置 SSH Key（推荐）
- 准备好要部署的项目代码

---

## 方式一：通过 Web 界面创建（推荐新手）

### 1. 创建 Space

1. 登录 Hugging Face，点击右上角头像 → **New Space**
2. 填写 Space 信息：
   - **Space name**：项目名（如 `sql-optimization-agent`）
   - **License**：选择 `MIT` 或其他开源协议
   - **Space SDK**：根据项目类型选择
     - `Gradio`：适合快速搭建演示界面
     - `Streamlit`：适合数据类应用
     - `Docker`：适合自定义环境
   - **Space hardware**：免费版选择 `CPU Basic`
3. 点击 **Create Space**

### 2. 上传代码

创建完成后，进入 Space 页面，选择 **Files** → **Upload files**，将项目文件上传到仓库。

或者通过 Git 推送：

```bash
# 克隆 Space 仓库
git clone https://huggingface.co/spaces/你的用户名/项目名
cd 项目名

# 将本地项目文件复制到该目录
# ...

# 提交并推送
git add .
git commit -m "Initial commit"
git push
```

### 3. 配置依赖

根据 SDK 类型创建对应的依赖文件：

**Gradio / Streamlit 项目**：
创建 `requirements.txt`：
```txt
gradio>=4.0.0
openai>=1.0.0
```

**Docker 项目**：
创建 `Dockerfile`：
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]
```

### 4. 配置启动文件

**Gradio 项目**：入口文件需命名为 `app.py`，且最后一行调用 `launch()`：
```python
import gradio as gr

def optimize_sql(sql):
    # 优化逻辑
    return optimized_sql

demo = gr.Interface(fn=optimize_sql, inputs="text", outputs="text")
demo.launch()
```

**Streamlit 项目**：入口文件需命名为 `app.py`：
```python
import streamlit as st

st.title("SQL 优化智能体")
sql = st.text_area("输入 SQL")
if st.button("优化"):
    st.write("优化结果...")
```

### 5. 等待部署

推送代码后，Hugging Face 会自动构建和部署。在 Space 页面的 **Files** 标签上方可以看到部署状态：
- `Building`：正在构建
- `Running`：部署成功，可点击 **App** 标签访问

---

## 方式二：通过命令行创建（最适合我的情况）

### 安装 Hugging Face CLI

```bash
pip install huggingface-hub
```

### 登录

```bash
huggingface-cli login
# 按提示输入 Access Token（从 https://huggingface.co/settings/tokens 获取）
```

### 创建并推送

```bash
# 创建 Space（SDK 可选 gradio / streamlit / docker）
huggingface-cli repo create sql-optimization-agent --type space --sdk gradio

# 克隆并推送
git clone https://huggingface.co/spaces/你的用户名/sql-optimization-agent
cd sql-optimization-agent

# 复制项目文件并推送
cp -r /path/to/your/project/* .
git add .
git commit -m "Initial commit"
git push
```

---

## 环境变量配置（Secrets）

如果项目需要 API Key 等敏感信息，不要直接写在代码中，应使用 Hugging Face 的 Secrets 功能：

1. 进入 Space 页面 → **Settings** → **Secrets**
2. 点击 **New secret**，填写名称和值：
   - Name：`OPENAI_API_KEY`
   - Value：`sk-...`
3. 在代码中读取：
   ```python
   import os
   api_key = os.environ.get("OPENAI_API_KEY")
   ```

---

## 自定义域名（可选）

Hugging Face 支持为 Space 配置自定义域名：

1. 进入 Space 页面 → **Settings** → **Custom Domain**
2. 输入你的域名（如 `sql-agent.yourdomain.com`）
3. 按提示在 DNS 服务商处添加 CNAME 记录
4. 等待 DNS 生效即可通过自定义域名访问

---

## 常见问题

### 构建失败
- 检查 `requirements.txt` 中的依赖版本是否正确
- 查看 Space 页面的 **Logs** 标签获取详细错误信息
- 确保入口文件名与 SDK 要求一致（Gradio/Streamlit 需为 `app.py`）

### 运行时错误
- 在代码中添加日志输出，通过 **Logs** 标签查看
- 检查 Secrets 是否正确配置
- 确认环境变量读取方式正确

### 访问速度慢
- 免费版硬件资源有限，可考虑升级至 `CPU Upgrade` 或 `GPU` 实例
- 在 **Settings** → **Sleeping** 中关闭休眠（避免长时间不访问后冷启动）

---

## 参考链接

| 资源 | 链接 |
|------|------|
| Hugging Face Spaces 文档 | [https://huggingface.co/docs/hub/spaces](https://huggingface.co/docs/hub/spaces) |
| Gradio 文档 | [https://www.gradio.app/docs](https://www.gradio.app/docs) |
| Streamlit 文档 | [https://docs.streamlit.io](https://docs.streamlit.io) |
| SQL 优化智能体示例 | [https://huggingface.co/spaces/hong-red/sql-optimization-agent](https://huggingface.co/spaces/hong-red/sql-optimization-agent) |
