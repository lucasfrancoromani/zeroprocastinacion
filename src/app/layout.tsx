import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Analytics from "./analytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Zero Procrastinación",
  description: "El método para dejar de posponer tu vida.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans bg-brand-dark text-brand-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
