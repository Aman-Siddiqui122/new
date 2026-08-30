import React, { useState, useRef } from 'react';
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  Shield,
  CheckCircle2,
  Send,
  Building,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PageId } from '../types';
import { BRAND_CONFIG, FAQ_LIST } from '../data/siteData';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import { useGsapScroll } from '../hooks/useGsapScroll';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

const SERVICE_OPTIONS = [
  'Accounting',
  'Taxation',
  'Bookkeeping',
  'Payroll',
  'Advisory',
  'Other',
];

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Service selector state affecting mood / background
  const [selectedService, setSelectedService] = useState('Accounting');

  // Hook up GSAP ScrollTrigger reveals
  useGsapScroll(containerRef, [selectedService]);

  // Form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: 'Accounting',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#4D99D3', '#0D1631', '#FFFFFF', '#EAF4FB'],
    });
  };

  const handleSelectService = (svc: string) => {
    setSelectedService(svc);
    setFormData((prev) => ({ ...prev, service: svc }));
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div ref={containerRef} id="contact-page-container" className="w-full">
      {/* =========================================================================
          SECTION 01 — CONTACT HERO (Deep Navy Full-Screen, Huge Headline)
          ========================================================================= */}
      <section
        id="contact-section-hero"
        className="pt-36 pb-20 sm:pb-28 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none gsap-parallax" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#4D99D3]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono tracking-widest text-[#4D99D3] mb-6 shadow-sm backdrop-blur-md gsap-reveal">
            <span className="w-2 h-2 rounded-full bg-[#4D99D3] animate-pulse" />
            <span>01 / STRATEGIC INQUIRY & INTAKE</span>
          </div>

          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[0.96] max-w-5xl mt-2 mb-6 gsap-reveal-header">
            Let&apos;s talk about <br />
            <span className="text-[#4D99D3]">your numbers.</span>
          </h1>

          <p className="text-lg sm:text-2xl text-white/80 font-light max-w-3xl leading-relaxed font-desc gsap-reveal">
            Whether you need accounting support, tax advice or strategic guidance, we&apos;re ready to help. Our partners review every inquiry with strict confidentiality.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 — CONTACT INFORMATION (Animated Typography & Office Details)
          ========================================================================= */}
      <section
        id="contact-section-info"
        className="py-16 sm:py-24 bg-white text-[#0D1631] px-4 sm:px-6 lg:px-8 border-b border-[#0D1631]/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FB] text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono mb-8 gsap-reveal">
            <span>02 / DIRECT FIDUCIARY CHANNELS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gsap-reveal-stagger">
            {/* Channel 1: Email */}
            <TiltCard className="gsap-stagger-item p-6 rounded-2xl bg-[#F4F7FA] border border-[#0D1631]/10 space-y-2 group hover:border-[#4D99D3] transition-all shadow-sm hover:shadow-xl" maxTilt={6}>
              <div className="w-12 h-12 rounded-xl bg-[#4D99D3]/15 text-[#4D99D3] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-mono tracking-wider text-[#667085]">
                Corporate Inquiries
              </span>
              <p className="text-lg font-display font-bold text-[#0D1631] truncate">
                {BRAND_CONFIG.email}
              </p>
              <p className="text-xs text-[#667085] font-desc">Monitored by Senior Partner desk</p>
            </TiltCard>

            {/* Channel 2: Phone */}
            <TiltCard className="gsap-stagger-item p-6 rounded-2xl bg-[#F4F7FA] border border-[#0D1631]/10 space-y-2 group hover:border-[#4D99D3] transition-all shadow-sm hover:shadow-xl" maxTilt={6}>
              <div className="w-12 h-12 rounded-xl bg-[#4D99D3]/15 text-[#4D99D3] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-mono tracking-wider text-[#667085]">
                Direct Advisory Line
              </span>
              <p className="text-lg font-display font-bold text-[#0D1631]">
                {BRAND_CONFIG.phone}
              </p>
              <p className="text-xs text-[#667085] font-desc">Direct partner switchboard</p>
            </TiltCard>

            {/* Channel 3: Office */}
            <TiltCard className="gsap-stagger-item p-6 rounded-2xl bg-[#F4F7FA] border border-[#0D1631]/10 space-y-2 group hover:border-[#4D99D3] transition-all shadow-sm hover:shadow-xl" maxTilt={6}>
              <div className="w-12 h-12 rounded-xl bg-[#4D99D3]/15 text-[#4D99D3] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-mono tracking-wider text-[#667085]">
                Advisory Office
              </span>
              <p className="text-sm font-display font-bold text-[#0D1631] leading-snug">
                {BRAND_CONFIG.office}
              </p>
              <p className="text-xs text-[#667085] font-desc">Confidential boardroom suites</p>
            </TiltCard>

            {/* Channel 4: Hours */}
            <TiltCard className="gsap-stagger-item p-6 rounded-2xl bg-[#F4F7FA] border border-[#0D1631]/10 space-y-2 group hover:border-[#4D99D3] transition-all shadow-sm hover:shadow-xl" maxTilt={6}>
              <div className="w-12 h-12 rounded-xl bg-[#4D99D3]/15 text-[#4D99D3] flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-mono tracking-wider text-[#667085]">
                Operating Hours
              </span>
              <p className="text-sm font-display font-bold text-[#0D1631]">
                {BRAND_CONFIG.hours}
              </p>
              <p className="text-xs text-[#4D99D3] font-mono">24/7 Client Secure Portal</p>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 — CONSULTATION FORM (Premium Interactive Intake)
          ========================================================================= */}
      <section
        id="contact-section-form"
        className="py-24 sm:py-32 bg-[#F4F7FA] text-[#0D1631] px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 gsap-reveal-header">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0D1631]/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono mb-3">
              <span>03 / FORMAL CONSULTATION REQUEST</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mt-2 text-[#0D1631]">
              Begin Your Diagnostic Review
            </h2>
            <p className="text-sm text-[#667085] mt-2 font-desc">
              All communications are strictly protected by our NDA & Fiduciary Confidentiality Agreement.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#0D1631]/10 shadow-2xl relative gsap-reveal">
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono font-bold text-[#0D1631] mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Eleanor Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F4F7FA] border border-[#0D1631]/15 text-sm text-[#0D1631] placeholder-[#667085]/60 focus:outline-none focus:border-[#4D99D3] focus:bg-white transition-all font-desc"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono font-bold text-[#0D1631] mb-2">
                      Corporate Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="eleanor@vancegroup.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F4F7FA] border border-[#0D1631]/15 text-sm text-[#0D1631] placeholder-[#667085]/60 focus:outline-none focus:border-[#4D99D3] focus:bg-white transition-all font-desc"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono font-bold text-[#0D1631] mb-2">
                      Direct Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F4F7FA] border border-[#0D1631]/15 text-sm text-[#0D1631] placeholder-[#667085]/60 focus:outline-none focus:border-[#4D99D3] focus:bg-white transition-all font-desc"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono font-bold text-[#0D1631] mb-2">
                      Company / Entity Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vance Holdings Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F4F7FA] border border-[#0D1631]/15 text-sm text-[#0D1631] placeholder-[#667085]/60 focus:outline-none focus:border-[#4D99D3] focus:bg-white transition-all font-desc"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono font-bold text-[#0D1631] mb-2">
                    Primary Service Area *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F4F7FA] border border-[#0D1631]/15 text-sm text-[#0D1631] focus:outline-none focus:border-[#4D99D3] focus:bg-white transition-all font-desc"
                  >
                    <option value="Accounting">Corporate Accounting & Statutory Reporting</option>
                    <option value="Taxation">Strategic Corporate Taxation & Structuring</option>
                    <option value="Bookkeeping">Continuous Cloud Bookkeeping & Reconciliations</option>
                    <option value="Payroll">Multi-Jurisdiction Payroll & Workforce</option>
                    <option value="Advisory">Fractional CFO & Business Advisory</option>
                    <option value="Other">Multi-Disciplinary Comprehensive Engagement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono font-bold text-[#0D1631] mb-2">
                    Strategic Context / Specific Inquiries
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current business stage, key fiscal challenges, or upcoming transactions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F7FA] border border-[#0D1631]/15 text-sm text-[#0D1631] placeholder-[#667085]/60 focus:outline-none focus:border-[#4D99D3] focus:bg-white transition-all resize-none font-desc"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#667085]">
                    <Shield className="w-4 h-4 text-[#4D99D3]" />
                    <span>256-Bit Encrypted Fiduciary Submission</span>
                  </div>

                  <MagneticButton
                    id="contact-form-submit-btn"
                    type="submit"
                    variant="primary"
                    size="lg"
                    rounded="full"
                    cursorLabel="SUBMIT"
                  >
                    Request Consultation
                  </MagneticButton>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#4D99D3]/20 text-[#4D99D3] flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0D1631]">
                  Consultation Request Dispatched
                </h3>
                <p className="text-sm text-[#667085] max-w-md mx-auto leading-relaxed font-desc">
                  Thank you, <strong className="text-[#0D1631]">{formData.fullName || 'Partner'}</strong>. Your inquiry has been routed to our Managing Partner desk. You will receive an initial response within 4 business hours.
                </p>
                <div className="pt-4">
                  <MagneticButton
                    variant="navy"
                    rounded="full"
                    onClick={() => setFormSubmitted(false)}
                    showArrow={false}
                  >
                    Submit Another Inquiry
                  </MagneticButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 — SERVICES SELECTOR (Changes Interactive Mood)
          ========================================================================= */}
      <section
        id="contact-section-service-selector"
        className="py-24 sm:py-32 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 gsap-reveal-header">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono mb-3">
              <span>04 / INTERACTIVE ENGAGEMENT SELECTOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mt-2 text-white">
              Explore Practice Alignment
            </h2>
            <p className="text-base text-white/70 mt-2 font-desc">
              Select your priority discipline to see dedicated partner availability and engagement scope:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8 gsap-reveal-stagger">
            {SERVICE_OPTIONS.map((svc) => {
              const isSelected = selectedService === svc;
              return (
                <button
                  key={svc}
                  onClick={() => handleSelectService(svc)}
                  className={`gsap-stagger-item p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#4D99D3] text-[#0D1631] border-[#4D99D3] font-bold shadow-lg'
                      : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30'
                  }`}
                >
                  <span className="text-xs font-mono block">AREA</span>
                  <span className="text-sm font-display font-bold block mt-1">{svc}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Scope Preview */}
          <div className="p-8 rounded-3xl bg-[#15234d]/60 border border-white/15 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 gsap-reveal shadow-2xl">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#4D99D3] font-bold">SELECTED PRACTICE: {selectedService.toUpperCase()}</span>
              <h3 className="text-xl font-display font-bold text-white">
                Dedicated Senior Advisory Lead Available for {selectedService}
              </h3>
              <p className="text-xs text-white/70 font-desc">
                Includes complimentary diagnostic assessment and 12-month compliance roadmap.
              </p>
            </div>
            <MagneticButton
              variant="primary"
              size="sm"
              rounded="full"
              onClick={onOpenConsultation}
            >
              Lock Priority Intake
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 — OFFICE / LOCATION (Large Map Section & Directions)
          ========================================================================= */}
      <section
        id="contact-section-location"
        className="py-24 sm:py-32 bg-white text-[#0D1631] px-4 sm:px-6 lg:px-8 border-b border-[#0D1631]/10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FB] text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono gsap-reveal">
              <span>05 / HEADQUARTERS & BOARDROOM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#0D1631] gsap-reveal-header">
              New York Financial District
            </h2>
            <p className="text-base text-[#667085] leading-relaxed font-desc gsap-reveal">
              Situated in the heart of Manhattan&apos;s global capital ecosystem. Private client conference suites available for quarterly board debriefs and M&A advisory summits.
            </p>

            <div className="p-5 rounded-2xl bg-[#F4F7FA] border border-[#0D1631]/10 text-xs space-y-1 text-[#0D1631] gsap-reveal">
              <p className="font-bold">{BRAND_CONFIG.office}</p>
              <p className="text-[#667085]">Suite 4800 (Private Keycard Reception)</p>
              <p className="text-[#4D99D3] font-mono font-semibold pt-1">Direct: {BRAND_CONFIG.phone}</p>
            </div>

            <div className="pt-2 gsap-reveal">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D1631] text-white hover:bg-[#15234d] text-xs font-mono uppercase font-bold tracking-wider transition-colors shadow-md"
              >
                <span>Get Directions</span>
                <ArrowUpRight className="w-4 h-4 text-[#4D99D3]" />
              </a>
            </div>
          </div>

          {/* Map Graphic Canvas */}
          <div className="lg:col-span-7 gsap-reveal">
            <TiltCard className="bg-[#0D1631] aspect-[16/10] rounded-3xl border border-[#0D1631]/10 relative overflow-hidden shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 bg-financial-grid-dark opacity-40 pointer-events-none" />
              
              {/* Schematic Financial District Street Layout */}
              <svg className="w-full h-full opacity-60" viewBox="0 0 800 500" fill="none">
                <line x1="100" y1="0" x2="100" y2="500" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="2" />
                <line x1="300" y1="0" x2="300" y2="500" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="2" />
                <line x1="500" y1="0" x2="500" y2="500" stroke="#4D99D3" strokeOpacity="0.3" strokeWidth="3" />
                <line x1="700" y1="0" x2="700" y2="500" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="2" />
                
                <line x1="0" y1="120" x2="800" y2="120" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="2" />
                <line x1="0" y1="260" x2="800" y2="260" stroke="#4D99D3" strokeOpacity="0.3" strokeWidth="3" />
                <line x1="0" y1="380" x2="800" y2="380" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="2" />
                
                {/* CoreTax HQ Beacon */}
                <circle cx="500" cy="260" r="18" fill="#4D99D3" fillOpacity="0.2" className="animate-ping" />
                <circle cx="500" cy="260" r="8" fill="#4D99D3" />
                <circle cx="500" cy="260" r="3" fill="#FFFFFF" />
              </svg>

              <div className="absolute top-6 right-6 p-4 rounded-xl bg-[#0D1631]/90 border border-[#4D99D3]/40 text-left text-xs backdrop-blur-md">
                <span className="text-[#4D99D3] font-mono font-bold block">CORETAX TOWER</span>
                <span className="text-white/80">Wall St & Broadway Corridor</span>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06 — FAQ (Animated Accordion with all 7 requested questions)
          ========================================================================= */}
      <section
        id="contact-section-faq"
        className="py-24 sm:py-32 bg-[#F4F7FA] text-[#0D1631] px-4 sm:px-6 lg:px-8 border-b border-[#0D1631]/10"
      >
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-16 gsap-reveal-header">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0D1631]/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono mb-3">
              <span>06 / FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mt-2 text-[#0D1631]">
              Clear answers to common questions.
            </h2>
          </div>

          <div className="space-y-4 gsap-reveal-stagger">
            {FAQ_LIST.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  id={`faq-item-${idx}`}
                  className="gsap-stagger-item bg-white rounded-2xl border border-[#0D1631]/10 overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F4F7FA]/60 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono font-bold text-[#4D99D3] px-2.5 py-1 rounded-full bg-[#EAF4FB]">
                        0{idx + 1}
                      </span>
                      <span className="text-base sm:text-lg font-display font-bold text-[#0D1631]">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#4D99D3] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm text-[#667085] leading-relaxed border-t border-[#0D1631]/5 bg-[#F4F7FA]/30 font-desc">
                      <p>{faq.answer}</p>
                      <span className="inline-block mt-3 px-2.5 py-0.5 rounded-full bg-[#4D99D3]/15 text-[10px] font-mono text-[#4D99D3] uppercase tracking-wider font-semibold">
                        Category: {faq.category}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07 — TRUST STATEMENT (Large Typography & Confidentiality)
          ========================================================================= */}
      <section
        id="contact-section-trust"
        className="py-24 sm:py-32 bg-white text-[#0D1631] px-4 sm:px-6 lg:px-8 border-b border-[#0D1631]/10 text-center"
      >
        <div className="max-w-4xl mx-auto space-y-6 gsap-reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FB] text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono">
            <span>07 / FIDUCIARY COMMITMENT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#0D1631] leading-tight gsap-reveal-header">
            &ldquo;Your finances deserve more than a spreadsheet.&rdquo;
          </h2>

          <p className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed font-desc">
            They deserve rigorous audit security, proactive strategic planning, and senior fiduciary oversight that actively builds your enterprise equity.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08 — FINAL CTA / FOOTER PREVIEW (Deep Navy, Clarity Starts With Conversation)
          ========================================================================= */}
      <section
        id="contact-section-cta"
        className="py-28 sm:py-36 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-t border-white/10"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6 gsap-reveal">
          <div className="w-14 h-14 rounded-2xl border border-[#4D99D3] flex items-center justify-center bg-[#4D99D3]/15 mx-auto mb-4 shadow-lg shadow-[#4D99D3]/20">
            <span className="text-[#4D99D3] font-display font-black text-2xl">C</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono">
            <span>08 / NEXT STEP</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-tight gsap-reveal-header">
            Clarity starts with a conversation.
          </h2>

          <p className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto font-desc">
            Book an introductory diagnostic session with our Senior Partners today.
          </p>

          <div className="pt-4 flex justify-center">
            <MagneticButton
              variant="primary"
              size="lg"
              rounded="full"
              onClick={onOpenConsultation}
              cursorLabel="BOOK"
            >
              Book a Consultation
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
