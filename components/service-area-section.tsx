import { MapPin } from "lucide-react"

const areas = ["Ottawa", "Kanata", "Nepean", "Orleans", "Barrhaven"]

export function ServiceAreaSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Serving the Ottawa Region
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          We connect homeowners with foundation repair specialists across the
          greater Ottawa area.
        </p>
        <div className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>Local Ottawa focused</span>
          <span>•</span>
          <span>No obligation to request a callback</span>
          <span>•</span>
          <span>We do not sell your info to multiple companies</span>
          <span>•</span>
          <span>Your request goes to one contractor at a time</span>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground shadow-sm"
            >
              <MapPin className="size-4 text-accent" />
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
