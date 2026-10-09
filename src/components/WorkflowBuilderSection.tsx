import React, { useState } from 'react';
import { ArrowDown, CheckCircle2, Play, Code, Clock, Sliders, ChevronRight, Settings } from 'lucide-react';

export const WorkflowBuilderSection: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('action');
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(-1);

  const nodes = [
    {
      id: 'trigger',
      type: 'WHEN',
      title: 'New Lead Inbound Webhook',
      app: 'Google Forms / Web API',
      status: 'Active',
      latency: '2ms',
      payload: {
        event: 'lead.created',
        source: 'enterprise_quote_form',
        email: 'cto@arc-labs.dev',
        company: 'Arc Labs Inc',
        team_size: 140,
        estimated_budget: '$45,000',
      },
    },
    {
      id: 'check',
      type: 'CHECK',
      title: 'Evaluate Lead Quality Score',
      app: 'sample Scoring Model',
      status: 'Active',
      latency: '18ms',
      payload: {
        score: 92,
        criteria: {
          team_size_weight: 0.4,
          budget_weight: 0.4,
          domain_authority: 0.2,
        },
        threshold: 80,
        passed: true,
      },
    },
    {
      id: 'condition',
      type: 'IF',
      title: 'Branch: Score > 80',
      app: 'Logic Evaluator',
      status: 'Evaluated True',
      latency: '1ms',
      payload: {
        evaluation: '92 > 80 (TRUE)',
        target_branch: 'priority_enterprise_dispatch',
        fallback_branch: 'nurture_drip_sequence',
      },
    },
    {
      id: 'action',
      type: 'ACTION',
      title: 'Create Salesforce Opportunity',
      app: 'Salesforce Enterprise',
      status: 'Sync Complete',
      latency: '34ms',
      payload: {
        object: 'Opportunity',
        id: '0065g00000XyZ1',
        stage: 'Discovery Scheduled',
        owner: 'Jordan Lee (Enterprise VP)',
        amount: 45000,
      },
    },
    {
      id: 'notify',
      type: 'NOTIFY',
      title: 'Post Card to Slack #sales-wins',
      app: 'Slack Bolt API',
      status: 'Dispatched',
      latency: '12ms',
      payload: {
        channel: '#sales-wins',
        mentions: ['@jordan.lee', '@maya.chen'],
        formatted_card: 'Tier-1 Lead from Arc Labs ($45k) qualified and queued.',
      },
    },
    {
      id: 'complete',
      type: 'COMPLETE',
      title: 'Workflow Execution Finished',
      app: 'sample Orchestrator',
      status: 'Archived 200 OK',
      latency: '1ms',
      payload: {
        status: 'SUCCESS',
        total_pipeline_latency: '68ms',
        audit_receipt: 'sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
      },
    },
  ];

  const handleRunExecution = () => {
    if (isExecuting) return;
    setIsExecuting(true);
    setActiveStepIndex(0);

    nodes.forEach((node, idx) => {
      setTimeout(() => {
        setActiveStepIndex(idx);
        setActiveNodeId(node.id);
        if (idx === nodes.length - 1) {
          setTimeout(() => {
            setIsExecuting(false);
          }, 800);
        }
      }, (idx + 1) * 600);
    });
  };

  const selectedNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  return (
    <section id="workflow-builder" className="py-24 sm:py-32 bg-[#090b0e] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="font-mono text-xs text-[#c8ff00] uppercase tracking-widest">
              SIGNATURE ENGINE / DAG CANVAS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase mt-2">
              LET THE SYSTEM<br />DO THE REPETITIVE WORK.
            </h2>
            <p className="mt-4 text-neutral-400 max-w-xl text-sm sm:text-base">
              Build clean, deterministic automation logic. Click any node to inspect runtime payloads, execution latencies, and business conditions.
            </p>
          </div>

          <button
            onClick={handleRunExecution}
            disabled={isExecuting}
            className="self-start md:self-auto flex items-center gap-2 px-5 py-3 rounded-xl bg-[#c8ff00] text-black font-semibold text-xs sm:text-sm hover:bg-[#b5e600] active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-[#c8ff00]/10"
          >
            <Play className={`w-4 h-4 fill-black ${isExecuting ? 'animate-pulse' : ''}`} />
            <span>{isExecuting ? 'EXECUTING STEP-BY-STEP...' : 'RUN LIVE WORKFLOW'}</span>
          </button>
        </div>

        {/* 2-Column Interface: Visual Node Pipeline on Left, Inspector on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Visual DAG Nodes Stream */}
          <div className="lg:col-span-7 space-y-3">
            {nodes.map((node, index) => {
              const isSelected = activeNodeId === node.id;
              const isCurrentlyExecuting = activeStepIndex === index;
              return (
                <div key={node.id} className="relative">
                  <div
                    onClick={() => setActiveNodeId(node.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#151924] border-[#c8ff00] shadow-md shadow-[#c8ff00]/10'
                        : isCurrentlyExecuting
                        ? 'bg-[#182012] border-[#c8ff00] ring-1 ring-[#c8ff00]'
                        : 'bg-[#0f121a] border-neutral-800 hover:border-neutral-700 hover:bg-[#131620]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex flex-col items-center">
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                            isSelected || isCurrentlyExecuting
                              ? 'bg-[#c8ff00] text-black'
                              : 'bg-neutral-800 text-neutral-400'
                          }`}
                        >
                          {node.type}
                        </span>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          <span>{node.title}</span>
                          {node.id === 'complete' && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#c8ff00]" />
                          )}
                        </div>
                        <div className="text-xs text-neutral-400 font-mono mt-0.5">
                          {node.app} · Latency: {node.latency}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-[#c8ff00] hidden sm:inline">
                        {node.status}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected ? 'text-[#c8ff00] translate-x-1' : 'text-neutral-500'
                        }`}
                      />
                    </div>
                  </div>

                  {index < nodes.length - 1 && (
                    <div className="h-3 w-px bg-neutral-800 mx-auto my-0.5 relative">
                      {isCurrentlyExecuting && (
                        <div className="absolute inset-0 bg-[#c8ff00] animate-ping" />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Node Inspector Panel */}
          <div className="lg:col-span-5 bg-[#0e1118] border border-neutral-800 rounded-2xl p-5 sticky top-24">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-[#c8ff00]" />
                <span className="text-xs font-mono font-semibold text-white">
                  NODE RUNTIME INSPECTOR
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-[#c8ff00]">
                {selectedNode.type} // {selectedNode.id.toUpperCase()}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono text-neutral-400">NODE TITLE</span>
                <div className="text-sm font-semibold text-white">{selectedNode.title}</div>
                <div className="text-xs text-neutral-400 mt-0.5 font-mono">
                  App connector: {selectedNode.app}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-2.5 bg-[#141822] rounded-lg border border-neutral-800/80">
                  <span className="text-neutral-400">MEASURED LATENCY</span>
                  <div className="text-white font-bold mt-0.5">{selectedNode.latency}</div>
                </div>
                <div className="p-2.5 bg-[#141822] rounded-lg border border-neutral-800/80">
                  <span className="text-neutral-400">RETRY POLICY</span>
                  <div className="text-[#c8ff00] font-bold mt-0.5">Exponential (3x)</div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-1.5">
                  <span>PAYLOAD INJECTION / STATE</span>
                  <span className="text-[#c8ff00]">LIVE SCHEMA</span>
                </div>
                <pre className="p-3.5 bg-[#08090d] border border-neutral-800/90 rounded-xl text-[11px] font-mono text-neutral-300 overflow-x-auto leading-relaxed">
                  {JSON.stringify(selectedNode.payload, null, 2)}
                </pre>
              </div>

              <div className="pt-2 border-t border-neutral-800/60 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>REVISION / 0048</span>
                <span className="text-[#c8ff00]">VERIFIED DETERMINISTIC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
