import React from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote, Heart, Users } from 'lucide-react';

const DonorTestimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Monthly Donor',
      location: 'Delhi',
      amount: '₹2,000/month',
      duration: '2 years',
      message: 'Seeing the rescued cows healthy and happy makes every rupee worth it. The transparency in how funds are used is remarkable.',
      rating: 5,
      impact: 'Sponsored 3 cow rescues'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Corporate Sponsor',
      location: 'Gurgaon',
      amount: '₹50,000',
      duration: '6 months',
      message: 'Our company CSR partnership has been incredible. Regular updates and site visits show real impact on cow welfare.',
      rating: 5,
      impact: 'Funded mobile ambulance'
    },
    {
      name: 'Anita Gupta',
      role: 'Individual Donor',
      location: 'Noida',
      amount: '₹5,000',
      duration: '1 year',
      message: 'The emergency rescue of Ganga touched my heart. Being able to follow her recovery journey was so meaningful.',
      rating: 5,
      impact: 'Emergency fund contributor'
    },
    {
      name: 'Vikram Singh',
      role: 'Volunteer & Donor',
      location: 'Faridabad',
      amount: '₹1,500/month',
      duration: '3 years',
      message: 'Not just donating but volunteering here has shown me the incredible care provided. Every cow is treated like family.',
      rating: 5,
      impact: 'Volunteer for 150+ hours'
    }
  ];

  const stats = [
    { label: 'Average Rating', value: '4.9/5', icon: Star },
    { label: 'Happy Donors', value: '2,500+', icon: Heart },
    { label: 'Return Donors', value: '89%', icon: Users }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-warning/10 border border-warning/20 rounded-full px-4 py-2 mb-4">
              <Star className="h-4 w-4 text-warning mr-2" />
              <span className="text-sm font-medium text-warning">Donor Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Our Supporters Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Read testimonials from our community of donors who are making a real difference in cow welfare across Delhi NCR.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-warm transition-all duration-300 border border-border/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role} • {testimonial.location}</p>
                    <div className="flex items-center space-x-4 mt-1 text-xs text-muted-foreground">
                      <span>{testimonial.amount}</span>
                      <span>•</span>
                      <span>{testimonial.duration}</span>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                </div>

                <div className="relative mb-4">
                  <Quote className="h-6 w-6 text-primary/20 absolute -top-2 -left-1" />
                  <p className="text-muted-foreground italic pl-6 leading-relaxed">
                    "{testimonial.message}"
                  </p>
                </div>

                <div className="bg-success/10 border border-success/20 rounded-lg p-3">
                  <div className="flex items-center space-x-2 text-sm text-success font-medium">
                    <Heart className="h-4 w-4" />
                    <span>Impact: {testimonial.impact}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorTestimonials;