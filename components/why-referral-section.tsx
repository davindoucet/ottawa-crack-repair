import { Clock, Zap, CircleOff } from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "Saves Time",
    description:
      "No need to research and vet contractors yourself. We have already done that work for you.",
  },
  {
    icon: Zap,
    title: "Fast Matching",
    description:
      "Most homeowners are connected with a contractor within 24 hours of reaching out.",
  },
  {
    icon: CircleOff,
    title: "No Obligation",
    description:
      "Our service is free for homeowners. You are never pressured to commit to any quote or contractor.",
  },
]

export function WhyReferralSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Why Use a Referral Service?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            We make finding the right contractor straightforward.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center shadow-sm"
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-accent/15">
                <Icon className="size-7 text-accent" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
