import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "../lib/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Oblyx NFT",
  description:
    "Join the 1,000-supply allowlist. Enter your X handle, finish X tasks, reserve up to 4 NFTs.",
  keywords: [
    "Oblyx", "Oblyx NFT", "NFT allowlist", "free NFT reservation",
    "Oblyx official", "Oblyx claim",
  ],
  category: "technology",
  icons: {
    icon: "/icon.jpg",
  },
  openGraph: {
    title: `Oblyx NFT — official reservation site`,
    description:
      "Reserve your spot in the 1,000-supply Oblyx NFT allowlist. Reservation is free; claim-phase details (pricing, payments) announced on @OBLYX_NFT.",
    type: "website",
    ...(siteUrl ? { url: siteUrl } : {}),
    siteName: "Oblyx",
    images: [{ url: "/icon.jpg" }],
  },
  twitter: {
    card: "summary",
    title: "Oblyx NFT — official reservation site",
    description:
      "Reserve your spot in the 1,000-supply Oblyx NFT allowlist. Reservation is free; claim-phase details (pricing, payments) announced on @OBLYX_NFT.",
    images: ["/icon.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0e1219",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
