import { useEffect, useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { RouteMap } from './components/RouteMap';
import { JourneyChapters } from './components/JourneyChapters';
import { DestinationExplorer } from './components/DestinationExplorer';
import { PassportStamps } from './components/PassportStamps';
import { AccommodationSection } from './components/AccommodationSection';
import { EndingSection } from './components/EndingSection';
import { Navigation } from './components/Navigation';
import { AtmosphericEffect } from './components/AtmosphericEffect';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(0);

  useEffect(() => {
    const updateScrollState = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      setScrollProgress(Math.min(1, Math.max(0, progress)));
      setCurrentChapter(Math.min(6, Math.floor(progress * 7)));
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#15110D] text-[#FFF8EA]">
      <AtmosphericEffect />
      <Navigation scrollProgress={scrollProgress} currentChapter={currentChapter} />
      <HeroSection />
      <RouteMap />
      <EndingSection />
    </main>
  );
}
