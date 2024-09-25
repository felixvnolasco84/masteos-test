/* eslint-disable @next/next/next-script-for-ga */
import { Sen } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { WithContext, Organization } from "schema-dts";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ConvexClientProvider } from "@/providers/convex-provider";

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Grupo Amphytrion",
  url: "https://www.amphitryon.mx/",
  logo: "https://www.amphitryon.mx/images/logo.png",
  description:
    "Grupo Amphitryon ofrece espacios exclusivos para eventos privados en la Ciudad de México.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+52-55-1384-2959",
      contactType: "Reservas",
      name: "César González",
    },
    {
      "@type": "ContactPoint",
      telephone: "+52-55-6868-8442",
      contactType: "Reservas",
      name: "Antón Arias",
    },
  ],
  sameAs: [
    "https://www.instagram.com/amphitryon.mx",
    "https://www.facebook.com/amphitryon.mx",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad de México",
    addressCountry: "MX",
  },
};

const senFont = Sen({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-Mx">
      <head>
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${senFont.className}`}>
        <ConvexClientProvider>
          <Header />
          <div id="root" className="flex flex-1 flex-col gap-3">
            <Script
              id="org-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
              }}
            />
            {children}
          </div>
          {/* <GoogleAnalytics gaId="G-Z2FQ3KVBPJ" />
          <GoogleTagManager gtmId="AW-16453854332" /> */}
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
