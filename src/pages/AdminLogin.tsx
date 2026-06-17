import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, User, Eye, EyeOff, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { SITE_CONFIG } from '@/constants/config';

export default function AdminLogin() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAdminAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password) {
      toast.error('Please enter username and password');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      const success = login(username, password);
      if (success) {
        toast.success('Welcome back, Admin');
        navigate('/admin/dashboard', { replace: true });
      } else {
        toast.error('Invalid credentials. Please try again.');
        setSubmitting(false);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary leaf-pattern p-4">
      <div className="w-full max-w-md">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-on-dark/80 hover:text-on-dark mb-6 text-sm"
        >
          <ArrowLeft className="size-4" />
          Back to Website
        </Link>

        {/* Card */}
        <div className="bg-elevated rounded-2xl shadow-medium p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="size-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="size-8 text-on-dark" />
            </div>
            <h1 className="font-display text-2xl font-bold text-default mb-1">
              Admin Login
            </h1>
            <p className="text-sm text-subtle">
              {SITE_CONFIG.name} Management Console
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="username" className="text-default font-medium mb-2 block">
                Username
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted" />
                <Input
                  id="username"
                  type="text"
                  autoComplete="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-nature pl-10"
                  disabled={submitting}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="text-default font-medium mb-2 block">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-nature pl-10 pr-10"
                  disabled={submitting}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-default"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full text-base py-6"
            >
              {submitting ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          {/* Hint */}
          <div className="mt-6 p-4 bg-cream rounded-lg border border-light">
            <p className="text-xs text-subtle leading-relaxed">
              <strong className="text-default">Default credentials:</strong>
              <br />
              Username: <code className="text-primary">admin</code>
              <br />
              Password: <code className="text-primary">aroma@2024</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
