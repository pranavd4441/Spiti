import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={sectionRef} className="relative h-[150vh] overflow-hidden">
      {/* Background mountains with parallax */}
      <div className="sticky top-0 h-screen">
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1746038335222-c6d6db685c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGl0aSUyMHZhbGxleSUyMGhpbWFsYXlhbiUyMG1vdW50YWlucyUyMGZvZyUyMGF0bW9zcGhlcmljfGVufDF8fHx8MTc3OTY0OTMxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Himalayan mountains"
            className="w-full h-full object-cover"
          />
          {/* Atmospheric gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07111F]/40 via-transparent to-[#030712]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
        </motion.div>

        {/* Fog layers */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0.6, 0]) }}
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#030712] to-transparent"
        />

        {/* Content */}
        <motion.div
          style={{ opacity }}
          className="relative h-full flex flex-col items-center justify-center px-6 text-center"
        >
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-2"
          >
            <MapPin className="w-4 h-4 text-[#7DD3FC]" />
            <span className="text-sm text-[#94A3B8] tracking-wider">Trans-Himalayan Corridor</span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mb-6 max-w-5xl"
          >
            <div className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-[#F8FAFC] mb-4">
              SPITI
            </div>
            <div className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#E7D8B5]">
              ODYSSEY
            </div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg md:text-xl text-[#94A3B8] tracking-[0.2em] mb-12"
          >
            3D HIMALAYAN EXPEDITION
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="max-w-2xl text-[#94A3B8] leading-relaxed mb-12 text-lg"
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
            className="group relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-12 py-4 text-sm tracking-[0.2em] hover:bg-white/15 transition-all duration-300"
          >
            <span className="relative z-10">BEGIN EXPEDITION</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7DD3FC]/20 to-[#F59E0B]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown className="w-6 h-6 text-[#7DD3FC]" />
            </motion.div>
            <div className="mt-2 text-xs text-[#94A3B8] tracking-wider">SCROLL TO EXPLORE</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
