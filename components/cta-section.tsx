import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="bg-navy py-16 text-primary-foreground md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="text-balance text-2xl font-bold md:text-3xl">
          Ready to Get Connected?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
          Call now for a free, no-obligation connection to a local foundation
          repair contractor in your area.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/contact">
              Request a Call Back
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href="tel:5146387382">
              <Phone className="mr-2 size-5" />
              Call Now
            </a>
          </Button>
        </div>
        <p className="mt-4 text-sm text-primary-foreground/80">
          We respond the same day.
        </p>
      </div>
    </section>
  )
}
