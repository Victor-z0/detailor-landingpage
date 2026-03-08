"use client";

import React, { useState } from 'react';
import { 
  CheckCircle2, PhoneCall, ShieldCheck, 
  ArrowRight, Mail, MapPin, Phone, 
  Minus, Calculator, ChevronDown, ChevronUp, Zap, Smartphone, Globe, Info
} from 'lucide-react';
import Link from 'next/link';

export default function DetailorLanding() {
  // ROI Calculator State
  const [avgJob, setAvgJob] = useState(150);
  const [extraJobs, setExtraJobs] = useState(2);
  const [adminHours, setAdminHours] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(25);

  const monthlyExtraRevenue = extraJobs * avgJob;
  const monthlyTimeSavings = adminHours * hourlyRate * 4;
  const monthlyValue = monthlyExtraRevenue + monthlyTimeSavings;
  const monthlyCost = 199;
  const monthlyRoi = monthlyValue - monthlyCost;
  const roiPercent = Math.round((monthlyRoi / monthlyCost) * 100);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Can I change plans anytime?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and your billing will be prorated accordingly." },
    { q: "Is there a setup fee?", a: "No, there are no setup fees for any of our plans. You can get started right away with no additional costs." },
    { q: "What payment methods do you accept?", a: "We accept all major credit cards. All payments are securely processed via Stripe." },
    { q: "What are the processing fees?", a: "Because we use Stripe for secure payouts, we charge a small processing fee of 2.9% + $0.30 per transaction." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white scroll-smooth">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
              <ShieldCheck size={18} className="text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900">detailor.</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 font-semibold text-sm text-slate-600">
            <Link href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="#compare" className="hover:text-blue-600 transition-colors">Compare</Link>
            <Link href="#faq" className="hover:text-blue-600 transition-colors">FAQ</Link>
          </div>
          
          <Link href="https://detailor-app.vercel.app/login" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-sm">
            Login
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-32 md:pt-48 pb-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            7-Day Free Trial Available
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
            The all-in-one hub for <br className="hidden md:block"/><span className="text-blue-600">detailers.</span>
          </h1>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Automate your bookings, estimates, and customer reminders. Built by detailers, for detailers.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-xl hover:-translate-y-1 transition-all">
              View Pricing <ArrowRight size={18} />
            </Link>
            <div className="flex gap-2">
               <div className="px-3 py-2 bg-slate-900 text-white rounded-lg flex items-center gap-2 border border-slate-700 opacity-50 cursor-not-allowed">
                  <Smartphone size={16} />
                  <div className="text-left"><p className="text-[8px] uppercase font-bold">Soon on</p><p className="text-[10px] font-bold">App Store</p></div>
               </div>
               <div className="px-3 py-2 bg-slate-900 text-white rounded-lg flex items-center gap-2 border border-slate-700 opacity-50 cursor-not-allowed">
                  <Zap size={16} className="text-blue-500 fill-blue-500" />
                  <div className="text-left"><p className="text-[8px] uppercase font-bold">Soon on</p><p className="text-[10px] font-bold">Play Store</p></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING GRID --- */}
      <section id="pricing" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold">Pricing Plans</h2>
            <p className="text-slate-500 text-lg">One extra detail a month covers your entire subscription.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Essential */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col hover:border-blue-200 transition-colors">
              <h3 className="text-xl font-bold mb-1">Detailer Essential</h3>
              <p className="text-slate-500 text-sm mb-6">Starting out? Get the basics.</p>
              <div className="mb-8">
                <span className="text-slate-400 line-through text-lg font-bold">$59</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold">$19</span>
                  <span className="text-slate-500 font-bold">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Basic Booking Page', 'Built-in Payments', 'Basic Insights', 'Email Estimates'].map((f, i) => (
                  <li key={i} className="flex gap-3 text-sm font-medium text-slate-700 items-start">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="https://detailor-app.vercel.app/login" className="w-full py-3 bg-slate-100 text-slate-900 rounded-xl font-bold text-center hover:bg-slate-200 transition-colors">Start Essential</Link>
            </div>

            {/* Choice */}
            <div className="bg-white rounded-3xl p-8 border-2 border-blue-600 shadow-2xl relative flex flex-col md:scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Popular</div>
              <h3 className="text-xl font-bold mb-1">Detailer Choice</h3>
              <p className="text-slate-500 text-sm mb-6">For the established professional.</p>
              <div className="mb-8">
                <span className="text-slate-400 line-through text-lg font-bold">$149</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-blue-600">$99</span>
                  <span className="text-slate-500 font-bold">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Everything in Essential', 'Custom Services', 'Online Estimate Requests', 'In-app Client Chat', 'Revenue Heat Maps'].map((f, i) => (
                  <li key={i} className="flex gap-3 text-sm font-medium text-slate-700 items-start">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="https://detailor-app.vercel.app/login" className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-center hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">Go Pro</Link>
            </div>

            {/* Exclusive */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col hover:border-blue-200 transition-colors">
              <h3 className="text-xl font-bold mb-1">Detailer Exclusive</h3>
              <p className="text-slate-500 text-sm mb-6">Scale your shop to the next level.</p>
              <div className="mb-8">
                <span className="text-slate-400 line-through text-lg font-bold">$249</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold">$199</span>
                  <span className="text-slate-500 font-bold">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Everything in Choice', 'Custom Booking URL', 'Third Row Detection', 'Advanced Analytics', 'SMS Marketing Campaigns'].map((f, i) => (
                  <li key={i} className="flex gap-3 text-sm font-medium text-slate-700 items-start">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="https://detailor-app.vercel.app/login" className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-center hover:bg-black transition-colors">Grow with Exclusive</Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- MOBILE-FRIENDLY ROI CALCULATOR --- */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-extrabold leading-tight">For the Price of <br/><span className="text-blue-500 text-5xl md:text-6xl">One Detail.</span></h2>
            <p className="text-slate-400 text-lg max-w-lg">Our Detailer Exclusive plan costs $199/mo—the same as a typical full detail service. The ROI is immediate.</p>
            <div className="p-5 bg-blue-600/10 border border-blue-500/30 rounded-2xl flex gap-4">
              <Zap className="text-blue-500 flex-shrink-0" size={24} />
              <p className="text-blue-100 text-sm">If Detailor helps you book just 2 extra jobs, the platform pays for itself twice over.</p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full bg-white text-slate-900 rounded-[2.5rem] p-6 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2"><Calculator className="text-blue-600" /> ROI Calculator</h3>
            <div className="space-y-8 mb-10">
              <RangeSlider label="Average job value" val={avgJob} setVal={setAvgJob} min={50} max={500} prefix="$" />
              <RangeSlider label="Extra jobs per month" val={extraJobs} setVal={setExtraJobs} min={1} max={20} suffix=" jobs" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Monthly ROI</p>
                <p className="text-4xl font-black text-green-600">${monthlyRoi.toLocaleString()}</p>
                <p className="text-xs text-green-500 font-bold mt-2">{roiPercent}% Return</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Annual ROI</p>
                <p className="text-4xl font-black text-blue-600">${(monthlyRoi * 12).toLocaleString()}</p>
                <p className="text-xs text-blue-500 font-bold mt-2">12-Month Profit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DEEP FEATURE COMPARISON (Mobile Responsive) --- */}
      <section id="compare" className="py-24 px-6 bg-slate-50 border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Compare Features</h2>
            <p className="text-slate-500">Find the perfect fit for your detailing business.</p>
          </div>
          <div className="bg-white rounded-[2rem] border border-slate-200 overflow-x-auto shadow-sm">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-6 text-left text-sm font-bold text-slate-500">Feature</th>
                  <th className="p-6 text-center text-sm font-bold text-slate-900">Essential ($19)</th>
                  <th className="p-6 text-center text-sm font-bold text-slate-900">Choice ($99)</th>
                  <th className="p-6 text-center text-sm font-bold text-slate-900">Exclusive ($199)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <ComparisonRow label="Unlimited Jobs" e={true} c={true} ex={true} />
                <ComparisonRow label="Built-in Stripe Payments" e={true} c={true} ex={true} />
                <ComparisonRow label="In-app Client Messaging" e={false} c={true} ex={true} />
                <ComparisonRow label="Online Estimates" e="Basic" c="Requests" ex="Advanced" />
                <ComparisonRow label="Third Row Detection" e={false} c={false} ex={true} />
                <ComparisonRow label="Revenue Heat Maps" e={false} c={true} ex={true} />
                <ComparisonRow label="SMS Marketing" e={false} c={false} ex="Coming Soon" />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <button className="w-full p-6 text-left flex justify-between items-center bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <span className="font-bold text-slate-900">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-slate-400" />}
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-400 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-16 mb-8">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck className="text-blue-500" />
              <span className="font-extrabold text-2xl tracking-tight">detailor.</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">The software infrastructure built specifically for the detailing industry. Book more, work smarter.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/resources" className="hover:text-white">How it Works</Link></li>
              <li><Link href="#" className="hover:text-white">Support</Link></li>
            </ul>
          </div>
          <div className="space-y-4 text-sm">
            <h4 className="text-white font-bold tracking-wider uppercase text-xs">Stay Updated</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white text-xs flex-1 focus:outline-none focus:border-blue-600" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xs">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-600">
          <p>© 2026 Detailor App. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// UI HELPER COMPONENTS
function RangeSlider({ label, val, setVal, min, max, prefix = "", suffix = "" }: any) {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <label className="text-sm font-bold text-slate-500">{label}</label>
        <span className="text-blue-600 font-extrabold text-lg">{prefix}{val}{suffix}</span>
      </div>
      <input type="range" min={min} max={max} value={val} onChange={(e) => setVal(Number(e.target.value))} className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600" />
    </div>
  );
}

function ComparisonRow({ label, e, c, ex }: { label: string, e: any, c: any, ex: any }) {
  const check = (v: any) => {
    if (v === true) return <CheckCircle2 className="mx-auto text-blue-600" size={20} />;
    if (v === false) return <Minus className="mx-auto text-slate-200" size={18} />;
    return <span className="text-[10px] font-black uppercase text-slate-400 bg-slate-50 px-2 py-1 rounded">{v}</span>;
  };
  return (
    <tr>
      <td className="p-6 text-sm font-bold text-slate-700">{label}</td>
      <td className="p-6 text-center">{check(e)}</td>
      <td className="p-6 text-center">{check(c)}</td>
      <td className="p-6 text-center">{check(ex)}</td>
    </tr>
  );
}