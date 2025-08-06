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
    if (!formData.amount || !formData.name || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    toast.success(`Thank you ${formData.name}! Your donation of ₹${formData.amount} is being processed.`);
    // Reset form
    setFormData({ amount: '', name: '', email: '', phone: '' });
    setSelectedAmount(null);
  };

  return (
    <div className="bg-card rounded-2xl p-8 shadow-card border-2 border-primary/10">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
          <Heart className="h-8 w-8 text-primary-foreground" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Make a Donation
        </h3>
        <p className="text-muted-foreground">
          Help us rescue and care for more cows in need
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Amount Selection */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Select Amount *
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-4">
            {donationAmounts.map((amount) => (
              <Button
                key={amount}
                type="button"
                variant={selectedAmount === amount ? "default" : "warm"}
                size="sm"
                onClick={() => handleAmountSelect(amount)}
                className="h-12 text-xs font-medium"
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
            className="text-center font-semibold"
          />
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 98765 43210"
            />
          </div>
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
          />
        </div>

        {/* Trust Indicators */}
        <div className="bg-accent/30 rounded-lg p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-4 w-4 text-success" />
              <span className="text-xs text-muted-foreground">Secure</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-4 w-4 text-success" />
              <span className="text-xs text-muted-foreground">80G Tax Benefit</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Heart className="h-4 w-4 text-success" />
              <span className="text-xs text-muted-foreground">100% Used</span>
            </div>
          </div>
        </div>

        <Button type="submit" variant="donate" size="lg" className="w-full">
          Donate Now
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By donating, you agree to our terms and conditions. 
          You will receive a tax exemption certificate.
        </p>
      </form>
    </div>
  );
};

export default DonationForm;