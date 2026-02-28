import type { Metadata } from "next"
import {
  Phone,
  ClipboardList,
  Calendar,
  HelpCircle,
  ArrowRight,
} from "lucide-react"
import { ContractorForm } from "@/components/contractor-form"
import Link from "next/link"
import { SITE_URL, getBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "For Contractors | Join Our Ottawa Crack Repair Referral Network",
  description:
    "Join our referral network. We connect Ottawa homeowners with local foundation repair contractors. Apply for qualified leads—crack injection, waterproofing, driveway sealing. Ottawa, Kanata, Nepean, Orleans, Barrhaven.",
  keywords: ["contractor referral Ottawa", "foundation repair leads Ottawa", "join referral network Ottawa"],
  openGraph: { url: `${SITE_URL}/for-contractors`, title: "For Contractors | Ottawa Crack Repair Referral Network" },
  alternates: { canonical: `${SITE_URL}/for-contractors` },
}

const breadcrumbs = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "For Contractors", path: "/for-contractors" },
])

const offerings = [
  {
    icon: Phone,
    title: "Qualified leads",
    description:
      "Homeowners who have already expressed interest in foundation repair, crack injection, or waterproofing.",
  },
  {
    icon: ClipboardList,
    title: "Intake & scheduling help",
    description:
      "We handle initial intake—location, issue description, contact info—and pass qualified requests to you.",
  },
  {
    icon: Calendar,
    title: "Scheduling support",
    description:
      "We help connect you with homeowners and facilitate the initial contact so you can focus on the work.",
  },
]

const faqs = [
  {
    q: "Do you pay for leads?",
    a: "No. We operate on a referral model. Contractors in our network may pay a marketing or referral fee when we connect them with a homeowner. Terms are discussed during the application process.",
  },
  {
    q: "What do you need from me?",
    a: "Company name, service area (Ottawa region), proof of insurance, and contact information. We vet contractors to ensure quality for homeowners.",
  },
]

export default function ForContractorsPage() {
  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="bg-navy-dark py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            For Contractors
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            We connect Ottawa homeowners with local foundation repair contractors.
            If you provide crack injection, waterproofing, or foundation leak
            repair, we want to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            What We Provide
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            We are a referral and matching service. We do not perform repairs. We
            connect homeowners with contractors who do.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {offerings.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex size-12 items-center justify-center rounded-lg bg-navy text-primary-foreground">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Common Questions
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="flex gap-4 rounded-lg border border-border bg-card p-5"
              >
                <HelpCircle className="mt-0.5 size-5 shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold text-card-foreground">{q}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Apply to Join Our Network
              </h2>
              <p className="mt-3 text-muted-foreground">
                Tell us about your company and service area. We will review your
                application and be in touch to discuss next steps.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <span>Prefer to talk first?</span>
                <a
                  href="tel:5146387382"
                  className="font-medium text-navy hover:text-navy-light"
                >
                  514-638-7382
                </a>
              </div>
            </div>
            <div>
              <ContractorForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-balance text-2xl font-bold md:text-3xl">
            Ready to Get Connected?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
            Homeowners need local foundation repair specialists. We connect you
            with qualified leads.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Request a Call Back
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <a
              href="tel:5146387382"
              className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/30 bg-transparent px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="mr-2 size-4" />
              Call 514-638-7382
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
