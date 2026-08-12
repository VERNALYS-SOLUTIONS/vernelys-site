import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://vernelys.com";
const SITE_TITLE = "Vernelys · Solutions pour experts-comptables";
const SITE_DESCRIPTION =
  "VERNALYS SOLUTIONS édite deux solutions pour les experts-comptables : Vernelys, le complément Excel de production comptable, et Vernelys Plateforme, une plateforme collaborative avec IA souveraine, transcription et agents documentaires.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vernelys",
    template: "%s · Vernelys",
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Vernelys",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vernelys",
  legalName: "VERNALYS SOLUTIONS",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  email: "contact@vernelys.com",
  telephone: "+33787378559",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 Rue Docteur Horand",
    addressLocality: "Lyon",
    postalCode: "69009",
    addressCountry: "FR",
  },
  vatID: "FR 63 108293630",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth overflow-x-clip`}>
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          // Le JSON est neutralisé (« < » échappé) pour qu'aucune valeur ne
          // puisse jamais refermer la balise <script> d'accueil.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
