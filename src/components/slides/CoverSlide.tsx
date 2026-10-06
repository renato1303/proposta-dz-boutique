import React from 'react';
import { AsteriskDeco } from '../AsteriskDeco';
import { SLIDES_CONFIG } from '../../data/slidesData';

interface CoverSlideProps {
  onNext?: () => void;
}

export const CoverSlide: React.FC<CoverSlideProps> = () => {
  const coverData = SLIDES_CONFIG[0];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden">
      {/* Decorative Top-Right Asterisk */}
      <div className="absolute top-8 right-8 sm:top-12 sm:right-12 md:top-14 md:right-16 opacity-90 transition-transform duration-700 hover:rotate-90">
        <AsteriskDeco size="clamp(42px, 6vw, 76px)" color="#c6ff4d" />
      </div>

      {/* Subtle Background Glow Accent */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#123a1d]/30 blur-3xl pointer-events-none" />

      {/* Header / Kicker */}
      <div className="flex items-center gap-3">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#c6ff4d] animate-pulse" />
        <span className="font-body text-xs sm:text-sm md:text-base tracking-wider uppercase font-medium text-[#f6f4ec]/70">
          {coverData.kicker}
        </span>
      </div>

      {/* Main Title Area */}
      <div className="my-auto max-w-4xl py-4 sm:py-6">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.98] text-[#f6f4ec]">
          <span className="text-[#c6ff4d] block">Proposta</span>
          <span>Comercial</span>
        </h1>
        <p className="mt-4 sm:mt-6 font-body text-lg sm:text-xl md:text-2xl text-[#f6f4ec]/75 max-w-2xl font-normal leading-relaxed">
          Estratégia de aquisição e posicionamento
        </p>
      </div>

      {/* Footer Info Bar */}
      <div className="pt-4 sm:pt-6 border-t border-white/15 flex items-center justify-end text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <span>Outubro de 2026</span>
      </div>
    </div>
  );
};
