import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';

interface PageTransitionProps {
  isTransitioning: boolean;
  targetPage: PageId | null;
  onTransitionEnd: () => void;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  isTransitioning,
  targetPage,
  onTransitionEnd,
}) => {
  const [phase, setPhase] = useState<'idle' | 'covering' | 'revealing'>('idle');

  useEffect(() => {
    if (isTransitioning) {
      setPhase('covering');
      const timer1 = setTimeout(() => {
        setPhase('revealing');
      }, 450);

      const timer2 = setTimeout(() => {
        setPhase('idle');
        onTransitionEnd();
      }, 850);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isTransitioning, onTransitionEnd]);

  if (!isTransitioning && phase === 'idle') return null;

  return (
    <div
      id="cinematic-page-transition-overlay"
      className="fixed inset-0 z-50 pointer-events-none flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Deep Navy Backdrop Panel with Clip Path Curtain */}
      <motion.div
        className="absolute inset-0 bg-[#0D1631] flex flex-col items-center justify-center"
        initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
        animate={
          phase === 'covering'
            ? { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)' }
            : phase === 'revealing'
            ? { clipPath: 'polygon(0 0%, 100% 0%, 100% 0%, 0 0%)' }
            : { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }
        }
        transition={{
          duration: 0.42,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {/* Subtle Financial Background Grid inside transition */}
        <div className="absolute inset-0 bg-financial-grid-dark opacity-30 pointer-events-none" />

        {/* Center Monogram & Typography */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 1.05 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-4"
          >
            {/* CoreTax Monogram */}
            <div className="w-10 h-10 border border-[#4D99D3] flex items-center justify-center bg-[#4D99D3]/10">
              <span className="text-[#4D99D3] font-display font-extrabold text-xl tracking-tighter">
                C
              </span>
            </div>
            <span className="text-white font-display text-2xl font-bold tracking-tight">
              CORE<span className="text-[#4D99D3]">TAX</span>
            </span>
          </motion.div>

          {/* Animated Expanding Blue Line */}
          <motion.div
            className="h-[2px] bg-[#4D99D3] rounded-full shadow-[0_0_12px_#4D99D3]"
            initial={{ width: 0 }}
            animate={{ width: 140 }}
            transition={{ duration: 0.45, ease: 'easeInOut', delay: 0.1 }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-[11px] font-sans tracking-[0.25em] uppercase text-white/60 mt-3 font-medium"
          >
            {targetPage ? targetPage.toUpperCase() : 'PRECISION ADVISORY'}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};
