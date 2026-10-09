import React from 'react';
import { CHANGELOG_ITEMS } from '../data/mockData';
import { Tag, CheckCircle2 } from 'lucide-react';

export const ChangelogSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0c0e14] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-[#c8ff00] uppercase tracking-widest">
            RELEASE LOG / CONTINUOUS SHIPMENT
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase mt-2">
            PRODUCT CHANGELOG.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            A real software platform with continuous weekly updates, feature improvements, and engine hardening.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {CHANGELOG_ITEMS.map((item) => (
            <div
              key={item.version}
              className="p-6 sm:p-8 bg-[#0e1118] border border-neutral-800 rounded-2xl shadow-xl space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold font-mono text-white">v{item.version}</span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      item.badge === 'NEW'
                        ? 'bg-[#c8ff00] text-black'
                        : 'bg-neutral-800 text-neutral-300'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-400">{item.date}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-neutral-400 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="space-y-1.5 pt-2">
                {item.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00]" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
