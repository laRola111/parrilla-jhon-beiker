import type { Metadata } from "next";
import { Archivo_Black, Black_Ops_One, Nunito, Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});

const blackOpsOne = Black_Ops_One({
  variable: "--font-black-ops-one",
  weight: "400",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parrillas JhonBeiker - Grill Colombo-Venezolano",
  description: "El Mejor Sabor del Grill Colombo-Venezolano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${archivoBlack.variable} ${blackOpsOne.variable} ${nunito.variable} ${montserrat.variable} font-sans antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col overflow-x-hidden relative`}
      >
        <div className="fixed inset-0 pointer-events-none bg-grain-texture opacity-[0.03] z-0 mix-blend-overlay"></div>
        <div className="fixed inset-0 pointer-events-none vignette-overlay z-0"></div>
        <LanguageProvider>
          <div className="relative z-10">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
