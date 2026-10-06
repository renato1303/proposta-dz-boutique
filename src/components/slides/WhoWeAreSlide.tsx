import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WhoWeAreSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#f6f4ec]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0d2213]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#0d2213]/70">
            Quem é a Dz Boutique
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#0d2213]/50">
          02 · Imobiliária Boutique
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0d2213] max-w-4xl leading-[1.04]">
          Imóveis de alto padrão, curadoria exclusiva e atendimento refinado
        </h2>
        <p className="mt-3 font-body text-base sm:text-lg md:text-xl text-[#233d28] max-w-3xl font-normal leading-relaxed">
          Boutique imobiliária especializada em propriedades de luxo, oferecendo curadoria rigorosa, discrição e atendimento personalizado para clientes exigentes.
        </p>
      </div>

      {/* 3 Core Blocks */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {/* Block 1: Curadoria */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#0d2213]/12 hover:border-[#123a1d]/40 shadow-[0_8px_30px_rgba(13,34,19,0.04)] transition-all flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0d2213]">
              Curadoria &amp; Exclusividade
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#2d4732] leading-relaxed font-body">
              Portfólio selecionado de propriedades de alto padrão com localização privilegiada, design autoral e acabamentos de altíssima qualidade.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#0d2213]/10 space-y-2 text-xs text-[#0d2213]/90 font-medium font-body">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>Imóveis selecionados a dedo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>Localizações privilegiadas</span>
            </div>
          </div>
        </div>

        {/* Block 2: Atendimento Consultivo */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#0d2213]/12 hover:border-[#123a1d]/40 shadow-[0_8px_30px_rgba(13,34,19,0.04)] transition-all flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0d2213]">
              Atendimento Consultivo
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#2d4732] leading-relaxed font-body">
              Cada cliente recebe assessoria completa e personalizada para encontrar o imóvel ideal para seu estilo de vida ou objetivo de investimento.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#0d2213]/10 space-y-2 text-xs text-[#0d2213]/90 font-medium font-body">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>100% alinhado ao seu perfil</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>Discrição &amp; confidencialidade</span>
            </div>
          </div>
        </div>

        {/* Block 3: Assessoria Completa */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#0d2213]/12 hover:border-[#123a1d]/40 shadow-[0_8px_30px_rgba(13,34,19,0.04)] transition-all flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0d2213]">
              Assessoria Jurídica &amp; Fechamento
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#2d4732] leading-relaxed font-body">
              Suporte ponta a ponta desde a visita inicial até a segurança jurídica e a concretização do negócio com total tranquilidade.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-[#0d2213]/10 space-y-2 text-xs text-[#0d2213]/90 font-medium font-body">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>Segurança em cada etapa</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0" />
              <span>Zero burocracia desnecessária</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#0d2213]/15 flex items-center justify-between text-xs sm:text-sm text-[#0d2213]/65 font-body">
        <span>Curadoria, sofisticação e excelência em imóveis de alto padrão.</span>
        <span className="px-2.5 py-1 rounded-full bg-[#0d2213] text-[#c6ff4d] text-xs font-mono font-medium shadow-sm">
          Dz Boutique
        </span>
      </div>
    </div>
  );
};
