import React from 'react';
import { CalendarDays } from 'lucide-react';

export default function CTAFooter() {
  return (
    <footer id="get-started" className="w-full bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8 ring-1 ring-cyan-500/20 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Proactive health, for every family</h3>
            <p className="mt-2 max-w-2xl text-gray-300">
              Affordable at-home screening devices, multilingual support, and privacy-first sharing with local providers.
            </p>
            <p className="mt-2 text-sm text-gray-400">Team: Kailash P, Sanjeev Reddy</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="#providers"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
            >
              <CalendarDays className="h-4 w-4" />
              Book a monthly appointment
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Explore features
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row">
          <p>© {new Date().getFullYear()} Healthy Nation. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#providers" className="hover:text-white">Top Doctors</a>
            <a href="#get-started" className="hover:text-white">Get Started</a>
          </nav>
        </div>
      </section>
    </footer>
  );
}
