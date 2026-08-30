import React, { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MagneticButtonProps {
  id?: string;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'navy' | 'outline' | 'ghost' | 'soft' | 'white';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
  cursorLabel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  rounded?: 'full' | 'xl' | 'lg';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  id,
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  showArrow = true,
  className = '',
  cursorLabel,
  type = 'button',
  disabled = false,
  rounded = 'full',
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Magnetic pull displacement (8-12px range)
    const deltaX = (clientX - centerX) * 0.28;
    const deltaY = (clientY - centerY) * 0.28;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseEnter = () => {
    if (!disabled) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        // Starts with Primary Blue, on hover fills with deep navy or vibrant indigo-white glow
        return {
          container: 'bg-[#4D99D3] text-[#0D1631] border border-[#4D99D3] shadow-[0_4px_14px_rgba(77,153,211,0.25)] hover:shadow-[0_10px_30px_rgba(77,153,211,0.45)] hover:border-[#63B3ED]',
          hoverBg: 'bg-[#0D1631]',
          hoverTextColor: 'group-hover:text-white',
          arrowColor: 'group-hover:text-[#4D99D3]',
        };
      case 'navy':
        // Starts with Deep Navy, on hover fills with primary blue
        return {
          container: 'bg-[#0D1631] text-white border border-white/15 shadow-[0_4px_16px_rgba(13,22,49,0.35)] hover:shadow-[0_12px_32px_rgba(77,153,211,0.3)] hover:border-[#4D99D3]/60',
          hoverBg: 'bg-[#4D99D3]',
          hoverTextColor: 'group-hover:text-[#0D1631]',
          arrowColor: 'group-hover:text-[#0D1631]',
        };
      case 'outline':
        // Outline button on hover fills with cyan blue
        return {
          container: 'bg-transparent text-white border border-white/25 hover:border-[#4D99D3] hover:shadow-[0_8px_24px_rgba(77,153,211,0.2)]',
          hoverBg: 'bg-[#4D99D3]',
          hoverTextColor: 'group-hover:text-[#0D1631]',
          arrowColor: 'group-hover:text-[#0D1631]',
        };
      case 'white':
        return {
          container: 'bg-white text-[#0D1631] border border-[#0D1631]/10 shadow-sm hover:shadow-lg',
          hoverBg: 'bg-[#4D99D3]',
          hoverTextColor: 'group-hover:text-[#0D1631]',
          arrowColor: 'group-hover:text-[#0D1631]',
        };
      case 'soft':
        return {
          container: 'bg-[#EAF4FB] text-[#0D1631] border border-[#4D99D3]/20 hover:border-[#4D99D3]/60 hover:shadow-md',
          hoverBg: 'bg-[#0D1631]',
          hoverTextColor: 'group-hover:text-white',
          arrowColor: 'group-hover:text-[#4D99D3]',
        };
      case 'ghost':
        return {
          container: 'bg-transparent text-[#0D1631] border border-transparent hover:border-[#4D99D3]/30',
          hoverBg: 'bg-[#EAF4FB]',
          hoverTextColor: 'group-hover:text-[#0D1631]',
          arrowColor: 'group-hover:text-[#4D99D3]',
        };
      default:
        return {
          container: 'bg-[#4D99D3] text-[#0D1631]',
          hoverBg: 'bg-[#0D1631]',
          hoverTextColor: 'group-hover:text-white',
          arrowColor: 'group-hover:text-[#4D99D3]',
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'text-xs px-4 py-2 gap-1.5 min-h-[38px]';
      case 'lg':
        return 'text-sm sm:text-base px-8 py-4 gap-3 min-h-[54px]';
      case 'md':
      default:
        return 'text-xs sm:text-sm px-6 py-3 gap-2 min-h-[46px]';
    }
  };

  const getRoundedStyles = () => {
    switch (rounded) {
      case 'xl':
        return 'rounded-xl';
      case 'lg':
        return 'rounded-lg';
      case 'full':
      default:
        return 'rounded-full';
    }
  };

  const styles = getVariantStyles();

  return (
    <button
      id={id}
      ref={buttonRef}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor={cursorLabel}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.2, 1, 0.3, 1)' : 'none',
      }}
      className={`group relative inline-flex items-center justify-center overflow-hidden font-display tracking-tight whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ${styles.container} ${getSizeStyles()} ${getRoundedStyles()} ${className}`}
    >
      {/* Dynamic Expanding Background on Hover */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full ${styles.hoverBg} transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-bottom ${
          isHovered ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      />

      {/* Button Text Label with Smooth Color Shift */}
      <span
        className={`relative z-10 font-bold uppercase tracking-wider text-[11px] sm:text-[12px] transition-colors duration-300 ${styles.hoverTextColor}`}
      >
        {children}
      </span>

      {/* Trailing Icon with Subtle Rotation & Translate */}
      {showArrow && (
        <ArrowUpRight
          className={`relative z-10 w-4 h-4 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 ${styles.arrowColor}`}
        />
      )}
    </button>
  );
};
