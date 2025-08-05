import React from 'react';
import { Calendar, MapPin, Users, Award, TrendingUp, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Gaushala Open Day",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Main Gaushala, Delhi",
      type: "Community Event",
      attendees: 150,
      description: "Visit our sanctuary, meet the cows, and learn about our daily operations."
    },
    {
      id: 2,
      title: "Volunteer Training Workshop",
      date: "March 22, 2024",
      time: "9:00 AM - 2:00 PM",
      location: "Community Center",
      type: "Training",
      attendees: 50,
      description: "Learn cow care basics and become a certified volunteer."
    },
    {
      id: 3,
      title: "Annual Fundraising Gala",
      date: "April 5, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "Hotel Ashoka, Delhi",
      type: "Fundraiser",
      attendees: 300,
      description: "Join us for an evening of celebration and raising funds for cow welfare."
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "State Recognition Award",
      description: "Received excellence award for animal welfare from Delhi Government",
      date: "2023"
    },
    {
      icon: TrendingUp,
      title: "1000+ Cows Milestone",
      description: "Successfully rescued and rehabilitated over 1000 cows",
      date: "2023"
    },
    {
      icon: Users,
      title: "500 Active Volunteers",
      description: "Built a strong community of dedicated volunteers",
      date: "2024"
    }
  ];

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Upcoming Events */}
          <div>
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Upcoming Events
              </h2>
              <p className="text-lg text-muted-foreground">
                Join us in our mission through community events, training sessions, and fundraising activities.
              </p>
            </div>

            <div className="space-y-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-warm transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {event.type}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Users className="h-4 w-4 mr-1" />
                        {event.attendees} expected
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{event.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date} • {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>

                  <Button variant="warm" size="sm" className="w-full">
                    Register Now
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/events">
                <Button variant="default" size="lg">
                  View All Events
                </Button>
              </Link>
            </div>
          </div>

          {/* Achievements & Updates */}
          <div>
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Recent Achievements
              </h2>
              <p className="text-lg text-muted-foreground">
                Celebrating milestones in our journey of cow protection and welfare.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-card rounded-xl p-6 shadow-card"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-foreground">{achievement.title}</h3>
                      <span className="text-xs text-muted-foreground">{achievement.date}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Updates */}
            <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Clock className="h-6 w-6 mr-2" />
                Live Updates
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                  <span className="text-sm">Cows rescued this month</span>
                  <span className="font-bold">23</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                  <span className="text-sm">Active volunteers today</span>
                  <span className="font-bold">47</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                  <span className="text-sm">Medical treatments given</span>
                  <span className="font-bold">156</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;