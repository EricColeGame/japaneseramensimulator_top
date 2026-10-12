import { routing } from "@/i18n/routing";

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
    website?: string;
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
    discord: "https://discord.gg/wilddog",
    youtube: "https://www.youtube.com/@wilddoggame",
    twitter: "https://x.com/WILDDOG_Game_EN",
    website: "https://wilddog.jp/japaneseramensimulator",
  },
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
};
