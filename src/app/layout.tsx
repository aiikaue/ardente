import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { AgeGate } from "@/components/AgeGate";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ardente | Saúde Sexual & Bem-estar",
  description:
    "Produtos de saúde sexual com recomendações inteligentes, dicas de cuidados e orientação responsável para maiores de 18 anos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>
          <AgeGate />
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-border py-8 text-center text-sm text-zinc-400">
            <p>© {new Date().getFullYear()} Ardente — Conteúdo destinado a maiores de 18 anos.</p>
            <p className="mt-1 text-gold/70">Saúde sexual • Educação • Bem-estar</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
