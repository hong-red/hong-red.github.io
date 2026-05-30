# 数学建模论文示例

## 基于多变量自回归模型的三城市房价预测研究

---

### 论文简介

这是一篇参加 **2026年北京印刷学院数学建模与计算机应用竞赛** 的论文，基于北京、成都、武汉三个城市2016-2024年的房地产、经济、人口等多维度数据，构建了多变量自回归模型（Multivariate Autoregressive Model）对房价进行预测研究。

---

### 研究内容

#### 1. 数据预处理

- **数据来源**：国家统计局、各城市统计年鉴
- **数据清洗**：处理缺失值（线性插值）、异常值检测（3σ原则）
- **数据标准化**：Z-score 标准化处理
- **涉及指标**：房价、GDP、居民收入、房地产开发投资、人口等

#### 2. 模型建立

**多变量自回归模型：**

```
P_t = β₀ + β₁·P_{t-1} + β₂·GDP_t + β₃·Income_t + β₄·Invest_t + T + C + ε_t
```

其中：

- P_t：第 t 年房价
- P_{t-1}：房价滞后项（自相关）
- GDP_t：地区生产总值
- Income_t：居民收入
- Invest_t：房地产开发投资
- T：时间趋势项
- C：周期性变化项
- ε_t：随机误差项

**参数估计方法：** 岭回归（Ridge Regression），正则化参数 λ=0.1

#### 3. 预测结果

| 城市 | 2025 | 2026 | 2027 | 2028 | 2029 | 5年变化 |
|------|------|------|------|------|------|---------|
| 北京 | 34032 | 30629 | 29098 | 29005 | 29005 | -14.77% |
| 成都 | 20103 | 22198 | 24418 | 26291 | 27606 | +37.32% |
| 武汉 | 12783 | 11886 | 10910 | 10037 | 9535 | -25.41% |

#### 4. 模型验证

| 城市 | R² | MAPE |
|------|-----|------|
| 北京 | 0.99 | 2.78% |
| 成都 | 0.84 | 5.76% |
| 武汉 | 0.97 | 3.15% |

---

### 论文结构

```
1. 问题重述
   1.1 问题背景
   1.2 研究目标
2. 模型假设
3. 符号说明
4. 数据预处理
5. 模型建立与求解
   5.1 多变量自回归模型
   5.2 特征工程
   5.3 参数估计
   5.4 预测结果
6. 模型验证
7. 模型评价
   7.1 模型优点
   7.2 模型局限性
   7.3 改进方向
8. 政策建议
9. 结论
参考文献
附录
   附录A：数据清洗与合并代码（Python）
   附录B：房价预测分析代码（Python）
   附录C：数据分析与图表代码（Python）
```

---

### 技术栈

- **编程语言**：Python 3.11
- **数据处理**：pandas, numpy
- **可视化**：matplotlib, seaborn
- **机器学习**：scikit-learn（StandardScaler, Ridge Regression）
- **文档排版**：LaTeX

---

### 核心代码片段

#### 数据清洗

```python
import pandas as pd
import numpy as np

def clean_city_data(file_path, city_name):
    df = pd.read_excel(file_path, header=None)
    df = df.dropna(axis=1, how='all')
    df = df.dropna(axis=0, how='all')
    # ... 数据清洗逻辑
    return data_df
```

#### 多变量自回归模型

```python
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import r2_score, mean_squared_error

class MultivariateARModel:
    def __init__(self, city_name):
        self.city_name = city_name
        self.scaler = StandardScaler()
        self.coefficients = {}
        self.fitted = False
    
    def fit(self, city_df):
        # 特征准备
        data, year_indices = self.prepare_features(city_df)
        # 添加时间特征
        data = self.add_time_features(data, year_indices)
        # 岭回归参数估计
        X_with_const = np.column_stack([np.ones(len(X_scaled)), X_scaled])
        lambda_reg = 0.1
        XtX = X_with_const.T @ X_with_const
        reg_matrix = XtX + lambda_reg * np.eye(XtX.shape[0])
        beta = np.linalg.inv(reg_matrix) @ X_with_const.T @ y
        # ...
```

---

### 论文亮点

1. **多维度分析**：综合考虑房价、经济、人口等多维度因素
2. **时间特性**：引入趋势项和周期项，反映房价的时间序列特性
3. **正则化处理**：采用岭回归避免过拟合，提高模型泛化能力
4. **约束条件**：设置合理的预测约束，保证结果的合理性
5. **完整代码附录**：提供全部 Python 源代码，符合竞赛要求

---

### 格式规范

本论文严格遵循 **2026年北京印刷学院数学建模与计算机应用竞赛论文格式规范**：

- 页边距：上下左右各 2.5cm
- 第一页：标题 + 摘要 + 关键词（从此页开始编页码）
- 页码：页脚中部，阿拉伯数字从"1"开始
- 第二页开始正文，无目录
- 参考文献：按引用次序编号 `[1]`、`[2]` 等
- 附录：包含实际使用的软件名称、命令和全部计算机源程序

---

### 相关文件
- [数学建模资料库](https://github.com/hong-red/mathbuild)
---

