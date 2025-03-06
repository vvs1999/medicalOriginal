"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";

export default function PricingPage() {
  const pricingPlans = [
    {
      title: "Pay-Per-Claim",
      description: "Ideal for small clinics and individual practitioners.",
      features: [
        "Pay only when claims are successfully processed",
        "Transparent pricing per claim submission",
        "No monthly fees",
        "Suitable for low volume of claims",
      ],
      cta: "Start with Pay-Per-Claim",
      gradient: "from-[#6C5CE7]/10 to-[#F5F5FC]",
      selectedGradient: "from-[#6C5CE7]/20 to-[#EDEFFA]",
      borderColor: "border-[#6C5CE7]",
      buttonHoverColor: "hover:bg-[#6C5CE7]",
    },
    {
      title: "Subscription-Based",
      description: "Best for medium-sized clinics with regular billing needs.",
      features: [
        "Monthly flat fee for unlimited claims",
        "Includes insurance verification & compliance checks",
        "Priority support",
        "Ideal for consistent claim volumes",
      ],
      cta: "Subscribe to a Plan",
      gradient: "from-[#3E37A1]/10 to-[#F5F5FC]",
      selectedGradient: "from-[#3E37A1]/20 to-[#EDEFFA]",
      borderColor: "border-[#3E37A1]",
      buttonHoverColor: "hover:bg-[#3E37A1]",
    },
    {
      title: "Custom Enterprise",
      description: "Tailored for large healthcare providers & multi-location clinics.",
      features: [
        "Custom pricing based on claim volume and services",
        "Dedicated account manager",
        "24/7 premium support",
        "Comprehensive reporting and analytics",
      ],
      cta: "Request a Custom Quote",
      gradient: "from-[#5A50DA]/10 to-[#F5F5FC]",
      selectedGradient: "from-[#5A50DA]/20 to-[#EDEFFA]",
      borderColor: "border-[#5A50DA]",
      buttonHoverColor: "hover:bg-[#5A50DA]",
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F5FC] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#6C5CE7]/20 to-[#F5F5FC] bg-[url('/images/service-bg-pattern.png')] bg-no-repeat bg-center bg-cover">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-6xl font-extrabold text-[#3E37A1] mb-4 drop-shadow-md">
              Flexible & Transparent Pricing
            </h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
              Affordable billing solutions for solo practitioners, clinics, and healthcare groups.
            </p>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${
                    selectedPlan === index ? plan.selectedGradient : plan.gradient
                  } p-8 rounded-xl shadow-lg border ${
                    selectedPlan === index ? plan.borderColor : "border-[#6C5CE7]/10"
                  } hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col justify-between cursor-pointer`}
                  onClick={() => setSelectedPlan(index)}
                >
                  <div>
                    <h2 className="text-2xl font-semibold text-[#3E37A1] mb-4">{plan.title}</h2>
                    <p className="text-lg mb-6 text-gray-700 font-medium">{plan.description}</p>
                    <ul className="list-disc pl-6 mb-8 text-gray-700 text-base space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    asChild
                    className={`w-full bg-[#6C5CE7] text-white ${plan.buttonHoverColor} rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
                  >
                    <Link href={`/contact?plan=${encodeURIComponent(plan.title)}`}>
                      {plan.cta}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-[#6C5CE7] to-[#3E37A1] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">
              Not Sure Which Plan Is Right for You?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our experts can help you choose the best pricing model for your healthcare practice.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#FFC107] text-[#3E37A1] font-bold shadow-lg hover:bg-[#FFD700] transition duration-300 rounded-lg"
            >
              <Link href="/contact">Get a Customized Quote</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#3E37A1] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base mb-4">
            © 2024 AccurusBill. Empowering Private Clinics with Comprehensive Solutions
          </p>
          <p className="text-sm mb-4">Email: info@accurusbill.com</p>
          <div className="space-x-4">
            <Link href="/" className="hover:text-[#FFC107] text-sm">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#FFC107] text-sm">
              About
            </Link>
            <Link href="/services" className="hover:text-[#FFC107] text-sm">
              Services
            </Link>
            <Link href="/contact" className="hover:text-[#FFC107] text-sm">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
