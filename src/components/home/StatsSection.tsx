import React from 'react';
import { TrendingUp, MapPin, Heart, Truck } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: "₹45,67,890",
    label: "Total Donations Collected",
    description: "Funds raised for cow protection",
    color: "text-primary"
  },
  {
    icon: MapPin,
    value: "127",
    label: "Acres of Land Purchased",
    description: "Safe sanctuary spaces created",
    color: "text-success"
  },
  {
    icon: Heart,
    value: "1,284",
    label: "Cows Rescued & Relocated",
    description: "Lives saved and protected",
    color: "text-primary"
  },
  {
    icon: Truck,
    value: "24/7",
    label: "Emergency Ambulance Service",
    description: "Available across Delhi NCR",
    color: "text-warning"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every donation creates measurable change. See how together we're building a safer world for our sacred animals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-card rounded-2xl shadow-card hover:shadow-warm transition-all duration-300 animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6 ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              
              <div className="mb-4">
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Current Campaign Progress
          </h3>
          
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-card">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-foreground">Emergency Fund for Winter Care</span>
                <span className="text-sm text-muted-foreground">₹2,45,000 / ₹5,00,000</span>
              </div>
              <div className="w-full bg-accent rounded-full h-3">
                <div className="bg-gradient-primary h-3 rounded-full transition-all duration-1000" style={{ width: '49%' }}></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">49% completed • 23 days remaining</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-foreground">New Gaushala Construction</span>
                <span className="text-sm text-muted-foreground">₹8,75,000 / ₹12,00,000</span>
              </div>
              <div className="w-full bg-accent rounded-full h-3">
                <div className="bg-gradient-warm h-3 rounded-full transition-all duration-1000" style={{ width: '73%' }}></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">73% completed • Land secured, construction in progress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;