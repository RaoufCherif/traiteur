import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Kalam } from "next/font/google";
import { Ephesis } from "next/font/google";
import { Smooch } from "next/font/google";
import Providers from "./components/Providers";
import Header from "./components/Header";
import Footer from "./components/Footer";


const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kalam",
});

const smooch = Smooch({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-smooch",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Traiteur Parisien",
  description: "Generated by traiteur parisien",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className } > */}
      <body className="h-screen ">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
