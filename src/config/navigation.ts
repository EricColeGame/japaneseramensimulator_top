type NavItem = {
  key: string;
  path: string;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG: readonly NavItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
