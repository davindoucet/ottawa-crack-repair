"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/foundation", label: "Foundation" },
  { href: "/driveway", label: "Driveway" },
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-navy-dark text-primary-foreground shadow-lg pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Ottawa Crack Repair Network Home">
          <div className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white">
            <Image src="/icon.png" alt="" width={36} height={36} className="object-contain p-0.5" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight lg:text-base">Ottawa Crack Repair</span>
            <span className="text-xs text-primary-foreground/70">Network</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden bg-accent text-accent-foreground hover:bg-accent/90 sm:inline-flex"
          >
            <Link href="/contact">
              Request a Call Back
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="hidden border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:inline-flex"
          >
            <a href="tel:5146387382">
              <Phone className="mr-2 size-4" />
              Call Now
            </a>
          </Button>
          <Button
            asChild
            size="icon"
            className="flex h-11 min-h-11 min-w-11 items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 sm:hidden"
          >
            <a href="tel:5146387382" aria-label="Call now">
              <Phone className="size-4" />
            </a>
          </Button>
          <button
            type="button"
            className="inline-flex h-11 min-h-11 min-w-11 items-center justify-center rounded-md p-2 text-primary-foreground/80 hover:text-primary-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-primary-foreground/10 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto max-w-7xl px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="-mx-1 block min-h-[44px] rounded-md px-4 py-3 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 block min-h-[44px] rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Request a Call Back
            </Link>
            <a
              href="tel:5146387382"
              className="block min-h-[44px] rounded-md border border-primary-foreground/20 px-4 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Call 514-638-7382
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
