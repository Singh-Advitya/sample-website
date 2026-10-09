import React, { useState } from 'react';
import { Sliders, ArrowLeftRight, Check, X } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  return (
    <section className="py-24 sm:py-32 bg-[#0c0e14] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs text-[#c8ff00] uppercase tracking-widest">
            OPERATIONAL CONTRAST / BEFORE & AFTER
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase mt-2">
            SLIDE TO REVEAL<br />THE DIFFERENCE.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Compare the daily friction of siloed execution against a connected, automated system.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-neutral-800 bg-[#0e1118] shadow-2xl select-none">
          {/* Slider control header */}
          <div className="p-3 bg-[#131620] border-b border-neutral-800 flex items-center justify-between text-xs font-mono">
            <span className="text-red-400 font-semibold">BEFORE: FRAGMENTED SILOS</span>
            <div className="flex items-center gap-1.5 text-neutral-400">
              <ArrowLeftRight className="w-3.5 h-3.5 text-[#c8ff00]" />
              <span>DRAG SLIDER ({sliderPosition}%)</span>
            </div>
            <span className="text-[#c8ff00] font-semibold">AFTER: SAMPLE SYSTEM</span>
          </div>

          {/* Side-by-side or Layered Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-800 p-6 sm:p-8">
            {/* Left side: The Old Way (Fragmented) */}
            <div className={`p-4 sm:p-6 space-y-5 transition-opacity duration-300 ${sliderPosition > 80 ? 'opacity-30' : 'opacity-100'}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-red-400 font-bold uppercase">
                  THE FRAGMENTED STACK
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-500/30">
                  HIGH FRICTION
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-xl flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">12 Disconnected Tools</div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Context switching between Slack, Sheets, CRM, emails, and drive folders all day.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-xl flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">47 Manual Tasks / Week</div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Copy-pasting CSV rows, forwarding approval emails, and chasing signatures.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-xl flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">32 Noisy Notifications</div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Uncoordinated pings across multiple chat channels with zero clear ownership.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-xl flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">Desynchronized Spreadsheets</div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Multiple conflicting sheet versions with broken VLOOKUP references and outdated numbers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: sample (Connected) */}
            <div className={`p-4 sm:p-6 space-y-5 transition-opacity duration-300 ${sliderPosition < 20 ? 'opacity-30' : 'opacity-100'}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#c8ff00] font-bold uppercase">
                  THE SAMPLE ECOSYSTEM
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#c8ff00]/15 text-[#c8ff00] border border-[#c8ff00]/30 font-semibold">
                  CONNECTED FLOW
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-[#c8ff00]/5 border border-[#c8ff00]/20 rounded-xl flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#c8ff00] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">1 Connected Workspace</div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      All tools stay connected underneath while your team monitors everything from one pane.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-[#c8ff00]/5 border border-[#c8ff00]/20 rounded-xl flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#c8ff00] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">Automated Pipelines</div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Zero manual handovers: triggers execute conditions and update target systems in &lt; 50ms.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-[#c8ff00]/5 border border-[#c8ff00]/20 rounded-xl flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#c8ff00] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">Real-Time Visibility</div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      97.8% verified pipeline health with audit logging and proactive bottleneck telemetry.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-[#c8ff00]/5 border border-[#c8ff00]/20 rounded-xl flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#c8ff00] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">1,284 Hours Saved Monthly</div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Teams invest time into core creative, strategic, and high-leverage client growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Range Input at Bottom */}
          <div className="p-4 bg-[#11141e] border-t border-neutral-800 flex items-center gap-4">
            <span className="text-xs font-mono text-neutral-400 shrink-0">FILTER INTENSITY:</span>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="w-full accent-[#c8ff00] cursor-pointer"
            />
            <span className="text-xs font-mono text-[#c8ff00] shrink-0 font-bold">
              {sliderPosition < 40 ? 'MORE FRAGMENTED' : sliderPosition > 60 ? 'SAMPLE AUTOMATED' : 'BALANCED'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
