import { motion } from 'motion/react';
import { Home, Tent, Wifi, Coffee, Mountain } from 'lucide-react';

const accommodations = [
  {
    name: 'Mountain View Hotel',
    location: 'Kaza',
    type: 'Hotel',
    description: 'Comfortable rooms with views of the cold desert mountains. Modern amenities in the heart of Spiti.',
    image: 'https://images.unsplash.com/photo-1663076968785-baebf243d07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXphJTIwc3BpdGklMjB2YWxsZXklMjB0b3duJTIwZGVzZXJ0JTIwbW91bnRhaW5zfGVufDF8fHx8MTc3OTY0OTMyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    amenities: ['WiFi', 'Hot Water', 'Restaurant', 'Heating'],
    altitude: '3,650m'
  },
  {
    name: 'Monastery Guesthouse',
    location: 'Key Monastery',
    type: 'Guesthouse',
    description: 'Traditional guesthouse run by monks. Experience authentic monastic hospitality and peaceful surroundings.',
    image: 'https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXklMjBtb25hc3RlcnklMjBzcGl0aSUyMGJ1ZGRoaXN0fGVufDF8fHx8MTc3OTY0OTMxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    amenities: ['Basic', 'Peaceful', 'Cultural', 'Simple'],
    altitude: '4,166m'
  },
  {
    name: 'Chandratal Campsite',
    location: 'Chandratal Lake',
    type: 'Camp',
    description: 'Premium camping under the stars. Experience the magic of sleeping beside the moon lake.',
    image: 'https://images.unsplash.com/photo-1482406611936-43ea538e39d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBuaWdodCUyMHNreSUyMGNhbXBpbmclMjBtaWxreSUyMHdheSUyMHN0YXJzfGVufDF8fHx8MTc3OTY0OTMyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    amenities: ['Tents', 'Bonfire', 'Stargazing', 'Meals'],
    altitude: '4,300m'
  }
];

export function AccommodationSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F59E0B]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-2 mb-6">
            <Home className="w-4 h-4 text-[#7DD3FC]" />
            <span className="text-sm text-[#94A3B8] tracking-wider">ACCOMMODATION</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-[#F8FAFC] mb-6">
            Rest & Recharge
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Comfortable stays in the mountains. From hotels to camps, each location offers
            a unique experience of Himalayan hospitality.
          </p>
        </motion.div>

        {/* Accommodation cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accommodations.map((place, index) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-white/20">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />

                  {/* Type badge */}
                  <div className="absolute top-4 left-4 backdrop-blur-xl bg-white/20 border border-white/30 rounded-full px-4 py-2 flex items-center gap-2">
                    {place.type === 'Camp' ? (
                      <Tent className="w-4 h-4 text-[#F59E0B]" />
                    ) : (
                      <Home className="w-4 h-4 text-[#7DD3FC]" />
                    )}
                    <span className="text-xs text-white tracking-wider">{place.type.toUpperCase()}</span>
                  </div>

                  {/* Altitude badge */}
                  <div className="absolute top-4 right-4 backdrop-blur-xl bg-white/20 border border-white/30 rounded-full px-3 py-1 flex items-center gap-1">
                    <Mountain className="w-3 h-3 text-white" />
                    <span className="text-xs text-white">{place.altitude}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-[#7DD3FC] mb-2">{place.location}</div>
                  <h3 className="text-xl text-[#F8FAFC] mb-3 font-light">{place.name}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                    {place.description}
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2">
                    {place.amenities.map((amenity) => (
                      <div
                        key={amenity}
                        className="text-xs text-[#94A3B8] bg-white/5 border border-white/10 rounded-full px-3 py-1"
                      >
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute inset-0 border-2 border-[#7DD3FC]/0 group-hover:border-[#7DD3FC]/30 rounded-2xl transition-all pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl text-[#F8FAFC] mb-2 font-light">Essential Information</h4>
              <p className="text-[#94A3B8]">
                All accommodations include basic amenities. Pre-booking is recommended during peak season (June-September).
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-8 py-3 text-sm tracking-wider hover:bg-white/15 transition-all whitespace-nowrap"
            >
              VIEW ALL STAYS
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
