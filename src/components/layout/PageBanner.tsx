import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=400&fit=crop',
  className = '' 
}) => {
  return (
    <section className={`relative py-24 bg-gradient-hero overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;