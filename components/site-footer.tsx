import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/foundation", label: "Foundation" },
  { href: "/driveway", label: "Driveway" },
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Service Areas" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
]

const serviceAreas = [
  { href: "/areas/ottawa", label: "Ottawa" },
  { href: "/areas/kanata", label: "Kanata" },
  { href: "/areas/nepean", label: "Nepean" },
  { href: "/areas/orleans", label: "Orleans" },
  { href: "/areas/barrhaven", label: "Barrhaven" },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy-dark text-primary-foreground pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Ottawa Crack Repair Network</h3>
            <p className="mb-4 text-sm leading-relaxed text-primary-foreground/70">
              A free referral service connecting Ottawa homeowners with local
              contractors for foundation crack repair and driveway sealing.
            </p>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <a
                href="tel:5146387382"
                className="flex items-center gap-2 transition-colors hover:text-primary-foreground"
              >
                <Phone className="size-4 shrink-0" />
                514-638-7382
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0" />
                Ottawa, Ontario
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Service Areas</h3>
            <ul className="flex flex-col gap-2">
              {serviceAreas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Get Connected</h3>
            <p className="mb-4 text-sm leading-relaxed text-primary-foreground/70">
              Call us today for a free, no-obligation connection to a licensed
              foundation repair specialist in your area.
            </p>
            <a
              href="tel:5146387382"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Phone className="size-4" />
              Call Now
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-xs leading-relaxed text-primary-foreground/50">
            Ottawa Crack Repair Network is an independent referral service. We
            connect homeowners with independent third-party contractors. All work
            is performed by the contractor you hire.
          </p>
          <p className="mt-2 text-center text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Ottawa Crack Repair Network. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
