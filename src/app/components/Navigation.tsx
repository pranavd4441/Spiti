import { Mountain } from 'lucide-react';
import { motion } from 'motion/react';

interface NavigationProps {
  scrollProgress: number;
  currentChapter: number;
}

export function Navigation({ scrollProgress, currentChapter }: NavigationProps) {
  const chapters = [
    'Hero', 'Route', 'Journey', 'Destinations', 'Stamps', 'Stay', 'End'
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Glassmorphism container */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-8 py-4 shadow-2xl">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mountain className="w-6 h-6 text-[#7DD3FC]" />
              <div>
                <div className="text-sm font-light tracking-[0.3em] text-[#E7D8B5]">SPITI ODYSSEY</div>
                <div className="text-xs text-[#94A3B8] tracking-wider">3D Himalayan Expedition</div>
              </div>
            </div>

            {/* Chapter indicator */}
            <div className="hidden md:flex items-center gap-2 text-xs text-[#94A3B8]">
              <span>DAY</span>
              <span className="text-[#7DD3FC] text-lg font-light">{String(currentChapter + 1).padStart(2, '0')}</span>
              <span>/</span>
              <span>09</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-[#7DD3FC] via-[#F59E0B] to-[#7F1D1D]"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
