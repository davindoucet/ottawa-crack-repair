import { Droplets, ShieldCheck, Wrench, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Wrench,
    title: "Crack Injection",
    subtitle: "Epoxy & Polyurethane",
    href: "/services/crack-injection",
    anchorText: "crack injection in Ottawa",
    description:
      "We connect you with contractors who provide professional-grade epoxy and polyurethane to seal foundation cracks from the inside, stopping leaks and preventing further damage.",
  },
  {
    icon: Droplets,
    title: "Basement Waterproofing",
    subtitle: "Interior & Exterior",
    href: "/services/basement-waterproofing",
    anchorText: "basement waterproofing in Ottawa",
    description:
      "We connect you with contractors who offer interior drainage, sump pumps, exterior membranes, and other waterproofing solutions tailored to your home.",
  },
  {
    icon: ShieldCheck,
    title: "Foundation Leak Repair",
    subtitle: "Diagnosis & Repair",
    href: "/services",
    anchorText: "foundation leak repair",
    description:
      "Contractors in our network typically diagnose the source of foundation leaks and apply targeted repairs to stop water intrusion and protect your home long-term.",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Services Contractors Offer
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            We connect you with contractors who specialize in these foundation
            repair services.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, subtitle, description, href, anchorText }) => (
            <div
              key={title}
              className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-navy text-primary-foreground">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                {title}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">{subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
              <Link
                href={href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy transition-colors hover:text-navy-light"
              >
                Learn more about {anchorText}
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
