import React from 'react';
import { Activity, ShieldCheck, BarChart3 } from 'lucide-react';

export const ParallelTrackSlide: React.FC = () => {
  const imageUrl = '/WhatsApp Image 2026-10-06 at 16.13.28.jpeg';

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-16 overflow-y-auto bg-[#07080a] text-[#f6f4ec]">
      {/* Brand Bar / Slide Number */}
      <div className="flex items-center justify-end">
        <span className="text-xs font-mono tracking-wider text-[#f6f4ec]/50">
          14 · Dashboard ao Vivo
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-1 sm:mt-2 text-center max-w-3xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#f6f4ec] leading-[1.04]">
          Dashboard de Acompanhamento ao Vivo
        </h2>
        <p className="mt-1 font-body text-xs sm:text-sm md:text-base text-[#f6f4ec]/75 font-normal leading-relaxed">
          O cliente acompanha de forma simultânea todas as campanhas, acessos, conversões e leads da operação em um único painel.
        </p>
      </div>

      {/* Main Image Showcase Frame */}
      <div className="my-auto py-2 sm:py-3 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl rounded-2xl bg-[#1b1c22] border border-white/15 p-2 sm:p-3 shadow-2xl overflow-hidden flex items-center justify-center">
          <img
            src={imageUrl}
            alt="Dashboard de Acompanhamento ao Vivo"
            className="w-full h-auto max-h-[60vh] sm:max-h-[66vh] object-contain rounded-xl"
            onError={(e) => {
              e.currentTarget.src = encodeURI(imageUrl);
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <span>Transparência total e acesso simultâneo aos dados da operação comercial</span>
        <span className="text-[#c6ff4d] font-mono font-semibold">Sense Sales Dashboard</span>
      </div>
    </div>
  );
};
