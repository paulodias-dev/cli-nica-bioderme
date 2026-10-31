import React from 'react';

interface BiodermeLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'color' | 'white';
}

export const BiodermeLogo: React.FC<BiodermeLogoProps> = ({
  className = '',
  size = 'md'
}) => {
  const heightClass = {
    sm: 'h-10',
    md: 'h-12 md:h-14',
    lg: 'h-16 md:h-20'
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`} id="bioderme-brand-logo">
      <img
        src="/bioderme-logo.png"
        className={`${heightClass} w-auto object-contain`}
        width="300"
        height="149"
        alt="Clínica Bioderme - Estética & Bem Estar"
        aria-label="Clínica Bioderme - Estética & Bem Estar"
      />
    </div>
  );
};
