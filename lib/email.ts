import { Resend } from "resend"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null

const FROM_EMAIL = process.env.FROM_EMAIL ?? "onboarding@resend.dev"
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL

function canSend(): boolean {
  return Boolean(resend && NOTIFY_EMAIL)
}

type ContactPayload =
  | {
      type: "homeowner"
      serviceNeeded: "foundation" | "driveway"
      name: string
      phone: string
      email?: string
      address: string
      issue: string
      preferredContact?: string
    }
  | {
      type: "contractor"
      companyName: string
      contactName: string
      phone: string
      email: string
      serviceArea: string
      licensedInsured: boolean
      notes?: string
    }

export async function sendContactEmail(data: ContactPayload): Promise<{ ok: boolean }> {
  if (!canSend()) {
    console.log(
      "Contact (email not configured - set RESEND_API_KEY and NOTIFY_EMAIL):",
      data
    )
    return { ok: true }
  }

  if (data.type === "homeowner") {
    const serviceLabel = data.serviceNeeded === "foundation" ? "Foundation crack repair" : "Driveway sealing / asphalt repair"
    const { error } = await resend!.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL!,
      subject: `New Homeowner Lead – ${serviceLabel} – Ottawa`,
      html: `
        <h2>New Homeowner Lead – Ottawa</h2>
        <p><strong>Service:</strong> ${escapeHtml(serviceLabel)}</p>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
        <p><strong>Email:</strong> ${data.email ? escapeHtml(data.email) : "—"}</p>
        <p><strong>Preferred Contact:</strong> ${data.preferredContact ? escapeHtml(data.preferredContact) : "—"}</p>
        <p><strong>Address/Neighborhood:</strong> ${escapeHtml(data.address)}</p>
        <p><strong>Issue:</strong></p>
        <pre style="white-space: pre-wrap; font-family: sans-serif;">${escapeHtml(data.issue)}</pre>
      `,
    })
    if (error) throw error
    return { ok: true }
  }

  const { error } = await resend!.emails.send({
    from: FROM_EMAIL,
    to: NOTIFY_EMAIL!,
    subject: "New Contractor Partner Signup",
    html: `
      <h2>New Contractor Partner Signup</h2>
      <p><strong>Company:</strong> ${escapeHtml(data.companyName)}</p>
      <p><strong>Contact Name:</strong> ${escapeHtml(data.contactName)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Service Area:</strong> ${escapeHtml(data.serviceArea)}</p>
      <p><strong>Licensed/Insured:</strong> ${data.licensedInsured ? "Yes" : "No"}</p>
      ${data.notes ? `<p><strong>Notes:</strong></p><pre style="white-space: pre-wrap; font-family: sans-serif;">${escapeHtml(data.notes)}</pre>` : ""}
    `,
  })
  if (error) throw error
  return { ok: true }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}
