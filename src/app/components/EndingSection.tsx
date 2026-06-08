import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function EndingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.7]);

  return (
    <section ref={sectionRef} className="relative flex min-h-svh flex-col justify-center overflow-hidden px-5 py-20 sm:px-6 sm:py-24 lg:py-32">
      {/* Background image with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1625647891375-91463187659f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBzdW5zZXQlMjBnb2xkZW4lMjBob3VyJTIwbW91bnRhaW5zJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzc5NjQ5MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Himalayan sunset"
          className="w-full h-full object-cover"
        />
        
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#15110D]/92 via-[#9B6241]/18 to-[#15110D]/92" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#15110D] via-[#15110D]/18 to-[#15110D]/42" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-4xl text-center"
      >
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-[#D89A3A] to-transparent mb-8 sm:mb-12"
        />

        {/* Main quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12"
        >
          <blockquote className="text-[clamp(2rem,6vw,3.75rem)] font-light tracking-tight text-[#FFF8EA] leading-tight mb-6 sm:mb-8">
            "The road ends,
            <br />
            but the memory
            <br />
            <span className="text-[#F1D59A]">remains forever."</span>
          </blockquote>

          <div className="text-sm sm:text-lg text-[#D8CCB8] tracking-[0.18em] sm:tracking-[0.2em]">
            — SPITI ODYSSEY
          </div>
        </motion.div>

        {/* Reflection text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-base md:text-xl text-[#D8CCB8] leading-relaxed mb-10 max-w-2xl mx-auto sm:mb-16"
        >
          Nine days through the Himalayas. Mountains that touched the sky. Monasteries that
          whispered ancient wisdom. Roads that tested courage. And silence that spoke louder
          than words. This isn't just a journey—it's a transformation.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 gap-4 mb-10 sm:grid-cols-3 sm:gap-6 sm:mb-16 lg:gap-8"
        >
          <div className="backdrop-blur-xl bg-[#241C14]/38 border border-[#B9A88F]/18 rounded-2xl p-5 sm:p-6">
            <div className="text-[clamp(2.25rem,5vw,3rem)] font-light text-[#D89A3A] mb-2">1,200</div>
            <div className="text-sm text-[#D8CCB8] tracking-wider">KILOMETERS</div>
          </div>
          <div className="backdrop-blur-xl bg-[#241C14]/38 border border-[#B9A88F]/18 rounded-2xl p-5 sm:p-6">
            <div className="text-[clamp(2.25rem,5vw,3rem)] font-light text-[#9BC8D8] mb-2">4,590</div>
            <div className="text-sm text-[#D8CCB8] tracking-wider">METERS HIGH</div>
          </div>
          <div className="backdrop-blur-xl bg-[#241C14]/38 border border-[#B9A88F]/18 rounded-2xl p-5 sm:p-6">
            <div className="text-[clamp(2.25rem,5vw,3rem)] font-light text-[#F1D59A] mb-2">∞</div>
            <div className="text-sm text-[#D8CCB8] tracking-wider">MEMORIES</div>
          </div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-[#D89A3A] to-transparent mt-12"
        />
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
        className="relative z-10 mt-12 w-full"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center text-sm text-[#D8CCB8]">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="text-[#F1D59A] tracking-[0.3em]">SPITI ODYSSEY</div>
            <span>•</span>
            <div>2026</div>
          </div>
        </div>
      </motion.footer>

      {/* Ambient particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-[#D89A3A] rounded-full"
          />
        ))}
      </div>
    </section>
  );
}

