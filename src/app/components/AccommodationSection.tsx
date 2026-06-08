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
    <section className="relative py-20 px-5 sm:px-6 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 h-[min(800px,90vw)] w-[min(800px,90vw)] -translate-x-1/2 -translate-y-1/2 bg-[#D89A3A]/8 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 backdrop-blur-md bg-[#241C14]/35 border border-[#B9A88F]/20 rounded-full px-6 py-2 mb-6">
            <Home className="w-4 h-4 text-[#D89A3A]" />
            <span className="text-sm text-[#D8CCB8] tracking-wider">ACCOMMODATION</span>
          </div>
          <h2 className="text-[clamp(2.75rem,7vw,5rem)] font-light tracking-tight text-[#FFF8EA] mb-6 leading-tight">
            Rest & Recharge
          </h2>
          <p className="text-lg text-[#D8CCB8] max-w-2xl mx-auto">
            Comfortable stays in the mountains. From hotels to camps, each location offers
            a unique experience of Himalayan hospitality.
          </p>
        </motion.div>

        {/* Accommodation cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <div className="relative backdrop-blur-xl bg-[#241C14]/38 border border-[#B9A88F]/18 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-[#F1D59A]/28">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15110D]/90 via-[#241C14]/12 to-transparent" />

                  {/* Type badge */}
                  <div className="absolute top-4 left-4 backdrop-blur-xl bg-[#241C14]/45 border border-[#F1D59A]/30 rounded-full px-4 py-2 flex items-center gap-2">
                    {place.type === 'Camp' ? (
                      <Tent className="w-4 h-4 text-[#D89A3A]" />
                    ) : (
                      <Home className="w-4 h-4 text-[#9BC8D8]" />
                    )}
                    <span className="text-xs text-white tracking-wider">{place.type.toUpperCase()}</span>
                  </div>

                  {/* Altitude badge */}
                  <div className="absolute top-4 right-4 backdrop-blur-xl bg-[#241C14]/45 border border-[#B9A88F]/30 rounded-full px-3 py-1 flex items-center gap-1">
                    <Mountain className="w-3 h-3 text-white" />
                    <span className="text-xs text-white">{place.altitude}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-[#D89A3A] mb-2">{place.location}</div>
                  <h3 className="text-xl text-[#FFF8EA] mb-3 font-light">{place.name}</h3>
                  <p className="text-[#D8CCB8] text-sm leading-relaxed mb-4">
                    {place.description}
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2">
                    {place.amenities.map((amenity) => (
                      <div
                        key={amenity}
                        className="text-xs text-[#D8CCB8] bg-[#FFF8EA]/6 border border-[#B9A88F]/16 rounded-full px-3 py-1"
                      >
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute inset-0 border-2 border-[#F1D59A]/0 group-hover:border-[#F1D59A]/28 rounded-2xl transition-all pointer-events-none" />
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
          className="mt-12 backdrop-blur-xl bg-[#241C14]/36 border border-[#B9A88F]/18 rounded-2xl p-5 sm:p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl text-[#FFF8EA] mb-2 font-light">Essential Information</h4>
              <p className="text-[#D8CCB8]">
                All accommodations include basic amenities. Pre-booking is recommended during peak season (June-September).
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full backdrop-blur-xl bg-[#FFF8EA]/8 border border-[#F1D59A]/25 rounded-full px-6 py-3 text-sm tracking-wider hover:bg-[#FFF8EA]/14 transition-all sm:w-auto sm:px-8"
            >
              VIEW ALL STAYS
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

