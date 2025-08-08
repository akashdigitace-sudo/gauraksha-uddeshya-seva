import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Heart, HandHeart, Calendar, MapPin, Clock } from 'lucide-react';
import caringVolunteerImage from '@/assets/caring-volunteer.jpg';

const VolunteerSection = () => {
  const volunteerOpportunities = [
    {
      title: 'Weekend Care Team',
      description: 'Help with feeding, grooming, and daily care of rescued cows',
      time: 'Weekends, 4-6 hours',
      location: 'Delhi NCR Gaushala',
      icon: Heart,
      commitment: 'Monthly'
    },
    {
      title: 'Rescue Response',
      description: 'Join our emergency rescue team for cow emergencies',
      time: 'On-call, flexible',
      location: 'Various locations',
      icon: HandHeart,
      commitment: 'As needed'
    },
    {
      title: 'Educational Outreach',
      description: 'Spread awareness about cow protection in communities',
      time: '2-3 hours/week',
      location: 'Schools & communities',
      icon: Users,
      commitment: 'Weekly'
    }
  ];

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
              <Users className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Join Our Mission</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Volunteer With Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Make a hands-on difference in the lives of rescued cows. Join our dedicated team of volunteers and experience the joy of direct service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={caringVolunteerImage}
                alt="Volunteer caring for cows"
                className="w-full h-96 object-cover rounded-2xl shadow-warm"
              />
            </div>
            
            <div className="space-y-6">
              {volunteerOpportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-warm transition-all duration-300 border border-border/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <opportunity.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-2">{opportunity.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{opportunity.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {opportunity.time}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {opportunity.location}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {opportunity.commitment}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="pt-6">
                <Button variant="donate" size="lg" className="w-full">
                  <Users className="h-5 w-5 mr-2" />
                  Apply to Volunteer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;