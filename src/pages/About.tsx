import React from 'react';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import { Users, Target, Award, MapPin, Calendar, Phone, Shield, Heart, Truck, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gaushalaImage from '@/assets/gaushala.jpg';
import volunteerImage from '@/assets/caring-volunteer.jpg';
import rescuedCowImage from '@/assets/rescued-cow.jpg';

const About = () => {
  const team = [
    {
      name: "Dr. Raghav Gupta",
      role: "Founder & Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Veterinarian with 15+ years experience in cow welfare and sanctuary management.",
      expertise: "Animal Medicine, Sanctuary Management"
    },
    {
      name: "Priya Sharma",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Former corporate professional who dedicated her life to animal welfare and nonprofit management.",
      expertise: "Operations, Community Outreach"
    },
    {
      name: "Amit Kumar",
      role: "Rescue Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "24/7 emergency response specialist with expertise in cow rescue and rehabilitation.",
      expertise: "Emergency Response, Field Operations"
    },
    {
      name: "Dr. Meera Patel",
      role: "Chief Veterinarian",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Specialized in large animal medicine with focus on preventive care and nutrition.",
      expertise: "Veterinary Medicine, Nutrition"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Foundation Laid",
      description: "Started with a small shelter for 20 cows in Haryana",
      icon: Heart,
      stats: "20 cows rescued"
    },
    {
      year: "2020",
      title: "Emergency Services",
      description: "Launched 24/7 cow ambulance service across Delhi NCR",
      icon: Truck,
      stats: "First ambulance deployed"
    },
    {
      year: "2021",
      title: "Expansion",
      description: "Opened second gaushala and rescued 500+ cows",
      icon: Users,
      stats: "500+ cows rescued"
    },
    {
      year: "2022",
      title: "Recognition",
      description: "Received state award for excellence in animal welfare",
      icon: Award,
      stats: "State recognition"
    },
    {
      year: "2023",
      title: "Growth",
      description: "Expanded to 127 acres with capacity for 1000+ cows",
      icon: MapPin,
      stats: "127 acres facility"
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Introduced AI-powered health monitoring and mobile app",
      icon: Shield,
      stats: "Tech integration"
    }
  ];

  const achievements = [
    { number: "1,284", label: "Cows Rescued", icon: Heart },
    { number: "127", label: "Acres Protected", icon: MapPin },
    { number: "24/7", label: "Emergency Service", icon: Truck },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Volunteers", icon: Users },
    { number: "₹45L+", label: "Funds Raised", icon: Target }
  ];

  const values = [
    {
      title: "Compassion First",
      description: "Every decision we make is guided by compassion for animals and respect for life.",
      icon: Heart
    },
    {
      title: "Transparency",
      description: "We maintain complete transparency in our operations and fund utilization.",
      icon: Shield
    },
    {
      title: "Community Driven",
      description: "We believe in building strong communities that actively participate in animal welfare.",
      icon: Users
    },
    {
      title: "Excellence",
      description: "We strive for excellence in animal care, facility management, and service delivery.",
      icon: Award
    }
  ];

  return (
    <Layout>
      <PageBanner
        title="About Gau Seva Trust"
        subtitle="Dedicated to protecting and caring for cows across India"
        backgroundImage={gaushalaImage}
      />

      {/* Hero Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center bg-card rounded-xl p-6 shadow-card hover:shadow-warm transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <achievement.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Story */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2019, Gau Seva Trust emerged from a simple yet powerful belief: 
                  every cow deserves dignity, care, and protection. What started as a small 
                  shelter for 20 cows has grown into one of India's leading cow welfare organizations.
                </p>
                <p>
                  Our journey began when Dr. Raghav Gupta, a veterinarian with deep compassion 
                  for animals, witnessed the plight of abandoned and injured cows on Delhi's streets. 
                  Determined to make a difference, he established our first sanctuary in Haryana.
                </p>
                <p>
                  Today, we operate across multiple locations, providing emergency rescue services, 
                  medical care, and permanent sanctuary to over 1,200 cows. Our 24/7 ambulance 
                  service has become a lifeline for animals in distress across the Delhi NCR region.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button variant="donate" size="lg">
                  Support Our Mission
                </Button>
                <Button variant="warm" size="lg">
                  Visit Our Gaushala
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={gaushalaImage}
                alt="Our Gaushala"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-card">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">127</div>
                  <div className="text-sm text-muted-foreground">Acres Protected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mission & Vision
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our mission and vision guide every action we take in protecting and caring for cows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-warm transition-all duration-300">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To rescue, protect, and provide sanctuary for cows across India through 
                compassionate care, modern facilities, and community engagement. We are 
                committed to ensuring every cow lives with dignity in a safe, nurturing environment.
              </p>
              <ul className="space-y-2">
                {[
                  "24/7 emergency rescue operations",
                  "Comprehensive veterinary care",
                  "Safe sanctuary environments",
                  "Community education programs"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-warm transition-all duration-300">
              <Award className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To create a network of world-class gaushalas across India where cows 
                receive the highest standard of care. We envision a future where no cow 
                suffers from neglect, and where communities actively participate in their protection.
              </p>
              <ul className="space-y-2">
                {[
                  "National network of sanctuaries",
                  "Zero tolerance for animal suffering",
                  "Community-driven protection",
                  "Technology-enabled care systems"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide our decisions and shape our approach to cow welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-card rounded-2xl p-6 shadow-card hover:shadow-warm transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
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
                className="text-center bg-card rounded-2xl p-6 shadow-card hover:shadow-warm transition-all duration-300 group"
              >
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/10 group-hover:border-primary/30 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-xs text-accent font-medium mb-3">{member.expertise}</p>
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
                  className="flex items-start space-x-6 bg-card rounded-xl p-6 shadow-card hover:shadow-warm transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-glow">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <milestone.icon className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      {milestone.description}
                    </p>
                    <div className="inline-flex items-center bg-accent/50 rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-accent-foreground">
                        {milestone.stats}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Facilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art facilities designed for optimal cow care and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300">
              <img
                src={gaushalaImage}
                alt="Main Gaushala"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Main Gaushala</h3>
                <p className="text-muted-foreground mb-4">
                  Our primary facility spans 127 acres with modern shelters, 
                  medical facilities, and feeding areas.
                </p>
                <ul className="space-y-2">
                  {["1000+ cow capacity", "24/7 medical care", "Natural grazing areas", "Clean water systems"].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300">
              <img
                src={volunteerImage}
                alt="Medical Center"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Medical Center</h3>
                <p className="text-muted-foreground mb-4">
                  Fully equipped veterinary hospital with surgical facilities 
                  and emergency care units.
                </p>
                <ul className="space-y-2">
                  {["Surgical operation theater", "X-ray and ultrasound", "24/7 emergency care", "Quarantine facilities"].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300">
              <img
                src={rescuedCowImage}
                alt="Rescue Operations"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Rescue Operations</h3>
                <p className="text-muted-foreground mb-4">
                  Mobile rescue units and emergency response systems 
                  covering entire Delhi NCR region.
                </p>
                <ul className="space-y-2">
                  {["3 ambulance vehicles", "GPS tracking system", "Emergency response team", "24/7 hotline service"].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Visit Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We welcome visitors, volunteers, and supporters. Come see our work firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-card rounded-2xl p-8 shadow-card hover:shadow-warm transition-all duration-300">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground">
                123 Dharma Path<br />
                New Delhi, India 110001<br />
                <span className="text-sm">45 minutes from central Delhi</span>
              </p>
            </div>
            
            <div className="text-center bg-card rounded-2xl p-8 shadow-card hover:shadow-warm transition-all duration-300">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground">
                24/7 Emergency: +91 98765 43210<br />
                Office: +91 98765 43211<br />
                <span className="text-sm">Always available for emergencies</span>
              </p>
            </div>
            
            <div className="text-center bg-card rounded-2xl p-8 shadow-card hover:shadow-warm transition-all duration-300">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Hours</h3>
              <p className="text-muted-foreground">
                Gaushala Visits: 9 AM - 5 PM<br />
                Office Hours: 10 AM - 6 PM<br />
                <span className="text-sm">Please call ahead to schedule</span>
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="donate" size="xl">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;