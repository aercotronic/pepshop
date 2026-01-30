import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.name,
  description: "A minimal shop-style site."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
