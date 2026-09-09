# AnyTTY 文档截图清单
以下为待补的真实界面截图。正文已留有相同 ID 的占位，关系图已有 SVG，无需截图替换。
截图使用演示设备和合成内容；记录所用客户端版本和配置。TUI 同组截图保持窗口尺寸、字体、配色一致。不要出现真实邀请码、凭据或个人业务数据。

## tui-first · 第一次创建终端
- 用途：识别创建入口与需要填写的字段；不要放配对凭据。
- 取景：默认推荐配置；打开 Ctrl+F，列表包含 New Terminal；另截 Create Terminal 表单，填 first-session，保留本地 server 和默认 shell。
- 页面：`start/quick-start`
- 交付：优先 WebP / AVIF；需要多个状态时可提供多张并以 ID 加序号命名。

## tui-workbench · TUI 工作台区域
- 用途：分清布局、任务与默认操作入口。
- 取景：同屏显示 workspace、两个 tab、左右两个 panel 和底部快捷键；标注当前焦点、终端名与设备。
- 页面：`clients/tui/overview`
- 交付：优先 WebP / AVIF；需要多个状态时可提供多张并以 ID 加序号命名。

## tui-manager · 选择器与终端管理器
- 用途：说明快速切换和任务检查的区别，展示状态、标签与资源信息。
- 取景：准备 3 个演示任务，含运行、退出、kind=task 标签；分别截 Ctrl+F 选择器和 Ctrl+G → p 管理器，保留右侧预览。
- 页面：`clients/tui/picker`
- 交付：优先 WebP / AVIF；需要多个状态时可提供多张并以 ID 加序号命名。

## tui-layout · 分屏与浮动窗口
- 用途：展示平铺、浮动和收起不等于停止进程。
- 取景：同一 workspace 内两个平铺终端、一个已打开的浮动日志窗口；再截浮动窗口收起后的状态。
- 页面：`clients/tui/layouts`
- 交付：优先 WebP / AVIF；需要多个状态时可提供多张并以 ID 加序号命名。

## tui-history · 历史选择与搜索
- 用途：区分搜索命中、文本选择和 Live。
- 取景：演示日志输出后进入历史模式；搜索 ERROR 并显示上下文，再选中两行；不使用真实业务日志。
- 页面：`clients/tui/history`
- 交付：优先 WebP / AVIF；需要多个状态时可提供多张并以 ID 加序号命名。

## tui-connections · TUI 连接管理
- 用途：说明设备状态与网络路径；隐去地址、身份指纹等真实资料。
- 取景：Ctrl+G → e，选中一个脱敏 SSH 或 Direct 演示 endpoint；包含连接状态与右侧 route 信息。
- 页面：`clients/tui/connections`
- 交付：优先 WebP / AVIF；需要多个状态时可提供多张并以 ID 加序号命名。

## tui-theme · 配置前后对照
- 用途：让读者直接看到 theme、chrome、footer 修改的作用范围。
- 取景：固定同一布局，分别使用基础配置与教程中的配色示例；保证截图尺寸相同。
- 页面：`clients/tui/config/appearance`
- 交付：优先 WebP / AVIF；需要多个状态时可提供多张并以 ID 加序号命名。

## tui-size · 尺寸控制状态
- 用途：说明查看同一任务与控制其尺寸的区别。
- 取景：电脑和手机同时打开演示终端；截 TUI 的 owner/follow/尺寸锁定提示和对应手机画面。
- 页面：`clients/tui/size`
- 交付：优先 WebP / AVIF；需要多个状态时可提供多张并以 ID 加序号命名。

## app-pair · App 配对入口
- 用途：帮助新用户找到扫码和粘贴两种入口。
- 取景：设备页右上角扫码配对入口及粘贴面板；二维码和 claim 区域留空或打码。
- 页面：`start/mobile`
- 交付：优先 WebP / AVIF；需要多个状态时可提供多张并以 ID 加序号命名。

## app-devices · 设备与网络连接
- 用途：区分编辑设备、查看线路、断开和移除。
- 取景：演示设备的更多操作面板，显示网络连接、默认设备与断开；另截网络详情中的实际路径。
- 页面：`clients/app/devices`
- 交付：优先 WebP / AVIF；需要多个状态时可提供多张并以 ID 加序号命名。

## app-terminals · App 终端列表与创建
- 用途：明确手机端也能创建任务，并说明字段属于目标主机。
- 取景：终端列表中有运行和退出任务，打开新建终端面板，展示名称、命令、目录和尺寸策略。
- 页面：`clients/app/terminals`
- 交付：优先 WebP / AVIF；需要多个状态时可提供多张并以 ID 加序号命名。

## app-input · 键盘与花瓣菜单
- 用途：展示普通文字、特殊按键与自定义动作的入口。
- 取景：使用默认键盘显示终端和扩展键；另截长按花瓣菜单及设置中的动作编辑器。
- 页面：`clients/app/input`
- 交付：优先 WebP / AVIF；需要多个状态时可提供多张并以 ID 加序号命名。

## app-appearance · App 显示与设置
- 用途：区分应用外观、终端配色和终端尺寸。
- 取景：设置页显示字体、字号、终端主题、键盘模式与自动接管尺寸；另截主题预览。
- 页面：`clients/app/appearance`
- 交付：优先 WebP / AVIF；需要多个状态时可提供多张并以 ID 加序号命名。

## app-files · 文件浏览与传输
- 用途：展示预览、下载、路径复制与传输状态。
- 取景：演示目录包含 build.log、report.json、sample.png；显示单文件菜单和传输任务，不使用个人目录。
- 页面：`clients/app/files`
- 交付：优先 WebP / AVIF；需要多个状态时可提供多张并以 ID 加序号命名。

## app-background · 后台与平板布局
- 用途：区分后台连接、通知权限、App 内分屏与系统分屏。
- 取景：截后台保持连接、终端通知设置；平板另截 App 自身 Split below 的两终端视图。
- 页面：`clients/app/background`
- 交付：优先 WebP / AVIF；需要多个状态时可提供多张并以 ID 加序号命名。
