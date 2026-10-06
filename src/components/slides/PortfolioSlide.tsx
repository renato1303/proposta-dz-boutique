import React from 'react';
import { PORTFOLIO_ITEMS } from '../../data/slidesData';

interface PortfolioSlideProps {
  index: number;
}

export const PortfolioSlide: React.FC<PortfolioSlideProps> = ({ index }) => {
  const item = PORTFOLIO_ITEMS[index] || PORTFOLIO_ITEMS[0];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden bg-[#eaeaea]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0d2213]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#0d2213]/70">
            Portfólio
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#0d2213]/50">
          {item.brandbar}
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-1 sm:mt-2 flex flex-col md:flex-row md:items-end justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-[#0d2213]/60 uppercase tracking-wider font-semibold">
              {item.tag}
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d2213] leading-[1.04]">
            {item.title}
          </h2>
          <p className="mt-1 font-body text-xs sm:text-sm md:text-base text-[#233d28] max-w-3xl font-normal leading-relaxed">
            {item.subtitle}
          </p>
        </div>
      </div>

      {/* Main Single-Image Showcase Frame */}
      <div className="my-auto py-2 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl bg-[#eaeaea] flex items-center justify-center p-1 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            style={{ clipPath: 'inset(0 0 0 16px)' }}
            className="w-full h-auto max-h-[46vh] sm:max-h-[52vh] object-contain scale-[1.02]"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-[#0d2213]/15 flex items-center justify-between text-xs sm:text-sm text-[#0d2213]/70 font-body">
        <span>Histórico de marcas aceleradas com metodologia de alta performance</span>
        <span className="text-xs font-mono text-[#0d2213]/60 font-medium">
          Painel 0{index + 1} / 03
        </span>
      </div>
    </div>
  );
};
