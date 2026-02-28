import { ClipboardList, Users, HardHat, Info } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    step: "1",
    title: "Take Your Details",
    description:
      "Call us or fill out the form. We ask about your location, the issue, and how to reach you.",
  },
  {
    icon: Users,
    step: "2",
    title: "Match You With a Local Contractor",
    description:
      "We connect you with a foundation repair contractor in your area who can help.",
  },
  {
    icon: HardHat,
    step: "3",
    title: "Contractor Provides the Estimate & Does the Work",
    description:
      "The contractor reaches out to you directly, provides a quote, and handles the repair.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            What We Do
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Getting connected with a foundation repair contractor is simple and free.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-border bg-card px-5 py-4">
          <p className="text-sm font-semibold text-foreground">
            How matching works
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Tell us what is happening and your area. We share your request with
            a local contractor in our network. The contractor contacts you
            directly to provide an estimate and schedule the work.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, step, title, description }) => (
            <div
              key={step}
              className="relative flex flex-col items-center text-center"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-navy text-primary-foreground">
                <Icon className="size-7" />
              </div>
              <span className="mt-4 inline-flex size-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                {step}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-xl items-start gap-3 rounded-lg border border-border bg-secondary px-5 py-4">
          <Info className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">What we don{"'"}t do:</span>{" "}
            We do not perform repairs or provide engineering advice. All work is
            done by independent, third-party contractors.
          </p>
        </div>
      </div>
    </section>
  )
}
