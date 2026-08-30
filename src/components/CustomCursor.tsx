import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface CursorState {
  x: number;
  y: number;
  text: string;
  isHovered: boolean;
  isPointer: boolean;
  isVisible: boolean;
}

export const CustomCursor: React.FC = () => {
  const [cursor, setCursor] = useState<CursorState>({
    x: -100,
    y: -100,
    text: '',
    isHovered: false,
    isPointer: false,
    isVisible: false,
  });

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check touch device
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest('[data-cursor], a, button, input, select, textarea');
      const cursorText = interactiveEl?.getAttribute('data-cursor') || '';
      const isInteractive = Boolean(interactiveEl);

      setCursor({
        x: e.clientX,
        y: e.clientY,
        text: cursorText,
        isHovered: Boolean(cursorText),
        isPointer: isInteractive && !cursorText,
        isVisible: true,
      });
    };

    const onMouseLeave = () => {
      setCursor((prev) => ({ ...prev, isVisible: false }));
    };

    const onMouseEnter = () => {
      setCursor((prev) => ({ ...prev, isVisible: true }));
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (isTouchDevice || !cursor.isVisible) {
    return null;
  }

  const isExpanded = cursor.isHovered || cursor.text.length > 0;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Glow / Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none"
        animate={{
          x: cursor.x - (isExpanded ? 40 : cursor.isPointer ? 24 : 12),
          y: cursor.y - (isExpanded ? 40 : cursor.isPointer ? 24 : 12),
          width: isExpanded ? 80 : cursor.isPointer ? 48 : 24,
          height: isExpanded ? 80 : cursor.isPointer ? 48 : 24,
          backgroundColor: isExpanded
            ? 'rgba(77, 153, 211, 0.95)'
            : cursor.isPointer
            ? 'rgba(77, 153, 211, 0.2)'
            : 'rgba(77, 153, 211, 0.15)',
          borderColor: isExpanded ? '#4D99D3' : 'rgba(77, 153, 211, 0.5)',
          borderWidth: isExpanded ? '0px' : '1px',
          backdropFilter: isExpanded ? 'blur(4px)' : 'none',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
      >
        {isExpanded && cursor.text && (
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D1631] select-none text-center px-1 font-sans">
            {cursor.text}
          </span>
        )}
      </motion.div>

      {/* Tiny Core Dot */}
      {!isExpanded && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#4D99D3] pointer-events-none"
          animate={{
            x: cursor.x - 3,
            y: cursor.y - 3,
            scale: cursor.isPointer ? 0 : 1,
            opacity: cursor.isPointer ? 0 : 1,
          }}
          transition={{
            type: 'spring',
            damping: 35,
            stiffness: 600,
          }}
        />
      )}
    </div>
  );
};
