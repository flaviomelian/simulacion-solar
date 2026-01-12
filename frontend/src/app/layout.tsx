import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Home, Cpu } from "lucide-react"; // iconos: Home y simulaciones
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartSolarLab",
  description: "Aplicación de simulación solar y fotovoltaica",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-gray-900 shadow-md">
          <h1 className="text-xl font-bold">SmartSolarLab</h1>
          <nav className="flex gap-4 pr-10">
            <Link
              href="/"
              className="relative flex items-center gap-1 text-gray-500 hover:text-white 
             transition-colors duration-500 ease-in-out
             before:absolute before:inset-0 before:rounded-full
             before:bg-gradient-radial before:from-white before:via-white/30 before:to-transparent
             before:opacity-0 hover:before:opacity-30 before:transition-opacity before:duration-500"
            >
              <Home size={20} /> Inicio
            </Link>

            <Link
              href="/simulaciones"
              className="relative flex items-center gap-1 text-gray-500 hover:text-white 
             transition-colors duration-500 ease-in-out
             before:absolute before:inset-0 before:rounded-full
             before:bg-gradient-radial before:from-white before:via-white/30 before:to-transparent
             before:opacity-0 hover:before:opacity-30 before:transition-opacity before:duration-500"
            >
              <Cpu size={20} /> Simulaciones
            </Link>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-1 px-6 py-8 bg-gray-900">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-center py-4 mt-auto border-t border-gray-900">
          @flaviomelian
        </footer>
      </body>
    </html>
  );
}
