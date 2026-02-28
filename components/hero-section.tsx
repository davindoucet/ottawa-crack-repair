import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-navy-dark text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--navy-light)_0%,_transparent_60%)] opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Foundation Crack Repair &amp; Driveway Sealing Ottawa — Free Contractor Referral
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            Call 514-638-7382 or request a callback. We connect you with local contractors for foundation crack repair, basement waterproofing, and driveway sealing. Ottawa, Kanata, Nepean, Orleans, Barrhaven. No obligation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/foundation">
                Foundation Crack Help
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/driveway">
                Driveway Sealing
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-6 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-4">
            <p className="text-xs leading-relaxed text-primary-foreground/90">
              We connect homeowners with independent third-party contractors. All
              work is performed by the contractor you hire. We do not perform
              repairs or provide engineering advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
