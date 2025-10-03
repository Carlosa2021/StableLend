import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StableLend Protocol - Secure DeFi Banking",
  description: "Seguridad, transparencia y utilidad real en DeFi. Depósitos garantizados, préstamos responsables y swaps simples.",
  keywords: ["DeFi", "stablecoin", "lending", "borrowing", "USDC", "USDT", "Ethereum"],
  authors: [{ name: "StableLend Protocol" }],
  openGraph: {
    title: "StableLend Protocol",
    description: "El futuro de las finanzas descentralizadas, hoy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
