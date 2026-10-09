import React, { useState } from 'react';
import { SOLUTIONS_DATA } from '../data/mockData';
import { SolutionRole } from '../types';
import { ArrowRight, CheckCircle2, Sliders, Zap } from 'lucide-react';

export const SolutionsExplorer: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<SolutionRole>('operations');

  const current = SOLUTIONS_DATA[selectedRole] || SOLUTIONS_DATA.operations;

  const roles: { id: SolutionRole; label: string }[] = [
    { id: 'operations', label: 'OPERATIONS' },
    { id: 'marketing', label: 'MARKETING' },
    { id: 'sales', label: 'SALES' },
    { id: 'product', label: 'PRODUCT' },
    { id: 'finance', label: 'FINANCE' },
    { id: 'customer_success', label: 'CUSTOMER SUCCESS' },
  ];

  return (
    <section id="solutions" className="py-24 sm:py-32 bg-[#090b0e] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs text-[#c8ff00] uppercase tracking-widest">
            SOLUTIONS EXPLORER / ROLE ADAPTATION
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase mt-2">
            WHAT DOES YOUR<br />TEAM NEED?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Select your discipline. The entire product workflow adapts immediately to your operational challenges.
          </p>

          {/* Interactive Role Switcher Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#12151e] border border-neutral-800 rounded-xl max-w-2xl mx-auto">
            {roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedRole(r.id)}
                className={`px-3 py-2 text-xs font-mono font-medium rounded-lg transition-all cursor-pointer ${
                  selectedRole === r.id
                    ? 'bg-[#c8ff00] text-black font-semibold shadow-md shadow-[#c8ff00]/10'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Adaptive Dynamic Solution Card */}
        <div className="bg-[#0e1118] border border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Solution Detail & Impact KPIs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#c8ff00] tracking-wider uppercase">
                  SAMPLE FOR {current.name.toUpperCase()}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 leading-snug">
                  {current.headline}
                </h3>
                <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* KPIs Grid */}
              <div className="grid grid-cols-3 gap-3">
                {current.kpis.map((kpi, idx) => (
                  <div key={idx} className="p-3 bg-[#131622] rounded-xl border border-neutral-800">
                    <div className="text-lg sm:text-xl font-bold font-mono text-[#c8ff00]">
                      {kpi.value}
                    </div>
                    <div className="text-[11px] text-neutral-400 mt-1 font-mono leading-tight">
                      {kpi.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Tailored Interactive Workflow Diagram */}
            <div className="lg:col-span-6 bg-[#131722] border border-neutral-800 rounded-xl p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <span className="text-xs font-mono text-neutral-300 font-semibold">
                  TEMPLATE: {current.sampleWorkflow.title}
                </span>
                <span className="text-[10px] font-mono text-[#c8ff00]">READY TO DEPLOY</span>
              </div>

              {/* Trigger node */}
              <div className="p-3 bg-[#0d0f15] border border-neutral-800 rounded-lg text-left">
                <div className="text-[10px] font-mono text-[#c8ff00]">WHEN TRIGGER OCCURS</div>
                <div className="text-xs font-semibold text-white mt-0.5">
                  {current.sampleWorkflow.trigger}
                </div>
              </div>

              {/* Actions flow */}
              <div className="space-y-1.5 text-left">
                <div className="text-[10px] font-mono text-neutral-400">AUTOMATED SEQUENCE</div>
                {current.sampleWorkflow.actions.map((act, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-[#171b26] border border-neutral-800/80 rounded-lg text-xs text-neutral-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00]" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>

              {/* Outcome node */}
              <div className="p-3 bg-[#182114] border border-[#c8ff00]/40 rounded-lg text-left">
                <div className="text-[10px] font-mono text-[#c8ff00]">MEASURED OUTCOME</div>
                <div className="text-xs font-semibold text-white mt-0.5">
                  {current.sampleWorkflow.outcome}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
