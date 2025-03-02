"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function FreeAuditPage() {
  const [step, setStep] = useState(1)

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(step + 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">Get Your Free Billing Audit</h1>
        <p className="text-xl text-center mb-12 text-gray-600">
          Discover how Celestimed can optimize your medical billing process and increase your revenue.
        </p>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          {step === 1 && (
            <form onSubmit={handleNextStep}>
              <h2 className="text-2xl font-semibold mb-6 text-blue-700">Step 1: Basic Information</h2>
              <div className="space-y-4">
                <Input type="text" placeholder="Clinic/Practice Name" required />
                <Input type="text" placeholder="Your Full Name" required />
                <Input type="email" placeholder="Email Address" required />
                <Input type="tel" placeholder="Phone Number" required />
                <select className="w-full p-2 border rounded-md" required>
                  <option value="">Number of Practitioners</option>
                  <option value="1">1</option>
                  <option value="2-5">2-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11+">11+</option>
                </select>
              </div>
              <Button type="submit" className="w-full mt-6">
                Next
              </Button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNextStep}>
              <h2 className="text-2xl font-semibold mb-6 text-blue-700">Step 2: Current Billing Process</h2>
              <div className="space-y-4">
                <select className="w-full p-2 border rounded-md" required>
                  <option value="">Current Billing Method</option>
                  <option value="in-house">In-house</option>
                  <option value="outsourced">Outsourced</option>
                  <option value="hybrid">Hybrid (In-house & Outsourced)</option>
                </select>
                <Input type="text" placeholder="Current Billing Software (if any)" />
                <div className="flex items-center space-x-2">
                  <Checkbox id="ramq" />
                  <label
                    htmlFor="ramq"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Do you bill RAMQ?
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="private-insurance" />
                  <label
                    htmlFor="private-insurance"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Do you bill private insurance?
                  </label>
                </div>
              </div>
              <Button type="submit" className="w-full mt-6">
                Next
              </Button>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleNextStep}>
              <h2 className="text-2xl font-semibold mb-6 text-blue-700">Step 3: Billing Challenges</h2>
              <div className="space-y-4">
                <p className="text-sm text-gray-600 mb-2">Select all that apply:</p>
                <div className="flex items-center space-x-2">
                  <Checkbox id="high-denial-rates" />
                  <label
                    htmlFor="high-denial-rates"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    High claim denial rates
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="slow-payments" />
                  <label
                    htmlFor="slow-payments"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Slow payments from insurers
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="coding-errors" />
                  <label
                    htmlFor="coding-errors"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Frequent coding errors
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="compliance-issues" />
                  <label
                    htmlFor="compliance-issues"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Compliance issues
                  </label>
                </div>
                <Textarea placeholder="Any other billing challenges you're facing?" />
              </div>
              <Button type="submit" className="w-full mt-6">
                Submit
              </Button>
            </form>
          )}

          {step === 4 && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-6 text-blue-700">Thank You!</h2>
              <p className="text-lg mb-6 text-gray-700">
                We've received your information and will be in touch shortly to schedule your free billing audit.
              </p>
              <p className="text-md mb-8 text-gray-600">
                One of our billing experts will review your current process and provide a detailed report on how we can
                help optimize your billing and increase your revenue.
              </p>
              <Button asChild>
                <a href="/">Return to Homepage</a>
              </Button>
            </div>
          )}
        </div>

        {step < 4 && <div className="mt-8 text-center text-gray-600">Step {step} of 3</div>}

        <div className="mt-16 bg-blue-600 p-8 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-semibold mb-6">Why Get a Free Audit?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Identify potential revenue leaks in your billing process</li>
            <li>Get expert insights on improving your claim submission accuracy</li>
            <li>Learn how to reduce denial rates and speed up payments</li>
            <li>Receive a customized plan to optimize your medical billing</li>
            <li>No obligation - just valuable insights for your practice</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

