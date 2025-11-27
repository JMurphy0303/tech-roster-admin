import type { Metadata } from "next";
import "./globals.css";
<<<<<<< HEAD
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: "Portfolio Web App Admin End - NextJS",
  description: "The Portfolio Web App Admin End demo for PROG3017",
=======

export const metadata: Metadata = {
  title: "Tech Roster Admin",
  description: "The Tech Roster Admin demo for PROG3017",
>>>>>>> publish/main
};

export default function RootLayout({ children }:Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body>
<<<<<<< HEAD
        <div className="min-h-screen overflow-y bg-default text-white p-6">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
=======
        {children}
      </body>
    </html>
  );
}
>>>>>>> publish/main
