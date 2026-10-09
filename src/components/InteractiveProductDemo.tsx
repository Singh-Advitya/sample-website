import React, { useState } from 'react';
import { Play, Check, ChevronRight, Activity, Zap, CheckCircle2, Sliders, Bell, ArrowRight, RotateCcw } from 'lucide-react';

export const InteractiveProductDemo: React.FC = () => {
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [activeSignalNode, setActiveSignalNode] = useState<number>(0);
  const [hasCompletedOnce, setHasCompletedOnce] = useState<boolean>(false);

  const stages = [
    {
      num: '01',
      label: 'OVERVIEW',
      title: 'Real-time Command Dashboard',
      description:
        'A single pane of glass into every operational flow, automated execution, and bottleneck indicator across the company.',
    },
    {
      num: '02',
      label: 'WORKFLOW',
      title: 'Visual DAG Node Builder',
      description:
        'Map multi-step operations visually with deterministic conditional branching, timeouts, and automatic retry queues.',
    },
    {
      num: '03',
      label: 'AUTOMATE',
      title: 'Rules Engine & Conditions',
      description:
        'Define precise triggers: score thresholds, payload validation, and instant branch dispatch in sub-50 milliseconds.',
    },
    {
      num: '04',
      label: 'INSIGHTS',
      title: 'Telemetry & Health Profiling',
      description:
        'Watch real-time chart points construct dynamic trend lines, latency percentiles, and department-level efficiency gains.',
    },
    {
      num: '05',
      label: 'RESULT',
      title: 'Zero-Touch Outcome Delivery',
      description:
        'Work completes without manual intervention. Records sync, teams are notified in Slack, and 1,284 hours are saved each month.',
    },
  ];

  // Signal packet travel animation trigger
  const runSignalAnimation = () => {
    setActiveSignalNode(1);
    const times = [0, 450, 900, 1350, 1800, 2250];
    times.forEach((t, idx) => {
      setTimeout(() => {
        setActiveSignalNode(idx + 1);
        if (idx === times.length - 1) {
          setTimeout(() => {
            setActiveSignalNode(0);
            if (currentStage < 5) {
              const next = currentStage + 1;
              setCurrentStage(next);
              if (next === 5) setHasCompletedOnce(true);
            }
          }, 600);
        }
      }, t);
    });
  };

  const handleSelectStage = (idx: number) => {
    setCurrentStage(idx);
    if (idx === 5) setHasCompletedOnce(true);
  };

  const handleNextStage = () => {
    if (currentStage < 5) {
      const next = currentStage + 1;
      setCurrentStage(next);
      if (next === 5) setHasCompletedOnce(true);
    }
  };

  return (
    <section id="product-demo" className="py-24 sm:py-32 bg-[#0a0c10] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400 mb-2">
            <span className="text-[#c8ff00] font-bold">CHAPTER 02 / PRODUCT DEMO</span>
            <span className="text-neutral-600">/</span>
            <span>STAGE {stages[currentStage - 1].num} OF 05</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase mt-1">
            OPERATE THE SOFTWARE.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
            Step through the core execution stages of SAMPLE SAAS WEBSITE. Inspect live payloads, test rule conditions, and watch outcomes dispatch.
          </p>

          {/* Stage Selector Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#12151e] border border-neutral-800 rounded-xl max-w-2xl mx-auto">
            {stages.map((st, idx) => {
              const active = currentStage === idx + 1;
              return (
                <button
                  key={st.num}
                  onClick={() => handleSelectStage(idx + 1)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                    active
                      ? 'bg-[#c8ff00] text-black shadow-md shadow-[#c8ff00]/10 font-bold'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                  }`}
                >
                  <span>{st.num}</span>
                  <span className="hidden sm:inline">/ {st.label}</span>
                </button>
              );
            })}

            {hasCompletedOnce && (
              <span className="text-[10px] font-mono text-[#c8ff00] bg-[#c8ff00]/15 px-2 py-1 rounded border border-[#c8ff00]/30 font-semibold ml-1 hidden sm:inline-block">
                FINAL SCENE SETTLED
              </span>
            )}
          </div>
        </div>

        {/* Dynamic Display Canvas */}
        <div className="w-full bg-[#0e1118] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Header Bar */}
          <div className="px-5 py-3.5 bg-[#141822] border-b border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#c8ff00] font-bold">
                STAGE {stages[currentStage - 1].num} // {stages[currentStage - 1].label}
              </span>
              <span className="hidden md:inline text-xs font-medium text-neutral-300">
                — {stages[currentStage - 1].title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={runSignalAnimation}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#c8ff00]/10 hover:bg-[#c8ff00]/25 border border-[#c8ff00]/30 text-[#c8ff00] text-[11px] font-mono cursor-pointer transition-colors"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>FIRE LIME SIGNAL</span>
              </button>

              {currentStage < 5 && (
                <button
                  onClick={handleNextStage}
                  className="flex items-center gap-1 px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-white text-[11px] font-mono cursor-pointer transition-colors"
                >
                  <span>NEXT STAGE</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Dynamic Content Views based on currentStage */}
          <div className="p-6 sm:p-8 min-h-[360px] flex flex-col justify-center">
            {currentStage === 1 && (
              /* 01: OVERVIEW STAGE */
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#141722] border border-neutral-800 rounded-xl">
                    <span className="text-[10px] font-mono text-neutral-400">DISPATCHED WORKFLOWS</span>
                    <div className="text-2xl font-bold font-mono text-white mt-1">148 ACTIVE</div>
                    <div className="text-xs text-[#c8ff00] mt-1 font-mono">0 blocked in queue</div>
                  </div>
                  <div className="p-4 bg-[#141722] border border-neutral-800 rounded-xl">
                    <span className="text-[10px] font-mono text-neutral-400">AVERAGE LATENCY</span>
                    <div className="text-2xl font-bold font-mono text-white mt-1">38.4 ms</div>
                    <div className="text-xs text-neutral-400 mt-1 font-mono">Edge worker compute</div>
                  </div>
                  <div className="p-4 bg-[#141722] border border-[#c8ff00]/30 rounded-xl">
                    <span className="text-[10px] font-mono text-[#c8ff00]">WORKFLOW HEALTH</span>
                    <div className="text-2xl font-bold font-mono text-white mt-1">97.8%</div>
                    <div className="text-xs text-[#c8ff00] mt-1 font-mono">Continuous SLA verification</div>
                  </div>
                </div>

                <div className="p-4 bg-[#12151e] border border-neutral-800 rounded-xl">
                  <div className="text-xs font-mono text-neutral-400 mb-2">ACTIVE TEAM HUBS</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-2.5 bg-[#171b26] rounded-lg">
                      <div className="font-semibold text-white">Operations</div>
                      <div className="text-neutral-400 text-[11px] mt-0.5">34 flows · 99.1% pass</div>
                    </div>
                    <div className="p-2.5 bg-[#171b26] rounded-lg">
                      <div className="font-semibold text-white">Revenue / Sales</div>
                      <div className="text-neutral-400 text-[11px] mt-0.5">42 flows · 98.4% pass</div>
                    </div>
                    <div className="p-2.5 bg-[#171b26] rounded-lg">
                      <div className="font-semibold text-white">Marketing</div>
                      <div className="text-neutral-400 text-[11px] mt-0.5">28 flows · 97.2% pass</div>
                    </div>
                    <div className="p-2.5 bg-[#171b26] rounded-lg">
                      <div className="font-semibold text-white">Customer Support</div>
                      <div className="text-neutral-400 text-[11px] mt-0.5">44 flows · 98.9% pass</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStage === 2 && (
              /* 02: WORKFLOW STAGE (Visual DAG Builder) */
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="text-left mb-1 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">
                    CANVAS // LEAD QUALIFICATION & ROUTING PIPELINE
                  </span>
                  <span className="text-xs font-mono text-[#c8ff00]">
                    ZERO LATENCY QUEUE
                  </span>
                </div>

                {/* Nodes Chain with Animated Lime Signal Indicator */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {[
                    { idx: 1, step: 'WHEN', name: 'New Lead Webhook', detail: 'Payload parsed (Stripe + Web)' },
                    { idx: 2, step: 'CHECK', name: 'Score Quality', detail: 'Lead score threshold > 80' },
                    { idx: 3, step: 'IF', name: 'Branching Rule', detail: 'Score = 94 -> Route High Intent' },
                    { idx: 4, step: 'ACTION', name: 'Salesforce Opportunity', detail: 'Record created & assigned' },
                    { idx: 5, step: 'NOTIFY', name: 'Slack #enterprise-alerts', detail: 'Card with rep assignment' },
                  ].map((node) => {
                    const isActive = activeSignalNode === node.idx;
                    return (
                      <div
                        key={node.idx}
                        className={`p-3.5 rounded-xl border transition-all duration-200 text-left relative ${
                          isActive
                            ? 'bg-[#1a2113] border-[#c8ff00] shadow-lg shadow-[#c8ff00]/20'
                            : 'bg-[#131620] border-neutral-800'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className={isActive ? 'text-[#c8ff00] font-bold' : 'text-neutral-400'}>
                            {node.step}
                          </span>
                          <span className="text-neutral-400">0{node.idx}</span>
                        </div>
                        <div className="text-xs font-semibold text-white mt-1 truncate">
                          {node.name}
                        </div>
                        <div className="text-[11px] text-neutral-400 mt-1">
                          {node.detail}
                        </div>
                        {isActive && (
                          <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#c8ff00] animate-ping" />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 bg-[#131722] border border-neutral-800/80 rounded-xl flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c8ff00] inline-block animate-pulse" />
                    <span className="text-neutral-300">
                      SIGNAL PACKET: {activeSignalNode > 0 ? `NODE 0${activeSignalNode} ACTIVE` : 'READY TO FIRE'}
                    </span>
                  </div>
                  <button
                    onClick={runSignalAnimation}
                    className="text-[#c8ff00] hover:underline cursor-pointer"
                  >
                    Run Step Simulation →
                  </button>
                </div>
              </div>
            )}

            {currentStage === 3 && (
              /* 03: AUTOMATE STAGE */
              <div className="space-y-5 text-left animate-in fade-in duration-200">
                <div className="p-4 bg-[#141822] border border-neutral-800 rounded-xl">
                  <div className="text-[10px] font-mono text-[#c8ff00] mb-2 uppercase">
                    RULE CRITERIA CONFIGURATION
                  </div>
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="p-2.5 bg-[#0f121a] rounded-lg border border-neutral-800 flex items-center justify-between">
                      <span className="text-neutral-300">IF event.payload.company_size &gt;= 50</span>
                      <span className="text-[#c8ff00]">MATCH: TRUE</span>
                    </div>
                    <div className="p-2.5 bg-[#0f121a] rounded-lg border border-neutral-800 flex items-center justify-between">
                      <span className="text-neutral-300">AND event.payload.lead_score &gt;= 80</span>
                      <span className="text-[#c8ff00]">MATCH: TRUE (94.2)</span>
                    </div>
                    <div className="p-2.5 bg-[#0f121a] rounded-lg border border-neutral-800 flex items-center justify-between">
                      <span className="text-neutral-300">THEN execute: dispatch_salesforce_and_slack()</span>
                      <span className="text-white">STATUS: EXECUTING</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 bg-[#12151e] border border-neutral-800 rounded-xl">
                    <span className="text-[10px] font-mono text-neutral-400">RETRY POLICY</span>
                    <div className="text-xs font-semibold text-white mt-1">Zero-Loss Backoff</div>
                    <div className="text-[11px] text-neutral-400 mt-1">3 automatic retries with jitter over 60s</div>
                  </div>
                  <div className="p-3.5 bg-[#12151e] border border-neutral-800 rounded-xl">
                    <span className="text-[10px] font-mono text-neutral-400">EXECUTION AUDIT</span>
                    <div className="text-xs font-semibold text-white mt-1">Immutable SOC 2 Hash</div>
                    <div className="text-[11px] text-neutral-400 mt-1">Hash SHA256 stored in customer log bucket</div>
                  </div>
                </div>
              </div>
            )}

            {currentStage === 4 && (
              /* 04: INSIGHTS STAGE */
              <div className="space-y-5 text-left animate-in fade-in duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#c8ff00]">OPERATIONAL TELEMETRY</span>
                    <h3 className="text-xl font-bold text-white mt-0.5">Workflow Execution & Health Curve</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-neutral-400">CURRENT HEALTH</span>
                    <div className="text-xl font-mono font-bold text-[#c8ff00]">97.8%</div>
                  </div>
                </div>

                {/* SVG Animated Chart */}
                <div className="p-4 bg-[#12151e] border border-neutral-800 rounded-xl">
                  <div className="h-36 w-full flex items-end justify-between gap-1 pt-3">
                    {[35, 42, 50, 68, 62, 75, 84, 88, 92, 94, 96, 98].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                        <span className="text-[9px] font-mono text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          {val}%
                        </span>
                        <div
                          style={{ height: `${val}%` }}
                          className="w-full bg-[#1e2432] group-hover:bg-[#c8ff00] rounded-t transition-all duration-200"
                        />
                        <span className="text-[9px] font-mono text-neutral-400">W{idx + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-2.5 bg-[#141822] rounded-lg">
                    <span className="text-neutral-400">TOTAL RUNS</span>
                    <div className="text-white font-bold mt-0.5">12,482</div>
                  </div>
                  <div className="p-2.5 bg-[#141822] rounded-lg">
                    <span className="text-neutral-400">FAILED RUNS</span>
                    <div className="text-emerald-400 font-bold mt-0.5">0.02%</div>
                  </div>
                  <div className="p-2.5 bg-[#141822] rounded-lg">
                    <span className="text-neutral-400">SAVED HOURS</span>
                    <div className="text-[#c8ff00] font-bold mt-0.5">1,284 hrs</div>
                  </div>
                  <div className="p-2.5 bg-[#141822] rounded-lg">
                    <span className="text-neutral-400">AVG RUNTIME</span>
                    <div className="text-white font-bold mt-0.5">42ms</div>
                  </div>
                </div>
              </div>
            )}

            {currentStage === 5 && (
              /* 05: RESULT STAGE */
              <div className="space-y-4 text-center max-w-xl mx-auto animate-in fade-in duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#c8ff00]/15 text-[#c8ff00] border border-[#c8ff00]/40">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
                  WORKFLOW COMPLETE.
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  The lead was qualified, enriched in CRM, assigned to the account executive, and posted to Slack in 42 milliseconds. No human had to open a spreadsheet.
                </p>

                <div className="p-4 bg-[#141822] border border-neutral-800 rounded-xl text-left font-mono text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>EXECUTION SUMMARY:</span>
                    <span className="text-[#c8ff00]">SUCCESS // 200 OK</span>
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    &bull; Hub: Salesforce Opportunity #8912 Created<br />
                    &bull; Channel: Slack #enterprise-revenue pinged<br />
                    &bull; Time saved on this single run: 25 minutes manual data entry
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-center gap-3">
                  <span className="text-[10px] font-mono text-[#c8ff00] bg-[#c8ff00]/15 px-2.5 py-1 rounded border border-[#c8ff00]/30 font-semibold">
                    FINAL SCENE // COMPLETE
                  </span>
                  <button
                    onClick={() => {
                      setHasCompletedOnce(false);
                      setCurrentStage(1);
                    }}
                    className="px-3.5 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-mono cursor-pointer transition-colors flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>RESTART DEMO</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
