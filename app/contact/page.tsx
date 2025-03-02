"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import emailjs from "@emailjs/browser"; // Added EmailJS import

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    clinicName: "",
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "",
    message: "",
  });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null); // Explicitly type as number | null

  useEffect(() => {
    const plan = searchParams.get("plan");
    if (plan) {
      setSelectedService(plan);
    }
  }, [searchParams]);

  // Get current date and calculate three months ahead
  const currentDate = new Date("2025-02-22"); // Use current date as February 22, 2025 for this example
  const threeMonthsLater = new Date(currentDate);
  threeMonthsLater.setMonth(currentDate.getMonth() + 3);

  // Generate dates for the next three months (May, June, July 2025)
  const months = [
    new Date(threeMonthsLater.setMonth(threeMonthsLater.getMonth() - 2)).toLocaleString("default", { month: "long", year: "numeric" }),
    new Date(threeMonthsLater.setMonth(threeMonthsLater.getMonth() + 1)).toLocaleString("default", { month: "long", year: "numeric" }),
    new Date(threeMonthsLater.setMonth(threeMonthsLater.getMonth() + 1)).toLocaleString("default", { month: "long", year: "numeric" }),
  ];

  // Generate time slots (9:00 AM to 5:00 PM, every 15 minutes, Eastern Time)
  const generateTimeSlots = () => {
    const slots = [];
    let hour = 9; // Start at 9 AM
    while (hour < 17) { // End at 5 PM
      slots.push(`${hour < 10 ? "0" + hour : hour}:00 AM`);
      slots.push(`${hour < 10 ? "0" + hour : hour}:15 AM`);
      slots.push(`${hour < 10 ? "0" + hour : hour}:30 AM`);
      slots.push(`${hour < 10 ? "0" + hour : hour}:45 AM`);
      if (hour === 12) {
        slots[slots.length - 4] = slots[slots.length - 4].replace("AM", "PM"); // Noon
        slots[slots.length - 3] = slots[slots.length - 3].replace("AM", "PM");
        slots[slots.length - 2] = slots[slots.length - 2].replace("AM", "PM");
        slots[slots.length - 1] = slots[slots.length - 1].replace("AM", "PM");
      }
      hour++;
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Prepare data for submission
    const submissionData = {
      ...formData,
      service: selectedService,
      auditDate: selectedDate,
      auditTime: selectedTime,
    };

    // EmailJS configuration (replace with your actual credentials)
    const SERVICE_ID = "service_vbw0zm9";
    const TEMPLATE_ID = "template_gdwtnsh"; // Updated based on your template (assumed from context)
    const PUBLIC_KEY = "RyK08ZkilNemSbKYg"; // Replace with your actual public key

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_name: "AccurusBill Team", // Default recipient name as per template
          fullName: submissionData.fullName || "Not provided",
          clinicName: submissionData.clinicName || "Not provided",
          email: submissionData.email || "Not provided",
          phone: submissionData.phone || "Not provided",
          contactMethod: submissionData.contactMethod || "Not provided",
          service: submissionData.service || "Not provided",
          message: submissionData.message || "Not provided",
          auditDate: submissionData.auditDate || "Not provided",
          auditTime: submissionData.auditTime ? `${submissionData.auditTime} ET` : "Not provided",
        },
        PUBLIC_KEY
      );
      console.log("✅ Email successfully sent:", result.text);
      alert("🎉 Submission received successfully! We'll get back to you soon.");
    } catch (error) {
      console.error("🚨 Error sending email:", error);
      alert("❌ Failed to send the submission. Please try again.");
    }

    // Reset form and selections
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

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide a complete suite of solutions to streamline your clinic’s administrative tasks, including Medical Billing & Claims Submission, Medical Coding (ICD-10, CPT), Prior Authorization & Insurance Verification, Virtual Medical Scribing, Medical Transcription, and Physician Credentialing.",
    },
    {
      question: "How long does it take to process claims?",
      answer: "We typically process claims within 24-48 hours of receipt, ensuring quick turnaround times for our clients.",
    },
    {
      question: "Do you work with all private insurance providers?",
      answer: "Yes, we work with all major private insurance providers in Canada, as well as provincial health insurance plans.",
    },
    {
      question: "What billing software do you integrate with?",
      answer: "We integrate with popular EMR/EHR systems including OSCAR, Telus Health, ClinicAid, and Medesync, among others.",
    },
    {
      question: "How do you ensure accurate and timely claim submissions?",
      answer: "Our process auto-captures charges directly from your EHR/EMR and scrubs errors in real time. We submit claims within 4 hours using payer-specific rules, track payments daily, and handle appeals for denials and underpayments on your behalf.",
    },
    {
      question: "How do you maximize revenue through medical coding?",
      answer: "Our CPC-certified coders review charts to assign accurate codes that insurers pay for. We also perform dual-layer audit checks to prevent upcoding or downcoding, and we provide monthly reports that show the direct impact of our coding on your revenue.",
    },
    {
      question: "What is your process for Prior Authorization & Insurance Verification?",
      answer: "We start by flagging treatments requiring prior authorization during scheduling. We then submit the necessary requests with clinical evidence on the same day, and if needed, escalate stalled requests directly to payer medical directors to minimize treatment delays.",
    },
    {
      question: "How does Virtual Medical Scribing work?",
      answer: "Our HIPAA-trained virtual scribes join your patient visits—whether in-person or virtual—to document directly into your EHR using your preferred templates. They deliver complete notes for your review and sign-off within one hour, so your clinicians can focus on patient care.",
    },
    {
      question: "What are the turnaround times for your Medical Transcription services?",
      answer: "We transcribe dictated notes via a secure app or call in under 4 hours. The transcriptions are then formatted to meet your specialty requirements (such as SOAP notes, H&Ps, or procedure summaries) and uploaded to your EHR with timestamps and provider signatures.",
    },
    {
      question: "How do you manage Physician Credentialing?",
      answer: "We simplify the credentialing process by collecting all necessary documentation—licenses, malpractice history, and practice details—filing applications, tracking progress, and resolving any payer roadblocks. We also automate revalidation to ensure your providers remain continuously enrolled.",
    },
    {
      question: "What makes your services unique compared to other providers?",
      answer: "We offer a unified, integrated approach that covers every aspect of your clinic’s administrative needs. Our processes are designed to reduce errors, speed up reimbursements, and minimize delays. With transparent reporting and dedicated support, we protect your revenue and save you valuable time—all at a cost-effective price point.",
    },
    {
      question: "How can I get started?",
      answer: "It’s easy! Contact us today to schedule a free consultation. We’ll assess your clinic’s needs and tailor a solution that streamlines your administrative workflows and boosts your revenue cycle.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F5FC] to-[#EEF0FF]">
      {/* Navbar with Prefetch */}
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-6 text-center text-[#3E37A1]">
          Get in Touch with AccurusBill
          <span className="block w-32 h-1 bg-gradient-to-r from-[#6C5CE7] to-[#3E37A1] mx-auto mt-3 rounded-full"></span>
        </h1>
        <p className="text-xl text-center mb-12 text-gray-700 max-w-2xl mx-auto">
          Have questions about medical billing? Need a custom quote or a free audit? We’re here to assist!
        </p>

        {/* Get in Touch with Us Section (Integrated Form + Audit Booking) */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
          <p className="text-gray-600 mb-6">
            Fill out the form below to reach out, and schedule a free audit to optimize your revenue cycle.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
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
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <select
                  name="contactMethod"
                  className="w-full p-2 border rounded-lg bg-white text-gray-800 border-[#6C5CE7]/20 border-2 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                  required
                  value={formData.contactMethod}
                  onChange={handleInputChange}
                >
                  <option value="">Preferred Contact Method</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="Video Call">Video Call</option>
                </select>
              </div>
              <div>
                <select
                  className="w-full p-2 border rounded-lg bg-white text-gray-800 border-[#6C5CE7]/20 border-2 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="">Services Needed</option>
                  <option value="Pay-Per-Claim">Pay-Per-Claim</option>
                  <option value="Subscription-Based">Subscription-Based</option>
                  <option value="Custom Enterprise">Custom Enterprise</option>
                  <option value="Medical Billing">Medical Billing</option>
                  <option value="Coding">Medical Coding</option>
                  <option value="Prior Authorization">Prior Authorization</option>
                  <option value="EMR Management">EMR Management</option>
                </select>
              </div>
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
              />
            </div>

            {/* Audit Booking Fields (Integrated into Form, No Header) */}
            <div className="mt-6 bg-[#F5F5FC] p-4 rounded-lg border border-[#6C5CE7]/20 shadow-inner">
              <p className="text-gray-600 mb-4 text-sm">
                Choose a date and time for your free audit (Eastern Time, UTC-05:00).
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <select
                  className="w-full p-2 border rounded-lg bg-white text-gray-800 border-[#6C5CE7]/20 border-2 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  value={selectedDate}
                >
                  <option value="">Select Date</option>
                  {months.map((month, index) => (
                    <option key={index} value={month}>{month}</option>
                  ))}
                </select>
                <select
                  className="w-full p-2 border rounded-lg bg-white text-gray-800 border-[#6C5CE7]/20 border-2 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                  onChange={(e) => setSelectedTime(e.target.value)}
                  value={selectedTime}
                >
                  <option value="">Select Time (ET, UTC-05:00)</option>
                  {timeSlots.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6">
              <Button
                type="submit"
                className="w-full bg-[#6C5CE7] text-white font-semibold hover:bg-[#3E37A1] transition duration-300 rounded-lg shadow-md hover:shadow-lg"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-[#3E37A1]">Contact Information</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong className="text-[#6C5CE7]">Phone:</strong> +1 (XXX) XXX-XXXX
            </p>
            <p>
              <strong className="text-[#6C5CE7]">Email:</strong> info@accurusbill.com
            </p>
            <p>
              <strong className="text-[#6C5CE7]">Address:</strong> 1234 Rue Sainte-Catherine, Montreal, QC H3B 1A7
            </p>
            <p>
              <strong className="text-[#6C5CE7]">Business Hours:</strong> Monday – Friday: 9 AM – 5 PM EST
            </p>
          </div>
        </div>

        {/* FAQ Section - Simplified Accordion (No Animations, No Icons) */}
        <div className="mt-16 bg-[#F5F5FC] p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-8 text-[#3E37A1]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-4 bg-white rounded-lg shadow-md border border-[#6C5CE7]/20 flex justify-between items-center text-left text-lg font-semibold text-[#3E37A1] hover:bg-[#F5F5FC] transition duration-300"
                >
                  {faq.question}
                  <span>{openFAQ === index ? "−" : "+"}</span>
                </button>
                {openFAQ === index && (
                  <div className="p-4 bg-[#F5F5FC] rounded-b-lg text-gray-700 text-justify">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}