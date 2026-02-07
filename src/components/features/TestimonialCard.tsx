import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/types';
import { formatDate } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="card-nature p-6 relative">
      {/* Quote Icon */}
      <Quote className="absolute top-4 right-4 size-10 text-primary/10" />

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`size-5 ${
              i < testimonial.rating
                ? 'fill-accent text-accent'
                : 'text-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-subtle text-sm leading-relaxed mb-6 italic">
        "{testimonial.comment}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-light">
        <div className="size-12 bg-primary rounded-full flex items-center justify-center text-on-dark font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-default">{testimonial.name}</p>
          <p className="text-sm text-muted">
            {testimonial.location} • {formatDate(testimonial.date)}
          </p>
        </div>
      </div>
    </div>
  );
}
