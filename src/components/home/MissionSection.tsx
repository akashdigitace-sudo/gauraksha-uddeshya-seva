import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Heart, Home, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import rescuedCowImage from '@/assets/rescued-cow.jpg';

const MissionSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Protection",
      description: "Safeguarding vulnerable cows from harm and ensuring their dignity"
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Treating every animal with love, care, and respect they deserve"
    },
    {
      icon: Home,
      title: "Sanctuary",
      description: "Creating safe havens where cows can live peacefully and healthily"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a network of caring individuals united for cow welfare"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Sacred Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We are dedicated to the protection, rescue, and relocation of cows across India. 
                Our mission stems from the belief that every life is sacred and deserves protection. 
                Through community support and compassionate action, we create safe sanctuaries 
                where these gentle beings can thrive.
              </p>
            </div>

            {/* Vision Statement */}
            <div className="bg-gradient-earth rounded-2xl p-8 border border-primary/10">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Heart className="h-6 w-6 text-primary mr-3" />
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To create a world where every cow lives free from suffering, in environments 
                that honor their sacred nature. We envision expanding our network of gaushalas 
                across India, ensuring no cow is left without care or protection.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about">
                  <Button variant="default" size="lg">
                    Learn Our Story
                  </Button>
                </Link>
                <Link to="/donations">
                  <Button variant="warm" size="lg">
                    Join Our Mission
                  </Button>
                </Link>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-card rounded-xl hover:shadow-card transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={rescuedCowImage}
                alt="Rescued cow in peaceful sanctuary"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <h4 className="text-xl font-bold mb-2">Priya's Story</h4>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Rescued from the streets of Delhi, Priya now lives peacefully in our sanctuary. 
                    She represents the hundreds of cows we've helped find safety and care.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-8 -right-8 bg-card rounded-2xl p-6 shadow-warm">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-card rounded-2xl p-6 shadow-warm">
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Transparency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;