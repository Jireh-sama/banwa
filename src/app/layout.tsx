import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Banwa — Immortalized in Stone, Welcomed Back Home | Memorial Marble Heirlooms",
  description:
    "Transform cherished photographs of beloved companions and family members into timeless, hand-finished marble heirlooms. Powered by gentle AI 3D volumetric reconstruction and sculpted by master stone masons.",
  keywords: [
    "pet memorial",
    "marble sculpture",
    "pet remembrance",
    "memorial keepsake",
    "AI 3D sculpting",
    "hand-carved marble",
    "pet ashes urn",
    "companion memorial",
    "honed travertine",
    "crema marfil marble",
    "custom pet sculpture",
    "memorial plinth",
    "stone memorial",
    "pet loss",
    "bereavement keepsake",
  ],
  openGraph: {
    title: "Banwa — Immortalized in Stone, Welcomed Back Home",
    description:
      "Transform cherished photographs of beloved companions into timeless, hand-finished marble heirlooms. Powered by gentle AI 3D sculpting and master stone masons.",
    type: "website",
    locale: "en_US",
    siteName: "Banwa Sanctuary",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banwa — Immortalized in Stone, Welcomed Back Home",
    description:
      "Transform cherished photographs into timeless marble heirlooms. AI-powered 3D sculpting meets master artisan craftsmanship.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body text-[15px] leading-[24px] text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
