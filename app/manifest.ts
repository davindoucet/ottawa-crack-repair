import type { MetadataRoute } from "next"
import { SITE_URL, SITE_NAME } from "@/lib/seo"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Ottawa Crack Repair",
    description: "Free contractor referral for foundation crack repair and driveway sealing in Ottawa. Call 514-638-7382.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#1e3a5f",
    scope: "/",
    lang: "en-CA",
    categories: ["home", "business"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  }
}
