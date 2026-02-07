import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, TreePine } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/constants/config';
import { cn, generatePhoneLink } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-elevated/95 backdrop-blur-md shadow-soft">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="size-10 md:size-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <TreePine className="size-6 md:size-7 text-on-dark" />
            </div>
            <div>
              <h1 className="font-display text-lg md:text-xl font-bold text-primary">
                {SITE_CONFIG.name}
              </h1>
              <p className="text-xs text-muted hidden sm:block">Courtallam</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.slice(0, -1).map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                  location.pathname === link.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-subtle hover:text-primary hover:bg-primary/5'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={generatePhoneLink(SITE_CONFIG.contact.phone)}
              className="flex items-center gap-2 text-sm text-subtle hover:text-primary transition-colors"
            >
              <Phone className="size-4" />
              <span className="font-medium">{SITE_CONFIG.contact.phone}</span>
            </a>
            <Link to="/booking">
              <Button className="btn-primary">Book Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="size-6 text-primary" />
            ) : (
              <Menu className="size-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-elevated border-t border-light overflow-hidden transition-all duration-300',
          isMenuOpen ? 'max-h-[500px] shadow-medium' : 'max-h-0'
        )}
      >
        <nav className="container-custom py-4 flex flex-col gap-1">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                'px-4 py-3 rounded-lg font-medium transition-colors',
                location.pathname === link.href
                  ? 'bg-primary text-on-dark'
                  : 'text-default hover:bg-primary/10'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-light">
            <a
              href={generatePhoneLink(SITE_CONFIG.contact.phone)}
              className="flex items-center gap-3 px-4 py-3 text-primary font-medium"
            >
              <Phone className="size-5" />
              <span>Call: {SITE_CONFIG.contact.phone}</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
