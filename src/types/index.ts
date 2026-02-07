export interface RoomType {
  id: string;
  name: string;
  type: 'AC' | 'Non-AC';
  pricePerDay: number;
  capacity: number;
  beds: string;
  description: string;
}

export interface AddOnService {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: 'food' | 'activity' | 'accommodation';
  description: string;
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomId: string;
  addOns: string[];
  guestName: string;
  guestPhone: string;
  specialRequests: string;
}

export interface BookingCalculation {
  roomTotal: number;
  addOnsTotal: number;
  nights: number;
  grandTotal: number;
  breakdown: {
    label: string;
    amount: number;
  }[];
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  caption: string;
}

export interface TouristSpot {
  id: number;
  name: string;
  distance: string;
  duration: string;
  description: string;
  image: string;
  type: string;
}

export interface NearbyPlace {
  id: string;
  name: string;
  type: string;
  distance: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string;
}
