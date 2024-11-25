import type { Metadata } from "next";
import "./globals.css";

import ScrollTop from "@/components/ScrollTop";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import YourBag from "@/components/YourBag";
import CartProvider from "@/context/CartContext";
import { Manrope } from "next/font/google";
import { Toaster } from "sonner";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "We5ive Fashion",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <CartProvider>
          <Toaster />
          <ScrollTop />
          <Navbar />
          {children}
          <div className="hidden xl:block">
            <YourBag />
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
