"use client";

import React, { useState } from 'react';
import { 
  CheckCircle2, PhoneCall, ShieldCheck, 
  ArrowRight, Mail, MapPin, Phone, 
  Minus, Calculator, ChevronDown, ChevronUp, Zap, Smartphone
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
  const monthlyTimeSavings = adminHours * hourlyRate * 4;
  const monthlyValue = monthlyExtraRevenue + monthlyTimeSavings;
  const monthlyCost = 199;
  const monthlyRoi = monthlyValue - monthlyCost;
  const roiPercent = Math.round((monthlyRoi / monthlyCost) * 100);
  const annualRoi = monthlyRoi * 12;

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { 
      q: "Can I change plans anytime?", 
      a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and your billing will be prorated accordingly." 
    },
    { 
      q: "Is there a setup fee?", 
      a: "No, there are no setup fees for any of our plans. You can get started right away with no additional costs." 
    },
    { 
      q: "What payment methods do you accept?", 
      a: "We accept all major credit cards (Visa, Mastercard, American Express, Discover). All payments are securely processed via Stripe." 
    },
    { 
      q: "Can I cancel anytime?", 
      a: "Yes, you can cancel your subscription at any time with no cancellation fees. There are no long-term contracts or commitments." 
    },
    { 
      q: "What are the processing fees?", 
      a: "Because we use Stripe for secure, immediate payouts, we charge a small processing fee of 2.9% + $0.30 per transaction. This is standard for online payment processing." 
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
            
            <div className="flex gap-3">
              <button className="h-12 w-36 bg-slate-900 text-white rounded-lg flex items-center justify-center gap-2 px-3 border border-slate-700 hover:bg-slate-800 transition-all">
                <Smartphone size={20} className="text-slate-400" />
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Soon on the</p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </button>
              <button className="h-12 w-36 bg-slate-900 text-white rounded-lg flex items-center justify-center gap-2 px-3 border border-slate-700 hover:bg-slate-800 transition-all">
                <Zap size={20} className="text-blue-500 fill-blue-500" />
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Soon on</p>
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="pricing" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Pricing Plans</h2>
            <p className="text-slate-500 text-lg font-medium">Affordable pricing for every detailer. One extra detail a month covers everything.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Essential */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col h-full">
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

            {/* Choice */}
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

            {/* Exclusive */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col h-full">
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

      {/* --- ROI CALCULATOR --- */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">For the Price of <span className="text-blue-500">One Detail.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our Detailer Exclusive plan costs $199/month - the same as a typical full detail service. The ROI is immediate.
            </p>
            <div className="p-6 bg-blue-600/10 border border-blue-500/30 rounded-2xl">
              <p className="text-blue-400 font-bold flex items-center gap-2">
                <Zap size={20} /> If Detailor helps you book just 2 extra jobs, it pays for itself.
              </p>
            </div>
          </div>
          
          <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="text-blue-600" size={28} />
              <h3 className="text-2xl font-bold">ROI Calculator</h3>
            </div>
            
            <div className="space-y-6 mb-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-500 font-medium text-sm">Avg job value</span>
                  <span className="font-bold text-blue-600">${avgJob}</span>
                </div>
                <input type="range" min="50" max="500" step="10" value={avgJob} onChange={(e) => setAvgJob(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-500 font-medium text-sm">Extra jobs / mo</span>
                  <span className="font-bold text-blue-600">{extraJobs}</span>
                </div>
                <input type="range" min="1" max="15" step="1" value={extraJobs} onChange={(e) => setExtraJobs(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500 font-medium mb-1">Monthly ROI</p>
                <p className="text-3xl font-extrabold text-green-600">${monthlyRoi.toLocaleString()}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-500 font-medium mb-1">Annual ROI</p>
                <p className="text-3xl font-extrabold text-blue-600">${annualRoi.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden cursor-pointer" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <div className="p-6 flex justify-between items-center">
                  <span className="font-bold text-slate-900">{faq.q}</span>
                  {openFaq === index ? <ChevronUp className="text-blue-600" size={20} /> : <ChevronDown className="text-slate-400" size={20} />}
                </div>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-300 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-slate-800 pb-12 mb-8">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck size={24} className="text-blue-500" />
              <span className="font-extrabold text-2xl tracking-tight">detailor.</span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs">Simplifying your business operations so you can focus on what matters most.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="#pricing">Pricing</Link></li>
              <li><Link href="/resources">Resources</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs text-slate-600">© 2026 Detailor. All rights reserved.</p>
      </footer>
    </div>
  );
}

function TableRow({ feature, e, c, ex }: { feature: string, e: any, c: any, ex: any }) {
  const renderCell = (val: any) => {
    if (val === true) return <CheckCircle2 className="text-blue-600 mx-auto" size={20} />;
    if (val === false) return <Minus className="text-slate-300 mx-auto" size={20} />;
    return <span className="text-sm font-semibold text-slate-600">{val}</span>;
  };
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50">
      <td className="p-4 text-sm font-medium text-slate-700">{feature}</td>
      <td className="p-4 text-center">{renderCell(e)}</td>
      <td className="p-4 text-center">{renderCell(c)}</td>
      <td className="p-4 text-center">{renderCell(ex)}</td>
    </tr>
  );
}