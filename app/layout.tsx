import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AccurusBill - Medical Billing Services for Healthcare Providers",
  description:
    "AccurasBill provides end-to-end Revenue Cycle Management (RCM) solutions, including Medical Billing, Coding, Prior Authorization & Denial Management for private clinics in the U.S. Get paid faster with optimized claims processing!.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-white`}>
        {children}
      </body>
    </html>
  );
}
