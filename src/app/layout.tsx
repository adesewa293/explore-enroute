import Header from "../components/Header";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        <main className="flex justify-center">
          <div className="max-w-lg grow">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
