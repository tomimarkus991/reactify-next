import { MetadataRoute } from "next";

import { siteConfig } from "../config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.baseUrl}/components`,
      lastModified: new Date(),
    },
  ];
}
