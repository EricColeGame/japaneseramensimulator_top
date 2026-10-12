export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Japanese Ramen Simulator Wiki",
  shortName: "Japanese Ramen Simulator",
  logoText: "JR",
  tagline: "Complete Guides, Recipes, Upgrades & Tips",
  description: "Your ultimate guide to Japanese Ramen Simulator on Steam! Explore ramen recipes, ingredients, shop upgrades, money-making strategies, and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://japaneseramensimulator.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://japaneseramensimulator.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/4968640/Japanese_Ramen_Simulator/",
  heroVideoId: "r7uAvTFB_JQ", // Japanese Ramen Simulator Early Access Trailer (Wild Dog, official)
  social: {
    youtube: "https://www.youtube.com/@wilddoggame",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
