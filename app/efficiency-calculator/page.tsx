"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import Link from "next/link";

export default function EfficiencyCalculatorPage() {
  // State for calculator selection
  const [activeCalculator, setActiveCalculator] = useState<"billingEfficiency" | "claimDenial" | "arDays" | "ccmRpmRevenue">("billingEfficiency");

  // State for CCM/RPM Revenue Calculator
  const [ccmRpmState, setCcmRpmState] = useState({
    chronicPatients: "",
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

  // State for Claim Denial Impact Calculator
  const [claimDenialState, setClaimDenialState] = useState({
    totalMonthlyClaims: "1000", // Added new field
    claimDenials: "100",
    avgReimbursement: "200",
    reworkCost: "27",
    result: null as {
      lostRevenue: number;
      reworkCosts: number;
      totalImpact: number;
    } | null,
    error: null as string | null,
  });

  // State for Billing Efficiency ROI Calculator
  const [billingEfficiencyState, setBillingEfficiencyState] = useState({
    monthlyClaims: "",
    avgChargePerClaim: "",
    totalCollections: "",
    billingMethod: "inHouse" as "inHouse" | "outsourced",
    currentBillingCost: "",
    collectionPercentage: "",
    result: null as {
      monthlyBilled: number;
      currentCollectionRate: number;
      annualCollections: number;
      currentBillingCostPercentage: number;
      targetCollections: number;
      targetBillingCost: number;
      additionalRevenue: number;
      annualAdditionalRevenue: number;
      monthlyBillingCostSavings: number;
      annualBillingCostSavings: number;
      monthlyROI: number;
      annualROI: number;
    } | null,
    error: null as string | null,
  });

  // Specialty options with benchmarks for A/R Days Calculator
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

  // CCM/RPM Revenue Calculator Handlers
  const handleCcmRpmCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCcmRpmState((prev) => ({ ...prev, error: null }));

    const numChronicPatients = parseInt(ccmRpmState.chronicPatients);
    const ccmEnrollPercent = parseFloat(ccmRpmState.ccmEnrollment);
    const ccmRate = parseFloat(ccmRpmState.ccmReimbursement);
    const rpmEnrollPercent = parseFloat(ccmRpmState.rpmEnrollment);
    const rpmRate = parseFloat(ccmRpmState.rpmReimbursement);

    if (isNaN(numChronicPatients) || numChronicPatients < 0) {
      setCcmRpmState((prev) => ({
        ...prev,
        error: "Please enter a valid number for chronic patients (positive number).",
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

    const rpmEnrolledExact = numChronicPatients * (rpmEnrollPercent / 100);
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

  // Claim Denial Impact Calculator Handlers
  const handleClaimDenialCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setClaimDenialState((prev) => ({ ...prev, error: null }));

    const totalMonthlyClaims = parseInt(claimDenialState.totalMonthlyClaims);
    const claimDenials = parseInt(claimDenialState.claimDenials);
    const avgReimbursement = parseFloat(claimDenialState.avgReimbursement);
    const reworkCost = parseFloat(claimDenialState.reworkCost);

    if (isNaN(totalMonthlyClaims) || totalMonthlyClaims <= 0) {
      setClaimDenialState((prev) => ({
        ...prev,
        error: "Please enter a valid number of total monthly claims (positive number greater than 0).",
      }));
      return;
    }

    if (isNaN(claimDenials) || claimDenials < 0) {
      setClaimDenialState((prev) => ({
        ...prev,
        error: "Please enter a valid number of claim denials (positive number).",
      }));
      return;
    }

    if (claimDenials > totalMonthlyClaims) {
      setClaimDenialState((prev) => ({
        ...prev,
        error: "Number of claim denials cannot exceed total monthly claims.",
      }));
      return;
    }

    if (isNaN(avgReimbursement) || avgReimbursement < 0) {
      setClaimDenialState((prev) => ({
        ...prev,
        error: "Please enter a valid average reimbursement amount (positive number).",
      }));
      return;
    }

    if (isNaN(reworkCost) || reworkCost < 0) {
      setClaimDenialState((prev) => ({
        ...prev,
        error: "Please enter a valid rework cost (positive number).",
      }));
      return;
    }

    const lostRevenue = claimDenials * avgReimbursement;
    const reworkCosts = claimDenials * reworkCost;
    const totalImpact = lostRevenue + reworkCosts;

    setClaimDenialState((prev) => ({
      ...prev,
      result: {
        lostRevenue,
        reworkCosts,
        totalImpact,
      },
    }));
  };

  const handleClaimDenialReset = () => {
    setClaimDenialState({
      totalMonthlyClaims: "1000",
      claimDenials: "100",
      avgReimbursement: "200",
      reworkCost: "27",
      result: null,
      error: null,
    });
  };

  // Prepare data for Claim Denial Impact pie chart
  const claimDenialChartData = claimDenialState.result
    ? [
        { name: "Lost Revenue", value: claimDenialState.result.lostRevenue, fill: "#6C5CE7" },
        { name: "Rework Costs", value: claimDenialState.result.reworkCosts, fill: "#3E37A1" },
      ]
    : [];

  // Billing Efficiency ROI Calculator Handlers
  const handleBillingEfficiencyCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setBillingEfficiencyState((prev) => ({ ...prev, error: null }));

    const monthlyClaims = parseInt(billingEfficiencyState.monthlyClaims);
    const avgChargePerClaim = parseFloat(billingEfficiencyState.avgChargePerClaim);
    const totalCollections = parseFloat(billingEfficiencyState.totalCollections);
    const currentBillingCost =
      billingEfficiencyState.billingMethod === "inHouse"
        ? parseFloat(billingEfficiencyState.currentBillingCost)
        : (parseFloat(billingEfficiencyState.collectionPercentage) / 100) * totalCollections;

    if (isNaN(monthlyClaims) || monthlyClaims < 0) {
      setBillingEfficiencyState((prev) => ({
        ...prev,
        error: "Please enter a valid number of monthly claims (positive number).",
      }));
      return;
    }

    if (isNaN(avgChargePerClaim) || avgChargePerClaim < 0) {
      setBillingEfficiencyState((prev) => ({
        ...prev,
        error: "Please enter a valid average charge per claim (positive number).",
      }));
      return;
    }

    if (isNaN(totalCollections) || totalCollections < 0) {
      setBillingEfficiencyState((prev) => ({
        ...prev,
        error: "Please enter a valid total monthly collections (positive number).",
      }));
      return;
    }

    if (isNaN(currentBillingCost) || currentBillingCost < 0) {
      setBillingEfficiencyState((prev) => ({
        ...prev,
        error: "Please enter a valid billing cost or collection percentage (positive number).",
      }));
      return;
    }

    if (billingEfficiencyState.billingMethod === "outsourced") {
      const collectionPercentage = parseFloat(billingEfficiencyState.collectionPercentage);
      if (collectionPercentage < 0 || collectionPercentage > 100) {
        setBillingEfficiencyState((prev) => ({
          ...prev,
          error: "Please enter a valid collection percentage (0-100%).",
        }));
        return;
      }
    }

    // Step 1: Compute Key Values
    const monthlyBilled = monthlyClaims * avgChargePerClaim;
    const currentCollectionRate = (totalCollections / monthlyBilled) * 100;
    const annualCollections = totalCollections * 12;
    const currentBillingCostPercentage = (currentBillingCost / totalCollections) * 100;

    // Step 2: Calculate Benchmark (Target) Results
    const targetCollectionRate = 98;
    const targetBillingCostRate = 6;
    const targetCollections = monthlyBilled * (targetCollectionRate / 100);
    const targetBillingCost = targetCollections * (targetBillingCostRate / 100);

    // Step 3: Determine Efficiency Gains
    const additionalRevenue = targetCollections - totalCollections;
    const annualAdditionalRevenue = additionalRevenue * 12;
    const monthlyBillingCostSavings = currentBillingCost - targetBillingCost;
    const annualBillingCostSavings = monthlyBillingCostSavings * 12;

    const monthlyROI = ((additionalRevenue + monthlyBillingCostSavings) / currentBillingCost) * 100;
    const annualROI = monthlyROI; // Since the formula scales linearly

    setBillingEfficiencyState((prev) => ({
      ...prev,
      result: {
        monthlyBilled,
        currentCollectionRate,
        annualCollections,
        currentBillingCostPercentage,
        targetCollections,
        targetBillingCost,
        additionalRevenue,
        annualAdditionalRevenue,
        monthlyBillingCostSavings,
        annualBillingCostSavings,
        monthlyROI,
        annualROI,
      },
    }));
  };

  const handleBillingEfficiencyReset = () => {
    setBillingEfficiencyState({
      monthlyClaims: "",
      avgChargePerClaim: "",
      totalCollections: "",
      billingMethod: "inHouse",
      currentBillingCost: "",
      collectionPercentage: "",
      result: null,
      error: null,
    });
  };

  // Prepare data for Billing Efficiency bar chart
  const billingEfficiencyChartData = billingEfficiencyState.result
    ? [
        { name: "Current Collections", value: billingEfficiencyState.result.annualCollections, fill: "#6C5CE7" },
        { name: "Target Collections", value: billingEfficiencyState.result.targetCollections * 12, fill: "#3E37A1" },
        { name: "Additional Revenue", value: billingEfficiencyState.result.annualAdditionalRevenue, fill: "#A29BFE" },
      ]
    : [];

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
            Choose a calculator to optimize your practice’s financial efficiency, from billing efficiency to CCM/RPM revenue analysis.
          </p>
        </div>
      </section>

      {/* Calculator Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Tabbed Interface */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap bg-gray-100 rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveCalculator("billingEfficiency")}
              className={`px-6 py-2 text-lg font-semibold rounded-md transition duration-300 ${
                activeCalculator === "billingEfficiency"
                  ? "bg-[#6C5CE7] text-white shadow-inner"
                  : "bg-gray-200 text-[#3E37A1] hover:bg-gray-300"
              }`}
            >
              Billing Efficiency ROI
            </button>
            <button
              onClick={() => setActiveCalculator("claimDenial")}
              className={`px-6 py-2 text-lg font-semibold rounded-md transition duration-300 ${
                activeCalculator === "claimDenial"
                  ? "bg-[#6C5CE7] text-white shadow-inner"
                  : "bg-gray-200 text-[#3E37A1] hover:bg-gray-300"
              }`}
            >
              Claim Denial Impact
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
            <button
              onClick={() => setActiveCalculator("ccmRpmRevenue")}
              className={`px-6 py-2 text-lg font-semibold rounded-md transition duration-300 ${
                activeCalculator === "ccmRpmRevenue"
                  ? "bg-[#6C5CE7] text-white shadow-inner"
                  : "bg-gray-200 text-[#3E37A1] hover:bg-gray-300"
              }`}
            >
              CCM/RPM Revenue
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
          {activeCalculator === "billingEfficiency" ? (
            // Billing Efficiency ROI Calculator
            <>
              <form onSubmit={handleBillingEfficiencyCalculate} className="space-y-6">
                <div>
                  <label htmlFor="monthlyClaims" className="block text-sm font-medium text-gray-700">
                    Number of Monthly Claims
                  </label>
                  <Input
                    id="monthlyClaims"
                    type="number"
                    value={billingEfficiencyState.monthlyClaims}
                    onChange={(e) => setBillingEfficiencyState((prev) => ({ ...prev, monthlyClaims: e.target.value }))}
                    placeholder="e.g., 1000"
                    className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Enter the number of claims processed per month.
                  </p>
                </div>

                <div>
                  <label htmlFor="avgChargePerClaim" className="block text-sm font-medium text-gray-700">
                    Average Charge per Claim ($)
                  </label>
                  <Input
                    id="avgChargePerClaim"
                    type="number"
                    step="0.01"
                    value={billingEfficiencyState.avgChargePerClaim}
                    onChange={(e) => setBillingEfficiencyState((prev) => ({ ...prev, avgChargePerClaim: e.target.value }))}
                    placeholder="e.g., 200"
                    className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Enter your average charge per claim (in dollars).
                  </p>
                </div>

                <div>
                  <label htmlFor="totalCollections" className="block text-sm font-medium text-gray-700">
                    Total Collections Received (Monthly) ($)
                  </label>
                  <Input
                    id="totalCollections"
                    type="number"
                    step="0.01"
                    value={billingEfficiencyState.totalCollections}
                    onChange={(e) => setBillingEfficiencyState((prev) => ({ ...prev, totalCollections: e.target.value }))}
                    placeholder="e.g., 150000"
                    className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Enter your total monthly collections (in dollars).
                  </p>
                </div>

                <div>
                  <label htmlFor="billingMethod" className="block text-sm font-medium text-gray-700">
                    Billing Method
                  </label>
                  <select
                    id="billingMethod"
                    value={billingEfficiencyState.billingMethod}
                    onChange={(e) =>
                      setBillingEfficiencyState((prev) => ({
                        ...prev,
                        billingMethod: e.target.value as "inHouse" | "outsourced",
                        currentBillingCost: "",
                        collectionPercentage: "",
                      }))
                    }
                    className="w-full p-2 border rounded-lg bg-white text-gray-800 border-[#6C5CE7]/20 border-2 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                    required
                  >
                    <option value="inHouse">In-House Billing</option>
                    <option value="outsourced">Outsourced Billing</option>
                  </select>
                  <p className="mt-1 text-xs text-gray-500">
                    Select your current billing method.
                  </p>
                </div>

                {billingEfficiencyState.billingMethod === "inHouse" ? (
                  <div>
                    <label htmlFor="currentBillingCost" className="block text-sm font-medium text-gray-700">
                      Current Monthly Billing Cost (In-House) ($)
                    </label>
                    <Input
                      id="currentBillingCost"
                      type="number"
                      step="0.01"
                      value={billingEfficiencyState.currentBillingCost}
                      onChange={(e) => setBillingEfficiencyState((prev) => ({ ...prev, currentBillingCost: e.target.value }))}
                      placeholder="e.g., 5000"
                      className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                      required
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Enter your current monthly billing cost (admin, labor, etc.).
                    </p>
                  </div>
                ) : (
                  <div>
                    <label htmlFor="collectionPercentage" className="block text-sm font-medium text-gray-700">
                      Percentage of Collections for Outsourced Billing (%)
                    </label>
                    <Input
                      id="collectionPercentage"
                      type="number"
                      step="0.01"
                      value={billingEfficiencyState.collectionPercentage}
                      onChange={(e) => setBillingEfficiencyState((prev) => ({ ...prev, collectionPercentage: e.target.value }))}
                      placeholder="e.g., 8"
                      className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                      required
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Enter the percentage of collections paid to your billing service.
                    </p>
                  </div>
                )}

                {billingEfficiencyState.error && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                    {billingEfficiencyState.error}
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
                    onClick={handleBillingEfficiencyReset}
                    className="flex-1 bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition duration-300 rounded-lg shadow-md hover:shadow-lg"
                  >
                    Reset Form
                  </Button>
                </div>
              </form>

              {billingEfficiencyState.result && (
                <div className="mt-8 p-6 bg-gradient-to-r from-[#F5F5FC] to-[#EEF0FF] rounded-xl shadow-lg border border-[#6C5CE7]/20">
                  <h2 className="text-2xl font-semibold text-[#3E37A1] mb-4 text-center">Billing Efficiency ROI</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-[#6C5CE7] mb-2">Monthly Figures</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-white rounded-lg shadow-md">
                          <p className="text-gray-700"><strong>Monthly Billed Amount:</strong> ${billingEfficiencyState.result.monthlyBilled.toFixed(2)}</p>
                          <p className="text-gray-700"><strong>Total Collections Received:</strong> ${billingEfficiencyState.result.annualCollections.toFixed(2)}</p>
                          <p className="text-gray-700"><strong>Current Collection Rate:</strong> {billingEfficiencyState.result.currentCollectionRate.toFixed(2)}%</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-md">
                          <p className="text-gray-700"><strong>Target Monthly Collections (98%):</strong> ${billingEfficiencyState.result.targetCollections.toFixed(2)}</p>
                          <p className="text-gray-700"><strong>Additional Monthly Revenue:</strong> ${billingEfficiencyState.result.additionalRevenue.toFixed(2)}</p>
                          <p className="text-gray-700"><strong>Monthly ROI:</strong> {billingEfficiencyState.result.monthlyROI.toFixed(2)}%</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-md">
                          <p className="text-gray-700"><strong>Current Monthly Billing Cost:</strong> ${(billingEfficiencyState.billingMethod === "inHouse"
                            ? parseFloat(billingEfficiencyState.currentBillingCost)
                            : (parseFloat(billingEfficiencyState.collectionPercentage) / 100) * parseFloat(billingEfficiencyState.totalCollections)).toFixed(2)}</p>
                          <p className="text-gray-700"><strong>Target Monthly Billing Cost (6%):</strong> ${billingEfficiencyState.result.targetBillingCost.toFixed(2)}</p>
                          <p className="text-gray-700"><strong>Monthly Billing Cost Savings:</strong> ${billingEfficiencyState.result.monthlyBillingCostSavings.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#6C5CE7] mb-2">Annual Figures</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-white rounded-lg shadow-md">
                          <p className="text-gray-700"><strong>Annual Collections (Current):</strong> ${(billingEfficiencyState.result.annualCollections).toFixed(2)}</p>
                          <p className="text-gray-700"><strong>Target Annual Collections (98%):</strong> ${(billingEfficiencyState.result.targetCollections * 12).toFixed(2)}</p>
                          <p className="text-gray-700"><strong>Additional Annual Revenue:</strong> ${billingEfficiencyState.result.annualAdditionalRevenue.toFixed(2)}</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-md">
                          <p className="text-gray-700"><strong>Annual Billing Cost Savings:</strong> ${billingEfficiencyState.result.annualBillingCostSavings.toFixed(2)}</p>
                          <p className="text-gray-700"><strong>Overall Annual ROI:</strong> {billingEfficiencyState.result.annualROI.toFixed(2)}%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-[#3E37A1] mb-2 text-center">Revenue Comparison</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={billingEfficiencyChartData} margin={{ top: 20, right: 20, left: 20, bottom: 5 }}>
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
                    <h3 className="font-semibold text-[#3E37A1] mb-2">Recommendation</h3>
                    <p>
                      Your current performance indicates a collection rate of {billingEfficiencyState.result.currentCollectionRate.toFixed(2)}%. By aligning with our benchmark (98% collection rate and 6% billing cost), you could unlock an additional ${billingEfficiencyState.result.additionalRevenue.toFixed(2)} each month (or ${billingEfficiencyState.result.annualAdditionalRevenue.toFixed(2)} annually) in revenue.
                    </p>
                    <p className="mt-2">
                      <Link href="/contact" className="text-[#6C5CE7] hover:underline">
                        Contact us for a free consultation
                      </Link>{" "}
                      to learn how AccurusBill can help optimize your billing process and boost your revenue.
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : activeCalculator === "claimDenial" ? (
            // Claim Denial Impact Calculator
            <>
              <form onSubmit={handleClaimDenialCalculate} className="space-y-6">
                <div>
                  <label htmlFor="totalMonthlyClaims" className="block text-sm font-medium text-gray-700">
                    Total Monthly Claims
                  </label>
                  <Input
                    id="totalMonthlyClaims"
                    type="number"
                    value={claimDenialState.totalMonthlyClaims}
                    onChange={(e) => setClaimDenialState((prev) => ({ ...prev, totalMonthlyClaims: e.target.value }))}
                    placeholder="e.g., 1000"
                    className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Enter the total number of claims submitted each month (default: 1000).
                  </p>
                </div>

                <div>
                  <label htmlFor="claimDenials" className="block text-sm font-medium text-gray-700">
                    Number of Claim Denials per Month
                  </label>
                  <Input
                    id="claimDenials"
                    type="number"
                    value={claimDenialState.claimDenials}
                    onChange={(e) => setClaimDenialState((prev) => ({ ...prev, claimDenials: e.target.value }))}
                    placeholder="e.g., 100"
                    className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Enter the total number of claims denied each month (default: 100).
                  </p>
                </div>

                <div>
                  <label htmlFor="avgReimbursement" className="block text-sm font-medium text-gray-700">
                    Average Reimbursement per Claim ($)
                  </label>
                  <Input
                    id="avgReimbursement"
                    type="number"
                    step="0.01"
                    value={claimDenialState.avgReimbursement}
                    onChange={(e) => setClaimDenialState((prev) => ({ ...prev, avgReimbursement: e.target.value }))}
                    placeholder="e.g., 200"
                    className="border-[#6C5CE7]/20 rounded-lg border-2 bg-white/90 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7]/50"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Enter the average revenue per claim (default: $200, typical range: $150–$250).
                  </p>
                </div>

                <div>
                  <label htmlFor="reworkCost" className="block text-sm font-medium text-gray-700">
                    Average Cost to Rework Each Denied Claim ($)
                  </label>
                  <Input
                    id="reworkCost"
                    type="number"
                    step="0.01"
                    value={claimDenialState.reworkCost}
                    disabled
                    className="border-[#6C5CE7]/20 rounded-lg border-2 bg-gray-100 shadow-sm"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Fixed at $27, reflecting typical administrative and labor costs.
                  </p>
                </div>

                {claimDenialState.error && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                    {claimDenialState.error}
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
                    onClick={handleClaimDenialReset}
                    className="flex-1 bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition duration-300 rounded-lg shadow-md hover:shadow-lg"
                  >
                    Reset Form
                  </Button>
                </div>
              </form>

              {claimDenialState.result && (
                <div className="mt-8 p-6 bg-gradient-to-r from-[#F5F5FC] to-[#EEF0FF] rounded-xl shadow-lg border border-[#6C5CE7]/20">
                  <h2 className="text-2xl font-semibold text-[#3E37A1] mb-4 text-center">Claim Denial Impact</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold text-[#6C5CE7] mb-2">Estimated Lost Revenue per Month</h3>
                      <p className="text-gray-700 flex items-center">
                        <span className="mr-2">$</span>
                        <strong>${claimDenialState.result.lostRevenue.toFixed(2)}</strong>
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <h3 className="text-lg font-semibold text-[#6C5CE7] mb-2">Estimated Rework Costs per Month</h3>
                      <p className="text-gray-700 flex items-center">
                        <span className="mr-2">$</span>
                        <strong>${claimDenialState.result.reworkCosts.toFixed(2)}</strong>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Reflects administrative and labor expenses.
                      </p>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-md col-span-2">
                      <h3 className="text-lg font-semibold text-[#6C5CE7] mb-2">Total Monthly Financial Impact</h3>
                      <p className="text-2xl font-bold text-[#3E37A1] flex items-center justify-center">
                        <span className="mr-2">$</span>
                        ${claimDenialState.result.totalImpact.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-[#3E37A1] mb-2 text-center">Cost Breakdown</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={claimDenialChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {claimDenialChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="mt-6 text-sm text-gray-600">
                    <h3 className="font-semibold text-[#3E37A1] mb-2">Benchmarks & Recommendations</h3>
                    <p>
                      <strong>Claim Denial Rate:</strong> Ideal: &lt;5%, Common: 5–10%. Your rate is approximately{" "}
                      {((parseInt(claimDenialState.claimDenials) / parseInt(claimDenialState.totalMonthlyClaims)) * 100).toFixed(2)}% (based on {claimDenialState.totalMonthlyClaims} claims/month).
                    </p>
                    {parseInt(claimDenialState.claimDenials) / parseInt(claimDenialState.totalMonthlyClaims) > 0.07 && (
                      <p className="mt-2">
                        <strong>Recommendation:</strong> Your denial rate is above 7%. Conduct a root cause analysis or{" "}
                        <Link href="/contact" className="text-[#6C5CE7] hover:underline">
                          contact AccurusBill
                        </Link>{" "}
                        for immediate support.
                      </p>
                    )}
                    <p className="mt-2">
                      <strong>Average Reimbursement:</strong> Typical range: $150–$250. Your input: ${claimDenialState.avgReimbursement}.
                    </p>
                    <p className="mt-2">
                      <strong>Rework Cost:</strong> Benchmark: $25. Your cost: $27.
                    </p>
                    {parseFloat(claimDenialState.reworkCost) > 25 && (
                      <p className="mt-2">
                        <strong>Recommendation:</strong> Your rework cost is higher than the benchmark. Streamline workflows or{" "}
                        <Link href="/contact" className="text-[#6C5CE7] hover:underline">
                          contact AccurusBill
                        </Link>{" "}
                        for support.
                      </p>
                    )}
                    {claimDenialState.result.lostRevenue > 10000 && (
                      <p className="mt-2">
                        <strong>Recommendation:</strong> Your lost revenue is substantial. Explore outsourcing RCM with{" "}
                        <Link href="/contact" className="text-[#6C5CE7] hover:underline">
                          AccurusBill
                        </Link>{" "}
                        to reduce denials.
                      </p>
                    )}
                    {(parseInt(claimDenialState.claimDenials) / parseInt(claimDenialState.totalMonthlyClaims) <= 0.07 &&
                      parseFloat(claimDenialState.reworkCost) <= 25 &&
                      claimDenialState.result.lostRevenue <= 10000) && (
                      <p className="mt-2">
                        <strong>Great Job!</strong> Your metrics are within or better than industry benchmarks. For further optimization,{" "}
                        <Link href="/contact" className="text-[#6C5CE7] hover:underline">
                          contact AccurusBill
                        </Link>{" "}
                        for a free consultation.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : activeCalculator === "arDays" ? (
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
          ) : (
            // CCM/RPM Revenue Calculator
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
          )}
        </div>
      </div>
    </div>
  );
}
