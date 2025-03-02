import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AccurusBill - Medical Billing Services for Healthcare Providers",
  description:
    "Streamline your medical billing with AccurusBill. Expert services for RAMQ, OHIP, and private insurance claims. Get paid faster with our efficient billing solutions.",
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
