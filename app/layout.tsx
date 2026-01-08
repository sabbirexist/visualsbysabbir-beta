import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SABBIR — Video Editor & Motion Designer",
  description: "Professional video editing for brands, creators, and businesses."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
