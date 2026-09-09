# AnyTTY 文档重写审核说明

状态：按用户已确认的目录完成正文重写，供本地审核。未发布。Web 使用教程暂缓。

## 本次交付

- 61 个正式主题，每个主题有中文和英文，共 122 篇源文档。
- 导航按大模块组织，客户端下面拆分 TUI、App、CLI；TUI 内有独立配置目录。
- 原有 26 个主题 URL 在两种语言下继续可访问，内容对应新页面，canonical 指向新地址。
- 增加面包屑、当前目录展开、高亮、上一篇/下一篇，以及长文的“本页内容”。
- 6 组中英文 SVG 关系图：产品组成、工作台与任务、配置加载、配对、跨端接管、Agent 工作流。
- 15 组真实截图占位，包含用途和取景条件。见 `DOCUMENTATION_SCREENSHOTS.zh-CN.md`。

## 审核建议

1. `product/features`、`product/concepts`：核心价值、客户端与 daemon 关系是否准确。
2. `start/quick-start`：直接 anytty 自动启动，在 TUI 中创建、离开、重新打开任务。
3. `clients/tui/config/*`：配置路径、加载顺序、生效时机、默认/推荐配置、scene 完整替换规则。
4. `clients/app/*`：设备、终端、花瓣菜单、主题、文件、后台与平板分屏。
5. `agents/*`：目标选择、独立任务、等待与退出码、服务就绪、人工交接、文件交付。
6. `connections/*` 与 `maintenance/*`：网络、授权、任务生命周期的边界。

## 事实依据

核对本地公开客户端源码（复核时 commit `5d37236`）及已安装 `anytty` CLI 帮助。快捷键参考按 `tui/shortcut/defaults.go` 汇总 232 条绑定；环境映射按 `tui/config/config.go` 汇总 37 项。App 功能核对原生 Flutter 源码，不引用旧 Web 文件预览能力作为原生 App 能力。

## 已验证

- `npm run site:build`：Astro 类型检查无错误、静态构建成功，生成 186 个全站页面。
- 61 个主题双语言文件齐全，正文 DocLink 均指向目录内页面。
- 18 段 YAML 示例通过 `anytty --config FILE config validate`，校验时排除当前环境的 AnyTTY 覆盖。
- 174 个文档路由（包括旧地址）内 25,405 个站内链接、图片与锚点引用检查无缺失；各页单一 H1。
- 隔离 daemon 中验证 create/list/show/wait/capture 的 JSON 字段，任务 exit 0 和 exit 7 均能正确读取；等待超时后任务继续运行。
- 隔离环境上传与下载的文件字节一致；测试结束后停止测试 daemon。
- 浏览器检查桌面分层导航、TUI 配置的三级目录自动展开、390px 移动目录跳转与折叠、字段表局部滚动、页内锚点避开固定顶部栏。
- 修复移动端长配置字段引起的横向溢出，复核文档宽度与可用视口宽度一致。

## 验证边界与现有检查问题

`npm run site:check` 的站点构建通过，随后公共资源检查仍报告 3 个已有品牌 PNG 文件需转换格式：`anytty-mascot.png`、`browser-back.png`、`browser-front.png`（均在 `site/public/assets/brand/motion/`）。这些属于已有品牌工作，本次文档未修改它们。

App 页面依据源码核对，未把本次文档网站的手机视口检查当成真实手机端产品实测。SSH、Direct、Cloud 的跨机器配对与网络场景没有在本次隔离 CLI 测试中实测；文档中使用替换式示例。真实界面图片仍由截图清单补齐。

## 本地预览

`http://127.0.0.1:4321/anytty-site/zh-CN/docs/overview/`

当前文件已可审核，不要求先补齐图片才能阅读。待内容和真实截图审核后，再安排发布。

## Agent 首步入口更新

根据后续反馈，首页已精简为“先把 llm.txt 发给本地 Agent 提问，再按需查阅文章”。中英文首页均提供纯文本链接、GitHub 查看链接和复制提问模板。

`llm.txt` 是约 17 KB 的独立使用指南，覆盖核心关系、TUI/App 操作、配置、连接、CLI 任务与排障，按需链接公开客户端源码。为提供立即可读取的 URL，单独将此文件提交并推送到 `docs/llm-guide` 分支（commit `a74d090`），没有将整个待审文档站发布到线上。

纯文本地址：`https://raw.githubusercontent.com/anytty/anytty-site/refs/heads/docs/llm-guide/llm.txt`。已从公网下载核对与本地文件字节一致；指南 YAML 通过运行时校验。首页复制操作已在浏览器验证，站点构建通过。

## 正式发布

官网与文档统一发布到 `https://anytty.com/`。Agent 指南随主分支维护，首页使用 `https://raw.githubusercontent.com/anytty/anytty-site/refs/heads/main/llm.txt`。窄屏文档目录使用左侧抽屉，支持当前文章定位、遮罩及 Esc 关闭。品牌 PNG 原始素材保留在 `docs/assets/brand/motion/`，不直接部署到网页静态资源目录。
