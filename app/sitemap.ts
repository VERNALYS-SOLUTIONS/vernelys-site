import type { MetadataRoute } from "next";

const SITE_URL = "https://vernelys.com";

const ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/complement-excel", priority: 0.9, changeFrequency: "monthly" },
  { path: "/plateforme", priority: 0.9, changeFrequency: "monthly" },
  { path: "/download", priority: 0.9, changeFrequency: "monthly" },
  { path: "/a-propos", priority: 0.6, changeFrequency: "yearly" },
  { path: "/docs", priority: 0.7, changeFrequency: "monthly" },
  { path: "/guides", priority: 0.7, changeFrequency: "monthly" },
  { path: "/guides/premiers-pas", priority: 0.6, changeFrequency: "monthly" },
  { path: "/guides/outils-formules", priority: 0.6, changeFrequency: "monthly" },
  { path: "/guides/extraction-pdf", priority: 0.6, changeFrequency: "monthly" },
  { path: "/guides/raccourcis-mise-en-forme", priority: 0.6, changeFrequency: "monthly" },
  { path: "/guides/audit-tva", priority: 0.6, changeFrequency: "monthly" },
  { path: "/guides/assistant-ia", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/confidentialite", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
