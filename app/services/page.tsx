"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import {
  FaFileInvoiceDollar,
  FaClipboardCheck,
  FaUserMd,
  FaLaptopMedical,
  FaDatabase,
  FaIdCard,
  FaStar,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      id: "medical-billing",
      title: "Medical Billing & Claims Submission",
      description: "From Charge to Cash: Zero Denials, Zero Stress",
      steps: [
        "Auto-capture charges from your EHR/EMR and scrub errors in real time.",
        "Submit claims within 4 hours with payer-specific rules pre-checked.",
        "Track payments daily, appeal denials on your behalf, and resolve underpayments.",
      ],
      icon: <FaFileInvoiceDollar className="text-[#6C5CE7] text-4xl" />,
    },
    {
      id: "medical-coding",
      title: "Medical Coding (ICD-10, CPT)",
      description: "Audit-Proof Coding, Revenue Maximized",
      steps: [
        "CPC-certified coders review charts and assign codes that insurers actually pay.",
        "Dual-layer audit checks eliminate upcoding and downcoding risks.",
        "Monthly reports demonstrate the coding impact on your revenue.",
      ],
      icon: <FaClipboardCheck className="text-[#00C4CC] text-4xl" />,
    },
    {
      id: "prior-authorization",
      title: "Prior Authorization & Insurance Verification",
      description: "Stop Delays. Start Treating.",
      steps: [
        "Flag treatments needing approval during scheduling.",
        "Submit prior authorizations with clinical evidence on the same day.",
        "Escalate stalled requests directly to payer medical directors.",
      ],
      icon: <FaUserMd className="text-[#3E37A1] text-4xl" />,
    },
    {
      id: "medical-scribing",
      title: "Virtual Medical Scribing",
      description: "Chart in Real Time, Not Overtime",
      steps: [
        "HIPAA-trained scribes join patient visits (in-person or virtual).",
        "Document directly into your EHR using your preferred templates.",
        "Notes are ready for your review and sign-off within 1 hour.",
      ],
      icon: <FaLaptopMedical className="text-[#FFC107] text-4xl" />,
    },
    {
      id: "medical-transcription",
      title: "Medical Transcription Services",
      description: "From Voice to EHR: Faster, Smarter, Secure",
      steps: [
        "Dictate notes via a secure app or call; we transcribe in under 4 hours.",
        "Format transcriptions to your specialty (SOAP notes, H&Ps, procedure summaries).",
        "Upload documents to your EHR with timestamps and provider signatures.",
      ],
      icon: <FaDatabase className="text-[#5A50DA] text-4xl" />,
    },
    {
      id: "physician-credentialing",
      title: "Physician Credentialing",
      description: "Stay Enrolled. Stay Open. Stay Growing.",
      steps: [
        "Collect licenses, malpractice history, and practice details.",
        "File applications, track progress, and resolve payer roadblocks.",
        "Automate revalidation to ensure you never lapse.",
      ],
      icon: <FaIdCard className="text-[#FF6B6B] text-4xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5FC] flex flex-col">
      {/* Navbar with Prefetch */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section (No Animations) */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#6C5CE7]/20 to-[#F5F5FC] bg-[url('/images/service-bg-pattern.png')] bg-no-repeat bg-center bg-cover">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-6xl font-extrabold text-[#3E37A1] mb-4 drop-shadow-md">
              Our Services
            </h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
              {'Your Practice’s Shield Against Revenue Loss & Burnout'} – We don’t just manage tasks—we fix broken workflows, defend your revenue, and protect your time.
            </p>
          </div>
        </section>

        {/* Services Grid (No Animations, Tile Layout) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-8 rounded-xl shadow-lg border border-[#6C5CE7]/10 hover:shadow-xl transition duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="mr-4">{service.icon}</div>
                    <h2 className="text-2xl font-semibold text-[#3E37A1]">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg mb-6 text-gray-700 font-medium">
                    {service.description}
                  </p>

                  {/* Steps List (No Animations, Gold Star Bullets) */}
                  <ul className="list-none space-y-2 pl-6 mb-8 text-gray-700">
                    {service.steps.map((step, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-2 text-base"
                      >
                        <FaStar className="text-[#FFC107] mt-1 flex-shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action (No Animations) */}
        <section className="py-20 bg-gradient-to-r from-[#6C5CE7] to-[#3E37A1] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Optimize Your Practice?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take the first step toward streamlined billing and maximized
              revenue today!
            </p>
            <div>
              <Button
                asChild
                size="lg"
                className="bg-[#FFC107] text-[#3E37A1] font-bold shadow-lg hover:bg-[#FFD700] transition duration-300 rounded-lg"
              >
                <Link href="/contact">Contact Us Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#3E37A1] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Left Section: Copyright, Email, Address, and Navigation */}
            <div className="mb-6 md:mb-0">
              <p className="text-base text-center md:text-left">
                © 2024 AccurusBill. Empowering Private Clinics with Comprehensive,
                Cost-Effective Solutions
              </p>
              <div className="mt-4 space-y-2 text-center md:text-left">
                <p className="text-base flex items-center justify-center md:justify-start">
                  <FaMapMarkerAlt className="mr-2 text-[#FFC107] text-lg" />
                  30 N Gould St Ste R<br />
                  Sheridan, Wyoming, United States, 82801
                </p>
                <p className="text-base">Email: info@AccurusBill.com</p>
              </div>
              <div className="mt-4 flex justify-center md:justify-start space-x-4">
                <Link
                  href="/"
                  className="text-white hover:text-[#FFC107] transition duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-[#FFC107] transition duration-300"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-white hover:text-[#FFC107] transition duration-300"
                >
                  Services
                </Link>
                <Link
                  href="/blog"
                  className="text-white hover:text-[#FFC107] transition duration-300"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-[#FFC107] transition duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Right Section: Social Media */}
            <div className="text-center md:text-right bg-white/10 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center md:justify-end space-x-6">
                <Link
                  href="https://www.linkedin.com/company/accurusbill/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FFC107] transition duration-300 transform hover:scale-110"
                >
                  <FaLinkedin className="text-4xl" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://twitter.com/explore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FFC107] transition duration-300 transform hover:scale-110"
                >
                  <FaTwitter className="text-4xl" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
