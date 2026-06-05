import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ojasye | AI Wellness Assistant",
  description: "Feel Better. Perform Better. Your personal AI-driven wellness companion by Ojasye Wellness Technologies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white antialiased">{children}</body>
    </html>
  );
}
