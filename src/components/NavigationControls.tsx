import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Globe,
  Instagram,
  Mail
} from 'lucide-react';
import { SlideTheme } from '../types';

interface NavigationControlsProps {
  currentIndex: number;
  totalSlides: number;
  theme: SlideTheme;
  isFullscreen: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentIndex,
  totalSlides,
  theme,
  isFullscreen,
  onPrev,
  onNext,
  onToggleFullscreen
}) => {
  const isLime = theme === 'lime';
  const isWhite = theme === 'white';

  return (
    <div className="fixed sm:absolute left-3 right-3 bottom-3 sm:left-12 sm:right-12 sm:bottom-6 md:left-16 md:right-16 md:bottom-7 flex items-center justify-between z-50 pointer-events-auto bg-black/80 sm:bg-transparent backdrop-blur-lg sm:backdrop-blur-none px-4 py-3 sm:p-0 rounded-2xl sm:rounded-none shadow-2xl sm:shadow-none border border-white/15 sm:border-0">
      {/* Persistent Sitemap on Every Slide */}
      <div className="flex items-center gap-2 sm:gap-4 text-xs font-body">
        <a
          href="https://sensesales.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 transition-colors font-medium ${
            isWhite
              ? 'text-[#f6f4ec] sm:text-[#0d2213]/80 hover:text-white sm:hover:text-[#0d2213]'
              : isLime
              ? 'text-white sm:text-[#0a0f0a]/80 hover:text-white sm:hover:text-[#0a0f0a]'
              : 'text-[#f6f4ec]/80 hover:text-[#c6ff4d]'
          }`}
          title="Site oficial"
        >
          <Globe
            className="w-3.5 h-3.5 shrink-0"
            style={{ color: isWhite || isLime ? '#c6ff4d' : '#c6ff4d' }}
          />
          <span className="font-mono text-[10px] sm:text-xs">sensesales.com.br</span>
        </a>

        <span
          className={`opacity-25 hidden sm:inline ${
            isWhite ? 'text-[#0d2213]' : isLime ? 'text-black' : 'text-white'
          }`}
        >
          •
        </span>

        <a
          href="https://instagram.com/sensesales"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden sm:inline-flex items-center gap-1.5 transition-colors font-medium ${
            isWhite
              ? 'text-[#0d2213]/80 hover:text-[#0d2213]'
              : isLime
              ? 'text-[#0a0f0a]/80 hover:text-[#0a0f0a]'
              : 'text-[#f6f4ec]/70 hover:text-[#c6ff4d]'
          }`}
          title="Instagram oficial"
        >
          <Instagram
            className="w-3.5 h-3.5"
            style={{ color: isWhite ? '#0d2213' : isLime ? '#0a0f0a' : '#c6ff4d' }}
          />
          <span className="font-mono text-xs">@sensesales</span>
        </a>

        <span
          className={`opacity-25 hidden md:inline ${
            isWhite ? 'text-[#0d2213]' : isLime ? 'text-black' : 'text-white'
          }`}
        >
          •
        </span>

        <a
          href="mailto:contatosensesales@gmail.com"
          className={`hidden md:inline-flex items-center gap-1.5 transition-colors font-medium ${
            isWhite
              ? 'text-[#0d2213]/80 hover:text-[#0d2213]'
              : isLime
              ? 'text-[#0a0f0a]/80 hover:text-[#0a0f0a]'
              : 'text-[#f6f4ec]/70 hover:text-[#c6ff4d]'
          }`}
          title="E-mail de contato"
        >
          <Mail
            className="w-3.5 h-3.5"
            style={{ color: isWhite ? '#0d2213' : isLime ? '#0a0f0a' : '#c6ff4d' }}
          />
          <span className="font-mono text-xs">contatosensesales@gmail.com</span>
        </a>
      </div>

      {/* Nav Buttons (Fullscreen, Prev, Next) */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          title={isFullscreen ? 'Sair da tela cheia (tecla F)' : 'Tela cheia (tecla F)'}
          className={`p-2 rounded-full border transition-all hidden sm:flex items-center justify-center ${
            isWhite
              ? 'border-[#0d2213]/25 text-[#0d2213] hover:bg-[#0d2213]/10'
              : isLime
              ? 'border-[#0a0f0a]/20 text-[#0a0f0a] hover:bg-[#0a0f0a]/10'
              : 'border-white/15 text-[#f6f4ec]/80 hover:bg-white/10'
          }`}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>

        {/* Prev Slide Button */}
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          title="Slide anterior (Seta esquerda)"
          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all ${
            currentIndex === 0
              ? 'opacity-30 cursor-not-allowed border-transparent text-white/50'
              : 'border-white/30 text-white bg-white/10 hover:bg-white/20 sm:bg-transparent sm:border-white/20'
          }`}
          style={{
            borderColor: currentIndex === 0 ? 'transparent' : isWhite ? 'rgba(13,34,19,0.3)' : isLime ? 'rgba(10,15,10,0.3)' : 'rgba(255,255,255,0.3)',
            color: isWhite ? '#f6f4ec' : isLime ? '#0a0f0a' : '#ffffff'
          }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Slide Button */}
        <button
          onClick={onNext}
          disabled={currentIndex === totalSlides - 1}
          title="Próximo slide (Seta direita)"
          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all font-bold ${
            currentIndex === totalSlides - 1
              ? 'opacity-30 cursor-not-allowed border-transparent text-white/50'
              : 'border-white/30 text-white bg-white/10 hover:bg-white/20 sm:bg-transparent'
          }`}
          style={{
            borderColor: currentIndex === totalSlides - 1 ? 'transparent' : isWhite ? 'rgba(13,34,19,0.3)' : isLime ? 'rgba(10,15,10,0.3)' : 'rgba(255,255,255,0.3)',
            color: isWhite ? '#f6f4ec' : isLime ? '#0a0f0a' : '#ffffff',
            backgroundColor: isLime ? '#0a0f0a' : isWhite ? '#0d2213' : 'rgba(255,255,255,0.15)'
          }}
        >
          <ChevronRight className="w-5 h-5" style={{ color: isLime || isWhite ? '#c6ff4d' : '#ffffff' }} />
        </button>
      </div>
    </div>
  );
};
