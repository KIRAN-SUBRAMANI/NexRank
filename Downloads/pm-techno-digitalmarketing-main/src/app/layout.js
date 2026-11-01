import { Manrope, Poppins, Playfair_Display } from "next/font/google";
import AnalyticsManager from "@/components/analytics/AnalyticsManager";
import ScrollToTop from "@/components/common/ScrollToTop";
import Header from "@/components/layout/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.nexranktechnogroup.com"),
  title: {
    default: "NexRank | Digital Marketing Agency",
    template: "%s | NexRank"
  },
  description: "Enterprise-quality digital marketing, SEO, Google Ads, and custom web development services designed to scale your business.",
  keywords: ["Digital Marketing", "SEO Agency", "Web Development", "Google Ads", "NexRank"],
  openGraph: {
    title: "NexRank | Enterprise Digital Marketing",
    description: "Accelerate your growth with data-driven marketing and world-class web development.",
    url: "https://www.nexranktechnogroup.com",
    siteName: "NexRank",
    images: [
      {
        url: "/og-image.jpg", // Placeholder for actual OG image
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexRank | Enterprise Digital Marketing",
    description: "Accelerate your growth with data-driven marketing and world-class web development.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  // Enterprise JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NexRank",
    "url": "https://www.nexranktechnogroup.com",
    "logo": "https://www.nexranktechnogroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-1234",
      "contactType": "customer service"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${manrope.variable} ${poppins.variable} ${playfair.variable} font-sans antialiased bg-bg-secondary text-text-primary`}>
        <ScrollToTop />
        <AnalyticsManager />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="flex flex-col min-h-screen bg-surface">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
