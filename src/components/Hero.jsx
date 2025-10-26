import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onExploreProviders }) {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-20 md:px-10 lg:px-12 xl:px-16">
        <div className="mt-10 max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-300 ring-1 ring-inset ring-cyan-500/30">
            HEALTHY NATION • Early Detection & Remote Monitoring
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Smarter care at home: AI-guided screening with real-time vitals and trusted doctors
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-300 md:text-lg">
            A unified experience that connects families to multinational hospitals and specialists. 
            Track SpO2, heart rate, blood pressure, and insulin from wearables, consult with an AI assistant, 
            and access a complete virtual medical history—securely shared with loved ones.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              Get Started
            </a>
            <button
              onClick={onExploreProviders}
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              See Top Doctors
            </button>
          </div>
        </div>

        <ul className="grid w-full grid-cols-1 gap-3 text-sm text-gray-300 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Weekly-updated hospital & doctor rankings by specialty',
            'AI symptom guidance and preventive care recommendations',
            'Secure, multilingual experience with family sharing',
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10 backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
