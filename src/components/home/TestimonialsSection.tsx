import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "New Delhi",
    donation: "Monthly Donor - ₹2,000",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "Seeing the rescued cows in the sanctuary filled my heart with joy. The transparency in how donations are used gives me complete confidence. This is truly divine work.",
    rating: 5
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Gurgaon",
    donation: "One-time Donor - ₹15,000",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "I funded the ambulance service after seeing their emergency response. Within hours, they rescued an injured cow near my office. Incredible dedication and efficiency.",
    rating: 5
  },
  {
    id: 3,
    name: "Meera Patel",
    location: "Mumbai",
    donation: "Gaushala Sponsor - ₹50,000",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "As someone who moved from Mumbai to support this cause, I can say their work is life-changing. The cows are healthy, happy, and well-cared for. My entire family now supports them.",
    rating: 5
  },
  {
    id: 4,
    name: "Dr. Amit Singh",
    location: "Noida",
    donation: "Veterinary Volunteer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "I volunteer as a veterinarian here and have seen firsthand the incredible care provided. The facilities are modern, clean, and designed with love. True seva in action.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Stories from Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the donors, volunteers, and supporters who make our mission possible. 
            Their stories inspire us every day to continue this sacred work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-warm transition-all duration-300 animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-primary/60" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-warning fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                  <div className="text-xs text-primary font-medium">
                    {testimonial.donation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Community of Change-Makers
            </h3>
            <p className="text-muted-foreground mb-6">
              Every donation, no matter the size, creates a meaningful impact. 
              Become part of our story and help us write new chapters of hope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donations"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:shadow-glow transition-all"
              >
                Start Donating
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Volunteer With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;