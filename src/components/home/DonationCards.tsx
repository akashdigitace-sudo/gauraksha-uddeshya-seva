import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Wheat, Stethoscope, Home, Users, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const donationProducts = [
  {
    id: 'cow-adoption',
    title: 'Adopt a Cow',
    subtitle: 'Complete care for one year',
    price: '₹15,000',
    monthlyPrice: '₹1,250/month',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=300&h=200&fit=crop',
    icon: Heart,
    features: [
      'Daily nutritious meals',
      'Regular health checkups',
      'Safe shelter and care',
      'Monthly progress photos'
    ],
    impact: 'Provides complete care for 1 cow for 12 months',
    popular: true
  },
  {
    id: 'feed-supply',
    title: 'Chara & Feed',
    subtitle: 'Monthly nutrition supply',
    price: '₹3,000',
    monthlyPrice: '₹3,000/month',
    image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=300&h=200&fit=crop',
    icon: Wheat,
    features: [
      'Fresh green fodder',
      'Nutritious grain mix',
      'Seasonal supplements',
      'Quality feed guarantee'
    ],
    impact: 'Feeds 20 cows for 1 month with quality nutrition'
  },
  {
    id: 'medical-kit',
    title: 'Medical Kit',
    subtitle: 'Emergency medical supplies',
    price: '₹5,000',
    monthlyPrice: '₹5,000/kit',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
    icon: Stethoscope,
    features: [
      'Emergency medicines',
      'Surgical supplies',
      'Diagnostic equipment',
      'First aid materials'
    ],
    impact: 'Provides medical care for 50+ emergency cases'
  },
  {
    id: 'shelter-construction',
    title: 'Build Shelter',
    subtitle: 'Safe sanctuary space',
    price: '₹25,000',
    monthlyPrice: '₹25,000/unit',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
    icon: Home,
    features: [
      'Weather-proof shelter',
      'Proper ventilation',
      'Clean water access',
      'Drainage system'
    ],
    impact: 'Houses 5 cows safely with modern facilities'
  },
  {
    id: 'volunteer-program',
    title: 'Volunteer Support',
    subtitle: 'Community engagement',
    price: '₹2,000',
    monthlyPrice: '₹2,000/month',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop',
    icon: Users,
    features: [
      'Volunteer training',
      'Transportation support',
      'Safety equipment',
      'Monthly gatherings'
    ],
    impact: 'Supports 10 volunteers in community service'
  },
  {
    id: 'ambulance-service',
    title: 'Ambulance Fund',
    subtitle: '24/7 emergency service',
    price: '₹10,000',
    monthlyPrice: '₹10,000/month',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
    icon: Truck,
    features: [
      'Emergency vehicle maintenance',
      'Fuel and operations',
      'Medical equipment',
      'Driver support'
    ],
    impact: 'Enables 20+ emergency rescues per month'
  }
];

const DonationCards = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose How to Help
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every contribution makes a direct impact. Select a donation package that resonates with your heart 
            and see the immediate difference your generosity creates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donationProducts.map((product, index) => (
            <div
              key={product.id}
              className={`relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 animate-fade-in hover:scale-105 ${
                product.popular ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {product.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <product.icon className="h-5 w-5" />
                    <span className="font-medium">{product.subtitle}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {product.title}
                </h3>
                
                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <span className="text-sm text-muted-foreground">{product.monthlyPrice}</span>
                </div>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="bg-accent/50 rounded-lg p-3 mb-6">
                  <p className="text-sm font-medium text-foreground">{product.impact}</p>
                </div>

                <div className="flex flex-col space-y-3">
                  <Link to={`/donation-details/${product.id}`}>
                    <Button 
                      variant={product.popular ? "donate" : "default"} 
                      size="lg" 
                      className="w-full"
                    >
                      Donate Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to={`/donation-details/${product.id}`}>
                    <Button variant="warm" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Action Section */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground text-center">
          <h3 className="text-3xl font-bold mb-4">Need Help Choosing?</h3>
          <p className="text-lg mb-8 opacity-90">
            Our team can help you find the perfect way to contribute based on your interests and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="xl" className="bg-white text-primary hover:bg-white/90">
              Call Us: +91 98765 43210
            </Button>
            <Link to="/contact">
              <Button variant="warm" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Schedule a Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationCards;