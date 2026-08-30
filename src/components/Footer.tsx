import React from 'react';
import { ArrowUpRight, Shield, Globe, Lock, ArrowUp } from 'lucide-react';
import { BRAND_CONFIG } from '../data/siteData';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="global-footer" className="bg-[#0D1631] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

      {/* Main Footer Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Slogan (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl border border-[#4D99D3] flex items-center justify-center bg-[#4D99D3]/15">
                <span className="text-[#4D99D3] font-display font-black text-xl tracking-tighter">
                  C
                </span>
              </div>
              <span className="text-white font-display text-2xl font-bold tracking-tight">
                CORE<span className="text-[#4D99D3]">TAX</span>
              </span>
            </div>

            <p className="text-xl font-display font-medium text-white/90 leading-snug">
              {BRAND_CONFIG.tagline}
            </p>

            <p className="text-sm text-white/60 leading-relaxed max-w-md font-desc">
              {BRAND_CONFIG.supportingMessage} A fiduciary partner for founders, institutional leaders, and high-growth commercial enterprises.
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 font-mono">
              <span className="w-2 h-2 rounded-full bg-[#4D99D3] animate-pulse" />
              <span>Advisory Desk Open: {BRAND_CONFIG.hours}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono">
              Company
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-white/70 hover:text-[#4D99D3] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-white/70 hover:text-[#4D99D3] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-white/70 hover:text-[#4D99D3] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="text-white/70 hover:text-[#4D99D3] transition-colors cursor-pointer"
                >
                  Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-white/70 hover:text-[#4D99D3] transition-colors cursor-pointer"
                >
                  Contact & Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Practices & Core Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono">
              Key Practices
            </p>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#4D99D3] text-left transition-colors cursor-pointer"
                >
                  Corporate Taxation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#4D99D3] text-left transition-colors cursor-pointer"
                >
                  Statutory Accounting
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#4D99D3] text-left transition-colors cursor-pointer"
                >
                  Cloud Bookkeeping
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#4D99D3] text-left transition-colors cursor-pointer"
                >
                  Fractional CFO
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#4D99D3] text-left transition-colors cursor-pointer"
                >
                  Regulatory Compliance
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Advisory Headquarters (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono">
              Direct Contact
            </p>
            <div className="text-sm text-white/70 space-y-2 font-desc">
              <p className="font-semibold text-white">{BRAND_CONFIG.office}</p>
              <p>Direct: <span className="text-white font-mono">{BRAND_CONFIG.phone}</span></p>
              <p>Inquiries: <span className="text-white font-mono">{BRAND_CONFIG.email}</span></p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full px-5 py-3 rounded-full bg-[#4D99D3]/15 border border-[#4D99D3] text-[#4D99D3] hover:bg-[#4D99D3] hover:text-[#0D1631] text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Request Strategic Review</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#667085]">
          <div className="flex flex-wrap items-center gap-6">
            <span>© 2026 CoreTax Advisory Group. All Rights Reserved.</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Engagement
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Fiduciary Disclosures
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-white/60">
              <Lock className="w-3.5 h-3.5 text-[#4D99D3]" />
              256-Bit Encrypted Client Portal
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-white/10 hover:border-[#4D99D3] hover:text-[#4D99D3] transition-colors cursor-pointer"
              aria-label="Back to Top"
              data-cursor="TOP"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
