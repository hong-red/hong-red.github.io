### YOLO11n 学习记录

## 什么是 YOLO？

YOLO（You Only Look Once）是一种流行的实时目标检测算法。与传统的两阶段检测器（如 R-CNN）不同，YOLO 将目标检测视为一个回归问题，只需一次前向传播就能同时预测多个边界框和类别概率，因此速度极快。

**YOLO11** 是 Ultralytics 公司于 2024 年发布的最新版本，在 YOLOv8 的基础上进行了架构优化，提供了更好的精度和效率平衡。

---

## 我的 YOLO11n 部署之路

### 一、环境准备

#### 1. 系统要求

- Python >= 3.8
- PyTorch >= 1.8
- CUDA（如需 GPU 加速）

#### 2. 安装 ultralytics

```bash
pip install ultralytics
```

或者使用国内镜像加速：

```bash
pip install ultralytics -i https://pypi.tuna.tsinghua.edu.cn/simple
```

#### 3. 验证安装

```python
from ultralytics import YOLO

# 加载预训练模型
model = YOLO("yolo11n.pt")

# 测试推理
results = model("https://ultralytics.com/images/bus.jpg")
results[0].show()
```

首次运行会自动下载 `yolo11n.pt` 权重文件（约 5.4MB）。

---

### 二、YOLO11 模型版本对比

| 模型 | 大小 | mAP | 速度 | 适用场景 |
|------|------|-----|------|----------|
| YOLO11n | 5.4MB | 39.5 | 最快 | 边缘设备、实时检测 |
| YOLO11s | 10.1MB | 47.0 | 快 | 平衡速度和精度 |
| YOLO11m | 20.1MB | 51.5 | 中等 | 通用场景 |
| YOLO11l | 32.3MB | 53.4 | 较慢 | 高精度需求 |
| YOLO11x | 56.9MB | 54.7 | 最慢 | 极致精度 |

**YOLO11n（nano）** 是最轻量级的版本，适合：

- 嵌入式设备（树莓派、Jetson Nano）
- 实时视频流处理
- 移动端部署
- 资源受限环境

---

### 三、使用预训练模型推理

#### 1. 图片推理

```python
from ultralytics import YOLO

model = YOLO("yolo11n.pt")

# 单张图片
results = model("image.jpg")
results[0].show()      # 显示结果
results[0].save()      # 保存结果

# 批量图片
results = model(["image1.jpg", "image2.jpg", "image3.jpg"])
```

#### 2. 视频推理

```python
# 视频文件
results = model("video.mp4", save=True)

# 摄像头实时检测
results = model(0, show=True)  # 0 表示默认摄像头
```

#### 3. 推理参数说明

```python
results = model(
    source="image.jpg",    # 输入源：图片/视频/摄像头/URL
    conf=0.25,             # 置信度阈值（低于此值的目标被过滤）
    iou=0.45,              # NMS IoU 阈值
    save=True,             # 保存结果
    show=False,            # 显示结果窗口
    device="0",            # GPU 设备号，"cpu" 表示使用 CPU
    half=False,            # 是否使用半精度（FP16）
    max_det=300,           # 最大检测数量
)
```

---

### 四、自定义数据集训练

#### 1. 数据集格式

YOLO 使用特定的目录结构和标签格式：

```
dataset/
├── train/
│   ├── images/          # 训练图片（.jpg/.png）
│   └── labels/          # 训练标签（.txt）
├── val/
│   ├── images/          # 验证图片
│   └── labels/          # 验证标签
└── test/                # 测试集（可选）
    ├── images/
    └── labels/
```

#### 2. 标签格式（YOLO格式）

每个 `.txt` 文件对应一张图片，每行一个目标：

```
<class_id> <x_center> <y_center> <width> <height>
```

所有数值均为相对于图片尺寸的归一化值（0-1 之间）。

**示例：**

```
0 0.5 0.5 0.3 0.4
1 0.2 0.3 0.1 0.2
```

表示：

- 第1个目标：类别0，中心在 (0.5, 0.5)，宽 0.3，高 0.4
- 第2个目标：类别1，中心在 (0.2, 0.3)，宽 0.1，高 0.2

#### 3. 数据集配置文件 data.yaml

```yaml
# 训练集路径
train: ./dataset/train/images

# 验证集路径
val: ./dataset/val/images

# 类别数量
nc: 2

# 类别名称
names:
  0: fire      # 火灾
  1: smoke     # 烟雾
```

#### 4. 训练脚本

```python
from ultralytics import YOLO

# 加载预训练模型
model = YOLO("yolo11n.pt")

# 训练
results = model.train(
    data="data.yaml",       # 数据集配置文件
    epochs=100,             # 训练轮数
    batch=16,               # 批次大小
    imgsz=640,              # 输入图像尺寸
    device="0",             # GPU 设备号
    workers=8,              # 数据加载线程数
    patience=50,            # 早停耐心值
    save=True,              # 保存模型
    project="runs/train",   # 训练结果保存路径
    name="exp",             # 实验名称
)
```

#### 5. 训练参数详解

| 参数 | 默认值 | 说明 |
|------|--------|------|
| epochs | 100 | 训练总轮数 |
| batch | 16 | 每批次的图片数量 |
| imgsz | 640 | 输入图片尺寸（正方形） |
| lr0 | 0.01 | 初始学习率 |
| lrf | 0.01 | 最终学习率（lr0 * lrf） |
| momentum | 0.937 | SGD 动量 |
| weight_decay | 0.0005 | 权重衰减 |
| patience | 100 | 早停耐心值 |
| device | None | 计算设备（"0"=GPU0, "cpu"=CPU） |
| workers | 8 | 数据加载线程数 |
| pretrained | True | 是否使用预训练权重 |
| optimizer | "auto" | 优化器（SGD/Adam/AdamW） |
| augment | True | 是否使用数据增强 |

#### 6. 命令行训练

```bash
# 基础训练
yolo detect train data=data.yaml model=yolo11n.pt epochs=100 batch=16

# 指定设备
yolo detect train data=data.yaml model=yolo11n.pt device=0

# 恢复训练
yolo detect train model=runs/train/exp/weights/last.pt resume=True
```

---

### 五、模型评估与验证

#### 1. 验证模型

```python
from ultralytics import YOLO

model = YOLO("runs/train/exp/weights/best.pt")

# 验证
metrics = model.val(data="data.yaml")

print(f"mAP50-95: {metrics.box.map:.4f}")
print(f"mAP50: {metrics.box.map50:.4f}")
print(f"mAP75: {metrics.box.map75:.4f}")
```

#### 2. 评估指标说明

| 指标 | 说明 |
|------|------|
| mAP50 | IoU=0.50 时的平均精度 |
| mAP75 | IoU=0.75 时的平均精度 |
| mAP50-95 | IoU 从 0.5 到 0.95（步长 0.05）的平均精度 |
| Precision | 精确率（预测为正例中实际为正例的比例） |
| Recall | 召回率（实际正例中被正确预测的比例） |

---

### 六、模型导出与部署

#### 1. 导出为 ONNX 格式

```python
model = YOLO("runs/train/exp/weights/best.pt")
model.export(format="onnx", imgsz=640)
# 生成：best.onnx
```

#### 2. 导出为 TensorRT 格式（NVIDIA GPU 加速）

```python
model.export(format="engine", imgsz=640, half=True)
# 生成：best.engine
```

#### 3. 导出为 OpenVINO 格式（Intel 加速）

```python
model.export(format="openvino", imgsz=640)
# 生成：best_openvino_model/
```

#### 4. 支持的导出格式

| 格式 | 后缀 | 适用场景 |
|------|------|----------|
| PyTorch | .pt | 默认格式，继续训练 |
| ONNX | .onnx | 跨平台部署 |
| TensorRT | .engine | NVIDIA GPU 加速 |
| OpenVINO | _openvino_model | Intel 硬件加速 |
| CoreML | .mlpackage | Apple 设备 |
| TFLite | .tflite | 移动端/嵌入式 |

---

### 七、常见问题与解决

#### 问题1：CUDA out of memory

**原因：** GPU 显存不足。

**解决：**

1. 减小 batch size：`batch=8` 或 `batch=4`
2. 减小图像尺寸：`imgsz=320`
3. 使用半精度：`half=True`
4. 使用 CPU：`device="cpu"`

#### 问题2：训练时 loss 为 nan

**原因：** 学习率过大或数据有问题。

**解决：**

1. 降低学习率：`lr0=0.001`
2. 检查标签文件格式是否正确
3. 检查是否有损坏的图片

#### 问题3：检测效果不佳

**解决：**

1. 增加训练数据量
2. 增加训练轮数：`epochs=200`
3. 使用更大的模型：YOLO11s 或 YOLO11m
4. 调整置信度阈值：`conf=0.1`
5. 检查标签是否准确

#### 问题4：中文标签显示乱码

**解决：**

```python
import matplotlib.pyplot as plt
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False
```

---

### 八、我的项目结构示例

```
YOLO11n/
├── test_yolo.py              # 预训练模型测试
├── train_custom.py           # 自定义训练脚本
├── predict.py                # 推理脚本
├── data.yaml                 # 数据集配置
├── dataset/                  # 数据集
│   ├── train/
│   ├── val/
│   └── test/
├── runs/
│   └── train/
│       └── exp/
│           └── weights/
│               ├── best.pt   # 最佳模型
│               └── last.pt   # 最后模型
└── models/                   # 导出的模型
    ├── best.onnx
    └── best.engine
```

---

### 九、学习资源推荐

1. **Ultralytics 官方文档**
   - https://docs.ultralytics.com/
   - 最权威的使用指南和 API 文档

2. **YOLO11 论文**
   - 关注 Ultralytics GitHub 仓库获取最新论文

3. **GitHub 仓库**
   - https://github.com/ultralytics/ultralytics
   - 源码、Issues、Discussions

4. **Roboflow**
   - https://roboflow.com/
   - 数据集标注、增强、格式转换工具

5. **LabelImg / LabelStudio**
   - 图片标注工具，生成 YOLO 格式标签

---

### 十、实用技巧

#### 1. 数据增强策略

YOLO 训练时自动使用以下增强：

- Mosaic：将四张图片拼接
- MixUp：图片混合
- 随机翻转、旋转、缩放
- HSV 色彩空间变换

#### 2. 超参数调优

```python
# 使用自定义超参数
results = model.train(
    data="data.yaml",
    epochs=100,
    batch=16,
    lr0=0.005,          # 调整学习率
    lrf=0.01,
    momentum=0.9,
    weight_decay=0.0005,
    augment=True,       # 启用增强
    mosaic=1.0,         # Mosaic 增强概率
    mixup=0.1,          # MixUp 增强概率
)
```

#### 3. 多 GPU 训练

```python
# 使用两张 GPU
model.train(data="data.yaml", device="0,1", batch=32)
```

---

> **学习心得：** YOLO11n 的部署比想象中简单很多，ultralytics 库封装得非常好。对于自定义数据集，数据标注和预处理是最耗时的部分，建议使用 LabelImg 或 Roboflow 提高效率。训练时从小模型（YOLO11n）开始，如果精度不够再尝试更大的模型。
