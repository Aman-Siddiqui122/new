import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'industries', label: 'Industries' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (id: PageId) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="global-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0D1631]/90 backdrop-blur-md border-b border-[#4D99D3]/20 py-3.5 shadow-[0_10px_30px_rgba(13,22,49,0.35)]'
            : 'bg-transparent border-b border-white/10 py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="navbar-brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            data-cursor="CORETAX"
            aria-label="CoreTax Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-[#4D99D3] flex items-center justify-center bg-[#4D99D3]/15 transition-all duration-300 group-hover:bg-[#4D99D3]/30 group-hover:shadow-[0_0_15px_rgba(77,153,211,0.4)]">
              <span className="text-[#4D99D3] font-display font-black text-lg tracking-tighter">
                C
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display text-lg sm:text-xl font-extrabold tracking-tight">
                CORE<span className="text-[#4D99D3]">TAX</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#667085] hidden sm:block font-mono">
                Accounting & Advisory
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  data-cursor="VIEW"
                  className={`relative px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-white bg-[#4D99D3]/20 shadow-sm'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right CTA button */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton
              id="navbar-cta-button"
              variant="primary"
              size="sm"
              rounded="full"
              onClick={onOpenConsultation}
              cursorLabel="BOOK"
            >
              Book a Consultation
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full text-white/80 hover:text-white border border-white/20 bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-fullscreen-menu"
          className="fixed inset-0 z-40 md:hidden bg-[#0D1631] text-white flex flex-col justify-between p-6 sm:p-8 pt-28 overflow-y-auto animate-in fade-in duration-300"
        >
          {/* Subtle Background Grid */}
          <div className="absolute inset-0 bg-financial-grid-dark opacity-40 pointer-events-none" />

          {/* Links list */}
          <div className="relative z-10 space-y-6 my-auto">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#4D99D3] font-semibold mb-6 font-mono">
              Navigation Menu
            </p>
            {NAV_LINKS.map((link, idx) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  style={{ animationDelay: `${idx * 60}ms` }}
                  className={`w-full text-left flex items-baseline justify-between py-2 border-b transition-all duration-300 ${
                    isActive
                      ? 'border-[#4D99D3] text-white'
                      : 'border-white/10 text-white/60 hover:text-white hover:border-white/30'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs text-[#4D99D3] font-mono">
                      0{idx + 1}
                    </span>
                    <span className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                      {link.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    className={`w-5 h-5 transition-transform ${
                      isActive ? 'text-[#4D99D3] translate-x-1 -translate-y-1' : 'text-white/30'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Bottom Mobile Action & Info */}
          <div className="relative z-10 pt-8 border-t border-white/10 space-y-4">
            <MagneticButton
              id="mobile-consultation-cta"
              variant="primary"
              size="lg"
              rounded="full"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
            >
              Book a Consultation
            </MagneticButton>

            <div className="flex items-center justify-between text-xs text-[#667085] pt-2 font-mono">
              <span>Direct: +1 (800) 555-CORE</span>
              <span className="text-[#4D99D3]">New York • Global</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
