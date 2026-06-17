import { Link } from 'react-router-dom';
import { TreePine, Phone, MapPin, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS } from '@/constants/config';
import { generateWhatsAppLink, generatePhoneLink } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-on-dark">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="size-12 bg-on-dark/20 rounded-xl flex items-center justify-center">
                <TreePine className="size-7 text-on-dark" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold">{SITE_CONFIG.name}</h2>
                <p className="text-sm text-on-dark/70">Courtallam</p>
              </div>
            </Link>
            <p className="text-on-dark/80 text-sm leading-relaxed">
              Experience the perfect blend of luxury and nature at Courtallam's finest villa accommodation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.slice(0, 5).map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-on-dark/80 hover:text-on-dark transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Services</h3>
            <ul className="flex flex-col gap-2 text-sm text-on-dark/80">
              <li>Daily Villa Rental</li>
              <li>Group Bookings</li>
              <li>Food Services</li>
              <li>Campfire & BBQ</li>
              <li>Local Sightseeing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <a
                href={generatePhoneLink(SITE_CONFIG.contact.phone)}
                className="flex items-center gap-3 text-on-dark/80 hover:text-on-dark transition-colors"
              >
                <Phone className="size-5 shrink-0" />
                <span className="text-sm">{SITE_CONFIG.contact.phone}</span>
              </a>
              <a
                href={generateWhatsAppLink(SITE_CONFIG.contact.whatsapp, SITE_CONFIG.social.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-on-dark/80 hover:text-on-dark transition-colors"
              >
                <MessageCircle className="size-5 shrink-0" />
                <span className="text-sm">WhatsApp Us</span>
              </a>
              <div className="flex items-start gap-3 text-on-dark/80">
                <MapPin className="size-5 shrink-0 mt-0.5" />
                <span className="text-sm">{SITE_CONFIG.contact.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-on-dark/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-on-dark/60">
            <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <p>Located at Five Falls Road, Courtallam</p>
              <Link
                to="/admin/login"
                className="text-on-dark/40 hover:text-on-dark transition-colors text-xs"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
