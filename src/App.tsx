import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SLIDES_CONFIG } from './data/slidesData';
import { NavigationControls } from './components/NavigationControls';
import { ThumbnailsModal } from './components/ThumbnailsModal';
import { SpeakerNotesDrawer } from './components/SpeakerNotesDrawer';
import { AcceptanceModal } from './components/AcceptanceModal';

// Slides
import { CoverSlide } from './components/slides/CoverSlide';
import { ContextSlide } from './components/slides/ContextSlide';
import { TeamSlide } from './components/slides/TeamSlide';
import { PortfolioSlide } from './components/slides/PortfolioSlide';
import { MacroMethodologySlide } from './components/slides/MacroMethodologySlide';
import { Week1DiscoverySlide } from './components/slides/Week1DiscoverySlide';
import { Weeks23TacticalSlide } from './components/slides/Weeks23TacticalSlide';
import { Week4WarmupSlide } from './components/slides/Week4WarmupSlide';
import { Month2WarmupSlide } from './components/slides/Month2WarmupSlide';
import { Month3LaunchSlide } from './components/slides/Month3LaunchSlide';
import { ParallelTrackSlide } from './components/slides/ParallelTrackSlide';
import { DeliverablesSlide } from './components/slides/DeliverablesSlide';
import { InvestmentSlide } from './components/slides/InvestmentSlide';
import { InvestmentOnetimeSlide } from './components/slides/InvestmentOnetimeSlide';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isAcceptanceOpen, setIsAcceptanceOpen] = useState(false);
  const [selectedPlanForAcceptance, setSelectedPlanForAcceptance] = useState<'monthly' | 'onetime'>('onetime');

  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = SLIDES_CONFIG.length;
  const currentSlide = SLIDES_CONFIG[currentSlideIndex];

  // Navigation handlers
  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const next = Math.min(prev + 1, totalSlides - 1);
      return next;
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const next = Math.max(prev - 1, 0);
      return next;
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Toggle fullscreen
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides - 1);
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key.toLowerCase() === 'g') {
        e.preventDefault();
        setIsGridOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'n') {
        e.preventDefault();
        setIsNotesOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsGridOpen(false);
        setIsNotesOpen(false);
        setIsAcceptanceOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, totalSlides, toggleFullscreen]);

  // Sync fullscreen change from browser
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Render active slide component
  const renderSlideContent = () => {
    switch (currentSlide.id) {
      case 'cover':
        return <CoverSlide onNext={nextSlide} />;
      case 'team':
        return <TeamSlide />;
      case 'portfolio-1':
        return <PortfolioSlide index={0} />;
      case 'portfolio-2':
        return <PortfolioSlide index={1} />;
      case 'portfolio-3':
        return <PortfolioSlide index={2} />;
      case 'context':
        return <ContextSlide />;
      case 'macro-methodology':
        return <MacroMethodologySlide />;
      case 'week1-discovery':
        return <Week1DiscoverySlide />;
      case 'weeks2-3-tactical':
        return <Weeks23TacticalSlide />;
      case 'week4-warmup':
        return <Week4WarmupSlide />;
      case 'month2-warmup':
        return <Month2WarmupSlide />;
      case 'month3-launch':
        return <Month3LaunchSlide />;
      case 'parallel-track':
        return <ParallelTrackSlide />;
      case 'deliverables':
        return <DeliverablesSlide />;
      case 'investment':
        return (
          <InvestmentSlide
            onSelectPlan={(plan) => {
              setSelectedPlanForAcceptance(plan);
              setIsAcceptanceOpen(true);
            }}
          />
        );
      case 'investment-onetime':
        return (
          <InvestmentOnetimeSlide
            onSelect={() => {
              setSelectedPlanForAcceptance('onetime');
              setIsAcceptanceOpen(true);
            }}
          />
        );
      default:
        return <CoverSlide onNext={nextSlide} />;
    }
  };

  const progressPercentage = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <div className="w-screen min-h-screen bg-[#000] flex flex-col items-center justify-center overflow-y-auto select-none p-2 sm:p-4">
      {/* 16:9 Presentation Stage - Optimized max-h for desktop viewports without scrolling/zooming */}
      <div
        ref={containerRef}
        id="presentation-frame"
        className={`relative w-full sm:w-[min(94vw,167.11vh)] sm:max-h-[82vh] sm:aspect-video rounded-2xl overflow-y-auto sm:overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.85)] border flex flex-col justify-between transition-colors duration-500 my-auto ${
          currentSlide.theme === 'white'
            ? 'border-[#0d2213]/15'
            : currentSlide.theme === 'lime'
            ? 'border-black/20'
            : 'border-white/10'
        }`}
        style={{
          backgroundColor:
            currentSlide.theme === 'lime'
              ? '#c6ff4d'
              : currentSlide.theme === 'white'
              ? '#f6f4ec'
              : currentSlide.theme === 'green-deep'
              ? '#0d2213'
              : currentSlide.theme === 'green-mid'
              ? '#123a1d'
              : '#07080a',
          transition: 'background-color 0.45s ease'
        }}
      >
        {/* Top Progress Track */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 z-40 ${
            currentSlide.theme === 'white' ? 'bg-black/10' : 'bg-white/10'
          }`}
        >
          <div
            className="h-full transition-all duration-500 ease-out"
            style={{
              width: `${progressPercentage}%`,
              backgroundColor:
                currentSlide.theme === 'lime'
                  ? '#0a0f0a'
                  : currentSlide.theme === 'white'
                  ? '#0d2213'
                  : '#c6ff4d'
            }}
          />
        </div>

        {/* Slide Canvas Content */}
        <div className="w-full flex-1 relative overflow-y-auto sm:overflow-hidden pt-4 pb-16 sm:pb-20">
          {renderSlideContent()}
        </div>

        {/* Navigation Bar */}
        <NavigationControls
          currentIndex={currentSlideIndex}
          totalSlides={totalSlides}
          theme={currentSlide.theme}
          isFullscreen={isFullscreen}
          onPrev={prevSlide}
          onNext={nextSlide}
          onToggleFullscreen={toggleFullscreen}
        />

        {/* Speaker Notes Overlay */}
        <SpeakerNotesDrawer
          isOpen={isNotesOpen}
          currentIndex={currentSlideIndex}
          onClose={() => setIsNotesOpen(false)}
        />
      </div>

      {/* Grid Thumbnail Modal */}
      <ThumbnailsModal
        isOpen={isGridOpen}
        currentIndex={currentSlideIndex}
        onClose={() => setIsGridOpen(false)}
        onSelectSlide={goToSlide}
      />

      {/* Proposal Acceptance Modal */}
      <AcceptanceModal
        isOpen={isAcceptanceOpen}
        initialPlan={selectedPlanForAcceptance}
        onClose={() => setIsAcceptanceOpen(false)}
      />
    </div>
  );
}
