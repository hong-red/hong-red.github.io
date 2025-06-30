
## 如何更新博客

### 本地修改

* 新建主题
  来到 `docs`，新建文件夹。

* 新建主题中的章节
  来到 `docs` 下对应的需要修改的地方，新建文件。

### 修改总目录

修改 `mkdocs.yml` 中 `nav` 的部分
博客的导航菜单结构定义在项目根目录下的 `mkdocs.yml` 文件中，格式为 YAML（注意缩进必须为**空格**，不能使用 Tab）。

#### 格式注意事项：

1. 使用两个空格作为缩进单位。
2. 文件路径为相对路径，基于 `docs/` 目录。
3. 冒号 `:` 后面留一个空格。
4. 多级导航必须嵌套在上级项下面（缩进要对齐）。

* 最好用 vim，好打空格。

### 检查文章

```bash
mkdocs serve
```

### 上传至 GitHub

```bash

git add .               
git commit -m "Update blog post"
bash auto-update-this-repo.sh 


```



