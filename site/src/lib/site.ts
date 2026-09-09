export type Locale = "en" | "zh-CN";
export type DocItem = readonly [path: string, en: string, zh: string];

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

export { docTree, docs, docTrail, docContains, docPages } from './documentation';

export function localizedPath(locale: Locale, pathname = "/") {
  const suffix = pathname === "/" ? "/" : `${pathname.replace(/\/$/, "")}/`;
  return locale === "zh-CN" ? `/zh-CN${suffix}` : suffix;
}
