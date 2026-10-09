import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ChapterOneChaos } from './components/ChapterOneChaos';
import { InteractiveProductDemo } from './components/InteractiveProductDemo';
import { WorkflowBuilderSection } from './components/WorkflowBuilderSection';
import { HorizontalWorkflowStream } from './components/HorizontalWorkflowStream';
import { CollaborationAISection } from './components/CollaborationAISection';
import { IntegrationsEcosystem } from './components/IntegrationsEcosystem';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { SolutionsExplorer } from './components/SolutionsExplorer';
import { RoiCalculator } from './components/RoiCalculator';
import { CaseStudySection } from './components/CaseStudySection';
import { SecurityInfrastructure } from './components/SecurityInfrastructure';
import { ChangelogSection } from './components/ChangelogSection';
import { PricingSection } from './components/PricingSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { CommandMenu } from './components/Modals/CommandMenu';
import { BookDemoModal } from './components/Modals/BookDemoModal';
import { StartFreeModal } from './components/Modals/StartFreeModal';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [isCommandOpen, setIsCommandOpen] = useState<boolean>(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);
  const [isStartFreeOpen, setIsStartFreeOpen] = useState<boolean>(false);

  const handleCommandAction = (actionId: string) => {
    if (actionId === 'open_cmd') {
      setIsCommandOpen(true);
      return;
    }
    if (actionId === 'open_book_demo') {
      setIsDemoModalOpen(true);
      return;
    }
    if (actionId === 'open_start_free') {
      setIsStartFreeOpen(true);
      return;
    }

    const mapping: Record<string, string> = {
      jump_hero: 'product-demo',
      jump_chaos: 'chaos-section',
      jump_workflow: 'workflow-builder',
      jump_insights: 'product-demo',
      jump_collab: 'collaboration-ai',
      jump_integrations: 'integrations',
      jump_calculator: 'calculator',
      jump_solutions: 'solutions',
      jump_security: 'security',
      jump_pricing: 'pricing',
    };

    const targetId = mapping[actionId];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleWatchProduct = () => {
    const el = document.getElementById('product-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#f4f5f7] flex flex-col font-sans selection:bg-[#c8ff00] selection:text-black">
      {/* Dynamic desktop cursor */}
      <CustomCursor />

      {/* Fixed Navigation Bar */}
      <Navigation
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenDemo={() => setIsDemoModalOpen(true)}
        onOpenStartFree={() => setIsStartFreeOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section & Live Workspace (Scroll-Driven Zoom) */}
        <HeroSection
          onStartFree={() => setIsStartFreeOpen(true)}
          onWatchProduct={handleWatchProduct}
        />

        {/* Chapter 01: The Old Way (Scroll-Driven Fragmentation into Collapse) */}
        <ChapterOneChaos />

        {/* Chapter 02: Enter sample & Interactive Step Demo (Scroll-Driven 5 Stages) */}
        <InteractiveProductDemo />

        {/* Visual DAG Workflow Builder */}
        <WorkflowBuilderSection />

        {/* Horizontal Scroll Moment: Production Pipelines */}
        <HorizontalWorkflowStream />

        {/* Team Collaboration & Pragmatic AI Engine */}
        <CollaborationAISection />

        {/* Integrations Ecosystem (24 connected platforms) */}
        <IntegrationsEcosystem />

        {/* Draggable Before / After Comparison */}
        <BeforeAfterSlider />

        {/* Adaptive Solutions Explorer */}
        <SolutionsExplorer />

        {/* Interactive Savings & ROI Calculator */}
        <RoiCalculator />

        {/* Case Study & Customer Proof */}
        <CaseStudySection />

        {/* Security, Compliance & System Status Console */}
        <SecurityInfrastructure />

        {/* Product Releases & Changelog */}
        <ChangelogSection />

        {/* Pricing Plans */}
        <PricingSection
          onStartFree={() => setIsStartFreeOpen(true)}
          onBookDemo={() => setIsDemoModalOpen(true)}
        />

        {/* The Final Transformation & Convergence CTA */}
        <FinalCtaSection
          onStartFree={() => setIsStartFreeOpen(true)}
          onBookDemo={() => setIsDemoModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onStartFree={() => setIsStartFreeOpen(true)}
        onBookDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Global Interactive Modals */}
      <CommandMenu
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onSelectAction={handleCommandAction}
      />

      <BookDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <StartFreeModal
        isOpen={isStartFreeOpen}
        onClose={() => setIsStartFreeOpen(false)}
        onLaunchWorkspace={() => {
          setIsStartFreeOpen(false);
          handleWatchProduct();
        }}
      />
    </div>
  );
}
