import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://signalkorea.co.kr"; // 예: https://signal-web.vercel.app
  const locales = ["ko", "en", "zh", "vi", "mn", "ja", "fr"];
  const routes = ["", "/about", "/business", "/program", "/consulting"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }
  }

  return sitemapEntries;
}