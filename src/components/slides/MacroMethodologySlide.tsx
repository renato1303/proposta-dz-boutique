import React, { useState } from 'react';
import { PHASES_DATA } from '../../data/slidesData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const MacroMethodologySlide: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden bg-[#f6f4ec]">
      {/* Brand Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0d2213]" />
          <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#0d2213]/70">
            Metodologia &amp; Roadmap
          </span>
        </div>
        <span className="text-xs font-mono tracking-wider text-[#0d2213]/50">
          07 · Três Fases
        </span>
      </div>

      {/* Slide Head */}
      <div className="mt-4 sm:mt-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0d2213] max-w-3xl leading-[1.05]">
          Três fases, do Start à Escala
        </h2>
        <p className="mt-3 sm:mt-4 font-body text-base sm:text-lg text-[#233d28] max-w-2xl font-normal leading-relaxed">
          Uma jornada estruturada.
        </p>
      </div>

      {/* 3 Phase Cards Grid */}
      <div className="my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {PHASES_DATA.map((phase, idx) => {
          const isSelected = activePhase === idx;
          return (
            <div
              key={phase.id}
              onClick={() => setActivePhase(idx)}
              className={`p-6 rounded-xl transition-all cursor-pointer flex flex-col justify-between relative ${
                isSelected
                  ? 'bg-white border-2 border-[#0d2213] shadow-[0_12px_36px_rgba(13,34,19,0.1)] scale-[1.01]'
                  : 'bg-white/80 border border-[#0d2213]/12 hover:border-[#0d2213]/30 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-xs font-bold px-2.5 py-0.5 rounded bg-[#0d2213] text-[#c6ff4d]">
                    Passo {phase.number}
                  </span>
                  <span className="text-xs font-mono text-[#0d2213]/60">
                    {phase.month}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#0d2213] mt-1">
                  {phase.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#2d4732] leading-relaxed font-body">
                  {phase.objective}
                </p>

                <div className="mt-4 pt-4 border-t border-[#0d2213]/10 space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#164e22] font-bold block">
                    Destaques:
                  </span>
                  {phase.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#0d2213]/90 font-medium font-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#164e22] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#0d2213]/15 flex items-center justify-between text-xs sm:text-sm text-[#0d2213]/65 font-body">
        <span>Clique nos cards para alternar o foco da análise</span>
        <span className="text-[#0d2213] font-semibold flex items-center gap-1">
          Performance &amp; Escala <ArrowRight className="w-3.5 h-3.5 text-[#164e22]" />
        </span>
      </div>
    </div>
  );
};
