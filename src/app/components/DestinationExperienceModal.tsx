import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  BedDouble,
  Camera,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Home,
  Mountain,
  Route,
  ShoppingBag,
  Sparkles,
  Utensils,
  Waves,
  X
} from 'lucide-react';
import type { RouteLocation } from '../data/routeLocations';

type DestinationExperienceModalProps = {
  location: RouteLocation | null;
  isOpen: boolean;
  onClose: () => void;
};

const slides = [
  { id: 'overview', label: 'Overview' },
  { id: 'viewpoints', label: 'View Points', key: 'viewpoints', icon: Mountain },
  { id: 'accommodations', label: 'Hotels & Accommodation', icon: BedDouble },
  { id: 'food', label: 'Food Stops', key: 'food', icon: Utensils },
  { id: 'shopping', label: 'Shopping Areas', key: 'shopping', icon: ShoppingBag },
  { id: 'rest', label: 'Rest Areas', key: 'restAreas', icon: Waves },
  { id: 'activities', label: 'Activities', key: 'activities', icon: Sparkles },
  { id: 'tips', label: 'Travel Tips', key: 'travelTips', icon: Compass },
  { id: 'photos', label: 'Photography Spots', key: 'photoSpots', icon: Camera }
] as const;

function useSlideItems(location: RouteLocation | null, slideId: string) {
  return useMemo(() => {
    if (!location) return [];

    const slide = slides.find((item) => item.id === slideId);
    if (!slide || !('key' in slide)) return [];

    return location[slide.key].map((item) => ({ label: item, group: slide.label }));
  }, [location, slideId]);
}

function ExperienceCards({ location, slideId }: { location: RouteLocation; slideId: string }) {
  const items = useSlideItems(location, slideId);
  const slide = slides.find((item) => item.id === slideId);
  const Icon = slide && 'icon' in slide ? slide.icon : Sparkles;

  return (
    <div className="flex h-full flex-col justify-center px-6 py-10 sm:px-10 lg:px-14">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-8"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B9A88F]/20 bg-[#241C14]/38 px-4 py-2 text-xs tracking-[0.2em] text-[#F1D59A] backdrop-blur-xl">
          <Icon className="h-4 w-4" />
          {slide?.label}
        </div>
        <h3 className="text-[clamp(2.25rem,6vw,4.75rem)] font-light leading-tight tracking-tight text-[#FFF8EA]">
          {location.name}
        </h3>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={`${slideId}-${item.label}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.35 }}
            className="min-h-36 rounded-3xl border border-[#B9A88F]/18 bg-[#241C14]/42 p-5 backdrop-blur-2xl transition-colors hover:border-[#F1D59A]/30 hover:bg-[#FFF8EA]/8"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#D89A3A]/30 bg-[#D89A3A]/10">
              <Icon className="h-5 w-5 text-[#F1D59A]" />
            </div>
            <div className="mb-2 text-xs tracking-[0.18em] text-[#D89A3A]">{item.group}</div>
            <p className="text-base leading-relaxed text-[#E2E8F0]">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AccommodationCards({ location }: { location: RouteLocation }) {
  return (
    <div className="relative z-10 flex h-full flex-col justify-center overflow-y-auto px-6 py-10 sm:px-10 lg:px-14">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-8"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B9A88F]/20 bg-[#241C14]/38 px-4 py-2 text-xs tracking-[0.2em] text-[#F1D59A] backdrop-blur-xl">
          <BedDouble className="h-4 w-4" />
          HOTELS & ACCOMMODATION
        </div>
        <h3 className="text-[clamp(2.25rem,6vw,4.75rem)] font-light leading-tight tracking-tight text-[#FFF8EA]">
          Stay In {location.name}
        </h3>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-2">
        {location.accommodations.map((stay, index) => (
          <motion.article
            key={`${location.id}-${stay.name}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.35 }}
            className="overflow-hidden rounded-3xl border border-[#B9A88F]/18 bg-[#241C14]/44 backdrop-blur-2xl transition-colors hover:border-[#F1D59A]/30 hover:bg-[#FFF8EA]/8"
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${stay.image})` }}
              aria-hidden="true"
            >
              <div className="h-full w-full bg-gradient-to-t from-[#15110D]/80 via-[#15110D]/20 to-transparent" />
            </div>
            <div className="p-5 sm:p-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[#D89A3A]/30 bg-[#D89A3A]/10 px-3 py-1 text-xs tracking-[0.18em] text-[#F1D59A]">
                  {stay.type}
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-[#E6D9C4]">
                  {stay.altitude}
                </span>
              </div>
              <h4 className="mb-3 text-2xl font-light text-[#FFF8EA]">{stay.name}</h4>
              <p className="mb-5 text-sm leading-relaxed text-[#E6D9C4] sm:text-base">
                {stay.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {stay.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-[#EFE3CF]"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function SlideBackdrop({ image }: { image: string }) {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#15110D] via-[#15110D]/62 to-[#241C14]/22" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#15110D]/82 via-[#15110D]/34 to-[#9B6241]/34" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(155,200,216,0.09),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(216,154,58,0.18),transparent_36%)]" />
    </>
  );
}

export function DestinationExperienceModal({
  location,
  isOpen,
  onClose
}: DestinationExperienceModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const wheelLockRef = useRef(false);
  const currentSlideRef = useRef(0);

  const syncSlide = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const nextIndex = Math.min(slides.length - 1, Math.max(0, index));
    currentSlideRef.current = nextIndex;
    setCurrentSlide(nextIndex);

    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.scrollTo({
      left: nextIndex * scroller.clientWidth,
      behavior
    });
  }, []);

  const updateSlideFromScroll = useCallback((scrollLeft: number, width: number) => {
    if (width <= 0) return;

    const nextIndex = Math.min(slides.length - 1, Math.max(0, Math.round(scrollLeft / width)));
    if (nextIndex !== currentSlideRef.current) {
      currentSlideRef.current = nextIndex;
      setCurrentSlide(nextIndex);
    }
  }, []);

  const goToRelativeSlide = useCallback((offset: number) => {
    syncSlide(currentSlideRef.current + offset);
  }, [syncSlide]);

  useEffect(() => {
    if (!isOpen) return;

    modalRef.current?.focus();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const animationFrame = window.requestAnimationFrame(() => {
      syncSlide(0, 'auto');
    });

    return () => {
      document.body.style.overflow = originalOverflow;
      window.cancelAnimationFrame(animationFrame);
    };
  }, [isOpen, location?.id, syncSlide]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        goToRelativeSlide(1);
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToRelativeSlide(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToRelativeSlide, isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => {
      syncSlide(currentSlideRef.current, 'auto');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, syncSlide]);

  if (!location) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#15110D]/85 px-4 py-6 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="destination-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="relative h-[min(88svh,860px)] w-full max-w-7xl overflow-hidden rounded-[2rem] border border-[#B9A88F]/18 bg-[#241C14]/92 shadow-2xl outline-none backdrop-blur-2xl"
            onWheel={(event) => {
              if (Math.abs(event.deltaY) < 18 || wheelLockRef.current) return;
              wheelLockRef.current = true;
              goToRelativeSlide(event.deltaY > 0 ? 1 : -1);
              window.setTimeout(() => {
                wheelLockRef.current = false;
              }, 520);
            }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close destination experience"
              className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[#FFF8EA] backdrop-blur-xl transition-colors hover:bg-white/15"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => goToRelativeSlide(-1)}
              aria-label="Previous slide"
              disabled={currentSlide === 0}
              className="absolute left-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[#FFF8EA] backdrop-blur-xl transition-colors hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-30 md:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => goToRelativeSlide(1)}
              aria-label="Next slide"
              disabled={currentSlide === slides.length - 1}
              className="absolute right-4 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[#FFF8EA] backdrop-blur-xl transition-colors hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-30 md:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div
              ref={scrollerRef}
              className="flex h-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onScroll={(event) => {
                updateSlideFromScroll(event.currentTarget.scrollLeft, event.currentTarget.clientWidth);
              }}
            >
              <section className="relative h-full min-w-full snap-center overflow-hidden">
                <SlideBackdrop image={location.heroImage} />

                <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 pt-24 sm:px-10 lg:px-16 lg:pb-20">
                  <div className="mb-5 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs tracking-[0.22em] text-[#EFE3CF] backdrop-blur-xl">
                      DAY {String(location.day).padStart(2, '0')}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#D89A3A]/30 bg-[#D89A3A]/10 px-4 py-2 text-sm text-[#F1D59A] backdrop-blur-xl">
                      <Mountain className="h-4 w-4" />
                      {location.altitude}
                    </span>
                  </div>

                  <h2
                    id="destination-modal-title"
                    className="mb-5 max-w-5xl text-[clamp(3rem,9vw,7rem)] font-light leading-none tracking-tight text-[#FFF8EA]"
                  >
                    {location.name}
                  </h2>

                  <div className="mb-6 flex flex-wrap gap-3 text-sm text-[#EFE3CF]">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
                      <Route className="h-4 w-4 text-[#D89A3A]" />
                      {location.distanceFromPrevious}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
                      <Clock className="h-4 w-4 text-[#9BC8D8]" />
                      {location.drivingDuration}
                    </span>
                  </div>

                  <p className="max-w-3xl text-base leading-relaxed text-[#E6D9C4] sm:text-xl">
                    {location.description}
                  </p>
                </div>
              </section>

              {slides.slice(1).map((slide) => (
                <section
                  key={slide.id}
                  className="relative h-full min-w-full snap-center overflow-hidden"
                >
                  <SlideBackdrop image={location.heroImage} />
                  {slide.id === 'accommodations' ? (
                    <AccommodationCards location={location} />
                  ) : (
                    <div className="relative z-10 h-full overflow-y-auto">
                      <ExperienceCards location={location} slideId={slide.id} />
                    </div>
                  )}
                </section>
              ))}
            </div>

            <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#15110D]/60 px-4 py-2 backdrop-blur-xl">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => syncSlide(index)}
                  aria-label={`Go to ${slide.label}`}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index ? 'w-8 bg-[#D89A3A]' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

