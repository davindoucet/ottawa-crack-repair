import type { Metadata } from "next"
import {
  PhoneCall,
  Users,
  CalendarCheck,
  ShieldCheck,
  Clock,
  DollarSign,
  ArrowRight,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "How It Works | Ottawa Crack Repair Referral | Free Contractor Matching",
  description:
    "How our Ottawa crack repair referral works: call or submit a form, we match you with a local contractor for foundation or driveway work. Free, same-day response. Ottawa, Kanata, Nepean, Orleans, Barrhaven.",
  keywords: ["how Ottawa crack repair referral works", "contractor matching Ottawa", "foundation repair referral"],
  openGraph: { url: `${SITE_URL}/how-it-works`, title: "How It Works | Ottawa Crack Repair Referral" },
  alternates: { canonical: `${SITE_URL}/how-it-works` },
}

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Submit Your Request or Call",
    description:
      "Call 514-638-7382 or fill out our contact form. Tell us whether you need foundation or driveway help, your location, and what you are seeing. No cost, no obligation.",
  },
  {
    icon: Users,
    step: "02",
    title: "We Match You With a Local Contractor",
    description:
      "We share your request with a contractor in our network who serves your area and handles the type of work you need. We do not perform repairs—we make the connection.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Contractor Provides Quote and Performs Work",
    description:
      "The contractor contacts you directly to schedule an assessment, provide a quote, and perform the work. All work is done by the contractor you hire, not by us.",
  },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: "Independent Contractors",
    description:
      "We connect you with contractors who perform foundation and driveway work. Verify credentials directly with the contractor.",
  },
  {
    icon: Clock,
    title: "Fast Local Response",
    description:
      "Most homeowners are connected with a specialist within 24 hours of reaching out.",
  },
  {
    icon: DollarSign,
    title: "Completely Free Service",
    description:
      "Our matching service costs you nothing. No hidden fees, no obligations, no pressure.",
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-navy-dark py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            How Our Referral Works in Ottawa
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            Getting connected with a contractor for foundation or driveway work
            is simple, free, and takes just minutes. We serve Ottawa, Kanata,
            Nepean, Orleans, and Barrhaven.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-base leading-relaxed text-muted-foreground">
              Ottawa Crack Repair Network is a free referral service. We connect
              homeowners with independent third-party contractors for foundation
              crack repair and driveway sealing. We do not perform any repairs.
              You tell us your issue and location, we share your request with a
              contractor, and the contractor contacts you to provide a quote and
              do the work. We serve Ottawa, Kanata, Nepean, Orleans, Barrhaven,
              and surrounding areas.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card px-5 py-4">
            <p className="text-sm font-semibold text-foreground">
              How matching works
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Tell us what is happening and your area. We share your request with
              a local contractor in our network. The contractor contacts you
              directly to provide an estimate and schedule the work.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-12">
            {steps.map(({ icon: Icon, step, title, description }) => (
              <div key={step} className="flex gap-6">
                <div className="flex shrink-0 flex-col items-center">
                  <div className="flex size-14 items-center justify-center rounded-full bg-navy text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <div className="mt-2 h-full w-px bg-border" />
                </div>
                <div className="pb-8">
                  <span className="text-sm font-bold text-accent">Step {step}</span>
                  <h2 className="mt-1 text-xl font-semibold text-foreground">
                    {title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
            Why Homeowners Choose Us
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-navy text-primary-foreground">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
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

      <section className="bg-background py-12">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="rounded-lg border-2 border-amber-200 bg-amber-50 px-5 py-4 dark:border-amber-900 dark:bg-amber-950">
            <p className="text-sm font-semibold text-foreground">
              Important disclaimer
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We connect homeowners with independent third-party contractors. All
              work is performed by the contractor you hire. We do not perform
              repairs, provide engineering advice, or guarantee any work. Quotes,
              pricing, and warranties come from the contractor.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-balance text-2xl font-bold md:text-3xl">
            Get Connected Today
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
            Call us or fill out our contact form to get matched with a local
            contractor for foundation or driveway work.
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
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="tel:5146387382">
                <Phone className="mr-2 size-5" />
                Call 514-638-7382
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80">
            We respond the same day.
          </p>
        </div>
      </section>
    </>
  )
}
