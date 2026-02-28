/**
 * Central SEO config for Ottawa Crack Repair.
 * Use for metadata, canonical URLs, and JSON-LD.
 */

export const SITE_URL = "https://ottawacrackrepair.com"

export const SITE_NAME = "Ottawa Crack Repair Network"

export const DEFAULT_DESCRIPTION =
  "Free contractor referral for foundation crack repair and driveway sealing in Ottawa. Call 514-638-7382. We connect you with local contractors in Ottawa, Kanata, Nepean, Orleans, Barrhaven. No obligation."

export const PRIMARY_KEYWORDS = [
  "foundation crack repair Ottawa",
  "driveway sealing Ottawa",
  "crack repair Ottawa",
  "basement waterproofing Ottawa",
  "crack injection Ottawa",
  "asphalt crack repair Ottawa",
  "contractor referral Ottawa",
  "foundation repair Ottawa",
  "driveway crack repair Ottawa",
  "basement crack repair Ottawa",
]

export const SERVICE_AREAS = [
  "Ottawa",
  "Kanata",
  "Nepean",
  "Orleans",
  "Barrhaven",
  "Stittsville",
  "Gloucester",
  "Vanier",
  "Greater Ottawa",
]

export const PHONE = "514-638-7382"
export const PHONE_TEL = "tel:+15146387382"

/** Organization + LocalBusiness JSON-LD for use in layout (one per site). */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness", "Organization"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    description:
      "Free referral service connecting Ottawa homeowners with local contractors for foundation crack repair, basement waterproofing, driveway sealing, and asphalt crack repair. We do not perform repairs—we connect you with licensed contractors.",
    url: SITE_URL,
    telephone: PHONE,
    email: undefined as string | undefined,
    areaServed: SERVICE_AREAS.map((name) => ({ "@type": "City", name })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ottawa",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    serviceType: [
      "Foundation crack repair referral",
      "Driveway sealing referral",
      "Basement waterproofing referral",
      "Crack injection referral",
      "Asphalt crack repair referral",
    ],
    knowsAbout: [
      "Foundation crack repair",
      "Driveway sealing",
      "Crack injection",
      "Basement waterproofing",
      "Asphalt crack filling",
      "Garage ramp sealing",
    ],
    sameAs: [] as string[],
  }
}

/** BreadcrumbList JSON-LD for a page. */
export function getBreadcrumbSchema(
  items: { name: string; path: string }[]
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}
