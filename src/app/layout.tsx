import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/layouts/header/Header";
import Footer from "@/app/layouts/footer/Footer";
import { Geist } from "next/font/google";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
//   preload: true,
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
//   preload: true,
// });
const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "アイランド不動産",
  description: "island real estate homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={geist.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
