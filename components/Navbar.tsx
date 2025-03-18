"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, x: 50, transition: { duration: 0.3 } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.3 } },
  };

  const underlineVariants = {
    hidden: { width: "0%", transition: { duration: 0.3 } },
    visible: { width: "100%", transition: { duration: 0.3 } },
  };

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 z-50 w-full border-b border-[#6C5CE7]/20 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
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
            <span className="text-2xl font-bold text-[#3E37A1] whitespace-nowrap tracking-wide">
              AccurusBill
            </span>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[#3E37A1] focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] rounded-md transition-transform duration-300 hover:scale-110"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="text-3xl">☰</span>
          </button>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <ul className="flex items-center space-x-6">
              <NavLink href="/" text="Home" />
              <li className="relative" ref={dropdownRef}>
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="relative"
                >
                  <Link
                    href="/services"
                    className={`flex items-center px-4 py-2 text-gray-700 font-medium rounded-md transition-all duration-300 hover:text-[#3E37A1] ${
                      pathname === "/services" || pathname.startsWith("/services/")
                        ? "text-[#6C5CE7] font-bold"
                        : ""
                    }`}
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen}
                  >
                    Services
                  </Link>
                  {(isDropdownOpen || pathname === "/services" || pathname.startsWith("/services/")) && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-[#6C5CE7]"
                      variants={underlineVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    />
                  )}
                </div>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      className="absolute left-0 mt-2 w-64 bg-gradient-to-br from-white/90 via-white/80 to-[#F5F5FC] rounded-lg shadow-xl border border-[#6C5CE7]/10 overflow-hidden"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <div className="p-2">
                        {[
                          "End-to-End Revenue Cycle Management (RCM)",
                          "Medical Billing & Claims Submission",
                          "Medical Coding (ICD-10-CA & CPT)",
                          "Prior Authorization & Insurance Verification",
                          "Virtual Medical Scribing",
                          "Medical Transcription Services",
                          "Physician Credentialing",
                        ].map((service, index) => {
                          const href = `/services/${service
                            .toLowerCase()
                            .replace(/ & /g, "-")
                            .replace(/\(.*?\)/g, "")
                            .replace(/ /g, "-")
                            .replace(/-+$/, "")}`; // Remove trailing hyphens
                          console.log(`Desktop - Service: ${service}, Generated href: ${href}`); // Debug log
                          return (
                            <motion.div
                              key={index}
                              className="mb-2 last:mb-0"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                            >
                              <Link
                                href={href}
                                className={`block w-full px-4 py-2 text-gray-700 hover:bg-[#6C5CE7]/20 hover:text-white rounded-md transition-all duration-300 font-medium ${
                                  pathname === href ? "bg-[#6C5CE7] text-white" : ""
                                }`}
                              >
                                {service}
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <NavLink href="/pricing" text="Pricing" />
              <NavLink href="/about" text="About" />
              <NavLink href="/contact" text="Contact" />
            </ul>
            <Button
              className="ml-6 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-[#6C5CE7] text-white hover:bg-[#3E37A1]"
              asChild
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          <div
            className={`absolute top-20 left-0 w-full bg-white/95 md:hidden shadow-xl transition-all duration-500 ease-in-out ${
              open
                ? "max-h-[100vh] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-4"
            } overflow-hidden`}
          >
            <ul className="flex flex-col items-center space-y-4 p-4">
              <NavLink href="/" text="Home" />
              <li className="w-full text-center">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full px-4 py-2 text-gray-700 font-medium rounded-md transition-all duration-300 hover:text-[#3E37A1] ${
                    pathname === "/services" || pathname.startsWith("/services/")
                      ? "text-[#6C5CE7] font-bold"
                      : ""
                  }`}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  Services
                  <span className="ml-2">{isDropdownOpen ? "▲" : "▼"}</span>
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      className="mt-2 w-full bg-gradient-to-br from-white/90 via-white/80 to-[#F5F5FC] rounded-lg shadow-md border border-[#6C5CE7]/10 overflow-hidden"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="p-2">
                        {[
                          "End-to-End Revenue Cycle Management (RCM)",
                          "Medical Billing & Claims Submission",
                          "Medical Coding (ICD-10-CA & CPT)",
                          "Prior Authorization & Insurance Verification",
                          "Virtual Medical Scribing",
                          "Medical Transcription Services",
                          "Physician Credentialing",
                        ].map((service, index) => {
                          const href = `/services/${service
                            .toLowerCase()
                            .replace(/ & /g, "-")
                            .replace(/\(.*?\)/g, "")
                            .replace(/ /g, "-")
                            .replace(/-+$/, "")}`; // Remove trailing hyphens
                          console.log(`Mobile - Service: ${service}, Generated href: ${href}`); // Debug log
                          return (
                            <motion.div
                              key={index}
                              className="mb-2 last:mb-0"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                            >
                              <Link
                                href={href}
                                className={`block w-full px-4 py-2 text-gray-700 hover:bg-[#6C5CE7]/20 hover:text-white rounded-md transition-all duration-300 font-medium ${
                                  pathname === href ? "bg-[#6C5CE7] text-white" : ""
                                }`}
                              >
                                {service}
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <NavLink href="/pricing" text="Pricing" />
              <NavLink href="/about" text="About" />
              <NavLink href="/contact" text="Contact" />
              <Button
                className="w-full mt-4 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-[#6C5CE7] text-white hover:bg-[#3E37A1]"
                asChild
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </ul>
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
    <li className="md:inline-block">
      <Link
        href={href}
        className={`px-4 py-2 text-gray-700 font-medium rounded-md transition-all duration-300 hover:text-[#3E37A1] ${
          isActive ? "text-[#6C5CE7] font-bold" : ""
        }`}
      >
        {text}
      </Link>
    </li>
  );
}
