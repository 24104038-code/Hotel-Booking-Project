import { MapPin, Clock, ChevronRight } from 'lucide-react';
import type { TouristSpot } from '@/types';

interface TouristSpotCardProps {
  spot: TouristSpot;
}

export default function TouristSpotCard({ spot }: TouristSpotCardProps) {
  return (
    <div className="card-nature group overflow-hidden">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={spot.image}
          alt={spot.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-primary/90 text-on-dark text-xs font-semibold px-3 py-1 rounded-full">
            {spot.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-default mb-2 group-hover:text-primary transition-colors">
          {spot.name}
        </h3>
        <p className="text-sm text-subtle mb-4 line-clamp-2">
          {spot.description}
        </p>

        {/* Distance Info */}
        <div className="flex items-center gap-4 text-sm text-muted">
          <div className="flex items-center gap-1.5">
            <MapPin className="size-4 text-secondary" />
            <span>{spot.distance}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="size-4 text-secondary" />
            <span>{spot.duration}</span>
          </div>
        </div>

        {/* View More */}
        <div className="mt-4 pt-4 border-t border-light flex items-center justify-between">
          <span className="text-sm font-medium text-primary">View on Map</span>
          <ChevronRight className="size-4 text-primary group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}
