import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Mountain, Leaf, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactButtons from '@/components/features/ContactButtons';
import { VILLA_IMAGES } from '@/constants/mockData';

const highlights = [
  {
    icon: Users,
    title: 'Perfect for Families',
    description: 'Spacious rooms with all modern amenities for comfortable family stays',
  },
  {
    icon: Mountain,
    title: 'Nature Experience',
    description: 'Wake up to misty mountains and fresh therapeutic air daily',
  },
  {
    icon: Heart,
    title: 'Warm Hospitality',
    description: 'Personalized service ensuring every guest feels at home',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable practices preserving the natural beauty around us',
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Top-rated accommodation with consistent 5-star reviews',
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: '24/7 security ensuring peaceful and worry-free stays',
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={VILLA_IMAGES.exterior[1].url}
            alt="Aroma Villas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-on-dark mb-6">
              Welcome to Aroma Villas
            </h1>
            <p className="text-on-dark/90 text-lg leading-relaxed">
              Your gateway to experiencing the natural wonders of Courtallam, 
              the "Spa of South India"
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-elevated">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
                Our Story
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-default mb-6">
                A Haven of Peace & Comfort
              </h2>
              <div className="space-y-4 text-subtle leading-relaxed">
                <p>
                  Aroma Villas was born from a simple dream – to create a sanctuary 
                  where travelers could experience the magical beauty of Courtallam 
                  while enjoying modern comforts. Located on the scenic Five Falls Road, 
                  our villas offer the perfect balance of nature and luxury.
                </p>
                <p>
                  Courtallam, nestled in the Western Ghats of Tamil Nadu, is renowned 
                  for its medicinal waterfalls. The air here is infused with herbs from 
                  the forests, making every breath therapeutic. Our guests don't just 
                  stay – they rejuvenate.
                </p>
                <p>
                  Whether you're a family seeking quality time together, a group of 
                  friends on an adventure, or tourists exploring South India's natural 
                  wonders, Aroma Villas welcomes you with open arms and warm hospitality.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-medium aspect-square">
                  <img
                    src={VILLA_IMAGES.interior[0].url}
                    alt="Villa bedroom"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-medium aspect-[4/3]">
                  <img
                    src={VILLA_IMAGES.exterior[4].url}
                    alt="Villa exterior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="rounded-xl overflow-hidden shadow-medium aspect-[4/3]">
                  <img
                    src={VILLA_IMAGES.nature[1].url}
                    alt="Five Falls"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-medium aspect-square">
                  <img
                    src={VILLA_IMAGES.interior[1].url}
                    alt="Villa room"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="section-padding bg-cream leaf-pattern">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
              Perfect For Everyone
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-default mb-4">
              Who We Welcome
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-elevated rounded-xl shadow-soft">
              <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="size-10 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-default mb-3">
                Families
              </h3>
              <p className="text-subtle">
                Spacious rooms perfect for families with children. Create lasting 
                memories exploring waterfalls and nature together.
              </p>
            </div>

            <div className="text-center p-8 bg-elevated rounded-xl shadow-soft">
              <div className="size-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mountain className="size-10 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-default mb-3">
                Tourists
              </h3>
              <p className="text-subtle">
                Explore the natural wonders of Courtallam with our convenient 
                location near all major attractions and waterfalls.
              </p>
            </div>

            <div className="text-center p-8 bg-elevated rounded-xl shadow-soft">
              <div className="size-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="size-10 text-accent-dark" />
              </div>
              <h3 className="font-display text-xl font-semibold text-default mb-3">
                Groups
              </h3>
              <p className="text-subtle">
                Perfect for group outings, team retreats, or friend gatherings. 
                Enjoy campfire nights and BBQ under the stars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-elevated">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
              Why Aroma Villas
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-default mb-4">
              What Makes Us Special
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 bg-cream rounded-xl hover:shadow-soft transition-all duration-300"
              >
                <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <item.icon className="size-6 text-primary group-hover:text-on-dark transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-default mb-1">{item.title}</h3>
                  <p className="text-sm text-subtle">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-dark mb-6">
              Experience the Aroma Difference
            </h2>
            <p className="text-on-dark/80 text-lg mb-8">
              Book your stay today and discover why guests keep coming back to Aroma Villas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button className="btn-accent text-lg px-8 py-6">
                  Book Now
                  <ArrowRight className="size-5" />
                </Button>
              </Link>
              <Link to="/villa-details">
                <Button variant="outline" className="border-2 border-on-dark/30 text-on-dark hover:bg-on-dark/10 text-lg px-8 py-6">
                  View Villa Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
