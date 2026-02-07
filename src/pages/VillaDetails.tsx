import { Link } from 'react-router-dom';
import { ArrowRight, Home, Bed, Car, Droplets, Zap, Wifi, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RoomCard from '@/components/features/RoomCard';
import GalleryGrid from '@/components/features/GalleryGrid';
import { ROOM_TYPES } from '@/constants/config';
import { VILLA_IMAGES } from '@/constants/mockData';

const villaFeatures = [
  { icon: Home, label: '2-Storey Villa', description: 'Spacious modern construction' },
  { icon: Bed, label: '3 Bedrooms', description: 'Comfortable sleeping arrangements' },
  { icon: Car, label: 'Free Parking', description: 'Secure covered parking' },
  { icon: Droplets, label: '24/7 Water', description: 'Continuous water supply' },
  { icon: Zap, label: 'Power Backup', description: 'Inverter for uninterrupted power' },
  { icon: Wifi, label: 'Wi-Fi', description: 'High-speed internet' },
];

const includedAmenities = [
  'Air Conditioning (AC rooms)',
  'LED Television with cable',
  'Clean bed linens & towels',
  'Hot water supply',
  'Ceiling fans',
  'Attached bathrooms',
  'Balcony access',
  'Garden view',
  'Kitchen facility (on request)',
  'Drinking water',
];

export default function VillaDetails() {
  const allImages = [...VILLA_IMAGES.exterior, ...VILLA_IMAGES.interior];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={VILLA_IMAGES.exterior[0].url}
            alt="Aroma Villas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
              Villa Details
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-on-dark mb-6">
              Your Home in Courtallam
            </h1>
            <p className="text-on-dark/90 text-lg">
              Modern villas with all amenities, stunning views, and nature at your doorstep
            </p>
          </div>
        </div>
      </section>

      {/* Villa Overview */}
      <section className="section-padding bg-elevated">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Features Grid */}
              <div>
                <h2 className="font-display text-2xl font-bold text-default mb-6">
                  Villa Features
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {villaFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-cream rounded-xl"
                    >
                      <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <feature.icon className="size-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-default text-sm">{feature.label}</p>
                        <p className="text-xs text-muted">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Gallery */}
              <div>
                <h2 className="font-display text-2xl font-bold text-default mb-6">
                  Photo Gallery
                </h2>
                <GalleryGrid images={allImages} columns={3} />
              </div>

              {/* Description */}
              <div>
                <h2 className="font-display text-2xl font-bold text-default mb-4">
                  About the Villa
                </h2>
                <div className="prose prose-lg text-subtle max-w-none">
                  <p>
                    Aroma Villas offers beautifully designed 2-storey villas with modern 
                    architecture that blends seamlessly with the natural surroundings. 
                    Each villa features spacious rooms, contemporary interiors, and private 
                    balconies offering stunning views of the Western Ghats.
                  </p>
                  <p>
                    Located on Five Falls Road, you're just a short drive from all the 
                    famous waterfalls of Courtallam. The villa compound provides a peaceful 
                    environment with ample parking space and beautifully maintained gardens.
                  </p>
                  <p>
                    Whether you choose our air-conditioned rooms for complete comfort or 
                    our naturally ventilated rooms to enjoy the fresh mountain breeze, 
                    you'll experience the perfect stay in Courtallam.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Price Card */}
                <div className="bg-primary text-on-dark rounded-xl p-6 shadow-medium">
                  <h3 className="font-display text-xl font-semibold mb-2">
                    Starting From
                  </h3>
                  <p className="font-display text-4xl font-bold text-accent mb-1">
                    ₹2,000
                  </p>
                  <p className="text-on-dark/70 text-sm mb-6">per night</p>
                  <Link to="/booking" className="block">
                    <Button className="btn-accent w-full">
                      Book Now
                      <ArrowRight className="size-4" />
                    </Button>
                  </Link>
                </div>

                {/* What's Included */}
                <div className="bg-cream rounded-xl p-6">
                  <h3 className="font-display text-lg font-semibold text-default mb-4">
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {includedAmenities.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-subtle">
                        <Check className="size-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="section-padding bg-cream leaf-pattern">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-3xl font-bold text-default mb-4">
              Room Options & Pricing
            </h2>
            <p className="text-subtle">
              Choose from our AC and Non-AC rooms based on your preference and budget
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROOM_TYPES.map(room => (
              <RoomCard key={room.id} room={room} showSelectButton={false} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/booking">
              <Button className="btn-primary text-lg px-8 py-6">
                Select Room & Book
                <ArrowRight className="size-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
