import { motion } from 'motion/react';

export function AtmosphericEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Subtle fog particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`fog-${i}`}
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: Math.random() * 2 + 1,
            opacity: 0
          }}
          animate={{
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0, Math.random() * 0.1, 0]
          }}
          transition={{
            duration: Math.random() * 30 + 20,
            repeat: Infinity,
            delay: Math.random() * 10
          }}
          className="absolute w-64 h-64 bg-white/5 rounded-full blur-[60px]"
        />
      ))}

      {/* Light rays effect */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#7DD3FC]/5 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#F59E0B]/5 to-transparent" />
    </div>
  );
}
