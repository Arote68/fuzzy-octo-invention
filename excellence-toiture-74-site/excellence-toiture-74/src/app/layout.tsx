import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: { default: "Excellence Toiture 74 | Couvreur à Annecy", template: "%s | Excellence Toiture 74" },
  description: "Couverture, zinguerie, entretien et rénovation de toiture à Annecy et en Haute-Savoie. Un savoir-faire artisanal transmis depuis trois générations.",
  metadataBase: new URL("https://excellence-toiture74.fr"),
  openGraph: {
    title: "Excellence Toiture 74 — Préserver votre maison, honorer son histoire.",
    description: "Couverture, zinguerie et entretien de toiture à Annecy et en Haute-Savoie.",
    locale: "fr_FR",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${display.variable} ${sans.variable}`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
