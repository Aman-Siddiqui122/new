import {
  MetricItem,
  ServiceItem,
  IndustryItem,
  TeamMember,
  ValueItem,
  ApproachStep,
  FAQItem,
  TestimonialItem,
} from '../types';

export const BRAND_CONFIG = {
  name: 'CoreTax',
  tagline: 'Clarity in Numbers. Confidence in Business.',
  supportingMessage: 'Smart financial expertise for businesses ready to move forward.',
  phone: '+1 (800) 555-CORE',
  email: 'advisory@coretax.com',
  clientPortal: 'portal.coretax.com',
  office: 'Financial District, Suite 4800, New York, NY 10005',
  hours: 'Monday – Friday, 08:30 – 18:00 EST',
  colors: {
    primaryBlue: '#4D99D3',
    deepNavy: '#0D1631',
    white: '#FFFFFF',
    lightBg: '#F4F7FA',
    softBlue: '#EAF4FB',
    mutedText: '#667085',
  },
};

export const HERO_METRICS: MetricItem[] = [
  {
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    description: 'Guiding high-growth firms and institutions',
  },
  {
    value: 500,
    suffix: '+',
    label: 'Clients',
    description: 'Enterprises, startups, and private entities',
  },
  {
    value: 1000,
    suffix: '+',
    label: 'Financial Matters Managed',
    description: 'Complex tax filings, audits, and M&A advisory',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Retained advisory relationships over 5+ years',
  },
];

export const CORE_VALUES: ValueItem[] = [
  {
    number: '01',
    title: 'Integrity',
    tagline: 'Uncompromising fiduciary ethics',
    description:
      'We operate with absolute transparency and rigorous standards, safeguarding your business reputation and capital with meticulous care.',
  },
  {
    number: '02',
    title: 'Accuracy',
    tagline: 'Precision down to the decimal',
    description:
      'Reliable financial information that stands up to audits, institutional scrutiny, and strategic boardroom evaluations.',
  },
  {
    number: '03',
    title: 'Clarity',
    tagline: 'Decisions without noise',
    description:
      'Straightforward advice without unnecessary jargon. We transform complex balance sheets into intuitive operational insight.',
  },
  {
    number: '04',
    title: 'Partnership',
    tagline: 'Long-term aligned growth',
    description:
      'We do not provide transactional bookkeeping; we embed as your senior financial wing throughout every expansion cycle.',
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: '01',
    title: 'Understand',
    focus: 'Comprehensive Baseline & Diagnostics',
    description:
      'We dissect your financial architecture, historical ledgers, tax exposure, and business model dynamics to establish an indisputable single source of truth.',
    deliverable: 'Financial Diagnostic Audit & Structural Gap Analysis',
  },
  {
    step: '02',
    title: 'Plan',
    focus: 'Strategic Tax & Capital Architecture',
    description:
      'We engineer bespoke tax optimization models, forward-looking cash flow projections, and regulatory compliance calendars tailored to your fiscal targets.',
    deliverable: '12-Month Fiscal Blueprint & Proactive Tax Strategy',
  },
  {
    step: '03',
    title: 'Manage',
    focus: 'Real-Time Precision Execution',
    description:
      'Continuous daily bookkeeping, multi-entity consolidation, payroll operations, and periodic reconciliation with cloud-linked financial software.',
    deliverable: 'Weekly Ledger Balancing & Month-End Close Packets',
  },
  {
    step: '04',
    title: 'Advise',
    focus: 'C-Suite Advisory & Growth Steering',
    description:
      'Monthly executive debriefs, unit-economic sensitivity analyses, scenario modeling for hiring or expansion, and dedicated board advisory support.',
    deliverable: 'Executive KPI Dashboard & Quarterly Strategic Reviews',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'accounting',
    number: '01',
    title: 'Accounting',
    tagline: 'Statutory financial accounting & structural governance',
    description:
      'Comprehensive preparation of audited financial statements, multi-currency ledger reconciliation, and strict compliance with GAAP/IFRS standards.',
    deliverables: [
      'Balance Sheet & P&L Statement Certification',
      'Multi-entity consolidation & intercompany clearing',
      'GAAP/IFRS compliance audits & internal controls',
      'Fixed asset tracking & depreciation scheduling',
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    accentMetric: '$480M+',
    accentMetricLabel: 'Cumulative Assets Reconciled',
  },
  {
    id: 'taxation',
    number: '02',
    title: 'Taxation',
    tagline: 'Advanced corporate tax optimization & cross-border structuring',
    description:
      'Proactive tax minimization strategies, federal/state/international filings, R&D tax credit claims, and robust audit defense protocols.',
    deliverables: [
      'Corporate, partnership, and individual tax returns',
      'R&D tax credits & government incentive optimization',
      'Cross-border transfer pricing & nexus determination',
      'Audit mitigation and direct revenue authority defense',
    ],
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop',
    accentMetric: '24.6%',
    accentMetricLabel: 'Average Effective Tax Reduction',
  },
  {
    id: 'bookkeeping',
    number: '03',
    title: 'Bookkeeping',
    tagline: 'Continuous ledger hygiene & real-time transaction pipelines',
    description:
      'Automated daily reconciliations, AP/AR lifecycle management, receipt verification, and spotless documentation ready for immediate auditing.',
    deliverables: [
      'Daily bank, merchant, and credit card synchronization',
      'Vendor management & Accounts Payable (AP) workflows',
      'Customer billing, invoicing & Accounts Receivable (AR)',
      'Digital document archiving with bank-grade encryption',
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    accentMetric: '99.9%',
    accentMetricLabel: 'Ledger Categorization Precision',
  },
  {
    id: 'payroll',
    number: '04',
    title: 'Payroll',
    tagline: 'Frictionless domestic & international workforce compensation',
    description:
      'Seamless multi-state payroll distribution, executive equity compensation tracking, statutory deductions, and tax withholdings.',
    deliverables: [
      'Automated direct deposit & contractor disbursements',
      'Multi-state & remote worker withholding compliance',
      'Benefits administration, 401(k), & health deduction reconciliations',
      'End-of-year W-2, 1099, and local regulatory filings',
    ],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    accentMetric: '100%',
    accentMetricLabel: 'On-Time Distribution Record',
  },
  {
    id: 'business-advisory',
    number: '05',
    title: 'Business Advisory',
    tagline: 'Fractional CFO guidance, scenario modeling & capital strategy',
    description:
      'Board-level strategic counsel, cash burn runway management, M&A due diligence, and capital raise readiness for scaling enterprises.',
    deliverables: [
      'Fractional CFO leadership & investor board prep',
      'Dynamic 3-statement financial forecasting models',
      'Mergers & acquisitions financial due diligence',
      'Unit economics, CAC-to-LTV, and margin optimization',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    accentMetric: '3.8x',
    accentMetricLabel: 'Client Capital Multiplier',
  },
  {
    id: 'financial-reporting',
    number: '06',
    title: 'Financial Reporting',
    tagline: 'Executive visual dashboards & institutional stakeholder packs',
    description:
      'Custom KPI analytics suites, investor updates, cash-flow diagnostics, and predictive budget variance reports delivered on a strict schedule.',
    deliverables: [
      'Monthly executive visual reporting packages',
      'Custom BI dashboard integrations & automated alerts',
      'Rolling 13-week cash flow predictability schedules',
      'Budget-to-actual variance audits with narrative analysis',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    accentMetric: '<4 hrs',
    accentMetricLabel: 'Report Delivery Turnaround',
  },
  {
    id: 'tax-planning',
    number: '07',
    title: 'Tax Planning',
    tagline: 'Multi-year fiscal horizon planning & wealth preservation',
    description:
      'Proactive entity restructuring, asset purchase timing, depreciation maximization, and estate tax shielding designed well before fiscal year-end.',
    deliverables: [
      'Entity structure optimization (LLC, S-Corp, C-Corp, Trust)',
      'Section 179 & bonus depreciation strategic timing',
      'Executive deferred compensation & pension planning',
      'Succession planning & owner equity tax shielding',
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    accentMetric: '12 Mo',
    accentMetricLabel: 'Forward Planning Horizon',
  },
  {
    id: 'compliance',
    number: '08',
    title: 'Compliance',
    tagline: 'Zero-tolerance regulatory adherence & statutory safety',
    description:
      'Comprehensive coverage across federal, state, and municipal regulations, ensuring your business stays insulated from penalties and audits.',
    deliverables: [
      'Annual corporate registrations & franchise filings',
      'Sales and use tax multi-jurisdiction compliance (SaaS & Goods)',
      'FinCEN beneficial ownership reporting (BOI)',
      'Internal control frameworks & audit preparedness reviews',
    ],
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
    accentMetric: 'Zero',
    accentMetricLabel: 'Client Penalty Incidence',
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'small-business',
    number: '01',
    title: 'Small & Midsize Business',
    subtitle: 'Building enduring financial foundations for sustainable profitability',
    description:
      'Empowering business owners with reliable bookkeeping, automated billing, proactive tax mitigation, and clear cash management so they can focus on core growth.',
    challengesSolved: [
      'Cash flow volatility and seasonal revenue dips',
      'Overpaying on quarterly estimated taxes',
      'Time sink from manual invoicing and reconciliation',
      'Difficulty securing commercial credit lines',
    ],
    keyMetric: '35 hrs',
    keyMetricLabel: 'Monthly Management Hours Saved',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'startups',
    number: '02',
    title: 'Tech & Venture Startups',
    subtitle: 'From initial seed capitalization to institutional Series A-C rounds',
    description:
      'Navigating fast burn rates, cap table modeling, R&D tax credit monetization, SaaS deferred revenue accounting, and institutional investor readiness.',
    challengesSolved: [
      'Complex ASC 606 revenue recognition for recurring subscriptions',
      'Maximizing payroll tax offsets via federal R&D credits',
      'Investor-grade monthly financial packages and pitch deck data',
      'Multi-currency contractor payouts across global hubs',
    ],
    keyMetric: '$1.4M+',
    keyMetricLabel: 'Average R&D Tax Credits Unlocked',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'professional-services',
    number: '03',
    title: 'Professional Services & Consulting',
    subtitle: 'Precision cost-per-hour and project profitability mechanics',
    description:
      'Specialized solutions for law firms, management consultancies, creative agencies, architecture practices, and high-tier medical groups.',
    challengesSolved: [
      'Trust accounting (IOLTA) and retainer reconciliations',
      'Utilization rate tracking and partner equity distributions',
      'Multi-jurisdictional billing across state boundaries',
      'High-earner S-Corp salary vs. distribution optimization',
    ],
    keyMetric: '28%',
    keyMetricLabel: 'Average Partner Yield Increase',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'retail-ecommerce',
    number: '04',
    title: 'Retail & Modern E-Commerce',
    subtitle: 'Omnichannel inventory valuation, sales tax nexus, and unit margins',
    description:
      'Integrating Shopify, Amazon, Stripe, and ERP platforms with inventory COGS accounting, multichannel sales tax filings, and working capital modeling.',
    challengesSolved: [
      'Complex Wayfair economic nexus thresholds in 45+ states',
      'Real-time inventory write-downs and landed cost accounting',
      'High merchant gateway fee reconciliation and chargeback accounting',
      'Peak seasonal inventory financing and cash flow bottlenecks',
    ],
    keyMetric: '100%',
    keyMetricLabel: 'Multi-State Sales Tax Compliance',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'construction-trades',
    number: '05',
    title: 'Construction & Real Estate Development',
    subtitle: 'Job costing, progress billing (AIA), and capital asset depreciation',
    description:
      'Mastering percentage-of-completion accounting, subcontractor 1099 tracking, equipment leasing schedules, and cost segregation studies.',
    challengesSolved: [
      'AIA G702/G703 progress billing and retainage tracking',
      'Accurate overhead allocation per active job site',
      'Equipment Section 179 accelerated depreciation deductions',
      'Prevailing wage certified payroll compliance',
    ],
    keyMetric: '14.2%',
    keyMetricLabel: 'Average Margin Improvement per Project',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'healthcare-biotech',
    number: '06',
    title: 'Healthcare & Medical Practices',
    subtitle: 'HIPAA-conscious practice management, equipment leasing, and revenue cycle',
    description:
      'Tailored fiscal governance for specialized medical practices, dental clinics, surgical centers, and clinical biotech innovators.',
    challengesSolved: [
      'Insurance payer reimbursement reconciliation & write-offs',
      'Medical equipment lease vs. buy tax impact analysis',
      'Practice acquisition due diligence & goodwill valuation',
      'Physician compensation structuring and retirement trust funding',
    ],
    keyMetric: '99.4%',
    keyMetricLabel: 'Reconciliation Cleanliness Rate',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'leader-1',
    name: '[Managing Partner Placeholder]',
    role: 'Managing Partner & Head of Tax Strategy',
    credentials: 'CPA, MST, Former Senior Manager Big 4',
    bio: 'Over 18 years orchestrating complex multi-state corporate tax strategies, cross-border entity formations, and high-value M&A transactional advisory.',
    specialties: ['Corporate Tax Architecture', 'Cross-Border M&A', 'Private Wealth Shielding'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    linkedin: 'https://linkedin.com/company/coretax-advisory',
  },
  {
    id: 'leader-2',
    name: '[Partner Name Placeholder]',
    role: 'Partner & Head of Advisory & CFO Services',
    credentials: 'CPA, CFA, Ex-Investment Banking',
    bio: 'Specializes in fractional CFO engagements, capital allocation models, institutional debt financing, and financial performance dashboards for fast-scaling companies.',
    specialties: ['Fractional CFO Services', 'Financial Scenario Modeling', 'Series A-C Prep'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    linkedin: 'https://linkedin.com/company/coretax-advisory',
  },
  {
    id: 'leader-3',
    name: '[Director Name Placeholder]',
    role: 'Director of Accounting & Assurance',
    credentials: 'CPA, CGMA, Audit Specialist',
    bio: 'Directs statutory accounting audits, GAAP/IFRS implementation, and automated cloud-ledger pipelines for national and international enterprises.',
    specialties: ['GAAP / IFRS Compliance', 'Internal Controls', 'Cloud Ledger Automation'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    linkedin: 'https://linkedin.com/company/coretax-advisory',
  },
  {
    id: 'leader-4',
    name: '[Director Name Placeholder]',
    role: 'Director of Payroll & Regulatory Compliance',
    credentials: 'CPP, SHRM-SCP',
    bio: 'Oversees high-volume domestic and international payroll infrastructures, benefits compliance, and corporate regulatory governance frameworks.',
    specialties: ['Multi-State Payroll', 'Executive Compensation', 'Statutory Filings'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    linkedin: 'https://linkedin.com/company/coretax-advisory',
  },
  {
    id: 'leader-5',
    name: '[Partner Name Placeholder]',
    role: 'Partner & International Tax Lead',
    credentials: 'LL.M. Taxation, CPA, Former Treasury Advisor',
    bio: 'Advises global technology firms on transfer pricing, OECD Pillar Two compliance, foreign tax credits, and cross-border IP structuring.',
    specialties: ['Transfer Pricing', 'Foreign Tax Credits', 'Global IP Architecture'],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
    linkedin: 'https://linkedin.com/company/coretax-advisory',
  },
  {
    id: 'leader-6',
    name: '[Director Name Placeholder]',
    role: 'Head of Business Valuation & M&A',
    credentials: 'ABV, ASA, MBA Wharton',
    bio: 'Performs formal 409A business valuations, intangible asset appraisals, and buy-side quality of earnings (QofE) due diligence reports.',
    specialties: ['409A Valuations', 'Quality of Earnings (QofE)', 'M&A Due Diligence'],
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    linkedin: 'https://linkedin.com/company/coretax-advisory',
  },
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    quote:
      'CoreTax gave us the clarity we needed to scale our Series B without financial friction. Their strategic counsel and R&D wage credit structuring delivered $340k in first-year cash offsets, completely changing how we plan runway.',
    clientName: '[Partner / Client Name Placeholder]',
    position: 'Chief Executive Officer',
    company: '[Enterprise Cloud Solutions Inc.]',
    industry: 'Enterprise Software & SaaS',
    metricHighlight: 'Saved $340k in first-year structured tax credits',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
    isPlaceholder: true,
  },
  {
    quote:
      'Transitioning 14 surgical clinics into a unified GAAP standard felt daunting until CoreTax stepped in. Their monthly closing packets are delivered by Day 3 with zero discrepancies, satisfying our institutional lenders.',
    clientName: '[Chief Financial Officer Placeholder]',
    position: 'Managing Director & Partner',
    company: '[Apex Medical Group Holdings]',
    industry: 'Healthcare & Specialized Medical Practices',
    metricHighlight: '100% Audit Compliance across 14 Regional Clinics',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop',
    isPlaceholder: true,
  },
  {
    quote:
      'Managing multi-state sales tax across 45 jurisdictions was our largest bottleneck. CoreTax automated our nexus filings, streamlined Wayfair compliance, and uncovered $190k in inventory depreciation optimizations.',
    clientName: '[Founder & COO Placeholder]',
    position: 'Founder & Chief Operating Officer',
    company: '[Aura Omnichannel Commerce Co.]',
    industry: 'E-Commerce & Omnichannel Retail',
    metricHighlight: '$190k Recovered via Multi-State Tax Architecture',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop',
    isPlaceholder: true,
  },
  {
    quote:
      'CoreTax manages portfolio-level financial due diligence and continuous CFO scenario modeling across our mid-market acquisitions. Their rigor and turnaround speed rival any Big 4 advisory practice.',
    clientName: '[Operating Partner Placeholder]',
    position: 'Operating Partner & Portfolio Director',
    company: '[Vanguard Equity Partners]',
    industry: 'Private Equity & Family Office Portfolio',
    metricHighlight: '$450M+ in Assets Under Continuous Advisory Oversight',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop',
    isPlaceholder: true,
  },
  {
    quote:
      'From AIA progress billing to heavy equipment depreciation under Section 179, CoreTax transformed our job-costing visibility. We boosted project gross margins by 4.2% across active commercial job sites.',
    clientName: '[Executive Director Placeholder]',
    position: 'Chief Financial Officer',
    company: '[Titan Infrastructure & Construction]',
    industry: 'Commercial Construction & Engineering',
    metricHighlight: '+4.2% Gross Margin Expansion Across Active Projects',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    isPlaceholder: true,
  },
];

export const TESTIMONIAL_DATA: TestimonialItem = TESTIMONIALS_LIST[0];

export const FAQ_LIST: FAQItem[] = [
  {
    question: 'What services does CoreTax provide?',
    category: 'Scope of Practice',
    answer:
      'CoreTax is a full-service firm providing corporate and individual accounting, federal and international tax planning, continuous bookkeeping, automated payroll management, fractional CFO advisory, institutional financial reporting, and statutory regulatory compliance.',
  },
  {
    question: 'Who do you work with?',
    category: 'Client Profile',
    answer:
      'We partner with growth-oriented small and mid-market enterprises, high-trajectory venture-backed startups, professional service firms (consultancies, legal, medical), retail & e-commerce brands, construction companies, and high-net-worth business owners.',
  },
  {
    question: 'Can you handle ongoing bookkeeping?',
    category: 'Operations',
    answer:
      'Yes. Our dedicated bookkeeping team conducts daily and weekly ledger synchronizations, AP/AR workflows, receipt verification, bank reconciliations, and provides monthly GAAP-compliant closing packages with zero lag.',
  },
  {
    question: 'Do you provide tax planning?',
    category: 'Tax Strategy',
    answer:
      'Proactive tax planning is the bedrock of our practice. Rather than simply filing after year-end, we structure your entity, review quarterly estimates, evaluate capital expenditure timing, and claim high-value deductions like R&D credits well before December 31.',
  },
  {
    question: 'Can you help new businesses?',
    category: 'Startups & Formation',
    answer:
      'Absolutely. We assist founders with optimal entity structuring (LLC vs S-Corp vs C-Corp), cap table design, initial chart of accounts setup, cloud accounting software deployment, and establishing compliance calendars from day one.',
  },
  {
    question: 'How do I get started?',
    category: 'Onboarding',
    answer:
      'Getting started takes 3 straightforward steps: Schedule an initial 30-minute consultation, provide your recent financial statements for a confidential diagnostic review, and receive a tailored engagement proposal detailing fixed monthly advisory or project scope.',
  },
  {
    question: 'What happens during a consultation?',
    category: 'Consultation',
    answer:
      'During your private consultation, a Senior Partner will review your current financial structure, identify immediate tax saving opportunities or compliance risks, understand your upcoming business objectives, and explain how CoreTax will deliver measurable ROI.',
  },
];
