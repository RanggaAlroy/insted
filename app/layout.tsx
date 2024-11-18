import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const atGambit = localFont({
  src: './fonts/AtGambitTRIAL-Regular.otf',
  variable: '--font-atGambit',
  weight: '400'
})

const atHauss = localFont({
  src: './fonts/AtHaussTRIAL-Regular.otf',
  variable: '--font-atHauss',
  weight: '400'
})


export const metadata: Metadata = {
  title: "Insted",
  description: "Instalation edition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${atGambit.variable} ${atHauss.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
