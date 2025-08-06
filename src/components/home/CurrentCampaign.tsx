import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedProgress } from '@/components/ui/enhanced-progress';
import { Button } from '@/components/ui/button';
import { Heart, Target, Clock, Users, ArrowRight, TrendingUp } from 'lucide-react';
import rescuedCowImage from '@/assets/rescued-cow.jpg';

const CurrentCampaign = () => {
  const campaignData = {
    title: "Emergency Winter Rescue Fund",
    description: "Help us rescue and rehabilitate cows during the harsh winter months. Every donation saves a life.",
    goalAmount: 500000,
    raisedAmount: 245000,
    daysLeft: 15,
    donorCount: 189,
    recentDonations: [
      { name: "Priya S.", amount: 5000, time: "2 mins ago" },
      { name: "Raj K.", amount: 2500, time: "5 mins ago" },
      { name: "Anonymous", amount: 10000, time: "8 mins ago" }
    ]
  };

  const progressPercentage = (campaignData.raisedAmount / campaignData.goalAmount) * 100;
  const remainingAmount = campaignData.goalAmount - campaignData.raisedAmount;

  return (
    <section className="py-16 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4 mr-2" />
            Featured Campaign
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Current Emergency Campaign
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our most urgent rescue mission and help us reach our goal before time runs out
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl overflow-hidden shadow-warm border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={rescuedCowImage}
                  alt="Emergency Rescue Campaign"
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                      🚨 URGENT
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{campaignData.title}</h3>
                    <p className="text-white/90 text-sm">{campaignData.description}</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-10">
                {/* Progress Section */}
                <div className="mb-8">
                  <EnhancedProgress 
                    variant="gradient"
                    size="lg"
                    goalAmount={campaignData.goalAmount}
                    raisedAmount={campaignData.raisedAmount}
                    showPercentage={false}
                  />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="bg-primary/5 rounded-xl p-4">
                      <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">{campaignData.daysLeft}</div>
                      <div className="text-sm text-muted-foreground">Days Left</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-success/5 rounded-xl p-4">
                      <Users className="h-6 w-6 text-success mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">{campaignData.donorCount}</div>
                      <div className="text-sm text-muted-foreground">Donors</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-warning/5 rounded-xl p-4">
                      <Target className="h-6 w-6 text-warning mx-auto mb-2" />
                      <div className="text-lg font-bold text-foreground">₹{remainingAmount.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">To Go</div>
                    </div>
                  </div>
                </div>

                {/* Recent Donations */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Heart className="h-5 w-5 text-primary mr-2" />
                    Recent Donations
                  </h4>
                  <div className="space-y-3">
                    {campaignData.recentDonations.map((donation, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gradient-primary/5 rounded-lg border border-primary/10">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {donation.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{donation.name}</div>
                            <div className="text-sm text-muted-foreground">{donation.time}</div>
                          </div>
                        </div>
                        <div className="text-primary font-bold">₹{donation.amount.toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <Link to="/donation-details/emergency-winter" className="block">
                    <Button variant="donate" size="xl" className="w-full text-lg py-4">
                      Donate Now
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="warm" className="text-sm">₹1,000</Button>
                    <Button variant="warm" className="text-sm">₹2,500</Button>
                    <Button variant="warm" className="text-sm">₹5,000</Button>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-success text-sm font-medium">✓ Secure</div>
                  </div>
                  <div className="text-center">
                    <div className="text-success text-sm font-medium">✓ 80G Tax Benefit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-success text-sm font-medium">✓ 100% Used</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentCampaign;