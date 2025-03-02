"use client";

import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaHeartbeat, FaCog, FaChartLine, FaUserMd, FaXRay, FaBrain, FaLungs, FaStethoscope, FaUsers, FaCheckCircle, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HomePage() {
  const specialties = [
    "Orthopedic Surgery",
    "General Surgery",
    "Ophthalmology",
    "ENT",
    "Anesthesiology",
    "Cardiology",
    "Neurology",
    "Endocrinology",
    "Rheumatology",
    "Nephrology",
    "Oncology",
    "Radiology",
    "Pulmonology",
    "Gastroenterology",
    "Dermatology",
    "Urology",
    "Family Practice",
    "Internal Medicine",
    "Pediatrics",
    "OB/GYN",
    "Psychiatry",
    "Chiropractic",
    "Pain Management",
    "Urgent Care",
    "Physical Therapy",
    "and More",
  ];

  const getIconForSpecialty = (specialty: string) => {
    switch (specialty) {
      case "Orthopedic Surgery":
        return <FaUserMd className="text-xl" />;
      case "General Surgery":
        return <FaStethoscope className="text-xl" />;
      case "Ophthalmology":
        return <FaXRay className="text-xl" />;
      case "ENT":
        return <FaLungs className="text-xl" />;
      case "Anesthesiology":
        return <FaHeartbeat className="text-xl" />;
      case "Cardiology":
        return <FaHeartbeat className="text-xl" />;
      case "Neurology":
        return <FaBrain className="text-xl" />;
      case "Endocrinology":
        return <FaChartLine className="text-xl" />;
      case "Rheumatology":
        return <FaUserMd className="text-xl" />;
      case "Nephrology":
        return <FaUserMd className="text-xl" />;
      case "Oncology":
        return <FaUserMd className="text-xl" />;
      case "Radiology":
        return <FaXRay className="text-xl" />;
      case "Pulmonology":
        return <FaLungs className="text-xl" />;
      case "Gastroenterology":
        return <FaUserMd className="text-xl" />;
      case "Dermatology":
        return <FaUserMd className="text-xl" />;
      case "Urology":
        return <FaUserMd className="text-xl" />;
      case "Family Practice":
        return <FaUsers className="text-xl" />;
      case "Internal Medicine":
        return <FaStethoscope className="text-xl" />;
      case "Pediatrics":
        return <FaUserMd className="text-xl" />;
      case "OB/GYN":
        return <FaUserMd className="text-xl" />;
      case "Psychiatry":
        return <FaBrain className="text-xl" />;
      case "Chiropractic":
        return <FaUserMd className="text-xl" />;
      case "Pain Management":
        return <FaUserMd className="text-xl" />;
      case "Urgent Care":
        return <FaHeartbeat className="text-xl" />;
      case "Physical Therapy":
        return <FaUserMd className="text-xl" />;
      case "and More":
        return <FaCog className="text-xl" />;
      default:
        return <FaUserMd className="text-xl" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5FC]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section with Animation */}
        <section
          className="relative bg-cover bg-center text-white py-24"
          style={{
            backgroundImage: "url('/images/about.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 flex justify-start items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 p-8 relative z-10"
              style={{
                background: "rgba(30, 30, 70, 0.6)",
                borderRadius: "10px",
                backdropFilter: "blur(4px)",
              }}
            >
              <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                Transform Your Revenue Cycle with Efficient, Integrated Solutions
              </h1>
              <p className="text-lg mb-8 opacity-90">
                At AccurusBill, we empower independent physicians and clinics to streamline operations, reduce administrative burdens, and maximize revenue.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-[#3E37A1] text-white font-semibold hover:bg-[#4C45C2] transition duration-300"
              >
                <Link href="/contact">Stop Losing Revenue—Get a Free Audit Now!</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-6 text-[#3E37A1] relative">
              Our Services
              <span className="block w-24 h-1 bg-[#6C5CE7] mx-auto mt-2 rounded-full"></span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: "Medical Billing & Claims Submission", description: "Streamline billing processes and reduce claim denials for faster reimbursements." },
                { title: "Medical Coding (ICD-10, CPT)", description: "Ensure accurate coding to maximize revenue and avoid compliance risks." },
                { title: "Prior Authorization & Insurance Verification", description: "Eliminate delays with seamless insurance approvals." },
                { title: "Virtual Medical Scribing", description: "Free up your time with real-time, accurate documentation." },
                { title: "Medical Transcription Services", description: "Turn patient encounters into precise, actionable records." },
                { title: "Physician Credentialing", description: "Stay credentialed and compliant without the hassle." },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-[#F5F5FC] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#3E37A1]">{service.title}</h3>
                  <p className="text-base mb-4 text-[#263238]">{service.description}</p>
                  <Link href={`/services#${service.title.toLowerCase().replace(/ /g, "-")}`} className="text-base font-semibold text-[#FFC107] hover:underline">
                    Learn more →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose AccurusBill Section with Animated Icons */}
        <section className="py-20 bg-[#EEF0FF]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-[#3E37A1] relative">
              Why Choose AccurusBill?
              <span className="block w-24 h-1 bg-[#6C5CE7] mx-auto mt-2 rounded-full"></span>
            </h2>
            <div className="grid md:grid-cols-3 gap-10 mt-8">
              {[
                { icon: <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }}><FaCog className="text-6xl text-[#5A50DA] mx-auto" /></motion.div>, title: "End-to-End Expertise" },
                { icon: <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}><FaMoneyBillWave className="text-6xl text-[#5A50DA] mx-auto" /></motion.div>, title: "Cost-Effective Solutions" },
                { icon: <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }}><FaShieldAlt className="text-6xl text-[#5A50DA] mx-auto" /></motion.div>, title: "Secure & Compliant" },
                { icon: <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}><FaChartLine className="text-6xl text-[#5A50DA] mx-auto" /></motion.div>, title: "Real-Time Transparency" },
                { icon: <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}><FaCheckCircle className="text-6xl text-[#5A50DA] mx-auto" /></motion.div>, title: "95% Claim Acceptance" },
                { icon: <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }}><FaUsers className="text-6xl text-[#5A50DA] mx-auto" /></motion.div>, title: "Dedicated Success Team" },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-[#3E37A1] mt-4">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process - Updated Alignment with Animated Image */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-3/5">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-[#3E37A1] mb-2">Our Process</h2>
                <span className="block w-24 h-1 bg-[#6C5CE7] mx-auto mt-2 rounded-full"></span>
              </div>
              <div className="relative border-l-4 border-[#6C5CE7] pl-8 space-y-12 mt-8">
                {[
                  { step: "Step 1", title: "Understand Your Unique Needs", description: "We start with a free, no-obligation consultation to audit your workflows, pinpoint revenue leaks, and craft a custom roadmap." },
                  { step: "Step 2", title: "Seamless Onboarding & Training", description: "Our team integrates with your EHR/EMR systems and trains your staff—zero downtime, zero hassle." },
                  { step: "Step 3", title: "Proactive Revenue Cycle Management", description: "We take over billing, coding, and prior authorizations while you track progress via real-time dashboards." },
                  { step: "Step 4", title: "Continuous Optimization & Support", description: "Monthly performance reviews, 24/7 support, and updates to keep your practice ahead of compliance changes." },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="mb-6"
                  >
                    <h3 className="text-2xl font-semibold text-[#3E37A1]">
                      {item.step}: {item.title}
                    </h3>
                    <p className="text-gray-700 mt-2 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className="lg:w-2/5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="shadow-lg rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/process.jpg"
                  alt="Our Process"
                  width={500}
                  height={600}
                  className="rounded-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* We Serve Section with Single Continuous Scrolling Line */}
        <section className="py-20 bg-gradient-to-r from-[#6C5CE7] to-[#5A50DA] text-white overflow-hidden relative">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white relative">
              We Serve
              <span className="block w-24 h-1 bg-[#FFC107] mx-auto mt-2 rounded-full"></span>
            </h2>
            <p className="text-lg mb-10 text-white opacity-90">
              Supporting a wide range of medical specialties with tailored solutions.
            </p>
            <div className="relative">
              <motion.div
                className="flex whitespace-nowrap gap-6"
                animate={{ x: ["100%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              >
                {specialties.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white text-[#3E37A1] rounded-full px-4 py-2 shadow-lg hover:bg-[#FFC107] hover:text-white transition duration-300 cursor-pointer"
                  >
                    <span className="mr-2">{getIconForSpecialty(spec)}</span>
                    <span className="text-base font-semibold">{spec}</span>
                  </div>
                ))}
                {/* Duplicate the list to ensure seamless looping */}
                {specialties.map((spec, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex items-center bg-white text-[#3E37A1] rounded-full px-4 py-2 shadow-lg hover:bg-[#FFC107] hover:text-white transition duration-300 cursor-pointer"
                  >
                    <span className="mr-2">{getIconForSpecialty(spec)}</span>
                    <span className="text-base font-semibold">{spec}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section className="py-20 bg-[#F5F5FC]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#3E37A1] relative">
              What Our Clients Say
              <span className="block w-24 h-1 bg-[#6C5CE7] mx-auto mt-2 rounded-full"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                { name: "Dr. Emily Carter", feedback: "AccurusBill streamlined our billing process and improved revenue significantly." },
                { name: "Clinic Administrator", feedback: "Our clinic experienced fewer claim denials thanks to their expert team." },
              ].map((client, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                >
                  <h3 className="text-lg font-semibold text-[#3E37A1]">{client.name}</h3>
                  {/* Line 315: Fix unescaped double quotes */}
                  <p className="text-base text-[#263238]">{`"${client.feedback}"`}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-[#6C5CE7] to-[#5A50DA] text-white text-center">
          <div className="container mx-auto px-4">
            {/* Line 326: Fix unescaped double quotes */}
            <h2 className="text-4xl font-bold mb-6">
              "Reclaim Time for Patient Care - Let Us Optimize Your Revenue Cycle"
            </h2>
            <Button
              size="lg"
              asChild
              className="bg-white text-[#3E37A1] font-semibold hover:bg-[#4C45C2] hover:text-white transition duration-300"
            >
              <Link href="/contact">Get Started Now</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#3E37A1] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base">
            © 2024 AccurusBill. Empowering Private Clinics with Comprehensive,
            Cost-Effective Solutions
          </p>
          <p>Phone: (XXX) XXX-XXXX | Email: info@AccurusBill.com</p>
          <div className="mt-4">
            <Link href="/">Home</Link> | <Link href="/about">About Us</Link> |{' '}
            <Link href="/services">Services</Link> | <Link href="/blog">Blog</Link> |{' '}
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}