import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Physician Credentialing - AccurusBill",
  description:
    "Simplify physician credentialing with expert services from AccurusBill.",
};

export default function PhysicianCredentialingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F5FC] to-white flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 lg:py-20">
        <section className="text-center mb-12 lg:mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#3E37A1] mb-4">
            Physician Credentialing
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline credentialing to get your physicians practice-ready.
          </p>
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
              variant="custom"
              size="lg"
              className="bg-[#3E37A1] text-white font-semibold hover:bg-[#4C45C2] transition duration-300 px-8 py-3"
            >
              Get Started
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}