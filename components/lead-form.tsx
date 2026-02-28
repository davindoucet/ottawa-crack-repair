"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle2, Loader2 } from "lucide-react"

const SERVICE_OPTIONS = [
  { value: "foundation", label: "Foundation crack repair" },
  { value: "driveway", label: "Driveway sealing / asphalt repair" },
]

const CONTACT_OPTIONS = [
  { value: "phone", label: "Phone" },
  { value: "email", label: "Email" },
  { value: "either", label: "Either" },
]

export function LeadForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [consent, setConsent] = useState(false)
  const [service, setService] = useState(defaultService || "")

  useEffect(() => {
    if (defaultService) setService(defaultService)
  }, [defaultService])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!consent) return
    setStatus("submitting")

    const formData = new FormData(e.currentTarget)
    const data = {
      type: "homeowner" as const,
      serviceNeeded: formData.get("serviceNeeded") || "",
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email") || "",
      address: formData.get("address"),
      issue: formData.get("issue"),
      preferredContact: formData.get("preferredContact") || "phone",
      company_website: formData.get("company_website") || "",
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus("success")
        ;(e.target as HTMLFormElement).reset()
        setService("")
        setConsent(false)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-8 text-center shadow-sm">
        <CheckCircle2 className="size-12 text-green-600" />
        <h3 className="mt-4 text-xl font-semibold text-card-foreground">
          Thanks, we received your request
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          We will connect you with a local specialist.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-lg border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <div className="flex flex-col gap-5">
        <div>
          <Label
            htmlFor="serviceNeeded"
            className="text-sm font-medium text-card-foreground"
          >
            Service Needed
          </Label>
          <select
            id="serviceNeeded"
            name="serviceNeeded"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="mt-1.5 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label
            htmlFor="name"
            className="text-sm font-medium text-card-foreground"
          >
            Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label
            htmlFor="phone"
            className="text-sm font-medium text-card-foreground"
          >
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(613) 555-1234"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label
            htmlFor="email"
            className="text-sm font-medium text-card-foreground"
          >
            Email{" "}
            <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label
            htmlFor="address"
            className="text-sm font-medium text-card-foreground"
          >
            Address or Neighbourhood
          </Label>
          <Input
            id="address"
            name="address"
            type="text"
            required
            placeholder="e.g. Kanata, Nepean, or full address"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label
            htmlFor="issue"
            className="text-sm font-medium text-card-foreground"
          >
            Describe the Problem
          </Label>
          <Textarea
            id="issue"
            name="issue"
            required
            rows={4}
            placeholder="Tell us what you are seeing..."
            className="mt-1.5 resize-none"
          />
        </div>

        <div>
          <Label
            htmlFor="preferredContact"
            className="text-sm font-medium text-card-foreground"
          >
            Preferred Contact Method
          </Label>
          <select
            id="preferredContact"
            name="preferredContact"
            className="mt-1.5 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {CONTACT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id="consent"
            checked={consent}
            onCheckedChange={(checked) => setConsent(checked === true)}
            required
            className="mt-1"
          />
          <Label
            htmlFor="consent"
            className="cursor-pointer text-sm leading-relaxed text-muted-foreground"
          >
            I agree my info may be shared with an independent contractor for
            quoting/scheduling.{" "}
            <a
              href="/privacy"
              className="font-medium text-navy underline hover:text-navy-light"
            >
              Privacy Policy
            </a>
          </Label>
        </div>

        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute -left-[9999px]"
          aria-hidden
        />

        {status === "error" && (
          <p className="text-sm text-destructive">
            Something went wrong. Please try again or call us directly at{" "}
            <a href="tel:5146387382" className="font-medium underline">
              514-638-7382
            </a>
            .
          </p>
        )}

        <Button
          type="submit"
          disabled={status === "submitting" || !consent}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
          size="lg"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="mr-2 size-4" />
              Request a Call Back
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
