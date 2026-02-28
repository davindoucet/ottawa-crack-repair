import Link from "next/link"

export function HomeIntroSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h2 className="sr-only">About Our Foundation Crack Repair Referral Service</h2>
        <div className="prose prose-slate max-w-none text-muted-foreground">
          <p className="text-base leading-relaxed">
            If you have foundation cracks, basement leaks, or water seepage in your
            Ottawa home, you need a qualified contractor who can diagnose the issue
            and provide a proper fix. Ottawa Crack Repair Network is a free referral
            service that connects homeowners in Ottawa, Kanata, Nepean, Orleans, and
            Barrhaven with local foundation repair specialists. We do not perform
            repairs ourselves. We match you with independent contractors who provide
            crack injection, basement waterproofing, and foundation leak repair.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Foundation crack repair in Ottawa typically involves epoxy or
            polyurethane injection to seal cracks from the inside. Contractors in
            our network use professional-grade materials and techniques to stop
            water intrusion and restore structural integrity. For more extensive
            issues, we connect you with specialists who offer interior drainage
            systems, sump pumps, and exterior waterproofing solutions. Whether you
            are in central Ottawa or the surrounding communities, we help you find
            a local contractor who can assess your situation and provide a quote.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Requesting a callback or contacting us is free and carries no
            obligation. We share your details with one contractor at a time so you
            can discuss your options directly. Learn more about{" "}
            <Link
              href="/services"
              className="font-medium text-navy underline hover:text-navy-light"
            >
              foundation repair services in Ottawa
            </Link>
            , see{" "}
            <Link
              href="/how-it-works"
              className="font-medium text-navy underline hover:text-navy-light"
            >
              how our referral process works
            </Link>
            , or{" "}
            <Link
              href="/contact"
              className="font-medium text-navy underline hover:text-navy-light"
            >
              request a callback
            </Link>{" "}
            to get connected with a contractor today.
          </p>
        </div>
      </div>
    </section>
  )
}
