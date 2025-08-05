import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
  };

  return (
    <footer className="bg-gradient-earth border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-primary">
              <Heart className="h-8 w-8 fill-current" />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Gau Seva Trust
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dedicated to protecting, rescuing, and relocating cows across India. 
              Every donation brings us closer to creating safe havens for our sacred animals.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/blogs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Our Blogs
              </Link>
              <Link to="/donations" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Donate Now
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link to="/donation-details/cow-rescue" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cow Rescue Program
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@gauseva.org</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>123 Dharma Path, New Delhi, India 110001</span>
              </div>
            </div>
          </div>

          {/* Newsletter & Quick Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Connected</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email"
                className="text-sm"
              />
              <Button type="submit" variant="default" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
            
            <div className="pt-2">
              <h4 className="font-medium text-foreground text-sm mb-2">Quick Message</h4>
              <form onSubmit={handleContactSubmit} className="space-y-2">
                <Textarea 
                  placeholder="Your message..."
                  className="text-sm min-h-[80px]"
                />
                <Button type="submit" variant="warm" size="sm" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Gau Seva Trust. All rights reserved. Registered under Section 80G of Income Tax Act.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <span>•</span>
              <Link to="/transparency" className="hover:text-primary transition-colors">
                Transparency Report
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;