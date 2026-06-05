import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OJASYE — Feel Better. Perform Better.",
  description: "Technology-powered, doctor-guided wellness programs personalized to your biology. Built for men who refuse to settle for average.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
