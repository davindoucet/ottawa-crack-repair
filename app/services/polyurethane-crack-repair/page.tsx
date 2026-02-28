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
  title: "Polyurethane Crack Repair Ottawa | Leaking Foundation Crack Seal | Call 514-638-7382",
  description:
    "Polyurethane crack repair Ottawa for leaking foundations. Free referral—we connect you with local contractors who use polyurethane injection to stop water. Ottawa, Kanata, Nepean, Orleans, Barrhaven.",
  keywords: ["polyurethane crack repair Ottawa", "leaking foundation repair Ottawa", "crack injection Ottawa"],
  openGraph: { url: `${SITE_URL}/services/polyurethane-crack-repair`, title: "Polyurethane Crack Repair Ottawa | Contractor Referral" },
  alternates: { canonical: `${SITE_URL}/services/polyurethane-crack-repair` },
}

const breadcrumbs = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Polyurethane Crack Repair Ottawa", path: "/services/polyurethane-crack-repair" },
])

const faqs = [
  {
    question: "What is polyurethane crack repair?",
    answer:
      "Polyurethane crack repair involves injecting polyurethane resin into foundation cracks. Polyurethane expands when it contacts water, creating a flexible, watertight seal. It is commonly used for actively leaking cracks in basement walls and floors.",
  },
  {
    question: "Why use polyurethane for leaking cracks?",
    answer:
      "Polyurethane expands on contact with water, filling the crack and stopping the leak from the inside. It remains flexible, which helps it accommodate minor movement. Contractors in our network use polyurethane for cracks that allow water to seep through.",
  },
  {
    question: "Do you perform polyurethane crack repair?",
    answer:
      "No. We are a referral network. We connect you with independent contractors in Ottawa who perform polyurethane crack repair and other foundation repair services. All work is done by the contractor you hire.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We connect homeowners across the Ottawa region, including Ottawa, Kanata, Nepean, Orleans, and Barrhaven.",
  },
]

export default function PolyurethaneCrackRepairPage() {
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
    serviceType: "Polyurethane Crack Repair",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Ottawa" },
      { "@type": "City", name: "Kanata" },
      { "@type": "City", name: "Nepean" },
      { "@type": "City", name: "Orleans" },
      { "@type": "City", name: "Barrhaven" },
    ],
    description:
      "Referral service connecting Ottawa homeowners with contractors for polyurethane crack repair and leaking foundation crack sealing.",
  }

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="bg-navy-dark py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Polyurethane Crack Repair Ottawa
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            We connect Ottawa homeowners with local contractors who use
            polyurethane injection to seal leaking foundation cracks.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Polyurethane crack repair is a highly effective solution for
              stopping water infiltration through foundation cracks in Ottawa
              homes. Unlike epoxy, polyurethane resin expands when it contacts
              water, filling the crack from the inside and creating a flexible,
              watertight seal. Ottawa Crack Repair Network is a free referral
              service. We do not perform repairs. We connect you with licensed
              local contractors who specialize in polyurethane crack repair in
              Ottawa, Kanata, Nepean, Orleans, and Barrhaven.
            </p>
            <p>
              When basement cracks are actively leaking, polyurethane injection
              is often the preferred method. The material reacts with moisture
              to expand and seal the crack, stopping the flow of water. It
              remains flexible over time, which can help accommodate minor
              seasonal movement. The contractor you are matched with will
              inspect your foundation, determine if polyurethane is the right
              approach, and provide a detailed quote. They perform the
              injection work and any follow-up. We simply facilitate the
              connection.
            </p>
            <p>
              The process typically involves drilling injection ports along the
              crack, injecting the polyurethane resin under pressure, and
              sealing the ports. Work is usually done from the interior of the
              basement. Contractors in our network use professional-grade
              materials and techniques suitable for Ottawa’s climate and soil
              conditions.
            </p>
            <p>
              Homeowners in Ottawa, Nepean, Kanata, Orleans, and Barrhaven
              contact us when they experience water seepage through basement
              walls or floors. Leaking cracks can lead to dampness, mold, and
              damage to belongings. Addressing them promptly with polyurethane
              crack repair can prevent further problems. The contractor you are
              matched with will assess your situation and recommend the best
              approach.
            </p>
            <p>
              Our referral process is free and without obligation. Tell us
              about your leaking crack and location. We share your request with
              a contractor in our network. The contractor contacts you directly
              to schedule an assessment and provide a quote. We connect
              homeowners with independent third-party contractors. All work is
              performed by the contractor you hire.
            </p>
            <p>
              For polyurethane crack repair in Ottawa, request a callback or
              call us. We respond the same day and connect you with a local
              contractor who serves your area.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-foreground">
              Related Services
            </h2>
            <ul className="flex flex-wrap gap-2">
              <li>
                <Link href="/foundation" className="text-navy hover:underline">
                  Foundation Crack Repair Ottawa
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground">•</span>
              </li>
              <li>
                <Link
                  href="/services/crack-injection"
                  className="text-navy hover:underline"
                >
                  Crack Injection Ottawa
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground">•</span>
              </li>
              <li>
                <Link
                  href="/services/epoxy-crack-injection"
                  className="text-navy hover:underline"
                >
                  Epoxy Crack Injection Ottawa
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground">•</span>
              </li>
              <li>
                <Link
                  href="/services/basement-waterproofing"
                  className="text-navy hover:underline"
                >
                  Basement Waterproofing Ottawa
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
              perform repairs or provide engineering advice.
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
            Request a Callback for Polyurethane Crack Repair in Ottawa
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
              <Link href="/contact?service=polyurethane-crack-repair">
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
