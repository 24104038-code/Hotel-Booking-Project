import { useState, useMemo, useCallback } from 'react';
import { ROOM_TYPES, ADD_ON_SERVICES } from '@/constants/config';
import type { BookingFormData, BookingCalculation } from '@/types';

const initialFormData: BookingFormData = {
  checkIn: '',
  checkOut: '',
  guests: 2,
  roomId: '',
  addOns: [],
  guestName: '',
  guestPhone: '',
  specialRequests: '',
};

export function useBooking() {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [step, setStep] = useState(1);

  const updateFormData = useCallback((updates: Partial<BookingFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  }, []);

  const toggleAddOn = useCallback((addOnId: string) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOnId)
        ? prev.addOns.filter(id => id !== addOnId)
        : [...prev.addOns, addOnId],
    }));
  }, []);

  const calculation = useMemo<BookingCalculation>(() => {
    const selectedRoom = ROOM_TYPES.find(r => r.id === formData.roomId);
    
    // Calculate number of nights
    let nights = 1;
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);
      const diffTime = checkOut.getTime() - checkIn.getTime();
      nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    }

    const roomTotal = selectedRoom ? selectedRoom.pricePerDay * nights : 0;

    // Calculate add-ons
    const breakdown: { label: string; amount: number }[] = [];
    let addOnsTotal = 0;

    if (selectedRoom) {
      breakdown.push({
        label: `${selectedRoom.name} × ${nights} night${nights > 1 ? 's' : ''}`,
        amount: roomTotal,
      });
    }

    formData.addOns.forEach(addOnId => {
      const addOn = ADD_ON_SERVICES.find(a => a.id === addOnId);
      if (addOn) {
        let addOnAmount = addOn.price;
        
        // Calculate based on unit type
        if (addOn.unit.includes('per person')) {
          addOnAmount = addOn.price * formData.guests * nights;
        } else if (addOn.unit.includes('per night')) {
          addOnAmount = addOn.price * nights;
        }
        
        addOnsTotal += addOnAmount;
        breakdown.push({
          label: `${addOn.name}${addOn.unit.includes('per person') ? ` (${formData.guests} guests × ${nights} days)` : ''}`,
          amount: addOnAmount,
        });
      }
    });

    return {
      roomTotal,
      addOnsTotal,
      nights,
      grandTotal: roomTotal + addOnsTotal,
      breakdown,
    };
  }, [formData]);

  const nextStep = useCallback(() => {
    setStep(prev => Math.min(prev + 1, 4));
  }, []);

  const prevStep = useCallback(() => {
    setStep(prev => Math.max(prev - 1, 1));
  }, []);

  const resetBooking = useCallback(() => {
    setFormData(initialFormData);
    setStep(1);
  }, []);

  const isStepValid = useMemo(() => {
    switch (step) {
      case 1:
        return formData.checkIn && formData.checkOut && formData.guests > 0;
      case 2:
        return !!formData.roomId;
      case 3:
        return true; // Add-ons are optional
      case 4:
        return formData.guestName && formData.guestPhone;
      default:
        return false;
    }
  }, [step, formData]);

  return {
    formData,
    updateFormData,
    toggleAddOn,
    calculation,
    step,
    setStep,
    nextStep,
    prevStep,
    resetBooking,
    isStepValid,
  };
}
