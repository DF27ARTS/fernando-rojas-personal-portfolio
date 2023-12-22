import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { inter } from "@/fonts/fonts";
import "@/styles/main.scss";
import type { Metadata } from "next";
import Head from "next/head";
import portfolioIcon from "@/assets/portfolio-icon.png";

export const metadata: Metadata = {
  title: "Fernando Rojas",
  description: "Fernando Rojas Personal Website",
  icons: [portfolioIcon.src]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <section className="home-page">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
