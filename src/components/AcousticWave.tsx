import React from 'react';

interface AcousticWaveProps {
  className?: string;
  variant?: 'arcs' | 'wave' | 'rings' | 'subtle-bars';
  color?: string;
}

export const AcousticWave: React.FC<AcousticWaveProps> = ({
  className = 'w-full h-12',
  variant = 'wave',
  color = 'currentColor',
}) => {
  if (variant === 'arcs') {
    return (
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <circle cx="80" cy="80" r="16" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
        <circle cx="80" cy="80" r="36" stroke={color} strokeWidth="1.25" strokeOpacity="0.3" strokeDasharray="3 4" />
        <circle cx="80" cy="80" r="56" stroke={color} strokeWidth="1.25" strokeOpacity="0.2" />
        <circle cx="80" cy="80" r="76" stroke={color} strokeWidth="1" strokeOpacity="0.12" strokeDasharray="4 6" />
      </svg>
    );
  }

  if (variant === 'rings') {
    return (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M30 100 A70 70 0 0 1 170 100"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.35"
        />
        <path
          d="M50 100 A50 50 0 0 1 150 100"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.5"
        />
        <path
          d="M70 100 A30 30 0 0 1 130 100"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.75"
        />
        <circle cx="100" cy="100" r="6" fill={color} fillOpacity="0.85" />
      </svg>
    );
  }

  if (variant === 'subtle-bars') {
    return (
      <div className={`flex items-center gap-1 ${className}`} aria-hidden="true">
        {[8, 14, 22, 30, 20, 36, 44, 28, 16, 24, 38, 48, 32, 18, 12, 6].map((h, idx) => (
          <span
            key={idx}
            style={{ height: `${h}px` }}
            className="w-1 rounded-full bg-current opacity-30 transition-all duration-300 hover:opacity-80"
          />
        ))}
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 800 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 60 C120 20, 200 100, 340 60 C460 25, 540 95, 660 55 C730 30, 770 70, 800 60"
        stroke={color}
        strokeWidth="1.5"
        strokeOpacity="0.28"
      />
      <path
        d="M0 60 C90 85, 220 30, 360 65 C480 95, 590 35, 710 65 C760 78, 785 45, 800 60"
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity="0.18"
        strokeDasharray="4 4"
      />
    </svg>
  );
};
