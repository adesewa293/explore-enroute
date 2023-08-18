import Header from "../components/Header";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import { DM_Mono } from "next/font/google";
import "./globals.css";

const dm_mono = DM_Mono({
  subsets: ["latin"],
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: "Explore enroute",
  description: "Your one stop travel inspiration blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dm_mono.className} mx-6`}>
        <Header />
        <main className="flex justify-center">
          <div className="max-w-lg grow">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
