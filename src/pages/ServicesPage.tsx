import React, { useState, useRef } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  FileSpreadsheet,
  Calculator,
  RefreshCw,
  Users,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { PageId } from '../types';
import { SERVICES_DATA } from '../data/siteData';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import { useGsapScroll } from '../hooks/useGsapScroll';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Interactive Bookkeeping pipeline step
  const [activePipelineStep, setActivePipelineStep] = useState(0);

  // Interactive Taxation Calculator State
  const [taxEntity, setTaxEntity] = useState<'scorp' | 'ccorp' | 'llc'>('scorp');
  const [taxRevenue, setTaxRevenue] = useState(2400000); // $2.4M

  // Interactive Checklist state
  const [checkedItems, setCheckedItems] = useState<number[]>([0, 1, 2]);

  // Hook up GSAP ScrollTrigger reveals
  useGsapScroll(containerRef, [activePipelineStep, taxEntity, taxRevenue, checkedItems]);

  const PIPELINE_STEPS = [
    { title: 'Sales & Inflows', icon: '01', desc: 'Real-time sync of merchant accounts, Stripe, wire receipts, and POS gateways.' },
    { title: 'Expenses & AP', icon: '02', desc: 'Automated receipt parsing, vendor invoice matching, and approval queues.' },
    { title: 'Bank Reconciliation', icon: '03', desc: 'Continuous multi-bank ledger clearance with automated anomaly flags.' },
    { title: 'Financial Statements', icon: '04', desc: 'Instant P&L, Balance Sheet, and Free Cash Flow generation by the 5th.' },
    { title: 'Executive Review', icon: '05', desc: 'Senior Partner KPI analysis, margin diagnostics, and strategic cash advisory.' },
  ];

  const toggleChecklist = (idx: number) => {
    if (checkedItems.includes(idx)) {
      setCheckedItems(checkedItems.filter((i) => i !== idx));
    } else {
      setCheckedItems([...checkedItems, idx]);
    }
  };

  const getTaxSavingsEstimate = () => {
    if (taxEntity === 'scorp') return Math.round(taxRevenue * 0.082);
    if (taxEntity === 'ccorp') return Math.round(taxRevenue * 0.065);
    return Math.round(taxRevenue * 0.048);
  };

  return (
    <div ref={containerRef} id="services-page-container" className="w-full">
      {/* =========================================================================
          SECTION 01 — SERVICES HERO (Headline, Subheading, Service Index)
          ========================================================================= */}
      <section
        id="services-section-hero"
        className="pt-36 pb-20 sm:pb-28 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none gsap-parallax" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#4D99D3]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono tracking-widest text-[#4D99D3] mb-6 shadow-sm backdrop-blur-md gsap-reveal">
            <span className="w-2 h-2 rounded-full bg-[#4D99D3] animate-pulse" />
            <span>01 / FULL PRACTICE PORTFOLIO</span>
          </div>

          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[0.96] max-w-5xl mt-2 mb-6 gsap-reveal-header">
            Financial expertise <br />
            <span className="text-[#4D99D3]">without the complexity.</span>
          </h1>

          <p className="text-lg sm:text-2xl text-white/80 font-light max-w-3xl leading-relaxed mb-12 font-desc gsap-reveal">
            Eight specialized disciplines engineered to protect your capital, optimize tax obligations, and empower C-suite decision making with real-time accuracy.
          </p>

          {/* Interactive Quick Service Index */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 pt-6 border-t border-white/10 gsap-reveal-stagger">
            {SERVICES_DATA.map((svc) => (
              <a
                key={svc.id}
                href={`#services-section-${svc.id}`}
                className="gsap-stagger-item p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#4D99D3] hover:bg-[#4D99D3]/15 transition-all text-left group shadow-sm"
              >
                <span className="text-[10px] font-mono text-[#4D99D3] block font-bold">
                  {svc.number}
                </span>
                <span className="text-xs font-display font-bold text-white group-hover:text-[#4D99D3] truncate block mt-0.5">
                  {svc.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 — ACCOUNTING (Editorial + Financial Statement Visualizer)
          ========================================================================= */}
      <section
        id="services-section-accounting"
        className="py-24 sm:py-32 bg-white text-[#0D1631] px-4 sm:px-6 lg:px-8 border-b border-[#0D1631]/10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FB] text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono gsap-reveal">
              <span>02 / STATUTORY ACCOUNTING & ASSURANCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#0D1631] gsap-reveal-header">
              Audited integrity across every balance sheet.
            </h2>
            <p className="text-base text-[#667085] leading-relaxed font-desc gsap-reveal">
              We structure GAAP-compliant financial statements, intercompany ledger clearances, and fixed asset schedules that satisfy institutional lenders, venture boards, and regulatory examiners.
            </p>

            <ul className="space-y-3 text-sm text-[#0D1631] gsap-reveal">
              <li className="flex items-center gap-2.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#4D99D3] shrink-0" />
                Multi-entity consolidation & cross-border currency clearing
              </li>
              <li className="flex items-center gap-2.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#4D99D3] shrink-0" />
                Rigorous balance sheet validation & depreciation schedules
              </li>
              <li className="flex items-center gap-2.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#4D99D3] shrink-0" />
                Institutional GAAP / IFRS reporting packages
              </li>
            </ul>

            <div className="pt-2 gsap-reveal">
              <MagneticButton
                variant="primary"
                rounded="full"
                onClick={() => onOpenConsultation('Statutory Accounting')}
              >
                Explore Accounting
              </MagneticButton>
            </div>
          </div>

          {/* Interactive Financial Statement Visualizer */}
          <div className="lg:col-span-6 gsap-reveal">
            <TiltCard className="bg-[#0D1631] text-white p-6 sm:p-8 rounded-3xl border border-[#4D99D3]/30 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-[#4D99D3]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    Consolidated Statement of Operations
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#4D99D3]/20 text-[#4D99D3]">
                  AUDITED • GAAP
                </span>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/70">Gross Enterprise Revenue</span>
                  <span className="text-white font-bold">$12,450,000</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/70">Cost of Goods & Services (COGS)</span>
                  <span className="text-[#667085]">($4,180,000)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10 text-[#4D99D3] font-bold">
                  <span>Gross Profit Margin (66.4%)</span>
                  <span>$8,270,000</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/70">Operating Overhead (OPEX)</span>
                  <span className="text-[#667085]">($3,920,000)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/70">Depreciation & Amortization (EBITDA)</span>
                  <span className="text-[#667085]">($310,000)</span>
                </div>
                <div className="flex justify-between py-2.5 bg-[#4D99D3]/15 rounded-xl px-3 text-white font-bold text-sm">
                  <span className="text-[#4D99D3]">Net Normalized Operating Income</span>
                  <span className="text-[#4D99D3]">$4,040,000</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 — TAXATION (Deep Navy, Animated Tax Calculation)
          ========================================================================= */}
      <section
        id="services-section-taxation"
        className="py-24 sm:py-32 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono gsap-reveal">
              <span>03 / STRATEGIC TAXATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white leading-tight gsap-reveal-header">
              Tax strategy with a plan.
            </h2>
            <p className="text-base text-white/70 leading-relaxed font-desc gsap-reveal">
              We design structured tax positions that proactively reduce your effective corporate rate, unlock federal R&D incentives, and protect high-value shareholder distributions.
            </p>

            {/* Entity selector controls */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 gsap-reveal">
              <span className="text-xs font-mono text-[#4D99D3] block uppercase tracking-wider font-semibold">
                Simulate Entity Tax Optimization Model
              </span>
              <div className="flex flex-wrap gap-2">
                {(['scorp', 'ccorp', 'llc'] as const).map((ent) => (
                  <button
                    key={ent}
                    onClick={() => setTaxEntity(ent)}
                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase font-bold transition-all cursor-pointer ${
                      taxEntity === ent
                        ? 'bg-[#4D99D3] text-[#0D1631] shadow-md'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {ent === 'scorp' ? 'S-Corporation' : ent === 'ccorp' ? 'C-Corporation' : 'Multi-Member LLC'}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 gsap-reveal">
              <MagneticButton
                variant="primary"
                rounded="full"
                onClick={() => onOpenConsultation('Corporate Taxation')}
              >
                Inquire for Tax Strategy
              </MagneticButton>
            </div>
          </div>

          {/* Dynamic Tax Savings Display */}
          <div className="lg:col-span-6 gsap-reveal">
            <TiltCard className="bg-[#15234d]/80 p-8 rounded-3xl border border-white/15 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono text-[#667085] uppercase">
                  ESTIMATED ANNUAL TAX RESTRUCTURE SAVINGS
                </span>
                <Calculator className="w-5 h-5 text-[#4D99D3]" />
              </div>

              <div className="text-4xl sm:text-6xl font-display font-black text-[#4D99D3] mb-2 tracking-tight">
                ${getTaxSavingsEstimate().toLocaleString()}
              </div>
              <p className="text-xs font-mono text-white/80 mb-6">
                Estimated retained capital via Section 199A, QBI optimization & targeted expense acceleration.
              </p>

              <div className="space-y-2 text-xs text-[#667085]">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span>R&D Wage Credit Potential</span>
                  <span className="text-white font-mono font-bold">$78,500</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span>Pass-Through Entity (PTE) State Tax Shield</span>
                  <span className="text-white font-mono font-bold">$112,000</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span>Depreciation Acceleration (Sec 179)</span>
                  <span className="text-white font-mono font-bold">$145,000</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 — BOOKKEEPING (White Section, Animated Transaction Flow)
          ========================================================================= */}
      <section
        id="services-section-bookkeeping"
        className="py-24 sm:py-32 bg-white text-[#0D1631] px-4 sm:px-6 lg:px-8 border-b border-[#0D1631]/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 gsap-reveal-header">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FB] text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono mb-3">
              <span>04 / CONTINUOUS BOOKKEEPING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mt-2 text-[#0D1631]">
              The 5-Stage Real-Time Transaction Pipeline
            </h2>
            <p className="text-base text-[#667085] mt-3 font-desc">
              We replace end-of-month panic with an automated, spotless daily ledger pipeline that leaves zero room for discrepancies.
            </p>
          </div>

          {/* Interactive Pipeline Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8 gsap-reveal-stagger">
            {PIPELINE_STEPS.map((step, idx) => (
              <TiltCard
                key={idx}
                onClick={() => setActivePipelineStep(idx)}
                className={`gsap-stagger-item p-6 rounded-2xl border transition-all cursor-pointer relative ${
                  activePipelineStep === idx
                    ? 'bg-[#EAF4FB] border-[#4D99D3] shadow-md'
                    : 'bg-[#F4F7FA] border-[#0D1631]/10 hover:border-[#4D99D3]/40'
                }`}
                maxTilt={6}
              >
                <div className="text-xs font-mono font-bold text-[#4D99D3] mb-2 px-2 py-0.5 rounded-full bg-white/60 inline-block">
                  STAGE {step.icon}
                </div>
                <h3 className="text-base font-display font-bold text-[#0D1631] mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-[#667085] leading-relaxed font-desc">
                  {step.desc}
                </p>
                {activePipelineStep === idx && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#4D99D3] rounded-t-2xl" />
                )}
              </TiltCard>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#0D1631] text-white flex flex-col sm:flex-row items-center justify-between gap-4 gsap-reveal shadow-xl">
            <div className="flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-[#4D99D3] animate-spin shrink-0" />
              <span className="text-sm font-medium">
                Active synchronization with QuickBooks Online, Xero, NetSuite & Brex
              </span>
            </div>
            <MagneticButton
              variant="primary"
              size="sm"
              rounded="full"
              onClick={() => onOpenConsultation('Bookkeeping')}
            >
              Get Clean Books
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 — PAYROLL (Light Blue-Tinted, Employee & Payroll Visualization)
          ========================================================================= */}
      <section
        id="services-section-payroll"
        className="py-24 sm:py-32 bg-[#EAF4FB] text-[#0D1631] px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono gsap-reveal">
              <span>05 / WORKFORCE & PAYROLL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#0D1631] gsap-reveal-header">
              Frictionless compensation across every jurisdiction.
            </h2>
            <p className="text-base text-[#667085] leading-relaxed font-desc gsap-reveal">
              Whether you employ 10 executives or 500 distributed contractors across 30 states, CoreTax ensures precise wage distribution, statutory tax remittances, and W-2/1099 compliance.
            </p>

            <div className="grid grid-cols-2 gap-4 gsap-reveal">
              <div className="p-4 rounded-2xl bg-white border border-[#4D99D3]/20 shadow-sm">
                <span className="text-2xl font-display font-black text-[#4D99D3]">100%</span>
                <p className="text-xs text-[#667085] mt-0.5 font-desc">On-Time Distribution SLA</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#4D99D3]/20 shadow-sm">
                <span className="text-2xl font-display font-black text-[#4D99D3]">50 States</span>
                <p className="text-xs text-[#667085] mt-0.5 font-desc">Nexus & Withholding Coverage</p>
              </div>
            </div>

            <div className="pt-2 gsap-reveal">
              <MagneticButton
                variant="navy"
                rounded="full"
                onClick={() => onOpenConsultation('Payroll Operations')}
              >
                Inquire for Payroll Operations
              </MagneticButton>
            </div>
          </div>

          <div className="lg:col-span-6 gsap-reveal">
            <TiltCard className="bg-white p-8 rounded-3xl border border-[#0D1631]/10 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#0D1631]/10">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#4D99D3]" />
                  <span className="text-xs font-display font-bold uppercase tracking-wider text-[#0D1631]">
                    Bi-Weekly Payroll Distribution Model
                  </span>
                </div>
                <span className="text-xs font-mono text-[#4D99D3] font-bold px-2 py-0.5 rounded-full bg-[#EAF4FB]">BATCH #842</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-[#667085]">Gross Salaries & Wages</span>
                  <span className="font-mono font-bold text-[#0D1631]">$284,500.00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-[#667085]">Employer FICA & Medicare (7.65%)</span>
                  <span className="font-mono font-bold text-[#0D1631]">$21,764.25</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-[#667085]">State Unemployment (SUTA) & FUTA</span>
                  <span className="font-mono font-bold text-[#0D1631]">$3,414.00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-[#667085]">401(k) Matching & Health Benefits</span>
                  <span className="font-mono font-bold text-[#0D1631]">$14,225.00</span>
                </div>
                <div className="flex justify-between py-2.5 bg-[#F4F7FA] rounded-xl px-3 font-bold text-sm text-[#0D1631]">
                  <span>Total Cleared Employer Cost</span>
                  <span className="text-[#4D99D3]">$323,903.25</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06 — BUSINESS ADVISORY (Large Split-Screen, Dashboard)
          ========================================================================= */}
      <section
        id="services-section-business-advisory"
        className="py-24 sm:py-32 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono gsap-reveal">
              <span>06 / FRACTIONAL CFO & ADVISORY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white leading-tight gsap-reveal-header">
              Numbers that help you make decisions.
            </h2>
            <p className="text-base text-white/70 leading-relaxed font-desc gsap-reveal">
              We model forward-looking financial scenarios, unit-economic sensitivity curves, and investor-ready board packets that empower high-stakes capital allocation.
            </p>

            <div className="pt-2 gsap-reveal">
              <MagneticButton
                variant="primary"
                rounded="full"
                onClick={() => onOpenConsultation('Fractional CFO')}
              >
                Inquire for CFO Advisory
              </MagneticButton>
            </div>
          </div>

          <div className="lg:col-span-6 gsap-reveal">
            <TiltCard className="bg-[#15234d] p-8 rounded-3xl border border-white/15 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <span className="text-xs font-mono text-[#4D99D3] font-bold">
                  13-WEEK PREDICTIVE CASH VISIBILITY
                </span>
                <TrendingUp className="w-4 h-4 text-[#4D99D3]" />
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-white/80 font-mono mb-1">
                    <span>Burn Runway (Current Growth Vector)</span>
                    <span className="text-[#4D99D3] font-bold">24.5 Months</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-[#4D99D3] rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-white/80 font-mono mb-1">
                    <span>LTV / CAC Efficiency Ratio</span>
                    <span className="text-[#4D99D3] font-bold">4.8x (Institutional Benchmark)</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-[#4D99D3] rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-white/80 font-mono mb-1">
                    <span>EBITDA Reinvestment Capacity</span>
                    <span className="text-[#4D99D3] font-bold">$1.82M Annualized</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-[#4D99D3] rounded-full" />
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07 — TAX PLANNING & COMPLIANCE (Deep Navy, Interactive Checklist)
          ========================================================================= */}
      <section
        id="services-section-compliance"
        className="py-24 sm:py-32 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 gsap-reveal-header">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono mb-3">
              <span>07 / STATUTORY CALENDAR & AUDIT DEFENSE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mt-2 text-white">
              Zero-Defect Statutory Governance Checklist
            </h2>
            <p className="text-base text-white/70 mt-3 font-desc">
              Interactive review of the key compliance milestones CoreTax maintains for your enterprise:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gsap-reveal-stagger">
            {[
              { title: 'Planning & Restructuring', desc: 'Pre-year-end capital expense timing & S-Corp dividend splits' },
              { title: 'Quarterly Filings', desc: 'Federal 941, State SUTA, and estimated corporate tax installments' },
              { title: 'BOI & FinCEN Reporting', desc: 'Federal beneficial ownership statutory documentation' },
              { title: 'Sales Tax Nexus Review', desc: 'Wayfair threshold tracking across 45+ sales tax states' },
              { title: 'R&D Study Substantiation', desc: 'Contemporaneous wage logs & tech project documentation' },
              { title: 'Annual Tax Shield Review', desc: 'Section 179 depreciation schedules & shareholder K-1 filings' },
            ].map((item, idx) => {
              const isChecked = checkedItems.includes(idx);
              return (
                <div
                  key={idx}
                  onClick={() => toggleChecklist(idx)}
                  className={`gsap-stagger-item p-6 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isChecked
                      ? 'bg-[#4D99D3]/20 border-[#4D99D3] text-white shadow-md'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                      isChecked ? 'border-[#4D99D3] bg-[#4D99D3] text-[#0D1631]' : 'border-white/30'
                    }`}
                  >
                    {isChecked && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed font-desc">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08 — SERVICES CTA (Huge Typography, Book Consultation)
          ========================================================================= */}
      <section
        id="services-section-cta"
        className="py-28 sm:py-36 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-t border-white/10"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6 gsap-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono">
            <span>08 / CUSTOM PROPOSAL</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-tight gsap-reveal-header">
            Need help with your numbers?
          </h2>

          <p className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto font-desc">
            Contact CoreTax for a confidential review. We will evaluate your current accounting infrastructure and present a clear plan for optimization.
          </p>

          <div className="pt-4 flex justify-center">
            <MagneticButton
              variant="primary"
              size="lg"
              rounded="full"
              onClick={() => onOpenConsultation()}
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
