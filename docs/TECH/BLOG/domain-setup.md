# DigitalPlat FreeDomain 免费域名 + Cloudflare + GitHub Pages 博客搭建全记录

> 最终域名：`https://fanxiaolin.dpdns.org`
> 博客源站：`https://hong-red.github.io`

## 目录

1. [项目背景](#项目背景)
2. [前期准备](#前期准备)
3. [第一步：注册 DigitalPlat 免费域名](#第一步注册-digitalplat-免费域名)
4. [第二步：Cloudflare 接入与 Nameserver 修改](#第二步cloudflare-接入与-nameserver-修改)
5. [第三步：GitHub Pages 绑定自定义域名](#第三步github-pages-绑定自定义域名)
6. [第四步：开启 HTTPS](#第四步开启-https)
7. [踩坑记录与解决方案](#踩坑记录与解决方案)
8. [最终验证](#最终验证)
9. [总结](#总结)

---

## 项目背景

### 使用的服务

| 服务 | 作用 | 费用 |
|------|------|------|
| **DigitalPlat FreeDomain** | 免费域名注册商 | 免费（每年手动续期） |
| **Cloudflare** | DNS 托管 + CDN + SSL 证书 | 免费套餐 |
| **GitHub Pages** | 静态网站托管 | 免费 |

### 最终目标

将 `fanxiaolin.dpdns.org` 指向 `hong-red.github.io`，实现通过自定义域名访问个人博客。

---

## 前期准备

- 一个 GitHub 账号（已绑定 `hong-red`）
- 一个 DigitalPlat 账号（已注册）
- 博客已部署在 `https://hong-red.github.io`

---

## 第一步：注册 DigitalPlat 免费域名

### 1.1 登录 DigitalPlat 控制台

访问：`https://dash.domain.digitalplat.org/`

### 1.2 绑定 GitHub 账号并 Star 仓库

在 **Account Settings → Connected Accounts** 中：
- 绑定 GitHub 账号（`@hong-red`）
- 访问 `https://github.com/DigitalPlatDev/FreeDomain` 并点击 ⭐ Star
- 点击 **"Verify with GitHub"** 验证

> 完成验证后可获得 **2 个免费域名额度**（基础 1 个 + Star 奖励 1 个）

### 1.3 搜索并注册域名

1. 点击左侧菜单 **"注册"**（Register）
2. 阅读并同意服务条款（TOS、AUP 等）
3. 选择后缀 **`.dpdns.org`**（免费后缀，不消耗付费插槽）
4. 输入想要的域名前缀：`fanxiaolin`
5. 检查可用性，点击 **"注册"**

### 1.4 注册成功

| 项目 | 信息 |
|------|------|
| 域名 | `fanxiaolin.dpdns.org` |
| 注册日期 | 2026年7月7日 |
| 到期日期 | 2027年7月7日 |
| 生命周期 | 永久域名（每年免费续期） |

---

## 第二步：Cloudflare 接入与 Nameserver 修改

### 2.1 注册 Cloudflare 账号

访问：`https://dash.cloudflare.com/sign-up`

### 2.2 添加站点

1. 点击 **"添加域"** / **"Add a site"**
2. 输入：`fanxiaolin.dpdns.org`
3. 选择 **免费套餐（Free plan）**

### 2.3 获取 Cloudflare Nameserver 地址

Cloudflare 分配了两个 Nameserver：

```
tosana.ns.cloudflare.com
ursula.ns.cloudflare.com
```

### 2.4 在 DigitalPlat 修改 Nameserver

1. 登录 DigitalPlat 控制台
2. 进入 **域名列表** → 点击 `fanxiaolin.dpdns.org`
3. 找到 **"名称服务器"** 管理区域
4. 填写：

| 字段 | 值 |
|------|------|
| Name Server 1 | `tosana.ns.cloudflare.com` |
| Name Server 2 | `ursula.ns.cloudflare.com` |
| Name Server 3 ~ 8 | 留空 |

5. 点击 **"更新名称服务器"**

### 2.5 等待 Nameserver 全球生效

在 Cloudflare Overview 页面，状态显示：

> **"Waiting for your registrar to propagate your new nameservers"**

使用 DNS 检测工具验证：`https://www.whatsmydns.net/#NS/fanxiaolin.dpdns.org`

全球节点全部返回 `tosana.ns.cloudflare.com` 和 `ursula.ns.cloudflare.com` 后，Cloudflare 状态变为 **"Active"（已激活）**。

> ⏱️ 生效时间：通常 1-2 小时，最长 24 小时

---

## 第三步：GitHub Pages 绑定自定义域名

### 3.1 在 Cloudflare 添加 DNS 记录

进入 Cloudflare **DNS → 记录**，点击 **"添加记录"**：

| 记录 1 | 值 |
|--------|------|
| 类型 | `CNAME` |
| 名称 | `@` |
| 目标 | `hong-red.github.io` |
| 代理状态 | **灰色（仅 DNS）**（暂时关闭代理） |

| 记录 2 | 值 |
|--------|------|
| 类型 | `CNAME` |
| 名称 | `www` |
| 目标 | `hong-red.github.io` |
| 代理状态 | **灰色（仅 DNS）** |

### 3.2 在 GitHub Pages 设置自定义域名

1. 进入仓库 `hong-red/hong-red.github.io` → **Settings → Pages**
2. 在 **Custom domain** 输入 `fanxiaolin.dpdns.org`
3. 点击 **Save**

> 如果提示 "DNS check unsuccessful"，说明 Nameserver 还未完全生效，等待后再试。

### 3.3 DNS 检查通过

当状态显示 **"DNS check successful"** 或 **"DNS check is in progress"** 后，域名绑定成功。

---

## 第四步：开启 HTTPS

### 4.1 GitHub Pages 启用 HTTPS

1. 在 Pages 设置中，勾选 **"Enforce HTTPS"**
2. 等待 1-3 分钟，GitHub 自动签发 SSL 证书

### 4.2 Cloudflare 开启代理（可选）

1. 回到 Cloudflare **DNS → 记录**
2. 将两条 CNAME 记录的云朵从灰色点击为**橙色（Proxied）**
3. Cloudflare 自动签发 Universal SSL 证书（5-15 分钟）

### 4.3 Cloudflare SSL/TLS 设置

进入 **SSL/TLS**，将加密模式设置为 **"完全"（Full）**（不要选"完全（严格）"）。

---

## 踩坑记录与解决方案

### 坑 1：DigitalPlat 上找不到"注册"入口

**现象**：在 "Your domains" 页面搜索域名，始终显示 "0 个域名"。

**原因**："Your domains" 只显示已注册的域名，不能用于搜索新域名。

**解决**：点击左侧菜单的 **"注册"**（Register）进行域名搜索和注册。

---

### 坑 2：`.us.kg` 提示 "该域为暂停寄存器"

**现象**：选择 `.us.kg` 后缀时提示无法注册。

**原因**：该项目暂时暂停了 `.us.kg` 的新注册。

**解决**：改用 `.dpdns.org` 后缀，免费且可用。

---

### 坑 3：`.qzz.io` 提示 "必须使用付费插槽"

**现象**：选择 `.qzz.io` 后缀时，免费插槽不可用。

**原因**：`.qzz.io` 被归类为"高级后缀"，需要付费插槽。

**解决**：使用免费后缀 `.dpdns.org`。

---

### 坑 4：Cloudflare Nameserver 修改后一直 "Waiting"

**现象**：在 DigitalPlat 修改 Nameserver 后，Cloudflare 一直显示 "Waiting for propagation"。

**原因**：DigitalPlat 的 DNS 传播较慢，或者 NS3~NS8 未清空导致冲突。

**解决**：
1. 确认 NS1 和 NS2 正确
2. 清空 NS3~NS8
3. 等待 1-2 小时
4. 使用 whatsmydns.net 验证生效情况

---

### 坑 5：GitHub 显示 "DNS check unsuccessful / InvalidDNSError"

**现象**：在 GitHub Pages 设置自定义域名时，一直报 DNS 错误。

**原因**：Cloudflare 开启了代理（橙色云朵），GitHub 检测到的是 Cloudflare IP 而非源站。

**解决**：
1. 在 Cloudflare DNS 记录中，将 CNAME 记录的云朵改为**灰色（仅 DNS）**
2. 等待 2-3 分钟
3. 在 GitHub Pages 中**删除域名 → 保存 → 重新输入 → 再保存**
4. 确认 DNS 检查通过后，再开启 HTTPS
5. 最后回到 Cloudflare，重新开启代理（橙色云朵）

---

### 坑 6：访问博客跳转到 `polyfill.io` 登录页面

**现象**：所有设备访问 `fanxiaolin.dpdns.org` 都跳转到恶意网站 `polyfill.io`。

**原因**：网站源码中引用了 `polyfill.io` 的 JavaScript 库，该域名已被恶意利用。

**解决**：
1. 在 GitHub 仓库中搜索 `polyfill.io`
2. 删除所有包含该域名的 `<script>` 标签
3. 提交更改，等待 GitHub Pages 重新部署
4. 清除浏览器缓存后重新访问

---

### 坑 7：Cloudflare 找不到 "SSL/TLS 加密模式"

**现象**：进入 SSL/TLS 设置后，只看到 "边缘证书"、"客户端证书" 等子菜单。

**原因**：进入了子菜单页面，而非概览页面。

**解决**：点击左侧菜单顶层的 **"SSL/TLS"**，或直接访问 `/ssl-tls` 路径（不带 `/edge-certificates`）。

---

## 最终验证

### 访问测试

| 地址 | 预期结果 | 实际结果 |
|------|----------|----------|
| `https://fanxiaolin.dpdns.org` | 显示博客首页 | ✅ 正常 |
| `http://fanxiaolin.dpdns.org` | 自动跳转 HTTPS | ✅ 正常 |
| `https://hong-red.github.io` | 显示博客首页 | ✅ 正常 |

### HTTPS 证书验证

- 浏览器地址栏显示小锁 🔒
- 证书由 Cloudflare / GitHub 签发

---

## 总结

### 完整架构图

```
用户浏览器访问 fanxiaolin.dpdns.org
                ↓
        Cloudflare (DNS + CDN)
        - 解析域名到 hong-red.github.io
        - 提供 SSL 证书
        - 可选开启代理加速
                ↓
        GitHub Pages (源站)
        - 存放博客 HTML/CSS/JS 文件
        - 从 gh-pages 分支构建
                ↓
        用户看到博客内容 ✅
```

### 关键要点

1. **DigitalPlat** 只负责域名注册，不提供 DNS 托管
2. **Cloudflare** 负责 DNS 解析和 SSL 证书（免费）
3. **GitHub Pages** 负责静态网站托管（免费）
4. Nameserver 修改需要等待全球生效（1-2 小时）
5. 绑定域名时需暂时关闭 Cloudflare 代理，待 GitHub 验证通过后再开启
6. 免费域名需要每年手动续期（到期前 120 天内）

### 域名续期提醒

| 事项 | 时间 |
|------|------|
| 注册日期 | 2026年7月7日 |
| 到期日期 | 2027年7月7日 |
| 可续期时间 | 2027年3月9日起（到期前 120 天） |
| 续期方式 | 登录 DigitalPlat 控制台，点击域名详情页的 **"Renew"** |

---

## 相关链接

| 类型 | 链接 |
|------|------|
| DigitalPlat 控制台 | [https://dash.domain.digitalplat.org](https://dash.domain.digitalplat.org) |
| Cloudflare 控制台 | [https://dash.cloudflare.com](https://dash.cloudflare.com) |
| DNS 检测工具 | [https://www.whatsmydns.net](https://www.whatsmydns.net) |
| 博客源码仓库 | [https://github.com/hong-red/hong-red.github.io](https://github.com/hong-red/hong-red.github.io) |
| 最终访问地址 | [https://fanxiaolin.dpdns.org](https://fanxiaolin.dpdns.org) |

---
