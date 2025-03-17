import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaFileAlt,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

export const metadata = {
  title: "Prior Authorization & Insurance Verification - AccurusBill",
  description:
    "Streamline prior authorization and insurance verification with AccurusBill. Minimize delays, ensure coverage, and enhance patient care with our proactive solutions.",
};

export default function PriorAuthorizationPage() {
  return (
    <div className="min-h-screen bg-[#F5F5FC] flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-[#3E37A1] to-[#6C5CE7] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Prior Authorization & Insurance Verification
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              <span className="font-semibold">"Stop Delays. Start Treating."</span>
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
              Optimize Your Authorization Process
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              AccurusBill ensures seamless prior authorization and insurance verification, reducing treatment delays and claim denials. Our proactive approach lets you focus on patient care while we handle the complexities of payer requirements.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3E37A1] mb-12 border-b-2 border-[#6C5CE7]/20 pb-2">
              Our Prior Authorization & Verification Process
            </h2>
            <div className="space-y-12">
              {/* 1. Identifying Approval Needs & Verifying Coverage Up Front */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaShieldAlt className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Identifying Approval Needs & Verifying Coverage Up Front
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Early Detection of Prior Auth Requirements
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
                            Missing or late prior authorization requests often lead to treatment delays, unhappy patients, and potential claim denials.
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
                            During scheduling or pre-visit confirmation, AccurusBill reviews each procedure or service against known payer rules. By flagging approval needs right away, we help you avoid last-minute surprises and keep your schedule running smoothly.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Accurate Insurance Verification
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
                            Patients may arrive with outdated insurance info, or their plan might have restrictions that staff only discovers at the last minute.
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
                            Our team verifies insurance details before the appointment date—checking eligibility, plan coverage, and any co-pay/deductible obligations. This front-end clarity helps reduce rejections and speeds up the path to reimbursement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Prompt Submission of Prior Authorization Requests */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaFileAlt className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Prompt Submission of Prior Authorization Requests
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Complete Documentation, Same-Day Submission
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
                            Incomplete clinical evidence or missing diagnosis details can stall approvals, pushing back essential treatments.
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
                            Once we confirm that a service requires prior authorization, we compile the necessary clinical data from your EHR (progress notes, imaging reports, etc.) and submit the request the same day whenever possible. Our goal is to provide payers with a clear, accurate narrative of medical necessity to minimize back-and-forth.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Customized Checklists & Payer Guidelines
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
                            Each insurer can have unique forms or medical policy criteria. Submitting a generic request can lead to immediate denials or repeated clarifications.
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
                            AccurusBill maintains checklists aligned with major payers, ensuring we include all required details (e.g., specific CPT codes, ICD-10 diagnoses, prior treatments tried) for each request. This thoroughness reduces re-submissions and shortens approval times.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Active Follow-Up & Escalation of Stalled Requests */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaClock className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Active Follow-Up & Escalation of Stalled Requests
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Daily Status Tracking
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
                            Payers can delay decisions by requesting additional documentation or simply moving slowly, leaving providers guessing about request status.
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
                            Our team monitors all pending prior authorizations daily, checking payer portals or calling insurer reps to ensure no request sits idle. This vigilance lets us respond quickly if payers ask for more information.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Direct Communication with Payer Medical Directors
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
                            When requests stall or get denied for questionable reasons, front-line payer reps can’t always expedite the process.
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
                            If we see a request languishing or an unfounded denial, we escalate to higher-level payer contacts, including medical directors if necessary. By presenting clear clinical justification and referencing policy guidelines, we push for timely decisions so your patients receive treatments without further delay.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Detailed Documentation for Appeals
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
                            Some prior authorizations end up denied despite best efforts, and appeals can be time-consuming.
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
                            Should a request be denied, we prepare a structured appeal with the supporting medical evidence. Having tracked every step and payer communication, we’re able to resubmit quickly and advocate effectively for approval.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Ensuring Smooth Patient Experience & Reduced Administrative Burden */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaCheckCircle className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Ensuring Smooth Patient Experience & Reduced Administrative Burden
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Advance Patient Notifications
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
                            Patients sometimes discover coverage gaps or prior auth issues after arriving for an appointment, leading to confusion and rescheduling.
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
                            By verifying insurance coverage and obtaining the necessary authorizations beforehand, we help your front-office staff inform patients of any potential out-of-pocket costs or steps needed—enhancing patient satisfaction.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Minimizing Treatment Delays
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
                            Delayed authorizations can push procedures back by days or weeks, risking patient outcomes and clinic revenue.
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
                            Our proactive approach—swift submission, daily follow-ups, and escalation—keeps approvals on track so you can proceed with treatments as scheduled.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Transparent Reporting & Communication
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
                            Providers often don’t know which requests are still pending, or why certain authorizations take so long.
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
                            AccurusBill updates you regularly—via quick summaries or weekly reports—highlighting each pending request’s status, next steps, and any payer communication. You remain informed without chasing payers yourself.
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
              Why Choose AccurusBill for Prior Authorization & Insurance Verification?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaShieldAlt className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Early Detection of Requirements",
                  description:
                    "We identify approval needs right when appointments are set, preventing last-minute cancellations or denials.",
                },
                {
                  icon: <FaFileAlt className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Same-Day Submission",
                  description:
                    "Our team gathers all clinical evidence and dispatches requests promptly, speeding up approvals.",
                },
                {
                  icon: <FaClock className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Aggressive Follow-Up",
                  description:
                    "We don’t let payer delays drag on. We check daily and escalate issues until you get a final decision.",
                },
                {
                  icon: <FaCheckCircle className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Reduced Administrative Stress",
                  description:
                    "By verifying insurance details and obtaining prior authorizations, we free your staff to focus on patient care.",
                },
                {
                  icon: <FaCheckCircle className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Patient-Centered",
                  description:
                    "Timely approvals mean fewer treatment postponements, better patient satisfaction, and a stable revenue flow.",
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
              Partner with AccurusBill for Seamless Authorizations
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              With AccurusBill’s Prior Authorization & Insurance Verification services, you gain a partner dedicated to eliminating delays and ensuring coverage. Our proactive process—early detection, prompt submissions, and relentless follow-up—keeps your treatments on schedule and your revenue secure, allowing you to prioritize patient care.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-[#6C5CE7] to-[#3E37A1] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Eliminate Authorization Delays?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Partner with AccurusBill to streamline your process, verify coverage, and focus on patient care.
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
