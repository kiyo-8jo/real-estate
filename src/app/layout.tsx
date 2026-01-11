import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/layouts/header/Header";
import Footer from "@/app/layouts/footer/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
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
      <body className={`${inter.className} ${roboto_mono.className} `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
