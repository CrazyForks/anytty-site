export type Locale = "en" | "zh-CN";
export type DocItem = readonly [path: string, en: string, zh: string];
interface DocGroup { en: string; zh: string; items: readonly DocItem[] }

const configuredBase = import.meta.env.BASE_URL.replace(/\/$/, "");
export const basePath = configuredBase === "/" ? "" : configuredBase;
export const siteUrl = (import.meta.env.PUBLIC_ANYTTY_SITE_URL ?? (basePath ? "https://anytty.github.io/anytty-site" : "https://anytty.com")).replace(/\/$/, "");

export function sitePath(pathname: string) {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${basePath}${path}` || "/";
}

export function canonicalUrl(pathname: string) {
  const path = pathname === "/" ? "" : pathname.replace(/\/$/, "");
  return `${siteUrl}${path}`;
}

export const docGroups = [
  {
    en: "Start",
    zh: "开始使用",
    items: [
      ["overview", "Documentation overview", "文档总览"],
      ["quick-start", "Quick start", "快速开始"],
      ["concepts", "Product concepts", "认识 AnyTTY"],
      ["install-upgrade", "Install & upgrade", "安装、升级与卸载"],
    ],
  },
  {
    en: "Core workflows",
    zh: "核心工作流",
    items: [
      ["terminals", "Terminals & TUI", "终端与桌面工作流"],
      ["agent-workflows", "AI agent workflows", "AI Agent 工作流"],
      ["mobile", "Mobile & tablet", "移动端与平板端"],
    ],
  },
  {
    en: "Connections & files",
    zh: "连接与文件",
    items: [
      ["connections", "Endpoints & connections", "Endpoint 与连接方式"],
      ["pairing", "Pairing & access", "配对、授权与设备管理"],
      ["files", "Files & preview", "文件管理与在线预览"],
    ],
  },
  {
    en: "Cloud & trust",
    zh: "Cloud 与安全",
    items: [
      ["cloud", "AnyTTY Cloud", "AnyTTY Cloud"],
      ["operations", "Configuration & operations", "配置与日常运维"],
      ["security", "Security & privacy", "安全与隐私"],
    ],
  },
  {
    en: "Help & reference",
    zh: "帮助与参考",
    items: [
      ["troubleshooting", "Troubleshooting", "故障排查"],
      ["faq", "Frequently asked questions", "常见问题"],
      ["reference", "Command & config reference", "命令与配置参考"],
      ["releases-support", "Releases & support", "版本、支持与参与项目"],
      ["build-contribute", "Build & contribute", "构建与贡献"],
    ],
  },
] as const satisfies readonly DocGroup[];

export const docs = docGroups.reduce<DocItem[]>((items, group) => [...items, ...group.items], []);

export function localizedPath(locale: Locale, pathname = "/") {
  const suffix = pathname === "/" ? "/" : `${pathname.replace(/\/$/, "")}/`;
  return locale === "zh-CN" ? `/zh-CN${suffix}` : suffix;
}
