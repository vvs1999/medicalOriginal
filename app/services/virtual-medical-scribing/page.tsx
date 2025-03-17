import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  FaCheckCircle,
  FaPenSquare,
  FaClock,
  FaLock,
  FaUserMd,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const metadata = {
  title: "Virtual Medical Scribing - AccurusBill",
  description:
    "Enhance efficiency with AccurusBill's virtual medical scribing. Chart in real time, reduce burnout, and improve patient care with HIPAA-compliant solutions.",
};

export default function VirtualMedicalScribingPage() {
  return (
    <div className="min-h-screen bg-[#F5F5FC] flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-[#3E37A1] to-[#6C5CE7] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Virtual Medical Scribing
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              <span className="font-semibold">"Chart in Real Time, Not Overtime."</span>
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
              Streamline Documentation, Enhance Care
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              AccurusBill's virtual medical scribing service captures real-time notes, reducing clinician burnout and improving patient interactions. Our HIPAA-compliant scribes integrate seamlessly with your workflow.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3E37A1] mb-12 border-b-2 border-[#6C5CE7]/20 pb-2">
              Our Virtual Medical Scribing Process
            </h2>
            <div className="space-y-12">
              {/* 1. Real-Time Documentation for Patient Visits */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaPenSquare className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Real-Time Documentation for Patient Visits
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        HIPAA-Trained Scribes
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
                            Clinicians often juggle between direct patient care and heavy documentation, risking missed details or incomplete notes.
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
                            AccurusBill provides HIPAA-trained scribes who join in-person or virtual patient encounters. They listen carefully, capturing every relevant clinical detail in compliance with privacy regulations, so you stay focused on the patient, not the keyboard.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Seamless Integration with Your Workflow
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
                            Some scribe solutions demand clinicians overhaul their usual approach to charting, adding complexity.
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
                            Our scribes adapt to your existing visit structure, whether it's a telehealth call or in-office consultation, ensuring minimal disruption while maximizing efficiency.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Post-Visit Review & Finalization */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaPenSquare className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Post-Visit Review & Finalization
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Real-Time Drafts with Provider Input
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
                            Scribes might miss nuances or misinterpret clinical terms without immediate clarification.
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
                            Our scribes provide live drafts during or right after the visit, allowing you to review and clarify details in real time, ensuring accuracy before finalization.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        EHR Integration & Sign-Off
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
                            Delays in uploading or signing off on notes can slow down billing or follow-up care.
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
                            We upload finalized notes to your EHR within hours, complete with fields for your electronic sign-off, streamlining the process for billing and compliance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Enhanced Security & Compliance */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaLock className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Enhanced Security & Compliance
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        HIPAA-Compliant Scribing
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
                            Sharing patient data with third-party scribes can expose practices to breaches if not handled securely.
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
                            All scribes undergo HIPAA training, and our platform uses end-to-end encryption for data transmission and storage, protecting patient information at every stage.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Audit Trails & Data Retention
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
                            Lack of tracking or improper data retention can complicate audits or legal reviews.
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
                            We maintain detailed audit logs of all scribe activity and retain data only as required by law, with options for secure deletion to meet your compliance needs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Clinician Support & Optimization */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaUserMd className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Clinician Support & Optimization
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Reduced Burnout with Time Savings
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
                            After-hours charting or rushed notes during visits contribute to clinician fatigue.
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
                            By handling real-time documentation, our scribes cut your charting time by up to 70%, letting you leave the office on time and recharge for the next day.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Continuous Training & Feedback
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
                            Inconsistent scribe performance can frustrate providers or lead to rework.
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
                            Our scribes receive ongoing training and incorporate your feedback to refine their skills, ensuring they meet your specific charting preferences over time.
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
              Why Choose AccurusBill for Virtual Medical Scribing?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaPenSquare className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Real-Time Charting",
                  description:
                    "Scribes document during visits, keeping your EHR current without post-visit effort.",
                },
                {
                  icon: <FaPenSquare className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Reduced Burnout",
                  description:
                    "Save up to 70% of charting time, allowing more focus on patient care and personal life.",
                },
                {
                  icon: <FaLock className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "HIPAA-Compliant Security",
                  description:
                    "End-to-end encryption and trained scribes ensure patient data stays protected.",
                },
                {
                  icon: <FaUserMd className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Custom Workflow Fit",
                  description:
                    "Scribes adapt to your practice's style, whether in-office or virtual.",
                },
                {
                  icon: <FaClock className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Fast EHR Integration",
                  description:
                    "Notes are uploaded and ready for sign-off within hours, speeding up billing.",
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
              Ready to Reduce Your Documentation Burden?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Partner with AccurusBill for virtual scribing that boosts efficiency and patient satisfaction.
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
