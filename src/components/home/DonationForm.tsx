import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Shield, Users, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const donationAmounts = [500, 1000, 2500, 5000, 10000];

const DonationForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    name: '',
    email: '',
    phone: ''
  });
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setFormData(prev => ({ ...prev, amount: amount.toString() }));
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAmount(null);
    setFormData(prev => ({ ...prev, amount: e.target.value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.amount || !formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    toast.success(`Thank you ${formData.name}! Your donation of ₹${formData.amount} is being processed.`);
    // Reset form
    setFormData({ amount: '', name: '', email: '', phone: '' });
    setSelectedAmount(null);
  };

  return (
    <div className="bg-card rounded-2xl p-6 shadow-card border-2 border-primary/10 h-fit sticky top-8">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mb-3">
          <Heart className="h-6 w-6 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">
          Make a Donation
        </h3>
        <p className="text-sm text-muted-foreground">
          Help rescue cows in need
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">Current Campaign</span>
          <span className="text-sm text-muted-foreground">₹2.45L / ₹5L</span>
        </div>
        <div className="w-full bg-accent/30 rounded-full h-3 border border-border/20">
          <div 
            className="bg-gradient-primary h-full rounded-full transition-all duration-700 ease-in-out shadow-warm relative"
            style={{ width: '49%' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60" />
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-1">49% complete • 189 donors</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Amount Selection */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Select Amount *
          </label>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {donationAmounts.slice(0, 3).map((amount) => (
              <Button
                key={amount}
                type="button"
                variant={selectedAmount === amount ? "default" : "warm"}
                size="sm"
                onClick={() => handleAmountSelect(amount)}
                className="h-10 text-xs font-medium"
              >
                ₹{amount}
              </Button>
            ))}
          </div>
          <Input
            type="number"
            placeholder="Enter custom amount"
            value={formData.amount}
            onChange={handleCustomAmount}
            min="100"
            className="text-center font-semibold h-10"
          />
        </div>

        {/* Personal Information */}
        <div className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              className="h-10"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone Number *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 98765 43210"
              className="h-10"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className="h-10"
            />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-accent/30 rounded-lg p-3">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="flex items-center justify-center space-x-1">
              <Shield className="h-3 w-3 text-success" />
              <span className="text-xs text-muted-foreground">Secure</span>
            </div>
            <div className="flex items-center justify-center space-x-1">
              <Users className="h-3 w-3 text-success" />
              <span className="text-xs text-muted-foreground">80G Tax</span>
            </div>
            <div className="flex items-center justify-center space-x-1">
              <Heart className="h-3 w-3 text-success" />
              <span className="text-xs text-muted-foreground">100% Used</span>
            </div>
          </div>
        </div>

        <Button type="submit" variant="donate" size="lg" className="w-full h-10">
          Donate Now
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By donating, you agree to our terms. Tax receipt provided.
        </p>
      </form>
    </div>
  );
};

export default DonationForm;