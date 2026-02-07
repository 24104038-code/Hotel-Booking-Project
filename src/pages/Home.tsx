import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/features/HeroSection';
import WhyChooseUs from '@/components/features/WhyChooseUs';
import RoomCard from '@/components/features/RoomCard';
import TouristSpotCard from '@/components/features/TouristSpotCard';
import TestimonialCard from '@/components/features/TestimonialCard';
import ContactButtons from '@/components/features/ContactButtons';
import { ROOM_TYPES } from '@/constants/config';
import { VILLA_IMAGES, TOURIST_SPOTS, TESTIMONIALS } from '@/constants/mockData';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Introduction Section */}
      <section className="section-padding bg-elevated">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
                Welcome to Aroma Villas
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-default mb-6">
                Experience the Magic of
                <span className="text-gradient"> Courtallam</span>
              </h2>
              <p className="text-subtle text-lg leading-relaxed mb-6">
                Nestled on Five Falls Road, Aroma Villas offers a perfect retreat for those 
                seeking tranquility amidst nature. Known as the "Spa of South India," 
                Courtallam is famous for its medicinal waterfalls and lush greenery.
              </p>
              <p className="text-subtle leading-relaxed mb-8">
                Our modern villas combine contemporary comfort with natural beauty. 
                Wake up to misty mountain views, enjoy the fresh therapeutic air, 
                and explore the famous Five Falls just minutes away. Whether you're 
                planning a family vacation, group trip, or romantic getaway, 
                Aroma Villas is your perfect home in Courtallam.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about">
                  <Button variant="outline" className="btn-outline">
                    Learn More
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
                <Link to="/gallery">
                  <Button variant="ghost" className="text-primary hover:bg-primary/10">
                    View Gallery
                  </Button>
                </Link>
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-medium">
                  <img
                    src={VILLA_IMAGES.nature[0].url}
                    alt="Courtallam Falls"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-medium">
                  <img
                    src={VILLA_IMAGES.exterior[2].url}
                    alt="Villa exterior"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="pt-6">
                <div className="rounded-xl overflow-hidden shadow-medium h-full">
                  <img
                    src={VILLA_IMAGES.exterior[0].url}
                    alt="Villa with mountain view"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="section-padding bg-cream leaf-pattern">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
              <Sparkles className="size-4" />
              Our Rooms
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-default mb-4">
              Choose Your Perfect Stay
            </h2>
            <p className="text-subtle text-lg">
              From air-conditioned comfort to naturally ventilated rooms, 
              find the perfect option for your Courtallam getaway
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
                Book Your Room Now
                <ArrowRight className="size-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tourist Spots Section */}
      <section className="section-padding bg-elevated">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
              Explore Nearby
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-default mb-4">
              Nearby Tourist Attractions
            </h2>
            <p className="text-subtle text-lg">
              Discover the natural wonders of Courtallam, all within easy reach from Aroma Villas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOURIST_SPOTS.slice(0, 4).map(spot => (
              <TouristSpotCard key={spot.id} spot={spot} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/location">
              <Button variant="outline" className="btn-outline">
                View All Attractions
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-3">
              Guest Reviews
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-dark mb-4">
              What Our Guests Say
            </h2>
            <p className="text-on-dark/80 text-lg">
              Real experiences from families and travelers who chose Aroma Villas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-cream leaf-pattern">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-default mb-6">
              Ready to Experience Courtallam?
            </h2>
            <p className="text-subtle text-lg mb-8">
              Book your stay at Aroma Villas today and create unforgettable memories 
              amidst the natural beauty of the Western Ghats.
            </p>
            <div className="max-w-md mx-auto">
              <ContactButtons size="large" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
