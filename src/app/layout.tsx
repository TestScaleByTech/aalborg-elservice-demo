import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Aalborg El-service ApS",
  description:
    "Hurtigt demo-site for Aalborg El-service ApS med fokus på elarbejde til private, erhverv og boligforeninger."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
