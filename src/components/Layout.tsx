import { Geist, Geist_Mono } from "next/font/google";
import { Navbar, Sidebar } from "@/components";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  /** States */
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen bg-zinc-50 font-sans dark:bg-black`}
    >
      <Navbar onToggleSidebar={() => setSidebarOpen(true)} />

      <Sidebar mobileOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="pt-20 mx-auto w-full max-w-6xl items-start justify-center gap-6 px-4 py-8 md:ml-64 lg:mr-72">
        {children}
      </main>
    </div>
  );
}
