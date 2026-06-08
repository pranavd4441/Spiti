import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Route
} from 'lucide-react';
import { routeLocations, type RouteLocation } from '../data/routeLocations';
import { DestinationExperienceModal } from './DestinationExperienceModal';

function buildCurvedPath(locations: RouteLocation[]) {
  return locations.reduce((path, location, index) => {
    const { x, y } = location.mapPosition;

    if (index === 0) {
      return `M ${x} ${y}`;
    }

    const previous = locations[index - 1].mapPosition;
    const midX = (previous.x + x) / 2;

    return `${path} C ${midX} ${previous.y}, ${midX} ${y}, ${x} ${y}`;
  }, '');
}

const routeLabelPlacements: Record<string, string> = {
  ludhiana: 'left-full top-1/2 ml-3 -translate-y-1/2 text-left',
  shimla: 'bottom-full left-1/2 mb-3 -translate-x-1/2 text-center',
  narkanda: 'left-full top-1/2 ml-3 -translate-y-1/2 text-left',
  sangla: 'bottom-full left-1/2 mb-3 -translate-x-1/2 text-center',
  chitkul: 'left-full top-1/2 ml-3 -translate-y-1/2 text-left',
  kalpa: 'top-full left-1/2 mt-3 -translate-x-1/2 text-center',
  nako: 'bottom-full left-1/2 mb-3 -translate-x-1/2 text-center',
  tabo: 'right-full top-1/2 mr-3 -translate-y-1/2 text-right',
  kaza: 'bottom-full left-1/2 mb-3 -translate-x-1/2 text-center',
  'key-monastery': 'left-full top-1/2 ml-3 -translate-y-1/2 text-left',
  chandratal: 'right-full top-1/2 mr-3 -translate-y-1/2 text-right',
  manali: 'left-full top-1/2 ml-3 -translate-y-1/2 text-left',
  chandigarh: 'bottom-full left-1/2 mb-3 -translate-x-1/2 text-center'
};

export function RouteMap() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedLocation = routeLocations[selectedIndex];
  const routePath = useMemo(() => buildCurvedPath(routeLocations), []);
  const pathProgress = routeLocations.length > 1 ? selectedIndex / (routeLocations.length - 1) : 0;

  const openDestination = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-24 lg:py-32">
      <div className="absolute left-0 top-24 h-[34rem] w-[34rem] rounded-full bg-[#9BC8D8]/8 blur-[150px]" />
      <div className="absolute bottom-24 right-0 h-[34rem] w-[34rem] rounded-full bg-[#D89A3A]/12 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm tracking-wider text-[#D8CCB8] backdrop-blur-md">
            <Route className="h-4 w-4 text-[#9BC8D8]" />
            EXPEDITION ROUTE
          </div>
          <h2 className="mb-6 text-[clamp(2.75rem,7vw,5rem)] font-light leading-tight tracking-tight text-[#FFF8EA]">
            Follow The Valley Road
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#D8CCB8]">
            Trace the road from Ludhiana into pine forests, Kinnaur valleys, Spiti monasteries,
            Chandratal wilderness, Manali, and the final return to Chandigarh.
          </p>
        </motion.div>

        <div className="relative left-1/2 mb-8 hidden w-screen -translate-x-1/2 overflow-visible md:block">
          <div className="relative h-[560px] overflow-visible lg:h-[680px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedLocation.id}
                src={selectedLocation.heroImage}
                alt=""
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 0.28, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-[#15110D]/72 via-[#241C14]/42 to-[#15110D]/86" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(155,200,216,0.10),transparent_30%),radial-gradient(circle_at_70%_72%,rgba(216,154,58,0.18),transparent_34%)]" />

            <div className="relative mx-auto h-full w-full max-w-[1920px]">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <path
                  d={routePath}
                  fill="none"
                  stroke="rgba(255,248,234,0.2)"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                />
                <motion.path
                  d={routePath}
                  fill="none"
                  stroke="url(#expeditionRouteGradient)"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                  initial={false}
                  animate={{ pathLength: pathProgress }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                />
                <defs>
                  <linearGradient id="expeditionRouteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9BC8D8" />
                    <stop offset="52%" stopColor="#D89A3A" />
                    <stop offset="100%" stopColor="#9B6241" />
                  </linearGradient>
                </defs>
              </svg>

              {routeLocations.map((location, index) => {
                const isActive = index === selectedIndex;
                const isCompleted = index <= selectedIndex;

                return (
                  <motion.button
                    key={location.id}
                    type="button"
                    onClick={() => openDestination(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onFocus={() => setHoveredIndex(index)}
                    onBlur={() => setHoveredIndex(null)}
                    aria-label={`Open ${location.name} destination experience`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    whileHover={{ scale: 1.08 }}
                    className="group absolute z-20 -translate-x-1/2 -translate-y-1/2 text-left"
                    style={{
                      left: `${location.mapPosition.x}%`,
                      top: `${location.mapPosition.y}%`,
                      zIndex: hoveredIndex === index ? 60 : 20
                    }}
                  >
                    <span
                      className={`relative flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-xl transition-all ${
                        isActive
                          ? 'border-[#F1D59A] bg-[#D89A3A]/22 text-[#FFF8EA] shadow-[0_0_38px_rgba(216,154,58,0.42)]'
                          : isCompleted
                            ? 'border-[#D89A3A]/70 bg-[#D89A3A]/15 text-[#F1D59A]'
                            : 'border-[#B9A88F]/35 bg-[#241C14]/55 text-[#D8CCB8] group-hover:border-[#F1D59A]/50 group-hover:text-[#FFF8EA]'
                      }`}
                    >
                      <MapPin className="h-5 w-5" />
                      {isActive && (
                        <motion.span
                          layoutId="active-route-pulse"
                          className="absolute inset-[-10px] rounded-full border border-[#F1D59A]/45"
                          animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0.25, 0.8] }}
                          transition={{ duration: 2.4, repeat: Infinity }}
                        />
                      )}
                    </span>

                    <span
                      className={`pointer-events-none absolute z-30 flex min-w-max items-center gap-2 rounded-full border px-3 py-1.5 text-xs backdrop-blur-xl transition-all ${
                        routeLabelPlacements[location.id] ?? 'left-full top-1/2 ml-3 -translate-y-1/2 text-left'
                      } ${
                        isActive
                          ? 'border-[#F1D59A]/55 bg-[#D89A3A]/18 text-[#FFF8EA] opacity-100 shadow-[0_0_28px_rgba(216,154,58,0.28)]'
                          : 'border-[#B9A88F]/20 bg-[#241C14]/55 text-[#E6D9C4] opacity-70 group-hover:opacity-95'
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isActive ? 'bg-[#F1D59A]' : isCompleted ? 'bg-[#D89A3A]' : 'bg-[#B9A88F]/65'
                        }`}
                      />
                      <span>{location.name}</span>
                    </span>

                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.span
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-4 min-w-max -translate-x-1/2 rounded-2xl border border-[#F1D59A]/20 bg-[#241C14]/92 px-4 py-3 text-center shadow-[0_18px_55px_rgba(21,17,13,0.55)] backdrop-blur-2xl"
                        >
                          <span className="block text-[10px] tracking-[0.22em] text-[#9BC8D8]">
                            DAY {String(location.day).padStart(2, '0')}
                          </span>
                          <span className="mt-1 block text-sm font-medium text-[#FFF8EA]">{location.name}</span>
                          <span className="mt-1 block text-xs tracking-[0.12em] text-[#F1D59A]">{location.altitude}</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="relative mb-8 space-y-4">
            <div className="absolute bottom-6 left-5 top-6 w-px bg-gradient-to-b from-[#9BC8D8] via-[#D89A3A] to-[#F1D59A]/40" />
            {routeLocations.map((location, index) => {
              const isActive = index === selectedIndex;

              return (
                <motion.button
                  key={location.id}
                  type="button"
                  onClick={() => openDestination(index)}
                  aria-label={`Open ${location.name} destination experience`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className={`relative flex w-full items-center gap-4 rounded-2xl border p-4 text-left backdrop-blur-xl transition-all ${
                    isActive
                      ? 'border-[#9BC8D8]/60 bg-[#9BC8D8]/10 shadow-[0_0_32px_rgba(155,200,216,0.18)]'
                      : 'border-white/10 bg-white/[0.04]'
                  }`}
                >
                  <span className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                    isActive ? 'border-[#9BC8D8] bg-[#9BC8D8]/20 text-[#FFF8EA]' : 'border-white/20 bg-[#241C14] text-[#D8CCB8]'
                  }`}>
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs tracking-[0.2em] text-[#9BC8D8]">
                      DAY {String(location.day).padStart(2, '0')} - {location.altitude}
                    </span>
                    <span className="block text-lg font-light text-[#FFF8EA]">{location.name}</span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <DestinationExperienceModal
          location={selectedLocation}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}

