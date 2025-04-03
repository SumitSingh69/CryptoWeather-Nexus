import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container py-6">{children}</main>

      <footer className="border-t border-[var(--card-border)] py-6 mt-10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm opacity-60">
                © {new Date().getFullYear()} CryptoWeather Nexus. All rights
                reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <span className="text-sm opacity-60">
                Built with React & Next.js
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
