import { NextResponse } from "next/server"
import { z } from "zod"
import { sendContactEmail } from "@/lib/email"

const homeownerSchema = z.object({
  type: z.literal("homeowner"),
  serviceNeeded: z.enum(["foundation", "driveway"]),
  name: z.string().min(1, "Name is required").max(200),
  phone: z.string().min(1, "Phone is required").max(50),
  email: z
    .string()
    .max(200)
    .refine((val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), "Invalid email"),
  address: z.string().min(1, "Address or neighborhood is required").max(500),
  issue: z.string().min(1, "Issue description is required").max(2000),
  preferredContact: z.string().max(50).optional(),
})

const contractorSchema = z.object({
  type: z.literal("contractor"),
  companyName: z.string().min(1, "Company name is required").max(200),
  contactName: z.string().min(1, "Contact name is required").max(200),
  phone: z.string().min(1, "Phone is required").max(50),
  email: z.string().email("Invalid email").max(200),
  serviceArea: z.string().min(1, "Service area is required").max(500),
  licensedInsured: z.literal(true),
  notes: z.string().max(2000).optional(),
})

const contactSchema = z.discriminatedUnion("type", [
  homeownerSchema,
  contractorSchema,
])

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Honeypot: if company_website is filled, it's spam — return ok but do nothing
    if (body.company_website && String(body.company_website).trim()) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      )
    }

    await sendContactEmail(result.data)

    return NextResponse.json(
      { success: true, message: "Submitted successfully" },
      { status: 200 }
    )
  } catch (err) {
    console.error("Contact submission error:", err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
