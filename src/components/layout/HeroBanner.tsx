import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Heart, Shield, Users } from 'lucide-react';
import heroCowsImage from '@/assets/hero-cows.jpg';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  description: string;
  primaryAction: {
    text: string;
    onClick: () => void;
  };
  secondaryAction?: {
    text: string;
    onClick: () => void;
  };
  stats?: Array<{
    number: string;
    label: string;
    icon: React.ComponentType<any>;
  }>;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  stats
}) => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-earth overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCowsImage}
          alt="Cows in sanctuary"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Subtitle Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{subtitle}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              {title.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={`inline-block animate-fade-in ${
                    word.toLowerCase().includes('cow') || word.toLowerCase().includes('seva') 
                      ? 'text-primary' 
                      : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word}{' '}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button
                variant="donate"
                size="xl"
                onClick={primaryAction.onClick}
                className="group text-lg px-8 py-4"
              >
                <Heart className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                {primaryAction.text}
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {secondaryAction && (
                <Button
                  variant="warm"
                  size="xl"
                  onClick={secondaryAction.onClick}
                  className="group text-lg px-8 py-4"
                >
                  <Play className="h-5 w-5 mr-2" />
                  {secondaryAction.text}
                </Button>
              )}
            </div>

            {/* Stats */}
            {stats && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-primary/10 rounded-full p-3">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right side visual element */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main image card */}
              <div className="relative bg-card rounded-3xl p-8 shadow-warm animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <img
                  src={heroCowsImage}
                  alt="Rescued cows"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                
                {/* Floating stats card */}
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-warm animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <div className="text-3xl font-bold">1,284</div>
                  <div className="text-sm opacity-90">Cows Rescued</div>
                </div>

                {/* Emergency badge */}
                <div className="absolute -top-4 -right-4 bg-warning text-warning-foreground rounded-full px-4 py-2 shadow-lg animate-fade-in" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">24/7 Emergency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;