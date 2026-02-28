import type { Metadata } from "next"
import {
  Wrench,
  Droplets,
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SITE_URL, getBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Foundation Repair Services Ottawa | Crack Injection & Waterproofing | Call 514-638-7382",
  description:
    "Foundation repair services Ottawa. Free referral for crack injection, basement waterproofing & foundation leak repair. Ottawa, Kanata, Nepean, Orleans, Barrhaven. Call 514-638-7382.",
  keywords: ["foundation repair Ottawa", "crack injection Ottawa", "basement waterproofing Ottawa", "foundation leak repair Ottawa"],
  openGraph: { url: `${SITE_URL}/services`, title: "Foundation Repair Services Ottawa | Contractor Referral" },
  alternates: { canonical: `${SITE_URL}/services` },
}

const breadcrumbs = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
])

const services = [
  {
    icon: Wrench,
    title: "Crack Injection (Epoxy & Polyurethane)",
    description:
      "We connect you with contractors who provide crack injection—one of the most effective methods for repairing foundation cracks. Contractors in our network use professional-grade epoxy and polyurethane resins to seal cracks from the inside, restoring structural integrity and preventing water penetration.",
    features: [
      "Epoxy injection for structural cracks",
      "Polyurethane injection for leaking cracks",
      "Interior application with minimal disruption",
      "Long-lasting, warranty-backed repairs",
    ],
  },
  {
    icon: Droplets,
    title: "Basement Waterproofing",
    description:
      "We connect you with contractors who offer interior and exterior waterproofing solutions. Waterproofing your basement is essential to protecting your home from moisture damage, mold, and structural deterioration. Contractors in our network provide solutions tailored to your home and budget.",
    features: [
      "Interior drainage systems and sump pumps",
      "Exterior waterproofing membrane application",
      "Moisture barrier installation",
      "Dehumidification solutions",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Foundation Leak Repair",
    description:
      "We connect you with contractors who diagnose and repair foundation leaks. Foundation leaks can lead to serious structural damage if left untreated. Contractors in our network provide thorough diagnosis and targeted repair, addressing both symptoms and root causes.",
    features: [
      "Professional leak diagnosis and assessment",
      "Targeted crack and joint sealing",
      "Drainage improvement and water management",
      "Preventive measures to avoid future leaks",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="bg-navy-dark py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Foundation Repair Services in Ottawa
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            Our network specialists cover crack injection, basement waterproofing,
            and foundation leak repair across Ottawa, Kanata, Nepean, Orleans, and Barrhaven.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <p className="text-base leading-relaxed text-muted-foreground">
              Ottawa Crack Repair Network connects homeowners in Ottawa, Kanata, Nepean,
              Orleans, and Barrhaven with local contractors who specialize in foundation
              crack repair, basement waterproofing, and leak repair. We are a referral
              service—we do not perform repairs. We match you with independent contractors
              who provide quotes and perform the work. Whether you need{" "}
              <Link href="/services/crack-injection" className="font-medium text-navy hover:text-navy-light">
                crack injection in Ottawa
              </Link>
              ,{" "}
              <Link href="/services/basement-waterproofing" className="font-medium text-navy hover:text-navy-light">
                basement waterproofing
              </Link>
              , or foundation leak repair, we help you find a contractor who serves your area.
            </p>
          </div>
          <div className="flex flex-col gap-16">
            {services.map(({ icon: Icon, title, description, features }) => (
              <div key={title} className="flex flex-col gap-6 md:flex-row md:gap-8">
                <div className="shrink-0">
                  <div className="flex size-14 items-center justify-center rounded-lg bg-navy text-primary-foreground">
                    <Icon className="size-7" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground md:text-2xl">
                    {title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Not Sure What You Need?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Call us and describe what you see. We will connect you with the
            right specialist to diagnose the problem and recommend the best
            solution.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/contact">
                Request a Call Back
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-muted"
            >
              <a href="tel:5146387382">
                <Phone className="mr-2 size-5" />
                Call 514-638-7382
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
