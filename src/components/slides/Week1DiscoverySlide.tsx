import React from 'react';
import { Calendar } from 'lucide-react';

export const Week1DiscoverySlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#07080a]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f6f4ec]/70">
            Semana 1 · Início 15 de setembro
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#f6f4ec]/50">
          09 · Fase 1 — Estruturação
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#c6ff4d] mb-2 font-mono">
          <Calendar className="w-3.5 h-3.5" /> 15 a 21 de Setembro
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#f6f4ec] leading-[1.04]">
          Semana 1 — Discovery &amp; Posicionamento
        </h2>
        <p className="mt-3 font-body text-base sm:text-lg text-[#f6f4ec]/75 max-w-2xl font-normal leading-relaxed">
          Nenhuma campanha sobe sem clareza sobre quem compra imóveis de alto padrão e como a Dz Boutique quer ser vista.
        </p>
      </div>

      {/* 3 Detailed Items in Modern Rule-List Layout (without right mini titles) */}
      <div className="my-auto py-4 sm:py-6 space-y-3 sm:space-y-4 max-w-5xl">
        <div className="p-5 sm:p-6 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-4 hover:border-[#c6ff4d]/30 transition-colors">
          <span className="font-display text-2xl sm:text-3xl font-bold text-[#c6ff4d] min-w-[2.5rem]">
            01
          </span>
          <div>
            <h3 className="font-display text-lg sm:text-xl font-semibold text-[#f6f4ec]">
              Comprador Ideal
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#f6f4ec]/65 font-body leading-relaxed max-w-3xl">
              Perfis (investidores, famílias buscando exclusividade, executivos), desejos, critérios de localização e segurança jurídica.
            </p>
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-4 hover:border-[#c6ff4d]/30 transition-colors">
          <span className="font-display text-2xl sm:text-3xl font-bold text-[#c6ff4d] min-w-[2.5rem]">
            02
          </span>
          <div>
            <h3 className="font-display text-lg sm:text-xl font-semibold text-[#f6f4ec]">
              Mercado &amp; Diferencial
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#f6f4ec]/65 font-body leading-relaxed max-w-3xl">
              Análise de imobiliárias de luxo da região e definição do ângulo exclusivo da Dz Boutique.
            </p>
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-4 hover:border-[#c6ff4d]/30 transition-colors">
          <span className="font-display text-2xl sm:text-3xl font-bold text-[#c6ff4d] min-w-[2.5rem]">
            03
          </span>
          <div>
            <h3 className="font-display text-lg sm:text-xl font-semibold text-[#f6f4ec]">
              Posicionamento do Instagram
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#f6f4ec]/65 font-body leading-relaxed max-w-3xl">
              Diagnóstico do perfil atual, bio, destaques, linha editorial de alto padrão e formatos que geram desejo.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <span>Entrega final da Semana 1: Documento Master de Posicionamento &amp; Cronograma</span>
        <span className="text-[#c6ff4d]">Kick-off Imediato</span>
      </div>
    </div>
  );
};
