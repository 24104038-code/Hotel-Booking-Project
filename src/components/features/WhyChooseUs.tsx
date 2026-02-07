import { MapPin, Sparkles, Users, Mountain, BadgeIndianRupee, Calendar } from 'lucide-react';
import { WHY_CHOOSE_US } from '@/constants/mockData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Sparkles,
  Users,
  Mountain,
  BadgeIndianRupee,
  Calendar,
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-cream leaf-pattern">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
            Why Aroma Villas
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-default mb-4">
            Your Perfect Stay in Courtallam
          </h2>
          <p className="text-subtle text-lg">
            Discover why families and travelers choose Aroma Villas for their Courtallam getaway
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || MapPin;
            return (
              <div
                key={item.id}
                className="group card-nature p-6 bg-elevated"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="size-7 text-primary group-hover:text-on-dark transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-default mb-2">
                  {item.title}
                </h3>
                <p className="text-subtle text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
