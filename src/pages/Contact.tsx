import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const breadcrumbItems = [
    { label: 'Contact Us' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

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
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about our mission? Want to volunteer? Need emergency rescue services? 
              We're here to help and would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              
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
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Visit Our Gaushala</h3>
                      <p className="text-muted-foreground">
                        123 Dharma Path<br />
                        New Delhi, India 110001<br />
                        GPS: 28.6139° N, 77.2090° E
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                      <p className="text-muted-foreground">
                        Emergency Rescue: +91 98765 43210<br />
                        General Inquiry: +91 98765 43211<br />
                        Donations: +91 98765 43212
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                      <p className="text-muted-foreground">
                        General: info@gauseva.org<br />
                        Emergency: emergency@gauseva.org<br />
                        Donations: donate@gauseva.org
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Operating Hours</h3>
                      <p className="text-muted-foreground">
                        Gaushala Visits: 9:00 AM - 5:00 PM<br />
                        Office Hours: 10:00 AM - 6:00 PM<br />
                        Emergency Service: 24/7 Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-xl font-bold mb-4">Emergency Rescue Service</h3>
                <p className="mb-4">
                  If you see a cow in distress or need immediate rescue services, 
                  call our 24/7 emergency hotline.
                </p>
                <Button variant="warm" size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Emergency: +91 98765 43210
                </Button>
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-4">Find Us</h3>
                <div className="bg-gradient-earth rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Interactive map will be loaded here
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Located 45 minutes from central Delhi
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How can I report a cow in distress?",
                answer: "Call our 24/7 emergency hotline at +91 98765 43210. Our rescue team will respond immediately."
              },
              {
                question: "Can I visit the gaushala?",
                answer: "Yes! Visitors are welcome from 9 AM to 5 PM. Please call ahead to schedule your visit."
              },
              {
                question: "How are donations used?",
                answer: "100% of donations go directly to cow care - food, medical treatment, shelter, and rescue operations. We provide detailed transparency reports."
              },
              {
                question: "Do you provide tax exemption certificates?",
                answer: "Yes, we are registered under Section 80G. You will receive a tax exemption certificate for all donations."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;