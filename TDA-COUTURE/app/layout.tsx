import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
// CHANGE IS HERE: Use "../" instead of "@/"
import SmoothScrollProvider from "../components/SmoothScrollProvider";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"], 
  variable: "--font-serif" 
});

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500"], 
  variable: "--font-sans" 
});

export const metadata: Metadata = {
  title: "TDA Couture | Bespoke Menswear, Lagos & Abuja",
  description: "Founded in 2018 by Dare Aliu. Swiss cotton, cashmere, Aso-oke. Cut in Lagos. Worn within 72 hours.",
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#0B0B0C] text-[#F3EDE0] antialiased overflow-x-hidden">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}