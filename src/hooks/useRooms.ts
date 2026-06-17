import { useState, useEffect, useCallback } from 'react';
import { ROOM_TYPES as DEFAULT_ROOMS } from '@/constants/config';
import type { RoomType } from '@/types';

const STORAGE_KEY = 'aroma_villas_rooms';

function loadRooms(): RoomType[] {
  if (typeof window === 'undefined') return DEFAULT_ROOMS;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_ROOMS;
    const parsed = JSON.parse(stored) as RoomType[];
    if (!Array.isArray(parsed) || parsed.length === 0) return DEFAULT_ROOMS;
    return parsed;
  } catch {
    return DEFAULT_ROOMS;
  }
}

function saveRooms(rooms: RoomType[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(rooms));
  window.dispatchEvent(new CustomEvent('aroma:rooms-updated'));
}

export function useRooms() {
  const [rooms, setRooms] = useState<RoomType[]>(() => loadRooms());

  useEffect(() => {
    const sync = () => setRooms(loadRooms());
    window.addEventListener('storage', sync);
    window.addEventListener('aroma:rooms-updated', sync as EventListener);
    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener('aroma:rooms-updated', sync as EventListener);
    };
  }, []);

  const updateRoom = useCallback((id: string, updates: Partial<RoomType>) => {
    setRooms(prev => {
      const next = prev.map(r => (r.id === id ? { ...r, ...updates } : r));
      saveRooms(next);
      return next;
    });
  }, []);

  const updateRoomPrice = useCallback((id: string, pricePerDay: number) => {
    updateRoom(id, { pricePerDay });
  }, [updateRoom]);

  const resetRooms = useCallback(() => {
    saveRooms(DEFAULT_ROOMS);
    setRooms(DEFAULT_ROOMS);
  }, []);

  const minPrice = rooms.length
    ? Math.min(...rooms.map(r => r.pricePerDay))
    : 0;

  return { rooms, updateRoom, updateRoomPrice, resetRooms, minPrice };
}
