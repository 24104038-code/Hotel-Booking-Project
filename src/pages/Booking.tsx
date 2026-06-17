import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, ArrowLeft, ArrowRight, CreditCard, Smartphone, Building, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import BookingSteps from '@/components/features/BookingSteps';
import RoomCard from '@/components/features/RoomCard';
import AddOnCard from '@/components/features/AddOnCard';
import PriceSummary from '@/components/features/PriceSummary';
import ContactButtons from '@/components/features/ContactButtons';
import { useBooking } from '@/hooks/useBooking';
import { ADD_ON_SERVICES, PAYMENT_METHODS, SITE_CONFIG } from '@/constants/config';
import { getMinCheckInDate, getMinCheckOutDate, formatDate, cn, generateWhatsAppLink } from '@/lib/utils';

const steps = ['Dates', 'Room', 'Add-ons', 'Details'];

const paymentIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  CreditCard,
  Building,
};

export default function Booking() {
  const navigate = useNavigate();
  const {
    formData,
    updateFormData,
    toggleAddOn,
    calculation,
    step,
    nextStep,
    prevStep,
    isStepValid,
    resetBooking,
    rooms,
  } = useBooking();

  const [selectedPayment, setSelectedPayment] = useState('');
  const [bookingComplete, setBookingComplete] = useState(false);

  const selectedRoom = rooms.find(r => r.id === formData.roomId);

  const handleBookingSubmit = () => {
    // Generate WhatsApp message with booking details
    const addOnNames = formData.addOns
      .map(id => ADD_ON_SERVICES.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const message = `🏡 *New Booking Request - Aroma Villas*

👤 *Guest Details:*
Name: ${formData.guestName}
Phone: ${formData.guestPhone}

📅 *Stay Details:*
Check-in: ${formatDate(formData.checkIn)}
Check-out: ${formatDate(formData.checkOut)}
Guests: ${formData.guests}
Room: ${selectedRoom?.name}

${addOnNames ? `🎁 *Add-ons:* ${addOnNames}` : ''}

💰 *Total Amount:* ₹${calculation.grandTotal.toLocaleString()}

📝 *Special Requests:* ${formData.specialRequests || 'None'}

Payment Method: ${PAYMENT_METHODS.find(p => p.id === selectedPayment)?.name || 'To be discussed'}`;

    // Open WhatsApp with booking details
    window.open(generateWhatsAppLink(SITE_CONFIG.contact.whatsapp, message), '_blank');
    setBookingComplete(true);
  };

  if (bookingComplete) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-20">
        <div className="container-custom">
          <div className="max-w-lg mx-auto text-center">
            <div className="size-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="size-10 text-green-600" />
            </div>
            <h1 className="font-display text-3xl font-bold text-default mb-4">
              Booking Request Sent!
            </h1>
            <p className="text-subtle mb-6">
              Your booking details have been sent via WhatsApp. Our team will contact 
              you shortly to confirm availability and payment.
            </p>
            <div className="bg-cream rounded-xl p-6 mb-8 text-left">
              <h3 className="font-semibold text-default mb-3">Booking Summary</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-muted">Check-in:</span> <span className="text-default">{formatDate(formData.checkIn)}</span></p>
                <p><span className="text-muted">Check-out:</span> <span className="text-default">{formatDate(formData.checkOut)}</span></p>
                <p><span className="text-muted">Room:</span> <span className="text-default">{selectedRoom?.name}</span></p>
                <p><span className="text-muted">Total:</span> <span className="text-default font-bold">₹{calculation.grandTotal.toLocaleString()}</span></p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => { resetBooking(); setBookingComplete(false); }} className="btn-outline">
                Make Another Booking
              </Button>
              <Button onClick={() => navigate('/')} className="btn-primary">
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-cream min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-default mb-4">
            Book Your Stay
          </h1>
          <p className="text-subtle">
            Complete the booking form below to reserve your villa at Aroma Villas
          </p>
        </div>

        {/* Progress Steps */}
        <BookingSteps currentStep={step} steps={steps} />

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-elevated rounded-xl p-6 md:p-8 shadow-soft">
              {/* Step 1: Dates & Guests */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="size-6 text-primary" />
                    <h2 className="font-display text-xl font-semibold text-default">
                      Select Dates & Guests
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="checkIn" className="text-default font-medium mb-2 block">
                        Check-in Date
                      </Label>
                      <Input
                        id="checkIn"
                        type="date"
                        value={formData.checkIn}
                        min={getMinCheckInDate()}
                        onChange={(e) => updateFormData({ checkIn: e.target.value })}
                        className="input-nature"
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkOut" className="text-default font-medium mb-2 block">
                        Check-out Date
                      </Label>
                      <Input
                        id="checkOut"
                        type="date"
                        value={formData.checkOut}
                        min={getMinCheckOutDate(formData.checkIn)}
                        onChange={(e) => updateFormData({ checkOut: e.target.value })}
                        className="input-nature"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="guests" className="text-default font-medium mb-2 block">
                      Number of Guests
                    </Label>
                    <div className="flex items-center gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => updateFormData({ guests: Math.max(1, formData.guests - 1) })}
                        disabled={formData.guests <= 1}
                      >
                        -
                      </Button>
                      <div className="flex items-center gap-2 px-6 py-3 bg-cream rounded-lg">
                        <Users className="size-5 text-primary" />
                        <span className="text-xl font-semibold text-default">{formData.guests}</span>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => updateFormData({ guests: Math.min(10, formData.guests + 1) })}
                        disabled={formData.guests >= 10}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Room Selection */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="font-display text-xl font-semibold text-default mb-6">
                    Select Your Room
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {rooms.map(room => (
                      <RoomCard
                        key={room.id}
                        room={room}
                        selected={formData.roomId === room.id}
                        onSelect={() => updateFormData({ roomId: room.id })}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Add-ons */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl font-semibold text-default mb-2">
                      Add Extra Services
                    </h2>
                    <p className="text-sm text-subtle mb-6">
                      Enhance your stay with our optional services (skip if not needed)
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium text-default flex items-center gap-2">
                      <span className="text-xl">🍽️</span> Food Services
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {ADD_ON_SERVICES.filter(a => a.category === 'food').map(addOn => (
                        <AddOnCard
                          key={addOn.id}
                          addOn={addOn}
                          selected={formData.addOns.includes(addOn.id)}
                          onToggle={() => toggleAddOn(addOn.id)}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium text-default flex items-center gap-2">
                      <span className="text-xl">🎉</span> Activities & Extras
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {ADD_ON_SERVICES.filter(a => a.category !== 'food').map(addOn => (
                        <AddOnCard
                          key={addOn.id}
                          addOn={addOn}
                          selected={formData.addOns.includes(addOn.id)}
                          onToggle={() => toggleAddOn(addOn.id)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Guest Details & Payment */}
              {step === 4 && (
                <div className="space-y-8">
                  {/* Guest Details */}
                  <div className="space-y-6">
                    <h2 className="font-display text-xl font-semibold text-default">
                      Guest Details
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="guestName" className="text-default font-medium mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="guestName"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.guestName}
                          onChange={(e) => updateFormData({ guestName: e.target.value })}
                          className="input-nature"
                        />
                      </div>
                      <div>
                        <Label htmlFor="guestPhone" className="text-default font-medium mb-2 block">
                          Phone Number *
                        </Label>
                        <Input
                          id="guestPhone"
                          type="tel"
                          placeholder="Enter phone number"
                          value={formData.guestPhone}
                          onChange={(e) => updateFormData({ guestPhone: e.target.value })}
                          className="input-nature"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="specialRequests" className="text-default font-medium mb-2 block">
                        Special Requests (Optional)
                      </Label>
                      <Textarea
                        id="specialRequests"
                        placeholder="Any special requirements or requests..."
                        value={formData.specialRequests}
                        onChange={(e) => updateFormData({ specialRequests: e.target.value })}
                        className="input-nature min-h-[100px]"
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-4">
                    <h2 className="font-display text-xl font-semibold text-default">
                      Payment Method
                    </h2>
                    <p className="text-sm text-subtle">
                      Select your preferred payment method. Payment details will be shared via WhatsApp.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {PAYMENT_METHODS.map(method => {
                        const Icon = paymentIcons[method.icon] || CreditCard;
                        return (
                          <div
                            key={method.id}
                            onClick={() => setSelectedPayment(method.id)}
                            className={cn(
                              'p-4 rounded-xl border-2 cursor-pointer transition-all text-center',
                              selectedPayment === method.id
                                ? 'border-primary bg-primary/5'
                                : 'border-light hover:border-primary/30'
                            )}
                          >
                            <Icon className={cn(
                              'size-8 mx-auto mb-2',
                              selectedPayment === method.id ? 'text-primary' : 'text-subtle'
                            )} />
                            <p className="font-medium text-default text-sm">{method.name}</p>
                            <p className="text-xs text-muted mt-1">{method.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Info Notice */}
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                    <AlertCircle className="size-5 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-800">
                      After submitting, you'll be redirected to WhatsApp with your booking details. 
                      Our team will confirm availability and share payment instructions.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-light">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={step === 1}
                  className={step === 1 ? 'invisible' : ''}
                >
                  <ArrowLeft className="size-4 mr-2" />
                  Back
                </Button>

                {step < 4 ? (
                  <Button
                    onClick={nextStep}
                    disabled={!isStepValid}
                    className="btn-primary"
                  >
                    Continue
                    <ArrowRight className="size-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleBookingSubmit}
                    disabled={!isStepValid || !selectedPayment}
                    className="btn-accent"
                  >
                    Complete Booking
                    <ArrowRight className="size-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Price Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <PriceSummary calculation={calculation} />

              {calculation.grandTotal > 0 && (
                <div className="bg-cream rounded-xl p-4">
                  <p className="text-sm text-subtle text-center">
                    Need help with booking?
                  </p>
                  <div className="mt-4">
                    <ContactButtons showLabels={false} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
