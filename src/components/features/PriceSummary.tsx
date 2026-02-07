import { formatCurrency } from '@/lib/utils';
import type { BookingCalculation } from '@/types';

interface PriceSummaryProps {
  calculation: BookingCalculation;
  compact?: boolean;
}

export default function PriceSummary({ calculation, compact = false }: PriceSummaryProps) {
  if (compact) {
    return (
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <span className="text-subtle">
            {calculation.nights} Night{calculation.nights > 1 ? 's' : ''} Total
          </span>
          <span className="font-display text-2xl font-bold text-accent-dark">
            {formatCurrency(calculation.grandTotal)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-elevated border border-light rounded-xl p-6">
      <h3 className="font-display text-lg font-semibold text-default mb-4">
        Price Summary
      </h3>

      {/* Breakdown */}
      <div className="space-y-3 mb-4">
        {calculation.breakdown.map((item, index) => (
          <div key={index} className="flex items-start justify-between text-sm">
            <span className="text-subtle flex-1 pr-4">{item.label}</span>
            <span className="text-default font-medium tabular-nums">
              {formatCurrency(item.amount)}
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-light pt-4">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-default">Grand Total</span>
          <span className="font-display text-2xl font-bold text-accent-dark">
            {formatCurrency(calculation.grandTotal)}
          </span>
        </div>
        <p className="text-xs text-muted mt-1">
          For {calculation.nights} night{calculation.nights > 1 ? 's' : ''}
        </p>
      </div>
    </div>
  );
}
