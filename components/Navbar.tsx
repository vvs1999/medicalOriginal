"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  // Removed unused pathname variable from Navbar

  return (
    <header>
      <nav className="sticky top-0 z-50 w-full border-b border-[#6C5CE7]/20 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="AccurusBill Logo"
                width={60}
                height={60}
                priority
                quality={80}
                className="rounded-full shadow-md"
              />
              <span className="text-2xl font-bold text-[#3E37A1] whitespace-nowrap tracking-wide">AccurusBill</span>
            </Link>
          </div>

          {/* Mobile Menu Button (Dynamic Hamburger) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[#3E37A1] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] transition-transform duration-300 hover:scale-110"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="text-3xl">☰</span>
          </button>

          {/* Navigation Links (Desktop & Mobile) */}
          <div
            className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white/95 md:bg-transparent shadow-xl md:shadow-none transition-all duration-500 ease-in-out transform ${
              open ? "max-h-[100vh] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
            } md:max-h-none md:opacity-100 md:translate-y-0 overflow-hidden md:flex md:items-center md:space-x-8`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left p-4 md:p-0">
              <NavLink href="/" text="Home" />
              <NavLink href="/services" text="Services" />
              <NavLink href="/pricing" text="Pricing" />
              <NavLink href="/about" text="About" />
              <NavLink href="/contact" text="Contact" />
            </ul>
          </div>

          {/* Free Audit Button (Dynamic, Attractive) */}
          <div className="hidden md:block">
            <Link
              href="/free-audit"
              className="bg-[#6C5CE7] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#3E37A1] hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap font-semibold text-lg"
            >
              Get a Free Audit
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  const pathname = usePathname(); // Moved usePathname() here
  const isActive = pathname === href;

  return (
    <li className="md:inline-block text-center py-3 md:py-0">
      <Link
        href={href}
        className={`block px-4 py-2 text-gray-700 hover:text-[#3E37A1] hover:bg-[#F5F5FC]/50 rounded-md transition-all duration-300 ${
          isActive ? "font-bold text-[#6C5CE7] border-b-2 border-[#6C5CE7] bg-[#F5F5FC]/70" : ""
        }`}
      >
        {text}
      </Link>
    </li>
  );
}