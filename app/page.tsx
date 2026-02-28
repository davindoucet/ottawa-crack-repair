import { HeroSection } from "@/components/hero-section"
import Link from "next/link"
import { SITE_URL } from "@/lib/seo"

export const metadata = {
  title: "Foundation Crack Repair Ottawa | Free Contractor Referral | Call 514-638-7382",
  description:
    "Foundation crack repair Ottawa & driveway sealing. Free referral—we connect you with local contractors. Ottawa, Kanata, Nepean, Orleans, Barrhaven. Call 514-638-7382. No obligation.",
  keywords: [
    "foundation crack repair Ottawa",
    "driveway sealing Ottawa",
    "crack repair Ottawa",
    "contractor referral Ottawa",
    "basement waterproofing Ottawa",
  ],
  openGraph: {
    title: "Foundation Crack Repair Ottawa | Free Contractor Referral | Call 514-638-7382",
    description:
      "Free referral for foundation crack repair and driveway sealing in Ottawa. We connect you with local contractors. Call 514-638-7382.",
    url: SITE_URL,
  },
  alternates: { canonical: SITE_URL },
}

const serviceLinks = [
  { href: "/foundation", label: "Foundation Crack Repair Ottawa" },
  { href: "/driveway", label: "Driveway Sealing Ottawa" },
  { href: "/services/basement-crack-repair", label: "Basement Crack Repair Ottawa" },
  { href: "/services/basement-waterproofing", label: "Basement Waterproofing Ottawa" },
  { href: "/services/crack-injection", label: "Crack Injection Ottawa" },
  { href: "/services/epoxy-crack-injection", label: "Epoxy Crack Injection Ottawa" },
  { href: "/services/polyurethane-crack-repair", label: "Polyurethane Crack Repair Ottawa" },
  { href: "/services/asphalt-crack-filling", label: "Asphalt Crack Filling Ottawa" },
  { href: "/services/garage-ramp-sealing", label: "Garage Ramp Sealing Ottawa" },
]

const serviceAreas = ["Ottawa", "Kanata", "Nepean", "Orleans", "Barrhaven"]

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="text-center text-base leading-relaxed text-muted-foreground">
            <strong>Foundation crack repair Ottawa</strong> and driveway sealing
            referrals—free, no obligation. Ottawa Crack Repair Network is a
            contractor referral service. We match homeowners in Ottawa, Kanata,
            Nepean, Orleans, and Barrhaven with local specialists.{" "}
            <Link href="/foundation" className="font-medium text-navy hover:text-navy-light">
              Foundation crack repair
            </Link>{" "}
            and{" "}
            <Link href="/driveway" className="font-medium text-navy hover:text-navy-light">
              driveway sealing
            </Link>{" "}
            referrals are handled separately.{" "}
            <Link href="/how-it-works" className="font-medium text-navy hover:text-navy-light">
              Learn how it works
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-medium text-navy hover:text-navy-light">
              contact us
            </Link>
            .
          </p>
        </div>
      </section>
      <section className="border-t border-border bg-secondary/50 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-center text-xl font-bold text-foreground md:text-2xl">
            Service Pages
          </h2>
          <p className="mt-3 text-center text-base text-muted-foreground">
            We connect Ottawa homeowners with contractors for these services:
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-navy hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border-t border-border py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-center text-xl font-bold text-foreground md:text-2xl">
            Service Areas
          </h2>
          <p className="mt-3 text-center text-base text-muted-foreground">
            We serve homeowners across the Ottawa region, including{" "}
            {serviceAreas.join(", ")}.
          </p>
        </div>
      </section>
      <section aria-hidden="true" className="sr-only">
        Free Ottawa contractor referral service connecting homeowners with
        foundation and driveway specialists. Foundation crack repair Ottawa,
        driveway sealing Ottawa, crack injection, basement waterproofing,
        asphalt crack filling.
      </section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            name: "Ottawa Crack Repair Network",
            description:
              "Free contractor referral for foundation crack repair and driveway sealing in Ottawa. Call 514-638-7382. We connect you with local contractors in Ottawa, Kanata, Nepean, Orleans, Barrhaven.",
            url: SITE_URL,
            publisher: { "@id": `${SITE_URL}/#organization` },
            potentialAction: {
              "@type": "CommunicateAction",
              target: { "@type": "EntryPoint", urlTemplate: "tel:514-638-7382", actionPlatform: "http://schema.org/DesktopWebPlatform" },
              description: "Call for free contractor referral - foundation crack repair and driveway sealing Ottawa",
            },
          }),
        }}
      />
    </>
  )
}
