import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Bell, Gift, CheckCircle } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
            <Mail className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Stay Connected</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Weekly Impact Updates
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join 2,500+ supporters receiving weekly updates about rescues, success stories, and exclusive behind-the-scenes content from our gaushalas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Bell className="h-8 w-8 mx-auto mb-3 opacity-80" />
              <h3 className="font-semibold mb-2">Rescue Updates</h3>
              <p className="text-sm opacity-80">Real-time notifications about emergency rescues and success stories</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Gift className="h-8 w-8 mx-auto mb-3 opacity-80" />
              <h3 className="font-semibold mb-2">Exclusive Content</h3>
              <p className="text-sm opacity-80">Behind-the-scenes photos, videos, and stories from our gaushalas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <CheckCircle className="h-8 w-8 mx-auto mb-3 opacity-80" />
              <h3 className="font-semibold mb-2">Impact Reports</h3>
              <p className="text-sm opacity-80">Monthly detailed reports showing exactly how your donations are used</p>
            </div>
          </div>

          {subscribed ? (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-bold mb-2">Thank You!</h3>
              <p>You'll receive your first update within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/20 backdrop-blur-sm border-white/30 placeholder:text-white/70 text-white"
                  required
                />
                <Button
                  type="submit"
                  variant="warm"
                  className="bg-white text-primary hover:bg-white/90 whitespace-nowrap"
                >
                  Subscribe Free
                </Button>
              </div>
              <p className="text-xs opacity-70 mt-3">
                We respect your privacy. Unsubscribe anytime with one click.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;