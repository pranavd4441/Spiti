import { motion } from 'motion/react';
import { Award, CheckCircle } from 'lucide-react';

const stamps = [
  { id: 1, name: 'Pine Forest Crossing', location: 'Narkanda', unlocked: true },
  { id: 2, name: 'Baspa River Trail', location: 'Sangla', unlocked: true },
  { id: 3, name: 'Last Village Border', location: 'Chitkul', unlocked: true },
  { id: 4, name: 'Ancient Monastery', location: 'Tabo', unlocked: true },
  { id: 5, name: 'Cold Desert Entry', location: 'Kaza', unlocked: true },
  { id: 6, name: 'Spiritual Heights', location: 'Key Monastery', unlocked: true },
  { id: 7, name: 'Sky Bridge', location: 'Chicham', unlocked: true },
  { id: 8, name: 'Moon Lake Discovery', location: 'Chandratal', unlocked: true },
  { id: 9, name: 'Expedition Complete', location: 'Return', unlocked: true }
];

export function PassportStamps() {
  return (
    <section className="relative py-20 px-5 sm:px-6 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 backdrop-blur-md bg-[#241C14]/35 border border-[#B9A88F]/20 rounded-full px-6 py-2 mb-6">
            <Award className="w-4 h-4 text-[#D89A3A]" />
            <span className="text-sm text-[#D8CCB8] tracking-wider">MILESTONES</span>
          </div>
          <h2 className="text-[clamp(2.75rem,7vw,5rem)] font-light tracking-tight text-[#FFF8EA] mb-6 leading-tight">
            Expedition
            <br />
            Passport
          </h2>
          <p className="text-lg text-[#D8CCB8] max-w-2xl mx-auto">
            Collect stamps as you progress through the journey. Each milestone marks a significant
            moment in your Himalayan odyssey.
          </p>
        </motion.div>

        {/* Passport container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Passport background */}
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-[#2F261B] via-[#241C14] to-[#15110D] border border-[#B9A88F]/18 rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9BC8D8]/4 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D89A3A]/8 rounded-full blur-[100px]" />

            {/* Passport header */}
            <div className="relative text-center mb-8 pb-8 border-b border-white/10 sm:mb-12">
              <div className="text-[#F1D59A] tracking-[0.3em] text-xs mb-2">EXPEDITION PASSPORT</div>
              <div className="text-3xl md:text-4xl font-light tracking-tight text-[#FFF8EA] leading-tight">
                Spiti Odyssey 2026
              </div>
            </div>

            {/* Stamps grid */}
            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {stamps.map((stamp, index) => (
                <motion.div
                  key={stamp.id}
                  initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  className="group relative"
                >
                  {/* Stamp card */}
                  <div className={`relative backdrop-blur-md border-2 rounded-xl p-6 transition-all ${
                    stamp.unlocked
                      ? 'bg-[#FFF8EA]/6 border-[#D89A3A]/35'
                      : 'bg-white/[0.02] border-white/5 opacity-50'
                  }`}>
                    {/* Stamp number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 backdrop-blur-xl bg-[#D89A3A]/22 border border-[#F1D59A]/40 rounded-full flex items-center justify-center text-xs text-[#F1D59A]">
                      {String(stamp.id).padStart(2, '0')}
                    </div>

                    {/* Stamp icon */}
                    <div className="mb-4">
                      {stamp.unlocked ? (
                        <CheckCircle className="w-8 h-8 text-[#D89A3A]" />
                      ) : (
                        <div className="w-8 h-8 rounded-full border-2 border-dashed border-white/20" />
                      )}
                    </div>

                    {/* Stamp details */}
                    <h4 className="text-[#FFF8EA] mb-2 font-light">{stamp.name}</h4>
                    <div className="text-sm text-[#D8CCB8]">{stamp.location}</div>

                    {/* Decorative stamp mark */}
                    {stamp.unlocked && (
                      <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" className="text-[#D89A3A]" />
                          <text x="20" y="24" textAnchor="middle" className="text-[8px] fill-current text-[#D89A3A]" fontWeight="bold">
                            ✓
                          </text>
                        </svg>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Completion badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="relative mt-12 pt-8 border-t border-white/10 text-center"
            >
              <div className="inline-flex max-w-full items-center gap-3 backdrop-blur-xl bg-gradient-to-r from-[#9B6241]/16 to-[#D89A3A]/14 border border-[#F1D59A]/24 rounded-full px-5 py-4 sm:px-8">
                <Award className="w-6 h-6 shrink-0 text-[#D89A3A]" />
                <div className="min-w-0">
                  <div className="text-xs text-[#D8CCB8] tracking-wider">COMPLETION STATUS</div>
                  <div className="text-base text-[#FFF8EA] sm:text-lg">9/9 Milestones Collected</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

