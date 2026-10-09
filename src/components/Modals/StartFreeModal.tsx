import React, { useState } from 'react';
import { X, ArrowRight, Zap, Check } from 'lucide-react';

interface StartFreeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLaunchWorkspace?: () => void;
}

export const StartFreeModal: React.FC<StartFreeModalProps> = ({ isOpen, onClose, onLaunchWorkspace }) => {
  const [workspaceName, setWorkspaceName] = useState('My Operations Hub');
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState<'starter' | 'growth'>('growth');
  const [launched, setLaunched] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLaunched(true);
    setTimeout(() => {
      if (onLaunchWorkspace) onLaunchWorkspace();
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="start-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
    >
      <div className="relative w-full max-w-lg bg-[#0e1015] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-left">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors p-1 rounded-md"
        >
          <X className="w-5 h-5" />
        </button>

        {!launched ? (
          <>
            <div className="mb-6">
              <span className="font-mono text-xs text-[#c8ff00] tracking-wider uppercase">
                INSTANT PROVISIONING
              </span>
              <h2 id="start-modal-title" className="text-2xl font-bold tracking-tight text-white mt-1">
                Start with sample free
              </h2>
              <p className="text-sm text-neutral-400 mt-1">
                14-day full access to visual workflows, pre-built connectors, and analytics.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1">
                  WORKSPACE NAME
                </label>
                <input
                  type="text"
                  required
                  value={workspaceName}
                  onChange={(e) => setWorkspaceName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#14171f] border border-neutral-700/80 rounded-lg text-sm text-white focus:outline-none focus:border-[#c8ff00] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1">
                  WORK EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 bg-[#14171f] border border-neutral-700/80 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#c8ff00] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-2">
                  SELECT DEFAULT WORKSPACE TIER
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPlan('starter')}
                    className={`p-3 text-left rounded-lg border transition-all ${
                      plan === 'starter'
                        ? 'border-[#c8ff00] bg-[#c8ff00]/5 text-white'
                        : 'border-neutral-800 bg-[#14171f] text-neutral-400'
                    }`}
                  >
                    <div className="text-xs font-mono">STARTER</div>
                    <div className="text-sm font-semibold text-white mt-0.5">$19/user/mo</div>
                    <div className="text-[11px] text-neutral-400 mt-1">Up to 25 workflows</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPlan('growth')}
                    className={`p-3 text-left rounded-lg border transition-all relative ${
                      plan === 'growth'
                        ? 'border-[#c8ff00] bg-[#c8ff00]/5 text-white'
                        : 'border-neutral-800 bg-[#14171f] text-neutral-400'
                    }`}
                  >
                    <span className="absolute -top-2 right-2 text-[10px] font-mono bg-[#c8ff00] text-black px-1.5 py-0.2 rounded font-semibold">
                      RECOMMENDED
                    </span>
                    <div className="text-xs font-mono">GROWTH</div>
                    <div className="text-sm font-semibold text-white mt-0.5">$49/user/mo</div>
                    <div className="text-[11px] text-neutral-400 mt-1">Unlimited pipelines</div>
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-5 bg-[#c8ff00] text-black font-semibold rounded-lg hover:bg-[#b5e600] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#c8ff00]/10"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  <span>LAUNCH DEMO WORKSPACE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-neutral-400 pt-1">
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#c8ff00]" /> No card needed
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#c8ff00]" /> 1-click sample data
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#c8ff00]" /> Cancel anytime
                </span>
              </div>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#c8ff00]/20 border border-[#c8ff00] text-[#c8ff00] animate-bounce">
              <Zap className="w-7 h-7 fill-[#c8ff00]" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              INITIALIZING WORKSPACE
            </h2>
            <p className="text-sm text-neutral-400 font-mono">
              Connecting 24 default mock pipes · Provisioning DAG engine...
            </p>
            <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#c8ff00] h-full animate-[pulse_1s_ease-in-out_infinite] w-3/4"></div>
            </div>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-mono rounded-lg transition-colors"
            >
              EXPLORE ACTIVE DEMO
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
