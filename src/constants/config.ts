export const SITE_CONFIG = {
  name: 'Aroma Villas',
  tagline: 'Luxury Nature Retreat in Courtallam',
  description: 'Experience peaceful luxury amidst the natural beauty of Courtallam. Your perfect getaway near the majestic Five Falls.',
  contact: {
    phone: '9688530001',
    whatsapp: '919688530001',
    address: 'Five Falls Road, Courtallam, Tenkasi District, Tamil Nadu',
  },
  location: {
    lat: 8.9318,
    lng: 77.2760,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.8!2d77.276!3d8.9318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFive%20Falls%20Road%2C%20Courtallam!5e0!3m2!1sen!2sin!4v1234567890',
  },
  social: {
    whatsappMessage: 'Hello! I am interested in booking Aroma Villas. Please share availability.',
  },
};

export const ROOM_TYPES = [
  {
    id: 'ac-deluxe',
    name: 'AC Deluxe Room',
    type: 'AC',
    pricePerDay: 3000,
    capacity: 4,
    beds: '1 King + 1 Single',
    description: 'Spacious air-conditioned room with modern amenities and mountain views',
  },
  {
    id: 'ac-standard',
    name: 'AC Standard Room',
    type: 'AC',
    pricePerDay: 2500,
    capacity: 3,
    beds: '1 Queen Bed',
    description: 'Comfortable air-conditioned room perfect for small families',
  },
  {
    id: 'non-ac-deluxe',
    name: 'Non-AC Deluxe Room',
    type: 'Non-AC',
    pricePerDay: 2200,
    capacity: 4,
    beds: '1 King + 1 Single',
    description: 'Well-ventilated room with ceiling fan and fresh mountain breeze',
  },
  {
    id: 'non-ac-standard',
    name: 'Non-AC Standard Room',
    type: 'Non-AC',
    pricePerDay: 2000,
    capacity: 3,
    beds: '1 Queen Bed',
    description: 'Budget-friendly option with natural ventilation and comfort',
  },
];

export const ADD_ON_SERVICES = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    price: 150,
    unit: 'per person/day',
    category: 'food',
    description: 'South Indian breakfast with coffee/tea',
  },
  {
    id: 'lunch',
    name: 'Lunch',
    price: 200,
    unit: 'per person/day',
    category: 'food',
    description: 'Traditional Tamil meals with rice, sambar, and sides',
  },
  {
    id: 'dinner',
    name: 'Dinner',
    price: 200,
    unit: 'per person/day',
    category: 'food',
    description: 'Delicious home-style dinner with variety',
  },
  {
    id: 'snacks',
    name: 'Snacks & Beverages',
    price: 100,
    unit: 'per person/day',
    category: 'food',
    description: 'Evening snacks with tea/coffee',
  },
  {
    id: 'campfire',
    name: 'Campfire / BBQ',
    price: 1500,
    unit: 'per session',
    category: 'activity',
    description: 'Evening campfire with BBQ setup',
  },
  {
    id: 'sightseeing',
    name: 'Local Sightseeing',
    price: 1000,
    unit: 'per trip',
    category: 'activity',
    description: 'Guided tour to nearby waterfalls and attractions',
  },
  {
    id: 'extra-bed',
    name: 'Extra Bed',
    price: 500,
    unit: 'per night',
    category: 'accommodation',
    description: 'Additional mattress with bedding',
  },
];

export const PAYMENT_METHODS = [
  { id: 'upi', name: 'UPI', icon: 'Smartphone', description: 'Google Pay, PhonePe, Paytm' },
  { id: 'card', name: 'Debit/Credit Card', icon: 'CreditCard', description: 'Visa, Mastercard, RuPay' },
  { id: 'netbanking', name: 'Net Banking', icon: 'Building', description: 'All major banks supported' },
];

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/villa-details', label: 'Villa Details' },
  { href: '/amenities', label: 'Amenities' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/location', label: 'Location' },
  { href: '/booking', label: 'Book Now' },
  { href: '/contact', label: 'Contact' },
];
