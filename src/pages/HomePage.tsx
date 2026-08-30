import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  BarChart3,
  PieChart,
  DollarSign,
  Activity,
  Layers,
  CheckCircle2,
  Sliders,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { PageId } from '../types';
import {
  HERO_METRICS,
  SERVICES_DATA,
  CORE_VALUES,
  TESTIMONIALS_LIST,
  TESTIMONIAL_DATA,
} from '../data/siteData';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import { useGsapScroll } from '../hooks/useGsapScroll';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hero mouse interactive position for 3D/ambient lighting
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [testimonialSlideIdx, setTestimonialSlideIdx] = useState(0);

  // Financial Story Interactive Model State
  const [growthScenario, setGrowthScenario] = useState<'conservative' | 'balanced' | 'aggressive'>('balanced');
  const [annualRevenueInput, setAnnualRevenueInput] = useState(3800000); // $3.8M

  // Hook up GSAP ScrollTrigger Awwwards scroll reveals
  useGsapScroll(containerRef, [growthScenario, activeServiceIdx, testimonialSlideIdx]);

  // Dynamic calculations for the interactive story section
  const expenseRatio = growthScenario === 'conservative' ? 0.68 : growthScenario === 'balanced' ? 0.62 : 0.55;
  const taxRate = growthScenario === 'conservative' ? 0.22 : growthScenario === 'balanced' ? 0.18 : 0.15;
  
  const calculatedExpenses = Math.round(annualRevenueInput * expenseRatio);
  const calculatedGrossProfit = annualRevenueInput - calculatedExpenses;
  const calculatedTaxSavings = Math.round(annualRevenueInput * 0.075);
  const calculatedNetProfit = calculatedGrossProfit - Math.round(calculatedGrossProfit * taxRate) + calculatedTaxSavings;
  const calculatedCashFlow = Math.round(calculatedNetProfit * 0.88);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40;
    setMousePos({ x, y });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextTestimonial = () => {
    setTestimonialSlideIdx((prev) => (prev + 1) % TESTIMONIALS_LIST.length);
  };

  const prevTestimonial = () => {
    setTestimonialSlideIdx((prev) => (prev - 1 + TESTIMONIALS_LIST.length) % TESTIMONIALS_LIST.length);
  };

  const currentTestimonial = TESTIMONIALS_LIST[testimonialSlideIdx];

  return (
    <div ref={containerRef} id="home-page-container" className="w-full">
      {/* =========================================================================
          SECTION 01 — CINEMATIC HERO (Full viewport, Deep Navy, Financial Ecosystem)
          ========================================================================= */}
      <section
        id="home-section-hero"
        onMouseMove={handleHeroMouseMove}
        className="relative min-h-screen bg-[#0D1631] text-white flex flex-col justify-between pt-36 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10"
      >
        {/* Subtle huge background typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[18vw] font-display font-extrabold text-white/[0.02] tracking-tighter z-0">
          CORETAX
        </div>

        {/* Abstract Animated Financial Grid & Light Movement */}
        <div
          className="absolute inset-0 bg-financial-grid-dark opacity-40 pointer-events-none transition-transform duration-700 ease-out gsap-parallax"
          style={{
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          }}
        />

        {/* Ambient Blue Glowing Flares */}
        <div
          className="absolute top-1/4 right-10 w-96 h-96 bg-[#4D99D3]/20 rounded-full blur-3xl pointer-events-none transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${-mousePos.x * 0.6}px, ${-mousePos.y * 0.6}px)`,
          }}
        />

        {/* Abstract Financial SVG Curves & Nodes Canvas */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <svg className="w-full h-full opacity-40" viewBox="0 0 1440 900" fill="none">
            <path
              d="M-100 650 C 300 620, 500 450, 800 420 C 1100 390, 1250 220, 1600 180"
              stroke="#4D99D3"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M-100 780 C 250 700, 600 600, 950 480 C 1200 380, 1400 320, 1600 290"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeOpacity="0.25"
            />
            <circle cx="800" cy="420" r="4" fill="#4D99D3" className="animate-ping" />
            <circle cx="800" cy="420" r="5" fill="#4D99D3" />
            <text x="815" y="425" fill="#4D99D3" fontSize="11" fontFamily="monospace">
              ALPHA_OPTIMIZATION +24.6%
            </text>

            <circle cx="1100" cy="390" r="4" fill="#FFFFFF" fillOpacity="0.6" />
            <text x="1115" y="395" fill="#FFFFFF" fillOpacity="0.5" fontSize="10" fontFamily="monospace">
              NEXUS_CLEARED
            </text>
          </svg>
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono tracking-widest text-[#4D99D3] mb-8 shadow-sm backdrop-blur-md gsap-reveal">
            <span className="w-2 h-2 rounded-full bg-[#4D99D3] animate-pulse" />
            <span>ACCOUNTING • TAX • ADVISORY</span>
          </div>

          {/* Main Clamp H1 Headline */}
          <h1
            id="hero-main-headline"
            className="font-display font-extrabold tracking-tight text-white leading-[0.96] max-w-5xl text-[clamp(2.8rem,7.2vw,7rem)] mb-8 gsap-reveal-header"
          >
            Clarity in Numbers. <br />
            <span className="text-[#4D99D3]">Confidence</span> in Business.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-12 font-desc gsap-reveal">
            CoreTax helps businesses turn financial complexity into clear decisions, stronger performance and confident growth.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 gsap-reveal">
            <MagneticButton
              id="hero-book-consultation"
              variant="primary"
              size="lg"
              rounded="full"
              onClick={() => onOpenConsultation()}
              cursorLabel="BOOK"
            >
              Book a Consultation
            </MagneticButton>

            <MagneticButton
              id="hero-explore-services"
              variant="outline"
              size="lg"
              rounded="full"
              showArrow={false}
              onClick={() => scrollToSection('home-section-services')}
              cursorLabel="SCROLL"
            >
              Explore Services ↓
            </MagneticButton>
          </div>
        </div>

        {/* Hero Bottom Meta Strip */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#667085] gsap-reveal">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-[11px] sm:text-xs">
            <span className="text-white/80">Statutory Audits</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D99D3]" />
            <span className="text-white/80">Corporate Tax Mitigation</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D99D3]" />
            <span className="text-white/80">Fractional CFO Strategy</span>
          </div>

          <button
            onClick={() => scrollToSection('home-section-numbers')}
            className="inline-flex items-center gap-1.5 text-[#4D99D3] hover:text-white transition-colors cursor-pointer group font-mono text-xs"
          >
            <span>Discover Fiduciary Metrics</span>
            <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 — TRUST / NUMBERS (White background, 4 animated metrics)
          ========================================================================= */}
      <section
        id="home-section-numbers"
        className="py-24 sm:py-32 bg-white text-[#0D1631] px-4 sm:px-6 lg:px-8 border-b border-[#0D1631]/10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Huge typography */}
          <div className="max-w-3xl mb-16 sm:mb-24 gsap-reveal-header">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FB] text-xs uppercase tracking-widest text-[#4D99D3] font-bold mb-3 font-mono">
              <span>02 / FIDUCIARY IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.05] text-[#0D1631]">
              Behind every strong business is a clear financial picture.
            </h2>
          </div>

          {/* 4 Animated Metrics with 3D Tilt */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 gsap-reveal-stagger">
            {HERO_METRICS.map((metric, idx) => (
              <TiltCard
                key={idx}
                id={`trust-metric-${idx}`}
                className="gsap-stagger-item p-8 bg-[#F4F7FA] border border-[#0D1631]/10 rounded-2xl relative group hover:border-[#4D99D3] transition-all duration-300 shadow-sm hover:shadow-xl"
                maxTilt={10}
              >
                <div className="text-4xl sm:text-6xl font-display font-extrabold text-[#4D99D3] mb-2 tracking-tight gsap-reveal-metric">
                  {metric.value}{metric.suffix}
                </div>
                <div className="text-lg font-display font-bold text-[#0D1631] mb-1">
                  {metric.label}
                </div>
                <p className="text-xs text-[#667085] leading-relaxed font-desc">
                  {metric.description}
                </p>
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#4D99D3] group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 — ABOUT CORE (Asymmetrical editorial layout, mask reveal)
          ========================================================================= */}
      <section
        id="home-section-about"
        className="py-24 sm:py-32 bg-[#F4F7FA] text-[#0D1631] px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Editorial Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0D1631]/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono gsap-reveal">
                <span>03 / WHO WE ARE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#0D1631] leading-tight gsap-reveal-header">
                Accounting is not just about numbers.
              </h2>
              <p className="text-base sm:text-lg text-[#667085] leading-relaxed font-desc gsap-reveal">
                It is about the certainty to invest in key hires, the precision to structure capital tax-efficiently, and the clarity to forecast turbulent market shifts with unshakeable composure.
              </p>
              <p className="text-sm text-[#667085] leading-relaxed font-desc gsap-reveal">
                At CoreTax, we eliminate the friction between backward-looking statutory compliance and forward-looking business strategy. We don&apos;t just reconcile your transactions; we illuminate your next horizon.
              </p>

              <div className="pt-4 gsap-reveal">
                <MagneticButton
                  id="home-discover-coretax"
                  variant="navy"
                  rounded="full"
                  onClick={() => onNavigate('about')}
                  cursorLabel="ABOUT"
                >
                  Discover CoreTax
                </MagneticButton>
              </div>
            </div>

            {/* Right Large Portrait / Architectural Office Image with Mask */}
            <div className="lg:col-span-6 relative gsap-reveal-img">
              <TiltCard className="rounded-3xl border border-[#0D1631]/10 shadow-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                  alt="CoreTax Executive Advisory Room"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1631]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0D1631]/90 backdrop-blur-md border border-white/10 text-white">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#4D99D3]">
                    Fiduciary Standard
                  </p>
                  <p className="text-sm font-display font-semibold mt-0.5">
                    Senior Partner governance on every client engagement.
                  </p>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 — SERVICES SHOWCASE (Deep Navy, Interactive Horizontal List)
          ========================================================================= */}
      <section
        id="home-section-services"
        className="py-24 sm:py-32 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 gsap-reveal-header">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono mb-3">
                <span>04 / PRACTICES & DISCIPLINES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mt-2 text-white">
                Financial expertise for every stage of business.
              </h2>
            </div>
            <MagneticButton
              variant="outline"
              size="sm"
              rounded="full"
              onClick={() => onNavigate('services')}
              cursorLabel="ALL"
            >
              View Full Practice Suite
            </MagneticButton>
          </div>

          {/* Interactive Service Selector List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Service Rows (8 cols on desktop) */}
            <div className="lg:col-span-7 divide-y divide-white/10 gsap-reveal-stagger">
              {SERVICES_DATA.map((service, idx) => {
                const isSelected = activeServiceIdx === idx;
                return (
                  <div
                    key={service.id}
                    id={`service-row-${service.id}`}
                    onMouseEnter={() => setActiveServiceIdx(idx)}
                    onClick={() => setActiveServiceIdx(idx)}
                    className={`gsap-stagger-item group py-5 px-5 rounded-xl transition-all duration-300 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      isSelected ? 'bg-white/10 border-l-4 border-[#4D99D3] pl-6' : 'hover:bg-white/[0.04]'
                    }`}
                    data-cursor="EXPLORE"
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`text-sm font-mono font-bold transition-colors ${
                          isSelected ? 'text-[#4D99D3]' : 'text-white/40 group-hover:text-[#4D99D3]'
                        }`}
                      >
                        {service.number}
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-[#4D99D3] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-[#667085] mt-1 line-clamp-1 font-desc">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs text-white/50 hidden sm:block font-mono">
                        {service.accentMetricLabel}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                          isSelected
                            ? 'border-[#4D99D3] bg-[#4D99D3] text-[#0D1631]'
                            : 'border-white/20 text-white/40 group-hover:border-[#4D99D3] group-hover:text-white'
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dynamic Sticky Preview Visual (5 cols on desktop) with 3D Tilt */}
            <div className="lg:col-span-5 sticky top-28 gsap-reveal">
              <TiltCard className="bg-[#15234d]/70 border border-white/15 p-6 rounded-3xl backdrop-blur-md shadow-2xl">
                <div className="relative aspect-[16/10] overflow-hidden mb-6 rounded-2xl border border-white/10">
                  <img
                    src={SERVICES_DATA[activeServiceIdx].image}
                    alt={SERVICES_DATA[activeServiceIdx].title}
                    className="w-full h-full object-cover transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#0D1631]/40" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0D1631]/80 backdrop-blur-sm border border-[#4D99D3]/40 text-[#4D99D3] text-xs font-mono">
                    {SERVICES_DATA[activeServiceIdx].number} — ACTIVE PRACTICE
                  </div>
                </div>

                <h4 className="text-xl font-display font-bold text-white mb-2">
                  {SERVICES_DATA[activeServiceIdx].title}
                </h4>
                <p className="text-sm text-white/70 mb-4 leading-relaxed font-desc">
                  {SERVICES_DATA[activeServiceIdx].description}
                </p>

                {/* Deliverable pills */}
                <div className="space-y-2 mb-6">
                  {SERVICES_DATA[activeServiceIdx].deliverables.slice(0, 3).map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#4D99D3] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

                <MagneticButton
                  variant="primary"
                  size="sm"
                  rounded="full"
                  className="w-full"
                  onClick={() => onOpenConsultation(SERVICES_DATA[activeServiceIdx].title)}
                >
                  Inquire for {SERVICES_DATA[activeServiceIdx].title}
                </MagneticButton>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 — INTERACTIVE FINANCIAL STORY (Full-width Fintech Experience)
          ========================================================================= */}
      <section
        id="home-section-fintech-story"
        className="py-24 sm:py-32 bg-[#F4F7FA] text-[#0D1631] px-4 sm:px-6 lg:px-8 border-y border-[#0D1631]/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 gsap-reveal-header">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0D1631]/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono mb-3">
              <span>05 / FINTECH DASHBOARD MODEL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mt-2 text-[#0D1631]">
              See the bigger picture.
            </h2>
            <p className="text-base text-[#667085] mt-3 font-desc">
              Test how CoreTax strategic planning and cash flow governance optimize your operating margins and net retained capital.
            </p>
          </div>

          {/* Interactive Financial Simulator Box with 3D perspective */}
          <div className="bg-[#0D1631] text-white p-6 sm:p-10 rounded-3xl border border-[#4D99D3]/30 shadow-2xl relative overflow-hidden gsap-reveal">
            <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

            {/* Top Controls Bar */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-white/10 items-center">
              <div className="lg:col-span-7 space-y-2">
                <div className="flex justify-between text-xs text-white/80 font-mono">
                  <span>ANNUAL BUSINESS REVENUE BENCHMARK</span>
                  <span className="text-[#4D99D3] font-bold text-sm">
                    ${(annualRevenueInput / 1000000).toFixed(2)}M / yr
                  </span>
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="15000000"
                  step="250000"
                  value={annualRevenueInput}
                  onChange={(e) => setAnnualRevenueInput(Number(e.target.value))}
                  className="w-full accent-[#4D99D3] cursor-pointer h-2 bg-white/20 rounded-lg"
                />
              </div>

              {/* Scenario Toggle */}
              <div className="lg:col-span-5 flex items-center justify-end gap-2">
                <span className="text-xs text-[#667085] mr-2 font-mono">SCENARIO:</span>
                {(['conservative', 'balanced', 'aggressive'] as const).map((scen) => (
                  <button
                    key={scen}
                    onClick={() => setGrowthScenario(scen)}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                      growthScenario === scen
                        ? 'bg-[#4D99D3] text-[#0D1631] font-bold shadow-md'
                        : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    {scen}
                  </button>
                ))}
              </div>
            </div>

            {/* Real-Time Financial Metric Cards */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-8">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-[#667085] font-mono">
                  Gross Revenue
                </span>
                <p className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1">
                  ${(annualRevenueInput / 1000).toLocaleString()}k
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-[#667085] font-mono">
                  Managed OPEX
                </span>
                <p className="text-xl sm:text-2xl font-display font-extrabold text-white/80 mt-1">
                  ${(calculatedExpenses / 1000).toLocaleString()}k
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-[#667085] font-mono">
                  Tax Savings Unlocked
                </span>
                <p className="text-xl sm:text-2xl font-display font-extrabold text-[#4D99D3] mt-1">
                  +${(calculatedTaxSavings / 1000).toLocaleString()}k
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-[#667085] font-mono">
                  Net Retained Profit
                </span>
                <p className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1">
                  ${(calculatedNetProfit / 1000).toLocaleString()}k
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#4D99D3]/15 border border-[#4D99D3]">
                <span className="text-[10px] uppercase tracking-wider text-[#4D99D3] font-mono font-bold">
                  Free Cash Flow
                </span>
                <p className="text-xl sm:text-2xl font-display font-extrabold text-[#4D99D3] mt-1">
                  ${(calculatedCashFlow / 1000).toLocaleString()}k
                </p>
              </div>
            </div>

            {/* Dynamic SVG Visualizer Bar */}
            <div className="relative z-10 pt-4">
              <div className="flex justify-between text-xs text-[#667085] mb-2 font-mono">
                <span>REVENUE ALLOCATION ARCHITECTURE</span>
                <span>EFFICIENCY RATIO: {Math.round((calculatedNetProfit / annualRevenueInput) * 100)}%</span>
              </div>
              <div className="h-6 w-full bg-white/10 rounded-full flex overflow-hidden p-0.5 border border-white/10">
                <div
                  style={{ width: `${expenseRatio * 100}%` }}
                  className="bg-[#20335e] h-full rounded-l-full flex items-center justify-center text-[10px] font-mono font-semibold transition-all duration-500 text-white/80"
                >
                  OPEX {Math.round(expenseRatio * 100)}%
                </div>
                <div
                  style={{ width: `${taxRate * 100}%` }}
                  className="bg-[#314a7e] h-full flex items-center justify-center text-[10px] font-mono font-semibold transition-all duration-500 text-white/80"
                >
                  TAX {Math.round(taxRate * 100)}%
                </div>
                <div
                  style={{ width: `${(calculatedNetProfit / annualRevenueInput) * 100}%` }}
                  className="bg-[#4D99D3] h-full rounded-r-full flex items-center justify-center text-[10px] font-mono font-bold text-[#0D1631] transition-all duration-500"
                >
                  NET PROFIT
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06 — WHY CORETAX (Light Background, 4 Principles, Scroll Progress)
          ========================================================================= */}
      <section
        id="home-section-why"
        className="py-24 sm:py-32 bg-white text-[#0D1631] px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Sticky Header */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4 gsap-reveal-header">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FB] text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono">
                <span>06 / OPERATING PRINCIPLES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#0D1631] leading-tight">
                Built around your business.
              </h2>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed font-desc">
                Unlike traditional, passive accounting firms that only communicate once a year at tax filing, CoreTax operates as your embedded financial command center.
              </p>
              <div className="pt-4">
                <MagneticButton
                  variant="primary"
                  rounded="full"
                  onClick={() => onOpenConsultation()}
                >
                  Initiate Partnership
                </MagneticButton>
              </div>
            </div>

            {/* Right Vertically Stacked Principles with 3D cards */}
            <div className="lg:col-span-7 space-y-6 relative gsap-reveal-stagger">
              {CORE_VALUES.map((principle) => (
                <TiltCard
                  key={principle.number}
                  id={`principle-card-${principle.number}`}
                  className="gsap-stagger-item p-8 bg-[#F4F7FA] border border-[#0D1631]/10 rounded-2xl relative hover:bg-[#EAF4FB]/60 transition-all duration-300 shadow-sm hover:shadow-md"
                  maxTilt={6}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#4D99D3]/15 text-[#4D99D3]">
                      0{principle.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-[#0D1631] mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#4D99D3] mb-2 font-mono uppercase tracking-wider">
                    {principle.tagline}
                  </p>
                  <p className="text-sm text-[#667085] leading-relaxed font-desc">
                    {principle.description}
                  </p>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07 — TESTIMONIAL / STORY (Cinematic Deep Navy, Slideable Showcase)
          ========================================================================= */}
      <section
        id="home-section-testimonial"
        className="py-24 sm:py-32 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header & Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 gsap-reveal-header">
            <div>
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#4D99D3] tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#4D99D3] animate-pulse" />
                <span>07 / CLIENT PERSPECTIVES</span>
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/50 text-[10px]">
                  [AUTHENTICATED CASE OUTCOMES]
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mt-2 text-white">
                Measurable impact across scale.
              </h2>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-[#4D99D3]">
                CASE {String(testimonialSlideIdx + 1).padStart(2, '0')} / {String(TESTIMONIALS_LIST.length).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-2">
                <button
                  id="home-testimonial-prev-btn"
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonial"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#4D99D3] hover:text-[#0D1631] hover:border-[#4D99D3] transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  id="home-testimonial-next-btn"
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#4D99D3] hover:text-[#0D1631] hover:border-[#4D99D3] transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#15234d]/50 border border-white/15 p-8 sm:p-12 rounded-3xl relative gsap-reveal backdrop-blur-md shadow-2xl">
            {/* Large Editorial Portrait on Left */}
            <div className="lg:col-span-5 relative">
              <TiltCard className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl aspect-[4/5]">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.company}
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1631] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0D1631]/90 backdrop-blur-sm border-l-2 border-[#4D99D3] text-xs font-mono text-[#4D99D3]">
                  CASE HIGHLIGHT • {currentTestimonial.metricHighlight}
                </div>
              </TiltCard>
            </div>

            {/* Big Quote on Right */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap gap-2">
                {TESTIMONIALS_LIST.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialSlideIdx(idx)}
                    className={`px-3.5 py-1 rounded-full text-[11px] font-mono transition-all cursor-pointer ${
                      testimonialSlideIdx === idx
                        ? 'bg-[#4D99D3] text-[#0D1631] font-bold shadow-md'
                        : 'bg-white/5 text-white/60 hover:bg-white/15'
                    }`}
                  >
                    0{idx + 1} {item.industry.split('&')[0].trim()}
                  </button>
                ))}
              </div>

              <blockquote className="text-xl sm:text-3xl font-display font-medium text-white leading-snug tracking-tight">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-display font-bold text-white">
                    {currentTestimonial.clientName}
                  </p>
                  <p className="text-xs text-white/70 mt-0.5 font-desc">
                    {currentTestimonial.position} • {currentTestimonial.company}
                  </p>
                  <p className="text-[11px] text-[#4D99D3] font-mono mt-0.5">
                    {currentTestimonial.industry}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08 — FINAL CTA (Full-width Navy, Animated Blue Grid)
          ========================================================================= */}
      <section
        id="home-section-cta"
        className="py-28 sm:py-36 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/10"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-50 pointer-events-none animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#4D99D3]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono gsap-reveal">
            <span>08 / ENGAGE CORETAX</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[0.98] gsap-reveal-header">
            Let&apos;s make your numbers work harder.
          </h2>

          <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-desc gsap-reveal">
            Talk to CoreTax about your accounting, tax or business advisory needs. Experience how clarity generates compound growth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 gsap-reveal">
            <MagneticButton
              id="home-final-cta-btn"
              variant="primary"
              size="lg"
              rounded="full"
              onClick={() => onOpenConsultation()}
              cursorLabel="BOOK"
            >
              Book a Consultation
            </MagneticButton>

            <MagneticButton
              id="home-final-contact-btn"
              variant="outline"
              size="lg"
              rounded="full"
              showArrow={false}
              onClick={() => onNavigate('contact')}
              cursorLabel="CONTACT"
            >
              Contact Us
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
