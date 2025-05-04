import type { Metadata } from "next";
import "./globals.css";
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: "Portfolio Web App Admin End - NextJS",
  description: "The Portfolio Web App Admin End demo for PROG3017",
};

export default function RootLayout({ children }:Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen overflow-y bg-default text-white p-6">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}