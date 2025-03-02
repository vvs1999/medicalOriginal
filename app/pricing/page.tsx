"use client"; // Must be the very first line for client-side components

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";

export default function ServicesPage() {
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
      color: "bg-blue-100 hover:bg-blue-200",
      borderColor: "border-blue-300",
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
      color: "bg-green-100 hover:bg-green-200",
      borderColor: "border-green-300",
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
      color: "bg-purple-100 hover:bg-purple-200",
      borderColor: "border-purple-300",
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">
          Flexible & Transparent Pricing
        </h1>
        <p className="text-xl text-center mb-12 text-gray-600">
          Affordable billing solutions for solo practitioners, clinics, and healthcare groups.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`${
                plan.color
              } ${selectedPlan === index ? `${plan.borderColor} shadow-lg` : "border-transparent"}
               border-2 rounded-lg p-6 flex flex-col justify-between cursor-pointer transition-all duration-300`}
              onClick={() => setSelectedPlan(index)}
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-blue-800">{plan.title}</h2>
                <p className="mb-6 text-gray-700">{plan.description}</p>
                <ul className="list-disc pl-6 mb-6 text-gray-600">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700">
                <Link href={`/contact?plan=${encodeURIComponent(plan.title)}`}>
                  {plan.cta}
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 p-8 rounded-lg text-center text-white shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">
            Not Sure Which Plan Is Right for You?
          </h2>
          <p className="text-lg mb-6">
            Our experts can help you choose the best pricing model for your healthcare practice.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-200">
            <Link href="/contact">Get a Customized Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
