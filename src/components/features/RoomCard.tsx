import { Users, Bed, Snowflake, Wind, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatCurrency, cn } from '@/lib/utils';
import type { RoomType } from '@/types';

interface RoomCardProps {
  room: RoomType;
  selected?: boolean;
  onSelect?: () => void;
  showSelectButton?: boolean;
}

export default function RoomCard({ room, selected, onSelect, showSelectButton = true }: RoomCardProps) {
  const isAC = room.type === 'AC';

  return (
    <div
      className={cn(
        'card-nature p-6 transition-all duration-300',
        selected && 'ring-2 ring-primary shadow-medium',
        onSelect && 'cursor-pointer'
      )}
      onClick={onSelect}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            {isAC ? (
              <span className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-xs font-semibold px-2 py-1 rounded-full">
                <Snowflake className="size-3" />
                AC
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                <Wind className="size-3" />
                Non-AC
              </span>
            )}
          </div>
          <h3 className="font-display text-xl font-semibold text-default">
            {room.name}
          </h3>
        </div>
        {selected && (
          <div className="size-8 bg-primary rounded-full flex items-center justify-center">
            <Check className="size-5 text-on-dark" />
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-subtle text-sm mb-4">{room.description}</p>

      {/* Details */}
      <div className="flex flex-wrap gap-4 mb-4 text-sm text-subtle">
        <div className="flex items-center gap-1.5">
          <Users className="size-4 text-primary" />
          <span>Up to {room.capacity} guests</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Bed className="size-4 text-primary" />
          <span>{room.beds}</span>
        </div>
      </div>

      {/* Price & CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-light">
        <div>
          <p className="text-xs text-muted">Per Night</p>
          <p className="font-display text-2xl font-bold text-accent-dark">
            {formatCurrency(room.pricePerDay)}
          </p>
        </div>
        {showSelectButton && onSelect && (
          <Button
            variant={selected ? 'default' : 'outline'}
            className={selected ? 'btn-primary' : 'btn-outline'}
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
          >
            {selected ? 'Selected' : 'Select Room'}
          </Button>
        )}
      </div>
    </div>
  );
}
