import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onStartFree: () => void;
  onBookDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onStartFree, onBookDemo }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080a] border-t border-neutral-900 text-neutral-400 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle recurring lime signal path */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8ff00]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-neutral-900">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-3xl font-bold tracking-tight text-white hover:text-neutral-200 transition-colors inline-block"
            >
              sample
            </a>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              {COMPANY_INFO.secondaryTagline}
            </p>
            <div className="text-xs font-mono text-neutral-500 space-y-1.5 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c8ff00] shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c8ff00] shrink-0" />
                <span>{COMPANY_INFO.email} · {COMPANY_INFO.salesEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c8ff00] shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Links Column 1: Product */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              PRODUCT
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('product-demo')} className="hover:text-white transition-colors cursor-pointer">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('workflow-builder')} className="hover:text-white transition-colors cursor-pointer">
                  Workflow Builder
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('collaboration-ai')} className="hover:text-white transition-colors cursor-pointer">
                  Useful AI Engine
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('integrations')} className="hover:text-white transition-colors cursor-pointer">
                  Connectors (24)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricing')} className="hover:text-white transition-colors cursor-pointer">
                  Pricing Plans
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Solutions */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              SOLUTIONS
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('solutions')} className="hover:text-white transition-colors cursor-pointer">
                  Operations
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions')} className="hover:text-white transition-colors cursor-pointer">
                  Revenue & Sales
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions')} className="hover:text-white transition-colors cursor-pointer">
                  Marketing
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions')} className="hover:text-white transition-colors cursor-pointer">
                  Product & Support
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('calculator')} className="hover:text-white transition-colors cursor-pointer">
                  ROI Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Trust & Company */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              TRUST
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('security')} className="hover:text-white transition-colors cursor-pointer">
                  SOC 2 Readiness
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('security')} className="hover:text-white transition-colors cursor-pointer">
                  System Status
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('security')} className="hover:text-white transition-colors cursor-pointer">
                  SAML / Okta SSO
                </button>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="hover:text-white transition-colors">
                  Support Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Action Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              GET STARTED
            </div>
            <p className="text-xs text-neutral-500">
              Launch your 14-day interactive trial in under 60 seconds.
            </p>
            <button
              onClick={onStartFree}
              className="w-full py-2.5 px-3 rounded-lg bg-[#c8ff00] text-black text-xs font-mono font-bold hover:bg-[#b5e600] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-[#c8ff00]/10"
            >
              <span>START FREE</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Formal Legal & Copyright Area */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <div className="text-center sm:text-left">
            <span className="text-neutral-400 font-semibold">{COMPANY_INFO.formalName}</span>
            <span className="mx-2">·</span>
            <span>&copy; 2026 {COMPANY_INFO.formalName}. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
            <span>·</span>
            <span>Security Whitepaper</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
