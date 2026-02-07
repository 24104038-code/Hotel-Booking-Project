import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/constants/config';
import { generateWhatsAppLink, generatePhoneLink } from '@/lib/utils';

interface ContactButtonsProps {
  message?: string;
  showLabels?: boolean;
  size?: 'default' | 'large';
}

export default function ContactButtons({ 
  message = SITE_CONFIG.social.whatsappMessage,
  showLabels = true,
  size = 'default'
}: ContactButtonsProps) {
  const sizeClasses = size === 'large' ? 'px-8 py-6 text-lg' : 'px-6 py-3';

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a href={generatePhoneLink(SITE_CONFIG.contact.phone)} className="flex-1">
        <Button className={`btn-primary w-full ${sizeClasses}`}>
          <Phone className={size === 'large' ? 'size-6' : 'size-5'} />
          {showLabels && (
            <span>Call: {SITE_CONFIG.contact.phone}</span>
          )}
        </Button>
      </a>
      <a
        href={generateWhatsAppLink(SITE_CONFIG.contact.whatsapp, message)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1"
      >
        <Button className={`btn-secondary w-full ${sizeClasses}`}>
          <MessageCircle className={size === 'large' ? 'size-6' : 'size-5'} />
          {showLabels && <span>WhatsApp Us</span>}
        </Button>
      </a>
    </div>
  );
}
