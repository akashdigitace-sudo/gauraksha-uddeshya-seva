import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Heart, Truck, Home, Wheat, Target, ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EnhancedProgress } from '@/components/ui/enhanced-progress';
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
      {/* Page Banner */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1920&h=400&fit=crop"
            alt="Donation background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Heart className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Make a Difference</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Support Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            Every donation directly impacts the lives of rescued cows. Choose how you'd like to help.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gradient-earth py-6">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Quick Stats & Donation CTAs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Quick Donation Buttons */}
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Quick Donation</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {quickDonationAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant="warm"
                    size="lg"
                    onClick={() => handleQuickDonation(amount)}
                    className="min-w-[120px] hover:scale-105 transition-transform"
                  >
                    ₹{amount.toLocaleString()}
                  </Button>
                ))}
              </div>
            </div>

            {/* Impact Stats */}
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">₹45,67,890</div>
                  <div className="text-primary-foreground/80">Total Raised This Year</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">1,284</div>
                  <div className="text-primary-foreground/80">Cows Rescued & Cared</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">572</div>
                  <div className="text-primary-foreground/80">Active Monthly Donors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Causes */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
              <Target className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Choose Your Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Urgent Donation Causes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every cause directly saves lives. Select the area where you'd like to make the biggest difference and see the immediate impact of your contribution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {donationCauses.map((cause, index) => {
              const progressPercentage = (cause.raisedAmount / cause.goalAmount) * 100;
              
              return (
                <div
                  key={cause.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-warm hover:shadow-2xl transition-all duration-300 animate-fade-in group border border-border/10 hover:border-primary/20"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={cause.image}
                      alt={cause.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground p-2 rounded-full shadow-lg">
                        <cause.icon className="h-5 w-5" />
                      </div>
                    </div>
                    
                    {/* Urgency Badge */}
                    <div className="absolute top-4 right-4 bg-red-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      🚨 {cause.urgentDonors} donors today
                    </div>
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {cause.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                      {cause.description}
                    </p>

                    {/* Enhanced Progress Section */}
                    <div className="mb-6">
                      <EnhancedProgress 
                        value={progressPercentage} 
                        variant="gradient"
                        size="lg"
                        goalAmount={cause.goalAmount}
                        raisedAmount={cause.raisedAmount}
                      />
                    </div>

                    {/* Impact Highlight */}
                    <div className="bg-gradient-primary/10 border border-primary/20 rounded-xl p-4 mb-4">
                      <div className="flex items-start space-x-3">
                        <Target className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-semibold text-primary mb-1">Your Impact</div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{cause.impact}</p>
                        </div>
                      </div>
                    </div>

                    {/* Benefits List */}
                    <div className="mb-6">
                      <div className="text-sm font-medium text-foreground mb-2">What Your Donation Covers:</div>
                      <div className="grid grid-cols-1 gap-1">
                        {cause.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-success flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link to={`/donation-details/${cause.id}`} className="flex-1">
                        <Button variant="donate" className="w-full group-hover:scale-105 transition-transform">
                          Donate Now
                          <Heart className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                      <Link to={`/donation-details/${cause.id}`}>
                        <Button variant="warm" size="default" className="px-4">
                          <ArrowRight className="h-4 w-4" />
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

      {/* Monthly Donation CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-primary via-primary-glow to-primary rounded-3xl p-8 md:p-16 text-primary-foreground text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,white_20%,transparent_21%)] bg-[length:20px_20px]"></div>
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
                  <Heart className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Monthly Giving</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Become a Guardian Angel
                </h2>
                <p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto">
                  Join our community of monthly donors and provide consistent care for our rescued cows. 
                  Even ₹500/month makes a life-changing difference.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-3xl font-bold mb-2">₹500/month</div>
                    <div className="text-sm opacity-80">Feeds 10 cows daily</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                    <div className="text-3xl font-bold mb-2">₹1,500/month</div>
                    <div className="text-sm opacity-80">Complete care for 5 cows</div>
                    <div className="text-xs bg-white/20 rounded-full px-2 py-1 mt-2 inline-block">Most Popular</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-3xl font-bold mb-2">₹5,000/month</div>
                    <div className="text-sm opacity-80">Sponsor a cow's full care</div>
                  </div>
                </div>

                <Button variant="warm" size="xl" className="bg-white text-primary hover:bg-white/90 min-w-[250px] text-lg px-8 py-4">
                  <Heart className="h-5 w-5 mr-2" />
                  Start Monthly Donation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-success/10 border border-success/20 rounded-full px-4 py-2 mb-4">
              <Shield className="h-4 w-4 text-success mr-2" />
              <span className="text-sm font-medium text-success">100% Transparency</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How Your Money is Used
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See exactly how your donations are used with our detailed reports and live tracking.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-card rounded-2xl p-6 shadow-card hover:shadow-warm transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Direct Cow Care</div>
            </div>
            <div className="text-center bg-card rounded-2xl p-6 shadow-card hover:shadow-warm transition-all duration-300">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-warning" />
              </div>
              <div className="text-3xl font-bold text-warning mb-2">10%</div>
              <div className="text-sm text-muted-foreground">Infrastructure</div>
            </div>
            <div className="text-center bg-card rounded-2xl p-6 shadow-card hover:shadow-warm transition-all duration-300">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-success" />
              </div>
              <div className="text-3xl font-bold text-success mb-2">3%</div>
              <div className="text-sm text-muted-foreground">Emergency Fund</div>
            </div>
            <div className="text-center bg-card rounded-2xl p-6 shadow-card hover:shadow-warm transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">2%</div>
              <div className="text-sm text-muted-foreground">Administration</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donations;