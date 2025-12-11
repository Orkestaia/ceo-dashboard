import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CEO Dashboard",
  description: "Executive specific dashboard application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-slate-50 text-slate-900 overflow-hidden")}>
        <div className="flex h-screen w-full">
          <Sidebar />
          <main className="flex-1 flex flex-col lg:pl-64 h-full overflow-hidden transition-all duration-300">
            <Header />
            <div className="flex-1 overflow-y-auto p-4 lg:p-8 relative">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
