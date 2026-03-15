import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoIdMe | Private, Secure, Consent-Driven Identity Platform",
  description:
    "One user platform for every website. NoIdMe centralizes authentication, privacy, consent, preferences, and profile operations in a private, secure, consent-driven layer.",
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
