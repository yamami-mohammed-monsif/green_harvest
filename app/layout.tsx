import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green Harvert",
  description: "Organic Produce Delivery Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
