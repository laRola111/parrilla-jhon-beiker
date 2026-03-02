import type { Metadata } from "next";
import { Work_Sans, Patua_One } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const patuaOne = Patua_One({
  variable: "--font-patua-one",
  weight: "400",
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
        className={`${workSans.variable} ${patuaOne.variable} font-sans antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
