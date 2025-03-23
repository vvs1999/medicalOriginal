import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  FaCheckCircle,
  FaPenSquare,
  FaClock,
  FaLock,
  FaCheck,
  FaUserMd,
  FaLinkedin, // Added for social media
  FaTwitter, // Added for social media
  FaMapMarkerAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

export const metadata = {
  title: "Virtual Medical Scribing - AccurusBill",
  description:
    "Enhance efficiency with AccurusBills virtual medical scribing. Chart in real time, reduce burnout, and improve patient care with HIPAA-compliant solutions.",
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
              <span className="font-semibold">Chart in Real Time, Not Overtime.</span>
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
              AccurusBill’s virtual medical scribing service captures real-time notes, reducing clinician burnout and improving patient interactions. Our HIPAA-compliant scribes integrate seamlessly with your workflow.
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
                            Our scribes adapt to your existing visit structure, whether it’s a telehealth call or an exam room scenario. They can follow your EHR templates or notetaking preferences, ensuring minimal disruption to your routine.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Direct EHR Entry & Template Customization */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaPenSquare className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Direct EHR Entry & Template Customization
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Customized Chart Templates
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
                            Different specialties (e.g., primary care, cardiology, mental health) require unique EHR fields and coding. Failing to capture them leads to incomplete documentation or billing errors.
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
                            Our scribes learn your specialty’s typical chart structure, using preferred templates to record the precise data needed. Everything from chief complaint to exam findings is documented in real time with the correct format and level of detail.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Accurate & Organized Notes
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
                            If notes are disorganized, future coding, billing, or clinical decision-making can suffer.
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
                            Scribes organize history of present illness (HPI), exam details, and assessments systematically as the visit unfolds. This ensures clean, comprehensible notes ready for immediate follow-up or claim submission.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Rapid Turnaround: Notes Ready in Under 1 Hour */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaClock className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Rapid Turnaround: Notes Ready in Under 1 Hour
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Minimize After-Hours Charting
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
                            Providers often stay late or spend weekends finalizing charts, leading to burnout.
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
                            With AccurusBill’s real-time scribing, your clinical notes are substantially complete by visit’s end. Typically, they’re ready for your review and sign-off within an hour, letting you leave the clinic on time or see the next patient without documentation backlog.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Faster Claims Processing
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
                            Delays in finalizing notes can hold up billing, postpone claim submissions, and stall reimbursements.
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
                            Once notes are completed quickly, your coding team (or ours) can proceed with claim generation. This shortens the revenue cycle, leading to faster payments and less time chasing incomplete documentation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Ensuring Compliance & Data Security */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaLock className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Ensuring Compliance & Data Security
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Strict HIPAA Protocols
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
                            Virtual scribes have remote access to PHI, raising patient privacy concerns.
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
                            Our scribes undergo HIPAA training and sign Business Associate Agreements (BAAs). We also control EHR access with role-based permissions, ensuring only essential data is viewed. Every session follows strict privacy guidelines to protect patient information.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Dedicated Scribing Systems or Secure Connections
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
                            Technical setups for remote scribing can be vulnerable if not done securely.
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
                            We use secure connections or telehealth platforms to observe visits. All data transfer is encrypted, and we minimize local storage of PHI, further reinforcing data security for your practice.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Benefits Beyond the Encounter */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaUserMd className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Benefits Beyond the Encounter
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Reduced Physician Burnout
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
                            The administrative burden of charting leads many providers to feel overworked.
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
                            By offloading real-time documentation to qualified scribes, doctors can spend more energy on patient engagement and care. This can improve job satisfaction and lower stress.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Enhanced Patient-Provider Interaction
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
                            Constantly typing during visits can make patients feel ignored or rushed.
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
                            With a virtual medical scribe handling EHR inputs, providers can maintain eye contact, ask deeper questions, and build stronger patient rapport while ensuring the note is fully accurate.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Accurate Documentation for Billing & Quality Measures
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
                            Under-documented visits can lead to undercoding or missed quality measure data, affecting both revenue and compliance.
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
                            Scribes ensure each pertinent detail is recorded. If a measure or code requires specific verbiage (e.g., screening for depression, smoking cessation counseling), scribes incorporate it seamlessly into the note.
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
                  title: "Specialized, HIPAA-Compliant Scribes",
                  description:
                    "Trained professionals who respect patient privacy and adapt to your specialty.",
                },
                {
                  icon: <FaPenSquare className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Seamless EHR Integration",
                  description:
                    "We document directly into your chosen EHR with your templates, keeping workflows consistent.",
                },
                {
                  icon: <FaClock className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Faster Note Turnaround",
                  description:
                    "Typically ready for review within an hour, reducing after-hours charting or backlog.",
                },
                {
                  icon: <FaUserMd className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Improved Patient Experience",
                  description:
                    "Providers stay engaged with the patient, not the screen.",
                },
                {
                  icon: <FaPenSquare className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Boosted Revenue Cycle",
                  description:
                    "Accurate, timely notes speed up coding and billing, potentially improving reimbursements.",
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
              Ready to Chart Smarter?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Partner with AccurusBill for virtual scribing that saves time, enhances care, and boosts efficiency.
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
                © 2024 AccurusBill. Empowering Private Clinics with
                Comprehensive, Cost-Effective Solutions
              </p>
              <div className="mt-4 space-y-2 text-center md:text-left">
                <p className="text-base flex items-center justify-center md:justify-start">
                  <FaMapMarkerAlt className="mr-2 text-[#FFC107] text-lg" />
                  AccurusBill 108 W 39th Street Ste 1006 #2018 <br />
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

            {/* Right Section: Social Media and HIPAA Badge */}
            <div className="flex flex-col items-center md:items-end space-y-4">
              {/* Social Media */}
              <div className="text-center md:text-right bg-white/5 p-4 rounded-lg">
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

              {/* HIPAA Badge */}
              <div className="flex justify-center md:justify-end group">
                <div className="relative flex items-center">
                  <div className="bg-gradient-to-r from-[#4B5EAA] to-[#3E4A8A] rounded px-4 py-2 border-2 border-[#4B5EAA] shadow-xl group-hover:border-[#FFC107] transition duration-300">
                    <span className="text-base font-extrabold text-white group-hover:text-[#FFC107] transition duration-300 tracking-wide">
                      HIPAA COMPLIANT
                    </span>
                  </div>
                  <div className="absolute right-[-14px] w-8 h-8 bg-white/90 rounded-full flex items-center justify-center border-2 border-[#4B5EAA] shadow-md group-hover:bg-[#FFC107] group-hover:border-[#FFC107] transition duration-300">
                    <FaCheck className="text-[#4B5EAA] text-lg group-hover:text-white transition duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
          </div>
        );
      }
