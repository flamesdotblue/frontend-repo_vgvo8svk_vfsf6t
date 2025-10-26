import React from 'react';
import { HeartPulse, Stethoscope, Activity, ShieldCheck, CalendarDays, Globe, Users, FileText, BellRing } from 'lucide-react';

const features = [
  {
    title: 'AI Symptom Guidance',
    desc: 'Conversational triage suggests next steps, home care, and when to see a specialist.',
    icon: Stethoscope,
  },
  {
    title: 'Wearable Integration',
    desc: 'Connect smartwatches and rings to track SpO2, heart rate, BP, and insulin trends.',
    icon: Activity,
  },
  {
    title: 'Virtual Medical History',
    desc: 'Securely store records and share with new hospitals—no more paper files.',
    icon: FileText,
  },
  {
    title: 'Family Sharing',
    desc: 'Keep loved ones informed with real-time updates and alerts.',
    icon: Users,
  },
  {
    title: 'Proactive Health Alerts',
    desc: 'Weekly/monthly trend analysis with personalized risk notifications.',
    icon: BellRing,
  },
  {
    title: 'Privacy & Security',
    desc: 'Enterprise-grade encryption and consent-first sharing with providers.',
    icon: ShieldCheck,
  },
  {
    title: 'Global Network',
    desc: 'Collaborations with leading hospitals and specialists across regions.',
    icon: Globe,
  },
  {
    title: 'Chronic Care Focus',
    desc: 'Support for diabetes, hypertension, cardiovascular, neural, and more.',
    icon: HeartPulse,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-gradient-to-b from-black to-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Unified care, built for families</h2>
          <p className="max-w-3xl text-gray-300">
            Screen early, monitor continuously, and choose the right provider with confidence. 
            Designed for multilingual access and affordability.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
