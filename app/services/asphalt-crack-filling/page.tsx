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
  title: "Asphalt Crack Filling Ottawa | Driveway Crack Repair Referral | Call 514-638-7382",
  description:
    "Asphalt crack filling Ottawa. Free referral—we connect you with local contractors for driveway crack repair, sealcoating & asphalt maintenance. Ottawa, Kanata, Nepean, Orleans, Barrhaven.",
  keywords: ["asphalt crack filling Ottawa", "driveway crack repair Ottawa", "sealcoating Ottawa", "asphalt repair Ottawa"],
  openGraph: { url: `${SITE_URL}/services/asphalt-crack-filling`, title: "Asphalt Crack Filling Ottawa | Contractor Referral" },
  alternates: { canonical: `${SITE_URL}/services/asphalt-crack-filling` },
}

const breadcrumbs = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Asphalt Crack Filling Ottawa", path: "/services/asphalt-crack-filling" },
])

const faqs = [
  {
    question: "What is asphalt crack filling?",
    answer:
      "Asphalt crack filling involves filling cracks in asphalt driveways and surfaces with rubberized sealant to prevent water and ice from damaging the pavement. It extends the life of your driveway and is often done before sealcoating.",
  },
  {
    question: "Do you perform asphalt crack filling?",
    answer:
      "No. We are a referral network. We connect you with independent contractors in Ottawa who perform asphalt crack filling, driveway sealing, and related work. All work is done by the contractor you hire.",
  },
  {
    question: "When should I have my driveway cracks filled?",
    answer:
      "Crack filling is best done when cracks are dry and temperatures are moderate, typically spring or early fall in Ottawa. The contractor you are matched with will recommend the best timing for your driveway.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We connect homeowners across the Ottawa region, including Ottawa, Kanata, Nepean, Orleans, and Barrhaven.",
  },
]

export default function AsphaltCrackFillingPage() {
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
    serviceType: "Asphalt Crack Filling",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Ottawa" },
      { "@type": "City", name: "Kanata" },
      { "@type": "City", name: "Nepean" },
      { "@type": "City", name: "Orleans" },
      { "@type": "City", name: "Barrhaven" },
    ],
    description:
      "Referral service connecting Ottawa homeowners with contractors for asphalt crack filling, driveway crack repair, and sealcoating.",
  }

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="bg-navy-dark py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Asphalt Crack Filling Ottawa
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            We connect Ottawa homeowners with local contractors who provide
            asphalt crack filling and driveway crack repair.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Asphalt crack filling helps protect driveways in Ottawa from
              water damage, freeze-thaw cycles, and further deterioration.
              Cracks that are left untreated allow moisture to penetrate the
              base, leading to potholes and costly repairs. Ottawa Crack Repair
              Network is a free referral service. We do not perform repairs. We
              connect you with licensed local contractors who specialize in
              asphalt crack filling in Ottawa, Kanata, Nepean, Orleans, and
              Barrhaven.
            </p>
            <p>
              Contractors in our network use rubberized crack sealant to fill
              cracks in asphalt driveways. Crack filling is often performed
              before sealcoating to ensure the best result. The contractor you
              are matched with will inspect your driveway, clean the cracks,
              and apply the appropriate sealant. They provide the quote and
              perform the work. We simply facilitate the connection between you
              and a qualified specialist.
            </p>
            <p>
              Common types of cracks that benefit from filling include
              longitudinal cracks along the driveway, transverse cracks across
              the surface, and block cracks that form a pattern. Alligator
              cracking may require patch repair in addition to or instead of
              crack filling. The contractor will assess your driveway and
              recommend the right approach.
            </p>
            <p>
              Homeowners across Ottawa, Nepean, Kanata, Orleans, and Barrhaven
              contact us when they notice cracks developing in their asphalt
              driveways. Addressing cracks early can extend the life of your
              pavement and reduce the need for more expensive repairs later. The
              contractor you are matched with will explain your options and
              provide a detailed quote.
            </p>
            <p>
              Our referral process is free and without obligation. Tell us
              about your driveway and location. We share your request with a
              contractor in our network. The contractor contacts you directly
              to schedule an assessment and provide a quote. We connect
              homeowners with independent third-party contractors. All work is
              performed by the contractor you hire.
            </p>
            <p>
              For asphalt crack filling in Ottawa, request a callback or call
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
                  href="/services/garage-ramp-sealing"
                  className="text-navy hover:underline"
                >
                  Garage Ramp Sealing Ottawa
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
              perform repairs.
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
            Request a Callback for Asphalt Crack Filling in Ottawa
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
              <Link href="/contact?service=asphalt-crack-filling">
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
