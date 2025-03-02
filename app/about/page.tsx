"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
// Removed framer-motion imports (LazyMotion, m otion, AnimatePresence) and react-icons (FaHeartbeat, FaCog, etc.) since they're no longer needed

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Jane Smith",
      role: "Chief Medical Officer",
      image: "/images/team/sandeep.jpg",
      bio: "Dr. Smith oversees clinical operations with over 15 years of experience in healthcare management.",
      expertise: "Healthcare Administration, Revenue Cycle Management",
      funFact: "Avid hiker and nature photographer",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Billing Operations",
      image: "/images/team/Nitesh.jpg",
      bio: "Michael leads our billing team with a decade of expertise in claims processing and denial management.",
      expertise: "Medical Billing, Claims Advocacy",
      funFact: "Fluent in Spanish and Portuguese",
    },
    {
      name: "Sarah Lee",
      role: "Lead Medical Coder",
      image: "/images/team/sandeep.jpg",
      bio: "Sarah is a CPC-certified coder specializing in ICD-10 and CPT coding standards.",
      expertise: "Medical Coding, Compliance",
      funFact: "Volunteers at local coding bootcamps",
    },
    {
      name: "Emily Carter",
      role: "Client Success Manager",
      image: "/images/team/Nitesh.jpg",
      bio: "Emily ensures seamless client experiences with a focus on personalized support.",
      expertise: "Customer Relations, EHR Integration",
      funFact: "Loves baking artisanal bread",
    },
  ];

  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F5FC]">
      {/* Navbar with Prefetch */}
      <Navbar />

      {/* About Header */}
      <section className="py-32 bg-gradient-to-br from-[#6C5CE7]/20 to-[#F5F5FC] overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl font-extrabold text-[#3E37A1] mb-4 drop-shadow-md">
            About AccurusBill
            <span className="block w-32 h-1 bg-gradient-to-r from-[#6C5CE7] to-[#3E37A1] mx-auto mt-3 rounded-full"></span>
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            Discover our story, mission, and team dedicated to transforming healthcare billing.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-[#3E37A1]">
            Our Story
          </h2>
          <div className="text-lg text-gray-700 text-justify leading-relaxed max-w-4xl mx-auto">
            <p className="mb-6">
              <strong>Born from Healthcare’s Hidden Crisis: Empowering Clinics, Practices, and Physicians to Focus on Healing</strong>
            </p>
            <p>
              Behind every thriving clinic and dedicated doctor lies a hidden battle: time stolen by paperwork, not patients. Denied claims. Payer delays. Credentialing red tape. Burnout. Why should clinics and medical teams—the heart of personalized care—waste their expertise on administrative chaos?
            </p>
            <p className="mt-4">
              AccurusBill was created to end this crisis. We replaced fragmented tools and indifferent vendors with a unified partner for billing, coding, transcription, and credentialing—so private clinics, IPPs, and solo practitioners can reclaim their time, revenue, and passion for medicine.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-r from-[#6C5CE7] to-[#5A50DA] text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-white/10 rounded-xl">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-justify">
              To empower private clinics, independent practices, and solo providers with certified expertise, relentless advocacy, and seamless workflows—freeing them from administrative chaos to reclaim time for patient care and practice growth.
            </p>
          </div>
          <div className="p-8 bg-white/10 rounded-xl">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg text-justify">
              To redefine the future of private healthcare by building a world where clinics thrive—not survive—through compliance-first revenue cycles, measurable financial success, and a system that finally works for providers, not against them.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-[#3E37A1]">
            Our Values
          </h2>
          <p className="text-lg mb-8 text-gray-700 text-center">
            <strong>The Pillars That Define Us - and Protect Your Practice</strong>
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Uncompromising Integrity", desc: "We fight for your financial health with certified expertise—never cutting corners, never sacrificing compliance. Every claim we submit is audited, every action HIPAA-guarded." },
              { title: "Radical Transparency", desc: "No hidden fees, no jargon, no surprises. Real-time dashboards, monthly audits, and 24/7 access to your revenue cycle data—because your trust is non-negotiable." },
              { title: "Relentless Efficiency", desc: "We don’t just streamline workflows—we obliterate delays. From same-day claims submission to 48-hour prior authorizations, speed is our weapon against revenue loss." },
              { title: "Bold Innovation", desc: "We evolve faster than payer rules change. Custom EHR integrations, denial prediction analytics, and future-proof tools keep you ahead in a shifting landscape." },
              { title: "Partnership-First Success", desc: "Your wins are ours. We assign dedicated account managers, tailor workflows to your specialty, and measure success by your growth—not our profits." },
              { title: "Fierce Advocacy", desc: "We battle denied claims, opaque payers, and bureaucratic red tape so you don’t have to. Your fight is our fight—period." },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-[#F5F5FC] p-6 rounded-xl shadow-md transition duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#3E37A1]">{value.title}</h3>
                <p className="text-base text-gray-700 text-justify">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-[#EEF0FF]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center text-[#3E37A1]">
            Our Team
          </h2>
          <p className="text-lg mb-10 text-gray-700 text-justify max-w-4xl mx-auto">
            At AccurusBill, our team is the heartbeat of your practice’s success. Composed of CPC-certified coders, CPB-accredited billing specialists, HIPAA-trained transcriptionists, and credentialing experts with 10+ years in payer enrollment, we combine deep technical expertise with relentless advocacy. Trusted by clinics nationwide, we’re your partners in reclaiming the joy of medicine.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => setActiveTeamMember(activeTeamMember === index ? null : index)}
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={160}
                  height={160}
                  loading="lazy" // Lazy-load images
                  quality={80} // Optimize image quality
                  className="rounded-full object-cover w-40 h-40 mx-auto border-4 border-[#6C5CE7] shadow-md"
                  onError={({ currentTarget }) => {
                    currentTarget.src = "/placeholder.svg";
                  }} // Fallback for missing images
                />
                <h3 className="text-xl font-semibold text-[#3E37A1] text-center mt-4">{member.name}</h3>
                <p className="text-gray-600 text-center">{member.role}</p>
                {activeTeamMember === index && (
                  <div className="mt-4 text-left text-gray-700 text-sm">
                    <p className="mb-2"><strong>Bio:</strong> {member.bio}</p>
                    <p className="mb-2"><strong>Expertise:</strong> {member.expertise}</p>
                    <p><strong>Fun Fact:</strong> {member.funFact}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-gradient-to-r from-[#6C5CE7] to-[#5A50DA] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">
            Get in Touch
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-justify">
            At AccurusBill, we are committed to helping your clinic thrive. Ready to streamline your operations and boost your revenue? Contact us today to learn more about how we can help your practice succeed.
          </p>
          <div>
            <Button
              asChild
              size="lg"
              className="bg-[#FFC107] text-[#3E37A1] font-semibold hover:bg-[#FFD700] transition duration-300 shadow-md"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <p className="text-base mt-6">
            Email: <a href="mailto:info@accurusbill.com" className="underline hover:text-[#FFD700]">info@accurusbill.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3E37A1] text-white py-12 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-base">
            © 2024 AccurusBill. Empowering Private Clinics with Comprehensive, Cost-Effective Solutions
          </p>
          <p className="mt-2">Phone: (XXX) XXX-XXXX | Email: info@accurusbill.com</p>
          <div className="mt-4 space-x-4">
            <Link href="/" prefetch={true} className="hover:text-[#FFC107]">Home</Link>
            <Link href="/about" prefetch={true} className="hover:text-[#FFC107]">About Us</Link>
            <Link href="/services" prefetch={true} className="hover:text-[#FFC107]">Services</Link>
            <Link href="/blog" prefetch={true} className="hover:text-[#FFC107]">Blog</Link>
            <Link href="/contact" prefetch={true} className="hover:text-[#FFC107]">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}