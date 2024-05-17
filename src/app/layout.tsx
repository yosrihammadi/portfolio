import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const handwrite = localFont({ src: "../fonts/handwrite.ttf" });

export const metadata: Metadata = {
  title: "Portfolio - Yosri Hammadi",
  description: "Portfolio - Yosri Hammadi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
