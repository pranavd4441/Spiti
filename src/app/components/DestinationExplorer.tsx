import { motion } from 'motion/react';
import { MapPin, Mountain, Compass } from 'lucide-react';
import { useState } from 'react';

const destinations = [
  {
    name: 'Key Monastery',
    location: 'Spiti Valley',
    altitude: '4,166m',
    type: 'Spiritual',
    description: 'A thousand-year-old Tibetan Buddhist monastery perched on a hilltop, offering panoramic views of the Spiti Valley.',
    image: 'https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXklMjBtb25hc3RlcnklMjBzcGl0aSUyMGJ1ZGRoaXN0fGVufDF8fHx8MTc3OTY0OTMxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    mood: 'Peaceful',
    day: 6
  },
  {
    name: 'Chandratal Lake',
    location: 'Lahaul',
    altitude: '4,300m',
    type: 'Natural Wonder',
    description: 'The Moon Lake. A crescent-shaped high-altitude lake reflecting the stars, surrounded by complete silence.',
    image: 'https://images.unsplash.com/photo-1661145555121-d02de33ebc2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWtvJTIwbGFrZSUyMGhpbWFsYXlhbiUyMHNlcmVuaXR5fGVufDF8fHx8MTc3OTY0OTMxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    mood: 'Mystical',
    day: 8
  },
  {
    name: 'Chicham Bridge',
    location: 'Kibber',
    altitude: '4,590m',
    type: 'Adventure',
    description: 'Asia\'s highest suspension bridge connecting two villages across a deep gorge. An engineering marvel and a test of courage.',
    image: 'https://images.unsplash.com/photo-1652151936619-47c6aa0d8718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3BlJTIwYnJpZGdlJTIwbW91bnRhaW5zJTIwZHJhbWF0aWMlMjBjYW55b258ZW58MXx8fHwxNzc5NjQ5MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    mood: 'Thrilling',
    day: 7
  },
  {
    name: 'Sangla Valley',
    location: 'Kinnaur',
    altitude: '2,621m',
    type: 'Village',
    description: 'Ancient stone villages, apple orchards, and the roaring Baspa River. A blend of nature and culture.',
    image: 'https://images.unsplash.com/photo-1758701320640-048f894e6639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjB2aWxsYWdlJTIwYW5jaWVudCUyMGFyY2hpdGVjdHVyZSUyMHN0b25lfGVufDF8fHx8MTc3OTY0OTMxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    mood: 'Serene',
    day: 2
  },
  {
    name: 'Tabo Monastery',
    location: 'Spiti Valley',
    altitude: '3,280m',
    type: 'Heritage',
    description: 'The "Ajanta of the Himalayas". Ancient murals and scriptures preserved for over a millennium.',
    image: 'https://images.unsplash.com/photo-1572295250942-8a442b3e2c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJvJTIwbW9uYXN0ZXJ5JTIwYW5jaWVudCUyMHdhbGxzJTIwdGliZXRhbnxlbnwxfHx8fDE3Nzk2NDkzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    mood: 'Ancient',
    day: 4
  },
  {
    name: 'Kaza',
    location: 'Spiti Valley',
    altitude: '3,650m',
    type: 'Cold Desert',
    description: 'The heart of Spiti. A high-altitude desert town where barren beauty meets Tibetan culture.',
    image: 'https://images.unsplash.com/photo-1480342740034-d149f44bbeac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBjb2xkJTIwZGVzZXJ0JTIwbGFuZHNjYXBlJTIwYmFycmVufGVufDF8fHx8MTc3OTY0OTMxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    mood: 'Vast',
    day: 5
  }
];

export function DestinationExplorer() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="relative min-h-screen py-32 px-6">
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
            <Compass className="w-4 h-4 text-[#7DD3FC]" />
            <span className="text-sm text-[#94A3B8] tracking-wider">DESTINATIONS</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-[#F8FAFC] mb-6">
            Explore The
            <br />
            Unexplored
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Six extraordinary destinations. Each with its own story, mood, and magic.
          </p>
        </motion.div>

        {/* Featured destination */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="relative h-[70vh] rounded-3xl overflow-hidden">
            <motion.img
              key={selectedIndex}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src={destinations[selectedIndex].image}
              alt={destinations[selectedIndex].name}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/60 via-transparent to-transparent" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-12">
              <motion.div
                key={`content-${selectedIndex}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-4 py-2 text-xs text-[#7DD3FC] tracking-wider">
                    {destinations[selectedIndex].type.toUpperCase()}
                  </div>
                  <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-4 py-2 text-xs text-[#F59E0B] tracking-wider">
                    DAY {String(destinations[selectedIndex].day).padStart(2, '0')}
                  </div>
                  <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-4 py-2 text-xs text-[#94A3B8]">
                    <Mountain className="w-3 h-3 inline mr-1" />
                    {destinations[selectedIndex].altitude}
                  </div>
                </div>

                <h3 className="text-4xl md:text-6xl font-light tracking-tight text-[#F8FAFC] mb-4">
                  {destinations[selectedIndex].name}
                </h3>

                <div className="flex items-center gap-2 mb-4 text-[#E7D8B5]">
                  <MapPin className="w-4 h-4" />
                  <span>{destinations[selectedIndex].location}</span>
                </div>

                <p className="text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
                  {destinations[selectedIndex].description}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Destination grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {destinations.map((dest, index) => (
            <motion.button
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedIndex(index)}
              className={`group relative aspect-[3/4] rounded-xl overflow-hidden transition-all ${
                selectedIndex === index
                  ? 'ring-2 ring-[#7DD3FC] scale-105'
                  : 'hover:scale-105'
              }`}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
              
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <div className="text-xs text-[#7DD3FC] mb-1">{dest.mood}</div>
                <div className="text-sm text-[#F8FAFC] font-light">{dest.name}</div>
              </div>

              {/* Hover indicator */}
              <div className={`absolute inset-0 border-2 border-[#7DD3FC]/0 group-hover:border-[#7DD3FC]/50 transition-all rounded-xl`} />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
