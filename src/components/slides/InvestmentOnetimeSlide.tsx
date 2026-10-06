import React from 'react';
import { PRICING_OPTIONS } from '../../data/slidesData';

export const InvestmentOnetimeSlide: React.FC = () => {
  const onetimePlan = PRICING_OPTIONS.find(p => p.type === 'onetime') || PRICING_OPTIONS[1];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#0a0f0a] text-[#f6f4ec]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#f6f4ec]/75">
            Investimento Comercial · Condição Especial
          </span>
        </div>
        <span className="text-xs font-mono font-bold tracking-wider text-[#c6ff4d]/80">
          16 · Pagamento À Vista
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-3 sm:mt-5 text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f6f4ec] leading-[1.04]">
          Pagamento Integral
        </h2>
      </div>

      {/* Isolated Big Pricing Card with Floating Tab */}
      <div className="my-auto py-4 sm:py-6 flex justify-center">
        <div className="relative w-full max-w-2xl p-8 sm:p-10 pt-10 sm:pt-12 rounded-3xl bg-white/[0.04] border-2 border-[#c6ff4d]/50 shadow-[0_20px_60px_rgba(198,255,77,0.15)] flex flex-col justify-between backdrop-blur-sm mt-6">
          {/* Floating Top Tab / Ribbon */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-1.5 rounded-full bg-[#c6ff4d] text-[#0a0f0a] font-display text-xs sm:text-sm font-black tracking-wider uppercase shadow-lg shadow-[#c6ff4d]/40 border border-white/25">
            Economia de R$ 2.000
          </div>

          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10 gap-4 flex-wrap">
              <div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#c6ff4d] font-mono">
                  Modalidade À Vista
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                  Valor Único
                </h3>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-4xl sm:text-5xl font-black text-[#c6ff4d] tracking-tight">
                  {onetimePlan.amount}
                </span>
              </div>
            </div>

            <p className="mt-6 text-base sm:text-lg text-white/90 font-body leading-relaxed">
              {onetimePlan.description}
            </p>
          </div>

          <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-white/70">
            <span className="font-mono">Contrato Integral</span>
            <span className="font-mono text-white/50">Sense Sales × Dz Boutique Imobiliária</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/60 font-body">
        <span>* O orçamento de mídia é faturado diretamente pelas plataformas sem markup.</span>
        <span className="text-[#c6ff4d] font-semibold">Sense Sales × Dz Boutique Imobiliária</span>
      </div>
    </div>
  );
};
