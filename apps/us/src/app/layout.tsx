import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HideOnPaths } from "@/components/layout/HideOnPaths";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/components/cart/CartProvider";
import { AttributionCapture } from "@/components/integrations/AttributionCapture";
import { ClarityAnalytics } from "@/components/integrations/ClarityAnalytics";
import { KlaviyoAnalytics } from "@/components/integrations/KlaviyoAnalytics";
import { MarketingAnalytics } from "@/components/integrations/MarketingAnalytics";
import { TawkToWidget } from "@/components/integrations/TawkToWidget";
import { market } from "@/lib/market";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muuhu Airpro | Salon Professional Results",
  description: "Dry, curl, straighten, and volumise with the Muuhu high speed styler. 110,000 RPM brushless motor and ionic technology.",
  metadataBase: new URL(market.siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: market.siteUrl,
    title: "Muuhu Airpro",
    description: "Dry, curl, straighten, and volumise with the Muuhu high speed styler.",
    siteName: "Muuhu",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${mono.variable} ${playfair.variable} selection:bg-[var(--gold)] selection:text-[var(--ink)]`}
    >
      <body>
        <CartProvider>
          <HideOnPaths paths={["/cart"]}>
            <AnnouncementBar />
            <Header />
          </HideOnPaths>
          <main>{children}</main>
          <HideOnPaths paths={["/cart"]}>
            <Footer />
          </HideOnPaths>
          <CartDrawer />
        </CartProvider>
        <AttributionCapture />
        <MarketingAnalytics />
        <ClarityAnalytics />
        <KlaviyoAnalytics />
        <TawkToWidget />
      </body>
    </html>
  );
}
