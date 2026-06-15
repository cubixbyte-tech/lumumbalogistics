import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { return ["","/privacy-policy","/terms-and-conditions"].map(path => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: path ? "yearly" : "monthly", priority: path ? .4 : 1 })); }
