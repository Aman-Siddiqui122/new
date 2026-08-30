import React, { useState, useRef } from 'react';
import {
  ArrowUpRight,
  TrendingUp,
  Building2,
  Rocket,
  Briefcase,
  ShoppingBag,
  Hammer,
  HeartPulse,
  Landmark,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { PageId } from '../types';
import { INDUSTRIES_DATA } from '../data/siteData';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import { useGsapScroll } from '../hooks/useGsapScroll';

interface IndustriesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (service?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNicheIdx, setActiveNicheIdx] = useState(0);

  // Hook up GSAP ScrollTrigger reveals
  useGsapScroll(containerRef, [activeNicheIdx]);

  const ADDITIONAL_NICHES = [
    {
      title: 'Commercial Real Estate & Property Holdings',
      desc: 'Cost segregation studies, 1031 like-kind exchange tracking, property management reconciliations, and debt covenant audits.',
      metric: '35% Faster',
      metricLabel: 'Accelerated Cost Segregation Deductions',
    },
    {
      title: 'Healthcare & Specialized Medical Groups',
      desc: 'HIPAA-conscious practice bookkeeping, physician distribution splits, medical equipment leasing tax shielding, and revenue cycle reporting.',
      metric: '99.8%',
      metricLabel: 'Reconciliation Compliance',
    },
    {
      title: 'Private Equity & Family Office Portfolio Co.',
      desc: 'Portfolio entity rollup reporting, waterfall distribution schedules, standard chart of accounts integration, and audit support.',
      metric: '$350M+',
      metricLabel: 'Under Structured Oversight',
    },
  ];

  return (
    <div ref={containerRef} id="industries-page-container" className="w-full">
      {/* =========================================================================
          SECTION 01 — INDUSTRIES HERO (Headline + Industry Grid)
          ========================================================================= */}
      <section
        id="industries-section-hero"
        className="pt-36 pb-20 sm:pb-28 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none gsap-parallax" />
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#4D99D3]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono tracking-widest text-[#4D99D3] mb-6 shadow-sm backdrop-blur-md gsap-reveal">
            <span className="w-2 h-2 rounded-full bg-[#4D99D3] animate-pulse" />
            <span>01 / SPECIALIZED SECTOR INTELLIGENCE</span>
          </div>

          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[0.96] max-w-5xl mt-2 mb-6 gsap-reveal-header">
            Financial expertise that understands <br />
            <span className="text-[#4D99D3]">your industry.</span>
          </h1>

          <p className="text-lg sm:text-2xl text-white/80 font-light max-w-3xl leading-relaxed mb-12 font-desc gsap-reveal">
            Every vertical carries distinct revenue recognition guidelines, tax credit possibilities, and cash flow cycles. We bring deep sector-specific mastery to every client relationship.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-6 border-t border-white/10 gsap-reveal-stagger">
            {INDUSTRIES_DATA.map((ind) => (
              <a
                key={ind.id}
                href={`#industries-section-${ind.id}`}
                className="gsap-stagger-item p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#4D99D3] hover:bg-[#4D99D3]/15 transition-all text-left shadow-sm group"
              >
                <span className="text-[10px] font-mono text-[#4D99D3] block font-bold">{ind.number}</span>
                <span className="text-xs font-display font-bold text-white group-hover:text-[#4D99D3] truncate block mt-0.5">{ind.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 — SMALL BUSINESS (Large Editorial Image & Text)
          ========================================================================= */}
      <section
        id="industries-section-small-business"
        className="py-24 sm:py-32 bg-white text-[#0D1631] px-4 sm:px-6 lg:px-8 border-b border-[#0D1631]/10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FB] text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono gsap-reveal">
              <span>02 / SMALL & MIDSIZE ENTERPRISE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#0D1631] gsap-reveal-header">
              Helping small businesses build strong financial foundations.
            </h2>
            <p className="text-base text-[#667085] leading-relaxed font-desc gsap-reveal">
              We free founders and operators from manual invoicing, late-night ledger matching, and quarterly tax anxiety. With CoreTax, your core numbers remain clear and audit-proof year-round.
            </p>

            <div className="p-5 rounded-2xl bg-[#F4F7FA] border-l-4 border-[#4D99D3] shadow-sm gsap-reveal">
              <span className="text-2xl font-display font-black text-[#4D99D3]">35+ Hours</span>
              <p className="text-xs text-[#667085] mt-1 font-mono">Average monthly executive time reclaimed from administrative finance.</p>
            </div>

            <div className="pt-2 gsap-reveal">
              <MagneticButton
                variant="navy"
                rounded="full"
                onClick={() => onOpenConsultation('Small Business Advisory')}
              >
                Inquire for Small Business
              </MagneticButton>
            </div>
          </div>

          <div className="lg:col-span-6 gsap-reveal">
            <TiltCard className="aspect-[4/3] rounded-3xl overflow-hidden border border-[#0D1631]/10 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop"
                alt="Small Business Leadership Review"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0D1631]/90 text-white backdrop-blur-md border-l-2 border-[#4D99D3]">
                <p className="text-xs font-mono text-[#4D99D3]">SME Governance</p>
                <p className="text-sm font-display font-bold">Proactive estimated tax reviews before quarter close.</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 — STARTUPS (Deep Navy, Animated Growth Chart)
          ========================================================================= */}
      <section
        id="industries-section-startups"
        className="py-24 sm:py-32 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono gsap-reveal">
              <span>03 / TECH & VENTURE STARTUPS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white leading-tight gsap-reveal-header">
              From first transaction to sustainable growth.
            </h2>
            <p className="text-base text-white/70 leading-relaxed font-desc gsap-reveal">
              We monetize your research expenditures through federal & state R&D tax credits, manage ASC 606 deferred SaaS revenue, and construct clean data rooms for institutional Series A-C rounds.
            </p>

            <div className="pt-2 gsap-reveal">
              <MagneticButton
                variant="primary"
                rounded="full"
                onClick={() => onOpenConsultation('Startup & Venture Advisory')}
              >
                Inquire for Venture Services
              </MagneticButton>
            </div>
          </div>

          <div className="lg:col-span-6 gsap-reveal">
            <TiltCard className="bg-[#15234d] p-8 rounded-3xl border border-white/15 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-[#4D99D3] font-bold">VENTURE CAPITAL EFFICIENCY MODEL</span>
                <Rocket className="w-4 h-4 text-[#4D99D3]" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-[#667085] uppercase font-mono">R&D Offset</span>
                  <p className="text-xl font-display font-black text-[#4D99D3] mt-1">$250k / yr</p>
                  <span className="text-[10px] text-white/50">Payroll tax reduction</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-[#667085] uppercase font-mono">Runway Extension</span>
                  <p className="text-xl font-display font-black text-white mt-1">+4.2 Mo</p>
                  <span className="text-[10px] text-white/50">Via tax optimization</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70 space-y-1 font-desc">
                <p>• ASC 606 Multi-Year Subscription Amortization</p>
                <p>• Stock Option (83b) Election Administration</p>
                <p>• Series A/B Board Financial Packets</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 — PROFESSIONAL SERVICES (Consultants, Agencies, Law Firms, Tech)
          ========================================================================= */}
      <section
        id="industries-section-professional-services"
        className="py-24 sm:py-32 bg-[#F4F7FA] text-[#0D1631] px-4 sm:px-6 lg:px-8 border-b border-[#0D1631]/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 gsap-reveal-header">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0D1631]/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono mb-3">
              <span>04 / PROFESSIONAL SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mt-2 text-[#0D1631]">
              Engineered for consultancies, law firms, agencies & medical groups.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gsap-reveal-stagger">
            {[
              { title: 'Management Consultants', sub: 'Utilization & Partner Draws', desc: 'Real-time billing rates, travel expense allocations, and partner equity distributions.' },
              { title: 'Creative & Tech Agencies', sub: 'Project Margins & Retainers', desc: 'Retainer reconciliation, contractor 1099 compliance, and software amortization.' },
              { title: 'Legal & Law Firms', sub: 'Trust Accounting & IOLTA', desc: 'Strict three-way reconciliation for trust accounts and state bar compliance.' },
              { title: 'Medical Practices', sub: 'Practice Yield & Leasing', desc: 'Equipment depreciation shielding, HIPAA compliance, and insurance payer reconciliations.' },
            ].map((niche, idx) => (
              <TiltCard
                key={idx}
                className="gsap-stagger-item p-6 rounded-2xl bg-white border border-[#0D1631]/10 relative group hover:border-[#4D99D3] transition-all shadow-sm hover:shadow-xl"
                maxTilt={6}
              >
                <div className="text-xs font-mono font-bold text-[#4D99D3] mb-1 px-2 py-0.5 rounded-full bg-[#EAF4FB] inline-block">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-display font-bold text-[#0D1631] mb-1">
                  {niche.title}
                </h3>
                <p className="text-xs font-mono text-[#4D99D3] mb-3">
                  {niche.sub}
                </p>
                <p className="text-xs text-[#667085] leading-relaxed font-desc">
                  {niche.desc}
                </p>
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#4D99D3] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 — RETAIL & E-COMMERCE (Sales Dashboard & Unit Economics)
          ========================================================================= */}
      <section
        id="industries-section-retail"
        className="py-24 sm:py-32 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono gsap-reveal">
              <span>05 / RETAIL & OMNICHANNEL COMMERCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white leading-tight gsap-reveal-header">
              Mastering multi-state sales tax & inventory unit margins.
            </h2>
            <p className="text-base text-white/70 leading-relaxed font-desc gsap-reveal">
              We connect Shopify, Amazon, Walmart, and Stripe ledgers into a unified system with landed cost calculations, Wayfair economic nexus filing, and inventory write-down accuracy.
            </p>

            <div className="pt-2 gsap-reveal">
              <MagneticButton
                variant="primary"
                rounded="full"
                onClick={() => onOpenConsultation('E-Commerce & Retail')}
              >
                Inquire for E-Commerce
              </MagneticButton>
            </div>
          </div>

          <div className="lg:col-span-6 gsap-reveal">
            <TiltCard className="bg-[#15234d] p-8 rounded-3xl border border-white/15 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <span className="text-xs font-mono text-[#4D99D3] font-bold">OMNICHANNEL SALES TAX & MARGIN MATRIX</span>
                <ShoppingBag className="w-4 h-4 text-[#4D99D3]" />
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Gross Merchandise Value (GMV)</span>
                  <span className="text-white font-bold">$4,850,000</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Total Orders Processed</span>
                  <span className="text-white">68,400 units</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Landed COGS & Merchant Processing</span>
                  <span className="text-[#667085]">($2,420,000)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Sales Tax Collected & Remitted (42 States)</span>
                  <span className="text-[#4D99D3] font-bold">$388,000 (100% Cleared)</span>
                </div>
                <div className="flex justify-between py-2.5 bg-[#4D99D3]/15 rounded-xl px-3 text-white font-bold">
                  <span className="text-[#4D99D3]">Net Omnichannel Contribution Margin</span>
                  <span className="text-[#4D99D3]">42.8%</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06 — CONSTRUCTION & TRADES (Job-Costing & Cash Flow)
          ========================================================================= */}
      <section
        id="industries-section-construction"
        className="py-24 sm:py-32 bg-white text-[#0D1631] px-4 sm:px-6 lg:px-8 border-b border-[#0D1631]/10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FB] text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono gsap-reveal">
              <span>06 / CONSTRUCTION & TRADES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#0D1631] gsap-reveal-header">
              Percentage-of-completion accounting & project job costing.
            </h2>
            <p className="text-base text-[#667085] leading-relaxed font-desc gsap-reveal">
              We specialize in AIA progress billing, subcontractor 1099 compliance, equipment depreciation (Section 179), and accurate overhead burden allocation per job site.
            </p>

            <div className="pt-2 gsap-reveal">
              <MagneticButton
                variant="navy"
                rounded="full"
                onClick={() => onOpenConsultation('Construction & Real Estate')}
              >
                Inquire for Construction
              </MagneticButton>
            </div>
          </div>

          <div className="lg:col-span-6 gsap-reveal">
            <TiltCard className="bg-[#F4F7FA] p-8 rounded-3xl border border-[#0D1631]/10 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#0D1631]/10">
                <span className="text-xs font-display font-bold uppercase tracking-wider text-[#0D1631]">
                  Active Project Job Costing Model
                </span>
                <Hammer className="w-4 h-4 text-[#4D99D3]" />
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="text-[#667085]">Raw Materials & Freight</span>
                  <span className="font-mono font-bold">$1,240,000</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="text-[#667085]">Certified Direct Labor & Subcontractors</span>
                  <span className="font-mono font-bold">$890,000</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="text-[#667085]">Equipment Lease & Fuel Burden</span>
                  <span className="font-mono font-bold">$185,000</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="text-[#667085]">AIA Progress Invoiced to Date</span>
                  <span className="font-mono font-bold text-[#4D99D3]">$2,750,000</span>
                </div>
                <div className="flex justify-between py-2.5 bg-white rounded-xl px-3 font-bold text-sm text-[#0D1631] border border-[#0D1631]/10">
                  <span>Realized Project Gross Profit</span>
                  <span className="text-[#4D99D3]">$435,000 (18.8%)</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07 — PROPERTY / HEALTHCARE / OTHER (Interactive Horizontal Selector)
          ========================================================================= */}
      <section
        id="industries-section-other"
        className="py-24 sm:py-32 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 gsap-reveal-header">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono mb-3">
              <span>07 / SPECIALIZED COMMERCIAL SECTORS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mt-2 text-white">
              Tailored Practice Groups
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gsap-reveal-stagger">
            {ADDITIONAL_NICHES.map((niche, idx) => (
              <TiltCard
                key={idx}
                className="gsap-stagger-item p-8 rounded-2xl bg-[#15234d]/60 border border-white/15 relative group hover:border-[#4D99D3] transition-all shadow-xl backdrop-blur-md"
                maxTilt={6}
              >
                <div className="text-2xl font-display font-black text-[#4D99D3] mb-1">
                  {niche.metric}
                </div>
                <p className="text-[11px] font-mono text-white/60 uppercase tracking-wider mb-4">
                  {niche.metricLabel}
                </p>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {niche.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-desc">
                  {niche.desc}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08 — INDUSTRIES CTA
          ========================================================================= */}
      <section
        id="industries-section-cta"
        className="py-28 sm:py-36 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-t border-white/10"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6 gsap-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono">
            <span>08 / BESPOKE SECTORS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-tight gsap-reveal-header">
            Don&apos;t see your industry?
          </h2>

          <p className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto font-desc">
            Talk to us. We may already understand more than you think. Our partners bring multi-decade exposure across hundreds of distinct business operating models.
          </p>

          <div className="pt-4 flex justify-center">
            <MagneticButton
              variant="primary"
              size="lg"
              rounded="full"
              onClick={() => onOpenConsultation()}
              cursorLabel="TALK"
            >
              Talk to CoreTax
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
