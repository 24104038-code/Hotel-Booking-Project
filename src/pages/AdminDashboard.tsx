import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  LogOut,
  Save,
  RotateCcw,
  Snowflake,
  Wind,
  TreePine,
  Bed,
  Users,
  IndianRupee,
  CheckCircle2,
  Home as HomeIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { useRooms } from '@/hooks/useRooms';
import { SITE_CONFIG } from '@/constants/config';
import { formatCurrency, cn } from '@/lib/utils';
import type { RoomType } from '@/types';

const PRICE_MIN = 2000;
const PRICE_MAX = 3000;

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { logout } = useAdminAuth();
  const { rooms, updateRoom, resetRooms } = useRooms();

  const [drafts, setDrafts] = useState<Record<string, RoomType>>({});

  useEffect(() => {
    const map: Record<string, RoomType> = {};
    rooms.forEach(r => {
      map[r.id] = { ...r };
    });
    setDrafts(map);
  }, [rooms]);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/admin/login', { replace: true });
  };

  const handleDraftChange = (id: string, updates: Partial<RoomType>) => {
    setDrafts(prev => ({
      ...prev,
      [id]: { ...prev[id], ...updates },
    }));
  };

  const handleSave = (id: string) => {
    const draft = drafts[id];
    if (!draft) return;

    if (
      Number.isNaN(draft.pricePerDay) ||
      draft.pricePerDay < PRICE_MIN ||
      draft.pricePerDay > PRICE_MAX
    ) {
      toast.error(`Price must be between ₹${PRICE_MIN} and ₹${PRICE_MAX}`);
      return;
    }

    if (draft.capacity < 1 || draft.capacity > 10) {
      toast.error('Capacity must be between 1 and 10 guests');
      return;
    }

    updateRoom(id, {
      pricePerDay: Math.round(draft.pricePerDay),
      capacity: Math.round(draft.capacity),
      beds: draft.beds.trim(),
      description: draft.description.trim(),
      name: draft.name.trim(),
    });
    toast.success(`${draft.name} updated successfully`);
  };

  const handleSaveAll = () => {
    const errors: string[] = [];
    Object.values(drafts).forEach(d => {
      if (d.pricePerDay < PRICE_MIN || d.pricePerDay > PRICE_MAX) {
        errors.push(`${d.name}: price out of range`);
      }
    });
    if (errors.length) {
      toast.error(errors[0]);
      return;
    }
    Object.values(drafts).forEach(d => {
      updateRoom(d.id, {
        pricePerDay: Math.round(d.pricePerDay),
        capacity: Math.round(d.capacity),
        beds: d.beds.trim(),
        description: d.description.trim(),
        name: d.name.trim(),
      });
    });
    toast.success('All rooms updated successfully');
  };

  const handleReset = () => {
    if (window.confirm('Reset all room prices and details to defaults?')) {
      resetRooms();
      toast.success('Rooms reset to default values');
    }
  };

  const totalRooms = rooms.length;
  const acRooms = rooms.filter(r => r.type === 'AC').length;
  const nonAcRooms = totalRooms - acRooms;
  const avgPrice = totalRooms
    ? Math.round(rooms.reduce((sum, r) => sum + r.pricePerDay, 0) / totalRooms)
    : 0;

  return (
    <div className="min-h-screen bg-cream">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-elevated border-b border-light shadow-soft">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-primary rounded-xl flex items-center justify-center">
                <TreePine className="size-5 text-on-dark" />
              </div>
              <div>
                <h1 className="font-display text-base font-bold text-default leading-tight">
                  {SITE_CONFIG.name}
                </h1>
                <p className="text-xs text-muted">Admin Console</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link to="/" className="hidden sm:inline-flex">
                <Button variant="ghost" size="sm" className="text-subtle">
                  <HomeIcon className="size-4 mr-1" />
                  View Site
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
              >
                <LogOut className="size-4 mr-1" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container-custom py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold text-default mb-2">
            Room Management
          </h2>
          <p className="text-subtle">
            Edit room rent per day, capacity, bed details, and descriptions.
            Pricing range: ₹{PRICE_MIN.toLocaleString()} – ₹{PRICE_MAX.toLocaleString()}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Total Rooms"
            value={totalRooms.toString()}
            icon={<Bed className="size-5" />}
            tone="primary"
          />
          <StatCard
            label="AC Rooms"
            value={acRooms.toString()}
            icon={<Snowflake className="size-5" />}
            tone="secondary"
          />
          <StatCard
            label="Non-AC Rooms"
            value={nonAcRooms.toString()}
            icon={<Wind className="size-5" />}
            tone="primary"
          />
          <StatCard
            label="Average Price / Day"
            value={formatCurrency(avgPrice)}
            icon={<IndianRupee className="size-5" />}
            tone="accent"
          />
        </div>

        {/* Bulk Actions */}
        <div className="flex flex-wrap items-center gap-3 mb-6 p-4 bg-elevated rounded-xl border border-light">
          <div className="flex-1 min-w-[200px]">
            <p className="font-semibold text-default text-sm">Quick Actions</p>
            <p className="text-xs text-muted">Save all changes at once or reset to defaults</p>
          </div>
          <Button onClick={handleSaveAll} className="btn-primary">
            <Save className="size-4 mr-1" />
            Save All
          </Button>
          <Button onClick={handleReset} variant="outline" className="btn-outline">
            <RotateCcw className="size-4 mr-1" />
            Reset to Defaults
          </Button>
        </div>

        {/* Rooms Editor */}
        <div className="grid lg:grid-cols-2 gap-6">
          {rooms.map(room => {
            const draft = drafts[room.id] ?? room;
            const isAC = room.type === 'AC';
            const isDirty =
              draft.pricePerDay !== room.pricePerDay ||
              draft.capacity !== room.capacity ||
              draft.beds !== room.beds ||
              draft.description !== room.description ||
              draft.name !== room.name;

            return (
              <div
                key={room.id}
                className={cn(
                  'bg-elevated rounded-xl shadow-soft border border-light overflow-hidden',
                  isDirty && 'ring-2 ring-accent'
                )}
              >
                {/* Card Header */}
                <div className={cn(
                  'p-5 flex items-center justify-between',
                  isAC ? 'bg-secondary/5' : 'bg-primary/5'
                )}>
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      'size-10 rounded-xl flex items-center justify-center',
                      isAC ? 'bg-secondary text-on-dark' : 'bg-primary text-on-dark'
                    )}>
                      {isAC ? <Snowflake className="size-5" /> : <Wind className="size-5" />}
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase font-semibold tracking-wide">
                        {room.type}
                      </p>
                      <h3 className="font-display text-lg font-bold text-default leading-tight">
                        {room.name}
                      </h3>
                    </div>
                  </div>
                  {isDirty && (
                    <span className="text-xs font-semibold text-accent-dark bg-accent/20 px-2 py-1 rounded-full">
                      Unsaved
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-4">
                  <div>
                    <Label className="text-default font-medium mb-2 block text-sm">
                      Room Name
                    </Label>
                    <Input
                      type="text"
                      value={draft.name}
                      onChange={(e) => handleDraftChange(room.id, { name: e.target.value })}
                      className="input-nature"
                    />
                  </div>

                  <div>
                    <Label className="text-default font-medium mb-2 block text-sm">
                      Price Per Day (₹{PRICE_MIN} – ₹{PRICE_MAX})
                    </Label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted" />
                      <Input
                        type="number"
                        min={PRICE_MIN}
                        max={PRICE_MAX}
                        step={50}
                        value={draft.pricePerDay}
                        onChange={(e) =>
                          handleDraftChange(room.id, {
                            pricePerDay: Number(e.target.value),
                          })
                        }
                        className="input-nature pl-10 text-lg font-semibold"
                      />
                    </div>
                    <input
                      type="range"
                      min={PRICE_MIN}
                      max={PRICE_MAX}
                      step={50}
                      value={draft.pricePerDay}
                      onChange={(e) =>
                        handleDraftChange(room.id, {
                          pricePerDay: Number(e.target.value),
                        })
                      }
                      className="w-full mt-3 accent-primary"
                    />
                    <div className="flex justify-between text-xs text-muted mt-1">
                      <span>₹{PRICE_MIN.toLocaleString()}</span>
                      <span className="font-semibold text-primary">
                        Current: {formatCurrency(draft.pricePerDay)}
                      </span>
                      <span>₹{PRICE_MAX.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-default font-medium mb-2 block text-sm">
                        Capacity
                      </Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted" />
                        <Input
                          type="number"
                          min={1}
                          max={10}
                          value={draft.capacity}
                          onChange={(e) =>
                            handleDraftChange(room.id, {
                              capacity: Number(e.target.value),
                            })
                          }
                          className="input-nature pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-default font-medium mb-2 block text-sm">
                        Beds
                      </Label>
                      <Input
                        type="text"
                        value={draft.beds}
                        onChange={(e) => handleDraftChange(room.id, { beds: e.target.value })}
                        className="input-nature"
                        placeholder="e.g. 1 King Bed"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-default font-medium mb-2 block text-sm">
                      Description
                    </Label>
                    <Textarea
                      value={draft.description}
                      onChange={(e) =>
                        handleDraftChange(room.id, { description: e.target.value })
                      }
                      className="input-nature min-h-[70px]"
                    />
                  </div>

                  <Button
                    onClick={() => handleSave(room.id)}
                    disabled={!isDirty}
                    className={cn(
                      'w-full',
                      isDirty ? 'btn-primary' : 'bg-light text-muted cursor-not-allowed'
                    )}
                  >
                    {isDirty ? (
                      <>
                        <Save className="size-4 mr-1" />
                        Save Changes
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="size-4 mr-1" />
                        No Changes
                      </>
                    )}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-10 p-5 bg-elevated border border-light rounded-xl">
          <p className="text-sm text-subtle leading-relaxed">
            <strong className="text-default">Note:</strong> Changes are saved locally
            in this browser and immediately reflect on the public website (Home, Villa
            Details, and Booking pages). Use "Reset to Defaults" to restore the original
            pricing structure.
          </p>
        </div>
      </main>
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  tone: 'primary' | 'secondary' | 'accent';
}

function StatCard({ label, value, icon, tone }: StatCardProps) {
  const toneClass = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    accent: 'bg-accent/20 text-accent-dark',
  }[tone];

  return (
    <div className="bg-elevated rounded-xl p-5 border border-light shadow-soft">
      <div className="flex items-center gap-3 mb-2">
        <div className={cn('size-10 rounded-lg flex items-center justify-center', toneClass)}>
          {icon}
        </div>
        <p className="text-xs text-muted uppercase tracking-wide font-semibold">{label}</p>
      </div>
      <p className="font-display text-2xl font-bold text-default">{value}</p>
    </div>
  );
}
