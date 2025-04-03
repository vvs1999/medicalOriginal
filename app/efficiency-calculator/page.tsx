"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Link from "next/link";

export default function EfficiencyCalculatorPage() {
  // State for calculator selection
  const [activeCalculator, setActiveCalculator] = useState<"ccmRpm" | "arDays">("ccmRpm");

  // State for CCM/RPM Calculator
  const [ccmRpmState, setCcmRpmState] = useState({
    chronicPatients: "",
    rpmEligiblePatients: "",
    ccmEnrollment: "",
    ccmReimbursement: "70",
    rpmEnrollment: "",
    rpmReimbursement: "120",
    result: null as {
      ccmEnrolled: number;
      ccmRevenue: number;
      rpmEnrolled: number;
      rpmRevenue: number;
      totalMonthlyRevenue: number;
      totalAnnualRevenue: number;
    } | null,
    error: null as string | null,
  });

  // State for A/R Days Calculator
  const [arDaysState, setArDaysState] = useState({
    totalAR: "",
    monthlyCharges: "",
    daysInMonth: "30",
    specialty: "",
    customSpecialty: "",
    customBenchmarkLower: "",
    customBenchmarkUpper: "",
    arDays: null as number | null,
    error: null as string | null,
  });

  // Specialty options with benchmarks
  const specialties = [
    { name: "Family Medicine / Primary Care", range: [25, 35] },
    { name: "Internal Medicine", range: [25, 35] },
    { name: "Pediatrics", range: [20, 30] },
    { name: "OB/GYN", range: [25, 35] },
    { name: "Cardiology", range: [35, 45] },
    { name: "Orthopedics", range: [30, 40] },
    { name: "General Surgery", range: [25, 35] },
    { name: "Neurology", range: [30, 40] },
    { name: "Mental Health / Behavioral Health", range: [30, 40] },
    { name: "Physical Therapy / Rehabilitation", range: [25, 35] },
    { name: "Dermatology", range: [25, 35] },
    { name: "Radiology", range: [25, 35] },
    { name: "Oncology / Hematology", range: [35, 45] },
    { name: "Skilled Nursing Facilities (SNFs)", range: [45, 60] },
    { name: "Home Health / Hospice", range: [40, 50] },
    { name: "Other", range: null },
  ];
    // CCM/RPM Calculator Handlers
    const handleCcmRpmCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        setCcmRpmState((prev) => ({ ...prev, error: null }));
    
        const numChronicPatients = parseInt(ccmRpmState.chronicPatients);
        const numRpmEligiblePatients = parseInt(ccmRpmState.rpmEligiblePatients);
        const ccmEnrollPercent = parseFloat(ccmRpmState.ccmEnrollment);
        const ccmRate = parseFloat(ccmRpmState.ccmReimbursement);
        const rpmEnrollPercent = parseFloat(ccmRpmState.rpmEnrollment);
        const rpmRate = parseFloat(ccmRpmState.rpmReimbursement);
    
        if (
          isNaN(numChronicPatients) ||
          numChronicPatients < 0 ||
          isNaN(numRpmEligiblePatients) ||
          numRpmEligiblePatients < 0 ||
          numRpmEligiblePatients > numChronicPatients
        ) {
          setCcmRpmState((prev) => ({
            ...prev,
            error: "Please enter valid numbers for chronic patients and RPM-eligible patients. RPM-eligible patients cannot exceed total chronic patients.",
          }));
          return;
        }
    
        if (isNaN(ccmEnrollPercent) || ccmEnrollPercent < 0 || ccmEnrollPercent > 100) {
          setCcmRpmState((prev) => ({
            ...prev,
            error: "Please select a valid CCM enrollment percentage (0-100%).",
          }));
          return;
        }
    
        if (isNaN(ccmRate) || ccmRate < 0) {
          setCcmRpmState((prev) => ({
            ...prev,
            error: "Please enter a valid CCM reimbursement rate (positive number).",
          }));
          return;
        }
    
        if (isNaN(rpmEnrollPercent) || rpmEnrollPercent < 0 || rpmEnrollPercent > 100) {
          setCcmRpmState((prev) => ({
            ...prev,
            error: "Please select a valid RPM enrollment percentage (0-100%).",
          }));
          return;
        }
    
        if (isNaN(rpmRate) || rpmRate < 0) {
          setCcmRpmState((prev) => ({
            ...prev,
            error: "Please enter a valid RPM reimbursement rate (positive number).",
          }));
          return;
        }
    
        const ccmEnrolledExact = numChronicPatients * (ccmEnrollPercent / 100);
        const ccmEnrolled = Math.round(ccmEnrolledExact);
        const ccmRevenue = ccmEnrolledExact * ccmRate;
    
        const rpmEnrolledExact = numRpmEligiblePatients * (rpmEnrollPercent / 100);
        const rpmEnrolled = Math.round(rpmEnrolledExact);
        const rpmRevenue = rpmEnrolledExact * rpmRate;
    
        const totalMonthlyRevenue = ccmRevenue + rpmRevenue;
        const totalAnnualRevenue = totalMonthlyRevenue * 12;
    
        setCcmRpmState((prev) => ({
          ...prev,
          result: {
            ccmEnrolled,
            ccmRevenue,
            rpmEnrolled,
            rpmRevenue,
            totalMonthlyRevenue,
            totalAnnualRevenue,
          },
        }));
      };
    
      const handleCcmRpmReset = () => {
        setCcmRpmState({
          chronicPatients: "",
          rpmEligiblePatients: "",
          ccmEnrollment: "",
          ccmReimbursement: "70",
          rpmEnrollment: "",
          rpmReimbursement: "120",
          result: null,
          error: null,
        });
      };
    
      // Prepare data for CCM/RPM bar chart
      const ccmRpmChartData = ccmRpmState.result
        ? [
            { name: "CCM Revenue", value: ccmRpmState.result.ccmRevenue, fill: "#6C5CE7" },
            { name: "RPM Revenue", value: ccmRpmState.result.rpmRevenue, fill: "#3E37A1" },
            { name: "Total Revenue", value: ccmRpmState.result.totalMonthlyRevenue, fill: "#A29BFE" },
          ]
        : [];
          // A/R Days Calculator Handlers
  const handleArDaysCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setArDaysState((prev) => ({ ...prev, error: null }));

    const totalAR = parseFloat(arDaysState.totalAR);
    const monthlyCharges = parseFloat(arDaysState.monthlyCharges);
    const daysInMonth = parseInt(arDaysState.daysInMonth);

    if (isNaN(totalAR) || totalAR < 0) {
      setArDaysState((prev) => ({
        ...prev,
        error: "Please enter a valid Total A/R (positive number).",
      }));
      return;
    }

    if (isNaN(monthlyCharges) || monthlyCharges <= 0) {
      setArDaysState((prev) => ({
        ...prev,
        error: "Please enter a valid Monthly Total Charges (positive number, greater than 0).",
      }));
      return;
    }

    if (arDaysState.specialty === "Other") {
      const lower = parseFloat(arDaysState.customBenchmarkLower);
      const upper = parseFloat(arDaysState.customBenchmarkUpper);
      if (isNaN(lower) || lower < 0 || isNaN(upper) || upper < 0 || lower > upper) {
        setArDaysState((prev) => ({
          ...prev,
          error: "Please enter a valid benchmark range for the custom specialty (positive numbers, lower ≤ upper).",
        }));
        return;
      }
    }

    const arDays = (totalAR / monthlyCharges) * daysInMonth;
    setArDaysState((prev) => ({ ...prev, arDays }));
  };

  const handleArDaysReset = () => {
    setArDaysState({
      totalAR: "",
      monthlyCharges: "",
      daysInMonth: "30",
      specialty: "",
      customSpecialty: "",
      customBenchmarkLower: "",
      customBenchmarkUpper: "",
      arDays: null,
      error: null,
    });
  };

  // A/R Days Benchmark Comparison
  const getArDaysStatus = () => {
    if (!arDaysState.specialty || arDaysState.arDays === null) return null;

    const selectedSpecialty = specialties.find((s) => s.name === arDaysState.specialty);
    let lower, upper;

    if (arDaysState.specialty === "Other") {
      lower = parseFloat(arDaysState.customBenchmarkLower);
      upper = parseFloat(arDaysState.customBenchmarkUpper);
    } else {
      lower = selectedSpecialty?.range?.[0] || 0;
      upper = selectedSpecialty?.range?.[1] || 0;
    }

    if (arDaysState.arDays >= lower && arDaysState.arDays <= upper) {
      return {
        status: "within",
        color: "bg-green-500",
        message: `Great job! Your A/R Days = ${arDaysState.arDays.toFixed(1)}, which is within the standard range (${lower}–${upper}) for ${
          arDaysState.specialty === "Other" ? arDaysState.customSpecialty : arDaysState.specialty
        }.`,
      };
    } else if (arDaysState.arDays < lower) {
      return {
        status: "below",
        color: "bg-blue-500",
        message: `Your A/R Days = ${arDaysState.arDays.toFixed(1)}, which is below the typical range (${lower}–${upper}) for ${
          arDaysState.specialty === "Other" ? arDaysState.customSpecialty : arDaysState.specialty
        }.`,
      };
    } else if (arDaysState.arDays <= upper + 10) {
      return {
        status: "slightly-above",
        color: "bg-yellow-500",
        message: `Your A/R Days = ${arDaysState.arDays.toFixed(1)}, which is slightly above the typical range (${lower}–${upper}) for ${
          arDaysState.specialty === "Other" ? arDaysState.customSpecialty : arDaysState.specialty
        }.`,
      };
    } else {
      return {
        status: "much-higher",
        color: "bg-red-500",
        message: `Your A/R Days = ${arDaysState.arDays.toFixed(1)}, which is above the typical range (${lower}–${upper}) for ${
          arDaysState.specialty === "Other" ? arDaysState.customSpecialty : arDaysState.specialty
        }.`,
      };
    }
  };

  const arDaysStatus = getArDaysStatus();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F5FC] to-[#EEF0FF]">
      <Navbar />

            {/* Banner */}
            <section className="py-32 bg-gradient-to-br from-[#6C5CE7]/20 to-[#F5F5FC] overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl font-extrabold text-[#3E37A1] mb-4 drop-shadow-md">
            Efficiency Calculators
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            Choose a calculator to optimize your practice’s financial efficiency, from CCM/RPM revenue to A/R Days analysis.
          </p>
        </div>
      </section>

      {/* Calculator Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Tabbed Interface */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveCalculator("ccmRpm")}
              className={`px-6 py-2 text-lg font-semibold rounded-md transition duration-300 ${
                activeCalculator === "ccmRpm"
                  ? "bg-[#6C5CE7] text-white shadow-inner"
                  : "bg-gray-200 text-[#3E37A1] hover:bg-gray-300"
              }`}
            >
              CCM/RPM Calculator
            </button>
            <button
              onClick={() => setActiveCalculator("arDays")}
              className={`px-6 py-2 text-lg font-semibold rounded-md transition duration-300 ${
                activeCalculator === "arDays"
                  ? "bg-[#6C5CE7] text-white shadow-inner"
                  : "bg-gray-200 text-[#3E37A1] hover:bg-gray-300"
              }`}
            >
              A/R Days Calculator
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
        {activeCalculator === "ccmRpm" ? (
            // CCM/RPM Calculator
            <>
              <form onSubmit={handleCcmRpmCalculate} className="space-y-6">
                <div>
                  <label htmlFor="chronicPatients" className="block text-sm font-medium text-gray-700">
                    Number of Chronic Patients
                  </label>
                  <Input
                    id="chronicPatients"
                    type="number"
                    value={ccmRpmState.chronicPatients}
                    onChange={(e) => setCcmRpmState((prev) => ({ ...prev, chronicPatients: e.target.value }))}
                    placeholder="e.g., 100"
                    className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    How many patients in your practice have 2+ chronic conditions?
                  </p>
                </div>

                <div>
                  <label htmlFor="rpmEligiblePatients" className="block text-sm font-medium text-gray-700">
                    Number of RPM-Eligible Patients
                  </label>
                  <Input
                    id="rpmEligiblePatients"
                    type="number"
                    value={ccmRpmState.rpmEligiblePatients}
                    onChange={(e) => setCcmRpmState((prev) => ({ ...prev, rpmEligiblePatients: e.target.value }))}
                    placeholder="e.g., 50"
                    className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    How many of these patients would benefit from remote monitoring (e.g., uncontrolled diabetes/hypertension)?
                  </p>
                </div>

                <div>
                  <label htmlFor="ccmEnrollment" className="block text-sm font-medium text-gray-700">
                    Estimated Enrollment % for CCM
                  </label>
                  <select
                    id="ccmEnrollment"
                    value={ccmRpmState.ccmEnrollment}
                    onChange={(e) => setCcmRpmState((prev) => ({ ...prev, ccmEnrollment: e.target.value }))}
                    className="w-full p-2 border rounded-lg bg-white text-gray-800 border-[#6C5CE7]/20 border-2 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                    required
                  >
                    <option value="">Select percentage</option>
                    {Array.from({ length: 20 }, (_, i) => (i + 1) * 5).map((percent) => (
                      <option key={percent} value={percent}>
                        {percent}%
                      </option>
                    ))}
                  </select>
                  <p className="mt-1 text-xs text-gray-500">
                    Some practices effectively enroll 30–50% of eligible patients—others reach 70%+ with strong workflows.
                  </p>
                </div>

                <div>
                  <label htmlFor="ccmReimbursement" className="block text-sm font-medium text-gray-700">
                    CCM Monthly Reimbursement per Patient ($)
                  </label>
                  <Input
                    id="ccmReimbursement"
                    type="number"
                    step="0.01"
                    value={ccmRpmState.ccmReimbursement}
                    onChange={(e) => setCcmRpmState((prev) => ({ ...prev, ccmReimbursement: e.target.value }))}
                    className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Use your local Medicare rate if you know it, or a default like $60–$70 for a ballpark estimate.
                  </p>
                </div>
                <div>
                  <label htmlFor="rpmEnrollment" className="block text-sm font-medium text-gray-700">
                    Estimated Enrollment % for RPM
                  </label>
                  <select
                    id="rpmEnrollment"
                    value={ccmRpmState.rpmEnrollment}
                    onChange={(e) => setCcmRpmState((prev) => ({ ...prev, rpmEnrollment: e.target.value }))}
                    className="w-full p-2 border rounded-lg bg-white text-gray-800 border-[#6C5CE7]/20 border-2 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                    required
                  >
                    <option value="">Select percentage</option>
                    {Array.from({ length: 20 }, (_, i) => (i + 1) * 5).map((percent) => (
                      <option key={percent} value={percent}>
                        {percent}%
                      </option>
                    ))}
                  </select>
                  <p className="mt-1 text-xs text-gray-500">
                    Many practices start with 10–20% of their chronic population, then scale up.
                  </p>
                </div>

                <div>
                  <label htmlFor="rpmReimbursement" className="block text-sm font-medium text-gray-700">
                    RPM Monthly Reimbursement per Patient ($)
                  </label>
                  <Input
                    id="rpmReimbursement"
                    type="number"
                    step="0.01"
                    value={ccmRpmState.rpmReimbursement}
                    onChange={(e) => setCcmRpmState((prev) => ({ ...prev, rpmReimbursement: e.target.value }))}
                    className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Include device supply fees and monthly management codes. $100–$140 is typical.
                  </p>
                </div>

                {ccmRpmState.error && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                    {ccmRpmState.error}
                  </div>
                )}

                <div className="flex space-x-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-[#6C5CE7] text-white font-semibold hover:bg-[#3E37A1] transition duration-300 rounded-lg shadow-md hover:shadow-lg"
                  >
                    Calculate
                  </Button>
                  <Button
                    type="button"
                    onClick={handleCcmRpmReset}
                    className="flex-1 bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition duration-300 rounded-lg shadow-md hover:shadow-lg"
                  >
                    Reset Form
                  </Button>
                </div>
              </form>

              {ccmRpmState.result && (
                <div className="mt-8 p-6 bg-gradient-to-r from-[#F5F5FC] to-[#EEF0FF] rounded-xl shadow-lg border border-[#6C5CE7]/20">
                  <h2 className="text-2xl font-semibold text-[#3E37A1] mb-4 text-center">Your Revenue Estimate</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold text-[#6C5CE7] mb-2">CCM Results</h3>
                      <p className="text-gray-700 flex items-center">
                        <span className="mr-2">👥</span>
                        <strong>Enrolled Patients:</strong> {ccmRpmState.result.ccmEnrolled}
                      </p>
                      <p className="text-gray-700 flex items-center">
                        <span className="mr-2">$</span>
                        <strong>Monthly Revenue:</strong> ${ccmRpmState.result.ccmRevenue.toFixed(2)}
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold text-[#6C5CE7] mb-2">RPM Results</h3>
                      <p className="text-gray-700 flex items-center">
                        <span className="mr-2">👥</span>
                        <strong>Enrolled Patients:</strong> {ccmRpmState.result.rpmEnrolled}
                      </p>
                      <p className="text-gray-700 flex items-center">
                        <span className="mr-2">$</span>
                        <strong>Monthly Revenue:</strong> ${ccmRpmState.result.rpmRevenue.toFixed(2)}
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold text-[#6C5CE7] mb-2">Total Monthly Revenue</h3>
                      <p className="text-gray-700 flex items-center">
                        <span className="mr-2">$</span>
                        <strong>Gross:</strong> ${ccmRpmState.result.totalMonthlyRevenue.toFixed(2)}
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold text-[#6C5CE7] mb-2">Total Annual Revenue</h3>
                      <p className="text-gray-700 flex items-center">
                        <span className="mr-2">$</span>
                        <strong>Gross:</strong> ${ccmRpmState.result.totalAnnualRevenue.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-[#3E37A1] mb-2 text-center">Revenue Breakdown</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={ccmRpmChartData} margin={{ top: 20, right: 20, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                          <XAxis dataKey="name" stroke="#3E37A1" />
                          <YAxis stroke="#3E37A1" label={{ value: "Revenue ($)", angle: -90, position: "insideLeft", offset: -10 }} />
                          <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
                          <Bar dataKey="value" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="mt-6 text-sm text-gray-600">
                    <h3 className="font-semibold text-[#3E37A1] mb-2">Disclaimers & Guidance</h3>
                    <p>
                      <strong>Varying Payer Rates:</strong> Exact reimbursement may differ by geographic region, payer, and plan type.
                    </p>
                    <p>
                      <strong>Enrollment Reality:</strong> Not every eligible patient will opt-in; actual results depend on patient outreach, staff capacity, and continuity of care.
                    </p>
                    <p className="mt-2">
                      <strong>Tip:</strong> Try adjusting your enrollment % to see how small changes can significantly increase revenue.
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            // A/R Days Calculator
            <>
              <form onSubmit={handleArDaysCalculate} className="space-y-6">
                <div>
                  <label htmlFor="totalAR" className="block text-sm font-medium text-gray-700">
                    Total A/R (Ending Balance) ($)
                  </label>
                  <Input
                    id="totalAR"
                    type="number"
                    step="0.01"
                    value={arDaysState.totalAR}
                    onChange={(e) => setArDaysState((prev) => ({ ...prev, totalAR: e.target.value }))}
                    placeholder="e.g., 10000"
                    className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    The total dollar amount of all claims and patient balances still outstanding at the end of the month.
                  </p>
                </div>

                <div>
                  <label htmlFor="monthlyCharges" className="block text-sm font-medium text-gray-700">
                    Monthly Total Charges ($)
                  </label>
                  <Input
                    id="monthlyCharges"
                    type="number"
                    step="0.01"
                    value={arDaysState.monthlyCharges}
                    onChange={(e) => setArDaysState((prev) => ({ ...prev, monthlyCharges: e.target.value }))}
                    placeholder="e.g., 50000"
                    className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    The total gross charges you billed during the same month.
                  </p>
                </div>
                <div>
                  <label htmlFor="daysInMonth" className="block text-sm font-medium text-gray-700">
                    Number of Days in Month
                  </label>
                  <select
                    id="daysInMonth"
                    value={arDaysState.daysInMonth}
                    onChange={(e) => setArDaysState((prev) => ({ ...prev, daysInMonth: e.target.value }))}
                    className="w-full p-2 border rounded-lg bg-white text-gray-800 border-[#6C5CE7]/20 border-2 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                  >
                    <option value="30">30 (Default)</option>
                    <option value="31">31</option>
                  </select>
                  <p className="mt-1 text-xs text-gray-500">
                    Select the number of days in the month for your calculation.
                  </p>
                </div>

                <div>
                  <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">
                    Specialty (Optional)
                  </label>
                  <select
                    id="specialty"
                    value={arDaysState.specialty}
                    onChange={(e) => setArDaysState((prev) => ({ ...prev, specialty: e.target.value }))}
                    className="w-full p-2 border rounded-lg bg-white text-gray-800 border-[#6C5CE7]/20 border-2 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                  >
                    <option value="">Select Specialty</option>
                    {specialties.map((specialty) => (
                      <option key={specialty.name} value={specialty.name}>
                        {specialty.name}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1 text-xs text-gray-500">
                    Select your practice’s specialty to compare your A/R Days to industry benchmarks.
                  </p>
                </div>

                {arDaysState.specialty === "Other" && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="customSpecialty" className="block text-sm font-medium text-gray-700">
                        Custom Specialty Name
                      </label>
                      <Input
                        id="customSpecialty"
                        type="text"
                        value={arDaysState.customSpecialty}
                        onChange={(e) => setArDaysState((prev) => ({ ...prev, customSpecialty: e.target.value }))}
                        placeholder="e.g., Custom Specialty"
                        className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                        required
                      />
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <label htmlFor="customBenchmarkLower" className="block text-sm font-medium text-gray-700">
                          Benchmark Lower Bound (Days)
                        </label>
                        <Input
                          id="customBenchmarkLower"
                          type="number"
                          value={arDaysState.customBenchmarkLower}
                          onChange={(e) => setArDaysState((prev) => ({ ...prev, customBenchmarkLower: e.target.value }))}
                          placeholder="e.g., 25"
                          className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                          required
                        />
                      </div>
                      <div className="flex-1">
                        <label htmlFor="customBenchmarkUpper" className="block text-sm font-medium text-gray-700">
                          Benchmark Upper Bound (Days)
                        </label>
                        <Input
                          id="customBenchmarkUpper"
                          type="number"
                          value={arDaysState.customBenchmarkUpper}
                          onChange={(e) => setArDaysState((prev) => ({ ...prev, customBenchmarkUpper: e.target.value }))}
                          placeholder="e.g., 35"
                          className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {arDaysState.error && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                    {arDaysState.error}
                  </div>
                )}

                <div className="flex space-x-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-[#6C5CE7] text-white font-semibold hover:bg-[#3E37A1] transition duration-300 rounded-lg shadow-md hover:shadow-lg"
                  >
                    Calculate
                  </Button>
                  <Button
                    type="button"
                    onClick={handleArDaysReset}
                    className="flex-1 bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition duration-300 rounded-lg shadow-md hover:shadow-lg"
                  >
                    Reset Form
                  </Button>
                </div>
              </form>
              {arDaysState.arDays !== null && (
                <div className="mt-8 p-6 bg-gradient-to-r from-[#F5F5FC] to-[#EEF0FF] rounded-xl shadow-lg border border-[#6C5CE7]/20">
                  <h2 className="text-2xl font-semibold text-[#3E37A1] mb-4 text-center">Your A/R Days Result</h2>

                  <div className="text-center">
                    <p className="text-4xl font-bold text-[#6C5CE7] mb-2">{arDaysState.arDays.toFixed(1)}</p>
                    <p className="text-gray-700">Days</p>
                  </div>

                  {arDaysStatus && (
                    <>
                      <p className="mt-4 text-gray-700 text-center">{arDaysStatus.message}</p>
                      <div className="mt-4 flex justify-center">
                        <div className={`h-4 w-32 rounded-full ${arDaysStatus.color}`}></div>
                      </div>
                    </>
                  )}

                  <div className="mt-6 text-sm text-gray-600 text-center">
                    <p>
                      Interested in advanced A/R tracking and analytics?{" "}
                      <Link href="/contact" className="text-[#6C5CE7] hover:underline">
                        Contact us
                      </Link>{" "}
                      to learn how our subscription plans can help your practice thrive.
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

