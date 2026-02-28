import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SITE_URL, getBreadcrumbSchema, PHONE_TEL } from "@/lib/seo"

const AREAS: { slug: string; name: string }[] = [
  { slug: "ottawa", name: "Ottawa" },
  { slug: "kanata", name: "Kanata" },
  { slug: "nepean", name: "Nepean" },
  { slug: "orleans", name: "Orleans" },
  { slug: "barrhaven", name: "Barrhaven" },
]

export async function generateStaticParams() {
  return AREAS.map((a) => ({ area: a.slug }))
}

function getAreaName(slug: string): string {
  return AREAS.find((a) => a.slug === slug)?.name ?? slug
}

type Props = { params: Promise<{ area: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params
  const name = getAreaName(area)
  const title = `Foundation Crack Repair ${name} | Driveway Sealing ${name} | Free Referral`
  const description = `Foundation crack repair and driveway sealing ${name}. Free referral—we connect ${name} homeowners with local contractors. Call 514-638-7382. No obligation.`
  return {
    title,
    description,
    keywords: [
      `foundation crack repair ${name}`,
      `driveway sealing ${name}`,
      `crack repair ${name}`,
      `basement waterproofing ${name}`,
    ],
    openGraph: { url: `${SITE_URL}/areas/${area}`, title },
    alternates: { canonical: `${SITE_URL}/areas/${area}` },
  }
}

export default async function AreaPage({ params }: Props) {
  const { area } = await params
  const name = getAreaName(area)
  if (name === area && !AREAS.some((a) => a.slug === area)) notFound()

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: `Service Areas`, path: "/areas" },
    { name: `${name}`, path: `/areas/${area}` },
  ])

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: name,
    description: `Foundation crack repair and driveway sealing referral service area: ${name}, Ontario.`,
    containedInPlace: { "@type": "City", name: "Ottawa", addressRegion: "ON" },
  }

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />
      <section className="bg-navy-dark py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Foundation Crack Repair &amp; Driveway Sealing in {name}
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            We connect {name} homeowners with local contractors for foundation crack repair, basement waterproofing, and driveway sealing. Free referral—call or request a callback.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-xl font-bold text-foreground">Serving {name} &amp; the Ottawa Region</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Ottawa Crack Repair Network is a free referral service. We match homeowners in {name}, Ottawa, Kanata, Nepean, Orleans, and Barrhaven with licensed contractors who perform foundation crack repair, crack injection, basement waterproofing, driveway sealing, and asphalt crack filling. We do not perform repairs—we connect you with a local specialist who will assess your property, provide a quote, and do the work.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Whether you need foundation crack repair, basement waterproofing, or driveway sealing in {name}, request a callback or call us. We respond quickly and connect you with a contractor who serves your area. No cost, no obligation.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">Get Connected in {name}</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Tell us your issue and location. We share your request with a contractor in our network who serves {name}. They contact you directly to schedule an assessment and provide a quote.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                Request a Call Back
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center rounded-lg border border-border px-6 py-3 text-sm font-semibold hover:bg-muted"
            >
              <Phone className="mr-2 size-4" />
              Call 514-638-7382
            </a>
          </div>

          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-foreground">Related</h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              <li>
                <Link href="/foundation" className="text-navy hover:underline">Foundation Crack Repair Ottawa</Link>
              </li>
              <li>
                <Link href="/driveway" className="text-navy hover:underline">Driveway Sealing Ottawa</Link>
              </li>
              <li>
                <Link href="/services" className="text-navy hover:underline">All Services</Link>
              </li>
              <li>
                <Link href="/contact" className="text-navy hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
