import Head from "next/head";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function PhysicianCredentialingPage() {
  return (
    <div className="min-h-screen bg-[#F5F5FC] flex flex-col">
      <Head>
        <title>Physician Credentialing - AccurusBill</title>
        <meta
          name="description"
          content="Streamline physician credentialing with AccurusBill to get providers practice-ready faster."
        />
      </Head>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#3E37A1] mb-4">
            Physician Credentialing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Streamline credentialing to get physicians practice-ready faster with our efficient processes.
          </p>
        </section>
        <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#6C5CE7] mb-4">
            Our Physician Credentialing Services
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Efficient credentialing and privileging processes.</li>
            <li>Payer enrollment and contract management.</li>
            <li>Compliance with state and federal regulations.</li>
            <li>Reduced onboarding delays for new physicians.</li>
          </ul>
          <div className="mt-6">
            <Link
              href="/contact"
              className="bg-[#6C5CE7] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#3E37A1] hover:shadow-lg transition-all duration-300"
            >
              Get a Free Audit
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}