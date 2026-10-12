export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

/**
 * 分类唯一真相源：key 为翻译键，path 为 URL slug，二者可不同。
 * 分类 slug 必须与 content/<locale>/ 下的子目录名、content.ts 的 GROUP_TITLES 一致。
 */
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "management", path: "/management", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
