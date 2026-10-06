import React from 'react';
import { Rocket, ShoppingBag, Youtube, DollarSign } from 'lucide-react';

export const VisionSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#07080a]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c6ff4d]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f6f4ec]/70">
            Visão de Futuro · Próximo Passo
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#f6f4ec]/50">
          15 · Visão de Futuro
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#c6ff4d] mb-2 font-mono">
          <Rocket className="w-3.5 h-3.5" /> Do tour à expansão
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f6f4ec] max-w-4xl leading-[1.04]">
          Do tour virtual à expansão: o próximo passo
        </h2>
        <p className="mt-3 font-body text-base sm:text-lg md:text-xl text-[#f6f4ec]/75 max-w-3xl font-normal leading-relaxed">
          A captação de alto padrão é o primeiro motor. Com vendas consistentes gerando caixa, o próximo passo é expandir para novas praças e verticais de investimento imobiliário.
        </p>
      </div>

      {/* 3 Chronological Steps */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {/* Step 1 */}
        <div className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#c6ff4d]">
                01
              </span>
              <span className="p-2.5 rounded-lg bg-[#c6ff4d]/10 text-[#c6ff4d]">
                <DollarSign className="w-5 h-5" />
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#f6f4ec]">
              Gerar Caixa
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#f6f4ec]/70 leading-relaxed font-body">
              Tráfego pago e Instagram trazem compradores de alto padrão para sustentar o crescimento.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#c6ff4d] font-mono font-semibold">
            <span>Foco atual</span>
            <span>Imóveis Exclusivos</span>
          </div>
        </div>

        {/* Step 2 */}
        <div className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#c6ff4d]">
                02
              </span>
              <span className="p-2.5 rounded-lg bg-[#c6ff4d]/10 text-[#c6ff4d]">
                <Youtube className="w-5 h-5" />
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#f6f4ec]">
              Fortalecer Autoridade
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#f6f4ec]/70 leading-relaxed font-body">
              O canal ganha retenção e audiência, formando a base de investidores qualificados.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#c6ff4d] font-mono font-semibold">
            <span>Em paralelo</span>
            <span>Audiência Qualificada</span>
          </div>
        </div>

        {/* Step 3 */}
        <div className="p-6 sm:p-8 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c6ff4d]/40 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#c6ff4d]">
                03
              </span>
              <span className="p-2.5 rounded-lg bg-[#c6ff4d]/10 text-[#c6ff4d]">
                <ShoppingBag className="w-5 h-5" />
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#f6f4ec]">
              Expandir Operação
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#f6f4ec]/70 leading-relaxed font-body">
              Com volume e caixa consolidados, expandimos a atuação para novas regiões e portfólio exclusivo.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#c6ff4d] font-mono font-semibold">
            <span>Etapa seguinte</span>
            <span>Novas Praças</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm text-[#f6f4ec]/60 font-body">
        <span>A expansão só começa depois que a operação principal estiver escalando</span>
        <span className="text-[#c6ff4d]">Sequência Estratégica</span>
      </div>
    </div>
  );
};
