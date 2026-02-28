import type { Metadata } from "next"
import Link from "next/link"
import { SITE_URL, getBreadcrumbSchema } from "@/lib/seo"
import { MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Service Areas | Foundation Crack Repair & Driveway Sealing Ottawa Region",
  description:
    "We connect homeowners across Ottawa, Kanata, Nepean, Orleans, and Barrhaven with local contractors for foundation crack repair and driveway sealing. Free referral.",
  openGraph: { url: `${SITE_URL}/areas`, title: "Service Areas | Ottawa Crack Repair Network" },
  alternates: { canonical: `${SITE_URL}/areas` },
}

const breadcrumbs = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Service Areas", path: "/areas" },
])

const AREAS = [
  { slug: "ottawa", name: "Ottawa" },
  { slug: "kanata", name: "Kanata" },
  { slug: "nepean", name: "Nepean" },
  { slug: "orleans", name: "Orleans" },
  { slug: "barrhaven", name: "Barrhaven" },
]

export default function AreasIndexPage() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="bg-navy-dark py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Service Areas — Ottawa Region
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            We connect homeowners across the Ottawa region with local contractors for foundation crack repair and driveway sealing. Free referral in every area listed below.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <ul className="grid gap-4 sm:grid-cols-2">
            {AREAS.map(({ slug, name }) => (
              <li key={slug}>
                <Link
                  href={`/areas/${slug}`}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted/50"
                >
                  <MapPin className="size-5 shrink-0 text-navy" />
                  <span className="font-medium">
                    Foundation &amp; Driveway — {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            Request a callback or call 514-638-7382. We match you with a contractor who serves your area.
          </p>
        </div>
      </section>
    </>
  )
}
