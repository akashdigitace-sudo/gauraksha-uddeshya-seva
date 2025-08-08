import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Calendar, MapPin, Zap } from 'lucide-react';
import rescuedCowImage from '@/assets/rescued-cow.jpg';
import gaushalaImage from '@/assets/gaushala.jpg';
import cowAmbulanceImage from '@/assets/cow-ambulance.jpg';

const ImpactStories = () => {
  const stories = [
    {
      id: 1,
      title: 'Miracle Recovery of Ganga',
      description: 'Found severely injured on the highway, Ganga was rescued by our emergency team. After months of dedicated care, she has fully recovered and now lives peacefully in our sanctuary.',
      image: rescuedCowImage,
      date: '2 weeks ago',
      location: 'Delhi Highway',
      impact: 'Life Saved',
      stats: '₹15,000 donated by 47 supporters'
    },
    {
      id: 2,
      title: 'New Shelter Completed',
      description: 'Thanks to your generous donations, we completed construction of a new 200-cow capacity shelter with modern medical facilities and comfortable living spaces.',
      image: gaushalaImage,
      date: '1 month ago',
      location: 'Gaushala Expansion',
      impact: '200 Cows Housed',
      stats: '₹8,50,000 raised from 156 donors'
    },
    {
      id: 3,
      title: 'Emergency Rescue Success',
      description: 'Our mobile ambulance unit successfully rescued 5 cows from a construction site accident. All cows received immediate medical attention and are now safe.',
      image: cowAmbulanceImage,
      date: '3 days ago',
      location: 'Noida Construction Site',
      impact: '5 Lives Saved',
      stats: '₹25,000 emergency fund activated'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-success/10 border border-success/20 rounded-full px-4 py-2 mb-4">
              <Zap className="h-4 w-4 text-success mr-2" />
              <span className="text-sm font-medium text-success">Real Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Stories of Hope & Healing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the direct impact of your donations through real rescue stories and transformations happening every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card
                key={story.id}
                className="overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 border border-border/10 group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Impact Badge */}
                  <div className="absolute top-4 right-4 bg-success/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {story.impact}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {story.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-2" />
                      {story.date}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-2" />
                      {story.location}
                    </div>
                  </div>

                  <div className="bg-gradient-success/10 border border-success/20 rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-xs text-success font-medium">
                      <Heart className="h-3 w-3" />
                      <span>{story.stats}</span>
                    </div>
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

export default ImpactStories;