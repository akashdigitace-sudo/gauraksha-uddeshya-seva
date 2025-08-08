import React from 'react';
import { Card } from '@/components/ui/card';
import { Calendar, User, MapPin, Heart, Camera, FileText } from 'lucide-react';
import rescuedCowImage from '@/assets/rescued-cow.jpg';
import cowAmbulanceImage from '@/assets/cow-ambulance.jpg';

const CampaignUpdates = () => {
  const updates = [
    {
      id: 1,
      type: 'rescue',
      date: '2 days ago',
      author: 'Dr. Priya Sharma',
      role: 'Veterinary Lead',
      title: 'Emergency Rescue Successful',
      description: 'We successfully rescued 3 cows from a highway accident near Gurgaon. All cows are now safe and receiving medical care at our facility.',
      image: cowAmbulanceImage,
      location: 'NH-8, Gurgaon',
      stats: {
        cows: 3,
        cost: 15000,
        supporters: 47
      }
    },
    {
      id: 2,
      type: 'medical',
      date: '5 days ago',
      author: 'Rajesh Kumar',
      role: 'Field Coordinator',
      title: 'Ganga\'s Recovery Progress',
      description: 'Ganga, the cow we rescued last month, is showing remarkable recovery. Her wounds are healing well and she\'s eating normally. Thanks to your support!',
      image: rescuedCowImage,
      location: 'Main Gaushala, Delhi',
      stats: {
        cows: 1,
        cost: 8500,
        supporters: 23
      }
    },
    {
      id: 3,
      type: 'facility',
      date: '1 week ago',
      author: 'Team Cow Seva',
      role: 'Operations',
      title: 'New Medical Equipment Installed',
      description: 'With your generous donations, we\'ve installed new veterinary equipment including X-ray machine and surgical tools for better emergency care.',
      image: rescuedCowImage,
      location: 'Medical Wing',
      stats: {
        equipment: 5,
        cost: 125000,
        supporters: 89
      }
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'rescue': return Heart;
      case 'medical': return FileText;
      case 'facility': return Camera;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'rescue': return 'text-red-500 bg-red-50';
      case 'medical': return 'text-blue-500 bg-blue-50';
      case 'facility': return 'text-green-500 bg-green-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
              <Calendar className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Live Updates</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Campaign Progress Updates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow real-time updates from our rescue operations and see exactly how your donations are making a difference.
            </p>
          </div>

          <div className="space-y-8">
            {updates.map((update, index) => {
              const TypeIcon = getTypeIcon(update.type);
              
              return (
                <Card 
                  key={update.id}
                  className="overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 border border-border/10 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={update.image}
                        alt={update.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getTypeColor(update.type)}`}>
                            <TypeIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{update.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <User className="h-3 w-3" />
                                <span>{update.author}</span>
                              </div>
                              <span>•</span>
                              <span>{update.role}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">{update.date}</div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {update.description}
                      </p>

                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{update.location}</span>
                        </div>
                      </div>

                      <div className="bg-gradient-earth rounded-lg p-4">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          {update.stats.cows && (
                            <div>
                              <div className="text-2xl font-bold text-primary">{update.stats.cows}</div>
                              <div className="text-xs text-muted-foreground">Cows Helped</div>
                            </div>
                          )}
                          {update.stats.equipment && (
                            <div>
                              <div className="text-2xl font-bold text-primary">{update.stats.equipment}</div>
                              <div className="text-xs text-muted-foreground">Equipment</div>
                            </div>
                          )}
                          <div>
                            <div className="text-2xl font-bold text-primary">₹{update.stats.cost.toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">Amount Used</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">{update.stats.supporters}</div>
                            <div className="text-xs text-muted-foreground">Supporters</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignUpdates;