import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const scrollToRouteMap = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section ref={sectionRef} className="relative min-h-[720px] h-[140svh] overflow-hidden">
      {/* Background mountains with parallax */}
      <div className="sticky top-0 min-h-[640px] h-svh">
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?auto=format&fit=crop&w=2400&q=85"
            alt="Key Monastery in Spiti Valley"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          {/* Atmospheric gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#15110D]/50 via-[#241C14]/20 to-[#15110D]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#15110D]/70 via-[#15110D]/15 to-[#9B6241]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#15110D] via-transparent to-transparent" />
        </motion.div>

        {/* Fog layers */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0.6, 0]) }}
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#15110D] to-transparent"
        />

        {/* Content */}
        <motion.div
          style={{ opacity }}
          className="relative h-full flex flex-col items-center justify-center px-5 pt-28 pb-16 text-center sm:px-6"
        >
          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mb-5 max-w-5xl"
          >
            <div className="text-[clamp(3.5rem,11vw,8rem)] font-light tracking-tight text-[#FFF8EA] mb-3 leading-none">
              SPITI
            </div>
            <div className="text-[clamp(3rem,9vw,6.5rem)] font-light tracking-tight text-[#F1D59A] leading-none">
              ODYSSEY
            </div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm sm:text-lg md:text-xl text-[#EFE3CF] tracking-[0.18em] mb-8 sm:mb-10"
          >
            3D HIMALAYAN EXPEDITION
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="max-w-2xl text-[#EFE3CF] leading-relaxed mb-10 text-base sm:text-lg drop-shadow-[0_2px_12px_rgba(21,17,13,0.9)]"
          >
            9 days. 14 destinations. One extraordinary journey through the Himalayan cold desert.
            <br />
            Where the mountains touch the sky, and silence speaks louder than words.
          </motion.p>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToRouteMap}
            className="group relative inline-flex max-w-full items-center justify-center gap-3 backdrop-blur-xl bg-[#FFF8EA]/12 border border-[#F1D59A]/35 rounded-full px-6 sm:px-12 py-4 text-xs sm:text-sm tracking-[0.16em] sm:tracking-[0.2em] hover:bg-[#FFF8EA]/18 transition-all duration-300"
          >
            <span className="relative z-10">BEGIN EXPEDITION</span>
            <ArrowDown className="relative z-10 w-4 h-4 text-[#9BC8D8] transition-transform group-hover:translate-y-1" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9BC8D8]/20 to-[#D89A3A]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

