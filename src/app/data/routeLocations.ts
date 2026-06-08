export type AccommodationOption = {
  name: string;
  type: string;
  amenities: string[];
  altitude: string;
  description: string;
  image: string;
};

export type RouteLocationBase = {
  id: string;
  day: number;
  name: string;
  altitude: string;
  distanceFromPrevious: string;
  drivingDuration: string;
  description: string;
  viewpoints: string[];
  hotels: string[];
  homestays: string[];
  food: string[];
  shopping: string[];
  restAreas: string[];
  activities: string[];
  travelTips: string[];
  photoSpots: string[];
  image: string;
  mapPosition: {
    x: number;
    y: number;
  };
};

export type RouteLocation = RouteLocationBase & {
  heroImage: string;
  accommodations: AccommodationOption[];
};

const baseRouteLocations: RouteLocationBase[] = [
  {
    id: 'ludhiana',
    day: 1,
    name: 'Ludhiana',
    altitude: '244m',
    distanceFromPrevious: 'Start point',
    drivingDuration: 'Arrival day',
    description: 'The expedition begins in Punjab with final briefings, vehicle preparation, and a comfortable plains departure before the road climbs toward the Himalayas.',
    viewpoints: ['Rakh Bagh heritage zone', 'Sutlej riverside stretch', 'Punjab Agricultural University museum'],
    hotels: ['Hyatt Regency Ludhiana', 'Radisson Blu Ludhiana', 'Park Plaza Ludhiana'],
    homestays: ['Civil Lines hosted stays', 'Model Town guest homes', 'Farmhouse stays outside city limits'],
    food: ['Baba Chicken', 'Basant Avenue cafes', 'Ghumar Mandi food street'],
    shopping: ['Ghumar Mandi', 'Pavilion Mall', 'Chaura Bazaar'],
    restAreas: ['Hotel lounges', 'Rakh Bagh gardens', 'Highway cafe stops'],
    activities: ['Expedition briefing', 'Vehicle loading', 'Welcome dinner'],
    travelTips: ['Start early for the hill drive', 'Carry light snacks and water', 'Keep warm layers accessible before Shimla'],
    photoSpots: ['Rural Punjab highway frames', 'Rakh Bagh morning light', 'Expedition convoy departure'],
    image: 'https://images.unsplash.com/photo-1596464148416-e0916276a9f5?auto=format&fit=crop&w=1600&q=82',
    mapPosition: { x: 8, y: 84 }
  },
  {
    id: 'shimla',
    day: 2,
    name: 'Shimla',
    altitude: '2206m',
    distanceFromPrevious: '165 km',
    drivingDuration: '5-6 hrs',
    description: 'The route rises from Punjab into cedar slopes and colonial hill-town streets, giving travelers their first mountain air and a gentle acclimatization stop.',
    viewpoints: ['The Ridge', 'Jakhu Hill', 'Kufri valley bends'],
    hotels: ['Wildflower Hall', 'Clarkes Hotel', 'The Oberoi Cecil'],
    homestays: ['Mashobra heritage homes', 'Kufri hillside stays', 'Local cedar cottages'],
    food: ['Wake and Bake Cafe', 'Indian Coffee House', 'Mall Road bakeries'],
    shopping: ['Lakkar Bazaar', 'Mall Road stores', 'Tibetan Market'],
    restAreas: ['The Ridge benches', 'Cedar forest pull-offs', 'Hotel garden terraces'],
    activities: ['Heritage walk', 'Cafe evening', 'Kufri side drive'],
    travelTips: ['Expect traffic near Mall Road', 'Layer up after sunset', 'Use Shimla for relaxed acclimatization'],
    photoSpots: ['Christ Church facade', 'Ridge skyline', 'Cedar road frames'],
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=82',
    mapPosition: { x: 19, y: 72 }
  },
  {
    id: 'narkanda',
    day: 3,
    name: 'Narkanda',
    altitude: '2708m',
    distanceFromPrevious: '60 km',
    drivingDuration: '2.5-3 hrs',
    description: 'Pine forests, apple orchards, and high ridges ease the journey into colder air and deeper Himalayan road rhythm.',
    viewpoints: ['Hatu Peak', 'Tani Jubbar Lake', 'Apple orchard terraces'],
    hotels: ['Tethys Ski Resort', 'The Wilderness Resort', 'Hotel Hatu'],
    homestays: ['Orchard family stays', 'Thanedar cottages', 'Kotgarh hosted homes'],
    food: ['Himachali thali stops', 'Local market dhabas', 'Tea stalls on Hatu road'],
    shopping: ['Apple produce shops', 'Local woollens', 'Small market essentials'],
    restAreas: ['Hatu road viewpoints', 'Hotel garden decks', 'Tani Jubbar lake edge'],
    activities: ['Short forest walk', 'Orchard visit', 'Sunset viewpoint drive'],
    travelTips: ['Carry a light jacket', 'Hydrate steadily', 'Approach roads near viewpoints can be narrow'],
    photoSpots: ['Hatu Peak ridge', 'Pine forest bends', 'Apple orchard foregrounds'],
    image: 'https://images.unsplash.com/photo-1596464148416-e0916276a9f5?auto=format&fit=crop&w=1600&q=82',
    mapPosition: { x: 28, y: 65 }
  },
  {
    id: 'sangla',
    day: 4,
    name: 'Sangla',
    altitude: '2621m',
    distanceFromPrevious: '160 km',
    drivingDuration: '6-7 hrs',
    description: 'The Baspa Valley opens with river music, timber villages, apple country, and a softer cultural transition before Spiti turns remote.',
    viewpoints: ['Baspa River banks', 'Kamru Fort approach', 'Village terrace views'],
    hotels: ['Banjara Camp Sangla', 'Kinner Camps', 'Apple Orchard Farmstay'],
    homestays: ['Rakcham family homes', 'Sangla village stays', 'Baspa riverside cottages'],
    food: ['Trout meal stops', 'Local rajma chawal kitchens', 'Camp dining tents'],
    shopping: ['Kinnauri caps', 'Wool shawls', 'Apple products'],
    restAreas: ['Riverside camp lawns', 'Village tea stops', 'Orchard sit-outs'],
    activities: ['Village walk', 'River photography', 'Kamru Fort visit'],
    travelTips: ['Roads can be landslide-prone in rain', 'Keep cash for small shops', 'Evenings cool quickly'],
    photoSpots: ['Baspa River bridge', 'Kamru village lanes', 'Orchard foregrounds'],
    image: 'https://images.unsplash.com/photo-1758701320640-048f894e6639?auto=format&fit=crop&w=1600&q=82',
    mapPosition: { x: 39, y: 54 }
  },
  {
    id: 'chitkul',
    day: 5,
    name: 'Chitkul',
    altitude: '3450m',
    distanceFromPrevious: '25 km',
    drivingDuration: '1.5-2 hrs',
    description: 'A last-village experience where meadows, cold river air, and wood-stone homes create the feeling of standing at the edge of habitation.',
    viewpoints: ['Baspa meadow edge', 'Village temple lane', 'Last village road marker'],
    hotels: ['The Wanderers Nest', 'Zostel Chitkul', 'Local guest houses'],
    homestays: ['Chitkul village homes', 'Baspa meadow homestays', 'Rakcham hosted stays'],
    food: ['Hindustan ka Aakhri Dhaba', 'Homestay meals', 'Tea and maggi stalls'],
    shopping: ['Local woollens', 'Handmade caps', 'Small souvenir stalls'],
    restAreas: ['Baspa riverside meadows', 'Homestay courtyards', 'Village cafe decks'],
    activities: ['Meadow walk', 'Village photography', 'Riverside picnic'],
    travelTips: ['Avoid overexertion at altitude', 'Carry warm layers', 'Network can be patchy'],
    photoSpots: ['Last village sign', 'Baspa riverside', 'Wooden homes with mountain backdrop'],
    image: 'https://images.unsplash.com/photo-1566323124805-757e5c41d37c?auto=format&fit=crop&w=1600&q=82',
    mapPosition: { x: 47, y: 47 }
  },
  {
    id: 'kalpa',
    day: 6,
    name: 'Kalpa',
    altitude: '2960m',
    distanceFromPrevious: '65 km',
    drivingDuration: '3-4 hrs',
    description: 'Kalpa frames the Kinner Kailash range with monastery roofs, apple orchards, and some of the finest golden-hour mountain views in Kinnaur.',
    viewpoints: ['Kinner Kailash viewpoint', 'Suicide Point road', 'Roghi village'],
    hotels: ['The Grand Shamba-La', 'Hotel Kalpa Deshang', 'Kinner Villa'],
    homestays: ['Roghi village homes', 'Apple orchard stays', 'Kalpa family guesthouses'],
    food: ['Local thali kitchens', 'Market tea cafes', 'Hotel terrace dining'],
    shopping: ['Kinnauri shawls', 'Dry fruit shops', 'Local apple products'],
    restAreas: ['Orchard terraces', 'Hotel balconies', 'Village viewpoint benches'],
    activities: ['Sunrise viewing', 'Village walk', 'Orchard photography'],
    travelTips: ['Wake early for Kinner Kailash sunrise', 'Keep the drive flexible for road work delays', 'Carry a wind layer'],
    photoSpots: ['Kinner Kailash sunrise', 'Roghi road curve', 'Orchard frames with peaks'],
    image: 'https://images.unsplash.com/photo-1778052030222-34a74e4e103a?auto=format&fit=crop&w=1600&q=82',
    mapPosition: { x: 45, y: 59 }
  },
  {
    id: 'nako',
    day: 7,
    name: 'Nako',
    altitude: '3662m',
    distanceFromPrevious: '100 km',
    drivingDuration: '4-5 hrs',
    description: 'A high-altitude lake village where the terrain becomes stark, sacred, and beautifully quiet before the entry into Spiti.',
    viewpoints: ['Nako Lake circuit', 'Village monastery lane', 'Hangrang Valley outlook'],
    hotels: ['Reo Purgil camps', 'Lake View guest houses', 'Nako village lodges'],
    homestays: ['Nako family homes', 'Lake-side hosted stays', 'Village courtyard stays'],
    food: ['Simple thukpa kitchens', 'Tea stalls near lake', 'Homestay dinners'],
    shopping: ['Prayer flags', 'Small craft stalls', 'Village essentials'],
    restAreas: ['Lake edge benches', 'Guesthouse terraces', 'Monastery courtyard'],
    activities: ['Lake walk', 'Village exploration', 'Monastery visit'],
    travelTips: ['Walk slowly at this altitude', 'Carry sun protection', 'Facilities are simple and seasonal'],
    photoSpots: ['Nako Lake reflections', 'Mud-house lanes', 'High desert ridgelines'],
    image: 'https://images.unsplash.com/photo-1661145555121-d02de33ebc2d?auto=format&fit=crop&w=1600&q=82',
    mapPosition: { x: 57, y: 50 }
  },
  {
    id: 'tabo',
    day: 8,
    name: 'Tabo',
    altitude: '3280m',
    distanceFromPrevious: '65 km',
    drivingDuration: '2-3 hrs',
    description: 'Ancient monastery walls, meditation caves, and muted desert light make Tabo one of the route most atmospheric heritage pauses.',
    viewpoints: ['Tabo Monastery complex', 'Meditation caves', 'Spiti river valley edge'],
    hotels: ['Dewachen Retreat', 'Tow Dhey Guest House', 'Local monastery guesthouses'],
    homestays: ['Tabo family stays', 'Village guest rooms', 'Monastery-side homes'],
    food: ['Tibetan cafes', 'Homestyle thukpa kitchens', 'Simple monastery-area eateries'],
    shopping: ['Prayer flags', 'Local handicrafts', 'Small monastery-side shops'],
    restAreas: ['Monastery courtyard', 'Guesthouse terraces', 'Quiet cafe corners'],
    activities: ['Monastery visit', 'Cave walk', 'Cultural interpretation session'],
    travelTips: ['Respect photography restrictions inside sacred spaces', 'Walk slowly in dry air', 'Carry sunscreen and lip balm'],
    photoSpots: ['Mud monastery walls', 'Cave trail viewpoint', 'Golden-hour village lanes'],
    image: 'https://images.unsplash.com/photo-1572295250942-8a442b3e2c39?auto=format&fit=crop&w=1600&q=82',
    mapPosition: { x: 66, y: 44 }
  },
  {
    id: 'kaza',
    day: 9,
    name: 'Kaza',
    altitude: '3650m',
    distanceFromPrevious: '50 km',
    drivingDuration: '1.5-2 hrs',
    description: 'The operational heart of Spiti, surrounded by cold desert ridges and used for refueling, market access, and high-village excursions.',
    viewpoints: ['Kaza market ridge', 'Spiti river basin', 'Langza-Hikkim-Komic circuit'],
    hotels: ['The Grand Dewachen', 'Hotel Deyzor', 'Spiti Heritage Himalayan Brothers'],
    homestays: ['Kaza family stays', 'Langza homestays', 'Kibber village homes'],
    food: ['Cafe Zomsa', 'The Himalayan Cafe', 'Sol Cafe'],
    shopping: ['Kaza market', 'Tibetan craft shops', 'Expedition supply stores'],
    restAreas: ['Cafe lounges', 'Hotel terraces', 'Riverside pull-offs'],
    activities: ['Market walk', 'Permit and fuel coordination', 'High-village day loop'],
    travelTips: ['Use Kaza to refuel and restock', 'Plan high-altitude excursions after acclimatizing', 'Carry cash as connectivity varies'],
    photoSpots: ['Kaza town panorama', 'Spiti river bends', 'High-village road switchbacks'],
    image: 'https://images.unsplash.com/photo-1663076968785-baebf243d07d?auto=format&fit=crop&w=1600&q=82',
    mapPosition: { x: 75, y: 38 }
  },
  {
    id: 'key-monastery',
    day: 10,
    name: 'Key Monastery',
    altitude: '4166m',
    distanceFromPrevious: '15 km',
    drivingDuration: '35-45 min',
    description: 'The signature Spiti image: whitewashed monastery layers rising above the valley, prayer flags snapping in wind, and mountains on every side.',
    viewpoints: ['Key Monastery viewpoint', 'Prayer flag ridge', 'Kibber road pull-off'],
    hotels: ['Kaza hotels as base', 'Kibber homestays', 'Monastery guest stay by availability'],
    homestays: ['Kibber hosted homes', 'Kaza guest families', 'Monastery-side basic stays'],
    food: ['Kaza cafes before departure', 'Simple monastery tea', 'Kibber homestay meals'],
    shopping: ['Prayer flags', 'Small monastery souvenirs', 'Kaza craft shops'],
    restAreas: ['Monastery courtyard', 'Viewpoint ledges', 'Kibber village stops'],
    activities: ['Monastery tour', 'Prayer hall visit', 'Valley photography'],
    travelTips: ['Dress modestly inside monastery areas', 'Ask before photographing people', 'Wind can be strong on viewpoints'],
    photoSpots: ['Classic monastery viewpoint', 'Prayer flags against peaks', 'Road curve below monastery'],
    image: 'https://images.unsplash.com/photo-1579531403068-8d6fd2b3f45d?auto=format&fit=crop&w=1600&q=82',
    mapPosition: { x: 81, y: 35 }
  },
  {
    id: 'chandratal',
    day: 11,
    name: 'Chandratal',
    altitude: '4300m',
    distanceFromPrevious: '100 km',
    drivingDuration: '5-6 hrs',
    description: 'A wilderness finale beside the Moon Lake, where the route becomes raw, star-filled, and deeply expeditionary.',
    viewpoints: ['Chandratal Lake trail', 'Campsite ridge', 'Kunzum approach views'],
    hotels: ['Seasonal luxury camps', 'Parasol Camps', 'Jamaica Camp'],
    homestays: ['No permanent homestays', 'Seasonal hosted camps', 'Kaza base stays before departure'],
    food: ['Camp dining tents', 'Packed lunch stops', 'Tea stalls by season'],
    shopping: ['No reliable shopping', 'Buy essentials in Kaza', 'Carry personal snacks'],
    restAreas: ['Campsite lounges', 'Lake trail rest points', 'Vehicle staging area'],
    activities: ['Lake walk', 'Stargazing', 'Camp evening by regulations'],
    travelTips: ['Carry thermals and wind protection', 'Do not rush near the lake at altitude', 'Expect basic facilities despite premium camps'],
    photoSpots: ['Lake curve at blue hour', 'Milky Way over camp', 'Kunzum road landscapes'],
    image: 'https://images.unsplash.com/photo-1482406611936-43ea538e39d4?auto=format&fit=crop&w=1600&q=82',
    mapPosition: { x: 71, y: 66 }
  },
  {
    id: 'manali',
    day: 12,
    name: 'Manali',
    altitude: '2050m',
    distanceFromPrevious: '125 km',
    drivingDuration: '6-7 hrs',
    description: 'The descent returns to forests, cafes, comfort, and easier logistics after the high desert crossing.',
    viewpoints: ['Solang Valley', 'Old Manali lanes', 'Beas River viewpoints'],
    hotels: ['The Himalayan', 'Span Resort and Spa', 'Larisa Resort'],
    homestays: ['Old Manali cottages', 'Vashisht family stays', 'Naggar heritage homes'],
    food: ['Johnsons Cafe', 'Cafe 1947', 'Old Manali bakeries'],
    shopping: ['Mall Road', 'Old Manali boutiques', 'Tibetan market'],
    restAreas: ['Resort lawns', 'Beas river cafes', 'Spa lounges'],
    activities: ['Recovery day', 'Cafe walk', 'Souvenir shopping'],
    travelTips: ['Use this as a buffer for weather delays', 'Book spa or laundry if staying overnight', 'Traffic can be heavy near Mall Road'],
    photoSpots: ['Old Manali bridge', 'Beas riverside', 'Forest resort decks'],
    image: 'https://images.unsplash.com/photo-1625647891375-91463187659f?auto=format&fit=crop&w=1600&q=82',
    mapPosition: { x: 78, y: 76 }
  },
  {
    id: 'chandigarh',
    day: 13,
    name: 'Chandigarh',
    altitude: '300m',
    distanceFromPrevious: '305 km',
    drivingDuration: '7-8 hrs',
    description: 'The expedition closes in Chandigarh, returning from mountain wilderness to wide boulevards, refined hotels, and a relaxed farewell evening.',
    viewpoints: ['Sukhna Lake promenade', 'Capitol Complex exterior', 'Shivalik foothill outlook'],
    hotels: ['JW Marriott Chandigarh', 'Hyatt Centric Chandigarh', 'Lemon Tree Premier'],
    homestays: ['Premium city apartments', 'Airport-side hosted stays', 'Sector 8 guest residences'],
    food: ['Sector 17 cafes', 'Pal Dhaba', 'Nik Bakers'],
    shopping: ['Sector 17 Plaza', 'Elante Mall', 'Sector 22 market'],
    restAreas: ['Sukhna Lake gardens', 'Hotel lounge zones', 'Airport departure lounge'],
    activities: ['Farewell dinner', 'Souvenir shopping', 'Post-expedition rest'],
    travelTips: ['Keep this as a buffer for mountain-road delays', 'Book late departures for the next day', 'Use the evening for laundry and repacking'],
    photoSpots: ['Sukhna Lake sunset', 'Open Hand Monument', 'Sector boulevards at dusk'],
    image: 'https://images.unsplash.com/photo-1596464148416-e0916276a9f5?auto=format&fit=crop&w=1600&q=82',
    mapPosition: { x: 36, y: 88 }
  }
];

function buildAccommodations(location: RouteLocationBase): AccommodationOption[] {
  const primaryHotel = location.hotels[0] ?? `${location.name} Premium Hotel`;
  const primaryHomestay = location.homestays[0] ?? `${location.name} Hosted Stay`;

  return [
    {
      name: primaryHotel,
      type: 'Premium Hotel',
      amenities: ['Heated rooms', 'Private dining', 'Guided transfers', 'Expedition parking'],
      altitude: location.altitude,
      description: `A comfortable hotel base in ${location.name} for travelers who prefer polished service, reliable rest, and easy access to the day route.`,
      image: location.image
    },
    {
      name: primaryHomestay,
      type: 'Boutique Homestay',
      amenities: ['Local meals', 'Host-led guidance', 'Warm bedding', 'Cultural atmosphere'],
      altitude: location.altitude,
      description: `A more intimate stay option in ${location.name}, focused on local hospitality, slower evenings, and a closer connection to the destination.`,
      image: location.image
    }
  ];
}

export const routeLocations: RouteLocation[] = baseRouteLocations.map((location) => ({
  ...location,
  heroImage: location.image,
  accommodations: buildAccommodations(location)
}));
