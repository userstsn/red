import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SessionProviders from "@/components/Providers/SessionProvider";

const inter = Poppins({
  subsets: ["latin"],
  weight: "800"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProviders>

      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SessionProviders>
  );
}
