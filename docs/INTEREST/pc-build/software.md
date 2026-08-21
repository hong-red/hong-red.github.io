# 软件篇：微PE工具箱装机全攻略

> **参考教程**：[💻微PE工具箱U盘制作及重装系统全攻略！](https://xhslink.cn/o/oVbyRFcLo4)（小红书）
> 
> 
> 
> 本指南基于该教程步骤，补充实际装机中遇到的坑和解决方案。
> 
> 

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=OTY3NTIwMThjMDE2M2NiNzMyZTg1MWJkMmMzYmIxOWFfN2IzMDUyMDAxMWQ0OWU0NTg2MjVmYmE2MGQ1MzdkMWFfSUQ6NzY3NjE1NzgzMTM4MDQwNTQ5MF8xNzg3MzIyOTcwOjE3ODc0MDkzNzBfVjM)

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=ZDljYmFhZjlmNzk1MTljYmFkYmRjYzUyMzQ1MzVmMmZfMWM0MDI5MDZmZmU3YTViNmQwYTBhMzE0NDgyYzc3ZjdfSUQ6NzY3NjE1NzgzMDUyNDc1MTEzNV8xNzg3MzIyOTcwOjE3ODc0MDkzNzBfVjM)

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=NTBjYjE0MDQyZTAzNmUxODE4OTdhYjJmNGJmNTVmZmJfYTk5NjJjNmRlNWRlOGE3ZGRhOTgxOGNmMWM1ZWIyZmZfSUQ6NzY3NjE1NzgzMDczODcwOTc4NV8xNzg3MzIyOTcwOjE3ODc0MDkzNzBfVjM)





## 第一部分：需要准备和下载的东西



### 1\. 硬件准备

- **U盘**：≥8GB（制作时会清空所有数据）

- **另一台正常使用的电脑**：用于下载工具和系统镜像



### 2\. 需要下载的文件



|工具/文件|用途|下载地址|
|---|---|---|
|微PE工具箱（64位）|制作PE启动盘|官网 `wepe.com.cn`，下载 `WePE_64_V2.3.exe`|
|Windows 10/11 ISO镜像|系统安装文件|微软官网下载MediaCreationTool，选择“为另一台电脑创建安装介质”→“ISO文件”|



### 3\. 参考教程原步骤

原教程分为两大步：

1. **制作启动盘**：下载镜像→下载PE工具→运行PE制作U盘→将ISO复制到U盘

2. **装系统**：U盘启动→进入PE→DiskGenius分区→Windows安装器安装→重启拔U盘→完成设置



> ⚠️ 以下内容为原教程未提及的\*\*实战踩坑补充\*\*，建议与原教程对照阅读。
> 
> 





## 第二部分：在PE上进行的操作（按顺序）



### 2\.1 制作PE启动盘（在另一台电脑上操作）

> 参考教程第一步
> 
> 



1. 插入U盘（≥8GB）

2. 双击运行 `WePE_64_V2.3.exe`

3. 点击 **“安装PE到U盘”**

4. 选择你的U盘，分区格式选 **FAT32**

5. 点击 \*\*“立即安装”\*\*，等待进度条完成（约2分钟）

6. 将下载好的 **Windows ISO镜像文件** 复制到U盘根目录



### 2\.2 从U盘启动进入PE

> 参考教程第二步第1条
> 
> 



1. 将制作好的U盘插入要装机的电脑（建议插\*\*主机后面板USB 2\.0口\*\*）

2. 开机按 `F11` 进入启动菜单，选择U盘启动

3. ⚠️ \*\*关键点\*\*：如果U盘有两个选项（一个带 `UEFI` 前缀，一个不带）：

    - 先选 \*\*带 **`UEFI`** 的\*\*；如果PE里“此电脑”看不到硬盘，重启换 \*\*不带 **`UEFI`** 的\*\* 再试

4. PE启动界面选第一个选项进入桌面



### 2\.3 进入PE后的操作步骤



**步骤1：分区与格式化硬盘**

> 参考教程第二步第3条
> 
> 



- 双击桌面上的 **`DiskGenius`**

- 选中你要装系统的硬盘（看容量确认）

- 右键点击该硬盘 → \*\*“快速分区”\*\*：

    - 分区表类型：老主板（B75）选 \*\*MBR\*\*，新主板选 **GPT**

    - 分区数目：自定（建议至少分一个C盘）

    - 勾选 **“对齐到4K”**

    - 点击 **“确定”**

- 等待完成（约1\-3分钟），关闭DiskGenius



**步骤2：安装系统（WinNTSetup）**

> 参考教程第二步第4条
> 
> 



- 双击桌面上的 `**Windows安装器**`（WinNTSetup）

- **第一项**：点击“选择” → 浏览到U盘内的ISO镜像 → 进入 `sources` 文件夹 → 选中 `install.wim` 或 `install.esd`

- **第二项（引导驱动器）**：

    - MBR分区：选 **C盘**

    - GPT分区：选 \*\*EFI分区\*\*（FAT32，约100\-300MB）

- **第三项（安装位置）**：选 **C盘**

- 点击 **“开始安装”** → 确定 → 等待进度条完成（约10\-15分钟）



**步骤3：重启并拔掉U盘**

> 参考教程第二步第5条
> 
> 



- 安装完成后，点击 **“重启”**

- **在屏幕变黑的瞬间，立即拔掉U盘**



**步骤4：完成Windows首次设置**

> 参考教程第二步第5条
> 
> 



- 进入Windows设置向导

- 出现网络连接界面时，点击 **“我没有Internet连接”** → **“继续执行有限设置”**

- 创建本地账户，完成设置，进入桌面





## 第三部分：BIOS 启动设置（进入PE前的关键操作）



> 微星主板通用操作，适用于 B75MA\-P45 及其他微星主板。
> 
> 



### 一、常用按键速查



|按键|时机|作用|
|---|---|---|
|`Del`|开机后**连续快速按**|进入 BIOS 设置界面（SETTINGS）|
|`F11`|开机后**连续快速按**|进入 Boot Menu（启动菜单），\*\*临时选择\*\*本次从哪个设备启动|
|`F10`|在 BIOS 界面中按|**保存当前设置并重启**（会弹出确认框，选 `Yes` 或 `OK`）|
|`Esc`|在 BIOS 界面中按|返回上一级菜单，或退出当前选项（不保存）|



### 二、Boot Menu（按 F11）



开机连续按 `F11` 后，屏幕会显示一个设备列表，例如：



```Plain Text

Please select boot device:

UEFI: General UDisk 5.00      ← 带 UEFI 前缀的 U 盘（UEFI 模式）
General UDisk 5.00            ← 不带 UEFI 的 U 盘（传统模式）
SATA5:Colorful SL300 120GB    ← 你的 SSD 硬盘
Enter Setup                   ← 进入 BIOS 设置
```



- **选择设备**：用键盘 **↑ ↓ 方向键** 移动高亮到目标设备，按 **`Enter`** 确认

- **UEFI vs 不带 UEFI**：如果进 PE 后“此电脑”里看不到硬盘，说明启动模式选错了，重启换另一个 U 盘选项再试

- **Enter Setup**：等同于开机按 `Del`，进入 BIOS 详细设置界面



### 三、BIOS 中永久修改启动顺序（按 Del 进入）



> 如果不想每次按 F11 手动选，可以在 BIOS 里把启动顺序固定下来。
> 
> 



**操作路径：**

```Plain Text

SETTINGS → Boot → Boot Device Priority
```



**步骤：**

1. 开机按 `Del` 进入 BIOS

2. 方向键移到右上角 `**SETTINGS**`，按 `Enter`

3. 选择 `**Boot**`，按 `Enter`

4. 选择 `**Boot Device Priority**`，按 `Enter`

5. 在 `Boot Option #1` 上按 `Enter`，弹出设备列表

6. 用方向键选择目标设备（U盘或硬盘），按 `Enter` 确认

7. 按 **`F10`** 保存，弹出确认框选 `Yes`，电脑自动重启



### 四、⚠️ 特殊情况：改了启动顺序但没生效



> 如果 `Boot Option #1` 已经改成了 U盘，但重启后还是从硬盘启动或报错，需要检查这里：
> 
> 



**操作路径：**

```Plain Text

SETTINGS → Boot → Hard Disk Drive BBS Priorities
```



**原因：** `Hard Disk Drive BBS Priorities`（硬盘 BBS 优先级）的\*\*优先级高于\*\* `Boot Option #1`。也就是说，即使你在 `Boot Option #1` 里选了 U盘，但如果 `Hard Disk Drive BBS Priorities` 里的第一项是 SSD，电脑还是优先从 SSD 启动。



**解决方法：**

1. 在 `Boot` 菜单中找到 `**Hard Disk Drive BBS Priorities**`，按 `Enter` 进入

2. 把 `Boot Option #1` 改为你的 \*\*U 盘\*\*（如果列表里有的话）

3. 如果列表里没有 U盘，说明 U盘被识别为“可移动设备”而非“硬盘”，此时应回到 `Boot Option #1` 中，直接选 `USB Hard Disk` 或 `USB Key` 类的选项

4. 按 `Esc` 返回，按 **`F10`** 保存重启



### 五、BIOS 其他常用设置（可选）



|设置项|位置|推荐值|作用|
|---|---|---|---|
|Boot mode select|SETTINGS → Boot → Boot Configuration|**LEGACY\+UEFI**|同时支持两种启动模式，兼容性最好|
|Fast Boot|SETTINGS → Boot → Boot Configuration|**Disabled**（关闭）|老主板建议关闭，避免跳过设备检测导致识别不到硬盘|
|Restore after AC Power Loss|SETTINGS → Power / ECO|**Power on**|断电恢复后自动开机；或保持默认 `Power off`|



### 六、快速参考卡



|目标|操作方法|
|---|---|
|本次从 U 盘启动|开机按 `F11` → 选 U 盘 → `Enter`|
|本次从硬盘启动|开机按 `F11` → 选 SSD → `Enter`|
|永久改启动顺序|按 `Del` 进 BIOS → Boot → Boot Device Priority → 改 `Boot Option #1` → `F10` 保存|
|改硬盘优先级|按 `Del` 进 BIOS → Boot → Hard Disk Drive BBS Priorities → 改顺序 → `F10` 保存|
|进 BIOS|开机连续按 `Del`|
|保存并重启|在 BIOS 中按 `F10` → `Yes`|
|不保存退出|在 BIOS 中按 `Esc` 或 `SETTINGS` → `Save & Exit` → 选 `Discard Changes and Exit`|





## 第四部分：网络连接（装完系统后）



### 通过手机USB共享网络让电脑上网



> 适用场景：电脑无法连接WiFi或插网线没反应时，临时通过手机共享网络上网。
> 
> 



**操作步骤：**



1. **用USB数据线连接手机和电脑**（插主机后面USB口）

2. **手机上开启“USB网络共享”**：

    - 安卓手机：设置 → 网络和互联网 → 热点和网络共享 → 打开 **“USB网络共享”**

    - 苹果手机：设置 → 个人热点 → 打开“允许其他人加入”

    - 手机可先连WiFi，也可用流量，USB共享会把当前网络共享给电脑

3. **电脑自动联网**：任务栏网络图标变为“已连接”

4. 如果没反应，\*\*重启电脑\*\*（保持手机连接）



**注意事项：**

- 手机连WiFi时，电脑走WiFi网络，不消耗流量

- 手机用流量时，注意流量余额

- 关机后再开机，需重新开启USB网络共享

- 部分安卓手机需先开启“开发者模式”才能找到该选项





## 第五部分：实战踩坑记录



> 以下为原教程未提及的\*\*实战中遇到的问题及解决方法\*\*。
> 
> 



### 坑1：PE里看不到硬盘

- **现象**：PE能进，但“此电脑”里只有U盘，没有SSD

- **原因**：PE启动模式（UEFI/Legacy）与硬盘分区格式（GPT/MBR）不匹配

- **解决**：重启按 `F11`，\*\*切换U盘启动模式\*\*（带UEFI vs 不带），重新进入PE



### 坑2：WinNTSetup报“拒绝访问”（0x5）

- **现象**：安装过程中弹出错误，无法继续

- **原因**：引导分区（EFI分区）被占用或权限不足

- **解决**：打开DiskGenius → 右键点击EFI分区（FAT32）→ **“格式化”** → 重新执行安装



### 坑3：装完重启提示“Reboot and Select proper Boot device”

- **现象**：拔掉U盘后黑屏，提示找不到可启动设备

- **原因**：引导没有正确写入硬盘

- **解决**：进PE → 打开 `Dism++` → **“恢复功能”** → **“引导修复”** → 选择C盘 → 重启



### 坑4：BIOS改了启动顺序但无效

- **现象**：BIOS里改了启动顺序，但重启还是进PE或报错

- **原因**：`Hard Disk Drive BBS Priorities` 的优先级高于 `Boot Option #1`

- **解决**：进BIOS → `Boot` → `Hard Disk Drive BBS Priorities` → 把目标设备调到第一位



### 坑5：开机卡在 `Shell>` 命令行

- **现象**：电脑启动后进入黑底白字的 `Shell>` 界面

- **原因**：系统引导完全丢失

- **解决**：进PE → 打开命令提示符 → 输入 `bcdboot C:\Windows` → 重启



### 坑6：第一次开机不稳定，需重复几次才能进系统

- **现象**：开机“转一圈就停”，需要重启两三次才能进系统

- **原因**：电源老化（如航嘉网彪425），启动时电压建立慢

- **解决**：养成“长按开机键1秒再松手”的习惯；或进BIOS设置 `Boot Delay` / `POST Time` 为3\-5秒



### 坑7：分区时选MBR还是GPT？

- 老主板（B75）推荐 \*\*MBR\*\*，兼容性更好

- 硬盘容量超过2TB必须用 **GPT**

- 想用UEFI快速启动，选 **GPT \+ UEFI模式**





## 附录：常用命令速查



|用途|命令（在PE里执行）|
|---|---|
|重建引导|`bcdboot C:\Windows`|
|修复引导记录|`bootrec /fixmbr` \+ `bootrec /fixboot` \+ `bootrec /rebuildbcd`|
|修复系统文件（进系统后执行）|`sfc /scannow`|



---



**软件篇完。**

