"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // New state for dropdown
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 z-50 w-full border-b border-[#6C5CE7]/20 transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-md" : "bg-white/90 shadow-lg"
        } backdrop-blur-md`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-2 md:px-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/logo.jpg"
                alt="AccurusBill Logo"
                width={60}
                height={60}
                priority
                quality={80}
                className="rounded-full shadow-md"
              />
              <span className="text-2xl font-bold text-[#3E37A1] whitespace-nowrap tracking-wide">
                AccurusBill
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[#3E37A1] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] transition-transform duration-300 hover:scale-110"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="text-3xl">☰</span>
          </button>

          {/* Navigation Links */}
          <div
            className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white/95 md:bg-transparent shadow-xl md:shadow-none transition-all duration-500 ease-in-out transform ${
              open
                ? "max-h-[100vh] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-4"
            } md:max-h-none md:opacity-100 md:translate-y-0 overflow-hidden md:flex md:items-center md:space-x-8`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left p-4 md:p-0">
              <NavLink href="/" text="Home" />
              <li className="md:inline-block text-center py-3 md:py-0 relative group">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown on click
                  className={`block px-4 py-2 text-gray-700 hover:text-[#3E37A1] hover:bg-[#F5F5FC]/50 rounded-md transition-all duration-300 ${
                    pathname === "/services" || pathname.startsWith("/services/")
                      ? "font-bold text-[#6C5CE7] border-b-2 border-[#6C5CE7] bg-[#F5F5FC]/70"
                      : ""
                  }`}
                >
                  Services
                </button>
                <div
                  className={`md:absolute top-full mt-2 ${
                    dropdownOpen ? "block" : "hidden"
                  } md:group-hover:block bg-white/95 md:bg-transparent shadow-md md:shadow-none rounded-md md:rounded-none w-full md:w-auto z-10 transition-all duration-300`}
                >
                  <ul className="flex flex-col md:flex-row md:space-x-4 py-2 md:py-0">
                    <NavDropdownLink
                      href="/services/medical-billing"
                      text="Medical Billing & Claims Submission"
                      pathname={pathname}
                    />
                    <NavDropdownLink
                      href="/services/medical-coding"
                      text="Medical Coding (ICD-10-CA & CPT)"
                      pathname={pathname}
                    />
                    <NavDropdownLink
                      href="/services/prior-authorization"
                      text="Prior Authorization & Insurance Verification"
                      pathname={pathname}
                    />
                    <NavDropdownLink
                      href="/services/virtual-scribing"
                      text="Virtual Medical Scribing"
                      pathname={pathname}
                    />
                    <NavDropdownLink
                      href="/services/medical-transcription"
                      text="Medical Transcription Services"
                      pathname={pathname}
                    />
                    <NavDropdownLink
                      href="/services/physician-credentialing"
                      text="Physician Credentialing"
                      pathname={pathname}
                    />
                  </ul>
                </div>
              </li>
              <NavLink href="/pricing" text="Pricing" />
              <NavLink href="/about" text="About" />
              <NavLink href="/contact" text="Contact" />
            </ul>
          </div>

          {/* Free Audit Button */}
          <div className="hidden md:block pr-2">
            <Link
              href="/contact"
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
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="md:inline-block text-center py-3 md:py-0">
      <Link
        href={href}
        className={`block px-4 py-2 text-gray-700 hover:text-[#3E37A1] hover:bg-[#F5F5FC]/50 rounded-md transition-all duration-300 ${
          isActive
            ? "font-bold text-[#6C5CE7] border-b-2 border-[#6C5CE7] bg-[#F5F5FC]/70"
            : ""
        }`}
      >
        {text}
      </Link>
    </li>
  );
}

function NavDropdownLink({
  href,
  text,
  pathname,
}: {
  href: string;
  text: string;
  pathname: string;
}) {
  const isActive = pathname === href;

  return (
    <li className="md:inline-block text-center">
      <Link
        href={href}
        className={`block px-4 py-2 text-gray-700 hover:text-[#3E37A1] hover:bg-[#F5F5FC]/50 rounded-md transition-all duration-300 ${
          isActive
            ? "font-bold text-[#6C5CE7] border-b-2 border-[#6C5CE7] bg-[#F5F5FC]/70"
            : ""
        }`}
      >
        {text}
      </Link>
    </li>
  );
}
