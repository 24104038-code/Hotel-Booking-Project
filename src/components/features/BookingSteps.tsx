import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BookingStepsProps {
  currentStep: number;
  steps: string[];
}

export default function BookingSteps({ currentStep, steps }: BookingStepsProps) {
  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;

        return (
          <div key={step} className="flex items-center">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'size-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300',
                  isCompleted && 'bg-primary text-on-dark',
                  isCurrent && 'bg-primary text-on-dark ring-4 ring-primary/20',
                  !isCompleted && !isCurrent && 'bg-gray-100 text-muted'
                )}
              >
                {isCompleted ? <Check className="size-5" /> : stepNumber}
              </div>
              <span
                className={cn(
                  'text-xs mt-2 font-medium hidden sm:block',
                  isCurrent ? 'text-primary' : 'text-muted'
                )}
              >
                {step}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'w-12 sm:w-20 h-1 mx-2 rounded-full transition-colors',
                  stepNumber < currentStep ? 'bg-primary' : 'bg-gray-200'
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
