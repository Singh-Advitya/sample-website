import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '20-50',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please enter a valid work email.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      teamSize: '20-50',
      notes: '',
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
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

        {!submitted ? (
          <>
            <div className="mb-6">
              <span className="font-mono text-xs text-[#c8ff00] tracking-wider uppercase">
                SAMPLE / PRIVATE DEMO
              </span>
              <h2 id="demo-modal-title" className="text-2xl font-bold tracking-tight text-white mt-1">
                Book a personalized walkthrough
              </h2>
              <p className="text-sm text-neutral-400 mt-1">
                See how sample connects your exact stack and replaces manual tasks with automated pipelines.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-950/40 border border-red-500/30 rounded-lg text-xs text-red-300">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Maya Chen"
                  className="w-full px-3.5 py-2.5 bg-[#14171f] border border-neutral-700/80 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#c8ff00] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1">
                  WORK EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="maya@northstar.co"
                  className="w-full px-3.5 py-2.5 bg-[#14171f] border border-neutral-700/80 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#c8ff00] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1">
                    COMPANY *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Northstar Studio"
                    className="w-full px-3.5 py-2.5 bg-[#14171f] border border-neutral-700/80 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#c8ff00] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1">
                    TEAM SIZE
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#14171f] border border-neutral-700/80 rounded-lg text-sm text-white focus:outline-none focus:border-[#c8ff00] transition-colors"
                  >
                    <option value="1-15">1 – 15 members</option>
                    <option value="16-50">16 – 50 members</option>
                    <option value="51-200">51 – 200 members</option>
                    <option value="200+">200+ members</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1">
                  WHAT WOULD YOU LIKE TO AUTOMATE?
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Inbound CRM routing, spreadsheet syncing, multi-tool approvals..."
                  className="w-full px-3.5 py-2.5 bg-[#14171f] border border-neutral-700/80 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#c8ff00] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 px-5 bg-[#c8ff00] text-black font-semibold rounded-lg hover:bg-[#b5e600] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#c8ff00]/10"
              >
                <span>BOOK MY DEMO</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-neutral-500 mt-2">
                Fictional demo environment · No credit card required · Instant sandbox access
              </p>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30 text-[#c8ff00] mb-2">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              REQUEST RECEIVED.
            </h2>
            <p className="text-sm text-neutral-400 max-w-sm mx-auto">
              Thanks — the sample team will be in touch shortly to confirm your custom pipeline session.
            </p>
            <div className="p-3 bg-[#14171f] border border-neutral-800 rounded-lg text-xs font-mono text-neutral-300 max-w-xs mx-auto">
              STATUS: DEMO_CONFIRMED // REF: SMPL-{Math.floor(1000 + Math.random() * 9000)}
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-mono rounded-lg transition-colors"
            >
              RETURN TO DEMO
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
