import React, { useState } from 'react';
import { ShieldCheck, Lock, Key, Server, CheckCircle2, Activity, RefreshCw } from 'lucide-react';

export const SecurityInfrastructure: React.FC = () => {
  const [statusTicked, setStatusTicked] = useState<boolean>(false);

  const securityFeatures = [
    {
      title: 'Enterprise SAML 2.0 & Okta SSO',
      desc: 'Seamless zero-trust sign-in with automatic JIT provisioning and SCIM user sync.',
      icon: Key,
    },
    {
      title: 'Granular Role-Based Access (RBAC)',
      desc: 'Define custom execution permissions down to the individual pipeline node level.',
      icon: Lock,
    },
    {
      title: 'End-to-End Encryption & TLS 1.3',
      desc: 'Payloads encrypted in transit and at rest using customer-managed encryption keys (CMEK).',
      icon: ShieldCheck,
    },
    {
      title: 'Immutable SOC 2 Audit Logs',
      desc: 'Cryptographically signed audit receipts for every workflow trigger and data modification.',
      icon: Server,
    },
  ];

  const services = [
    { name: 'CORE SERVICES', status: 'OPERATIONAL', latency: '22ms' },
    { name: 'AUTOMATION PIPELINES', status: 'OPERATIONAL', latency: '38ms' },
    { name: 'ANALYTICS ENGINE', status: 'OPERATIONAL', latency: '45ms' },
    { name: 'REST & WEBHOOK API', status: 'OPERATIONAL', latency: '19ms' },
    { name: 'INTEGRATIONS ADAPTERS', status: 'OPERATIONAL', latency: '31ms' },
  ];

  return (
    <section id="security" className="py-24 sm:py-32 bg-[#090b0e] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-[#c8ff00] uppercase tracking-widest">
            SECURITY & RELIABILITY / ENTERPRISE GRADE
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase mt-2">
            BUILT FOR<br />SERIOUS WORK.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Engineered for high-throughput enterprises with strict isolation, immutable logging, and continuous compliance.
          </p>
        </div>

        {/* 2-Column: Security Controls on Left, Live System Status Console on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Security Controls Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {securityFeatures.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div key={idx} className="p-5 bg-[#0f121a] border border-neutral-800 rounded-xl space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-[#c8ff00]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{sec.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{sec.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Right: Technical System Status Console (status.samplehq.com concept) */}
          <div className="lg:col-span-5 bg-[#0e1118] border border-neutral-800 rounded-2xl p-6 sm:p-7 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c8ff00] animate-pulse" />
                <span className="text-xs font-mono font-bold text-white uppercase">
                  status.samplehq.com (LIVE DEMO)
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#c8ff00]/15 text-[#c8ff00] font-semibold">
                ALL SYSTEMS NOMINAL
              </span>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              {services.map((srv) => (
                <div
                  key={srv.name}
                  className="p-2.5 bg-[#131622] rounded-lg border border-neutral-800/80 flex items-center justify-between"
                >
                  <span className="text-neutral-300">{srv.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500 text-[10px]">{srv.latency}</span>
                    <span className="text-[#c8ff00] font-semibold">{srv.status}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* 90-day Uptime Bar visualization */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-2">
                <span>90-DAY UPTIME HISTORY</span>
                <span className="text-white font-bold">99.99%</span>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-5 bg-[#172412] hover:bg-[#c8ff00] rounded-xs transition-colors"
                    title={`Day -${36 - i}: 100% operational`}
                  />
                ))}
              </div>
            </div>

            <div className="text-[11px] font-mono text-neutral-500 pt-1 text-center">
              Audited infrastructure demonstration telemetry · Zero reported incidents.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
