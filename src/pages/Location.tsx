import { MapPin, Clock, Navigation, UtensilsCrossed, Droplets, Waves, Bus, Building } from 'lucide-react';
import TouristSpotCard from '@/components/features/TouristSpotCard';
import ContactButtons from '@/components/features/ContactButtons';
import { TOURIST_SPOTS, NEARBY_PLACES, VILLA_IMAGES } from '@/constants/mockData';
import { SITE_CONFIG } from '@/constants/config';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  UtensilsCrossed,
  Droplets,
  Waves,
  Bus,
  Hospital: Building,
};

export default function Location() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={VILLA_IMAGES.nature[1].url}
            alt="Five Falls"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
              Location
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-on-dark mb-6">
              Find Us in Courtallam
            </h1>
            <p className="text-on-dark/90 text-lg">
              Perfectly located on Five Falls Road, near all major attractions
            </p>
          </div>
        </div>
      </section>

      {/* Map & Address Section */}
      <section className="section-padding bg-elevated">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-medium h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15775.336754645377!2d77.26!3d8.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04172e5f6ad76d%3A0x8d5b1b1a1b1b1b1b!2sFive%20Falls%2C%20Courtallam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aroma Villas Location"
              />
            </div>

            {/* Address & Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-default mb-4">
                  Our Address
                </h2>
                <div className="flex items-start gap-4 p-5 bg-cream rounded-xl">
                  <MapPin className="size-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-default mb-1">Aroma Villas</p>
                    <p className="text-subtle">{SITE_CONFIG.contact.address}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-default mb-4">
                  How to Reach
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                    <Navigation className="size-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-default text-sm">From Tenkasi</p>
                      <p className="text-sm text-subtle">15 km via NH744 • ~25 mins</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                    <Navigation className="size-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-default text-sm">From Tirunelveli</p>
                      <p className="text-sm text-subtle">50 km via NH744 • ~1 hour</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-cream rounded-lg">
                    <Navigation className="size-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-default text-sm">From Madurai</p>
                      <p className="text-sm text-subtle">150 km via NH44 • ~3 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-default mb-4">
                  Get Directions
                </h3>
                <ContactButtons message="Hi! I need directions to Aroma Villas on Five Falls Road, Courtallam." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Places */}
      <section className="section-padding bg-cream leaf-pattern">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-3xl font-bold text-default mb-4">
              Nearby Places
            </h2>
            <p className="text-subtle">
              Essential services and attractions near Aroma Villas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEARBY_PLACES.map(place => {
              const Icon = iconMap[place.icon] || MapPin;
              return (
                <div
                  key={place.id}
                  className="flex items-start gap-4 p-5 bg-elevated rounded-xl shadow-soft"
                >
                  <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-default">{place.name}</h3>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">
                        {place.distance}
                      </span>
                    </div>
                    <p className="text-sm text-muted">{place.type}</p>
                    <p className="text-sm text-subtle mt-1">{place.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tourist Attractions */}
      <section className="section-padding bg-elevated">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-3xl font-bold text-default mb-4">
              Tourist Attractions
            </h2>
            <p className="text-subtle">
              Explore the famous waterfalls and temples of Courtallam
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOURIST_SPOTS.map(spot => (
              <TouristSpotCard key={spot.id} spot={spot} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
