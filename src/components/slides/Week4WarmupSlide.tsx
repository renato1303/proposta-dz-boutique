import React from 'react';
import { PlayCircle, Users2, LineChart, ShieldCheck } from 'lucide-react';

export const Week4WarmupSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#07080a]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f6f4ec]/70">
            Semana 4 · Conclusão da Fase 1
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#f6f4ec]/50">
          11 · Fase 1 — Estruturação
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#f6f4ec] leading-[1.04]">
          Semana 4 — De pé para a tração
        </h2>
        <p className="mt-3 font-body text-base sm:text-lg text-[#f6f4ec]/75 max-w-2xl font-normal leading-relaxed">
          Com a infraestrutura pronta, ligamos as primeiras campanhas em modo teste e alinhamos os aprendizados na Reunião de Sprint 01.
        </p>
      </div>

      {/* 2 Strategic Blocks */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl">
        <div className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#c6ff4d]">
                01
              </span>
              <span className="p-2.5 rounded-lg bg-[#c6ff4d]/10 text-[#c6ff4d]">
                <PlayCircle className="w-5 h-5" />
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#f6f4ec]">
              Start das Campanhas
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#f6f4ec]/70 font-body leading-relaxed">
              Primeiros anúncios no ar pra validar ganchos criativos e calibrar o pixel.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#c6ff4d] font-mono">
            <span>Validação de Audiência</span>
            <span>Primeiros Dados Reais</span>
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#c6ff4d]">
                02
              </span>
              <span className="p-2.5 rounded-lg bg-[#c6ff4d]/10 text-[#c6ff4d]">
                <Users2 className="w-5 h-5" />
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#f6f4ec]">
              Reunião de Sprint 01
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#f6f4ec]/70 font-body leading-relaxed">
              Relatório de infraestrutura, primeiros números e aprovação do plano do Mês 2.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#c6ff4d] font-mono">
            <span>Apresentação Executiva</span>
            <span>Luz Verde para Tração</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <span>Fim da Fase 1: Fundação testada e pronta para tração</span>
        <span className="text-[#c6ff4d]">Passagem para o Mês 2</span>
      </div>
    </div>
  );
};
