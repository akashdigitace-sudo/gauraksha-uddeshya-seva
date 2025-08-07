import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Users, Calendar, TrendingUp, Award, Target } from 'lucide-react';

const DonationImpact = () => {
  const impactStats = [
    {
      icon: Heart,
      label: 'Lives Saved',
      value: '23',
      subtitle: 'This campaign'
    },
    {
      icon: Users,
      label: 'Total Donors',
      value: '89',
      subtitle: 'Supporting this cause'
    },
    {
      icon: Calendar,
      label: 'Days Active',
      value: '45',
      subtitle: 'Campaign duration'
    },
    {
      icon: TrendingUp,
      label: 'Daily Average',
      value: '₹5,444',
      subtitle: 'Donations per day'
    }
  ];

  const recentDonations = [
    { name: 'Anonymous', amount: 5000, time: '2 mins ago', message: 'For Ganga\'s recovery' },
    { name: 'Priya S.', amount: 2000, time: '15 mins ago', message: 'God bless all cows' },
    { name: 'Rajesh K.', amount: 10000, time: '1 hour ago', message: 'Corporate donation' },
    { name: 'Anita G.', amount: 1500, time: '2 hours ago', message: 'Monthly contribution' },
    { name: 'Vikram S.', amount: 3000, time: '3 hours ago', message: 'Emergency fund' }
  ];

  const milestones = [
    { amount: 100000, label: '₹1L - Emergency Fund Activated', completed: true },
    { amount: 250000, label: '₹2.5L - Medical Equipment Purchased', completed: true },
    { amount: 400000, label: '₹4L - Mobile Unit Deployed', completed: false },
    { amount: 500000, label: '₹5L - Full Rescue Operations', completed: false }
  ];

  return (
    <section className="py-16 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-success/10 border border-success/20 rounded-full px-4 py-2 mb-4">
              <Award className="h-4 w-4 text-success mr-2" />
              <span className="text-sm font-medium text-success">Campaign Impact</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Real-Time Campaign Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the immediate impact of your donation and track how we're achieving our rescue goals together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Impact Stats */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Campaign Statistics</h3>
              {impactStats.map((stat, index) => (
                <Card key={index} className="p-4 shadow-card border border-border/10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                      <div className="text-xs text-muted-foreground">{stat.subtitle}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Recent Donations */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Recent Donations</h3>
              <Card className="p-6 shadow-card border border-border/10">
                <div className="space-y-4">
                  {recentDonations.map((donation, index) => (
                    <div key={index} className="flex items-start justify-between border-b border-border/10 pb-3 last:border-b-0 last:pb-0">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-foreground">{donation.name}</span>
                          <span className="text-sm text-muted-foreground">• {donation.time}</span>
                        </div>
                        {donation.message && (
                          <p className="text-xs text-muted-foreground italic mt-1">"{donation.message}"</p>
                        )}
                      </div>
                      <div className="text-primary font-bold">₹{donation.amount.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Milestones */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Campaign Milestones</h3>
              <Card className="p-6 shadow-card border border-border/10">
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        milestone.completed ? 'bg-success' : 'bg-muted-foreground/20'
                      }`}>
                        {milestone.completed ? (
                          <Heart className="h-3 w-3 text-white" />
                        ) : (
                          <Target className="h-3 w-3 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${
                          milestone.completed ? 'text-success' : 'text-muted-foreground'
                        }`}>
                          {milestone.label}
                        </p>
                        {milestone.completed && (
                          <p className="text-xs text-success/70">✓ Completed</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationImpact;