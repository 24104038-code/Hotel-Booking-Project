import { useState } from 'react';
import GalleryGrid from '@/components/features/GalleryGrid';
import { VILLA_IMAGES, ALL_GALLERY_IMAGES } from '@/constants/mockData';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'exterior', label: 'Exterior' },
  { id: 'interior', label: 'Interior' },
  { id: 'nature', label: 'Nature & Falls' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all'
    ? ALL_GALLERY_IMAGES
    : VILLA_IMAGES[activeCategory as keyof typeof VILLA_IMAGES] || [];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={VILLA_IMAGES.nature[0].url}
            alt="Courtallam Falls"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
              Photo Gallery
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-on-dark mb-6">
              Explore Aroma Villas
            </h1>
            <p className="text-on-dark/90 text-lg">
              Take a visual tour of our beautiful villas and the stunning surroundings
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-elevated">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300',
                  activeCategory === category.id
                    ? 'bg-primary text-on-dark shadow-soft'
                    : 'bg-cream text-subtle hover:bg-primary/10 hover:text-primary'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <GalleryGrid images={filteredImages} columns={3} />

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-subtle">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-default mb-4">
              Experience the Beauty in Person
            </h2>
            <p className="text-subtle">
              These photos capture just a glimpse of what awaits you at Aroma Villas. 
              The misty mountains, lush greenery, and serene atmosphere are best 
              experienced firsthand. Book your stay today!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
