### LaTeX 学习记录

## 什么是 LaTeX？

LaTeX 是一种基于 TeX 的文档排版系统，特别适用于学术论文、数学公式、科技文档的编写。与 Word 等所见即所得编辑器不同，LaTeX 采用"所想即所得"的方式，通过编写代码来生成高质量的排版文档。

---

## 我的 LaTeX 学习之路

### 一、环境搭建

#### 1. 安装 TeX Live（推荐）

TeX Live 是一个完整的 TeX 发行版，包含了 LaTeX 所需的所有工具和宏包。

- 官网下载：https://tug.org/texlive/
- 安装时间较久（约 30-60 分钟），但一劳永逸
- 安装完成后，系统会自动配置好环境变量

#### 2. 安装 VS Code + LaTeX Workshop 插件

VS Code 是目前最推荐的 LaTeX 编辑器，配合 LaTeX Workshop 插件可以实现：

- 自动编译（保存时自动编译）
- PDF 预览（侧边栏实时预览）
- 正向/反向搜索（代码与 PDF 互相跳转）
- 公式预览、代码补全等功能

**插件安装步骤：**

1. 打开 VS Code，点击左侧扩展图标
2. 搜索 "LaTeX Workshop"
3. 点击安装

**配置自动编译：**

在 VS Code 设置中添加以下配置：

```json
{
  "latex-workshop.latex.autoBuild.run": "onSave",
  "latex-workshop.view.pdf.viewer": "tab"
}
```

---

### 二、第一个 LaTeX 文档

创建一个 `hello.tex` 文件：

```latex
\documentclass[12pt,a4paper]{article}  % 文档类型：article，12号字体，A4纸张
\usepackage[UTF8]{ctex}                % 支持中文

\title{我的第一篇 LaTeX 文档}
\author{你的名字}
\date{\today}

\begin{document}
\maketitle  % 生成标题

\section{引言}
这是正文内容。LaTeX 的排版效果非常专业！

\section{数学公式}
行内公式：$E = mc^2$

独立编号公式：
\begin{equation}
  \int_{a}^{b} f(x) \, dx = F(b) - F(a)
\end{equation}

\end{document}
```

编译命令：

```bash
xelatex hello.tex    % 推荐使用 xelatex 支持中文
```

---

### 三、数学建模论文常用技巧

#### 1. 页面设置

```latex
\usepackage{geometry}
\geometry{left=2.5cm,right=2.5cm,top=2.5cm,bottom=2.5cm}
```

#### 2. 页码设置（从第一页开始，页脚中部）

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyfoot[C]{\thepage}
\renewcommand{\headrulewidth}{0pt}
```

#### 3. 摘要环境

```latex
\begin{abstract}
本文研究了...\n
\textbf{关键词：}关键词1；关键词2；关键词3
\end{abstract}
```

#### 4. 表格（三线表）

```latex
\usepackage{booktabs}

\begin{table}[H]
\centering
\caption{表格标题}
\begin{tabular}{lrrr}
\toprule
\textbf{列1} & \textbf{列2} & \textbf{列3} \\
\midrule
数据1 & 100 & 200 \\
数据2 & 150 & 250 \\
\bottomrule
\end{tabular}
\end{table}
```

#### 5. 图片插入

```latex
\usepackage{graphicx}

\begin{figure}[H]
\centering
\includegraphics[width=0.8\textwidth]{图片路径}
\caption{图片标题}
\label{fig:example}
\end{figure}
```

#### 6. 参考文献格式

```latex
\section*{参考文献}

\begin{flushleft}
\noindent [1] 作者. 书名[M]. 出版地：出版社，出版年.\\
\noindent [2] 作者. 论文名[J]. 杂志名，卷期号：起止页码，出版年.
\end{flushleft}
```

---

### 四、常见问题与解决

#### 问题1：中文显示乱码

**原因：** 编译器不支持中文或未使用 ctex 宏包。

**解决：**

1. 添加 `\usepackage[UTF8]{ctex}`
2. 使用 `xelatex` 编译（而非 `pdflatex`）

#### 问题2：图片无法显示

**原因：** 图片路径错误或格式不支持。

**解决：**

1. 确保图片路径正确（相对路径或绝对路径）
2. 推荐使用 `.png`、`.jpg`、`.pdf` 格式
3. 使用 `\graphicspath{{./images/}}` 设置图片搜索路径

#### 问题3：表格太宽超出页面

**解决：**

```latex
\usepackage{adjustbox}

\begin{adjustbox}{max width=\textwidth}
\begin{tabular}{...}
...
\end{tabular}
\end{adjustbox}
```

或者使用 `\resizebox`：

```latex
\resizebox{\textwidth}{!}{%
\begin{tabular}{...}
...
\end{tabular}%
}
```

#### 问题4：参考文献编号与引用

**解决：** 使用 `\cite` 命令配合 `thebibliography` 环境：

```latex
正文引用处\cite{ref1}...

\begin{thebibliography}{99}
\bibitem{ref1} 作者. 标题. 出版社, 年份.
\end{thebibliography}
```

---

### 五、常用宏包汇总

| 宏包 | 用途 |
|------|------|
| ctex | 中文支持 |
| geometry | 页面边距设置 |
| amsmath | 数学公式增强 |
| graphicx | 图片插入 |
| booktabs | 三线表 |
| hyperref | 超链接和PDF书签 |
| listings | 代码高亮 |
| fancyhdr | 页眉页脚定制 |
| xcolor | 颜色支持 |
| float | 浮动体控制 |

---

### 六、学习资源推荐

1. **lshort-zh-cn**：免费的 LaTeX 中文简明教程
   - 命令行运行：`texdoc lshort-zh-cn`

2. **LaTeX 公式编辑器**：
   - https://www.latexlive.com/ （在线编辑公式）

3. **表格生成工具**：
   - https://www.tablesgenerator.com/ （可视化生成表格代码）

4. **Overleaf**：在线 LaTeX 编辑器
   - https://www.overleaf.com/ （无需本地安装，协作方便）

---

### 七、我的数学建模论文模板

在数学建模比赛中，我整理了一套常用的论文模板结构：

```
\documentclass[12pt,a4paper]{article}
\usepackage[UTF8]{ctex}
\usepackage{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx,booktabs,float}
\usepackage{fancyhdr}

% 页面设置
\geometry{left=2.5cm,right=2.5cm,top=2.5cm,bottom=2.5cm}

% 页码
\pagestyle{fancy}
\fancyhf{}
\fancyfoot[C]{\thepage}
\renewcommand{\headrulewidth}{0pt}

\title{\textbf{论文标题}}
\author{}
\date{}

\begin{document}
\maketitle

\begin{abstract}
摘要内容...
\end{abstract}

\section{问题重述}
\section{模型假设}
\section{符号说明}
\section{模型建立与求解}
\section{模型评价}
\section*{参考文献}
\section*{附录}

\end{document}
```

---

> **学习心得：** LaTeX 的学习曲线虽然比 Word 陡峭，但一旦掌握，排版效率和质量都会大幅提升。特别是在数学建模比赛中，专业的排版能给评委留下好印象。建议从模板开始，边用边学！
