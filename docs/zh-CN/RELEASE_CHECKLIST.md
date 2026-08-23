# 站点发布检查清单

本清单用于发布 AnyTTY 官网与产品文档。产品二进制、安装脚本、tag 和 GitHub Releases 统一由 [`anytty/anytty`](https://github.com/anytty/anytty) 管理；本仓库不得再发布第二份产品资产。

## 源码与边界

- [ ] 选择已审核的站点提交并检查完整公开差异。
- [ ] 确认站点不含私有服务实现、生产配置、凭据或私有历史。
- [ ] 在本仓库执行 `npm run site:check`。
- [ ] 检查生成文件、截图、fixture 和声明中没有秘密或个人数据。

## 质量

- [ ] 对照当前公开客户端源码和 Release notes 核验产品说明。
- [ ] 生成 Pages 产物并检查桌面、手机、键盘和 reduced-motion。
- [ ] 验证 README、文档、issue 表单和安全链接。
- [ ] 审查变更记录、平台状态、已知限制和升级说明。

## 法律与供应链

- [ ] 检查 Apache-2.0、NOTICE、DCO、商标政策和版权年份。
- [ ] 重新生成并审核 Go、npm、Android、iOS、字体与固定第三方声明。
- [ ] 审查 Dependabot 与 CI，处理已知漏洞或记录接受的风险。
- [ ] 确认所有安装和下载链接均指向 `anytty/anytty`，并使用其中的 checksum。

## GitHub 与发布

- [ ] 启用私密漏洞报告并验证维护者通知路径。
- [ ] Pages source 设为 GitHub Actions，并验证 `/anytty-site/` 基址。
- [ ] 检查分支保护、必需检查、CODEOWNERS、Discussions、issue 与 Actions 权限。
- [ ] 审查现有公开历史是否适合发布，之后才决定是否初始化干净历史。
- [ ] 确认本仓库没有创建产品 Release；产品 tag 和资产只能从 `anytty/anytty` 发布。
- [ ] 由第二名维护者或指定审核人确认公开边界后再发布。
