import type { Metadata } from "next"
import { Phone, ArrowRight } from "lucide-react"
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
  title: "Crack Injection Ottawa | Epoxy & Polyurethane Foundation Repair | Call 514-638-7382",
  description:
    "Crack injection Ottawa for foundation repair. Free referral—we connect you with local contractors who use epoxy and polyurethane to seal cracks. Ottawa, Kanata, Nepean, Orleans, Barrhaven.",
  keywords: ["crack injection Ottawa", "epoxy crack injection Ottawa", "polyurethane crack repair Ottawa", "foundation crack repair Ottawa"],
  openGraph: { url: `${SITE_URL}/services/crack-injection`, title: "Crack Injection Ottawa | Contractor Referral" },
  alternates: { canonical: `${SITE_URL}/services/crack-injection` },
}

const breadcrumbs = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Crack Injection Ottawa", path: "/services/crack-injection" },
])

const faqs = [
  {
    question: "What is crack injection?",
    answer:
      "Crack injection is a method of sealing foundation cracks from the inside using epoxy or polyurethane resin. Contractors in our network inject these materials into cracks to stop water penetration and restore structural integrity.",
  },
  {
    question: "How long does crack injection last?",
    answer:
      "When done correctly by a qualified contractor, epoxy and polyurethane injections can last for many years. The contractor you hire will provide details on warranties for the work.",
  },
  {
    question: "Do you perform crack injection?",
    answer:
      "No. We are a referral service. We connect you with local Ottawa contractors who perform crack injection and other foundation repairs.",
  },
  {
    question: "How do I get a quote for crack injection in Ottawa?",
    answer:
      "Request a callback through our form or call us. We share your details with a contractor in your area who will contact you directly to schedule an assessment and provide a quote.",
  },
]

export default function CrackInjectionPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Crack Injection",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Ottawa" },
      { "@type": "City", name: "Kanata" },
      { "@type": "City", name: "Nepean" },
      { "@type": "City", name: "Orleans" },
      { "@type": "City", name: "Barrhaven" },
    ],
    description:
      "Referral service connecting Ottawa homeowners with contractors for crack injection, epoxy and polyurethane foundation crack repair.",
  }

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="bg-navy-dark py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Crack Injection Ottawa
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            We connect Ottawa homeowners with contractors who provide epoxy and
            polyurethane crack injection for foundation repair.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-base leading-relaxed text-muted-foreground">
              Crack injection is one of the most effective ways to repair
              foundation cracks in Ottawa-area homes. Contractors in our network
              use professional-grade epoxy and polyurethane resins to seal cracks
              from the inside, stopping water intrusion and preventing further
              damage. Whether you are in Ottawa, Kanata, Nepean, Orleans, or
              Barrhaven, we help you find a local specialist who can assess your
              situation and recommend the right approach.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Epoxy injection is typically used for structural cracks that do not
              actively leak, while polyurethane is often chosen for cracks that
              allow water to seep through. The contractor you are matched with
              will inspect the crack, explain your options, and provide a
              detailed quote. We do not perform repairs. We connect you with
              independent contractors who carry out the work and provide any
              warranties.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              If you need crack injection for foundation repair in Ottawa,
              request a callback or call us. We respond the same day and connect
              you with a contractor who serves your area.
            </p>
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
                  <Link href="/services/epoxy-crack-injection" className="text-navy hover:underline">
                    Epoxy Crack Injection Ottawa
                  </Link>
                </li>
                <li>
                  <span className="text-muted-foreground">•</span>
                </li>
                <li>
                  <Link href="/services/polyurethane-crack-repair" className="text-navy hover:underline">
                    Polyurethane Crack Repair Ottawa
                  </Link>
                </li>
                <li>
                  <span className="text-muted-foreground">•</span>
                </li>
                <li>
                  <Link href="/services/basement-waterproofing" className="text-navy hover:underline">
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
            Get a Quote for Crack Injection in Ottawa
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
            Request a callback and we will connect you with a local contractor.
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
