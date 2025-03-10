import Head from "next/head";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function MedicalTranscriptionPage() {
  return (
    <div className="min-h-screen bg-[#F5F5FC] flex flex-col">
      <Head>
        <title>Medical Transcription Services - AccurusBill</title>
        <meta
          name="description"
          content="Accurate and timely medical transcription services for healthcare providers. Trust AccurusBill for HIPAA-compliant solutions."
        />
      </Head>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#3E37A1] mb-4">
            Medical Transcription Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Accurate and timely transcription services tailored for healthcare providers.
          </p>
        </section>
        <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#6C5CE7] mb-4">
            Why Choose Our Transcription Services?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Fast turnaround times for transcription.</li>
            <li>HIPAA-compliant processes for data security.</li>
            <li>Support for multiple medical specialties.</li>
            <li>High-quality audio-to-text conversion.</li>
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