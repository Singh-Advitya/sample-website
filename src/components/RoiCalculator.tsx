import React, { useState } from 'react';
import { DollarSign, Clock, Users, ArrowRight, Sparkles } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [teamSize, setTeamSize] = useState<number>(35);
  const [tasksPerWeek, setTasksPerWeek] = useState<number>(40);
  const [taskDurationMinutes, setTaskDurationMinutes] = useState<number>(25);
  const [manualPipelines, setManualPipelines] = useState<number>(12);

  // Calculation formulas:
  // Weekly minutes = teamSize * tasksPerWeek * taskDurationMinutes
  // Monthly hours = (Weekly minutes * 4.33) / 60
  const monthlyTotalHours = Math.round((teamSize * tasksPerWeek * taskDurationMinutes * 4.33) / 60);
  
  // sample automates ~70% of repetitive operational tasks
  const monthlyHoursSaved = Math.round(monthlyTotalHours * 0.72);
  const remainingWorkloadHours = monthlyTotalHours - monthlyHoursSaved;

  // Assuming average operational burdened cost of $55/hr
  const annualDollarsSaved = Math.round(monthlyHoursSaved * 12 * 55);

  return (
    <section id="calculator" className="py-24 sm:py-32 bg-[#0c0e14] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs text-[#c8ff00] uppercase tracking-widest">
            INTERACTIVE SAVINGS MODEL / ROI
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase mt-2">
            HOW MUCH TIME<br />COULD YOU SAVE?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Adjust the operational inputs to calculate estimated hours saved and efficiency gains.
          </p>
        </div>

        <div className="bg-[#0e1118] border border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Input sliders */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slider 1: Team Size */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-300">TEAM SIZE (KNOWLEDGE WORKERS)</span>
                  <span className="text-[#c8ff00] font-bold text-sm">{teamSize} members</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="250"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-[#c8ff00] cursor-pointer"
                />
              </div>

              {/* Slider 2: Tasks per person / week */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-300">REPETITIVE TASKS / PERSON / WEEK</span>
                  <span className="text-[#c8ff00] font-bold text-sm">{tasksPerWeek} tasks</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={tasksPerWeek}
                  onChange={(e) => setTasksPerWeek(Number(e.target.value))}
                  className="w-full accent-[#c8ff00] cursor-pointer"
                />
              </div>

              {/* Slider 3: Duration per task */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-300">AVG MINUTES SPENT PER TASK</span>
                  <span className="text-[#c8ff00] font-bold text-sm">{taskDurationMinutes} mins</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  value={taskDurationMinutes}
                  onChange={(e) => setTaskDurationMinutes(Number(e.target.value))}
                  className="w-full accent-[#c8ff00] cursor-pointer"
                />
              </div>

              {/* Slider 4: Active Manual Pipelines */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-300">DISCONNECTED WORKFLOWS</span>
                  <span className="text-[#c8ff00] font-bold text-sm">{manualPipelines} workflows</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="40"
                  value={manualPipelines}
                  onChange={(e) => setManualPipelines(Number(e.target.value))}
                  className="w-full accent-[#c8ff00] cursor-pointer"
                />
              </div>
            </div>

            {/* Right: Calculated Metrics Display */}
            <div className="lg:col-span-5 bg-[#131622] border border-neutral-800 rounded-xl p-6 space-y-5 text-left">
              <div>
                <span className="text-[10px] font-mono text-[#c8ff00] uppercase tracking-wider">
                  PROJECTED EFFICIENCY GAIN
                </span>
                <div className="text-3xl sm:text-4xl font-bold font-mono text-white mt-1">
                  {monthlyHoursSaved.toLocaleString()} <span className="text-lg font-normal text-neutral-400">hrs / mo</span>
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Time reclaimed from repetitive data entry, approvals, and context switching.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-neutral-800/80 text-xs font-mono">
                <div className="p-2.5 bg-[#0e1118] rounded-lg">
                  <span className="text-neutral-500">CURRENT SPENT</span>
                  <div className="text-neutral-300 font-bold mt-0.5">{monthlyTotalHours.toLocaleString()} hrs</div>
                </div>
                <div className="p-2.5 bg-[#0e1118] rounded-lg">
                  <span className="text-neutral-500">AFTER SAMPLE</span>
                  <div className="text-[#c8ff00] font-bold mt-0.5">{remainingWorkloadHours.toLocaleString()} hrs</div>
                </div>
              </div>

              <div className="p-3 bg-[#182114] border border-[#c8ff00]/30 rounded-xl">
                <div className="text-[10px] font-mono text-[#c8ff00]">ESTIMATED ANNUAL VALUE</div>
                <div className="text-2xl font-bold font-mono text-white mt-0.5">
                  ${annualDollarsSaved.toLocaleString()}
                </div>
                <div className="text-[10px] font-mono text-neutral-400 mt-1">
                  Based on standard industry burdened operational resource rates ($55/hr).
                </div>
              </div>

              <div className="text-[10px] font-mono text-neutral-500 text-center">
                * Illustrative demonstration estimate for planning purposes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
