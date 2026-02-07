import { Snowflake, Tv, Car, Droplets, TreePine, Shield, Waves, Zap, Wifi } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Snowflake,
  Tv,
  Car,
  Droplets,
  TreePine,
  Shield,
  Waves,
  Zap,
  Wifi,
};

interface AmenityCardProps {
  name: string;
  description: string;
  icon: string;
}

export default function AmenityCard({ name, description, icon }: AmenityCardProps) {
  const Icon = iconMap[icon] || Snowflake;

  return (
    <div className="group flex items-start gap-4 p-5 bg-elevated rounded-xl border border-light hover:border-primary/30 hover:shadow-soft transition-all duration-300">
      <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
        <Icon className="size-6 text-primary group-hover:text-on-dark transition-colors" />
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-default mb-1">
          {name}
        </h3>
        <p className="text-sm text-subtle leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
