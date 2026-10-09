import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, CheckCircle2, RefreshCw, Sparkles, Layers, Sliders, ChevronRight, Zap } from 'lucide-react';
import { CORE_METRICS } from '../data/mockData';
import { useElementScrollProgress } from '../hooks/useScrollProgress';

interface HeroSectionProps {
  onStartFree: () => void;
  onWatchProduct: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartFree,
  onWatchProduct,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'workflows' | 'tasks' | 'analytics'>('overview');
  const [tasksCount, setTasksCount] = useState(12482);
  const [isSimulating, setIsSimulating] = useState(false);
  const [recentEvent, setRecentEvent] = useState<string>('Sync complete: HubSpot lead #8904 routed to Slack #revenue');
  const [livePulse, setLivePulse] = useState(true);
  
  // High-performance lerped scroll progress
  const scrollProgress = useElementScrollProgress(containerRef);

  // Subtle live ticker event
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePulse((prev) => !prev);
      setTasksCount((prev) => prev + (Math.random() > 0.4 ? 1 : 0));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleTriggerTest = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setRecentEvent('Trigger: Incoming high-priority enterprise lead from API webhook...');
    
    setTimeout(() => {
      setRecentEvent('Evaluated condition: Lead Score = 94 (>80) · Routing opportunity...');
    }, 800);

    setTimeout(() => {
      setRecentEvent('Actions dispatched: Salesforce Deal #482 created · Slack #sales alerted');
      setTasksCount((prev) => prev + 1);
      setIsSimulating(false);
    }, 1900);
  };

  // Smooth scroll driven transforms
  const headlineTranslateY = scrollProgress * -40;
  const headlineOpacity = Math.max(1 - scrollProgress * 0.8, 0.15);
  const productScale = 0.95 + scrollProgress * 0.07;
  const productTranslateY = scrollProgress * -20;

  return (
    <section
      ref={containerRef}
      className="relative pt-28 pb-28 md:pt-36 md:pb-36 overflow-hidden bg-tech-grid transition-colors"
    >
      {/* Dynamic ambient glow that reacts to scroll */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#c8ff00]/10 via-neutral-900/10 to-transparent blur-3xl pointer-events-none -z-10 transition-transform duration-300"
        style={{
          transform: `translate(-50%, ${scrollProgress * 40}px) scale(${1 + scrollProgress * 0.2})`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technical Kicker & Editorial Header */}
        <div
          className="flex flex-col items-center text-center transition-all duration-150 ease-out"
          style={{
            transform: `translateY(${headlineTranslateY}px)`,
            opacity: headlineOpacity,
          }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono text-neutral-400 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#c8ff00] animate-ping" />
            <span className="text-[#c8ff00] font-semibold">SAMPLE SAAS WEBSITE</span>
            <span className="text-neutral-600">/</span>
            <span>WORKFLOW AUTOMATION & OPERATIONS</span>
          </div>

          {/* Large Hero Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase leading-[0.92] max-w-4xl">
            WORK,<br />
            <span className="text-white">CONNECTED.</span>
          </h1>

          {/* Value proposition */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-400 max-w-2xl leading-relaxed text-balance">
            sample brings your team&apos;s workflows, automation and operational insights into one intelligent system.
          </p>

          {/* Primary Interactive CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onStartFree}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c8ff00] text-black text-sm font-semibold hover:bg-[#b5e600] active:scale-[0.98] transition-all shadow-xl shadow-[#c8ff00]/15 cursor-pointer"
            >
              <span>START FREE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onWatchProduct}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 text-sm font-medium text-neutral-200 transition-colors cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current text-[#c8ff00]" />
              <span>WATCH PRODUCT</span>
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('chaos-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-800/80 text-xs font-mono text-neutral-400 hover:text-[#c8ff00] transition-colors cursor-pointer"
            >
              <span>SCROLL TO ENTER SOFTWARE</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-5 flex items-center gap-4 text-xs font-mono text-neutral-400">
            <span>24 CONNECTED TOOLS</span>
            <span>·</span>
            <span>NO MANUAL SPREADSHEETS</span>
            <span>·</span>
            <span className="text-[#c8ff00]">97.8% HEALTH RATE</span>
          </div>
        </div>

        {/* HERO PRODUCT: Scroll-Zooming Interactive Workspace UI */}
        <div
          className="mt-14 sm:mt-18 relative will-change-transform"
          style={{
            transform: `translate3d(0, ${productTranslateY}px, 0) scale(${productScale})`,
          }}
        >
          {/* Subtle Outer Frame Border with glowing corner accents */}
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-neutral-700/60 via-neutral-800/30 to-neutral-900/70 shadow-2xl">
            <div className="bg-[#0c0e14] rounded-[14px] border border-neutral-800/90 overflow-hidden shadow-inner">
              {/* Product Top Header Bar */}
              <div className="px-4 py-3 bg-[#11141c] border-b border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className="h-4 w-px bg-neutral-800 mx-1" />
                  <span className="font-mono text-neutral-200 font-semibold tracking-wide">
                    sample / WORKSPACE
                  </span>
                  <span className="hidden sm:inline font-mono text-neutral-400 text-[11px]">
                    / PROD_ORCHESTRATOR
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono text-neutral-300">
                    <span className={`w-1.5 h-1.5 rounded-full ${livePulse ? 'bg-[#c8ff00]' : 'bg-neutral-600'}`} />
                    <span>ENGINE STATUS: NOMINAL</span>
                  </div>

                  <button
                    onClick={handleTriggerTest}
                    disabled={isSimulating}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#c8ff00]/10 hover:bg-[#c8ff00]/25 border border-[#c8ff00]/40 text-[#c8ff00] text-[11px] font-mono font-medium transition-colors cursor-pointer"
                  >
                    <RefreshCw className={`w-3 h-3 ${isSimulating ? 'animate-spin' : ''}`} />
                    <span>{isSimulating ? 'EXECUTING...' : 'FIRE LIVE TEST'}</span>
                  </button>
                </div>
              </div>

              {/* Workspace Inner Layout: Sidebar + Main Area */}
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
                {/* Left Sidebar */}
                <div className="md:col-span-3 bg-[#0d1017] border-b md:border-b-0 md:border-r border-neutral-800/80 p-3.5 space-y-4 text-xs">
                  <div>
                    <div className="text-[10px] font-mono text-neutral-400 px-2 mb-2 tracking-wider">
                      OPERATIONS CORE
                    </div>
                    <nav className="space-y-1">
                      {[
                        { id: 'overview', label: 'Operations Overview', icon: Layers },
                        { id: 'workflows', label: 'Active Workflows', icon: Sliders, badge: '148' },
                        { id: 'tasks', label: 'Tasks Queue', icon: CheckCircle2, badge: 'Active' },
                        { id: 'analytics', label: 'Health & Analytics', icon: Sparkles, isLime: true },
                      ].map((item) => {
                        const Icon = item.icon;
                        const active = activeTab === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id as any)}
                            className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg transition-colors cursor-pointer text-left ${
                              active
                                ? 'bg-[#181c26] text-white border border-neutral-700/60 font-medium'
                                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Icon className={`w-3.5 h-3.5 ${active ? 'text-[#c8ff00]' : 'text-neutral-400'}`} />
                              <span>{item.label}</span>
                            </div>
                            {item.badge && (
                              <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-neutral-800 text-neutral-300">
                                {item.badge}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </nav>
                  </div>

                  <div className="pt-2 border-t border-neutral-800/60">
                    <div className="text-[10px] font-mono text-neutral-400 px-2 mb-1.5 tracking-wider">
                      CONNECTED PLATFORMS
                    </div>
                    <div className="space-y-1.5 px-2 text-[11px] font-mono text-neutral-400">
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-300">Google Workspace</span>
                        <span className="text-[#c8ff00]">SYNCED</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-300">Slack Bolt API</span>
                        <span className="text-[#c8ff00]">LIVE</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-300">Salesforce CRM</span>
                        <span className="text-[#c8ff00]">IDLE</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-300">Stripe Billing</span>
                        <span className="text-[#c8ff00]">READY</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#121620] border border-neutral-800 text-[11px]">
                    <div className="font-mono text-neutral-400 mb-1">TEAM ACTIVITY</div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#c8ff00] text-black font-bold flex items-center justify-center text-[10px]">
                        MC
                      </div>
                      <div className="truncate text-neutral-300">
                        Maya Chen approved Lead Score policy
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Dashboard Canvas */}
                <div className="md:col-span-9 p-4 sm:p-6 bg-[#0a0c10] space-y-5">
                  {/* Top Stats Cards Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 bg-[#10131a] border border-neutral-800 rounded-xl relative overflow-hidden group">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                        Monthly Tasks
                      </div>
                      <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1 tabular-nums">
                        {tasksCount.toLocaleString()}
                      </div>
                      <div className="text-[11px] text-[#c8ff00] mt-0.5 flex items-center gap-1 font-mono">
                        <span>+18.4%</span>
                        <span className="text-neutral-400">automated</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c8ff00]/40 group-hover:bg-[#c8ff00] transition-colors" />
                    </div>

                    <div className="p-3.5 bg-[#10131a] border border-neutral-800 rounded-xl relative overflow-hidden group">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                        Active Workflows
                      </div>
                      <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1 tabular-nums">
                        {CORE_METRICS.activeWorkflows}
                      </div>
                      <div className="text-[11px] text-neutral-400 mt-0.5 font-mono">
                        Across 6 teams
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-700" />
                    </div>

                    <div className="p-3.5 bg-[#10131a] border border-neutral-800 rounded-xl relative overflow-hidden group">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                        Time Saved
                      </div>
                      <div className="text-xl sm:text-2xl font-bold font-mono text-[#c8ff00] mt-1 tabular-nums">
                        {CORE_METRICS.timeSaved}
                      </div>
                      <div className="text-[11px] text-neutral-400 mt-0.5 font-mono">
                        Direct recovery
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c8ff00]" />
                    </div>

                    <div className="p-3.5 bg-[#10131a] border border-neutral-800 rounded-xl relative overflow-hidden group">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                        Workflow Health
                      </div>
                      <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1 tabular-nums">
                        {CORE_METRICS.completionRate}
                      </div>
                      <div className="text-[11px] text-[#c8ff00] mt-0.5 font-mono">
                        Zero queue drop
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-700" />
                    </div>
                  </div>

                  {/* Visual Workflow Mini-Diagram Inside Hero Product */}
                  <div className="p-4 bg-[#10131a] border border-neutral-800 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#c8ff00]" />
                        <span className="text-xs font-mono font-medium text-neutral-200">
                          FLOW / 0012: Inbound Lead Qualification & CRM Handover
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400">EXEC_LATENCY: 42ms</span>
                    </div>

                    {/* Nodes Chain */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 items-center">
                      <div className="p-2.5 rounded-lg bg-[#141822] border border-neutral-700/60 text-left">
                        <div className="text-[9px] font-mono text-neutral-400">WHEN</div>
                        <div className="text-xs font-medium text-white truncate">New Lead Webhook</div>
                        <div className="text-[10px] font-mono text-[#c8ff00] mt-0.5">PAYLOAD READY</div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-[#141822] border border-[#c8ff00]/40 text-left relative">
                        <div className="text-[9px] font-mono text-[#c8ff00]">CHECK</div>
                        <div className="text-xs font-medium text-white truncate">Score &gt; 80</div>
                        <div className="text-[10px] font-mono text-neutral-300 mt-0.5">PASSED (Score: 94)</div>
                        {isSimulating && (
                          <div className="absolute inset-0 border border-[#c8ff00] rounded-lg animate-ping pointer-events-none" />
                        )}
                      </div>

                      <div className="p-2.5 rounded-lg bg-[#141822] border border-neutral-700/60 text-left">
                        <div className="text-[9px] font-mono text-neutral-400">ACTION</div>
                        <div className="text-xs font-medium text-white truncate">Salesforce Sync</div>
                        <div className="text-[10px] font-mono text-neutral-300 mt-0.5">OPP #482 CREATED</div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-[#141822] border border-neutral-700/60 text-left">
                        <div className="text-[9px] font-mono text-neutral-400">NOTIFY</div>
                        <div className="text-xs font-medium text-white truncate">Slack #revenue</div>
                        <div className="text-[10px] font-mono text-[#c8ff00] mt-0.5">ALERT SENT</div>
                      </div>
                    </div>
                  </div>

                  {/* Realtime Live Event Feed Banner */}
                  <div className="px-3.5 py-2.5 bg-[#12151e] border border-neutral-800/90 rounded-lg flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] shrink-0" />
                      <span className="text-neutral-400 shrink-0">LATEST EVENT:</span>
                      <span className="text-neutral-200 truncate">{recentEvent}</span>
                    </div>
                    <span className="text-[10px] text-neutral-400 shrink-0 hidden sm:inline">
                      24 TOOLS CONNECTED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
