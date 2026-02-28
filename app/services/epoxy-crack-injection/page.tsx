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
  title: "Epoxy Crack Injection Ottawa | Foundation Structural Crack Repair | Call 514-638-7382",
  description:
    "Epoxy crack injection Ottawa for foundation repair. Free referral—we connect you with local contractors who use epoxy resin to seal structural cracks. Ottawa, Kanata, Nepean, Orleans, Barrhaven.",
  keywords: ["epoxy crack injection Ottawa", "foundation crack repair Ottawa", "structural crack repair Ottawa"],
  openGraph: { url: `${SITE_URL}/services/epoxy-crack-injection`, title: "Epoxy Crack Injection Ottawa | Contractor Referral" },
  alternates: { canonical: `${SITE_URL}/services/epoxy-crack-injection` },
}

const breadcrumbs = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Epoxy Crack Injection Ottawa", path: "/services/epoxy-crack-injection" },
])

const faqs = [
  {
    question: "What is epoxy crack injection?",
    answer:
      "Epoxy crack injection is a method of repairing foundation cracks by injecting epoxy resin into the crack. Epoxy bonds strongly to concrete and restores structural integrity. It is typically used for dry or non-leaking cracks where structural repair is the primary goal.",
  },
  {
    question: "When is epoxy used instead of polyurethane?",
    answer:
      "Epoxy is typically used for structural cracks that do not actively leak. Polyurethane is often preferred for leaking cracks because it expands when it contacts water. The contractor you are matched with will assess your crack and recommend the right material.",
  },
  {
    question: "Do you perform epoxy crack injection?",
    answer:
      "No. We are a referral network. We connect you with independent contractors in Ottawa who perform epoxy crack injection and other foundation repair services. All work is done by the contractor you hire.",
  },
  {
    question: "How do I get a quote for epoxy crack injection in Ottawa?",
    answer:
      "Request a callback or call us. We share your details with a contractor in our network. They will contact you to schedule an assessment and provide a quote.",
  },
]

export default function EpoxyCrackInjectionPage() {
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
    serviceType: "Epoxy Crack Injection",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Ottawa" },
      { "@type": "City", name: "Kanata" },
      { "@type": "City", name: "Nepean" },
      { "@type": "City", name: "Orleans" },
      { "@type": "City", name: "Barrhaven" },
    ],
    description:
      "Referral service connecting Ottawa homeowners with contractors for epoxy crack injection and structural foundation crack repair.",
  }

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="bg-navy-dark py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Epoxy Crack Injection Ottawa
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            We connect Ottawa homeowners with local contractors who provide
            epoxy crack injection for structural foundation repair.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Epoxy crack injection is one of the most effective methods for
              repairing structural foundation cracks in Ottawa-area homes.
              Epoxy resin bonds strongly to concrete, restores structural
              integrity, and creates a durable seal. Ottawa Crack Repair
              Network is a free referral service. We do not perform repairs.
              We connect you with licensed local contractors who specialize in
              epoxy crack injection in Ottawa, Kanata, Nepean, Orleans, and
              Barrhaven.
            </p>
            <p>
              Epoxy is typically used for dry or non-leaking structural cracks.
              When water is actively seeping through a crack, contractors may
              recommend polyurethane injection instead, as it expands on
              contact with water and creates a flexible seal. The contractor
              you are matched with will inspect your foundation, assess the
              crack type and condition, and recommend the appropriate material.
              They provide the quote and perform the injection work.
            </p>
            <p>
              The epoxy crack injection process involves drilling small ports
              along the crack, injecting low-viscosity epoxy resin under
              pressure, and sealing the ports once the epoxy has cured. The
              work is done from the interior of the basement in most cases,
              minimizing disruption. Contractors in our network use
              professional-grade materials and techniques. We simply facilitate
              the connection between you and a qualified specialist.
            </p>
            <p>
              Homeowners across Ottawa, Nepean, Kanata, Orleans, and Barrhaven
              contact us when they notice cracks in basement walls or floors.
              Stair-step cracks in block foundations, horizontal cracks, and
              diagonal cracks in poured concrete can often be addressed with
              epoxy injection when they are not actively leaking. The
              contractor will determine if epoxy is the right solution for
              your situation.
            </p>
            <p>
              Our referral process is free and without obligation. Tell us
              about your crack and location. We share your request with a
              contractor in our network. The contractor contacts you directly
              to schedule an assessment and provide a quote. We connect
              homeowners with independent third-party contractors. All work is
              performed by the contractor you hire.
            </p>
            <p>
              For epoxy crack injection in Ottawa, request a callback or call
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
                  href="/services/polyurethane-crack-repair"
                  className="text-navy hover:underline"
                >
                  Polyurethane Crack Repair Ottawa
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground">•</span>
              </li>
              <li>
                <Link
                  href="/services/basement-crack-repair"
                  className="text-navy hover:underline"
                >
                  Basement Crack Repair Ottawa
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
            Request a Callback for Epoxy Crack Injection in Ottawa
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
              <Link href="/contact?service=epoxy-crack-injection">
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
