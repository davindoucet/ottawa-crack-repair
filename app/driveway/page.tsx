import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, Phone, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SITE_URL, getBreadcrumbSchema } from "@/lib/seo"
import { images } from "@/lib/images"

export const metadata: Metadata = {
  title: "Driveway Sealing Ottawa | Asphalt Crack Repair & Patch Referral | Call 514-638-7382",
  description:
    "Driveway sealing Ottawa. Free referral—we connect you with local contractors for asphalt crack filling, patch repair & garage ramp sealing. Ottawa, Kanata, Nepean, Orleans, Barrhaven. Call 514-638-7382.",
  keywords: ["driveway sealing Ottawa", "asphalt crack repair Ottawa", "driveway crack repair Ottawa", "garage ramp sealing Ottawa"],
  openGraph: { url: `${SITE_URL}/driveway`, title: "Driveway Sealing Ottawa | Free Contractor Referral" },
  alternates: { canonical: `${SITE_URL}/driveway` },
}

const breadcrumbs = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Driveway Sealing Ottawa", path: "/driveway" },
])

const faqs = [
  {
    question: "Do you perform driveway sealing?",
    answer:
      "No. We are a referral network. We connect you with independent third-party contractors. All work is performed by the contractor you hire.",
  },
  {
    question: "What does driveway sealing include?",
    answer:
      "Contractors in our network typically offer driveway sealing, asphalt crack filling, patch repair, and garage ramp sealing. The contractor will assess your driveway and recommend the right approach.",
  },
  {
    question: "How much does driveway sealing cost?",
    answer:
      "Pricing varies by driveway size, condition, and repair needs. You will receive a quote from the contractor after they review your property.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We connect homeowners across the Ottawa region, including Ottawa, Kanata, Nepean, Orleans, and Barrhaven.",
  },
]

export default function DrivewayPage() {
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
    serviceType: "Driveway Sealing",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Ottawa" },
      { "@type": "City", name: "Kanata" },
      { "@type": "City", name: "Nepean" },
      { "@type": "City", name: "Orleans" },
      { "@type": "City", name: "Barrhaven" },
    ],
    description:
      "Referral service connecting Ottawa homeowners with contractors for driveway sealing, asphalt crack filling, and garage ramp sealing.",
  }

  return (
    <>
      <section className="bg-navy-dark py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Driveway Sealing Ottawa
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            We connect homeowners with local contractors for driveway sealing,
            asphalt crack filling, and patch repair.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-lg border border-border">
            <Image
              src={images.driveway}
              alt="Asphalt driveway — driveway sealing and crack repair Ottawa"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <h2 className="text-xl font-bold text-foreground">What We Help With</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            We refer homeowners in Ottawa, Kanata, Nepean, Orleans, and Barrhaven
            to contractors who handle driveway sealing, asphalt crack filling,
            patch repair, and garage ramp sealing. We do not perform any repairs
            ourselves.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            Common Driveway Issues
          </h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-base leading-relaxed text-muted-foreground">
            <li>Cracks in asphalt that allow water and ice damage</li>
            <li>Faded or weathered asphalt needing resealing</li>
            <li>Potholes or sinking areas requiring patch repair</li>
            <li>Alligator cracking or surface deterioration</li>
            <li>Driveway edges crumbling or breaking down</li>
          </ul>

          <h2 className="mt-10 text-xl font-bold text-foreground">
            How the Referral Works
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Tell us about your driveway and location. We share your request with
            a local contractor in our network. The contractor contacts you
            directly to schedule an assessment, provide a quote, and perform the
            work. We connect homeowners with independent third-party contractors.
            All work is performed by the contractor you hire.
          </p>

          <h2 className="mt-10 text-xl font-bold text-foreground">Pricing</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Pricing varies by driveway size, condition, and repair needs. You
            will receive a quote from the contractor after they review your
            property. We do not display or provide pricing—all quotes come
            directly from the contractor you are matched with.
          </p>

          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-foreground">
              Related Services
            </h2>
            <ul className="flex flex-wrap gap-2">
              <li>
                <Link href="/services/asphalt-crack-filling" className="text-navy hover:underline">
                  Asphalt Crack Filling Ottawa
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground">•</span>
              </li>
              <li>
                <Link href="/services/garage-ramp-sealing" className="text-navy hover:underline">
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
              We connect homeowners with independent third-party contractors. All
              work is performed by the contractor you hire. We do not perform
              repairs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">
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
            Request a Driveway Callback
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
            We connect you with a local contractor for driveway sealing and
            asphalt repair.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/contact?service=driveway">
                Request a Driveway Callback
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
          <p className="mt-4 text-xs text-primary-foreground/70">
            We connect homeowners with independent third-party contractors. All
            work is performed by the contractor you hire.
          </p>
        </div>
      </section>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  )
}
