import Credit from "@/components/functional/credit";
import { WebVitals } from "@/components/functional/web-vitals";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import {
  APP_DESCRIPTION,
  APP_NAME,
  APP_SLOGAN,
  BASE_URL,
  CREDIT_AGENCY_NAME,
  CREDIT_CREATOR_NAME,
  CREDIT_WEBSITE_URL,
  MAX_CONTENT_WIDTH,
} from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./custom.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: APP_NAME + " - " + APP_SLOGAN,
  description: APP_DESCRIPTION,
  generator: "Next.js",
  applicationName: APP_NAME,
  referrer: "origin-when-cross-origin",
  keywords: [APP_NAME, "Agency", "SMMA"],
  authors: [
    { name: CREDIT_CREATOR_NAME },
    { name: CREDIT_AGENCY_NAME, url: CREDIT_WEBSITE_URL },
  ],
  creator: CREDIT_CREATOR_NAME + ` (${CREDIT_AGENCY_NAME})`,
  publisher: CREDIT_AGENCY_NAME,
  manifest: BASE_URL + "/manifest.webmanifest",
  category: "marketing",
  openGraph: {
    title: APP_NAME + " - " + APP_SLOGAN,
    description: APP_DESCRIPTION,
    url: BASE_URL,
    siteName: APP_NAME,
    images: [
      {
        url: BASE_URL + "/logo.svg",
        width: 100,
        height: 24,
        alt: APP_NAME + " Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <WebVitals />
        <Credit />
        <Navbar />
        <div className="flex w-full justify-center">
          <div
            style={{ maxWidth: MAX_CONTENT_WIDTH + "px" }}
            className="relative w-full"
          >
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
