import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  FaCheckCircle,
  FaFileAlt,
  FaChartLine,
  FaUsers,
  FaLinkedin, // Added for social media
  FaTwitter, // Added for social media
  FaMapMarkerAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

export const metadata = {
  title: "Medical Coding (ICD-10, CPT) - AccurusBill",
  description:
    "Ensure audit-proof medical coding with AccurusBill. Maximize revenue with expert ICD-10 and CPT coding tailored to your specialty and compliant with payer rules.",
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
              Medical Coding (ICD-10, CPT)
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              <span className="font-semibold">Audit-Proof Coding, Revenue Maximized.</span>
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
              Precision Coding for Optimal Revenue
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              AccurusBill delivers expert medical coding with ICD-10 and CPT, ensuring accuracy, compliance, and maximized reimbursements. Our specialty-focused approach reduces risks and enhances your revenue cycle.
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
              {/* 1. Thorough Chart Review & Code Selection */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaFileAlt className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Thorough Chart Review & Code Selection
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        CPC-Certified Coders on Your Side
                      </h4>
                      <div className="space-y-4 pl-6">
                        <div>
                          <h5 className="text-lg font-medium text-[#6C5CE7] flex items-center mb-2">
                            <span className="mr-3 bg-[#6C5CE7]/20 p-2 rounded-full">
                              <FaExclamationTriangle className="text-[#6C5CE7]" />
                            </span>
                            Potential Problem
                          </h5>
                          <p className="text-gray-700 ml-9">
                            Inaccurate or incomplete chart documentation can lead to misinterpretation, causing either undercoding (lost revenue) or overcoding (compliance risk).
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-medium text-[#3E37A1] flex items-center mb-2">
                            <span className="mr-3 bg-[#3E37A1]/20 p-2 rounded-full">
                              <FaCheckCircle className="text-[#3E37A1]" />
                            </span>
                            Our Approach
                          </h5>
                          <p className="text-gray-700 ml-9">
                            AccurusBill’s certified professional coders (CPC) meticulously review provider notes—from diagnoses to procedures—to ensure each service is captured accurately. By matching ICD-10 and CPT codes precisely to clinical documentation, we reflect true clinical complexity without risking compliance issues.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Specialty-Specific Knowledge
                      </h4>
                      <div className="space-y-4 pl-6">
                        <div>
                          <h5 className="text-lg font-medium text-[#6C5CE7] flex items-center mb-2">
                            <span className="mr-3 bg-[#6C5CE7]/20 p-2 rounded-full">
                              <FaExclamationTriangle className="text-[#6C5CE7]" />
                            </span>
                            Potential Problem
                          </h5>
                          <p className="text-gray-700 ml-9">
                            General coders might not grasp the nuances of certain specialties (e.g., orthopedics, mental health, cardiology), leading to repeated denials or claims flagged for medical necessity.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-medium text-[#3E37A1] flex items-center mb-2">
                            <span className="mr-3 bg-[#3E37A1]/20 p-2 rounded-full">
                              <FaCheckCircle className="text-[#3E37A1]" />
                            </span>
                            Our Approach
                          </h5>
                          <p className="text-gray-700 ml-9">
                            We have dedicated coders experienced in various specialties, ensuring procedure- and diagnosis-specific guidelines are applied correctly. This specialized expertise maximizes allowable reimbursements while staying within payer rules.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Minimizing Risks: Upcoding & Downcoding */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaFileAlt className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Minimizing Risks: Upcoding & Downcoding
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Dual-Layer Audit Checks
                      </h4>
                      <div className="space-y-4 pl-6">
                        <div>
                          <h5 className="text-lg font-medium text-[#6C5CE7] flex items-center mb-2">
                            <span className="mr-3 bg-[#6C5CE7]/20 p-2 rounded-full">
                              <FaExclamationTriangle className="text-[#6C5CE7]" />
                            </span>
                            Potential Problem
                          </h5>
                          <p className="text-gray-700 ml-9">
                            Upcoding (assigning a higher-level code than appropriate) and downcoding (assigning a lower-level code) can result in payer audits, denials, or lost revenue.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-medium text-[#3E37A1] flex items-center mb-2">
                            <span className="mr-3 bg-[#3E37A1]/20 p-2 rounded-full">
                              <FaCheckCircle className="text-[#3E37A1]" />
                            </span>
                            Our Approach
                          </h5>
                          <p className="text-gray-700 ml-9">
                            We apply two levels of auditing—first by the coder, then by a separate review process that checks for compliance red flags, E/M level mismatches, or incomplete documentation. This ensures each code is justified by the chart details, eliminating inadvertent compliance violations or missing charges.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Payer Policy Alignment
                      </h4>
                      <div className="space-y-4 pl-6">
                        <div>
                          <h5 className="text-lg font-medium text-[#6C5CE7] flex items-center mb-2">
                            <span className="mr-3 bg-[#6C5CE7]/20 p-2 rounded-full">
                              <FaExclamationTriangle className="text-[#6C5CE7]" />
                            </span>
                            Potential Problem
                          </h5>
                          <p className="text-gray-700 ml-9">
                            Each payer might have unique rules (e.g., certain procedures require extra documentation or specific modifiers). Without alignment, claims can be downgraded or denied.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-medium text-[#3E37A1] flex items-center mb-2">
                            <span className="mr-3 bg-[#3E37A1]/20 p-2 rounded-full">
                              <FaCheckCircle className="text-[#3E37A1]" />
                            </span>
                            Our Approach
                          </h5>
                          <p className="text-gray-700 ml-9">
                            AccurusBill coders stay current on payer guidelines and Medicare LCDs (Local Coverage Determinations). By matching each code to payer policies upfront, we reduce post-submission headaches and preserve your revenue integrity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. ICD-10 & CPT Updates: Staying Ahead of Changes */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaFileAlt className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    ICD-10 & CPT Updates: Staying Ahead of Changes
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Frequent Code Revisions
                      </h4>
                      <div className="space-y-4 pl-6">
                        <div>
                          <h5 className="text-lg font-medium text-[#6C5CE7] flex items-center mb-2">
                            <span className="mr-3 bg-[#6C5CE7]/20 p-2 rounded-full">
                              <FaExclamationTriangle className="text-[#6C5CE7]" />
                            </span>
                            Potential Problem
                          </h5>
                          <p className="text-gray-700 ml-9">
                            ICD-10 and CPT codes are updated yearly, sometimes adding new codes or revising definitions. Missing these updates causes immediate denials or improper billing.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-medium text-[#3E37A1] flex items-center mb-2">
                            <span className="mr-3 bg-[#3E37A1]/20 p-2 rounded-full">
                              <FaCheckCircle className="text-[#3E37A1]" />
                            </span>
                            Our Approach
                          </h5>
                          <p className="text-gray-700 ml-9">
                            We monitor all annual and quarterly coding changes, bridging them seamlessly into our coding workflow. Clients don’t have to worry about outdated codes or new guidelines slipping through.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Education & Provider Communication
                      </h4>
                      <div className="space-y-4 pl-6">
                        <div>
                          <h5 className="text-lg font-medium text-[#6C5CE7] flex items-center mb-2">
                            <span className="mr-3 bg-[#6C5CE7]/20 p-2 rounded-full">
                              <FaExclamationTriangle className="text-[#6C5CE7]" />
                            </span>
                            Potential Problem
                          </h5>
                          <p className="text-gray-700 ml-9">
                            Providers might not know a certain procedure code changed or how to document new requirements.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-medium text-[#3E37A1] flex items-center mb-2">
                            <span className="mr-3 bg-[#3E37A1]/20 p-2 rounded-full">
                              <FaCheckCircle className="text-[#3E37A1]" />
                            </span>
                            Our Approach
                          </h5>
                          <p className="text-gray-700 ml-9">
                            AccurusBill provides quick updates or mini-workshops to keep providers informed about new codes or documentation essentials, fostering a coding-friendly environment that mitigates future errors.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Monthly Reports & Impact Analysis */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaChartLine className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Monthly Reports & Impact Analysis
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Demonstrating Coding Value
                      </h4>
                      <div className="space-y-4 pl-6">
                        <div>
                          <h5 className="text-lg font-medium text-[#6C5CE7] flex items-center mb-2">
                            <span className="mr-3 bg-[#6C5CE7]/20 p-2 rounded-full">
                              <FaExclamationTriangle className="text-[#6C5CE7]" />
                            </span>
                            Potential Problem
                          </h5>
                          <p className="text-gray-700 ml-9">
                            Practices often can’t see how coding accuracy affects their bottom line—they just see random claims paid or denied.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-medium text-[#3E37A1] flex items-center mb-2">
                            <span className="mr-3 bg-[#3E37A1]/20 p-2 rounded-full">
                              <FaCheckCircle className="text-[#3E37A1]" />
                            </span>
                            Our Approach
                          </h5>
                          <p className="text-gray-700 ml-9">
                            Each month, AccurusBill delivers clear, concise reports showing coding patterns, denial rates related to coding, and recovered revenue from corrected claims. You see how proper coding directly boosts your collections.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Feedback Loop for Continuous Improvement
                      </h4>
                      <div className="space-y-4 pl-6">
                        <div>
                          <h5 className="text-lg font-medium text-[#6C5CE7] flex items-center mb-2">
                            <span className="mr-3 bg-[#6C5CE7]/20 p-2 rounded-full">
                              <FaExclamationTriangle className="text-[#6C5CE7]" />
                            </span>
                            Potential Problem
                          </h5>
                          <p className="text-gray-700 ml-9">
                            If the coding process remains static, you might keep losing revenue to small, recurring mistakes or overlooked procedures.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-medium text-[#3E37A1] flex items-center mb-2">
                            <span className="mr-3 bg-[#3E37A1]/20 p-2 rounded-full">
                              <FaCheckCircle className="text-[#3E37A1]" />
                            </span>
                            Our Approach
                          </h5>
                          <p className="text-gray-700 ml-9">
                            Our monthly analysis identifies common coding issues or frequent denial reasons. We proactively address them—either by clarifying documentation with providers or adjusting internal workflows—so your coding accuracy and reimbursements keep improving over time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Transparent, Expert Collaboration */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaUsers className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Transparent, Expert Collaboration
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Dedicated Coding Liaison
                      </h4>
                      <div className="space-y-4 pl-6">
                        <div>
                          <h5 className="text-lg font-medium text-[#6C5CE7] flex items-center mb-2">
                            <span className="mr-3 bg-[#6C5CE7]/20 p-2 rounded-full">
                              <FaExclamationTriangle className="text-[#6C5CE7]" />
                            </span>
                            Potential Problem
                          </h5>
                          <p className="text-gray-700 ml-9">
                            Providers might have urgent questions about code selection, but can’t get timely answers from large billing companies.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-medium text-[#3E37A1] flex items-center mb-2">
                            <span className="mr-3 bg-[#3E37A1]/20 p-2 rounded-full">
                              <FaCheckCircle className="text-[#3E37A1]" />
                            </span>
                            Our Approach
                          </h5>
                          <p className="text-gray-700 ml-9">
                            AccurusBill assigns you a specific coding liaison who’s familiar with your specialty. Any question—whether it’s about a suspicious denial or how to code a new procedure—gets a prompt, well-informed response.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Aligned with Your Revenue Cycle Goals
                      </h4>
                      <div className="space-y-4 pl-6">
                        <div>
                          <h5 className="text-lg font-medium text-[#6C5CE7] flex items-center mb-2">
                            <span className="mr-3 bg-[#6C5CE7]/20 p-2 rounded-full">
                              <FaExclamationTriangle className="text-[#6C5CE7]" />
                            </span>
                            Potential Problem
                          </h5>
                          <p className="text-gray-700 ml-9">
                            Some coding teams operate in a vacuum, focusing only on claims data without caring about bigger RCM objectives.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-medium text-[#3E37A1] flex items-center mb-2">
                            <span className="mr-3 bg-[#3E37A1]/20 p-2 rounded-full">
                              <FaCheckCircle className="text-[#3E37A1]" />
                            </span>
                            Our Approach
                          </h5>
                          <p className="text-gray-700 ml-9">
                            Our coders work in lockstep with your broader billing cycle, ensuring the code selections not only meet compliance standards but also align with maximizing your legitimate revenue.
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
              Why Choose AccurusBill for Medical Coding (ICD-10, CPT)?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaFileAlt className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "CPC-Certified Experts",
                  description:
                    "Skilled coders who understand medical necessity, correct E/M levels, and specialty nuances.",
                },
                {
                  icon: <FaFileAlt className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Reduced Compliance Risks",
                  description:
                    "Dual-audit checks prevent upcoding or downcoding, safeguarding you from payer audits.",
                },
                {
                  icon: <FaFileAlt className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Up-to-Date Code Mastery",
                  description:
                    "We stay ahead of ICD-10 and CPT changes, so your claims won’t be rejected for outdated codes.",
                },
                {
                  icon: <FaChartLine className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Monthly Impact Reports",
                  description:
                    "See exactly how coding accuracy elevates your bottom line—and where future improvements lie.",
                },
                {
                  icon: <FaUsers className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Collaborative Approach",
                  description:
                    "We partner with your providers, bridging documentation gaps and clarifying any confusion for seamless claims submission.",
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

        {/* Conclusion Section */}
        <section className="py-16 bg-[#F5F5FC] text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E37A1] mb-6 border-b-2 border-[#6C5CE7]/20 pb-2">
              Maximize Revenue with Expert Coding
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              At AccurusBill, Medical Coding is about more than just turning chart notes into code strings—it’s the foundation of a healthy revenue cycle. By combining CPC-certified expertise, rigorous auditing, and proactive updates, we ensure every procedure and diagnosis is accurately captured and properly reimbursed. This audit-proof approach not only maximizes revenue but also helps you maintain compliance with every payer rule.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-[#6C5CE7] to-[#3E37A1] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your Coding?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Partner with AccurusBill for expert ICD-10 and CPT coding that boosts revenue and ensures compliance.
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
                        AccurusBill 108 W 39th Street Ste 1006 #2018 <br />
                        New York, NY 10018 United States.
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
