import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Heart, Share2, BookOpen } from 'lucide-react';

export function EndingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.7]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#F59E0B]/10 to-[#030712]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/50" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent mb-12"
        />

        {/* Main quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <blockquote className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#F8FAFC] leading-tight mb-8">
            "The road ends,
            <br />
            but the memory
            <br />
            <span className="text-[#E7D8B5]">remains forever."</span>
          </blockquote>

          <div className="text-lg text-[#94A3B8] tracking-[0.2em]">
            — SPITI ODYSSEY
          </div>
        </motion.div>

        {/* Reflection text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-16 max-w-2xl mx-auto"
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
          className="grid grid-cols-3 gap-8 mb-16"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-4xl md:text-5xl font-light text-[#F59E0B] mb-2">1,200</div>
            <div className="text-sm text-[#94A3B8] tracking-wider">KILOMETERS</div>
          </div>
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-4xl md:text-5xl font-light text-[#7DD3FC] mb-2">4,590</div>
            <div className="text-sm text-[#94A3B8] tracking-wider">METERS HIGH</div>
          </div>
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-4xl md:text-5xl font-light text-[#E7D8B5] mb-2">∞</div>
            <div className="text-sm text-[#94A3B8] tracking-wider">MEMORIES</div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-8 py-4 text-sm tracking-[0.2em] hover:bg-white/15 transition-all flex items-center gap-3"
          >
            <Heart className="w-5 h-5 text-[#F59E0B]" />
            <span>SAVE TO WISHLIST</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-8 py-4 text-sm tracking-[0.2em] hover:bg-white/15 transition-all flex items-center gap-3"
          >
            <Share2 className="w-5 h-5 text-[#7DD3FC]" />
            <span>SHARE JOURNEY</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative backdrop-blur-xl bg-gradient-to-r from-[#7DD3FC]/20 to-[#F59E0B]/20 border border-white/30 rounded-full px-8 py-4 text-sm tracking-[0.2em] hover:from-[#7DD3FC]/30 hover:to-[#F59E0B]/30 transition-all flex items-center gap-3"
          >
            <BookOpen className="w-5 h-5 text-[#E7D8B5]" />
            <span>PLAN YOUR TRIP</span>
          </motion.button>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent mt-12"
        />
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <div className="text-[#E7D8B5] tracking-[0.3em]">SPITI ODYSSEY</div>
            <span>•</span>
            <div>2026</div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="hover:text-[#7DD3FC] transition-colors">About</button>
            <button className="hover:text-[#7DD3FC] transition-colors">Gallery</button>
            <button className="hover:text-[#7DD3FC] transition-colors">Contact</button>
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
            className="absolute w-1 h-1 bg-[#F59E0B] rounded-full"
          />
        ))}
      </div>
    </section>
  );
}
