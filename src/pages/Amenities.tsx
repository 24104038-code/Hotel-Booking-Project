import { Link } from 'react-router-dom';
import { ArrowRight, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AmenityCard from '@/components/features/AmenityCard';
import { AMENITIES, VILLA_IMAGES } from '@/constants/mockData';

export default function Amenities() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={VILLA_IMAGES.interior[1].url}
            alt="Villa interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
              Amenities
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-on-dark mb-6">
              Modern Comforts in Nature
            </h1>
            <p className="text-on-dark/90 text-lg">
              All the facilities you need for a comfortable and memorable stay
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="section-padding bg-elevated">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-default mb-4">
              Villa Facilities
            </h2>
            <p className="text-subtle">
              Aroma Villas is equipped with modern amenities to ensure your comfort
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AMENITIES.map(amenity => (
              <AmenityCard
                key={amenity.id}
                name={amenity.name}
                description={amenity.description}
                icon={amenity.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-cream">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-elevated rounded-xl border border-light">
              <XCircle className="size-6 text-red-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-default mb-2">Please Note</h3>
                <p className="text-subtle text-sm">
                  Aroma Villas does not have a swimming pool facility. However, you can enjoy 
                  natural bathing experiences at the nearby Courtallam waterfalls, which are 
                  famous for their medicinal properties and refreshing waters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-elevated">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-3xl font-bold text-default mb-4">
              Additional Services
            </h2>
            <p className="text-subtle">
              Enhance your stay with our optional add-on services
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-cream rounded-xl">
              <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🍳</span>
              </div>
              <h3 className="font-semibold text-default mb-2">Food Service</h3>
              <p className="text-sm text-subtle">Breakfast, lunch & dinner available on request</p>
            </div>

            <div className="text-center p-6 bg-cream rounded-xl">
              <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="font-semibold text-default mb-2">Campfire & BBQ</h3>
              <p className="text-sm text-subtle">Evening campfire setup with BBQ arrangement</p>
            </div>

            <div className="text-center p-6 bg-cream rounded-xl">
              <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🗺️</span>
              </div>
              <h3 className="font-semibold text-default mb-2">Local Tours</h3>
              <p className="text-sm text-subtle">Guided sightseeing to waterfalls & temples</p>
            </div>

            <div className="text-center p-6 bg-cream rounded-xl">
              <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛏️</span>
              </div>
              <h3 className="font-semibold text-default mb-2">Extra Bed</h3>
              <p className="text-sm text-subtle">Additional bedding for extra guests</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/booking">
              <Button className="btn-primary text-lg px-8 py-6">
                Book With Add-ons
                <ArrowRight className="size-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
