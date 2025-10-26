import React, { useMemo, useState } from 'react';
import { Star, HeartPulse, BrainCircuit, Bone } from 'lucide-react';

// Sample ranking data to illustrate UI (would be fetched from backend in production)
const SAMPLE = [
  {
    id: 'doc-1',
    name: 'Dr. Ananya Mehta',
    specialty: 'Cardiology',
    icon: HeartPulse,
    experience: 14,
    qualifications: 'MD, DM (Cardio)',
    successRate: 96,
    rating: 4.8,
    hospital: 'Global Heart Institute',
  },
  {
    id: 'doc-2',
    name: 'Dr. Vikram Rao',
    specialty: 'Neurology',
    icon: BrainCircuit,
    experience: 12,
    qualifications: 'MD, DM (Neuro)',
    successRate: 93,
    rating: 4.7,
    hospital: 'NeuroCare Multispeciality',
  },
  {
    id: 'doc-3',
    name: 'Dr. Kavya Sharma',
    specialty: 'Orthopedics',
    icon: Bone,
    experience: 10,
    qualifications: 'MS (Ortho)',
    successRate: 92,
    rating: 4.6,
    hospital: 'Precision Ortho Center',
  },
  {
    id: 'doc-4',
    name: 'Dr. Aarav Nair',
    specialty: 'Cardiology',
    icon: HeartPulse,
    experience: 18,
    qualifications: 'MD, DM (Cardio)',
    successRate: 97,
    rating: 4.9,
    hospital: 'MetroCare Hospitals',
  },
];

const TABS = ['All', 'Cardiology', 'Neurology', 'Orthopedics'];

export default function ProviderRankings() {
  const [tab, setTab] = useState('All');

  const filtered = useMemo(() => {
    if (tab === 'All') return SAMPLE;
    return SAMPLE.filter((d) => d.specialty === tab);
  }, [tab]);

  return (
    <section id="providers" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="mb-6 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Top-rated doctors, updated weekly</h2>
          <p className="max-w-3xl text-gray-300">
            Compare specialists by experience, qualifications, success rates, and patient reviews.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                tab === t
                  ? 'border-cyan-400 bg-cyan-500/10 text-cyan-300'
                  : 'border-white/10 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((doc) => (
            <article
              key={doc.id}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-500/30">
                    <doc.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-tight">{doc.name}</h3>
                    <p className="text-sm text-gray-300">{doc.specialty} • {doc.hospital}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-300">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-semibold">{doc.rating.toFixed(1)}</span>
                </div>
              </div>

              <dl className="mt-4 grid grid-cols-3 gap-3 text-sm">
                <div className="rounded-lg bg-white/5 p-3 text-center ring-1 ring-white/10">
                  <dt className="text-gray-400">Experience</dt>
                  <dd className="mt-1 font-semibold">{doc.experience}+ yrs</dd>
                </div>
                <div className="rounded-lg bg-white/5 p-3 text-center ring-1 ring-white/10">
                  <dt className="text-gray-400">Success</dt>
                  <dd className="mt-1 font-semibold">{doc.successRate}%</dd>
                </div>
                <div className="rounded-lg bg-white/5 p-3 text-center ring-1 ring-white/10">
                  <dt className="text-gray-400">Qualification</dt>
                  <dd className="mt-1 font-semibold">{doc.qualifications}</dd>
                </div>
              </dl>

              <div className="mt-5 flex gap-2">
                <button className="inline-flex flex-1 items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black shadow shadow-cyan-500/20 transition hover:bg-cyan-400">
                  Book Online
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                  View Profile
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
