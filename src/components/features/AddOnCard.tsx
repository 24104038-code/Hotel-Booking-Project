import { Check, UtensilsCrossed, Flame, Map, Bed } from 'lucide-react';
import { formatCurrency, cn } from '@/lib/utils';
import type { AddOnService } from '@/types';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  food: UtensilsCrossed,
  activity: Flame,
  accommodation: Bed,
};

interface AddOnCardProps {
  addOn: AddOnService;
  selected: boolean;
  onToggle: () => void;
}

export default function AddOnCard({ addOn, selected, onToggle }: AddOnCardProps) {
  const Icon = categoryIcons[addOn.category] || Map;

  return (
    <div
      onClick={onToggle}
      className={cn(
        'p-4 rounded-xl border-2 cursor-pointer transition-all duration-300',
        selected
          ? 'border-primary bg-primary/5 shadow-soft'
          : 'border-light bg-elevated hover:border-primary/30'
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div
            className={cn(
              'size-10 rounded-lg flex items-center justify-center shrink-0 transition-colors',
              selected ? 'bg-primary text-on-dark' : 'bg-primary/10 text-primary'
            )}
          >
            <Icon className="size-5" />
          </div>
          <div>
            <h4 className="font-semibold text-default">{addOn.name}</h4>
            <p className="text-sm text-subtle mt-0.5">{addOn.description}</p>
            <p className="text-xs text-muted mt-1">{addOn.unit}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="font-bold text-accent-dark whitespace-nowrap">
            {formatCurrency(addOn.price)}
          </p>
          <div
            className={cn(
              'size-6 rounded-full border-2 flex items-center justify-center transition-all',
              selected
                ? 'border-primary bg-primary'
                : 'border-gray-300 bg-transparent'
            )}
          >
            {selected && <Check className="size-4 text-on-dark" />}
          </div>
        </div>
      </div>
    </div>
  );
}
