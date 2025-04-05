"use client";

import { Navbar } from "@/components/Navbar";
import { FaArrowLeft, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaCheck, FaUser, FaFileAlt, FaClock, FaCode, FaShieldAlt, FaNetworkWired, FaCopy, FaEnvelope, FaPhone, FaComment } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use, useState } from "react";
import emailjs from "@emailjs/browser";

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
  "unlocking-the-opportunity-in-chronic-care-management-ccm-and-remote-patient-monitoring-rpm": {
    title: "Unlocking the Opportunity in Chronic Care Management (CCM) and Remote Patient Monitoring (RPM)",
    description: "Chronic Care Management (CCM) and Remote Patient Monitoring (RPM) use technology to keep patients connected with their care teams between visits, focusing on medication management and early issue detection.",
    date: "April 02, 2025",
    image: "/images/ccm.webp",
    content: `
Chronic Care Management (CCM) and Remote Patient Monitoring (RPM) empower patients to stay connected with their care team between office visits. These programs use technology and regular check-ins to ensure patients follow their care plans, manage medications, and catch issues early. For small and mid-sized medical practices, CCM and RPM are not only beneficial for patient health – they also represent a significant new revenue opportunity.

What Are CCM and RPM?
Chronic Care Management (CCM) is a Medicare-supported program that pays providers for managing care between visits for patients with multiple chronic conditions. Essentially, clinical staff (nurses, care coordinators, etc.) spend time each month on non-face-to-face activities like phone calls, care plan coordination, medication refills, and coaching for patients who have two or more chronic conditions (e.g. diabetes, hypertension, COPD). Medicare introduced CCM to encourage proactive, continuous care: patients get more support, and practices get reimbursed for providing this ongoing care. Importantly, patient consent is required to enroll in CCM, since Medicare patients will incur a small monthly coinsurance (usually ~$8 for CCM).

Remote Patient Monitoring (RPM) involves the use of digital devices (such as blood pressure cuffs, glucose meters, weight scales, or pulse oximeters) to track a patient’s health data at home and transmit it to the practice. Providers or their staff review this data regularly and intervene if readings are concerning. RPM is typically used for patients with chronic conditions that benefit from close monitoring (for example, a hypertensive patient using a blood pressure cuff, or a heart failure patient using a weight scale). Medicare began reimbursing RPM in recent years to complement CCM – whereas CCM focuses on care coordination via calls, RPM provides real-time physiologic data from the patient’s home. Like CCM, RPM requires patient consent and comes with a Part B copay (often higher than CCM – roughly $20+ per month, since RPM involves device supply and more extensive monitoring).

Both CCM and RPM are monthly, billable services under Medicare Part B. While Medicare is the primary payer that created these programs, many state Medicaid programs and commercial insurers are also starting to reimburse for CCM and RPM (or similar care management services) because these programs have been shown to improve outcomes and reduce costly hospital visits. This means small practices have an opportunity not just with Medicare patients, but potentially with other insurers as well, by keeping chronic patients healthier and getting paid for the effort.

How Medicare Reimbursement Works (CPT Codes & 2024 Rates)
One of the biggest reasons to get excited about CCM and RPM is the steady reimbursement available for providing these services. Medicare (and some other payers) assign specific CPT codes for different care management activities. Below are key codes and 2024 average Medicare reimbursement rates for CCM and RPM:

CCM – CPT 99490: This is the primary code for non-complex Chronic Care Management. It covers at least 20 minutes per calendar month of clinical staff time managing a patient’s care (under physician supervision). Medicare reimburses around $62 per patient, per month for CPT 99490. (Rates vary slightly by region; $62.59 is the national average in late 2024.)

CCM Add-On – CPT 99439: If a patient needs additional care management time, you can bill 99439 for each additional 20 minutes in a month. This add-on pays roughly $47 for each unit (20 extra minutes). You can bill up to two units of 99439, meaning a patient who received 60 minutes of CCM in a month could bring in an extra ~$94 on top of the base 99490 payment.

Complex CCM – CPT 99487/99489: For patients with especially complex needs (moderate/high complexity medical decision making), CPT 99487 covers the first 60 minutes of CCM in a month (reimbursing around $128 on average), and 99489 is an add-on for each additional 30 minutes (about $65). These codes require more clinician involvement and higher complexity care coordination. Small practices may use these less frequently, but they’re good to know for higher-need patients.

Physician CCM – CPT 99491: Unlike 99490 (which clinical staff can perform under supervision), 99491 is for 30 minutes of CCM performed directly by a physician or qualified provider (no clinical staff). It pays a higher rate (around $82 per month in 2024). Most practices use 99490 since staff can handle the calls, but 99491 is an option if the provider personally does the care management.

RPM Setup – CPT 99453: This code is a one-time payment for setting up a patient on RPM and educating them on device use. In 2024, it pays about $19 (one-time). It’s small, but it covers the onboarding work.

RPM Device Supply – CPT 99454: This is the monthly RPM device monitoring fee. It covers providing the device and collecting/transmitting data for each 30-day period. Medicare reimburses roughly $46–$47 per month for 99454. Important: To bill 99454, the patient must use the device for at least 16 days in the 30-day period (a Medicare requirement for sufficient monitoring data).

RPM Management – CPT 99457: This is the primary RPM service code, covering the time spent in a month reviewing data and interacting with patients. It requires at least 20 minutes per month of care management (which can be by clinical staff or physician) including interactive contact with the patient (e.g. a phone discussion about their readings). The 2024 reimbursement is about $48 per month per patient for 99457.

RPM Add-On – CPT 99458: If you spend additional 20-minute increments beyond the initial 20 minutes on RPM management, 99458 can be billed (up to 2-3 times per month if needed). Each 99458 pays roughly $38–$39 in 2024. In practice, many patients’ needs are met with one 20-minute block (99457), but some high-touch patients might require more time.

Why do these codes matter to your practice? Together, they represent new revenue streams for work you may already be doing informally. Instead of providing care coordination or phone advice for free, CCM/RPM codes let you capture reimbursement for that care. For example, a Medicare patient with uncontrolled diabetes and hypertension could be enrolled in CCM (billed via 99490 each month) and also on RPM with a glucose monitor (billed via 99454 + 99457 each month). Taken together, that could be over $100 per month for that one patient’s extra care – all while helping them stay healthier between visits. Even patients enrolled in just one of the programs (CCM or RPM) bring in significant monthly payments that add up over the year.

Why CCM/RPM Is a Major Opportunity for Your Practice
If your practice serves patients with chronic illnesses, CCM and RPM programs represent a win-win: better care for patients and better financial health for your practice. Consider the potential revenue:

Revenue Boost Per Patient: A typical Medicare CCM patient (20 minutes/month of care coordination) brings in about $60 per month in 2024. Over 12 months, that’s roughly $720 per patient annually. RPM patients have a similar or even higher yield – for instance, an RPM patient using a blood pressure cuff with monthly monitoring could generate around $95 per month (combining device and management codes), which is ~$1,140 per year.

Example for 50–100 Patients: Even a modest enrollment can transform your revenue. Imagine 50 patients on a CCM program. At roughly $60 each, that’s about $3,000 in new revenue every month – over $36,000 per year from just 50 patients. If you scale up to 100 chronic patients, you’d be looking at around $6,000 per month, or $72,000+ per year in added revenue, just for CCM services. Many practices have far more than 100 eligible patients, so the upside can be even higher. And this doesn’t include RPM yet – adding an RPM program for appropriate patients could layer on additional income. The revenue can offset declining reimbursements elsewhere and fund new staff or technology for your clinic.

Predictable Monthly Income: Unlike one-time procedures or visits, CCM/RPM payments are recurring monthly revenue. This steadiness can improve cash flow and practice stability. It’s like a subscription model – as long as enrolled patients continue to receive the service each month, the practice bills and gets paid every month.

Improved Patient Outcomes (Value-Based Care Advantages): Beyond dollars, these programs help your patients stay on track. You’ll likely see better blood pressure control, fewer ER visits, and higher patient satisfaction because patients feel looked-after between appointments. Healthier patients mean less emergency care and hospitalizations, which is a goal of value-based care programs. In the long run, success in CCM/RPM can also boost your performance in value-based contracts or Medicare quality programs (CCM enrollment can even help with Medicare Shared Savings attribution and quality metrics).

Competitive Edge: Offering CCM and RPM can differentiate your practice. Patients with chronic conditions will gravitate toward providers who offer comprehensive support. It can also strengthen loyalty – patients engaged with your care managers monthly are more likely to stay with your practice. For specialties managing chronic diseases, this can be a big competitive advantage in retaining patients.

In short, CCM and RPM allow practices to do well by doing good. You’re paid for better care. It’s a major opportunity to elevate both patient care and revenue – especially for smaller practices that might be operating on thin margins.

Real-world impact: Primary care physician Dr. Le Church, after implementing CCM, noted that leveraging these codes enabled him to hire staff and improve care – “Without CCM payments, we would not have been able to fiscally support that level of personalized proactive service,” he says. His practice was able to enroll hundreds of patients, generating thousands in monthly income and reducing hospitalizations. Many others have reported similar success – the key is to avoid the pitfalls and execute the program correctly.

Common Mistakes to Avoid When Launching CCM/RPM
While the opportunity is huge, practices can stumble when setting up CCM or RPM programs. Here are some common mistakes and pitfalls to watch out for (so you can avoid them):

Mistake 1: Not Enrolling Enough Patients
One of the biggest mistakes is under-enrolling patients or treating CCM/RPM as an “opt-in for a select few.” The economics of these programs improve with scale. If you only enroll a handful of patients, the revenue may not justify the effort.
The Fix: Start by identifying all eligible chronic patients (e.g. generate a list from your EHR of those with 2+ chronic conditions). Don’t shy away from offering the program – remember, it benefits them too. Aim for dozens of enrollments to truly see financial and clinical impact.

Mistake 2: Poor Patient Onboarding & Communication
Simply having the service available isn’t enough; you need to convince patients to participate and stick with it. A common mistake is failing to explain the value of CCM/RPM to patients, which can lead to low uptake or high drop-out (“churn”). Medicare patients often have a 20% coinsurance for these services (unless they have Medigap or secondary insurance). For CCM the copay is small (~$8), but for RPM it could be $20+ per month. If you don’t clearly communicate the benefits (and the fact that this is an optional service with a small cost), patients might decline or quit after a month or two.
The Fix: Successful programs assign a friendly staff member to educate patients: explain how the program works, how it helps them stay healthy, and why the small monthly cost is worth the peace of mind and extra support. Emphasize that the goal is to keep them out of the hospital and feeling their best – that message resonates.

Mistake 3: Inadequate Documentation and Time Tracking
Medicare’s rules require that you document the time spent and services provided each month (e.g. 20 minutes for CCM, or that a live contact was made for RPM). A major pitfall is failing to track those minutes or interactions properly, which could lead to denied claims or problems in an audit. For example, if you bill 99490 but your records don’t clearly show at least 20 minutes of non-face-to-face care management for that patient in that month, you’re at risk. Similarly, billing RPM without noting that you reviewed the data and contacted the patient won’t hold up.
The Fix: Set up a simple logging system – many practices use their EHR’s CCM module or a spreadsheet to log date, time, and activity for each patient’s CCM/RPM each month. Consistently record each call attempt, care plan update, and device check. This not only protects your billing, it also ensures patients are truly getting the service you’re charging for.

Mistake 4: Underestimating Staffing Needs
Another common mistake is to launch CCM/RPM without dedicating specific staff and time to it. Busy clinics might tell an already-swamped nurse or MA to “do some care calls when you can.” The result is usually inconsistency – some patients get called, others slip through the cracks, and the full 20 minutes may not be completed.
The Fix: To do it right, you need to assign responsibility. Whether it’s hiring a part-time care manager, reallocating an existing nurse for a few hours each day, or partnering with an outside service, make sure there is a clear owner of the CCM/RPM tasks. This person (or team) should have time set aside to enroll patients, perform the monthly check-ins, follow up on device alerts, etc. The investment in staffing will pay for itself with the revenue generated (for example, one full-time care manager salary can be covered by the reimbursement from a couple hundred patients enrolled in CCM/RPM). Avoid the pitfall of trying to squeeze these duties into an already packed schedule.

Mistake 5: Noncompliance with Program Rules
Details matter. Some practices jump in and start billing without fully understanding Medicare’s requirements. Mistakes here include not obtaining signed or documented consent from the patient for CCM, failing to ensure 16 days of RPM readings for billing 99454, or double-billing services (e.g. two providers billing CCM for the same patient in one month – Medicare only allows one).
The Fix: To avoid compliance issues, train your team on the rules. Use Medicare’s CCM toolkit or webinars to educate staff on what’s required. It’s also wise to do periodic audits of your own – ensure each CCM claim has a corresponding consent in the chart and documented time, each RPM claim has supporting data. With a solid process, you can confidently scale without worrying about paybacks or denials.

By learning from these common pitfalls, your practice can implement CCM and RPM smoothly. In summary: enroll assertively, educate patients on the value (and cost), document everything, dedicate the right staff, and follow the rules. Now, let’s look at how to put a successful program in place step by step.

Step-by-Step Plan to Launch and Scale CCM/RPM Services
Implementing a new program can feel daunting, but breaking it into steps makes it manageable. Here’s a clear roadmap for adopting CCM/RPM in your practice:

Step 1: Identify Eligible Patients
Start by reviewing your patient panel to find those who qualify. For CCM, identify patients with 2 or more chronic conditions (e.g. diabetes, hypertension, CHF, COPD, depression, etc.) that are expected to last at least a year. For RPM, pinpoint patients who would benefit from remote monitoring – for example, those with uncontrolled vitals or chronic conditions where data tracking could help (high blood pressure, diabetes, obesity, heart disease, lung disease, etc.). You might run a report from your EHR or billing system to list patients with multiple chronic diagnosis codes, or simply think of your frequent flyers with chronic issues. Many practices are surprised at how many of their Medicare patients qualify – often over 50% of Medicare patients have two or more chronic conditions.

Step 2: Develop Your Care Team and Workflow
Decide who will actually deliver the CCM and RPM services and how. If you’re a small practice, you might designate an existing nurse or medical assistant to be the “CCM coordinator” who makes monthly calls and tracks patient needs. Larger practices might hire a dedicated care manager or leverage a third-party care management service. Also plan the workflow: for CCM, determine when calls will be made (e.g. one afternoon a week dedicated to CCM calls), how you will document time, and how care plans will be created/updated. For RPM, figure out who will review the incoming data (perhaps a nurse checks a dashboard each morning) and how/when they will contact patients for any alerts or monthly discussions. Establish protocols: e.g., if blood sugar > X, do Y; if blood pressure rising, call patient and possibly notify doctor. A well-defined workflow and responsible personnel are key. Don’t forget to train your team on the documentation and billing requirements so that everyone knows the targets (20 minutes, 16 days of data, etc.).

Step 3: Choose the Right Tools (Technology)
To make life easier, consider tools that support care management. For CCM, many EHRs have modules to track time and tasks for care management; if yours does, configure it for use. Alternatively, simple solutions like time-tracking spreadsheets or dedicated CCM software (there are platforms specifically for chronic care management) can help keep you organized. For RPM, you’ll need to select the devices and platform to use. You can work with RPM vendors who supply devices (e.g. Bluetooth blood pressure cuffs or glucometers) and often provide a web portal where patient readings flow in. Some EHRs or telehealth platforms also integrate RPM data. Ensure whatever technology you use is user-friendly for patients (simple devices with clear instructions) and provides alerts or reports that your staff can easily manage. Investing in good tech up front will save headaches later and streamline the process so you’re not manually collecting data.

Step 4: Obtain Patient Consent and Enroll Patients
With your target patient list and process ready, begin outreach to patients to formally enroll them. This step is crucial – how you approach patients can make or break your program’s adoption. It often works best to start with patients you know well or those who have been asking lots of questions about their health – they’ll likely appreciate extra support. Call the patient (or discuss during an office visit) and explain the program in clear, patient-friendly terms. Emphasize benefits: “This program means we’ll check in with you every month to help manage your chronic conditions and adjust your care plan. You’ll get personal coaching and we’ll help coordinate refills and specialist visits. Our goal is to keep you as healthy as possible and prevent unnecessary hospital trips.” Also mention any devices if RPM: “We’ll provide you a free digital blood pressure monitor that sends us your readings, so we can watch your blood pressure between visits.” Be transparent about the cost: explain Medicare covers it but there is a small copay (typically tell them the dollar amount, e.g. “Medicare usually bills about $8-$10 a month for this service, which is often covered by secondary insurance if you have one”). Many patients will agree once they see the value, but be prepared to answer questions. Have them sign a consent form (or document verbal consent) as required by Medicare. Once consented, enroll them in your tracking system – add them to your CCM call list or RPM dashboard. It’s often wise to start enrollment in batches (perhaps enroll 10-20 patients the first month, work out any kinks, then add more in subsequent months).

Step 5: Deliver the Services Consistently
Now the ongoing work begins – execute the care management each month. For CCM, make sure each enrolled patient gets their monthly check-in call (or face-to-face if they happen to come in and you do it then). These calls typically include reviewing any symptoms, ensuring they’re following the care plan, medication reconciliation, scheduling needed follow-ups, and patient education on their conditions. Address any new issues or coordinate with other providers as needed. Aim to truly add value during these touches so patients feel it’s worthwhile. For RPM, monitor the incoming data regularly (daily or a few times a week). If a patient’s readings are out of range or missing, follow up with them – sometimes devices need troubleshooting or the patient needs a reminder. Each month, ensure you have at least one interactive communication with the RPM patient (Medicare requires a live conversation once per month for 99457 billing). This could be a call to discuss their monthly summary or a video check-in. Document everything in the patient’s record: e.g. “Aug 15 – CCM call 15 min: discussed diet, adjusted dosage of X, patient doing well, will follow up next month,” then later “Aug 29 – additional 5 min coordinating endocrinology appointment.” You want to clearly log time spent and tasks. Many practices use a running log in the EHR for each patient’s non-visit interactions. Stay organized so no patient is missed in a given month – a simple spreadsheet or checklist of enrolled patients can help you mark off who’s done.

Step 6: Bill Monthly and Track Performance
At the end of each month (or the beginning of the next), have your billing staff (or billing service) submit the CPT codes for each patient who received the services. For example, if John Doe got his 20-minute care coordination in January, you’d bill Medicare CPT 99490 for January for John Doe. If Jane Smith was in the RPM program and met criteria, you’d bill 99454 (device) and 99457 (management) for her. Make sure your documentation supports each claim in case of audit. Then, monitor the payments and any denials. It’s normal at first to iron out issues – if a code is denied, find out why (perhaps the patient wasn’t eligible that month due to something, or documentation was lacking) and fix it. Over time, this becomes routine. Also, assess patient outcomes and feedback. Are patients finding the program helpful? Are their health metrics improving? Use this information to refine your process or provide testimonials for other patients. Early successes (e.g. “We caught Mrs. Jones’ weight gain before her heart failure worsened and adjusted her meds – avoiding a hospitalization”) are motivating for the team and can be shared (de-identified) to illustrate the program’s value.

Step 7: Scale Up and Expand
After a few cycles, you’ll have a good handle on operations. Now you can scale up to more patients confidently. Ramp up enrollment in phases – maybe add another 20-30 patients each month. As you grow, watch your staffing capacity: if calls are taking too long, it might be time to add another part-time nurse or consider outsourcing some tasks. Keep an eye on quality as you scale – better to have slightly fewer patients with excellent care than too many with superficial care. You can also expand services: perhaps start with CCM, and once that’s running well, layer in an RPM program for a subset (or vice versa). Or if you began with one device type (say blood pressure), expand to others (glucose monitors, scales) as needed for different patients. Scaling also involves continuing to educate new patients and even staff – make it part of your routine workflow for new chronic patients to be offered CCM. Over time, you’ll integrate these programs so deeply that they become a normal extension of care in your practice.

Following these steps, even a solo or small practice can successfully implement CCM and RPM. It’s about planning, process, and persistence. Many practices partner with specialized companies at some step of this journey – for example, using an outside care management service or a billing partner – which brings us to our next point: getting help to make it easy.

How a Smart RCM Partner Like AccurusBill Simplifies the Process
Launching a CCM/RPM program involves new workflows and diligent billing – but you don’t have to do it all alone. This is where a smart Revenue Cycle Management (RCM) and billing partner such as AccurusBill can be invaluable. AccurusBill specializes in medical billing and practice support, and can streamline your chronic care programs in several ways:

Benefit 1: Expert Compliance Guidance
AccurusBill’s team stays up-to-date on Medicare rules and documentation requirements for programs like CCM and RPM. We help ensure your process checks all the boxes – from obtaining proper patient consent to logging the requisite time and device days. This dramatically lowers the risk of audits or denials. You won’t have to constantly second-guess if you’re doing it right; we provide clear protocols and training so your staff can focus on care while we focus on compliance.

Benefit 2: Accurate and Timely Billing
Billing for multiple new codes each month can strain a small office’s billing staff. AccurusBill takes that burden off your plate by handling the coding and claim submission for CCM/RPM services with precision. We know the ins and outs of codes 99490, 99457, etc., and will ensure they’re billed with correct modifiers (if any) and don’t conflict with other services. Our systems double-check that time requirements are met before a claim goes out. The result is faster reimbursement and fewer rejections – meaning you get paid promptly for the work you’ve done.

Benefit 3: Patient Outreach and Engagement
One of the hardest parts of CCM/RPM is enrolling and engaging patients, as we discussed. AccurusBill can assist with patient outreach campaigns to help get your eligible patients on board. For example, we can facilitate sending informational letters, making initial phone calls to introduce the program, or even managing a patient outreach call center on your behalf. Our experience in talking to patients about these programs can boost your enrollment rates. We help convey the benefits and handle common objections (like copay questions), so more of your patients say “yes” to CCM/RPM. This means your program scales faster and with less effort on your staff.

Benefit 4: Streamlined Tracking & Reporting
AccurusBill provides tools and reports that make managing the program simpler. We can integrate with your EHR or provide an easy-to-use platform to log CCM call times and RPM readings. Dashboard views let you see at a glance which patients have been serviced this month and which are pending, ensuring no one falls through the cracks. We also deliver monthly revenue reports so you can see exactly how much you earned from CCM/RPM, and projections for future months. This transparency builds confidence in the program’s value.

Benefit 5: Scalability and Growth Support
As your program grows from a few patients to dozens or hundreds, AccurusBill scales with you. We help analyze your patient population to identify growth opportunities (for instance, pointing out that you have another 100 eligible patients not yet enrolled). If you decide to expand into other care management services (perhaps adding Behavioral Health Integration or Advanced Care Planning), we can incorporate those smoothly. Essentially, we become a partner in your practice’s growth, ensuring you maximize revenue while maintaining quality. Our expertise allows you to expand services without hiring a ton of new staff – we become an extension of your team for the heavy lifting.

In short, AccurusBill makes CCM and RPM nearly turnkey for your practice. We handle the complex billing rules, provide guidance on setup, help with patient engagement, and keep you informed with metrics. Your providers and nurses can then devote their energy to caring for patients rather than paperwork. The result: a successful program that improves patient care, generates significant revenue, and operates smoothly month after month.

“AccurusBill helped us launch our CCM program and within 6 months we were up to 120 patients enrolled with 0 billing errors,” says one satisfied clinic. “Their team kept us on track and we’re seeing about $75,000 in annual extra revenue now. More importantly, our patients love the extra support.” This kind of success is achievable for any small or mid-sized practice with the right partner.

Specialties That Benefit the Most from CCM/RPM
Practices across a range of specialties are leveraging CCM and RPM, but some medical specialties see especially great benefits from these programs:

Specialty 1: Primary Care / Family Medicine
Primary care doctors often manage patients with multiple chronic diseases – making them ideal for CCM. They coordinate overall care, so the monthly check-ins greatly enhance what they can do between annual exams. RPM can be used for common issues like hypertension, diabetes, and obesity. Small primary care offices find that CCM boosts quality scores and patient loyalty.

Specialty 2: Internal Medicine
Similar to family practice, internists care for complex adult patients (e.g. a 70-year-old with heart disease, diabetes, and arthritis). CCM is a natural extension of internal medicine care, ensuring these patients stick to care plans. RPM is useful for monitoring things like CHF patients (daily weights, blood pressure) or diabetic patients (glucose readings). Internal medicine practices with a lot of Medicare patients stand to gain tremendously in both outcomes and revenue.

Specialty 3: Cardiology
Cardiologists manage chronic cardiac conditions such as heart failure, hypertension, atrial fibrillation, and coronary artery disease. CCM can help coordinate medication management, diet counseling, and follow-ups for these patients. RPM is extremely valuable in cardiology – for example, monitoring blood pressure and heart rate in hypertensive patients, or daily weight in heart failure to catch fluid buildup early. A cardiology clinic could significantly reduce hospital readmissions by using RPM alerts, all while billing for those monitoring services (which are now reimbursed by Medicare).

Specialty 4: Endocrinology
Endocrine specialists treating diabetes, thyroid disorders, and metabolic syndrome find CCM useful for coaching patients on lifestyle and medication adherence. RPM is practically made for diabetes management – many programs use Bluetooth glucometers or continuous glucose monitors to track blood sugar readings. An endocrinologist’s office can bill RPM codes for reviewing those readings and adjusting insulin dosages between visits. The result is better diabetes control and an additional revenue stream for the practice.

Specialty 5: Pulmonology
For patients with COPD, asthma, or other lung diseases, remote monitoring of oxygen saturation and symptoms can be life-saving. Pulmonologists can use RPM (e.g. a pulse oximeter or spirometer at home) to keep tabs on lung function. Chronic Care Management calls can check if COPD patients are using inhalers correctly, avoiding triggers, and if they need any interventions. This proactive approach improves breathing and reduces ER visits for exacerbations.

Specialty 6: Nephrology
Nephrologists managing chronic kidney disease (CKD) and patients on home dialysis can use CCM to coordinate care (diet, fluid management, medication adjustments) and RPM to monitor blood pressure or weight, which are key for kidney patients. Keeping CKD patients stable can delay progression and is aligned with Medicare’s goals (for example, ESRD management now also has new codes).

Specialty 7: Neurology and Others
Neurologists managing conditions like Parkinson’s or dementia can use CCM to coordinate multidisciplinary care (physical therapy, medications, caregiver support). Rheumatologists with patients on complex regimens for rheumatoid arthritis or lupus may use CCM for monthly check-ins on medication side effects and labs. Any specialty dealing with chronic, ongoing conditions can adapt care management services to better support patients between visits – and get reimbursed for it.

In summary, while primary care, internal medicine, and cardiology are front-runners in adopting CCM/RPM, almost any specialty that handles chronic disease can benefit. The key is identifying the need for between-visit management in your patient population. If that need exists (and it likely does), these programs can enhance your specialty care model and provide financial returns.

Conclusion: Elevate Patient Care and Your Revenue – Get Started Today
Chronic Care Management and Remote Patient Monitoring programs present a transformative opportunity for small and mid-sized practices. They enable you to provide higher-touch care to your most vulnerable patients, improving outcomes and satisfaction, while also unlocking a significant new revenue stream for your business. With Medicare (and other payers) actively incentivizing these services, now is the time to act.

Imagine a year from now: your patients with chronic conditions are more engaged and healthier, your providers are less burdened by emergency calls because issues are caught early, and your practice is earning tens of thousands in additional income that you can reinvest in patient care or new hires. This isn’t a fantasy – it’s the reality for many practices that embraced CCM and RPM. You can achieve it too, especially with the right plan and partners in place.

Ready to unlock your practice’s potential? AccurusBill is here to help you every step of the way, from planning to execution. We even offer a handy tool to estimate just how much revenue your practice could generate with CCM/RPM. Check out the free Revenue Calculator on AccurusBill.com to plug in your patient numbers and see the financial impact for yourself. You might be surprised at the results!

If you’re excited about the possibilities (and we hope you are), let’s turn that excitement into action. Schedule a consultation with an AccurusBill expert to discuss how we can tailor a CCM/RPM solution for your practice. We’ll answer your questions, address any concerns, and help chart a path forward. There’s no better time than now to invest in the future of your practice and the well-being of your patients.

Empower your patients. Strengthen your practice. CCM and RPM make it possible – and AccurusBill will make it easy. Get in touch with us today, and let’s start building a healthier future for your practice and those you serve. Here’s to improved care and robust growth!
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

  // Form state for handling input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Define EmailJS credentials
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_BLOG_TEMPLATE_ID; // Using a separate Template ID for blog form
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

    // Send the form data using EmailJS
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY).then(
      (response) => {
        console.log("✅ Email successfully sent:", response.status, response.text);
        alert("🎉 Submission received successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      },
      (error) => {
        console.error("🚨 Error sending email:", error);
        alert("❌ Failed to send the submission. Please try again.");
      }
    );
  };

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

        {/* Blog Content Section with Form */}
        <section className="py-16 bg-[#F5F5FC]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Blog Content (Left Side) */}
              <div className="lg:w-2/3">
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
                        // Stop searching if we hit the next "Mistake" or other sections
                        if (
                          paragraphs[i].startsWith("Mistake") ||
                          paragraphs[i].startsWith("Step") ||
                          paragraphs[i].startsWith("Benefit") ||
                          paragraphs[i].startsWith("Specialty") ||
                          paragraphs[i].startsWith("Conclusion")
                        ) {
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
                            <h3 className="text-2xl md:text-3xl font-semibold text-[#3E37A1]">{paragraph}</h3>
                          </div>
                          <div className="h-1 w-24 bg-gradient-to-r from-[#3E37A1] to-[#6C5CE7] mb-6"></div>
                          <h4 className="text-xl font-medium text-gray-800 mb-2">The Scenario</h4>
                          <p className="leading-relaxed mb-4 text-gray-700">{problemText}</p>
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

                    // Step sections
                    if (paragraph.startsWith("Step")) {
                      const stepNumber = paragraph.match(/Step (\d+)/)?.[1];
                      return (
                        <div key={index} className="mt-12">
                          <h3 className="text-2xl md:text-3xl font-semibold text-[#3E37A1] flex items-center">
                            {stepNumber === "1" && <FaUser className="text-[#6C5CE7] text-3xl mr-4" />}
                            {stepNumber === "2" && <FaFileAlt className="text-[#6C5CE7] text-3xl mr-4" />}
                            {stepNumber === "3" && <FaClock className="text-[#6C5CE7] text-3xl mr-4" />}
                            {stepNumber === "4" && <FaCode className="text-[#6C5CE7] text-3xl mr-4" />}
                            {stepNumber === "5" && <FaShieldAlt className="text-[#6C5CE7] text-3xl mr-4" />}
                            {stepNumber === "6" && <FaNetworkWired className="text-[#6C5CE7] text-3xl mr-4" />}
                            {stepNumber === "7" && <FaCopy className="text-[#6C5CE7] text-3xl mr-4" />}
                            {paragraph}
                          </h3>
                          <div className="h-1 w-24 bg-gradient-to-r from-[#3E37A1] to-[#6C5CE7] mb-6"></div>
                          <p className="leading-relaxed mb-4 text-gray-700">{paragraphs[index + 1]}</p>
                        </div>
                      );
                    }

                    // Benefit sections
                    if (paragraph.startsWith("Benefit")) {
                      const benefitNumber = paragraph.match(/Benefit (\d+)/)?.[1];
                      return (
                        <div key={index} className="mt-12">
                          <h3 className="text-2xl md:text-3xl font-semibold text-[#3E37A1] flex items-center">
                            {benefitNumber === "1" && <FaUser className="text-[#6C5CE7] text-3xl mr-4" />}
                            {benefitNumber === "2" && <FaFileAlt className="text-[#6C5CE7] text-3xl mr-4" />}
                            {benefitNumber === "3" && <FaClock className="text-[#6C5CE7] text-3xl mr-4" />}
                            {benefitNumber === "4" && <FaCode className="text-[#6C5CE7] text-3xl mr-4" />}
                            {benefitNumber === "5" && <FaShieldAlt className="text-[#6C5CE7] text-3xl mr-4" />}
                            {paragraph}
                          </h3>
                          <div className="h-1 w-24 bg-gradient-to-r from-[#3E37A1] to-[#6C5CE7] mb-6"></div>
                          <p className="leading-relaxed mb-4 text-gray-700">{paragraphs[index + 1]}</p>
                        </div>
                      );
                    }

                    // Specialty sections
                    if (paragraph.startsWith("Specialty")) {
                      const specialtyNumber = paragraph.match(/Specialty (\d+)/)?.[1];
                      return (
                        <div key={index} className="mt-12">
                          <h3 className="text-2xl md:text-3xl font-semibold text-[#3E37A1] flex items-center">
                            {specialtyNumber === "1" && <FaUser className="text-[#6C5CE7] text-3xl mr-4" />}
                            {specialtyNumber === "2" && <FaFileAlt className="text-[#6C5CE7] text-3xl mr-4" />}
                            {specialtyNumber === "3" && <FaClock className="text-[#6C5CE7] text-3xl mr-4" />}
                            {specialtyNumber === "4" && <FaCode className="text-[#6C5CE7] text-3xl mr-4" />}
                            {specialtyNumber === "5" && <FaShieldAlt className="text-[#6C5CE7] text-3xl mr-4" />}
                            {specialtyNumber === "6" && <FaNetworkWired className="text-[#6C5CE7] text-3xl mr-4" />}
                            {specialtyNumber === "7" && <FaCopy className="text-[#6C5CE7] text-3xl mr-4" />}
                            {paragraph}
                          </h3>
                          <div className="h-1 w-24 bg-gradient-to-r from-[#3E37A1] to-[#6C5CE7] mb-6"></div>
                          <p className="leading-relaxed mb-4 text-gray-700">{paragraphs[index + 1]}</p>
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
                          {paragraphs.slice(index + 1).map((conclusionPara, i) => (
                            <p key={i} className="leading-relaxed mb-4 text-gray-700">{conclusionPara}</p>
                          ))}
                        </div>
                      );
                    }

                    // Skip paragraphs that are already handled
                    if (
                      paragraphs[index - 1]?.startsWith("Mistake") ||
                      paragraphs[index - 1]?.startsWith("The Fix:") ||
                      paragraphs[index - 2]?.startsWith("Mistake") ||
                      paragraphs[index - 1]?.startsWith("Step") ||
                      paragraphs[index - 1]?.startsWith("Benefit") ||
                      paragraphs[index - 1]?.startsWith("Specialty") ||
                      paragraphs[index - 1]?.startsWith("Conclusion")
                    ) {
                      return null;
                    }

                    // Default paragraph rendering
                    return (
                      <p key={index} className="leading-relaxed mb-4 text-gray-700">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* Contact Form (Right Side) */}
              <div className="lg:w-1/3">
                <div className="bg-white p-8 rounded-lg shadow-xl sticky top-8">
                  <h3 className="text-2xl font-semibold text-[#3E37A1] mb-6 text-center">
                    Let’s Discuss Your Needs
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6C5CE7] focus:border-[#6C5CE7] transition duration-300"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6C5CE7] focus:border-[#6C5CE7] transition duration-300"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <div className="relative">
                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6C5CE7] focus:border-[#6C5CE7] transition duration-300"
                          placeholder="Your Phone Number"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <div className="relative">
                        <FaComment className="absolute left-3 top-4 text-gray-400" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6C5CE7] focus:border-[#6C5CE7] transition duration-300"
                          placeholder="Your Message"
                          rows={4}
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#6C5CE7] text-white py-3 rounded-lg hover:bg-[#FFC107] hover:text-[#3E37A1] transition duration-300 font-semibold"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#3E37A1] text-white py-12">
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
