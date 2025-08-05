import React from 'react';
import Layout from '@/components/layout/Layout';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Users, Target, Award, MapPin, Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gaushalaImage from '@/assets/gaushala.jpg';
import volunteerImage from '@/assets/caring-volunteer.jpg';

const About = () => {
  const breadcrumbItems = [
    { label: 'About Us' }
  ];

  const team = [
    {
      name: "Dr. Raghav Gupta",
      role: "Founder & Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Veterinarian with 15+ years experience in cow welfare and sanctuary management."
    },
    {
      name: "Priya Sharma",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Former corporate professional who dedicated her life to animal welfare and nonprofit management."
    },
    {
      name: "Amit Kumar",
      role: "Rescue Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "24/7 emergency response specialist with expertise in cow rescue and rehabilitation."
    },
    {
      name: "Dr. Meera Patel",
      role: "Chief Veterinarian",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Specialized in large animal medicine with focus on preventive care and nutrition."
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Foundation Laid",
      description: "Started with a small shelter for 20 cows in Haryana"
    },
    {
      year: "2020",
      title: "Emergency Services",
      description: "Launched 24/7 cow ambulance service across Delhi NCR"
    },
    {
      year: "2021",
      title: "Expansion",
      description: "Opened second gaushala and rescued 500+ cows"
    },
    {
      year: "2022",
      title: "Recognition",
      description: "Received state award for excellence in animal welfare"
    },
    {
      year: "2023",
      title: "Growth",
      description: "Expanded to 127 acres with capacity for 1000+ cows"
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Introduced AI-powered health monitoring and mobile app"
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-earth py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Gau Seva Trust
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded in 2019, Gau Seva Trust has emerged as one of India's leading 
                organizations dedicated to cow protection, rescue, and rehabilitation. 
                Our journey began with a simple belief: every cow deserves dignity, 
                care, and protection.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">1,284</div>
                  <div className="text-sm text-muted-foreground">Cows Rescued</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-success">127</div>
                  <div className="text-sm text-muted-foreground">Acres Protected</div>
                </div>
              </div>
              <Button variant="donate" size="lg">
                Support Our Mission
              </Button>
            </div>
            <div className="relative">
              <img
                src={gaushalaImage}
                alt="Our Gaushala"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To rescue, protect, and provide sanctuary for cows across India through 
                compassionate care, modern facilities, and community engagement. We are 
                committed to ensuring every cow lives with dignity in a safe, nurturing environment.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <Award className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create a network of world-class gaushalas across India where cows 
                receive the highest standard of care. We envision a future where no cow 
                suffers from neglect, and where communities actively participate in their protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Dedicated Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team combines professional expertise with deep compassion for animal welfare. 
              Together, we ensure every cow receives the best possible care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center bg-card rounded-2xl p-6 shadow-card hover:shadow-warm transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a leading cow welfare organization, 
              see how we've grown and evolved over the years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-6 bg-card rounded-xl p-6 shadow-card"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-card rounded-2xl p-8 shadow-card">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground">
                123 Dharma Path<br />
                New Delhi, India 110001
              </p>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 shadow-card">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground">
                24/7 Emergency: +91 98765 43210<br />
                Office: +91 98765 43211
              </p>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 shadow-card">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Hours</h3>
              <p className="text-muted-foreground">
                Gaushala Visits: 9 AM - 5 PM<br />
                Emergency Service: 24/7
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;