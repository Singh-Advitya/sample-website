import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Mail,
  MessageSquare,
  Table,
  FileText,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  RotateCcw,
  ArrowDown,
  Layers,
  Sparkles,
} from 'lucide-react';

interface ToolConfig {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  appearStart: number;
  appearEnd: number;
  color: string;
  badge: string;
  content: string;
  desktopX: number;
  desktopY: number;
  desktopRotate: number;
  tabletX: number;
  tabletY: number;
  mobileX: number;
  mobileY: number;
  showOnTablet: boolean;
  showOnMobile: boolean;
}

// Organic easing functions
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInQuad = (t: number) => t * t;
const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export const ChapterOneChaos: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth LERP physics state
  const targetProgressRef = useRef<number>(0);
  const smoothProgressRef = useRef<number>(0);
  const isLoopRunningRef = useRef<boolean>(false);
  const animFrameRef = useRef<number | null>(null);

  const [progress, setProgress] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  // 8 Disconnected Tools with carefully balanced non-overlapping coordinates
  const tools: ToolConfig[] = [
    {
      id: 'email',
      title: 'Outlook / Gmail',
      icon: Mail,
      appearStart: 0.03,
      appearEnd: 0.12,
      color: 'border-red-500/40 text-red-400 bg-[#170e10] shadow-red-500/5',
      badge: '4 unread',
      content: 'Fwd: Urgent vendor contract sign-off needed.',
      desktopX: -290,
      desktopY: -110,
      desktopRotate: -2,
      tabletX: -195,
      tabletY: -75,
      mobileX: -85,
      mobileY: -55,
      showOnTablet: true,
      showOnMobile: true,
    },
    {
      id: 'sheets',
      title: 'Pipeline_FINAL.xlsx',
      icon: Table,
      appearStart: 0.08,
      appearEnd: 0.17,
      color: 'border-emerald-500/40 text-emerald-400 bg-[#0d1813] shadow-emerald-500/5',
      badge: 'REF! Err',
      content: 'Row 344 overwritten by unknown editor.',
      desktopX: 290,
      desktopY: -110,
      desktopRotate: 2,
      tabletX: 195,
      tabletY: -75,
      mobileX: 85,
      mobileY: -55,
      showOnTablet: true,
      showOnMobile: true,
    },
    {
      id: 'crm',
      title: 'Salesforce Opp',
      icon: AlertTriangle,
      appearStart: 0.14,
      appearEnd: 0.23,
      color: 'border-amber-500/40 text-amber-400 bg-[#18150d] shadow-amber-500/5',
      badge: 'Stalled 8d',
      content: 'HubSpot MQL missing SFDC owner.',
      desktopX: -305,
      desktopY: -35,
      desktopRotate: 1,
      tabletX: -205,
      tabletY: 0,
      mobileX: -85,
      mobileY: 55,
      showOnTablet: true,
      showOnMobile: true,
    },
    {
      id: 'slack',
      title: 'Slack #ops-fire',
      icon: MessageSquare,
      appearStart: 0.19,
      appearEnd: 0.28,
      color: 'border-purple-500/40 text-purple-400 bg-[#160e19] shadow-purple-500/5',
      badge: '32 alerts',
      content: 'Can someone ping Jordan for approval?',
      desktopX: 305,
      desktopY: -35,
      desktopRotate: -1,
      tabletX: 205,
      tabletY: 0,
      mobileX: 85,
      mobileY: 55,
      showOnTablet: true,
      showOnMobile: true,
    },
    {
      id: 'jira',
      title: 'Jira Issue #842',
      icon: AlertTriangle,
      appearStart: 0.25,
      appearEnd: 0.34,
      color: 'border-cyan-500/40 text-cyan-400 bg-[#0e1719] shadow-cyan-500/5',
      badge: 'Blocked',
      content: 'Waiting on Okta access permissions.',
      desktopX: -295,
      desktopY: 40,
      desktopRotate: -1,
      tabletX: -195,
      tabletY: 75,
      mobileX: -85,
      mobileY: 55,
      showOnTablet: true,
      showOnMobile: false,
    },
    {
      id: 'hubspot',
      title: 'HubSpot Form MQL',
      icon: Mail,
      appearStart: 0.29,
      appearEnd: 0.38,
      color: 'border-orange-500/40 text-orange-400 bg-[#18120d] shadow-orange-500/5',
      badge: 'Idle Lead',
      content: 'Enterprise score 94 unassigned.',
      desktopX: 295,
      desktopY: 40,
      desktopRotate: 1,
      tabletX: 195,
      tabletY: 75,
      mobileX: 85,
      mobileY: 55,
      showOnTablet: true,
      showOnMobile: false,
    },
    {
      id: 'calendar',
      title: 'Calendar Clash',
      icon: Calendar,
      appearStart: 0.33,
      appearEnd: 0.42,
      color: 'border-blue-500/40 text-blue-400 bg-[#0e1419] shadow-blue-500/5',
      badge: 'Conflict',
      content: 'Vendor Kickoff vs Q1 Review duplicate.',
      desktopX: -305,
      desktopY: 115,
      desktopRotate: 2,
      tabletX: -195,
      tabletY: 75,
      mobileX: -85,
      mobileY: -55,
      showOnTablet: false,
      showOnMobile: false,
    },
    {
      id: 'notion',
      title: 'Notion Spec Draft',
      icon: FileText,
      appearStart: 0.37,
      appearEnd: 0.46,
      color: 'border-neutral-500/40 text-neutral-300 bg-[#141517] shadow-neutral-500/5',
      badge: 'Pending',
      content: 'Version mismatch with contract.',
      desktopX: 305,
      desktopY: 115,
      desktopRotate: -2,
      tabletX: 195,
      tabletY: 75,
      mobileX: 85,
      mobileY: -55,
      showOnTablet: false,
      showOnMobile: false,
    },
  ];

  // High-performance, responsive continuous LERP loop
  // Damping factor 0.16 ensures instant responsiveness without sluggish lag
  const startLerpLoop = useCallback(() => {
    if (isLoopRunningRef.current) return;
    isLoopRunningRef.current = true;

    const tick = () => {
      const diff = targetProgressRef.current - smoothProgressRef.current;

      if (Math.abs(diff) > 0.0008) {
        smoothProgressRef.current += diff * 0.16;
        setProgress(Math.round(smoothProgressRef.current * 1000) / 1000);
        animFrameRef.current = requestAnimationFrame(tick);
      } else {
        smoothProgressRef.current = targetProgressRef.current;
        setProgress(targetProgressRef.current);
        isLoopRunningRef.current = false;
        animFrameRef.current = null;
      }
    };

    animFrameRef.current = requestAnimationFrame(tick);
  }, []);

  // Compute normalized section progress from container boundaries
  const updateTargetProgress = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollDistance = rect.height - windowHeight;

    if (totalScrollDistance <= 0) return;

    const scrolled = -rect.top;
    const rawProgress = scrolled / totalScrollDistance;
    const clamped = Math.min(Math.max(rawProgress, 0), 1);

    targetProgressRef.current = clamped;
    startLerpLoop();
  }, [startLerpLoop]);

  // Handle scroll and resize independently to avoid re-rendering on every scroll event
  useEffect(() => {
    const handleScroll = () => {
      updateTargetProgress();
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      updateTargetProgress();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Initial check
    updateTargetProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        isLoopRunningRef.current = false;
      }
    };
  }, [updateTargetProgress]);

  // Handle Replay Experience: Smoothly glides back to Phase 01 without page reload
  const handleReplay = () => {
    if (containerRef.current) {
      targetProgressRef.current = 0;
      startLerpLoop();
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  /**
   * CINEMATIC TIMELINE DESIGN WITH INTENTIONAL PAUSES:
   *
   * [0.00 -> 0.40] PHASE 01: FRAGMENTED (Tools enter sequentially)
   * [0.40 -> 0.48] PHASE 02: FULL CHAOS
   * [0.48 -> 0.56] PAUSE 01: CHAOS HOLD & SUSPENSE (Tools stay still, user absorbs chaos)
   * [0.56 -> 0.72] PHASE 03: COLLAPSE (Tools gravitationally converge to center point)
   * [0.72 -> 0.78] PAUSE 02: SINGULARITY PAUSE (Everything holds at the glowing central node)
   * [0.78 -> 0.88] PHASE 04: TRANSFORMATION (Central node expands into SAMPLE workspace)
   * [0.88 -> 1.00] PHASE 05: CONNECTED (Final state hold, Replay button visible)
   */

  // Status and phase metadata
  let phaseNumber = '01 / 05';
  let statusText = '12 SYSTEMS DETECTED';
  let phaseLabel = 'PHASE 01 / FRAGMENTED';
  let activeHeadlineIndex = 0; // 0 = TOO MANY TOOLS, 1 = BRING IT TOGETHER, 2 = ONE SYSTEM
  let subtitle = 'Your team’s work shouldn’t live in ten different disconnected places.';

  if (progress < 0.40) {
    phaseNumber = '01 / 05';
    statusText = '12 SYSTEMS DETECTED';
    phaseLabel = 'PHASE 01 / FRAGMENTED';
    activeHeadlineIndex = 0;
    subtitle = 'Your team’s work shouldn’t live in ten different disconnected places.';
  } else if (progress < 0.48) {
    phaseNumber = '02 / 05';
    statusText = 'WORKFLOW FRAGMENTED';
    phaseLabel = 'PHASE 02 / CHAOS';
    activeHeadlineIndex = 0;
    subtitle = 'Information scatters across noisy chat channels, broken formulas, and stalled deals.';
  } else if (progress < 0.56) {
    // PAUSE 01: CHAOS HOLD
    phaseNumber = '02 / 05';
    statusText = 'OVERLOAD DETECTED // PAUSE TO CONSOLIDATE';
    phaseLabel = 'PHASE 02 / SUSPENSE';
    activeHeadlineIndex = 0;
    subtitle = 'Every team is running in different directions. Everything pauses for consolidation.';
  } else if (progress < 0.72) {
    phaseNumber = '03 / 05';
    statusText = 'CONSOLIDATING';
    phaseLabel = 'PHASE 03 / COLLAPSE';
    activeHeadlineIndex = 0;
    subtitle = 'Signals connect. Scattered tools gravitationally accelerate toward a single center.';
  } else if (progress < 0.78) {
    // PAUSE 02: SINGULARITY HOLD
    phaseNumber = '03 / 05';
    statusText = 'COLLAPSE COMPLETE // CONVERGING INTO ONE';
    phaseLabel = 'PHASE 03 / SINGULARITY';
    activeHeadlineIndex = 0;
    subtitle = 'All separate tools have collapsed into a single point of unified intelligence.';
  } else if (progress < 0.88) {
    phaseNumber = '04 / 05';
    statusText = 'SYNCING → sample';
    phaseLabel = 'PHASE 04 / TRANSFORMATION';
    activeHeadlineIndex = 1;
    subtitle = 'The central point expands into the sample unified operations workspace.';
  } else {
    phaseNumber = '05 / 05';
    statusText = 'SYSTEM READY';
    phaseLabel = 'PHASE 05 / CONNECTED';
    activeHeadlineIndex = 2;
    subtitle = 'Work, connected. sample orchestrates all your tools into one cohesive pipeline.';
  }

  // COLLAPSE CALCULATION:
  // Starts at 0.56, completes cleanly at 0.72
  let collapseProgress = 0;
  if (progress >= 0.56 && progress < 0.72) {
    const raw = (progress - 0.56) / 0.16;
    collapseProgress = easeInQuad(raw);
  } else if (progress >= 0.72) {
    collapseProgress = 1;
  }

  // Early text fade during collapse so cards never stack overlapping text
  // Smoothly fades to 0 as collapse progresses (from 0 to 0.45 of collapse)
  const cardTextOpacity = Math.max(0, 1 - collapseProgress * 2.2);

  // SINGULARITY GLOW:
  // Visible during late collapse (0.64 -> 0.72), holds during Pause 02 (0.72 -> 0.78),
  // then smoothly transitions as product expands
  const isSingularityActive = progress >= 0.64 && progress <= 0.84;
  const singularityIntensity =
    progress < 0.72
      ? (progress - 0.64) / 0.08
      : progress <= 0.78
      ? 1
      : Math.max(0, 1 - (progress - 0.78) / 0.06);

  // PRODUCT CARD EXPANSION (Phase 04 -> 05):
  // Expands smoothly from 0.78 to 0.88 with cubic ease-out
  let productRevealProgress = 0;
  if (progress >= 0.78) {
    const raw = Math.min((progress - 0.78) / 0.10, 1);
    productRevealProgress = easeOutCubic(raw);
  }

  const showReplayButton = progress >= 0.88;

  // Screen size tier
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  return (
    <section
      id="chaos-section"
      ref={containerRef}
      className="relative min-h-[380vh] bg-[#090b0e] border-t border-neutral-900 select-none"
    >
      {/* Pinned Sticky Visual Viewport with generous top clearance below fixed navbar */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-6 lg:px-8 pb-3 pt-18 sm:pt-20">
        {/* Top Status & Phase Indicator Bar */}
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between text-xs font-mono border-b border-neutral-900/80 pb-2.5 z-30 shrink-0">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#c8ff00] animate-pulse shrink-0" />
            <span className="text-[#c8ff00] font-bold tracking-wider transition-all duration-300">
              {statusText}
            </span>
            <span className="text-neutral-600 hidden sm:inline">/</span>
            <span className="text-neutral-400 hidden sm:inline transition-all duration-300">
              {phaseLabel}
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            <span className="text-neutral-400 font-bold">{phaseNumber}</span>
            <div className="w-16 sm:w-28 h-1 bg-neutral-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#c8ff00] transition-all duration-100 ease-out"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>
            <span className="text-neutral-400 w-8 text-right font-mono">
              {Math.round(progress * 100)}%
            </span>
          </div>
        </div>

        {/* Dedicated Non-Overlapping Header Zone with Smooth Masked Transitions */}
        <div className="w-full max-w-2xl mx-auto text-center z-20 shrink-0 py-2 sm:py-3">
          <div className="inline-block px-2.5 py-0.5 mb-1.5 text-[10px] font-mono tracking-widest text-[#c8ff00] uppercase bg-[#c8ff00]/10 border border-[#c8ff00]/20 rounded-full transition-all duration-300">
            {phaseLabel}
          </div>

          {/* Smooth Dissolving Headline Stack */}
          <div className="relative h-9 sm:h-12 md:h-14 overflow-hidden flex items-center justify-center">
            {/* Headline 1: TOO MANY TOOLS. */}
            <h2
              className="absolute inset-0 flex items-center justify-center text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-none transition-all duration-500 ease-out"
              style={{
                opacity: activeHeadlineIndex === 0 ? 1 : 0,
                transform:
                  activeHeadlineIndex === 0
                    ? 'translateY(0)'
                    : activeHeadlineIndex > 0
                    ? 'translateY(-20px)'
                    : 'translateY(20px)',
                pointerEvents: activeHeadlineIndex === 0 ? 'auto' : 'none',
              }}
            >
              TOO MANY TOOLS.
            </h2>

            {/* Headline 2: BRING IT TOGETHER. */}
            <h2
              className="absolute inset-0 flex items-center justify-center text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-none transition-all duration-500 ease-out"
              style={{
                opacity: activeHeadlineIndex === 1 ? 1 : 0,
                transform:
                  activeHeadlineIndex === 1
                    ? 'translateY(0)'
                    : activeHeadlineIndex > 1
                    ? 'translateY(-20px)'
                    : 'translateY(20px)',
                pointerEvents: activeHeadlineIndex === 1 ? 'auto' : 'none',
              }}
            >
              BRING IT TOGETHER.
            </h2>

            {/* Headline 3: ONE SYSTEM. */}
            <h2
              className="absolute inset-0 flex items-center justify-center text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-none transition-all duration-500 ease-out"
              style={{
                opacity: activeHeadlineIndex === 2 ? 1 : 0,
                transform:
                  activeHeadlineIndex === 2
                    ? 'translateY(0)'
                    : 'translateY(20px)',
                pointerEvents: activeHeadlineIndex === 2 ? 'auto' : 'none',
              }}
            >
              ONE SYSTEM.
            </h2>
          </div>

          {/* Subtitle with smooth dissolve transition */}
          <p className="mt-1.5 text-xs sm:text-sm text-neutral-400 max-w-md mx-auto transition-opacity duration-300 line-clamp-2 min-h-[2.5rem]">
            {subtitle}
          </p>
        </div>

        {/* Dynamic Center Arena:
            - Lerp smoothed coordinate tracking
            - Non-linear cubic easing on entrance and collapse
            - Intentional pauses in chaos and singularity
            - During collapse, tool text cleanly fades out into signal dots
            - SAMPLE unified product card blooms smoothly from singularity
        */}
        <div className="relative w-full max-w-5xl mx-auto flex-1 flex items-center justify-center my-1 sm:my-2 min-h-0">
          {/* Perimeter Floating Chaotic Tools (Progress 0.0 -> 0.78) */}
          {collapseProgress < 1 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none transform-gpu">
              {/* SVG Connector Lines from tools to center point during Collapse (Phase 03) */}
              {collapseProgress > 0.02 && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                  <defs>
                    <linearGradient id="collapseLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c8ff00" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#c8ff00" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  {tools.map((tool) => {
                    const isVisible = progress >= tool.appearStart;
                    if (!isVisible) return null;
                    if (isMobile && !tool.showOnMobile) return null;
                    if (isTablet && !tool.showOnTablet) return null;

                    const originX = isMobile ? tool.mobileX : isTablet ? tool.tabletX : tool.desktopX;
                    const originY = isMobile ? tool.mobileY : isTablet ? tool.tabletY : tool.desktopY;
                    const curX = originX * (1 - collapseProgress);
                    const curY = originY * (1 - collapseProgress);

                    return (
                      <line
                        key={`line-${tool.id}`}
                        x1={`calc(50% + ${curX}px)`}
                        y1={`calc(50% + ${curY}px)`}
                        x2="50%"
                        y2="50%"
                        stroke="url(#collapseLineGrad)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        opacity={collapseProgress * 0.9}
                      />
                    );
                  })}
                </svg>
              )}

              {/* Render non-overlapping tool windows with cubic ease-out entry & ease-in collapse */}
              {tools.map((tool) => {
                const isVisible = progress >= tool.appearStart;
                if (!isVisible) return null;
                if (isMobile && !tool.showOnMobile) return null;
                if (isTablet && !tool.showOnTablet) return null;

                // Smooth cubic ease-out entry curve
                const rawEntry = Math.min(
                  Math.max((progress - tool.appearStart) / (tool.appearEnd - tool.appearStart), 0),
                  1
                );
                const entryProgress = easeOutCubic(rawEntry);

                // Coordinates according to screen tier
                const originX = isMobile ? tool.mobileX : isTablet ? tool.tabletX : tool.desktopX;
                const originY = isMobile ? tool.mobileY : isTablet ? tool.tabletY : tool.desktopY;
                const originRotate = isMobile ? 0 : isTablet ? 0 : tool.desktopRotate;

                // Collapse transition toward (0, 0) with physical easing
                const currentX = originX * (1 - collapseProgress);
                const currentY = originY * (1 - collapseProgress);
                const currentScale = (0.92 + entryProgress * 0.08) * (1 - collapseProgress * 0.65);
                const currentOpacity = entryProgress * (1 - collapseProgress * 0.98);
                const currentRotate = originRotate * (1 - collapseProgress);

                return (
                  <div
                    key={tool.id}
                    className={`absolute rounded-xl border ${tool.color} shadow-xl will-change-transform transform-gpu ${
                      isMobile
                        ? 'w-38 p-2'
                        : isTablet
                        ? 'w-48 p-2.5'
                        : 'w-60 p-2.5'
                    }`}
                    style={{
                      transform: `translate3d(${currentX}px, ${currentY}px, 0) rotate(${currentRotate}deg) scale(${currentScale})`,
                      opacity: currentOpacity,
                    }}
                  >
                    {/* Header line with icon and title */}
                    <div className="flex items-center justify-between pb-1 mb-1 border-b border-neutral-800/80 text-xs">
                      <div className="flex items-center gap-1.5 truncate">
                        <tool.icon className="w-3.5 h-3.5 shrink-0 text-white" />
                        <span
                          className="font-semibold text-white truncate text-[11px] transition-opacity duration-200"
                          style={{ opacity: cardTextOpacity }}
                        >
                          {tool.title}
                        </span>
                      </div>
                      <span
                        className="text-[9px] font-mono px-1 py-0.2 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 shrink-0 transition-opacity duration-200"
                        style={{ opacity: cardTextOpacity }}
                      >
                        {tool.badge}
                      </span>
                    </div>

                    {/* Content text - Fades out early so no overlapping text in collapse */}
                    <p
                      className="text-[10px] text-neutral-300 leading-snug truncate transition-opacity duration-200"
                      style={{ opacity: cardTextOpacity }}
                    >
                      {tool.content}
                    </p>

                    {/* Glowing pulse indicator dot when collapsed into node */}
                    {collapseProgress > 0.25 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#c8ff00] animate-ping" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Central Luminous Singularity Core:
              Radiates during late collapse and PAUSE 02, then expands into SAMPLE
          */}
          {isSingularityActive && (
            <div className="absolute flex items-center justify-center pointer-events-none transform-gpu z-10">
              <div
                className="w-10 h-10 rounded-full bg-[#c8ff00] shadow-[0_0_50px_#c8ff00] transition-transform duration-100"
                style={{
                  opacity: singularityIntensity,
                  transform: `scale(${0.9 + singularityIntensity * 1.8})`,
                }}
              />
              <div
                className="absolute w-24 h-24 rounded-full border border-[#c8ff00]/60 animate-ping"
                style={{
                  opacity: singularityIntensity * 0.7,
                }}
              />
            </div>
          )}

          {/* Emergent SAMPLE Unified Product Card (Phase 04 -> 05) */}
          {productRevealProgress > 0 && (
            <div
              className="relative w-full max-w-xl sm:max-w-2xl bg-[#0e1118] border border-[#c8ff00]/40 rounded-2xl p-4 sm:p-5.5 text-center shadow-2xl shadow-[#c8ff00]/10 z-20 will-change-transform transform-gpu"
              style={{
                opacity: productRevealProgress,
                transform: `scale(${0.88 + productRevealProgress * 0.12})`,
              }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30 text-[11px] font-mono text-[#c8ff00] mb-2 sm:mb-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">ALL 12 SYSTEMS CONSOLIDATED // DETERMINISTIC ENGINE</span>
              </div>

              <div className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-tight">
                ONE CONNECTED WORKSPACE
              </div>

              <p className="mt-1 text-xs text-neutral-400 max-w-md mx-auto line-clamp-2">
                No human copy-paste. No broken spreadsheets. 24 platforms orchestrated into a single automated stream.
              </p>

              {/* 3 Pillars Architecture */}
              <div className="mt-3.5 sm:mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 text-left font-mono text-xs">
                <div className="p-2.5 sm:p-3 bg-[#131722] border border-neutral-800 rounded-xl">
                  <div className="text-[10px] text-[#c8ff00] font-bold">01 / INGEST</div>
                  <div className="text-xs font-semibold text-white mt-0.5 truncate">Multi-Channel Ingest</div>
                  <p className="text-[10px] text-neutral-400 mt-0.5 font-sans line-clamp-2">
                    Webhooks, forms, email triggers into one queue.
                  </p>
                </div>

                <div className="p-2.5 sm:p-3 bg-[#131722] border border-neutral-800 rounded-xl">
                  <div className="text-[10px] text-[#c8ff00] font-bold">02 / ROUTE</div>
                  <div className="text-xs font-semibold text-white mt-0.5 truncate">Deterministic Rules</div>
                  <p className="text-[10px] text-neutral-400 mt-0.5 font-sans line-clamp-2">
                    Condition scoring and automated branching.
                  </p>
                </div>

                <div className="p-2.5 sm:p-3 bg-[#131722] border border-neutral-800 rounded-xl">
                  <div className="text-[10px] text-[#c8ff00] font-bold">03 / EXECUTE</div>
                  <div className="text-xs font-semibold text-white mt-0.5 truncate">Instant Dispatch</div>
                  <p className="text-[10px] text-neutral-400 mt-0.5 font-sans line-clamp-2">
                    Salesforce & Slack updated in &lt; 50ms.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Control Bar with Scroll Prompt and Replay Button */}
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between text-xs font-mono pt-2 border-t border-neutral-900/80 z-30 shrink-0">
          <div className="text-neutral-500 flex items-center gap-2">
            <span>SCROLL TIMELINE</span>
            {progress < 0.95 && <ArrowDown className="w-3 h-3 text-[#c8ff00] animate-bounce" />}
          </div>

          {/* REPLAY EXPERIENCE Button: Only appears when animation is finished (progress >= 0.88) */}
          <div
            className={`transition-opacity duration-300 ${
              showReplayButton ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <button
              onClick={handleReplay}
              className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-[#c8ff00]/60 hover:border-[#c8ff00] text-[#c8ff00] text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 shadow-lg shadow-[#c8ff00]/10 active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>REPLAY EXPERIENCE ↻</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
