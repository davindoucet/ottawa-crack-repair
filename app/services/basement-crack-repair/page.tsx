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
  title: "Basement Crack Repair Ottawa | Foundation & Wall Crack Referral | Call 514-638-7382",
  description:
    "Basement crack repair Ottawa. Free referral—we connect you with local contractors for foundation wall crack repair, crack injection & basement leak repair. Ottawa, Kanata, Nepean, Orleans, Barrhaven.",
  keywords: ["basement crack repair Ottawa", "foundation wall crack Ottawa", "basement leak repair Ottawa"],
  openGraph: { url: `${SITE_URL}/services/basement-crack-repair`, title: "Basement Crack Repair Ottawa | Contractor Referral" },
  alternates: { canonical: `${SITE_URL}/services/basement-crack-repair` },
}

const breadcrumbs = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Basement Crack Repair Ottawa", path: "/services/basement-crack-repair" },
])

const faqs = [
  {
    question: "What is basement crack repair?",
    answer:
      "Basement crack repair involves sealing or repairing cracks in basement walls and floors to prevent water intrusion and structural issues. Contractors in our network use methods such as crack injection with epoxy or polyurethane, carbon fiber reinforcement, and other techniques depending on the crack type and severity.",
  },
  {
    question: "Do you perform basement crack repairs?",
    answer:
      "No. We are a referral network. We connect you with independent third-party contractors who perform basement crack repair in Ottawa. All work is done by the contractor you hire.",
  },
  {
    question: "How do I get a quote for basement crack repair in Ottawa?",
    answer:
      "Request a callback or call us. We share your details with a contractor in our network who serves your area. They will contact you to schedule an assessment and provide a quote.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We connect homeowners across the Ottawa region, including Ottawa, Kanata, Nepean, Orleans, and Barrhaven.",
  },
]

export default function BasementCrackRepairPage() {
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
    serviceType: "Basement Crack Repair",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Ottawa" },
      { "@type": "City", name: "Kanata" },
      { "@type": "City", name: "Nepean" },
      { "@type": "City", name: "Orleans" },
      { "@type": "City", name: "Barrhaven" },
    ],
    description:
      "Referral service connecting Ottawa homeowners with contractors for basement crack repair, foundation wall crack sealing, and basement leak repair.",
  }

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="bg-navy-dark py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Basement Crack Repair Ottawa
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            We connect Ottawa homeowners with local contractors who specialize
            in basement wall crack repair, crack injection, and basement leak
            repair.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Basement crack repair is a common need for homeowners across
              Ottawa, Kanata, Nepean, Orleans, and Barrhaven. Cracks in basement
              walls and floors can allow water infiltration, lead to mold
              growth, and in some cases indicate structural concerns. Ottawa
              Crack Repair Network is a free referral service. We do not perform
              repairs ourselves. We connect you with licensed local contractors
              who specialize in basement crack repair in the Ottawa area.
            </p>
            <p>
              Contractors in our network offer several methods for basement
              crack repair, including crack injection with epoxy or
              polyurethane resin, carbon fiber strips for structural cracks,
              and waterproofing systems when moisture is an ongoing concern.
              The contractor you are matched with will inspect your basement,
              identify the cause and type of crack, and recommend the
              appropriate solution. They provide the quote and perform the
              work. We simply facilitate the connection between you and a
              qualified specialist.
            </p>
            <p>
              Common signs that you may need basement crack repair include
              visible cracks in concrete walls or floors, water seepage or
              dampness, stair-step cracks in block or brick foundations,
              horizontal cracks that may indicate pressure, and musty odors or
              mold. If you notice any of these in your Ottawa-area home,
              requesting a callback is a good first step. We respond promptly
              and connect you with a contractor who serves your neighborhood.
            </p>
            <p>
              The referral process is free and without obligation. Tell us
              about your situation and location. We share your request with a
              contractor in our network. The contractor contacts you directly
              to schedule an assessment and provide a quote. There is no cost
              for the referral. We connect homeowners with independent
              third-party contractors. All work is performed by the contractor
              you hire.
            </p>
            <p>
              For basement crack repair in Ottawa, Nepean, Kanata, Orleans, or
              Barrhaven, request a callback or call us today. We connect you
              with a local specialist who can assess your basement and provide
              options suited to your situation and budget.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-foreground">
              Related Services
            </h2>
            <ul className="flex flex-wrap gap-2">
              <li>
                <Link
                  href="/foundation"
                  className="text-navy hover:underline"
                >
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
            Request a Callback for Basement Crack Repair in Ottawa
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
              <Link href="/contact?service=basement-crack-repair">
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
