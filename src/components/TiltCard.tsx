import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
  scale?: number;
  id?: string;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 8,
  glare = true,
  scale = 1.02,
  id,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({
      x: rotateX,
      y: rotateY,
      glareX,
      glareY,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setTilt({
      x: 0,
      y: 0,
      glareX: 50,
      glareY: 50,
      opacity: 0,
    });
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${tilt.x !== 0 ? scale : 1}, ${tilt.x !== 0 ? scale : 1}, 1)`,
        transition: tilt.x === 0 ? 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none',
        transformStyle: 'preserve-3d',
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {glare && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            opacity: tilt.opacity,
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 60%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};
