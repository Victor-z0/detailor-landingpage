"use client";

import React from 'react';
import { Zap, ShieldCheck, ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function DetailorLanding() {
  return (
    <div className="min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <ShieldCheck size={18} className="text-white" />
            </div>
            <span className="font-black italic text-xl tracking-tighter">detailor.</span>
          </div>
          <button className="bg-black text-white px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all">
            Get the Tool
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-100">
            <Zap size={12} className="fill-black" />
            <span className="text-[10px] font-bold uppercase tracking-widest">v1.0 Launch</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.9]">
            Detailing<br/><span className="text-gray-200">Simplified.</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-500 font-medium leading-relaxed">
            The simple, high-performance landing page tool for detailing professionals. Manage bookings and impress clients with a clean OS aesthetic.
          </p>
          <div className="pt-6">
            <button className="px-10 py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full flex items-center gap-3 mx-auto shadow-2xl hover:bg-gray-800 transition-all">
              Initialize Project <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-gray-100">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          © 2026 Detailor Landing Page. Built for Speed.
        </p>
      </footer>
    </div>
  );
}