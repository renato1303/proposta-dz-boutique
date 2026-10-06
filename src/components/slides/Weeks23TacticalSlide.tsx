import React from 'react';
import { Layout, Share2, DollarSign, Globe, Database, MessageCircle, Check } from 'lucide-react';

export const Weeks23TacticalSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#0d2213]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f6f4ec]/70">
            Semanas 2 e 3 · Tático
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#f6f4ec]/50">
          10 · Fase 1 — Estruturação
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f6f4ec] leading-[1.04]">
          Semanas 2 e 3 — Infraestrutura
        </h2>
        <p className="mt-3 font-body text-base sm:text-lg text-[#f6f4ec]/75 max-w-2xl font-normal leading-relaxed">
          Estruturação da base de captação e anúncios: Criativos, página de alta conversão e time de corretores alinhados.
        </p>
      </div>

      {/* Two-Column Tactical Architecture */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Column 1: Mídia & Conteúdo */}
        <div className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#c6ff4d] font-semibold flex items-center gap-1.5 mb-4">
              <Share2 className="w-4 h-4" /> Frente de Mídia &amp; Conteúdo
            </span>
            <div className="space-y-4">
              <div>
                <p className="text-sm sm:text-base text-[#f6f4ec]/90 mt-2 font-body leading-relaxed">
                  Orientação de Criação de conteúdos para anúncios, briefing e roteiros de tours e vídeos, roteiros que podem ser adaptados e utilizados no perfil do instagram; divisão de orçamento entre Meta e Google.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-white/10 text-xs text-[#c6ff4d] font-medium">
            Alinhamento de Marca &amp; Tráfego
          </div>
        </div>

        {/* Column 2: Frente técnica */}
        <div className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#c6ff4d] font-semibold flex items-center gap-1.5 mb-4">
              <Database className="w-4 h-4" /> Frente técnica
            </span>
            <div className="space-y-4">
              <div>
                <p className="text-sm sm:text-base text-[#f6f4ec]/90 mt-2 font-body leading-relaxed">
                  Rastreamento (Meta CAPI + GA4); formulário de pré qualificação.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-3 border-t border-white/10 text-xs text-[#c6ff4d] font-medium">
            Infraestrutura 100% Validada
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <span>Toda a stack técnica validada e testada antes de rodar orçamento.</span>
        <span className="text-[#c6ff4d]">Zero Falhas de Conversão</span>
      </div>
    </div>
  );
};
