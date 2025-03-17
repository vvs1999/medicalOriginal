"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense, ChangeEvent } from "react";
import { Navbar } from "@/components/Navbar";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { FaMapMarkerAlt, FaLinkedin, FaTwitter } from "react-icons/fa";

// Define form data type
interface FormData {
  clinicName: string;
  fullName: string;
  email: string;
  phone: string;
  contactMethod: string;
  message: string;
}

// A separate component to handle the dynamic search params logic
function ContactFormContent() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    clinicName: "",
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "",
    message: "",
  });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const plan = searchParams.get("plan");
    if (plan) {
      setSelectedService(plan);
    }
  }, [searchParams]);

  // Get current date and calculate three months ahead
  const currentDate = new Date();
  const threeMonthsLater = new Date(currentDate);
  threeMonthsLater.setMonth(currentDate.getMonth() + 3);

  // Generate time slots (9:00 AM to 5:00 PM, every 15 minutes, Eastern Time)
  const generateTimeSlots = (): string[] => {
    const slots: string[] = [];
    let hour = 9; // Start at 9 AM
    while (hour < 17) {
      const period = hour < 12 ? "AM" : "PM";
      const displayHour = hour > 12 ? hour - 12 : hour; // Convert 13-16 to 1-4 for PM
      slots.push(`${displayHour}:00 ${period}`);
      slots.push(`${displayHour}:15 ${period}`);
      slots.push(`${displayHour}:30 ${period}`);
      slots.push(`${displayHour}:45 ${period}`);

      hour++;
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      service: selectedService,
      auditDate: selectedDate,
      auditTime: selectedTime,
    };

    // Define EmailJS credentials
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if credentials are missing
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("🚨 Missing EmailJS credentials:", {
        SERVICE_ID,
        TEMPLATE_ID,
        PUBLIC_KEY,
      });
      alert("❌ Configuration error. Please contact support.");
      return;
    }

    // Log credentials for debugging
    console.log("Service ID:", SERVICE_ID);
    console.log("Template ID:", TEMPLATE_ID);
    console.log("Public Key:", PUBLIC_KEY);

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_name: "AccurusBill Team",
          fullName: submissionData.fullName || "Not provided",
          clinicName: submissionData.clinicName || "Not provided",
          email: submissionData.email || "Not provided",
          phone: submissionData.phone || "Not provided",
          contactMethod: submissionData.contactMethod || "Not provided",
          service: submissionData.service || "Not provided",
          message: submissionData.message || "Not provided",
          auditDate: submissionData.auditDate || "Not provided",
          auditTime: submissionData.auditTime
            ? `${submissionData.auditTime} ET`
            : "Not provided",
        },
        PUBLIC_KEY
      );
      console.log("✅ Email successfully sent:", result.text);
      alert("🎉 Submission received successfully! We'll get back to you soon.");
    } catch (error) {
      if (error instanceof Error) {
        console.error("🚨 Error sending email:", error.message);
      } else {
        console.error("🚨 Error sending email:", error);
      }
      alert("❌ Failed to send the submission. Please try again.");
    }

    // Reset form fields
    setFormData({
      clinicName: "",
      fullName: "",
      email: "",
      phone: "",
      contactMethod: "",
      message: "",
    });
    setSelectedService("");
    setSelectedDate("");
    setSelectedTime("");
  };

  // Full FAQ list
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide a complete suite of solutions to streamline your clinic’s administrative tasks, including Medical Billing & Claims Submission, Medical Coding (ICD-10, CPT), Prior Authorization & Insurance Verification, Virtual Medical Scribing, Medical Transcription, and Physician Credentialing.",
    },
    {
      question: "How long does it take to process claims?",
      answer:
        "We typically process claims within 24-48 hours of receipt, ensuring quick turnaround times for our clients.",
    },
    {
      question: "How do you ensure accurate and timely claim submissions?",
      answer:
        "Our process auto-captures charges directly from your EHR/EMR and scrubs errors in real time. We submit claims within 4 hours using payer-specific rules, track payments daily, and handle appeals for denials and underpayments on your behalf.",
    },
    {
      question: "How do you maximize revenue through medical coding?",
      answer:
        "Our CPC-certified coders review charts to assign accurate codes that insurers pay for. We also perform dual-layer audit checks to prevent upcoding or downcoding, and we provide monthly reports that show the direct impact of our coding on your revenue.",
    },
    {
      question:
        "What is your process for Prior Authorization & Insurance Verification?",
      answer:
        "We start by flagging treatments requiring prior authorization during scheduling. We then submit the necessary requests with clinical evidence on the same day, and if needed, escalate stalled requests directly to payer medical directors to minimize treatment delays.",
    },
    {
      question: "How does Virtual Medical Scribing work?",
      answer:
        "Our HIPAA-trained virtual scribes join your patient visits—whether in-person or virtual—to document directly into your EHR using your preferred templates. They deliver complete notes for your review and sign-off within one hour, so your clinicians can focus on patient care.",
    },
    {
      question:
        "What are the turnaround times for your Medical Transcription services?",
      answer:
        "We transcribe dictated notes via a secure app or call in under 4 hours. The transcriptions are then formatted to meet your specialty requirements (such as SOAP notes, H&Ps, or procedure summaries) and uploaded to your EHR with timestamps and provider signatures.",
    },
    {
      question: "How do you manage Physician Credentialing?",
      answer:
        "We simplify the credentialing process by collecting all necessary documentation—licenses, malpractice history, and practice details—filing applications, tracking progress, and resolving any payer roadblocks. We also automate revalidation to ensure your providers remain continuously enrolled.",
    },
    {
      question: "What makes your services unique compared to other providers?",
      answer:
        "We offer a unified, integrated approach that covers every aspect of your clinic’s administrative needs. Our processes are designed to reduce errors, speed up reimbursements, and minimize delays. With transparent reporting and dedicated support, we protect your revenue and save you valuable time—all at a cost-effective price point.",
    },
    {
      question: "How can I get started?",
      answer:
        "It’s easy! Contact us today to schedule a free consultation. We’ll assess your clinic’s needs and tailor a solution that streamlines your administrative workflows and boosts your revenue cycle.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5FC] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-24 pb-16">
          <h1 className="text-6xl font-extrabold mb-6 text-center text-[#3E37A1]">
            Get in Touch with AccurusBill
          </h1>
          <p className="text-2xl text-center mb-12 text-gray-700 max-w-3xl mx-auto">
            Have questions about medical billing? Need a custom quote or a free
            audit? We’re here to assist!
          </p>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-[#6C5CE7]/10 mb-12">
            <p className="text-gray-600 mb-6">
              Fill out the form below to reach out, and schedule a free audit to
              optimize your revenue cycle.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="clinicName" className="sr-only">
                    Clinic/Company Name
                  </label>
                  <Input
                    id="clinicName"
                    type="text"
                    name="clinicName"
                    placeholder="Clinic/Company Name"
                    required
                    value={formData.clinicName}
                    onChange={handleInputChange}
                    className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                  />
                </div>
                <div>
                  <label htmlFor="fullName" className="sr-only">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contactMethod" className="sr-only">
                  Preferred Contact Method
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleInputChange}
                  className="w-full border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                >
                  <option value="">Preferred Contact Method</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="sr-only">
                  Select Date
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={selectedDate}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setSelectedDate(e.target.value)
                  }
                  min={currentDate.toISOString().split("T")[0]}
                  max={threeMonthsLater.toISOString().split("T")[0]}
                  className="w-full border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                />
              </div>

              <div>
                <label htmlFor="time" className="sr-only">
                  Select Time
                </label>
                <select
                  id="time"
                  name="time"
                  value={selectedTime}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setSelectedTime(e.target.value)
                  }
                  className="w-full border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                >
                  <option value="">Select Time</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Any message or questions?"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#6C5CE7] text-white py-3 rounded-lg hover:bg-[#5A50DA] shadow-md hover:shadow-lg transition-all duration-300"
              >
                Submit
              </Button>
            </form>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#3E37A1]">
              Frequently Asked Questions
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#6C5CE7]/10">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full text-left text-xl font-medium text-[#3E37A1] py-2"
                  >
                    {faq.question}
                  </button>
                  {openFAQ === index && (
                    <div className="pt-2 text-lg text-gray-700">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
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

// Main page component with Suspense boundary
export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading contact form...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
