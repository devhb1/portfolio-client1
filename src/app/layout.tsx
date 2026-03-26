import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kartik Sihag | Portfolio",
  description:
    "Portfolio of Kartik Sihag — Video Editing, Thumbnail Design, Banner/Flyers, Package Design, T-Shirt Design, and Logo & Identity.",
  metadataBase: new URL("https://kartiksihag.com"),
  icons: {
    icon: [
      { url: "/logo-ks-mark.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo-ks-mark.svg",
    apple: "/logo-ks-mark.svg",
  },
  openGraph: {
    title: "Kartik Sihag | Portfolio",
    description: "Graphic Designer & Video Editor",
    images: [
      {
        url: "/logo-ks.svg",
        width: 800,
        height: 800,
        alt: "Kartik Sihag Studio Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} bg-[#f0f0e6] text-[#121212]`}>
        {children}
      </body>
    </html>
  );
}
