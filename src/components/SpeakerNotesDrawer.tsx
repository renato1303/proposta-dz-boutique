import React from 'react';
import { SLIDES_CONFIG } from '../data/slidesData';
import { X, Mic, CheckCircle2 } from 'lucide-react';

interface SpeakerNotesDrawerProps {
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
}

export const SpeakerNotesDrawer: React.FC<SpeakerNotesDrawerProps> = ({
  isOpen,
  currentIndex,
  onClose
}) => {
  if (!isOpen) return null;

  const currentSlide = SLIDES_CONFIG[currentIndex];
  const notes = currentSlide.speakerNotes || [
    'Destacar os diferenciais técnicos e comerciais da proposta.',
    'Validar o alinhamento com a equipe da Greenole.'
  ];

  return (
    <div className="absolute right-6 bottom-20 sm:right-12 sm:bottom-24 md:right-16 md:bottom-24 z-40 max-w-sm w-[90vw] bg-[#07080a] border border-[#c6ff4d]/30 rounded-2xl shadow-2xl p-5 text-[#f6f4ec] animate-fade-in pointer-events-auto">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#c6ff4d]">
          <Mic className="w-3.5 h-3.5 animate-pulse" />
          <span className="font-semibold uppercase tracking-wider">
            Notas do Apresentador ({currentSlide.number})
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-full text-[#f6f4ec]/60 hover:text-[#f6f4ec] hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="py-3">
        <h4 className="font-display text-sm font-bold text-[#f6f4ec]">
          {currentSlide.title}
        </h4>
        <div className="mt-3 space-y-2">
          {notes.map((note, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[#f6f4ec]/80 font-body leading-relaxed">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c6ff4d] shrink-0 mt-0.5" />
              <span>{note}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#f6f4ec]/40 font-mono">
        <span>Renato &amp; Allan Pitch Guide</span>
        <span>Atalho: N</span>
      </div>
    </div>
  );
};
