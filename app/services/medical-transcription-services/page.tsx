import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  FaCheckCircle,
  FaMicrophone,
  FaFileAlt,
  FaLock,
  FaLinkedin, // Added for social media
  FaTwitter, // Added for social media
  FaMapMarkerAlt,
  FaUserNurse,
  FaExclamationTriangle,
} from "react-icons/fa";

export const metadata = {
  title: "Medical Transcription Services - AccurusBill",
  description:
    "AccurusBill offers fast, secure medical transcription services. Convert voice to EHR entries with a 4-hour turnaround, ensuring accuracy and HIPAA compliance.",
};

export default function MedicalTranscriptionPage() {
  return (
    <div className="min-h-screen bg-[#F5F5FC] flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-[#3E37A1] to-[#6C5CE7] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Medical Transcription Services
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              <span className="font-semibold">"From Voice to EHR: Faster, Smarter, Secure."</span>
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
              Transform Voice into Actionable Records
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              AccurusBill’s medical transcription services deliver fast, accurate, and secure transcriptions directly into your EHR. With a focus on specialty-aligned formatting and compliance, we free up your team to prioritize patient care.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3E37A1] mb-12 border-b-2 border-[#6C5CE7]/20 pb-2">
              Our Medical Transcription Process
            </h2>
            <div className="space-y-12">
              {/* 1. Streamlined Dictation & Rapid Turnaround */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaMicrophone className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Streamlined Dictation & Rapid Turnaround
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Secure Dictation Methods
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
                            Recording patient encounters or operative details via unsecured lines or personal devices risks HIPAA violations and data loss.
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
                            AccurusBill provides a secure application or call-in line for dictation. Each audio file is encrypted and transmitted securely, ensuring patient confidentiality at every step.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Fast Transcription in Under 4 Hours
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
                            If transcription takes multiple days, physicians can forget key details, and billing or follow-up might be delayed.
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
                            Our trained transcriptionists turn around most dictations within 4 hours—often sooner—so your documentation remains current and ready for immediate use.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Specialty-Aligned Formatting & Accuracy */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaFileAlt className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Specialty-Aligned Formatting & Accuracy
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Customized Note Structures
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
                            Different specialties require unique templates (e.g., SOAP notes, H&P, procedure summaries), and a generic format can lead to incomplete records.
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
                            We tailor each transcription to your specialty’s preferred structure, ensuring vital data—like patient history, exam findings, or recommended treatments—appears in the right headings for easy reference.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Quality Control & Proofreading
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
                            Minor transcription errors (misspelling drugs, mixing up patient details) can affect patient safety or claim accuracy.
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
                            Our two-level review process catches typos and ensures medical terms are spelled correctly. By cross-referencing key data (like patient demographics or procedure codes) when provided, we keep your documentation consistent and error-free.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Seamless EHR Integration & Timestamping */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaFileAlt className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Seamless EHR Integration & Timestamping
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Direct EHR Upload
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
                            Manually copying transcribed notes into EHR systems can be time-consuming, and staff might inadvertently skip fields.
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
                            Once transcription is complete, we upload documents directly into your EHR—structured as needed and often timestamped for clarity. This eliminates double data entry and ensures quick availability of finalized notes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Provider Sign-Off & Digital Certification
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
                            Finalizing documentation can still lag if providers must physically sign or manually locate each note.
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
                            AccurusBill includes provider signature fields and digital markers so you can review and sign electronically. This feature speeds up record completion, facilitating faster billing and compliance with medical record requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Ensuring Security & Compliance */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaLock className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Ensuring Security & Compliance
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        HIPAA-Compliant Process
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
                            Transcription often involves sensitive patient details. Any breach or misuse of PHI can lead to legal complications and loss of trust.
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
                            Our entire workflow—dictation capture, file storage, transcription, and EHR upload—follows HIPAA guidelines. Access is restricted by role, and all data is encrypted in transit and at rest.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Data Privacy and Retention Policies
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
                            Some clinics worry about long-term storage of audio files or transcribed notes on external servers.
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
                            We retain audio and text data only as necessary for quality checks or to confirm accuracy. After finalizing the notes, data is either purged or securely archived according to your preferences, ensuring minimal risk of unauthorized access.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Benefits Beyond Quick Turnaround */}
              <div className="flex flex-col md:flex-row items-start bg-[#F5F5FC] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="bg-[#6C5CE7]/10 p-4 rounded-full">
                    <FaUserNurse className="text-3xl text-[#6C5CE7]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 border-l-4 border-[#6C5CE7]/50 pl-4">
                    Benefits Beyond Quick Turnaround
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Freeing Up Staff & Providers
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
                            In-house staff transcribing or providers doing dictations outside clinic hours can cause burnout.
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
                            By outsourcing transcription to AccurusBill, your providers and office staff regain valuable time to focus on patient care, coding accuracy, or other operational tasks.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Better Documentation for Billing & Legal Needs
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
                            Vague or incomplete notes can hamper claim submissions, lead to denials, or fail legal audits.
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
                            Detailed, clearly structured transcriptions reduce coding ambiguities and compliance risks, ensuring each claim is backed by solid documentation.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-[#3E37A1] mb-4 border-l-2 border-[#6C5CE7]/30 pl-3">
                        Improved Patient Communication
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
                            If consult notes or discharge summaries aren’t clear, patients might misunderstand follow-up instructions.
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
                            With accurate, clearly formatted transcripts in the EHR, providers can efficiently review details with patients, improving patient engagement and adherence.
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
              Why Choose AccurusBill for Medical Transcription Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaMicrophone className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Rapid 4-Hour Turnaround",
                  description:
                    "Swift transcriptions keep records up to date, supporting timely billing and better continuity of care.",
                },
                {
                  icon: <FaFileAlt className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Specialty-Customized Formats",
                  description:
                    "We adapt each transcript to match your practice’s note structure, from SOAP to operative reports.",
                },
                {
                  icon: <FaFileAlt className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Seamless EHR Upload",
                  description:
                    "No more manual copying—notes arrive ready for sign-off and integrated into your digital records.",
                },
                {
                  icon: <FaLock className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "HIPAA-Compliant & Secure",
                  description:
                    "Every step, from voice capture to EHR import, meets strict privacy standards and uses encryption.",
                },
                {
                  icon: <FaUserNurse className="text-4xl text-[#6C5CE7] mx-auto" />,
                  title: "Elevated Provider Efficiency",
                  description:
                    "Free from transcription duties, you and your staff can focus on higher-impact tasks and patient interactions.",
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
              Precision Transcription for Better Care
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              With AccurusBill’s Medical Transcription Services, you turn voice recordings into precise, professionally formatted EHR entries—all while safeguarding patient data and meeting compliance requirements. Our fast turnaround, secure workflow, and specialty-aligned approach ensure that critical details are never lost in translation, letting your providers devote more time to quality patient care and operational efficiency.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-[#6C5CE7] to-[#3E37A1] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Faster, Smarter Transcription?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Partner with AccurusBill for secure, accurate transcriptions that save time and improve documentation.
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
                        New York, NY 10018 United States
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