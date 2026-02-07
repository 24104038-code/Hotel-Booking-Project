import oldFallsImg from '@/assets/old-falls.jpg';
import tigerFallsImg from '@/assets/tiger-falls.jpg';

export const VILLA_IMAGES = {
  exterior: [
    {
      id: 1,
      url: 'https://cdn-ai.onspace.ai/onspace/files/hsz7Vo742UbYgqtwB3T6zg/1000109263.jpg',
      alt: 'Aroma Villas exterior with mountain backdrop',
      caption: 'Villa with stunning mountain views',
    },
    {
      id: 2,
      url: 'https://cdn-ai.onspace.ai/onspace/files/FKLayUDXZztSweaUQtorpf/1000109264.jpg',
      alt: 'Row of Aroma Villas',
      caption: 'Modern villa architecture',
    },
    {
      id: 3,
      url: 'https://cdn-ai.onspace.ai/onspace/files/RRFipyGwS2pEngRnoife4Q/1000109266.jpg',
      alt: 'Villa street view',
      caption: 'Peaceful surroundings',
    },
    {
      id: 4,
      url: 'https://cdn-ai.onspace.ai/onspace/files/eKt9U5SqMwLKRpDabuRMrt/1000109265.jpg',
      alt: 'Villa with balcony',
      caption: 'Spacious balcony area',
    },
    {
      id: 5,
      url: 'https://cdn-ai.onspace.ai/onspace/files/B6Z87tGkPM3kNNP6By3QUJ/1000109262.jpg',
      alt: 'Villa front view',
      caption: 'Modern design with parking',
    },
    {
      id: 6,
      url: 'https://cdn-ai.onspace.ai/onspace/files/MDrDpfPagWg9uhszSGhqxB/1000109267.jpg',
      alt: 'Villa compound view',
      caption: 'Serene environment',
    },
  ],
  interior: [
    {
      id: 7,
      url: 'https://cdn-ai.onspace.ai/onspace/files/gtpMxTTNSESewXCUdXd7u4/1000109259.jpg',
      alt: 'Bedroom with decorative ceiling',
      caption: 'Elegant bedroom with designer ceiling',
    },
    {
      id: 8,
      url: 'https://cdn-ai.onspace.ai/onspace/files/6eUgJpLQrFvkjgooDrjt69/1000109261.jpg',
      alt: 'Green themed bedroom',
      caption: 'Nature-inspired room decor',
    },
  ],
  nature: [
    {
      id: 9,
      url: 'https://cdn-ai.onspace.ai/onspace/files/9U2aDRB4mSpDt3PUyVvGNS/courtallam.webp',
      alt: 'Courtallam Main Falls',
      caption: 'Majestic Courtallam Main Falls',
    },
    {
      id: 10,
      url: 'https://cdn-ai.onspace.ai/onspace/files/SfzxTfp8wqriJz75yv8BNr/five-falls.jpg',
      alt: 'Five Falls Courtallam',
      caption: 'Famous Five Falls nearby',
    },
  ],
};

export const ALL_GALLERY_IMAGES = [
  ...VILLA_IMAGES.exterior,
  ...VILLA_IMAGES.interior,
  ...VILLA_IMAGES.nature,
];

export const AMENITIES = [
  {
    id: 'ac',
    name: 'Air Conditioning',
    description: 'All rooms equipped with split AC for comfortable temperature control',
    icon: 'Snowflake',
  },
  {
    id: 'tv',
    name: 'Television',
    description: 'LED TV with cable connection in every room',
    icon: 'Tv',
  },
  {
    id: 'parking',
    name: 'Free Parking',
    description: 'Secure covered parking for cars and two-wheelers',
    icon: 'Car',
  },
  {
    id: 'hot-water',
    name: 'Hot Water',
    description: '24/7 hot water supply in all bathrooms',
    icon: 'Droplets',
  },
  {
    id: 'garden',
    name: 'Garden / Sit-out',
    description: 'Beautiful garden area with outdoor seating',
    icon: 'TreePine',
  },
  {
    id: 'security',
    name: '24/7 Security',
    description: 'Round-the-clock security for your peace of mind',
    icon: 'Shield',
  },
  {
    id: 'water',
    name: 'Water Supply',
    description: '24/7 clean water supply with overhead tank',
    icon: 'Waves',
  },
  {
    id: 'power',
    name: 'Power Backup',
    description: 'Inverter backup for uninterrupted power supply',
    icon: 'Zap',
  },
  {
    id: 'wifi',
    name: 'Wi-Fi',
    description: 'High-speed internet connectivity',
    icon: 'Wifi',
  },
];

export const TOURIST_SPOTS = [
  {
    id: 1,
    name: 'Five Falls (Aintharuvi)',
    distance: '1.5 km',
    duration: '5 mins',
    description: 'The most famous waterfall in Courtallam with five streams cascading down',
    image: 'https://cdn-ai.onspace.ai/onspace/files/SfzxTfp8wqriJz75yv8BNr/five-falls.jpg',
    type: 'Waterfall',
  },
  {
    id: 2,
    name: 'Main Falls (Peraruvi)',
    distance: '2 km',
    duration: '8 mins',
    description: 'The largest and most majestic waterfall in Courtallam with medicinal herbs',
    image: 'https://cdn-ai.onspace.ai/onspace/files/9U2aDRB4mSpDt3PUyVvGNS/courtallam.webp',
    type: 'Waterfall',
  },
  {
    id: 3,
    name: 'Old Falls (Pazhaiya Aruvi)',
    distance: '2.5 km',
    duration: '10 mins',
    description: 'Ancient waterfall surrounded by lush greenery and perfect for bathing',
    image: oldFallsImg,
    type: 'Waterfall',
  },
  {
    id: 4,
    name: 'Tiger Falls',
    distance: '3 km',
    duration: '12 mins',
    description: 'Named after the tiger-shaped rock formation near the falls',
    image: tigerFallsImg,
    type: 'Waterfall',
  },
  {
    id: 5,
    name: 'Thirukkutralanathar Temple',
    distance: '2 km',
    duration: '8 mins',
    description: 'Ancient Shiva temple with beautiful architecture and spiritual significance',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop',
    type: 'Temple',
  },
  {
    id: 6,
    name: 'Honey Falls',
    distance: '4 km',
    duration: '15 mins',
    description: 'Small but beautiful falls known for the honey-colored rocks',
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop',
    type: 'Waterfall',
  },
  {
    id: 7,
    name: 'Banana Forest Falls',
    distance: '5 km',
    duration: '18 mins',
    description: 'Secluded waterfall surrounded by wild banana plantations',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop',
    type: 'Waterfall',
  },
  {
    id: 8,
    name: 'Agasthiyar Falls',
    distance: '25 km',
    duration: '45 mins',
    description: 'Sacred waterfall named after Sage Agasthiyar with a nearby temple',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=600&h=400&fit=crop',
    type: 'Waterfall',
  },
];

export const NEARBY_PLACES = [
  {
    id: 'border-parotta',
    name: 'Border Parotta Shop',
    type: 'Restaurant',
    distance: '500m',
    description: 'Famous local restaurant known for authentic parotta and non-veg dishes',
    icon: 'UtensilsCrossed',
  },
  {
    id: 'five-falls',
    name: 'Five Falls',
    type: 'Attraction',
    distance: '1.5 km',
    description: 'Most popular waterfall in Courtallam',
    icon: 'Droplets',
  },
  {
    id: 'main-falls',
    name: 'Main Falls',
    type: 'Attraction',
    distance: '2 km',
    description: 'Largest waterfall with medicinal properties',
    icon: 'Waves',
  },
  {
    id: 'bus-stand',
    name: 'Courtallam Bus Stand',
    type: 'Transport',
    distance: '1 km',
    description: 'Main bus station with connections to major cities',
    icon: 'Bus',
  },
  {
    id: 'hospital',
    name: 'Government Hospital',
    type: 'Medical',
    distance: '2 km',
    description: '24/7 emergency medical services',
    icon: 'Hospital',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    location: 'Chennai',
    rating: 5,
    comment: 'Amazing stay! The villa was clean, spacious, and the mountain view was breathtaking. Perfect for our family vacation.',
    date: '2024-12-15',
    avatar: 'RK',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Bangalore',
    rating: 5,
    comment: 'Best accommodation in Courtallam! The staff was very helpful and the proximity to Five Falls made our trip memorable.',
    date: '2024-12-10',
    avatar: 'PS',
  },
  {
    id: 3,
    name: 'Mohammed Ali',
    location: 'Madurai',
    rating: 4,
    comment: 'Great value for money. Clean rooms, good parking facility, and peaceful environment. Will definitely visit again.',
    date: '2024-11-28',
    avatar: 'MA',
  },
  {
    id: 4,
    name: 'Lakshmi Narayanan',
    location: 'Coimbatore',
    rating: 5,
    comment: 'We booked for a group trip and everyone loved it! The campfire arrangement was fantastic.',
    date: '2024-11-20',
    avatar: 'LN',
  },
  {
    id: 5,
    name: 'Deepak Raj',
    location: 'Tirunelveli',
    rating: 5,
    comment: 'Excellent hospitality! The food service was great and rooms were very comfortable with AC.',
    date: '2024-11-15',
    avatar: 'DR',
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 1,
    title: 'Prime Location',
    description: 'Located on Five Falls Road, just minutes away from the famous waterfalls',
    icon: 'MapPin',
  },
  {
    id: 2,
    title: 'Modern Amenities',
    description: 'AC rooms, Wi-Fi, TV, hot water, and 24/7 power backup for comfortable stay',
    icon: 'Sparkles',
  },
  {
    id: 3,
    title: 'Family Friendly',
    description: 'Spacious rooms perfect for families, groups, and tourists',
    icon: 'Users',
  },
  {
    id: 4,
    title: 'Nature Experience',
    description: 'Wake up to misty mountains and fresh air in the Spa of South India',
    icon: 'Mountain',
  },
  {
    id: 5,
    title: 'Best Value',
    description: 'Affordable rates starting from ₹2,000/day with premium facilities',
    icon: 'BadgeIndianRupee',
  },
  {
    id: 6,
    title: 'Easy Booking',
    description: 'Simple online booking with multiple payment options',
    icon: 'Calendar',
  },
];
