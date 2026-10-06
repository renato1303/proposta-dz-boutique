import React from 'react';
import { Target, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

export const ContextSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#0d2213]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f6f4ec]/70">
            Contexto &amp; Oportunidade
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#f6f4ec]/50">
          07 · Contexto
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f6f4ec] max-w-3xl leading-[1.05]">
          Leads qualificados, sem depender apenas de portais.
        </h2>
        <p className="mt-3 sm:mt-4 font-body text-base sm:text-lg md:text-xl text-[#f6f4ec]/75 max-w-2xl font-normal leading-relaxed">
          Hoje a Dz Boutique já investe em tráfego pago mas sem um direcionamento e uma estratégia bem alinhado. Com uma estratégia definida e um comercial alinhado, a imobiliária passa a ter um fluxo previsível de leads chegando do funil.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-5 sm:p-6 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-semibold text-[#f6f4ec]">
              O gargalo
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#f6f4ec]/65 leading-relaxed font-body">
              Tráfego sem estratégia e direcionamento , a captação de leads é instável e imprevisível .
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10 text-xs text-red-300/80 font-medium">
            Captação instável
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-xl bg-white/[0.04] border border-[#c6ff4d]/20 relative flex flex-col justify-between">
          <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-[#c6ff4d] text-[#0a0f0a] text-[11px] font-bold tracking-wide uppercase">
            A Estratégia
          </div>
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#c6ff4d]/10 border border-[#c6ff4d]/20 flex items-center justify-center text-[#c6ff4d] mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-semibold text-[#f6f4ec]">
              O Efeito Catalisador
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#f6f4ec]/65 leading-relaxed font-body">
              Tráfego com estratégia, instagram estruturado, CRM e comercial bem alinhados.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10 text-xs text-[#c6ff4d] font-medium">
            Tráfego + Instagram + Comercial
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-semibold text-[#f6f4ec]">
              O Resultado Prático
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#f6f4ec]/65 leading-relaxed font-body">
              Leads qualificados caindo direto no WhatsApp dos corretores da Dz Boutique.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10 text-xs text-emerald-300/80 font-medium">
            Mais vendas, menos leads frios
          </div>
        </div>
      </div>

      {/* Footer Tagline */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <span>Foco: Previsibilidade de captação e autoridade digital</span>
        <span className="hidden sm:inline-block text-[#c6ff4d]">Sense Sales Methodology</span>
      </div>
    </div>
  );
};
