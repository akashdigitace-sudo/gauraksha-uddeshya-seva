import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Users, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import volunteerImage from '@/assets/caring-volunteer.jpg';
import gaushalaImage from '@/assets/gaushala.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "Emergency Rescue: +91 98765 43210",
      secondary: "General Inquiry: +91 98765 43211",
      tertiary: "Donations: +91 98765 43212",
      description: "24/7 emergency hotline available"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@gauseva.org",
      secondary: "emergency@gauseva.org",
      tertiary: "donate@gauseva.org",
      description: "We respond within 2 hours"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: "+91 98765 43210",
      secondary: "Quick emergency reporting",
      tertiary: "Share photos/videos",
      description: "Instant response for emergencies"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "123 Dharma Path, New Delhi",
      secondary: "GPS: 28.6139° N, 77.2090° E",
      tertiary: "45 minutes from central Delhi",
      description: "Open for visits 9 AM - 5 PM"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Regular Donor",
      message: "The team's response time is incredible. They rescued a cow from my neighborhood within 30 minutes of my call.",
      rating: 5
    },
    {
      name: "Priya Singh",
      role: "Volunteer",
      message: "Transparent operations and genuine care for animals. I'm proud to be associated with this organization.",
      rating: 5
    },
    {
      name: "Dr. Amit Sharma",
      role: "Veterinarian",
      message: "Their medical facilities are top-notch. The level of care provided to rescued cows is exceptional.",
      rating: 5
    }
  ];

  return (
    <Layout>
      <PageBanner
        title="Get in Touch"
        subtitle="We're here to help and answer any questions about our mission"
        backgroundImage={volunteerImage}
      />

      {/* Quick Contact Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-card rounded-xl p-6 shadow-card">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">&lt; 30 min</div>
              <div className="text-sm text-muted-foreground">Emergency Response</div>
            </div>
            <div className="text-center bg-card rounded-xl p-6 shadow-card">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-success" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center bg-card rounded-xl p-6 shadow-card">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-warning" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Response Rate</div>
            </div>
            <div className="text-center bg-card rounded-xl p-6 shadow-card">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the most convenient way to contact us. We're available 24/7 for emergencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-warm transition-all duration-300 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{method.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p className="font-medium text-foreground">{method.primary}</p>
                  <p>{method.secondary}</p>
                  <p>{method.tertiary}</p>
                </div>
                <p className="text-xs text-accent font-medium">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" variant="donate" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We typically respond within 2 hours during business hours.
                </p>
              </form>
            </div>

            {/* Contact Information & Emergency */}
            <div className="space-y-8">
              {/* Emergency Contact */}
              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Emergency Rescue Service</h3>
                <p className="mb-6 opacity-90">
                  If you see a cow in distress or need immediate rescue services, 
                  call our 24/7 emergency hotline. Our team will respond immediately.
                </p>
                <div className="space-y-4">
                  <Button variant="warm" size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Emergency: +91 98765 43210
                  </Button>
                  <Button variant="warm" size="lg" className="w-full bg-white/20 text-white hover:bg-white/30">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Emergency
                  </Button>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-6">Operating Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Emergency Service</span>
                    <span className="text-success font-bold">24/7 Available</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Office Hours</span>
                    <span className="text-muted-foreground">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium text-foreground">Gaushala Visits</span>
                    <span className="text-muted-foreground">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-foreground">Volunteer Hours</span>
                    <span className="text-muted-foreground">8:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-4">Visit Our Gaushala</h3>
                <div className="bg-gradient-earth rounded-xl h-48 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">
                      Interactive map will be loaded here
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      123 Dharma Path, New Delhi - 110001
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    📍 GPS Coordinates: 28.6139° N, 77.2090° E
                  </p>
                  <p className="text-sm text-muted-foreground">
                    🚗 45 minutes from central Delhi
                  </p>
                  <p className="text-sm text-muted-foreground">
                    🚌 Public transport available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What People Say About Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from donors, volunteers, and supporters who have experienced our service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-warm transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-warning fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.message}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our mission, donations, and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How can I report a cow in distress?",
                  answer: "Call our 24/7 emergency hotline at +91 98765 43210 or send us a WhatsApp message. Our rescue team will respond immediately with GPS tracking."
                },
                {
                  question: "Can I visit the gaushala?",
                  answer: "Yes! Visitors are welcome from 9 AM to 5 PM daily. Please call ahead to schedule your visit and get directions to our facility."
                },
                {
                  question: "How are donations used?",
                  answer: "85% goes directly to cow care, 10% to infrastructure, 3% to emergency fund, and 2% to administration. We provide detailed transparency reports monthly."
                },
                {
                  question: "Do you provide tax exemption certificates?",
                  answer: "Yes, we are registered under Section 80G. You will receive a tax exemption certificate for all donations above ₹500."
                },
                {
                  question: "How can I volunteer?",
                  answer: "We welcome volunteers! Contact us to schedule an orientation session. We have opportunities for feeding, cleaning, medical assistance, and administration."
                },
                {
                  question: "What is your emergency response time?",
                  answer: "Our average emergency response time is under 30 minutes within Delhi NCR. We have GPS-enabled ambulances strategically positioned."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-card hover:shadow-warm transition-all duration-300">
                  <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;