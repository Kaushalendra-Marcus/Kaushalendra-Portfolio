import { MetadataRoute } from "next";

// Update BASE_URL once you have a custom domain live
const BASE_URL = "https://kaushalendra.me";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
