import type { Metadata } from "next"
import { Droplets, Phone, ArrowRight } from "lucide-react"
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
  title: "Basement Waterproofing Ottawa | Interior & Exterior Solutions | Call 514-638-7382",
  description:
    "Basement waterproofing Ottawa. Free referral—we connect you with local contractors for interior drainage, sump pumps & exterior membranes. Ottawa, Kanata, Nepean, Orleans, Barrhaven.",
  keywords: ["basement waterproofing Ottawa", "basement waterproofing", "sump pump Ottawa", "interior drainage Ottawa"],
  openGraph: { url: `${SITE_URL}/services/basement-waterproofing`, title: "Basement Waterproofing Ottawa | Contractor Referral" },
  alternates: { canonical: `${SITE_URL}/services/basement-waterproofing` },
}

const breadcrumbs = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Basement Waterproofing Ottawa", path: "/services/basement-waterproofing" },
])

const faqs = [
  {
    question: "What does basement waterproofing involve?",
    answer:
      "Basement waterproofing can include interior drainage systems, sump pumps, exterior membrane application, moisture barriers, and more. The contractor you are matched with will assess your basement and recommend solutions suited to your situation.",
  },
  {
    question: "Do you perform basement waterproofing?",
    answer:
      "No. We are a referral service. We connect you with local Ottawa contractors who provide basement waterproofing and related services.",
  },
  {
    question: "How do I find a waterproofing contractor in Ottawa?",
    answer:
      "Request a callback or call us. We share your details with a contractor in our network who serves your area. They will contact you to schedule an assessment and provide a quote.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We connect homeowners across the greater Ottawa region, including Ottawa, Kanata, Nepean, Orleans, and Barrhaven.",
  },
]

export default function BasementWaterproofingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Basement Waterproofing",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Ottawa" },
      { "@type": "City", name: "Kanata" },
      { "@type": "City", name: "Nepean" },
      { "@type": "City", name: "Orleans" },
      { "@type": "City", name: "Barrhaven" },
    ],
    description:
      "Referral service connecting Ottawa homeowners with contractors for basement waterproofing, interior drainage, and moisture control.",
  }

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

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="bg-navy-dark py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Basement Waterproofing Ottawa
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            We connect Ottawa homeowners with contractors who offer interior and
            exterior basement waterproofing solutions.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-base leading-relaxed text-muted-foreground">
              Water in the basement is a common issue for homeowners in Ottawa,
              Kanata, Nepean, Orleans, and Barrhaven. Basement waterproofing can
              involve interior drainage systems, sump pumps, exterior membranes,
              and moisture barriers. Contractors in our network provide solutions
              tailored to your home and budget. We do not perform the work
              ourselves. We connect you with independent contractors who
              specialize in basement waterproofing in the Ottawa area.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Proper basement waterproofing protects your home from moisture
              damage, mold, and structural deterioration. The contractor you are
              matched with will inspect your basement, identify the source of
              moisture, and recommend an approach. They provide the estimate and
              any warranties. We simply facilitate the connection between you and
              a qualified contractor.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              If you need basement waterproofing in Ottawa, request a callback or
              call us. We respond the same day and connect you with a contractor
              who serves your neighborhood.
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
                  <Link href="/services/basement-crack-repair" className="text-navy hover:underline">
                    Basement Crack Repair Ottawa
                  </Link>
                </li>
                <li>
                  <span className="text-muted-foreground">•</span>
                </li>
                <li>
                  <Link href="/services/crack-injection" className="text-navy hover:underline">
                    Crack Injection Ottawa
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
            Get a Quote for Basement Waterproofing in Ottawa
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
