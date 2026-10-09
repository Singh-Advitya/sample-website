import React, { useState, useRef } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Play, Zap, Shield, RefreshCw } from 'lucide-react';

export const HorizontalWorkflowStream: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeTestIndex, setActiveTestIndex] = useState<number | null>(null);

  const pipelines = [
    {
      id: 'pipe-1',
      kicker: 'REVENUE & SALES',
      title: 'Inbound MQL Qualification & CRM Push',
      tools: ['Webhooks', 'sample Scoring', 'Salesforce', 'Slack'],
      latency: '24ms',
      timeSaved: '14 hrs/week',
      summary: 'Instantly enriches website demo requests, calculates proprietary lead score, and assigns dedicated AE with zero delay.',
      testPayload: '{"lead": "enterprise@nordic.tech", "score": 96, "action": "CREATE_OPP"}',
    },
    {
      id: 'pipe-2',
      kicker: 'SECURITY & OPS',
      title: 'Vendor Contract Review & Okta SCIM Provisioning',
      tools: ['Google Drive', 'sample Rules', 'Okta', 'Jira'],
      latency: '38ms',
      timeSaved: '22 hrs/week',
      summary: 'Analyzes incoming signed vendor contracts, checks compliance checklist, routes to VP, and creates sandbox credentials.',
      testPayload: '{"vendor": "CloudMatrix LLC", "soc2_verified": true, "access": "TIER_2"}',
    },
    {
      id: 'pipe-3',
      kicker: 'FINANCE & BILLING',
      title: 'Continuous Stripe Reconciliation & Ledger Sync',
      tools: ['Stripe', 'Quickbooks', 'Sheets', 'Slack'],
      latency: '18ms',
      timeSaved: '35 hrs/week',
      summary: 'Matches incoming subscription payments with invoice lines, flags failed payment retries, and reconciles tax receipts.',
      testPayload: '{"invoices_cleared": 420, "discrepancies": 0, "net_variance": "$0.00"}',
    },
    {
      id: 'pipe-4',
      kicker: 'ENGINEERING & DEVOPS',
      title: 'Incident Severity Triage & Auto-Pager Dispatch',
      tools: ['Sentry', 'GitHub', 'PagerDuty', 'Slack #war-room'],
      latency: '12ms',
      timeSaved: '18 hrs/week',
      summary: 'Intercepts critical production stack traces, cross-references recent commits, and pages the on-call engineer with triage logs.',
      testPayload: '{"error": "DB_CONNECTION_POOL_EXHAUSTED", "cluster": "us-east-1", "paged": true}',
    },
    {
      id: 'pipe-5',
      kicker: 'CUSTOMER RETENTION',
      title: 'Account Churn Warning & Proactive Playbook',
      tools: ['Product Telemetry', 'HubSpot', 'Email API', 'Calendar'],
      latency: '45ms',
      timeSaved: '16 hrs/week',
      summary: 'Flags accounts whose weekly active seats dipped below 70%, generates health report, and schedules CSM check-in.',
      testPayload: '{"account": "Acme Logistics", "seat_drop": "-32%", "alert_sent": true}',
    },
  ];

  const handleTestPipeline = (idx: number) => {
    setActiveTestIndex(idx);
    setTimeout(() => {
      setActiveTestIndex(null);
    }, 1800);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, pipelines.length - 1));
  };

  return (
    <section
      id="horizontal-recipes"
      className="py-24 sm:py-32 bg-[#0c0e14] border-t border-neutral-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400 mb-2">
              <span className="text-[#c8ff00] font-bold">PIPELINE GALLERY</span>
              <span className="text-neutral-600">/</span>
              <span>ENTERPRISE BLUEPRINTS ({currentIndex + 1} OF {pipelines.length})</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase mt-1">
              PRODUCTION PIPELINES.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 max-w-xl">
              Inspect real-world automation templates deployed across operations, finance, and engineering. Click &ldquo;TEST RUN&rdquo; to execute payloads.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 mr-2">
              {pipelines.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'bg-[#c8ff00] w-6' : 'bg-neutral-800 hover:bg-neutral-700'
                  }`}
                  title={`View pipeline ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                currentIndex === 0
                  ? 'border-neutral-900 bg-neutral-900/50 text-neutral-600 cursor-not-allowed'
                  : 'border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white hover:border-neutral-700'
              }`}
              title="Previous pipeline"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === pipelines.length - 1}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                currentIndex === pipelines.length - 1
                  ? 'border-neutral-900 bg-neutral-900/50 text-neutral-600 cursor-not-allowed'
                  : 'border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white hover:border-neutral-700'
              }`}
              title="Next pipeline"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Panoramic Horizontal Cards Track with smooth GPU translate3d */}
        <div className="overflow-hidden py-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            className="flex gap-5 transition-transform duration-300 ease-out will-change-transform"
            style={{
              transform: `translate3d(calc(-${currentIndex} * (min(100vw - 2rem, 420px) + 1.25rem)), 0, 0)`,
            }}
          >
            {pipelines.map((pipe, idx) => {
              const isRunning = activeTestIndex === idx;
              const isSelected = currentIndex === idx;
              return (
                <div
                  key={pipe.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-[calc(100vw-3rem)] sm:w-[420px] shrink-0 bg-[#10131c] border rounded-2xl p-6 shadow-2xl flex flex-col justify-between transition-all cursor-pointer group ${
                    isSelected
                      ? 'border-[#c8ff00]/60 ring-1 ring-[#c8ff00]/30'
                      : 'border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
                      <span className="text-[10px] font-mono text-[#c8ff00] font-bold uppercase tracking-wider">
                        {pipe.kicker}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400">
                        LATENCY: {pipe.latency}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#c8ff00] transition-colors leading-snug">
                      {pipe.title}
                    </h3>

                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      {pipe.summary}
                    </p>

                    {/* Connected Tools Badge Row */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {pipe.tools.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171b26] border border-neutral-800 text-neutral-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Payload Box */}
                    <div className="mt-4 p-2.5 bg-[#090b10] border border-neutral-800 rounded-lg text-[10px] font-mono text-neutral-400 truncate">
                      {isRunning ? 'EXEC_LOG: 200 OK · Records synced' : pipe.testPayload}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <div className="text-xs font-mono">
                      <span className="text-neutral-500">SAVINGS: </span>
                      <span className="text-[#c8ff00] font-bold">{pipe.timeSaved}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTestPipeline(idx);
                      }}
                      disabled={isRunning}
                      className="px-3 py-1.5 rounded-lg bg-[#c8ff00]/10 hover:bg-[#c8ff00]/25 border border-[#c8ff00]/30 text-[#c8ff00] text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Zap className={`w-3.5 h-3.5 ${isRunning ? 'animate-bounce' : ''}`} />
                      <span>{isRunning ? 'EXECUTING...' : 'TEST RUN'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
