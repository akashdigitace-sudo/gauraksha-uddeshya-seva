import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Heart, Shield, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-cows.jpg';
import gaushalaImage from '@/assets/gaushala.jpg';
import volunteerImage from '@/assets/caring-volunteer.jpg';

const slides = [
  {
    id: 1,
    image: heroImage,
    title: "Protecting Sacred Lives",
    subtitle: "Every cow deserves a safe sanctuary",
    description: "Join us in our mission to rescue, protect, and relocate cows across India. Your donation creates lasting change.",
    cta: "Donate Now",
    ctaLink: "/donations",
    stats: "₹2,45,000 raised this month"
  },
  {
    id: 2,
    image: gaushalaImage,
    title: "Building Safe Havens",
    subtitle: "Creating protected spaces for our sacred animals",
    description: "Help us expand our gaushalas and provide medical care, nutritious food, and loving shelter.",
    cta: "Support Gaushala",
    ctaLink: "/donation-details/gaushala",
    stats: "450+ cows rescued and relocated"
  },
  {
    id: 3,
    image: volunteerImage,
    title: "Emergency Rescue Services",
    subtitle: "24/7 cow ambulance and medical care",
    description: "Your support helps us maintain emergency rescue services and mobile veterinary care across Delhi NCR.",
    cta: "Fund Ambulance",
    ctaLink: "/donation-details/ambulance",
    stats: "24/7 emergency response available"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white animate-fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 fill-current text-white animate-pulse" />
                <span className="text-sm font-medium uppercase tracking-wider opacity-90">
                  {slide.stats}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                {slide.title}
              </h1>
              
              <h2 className="text-xl md:text-2xl mb-6 text-white/90 font-medium">
                {slide.subtitle}
              </h2>
              
              <p className="text-lg md:text-xl mb-8 text-white/80 leading-relaxed max-w-2xl">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={slide.ctaLink}>
                  <Button variant="hero" size="xl" className="min-w-[200px]">
                    {slide.cta}
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="warm" size="xl" className="min-w-[200px] bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Donation Quick Card */}
            <div className="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2">
              <div className="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-2xl max-w-sm animate-scale-in">
                <div className="text-center mb-6">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Make a Difference</h3>
                  <p className="text-muted-foreground">Your donation saves lives</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                    <span className="text-sm font-medium">₹500</span>
                    <span className="text-xs text-muted-foreground">Feeds 10 cows for 1 day</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                    <span className="text-sm font-medium">₹2,000</span>
                    <span className="text-xs text-muted-foreground">Monthly medical care</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                    <span className="text-sm font-medium">₹10,000</span>
                    <span className="text-xs text-muted-foreground">Rescue operation</span>
                  </div>
                </div>

                <Link to="/donations">
                  <Button variant="donate" className="w-full text-lg py-6">
                    Donate Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;