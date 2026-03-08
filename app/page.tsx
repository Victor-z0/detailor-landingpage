"use client";

import React, { useState } from 'react';
import { 
  CheckCircle2, PhoneCall, ShieldCheck, 
  ArrowRight, Mail, MapPin, Phone, 
  Minus, Calculator, ChevronDown, ChevronUp, Zap, Smartphone, 
  Calendar, LayoutDashboard, LineChart, MessageSquare, UserCircle, 
  Settings, Users, Globe, MousePointerClick
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
    { q: "Do clients need the app?", a: "No! Your clients book through your professional web link. They don&apos;t need to download anything to book a service with you." },
    { q: "Are there additional fees for employees?", a: "No. Our plans include team management at no extra cost per seat, allowing you to scale your crew without scaling your bill." },
    { q: "Can I cancel anytime?", a: "Yes. There are no long-term contracts. You can cancel or change your plan at any time directly from your dashboard." },
    { q: "What are the processing fees?", a: "We use Stripe for secure payouts. Processing fees are standard at 2.9% + $0.30 per transaction." },
    { q: "How do I get set up to accept payments?", a: "Simply connect your bank account via our secure Stripe integration in the settings tab. You can start taking deposits and full payments immediately." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white scroll-smooth">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
              <ShieldCheck size={18} className="text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900">detailor.</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 font-semibold text-sm text-slate-600">
            <Link href="#home" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link href="#features" className="hover:text-blue-600 transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
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
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold mb-4">
            Plans from $19/mo
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight text-slate-900 leading-[0.9]">
            Transform Your <br/><span className="text-blue-600">Detailing Business</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Less than one detail per month — streamline your entire operation with the platform built specifically for detailers.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link href="https://detailor-app.vercel.app/login" className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white text-lg font-bold rounded-2xl flex items-center justify-center gap-2 hover:shadow-2xl hover:-translate-y-1 transition-all">
              Start Free Trial <ArrowRight size={20} />
            </Link>
            <Link href="#pricing" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-700 border border-slate-200 text-lg font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
              Learn More
            </Link>
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">7-day free trial · No card required</p>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section id="how-it-works" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">How It Works</h2>
            <p className="text-slate-500 text-lg">Our simple process to transform your business operations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StepCard number="1" title="Set Up Services" desc="Customize your service packages, pricing, and availability in minutes." />
            <StepCard number="2" title="Share Your Link" desc="Send clients to your professional booking page to select services and pay deposits." />
            <StepCard number="3" title="Manage Jobs" desc="Receive notifications and track job details with all vehicle info at your fingertips." />
            <StepCard number="4" title="Grow Revenue" desc="Analyze performance and identify opportunities to increase your client base." />
          </div>
        </div>
      </section>

      {/* --- FEATURE GRID --- */}
      <section id="features" className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Get to know Detailor</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureBox icon={<Calendar />} title="Calendar" desc="Stop Double-Booking. Stop No-Shows." />
            <FeatureBox icon={<LayoutDashboard />} title="Dashboard" desc="Your Day in 5 Seconds or Less." />
            <FeatureBox icon={<LineChart />} title="Insights" desc="Know What&apos;s Actually Making You Money." />
            <FeatureBox icon={<MessageSquare />} title="Messaging" desc="Stop Losing Messages (and Clients)." />
            <FeatureBox icon={<Globe />} title="Business Profile" desc="Look Professional. Get Booked More." />
            <FeatureBox icon={<MousePointerClick />} title="Booking" desc="Book Jobs While You Sleep." />
          </div>
        </div>
      </section>

      {/* --- PRICING GRID --- */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold">Pricing Plans</h2>
            <p className="text-slate-500 text-lg">New lower prices — choose the perfect plan for your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Essential */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col hover:border-blue-200 transition-colors">
              <h3 className="text-xl font-bold mb-1">Detailer Essential</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">For detailers just starting out.</p>
              <div className="mb-8">
                <span className="text-slate-400 line-through text-lg font-bold">$59</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-slate-900">$19</span>
                  <span className="text-slate-500 font-bold">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Basic Booking Page ⭐', 'Built-in Payments', 'Team Management', 'Basic Insights'].map((f, i) => (
                  <li key={i} className="flex gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="https://detailor-app.vercel.app/login" className="w-full py-4 bg-slate-100 text-slate-900 rounded-2xl font-bold text-center hover:bg-slate-200 transition-colors">Start Essential</Link>
            </div>

            {/* Choice */}
            <div className="bg-white rounded-3xl p-8 border-2 border-blue-600 shadow-2xl relative flex flex-col md:scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Popular</div>
              <h3 className="text-xl font-bold mb-1">Detailer Choice</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">Best for established detailing businesses.</p>
              <div className="mb-8">
                <span className="text-slate-400 line-through text-lg font-bold">$149</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-blue-600">$99</span>
                  <span className="text-slate-500 font-bold">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Everything in Essential', 'Custom Services', 'In-app Client Chat', 'Online Estimate Requests'].map((f, i) => (
                  <li key={i} className="flex gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="https://detailor-app.vercel.app/login" className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-center hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">Go Pro</Link>
            </div>

            {/* Exclusive */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col hover:border-blue-200 transition-colors">
              <h3 className="text-xl font-bold mb-1">Detailer Exclusive</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">Scaling your business to the next level.</p>
              <div className="mb-8">
                <span className="text-slate-400 line-through text-lg font-bold">$249</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-slate-900">$199</span>
                  <span className="text-slate-500 font-bold">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Everything in Choice', 'Customizable Booking Page ⭐', 'Third Row Detection', 'Advanced Insights'].map((f, i) => (
                  <li key={i} className="flex gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="https://detailor-app.vercel.app/login" className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-center hover:bg-black transition-colors">Grow with Exclusive</Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- ROI CALCULATOR --- */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-extrabold leading-tight">For the Price of <br/><span className="text-blue-500 text-6xl">One Detail.</span></h2>
            <p className="text-slate-400 text-lg">Adjust the sliders to see how quickly Detailor pays for itself.</p>
          </div>

          <div className="lg:w-1/2 w-full bg-white text-slate-900 rounded-[2.5rem] p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2"><Calculator className="text-blue-600" /> ROI Calculator</h3>
            <div className="space-y-8 mb-10">
              <RangeSlider label="Average job value" val={avgJob} setVal={setAvgJob} min={50} max={500} prefix="$" />
              <RangeSlider label="Extra jobs per month" val={extraJobs} setVal={setExtraJobs} min={1} max={20} suffix=" jobs" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-3xl text-center">
                <p className="text-xs font-bold text-slate-500 uppercase mb-1">Monthly ROI</p>
                <p className="text-4xl font-black text-green-600">${monthlyRoi.toLocaleString()}</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl text-center">
                <p className="text-xs font-bold text-slate-500 uppercase mb-1">Annual ROI</p>
                <p className="text-4xl font-black text-blue-600">${(monthlyRoi * 12).toLocaleString()}</p>
              </div>
            </div>
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
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-400 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-16 mb-8">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck className="text-blue-500" />
              <span className="font-extrabold text-2xl tracking-tight">detailor.</span>
            </div>
            <p className="text-sm max-w-sm">Simplifying your business operations so you can focus on what matters most.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
              <li><Link href="#faq">FAQ</Link></li>
            </ul>
          </div>
          <div className="space-y-4 text-sm">
            <h4 className="text-white font-bold tracking-wider uppercase text-xs">Stay Updated</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white text-xs flex-1 focus:outline-none focus:border-blue-600" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xs">Subscribe</button>
            </div>
          </div>
        </div>
        <p className="text-center text-[10px] uppercase font-bold tracking-widest text-slate-600">© 2026 Detailor LLC. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// HELPERS
function StepCard({ number, title, desc }: any) {
  return (
    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors">
      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black mb-6 shadow-lg shadow-blue-200">{number}</div>
      <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function FeatureBox({ icon, title, desc }: any) {
  return (
    <div className="p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
      <div className="mb-6 text-blue-600 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm font-medium">{desc}</p>
    </div>
  );
}

function RangeSlider({ label, val, setVal, min, max, prefix = "", suffix = "" }: any) {
  return (
    <div>
      <div className="flex justify-between mb-3"><label className="text-sm font-bold text-slate-500">{label}</label><span className="text-blue-600 font-black">{prefix}{val}{suffix}</span></div>
      <input type="range" min={min} max={max} value={val} onChange={(e) => setVal(Number(e.target.value))} className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600" />
    </div>
  );
}