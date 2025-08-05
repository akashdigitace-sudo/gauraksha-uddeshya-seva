import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Heart, Truck, Home, Wheat, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import cowAmbulanceImage from '@/assets/cow-ambulance.jpg';
import gaushalaImage from '@/assets/gaushala.jpg';
import rescuedCowImage from '@/assets/rescued-cow.jpg';

const donationCauses = [
  {
    id: 'cow-rescue',
    title: 'Emergency Cow Rescue',
    description: 'Fund immediate rescue operations for cows in distress across Delhi NCR',
    image: rescuedCowImage,
    icon: Heart,
    goalAmount: 500000,
    raisedAmount: 245000,
    urgentDonors: 89,
    impact: 'Each ₹5,000 funds a complete rescue operation',
    benefits: [
      '24/7 emergency response team',
      'Veterinary first aid on site',
      'Safe transportation to sanctuary',
      'Post-rescue medical care'
    ]
  },
  {
    id: 'ambulance',
    title: 'Cow Ambulance Service',
    description: 'Support our mobile veterinary units providing emergency medical care',
    image: cowAmbulanceImage,
    icon: Truck,
    goalAmount: 800000,
    raisedAmount: 456000,
    urgentDonors: 124,
    impact: 'Each ₹2,000 covers one emergency call',
    benefits: [
      'Mobile veterinary equipment',
      'Emergency medicines supply',
      'Trained paramedic team',
      'GPS-enabled quick response'
    ]
  },
  {
    id: 'gaushala',
    title: 'Gaushala Expansion',
    description: 'Help us build new facilities to house more rescued cows safely',
    image: gaushalaImage,
    icon: Home,
    goalAmount: 1200000,
    raisedAmount: 875000,
    urgentDonors: 156,
    impact: 'Each ₹10,000 builds shelter for 2 cows',
    benefits: [
      'Modern shelter construction',
      'Medical facility setup',
      'Feed storage systems',
      'Clean water infrastructure'
    ]
  },
  {
    id: 'feed',
    title: 'Daily Feed & Care',
    description: 'Provide nutritious food and daily care for our rescued cows',
    image: rescuedCowImage,
    icon: Wheat,
    goalAmount: 300000,
    raisedAmount: 178000,
    urgentDonors: 203,
    impact: 'Each ₹500 feeds 10 cows for a day',
    benefits: [
      'High-quality nutritious feed',
      'Fresh water supply',
      'Daily health monitoring',
      'Grooming and care'
    ]
  }
];

const quickDonationAmounts = [500, 1000, 2500, 5000, 10000];

const Donations = () => {
  const breadcrumbItems = [
    { label: 'Donations' }
  ];

  const handleQuickDonation = (amount: number) => {
    // Handle quick donation
    console.log(`Quick donation of ₹${amount}`);
  };

  return (
    <Layout>
      <div className="bg-gradient-earth py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Make a Difference Today
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your donation directly impacts the lives of rescued cows. Choose how you'd like to help 
              and see the immediate difference your contribution makes.
            </p>
            
            {/* Quick Donation Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {quickDonationAmounts.map((amount) => (
                <Button
                  key={amount}
                  variant="warm"
                  size="lg"
                  onClick={() => handleQuickDonation(amount)}
                  className="min-w-[120px]"
                >
                  ₹{amount.toLocaleString()}
                </Button>
              ))}
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">₹45,67,890</div>
                  <div className="text-sm text-muted-foreground">Total Raised</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-success mb-2">1,284</div>
                  <div className="text-sm text-muted-foreground">Cows Rescued</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-warning mb-2">572</div>
                  <div className="text-sm text-muted-foreground">Active Donors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Causes */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every cause directly saves lives. Select the area where you'd like to make the biggest difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {donationCauses.map((cause, index) => {
              const progressPercentage = (cause.raisedAmount / cause.goalAmount) * 100;
              
              return (
                <div
                  key={cause.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={cause.image}
                      alt={cause.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-primary text-primary-foreground p-2 rounded-full">
                        <cause.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-foreground">
                      {cause.urgentDonors} donors
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {cause.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {cause.description}
                    </p>

                    {/* Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          ₹{cause.raisedAmount.toLocaleString()} raised
                        </span>
                        <span className="text-sm text-muted-foreground">
                          Goal: ₹{cause.goalAmount.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={progressPercentage} className="h-3" />
                      <p className="text-xs text-muted-foreground mt-1">
                        {Math.round(progressPercentage)}% completed
                      </p>
                    </div>

                    {/* Impact Statement */}
                    <div className="bg-accent/50 rounded-lg p-4 mb-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-4 w-4 text-primary" />
                        <span className="font-medium text-foreground">Impact</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{cause.impact}</p>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Your donation provides:</h4>
                      <div className="space-y-2">
                        {cause.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-success" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to={`/donation-details/${cause.id}`} className="flex-1">
                        <Button variant="donate" size="lg" className="w-full">
                          Donate Now
                        </Button>
                      </Link>
                      <Link to={`/donation-details/${cause.id}`}>
                        <Button variant="warm" size="lg" className="min-w-[120px]">
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Monthly Donation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Become a Monthly Guardian
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Join our community of monthly donors and provide consistent care for our rescued cows. 
                Even ₹500/month makes a significant difference.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-2xl font-bold mb-2">₹500/month</div>
                  <div className="text-sm opacity-80">Feeds 10 cows daily</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-2xl font-bold mb-2">₹1,500/month</div>
                  <div className="text-sm opacity-80">Complete care for 5 cows</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-2xl font-bold mb-2">₹5,000/month</div>
                  <div className="text-sm opacity-80">Sponsor a cow's full care</div>
                </div>
              </div>

              <Button variant="warm" size="xl" className="bg-white text-primary hover:bg-white/90 min-w-[200px]">
                Start Monthly Donation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Complete Transparency
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See exactly how your donations are used with our detailed reports and live updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center bg-card rounded-xl p-6 shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Direct cow care</div>
            </div>
            <div className="text-center bg-card rounded-xl p-6 shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">10%</div>
              <div className="text-sm text-muted-foreground">Infrastructure</div>
            </div>
            <div className="text-center bg-card rounded-xl p-6 shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">3%</div>
              <div className="text-sm text-muted-foreground">Emergency fund</div>
            </div>
            <div className="text-center bg-card rounded-xl p-6 shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">2%</div>
              <div className="text-sm text-muted-foreground">Administration</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donations;