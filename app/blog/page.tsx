"use client";

import { Navbar } from "@/components/Navbar";
import { FaArrowLeft, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaCheck, FaUser, FaFileAlt, FaClock, FaCode, FaShieldAlt, FaNetworkWired, FaCopy } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";

// Define types for blog post data
type BlogPost = {
  title: string;
  description: string;
  date: string;
  image: string;
  content: string;
};

// Blog post data (in a real app, this would come from a CMS or database)
const blogPosts: Record<string, BlogPost> = {
  "7-overlooked-mistakes-medical-billing-denials": {
    title: "7 Overlooked Mistakes That Lead to Medical Billing Denials",
    description: "Discover 7 commonly overlooked billing errors that lead to costly claim denials—and learn how to prevent them to boost cash flow and clean claim rates.",
    date: "April 02, 2025",
    image: "/images/dn1.jpg",
    content: `
Imagine losing millions in revenue - not because of poor care, but because of preventable billing errors. Medical billing denials are a silent revenue killer, with 10–15% of claims denied on first submission and 73% of providers seeing a spike in denials over the past two years. The cost? A staggering $19.7 billion annually in administrative expenses for hospitals alone, not to mention the impact on patient trust and staff morale. The good news: most denials can be stopped before they start. Let’s explore seven critical mistakes that sabotage your claims—and how to fix them for a healthier revenue cycle.

Mistake 1: Patient Data Errors That Derail Claims
A misspelled name, an outdated address, or a wrong insurance ID—small mistakes that lead to big denials. Data errors at registration are the top cause of claim rejections, with 45% of healthcare leaders pointing to inaccurate patient info as a primary culprit.
The Fix: Verify patient details at every visit using real-time eligibility tools. Train staff to double-check demographics with a standardized checklist. Empower patients to confirm their info via digital check-in portals.

Mistake 2: Missing Documentation and Prior Authorizations
A claim for an MRI gets denied because the prior authorization was never secured. Or clinical notes are missing, failing to prove medical necessity. Over 40% of denials stem from prior auth issues, according to MGMA.
The Fix: Build a payer-specific documentation checklist for every claim. Automate prior auth checks within your scheduling system. Ensure clinical staff and billers collaborate to include all required records.

Mistake 3: Missing the Filing Deadline
A claim sits in a backlog and misses the payer’s 90-day filing window, resulting in a denial you can’t appeal. Timely filing denials are 100% preventable, yet they cost practices millions each year.
The Fix: Submit claims within 48 hours of service—make it a non-negotiable goal. Use your practice management system to flag unbilled claims daily. Set automated alerts for claims nearing their filing deadline.

Mistake 4: Coding Errors That Trigger Rejections
An outdated CPT code or a mismatched diagnosis code leads to a denial for “invalid procedure.” Coding errors are a top technical reason for denials, with 56% of audits finding mistakes.
The Fix: Keep coders updated with annual training on ICD-10 and CPT changes. Use claim scrubbing software to catch errors before submission. Encourage coders to query providers when documentation is unclear.

Mistake 5: Ignoring Coverage Limits and Eligibility
A patient exceeds their 20-session therapy limit, and the 21st claim is denied. Or their policy lapsed, but no one checked. Eligibility issues are a growing cause of denials as plans become more restrictive.
The Fix: Verify coverage limits and active status before every encounter. Use real-time eligibility APIs to flag benefit caps or lapsed policies. Communicate with patients about potential out-of-pocket costs early.

Mistake 6: Skipping Prior Authorizations and Out-of-Network Checks
A procedure requires prior auth, but it’s missed, leading to a denial. Or a patient is sent to an out-of-network lab, and the claim is rejected. These errors account for over 40% of denials in 2023.
The Fix: Embed prior auth checks into your scheduling workflow. Verify network status for all referrals and inform patients of risks. Seek pre-approvals or network gap exceptions when needed.

Mistake 7: Duplicate Claims and Data Entry Mishaps
A claim is submitted twice by mistake, flagged as a duplicate (CO-18), and denied. Or a typo in the service date creates confusion. These clerical errors are small but costly in high-volume settings.
The Fix: Enable duplicate detection in your billing software. Standardize data entry with automated validations for key fields. Train staff to spot and correct errors before claims are sent.

Conclusion: Take Control of Your Revenue Cycle
Don’t let preventable denials drain your revenue. By addressing these seven mistakes, you can boost your clean claim rate, speed up reimbursements, and reduce administrative headaches. Start today: audit your denial trends, implement these fixes, and watch your RCM performance soar. Ready to make denials a thing of the past?
`,
  },
};

// Define a simple props type that matches Next.js 15 expectations
type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // Unwrap the params Promise using React.use()
  const resolvedParams = use(params);

  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5FC]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#3E37A1] to-[#5A50DA] py-16 text-white">
          <div className="absolute inset-0 bg-black/20 z-0"></div> {/* Subtle overlay */}
          <div className="container mx-auto px-4 relative z-10">
            <Link
              href="/blog"
              className="inline-flex items-center text-[#FFC107] hover:text-white transition duration-300 mb-6"
            >
              <FaArrowLeft className="mr-2" /> Back to Blog
            </Link>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">{post.title}</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">{post.description}</p>
              <p className="text-sm mt-4 text-gray-200 italic">{post.date}</p>
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="py-16 bg-[#F5F5FC]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="relative mb-12">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {post.content.split("\n").map((paragraph, index, paragraphs) => {
                if (!paragraph.trim()) return null;

                // Introduction (first paragraph)
                if (index === 0) {
                  return (
                    <div key={index} className="mb-12">
                      <p className="text-lg leading-relaxed text-gray-700">{paragraph}</p>
                      <div className="mt-6 p-4 bg-[#6C5CE7]/10 rounded-lg border-l-4 border-[#6C5CE7] shadow-md">
                        <span className="text-2xl font-bold text-[#3E37A1]">$19.7 Billion</span>
                        <p className="text-gray-600 mt-1">Annual cost of denials for hospitals—don’t let your practice contribute to this statistic.</p>
                      </div>
                    </div>
                  );
                }

                // Mistake sections
                if (paragraph.startsWith("Mistake")) {
                  const mistakeNumber = paragraph.match(/Mistake (\d+)/)?.[1];
                  const problemText = paragraphs[index + 1]; // Problem text is directly after the Mistake heading

                  // Find the "The Fix" paragraph dynamically
                  let fixText = "";
                  for (let i = index + 1; i < paragraphs.length; i++) {
                    if (paragraphs[i].startsWith("The Fix:")) {
                      fixText = paragraphs[i].replace("The Fix: ", "");
                      break;
                    }
                    // Stop searching if we hit the next "Mistake" or "Conclusion"
                    if (paragraphs[i].startsWith("Mistake") || paragraphs[i].startsWith("Conclusion")) {
                      break;
                    }
                  }

                  const fixes = fixText.split(". ").filter(fix => fix.trim()).map(fix => fix + (fix.endsWith(".") ? "" : "."));

                  return (
                    <div key={index} className="mt-12 relative group">
                      <div className="flex items-center mb-4">
                        {mistakeNumber === "1" && <FaUser className="text-[#6C5CE7] text-3xl mr-4 group-hover:scale-110 transition-transform duration-300" />}
                        {mistakeNumber === "2" && <FaFileAlt className="text-[#6C5CE7] text-3xl mr-4 group-hover:scale-110 transition-transform duration-300" />}
                        {mistakeNumber === "3" && <FaClock className="text-[#6C5CE7] text-3xl mr-4 group-hover:scale-110 transition-transform duration-300" />}
                        {mistakeNumber === "4" && <FaCode className="text-[#6C5CE7] text-3xl mr-4 group-hover:scale-110 transition-transform duration-300" />}
                        {mistakeNumber === "5" && <FaShieldAlt className="text-[#6C5CE7] text-3xl mr-4 group-hover:scale-110 transition-transform duration-300" />}
                        {mistakeNumber === "6" && <FaNetworkWired className="text-[#6C5CE7] text-3xl mr-4 group-hover:scale-110 transition-transform duration-300" />}
                        {mistakeNumber === "7" && <FaCopy className="text-[#6C5CE7] text-3xl mr-4 group-hover:scale-110 transition-transform duration-300" />}
                        <h3 className="text-2xl md:text-3xl font-semibold text-[#3E37A1]">{paragraph}</h3>
                      </div>
                      <div className="h-1 w-24 bg-gradient-to-r from-[#3E37A1] to-[#6C5CE7] mb-6"></div>
                      <h4 className="text-xl font-medium text-gray-800 mb-2">The Problem</h4>
                      <p className="leading-relaxed mb-4 text-gray-700">{problemText}</p>
                      {problemText.includes("45%") && (
                        <div className="my-4 p-4 bg-[#6C5CE7]/10 rounded-lg border-l-4 border-[#6C5CE7] shadow-md">
                          <span className="text-2xl font-bold text-[#3E37A1]">45%</span>
                          <p className="text-gray-600 mt-1">of healthcare leaders report denials due to data errors.</p>
                        </div>
                      )}
                      {problemText.includes("40%") && (
                        <div className="my-4 p-4 bg-[#6C5CE7]/10 rounded-lg border-l-4 border-[#6C5CE7] shadow-md">
                          <span className="text-2xl font-bold text-[#3E37A1]">40%</span>
                          <p className="text-gray-600 mt-1">of denials are linked to prior auth issues.</p>
                        </div>
                      )}
                      {problemText.includes("56%") && (
                        <div className="my-4 p-4 bg-[#6C5CE7]/10 rounded-lg border-l-4 border-[#6C5CE7] shadow-md">
                          <span className="text-2xl font-bold text-[#3E37A1]">56%</span>
                          <p className="text-gray-600 mt-1">of coding audits uncover errors.</p>
                        </div>
                      )}
                      <h4 className="text-xl font-medium text-[#6C5CE7] mt-6 mb-4">The Fix</h4>
                      <div className="p-6 bg-white border-l-4 border-[#6C5CE7] rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:bg-[#6C5CE7]/5">
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                          {fixes.map((fix, fixIndex) => (
                            <li key={fixIndex}>{fix}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                }

                // Conclusion
                if (paragraph.startsWith("Conclusion")) {
                  return (
                    <div key={index} className="mt-16">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#3E37A1] flex items-center">
                        <FaCheck className="text-[#6C5CE7] text-3xl mr-4" />
                        {paragraph}
                      </h3>
                      <div className="h-1 w-32 bg-gradient-to-r from-[#3E37A1] to-[#6C5CE7] mt-2 mb-6"></div>
                      <p className="leading-relaxed text-gray-700">{paragraphs[index + 1]}</p>
                    </div>
                  );
                }

                // Skip paragraphs that are already handled (e.g., problem text, fix text)
                if (
                  paragraphs[index - 1]?.startsWith("Mistake") ||
                  paragraphs[index - 1]?.startsWith("The Fix:") ||
                  paragraphs[index - 2]?.startsWith("Mistake") ||
                  paragraphs[index - 1]?.startsWith("Conclusion")
                ) {
                  return null;
                }

                return (
                  <p key={index} className="leading-relaxed mb-4 text-gray-700">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <h4 className="text-2xl font-semibold text-[#3E37A1] mb-4">Ready to Optimize Your RCM?</h4>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Take the first step towards reducing claim denials and improving your revenue cycle. Contact us today to learn how AccurusBill can help!
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#6C5CE7] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#5A50DA] transition duration-300 shadow-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#3E37A1] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Left Section: Copyright, Email, Address, and Navigation */}
            <div className="mb-6 md:mb-0">
              <p className="text-base text-center md:text-left">
                © 2024 AccurusBill. Empowering Private Clinics with Comprehensive, Cost-Effective Solutions
              </p>
              <div className="mt-4 space-y-2 text-center md:text-left">
                <p className="text-base flex items-center justify-center md:justify-start">
                  <FaMapMarkerAlt className="mr-2 text-[#FFC107] text-lg" />
                  AccurusBill 108 W 39th Street Ste 1006 #2018 <br />
                  New York, NY 10018 United States
                </p>
                <p className="text-base">Email: contact@accurusbill.com</p>
              </div>
              <div className="mt-4 flex justify-center md:justify-start space-x-4">
                <Link href="/" className="text-white hover:text-[#FFC107] transition duration-300">
                  Home
                </Link>
                <Link href="/about" className="text-white hover:text-[#FFC107] transition duration-300">
                  About Us
                </Link>
                <Link href="/services" className="text-white hover:text-[#FFC107] transition duration-300">
                  Services
                </Link>
                <Link href="/blog" className="text-white hover:text-[#FFC107] transition duration-300">
                  Blog
                </Link>
                <Link href="/contact" className="text-white hover:text-[#FFC107] transition duration-300">
                  Contact
                </Link>
              </div>
            </div>

            {/* Right Section: Social Media and HIPAA Badge */}
            <div className="flex flex-col items-center md:items-end space-y-4">
              {/* Social Media */}
              <div className="text-center md:text-right bg-white/5 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex justify-center md:justify-end space-x-6">
                  <Link
                    href="https://www.linkedin.com/company/accurusbill/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FFC107] transition duration-300 transform hover:scale-110"
                  >
                    <FaLinkedin className="text-3xl" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://twitter.com/explore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FFC107] transition duration-300 transform hover:scale-110"
                  >
                    <FaTwitter className="text-3xl" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>

              {/* HIPAA Badge */}
              <div className="flex justify-center md:justify-end group">
                <div className="relative flex items-center">
                  <div className="bg-gradient-to-r from-[#4B5EAA] to-[#3E4A8A] rounded px-4 py-2 border-2 border-[#4B5EAA] shadow-xl group-hover:border-[#FFC107] transition duration-300">
                    <span className="text-base font-extrabold text-white group-hover:text-[#FFC107] transition duration-300 tracking-wide">
                      HIPAA COMPLIANT
                    </span>
                  </div>
                  <div className="absolute right-[-14px] w-8 h-8 bg-white/90 rounded-full flex items-center justify-center border-2 border-[#4B5EAA] shadow-md group-hover:bg-[#FFC107] group-hover:border-[#FFC107] transition duration-300">
                    <FaCheck className="text-[#4B5EAA] text-lg group-hover:text-white transition duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
