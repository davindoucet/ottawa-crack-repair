import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@/components/google-analytics"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SITE_URL, DEFAULT_DESCRIPTION, PRIMARY_KEYWORDS, getOrganizationSchema } from "@/lib/seo"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Foundation Crack Repair Ottawa | Free Contractor Referral | Call 514-638-7382",
    template: "%s | Ottawa Crack Repair Network",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: PRIMARY_KEYWORDS,
  authors: [{ name: "Ottawa Crack Repair Network", url: SITE_URL }],
  creator: "Ottawa Crack Repair Network",
  publisher: "Ottawa Crack Repair Network",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "Ottawa Crack Repair Network",
    title: "Foundation Crack Repair Ottawa | Free Contractor Referral | Call 514-638-7382",
    description: DEFAULT_DESCRIPTION,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Ottawa Crack Repair Network - Foundation & Driveway Contractor Referral" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foundation Crack Repair Ottawa | Free Contractor Referral",
    description: DEFAULT_DESCRIPTION,
  },
  alternates: { canonical: SITE_URL },
  category: "Home and Garden",
  icons: { icon: "/icon.png", apple: "/icon.png" },
}

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
}

const organizationSchema = getOrganizationSchema()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-CA">
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <GoogleAnalytics />
        <Analytics />
      </body>
    </html>
  )
}
