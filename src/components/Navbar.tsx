"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path ? "active" : "";
  };

  return (
    <nav className={`navbar ${isScrolled ? "shadow-md" : ""}`}>
      <div className="navbar-container container">
        <Link href="/" className="navbar-logo">
          CryptoWeather Nexus
        </Link>

        <div className="navbar-links">
          <Link
            href="/dashboard"
            className={`nav-link ${isActive("/dashboard")}`}
          >
            Dashboard
          </Link>
          <Link href="/weather" className={`nav-link ${isActive("/weather")}`}>
            Weather
          </Link>
          <Link href="/crypto" className={`nav-link ${isActive("/crypto")}`}>
            Crypto
          </Link>
        </div>

        <div className="flex items-center">
          <div className="status-indicator status-online">API Connected</div>
        </div>
      </div>
    </nav>
  );
}
