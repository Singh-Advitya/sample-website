import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, UserCheck, MessageSquare, CheckCircle2, RefreshCw } from 'lucide-react';

export const CollaborationAISection: React.FC = () => {
  const [taskStatus, setTaskStatus] = useState<'IN REVIEW' | 'APPROVED' | 'DONE'>('IN REVIEW');
  const [aiPrompt, setAiPrompt] = useState<string>(
    'Summarize the open customer issues and create follow-up tasks.'
  );
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [aiGenerated, setAiGenerated] = useState<boolean>(true);
  const [tasksDeployed, setTasksDeployed] = useState<boolean>(false);

  const teamMembers = [
    { name: 'Maya Chen', role: 'Head of Operations', color: 'bg-emerald-500', initial: 'MC', status: 'Reviewing branch' },
    { name: 'Alex Rivera', role: 'Automation Engineer', color: 'bg-blue-500', initial: 'AR', status: 'Deployed retry logic' },
    { name: 'Jordan Lee', role: 'VP Operations', color: 'bg-amber-500', initial: 'JL', status: 'Approved contract SLA' },
    { name: 'Sam Patel', role: 'Solutions Architect', color: 'bg-purple-500', initial: 'SP', status: 'Active on Notion sync' },
  ];

  const handleRunAi = () => {
    setIsGenerating(true);
    setTasksDeployed(false);
    setTimeout(() => {
      setIsGenerating(false);
      setAiGenerated(true);
    }, 900);
  };

  const handleApproveTasks = () => {
    setTasksDeployed(true);
  };

  return (
    <section id="collaboration-ai" className="py-24 sm:py-32 bg-[#0c0e14] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-[#c8ff00] uppercase tracking-widest">
            FEATURE STORY / COLLABORATION & PRAGMATIC AI
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase mt-2">
            DESIGNED FOR TEAMS.<br />POWERED BY USEFUL AI.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Real multi-user synchronization with contextual approval trails, paired with pragmatic AI that structures messy inputs into actionable pipeline tasks.
          </p>
        </div>

        {/* 2-Part Layout: Real Team Collaboration on Top/Left, Pragmatic AI on Bottom/Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Part 1: Team Collaboration Canvas */}
          <div className="lg:col-span-6 bg-[#11141d] border border-neutral-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                <div>
                  <span className="text-[10px] font-mono text-[#c8ff00]">SHARED WORKSPACE</span>
                  <h3 className="text-lg font-bold text-white mt-0.5">Live Team Orchestration</h3>
                </div>
                <div className="flex -space-x-2">
                  {teamMembers.map((m) => (
                    <div
                      key={m.name}
                      title={`${m.name} (${m.role})`}
                      className={`w-7 h-7 rounded-full text-white text-[10px] font-bold flex items-center justify-center border-2 border-[#11141d] ${m.color}`}
                    >
                      {m.initial}
                    </div>
                  ))}
                </div>
              </div>

              {/* Collaborative Task Item with Interactive Status Transition */}
              <div className="p-4 bg-[#161a26] border border-neutral-800 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">TASK / OPS-892</span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold transition-all ${
                      taskStatus === 'IN REVIEW'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : taskStatus === 'APPROVED'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'bg-[#c8ff00]/20 text-[#c8ff00] border border-[#c8ff00]/40'
                    }`}
                  >
                    STATUS: {taskStatus}
                  </span>
                </div>

                <div className="text-sm font-semibold text-white">
                  Quarterly Enterprise Billing Reconciliation & Stripe Tax Verification
                </div>

                {/* Inline Comment Thread */}
                <div className="space-y-2 pt-2 border-t border-neutral-800/80 text-xs">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-black font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      MC
                    </div>
                    <div className="bg-[#121520] p-2 rounded-lg text-neutral-300 w-full">
                      <span className="font-semibold text-white mr-1.5">Maya:</span>
                      Verified 14 out of 15 accounts. Flagged invoice #482 for manual discount review.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      JL
                    </div>
                    <div className="bg-[#121520] p-2 rounded-lg text-neutral-300 w-full">
                      <span className="font-semibold text-white mr-1.5">Jordan:</span>
                      Approved discount waiver. Safe to execute automated Stripe sync.
                    </div>
                  </div>
                </div>
              </div>

              {/* Status transition controls */}
              <div className="mt-4 flex items-center justify-between bg-[#141822] p-2.5 rounded-xl border border-neutral-800">
                <span className="text-xs font-mono text-neutral-400">UPDATE TASK STATE:</span>
                <div className="flex items-center gap-1.5">
                  {(['IN REVIEW', 'APPROVED', 'DONE'] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => setTaskStatus(st)}
                      className={`px-2.5 py-1 text-[11px] font-mono rounded cursor-pointer transition-colors ${
                        taskStatus === st
                          ? 'bg-[#c8ff00] text-black font-bold'
                          : 'bg-neutral-800 text-neutral-300 hover:text-white'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>ACTIVE COLLABORATORS: 4 ONLINE</span>
              <span className="text-[#c8ff00]">ZERO MERGE CONFLICTS</span>
            </div>
          </div>

          {/* Part 2: Pragmatic Useful AI (No glowing orb - functional output) */}
          <div className="lg:col-span-6 bg-[#11141d] border border-neutral-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                <div>
                  <span className="text-[10px] font-mono text-[#c8ff00]">USEFUL AI</span>
                  <h3 className="text-lg font-bold text-white mt-0.5">Natural Language to Pipeline Tasks</h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                  DETERMINISTIC
                </span>
              </div>

              {/* Input prompt box */}
              <div className="space-y-3">
                <div className="relative">
                  <textarea
                    rows={2}
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    className="w-full p-3 bg-[#151924] border border-neutral-700/80 rounded-xl text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#c8ff00] transition-colors resize-none font-sans"
                  />
                  <button
                    onClick={handleRunAi}
                    disabled={isGenerating}
                    className="absolute right-2.5 bottom-3 px-3 py-1 bg-[#c8ff00] text-black text-xs font-mono font-semibold rounded hover:bg-[#b5e600] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className={`w-3 h-3 ${isGenerating ? 'animate-spin' : ''}`} />
                    <span>{isGenerating ? 'ANALYZING...' : 'PARSE'}</span>
                  </button>
                </div>

                {/* Structured Output Cards */}
                {aiGenerated && (
                  <div className="space-y-2.5 animate-in fade-in duration-300">
                    <div className="p-3 bg-[#151924] border border-neutral-800 rounded-xl">
                      <div className="text-[10px] font-mono text-[#c8ff00]">SYSTEM SUMMARY</div>
                      <p className="text-xs text-neutral-300 mt-1">
                        Parsed 23 customer feedback tickets across Zendesk and Slack. Identified 2 critical SLA risks in enterprise billing export.
                      </p>
                    </div>

                    <div className="text-[10px] font-mono text-neutral-400 uppercase">
                      GENERATED STRUCTURED TASKS (4)
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 bg-[#141822] border border-neutral-800 rounded-lg">
                        <div className="font-semibold text-white">Fix CSV Export Timeout</div>
                        <div className="text-[10px] font-mono text-neutral-400 mt-0.5">
                          Owner: Alex Rivera · Due: Today 5 PM
                        </div>
                      </div>

                      <div className="p-2.5 bg-[#141822] border border-neutral-800 rounded-lg">
                        <div className="font-semibold text-white">Patch Webhook Deduplication</div>
                        <div className="text-[10px] font-mono text-neutral-400 mt-0.5">
                          Owner: Sam Patel · Due: Tomorrow 12 PM
                        </div>
                      </div>

                      <div className="p-2.5 bg-[#141822] border border-neutral-800 rounded-lg">
                        <div className="font-semibold text-white">Reconcile Stripe Invoices</div>
                        <div className="text-[10px] font-mono text-neutral-400 mt-0.5">
                          Owner: Maya Chen · Due: Oct 10
                        </div>
                      </div>

                      <div className="p-2.5 bg-[#141822] border border-neutral-800 rounded-lg">
                        <div className="font-semibold text-white">Notify Affected Customers</div>
                        <div className="text-[10px] font-mono text-neutral-400 mt-0.5">
                          Owner: Jordan Lee · Due: Oct 11
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Approval Action */}
            <div className="mt-5 pt-3 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400">
                {tasksDeployed ? '4 TASKS DISPATCHED TO QUEUE' : 'READY FOR HUMAN APPROVAL'}
              </span>

              <button
                onClick={handleApproveTasks}
                disabled={tasksDeployed}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  tasksDeployed
                    ? 'bg-neutral-800 text-neutral-400'
                    : 'bg-[#c8ff00] text-black hover:bg-[#b5e600]'
                }`}
              >
                {tasksDeployed ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c8ff00]" />
                    <span>APPROVED & IN QUEUE</span>
                  </>
                ) : (
                  <>
                    <span>APPROVE & DEPLOY TO PIPELINE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
