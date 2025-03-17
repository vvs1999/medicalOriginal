import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  FaCheckCircle,
  FaFileInvoiceDollar,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const metadata = {
  title: "Medical Coding - AccurusBill",
  description:
    "Accurate medical coding with AccurusBill ensures compliance and maximizes reimbursements for your practice.",
};

export default function MedicalCodingPage() {
  return (
    <div className="min-h-screen bg-[#F5F5FC] flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-[#3E37A1] to-[#6C5CE7] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Medical Coding
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              <span className="font-semibold">"Precision Coding, Perfect Reimbursements."</span>
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#FFC107] text-[#3E37A1] font-bold hover:bg-[#FFD700] transition-all duration-300 rounded-lg shadow-lg"
            >
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-[#F5F5FC]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E37A1] mb-6">
              Ensure Accurate Medical Coding
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              AccurusBill's medical coding services deliver precise ICD-10, CPT, and HCPCS coding, minimizing denials and optimizing revenue for your practice.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3E37A1] mb-12 border-b-2 border-[#6C5CE7]/20 pb-2">
              Our Medical Coding Process
            </h2>
            <div className="space-y-12">
              {/* 1. Detailed Code Assignment */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaFileInvoiceDollar className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Detailed Code Assignment
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Review of Clinical Documentation
                      </h4>
                      <div className="space-y-4 pl-6">
                        <div>
                          <h5 className="text-lg font-medium text-[#6C5CE7] flex items-center mb-2">
                            <span className="mr-3 bg-[#6C5CE7]/20 p-2 rounded-full">
                              <FaExclamationTriangle className="text-[#6C5CE7]" />
                            </span>
                            Challenge
                          </h5>
                          <p className="text-gray-700 ml-9">
                            Inaccurate or incomplete documentation can lead to coding errors.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-medium text-[#3E37A1] flex items-center mb-2">
                            <span className="mr-3 bg-[#3E37A1]/20 p-2 rounded-full">
                              <FaCheckCircle className="text-[#3E37A1]" />
                            </span>
                            How We Handle It
                          </h5>
                          <p className="text-gray-700 ml-9">
                            Our coders thoroughly review clinical notes to assign the correct codes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Compliance with Payer Guidelines
                      </h4>
                      <div className="space-y-4 pl-6">
                        <div>
                          <h5 className="text-lg font-medium text-[#6C5CE7] flex items-center mb-2">
                            <span className="mr-3 bg-[#6C5CE7]/20 p-2 rounded-full">
                              <FaExclamationTriangle className="text-[#6C5CE7]" />
                            </span>
                            Challenge
                          </h5>
                          <p className="text-gray-700 ml-9">
                            Non-compliance with payer rules can result in denials.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-medium text-[#3E37A1] flex items-center mb-2">
                            <span className="mr-3 bg-[#3E37A1]/20 p-2 rounded-full">
                              <FaCheckCircle className="text-[#3E37A1]" />
                            </span>
                            How We Handle It
                          </h5>
                          <p className="text-gray-700 ml-9">
                            We stay updated on payer guidelines to ensure codes meet all requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-[#EEF0FF]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3E37A1] mb-12 border-b-2 border-[#6C5CE7]/20 pb-2">
              Why Choose AccurusBill for Medical Coding?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaFileInvoiceDollar className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Accurate Coding",
                  description:
                    "Precision in ICD-10, CPT, and HCPCS coding minimizes denials.",
                },
                {
                  icon: <FaFileInvoiceDollar className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Compliance Assurance",
                  description:
                    "We ensure adherence to all payer and regulatory standards.",
                },
                {
                  icon: <FaCheckCircle className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Maximized Reimbursements",
                  description:
                    "Optimized coding increases your revenue potential.",
                },
                {
                  icon: <FaFileInvoiceDollar className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Timely Submission",
                  description:
                    "Coded claims are ready for quick submission to payers.",
                },
                {
                  icon: <FaCheckCircle className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Expert Oversight",
                  description:
                    "Certified coders provide professional review and support.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center"
                >
                  {benefit.icon}
                  <h3 className="text-lg font-semibold text-[#3E37A1] mt-4 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-[#6C5CE7] to-[#3E37A1] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Improve Your Coding Accuracy?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Partner with AccurusBill for expert medical coding that boosts your revenue.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#FFC107] text-[#3E37A1] font-bold hover:bg-[#FFD700] transition-all duration-300 rounded-lg shadow-lg"
            >
              <Link href="/contact">Contact Us Now</Link>
            </Button>
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
                  108 W 39th Street Ste 1006PMB2018<br />
                  New York, NY 10018 United States
                </p>
                <p className="text-base">Email: contact@accurusbill.com</p>
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
