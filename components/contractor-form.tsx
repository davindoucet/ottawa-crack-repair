"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle2, Loader2 } from "lucide-react"
import Link from "next/link"

export function ContractorForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [consent, setConsent] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!consent) return
    setStatus("submitting")

    const formData = new FormData(e.currentTarget)
    const data = {
      type: "contractor" as const,
      companyName: formData.get("companyName"),
      contactName: formData.get("contactName"),
      serviceArea: formData.get("serviceArea"),
      licensedInsured: formData.get("licensedInsured") === "on",
      email: formData.get("email"),
      phone: formData.get("phone"),
      notes: formData.get("notes") || "",
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
          Application Submitted
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Thank you. We will review your application and be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-lg border border-border bg-card p-6 shadow-sm"
    >
      <div className="flex flex-col gap-5">
        <div>
          <Label htmlFor="companyName" className="text-sm font-medium text-card-foreground">
            Company Name
          </Label>
          <Input
            id="companyName"
            name="companyName"
            type="text"
            required
            placeholder="Your company name"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="contactName" className="text-sm font-medium text-card-foreground">
            Contact Name
          </Label>
          <Input
            id="contactName"
            name="contactName"
            type="text"
            required
            placeholder="Your name"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="serviceArea" className="text-sm font-medium text-card-foreground">
            Service Area
          </Label>
          <Textarea
            id="serviceArea"
            name="serviceArea"
            required
            rows={2}
            placeholder="e.g. Ottawa, Kanata, Nepean, Orleans, Barrhaven"
            className="mt-1.5 resize-none"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="licensedInsured"
            name="licensedInsured"
            required
            className="mt-1.5 size-4 rounded border-input"
          />
          <Label
            htmlFor="licensedInsured"
            className="cursor-pointer text-sm leading-relaxed text-muted-foreground"
          >
            We are licensed and insured for foundation repair work
          </Label>
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-card-foreground">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-card-foreground">
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
          <Label htmlFor="notes" className="text-sm font-medium text-card-foreground">
            Notes{" "}
            <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Textarea
            id="notes"
            name="notes"
            rows={3}
            placeholder="Anything else you'd like us to know..."
            className="mt-1.5 resize-none"
          />
        </div>

        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute -left-[9999px]"
          aria-hidden
        />

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
            I agree to be contacted about joining the network.{" "}
            <Link
              href="/privacy"
              className="font-medium text-navy underline hover:text-navy-light"
            >
              Privacy Policy
            </Link>
          </Label>
        </div>

        {status === "error" && (
          <p className="text-sm text-destructive">
            Something went wrong. Please try again or call us at{" "}
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
              Submit Application
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
