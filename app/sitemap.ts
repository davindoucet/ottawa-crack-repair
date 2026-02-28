import { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

const lastMod = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: lastMod, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/foundation`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}/driveway`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}/contact`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/services`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/services/crack-injection`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/basement-waterproofing`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/basement-crack-repair`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/epoxy-crack-injection`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/polyurethane-crack-repair`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/asphalt-crack-filling`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/services/garage-ramp-sealing`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/areas`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    ...["ottawa", "kanata", "nepean", "orleans", "barrhaven"].map((area) => ({
      url: `${SITE_URL}/areas/${area}`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/how-it-works`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/for-contractors`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/privacy`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
  ]
}
