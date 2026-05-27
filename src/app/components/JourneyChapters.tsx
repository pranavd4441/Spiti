import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const chapters = [
  {
    day: 1,
    title: 'Narkanda',
    subtitle: 'First Ascent',
    description: 'Into the Mountains. The ascent begins.',
    image: 'https://images.unsplash.com/photo-1596464148416-e0916276a9f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5nbGElMjB2YWxsZXklMjByaXZlciUyMHBpbmUlMjB0cmVlc3xlbnwxfHx8fDE3Nzk2NDkzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    mood: 'Anticipation',
    altitude: '2,708m'
  },
  {
    day: 2,
    title: 'Sangla',
    subtitle: 'Baspa Valley',
    description: 'Ancient stone villages. Apple orchards. Pristine rivers.',
    image: 'https://images.unsplash.com/photo-1566323124805-757e5c41d37c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGl0a3VsJTIwbGFzdCUyMHZpbGxhZ2UlMjBpbmRpYSUyMG1vdW50YWluc3xlbnwxfHx8fDE3Nzk2NDkzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    mood: 'Serenity',
    altitude: '2,621m'
  },
  {
    day: 3,
    title: 'Chitkul',
    subtitle: 'Last Inhabited Village',
    description: 'Where civilization meets the void. The road narrows.',
    image: 'https://images.unsplash.com/photo-1778052030222-34a74e4e103a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWxwYSUyMGtpbm5hdXIlMjBhcHBsZSUyMG9yY2hhcmRzJTIwbW91bnRhaW5zfGVufDF8fHx8MTc3OTY0OTMyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    mood: 'Solitude',
    altitude: '3,450m'
  },
  {
    day: 4,
    title: 'Tabo',
    subtitle: 'Ancient Silence',
    description: 'Thousand-year walls. Timeless stories. Dust particles in light.',
    image: 'https://images.unsplash.com/photo-1572295250942-8a442b3e2c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJvJTIwbW9uYXN0ZXJ5JTIwYW5jaWVudCUyMHdhbGxzJTIwdGliZXRhbnxlbnwxfHx8fDE3Nzk2NDkzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    mood: 'Reverence',
    altitude: '3,280m'
  },
  {
    day: 5,
    title: 'Kaza',
    subtitle: 'Heart of the Cold Desert',
    description: 'The desert opens. Vast. Barren. Beautiful.',
    image: 'https://images.unsplash.com/photo-1663076968785-baebf243d07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXphJTIwc3BpdGklMjB2YWxsZXklMjB0b3duJTIwZGVzZXJ0JTIwbW91bnRhaW5zfGVufDF8fHx8MTc3OTY0OTMyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    mood: 'Discovery',
    altitude: '3,650m'
  },
  {
    day: 6,
    title: 'Key Monastery',
    subtitle: 'Spiritual Heights',
    description: 'Higher grounds. Deeper peace. Prayer flags whisper.',
    image: 'https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXklMjBtb25hc3RlcnklMjBzcGl0aSUyMGJ1ZGRoaXN0fGVufDF8fHx8MTc3OTY0OTMxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    mood: 'Transcendence',
    altitude: '4,166m'
  },
  {
    day: 7,
    title: 'Chicham Bridge',
    subtitle: 'Courage Tested',
    description: 'Some roads test courage. Wind. Void. Trust.',
    image: 'https://images.unsplash.com/photo-1652151936619-47c6aa0d8718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3BlJTIwYnJpZGdlJTIwbW91bnRhaW5zJTIwZHJhbWF0aWMlMjBjYW55b258ZW58MXx8fHwxNzc5NjQ5MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    mood: 'Adrenaline',
    altitude: '4,590m'
  },
  {
    day: 8,
    title: 'Chandratal',
    subtitle: 'Moon Lake',
    description: 'A moon lake. Stars + tent. Peaceful solemnity.',
    image: 'https://images.unsplash.com/photo-1482406611936-43ea538e39d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBuaWdodCUyMHNreSUyMGNhbXBpbmclMjBtaWxreSUyMHdheSUyMHN0YXJzfGVufDF8fHx8MTc3OTY0OTMyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    mood: 'Mystical',
    altitude: '4,300m'
  },
  {
    day: 9,
    title: 'Journey Complete',
    subtitle: 'Not the End',
    description: 'Not the end. Just another beginning. Reflection. Warmth.',
    image: 'https://images.unsplash.com/photo-1625647891375-91463187659f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBzdW5zZXQlMjBnb2xkZW4lMjBob3VyJTIwbW91bnRhaW5zJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzc5NjQ5MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    mood: 'Reflection',
    altitude: '365m'
  }
];

function Chapter({ chapter, index }: { chapter: typeof chapters[0], index: number }) {
  const chapterRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: chapterRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  const isEven = index % 2 === 0;

  return (
    <div ref={chapterRef} className="relative h-screen flex items-center">
      <motion.div
        style={{ opacity }}
        className={`w-full max-w-7xl mx-auto px-6 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
      >
        {/* Image */}
        <motion.div
          style={{ scale }}
          className="relative w-full md:w-1/2 aspect-[4/5] overflow-hidden rounded-3xl"
        >
          <motion.div
            style={{ y }}
            className="absolute inset-0"
          >
            <img
              src={chapter.image}
              alt={chapter.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/60 via-transparent to-transparent" />
          </motion.div>

          {/* Day badge */}
          <div className="absolute top-6 left-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-6 py-3">
            <div className="text-xs text-[#94A3B8] tracking-wider">DAY</div>
            <div className="text-2xl text-[#7DD3FC]">{String(chapter.day).padStart(2, '0')}</div>
          </div>

          {/* Altitude badge */}
          <div className="absolute bottom-6 right-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl px-4 py-2">
            <div className="text-xs text-[#94A3B8]">Altitude</div>
            <div className="text-sm text-[#F8FAFC]">{chapter.altitude}</div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`w-full md:w-1/2 ${isEven ? 'md:text-left' : 'md:text-right'}`}
        >
          {/* Mood label */}
          <div className={`inline-flex items-center gap-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 text-xs text-[#7DD3FC] tracking-wider`}>
            {chapter.mood.toUpperCase()}
          </div>

          <h3 className="text-5xl md:text-7xl font-light tracking-tight text-[#F8FAFC] mb-4">
            {chapter.title}
          </h3>
          
          <div className="text-xl md:text-2xl text-[#E7D8B5] mb-8 font-light">
            {chapter.subtitle}
          </div>

          <p className="text-lg text-[#94A3B8] leading-relaxed max-w-md">
            {chapter.description}
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`h-px bg-gradient-to-r ${isEven ? 'from-[#7DD3FC]' : 'from-transparent to-[#7DD3FC]'} mt-8 max-w-xs ${isEven ? '' : 'ml-auto'}`}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function JourneyChapters() {
  return (
    <section id="journey-chapters" className="relative py-32">
      {/* Section header */}
      <div className="text-center mb-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-[#F8FAFC] mb-6">
            The Journey
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Nine days of environmental transitions. Each chapter tells a story.
            <br />
            Every turn reveals something extraordinary.
          </p>
        </motion.div>
      </div>

      {/* Chapters */}
      <div className="space-y-0">
        {chapters.map((chapter, index) => (
          <Chapter key={chapter.day} chapter={chapter} index={index} />
        ))}
      </div>
    </section>
  );
}
