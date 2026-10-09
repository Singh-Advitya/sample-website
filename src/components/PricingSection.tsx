import React, { useState } from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';

interface PricingSectionProps {
  onStartFree: () => void;
  onBookDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onStartFree,
  onBookDemo,
}) => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  const plans = [
    {
      id: 'starter',
      name: 'STARTER',
      tagline: 'For small ops teams looking to eliminate manual busywork',
      monthlyPrice: 19,
      annualPrice: 15,
      highlight: false,
      features: [
        'Up to 25 active workflows',
        '10,000 automated tasks / month',
        'Standard connectors (Slack, Google)',
        '30-day execution log history',
        'Email & community support',
      ],
      cta: 'START FREE',
      action: onStartFree,
    },
    {
      id: 'growth',
      name: 'GROWTH',
      tagline: 'For scaling companies connecting revenue, ops and product',
      monthlyPrice: 49,
      annualPrice: 39,
      highlight: true,
      features: [
        'Unlimited active workflows',
        '100,000 automated tasks / month',
        'All 24 native connectors + Webhooks',
        'Sub-50ms execution SLA',
        'Real-time analytics & bottleneck profiling',
        'Multi-user collaborative canvas',
        'Priority 24/7 technical support',
      ],
      cta: 'START FREE',
      action: onStartFree,
    },
    {
      id: 'business',
      name: 'BUSINESS',
      tagline: 'For high-throughput organizations with enterprise compliance',
      monthlyPrice: 99,
      annualPrice: 79,
      highlight: false,
      features: [
        'Unlimited throughput & custom quotas',
        'Dedicated edge compute cluster',
        'Enterprise SAML 2.0 & Okta SSO',
        'Cryptographic audit receipts (SOC 2)',
        'Custom connector development',
        'Dedicated Solution Architect',
        '99.99% uptime SLA guarantee',
      ],
      cta: 'BOOK A DEMO',
      action: onBookDemo,
    },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#090b0e] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs text-[#c8ff00] uppercase tracking-widest">
            PRICING / PREDICTABLE SCALE
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase mt-2">
            SIMPLE, TRANSPARENT<br />INVESTMENT.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Fictional demonstration pricing. Choose the right operational capacity for your company size.
          </p>

          {/* Billing Cadence Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1 bg-[#12151e] border border-neutral-800 rounded-xl">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                !isAnnual ? 'bg-[#c8ff00] text-black font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 text-xs font-mono rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                isAnnual ? 'bg-[#c8ff00] text-black font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>ANNUAL</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-neutral-800 text-[#c8ff00] font-bold">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlight
                    ? 'bg-[#121622] border-2 border-[#c8ff00] shadow-2xl shadow-[#c8ff00]/10 md:-translate-y-2'
                    : 'bg-[#0e1118] border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#c8ff00] text-black font-mono text-[10px] font-bold uppercase tracking-wider">
                    RECOMMENDED CHOICE
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold font-mono text-white tracking-wider">
                      {plan.name}
                    </span>
                    {plan.highlight && <Zap className="w-4 h-4 fill-[#c8ff00] text-[#c8ff00]" />}
                  </div>

                  <p className="text-xs text-neutral-400 mt-2 min-h-[36px] leading-relaxed">
                    {plan.tagline}
                  </p>

                  <div className="mt-6 pb-6 border-b border-neutral-800/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-bold font-mono text-white">
                        ${price}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">
                        / user / mo
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-neutral-500 mt-1">
                      {isAnnual ? 'Billed annually · $15/user/mo equivalent' : 'Billed monthly · Cancel anytime'}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-2.5">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
                      INCLUDED IN PLAN:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#c8ff00] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={plan.action}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-mono font-bold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.highlight
                        ? 'bg-[#c8ff00] text-black hover:bg-[#b5e600] shadow-md shadow-[#c8ff00]/15'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs font-mono text-neutral-500">
          All plans include 14-day risk-free trial · Fictional demonstration rates · No card required
        </div>
      </div>
    </section>
  );
};
