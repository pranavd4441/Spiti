import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Navigation2 } from 'lucide-react';

const destinations = [
  { name: 'Ludhiana', day: 0, x: 10, y: 80 },
  { name: 'Narkanda', day: 1, x: 20, y: 65 },
  { name: 'Sangla', day: 2, x: 30, y: 50 },
  { name: 'Chitkul', day: 3, x: 38, y: 45 },
  { name: 'Kalpa', day: 3, x: 45, y: 42 },
  { name: 'Nako', day: 4, x: 52, y: 38 },
  { name: 'Tabo', day: 4, x: 58, y: 35 },
  { name: 'Kaza', day: 5, x: 65, y: 30 },
  { name: 'Key Monastery', day: 6, x: 68, y: 25 },
  { name: 'Chicham', day: 7, x: 72, y: 28 },
  { name: 'Chandratal', day: 8, x: 65, y: 45 },
  { name: 'Manali', day: 8, x: 55, y: 60 },
  { name: 'Kasol', day: 9, x: 48, y: 68 },
  { name: 'Chandigarh', day: 9, x: 35, y: 75 },
];

export function RouteMap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const pathProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-2 mb-6">
            <Navigation2 className="w-4 h-4 text-[#7DD3FC]" />
            <span className="text-sm text-[#94A3B8] tracking-wider">THE ROUTE</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-[#F8FAFC] mb-6">
            Expedition Path
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            A carefully crafted route through ancient villages, high-altitude monasteries,
            and breathtaking mountain passes.
          </p>
        </motion.div>

        {/* Interactive map */}
        <div className="relative">
          {/* Glassmorphic container */}
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7DD3FC]/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-[100px]" />

            {/* Map canvas */}
            <div className="relative aspect-[16/10] w-full">
              {/* SVG path */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7DD3FC" />
                    <stop offset="50%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#7F1D1D" />
                  </linearGradient>
                </defs>
                
                {/* Route path */}
                <motion.path
                  d={`M ${destinations.map((d, i) => `${i === 0 ? 'M' : 'L'} ${d.x} ${d.y}`).join(' ')}`}
                  fill="none"
                  stroke="url(#routeGradient)"
                  strokeWidth="0.3"
                  strokeLinecap="round"
                  strokeDasharray="1"
                  style={{
                    pathLength: pathProgress
                  }}
                />
              </svg>

              {/* Destination markers */}
              {destinations.map((dest, index) => (
                <motion.div
                  key={dest.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="absolute group cursor-pointer"
                  style={{
                    left: `${dest.x}%`,
                    top: `${dest.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Pulse effect */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.1 }}
                    className="absolute inset-0 rounded-full bg-[#7DD3FC]/30 -z-10"
                  />

                  {/* Pin */}
                  <div className="relative backdrop-blur-md bg-[#7DD3FC]/20 border border-[#7DD3FC]/40 rounded-full p-2 group-hover:bg-[#7DD3FC]/30 transition-all">
                    <MapPin className="w-3 h-3 text-[#7DD3FC] fill-[#7DD3FC]" />
                  </div>

                  {/* Label */}
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap backdrop-blur-xl bg-[#07111F]/90 border border-white/10 rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <div className="text-xs text-[#F8FAFC] font-light">{dest.name}</div>
                    <div className="text-[10px] text-[#7DD3FC]">Day {dest.day}</div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Elevation profile overlay */}
              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                  <div>
                    <div className="text-[#7DD3FC]">START</div>
                    <div>300m</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#F59E0B]">PEAK</div>
                    <div>4,590m</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#94A3B8]">END</div>
                    <div>365m</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side narrative panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-start gap-6">
              <div className="text-6xl font-light text-[#7DD3FC]/20">14</div>
              <div>
                <h3 className="text-xl text-[#F8FAFC] mb-2">Destinations</h3>
                <p className="text-[#94A3B8] leading-relaxed">
                  From the plains of Punjab to the world's highest cold desert, crossing ancient
                  monasteries, suspension bridges, and moon lakes under the endless Himalayan sky.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
