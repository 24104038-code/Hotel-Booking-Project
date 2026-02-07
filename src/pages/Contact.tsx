import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/constants/config';
import { VILLA_IMAGES } from '@/constants/mockData';
import { generateWhatsAppLink, generatePhoneLink } from '@/lib/utils';

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={VILLA_IMAGES.exterior[2].url}
            alt="Aroma Villas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
              Contact Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-on-dark mb-6">
              Get in Touch
            </h1>
            <p className="text-on-dark/90 text-lg">
              We're here to help you plan your perfect stay at Aroma Villas
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-elevated">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Call Us */}
              <div className="bg-cream rounded-2xl p-8 text-center">
                <div className="size-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="size-10 text-on-dark" />
                </div>
                <h2 className="font-display text-2xl font-bold text-default mb-3">
                  Call Us
                </h2>
                <p className="text-subtle mb-6">
                  Speak directly with our team for instant assistance
                </p>
                <p className="text-3xl font-bold text-primary mb-6">
                  {SITE_CONFIG.contact.phone}
                </p>
                <a href={generatePhoneLink(SITE_CONFIG.contact.phone)} className="block">
                  <Button className="btn-primary w-full text-lg py-6">
                    <Phone className="size-5" />
                    Call Now
                  </Button>
                </a>
              </div>

              {/* WhatsApp */}
              <div className="bg-cream rounded-2xl p-8 text-center">
                <div className="size-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="size-10 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold text-default mb-3">
                  WhatsApp Us
                </h2>
                <p className="text-subtle mb-6">
                  Send us a message for quick responses
                </p>
                <p className="text-3xl font-bold text-green-600 mb-6">
                  {SITE_CONFIG.contact.phone}
                </p>
                <a
                  href={generateWhatsAppLink(SITE_CONFIG.contact.whatsapp, SITE_CONFIG.social.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="bg-green-500 hover:bg-green-600 text-white w-full text-lg py-6">
                    <MessageCircle className="size-5" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Address & Hours */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-cream rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-default mb-2">Our Address</h3>
                    <p className="text-subtle text-sm">
                      {SITE_CONFIG.contact.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cream rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-default mb-2">Availability</h3>
                    <p className="text-subtle text-sm">
                      We're available 24/7 for bookings and inquiries.<br />
                      Check-in: 12:00 PM | Check-out: 11:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-default mb-6 text-center">
                Find Us on Map
              </h2>
              <div className="rounded-xl overflow-hidden shadow-medium h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15775.336754645377!2d77.26!3d8.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04172e5f6ad76d%3A0x8d5b1b1a1b1b1b1b!2sFive%20Falls%2C%20Courtallam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aroma Villas Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
