import React from 'react';
import { BellRing, CheckSquare } from 'lucide-react';

export const Month3LaunchSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#07080a]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f6f4ec]/70">
            Fase 3 · Escala
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#f6f4ec]/50">
          13 · Meses 4 e 5
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f6f4ec] max-w-4xl leading-[1.04]">
          Meses 4 e 5 — Escala
        </h2>
        <p className="mt-3 font-body text-base sm:text-lg md:text-xl text-[#f6f4ec]/75 max-w-3xl font-normal leading-relaxed">
          Consolidação dos resultados: intensificamos investimento nos melhores criativos e reimpactamos quem demonstrou interesse.
        </p>
      </div>

      {/* 2 Chronological Milestones */}
      <div className="my-auto py-6 sm:py-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto w-full">
        <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/10 text-[#c6ff4d]">
                Performance
              </span>
              <BellRing className="w-6 h-6 text-[#c6ff4d]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#f6f4ec]">
              Foco no que Funciona
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#f6f4ec]/65 leading-relaxed font-body">
              Mais verba nos criativos e públicos vencedores.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#c6ff4d] font-mono font-semibold">
            Eficiência &amp; Escala
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/10 text-[#c6ff4d]">
                Retargeting &amp; Follow Up
              </span>
              <CheckSquare className="w-6 h-6 text-[#c6ff4d]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#f6f4ec]">
              remarketing + follow up
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#f6f4ec]/65 leading-relaxed font-body">
              Reimpacto de quem entrou no funil nos últimos 30,60 e 90 dias. E follow up por parte dos corretores.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#c6ff4d] font-mono font-semibold">
            Conversão de Leads
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <span>Fechamos o ciclo com dados e plano de continuidade</span>
        <span className="text-[#c6ff4d]">Resultados Reais</span>
      </div>
    </div>
  );
};
