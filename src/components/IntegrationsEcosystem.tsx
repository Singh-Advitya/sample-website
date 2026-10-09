import React, { useState } from 'react';
import { INTEGRATIONS_DATA } from '../data/mockData';
import { IntegrationApp } from '../types';
import { CheckCircle2, ArrowRight, Zap, RefreshCw, Layers } from 'lucide-react';

export const IntegrationsEcosystem: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState<IntegrationApp>(INTEGRATIONS_DATA[0]);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'crm' | 'communication' | 'workspace' | 'payments'>('all');
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  const filteredApps = INTEGRATIONS_DATA.filter(
    (app) => categoryFilter === 'all' || app.category === categoryFilter
  );

  const handleTestSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 800);
  };

  return (
    <section id="integrations" className="py-24 sm:py-32 bg-[#090b0e] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs text-[#c8ff00] uppercase tracking-widest">
            ECOSYSTEM / 24 CONNECTED PLATFORMS
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase mt-2">
            YOUR TOOLS.<br />ONE FLOW.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Keep the software your team already loves. sample sits directly in the center, orchestrating data signals and executing actions in real time.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#12151e] border border-neutral-800 rounded-xl max-w-md mx-auto">
            {(['all', 'crm', 'communication', 'workspace', 'payments'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 text-xs font-mono uppercase rounded-lg transition-colors cursor-pointer ${
                  categoryFilter === cat
                    ? 'bg-[#c8ff00] text-black font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Central Hub & Connected Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Grid: Connected Tools Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredApps.map((app) => {
              const isSelected = selectedApp.id === app.id;
              return (
                <div
                  key={app.id}
                  onClick={() => setSelectedApp(app)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#151926] border-[#c8ff00] shadow-lg shadow-[#c8ff00]/10'
                      : 'bg-[#0f121a] border-neutral-800 hover:border-neutral-700 hover:bg-[#121622]'
                  }`}
                >
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-800/80">
                    <span className="text-sm font-semibold text-white">{app.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-[#c8ff00]">
                      {app.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                    {app.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                    <span>RATE: {app.eventsProcessed}</span>
                    <span>SYNC: {app.lastSync}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Panel: Active Connector Telemetry Inspector */}
          <div className="lg:col-span-5 bg-[#0e1118] border border-neutral-800 rounded-2xl p-6 sm:p-7 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c8ff00] animate-pulse" />
                <span className="text-xs font-mono font-bold text-white uppercase">
                  CENTRAL HUB: sample &harr; {selectedApp.name}
                </span>
              </div>
              <button
                onClick={handleTestSync}
                disabled={isSyncing}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#c8ff00]/10 hover:bg-[#c8ff00]/20 border border-[#c8ff00]/30 text-[#c8ff00] text-[11px] font-mono cursor-pointer transition-colors"
              >
                <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
                <span>TEST PING</span>
              </button>
            </div>

            <div>
              <div className="text-xl font-bold text-white">{selectedApp.name} Native Connector</div>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                {selectedApp.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 bg-[#131622] rounded-xl border border-neutral-800">
                <span className="text-neutral-500">EVENT THROUGHPUT</span>
                <div className="text-white font-bold mt-0.5">{selectedApp.eventsProcessed}</div>
              </div>
              <div className="p-3 bg-[#131622] rounded-xl border border-neutral-800">
                <span className="text-neutral-500">LAST HEARTBEAT</span>
                <div className="text-[#c8ff00] font-bold mt-0.5">
                  {isSyncing ? 'Syncing now...' : selectedApp.lastSync}
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#080a0e] rounded-xl border border-neutral-800 font-mono text-[11px] space-y-1.5">
              <div className="flex justify-between text-neutral-400">
                <span>CHANNEL_SECURITY:</span>
                <span className="text-white">TLS 1.3 · Mutual Auth</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>SCHEMA_MAPPING:</span>
                <span className="text-[#c8ff00]">BIDIRECTIONAL</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>RETRY_STRATEGY:</span>
                <span className="text-white">Jittered Backoff</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>CONNECTOR / READY</span>
              <span className="text-[#c8ff00]">ZERO WEBHOOK DROPS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
