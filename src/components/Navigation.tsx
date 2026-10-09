import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, Menu, X, ChevronDown, Zap, Activity, Users, Layers, ShieldCheck } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

interface NavigationProps {
  onOpenCommand: () => void;
  onOpenDemo: () => void;
  onOpenStartFree: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenCommand,
  onOpenDemo,
  onOpenStartFree,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeMegaTab, setActiveMegaTab] = useState<'overview' | 'automation' | 'analytics' | 'collab' | 'integrations'>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const megaMenuItems = [
    {
      id: 'overview',
      label: 'Overview',
      desc: 'Unified operations command center',
      icon: Layers,
      previewTitle: 'sample / WORKSPACE',
      previewStat: '12,482 monthly automated tasks',
      previewDetail: 'Single view across 24 connected corporate tools with instant pipeline triggers.',
    },
    {
      id: 'automation',
      label: 'Automation',
      desc: 'Visual DAG node builder & signals',
      icon: Zap,
      previewTitle: 'DAG / WORKFLOW BUILDER',
      previewStat: 'Sub-50ms execution speed',
      previewDetail: 'Build multi-step logic: Lead Score → CRM Sync → Slack Alert with zero boilerplate.',
    },
    {
      id: 'analytics',
      label: 'Analytics',
      desc: 'Operational health & latency trends',
      icon: Activity,
      previewTitle: '97.8% WORKFLOW HEALTH',
      previewStat: '1,284 hrs saved / month',
      previewDetail: 'Real-time bottleneck telemetry, step duration profiling, and team output ROI.',
    },
    {
      id: 'collab',
      label: 'Collaboration',
      desc: 'Multi-cursor reviews & useful AI',
      icon: Users,
      previewTitle: 'CO-PILOT WORKSPACE',
      previewStat: '86 active team members',
      previewDetail: 'Live approvals, threaded task context, and pragmatic natural language task generation.',
    },
    {
      id: 'integrations',
      label: 'Integrations',
      desc: 'Google, Slack, HubSpot & 20+ more',
      icon: ShieldCheck,
      previewTitle: 'CONNECTED ECOSYSTEM',
      previewStat: '24 native connectors',
      previewDetail: 'Bi-directional real-time sync with automatic retry queues and immutable audit logs.',
    },
  ];

  return (
    <>
      {/* Precision Scroll Progress Tracker Line at top of viewport */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-neutral-900/80 z-50">
        <div
          className="h-full bg-[#c8ff00] transition-all duration-75 relative shadow-[0_0_8px_#c8ff00]"
          style={{ width: `${Math.round(scrollProgress * 100)}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#c8ff00]" />
        </div>
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          scrolled
            ? 'py-2.5 bg-[#0a0a0c]/90 backdrop-blur-xl border-neutral-800/80 shadow-lg shadow-black/40'
            : 'py-4 bg-[#0a0a0c]/60 backdrop-blur-md border-neutral-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xl font-bold tracking-tight text-white hover:text-neutral-200 transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c8ff00]"
            >
              <span>sample</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] inline-block animate-pulse"></span>
            </a>
            <span className="hidden lg:inline text-[10px] font-mono text-neutral-400 px-2 py-0.5 rounded border border-neutral-800 bg-neutral-900/60">
              SAMPLE SAAS WEBSITE
            </span>
          </div>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer focus:outline-none"
              >
                <span>Product</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${megaMenuOpen ? 'rotate-180 text-[#c8ff00]' : ''}`} />
              </button>

              {/* Desktop Mega Menu */}
              {megaMenuOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[720px] bg-[#0d0f14] border border-neutral-800 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl grid grid-cols-12 gap-5 z-50 text-left"
                >
                  <div className="col-span-5 space-y-1">
                    <div className="text-[10px] font-mono text-neutral-400 px-3 py-1">
                      PRODUCT SUITE
                    </div>
                    {megaMenuItems.map((item) => {
                      const Icon = item.icon;
                      const active = activeMegaTab === item.id;
                      return (
                        <div
                          key={item.id}
                          onMouseEnter={() => setActiveMegaTab(item.id as any)}
                          onClick={() => {
                            if (item.id === 'overview') scrollToSection('product-demo');
                            if (item.id === 'automation') scrollToSection('workflow-builder');
                            if (item.id === 'analytics') scrollToSection('product-demo');
                            if (item.id === 'collab') scrollToSection('collaboration-ai');
                            if (item.id === 'integrations') scrollToSection('integrations');
                          }}
                          className={`flex items-start gap-3 p-2.5 rounded-xl cursor-pointer transition-all ${
                            active ? 'bg-neutral-800/80 text-white' : 'hover:bg-neutral-900 text-neutral-300'
                          }`}
                        >
                          <div className={`p-1.5 rounded-lg ${active ? 'bg-[#c8ff00] text-black' : 'bg-neutral-800 text-neutral-400'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold">{item.label}</div>
                            <div className="text-[11px] text-neutral-400">{item.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Mega Menu Live Preview Card */}
                  <div className="col-span-7 bg-[#13162f]/60 border border-neutral-800 rounded-xl p-4 flex flex-col justify-between">
                    {(() => {
                      const current = megaMenuItems.find((m) => m.id === activeMegaTab) || megaMenuItems[0];
                      return (
                        <>
                          <div>
                            <div className="flex items-center justify-between mb-3 pb-2 border-b border-neutral-800">
                              <span className="text-[10px] font-mono text-[#c8ff00]">{current.previewTitle}</span>
                              <span className="text-[10px] font-mono text-neutral-400">ACTIVE / REALTIME</span>
                            </div>
                            <div className="text-sm font-semibold text-white mb-1.5">{current.previewStat}</div>
                            <p className="text-xs text-neutral-400 leading-relaxed">{current.previewDetail}</p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                            <button
                              onClick={() => {
                                setMegaMenuOpen(false);
                                scrollToSection('product-demo');
                              }}
                              className="text-xs font-medium text-[#c8ff00] hover:underline flex items-center gap-1 cursor-pointer"
                            >
                              <span>Explore live simulator</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-[10px] font-mono text-neutral-400">SAMPLE SAAS WEBSITE</span>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('solutions')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('workflow-builder')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Workflows
            </button>
            <button
              onClick={() => scrollToSection('horizontal-recipes')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Pipelines
            </button>
            <button
              onClick={() => scrollToSection('integrations')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Integrations
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Pricing
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions & Command Hint */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={onOpenCommand}
              aria-label="Open command menu"
              className="hidden lg:flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search</span>
              <kbd className="text-[10px] font-mono bg-neutral-800 px-1 py-0.5 rounded text-neutral-300">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={onOpenDemo}
              className="hidden sm:inline-block text-xs font-medium text-neutral-300 hover:text-white transition-colors px-2 py-1.5 cursor-pointer"
            >
              LOG IN
            </button>

            <button
              onClick={onOpenStartFree}
              className="group relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-[#c8ff00] text-black text-xs sm:text-sm font-semibold hover:bg-[#b5e600] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shadow-md shadow-[#c8ff00]/10"
            >
              <span>START FREE</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-neutral-400 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-3 pb-6 bg-[#0c0e13] border-b border-neutral-800 space-y-3">
            <div className="flex flex-col space-y-2 text-sm font-medium text-neutral-300">
              <button
                onClick={() => scrollToSection('product-demo')}
                className="text-left py-2 hover:text-[#c8ff00]"
              >
                Product Demo
              </button>
              <button
                onClick={() => scrollToSection('workflow-builder')}
                className="text-left py-2 hover:text-[#c8ff00]"
              >
                Workflow Builder
              </button>
              <button
                onClick={() => scrollToSection('horizontal-recipes')}
                className="text-left py-2 hover:text-[#c8ff00]"
              >
                Live Pipelines
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="text-left py-2 hover:text-[#c8ff00]"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection('integrations')}
                className="text-left py-2 hover:text-[#c8ff00]"
              >
                Integrations
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-left py-2 hover:text-[#c8ff00]"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('security')}
                className="text-left py-2 hover:text-[#c8ff00]"
              >
                Security & Status
              </button>
            </div>
            <div className="pt-3 border-t border-neutral-800 flex items-center gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommand();
                }}
                className="flex-1 py-2 text-xs font-mono bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-300 flex items-center justify-center gap-2"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Command Menu (⌘K)</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="py-2 px-3 text-xs font-mono text-neutral-300 border border-neutral-800 rounded-lg"
              >
                Book Demo
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
