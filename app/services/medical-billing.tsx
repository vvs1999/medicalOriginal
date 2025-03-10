import Head from "next/head";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function MedicalBillingPage() {
  return (
    <div className="min-h-screen bg-[#F5F5FC] flex flex-col">
      <Head>
        <title>Medical Billing & Claims Submission - AccurusBill</title>
        <meta
          name="description"
          content="Streamline your medical billing with AccurusBill. Zero denials, zero stress. Get paid faster with our expert claims submission services."
        />
      </Head>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#3E37A1] mb-4">
            Medical Billing & Claims Submission
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Streamline billing processes and reduce claim denials for faster reimbursements with our expert medical billing services.
          </p>
        </section>
        <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#6C5CE7] mb-4">
            Why Choose Our Medical Billing Services?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Zero claim denials with accurate coding and submission.</li>
            <li>Faster reimbursement cycles to improve cash flow.</li>
            <li>Comprehensive support for ICD-10-CA and CPT coding.</li>
            <li>24/7 access to billing reports and analytics.</li>
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