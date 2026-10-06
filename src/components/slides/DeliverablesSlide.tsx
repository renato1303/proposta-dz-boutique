import React from 'react';
import { DELIVERABLES_LIST } from '../../data/slidesData';
import { Check } from 'lucide-react';

export const DeliverablesSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden bg-[#f6f4ec]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0d2213]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#0d2213]/70">
            Escopo Contratual &amp; Entregas
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#0d2213]/50">
          14 · Entregáveis
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-2 sm:mt-4">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0d2213] leading-[1.04]">
          Entregáveis da proposta
        </h2>
      </div>

      {/* Clean List fitting on screen without scroll */}
      <div className="my-auto py-2 flex flex-col gap-1.5 sm:gap-2">
        {DELIVERABLES_LIST.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 py-1.5 border-b border-[#0d2213]/8 last:border-b-0"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-4 h-4 rounded-full bg-[#0d2213] text-[#c6ff4d] flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span className="font-display text-xs sm:text-sm font-bold text-[#0d2213] truncate">
                {item.title}
              </span>
              <span className="hidden sm:inline text-xs text-[#233d28]/70 font-body truncate max-w-md">
                — {item.detail}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
