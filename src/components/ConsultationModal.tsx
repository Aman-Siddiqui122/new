import React, { useState } from 'react';
import { X, Check, ArrowRight, Shield, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MagneticButton } from './MagneticButton';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const SERVICES_OPTIONS = [
  'Corporate Accounting & Financial Governance',
  'Strategic Corporate Taxation & Planning',
  'Continuous Cloud Bookkeeping & Reconciliations',
  'Multi-State & International Payroll',
  'Fractional CFO & Business Advisory',
  'Tax Planning & Entity Restructuring',
  'Statutory Regulatory Compliance',
];

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : [SERVICES_OPTIONS[0]]
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    annualRevenue: '$1M – $5M',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== svc));
      }
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#4D99D3', '#0D1631', '#FFFFFF', '#EAF4FB'],
      });
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      id="consultation-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#0D1631]/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="consultation-modal-card"
        className="relative w-full max-w-3xl rounded-3xl bg-[#0D1631] text-white border border-[#4D99D3]/30 shadow-2xl p-6 sm:p-10 my-auto overflow-hidden"
      >
        {/* Abstract Corner Light Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4D99D3]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4D99D3]/5 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          id="close-consultation-modal"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-8 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-widest text-[#4D99D3] font-semibold font-mono mb-2">
                <span className="w-2 h-2 rounded-full bg-[#4D99D3] animate-pulse" />
                <span>CONFIDENTIAL ADVISORY INTAKE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mt-1">
                Schedule a Strategic Financial Consultation
              </h2>
              <p className="text-sm text-white/70 mt-1.5 leading-relaxed font-desc">
                Connect directly with a Senior Partner to discuss your tax optimization, continuous bookkeeping, or advisory needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/80 font-medium mb-2.5 font-mono">
                  Select Areas of Interest
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES_OPTIONS.map((svc) => {
                    const isSelected = selectedServices.includes(svc);
                    return (
                      <button
                        key={svc}
                        type="button"
                        onClick={() => toggleService(svc)}
                        className={`text-left p-3 rounded-xl text-xs transition-all border flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-[#4D99D3]/20 border-[#4D99D3] text-white font-medium shadow-[0_0_12px_rgba(77,153,211,0.2)]'
                            : 'bg-white/5 border-white/10 text-white/70 hover:border-white/30 hover:bg-white/10'
                        }`}
                      >
                        <span className="truncate pr-2 font-desc">{svc}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#4D99D3] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 font-medium mb-1.5 font-mono">
                    Full Name *
                  </label>
                  <input
                    id="modal-input-name"
                    required
                    type="text"
                    placeholder="e.g. Alexander Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#4D99D3] focus:bg-white/10 transition-colors font-desc"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 font-medium mb-1.5 font-mono">
                    Corporate Email *
                  </label>
                  <input
                    id="modal-input-email"
                    required
                    type="email"
                    placeholder="alexander@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#4D99D3] focus:bg-white/10 transition-colors font-desc"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 font-medium mb-1.5 font-mono">
                    Company / Entity Name
                  </label>
                  <input
                    id="modal-input-company"
                    type="text"
                    placeholder="e.g. Vance Capital & Tech"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#4D99D3] focus:bg-white/10 transition-colors font-desc"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 font-medium mb-1.5 font-mono">
                    Annual Revenue Range
                  </label>
                  <select
                    id="modal-select-revenue"
                    value={formData.annualRevenue}
                    onChange={(e) => setFormData({ ...formData, annualRevenue: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0D1631] border border-white/15 text-sm text-white focus:outline-none focus:border-[#4D99D3] transition-colors font-desc"
                  >
                    <option value="Pre-Revenue / Seed">Pre-Revenue / Seed Stage</option>
                    <option value="$500k – $1M">$500k – $1M ARR</option>
                    <option value="$1M – $5M">$1M – $5M ARR</option>
                    <option value="$5M – $20M">$5M – $20M ARR</option>
                    <option value="$20M+">$20M+ Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/70 font-medium mb-1.5 font-mono">
                  Brief Context or Key Objective (Optional)
                </label>
                <textarea
                  id="modal-textarea-notes"
                  rows={3}
                  placeholder="e.g. Preparing for Series A, seeking R&D credit optimization and multi-entity tax structuring..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#4D99D3] focus:bg-white/10 transition-colors resize-none font-desc"
                />
              </div>

              {/* Guarantees Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-white/60 border-t border-white/10 font-mono">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#4D99D3]" />
                  <span>Strict NDA & Fiduciary Confidentiality</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#4D99D3]" />
                  <span>Response within 4 Business Hours</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 rounded-full text-xs uppercase font-semibold text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <MagneticButton
                  id="submit-consultation-btn"
                  type="submit"
                  variant="primary"
                  size="md"
                  rounded="full"
                  disabled={isSubmitting}
                  cursorLabel="SUBMIT"
                >
                  {isSubmitting ? 'Securing Priority Slot...' : 'Confirm Consultation Request'}
                </MagneticButton>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-10 px-4 space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4D99D3]/20 border border-[#4D99D3] text-[#4D99D3] mb-2 animate-bounce">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Consultation Request Received
            </h3>
            <p className="text-sm text-white/80 max-w-md mx-auto leading-relaxed font-desc">
              Thank you, <strong className="text-white">{formData.name || 'valued partner'}</strong>. A Senior Partner at CoreTax has been assigned to your profile and will contact you via <strong className="text-[#4D99D3]">{formData.email}</strong> within 4 business hours with your private calendar link and diagnostic checklist.
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs text-white/70 space-y-1 font-desc">
              <p><strong className="text-white">Selected Scope:</strong> {selectedServices.join(', ')}</p>
              <p><strong className="text-white">Entity:</strong> {formData.company || 'Private Entity'}</p>
              <p><strong className="text-white">Direct Line:</strong> +1 (800) 555-CORE (Suite 4800)</p>
            </div>
            <div className="pt-4">
              <MagneticButton
                id="close-modal-confirm-btn"
                variant="primary"
                rounded="full"
                onClick={handleReset}
                showArrow={false}
              >
                Return to Experience
              </MagneticButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
