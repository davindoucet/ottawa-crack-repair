import type { Metadata } from "next"
import { Phone, MapPin, Clock } from "lucide-react"
import { LeadForm } from "@/components/lead-form"
import { SITE_URL, getBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Contact Us | Foundation & Driveway Crack Repair Ottawa | Call 514-638-7382",
  description:
    "Request a callback or call 514-638-7382. Free referral for foundation crack repair and driveway sealing in Ottawa, Kanata, Nepean, Orleans, Barrhaven. No obligation.",
  keywords: ["contact Ottawa crack repair", "foundation repair Ottawa callback", "driveway sealing Ottawa quote"],
  openGraph: { url: `${SITE_URL}/contact`, title: "Contact Ottawa Crack Repair | Request a Callback" },
  alternates: { canonical: `${SITE_URL}/contact` },
}

const breadcrumbs = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
])

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#contactpage`,
  name: "Contact Ottawa Crack Repair Network",
  description: "Request a callback or call for foundation crack repair and driveway sealing in Ottawa. Free referral.",
  url: `${SITE_URL}/contact`,
  telephone: "514-638-7382",
  mainEntity: { "@id": `${SITE_URL}/#organization` },
  areaServed: ["Ottawa", "Kanata", "Nepean", "Orleans", "Barrhaven"].map((name) => ({ "@type": "City", name })),
}

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "514-638-7382",
    href: "tel:5146387382",
    description: "Speak with us directly for a fast connection.",
  },
  {
    icon: Clock,
    title: "Response Time",
    detail: "Within 24 Hours",
    description: "Most homeowners are matched with a specialist the same day.",
  },
  {
    icon: MapPin,
    title: "Service Area",
    detail: "Greater Ottawa Region",
    description: "Ottawa, Kanata, Nepean, Orleans, and Barrhaven.",
  },
]

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>
}) {
  const params = await searchParams
  const defaultService =
    params?.service === "foundation" || params?.service === "driveway"
      ? params.service
      : undefined

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <section className="bg-navy-dark py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Contact Us for Crack Repair in Ottawa
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            Foundation or driveway? Call us or fill out the form. We serve
            Ottawa, Kanata, Nepean, Orleans, Barrhaven, and nearby areas.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-base leading-relaxed text-muted-foreground">
              Need foundation crack repair or driveway sealing in Ottawa? We
              connect homeowners with local contractors for both services. We are
              a referral service—we do not perform repairs. Request a callback or
              call us. There is no cost and no obligation.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-foreground">
                Request a Call Back
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and we will connect you with a licensed
                specialist in your area.
              </p>
              <div className="mt-6">
                <LeadForm defaultService={defaultService} />
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-foreground">
                Get In Touch
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefer to call? Reach us directly for immediate assistance.
              </p>
              <div className="mt-6 flex flex-col gap-6">
                {contactInfo.map(({ icon: Icon, title, detail, href, description }) => (
                  <div
                    key={title}
                    className="rounded-lg border border-border bg-card p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy text-primary-foreground">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-card-foreground">
                          {title}
                        </h3>
                        {href ? (
                          <a
                            href={href}
                            className="mt-0.5 text-lg font-bold text-navy hover:text-navy-light"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-lg font-bold text-card-foreground">
                            {detail}
                          </p>
                        )}
                        <p className="mt-1 text-xs text-muted-foreground">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
