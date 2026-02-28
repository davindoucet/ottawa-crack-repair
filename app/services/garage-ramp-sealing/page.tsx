import type { Metadata } from "next"
import { Phone, ArrowRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { SITE_URL, getBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Garage Ramp Sealing Ottawa | Driveway & Apron Sealcoat Referral | Call 514-638-7382",
  description:
    "Garage ramp sealing Ottawa. Free referral—we connect you with local contractors for garage apron sealing, driveway sealing & asphalt maintenance. Ottawa, Kanata, Nepean, Orleans, Barrhaven.",
  keywords: ["garage ramp sealing Ottawa", "garage apron sealing Ottawa", "driveway sealing Ottawa"],
  openGraph: { url: `${SITE_URL}/services/garage-ramp-sealing`, title: "Garage Ramp Sealing Ottawa | Contractor Referral" },
  alternates: { canonical: `${SITE_URL}/services/garage-ramp-sealing` },
}

const breadcrumbs = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Garage Ramp Sealing Ottawa", path: "/services/garage-ramp-sealing" },
])

const faqs = [
  {
    question: "What is garage ramp sealing?",
    answer:
      "Garage ramp sealing involves applying sealant to the asphalt or concrete ramp leading to the garage. It protects the surface from water, oil, and UV damage, extending its life. Contractors in our network often combine it with driveway sealing.",
  },
  {
    question: "Do you perform garage ramp sealing?",
    answer:
      "No. We are a referral network. We connect you with independent contractors in Ottawa who perform garage ramp sealing, driveway sealing, and related work. All work is done by the contractor you hire.",
  },
  {
    question: "How often should I seal my garage ramp?",
    answer:
      "Most contractors recommend sealing asphalt every 2–3 years. The contractor you are matched with will assess your garage ramp and driveway and recommend a schedule based on condition.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We connect homeowners across the Ottawa region, including Ottawa, Kanata, Nepean, Orleans, and Barrhaven.",
  },
]

export default function GarageRampSealingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Garage Ramp Sealing",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Ottawa" },
      { "@type": "City", name: "Kanata" },
      { "@type": "City", name: "Nepean" },
      { "@type": "City", name: "Orleans" },
      { "@type": "City", name: "Barrhaven" },
    ],
    description:
      "Referral service connecting Ottawa homeowners with contractors for garage ramp sealing and driveway sealcoating.",
  }

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="bg-navy-dark py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Garage Ramp Sealing Ottawa
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            We connect Ottawa homeowners with local contractors who provide
            garage ramp sealing and garage apron sealcoating.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Garage ramp sealing protects the asphalt or concrete surface
              leading to your garage from water, oil, and UV damage. In
              Ottawa’s climate, freeze-thaw cycles and road salt can
              accelerate deterioration. Sealing the garage ramp helps extend
              its life and maintain a clean appearance. Ottawa Crack Repair
              Network is a free referral service. We do not perform repairs or
              sealing. We connect you with licensed local contractors who
              specialize in garage ramp sealing in Ottawa, Kanata, Nepean,
              Orleans, and Barrhaven.
            </p>
            <p>
              Contractors in our network typically offer garage ramp sealing
              along with driveway sealing. The process may include crack
              filling, cleaning, and application of sealcoat. The contractor
              you are matched with will inspect your garage ramp and driveway,
              recommend the appropriate treatment, and provide a quote. They
              perform the work. We simply facilitate the connection between
              you and a qualified specialist.
            </p>
            <p>
              Signs that your garage ramp may need sealing include faded or
              gray asphalt, visible cracks, oil stains, or a rough, weathered
              surface. Addressing these issues promptly can prevent more
              extensive damage. The contractor will assess your situation and
              explain your options.
            </p>
            <p>
              Homeowners across Ottawa, Nepean, Kanata, Orleans, and Barrhaven
              contact us when they want to protect their garage ramp and
              driveway. Our referral process is free and without obligation.
              Tell us about your property and location. We share your request
              with a contractor in our network. The contractor contacts you
              directly to schedule an assessment and provide a quote. We
              connect homeowners with independent third-party contractors. All
              work is performed by the contractor you hire.
            </p>
            <p>
              For garage ramp sealing in Ottawa, request a callback or call
              us. We respond the same day and connect you with a local
              contractor who serves your area.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-foreground">
              Related Services
            </h2>
            <ul className="flex flex-wrap gap-2">
              <li>
                <Link href="/driveway" className="text-navy hover:underline">
                  Driveway Sealing Ottawa
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground">•</span>
              </li>
              <li>
                <Link
                  href="/services/asphalt-crack-filling"
                  className="text-navy hover:underline"
                >
                  Asphalt Crack Filling Ottawa
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground">•</span>
              </li>
              <li>
                <Link href="/foundation" className="text-navy hover:underline">
                  Foundation Crack Repair Ottawa
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground">•</span>
              </li>
              <li>
                <Link href="/contact" className="text-navy hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-10 flex items-start gap-3 rounded-lg border border-border bg-secondary px-5 py-4">
            <Info className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Disclosure:</span>{" "}
              We connect homeowners with independent third-party contractors.
              All work is performed by the contractor you hire. We do not
              perform repairs or sealing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-navy py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Request a Callback for Garage Ramp Sealing in Ottawa
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
            Free, no obligation. We connect you with a local contractor.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/contact?service=garage-ramp-sealing">
                Request a Call Back
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <a
              href="tel:5146387382"
              className="inline-flex items-center rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10"
            >
              <Phone className="mr-2 size-4" />
              Call 514-638-7382
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
