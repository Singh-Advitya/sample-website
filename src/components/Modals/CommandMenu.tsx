import React, { useState, useEffect } from 'react';
import { Search, X, Zap, ArrowRight, Activity, DollarSign, Layers, ShieldCheck, Terminal, BookOpen } from 'lucide-react';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (actionId: string) => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({
  isOpen,
  onClose,
  onSelectAction,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onSelectAction('open_cmd');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onSelectAction]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'jump_hero',
      label: 'Interactive Workspace Overview',
      category: 'Product',
      icon: Terminal,
      shortcut: '01',
    },
    {
      id: 'jump_chaos',
      label: 'The Old Way (Fragmented Tools Collapse)',
      category: 'Experience',
      icon: Layers,
      shortcut: '02',
    },
    {
      id: 'jump_workflow',
      label: 'Workflow DAG Builder & Execution Runner',
      category: 'Product',
      icon: Zap,
      shortcut: '03',
    },
    {
      id: 'jump_insights',
      label: 'Live Operational Analytics & Latency',
      category: 'Product',
      icon: Activity,
      shortcut: '04',
    },
    {
      id: 'jump_collab',
      label: 'Multi-User Collaboration & Useful AI Engine',
      category: 'Feature',
      icon: Terminal,
      shortcut: '05',
    },
    {
      id: 'jump_integrations',
      label: 'Connected Ecosystem (24 Native Tools)',
      category: 'Platform',
      icon: Layers,
      shortcut: '06',
    },
    {
      id: 'jump_calculator',
      label: 'Interactive ROI & Hours Saved Calculator',
      category: 'Tools',
      icon: DollarSign,
      shortcut: 'ROI',
    },
    {
      id: 'jump_solutions',
      label: 'Role Explorer (Ops, Marketing, Sales, Product)',
      category: 'Solutions',
      icon: BookOpen,
      shortcut: 'SOL',
    },
    {
      id: 'jump_security',
      label: 'Infrastructure, SOC 2 & Live System Status',
      category: 'Trust',
      icon: ShieldCheck,
      shortcut: 'SEC',
    },
    {
      id: 'jump_pricing',
      label: 'Pricing Plans (Starter, Growth, Business)',
      category: 'Commercial',
      icon: DollarSign,
      shortcut: 'PRC',
    },
    {
      id: 'open_book_demo',
      label: 'Book a Live Product Walkthrough',
      category: 'Actions',
      icon: ArrowRight,
      shortcut: 'DEMO',
    },
    {
      id: 'open_start_free',
      label: 'Start Free Sandbox (14-Day Full Access)',
      category: 'Actions',
      icon: Zap,
      shortcut: 'FREE',
    },
  ];

  const filtered = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="command-palette-title"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#0f1117] border border-neutral-800 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3.5 border-b border-neutral-800 bg-[#13161f]">
          <Search className="w-4 h-4 text-neutral-400 mr-3" />
          <input
            type="text"
            id="command-palette-title"
            autoFocus
            placeholder="Type a command or jump to feature (e.g. workflow, pricing, ROI)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="text-xs font-mono text-neutral-400 px-1.5 py-0.5 border border-neutral-700 rounded hover:text-white"
          >
            ESC
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto py-2 px-2 divide-y divide-neutral-900/40">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-neutral-400">
              No matching commands found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectAction(item.id);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-neutral-800/60 text-left transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-neutral-800/80 flex items-center justify-center text-neutral-300 group-hover:text-[#c8ff00] group-hover:bg-[#c8ff00]/10 transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-200 group-hover:text-white">
                        {item.label}
                      </div>
                      <div className="text-[11px] font-mono text-neutral-400">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 group-hover:bg-[#c8ff00]/20 group-hover:text-[#c8ff00] transition-colors">
                    {item.shortcut}
                  </span>
                </button>
              );
            })
          )}
        </div>

        <div className="px-4 py-2 bg-[#0a0c10] border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
          <span>Navigate with arrows or click</span>
          <span>sample / COMMAND CENTER</span>
        </div>
      </div>
    </div>
  );
};
