import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt, FaLinkedin, FaTwitter } from "react-icons/fa";

export const metadata = {
  title: "Physician Credentialing - AccurusBill",
  description: "Simplify physician credentialing with expert services from AccurusBill.",
};

export default function PhysicianCredentialingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F5FC] to-white flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 lg:py-20">
        {/* Hero Section with Gradient Background */}
        <section className="relative py-24 bg-gradient-to-r from-[#3E37A1] to-[#6C5CE7] text-white text-center mb-12 lg:mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Physician Credentialing
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto mb-8">
            Streamline credentialing to get your physicians practice-ready.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[#FFC107] text-[#3E37A1] font-bold hover:bg-[#FFD700] transition-all duration-300 rounded-lg shadow-lg"
            >
              Get Started Today
            </Button>
          </Link>
        </section>

        <section className="mb-12 lg:mb-20">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#6C5CE7] mb-8 text-center">
            Our Credentialing Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Application Management",
                description: "Handle all credentialing applications efficiently.",
              },
              {
                title: "Verification",
                description: "Verify licenses, certifications, and references.",
              },
              {
                title: "Follow-Up",
                description: "Ensure timely approval with regular follow-ups.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-[#6C5CE7]/10"
              >
                <h3 className="text-lg font-semibold text-[#3E37A1] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-12 lg:mb-20">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#6C5CE7] mb-8">
            Why Choose AccurusBill for Credentialing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Expert handling of credentialing paperwork",
              "Faster approval with proactive follow-ups",
              "Compliance with regulatory standards",
              "Tailored support for your team",
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-[#6C5CE7]/10"
              >
                <p className="text-gray-700 text-base">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Ready to simplify credentialing? Get started today!
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[#3E37A1] text-white font-semibold hover:bg-[#4C45C2] transition duration-300 px-8 py-3"
            >
              Get Started
            </Button>
          </Link>
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
                  AccurusBill 108 W 39th Street Ste 1006PMB2018
                  New York, NY 10018, United States
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
