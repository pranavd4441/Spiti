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
    <section className="relative py-32 px-6">
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
            <Award className="w-4 h-4 text-[#7DD3FC]" />
            <span className="text-sm text-[#94A3B8] tracking-wider">MILESTONES</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-[#F8FAFC] mb-6">
            Expedition
            <br />
            Passport
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
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
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-[#07111F] to-[#030712] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7DD3FC]/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F59E0B]/5 rounded-full blur-[100px]" />

            {/* Passport header */}
            <div className="relative text-center mb-12 pb-8 border-b border-white/10">
              <div className="text-[#E7D8B5] tracking-[0.3em] text-xs mb-2">EXPEDITION PASSPORT</div>
              <div className="text-3xl md:text-4xl font-light tracking-tight text-[#F8FAFC]">
                Spiti Odyssey 2026
              </div>
            </div>

            {/* Stamps grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      ? 'bg-white/5 border-[#7DD3FC]/30'
                      : 'bg-white/[0.02] border-white/5 opacity-50'
                  }`}>
                    {/* Stamp number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 backdrop-blur-xl bg-[#7DD3FC]/20 border border-[#7DD3FC]/40 rounded-full flex items-center justify-center text-xs text-[#7DD3FC]">
                      {String(stamp.id).padStart(2, '0')}
                    </div>

                    {/* Stamp icon */}
                    <div className="mb-4">
                      {stamp.unlocked ? (
                        <CheckCircle className="w-8 h-8 text-[#7DD3FC]" />
                      ) : (
                        <div className="w-8 h-8 rounded-full border-2 border-dashed border-white/20" />
                      )}
                    </div>

                    {/* Stamp details */}
                    <h4 className="text-[#F8FAFC] mb-2 font-light">{stamp.name}</h4>
                    <div className="text-sm text-[#94A3B8]">{stamp.location}</div>

                    {/* Decorative stamp mark */}
                    {stamp.unlocked && (
                      <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" className="text-[#7DD3FC]" />
                          <text x="20" y="24" textAnchor="middle" className="text-[8px] fill-current text-[#7DD3FC]" fontWeight="bold">
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
              <div className="inline-flex items-center gap-3 backdrop-blur-xl bg-gradient-to-r from-[#7DD3FC]/10 to-[#F59E0B]/10 border border-white/20 rounded-full px-8 py-4">
                <Award className="w-6 h-6 text-[#F59E0B]" />
                <div>
                  <div className="text-xs text-[#94A3B8] tracking-wider">COMPLETION STATUS</div>
                  <div className="text-lg text-[#F8FAFC]">9/9 Milestones Collected</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
