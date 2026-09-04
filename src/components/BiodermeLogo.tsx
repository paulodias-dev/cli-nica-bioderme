import React from 'react';

interface BiodermeLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'color' | 'white';
}

export const BiodermeLogo: React.FC<BiodermeLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'color'
}) => {
  const heightClass = {
    sm: 'h-10',
    md: 'h-12 md:h-14',
    lg: 'h-16 md:h-20'
  }[size];

  const isWhite = variant === 'white';

  return (
    <div className={`inline-flex items-center select-none ${className}`} id="bioderme-brand-logo">
      <svg
        viewBox="0 0 320 155"
        className={`${heightClass} w-auto`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Clínica Bioderme - Estética & Bem Estar"
      >
        {/* Dual Organic Petals */}
        <g transform="translate(18, 12)">
          {/* Left Petal */}
          <path
            d="M42 58 C28 55, 12 40, 14 20 C18 10, 30 2, 38 0 C32 14, 38 28, 44 42 C45 48, 44 54, 42 58 Z"
            fill={isWhite ? '#ffffff' : '#992662'}
          />
          <path
            d="M40 54 C30 50, 20 38, 22 22 C26 14, 34 6, 38 2 C34 14, 38 26, 42 38 Z"
            fill={isWhite ? '#ffffff' : '#b02e73'}
            opacity={isWhite ? 0.8 : 0.9}
          />
          {/* Right Petal */}
          <path
            d="M40 50 C44 32, 54 20, 72 16 C86 13, 98 18, 102 24 C90 28, 80 38, 70 48 C60 58, 48 56, 40 50 Z"
            fill={isWhite ? '#ffffff' : '#7d1e4e'}
          />
          <path
            d="M46 46 C52 32, 64 22, 80 19 C90 17, 98 22, 100 24 C88 28, 78 36, 70 44 C62 52, 52 50, 46 46 Z"
            fill={isWhite ? '#ffffff' : '#9f2563'}
            opacity={isWhite ? 0.9 : 0.9}
          />
          {/* Light center highlight */}
          <path
            d="M38 35 C42 28, 50 25, 60 26 C52 30, 46 36, 42 42 Z"
            fill={isWhite ? '#ffffff' : '#d45293'}
            opacity={0.6}
          />
        </g>

        {/* Text: Bioderme */}
        <g transform="translate(6, 114)">
          <text
            x="0"
            y="0"
            fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
            fontSize="54"
            fontWeight="400"
            letterSpacing="-0.5"
            fill={isWhite ? '#ffffff' : '#8f245c'}
          >
            Bio<tspan fill={isWhite ? '#ffffff' : '#8f245c'} fontWeight="300">derme</tspan>
          </text>
        </g>

        {/* Subtitle: Estética & Bem Estar */}
        <g transform="translate(48, 142)">
          <text
            x="60"
            y="0"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif"
            fontSize="14.5"
            fontWeight="400"
            letterSpacing="2.8"
            fill={isWhite ? '#e2e8f0' : '#33383f'}
          >
            Estética &amp; Bem Estar
          </text>
        </g>
      </svg>
    </div>
  );
};
