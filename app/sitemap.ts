import type { MetadataRoute } from "next";

const SITE_URL = "https://vernelys.com";

const ROUTES = [
  "",
  "/complement-excel",
  "/plateforme",
  "/a-propos",
  "/docs",
  "/guides",
  "/download",
  "/contact",
  "/confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
  }));
}
