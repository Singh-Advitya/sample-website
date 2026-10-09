import React from 'react';
import { FICTIONAL_LOGOS } from '../data/mockData';
import { Quote, ArrowRight, CheckCircle2 } from 'lucide-react';

export const CaseStudySection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#090b0e] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fictional Client Logos Marquee */}
        <div className="mb-20 text-center">
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-6">
            TRUSTED BY OPERATIONS TEAMS WORLDWIDE (SAMPLE CLIENT ECOSYSTEM)
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-65 hover:opacity-100 transition-opacity">
            {FICTIONAL_LOGOS.map((logo) => (
              <div key={logo.name} className="flex items-center gap-2 text-neutral-300 font-mono text-sm tracking-wide">
                <span className="text-[#c8ff00] text-lg">{logo.symbol}</span>
                <span className="font-semibold">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Featured Card */}
        <div className="bg-[#0e1118] border border-neutral-800 rounded-2xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Giant Quote & Attribution */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-[#c8ff00] tracking-wider uppercase">
                CASE STUDY / NORTHSTAR STUDIO
              </span>

              <blockquote className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                &ldquo;sample gave our team one place to see what was happening and the automation took hours of repetitive work off our plate.&rdquo;
              </blockquote>

              <div className="flex items-center gap-3.5 pt-2">
                <div className="w-11 h-11 rounded-full bg-[#181d28] border border-[#c8ff00]/40 text-[#c8ff00] font-bold flex items-center justify-center text-sm font-mono">
                  MC
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Maya Chen</div>
                  <div className="text-xs text-neutral-400">Head of Operations · Northstar Studio</div>
                </div>
              </div>
            </div>

            {/* Right: Quantified Impact Cards */}
            <div className="lg:col-span-5 bg-[#131622] border border-neutral-800 rounded-xl p-6 space-y-4 text-left">
              <div className="text-xs font-mono text-neutral-400 pb-2 border-b border-neutral-800">
                TRANSFORMATION METRICS (DEMO DATA)
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-[#0d0f15] rounded-lg border border-neutral-800">
                  <div className="text-[10px] font-mono text-neutral-500">MANUAL STEPS / WEEK</div>
                  <div className="text-lg font-bold font-mono text-red-400">
                    47 manual steps <span className="text-neutral-500 text-xs font-normal">&rarr;</span> <span className="text-[#c8ff00]">12 automated flows</span>
                  </div>
                </div>

                <div className="p-3 bg-[#0d0f15] rounded-lg border border-neutral-800">
                  <div className="text-[10px] font-mono text-neutral-500">OPERATIONAL TIME RECLAIMED</div>
                  <div className="text-lg font-bold font-mono text-[#c8ff00]">
                    34 hrs saved / person / month
                  </div>
                </div>

                <div className="p-3 bg-[#0d0f15] rounded-lg border border-neutral-800">
                  <div className="text-[10px] font-mono text-neutral-500">SLA ADHERENCE</div>
                  <div className="text-lg font-bold font-mono text-white">
                    99.4% cross-team compliance
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-mono text-neutral-500 pt-1">
                Fictional demonstration study for software capability preview.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
