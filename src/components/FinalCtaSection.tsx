import React from 'react';
import { ArrowRight, Play, CheckCircle2, Zap } from 'lucide-react';

interface FinalCtaSectionProps {
  onStartFree: () => void;
  onBookDemo: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onStartFree,
  onBookDemo,
}) => {
  return (
    <section className="py-28 sm:py-36 bg-[#0a0c10] border-t border-neutral-900 relative overflow-hidden text-center bg-tech-grid">
      {/* Visual Convergence Line with Electric Lime Traveling Signal */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#c8ff00] via-neutral-700 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-400 mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#c8ff00] animate-ping" />
          <span className="text-[#c8ff00]">THE FINAL CONVERGENCE</span>
          <span className="text-neutral-600">/</span>
          <span>INTEGRATIONS · LOGIC · DISPATCH</span>
        </div>

        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase leading-[0.94] max-w-4xl mx-auto">
          ONE SYSTEM.<br />
          <span className="text-white">LESS FRICTION.</span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Join high-velocity operations teams who replaced disconnected tools and manual handovers with one intelligent workflow.
        </p>

        {/* Primary CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onStartFree}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#c8ff00] text-black text-sm font-semibold hover:bg-[#b5e600] active:scale-[0.98] transition-all shadow-xl shadow-[#c8ff00]/20 cursor-pointer"
          >
            <span>START FREE</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onBookDemo}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 text-sm font-medium text-neutral-200 transition-colors cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-[#c8ff00] text-[#c8ff00]" />
            <span>BOOK A DEMO</span>
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-neutral-500">
          <span>TORONTO, ON</span>
          <span>·</span>
          <span>HELLO@SAMPLEHQ.COM</span>
          <span>·</span>
          <span>+1 (416) 555-0198</span>
        </div>
      </div>
    </section>
  );
};
