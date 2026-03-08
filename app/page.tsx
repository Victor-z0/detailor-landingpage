"use client";

import React, { useState } from 'react';
import { 
  CheckCircle2, PhoneCall, ShieldCheck, 
  ArrowRight, Mail, MapPin, Phone, 
  Minus, Calculator, ChevronDown, ChevronUp, Zap
} from 'lucide-react';
import Link from 'next/link';

export default function DetailorLanding() {
  // ROI Calculator State
  const [avgJob, setAvgJob] = useState(150);
  const [extraJobs, setExtraJobs] = useState(2);
  const [adminHours, setAdminHours] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(25);

  // ROI Math
  const monthlyExtraRevenue = extraJobs * avgJob;
  const monthlyTimeSavings = adminHours * hourlyRate * 4; // 4 weeks in a month
  const monthlyValue = monthlyExtraRevenue + monthlyTimeSavings;
  const monthlyCost = 199;
  const monthlyRoi = monthlyValue - monthlyCost;
  const roiPercent = Math.round((monthlyRoi / monthlyCost) * 100);
  const annualRoi = monthlyRoi * 12;

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { 
      q: 'Can I change plans anytime?', 
      a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and your billing will be prorated accordingly.' 
    },
    { 
      q: 'Is there a setup fee?', 
      a: 'No, there are no setup fees for any of our plans. You can get started right away with no additional costs.' 
    },
    { 
      q: 'What payment methods do you accept?', 
      a: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover). All payments are securely processed via Stripe.' 
    },
    { 
      q: 'Can I cancel anytime?', 
      a: 'Yes, you can cancel your subscription at any time with no cancellation fees. There are no long-term contracts or commitments.' 
    },
    { 
      q: 'What are the processing fees?', 
      a: 'Because we use Stripe for secure, immediate payouts, we charge a small processing fee of 2.9% + $0.30 per transaction. This is standard for online payment processing and very competitive compared to other platforms.' 
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white scroll-smooth">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
              <ShieldCheck size={18} className="text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900">detailor.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-600">
            <Link href="#home" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="#compare" className="hover:text-blue-600 transition-colors">Compare</Link>
            <Link href="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
          </div>
          
          <Link href="https://detailor-app.vercel.app/login" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-sm">
            Login
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-40 pb-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            The simplest way to run your <span className="text-blue-600">detailing business.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Manage your schedule, automate customer text messages, and accept payments—all from one clean, easy-to-use app.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <Link href="https://detailor-app.vercel.app/login" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-md">
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <a href="tel:+15555550199" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 text-base font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
              <PhoneCall size={18} className="text-blue-600" /> Call for Info
            </a>
          </div>
        </div>
      </section>

      {/* --- 3-TIER PRICING SECTION --- */}
      <section id="pricing" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Pricing Plans</h2>
            <p className="text-slate-500 text-lg font-medium">Affordable pricing for every detailer. One extra detail a month covers everything.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* TIER 1: Essential */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Detailer Essential</h3>
              <p className="text-slate-500 text-sm font-medium mb-6 h-10">Limited features for detailers just starting out.</p>
              <div className="flex flex-col mb-8">
                <span className="text-slate-400 line-through text-lg font-bold mb-1">$59/mo</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-slate-900">$19</span>
                  <span className="text-slate-500 font-bold">/mo</span>
                </div>
              </div>
              <Link href="https://detailor-app.vercel.app/login" className="w-full block text-center py-3 px-4 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors mb-8">
                Start Essential
              </Link>
              <ul className="space-y-4 flex-1">
                {['Basic Booking Page ⭐', 'Built in Payments', 'Employee & Team Management', 'Basic Insights', 'Basic Estimates'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* TIER 2: Choice (Most Popular) */}
            <div className="bg-white rounded-3xl p-8 border-2 border-blue-600 shadow-xl relative transform md:-translate-y-4 flex flex-col h-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Detailer Choice</h3>
              <p className="text-slate-500 text-sm font-medium mb-6 h-10">Best for established detailing businesses.</p>
              <div className="flex flex-col mb-8">
                <span className="text-slate-400 line-through text-lg font-bold mb-1">$149/mo</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-slate-900">$99</span>
                  <span className="text-slate-500 font-bold">/mo</span>
                </div>
              </div>
              <Link href="https://detailor-app.vercel.app/login" className="w-full block text-center py-3 px-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md mb-8">
                Go Choice
              </Link>
              <ul className="space-y-4 flex-1">
                {['Booking Page ⭐', 'Custom Services', 'Built in Payments', 'In app chat communication', 'Detailed Insights', 'Online Estimate Requests'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* TIER 3: Exclusive */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Detailer Exclusive</h3>
              <p className="text-slate-500 text-sm font-medium mb-6 h-10">Take your business to the next level.</p>
              <div className="flex flex-col mb-8">
                <span className="text-slate-400 line-through text-lg font-bold mb-1">$249/mo</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-slate-900">$199</span>
                  <span className="text-slate-500 font-bold">/mo</span>
                </div>
              </div>
              <Link href="https://detailor-app.vercel.app/login" className="w-full block text-center py-3 px-4 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors mb-8">
                Grow with Exclusive
              </Link>
              <ul className="space-y-4 flex-1">
                {['Customizable Booking Page ⭐', 'Built in Payments', 'Advanced Client Booking', 'Advanced Insights', 'Online Estimate Requests', 'Third Row Detection'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- ROI CALCULATOR SECTION (INTERACTIVE) --- */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">For the Price of <span className="text-blue-500">One Detail.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our Detailer Exclusive plan costs $199/month - the same as a typical full detail service. But it can help you book dozens more jobs, reduce no-shows, and automate hours of admin work.
            </p>
            <div className="p-6 bg-blue-600/10 border border-blue-500/30 rounded-2xl">
              <p className="text-blue-400 font-bold flex items-center gap-2">
                <Zap size={20} /> The ROI is immediate.
              </p>
              <p className="text-slate-300 mt-2">Adjust the sliders to see exactly how quickly Detailor pays for itself based on your specific shop.</p>
            </div>
          </div>
          
          {/* ROI Widget */}
          <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="text-blue-600" size={28} />
              <h3 className="text-2xl font-bold">ROI Calculator</h3>
            </div>
            
            <div className="space-y-6 mb-8">
              {/* Slider 1 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-500 font-medium text-sm">Average job value</span>
                  <span className="font-bold text-blue-600">${avgJob}</span>
                </div>
                <input type="range" min="50" max="500" step="10" value={avgJob} onChange={(e) => setAvgJob(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              </div>
              
              {/* Slider 2 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-500 font-medium text-sm">Extra jobs booked per month</span>
                  <span className="font-bold text-blue-600">{extraJobs} jobs</span>
                </div>
                <input type="range" min="1" max="15" step="1" value={extraJobs} onChange={(e) => setExtraJobs(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              </div>

              {/* Slider 3 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-500 font-medium text-sm">Admin hours saved per week</span>
                  <span className="font-bold text-blue-600">{adminHours} hrs</span>
                </div>
                <input type="range" min="1" max="20" step="1" value={adminHours} onChange={(e) => setAdminHours(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              </div>

              {/* Slider 4 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-500 font-medium text-sm">Your hourly rate</span>
                  <span className="font-bold text-blue-600">${hourlyRate}/hr</span>
                </div>
                <input type="range" min="15" max="100" step="5" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500 font-medium mb-1">Monthly ROI</p>
                <p className="text-3xl font-extrabold text-green-600">${monthlyRoi.toLocaleString()}</p>
                <p className="text-xs text-green-600 font-bold mt-1">{roiPercent.toLocaleString()}% return</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500 font-medium mb-1">Annual ROI</p>
                <p className="text-3xl font-extrabold text-blue-600">${annualRoi.toLocaleString()}</p>
                <p className="text-xs text-blue-600 font-bold mt-1">12-month return</p>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 text-center uppercase tracking-wider font-bold">
              Calculation: Revenue (${monthlyExtraRevenue}) + Time Saved (${monthlyTimeSavings}) - Cost ($199)
            </p>
          </div>
        </div>
      </section>

      {/* --- FEATURE COMPARISON TABLE --- */}
      <section id="compare" className="py-24 px-6 bg-slate-50 border-t border-slate-100 hidden md:block">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Feature Comparison</h2>
            <p className="text-slate-500 text-lg font-medium">Compare all features across our plans to find the perfect fit.</p>
          </div>

          <div className="overflow-x-auto bg-white rounded-3xl shadow-sm border border-slate-200">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-6 bg-slate-50 border-b border-slate-200 w-1/4"></th>
                  <th className="p-6 bg-slate-50 border-b border-slate-200 w-1/4">
                    <p className="font-bold text-lg">Essential</p>
                    <p className="text-blue-600 font-bold">$19/mo</p>
                  </th>
                  <th className="p-6 bg-slate-50 border-b border-slate-200 w-1/4">
                    <p className="font-bold text-lg">Choice</p>
                    <p className="text-blue-600 font-bold">$99/mo</p>
                  </th>
                  <th className="p-6 bg-slate-50 border-b border-slate-200 w-1/4">
                    <p className="font-bold text-lg">Exclusive</p>
                    <p className="text-blue-600 font-bold">$199/mo</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr><td colSpan={4} className="bg-slate-100 p-4 font-bold text-sm uppercase tracking-wider text-slate-600">Employees & Business</td></tr>
                <TableRow feature="Jobs Allowed" e="Unlimited" c="Unlimited" ex="Unlimited" />
                <TableRow feature="Appointment Management" e={true} c={true} ex={true} />
                <TableRow feature="Built in Payment Processing" e={true} c={true} ex={true} />
                <TableRow feature="Client Profiles & Vehicles" e={false} c={true} ex={true} />
                <TableRow feature="PDF Invoices/Receipts" e={false} c={true} ex={true} />

                <tr><td colSpan={4} className="bg-slate-100 p-4 font-bold text-sm uppercase tracking-wider text-slate-600">Booking Page & Marketing</td></tr>
                <TableRow feature="Basic Booking Page" e={true} c={true} ex={true} />
                <TableRow feature="Color Customization" e={false} c={true} ex={true} />
                <TableRow feature="Appointment Reminder Texts" e={false} c={true} ex={true} />
                <TableRow feature="In-app Chat Communication" e={false} c={true} ex={true} />
                <TableRow feature="Third Row Detection" e={false} c={false} ex={true} />
                <TableRow feature="Custom Booking URL" e="Coming Soon" c="Coming Soon" ex="Coming Soon" />

                <tr><td colSpan={4} className="bg-slate-100 p-4 font-bold text-sm uppercase tracking-wider text-slate-600">Insights & Estimates</td></tr>
                <TableRow feature="Basic Revenue Tracking" e={true} c={true} ex={true} />
                <TableRow feature="Online Estimate Requests" e={false} c={true} ex={true} />
                <TableRow feature="Revenue Heat Map Calendar" e={false} c={true} ex={true} />
                <TableRow feature="Job Profitability Analysis" e={false} c={false} ex="Coming Soon" />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (INTERACTIVE) --- */}
      <section id="faq" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-lg">Everything you need to know about our pricing and plans.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden cursor-pointer hover:border-blue-200 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="p-6 flex justify-between items-center">
                  <span className="font-bold text-slate-900">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-blue-600 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-slate-400 flex-shrink-0" size={20} />
                  )}
                </div>
                {/* Accordion Answer Dropdown */}
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">See how Detailor transforms your business.</h2>
          <p className="text-xl text-blue-100">7-day free trial. No card required. Cancel anytime.</p>
          <div className="pt-4">
            <Link href="https://detailor-app.vercel.app/login" className="inline-block px-10 py-5 bg-white text-blue-600 text-lg font-bold rounded-xl shadow-2xl hover:scale-105 transition-transform">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-300 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-slate-800 pb-12 mb-8">
          
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck size={24} className="text-blue-500" />
              <span className="font-extrabold text-2xl tracking-tight">detailor.</span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              A detailer's best friend. Simplifying your business operations so you can focus on what matters most.
            </p>
            <div className="flex flex-col gap-2 mt-4 text-sm text-slate-400">
               <span className="flex items-center gap-2"><MapPin size={16}/> United States</span>
               <span className="flex items-center gap-2"><Phone size={16}/> +1 (320) 529-0199</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-wide">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#compare" className="hover:text-white transition-colors">Compare Features</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="https://detailor-app.vercel.app/login" className="hover:text-white transition-colors">Login</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 space-y-4">
             <h4 className="text-white font-bold tracking-wide">Stay Updated</h4>
             <p className="text-xs text-slate-400 leading-relaxed">Subscribe to our newsletter for the latest features.</p>
             <div className="flex flex-col gap-2">
                <input type="email" placeholder="Email address" className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
                <button className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-bold hover:bg-blue-700 transition-colors">Subscribe</button>
             </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center text-xs text-slate-600">
          <p>© 2026 Detailor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Helper component for the table rows
function TableRow({ feature, e, c, ex }: { feature: string, e: boolean | string, c: boolean | string, ex: boolean | string }) {
  const renderCell = (val: boolean | string) => {
    if (val === true) return <CheckCircle2 className="text-blue-600 mx-auto" size={20} />;
    if (val === false) return <Minus className="text-slate-300 mx-auto" size={20} />;
    return <span className="text-sm font-semibold text-slate-600">{val}</span>;
  };

  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
      <td className="p-4 text-sm font-medium text-slate-700">{feature}</td>
      <td className="p-4 text-center">{renderCell(e)}</td>
      <td className="p-4 text-center">{renderCell(c)}</td>
      <td className="p-4 text-center">{renderCell(ex)}</td>
    </tr>
  );
} 