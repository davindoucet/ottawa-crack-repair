import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Ottawa Crack Repair Referral Network. Learn how we collect, use, and protect your information when connecting you with foundation repair contractors.",
  alternates: { canonical: "https://ottawacrackrepair.com/privacy" },
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy-dark py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            Your privacy is important to us. This policy explains how we handle
            your information.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Information We Collect
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  When you contact us through our website or by phone, we may
                  collect the following information: your name, phone number,
                  email address, home address or neighborhood, and a description
                  of the foundation issue you are experiencing. This information
                  is collected solely for the purpose of connecting you with a
                  qualified foundation repair specialist.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">
                  How We Use Your Information
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  We use the information you provide to match you with a
                  licensed and insured foundation repair specialist in your area.
                  Your contact details and issue description are shared with the
                  matched specialist so they can reach out to you directly. We
                  may also use your information to follow up on your experience
                  and improve our service.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Information Sharing
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  We share your information only with the foundation repair
                  specialist(s) we connect you with. We do not sell, rent, or
                  trade your personal information to any third parties for
                  marketing purposes. We may disclose information if required by
                  law or to protect our legal rights.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Data Security
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  We take reasonable measures to protect the personal
                  information you provide from unauthorized access, use, or
                  disclosure. However, no method of transmission over the
                  internet or method of electronic storage is 100% secure, and
                  we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Cookies and Tracking
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Our website may use cookies and similar tracking technologies
                  to improve your browsing experience and analyze site traffic.
                  You can control cookie preferences through your browser
                  settings.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Your Rights
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  You have the right to request access to, correction of, or
                  deletion of the personal information we hold about you. To
                  exercise these rights, please contact us at 514-638-7382.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Changes to This Policy
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page. We encourage you to
                  review this policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Contact Us
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  If you have questions about this Privacy Policy, please
                  contact us at{" "}
                  <a
                    href="tel:5146387382"
                    className="font-medium text-navy hover:text-navy-light"
                  >
                    514-638-7382
                  </a>
                  .
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-xs text-muted-foreground">
                  Ottawa Crack Repair Network is an independent referral
                  service. All repair work is performed by licensed and insured
                  third-party contractors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
