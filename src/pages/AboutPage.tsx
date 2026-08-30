import React, { useState, useRef } from 'react';
import {
  ArrowUpRight,
  Check,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Target,
  Compass,
  Sparkles,
  Sliders,
  Users,
} from 'lucide-react';
import { PageId } from '../types';
import {
  CORE_VALUES,
  APPROACH_STEPS,
  TEAM_MEMBERS,
  BRAND_CONFIG,
  TESTIMONIALS_LIST,
} from '../data/siteData';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import { useGsapScroll } from '../hooks/useGsapScroll';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeApproachStep, setActiveApproachStep] = useState(0);

  // Leadership Carousel State
  const [leaderSlideIndex, setLeaderSlideIndex] = useState(0);
  const maxLeaderIndex = Math.max(0, TEAM_MEMBERS.length - 1);

  // Client Perspective Carousel State
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Enable GSAP Awwwards-level scroll animations across all sections
  useGsapScroll(containerRef, [activeApproachStep, leaderSlideIndex, testimonialIndex]);

  const STORY_MILESTONES = [
    {
      year: '2016',
      title: 'The Foundational Mandate',
      desc: 'Founded with a core commitment: replace legacy, transactional accounting with high-fidelity proactive financial advisory.',
    },
    {
      year: '2019',
      title: 'Cross-Border & Tax Practice Expansion',
      desc: 'Scaled to multi-state compliance and international transfer pricing, managing over $250M in client balance sheet allocations.',
    },
    {
      year: '2022',
      title: 'Fractional CFO & Cloud Ledger Innovation',
      desc: 'Integrated real-time financial modeling suites, unlocking predictive 13-week cash forecasting for venture and mid-market firms.',
    },
    {
      year: '2026',
      title: 'Next-Generation Institutional Standard',
      desc: 'Trusted by 500+ growth companies, private equity sponsors, and high-net-worth founders nationwide.',
    },
  ];

  const nextLeaderSlide = () => {
    setLeaderSlideIndex((prev) => (prev >= maxLeaderIndex ? 0 : prev + 1));
  };

  const prevLeaderSlide = () => {
    setLeaderSlideIndex((prev) => (prev <= 0 ? maxLeaderIndex : prev - 1));
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS_LIST.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS_LIST.length) % TESTIMONIALS_LIST.length);
  };

  return (
    <div ref={containerRef} id="about-page-container" className="w-full">
      {/* =========================================================================
          SECTION 01 — ABOUT HERO (Dark Navy, Glowing Accent, Matching Other Pages)
          ========================================================================= */}
      <section
        id="about-section-hero"
        className="pt-36 pb-24 sm:pb-32 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden"
      >
        {/* Abstract Background Grid & Ambient Glows */}
        <div className="absolute inset-0 bg-financial-grid-dark opacity-35 pointer-events-none gsap-parallax" />
        <div className="absolute top-1/3 right-12 w-96 h-96 bg-[#4D99D3]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#4D99D3]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Huge faint background typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[18vw] font-display font-extrabold text-white/[0.02] tracking-tighter z-0">
          ADVISORY
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono tracking-widest text-[#4D99D3] mb-6 shadow-sm backdrop-blur-md gsap-reveal">
            <span className="w-2 h-2 rounded-full bg-[#4D99D3] animate-pulse" />
            <span>01 / ABOUT CORETAX</span>
          </div>

          <h1
            id="about-hero-headline"
            className="text-4xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[0.96] max-w-5xl mt-2 mb-8 gsap-reveal-header"
          >
            A better way to think about <span className="text-[#4D99D3]">accounting.</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-8 border-t border-white/10 gsap-reveal">
            <p className="lg:col-span-8 text-lg sm:text-2xl text-white/80 font-light leading-relaxed font-desc">
              We bridge the gap between rigorous fiduciary accuracy and strategic enterprise expansion. Financial clarity should be a forward-looking catalyst, never a retrospective burden.
            </p>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <MagneticButton
                variant="primary"
                size="lg"
                rounded="full"
                onClick={onOpenConsultation}
                cursorLabel="BOOK"
              >
                Schedule Strategic Intake
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 — OUR STORY (Milestones & Year Typography, GSAP Reveal)
          ========================================================================= */}
      <section
        id="about-section-story"
        className="py-24 sm:py-32 bg-[#F4F7FA] text-[#0D1631] px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5 gsap-reveal-header">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0D1631]/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono mb-3">
                <span>02 / ORIGINS & EVOLUTION</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mt-2 text-[#0D1631]">
                Built on expertise. Driven by clarity.
              </h2>
            </div>
            <div className="lg:col-span-7 text-[#667085] text-base sm:text-lg leading-relaxed space-y-4 font-light gsap-reveal font-desc">
              <p>
                CoreTax was built on a simple observation: modern business moves too fast for annual accounting cycles. Traditional CPAs provide historical tax returns long after key operational decisions have already been made.
              </p>
              <p>
                We established CoreTax to provide institutional-grade advisory, continuous cloud ledger oversight, and proactive tax architecture. Every client benefits from dedicated Senior Partner involvement.
              </p>
            </div>
          </div>

          {/* Timeline Grid with GSAP Stagger & 3D Tilt */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gsap-reveal-stagger">
            {STORY_MILESTONES.map((item, idx) => (
              <TiltCard
                key={idx}
                className="gsap-stagger-item p-6 sm:p-8 bg-white border border-[#0D1631]/10 rounded-2xl relative group hover:border-[#4D99D3] transition-all shadow-sm hover:shadow-xl"
                maxTilt={8}
              >
                <div className="text-4xl sm:text-5xl font-display font-black text-[#4D99D3] mb-3">
                  {item.year}
                </div>
                <h3 className="text-lg font-display font-bold text-[#0D1631] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#667085] leading-relaxed font-desc">
                  {item.desc}
                </p>
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#4D99D3] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 — MISSION (Deep Navy, Huge Statement)
          ========================================================================= */}
      <section
        id="about-section-mission"
        className="py-28 sm:py-36 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono gsap-reveal">
            <span>03 / CORE MISSION</span>
          </div>

          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.04] gsap-reveal-header">
            &ldquo;Our mission is simple: make financial decisions <span className="text-[#4D99D3]">easier</span>.&rdquo;
          </h2>

          <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed font-desc gsap-reveal">
            By turning fragmented records into structured intelligence, we give business owners the confidence to scale boldly without fear of compliance blind spots or hidden liabilities.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 — VALUES (Large Numbered Editorial Layout)
          ========================================================================= */}
      <section
        id="about-section-values"
        className="py-24 sm:py-32 bg-white text-[#0D1631] px-4 sm:px-6 lg:px-8 border-b border-[#0D1631]/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 gsap-reveal-header">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FB] text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono mb-3">
              <span>04 / VALUE FRAMEWORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mt-2 text-[#0D1631]">
              The pillars of our fiduciary standard.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 gsap-reveal-stagger">
            {CORE_VALUES.map((val) => (
              <TiltCard
                key={val.number}
                className="gsap-stagger-item p-8 sm:p-10 bg-[#F4F7FA] border border-[#0D1631]/10 rounded-2xl relative group hover:border-[#4D99D3] transition-all shadow-sm hover:shadow-xl"
                maxTilt={6}
              >
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#4D99D3]/15 text-[#4D99D3]">
                  VALUE 0{val.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0D1631] mt-3 mb-1">
                  {val.title}
                </h3>
                <p className="text-xs font-mono font-semibold text-[#4D99D3] uppercase tracking-wider mb-4">
                  {val.tagline}
                </p>
                <p className="text-sm text-[#667085] leading-relaxed font-desc">
                  {val.description}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 — OUR APPROACH (4-Step Horizontal Storytelling)
          ========================================================================= */}
      <section
        id="about-section-approach"
        className="py-24 sm:py-32 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 gsap-reveal-header">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono mb-3">
                <span>05 / METHODOLOGY</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mt-2 text-white">
                Our Four-Phase Advisory Lifecycle
              </h2>
            </div>

            {/* Step Switcher for Interactive UX */}
            <div className="flex flex-wrap items-center gap-2">
              {APPROACH_STEPS.map((st, idx) => (
                <button
                  key={st.step}
                  onClick={() => setActiveApproachStep(idx)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeApproachStep === idx
                      ? 'bg-[#4D99D3] text-[#0D1631] shadow-md'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {st.step} {st.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Detailed Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#15234d]/60 border border-white/15 p-8 sm:p-12 rounded-3xl backdrop-blur-md shadow-2xl gsap-reveal">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-sm font-mono font-bold text-[#4D99D3]">
                PHASE {APPROACH_STEPS[activeApproachStep].step}
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                {APPROACH_STEPS[activeApproachStep].title}
              </h3>
              <p className="text-sm font-mono text-[#4D99D3] font-semibold">
                {APPROACH_STEPS[activeApproachStep].focus}
              </p>
              <p className="text-sm text-white/70 leading-relaxed font-desc">
                {APPROACH_STEPS[activeApproachStep].description}
              </p>

              <div className="pt-4 border-t border-white/10">
                <span className="text-xs uppercase font-mono tracking-wider text-white/60 block mb-1">
                  Core Deliverable:
                </span>
                <p className="text-sm font-bold text-white">
                  {APPROACH_STEPS[activeApproachStep].deliverable}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-3">
              {APPROACH_STEPS.map((step, idx) => (
                <div
                  key={step.step}
                  onClick={() => setActiveApproachStep(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    activeApproachStep === idx
                      ? 'bg-[#4D99D3]/20 border-[#4D99D3] text-white shadow-md'
                      : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-white/10">{step.step}</span>
                    <span className="text-sm font-display font-bold">{step.title}</span>
                  </div>
                  <span className="text-xs font-mono text-white/60">{step.focus.split('&')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06 — LEADERSHIP & PRACTICE CHAIRS (Slideable Interactive Carousel)
          ========================================================================= */}
      <section
        id="about-section-leadership"
        className="py-24 sm:py-32 bg-white text-[#0D1631] px-4 sm:px-6 lg:px-8 border-b border-[#0D1631]/10 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 gsap-reveal-header">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FB] text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono mb-3">
                <span>06 / LEADERSHIP & PRACTICE CHAIRS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mt-2 text-[#0D1631]">
                The people behind CoreTax.
              </h2>
              <p className="text-xs text-[#667085] mt-2 font-mono">
                [CONFIDENTIAL PARTNER PROFILES • INTERACTIVE SLIDER • 6 PRACTICE CHAIRS]
              </p>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-[#667085]">
                {String(leaderSlideIndex + 1).padStart(2, '0')} / {String(TEAM_MEMBERS.length).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-2">
                <button
                  id="leadership-prev-btn"
                  onClick={prevLeaderSlide}
                  aria-label="Previous Leader"
                  className="w-10 h-10 rounded-full border border-[#0D1631]/20 flex items-center justify-center text-[#0D1631] hover:bg-[#0D1631] hover:text-white transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  id="leadership-next-btn"
                  onClick={nextLeaderSlide}
                  aria-label="Next Leader"
                  className="w-10 h-10 rounded-full border border-[#0D1631]/20 flex items-center justify-center text-[#0D1631] hover:bg-[#0D1631] hover:text-white transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Slideable Leadership Cards Container */}
          <div className="relative overflow-hidden gsap-reveal">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${leaderSlideIndex * 320}px)`,
              }}
            >
              {TEAM_MEMBERS.map((member, idx) => (
                <TiltCard
                  key={member.id}
                  className={`w-[280px] sm:w-[340px] flex-shrink-0 bg-[#F4F7FA] border rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 ${
                    idx === leaderSlideIndex
                      ? 'border-[#4D99D3] shadow-xl'
                      : 'border-[#0D1631]/10 hover:border-[#4D99D3]'
                  }`}
                  maxTilt={5}
                >
                  <div>
                    <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-[#0D1631]/10 relative border border-[#0D1631]/5">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full bg-[#0D1631]/80 backdrop-blur-sm text-[10px] font-mono text-[#4D99D3]">
                        PRACTICE CHAIR {String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>

                    <h3 className="text-lg font-display font-bold text-[#0D1631]">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-[#4D99D3] font-semibold mb-1">
                      {member.role}
                    </p>
                    <p className="text-[11px] text-[#667085] font-mono mb-3">
                      {member.credentials}
                    </p>
                    <p className="text-xs text-[#667085] leading-relaxed mb-4 line-clamp-3 font-desc">
                      {member.bio}
                    </p>

                    {/* Specialization Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {member.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-full bg-white border border-[#0D1631]/10 text-[10px] font-mono text-[#0D1631]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#0D1631]/10 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono text-[#667085]">
                      Fiduciary Lead
                    </span>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full text-[#0D1631] hover:bg-[#4D99D3]/15 hover:text-[#4D99D3] transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Quick Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {TEAM_MEMBERS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setLeaderSlideIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  leaderSlideIndex === idx ? 'w-8 bg-[#4D99D3]' : 'w-2 bg-[#0D1631]/20'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07 — CLIENT PERSPECTIVE (Slideable Testimonials in About Page)
          ========================================================================= */}
      <section
        id="about-section-testimonials"
        className="py-24 sm:py-32 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 gsap-reveal-header">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono mb-3">
                <span>07 / CLIENT PERSPECTIVES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mt-2 text-white">
                Voices of enterprise trust.
              </h2>
            </div>

            {/* Testimonial Nav */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-[#4D99D3]">
                CASE {String(testimonialIndex + 1).padStart(2, '0')} / {String(TESTIMONIALS_LIST.length).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-2">
                <button
                  id="about-testimonial-prev"
                  onClick={prevTestimonial}
                  aria-label="Previous Perspective"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#4D99D3] hover:text-[#0D1631] hover:border-[#4D99D3] transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  id="about-testimonial-next"
                  onClick={nextTestimonial}
                  aria-label="Next Perspective"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#4D99D3] hover:text-[#0D1631] hover:border-[#4D99D3] transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Testimonial Slide */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#15234d]/60 border border-white/15 p-8 sm:p-12 rounded-3xl relative gsap-reveal backdrop-blur-md shadow-2xl">
            <div className="lg:col-span-5 relative">
              <TiltCard className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl aspect-[4/5]">
                <img
                  src={TESTIMONIALS_LIST[testimonialIndex].image}
                  alt={TESTIMONIALS_LIST[testimonialIndex].company}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1631] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0D1631]/90 backdrop-blur-sm border-l-2 border-[#4D99D3] text-xs font-mono text-[#4D99D3]">
                  {TESTIMONIALS_LIST[testimonialIndex].metricHighlight}
                </div>
              </TiltCard>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 text-xs font-mono text-[#4D99D3]">
                <span className="w-2 h-2 rounded-full bg-[#4D99D3] animate-pulse" />
                <span>CONFIRMED ENGAGEMENT</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/60 text-[10px]">
                  [CLIENT CONFIDENTIAL]
                </span>
              </div>

              <blockquote className="text-xl sm:text-3xl font-display font-medium text-white leading-snug tracking-tight">
                &ldquo;{TESTIMONIALS_LIST[testimonialIndex].quote}&rdquo;
              </blockquote>

              <div className="pt-6 border-t border-white/15">
                <p className="text-lg font-display font-bold text-white">
                  {TESTIMONIALS_LIST[testimonialIndex].clientName}
                </p>
                <p className="text-sm text-[#4D99D3] font-mono mt-0.5">
                  {TESTIMONIALS_LIST[testimonialIndex].position} • {TESTIMONIALS_LIST[testimonialIndex].company}
                </p>
                <p className="text-xs text-white/60 mt-1 font-desc">
                  Sector: {TESTIMONIALS_LIST[testimonialIndex].industry}
                </p>
              </div>

              {/* Slide selector pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {TESTIMONIALS_LIST.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className={`px-3.5 py-1 rounded-full text-[11px] font-mono transition-all cursor-pointer ${
                      testimonialIndex === idx
                        ? 'bg-[#4D99D3] text-[#0D1631] font-bold shadow-md'
                        : 'bg-white/5 text-white/60 hover:bg-white/15'
                    }`}
                  >
                    0{idx + 1} {item.industry.split('&')[0].trim()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08 — CULTURE & ENVIRONMENT (Photographic Showcase)
          ========================================================================= */}
      <section
        id="about-section-culture"
        className="py-24 sm:py-32 bg-[#F4F7FA] text-[#0D1631] px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 gsap-reveal-header">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0D1631]/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono mb-3">
              <span>08 / ENVIRONMENT & COLLABORATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight mt-2 text-[#0D1631]">
              A culture of rigorous precision and relentless curiosity.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gsap-reveal-stagger">
            <TiltCard className="gsap-stagger-item rounded-2xl overflow-hidden border border-[#0D1631]/10 shadow-lg group aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Professional Collaboration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#0D1631]/80 text-white text-xs font-mono">
                Collaborative Diagnostics
              </div>
            </TiltCard>

            <TiltCard className="gsap-stagger-item rounded-2xl overflow-hidden border border-[#0D1631]/10 shadow-lg group aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                alt="Modern Architecture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#0D1631]/80 text-white text-xs font-mono">
                Global Financial District
              </div>
            </TiltCard>

            <TiltCard className="gsap-stagger-item rounded-2xl overflow-hidden border border-[#0D1631]/10 shadow-lg group aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
                alt="Client Meetings"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#0D1631]/80 text-white text-xs font-mono">
                Executive Strategy Sessions
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09 — ABOUT CTA
          ========================================================================= */}
      <section
        id="about-section-cta"
        className="py-28 sm:py-36 bg-[#0D1631] text-white px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-t border-white/10"
      >
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6 gsap-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#4D99D3] font-bold font-mono">
            <span>09 / NEXT HORIZONS</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-tight gsap-reveal-header">
            Let&apos;s build something financially stronger.
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto font-desc">
            Book an introductory diagnostic session with our Senior Partners. We will review your tax efficiency, operational cash flow, and bookkeeping structure.
          </p>

          <div className="pt-4 flex justify-center">
            <MagneticButton
              variant="primary"
              size="lg"
              rounded="full"
              onClick={onOpenConsultation}
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
