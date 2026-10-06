import React from 'react';
import { SLIDES_CONFIG } from '../data/slidesData';
import { X, Check } from 'lucide-react';

interface ThumbnailsModalProps {
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onSelectSlide: (index: number) => void;
}

export const ThumbnailsModal: React.FC<ThumbnailsModalProps> = ({
  isOpen,
  currentIndex,
  onClose,
  onSelectSlide
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
      <div className="bg-[#0d2213] border border-white/20 rounded-2xl max-w-5xl w-full max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#f6f4ec]">
              Visão Geral dos Slides
            </h3>
            <p className="text-xs text-[#f6f4ec]/60 font-body">
              Selecione qualquer slide para pular diretamente (ou use as setas do teclado)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#f6f4ec]/80 hover:text-[#f6f4ec] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid List */}
        <div className="p-5 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {SLIDES_CONFIG.map((slide, idx) => {
            const isCurrent = idx === currentIndex;
            const themeBg =
              slide.theme === 'lime'
                ? 'bg-[#c6ff4d] text-[#0a0f0a]'
                : slide.theme === 'white'
                ? 'bg-[#f6f4ec] text-[#0d2213] border-[#0d2213]/25'
                : slide.theme === 'green-deep'
                ? 'bg-[#0d2213] text-[#f6f4ec]'
                : slide.theme === 'green-mid'
                ? 'bg-[#123a1d] text-[#f6f4ec]'
                : 'bg-[#07080a] text-[#f6f4ec]';

            return (
              <div
                key={slide.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between group relative ${
                  isCurrent
                    ? 'border-[#c6ff4d] ring-2 ring-[#c6ff4d]/40 shadow-lg'
                    : 'border-white/10 hover:border-white/30 hover:scale-[1.02]'
                } ${themeBg}`}
              >
                {/* Header inside thumbnail card */}
                <div className="flex items-center justify-between text-[11px] font-mono opacity-75">
                  <span className="font-bold">Slide {slide.number}</span>
                  {isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-[#c6ff4d]" />
                  )}
                </div>

                <div className="my-3">
                  <span className="text-[10px] uppercase tracking-wider font-semibold opacity-60 block">
                    {slide.kicker}
                  </span>
                  <h4 className="font-display text-xs sm:text-sm font-bold line-clamp-2 mt-0.5">
                    {slide.title}
                  </h4>
                </div>

                <div className="text-[10px] opacity-40 font-mono flex items-center justify-between pt-2 border-t border-current/10">
                  <span>{slide.theme}</span>
                  <span className="group-hover:opacity-100 transition-opacity">Ir →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-black/40 text-center text-xs text-[#f6f4ec]/50 font-body">
          Sense Sales × Greenole · Proposta Comercial Setembro 2026
        </div>
      </div>
    </div>
  );
};
