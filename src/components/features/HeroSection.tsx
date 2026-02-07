import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/constants/config';
import { VILLA_IMAGES } from '@/constants/mockData';
import { generatePhoneLink } from '@/lib/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={VILLA_IMAGES.exterior[1].url}
          alt="Aroma Villas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-on-dark">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-on-dark/10 backdrop-blur-sm border border-on-dark/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <MapPin className="size-4" />
              <span className="text-sm font-medium">Five Falls Road, Courtallam</span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-200">
              Your Peaceful
              <span className="block text-accent">Nature Retreat</span>
              Awaits
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-on-dark/90 max-w-xl mb-8 animate-fade-in-up animation-delay-400">
              Experience luxury amidst the misty mountains of Courtallam. 
              Wake up to breathtaking views and the soothing sounds of waterfalls 
              at {SITE_CONFIG.name}.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-on-dark/80">5-Star Reviews</span>
              </div>
              <div className="text-on-dark/60">|</div>
              <div className="text-sm text-on-dark/80">
                <span className="text-accent font-bold text-lg">1.5 km</span> from Five Falls
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <Link to="/booking">
                <Button className="btn-accent text-lg px-8 py-6 w-full sm:w-auto">
                  Book Your Stay
                  <ArrowRight className="size-5" />
                </Button>
              </Link>
              <a href={generatePhoneLink(SITE_CONFIG.contact.phone)}>
                <Button variant="outline" className="border-2 border-on-dark/30 text-on-dark hover:bg-on-dark/10 text-lg px-8 py-6 w-full sm:w-auto">
                  <Phone className="size-5" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Price Tag */}
            <div className="mt-8 inline-block bg-on-dark/10 backdrop-blur-sm rounded-xl px-6 py-4 animate-fade-in-up animation-delay-600">
              <p className="text-sm text-on-dark/70">Starting from</p>
              <p className="font-display text-3xl font-bold text-accent">₹2,000<span className="text-lg font-normal text-on-dark/70">/night</span></p>
            </div>
          </div>

          {/* Image Grid (Desktop) */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in-up animation-delay-400">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-strong">
                <img
                  src={VILLA_IMAGES.exterior[0].url}
                  alt="Villa exterior"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-strong">
                <img
                  src={VILLA_IMAGES.interior[0].url}
                  alt="Villa bedroom"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-strong">
                <img
                  src={VILLA_IMAGES.nature[0].url}
                  alt="Courtallam Falls"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-strong">
                <img
                  src={VILLA_IMAGES.interior[1].url}
                  alt="Villa room"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-on-dark/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-on-dark/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
